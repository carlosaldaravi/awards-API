import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
// import { AuthGuard, PassportModule } from "@nestjs/passport";
import { CreateAwardDto, ReadAwardDto } from "./dto";
import { Award } from "./award.entity";
import { AwardService } from "./award.service";

@Controller("awards")
export class AwardController {
  constructor(private _awardService: AwardService) {}

  // @UseGuards(AuthGuard())
  @Get(":id")
  getAward(@Param("id", ParseIntPipe) id: number): Promise<ReadAwardDto> {
    return this._awardService.get(id);
  }

  @Get()
  getAwards(): Promise<ReadAwardDto[]> {
    return this._awardService.getAll();
  }

  @Post()
  //   @Roles(RoleType.ADMIN)
  //   @ApiBearerAuth()
  //   @UseGuards(AuthGuard('jwt'), RoleGuard)
  createAward(@Body() award: Partial<CreateAwardDto>): Promise<ReadAwardDto> {
    return this._awardService.create(award);
  }

  @Patch(":id")
  updateAward(
    @Param("id", ParseIntPipe) id: number,
    @Body() award: Award
  ): Promise<ReadAwardDto> {
    return this._awardService.update(id, award);
  }

  @Delete(":id")
  deleteAward(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this._awardService.delete(id);
  }
}
