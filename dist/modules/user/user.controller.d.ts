import { ReadUserDto } from './dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private _userService;
    constructor(_userService: UserService);
    getUser(id: number): Promise<ReadUserDto>;
    getUsers(): Promise<ReadUserDto[]>;
    updateUser(id: number, user: User): Promise<ReadUserDto>;
    deleteUser(id: number): Promise<void>;
}
