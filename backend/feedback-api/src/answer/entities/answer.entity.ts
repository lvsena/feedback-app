import { Alternative } from 'src/alternative/entities/alternative.entity';
import { Question } from 'src/question/entities/question.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  comment?: string;

  @ManyToOne(() => Alternative, (alternative) => alternative.answers)
  alternative: Alternative;

  @ManyToOne(() => Question, (question) => question.answers, {
    nullable: false,
  })
  question: Question;

  @ManyToOne(() => Quiz, (quiz) => quiz.answers, { nullable: false })
  quiz: Quiz;
}
