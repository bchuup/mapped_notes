import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './interfaces/AuthCredentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentials: AuthCredentialsDto):Promise<void>  {
    const user = new User();
    user.username = authCredentials.username;
    user.password = authCredentials.password;
    await user.save();
  }
}