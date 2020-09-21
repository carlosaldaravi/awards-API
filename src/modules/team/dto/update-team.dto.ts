import { IsString } from 'class-validator';

export class UpdateTeamDto {
  @IsString()
  readonly name: string;
}
