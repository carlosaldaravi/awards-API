import { IsString } from "class-validator";
import { Team } from "../../../shared/team.enum";

export class UpdateUserDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  team: Team;

  @IsString()
  dateborn: Date;
}
