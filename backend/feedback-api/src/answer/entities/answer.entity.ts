import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @Column()
  question: string;

  @Column()
  alternative: string;

  @Column()
  quiz: string;
}
