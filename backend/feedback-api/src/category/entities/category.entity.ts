import { Alternative } from 'src/alternative/entities/alternative.entity';
import { Question } from 'src/question/entities/question.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Question, (question) => question.value)
  questions: Question[];

  @OneToMany(() => Alternative, (alternative) => alternative.category)
  alternatives: Alternative[];
}
