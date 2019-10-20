import { Controller, Post, Req, Delete, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

import { UsersBussesService } from './usersBusses.service';
import { Roles } from '../../decorators/roles.decorator';
import { RolesGuard } from '../../guards/roles.guard';

@Controller('api/users/busses')
export class UsersBussesController {
  constructor(
    private readonly usersBussesService: UsersBussesService
  ) {}

  @Post()
  @Roles('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async createUsersBusses(@Req() { body }: Request) {
    this.usersBussesService.create(body);
  }

  @Delete()
  @Roles('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteUsersBusses(@Req() { body }: Request) {
    this.usersBussesService.delete(body);
  }
}
