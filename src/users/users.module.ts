import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UsersResolver } from "./users.resolver";
import { UsersCommand } from "./users.command";
import { LoggerModule } from "../logger/logger.module";

@Module({
  imports: [LoggerModule],
  controllers: [UsersController],
  providers: [UsersService, UsersResolver, UsersCommand],
  exports: [UsersService]
})
export class UsersModule {
}
