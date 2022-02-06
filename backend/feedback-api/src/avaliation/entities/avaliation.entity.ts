import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('availations')
export class Availation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
