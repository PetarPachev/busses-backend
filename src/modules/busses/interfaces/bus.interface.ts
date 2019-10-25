import { Document } from 'mongoose';

export interface IBus extends Document {
  lineId: string;
  title: string;
}
