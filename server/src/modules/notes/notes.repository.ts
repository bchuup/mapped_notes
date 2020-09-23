import { Note } from './notes.entity';
import { EntityRepository, Repository } from 'typeorm';
import { NoteDto } from './interfaces/Note.dto';

@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {
  createNote = async (noteDto: NoteDto) => {
    return await this.save(noteDto);
  };

  findOneNote = async (id: number) => {
    return await this.findOneOrFail(id);
  }

  updateNote = async (id: number, noteDto: NoteDto) => {
    return await this.save({
      ...noteDto,
      id
    })
  }

  removeNote = async (id: number) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  }
}