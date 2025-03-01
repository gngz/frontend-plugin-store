import { ID } from './id';

export abstract class Entity<TKey extends ID> {
  constructor(private _id: TKey) {}

  public get id(): string {
    return this._id.value;
  }
}
