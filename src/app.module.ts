import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from "./auth/auth.service";
import { UserService } from "./user/user.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
    // AuthModule,
    UserModule,
  ],
  providers: [
    // UserService,
    // AuthService,
  ],
})
export class AppModule {}
