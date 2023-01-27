import { UseGuards, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { PermissionsGuard } from '../guards/permissions.guard';
import { RolesGuard } from '../guards/roles.guard';

@UseInterceptors(LoggerInterceptor)
@UseGuards(JwtAuthGuard, RolesGuard, PermissionsGuard)
export class BaseResolver {}
