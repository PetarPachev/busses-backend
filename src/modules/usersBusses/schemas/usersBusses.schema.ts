import { Schema } from 'mongoose';

export const UsersBussesSchema: Schema = new Schema({
  userId: { type: String, index: true },
  busId: { type: String, index: true }
});
