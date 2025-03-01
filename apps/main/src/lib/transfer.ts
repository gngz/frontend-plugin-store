import { Account } from './domain/account';
import { Movement } from './domain/movement';

export class TransferHelper {
  private static _instance: TransferHelper;

  private static DEPOSIT_ACCOUNT = new Account({ name: 'Deposit' });

  static getInstance() {
    if (!TransferHelper._instance)
      return (TransferHelper._instance = new TransferHelper());

    return TransferHelper._instance;
  }

  deposit(account: Account, amount: number) {
    const movement = new Movement({
      from: TransferHelper.DEPOSIT_ACCOUNT,
      to: account,
      amount,
    });

    account.addMovement(movement);
  }

  transfer(from: Account, to: Account, amount: number) {
    if (from.balance < amount) throw new Error('Not enough balance');

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
