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
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <MonthSelector currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
          <BudgetOverview currentMonth={currentMonth} />
          <ExpenseForm />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', minHeight: 0, paddingRight: '5px' }}>
          <ExpenseList currentMonth={currentMonth} />
        </div>
      </Layout>
    </BudgetProvider>
  );
}

export default App;
