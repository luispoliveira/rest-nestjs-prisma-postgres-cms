import { UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';
import {
  User,
  UserCreateInput,
} from '../../prisma/__generated__/prisma-nestjs-graphql';
import { Public } from '../common/decorators/is-public.decorator';
import { AuthService } from './auth.service';
import { LoginInput } from './input-types/login.input';
import { RecoverInput } from './input-types/recover.input';
import { ResetInput } from './input-types/reset.input';
import { Login } from './object-types/login.model';
import { RecoverModel } from './object-types/recover.model';
import { ResetModel } from './object-types/reset.model';

@Resolver(() => User)
@UseInterceptors(LoggerInterceptor)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Login)
  @Public()
  // @UseGuards(LocalAuthGuard) Passport does not support LocalAuthGuards
  async AuthLogin(
    @Args('loginInput') loginInput: LoginInput,
    //@GqlRequest() request,
  ) {
    const user = await this.authService.validateUser(
      loginInput.username,
      loginInput.password,
    );
    if (!user || !user.isActive)
      throw new UnauthorizedException('User does not exist or inactive');
    return this.authService.login(user as User);
  }

  @Mutation(() => User)
  @Public()
  AuthSignUp(@Args('signUpInput') userCreateInput: UserCreateInput) {
    return this.authService.signUp({
      username: userCreateInput.username,
      email: userCreateInput.email,
      password: userCreateInput.password,
    });
  }

  @Mutation(() => RecoverModel)
  async AuthRecoverPassword(@Args('recoverInput') recoverInput: RecoverInput) {
    await this.authService.recoverPassword(recoverInput.email);
    return { message: 'A reset email has been sent to your email.' };
  }

  @Mutation(() => ResetModel)
  async AuthResetPassword(@Args('resetInput') resetInput: ResetInput) {
    await this.authService.resetPassword(
      resetInput.resetToken,
      resetInput.password,
    );
    return {
      message: 'Your password has been updated.',
    };
  }
}
