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

interface RequestBody {
  id: string;
  method: string;
  params: any;
}

@Controller('api')
export class ApiController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly apiService: ApiService,
  ) {}

  @Post()
  async index(@Response() res: any, @Body() body: RequestBody) {
    if (!(body && body.method)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'bad request' });
    }

    if (!this.apiService[body.method]) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'RPC method not found' });
    }

    const { method, params, id } = body;
    const result = await this.apiService[method](params);
    const response = { ...result, id };

    return res.status(HttpStatus.OK).json(response);
  }
}
