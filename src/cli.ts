import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CommandModule, CommandService } from 'nestjs-command';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getLogger } from './main';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const config = app.get(ConfigService);
  const environment = config.get('environment');

  app.useLogger(getLogger(environment));

  try {
    await app.select(CommandModule).get(CommandService).exec();
    await app.close();
  } catch (e) {
    Logger.error(e);
    await app.close();
    process.exit(1);
  }
}

bootstrap();
