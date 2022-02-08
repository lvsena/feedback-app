import { Answer } from 'src/answer/entities/answer.entity';
import { Category } from 'src/category/entities/category.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('alternatives')
export class Alternative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  points: number;

  @ManyToOne(() => Category, (category) => category.questions)
  category: Category;

  @OneToMany(() => Answer, (answer) => answer.alternative)
  answers: Answer[];
}
