import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteDto } from './interfaces/notes.dto';
import { NoteRepository } from './notes.repository';

@Controller('notes')
export class NotesController {
  constructor(
    @InjectRepository(NoteRepository) private readonly noteRepository: NoteRepository,
  ) { }
  
  @Get()
  getNotes() {
    // TODO: pagination
    return this.noteRepository.find();
  }
  
  @Post()
  create(@Body() noteDto: NoteDto) {
    return this.noteRepository.createNote(noteDto);
  }

  @Get(':id')
  getNote(@Param('id') id: number) {
    return this.noteRepository.findOneNote(id)
  }

  @Put(':id')
  updateNote(
    @Param('id') id: number,
    @Body() noteDto: NoteDto
  ) {
    return this.noteRepository.updateNote(id, noteDto)
  }

  // TODO: implement soft delete
  @Delete(':id')
  removeNote(
    @Param('id') id: number
  ) {
    return this.noteRepository.removeNote(id)
  }

}
