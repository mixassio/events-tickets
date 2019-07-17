import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Registration } from '../registration/registration.entity';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  title: string;

  @ManyToOne(type => User, user => user.tickets)
  user: User;

  @OneToMany(type => Registration, registration => registration.ticket)
  registration: Registration[];
}
