import { Document } from 'mongoose';

export interface IUsersBusses extends Document {
  userId: string;
  busId: string;
}
