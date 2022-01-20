import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { JwtPayloadInterface } from "../../common/interfaces/jwt-payload.interface";
import { User } from "@prisma/client";
import { UsersService } from "../../users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService,
              private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("jwtSecretKey"),
    });
  }

  async validate(payload: JwtPayloadInterface): Promise<User> {
    const { userId } = payload;
    try {
      const user = await this.usersService.findOne({
        id: userId
      });
      return user;
    } catch (e) {
      throw new UnauthorizedException("User not Found");
    }
  }
}
