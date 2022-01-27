import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Request,
  ParseIntPipe
} from "@nestjs/common";
import { RolesService } from "./roles.service";
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { LogTypes, User } from "@prisma/client";
import { GetUser } from "src/common/decorators/get-user.decorator";
import { FindRoleDto } from "./dtos/find-roles.dto";
import { AddPermissionDto } from "./dtos/add-permission.dto";
import { PaginationDto } from "../common/dtos/pagination.dto";
import { OrderDto } from "../common/dtos/order.dto";
import { BaseController } from "../common/controllers/base.controller";
import { Role } from "../common/entities/role.entity";
import { CreateRoleDto } from "./dtos/create-role.dto";
import { UpdateRoleDto } from "./dtos/update-role.dto";
import { LogService } from "../logger/log.service";

@ApiTags("Roles")
@ApiUnauthorizedResponse()
@ApiBearerAuth()
@Controller("roles")
export class RolesController extends BaseController {
  constructor(private readonly rolesService: RolesService, private readonly logService: LogService) {
    super(logService, RolesController.name);
  }

  @ApiCreatedResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post()
  create(@Body() createRoleDto: CreateRoleDto, @GetUser() user: User, @Request() request) {
    this.logger.audit(LogTypes.log, "Role:create accessed", user.username, {
      route: request.url,
      action: this.create.name,
      dto: createRoleDto,
      params: request.params,
      query: request.query,
      body: request.body
    });
    return this.rolesService.create({
      name: createRoleDto.name,
      createdBy: user.username,
      updatedBy: user.username
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @Get()
  findAll(@Query() findRoleDto: FindRoleDto, @Query() paginationDto: PaginationDto, @Query() orderDto: OrderDto, @GetUser() user: User, @Request() request) {
    this.logger.audit(LogTypes.log, "Role:findAll accessed", user.username, {
      route: request.url,
      action: this.findAll.name,
      dto: findRoleDto,
      params: request.params,
      query: request.query,
      body: request.body
    });

    const { page, limit } = paginationDto;
    const { orderField, orderDirection } = orderDto;
    const { name } =
      findRoleDto;
    const skip = (page - 1) * limit;
    return this.rolesService.findAll({
      skip: +skip,
      take: +limit,
      where: {
        name
      },
      orderBy: {
        [orderField]: orderDirection
      }
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiNotFoundResponse()
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number, @GetUser() user: User, @Request() request) {
    this.logger.audit(LogTypes.log, "Role:findOne accessed", user.username, {
      route: request.url,
      action: this.findOne.name,
      dto: {},
      params: request.params,
      query: request.query,
      body: request.body
    });
    return this.rolesService.findOne({
      id: id
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto,
    @GetUser() user: User,
    @Request() request
  ) {
    this.logger.audit(LogTypes.log, "Role:update accessed", user.username, {
      route: request.url,
      action: this.update.name,
      dto: updateRoleDto,
      params: request.params,
      query: request.query,
      body: request.body
    });

    return this.rolesService.update({
      where: { id: id },
      data: {
        ...updateRoleDto,
        updatedBy: user.username
      }
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number, @GetUser() user: User, @Request() request) {
    this.logger.audit(LogTypes.log, "Role:remove accessed", user.username, {
      route: request.url,
      action: this.remove.name,
      dto: {},
      params: request.params,
      query: request.query,
      body: request.body
    });
    return this.rolesService.remove({ id: id });
  }

  @ApiCreatedResponse({ type: Role, isArray: false })
  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post("add-permission/:id")
  addPermission(
    @Param("id", ParseIntPipe) id: number,
    @Body() addPermissionDto: AddPermissionDto,
    @GetUser() user: User,
    @Request() request
  ) {
    this.logger.audit(LogTypes.log, "Role:addPermission accessed", user.username, {
      route: request.url,
      action: this.addPermission.name,
      dto: addPermissionDto,
      params: request.params,
      query: request.query,
      body: request.body
    });

    return this.rolesService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        permissions: {
          connectOrCreate: {
            where: {
              permissionId_roleId: {
                permissionId: addPermissionDto.permissionId,
                roleId: id
              }
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              permission: {
                connect: {
                  id: addPermissionDto.permissionId
                }
              }
            }
          }
        }
      }
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post("remove-permission/:id")
  removePermission(
    @Param("id", ParseIntPipe) id: number,
    @Body() removePermission: AddPermissionDto,
    @GetUser() user: User,
    @Request() request
  ) {
    this.logger.audit(LogTypes.log, "Role:removePermission accessed", user.username, {
      route: request.url,
      action: this.removePermission.name,
      dto: removePermission,
      params: request.params,
      query: request.query,
      body: request.body
    });

    return this.rolesService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_roleId: {
              permissionId: removePermission.permissionId,
              roleId: id
            }
          }
        }
      }
    });
  }
}
