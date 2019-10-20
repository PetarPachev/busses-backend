import { Schema } from 'mongoose';

export const UsersBussesSchema: Schema = new Schema({
  userId: String,
  busId: String
});
