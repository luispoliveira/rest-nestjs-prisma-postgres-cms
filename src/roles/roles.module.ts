import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { RolesController } from './roles.controller';
import { RolesResolver } from './roles.resolver';
import { RolesService } from './roles.service';

@Module({
  imports: [UsersModule],
  controllers: [RolesController],
  providers: [RolesService, RolesResolver],
  exports: [RolesService],
})
export class RolesModule {}
