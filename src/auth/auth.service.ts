import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { PasswordUtil } from '../utils/password.util';
import { Prisma, User } from '@prisma/client';
import { LoginResponseInterface } from './interfaces/login-response.interface';
import { JwtPayloadInterface } from '../common/interfaces/jwt-payload.interface';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    let user: User = null;

    try {
      user = await this.usersService.findOne({
        username: username,
      });
    } catch (e) {
      return null;
    }

    if (user) {
      if (await PasswordUtil.compare(user.password, password)) {
        const { password, ...result } = user;
        return result;
      } else {
        throw new UnauthorizedException('Username/Password does not match');
      }
    } else {
      return null;
    }
  }

  async login(user: User): Promise<LoginResponseInterface> {
    const payload: JwtPayloadInterface = {
      userId: user.id,
      username: user.username,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      userId: user.id,
      username: user.username,
    };
  }

  async signUp(data: Prisma.UserCreateInput) {
    const user = await this.usersService.create(data);
    const {
      password,
      resetPasswordExpires,
      resetPasswordToken,
      isActive,
      ...result
    } = user;
    return result;
  }

  async recoverPassword(email: string) {
    const user = await this.usersService.findOne({
      email: email,
    });

    if (!user) throw new NotFoundException('Email not found');
  }

  async resetPassword(resetToken: string, password: string) {
    const user = await this.usersService.findOne({
      resetPasswordToken: resetToken,
    });

    if (!user) throw new BadRequestException('Reset Token does not exist');

    if (user.resetPasswordExpires < new Date())
      throw new BadRequestException('Reset Token has expired');

    await this.usersService.update({
      where: { id: user.id },
      data: {
        password: password,
        resetPasswordExpires: null,
        resetPasswordToken: null,
      },
    });
  }

  private async generatePasswordReset(user: User) {
    const expirationDate = Date.now() + 3600000;

    await this.usersService.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: randomBytes(20).toString('hex'),
        resetPasswordExpires: new Date(expirationDate),
      },
    });
  }
}
