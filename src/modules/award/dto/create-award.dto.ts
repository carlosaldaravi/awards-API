import { IsNumber, IsString } from "class-validator";
import { AwardSubType } from "../../../shared/subtype-award.enum";
import { AwardType } from "../../../shared/type-award.enum";

export class CreateAwardDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly type: AwardType;

  @IsString()
  readonly subtype: AwardSubType;

  @IsNumber()
  readonly points: number;

  @IsNumber()
  readonly order: number;
}
