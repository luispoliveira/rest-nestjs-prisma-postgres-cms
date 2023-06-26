import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayloadType } from 'src/shared';
import { UserValidate } from 'src/shared/types/user-validate.type';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    const jwtSecretKey = configService.get<{
      ignoreExpiration: boolean;
      access: string;
      expiresIn: string;
    }>('jwtSecretKey');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: jwtSecretKey.ignoreExpiration,
      secretOrKey: jwtSecretKey.access,
    });
  }

  async validate(payload: JwtPayloadType): Promise<UserValidate> {
    const { userId } = payload;

    const user = await this.usersService.findOne({
      where: { id: userId },
    });

    if (!user) throw new UnauthorizedException();

    return {
      ...user,
    };
  }
}
