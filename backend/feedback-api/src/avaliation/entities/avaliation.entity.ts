import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('availations')
export class Availation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
