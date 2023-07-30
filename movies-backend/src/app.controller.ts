import { Controller, Get,Post,Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getuser(): string {
    return "hello world";
  }
 
}
