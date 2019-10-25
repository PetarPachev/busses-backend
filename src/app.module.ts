import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Path to server bundle in dist
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(join(process.cwd(), 'client/server/main.js'));

applyDomino(global, join(process.cwd(), 'client/browser/index.html'));

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SERVER_CONFIG } from './constants';
import { AuthModule } from './modules/auth/auth.module';
import { UsersBussesModule } from './modules/usersBusses/usersBusses.module';
import { LinesModule } from './modules/lines/lines.module';
import { BussesModule } from './modules/busses/busses.module';
import { BusStopsModule } from './modules/busStops/busStops.module';
import { BussesBusStopsModule } from './modules/bussesBusStops/bussesBusStops.module';

@Module({
  imports: [
    MongooseModule.forRoot(SERVER_CONFIG.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'client/browser'),
      bundle: {
        AppServerModuleNgFactory,
        LAZY_MODULE_MAP,
        provideModuleMap,
        ngExpressEngine
      }
    }),
    AuthModule,
    BussesModule,
    BussesBusStopsModule,
    BusStopsModule,
    LinesModule,
    UsersBussesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
