import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BUSSES_BUS_STOPS_MODEL_TOKEN } from '../../constants';
import { IBussesBusStops } from './interfaces/bussesBusStops.interface';
import { CreateBussesBusStopsDTO } from './dto/createBussesBusStops.dto';

@Injectable()
export class BussesBusStopsService {
  constructor(@InjectModel(BUSSES_BUS_STOPS_MODEL_TOKEN) private readonly bussesBusStopsModel: Model<IBussesBusStops>) {}

  async create(createBussesBusStopsDTO: CreateBussesBusStopsDTO): Promise<IBussesBusStops> {
    const created = new this.bussesBusStopsModel(createBussesBusStopsDTO);

    return await created.save();
  }

  async delete(id: string): Promise<IBussesBusStops> {
    return await this.bussesBusStopsModel.findByIdAndRemove(id);
  }

  async getBussesBusStopsByBusId(busId?: string): Promise<IBussesBusStops[]> {
    if (busId) {
      return await this.bussesBusStopsModel.find({ busId });
    }

    return await this.bussesBusStopsModel.find();
  }

  async getBussesBusStopsByBusStopId(busStopId: string): Promise<IBussesBusStops[]> {
    if (busStopId) {
      return await this.bussesBusStopsModel.find({ busStopId });  
    }

    return await this.bussesBusStopsModel.find();
  }
}
