import { Document } from 'mongoose';

export interface ILine extends Document {
  title: string;
}
