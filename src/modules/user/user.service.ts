import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { ReadUserDto } from "./dto";
import { Status } from "../../shared/status.enum";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {}
  async get(id: number): Promise<ReadUserDto> {
    if (!id) {
      throw new BadRequestException("id must be sent");
    }

    const user: User = await this._userRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });

    if (!user) {
      throw new NotFoundException();
    }
    return plainToClass(ReadUserDto, user);
  }

  async getAll(): Promise<ReadUserDto[]> {
    const users: User[] = await this._userRepository.find({
      where: { status: Status.ACTIVE },
    });

    return users.map((user: User) => plainToClass(ReadUserDto, user));
  }

  async update(userId: number, user: User): Promise<ReadUserDto> {
    const foundUser = await this._userRepository.findOne(userId, {
      where: { status: Status.ACTIVE },
    });
    if (!foundUser) {
      throw new NotFoundException("user does not exists");
    }
    foundUser.firstname = user.firstname;
    foundUser.lastname = user.lastname;
    foundUser.dateborn = user.dateborn;
    foundUser.team = user.team;

    const updatedUser = await this._userRepository.save(foundUser);
    return plainToClass(ReadUserDto, updatedUser);
  }
  async delete(id: number): Promise<void> {
    const userExists: User = await this._userRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });
    if (!userExists) {
      throw new BadRequestException("id must be sent");
    }
    await this._userRepository.update(id, { status: Status.INACTIVE });
  }
}
