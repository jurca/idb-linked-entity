// @flow

import EntityManagerFactory from 'idb-entity/es2015/EntityManagerFactory';
import LinkedEntityManager from './LinkedEntityManager';

export default class LinkedEntityManagerFactory {
  _entityManagerFactory: EntityManagerFactory

  constructor(entityManagerFactory: EntityManagerFactory) {
    this._entityManagerFactory = entityManagerFactory;

    Object.freeze(this);
  }

  createEntityManager(): LinkedEntityManager {
    const entityManager = this._entityManagerFactory.createEntityManager();
    return new LinkedEntityManager(entityManager);
  }

  async close(): Promise<void> {
    return await this._entityManagerFactory.close();
  }
}
