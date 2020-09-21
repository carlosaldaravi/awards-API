import { IsNumber, IsString } from 'class-validator';

export class CreateAwardDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly points: number;
}
