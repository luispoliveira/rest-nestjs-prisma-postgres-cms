import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BaseResolver } from '../common/resolvers/base.resolver';
import { RolesService } from './roles.service';
import { PaginationInput } from '../common/graphql/inputs/pagination.input';
import { GqlGetUser } from '../common/decorators/gql-get-user.decorator';
import { User } from '@prisma/client';
import { NotFoundException } from '@nestjs/common';
import {
  Role,
  RoleCreateInput,
  RoleOrderByWithRelationInput,
  RoleUpdateInput,
  RoleWhereInput,
  RoleWhereUniqueInput,
} from '../../prisma/__generated__/prisma-nestjs-graphql';

@Resolver((of) => Role)
export class RolesResolver extends BaseResolver {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  @Query((returns) => [Role])
  RoleGetRoles(
    @Args('pagination', { nullable: true }) paginationInput: PaginationInput,
    @Args('orderBy', { nullable: true })
    roleOrderByWithRelationInput: RoleOrderByWithRelationInput,
    @Args('roleWhere', { nullable: true }) roleWhereInput: RoleWhereInput,
  ) {
    const skip = (paginationInput.page - 1) * paginationInput.limit;
    return this.rolesService.findAll({
      skip: +skip,
      take: +paginationInput.limit,
      orderBy: roleOrderByWithRelationInput,
      where: roleWhereInput,
    });
  }

  @Query((returns) => Role)
  async RoleGetRole(
    @Args('roleWhereUnique') roleWhereUniqueInput: RoleWhereUniqueInput,
  ) {
    const role = await this.rolesService.findOne(roleWhereUniqueInput);
    if (!role) throw new NotFoundException('Role Not Found');
    return role;
  }

  @Mutation((returns) => Role)
  RoleCreateRole(
    @Args('roleCreateInput') roleCreateInput: RoleCreateInput,
    @GqlGetUser() user: User,
  ) {
    return this.rolesService.create({
      ...roleCreateInput,
      createdBy: user.username,
      updatedBy: user.username,
    });
  }

  @Mutation((returns) => Role)
  RoleUpdateRole(
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @Args('roleUpdateInput') roleUpdateInput: RoleUpdateInput,
    @GqlGetUser() user: User,
  ) {
    return this.rolesService.update({
      where: { id: roleId },
      data: {
        ...roleUpdateInput,
        updatedBy: user.username,
      },
    });
  }

  @Mutation((returns) => Role)
  RoleDeleteRole(@Args({ name: 'roleId', type: () => Int }) roleId: number) {
    return this.rolesService.remove({ id: roleId });
  }

  @Mutation((returns) => Role)
  RoleAddPermission(
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @Args({ name: 'permissionId', type: () => Int }) permissionId: number,
    @GqlGetUser() user: User,
  ) {
    return this.rolesService.update({
      where: { id: roleId },
      data: {
        updatedBy: user.username,
        permissions: {
          connectOrCreate: {
            where: {
              permissionId_roleId: {
                roleId: roleId,
                permissionId: permissionId,
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

  @Mutation((returns) => Role)
  RoleRemovePermission(
    @Args({ name: 'roleId', type: () => Int }) roleId: number,
    @Args({ name: 'permissionId', type: () => Int }) permissionId: number,
    @GqlGetUser() user: User,
  ) {
    return this.rolesService.update({
      where: { id: roleId },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_roleId: {
              permissionId: permissionId,
              roleId: roleId,
            },
          },
        },
      },
    });
  }
}
