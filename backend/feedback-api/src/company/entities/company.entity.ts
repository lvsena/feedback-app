import { Avaliation } from 'src/avaliation/entities/avaliation.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @OneToMany(() => Avaliation, (avaliation) => avaliation.company)
  avaliations: Avaliation[];
}
