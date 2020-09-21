import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateAwardDto, ReadAwardDto } from './dto';
import { Status } from '../../shared/status.enum';
import { Award } from './award.entity';
import { AwardRepository } from './award.repository';

@Injectable()
export class AwardService {
  constructor(private readonly _awardRepository: AwardRepository) {}
  async get(id: number): Promise<ReadAwardDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const award: Award = await this._awardRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });

    if (!award) {
      throw new NotFoundException();
    }
    return plainToClass(ReadAwardDto, award);
  }

  async getAll(): Promise<ReadAwardDto[]> {
    const awards: Award[] = await this._awardRepository.find({
      where: { status: Status.ACTIVE },
    });

    return awards.map((award: Award) => plainToClass(ReadAwardDto, award));
  }

  async create(award: Partial<CreateAwardDto>): Promise<ReadAwardDto> {
    const foundAward: Award = await this._awardRepository.findOne({
      where: { name: award.name },
    });

    if (foundAward) {
      throw new NotFoundException();
    } else {
      const savedAward: Award = await this._awardRepository.save({
        name: award.name,
        description: award.description,
        points: award.points,
      });
      return plainToClass(ReadAwardDto, savedAward);
    }
  }

  async update(awardId: number, award: Award): Promise<ReadAwardDto> {
    const foundAward = await this._awardRepository.findOne(awardId, {
      where: { status: Status.ACTIVE },
    });
    if (!foundAward) {
      throw new NotFoundException('award does not exists');
    }
    foundAward.name = award.name;
    foundAward.description = award.description;
    foundAward.points = award.points;

    const updatedAward = await this._awardRepository.save(foundAward);
    return plainToClass(ReadAwardDto, updatedAward);
  }
  async delete(id: number): Promise<void> {
    const awardExists: Award = await this._awardRepository.findOne(id, {
      where: { status: Status.ACTIVE },
    });
    if (!awardExists) {
      throw new BadRequestException('id must be sent');
    }
    await this._awardRepository.update(id, { status: Status.INACTIVE });
  }
}
