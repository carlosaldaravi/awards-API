import { Exclude, Expose, Type } from "class-transformer";
import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";
import { ReadAwardDto } from "src/modules/award/dto";
import { Status } from "src/shared/status.enum";
import { Team } from "../../../shared/team.enum";

@Exclude()
export class ReadUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsEmail()
  readonly username: string;

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
  readonly status: Status;

  @Expose()
  @IsString()
  readonly team: Team;

  @Expose()
  @IsDate()
  readonly dateborn: Date;

  @Expose()
  @Type((type) => ReadAwardDto)
  readonly awards: ReadAwardDto[];
}
