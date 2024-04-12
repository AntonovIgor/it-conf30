import { randomUUID } from 'node:crypto';
import { injectable } from 'inversify';

import { Entity } from './base-entity.abstract.js';
import { EntityFactory } from './entity-factory.interface.js';
import { StorableEntity } from './storable-entity.interface.js';
import { Repository } from './repository.interface.js';

@injectable()
export abstract class BaseMemoryRepository<
  T extends Entity & StorableEntity<ReturnType<T['toPOJO']>>
> implements Repository<T> {

  protected entities: Map<T['id'], ReturnType<T['toPOJO']>> = new Map();

  constructor(
    protected factory: EntityFactory<T>
  ) { }

  public async findById(id: T['id']): Promise<T | null> {
    const foundEntity = this.entities.get(id) || null;
    if (!foundEntity) {
      return null;
    }

    return this.factory.create(foundEntity);
  }

  public async save(entity: T): Promise<void> {
    if (!entity.id) {
      entity.id = randomUUID();
    }

    this.entities.set(entity.id, entity.toPOJO());
  }

  public async update(entity: T): Promise<void> {
    if (!this.entities.has(entity.id)) {
      throw new Error('Entity not found');
    }

    this.entities.set(entity.id, entity.toPOJO());
  }

  public async deleteById(id: T['id']): Promise<void> {
    if (!this.entities.has(id)) {
      throw new Error('Entity not found');
    }

    this.entities.delete(id);
  }
}
