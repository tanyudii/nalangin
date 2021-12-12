import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { useContainer } from 'class-validator';

(async () => {
  const host = process.env.HOST || '0.0.0.0';
  const port = +process.env.PORT || 3333;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    { transport: Transport.TCP, options: { port, host } },
  );

  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen().then(() => {
    Logger.log(
      `🚀 Application is running microservices on TCP ${host}:${port}`,
    );
  });
})();
