import { inject, injectable } from 'inversify';

import { BaseMemoryRepository } from '../../libs/data-access/index.js';
import { UserEntity } from './user.entity.js';
import { UserFactory } from './user.factory.js';
import { Component } from '../../types/components.enum.js';

@injectable()
export class UserRepository extends BaseMemoryRepository<UserEntity> {
  constructor(@inject(Component.UserFactory) factory: UserFactory) {
    super(factory);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);

    if (! user) {
      return null;
    }

    return this.factory.create(user);
  }
}
