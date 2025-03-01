import { Entity } from '../core/domain/entity';
import { UID } from '../core/domain/uid';
import { Account } from './account';

type MovementProps = {
  from: Account;
  to: Account;
  amount: number;
};

export class Movement extends Entity<UID> {
  constructor(private _props: MovementProps) {
    const id = new UID();
    super(id);
    if (!(_props.amount > 0)) throw new Error('Amount should be positive');
  }

  get amount() {
    return this._props.amount;
  }

  get from() {
    return this._props.from;
  }

  get to() {
    return this._props.to;
  }
}
