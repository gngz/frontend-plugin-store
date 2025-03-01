import { Entity } from '../core/domain/entity';
import { UID } from '../core/domain/uid';
import { Movement } from './movement';

type AccountProps = {
  name: string;
};

export class Account extends Entity<UID> {
  protected _movements: Movement[];
  protected _name: string;

  constructor(props: AccountProps) {
    const id = new UID();
    super(id);

    this._movements = [];
    this._name = props.name;
  }

  get name() {
    return this._name;
  }

  public addMovement(movement: Movement) {
    const isRelatedToAccount =
      movement.from.id === this.id || movement.to.id === this.id;

    if (!isRelatedToAccount)
      throw new Error('This movement is not related with this account');

    this._movements.push(movement);
  }

  public removeMovement(movement: Movement) {
    this._movements = this._movements.filter(
      (aMovement) => aMovement.id === movement.id,
    );
  }

  get balance() {
    return this._movements.reduce((prev, current) => prev + current.amount, 0);
  }
}
