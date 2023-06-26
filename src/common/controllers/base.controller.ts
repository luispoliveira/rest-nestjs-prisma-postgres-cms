import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PermissionsGuard } from '../guards/permissions.guard';

@UseGuards(JwtAuthGuard, PermissionsGuard)
export class BaseController {}
