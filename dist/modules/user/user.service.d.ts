import { ReadUserDto } from './dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly _userRepository;
    constructor(_userRepository: UserRepository);
    get(id: number): Promise<ReadUserDto>;
    getAll(): Promise<ReadUserDto[]>;
    update(userId: number, user: User): Promise<ReadUserDto>;
    delete(id: number): Promise<void>;
}
