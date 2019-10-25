import { Document } from 'mongoose';

export interface IBusStop extends Document {
  title: string;
  number: number;
}
