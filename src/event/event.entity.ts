import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {User} from '../user/user.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  title: string;

  @ManyToMany(type => User)
    @JoinTable()
    users: User[];

}