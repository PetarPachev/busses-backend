import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  ngOptions: any;
  constructor(private readonly appService: AppService) {}

  @Get('*')
  render(@Res() res: Response, @Req() req: Request) {
    res.sendFile(join(process.cwd(), 'client/index.html'), { req });
  }
}
