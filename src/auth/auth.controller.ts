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
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RecoverDto } from './dtos/recover.dto';
import { ResetDto } from './dtos/reset.dto';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { MyLoggerService } from '../logger/my-logger.service';
import { LogService } from '../logger/log.service';
import { LogTypes } from '@prisma/client';
import { User } from 'src/generated/prisma-class-generator/user';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  private logger: MyLoggerService;

  constructor(
    private readonly authService: AuthService,
    private readonly logService: LogService,
  ) {
    this.logger = new MyLoggerService(logService, AuthController.name);
  }

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
    const { password, ...result } = loginDto;
    this.logger.audit(LogTypes.log, 'Auth:login accessed', loginDto.username, {
      route: request.url,
      action: this.login.name,
      dto: result,
      params: request.params,
      query: request.query,
    });
    return this.authService.login(request.user);
  }

  @ApiCreatedResponse({ type: User, isArray: false })
  @ApiBadRequestResponse()
  @Public()
  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto, @Request() request) {
    const { password, ...result } = createUserDto;
    this.logger.audit(
      LogTypes.log,
      'Auth:signUp accessed',
      createUserDto.username,
      {
        route: request.url,
        action: this.signUp.name,
        dto: result,
        params: request.params,
        query: request.query,
      },
    );

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
  async recoverPassword(@Body() recoverDto: RecoverDto, @Request() request) {
    this.logger.audit(
      LogTypes.log,
      'Auth:recoverPassword accessed',
      recoverDto.email,
      {
        route: request.url,
        action: this.recoverPassword.name,
        dto: recoverDto,
        params: request.params,
        query: request.query,
        body: request.body,
      },
    );

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
  async resetPassword(@Body() resetDto: ResetDto, @Request() request) {
    this.logger.audit(LogTypes.log, 'Auth:resetPassword acessed', '', {
      route: request.url,
      action: this.resetPassword.name,
      dto: resetDto,
      params: request.params,
      query: request.query,
      body: request.body,
    });
    await this.authService.resetPassword(
      resetDto.resetToken,
      resetDto.password,
    );
    return {
      message: 'Your password has been updated.',
    };
  }
}
