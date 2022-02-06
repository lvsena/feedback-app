import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
