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
// import { AuthGuard } from "@nestjs/passport";
import { ReadTeamDto } from "./dto";
import { Team } from "./team.entity";
import { TeamService } from "./team.service";

@Controller("teams")
export class TeamController {
  constructor(private _teamService: TeamService) {}

  // @UseGuards(AuthGuard())
  @Get(":id")
  getTeam(@Param("id", ParseIntPipe) id: number): Promise<ReadTeamDto> {
    return this._teamService.get(id);
  }

  @Get()
  getTeams(): Promise<ReadTeamDto[]> {
    return this._teamService.getAll();
  }

  @Patch(":id")
  updateTeam(
    @Param("id", ParseIntPipe) id: number,
    @Body() team: Team
  ): Promise<ReadTeamDto> {
    return this._teamService.update(id, team);
  }

  @Delete(":id")
  deleteTeam(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this._teamService.delete(id);
  }
}
