import { Container } from 'inversify';

import { Component } from '../../types/components.enum.js';
import { UserController } from './user.controller.js';
import { Controller } from '../../libs/rest/index.js';
import { EntityFactory, Repository } from '../../libs/data-access/index.js';
import { UserRepository } from './user.repository.js';
import { UserEntity } from './user.entity.js';
import { UserService } from './user.service.js';
import { UserFactory } from './user.factory.js';
import { ExceptionFilter } from '../../types/exception-filter.interface.js';
import { UserExceptionFilter } from './user.exception-filter.js';

export function createUserContainer() {
  const container = new Container();
  container.bind<Controller>(Component.UserController).to(UserController).inSingletonScope();
  container.bind<Repository<UserEntity>>(Component.UserRepository).to(UserRepository).inSingletonScope();
  container.bind<UserService>(Component.UserService).to(UserService).inSingletonScope();
  container.bind<EntityFactory<UserEntity>>(Component.UserFactory).to(UserFactory).inSingletonScope();
  container.bind<ExceptionFilter>(Component.UserExceptionFilter).to(UserExceptionFilter).inSingletonScope();

  return container;
}
