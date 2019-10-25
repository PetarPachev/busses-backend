import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { USERS_BUSSES_MODEL_TOKEN } from '../../constants';
import { UsersBussesSchema } from './schemas/usersBusses.schema';
import { UsersBussesController } from './usersBusses.controller';
import { UsersBussesService } from './usersBusses.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: USERS_BUSSES_MODEL_TOKEN,
        schema: UsersBussesSchema,
      },
    ]),
  ],
  controllers: [UsersBussesController],
  providers: [UsersBussesService],
  exports: [MongooseModule],
})
export class UsersBussesModule {}
