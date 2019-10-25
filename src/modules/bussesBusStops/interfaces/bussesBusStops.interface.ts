import { Document } from 'mongoose';

export interface IBussesBusStops extends Document {
  busId: string;
  busStopId: string;
  created: Date;
}
