import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Role } from 'prisma/__generated__/prisma-class-generator/role';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { BaseController } from '../common/controllers/base.controller';
import { OrderDto } from '../common/dtos/order.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { AddPermissionDto } from './dtos/add-permission.dto';
import { CreateRoleDto } from './dtos/create-role.dto';
import { FindRoleDto } from './dtos/find-roles.dto';
import { UpdateRoleDto } from './dtos/update-role.dto';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@ApiUnauthorizedResponse()
@ApiBearerAuth()
@Controller('roles')
export class RolesController extends BaseController {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  @ApiCreatedResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post()
  create(
    @Body() createRoleDto: CreateRoleDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.rolesService.create({
      name: createRoleDto.name,
      createdBy: user.username,
      updatedBy: user.username,
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @Get()
  findAll(
    @Query() findRoleDto: FindRoleDto,
    @Query() paginationDto: PaginationDto,
    @Query() orderDto: OrderDto,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    const { page, limit } = paginationDto;
    const { orderField, orderDirection } = orderDto;
    const { name } = findRoleDto;
    const skip = (page - 1) * limit;
    return this.rolesService.findAll({
      skip: +skip,
      take: +limit,
      where: {
        name,
      },
      orderBy: {
        [orderField]: orderDirection,
      },
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiNotFoundResponse()
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    const role = await this.rolesService.findOne({
      id: id,
    });
    if (!role) throw new NotFoundException('Role Not Found');
    return role;
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoleDto: UpdateRoleDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.rolesService.update({
      where: { id: id },
      data: {
        ...updateRoleDto,
        updatedBy: user.username,
      },
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    return this.rolesService.remove({ id: id });
  }

  @ApiCreatedResponse({ type: Role, isArray: false })
  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post('add-permission/:id')
  addPermission(
    @Param('id', ParseIntPipe) id: number,
    @Body() addPermissionDto: AddPermissionDto,
    @GetUser() user: User,
    //@Request() request,
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
                roleId: id,
              },
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              permission: {
                connect: {
                  id: addPermissionDto.permissionId,
                },
              },
            },
          },
        },
      },
    });
  }

  @ApiOkResponse({ type: Role, isArray: false })
  @ApiBadRequestResponse()
  @Post('remove-permission/:id')
  removePermission(
    @Param('id', ParseIntPipe) id: number,
    @Body() removePermission: AddPermissionDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.rolesService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_roleId: {
              permissionId: removePermission.permissionId,
              roleId: id,
            },
          },
        },
      },
    });
  }
}
