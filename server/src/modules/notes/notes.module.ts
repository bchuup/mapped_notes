import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './notes.entity';
import { NoteRepository } from './notes.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Note, NoteRepository])],
  controllers: [NotesController]
})
export class NotesModule {}
