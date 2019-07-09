import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find();
  }

  async findByName(title: string): Promise<Ticket> {
    const result = await this.ticketRepository.findOne({ title: title });
    return result;
  }

}

