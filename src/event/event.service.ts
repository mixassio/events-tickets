import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>) {}

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  async findByName(title: string): Promise<Event> {
    const result = await this.eventRepository.find({ title: title });
    return result[0];
  }
  
  async createEvent(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }
}