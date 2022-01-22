import { Args, Query, Resolver } from "@nestjs/graphql";
import { BaseResolver } from "../common/resolvers/base.resolver";
import { PermissionsService } from "./permissions.service";
import { Permission } from "../generated/prisma-nestjs-graphql/permission/permission.model";
import { PaginationInput } from "../common/graphql/inputs/pagination.input";
import {
  PermissionOrderByWithRelationInput
} from "../generated/prisma-nestjs-graphql/permission/permission-order-by-with-relation.input";
import { RoleWhereInput } from "../generated/prisma-nestjs-graphql/role/role-where.input";
import { PermissionWhereInput } from "../generated/prisma-nestjs-graphql/permission/permission-where.input";
import {
  PermissionWhereUniqueInput
} from "../generated/prisma-nestjs-graphql/permission/permission-where-unique.input";

@Resolver(of => Permission)
export class PermissionsResolver extends BaseResolver {
  constructor(private readonly permissionsService: PermissionsService) {
    super();
  }

  @Query(results => [Permission])
  PermissionGetPermissions(
    @Args("pagination", { nullable: true }) paginationInput: PaginationInput,
    @Args("orderBy", { nullable: true }) permissionOrderByWithRelationInput: PermissionOrderByWithRelationInput,
    @Args("permissionWhere", { nullable: true }) permissionWhereInput: PermissionWhereInput) {
    const skip = (paginationInput.page - 1) * paginationInput.limit;
    return this.permissionsService.findAll({
      skip: +skip,
      take: +paginationInput.limit,
      orderBy: permissionOrderByWithRelationInput,
      where: permissionWhereInput
    });
  }

  @Query(results => Permission)
  PermissionGetPermission(@Args("permissionWhereUnique") permissionWhereUniqueInput: PermissionWhereUniqueInput) {
    return this.permissionsService.findOne(permissionWhereUniqueInput);
  }
}
