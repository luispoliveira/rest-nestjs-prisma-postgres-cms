import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { PermissionsController } from './permissions.controller';
import { PermissionsResolver } from './permissions.resolver';
import { PermissionsService } from './permissions.service';

@Module({
  imports: [UsersModule],
  controllers: [PermissionsController],
  providers: [PermissionsService, PermissionsResolver],
  exports: [PermissionsService],
})
export class PermissionsModule {}
