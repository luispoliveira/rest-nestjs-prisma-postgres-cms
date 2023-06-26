import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { ContextUtil } from 'src/utils/context.util';
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
    return ContextUtil.getRequest(context);
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
