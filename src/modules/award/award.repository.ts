import { EntityRepository, Repository } from 'typeorm';
import { Award } from './award.entity';

@EntityRepository(Award)
export class AwardRepository extends Repository<Award> {}
