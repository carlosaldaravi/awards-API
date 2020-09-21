import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { SignupDto } from './dto';
export declare class AuthRepository extends Repository<User> {
    signup(signupDto: SignupDto): Promise<void>;
}
