import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Role } from "../generated/prisma-nestjs-graphql/role/role.model";
import { BaseResolver } from "../common/resolvers/base.resolver";
import { RolesService } from "./roles.service";
import { PaginationInput } from "../common/graphql/inputs/pagination.input";
import {
  RoleOrderByWithRelationInput
} from "../generated/prisma-nestjs-graphql/role/role-order-by-with-relation.input";
import { RoleWhereInput } from "../generated/prisma-nestjs-graphql/role/role-where.input";
import { RoleWhereUniqueInput } from "../generated/prisma-nestjs-graphql/role/role-where-unique.input";
import { RoleCreateInput } from "../generated/prisma-nestjs-graphql/role/role-create.input";
import { GqlGetUser } from "../common/decorators/gql-get-user.decorator";
import { User } from "@prisma/client";
import { RoleUpdateInput } from "../generated/prisma-nestjs-graphql/role/role-update.input";

@Resolver(of => Role)
export class RolesResolver extends BaseResolver {
  constructor(private readonly rolesService: RolesService) {
    super();
  }

  @Query(returns => [Role])
  RoleGetRoles(
    @Args("pagination", { nullable: true }) paginationInput: PaginationInput,
    @Args("orderBy", { nullable: true }) roleOrderByWithRelationInput: RoleOrderByWithRelationInput,
    @Args("roleWhere", { nullable: true }) roleWhereInput: RoleWhereInput) {
    const skip = (paginationInput.page - 1) * paginationInput.limit;
    return this.rolesService.findAll({
      skip: +skip,
      take: +paginationInput.limit,
      orderBy: roleOrderByWithRelationInput,
      where: roleWhereInput
    });
  }

  @Query(returns => Role)
  RoleGetRole(@Args("roleWhereUnique") roleWhereUniqueInput: RoleWhereUniqueInput) {
    return this.rolesService.findOne(roleWhereUniqueInput);
  }

  @Mutation(returns => Role)
  RoleCreateRole(@Args("roleCreateInput") roleCreateInput: RoleCreateInput,
             @GqlGetUser() user: User) {
    return this.rolesService.create({
      ...roleCreateInput,
      createdBy: user.username,
      updatedBy: user.username
    });
  }

  @Mutation(returns => Role)
  RoleUpdateRole(@Args({ name: "roleId", type: () => Int }) roleId: number,
             @Args("roleUpdateInput") roleUpdateInput: RoleUpdateInput,
             @GqlGetUser() user: User) {
    return this.rolesService.update({
      where: { id: roleId },
      data: {
        ...roleUpdateInput,
        updatedBy: user.username
      }
    });
  }

  @Mutation(returns => Role)
  RoleDeleteRole(@Args({ name: "roleId", type: () => Int }) roleId: number) {
    return this.rolesService.remove({ id: roleId });
  }

  @Mutation(returns => Role)
  RoleAddPermission(@Args({ name: "roleId", type: () => Int }) roleId: number,
                @Args({ name: "permissionId", type: () => Int }) permissionId: number,
                @GqlGetUser() user: User) {
    return this.rolesService.update({
      where: { id: roleId },
      data: {
        updatedBy: user.username,
        permissions: {
          connectOrCreate: {
            where: {
              permissionId_roleId: {
                roleId: roleId,
                permissionId: permissionId
              }
            },
            create: {
              createdBy: user.username,
              updatedBy: user.username,
              permission: {
                connect: {
                  id: permissionId
                }
              }
            }
          }
        }
      }
    });
  }

  @Mutation(returns => Role)
  RoleRemovePermission(@Args({ name: "roleId", type: () => Int }) roleId: number,
                   @Args({ name: "permissionId", type: () => Int }) permissionId: number,
                   @GqlGetUser() user: User) {
    return this.rolesService.update({
      where: { id: roleId },
      data: {
        updatedBy: user.username,
        permissions: {
          delete: {
            permissionId_roleId: {
              permissionId: permissionId,
              roleId: roleId
            }
          }
        }
      }
    });
  }
}
