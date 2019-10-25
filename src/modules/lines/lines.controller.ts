import { Controller, Post, UseGuards, Req, Delete, Get, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { LinesService } from './lines.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import { ILine } from './interfaces/line.interface';
import { RolesEnum } from '../../enums/roles.enum';

@Controller('api/Lines')
export class LinesController {
  constructor(
    private readonly linesService: LinesService
  ) {}

  @Post()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createLine(@Req() { body }: Request): Promise<ILine> {
    return await this.linesService.create(body);
  }

  @Delete()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteLine(@Req() { body: { id } }: Request): Promise<ILine> {
    return await this.linesService.delete(id);
  }

  @Get()
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getLines(@Req() { body }: Request): Promise<ILine[]> {
    return await this.linesService.getLines();
  }

  @Get(':id')
  @Roles(RolesEnum.Admin, RolesEnum.User)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async getLine(@Param() { id }): Promise<ILine> {
    return await this.linesService.getLine(id);
  }
}
