import { IsNumber, IsString } from "class-validator";
import { Exclude, Expose, Type } from "class-transformer";
import { ReadUserDto } from "../../user/dto";
import { AwardType } from "../../../shared/type-award.enum";
import { AwardSubType } from "../../../shared/subtype-award.enum";

@Exclude()
export class ReadAwardDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsString()
  readonly name: string;

  @Expose()
  @IsString()
  readonly description: string;

  @Expose()
  @IsString()
  readonly type: AwardType;

  @Expose()
  @IsString()
  readonly subtype: AwardSubType;

  @Expose()
  @IsNumber()
  readonly points: number;

  @Expose()
  @IsNumber()
  readonly order: number;

  @Expose()
  @Type((type) => ReadUserDto)
  readonly users: ReadUserDto[];
}
