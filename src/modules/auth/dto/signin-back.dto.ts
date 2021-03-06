import { Exclude, Expose, Type } from "class-transformer";
import { IsString } from "class-validator";
import { ReadUserDto } from "../../user/dto";

@Exclude()
export class SiginBackDto {
  @Expose()
  @IsString()
  readonly token: string;

  @Expose()
  @Type((type) => ReadUserDto)
  readonly user: ReadUserDto;
}
