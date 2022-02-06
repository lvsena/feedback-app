import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('values')
export class Value {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
