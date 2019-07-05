import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ticket } from '../ticket/ticket.entity';
import { Event } from '../event/event.entity';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => Ticket, ticket => ticket.registration)
    tickets: Ticket[];

  @OneToMany(type => Event, event => event.registration)
    events: Event[];
}