import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from 'src/generated/prisma-nestjs-graphql/user/user-order-by-with-relation.input';
import { UserWhereInput } from 'src/generated/prisma-nestjs-graphql/user/user-where.input';
import { User } from 'src/generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from './users.service';
import { PaginationInput } from '../common/graphql/inputs/pagination.input';
import { UserWhereUniqueInput } from '../generated/prisma-nestjs-graphql/user/user-where-unique.input';
import { UserCreateInput } from '../generated/prisma-nestjs-graphql/user/user-create.input';
import { UserUpdateInput } from '../generated/prisma-nestjs-graphql/user/user-update.input';
import { BaseResolver } from '../common/resolvers/base.resolver';
import { GqlGetUser } from '../common/decorators/gql-get-user.decorator';
import { NotFoundException } from '@nestjs/common';

@Resolver((of) => User)
export class UsersResolver extends BaseResolver {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @Query((returns) => [User])
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

  @Query((returns) => User)
  async UserGetUser(
    @Args('userWhereUnique') userWhereUniqueInput: UserWhereUniqueInput,
  ) {
    const user = await this.usersService.findOne(userWhereUniqueInput);
    if (!user) throw new NotFoundException('User not Found');
    return user;
  }

  @Mutation((returns) => User)
  UserCreateUser(
    @Args('userCreateInput') userCreateInput: UserCreateInput,
    @GqlGetUser() user: User,
  ) {
    return this.usersService.create({
      ...userCreateInput,
      createdBy: user.username,
      updatedBy: user.username,
    });
  }

  @Mutation((returns) => User)
  UserUpdateUser(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args('userUpdateInput') userUpdateInput: UserUpdateInput,
    @GqlGetUser() user: User,
  ) {
    return this.usersService.update({
      where: { id: userId },
      data: { ...userUpdateInput, updatedBy: user.username },
    });
  }

  @Mutation((returns) => User)
  UserDeleteUser(@Args({ name: 'userId', type: () => Int }) userId: number) {
    return this.usersService.remove({ id: userId });
  }

  @Mutation((returns) => User)
  UserAddRole(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @GqlGetUser() user: User,
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

  @Mutation((returns) => User)
  UserRemoveRole(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @GqlGetUser() user: User,
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

  @Mutation((returns) => User)
  UserAddPermission(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'permissionsId', type: () => Int }) permissionId: number,
    @GqlGetUser() user: User,
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

  @Mutation((returns) => User)
  UserRemovePermission(
    @Args({ name: 'userId', type: () => Int }) userId: number,
    @Args({ name: 'permissionsId', type: () => Int }) permissionId: number,
    @GqlGetUser() user: User,
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
