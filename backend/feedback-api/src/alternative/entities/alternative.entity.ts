import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('alternatives')
export class Alternative {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  value: number;
}
