import { Company } from 'src/company/entities/company.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => Company, (company) => company.users)
  company: Company;

  @OneToMany(() => Quiz, (quiz) => quiz.evaluated)
  quizesEvaluated: Quiz[];

  @OneToMany(() => Quiz, (quiz) => quiz.evaluator)
  quizesEvaluator: Quiz[];
}
