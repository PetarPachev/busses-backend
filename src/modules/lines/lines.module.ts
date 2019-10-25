import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LINE_MODEL_TOKEN } from '../../constants';
import { LineSchema } from './schemas/line.schema';
import { LinesController } from './lines.controller';
import { LinesService } from './lines.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LINE_MODEL_TOKEN,
        schema: LineSchema,
      },
    ]),
  ],
  controllers: [LinesController],
  providers: [LinesService],
  exports: [MongooseModule],
})
export class LinesModule {}
