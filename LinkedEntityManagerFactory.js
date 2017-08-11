// @flow

import EntityManagerFactory from 'idb-entity/es2015/EntityManagerFactory';

export default class LinkedEntityManagerFactory {
  _entityManagerFactory: EntityManagerFactory

  constructor(entityManagerFactory: EntityManagerFactory) {
    this._entityManagerFactory = entityManagerFactory;
  }

  createEntityManager() {}

  close(): Promise<void> {
    return this._entityManagerFactory.close();
  }
}
