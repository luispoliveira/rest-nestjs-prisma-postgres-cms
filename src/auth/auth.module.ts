import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./strategys/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { LocalStrategy } from "./strategys/local.strategy";
import { AuthResolver } from "./auth.resolver";
import { LoggerModule } from "../logger/logger.module";

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get("jwtSecretKey"),
          signOptions: {
            expiresIn: "60m"
          }
        };
      },
      inject: [ConfigService]
    }),
    LoggerModule],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
  controllers: [AuthController]
})
export class AuthModule {
}
