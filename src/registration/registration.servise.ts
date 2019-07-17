import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './registration.entity';

@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {}

  async findAll(): Promise<Registration[]> {
    return await this.registrationRepository.find();
  }

  async createRegistation({ ticketId, eventId }): Promise<Registration> {
    const reg = new Registration();
    reg.event = eventId;
    reg.ticket = ticketId;
    return this.registrationRepository.save(reg);
  }
}

