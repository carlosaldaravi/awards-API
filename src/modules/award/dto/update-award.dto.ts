import { IsNumber, IsString } from 'class-validator';

export class UpdateAwardDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly points: number;
}
