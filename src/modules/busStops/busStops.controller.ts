import { Controller, Post, UseGuards, Req, Delete, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { BusStopsService } from './busStops.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesEnum } from '../../enums/roles.enum';
import { RolesGuard } from '../../guards/roles.guard';
import { IBusStop } from './interfaces/busStop.interface';

@Controller('api/BusStops')
export class BusStopsController {
  constructor(
    private readonly busStopsService: BusStopsService
  ) {}

  @Post()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createBusStop(@Req() { body }: Request): Promise<IBusStop> {
    return await this.busStopsService.create(body);
  }

  @Delete()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteBusStop(@Req() { body }: Request): Promise<IBusStop> {
    return await this.busStopsService.delete(body);
  }

  @Get()
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getBusStops(@Req() { body }: Request): Promise<IBusStop[]> {
    return await this.busStopsService.getBusStops();
  }

  @Get(':id')
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getBusStop(@Param() { id }): Promise<IBusStop> {
    return await this.busStopsService.getBusStop(id);
  }
}
