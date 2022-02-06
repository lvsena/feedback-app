import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('answers')
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  comment: string;

  @Column()
  question: string;

  @Column()
  alternative: string;

  @Column()
  quiz: string;
}
