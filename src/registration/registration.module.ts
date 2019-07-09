import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from './registration.entity';
import { RegistrationService } from './registration.servise';

@Module({
  imports: [TypeOrmModule.forFeature([Registration])],
  providers: [RegistrationService],
  exports: [RegistrationService]
})
export class RegistrationModule {}
