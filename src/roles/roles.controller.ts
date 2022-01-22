import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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
import { User } from "@prisma/client";
import { Role } from "src/generated/nestjs-dto/role.entity";
import { GetUser } from "src/common/decorators/get-user.decorator";
import { CreateRoleDto } from "src/generated/nestjs-dto/create-role.dto";
import { FindRoleDto } from "../common/dtos/roles/find-roles.dto";
import { UpdateRoleDto } from "src/generated/nestjs-dto/update-role.dto";
import { AddPermissionDto } from "../common/dtos/roles/add-permission.dto";
import { PaginationDto } from "../common/dtos/pagination.dto";
import { OrderDto } from "../common/dtos/order.dto";
import { BaseController } from "../common/controllers/base.controller";

@ApiTags("Roles")
@ApiUnauthorizedResponse()
@ApiBearerAuth()
@Controller("roles")
export class RolesController extends BaseController {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  @ApiCreatedResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post()
  create(@Body() createRoleDto: CreateRoleDto, @GetUser() user: User) {
    return this.rolesService.create({
      name: createRoleDto.name,
      createdBy: user.username,
      updatedBy: user.username
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @Get()
  findAll(@Query() findRoleDto: FindRoleDto, @Query() paginationDto: PaginationDto, @Query() orderDto: OrderDto) {
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
  findOne(@Param("id", ParseIntPipe) id: number) {
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
    @GetUser() user: User
  ) {
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
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.rolesService.remove({ id: id });
  }

  @ApiCreatedResponse({ type: Role, isArray: false })
  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post("add-permission/:id")
  addPermission(
    @Param("id", ParseIntPipe) id: number,
    @Body() addPermissionDto: AddPermissionDto,
    @GetUser() user: User
  ) {
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
    @GetUser() user: User
  ) {
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
