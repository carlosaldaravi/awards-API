import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardController } from './award.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AwardRepository } from './award.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AwardRepository])],
  providers: [AwardService],
  controllers: [AwardController],
})
export class AwardModule {}
