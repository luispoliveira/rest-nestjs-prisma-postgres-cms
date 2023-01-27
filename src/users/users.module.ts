import { Module } from '@nestjs/common';
import { UsersCommand } from './users.command';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersResolver, UsersCommand],
  exports: [UsersService],
})
export class UsersModule {}
