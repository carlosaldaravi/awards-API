import { IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ReadUserDto } from '../../user/dto';

export class CreateTeamDto {
  @IsString()
  readonly name: string;

  @Type(type => ReadUserDto)
  readonly users?: ReadUserDto[];
}
