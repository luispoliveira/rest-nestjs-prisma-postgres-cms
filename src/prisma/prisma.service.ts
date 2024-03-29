import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient } from '@prisma/client';
import { EnvironmentEnum } from 'src/shared';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor(configService: ConfigService) {
    const log: Prisma.LogLevel[] = ['warn', 'error'];

    switch (configService.get<string>('environment')) {
      case EnvironmentEnum.Development:
        log.push('info');
        log.push('query');
        break;
      case EnvironmentEnum.Test:
        log.push('info');
        break;
    }

    super({
      log: log,
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    try {
      await this.$connect();
    } catch (error) {
      this.logger.error(error);
      this.onModuleInit();
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
