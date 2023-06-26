import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { ContextUtil } from 'src/utils/context.util';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly blackListedMethods = [
    'login',
    'signUp',
    'recoverPassword',
    'resetPassword',
  ];
  //private logger = new Logger(LoggerInterceptor.name);

  constructor(private readonly loggerService: LoggerService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request = ContextUtil.getRequest(context);

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
      body: body,
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
          data: {
            response: this.blackListedMethods.includes(handlerName)
              ? undefined
              : res,
          },
        });
      }),
    );
  }
}
