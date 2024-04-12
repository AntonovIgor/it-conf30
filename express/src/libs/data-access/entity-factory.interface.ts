import { StorableEntity } from './storable-entity.interface.js';

export interface EntityFactory<T extends StorableEntity<ReturnType<T['toPOJO']>>> {
  create(entityData: ReturnType<T['toPOJO']>): T;
}
