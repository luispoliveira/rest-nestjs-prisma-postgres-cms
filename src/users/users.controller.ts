import {
  Body,
  Controller,
  Delete,
  Get,
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
import { User } from 'prisma/__generated__/prisma-class-generator/user';
import { BaseController } from 'src/common/controllers/base.controller';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import { OrderDto } from '../common/dtos/order.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { AddRemovePermissionDto } from './dtos/add-remove-permission.dto';
import { AddRemoveRoleDto } from './dtos/add-remove-role.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { FindUserDto } from './dtos/find-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@Controller('users')
export class UsersController extends BaseController {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @ApiCreatedResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post()
  create(
    @Body() createUserDto: CreateUserDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      createdBy: user.username,
      updatedBy: user.username,
    });
  }

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  findAll(
    @Query() findUserDto: FindUserDto,
    @Query() paginationDto: PaginationDto,
    @Query() orderDto: OrderDto,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    const { page, limit } = paginationDto;
    const { orderDirection, orderField } = orderDto;
    const {} = findUserDto;
    const skip = (page - 1) * limit;
    return this.usersService.findAll({
      skip: +skip,
      take: +limit,
      where: {},
      orderBy: {
        [orderField]: orderDirection,
      },
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiNotFoundResponse()
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    const userFinded = await this.usersService.findOne({ id: id });
    if (!userFinded) {
      throw new Error('User not found');
    }
    return userFinded;
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        password: updateUserDto.password,
      },
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number,
    //@GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.remove({ id: id });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post('add-role/:id')
  addRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() addRole: AddRemoveRoleDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        roles: {
          connectOrCreate: {
            where: {
              roleId_userId: {
                roleId: addRole.roleId,
                userId: id,
              },
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              role: {
                connect: {
                  id: addRole.roleId,
                },
              },
            },
          },
        },
      },
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post('remove-role/:id')
  removeRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() removeRole: AddRemoveRoleDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        roles: {
          delete: {
            roleId_userId: {
              roleId: removeRole.roleId,
              userId: id,
            },
          },
        },
      },
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post('add-permission/:id')
  addPermission(
    @Param('id', ParseIntPipe) id: number,
    @Body() addPermission: AddRemovePermissionDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        permissions: {
          connectOrCreate: {
            where: {
              permissionId_userId: {
                permissionId: addPermission.permissionId,
                userId: id,
              },
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              permission: {
                connect: {
                  id: addPermission.permissionId,
                },
              },
            },
          },
        },
      },
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post('remove-permission/:id')
  removePermission(
    @Param('id', ParseIntPipe) id: number,
    @Body() removePermission: AddRemovePermissionDto,
    @GetUser() user: User,
    //@Request() request,
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_userId: {
              permissionId: removePermission.permissionId,
              userId: id,
            },
          },
        },
      },
    });
  }
}
