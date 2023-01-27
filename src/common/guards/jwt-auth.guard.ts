import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass,
    ]);

    if (isPublic) return true;

    return super.canActivate(context);
  }

  getRequest(context: ExecutionContext) {
    if (context.getType() === 'http')
      return context.switchToHttp().getRequest();

    if (context.getType<GqlContextType>() === 'graphql')
      return GqlExecutionContext.create(context).getContext().req;
  }

  handleRequest<TUser = any>(
    err: any,
    user: any,
    //info: any,
    //context: any,
    //status?: any,
  ): TUser {
    if (err || !user) {
      throw err || new UnauthorizedException('Error on getting User');
    }

    return user;
  }
}
