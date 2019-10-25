import { Controller, Post, UseGuards, Req, Delete, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { BussesService } from './busses.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesEnum } from '../../enums/roles.enum';
import { RolesGuard } from '../../guards/roles.guard';
import { IBus } from './interfaces/bus.interface';

@Controller('api/Busses')
export class BussesController {
  constructor(
    private readonly bussesService: BussesService
  ) {}

  @Post()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createBus(@Req() { body }: Request): Promise<IBus> {
    return await this.bussesService.create(body);
  }

  @Delete()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteBus(@Req() { body: { id } }: Request): Promise<IBus> {
    return await this.bussesService.delete(id);
  }

  @Post('all')
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getBusses(@Req() { body: { lineId } }: Request): Promise<IBus[]> {
    return await this.bussesService.getBusses(lineId);
  }

  @Get(':id')
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getBus(@Param() { id }): Promise<IBus> {
    return await this.bussesService.getBus(id);
  }
}
