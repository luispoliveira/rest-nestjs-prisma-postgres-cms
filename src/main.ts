import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaModel } from './generated/prisma-class-generator';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('port');
  const globalPrefix = config.get('globalPrefix');

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
    Logger.log(`Running in ${config.get('environment')} mode`);
    Logger.log('Teste Space');
  });
}

bootstrap();
