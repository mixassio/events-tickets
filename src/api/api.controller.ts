import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly apiService: ApiService,
  ) {}

  @Post()
  async index(@Response() res: any, @Body() body: any) {
    if (!(body && body.method)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'bad request' });
    }

    if (!this.apiService[body.method]) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'RPC method not found' });
    }

    const { method, params, id } = body;
    return res
      .status(HttpStatus.OK)
      .json(await this.apiService[method](params, id));
  }
}
