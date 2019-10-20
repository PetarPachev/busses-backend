import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SERVER_CONFIG } from './constants';
import { AuthModule } from './modules/auth/auth.module';
import { UsersBussesModule } from './modules/usersBusses/usersBusses.module';

@Module({
  imports: [
    MongooseModule.forRoot(SERVER_CONFIG.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    AuthModule,
    UsersBussesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
