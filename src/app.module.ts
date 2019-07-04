import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './event/event.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
    AuthModule,
    UserModule,
    EventModule,
    TicketModule,
  ],
  providers: [],
})
export class AppModule {}
