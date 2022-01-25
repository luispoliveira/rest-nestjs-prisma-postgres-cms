import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { CommandModule, CommandService } from "nestjs-command";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule, {
    logger: false
  });

  try {
    await app
      .select(CommandModule)
      .get(CommandService)
      .exec();
    await app.close();
  } catch (e) {
    Logger.error(e);
    await app.close();
    process.exit(1);
  }
}

bootstrap();
