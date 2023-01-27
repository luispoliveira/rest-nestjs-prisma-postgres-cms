import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { Observable, tap } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  //private logger = new Logger(LoggerInterceptor.name);

  constructor(private readonly loggerService: LoggerService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request = this.getRequest(context);

    const userAgent = request.get('user-agent');
    const { ip, method, url, body, query, params } = request;
    const className = context.getClass().name;
    const handlerName = context.getHandler().name;

    const username = request.user?.username || 'anonymous';

    const log = await this.loggerService.create({
      userAgent,
      ip,
      method,
      url,
      body,
      query,
      params,
      username,
      className,
      methodName: handlerName,
    });

    return next.handle().pipe(
      tap(async (res) => {
        await this.loggerService.update({
          where: { id: log.id },
          data: { response: res },
        });
      }),
    );
  }

  private getRequest(context: ExecutionContext) {
    if (context.getType() === 'http')
      return context.switchToHttp().getRequest();

    if (context.getType<GqlContextType>() === 'graphql')
      return GqlExecutionContext.create(context).getContext().req;
  }

  // private getResponse(context: ExecutionContext) {
  //   if (context.getType() === 'http')
  //     return context.switchToHttp().getResponse();

  //   if (context.getType<GqlContextType>() === 'graphql')
  //     return GqlExecutionContext.create(context).getContext().res;
  // }
}
