import EntityManager from 'idb-entity/es2015/EntityManager';
import AbstractLinkedEntity from './AbstractLinkedEntity';
import type {PrimaryKey, Filter, Order} from './types';

export default class LinkedEntityManager {
  _entityManager: EntityManager

  constructor(entityManager: EntityManager) {
    this._entityManager = entityManager;

    Object.freeze(this);
  }

  contains(entity: AbstractLinkedEntity): boolean {
    return this._entityManager.contains(entity);
  }

  containsByPrimaryKey(entityClass: Class<AbstractLinkedEntity>, primaryKey: PrimaryKey): boolean {
    return this._entityManager.containsByPrimaryKey(entityClass, primaryKey);
  }

  async find<E: AbstractLinkedEntity>(entityClass: Class<E>, primaryKey: PrimaryKey): E {
  }

  async query<E: AbstractLinkedEntity>(
    entityClass: Class<E>,
    filter: Filter = null,
    order: Order = null,
    offset: number = 0,
    limit: ?number = null,
  ): Array<E> {
  }

  async persist<E: AbstractLinkedEntity>(entity: E): E {}
}
