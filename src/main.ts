import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_CONFIG } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  require('./config/index')(SERVER_CONFIG, app);

  await app.listen(SERVER_CONFIG.httpPort);
}

bootstrap();
