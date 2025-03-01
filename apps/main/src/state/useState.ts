import { useState } from 'react';
import { Account } from '../lib/domain/account';
import { TransferHelper } from '../lib/transfer';

function getInitialState(): Account[] {
  const state = [
    new Account({
      name: 'John Doe',
    }),
    new Account({
      name: 'Jane Doe',
    }),
  ];

  TransferHelper.getInstance().deposit(state[0], 500);
  TransferHelper.getInstance().deposit(state[1], 1000);

  return state;
}

export function useAppState() {
  const [accounts, setAccounts] = useState<Account[]>(getInitialState());

  return {
    accounts,
    addAccount: (account: Account) => setAccounts((prev) => [...prev, account]),
    removeAccount: (account: Account) =>
      setAccounts((prev) =>
        prev.filter((aAccount) => account.id !== aAccount.id),
      ),
  };
}
