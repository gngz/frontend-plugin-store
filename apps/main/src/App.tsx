import { SelectAccount } from './SelectAccount';
import { useAppState } from './state/useState';

const App = () => {
  const { accounts } = useAppState();
  return (
    <div>
      <SelectAccount accounts={accounts} />
    </div>
  );
};

export default App;
