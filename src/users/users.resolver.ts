import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetUser } from 'src/common/decorators/get-user.decorator';
import {
  User,
  UserCreateInput,
  UserOrderByWithRelationInput,
  UserUpdateInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from '../../prisma/__generated__/prisma-nestjs-graphql';
import { PaginationInput } from '../common/graphql/inputs/pagination.input';
import { BaseResolver } from '../common/resolvers/base.resolver';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver extends BaseResolver {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @Query(() => [User])
  UserGetUsers(
    @Args('pagination', { nullable: true }) paginationInput: PaginationInput,
    @Args('orderBy', { nullable: true })
    userOrderByWithRelationInput: UserOrderByWithRelationInput,
    @Args('userWhere', { nullable: true }) userWhereInput: UserWhereInput,
  ) {
    const skip = (paginationInput.page - 1) * paginationInput.limit;
    return this.usersService.findAll({
      skip: +skip,
      take: +paginationInput.limit,
      orderBy: userOrderByWithRelationInput,
      where: userWhereInput,
    });
  }

  @Query(() => User)
  async UserGetUser(
    @Args('userWhereUnique') userWhereUniqueInput: UserWhereUniqueInput,
  ) {
    const user = await this.usersService.findOne(userWhereUniqueInput);
    if (!user) throw new NotFoundException('User not Found');
    return user;
  }

  @Mutation(() => User)
  UserCreateUser(
    @Args('userCreateInput') userCreateInput: UserCreateInput,
    @GetUser() user: User,
  ) {
    return this.usersService.create({
      ...userCreateInput,
      createdBy: user.username,
      updatedBy: user.username,
    });
  }

  @Mutation(() => User)
  UserUpdateUser(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args('userUpdateInput') userUpdateInput: UserUpdateInput,
    @GetUser() user: User,
  ) {
    return this.usersService.update({
      where: { id: userId },
      data: { ...userUpdateInput, updatedBy: user.username },
    });
  }

  @Mutation(() => User)
  UserDeleteUser(@Args({ name: 'userId', type: () => Int }) userId: number) {
    return this.usersService.remove({ id: userId });
  }

  @Mutation(() => User)
  UserAddRole(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @GetUser() user: User,
  ) {
    return this.usersService.update({
      where: { id: userId },
      data: {
        updatedBy: user.username,
        roles: {
          connectOrCreate: {
            where: {
              roleId_userId: {
                roleId: roleId,
                userId: userId,
              },
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              role: {
                connect: {
                  id: roleId,
                },
              },
            },
          },
        },
      },
    });
  }

  @Mutation(() => User)
  UserRemoveRole(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @GetUser() user: User,
  ) {
    return this.usersService.update({
      where: { id: userId },
      data: {
        updatedBy: user.username,
        roles: {
          delete: {
            roleId_userId: {
              roleId: roleId,
              userId: userId,
            },
          },
        },
      },
    });
  }

  @Mutation(() => User)
  UserAddPermission(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'permissionsId', type: () => Int }) permissionId: number,
    @GetUser() user: User,
  ) {
    return this.usersService.update({
      where: { id: userId },
      data: {
        updatedBy: user.username,
        permissions: {
          connectOrCreate: {
            where: {
              permissionId_userId: {
                permissionId: permissionId,
                userId: userId,
              },
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              permission: {
                connect: {
                  id: permissionId,
                },
              },
            },
          },
        },
      },
    });
  }

  @Mutation(() => User)
  UserRemovePermission(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'permissionsId', type: () => Int }) permissionId: number,
    @GetUser() user: User,
  ) {
    return this.usersService.update({
      where: { id: userId },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_userId: {
              permissionId: permissionId,
              userId: userId,
            },
          },
        },
      },
    });
  }
}
