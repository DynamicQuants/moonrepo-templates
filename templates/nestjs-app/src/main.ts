import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  const url = (await app.getUrl()).replace('[::1]', 'localhost');
  Logger.log(`Server is running on: ${url}`);
}

bootstrap();
