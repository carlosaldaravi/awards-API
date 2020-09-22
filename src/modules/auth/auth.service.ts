import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { compare, genSalt, hash } from "bcryptjs";
import { ReadUserDto } from "../user/dto";
import { User } from "../user/user.entity";
import { AuthRepository } from "./auth.repository";
import { SigninDto, SignupDto } from "./dto";
import { IJwtPayload } from "./jwt-payload.interface";
import { plainToClass } from "class-transformer";
import { SiginBackDto } from "./dto/signin-back.dto";
import { RoleType } from "../user/roletype.enum";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private readonly _authRepository: AuthRepository,
    private readonly _jwtService: JwtService
  ) {}

  async signup(signupDto: SignupDto): Promise<SiginBackDto> {
    const {
      username,
      email,
      password,
      firstname,
      lastname,
      avatar,
    } = signupDto;
    const userExists = await this._authRepository.findOne({
      where: [{ username }, { email }],
    });
    if (userExists) {
      throw new ConflictException("username or email already exists");
    }

    const user = new User();
    user.username = username;
    user.email = email;
    user.role = RoleType.STUDENT;
    user.firstname = firstname;
    user.lastname = lastname;
    user.avatar = avatar;

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();

    const payload: IJwtPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    const token = await this._jwtService.sign(payload);

    return { token, user: plainToClass(ReadUserDto, user) };
  }

  async signin(signinDto: SigninDto): Promise<SiginBackDto> {
    const { username, password } = signinDto;
    const user: User = await this._authRepository.findOne({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException("user does not exist");
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException("invalid credentials");
    }

    const payload: IJwtPayload = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };

    const token = await this._jwtService.sign(payload);

    return { token, user: plainToClass(ReadUserDto, user) };
  }
}
