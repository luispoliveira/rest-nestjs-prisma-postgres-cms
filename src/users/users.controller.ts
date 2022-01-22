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
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse
} from "@nestjs/swagger";
import { GetUser } from "src/common/decorators/get-user.decorator";
import { AddRemovePermissionDto } from "../common/dtos/users/add-remove-permission.dto";
import { AddRemoveRoleDto } from "../common/dtos/users/add-remove-role.dto";
import { FindUserDto } from "../common/dtos/users/find-user.dto";
import { UsersService } from "./users.service";
import { User } from "../common/entities/user.entity";
import { CreateUserDto } from "../common/dtos/users/create-user.dto";
import { UpdateUserDto } from "../common/dtos/users/update-user.dto";
import { PaginationDto } from "../common/dtos/pagination.dto";
import { OrderDto } from "../common/dtos/order.dto";
import { BaseController } from "../common/controllers/base.controller";

@ApiTags("Users")
@ApiBearerAuth()
@ApiUnauthorizedResponse()
@Controller("users")
export class UsersController extends BaseController {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @ApiCreatedResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post()
  create(@Body() createUserDto: CreateUserDto, @GetUser() user: User) {
    return this.usersService.create({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
      createdBy: user.username,
      updatedBy: user.username
    });
  }

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  findAll(@Query() findUserDto: FindUserDto, @Query() paginationDto: PaginationDto, @Query() orderDto: OrderDto) {
    const { page, limit } = paginationDto;
    const { orderDirection, orderField } = orderDto;
    const {} =
      findUserDto;
    const skip = (page - 1) * limit;
    return this.usersService.findAll({
      skip: +skip,
      take: +limit,
      where: {},
      orderBy: {
        [orderField]: orderDirection
      }
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiNotFoundResponse()
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.findOne({ id: id });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Patch(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        password: updateUserDto.password
      }
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number) {
    return this.usersService.remove({ id: id });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post("add-role/:id")
  addRole(
    @Param("id", ParseIntPipe) id: number,
    @Body() addRole: AddRemoveRoleDto,
    @GetUser() user: User
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
                userId: id
              }
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              role: {
                connect: {
                  id: addRole.roleId
                }
              }
            }
          }
        }
      }
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post("remove-role/:id")
  removeRole(
    @Param("id", ParseIntPipe) id: number,
    @Body() removeRole: AddRemoveRoleDto,
    @GetUser() user: User
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        roles: {
          delete: {
            roleId_userId: {
              roleId: removeRole.roleId,
              userId: id
            }
          }
        }
      }
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post("add-permission/:id")
  addPermission(
    @Param("id", ParseIntPipe) id: number,
    @Body() addPermission: AddRemovePermissionDto,
    @GetUser() user: User
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
                userId: id
              }
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              permission: {
                connect: {
                  id: addPermission.permissionId
                }
              }
            }
          }
        }
      }
    });
  }

  @ApiOkResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Post("remove-permission/:id")
  removePermission(
    @Param("id", ParseIntPipe) id: number,
    @Body() removePermission: AddRemovePermissionDto,
    @GetUser() user: User
  ) {
    return this.usersService.update({
      where: { id: id },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_userId: {
              permissionId: removePermission.permissionId,
              userId: id
            }
          }
        }
      }
    });
  }
}
