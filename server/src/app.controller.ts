import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { NoteDto } from './notes/interfaces/notes.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
