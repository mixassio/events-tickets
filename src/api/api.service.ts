import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';



@Injectable()
export class ApiService {
  constructor(
  private readonly authService: AuthService,
  private readonly userService: UserService) {}

  async authUser({ username, password }) {
    const user = await this.userService.getUserByUsername(username);
    if (user) {
      if (await this.userService.compareHash(password, user.passwordHash)) {
        const result = await this.authService.createToken(user.id, user.username);
        return { result, error: '' };
      }
      return { error: 'Password wrong'};
    }
    return { error: 'User not found'};
  }


}
