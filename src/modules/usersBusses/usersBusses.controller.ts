import { Controller, Post, Req, Delete, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { UsersBussesService } from './usersBusses.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';
import { RolesEnum } from '../../enums/roles.enum';
import { IUsersBusses } from './interfaces/usersBusses.interface';

@Controller('api/UsersBusses')
export class UsersBussesController {
  constructor(
    private readonly usersBussesService: UsersBussesService
  ) {}

  @Post()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createUsersBusses(@Req() { body }: Request): Promise<IUsersBusses> {
    return await this.usersBussesService.create(body);
  }

  @Delete()
  @Roles(RolesEnum.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteUsersBusses(@Req() { body }: Request): Promise<IUsersBusses> {
    return await this.usersBussesService.delete(body);
  }
}
