import { genSalt, hash } from 'bcryptjs';
import { EntityRepository, Repository } from 'typeorm';
import { RoleType } from '../user/roletype.enum';
import { User } from '../user/user.entity';
import { SignupDto } from './dto';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signup(signupDto: SignupDto) {
    const { username, email, password } = signupDto;
    const user = new User();
    user.username = username;
    user.email = email;
    user.role = RoleType.STUDENT;

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();
  }
}
