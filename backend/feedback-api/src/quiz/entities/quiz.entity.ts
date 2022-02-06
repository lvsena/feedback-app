import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizes')
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
