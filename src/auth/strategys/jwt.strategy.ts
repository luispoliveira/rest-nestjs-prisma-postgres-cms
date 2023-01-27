import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayloadInterface } from '../../common/interfaces/jwt-payload.interface';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwtSecretKey'),
    });
  }

  async validate(payload: JwtPayloadInterface): Promise<User> {
    const { userId } = payload;
    try {
      const user = await this.usersService.findOne({
        id: userId,
      });
      return user;
    } catch (e) {
      throw new UnauthorizedException('User not Found');
    }
  }
}
