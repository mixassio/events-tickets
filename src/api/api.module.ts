import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [UserModule, AuthModule]
})
export class ApiModule {}
