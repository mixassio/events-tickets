import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
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

  @OneToMany(type => Registration, registration => registration.event)
  registration: Registration[];
}
