import Transaction from 'idb-entity/es2015/Transaction';

export default class LinkedTransaction {
  _transaction: Transaction

  constructor(transaction: Transaction) {
    this._transaction = transaction;

    Object.freeze(this);
  }
}
