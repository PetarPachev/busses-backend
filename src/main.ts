import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_CONFIG } from './constants';
import { INestApplication } from '@nestjs/common';

declare var module: any;

function terminateServerUponRestart(app: INestApplication) {
  const terminate = () => app.close();

  process.on('uncaughtException', terminate);
  process.on('SIGTERM', terminate);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  terminateServerUponRestart(app);

  require('./config/index')(SERVER_CONFIG, app);

  app.enableCors();

  await app.listen(SERVER_CONFIG.httpPort);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();

