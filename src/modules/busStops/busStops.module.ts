import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BUS_STOP_MODEL_TOKEN } from '../../constants';
import { BusStopsController } from './busStops.controller';
import { BusStopsService } from './busStops.service';
import { BusStopSchema } from './schemas/busStop.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BUS_STOP_MODEL_TOKEN,
        schema: BusStopSchema
      }
    ])
  ],
  controllers: [BusStopsController],
  providers: [BusStopsService],
  exports: [MongooseModule]
})
export class BusStopsModule {}
