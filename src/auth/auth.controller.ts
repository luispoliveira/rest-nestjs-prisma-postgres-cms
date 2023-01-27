import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/common/decorators/is-public.decorator';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RecoverDto } from './dtos/recover.dto';
import { ResetDto } from './dtos/reset.dto';

import { User } from 'prisma/__generated__/prisma-class-generator/user';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOkResponse({
    schema: {
      example: {
        accessToken: 'saDJHASDJIAJOKNIOI0',
        userId: 123,
        username: 'SuckMikeCox',
      },
    },
  })
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: LoginDto, @Request() request) {
    loginDto = loginDto;
    //const { password, ...result } = loginDto;

    return this.authService.login(request.user);
  }

  @ApiCreatedResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Public()
  @Post('sign-up')
  async signUp(
    @Body() createUserDto: CreateUserDto,
    //@Request() request
  ) {
    return this.authService.signUp({
      username: createUserDto.username,
      email: createUserDto.email,
      password: createUserDto.password,
    });
  }

  @ApiOkResponse({
    schema: {
      example: { message: 'A reset email has been sent to your email.' },
    },
  })
  @ApiNotFoundResponse()
  @Public()
  @Post('recover-password')
  async recoverPassword(
    @Body() recoverDto: RecoverDto,
    //@Request() request
  ) {
    await this.authService.recoverPassword(recoverDto.email);
    return { message: 'A reset email has been sent to your email.' };
  }

  @ApiOkResponse({
    schema: {
      example: { message: 'Your password has been updated.' },
    },
  })
  @ApiBadRequestResponse()
  @Public()
  @Post('reset-password')
  async resetPassword(
    @Body() resetDto: ResetDto,
    //@Request() request
  ) {
    await this.authService.resetPassword(
      resetDto.resetToken,
      resetDto.password,
    );
    return {
      message: 'Your password has been updated.',
    };
  }
}
