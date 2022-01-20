import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleEnum } from 'src/roles/enums/role.enum';
import { UsersService } from 'src/users/users.service';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { User } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<RoleEnum[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) return true;

    const { user }: { user: User } = context.switchToHttp().getRequest();

    const stringRoles: string[] = [];
    const { roles } = await this.usersService.findOne({ id: user.id });
    roles.map((role) => stringRoles.push(role.role.name));

    return requiredRoles.some((role: RoleEnum) => stringRoles.includes(role));
  }
}
