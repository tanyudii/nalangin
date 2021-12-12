import { Controller, Patch } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FindOneUserDto } from '../dto/find-one-user.dto';
import { FindAllUserDto } from '../dto/find-all-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @MessagePattern({ cmd: 'createUser' })
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUsers' })
  findAll(@Payload() findAllUserDto: FindAllUserDto) {
    return this.usersService.findAll(findAllUserDto);
  }

  @MessagePattern({ cmd: 'findOneUser' })
  findOne(@Payload() findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneUserDto.id);
  }

  @MessagePattern({ cmd: 'updateUser' })
  @Patch(':id')
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern({ cmd: 'removeUser' })
  remove(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.remove(updateUserDto.id);
  }
}
