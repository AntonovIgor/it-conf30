import { inject, injectable } from 'inversify';

import { Component } from '../../types/components.enum.js';
import { UserEntity } from './user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserRepository } from './user.repository.js';
import { UserNotFoundException } from './errors/user-not-found.exception.js';
import { UserExistException } from './errors/user-exists.exception.js';

@injectable()
export class UserService {
  constructor(
    @inject(Component.UserRepository) private readonly userRepository: UserRepository,
  ) {}

  public async register(dto: CreateUserDto): Promise<UserEntity> {
    const existUser = await this.userRepository.findByEmail(dto.email);
    if (existUser) {
      throw new UserExistException();
    }

    const user = new UserEntity();
    user.populate(dto);
    this.userRepository.save(user);

    return user;
  }

  public async show(id: string): Promise<UserEntity> {
    const user =  await this.userRepository.findById(id);
    if (! user) {
      throw new UserNotFoundException();
    }

    return user;
  }
}
