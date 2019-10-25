import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { LINE_MODEL_TOKEN } from '../../constants';
import { ILine } from './interfaces/line.interface';
import { CreateLineDTO } from './dto/createLine.dto';

@Injectable()
export class LinesService {
  constructor(@InjectModel(LINE_MODEL_TOKEN) private readonly linesModel: Model<ILine>) {}

  async create(createLineDTO: CreateLineDTO): Promise<ILine> {
    const created = new this.linesModel(createLineDTO);

    return await created.save();
  }

  async delete(id: string): Promise<ILine> {
    return await this.linesModel.findByIdAndRemove(id);
  }

  async getLines(): Promise<ILine[]> {
    return await this.linesModel.find();
  }

  async getLine(id: string): Promise<ILine> {
    return await this.linesModel.findById(id);
  }
}
