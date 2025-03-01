import {
  Select,
  MenuItem,
  Box,
  Card,
  FormControl,
  InputLabel,
  CardContent,
  CardHeader,
} from '@mui/material';
import { Account } from './lib/domain/account';
import { useState } from 'react';

type SelectAccountProps = Readonly<{
  accounts: Account[];
}>;

export function SelectAccount({ accounts }: SelectAccountProps) {
  const [value, setValue] = useState<string>();
  return (
    <Card variant="outlined">
      <CardHeader title="Choose an account" />
      <CardContent>
        <FormControl fullWidth>
          <InputLabel id="account">Account</InputLabel>
          <Select
            labelId="account"
            value={value}
            label="Account"
            onChange={(e) => setValue(e.target.value)}
            color="primary"
          >
            {accounts.map((account) => (
              <MenuItem key={account.id} value={account.id}>
                {account.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}
