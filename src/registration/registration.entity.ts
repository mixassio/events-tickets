import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Ticket } from '../ticket/ticket.entity';
import { Event } from '../event/event.entity';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Ticket, ticket => ticket.registration)
  ticket: Ticket;

  @ManyToOne(type => Event, event => event.registration)
  event: Event;
}
