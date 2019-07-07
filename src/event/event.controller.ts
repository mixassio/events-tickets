import { Get, Post, Body, Controller, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getProducts(): Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':name')
  getEventByName(@Param() params: any): Promise<Event> {
    return this.eventService.findByName(params.name);
  }

  @Post()
  createProduct(@Body() body: Event) {
    if (body && body.title) {
      return this.eventService.createEvent(body);
    }
  }
}
