import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BUSSES_BUS_STOPS_MODEL_TOKEN } from '../../constants';
import { BussesBusStopsController } from './bussesBusStops.controller';
import { BussesBusStopsService } from './bussesBusStops.service';
import { BussesBusStopsSchema } from './schemas/bussesBusStops.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BUSSES_BUS_STOPS_MODEL_TOKEN,
        schema: BussesBusStopsSchema
      }
    ])
  ],
  controllers: [BussesBusStopsController],
  providers: [BussesBusStopsService],
  exports: [MongooseModule]
})
export class BussesBusStopsModule {}
