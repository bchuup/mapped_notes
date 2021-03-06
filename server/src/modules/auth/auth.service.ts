import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './interfaces/AuthCredentials.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {}

  async signUp(userAuthCredentialsDto: AuthCredentialsDto) {
    return this.userRepository.signUp(userAuthCredentialsDto)
  }
}
