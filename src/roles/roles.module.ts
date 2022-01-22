import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { UsersModule } from "../users/users.module";
import { RolesResolver } from './roles.resolver';

@Module({
  imports: [UsersModule],
  controllers: [RolesController],
  providers: [RolesService, RolesResolver]
})
export class RolesModule {
}
