import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alternatives')
export class Alternative {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;
}
