import { Question } from 'src/question/entities/question.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('values')
export class Value {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Question, (question) => question.value)
  questions: Question[];
}
