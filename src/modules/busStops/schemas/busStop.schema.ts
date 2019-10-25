import { Schema } from 'mongoose';

export const BusStopSchema: Schema = new Schema({
  title: String,
  number: Number
});
