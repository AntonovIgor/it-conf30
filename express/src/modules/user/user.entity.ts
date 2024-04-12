import { injectable } from 'inversify';

import { Entity } from '../../libs/data-access/index.js';
import { StorableEntity } from '../../libs/data-access/storable-entity.interface.js';
import { User } from './user.interface.js';

@injectable()
export class UserEntity extends Entity implements StorableEntity<User> {
  public email: string;
  public firstname: string;
  public password: string;

  public toPOJO(): User {
    return {
      id: this.id ?? '',
      email: this.email,
      firstname: this.firstname,
      password: this.password,
    }
  }

  public populate(user?: User): void {
    if (! user) {
      return;
    }

    this.id = user.id ?? '';
    this.email = user.email;
    this.firstname = user.firstname;
    this.password = user.password;
  }

}
