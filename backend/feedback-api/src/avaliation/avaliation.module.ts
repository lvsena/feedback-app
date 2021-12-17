import { Module } from '@nestjs/common';
import { AvaliationService } from './avaliation.service';
import { AvaliationController } from './avaliation.controller';

@Module({
  controllers: [AvaliationController],
  providers: [AvaliationService],
})
export class AvaliationModule {}
