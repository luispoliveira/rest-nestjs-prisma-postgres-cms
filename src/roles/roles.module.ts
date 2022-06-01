import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { UsersModule } from '../users/users.module';
import { RolesResolver } from './roles.resolver';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [RolesController],
  providers: [RolesService, RolesResolver],
  exports: [RolesService],
})
export class RolesModule {}
