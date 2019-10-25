import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { USERS_BUSSES_MODEL_TOKEN } from '../../constants';
import { IUsersBusses } from './interfaces/usersBusses.interface';
import { CreateUsersBussesDTO } from './dto/createUsersBusses.dto';

@Injectable()
export class UsersBussesService {
  constructor(@InjectModel(USERS_BUSSES_MODEL_TOKEN) private readonly usersBussesModel: Model<IUsersBusses>) {}

  async create(createUsersBussesDTO: CreateUsersBussesDTO): Promise<IUsersBusses> {
    const created = new this.usersBussesModel(createUsersBussesDTO);

    return await created.save();
  }

  async delete(id): Promise<IUsersBusses> {
    return await this.usersBussesModel.findByIdAndRemove(id);
  }
}
