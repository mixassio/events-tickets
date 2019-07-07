import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Ticket } from '../ticket/ticket.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 100, nullable: true })
  password: string | undefined;

  @Column({ length: 100, nullable: true })
  passwordHash: string | undefined;

  @Column({ length: 100, nullable: true })
  email: string;

  @OneToMany(type => Ticket, ticket => ticket.user)
  tickets: Ticket[];
}
