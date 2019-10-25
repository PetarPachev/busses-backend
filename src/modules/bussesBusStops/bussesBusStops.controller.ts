import { Controller, Post, UseGuards, Req, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { BussesBusStopsService } from './bussesBusStops.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesEnum } from '../../enums/roles.enum';
import { RolesGuard } from '../../guards/roles.guard';
import { IBussesBusStops } from './interfaces/bussesBusStops.interface';

@Controller('api/BussesBusStops')
export class BussesBusStopsController {
  constructor(
    private readonly bussesBusStopsService: BussesBusStopsService
  ) {}

  @Post()
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createBussesBusStops(@Req() { body }: Request): Promise<IBussesBusStops> {
    return await this.bussesBusStopsService.create(body);
  }

  @Delete()
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteBussesBusStops(@Req() { body }: Request): Promise<IBussesBusStops> {
    return await this.bussesBusStopsService.delete(body);
  }

  @Post('busStops')
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getBussesBusStopsByBusId(@Req() { body: { busId } }: Request): Promise<IBussesBusStops[]> {
    return await this.bussesBusStopsService.getBussesBusStopsByBusId(busId);
  }

  @Post('busses')
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getBussesBusStopsByBusStopId(@Req() { body: { busStopId } }: Request): Promise<IBussesBusStops[]> {
    return await this.bussesBusStopsService.getBussesBusStopsByBusStopId(busStopId);
  }
}
