import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BUS_MODEL_TOKEN } from '../../constants';
import { BusSchema } from './schemas/bus.schema';
import { BussesController } from './busses.controller';
import { BussesService } from './busses.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BUS_MODEL_TOKEN,
        schema: BusSchema,
      },
    ]),
  ],
  controllers: [BussesController],
  providers: [BussesService],
  exports: [MongooseModule],
})
export class BussesModule {}
