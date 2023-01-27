import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '@prisma/client';
import { PermissionEnum } from 'src/permissions/enums/permission.enum';
import { UsersService } from 'src/users/users.service';
import { PERMISSIONS_KEY } from '../decorators/permission.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const requiredPermissions = this.reflector.getAllAndOverride<
      PermissionEnum[]
    >(PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);

    if (!requiredPermissions) return true;

    const { user }: { user: User } = context.switchToHttp().getRequest();

    const stringPermissions: string[] = [];

    const { permissions } = await this.usersService.findOne({ id: user.id });

    permissions.map((permission) =>
      stringPermissions.push(permission.permission.name),
    );

    return requiredPermissions.some((permission) =>
      stringPermissions?.includes(permission),
    );
  }
}
