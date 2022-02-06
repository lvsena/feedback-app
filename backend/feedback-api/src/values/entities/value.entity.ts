import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('values')
export class Value {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
