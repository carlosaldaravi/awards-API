import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamRepository } from './team.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TeamRepository])],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
