import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quizes')
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
