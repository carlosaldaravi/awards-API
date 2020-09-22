import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNumber, IsString } from "class-validator";
import { Team } from "../../../shared/team.enum";

@Exclude()
export class ReadUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsEmail()
  readonly email: string;

  @Expose()
  @IsString()
  readonly firstname: string;

  @Expose()
  @IsString()
  readonly lastname: string;

  @Expose()
  @IsString()
  readonly team: Team;

  @Expose()
  @IsString()
  readonly dateborn: Date;
}
