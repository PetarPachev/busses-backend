import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BUS_MODEL_TOKEN } from '../../constants';
import { CreateBusDTO } from './dto/createBus.dto';
import { IBus } from './interfaces/bus.interface';

@Injectable()
export class BussesService {
  constructor(@InjectModel(BUS_MODEL_TOKEN) private readonly bussesModel: Model<IBus>) {}

  async create(createBusDTO: CreateBusDTO): Promise<IBus> {
    const created = new this.bussesModel(createBusDTO);

    return await created.save();
  }

  async delete(id: string): Promise<IBus> {
    return await this.bussesModel.findByIdAndRemove(id);
  }

  async getBusses(lineId?: string): Promise<IBus[]> {
    if (lineId) {
      return await this.bussesModel.find({ lineId });
    }
    
    return await this.bussesModel.find();
  }

  async getBus(id: string): Promise<IBus> {
    return await this.bussesModel.findById(id);
  }
}
