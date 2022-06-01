import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { UsersModule } from '../users/users.module';
import { PermissionsResolver } from './permissions.resolver';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [PermissionsController],
  providers: [PermissionsService, PermissionsResolver],
  exports: [PermissionsService],
})
export class PermissionsModule {}
