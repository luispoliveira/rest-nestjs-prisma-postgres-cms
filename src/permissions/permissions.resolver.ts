import { Args, Query, Resolver } from '@nestjs/graphql';
import { BaseResolver } from '../common/resolvers/base.resolver';
import { PermissionsService } from './permissions.service';
import { PaginationInput } from '../common/graphql/inputs/pagination.input';
import { NotFoundException } from '@nestjs/common';
import {
  Permission,
  PermissionOrderByWithRelationInput,
  PermissionWhereInput,
  PermissionWhereUniqueInput,
} from '../../prisma/__generated__/prisma-nestjs-graphql';

@Resolver((of) => Permission)
export class PermissionsResolver extends BaseResolver {
  constructor(private readonly permissionsService: PermissionsService) {
    super();
  }

  @Query((results) => [Permission])
  PermissionGetPermissions(
    @Args('pagination', { nullable: true }) paginationInput: PaginationInput,
    @Args('orderBy', { nullable: true })
    permissionOrderByWithRelationInput: PermissionOrderByWithRelationInput,
    @Args('permissionWhere', { nullable: true })
    permissionWhereInput: PermissionWhereInput,
  ) {
    const skip = (paginationInput.page - 1) * paginationInput.limit;
    return this.permissionsService.findAll({
      skip: +skip,
      take: +paginationInput.limit,
      orderBy: permissionOrderByWithRelationInput,
      where: permissionWhereInput,
    });
  }

  @Query((results) => Permission)
  async PermissionGetPermission(
    @Args('permissionWhereUnique')
    permissionWhereUniqueInput: PermissionWhereUniqueInput,
  ) {
    const permission = await this.permissionsService.findOne(
      permissionWhereUniqueInput,
    );
    if (!permission) throw new NotFoundException('Permission Not Found');
    return permission;
  }
}
