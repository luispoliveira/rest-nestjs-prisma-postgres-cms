import { Module } from "@nestjs/common";
import { PermissionsService } from "./permissions.service";
import { PermissionsController } from "./permissions.controller";
import { UsersModule } from "../users/users.module";
import { PermissionsResolver } from './permissions.resolver';

@Module({
  imports: [UsersModule],
  controllers: [PermissionsController],
  providers: [PermissionsService, PermissionsResolver]
})
export class PermissionsModule {
}
