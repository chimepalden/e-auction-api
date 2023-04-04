import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') userId: string): Promise<User> {
    return this.usersService.findOne(userId);
  }

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<User> {
    return this.usersService.findByEmail(email);
  }

  @Patch(':id')
  async update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') userId: string): Promise<User> {
    return this.usersService.remove(userId);
  }
}
