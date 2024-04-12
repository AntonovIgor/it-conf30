import { injectable } from 'inversify';

import { EntityFactory } from '../../libs/data-access/index.js';
import { UserEntity } from './user.entity.js';
import { User } from './user.interface.js';

@injectable()
export class UserFactory implements EntityFactory<UserEntity> {
  public create(entityData: User): UserEntity {
    const user = new UserEntity();
    user.populate(entityData);

    return user;
  }
}
