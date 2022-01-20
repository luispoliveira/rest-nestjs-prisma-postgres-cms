import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./strategys/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LocalStrategy } from "./strategys/local.strategy";

@Module({
  imports: [UsersModule, JwtModule.registerAsync({
    useFactory: async (config: ConfigService) => {
      return {
        secret: config.get("jwtSecretKey"),
        signOptions: {
          expiresIn: "60m"
        }
      };
    },
    inject: [ConfigService]
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {
}
