import { Answer } from 'src/answer/entities/answer.entity';
import { Avaliation } from 'src/avaliation/entities/avaliation.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

export enum QuizStatus {
  'PENDING' = 'PENDING',
  'STARTED' = 'STARTED',
  'FINISHED' = 'FINISHED',
}
@Entity('quizes')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Avaliation, (avaliation) => avaliation.quizes)
  avaliation: Avaliation;

  @ManyToOne(() => User, (user) => user.quizesEvaluator)
  evaluator: User;

  @ManyToOne(() => User, (user) => user.quizesEvaluated)
  evaluated: User;

  @OneToMany(() => Answer, (answer) => answer.alternative)
  answers: Answer[];

  @Column({ enum: QuizStatus, default: QuizStatus.PENDING })
  status: QuizStatus;
}
