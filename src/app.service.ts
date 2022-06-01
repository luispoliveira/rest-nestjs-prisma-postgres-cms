import { Injectable, OnModuleInit } from '@nestjs/common';
import { PermissionsService } from './permissions/permissions.service';
import { RolesService } from './roles/roles.service';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly rolesService: RolesService,
    private readonly permissionsService: PermissionsService,
    private readonly usersService: UsersService,
  ) {}
  
  async onModuleInit() {
    await this.rolesService.ensureDefaultRoles();
    await this.permissionsService.ensureDefaultPermissions();
    await this.usersService.ensureAdminUser();
  }
}
