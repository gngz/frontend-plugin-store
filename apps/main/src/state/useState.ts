import { useState } from 'react';
import { Account } from '../lib/domain/account';

export function useAppState() {
  const [accounts, setAccounts] = useState<Account[]>([
    new Account({
      name: 'John Doe',
    }),
    new Account({
      name: 'Jane Doe',
    }),
  ]);

  return {
    accounts,
    addAccount: (account: Account) => setAccounts((prev) => [...prev, account]),
    removeAccount: (account: Account) =>
      setAccounts((prev) =>
        prev.filter((aAccount) => account.id !== aAccount.id),
      ),
  };
}
