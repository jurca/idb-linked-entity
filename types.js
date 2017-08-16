import CursorDirection from 'indexed-db.es6/es2015/object-store/CursorDirection';

export type PrimaryKey = number | string | Date | Array<number | string | Date>;

type SimpleFilter = PrimaryKey | IDBKeyRange;
// eslint-disable-next-line flowtype/no-weak-types
export type Filter = ?(SimpleFilter | {[fieldpath: string]: SimpleFilter} | (any, PrimaryKey) => boolean);

// eslint-disable-next-line flowtype/no-weak-types
export type Order = CursorDirection | string | Array<string> | (Object, Object) => number;
