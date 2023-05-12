import { useContext } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);
  const recentExpenses = expensesCtx.expenses.filter(
    (expense) => expense.date > date7DaysAgo
  );
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      periodName='Last 7 days'
      fallbackText={'No expenses for the last 7 days.'}
    />
  );
};

export default RecentExpenses;
