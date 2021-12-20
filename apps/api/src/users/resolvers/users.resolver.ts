import { Args, Resolver } from '@nestjs/graphql';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  
  async findOneByEmail(@Args('email')email: string): Promise<User> {
    return this.usersService.findOneByEmail(email)
  }
}
