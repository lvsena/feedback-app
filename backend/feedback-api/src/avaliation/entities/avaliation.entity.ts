import { Company } from 'src/company/entities/company.entity';
import { Question } from 'src/question/entities/question.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('avaliations')
export class Avaliation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @OneToMany(() => Quiz, (quiz) => quiz.avaliation)
  quizes: Quiz[];

  @ManyToOne(() => Company, (company) => company.avaliations)
  company: Company;

  @OneToMany(() => Question, (question) => question.avaliation)
  questions: Question[];
}
