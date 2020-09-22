import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninDto, SignupDto } from "./dto";
import { SiginBackDto } from "./dto/signin-back.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post("/signup")
  @UsePipes(ValidationPipe)
  async signup(@Body() signupDto: SignupDto): Promise<SiginBackDto> {
    return this._authService.signup(signupDto);
  }

  @Post("/signin")
  @UsePipes(ValidationPipe)
  async signin(@Body() signinDto: SigninDto): Promise<SiginBackDto> {
    return this._authService.signin(signinDto);
  }
}
