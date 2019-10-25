import { Schema } from 'mongoose';

export const BusSchema: Schema = new Schema({
  lineId: { type: String, index: true },
  title: String
});
