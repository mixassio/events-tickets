import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { TicketModule } from '../ticket/ticket.module';
import { EventModule } from '../event/event.module';
import { RegistrationModule } from '../registration/registration.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [UserModule, AuthModule, TicketModule, EventModule, RegistrationModule]
})
export class ApiModule {}
