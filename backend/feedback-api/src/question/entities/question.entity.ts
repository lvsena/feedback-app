import { Answer } from 'src/answer/entities/answer.entity';
import { Avaliation } from 'src/avaliation/entities/avaliation.entity';
import { Category } from 'src/category/entities/category.entity';
import { Value } from 'src/values/entities/value.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Value, (value) => value.questions)
  value: Value;

  @ManyToOne(() => Category, (category) => category.questions)
  category: Category;

  @OneToMany(() => Answer, (answer) => answer.alternative)
  answers: Answer[];

  @ManyToOne(() => Avaliation, (avaliation) => avaliation.questions)
  avaliation: Avaliation;
}
