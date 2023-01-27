import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PermissionsGuard } from '../guards/permissions.guard';
import { RolesGuard } from '../guards/roles.guard';

@UseGuards(JwtAuthGuard, PermissionsGuard, RolesGuard)
export class BaseController {}
