import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Avaliation } from 'src/avaliation/entities/avaliation.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { Question } from 'src/question/entities/question.entity';
import { Answer } from 'src/answer/entities/answer.entity';
import { Alternative } from 'src/alternative/entities/alternative.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Avaliation,
      Quiz,
      Answer,
      Question,
      Alternative,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
