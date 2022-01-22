import { AuthService } from "./auth.service";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { User } from "../generated/prisma-nestjs-graphql/user/user.model";
import { LoginInput } from "./input-types/login.input";
import { Login } from "./object-types/login.model";
import { Public } from "../common/decorators/is-public.decorator";
import { UnauthorizedException } from "@nestjs/common";
import { UserCreateInput } from "../generated/prisma-nestjs-graphql/user/user-create.input";
import { RecoverInput } from "./input-types/recover.input";
import { RecoverModel } from "./object-types/recover.model";
import { ResetModel } from "./object-types/reset.model";
import { ResetInput } from "./input-types/reset.input";

@Resolver(of => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {
  }

  @Mutation(returns => Login)
  @Public()
  // @UseGuards(LocalAuthGuard) Passport does not support LocalAuthGuards yett
  async AuthLogin(@Args("loginInput") loginInput: LoginInput) {
    const user = await this.authService.validateUser(loginInput.username, loginInput.password);
    if (!user || !user.isActive)
      throw new UnauthorizedException("User does not exist or inactive");
    return this.authService.login(user as User);
  }

  @Mutation(returns => User)
  @Public()
  AuthSignUp(@Args("signUpInput") userCreateInput: UserCreateInput) {
    return this.authService.signUp({
      username: userCreateInput.username,
      email: userCreateInput.email,
      password: userCreateInput.password
    });
  }

  @Mutation(returns => RecoverModel)
  async AuthRecoverPassword(@Args("recoverInput") recoverInput: RecoverInput) {
    await this.authService.recoverPassword(recoverInput.email);
    return { message: "A reset email has been sent to your email." };
  }

  @Mutation(returns => ResetModel)
  async AuthResetPassword(@Args("resetInput") resetInput: ResetInput) {
    await this.authService.resetPassword(resetInput.resetToken, resetInput.password);
    return {
      message: "Your password has been updated."
    };
  }
}
