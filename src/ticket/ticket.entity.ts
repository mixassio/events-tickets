import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from '../user/user.entity';
import { Registration } from '../registration/registration.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  title: string;

  @ManyToOne(type => User, user => user.tickets)
    user: User;
  
  @ManyToOne(type => Registration, registration => registration.tickets)
    registration: Registration;

}