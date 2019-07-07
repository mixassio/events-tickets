import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Ticket } from '../ticket/ticket.entity';
import { Registration } from '../registration/registration.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  title: string;

  @ManyToMany(type => Ticket)
  @JoinTable()
  tickets: Ticket[];

  @ManyToOne(type => Registration, registration => registration.events)
  registration: Registration;
}
