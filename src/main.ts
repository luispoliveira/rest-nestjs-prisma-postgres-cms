import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger, LogLevel, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaModel } from 'prisma/__generated__/prisma-class-generator';
import { EnvironmentEnum } from './shared';
import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);

  const environment = config.get('environment');
  const port = config.get('port');
  const globalPrefix = config.get('globalPrefix');

  app.useLogger(getLogger(environment));

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // app.use(helmet());
  app.enableCors();
  // app.use(csurf());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('NestJS/Prisma CMS Template')
    .setDescription('APIs fro NestJs/Prisma CMS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig, {
    extraModels: [...PrismaModel.extraModels],
  });
  SwaggerModule.setup(`${globalPrefix}/api-docs`, app, swaggerDocument);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, () => {
    Logger.log(`Listening at http://localhost:${port}/${globalPrefix}`);
    Logger.log(`GraphQL at http://localhost:${port}/graphql`);
    // Logger.log(`Api Doc: http://localhost:${port}/${globalPrefix}/api-docs`);
    Logger.log(`Running in ${environment} mode`);
  });
}

bootstrap();

export const getLogger = (environment: string): LogLevel[] => {
  const logger: LogLevel[] = ['error', 'warn'];

  switch (environment) {
    case EnvironmentEnum.Development:
      logger.push('log');
      logger.push('debug');
      logger.push('verbose');
      break;
    case EnvironmentEnum.Test:
      logger.push('log');
      break;
  }

  return logger;
};
