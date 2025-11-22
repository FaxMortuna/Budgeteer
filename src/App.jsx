import { useState } from 'react';
import { BudgetProvider } from './context/BudgetContext';
import Layout from './components/Layout';
import { format } from 'date-fns';
import MonthSelector from './components/MonthSelector';
import BudgetOverview from './components/BudgetOverview';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [currentMonth, setCurrentMonth] = useState(format(new Date(), 'yyyy-MM'));

  return (
    <BudgetProvider>
      <Layout>
        <MonthSelector currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <BudgetOverview currentMonth={currentMonth} />
        <ExpenseForm />
        <ExpenseList currentMonth={currentMonth} />
      </Layout>
    </BudgetProvider>
  );
}

export default App;
