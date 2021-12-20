import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const host = process.env.HOST || '0.0.0.0';
  const port = +process.env.PORT || 3333;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));

  //is used for allow custom pipes attribute
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  //is used for exclude attribute in entities
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(port, host).then(() => {
    Logger.log(`🚀 Application is running on ${host}:${port}`);
  });
}

bootstrap();
