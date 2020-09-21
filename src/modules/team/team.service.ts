import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTeamDto, ReadTeamDto } from './dto';
import { Status } from '../../shared/status.enum';
import { Team } from './team.entity';
import { TeamRepository } from './team.repository';

@Injectable()
export class TeamService {
  constructor(private readonly _teamRepository: TeamRepository) {}
  async get(id: number): Promise<ReadTeamDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const team: Team = await this._teamRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });

    if (!team) {
      throw new NotFoundException();
    }
    return plainToClass(ReadTeamDto, team);
  }

  async getAll(): Promise<ReadTeamDto[]> {
    const teams: Team[] = await this._teamRepository.find({
      where: { status: Status.ACTIVE },
    });

    return teams.map((team: Team) => plainToClass(ReadTeamDto, team));
  }

  async create(team: Partial<CreateTeamDto>): Promise<ReadTeamDto> {
    const foundTeam: Team = await this._teamRepository.findOne({
      where: { name: team.name },
    });

    if (foundTeam) {
      throw new NotFoundException();
    } else {
      const savedTeam: Team = await this._teamRepository.save({
        name: team.name,
      });
      return plainToClass(ReadTeamDto, savedTeam);
    }
  }

  async update(teamId: number, team: Team): Promise<ReadTeamDto> {
    const foundTeam = await this._teamRepository.findOne(teamId, {
      where: { status: Status.ACTIVE },
    });
    if (!foundTeam) {
      throw new NotFoundException('team does not exists');
    }
    foundTeam.name = team.name;

    const updatedTeam = await this._teamRepository.save(foundTeam);
    return plainToClass(ReadTeamDto, updatedTeam);
  }
  async delete(id: number): Promise<void> {
    const teamExists: Team = await this._teamRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });
    if (!teamExists) {
      throw new BadRequestException('id must be sent');
    }
    await this._teamRepository.update(id, { status: Status.INACTIVE });
  }
}
