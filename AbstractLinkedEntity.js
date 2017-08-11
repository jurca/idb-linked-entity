// @flow

import AbstractEntity from 'idb-entity/es2015/AbstractEntity';

export default class AbstractLinkedEntity extends AbstractEntity {
  constructor(data: Object) { // eslint-disable-line flowtype/no-weak-types
    super(data);

    if (this.constructor === AbstractLinkedEntity) {
      throw new TypeError('The AbstractLinkedEntity class is abstract and must be overridden');
    }
  }

  static foreignKeys: Array<{[keypath: string]: Class<AbstractLinkedEntity>}> = []
}
