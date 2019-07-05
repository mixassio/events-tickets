import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './registration.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  // providers: [RegistrationService],
})
export class RegistrationModule {}
