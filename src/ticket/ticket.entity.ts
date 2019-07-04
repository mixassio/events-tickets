import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from '../user/user.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  title: string;

  @ManyToOne(type => User, user => user.tickets)
    user: User;

}