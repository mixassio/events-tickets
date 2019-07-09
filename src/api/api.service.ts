import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { EventService } from '../event/event.service';
import { TicketService } from '../ticket/ticket.service';
import { RegistrationService } from '../registration/registration.servise';


@Injectable()
export class ApiService {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly eventService: EventService,
    private readonly ticketService: TicketService,
    private readonly registrationService: RegistrationService,
  ) {}

  async authUser({ username, password }) {
    const user = await this.userService.getUserByUsername(username);
    if (user) {
      if (await this.userService.compareHash(password, user.passwordHash)) {
        const result = await this.authService.createToken(
          user.id,
          user.username,
        );
        return { result, error: '' };
      }
      return { error: 'Password wrong' };
    }
    return { error: 'User not found' };
  }

  async startLoad() {
    const users = await this.userService.getUsers();
    const events = await this.eventService.findAll();
    const tickets = await this.ticketService.findAll();
    const registers = await this.registrationService.findAll();
    const result = { users, events, tickets, registers };
    return { result, error: '' }
  }
}

