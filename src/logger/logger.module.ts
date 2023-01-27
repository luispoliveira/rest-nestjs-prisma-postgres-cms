import { Global, Module, Scope } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrismaModule } from '../prisma/prisma.module';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerService } from './logger.service';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [
    LoggerService,
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: LoggerInterceptor,
    },
  ],
  exports: [LoggerService],
})
export class LoggerModule {}
