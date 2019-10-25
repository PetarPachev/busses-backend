import { Schema } from 'mongoose';

export const BussesBusStopsSchema: Schema = new Schema({
  busId: { type: String, index: true },
  busStopId: { type: String, index: true },
  created: { type: Date, index: true }
});
