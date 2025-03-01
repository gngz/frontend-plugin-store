import { Account } from './domain/account';
import { Movement } from './domain/movement';

export class TransferHelper {
  private static _instance: TransferHelper;

  static getInstance() {
    if (!TransferHelper._instance)
      return (TransferHelper._instance = new TransferHelper());

    return TransferHelper._instance;
  }

  transfer(from: Account, to: Account, amount: number) {
    const creditMovement = new Movement({
      from,
      to,
      amount,
    });

    const debitMovement = new Movement({
      from,
      to,
      amount: amount * -1,
    });

    from.addMovement(debitMovement);
    to.addMovement(creditMovement);
  }
}
