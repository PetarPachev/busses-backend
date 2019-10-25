import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BUS_STOP_MODEL_TOKEN } from '../../constants';
import { IBusStop } from './interfaces/busStop.interface';
import { CreateBusStopDTO } from './dto/createBusStop.dto';

@Injectable()
export class BusStopsService {
  constructor(@InjectModel(BUS_STOP_MODEL_TOKEN) private readonly busStopModel: Model<IBusStop>) {}

  async create(createBusStopDTO: CreateBusStopDTO): Promise<IBusStop> {
    const created = new this.busStopModel(createBusStopDTO);

    return await created.save();
  }

  async delete(id: string): Promise<IBusStop> {
    return await this.busStopModel.findByIdAndRemove(id);
  }

  async getBusStops(): Promise<IBusStop[]> {
    return await this.busStopModel.find();
  }

  async getBusStop(id: string): Promise<IBusStop> {
    return await this.busStopModel.findById(id);
  }
}
