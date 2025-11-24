import React from 'react';
import { useBudget } from '../context/BudgetContext';
import { format, parseISO } from 'date-fns';

const ExpenseList = ({ currentMonth }) => {
    const { getExpensesByMonth, deleteExpense } = useBudget();
    const expenses = getExpensesByMonth(currentMonth);

    if (expenses.length === 0) {
        return (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '2rem' }}>
                No expenses found for this month.
            </div>
        );
    }

    // Sort by date descending (newest first)
    const sortedExpenses = [...expenses].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="card" style={{ padding: '1rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>History</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {sortedExpenses.map((expense) => (
                    <div
                        key={expense.id}
                        className="expense-item"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.02)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <div>
                            <div style={{ fontWeight: 'bold' }}>{expense.name}</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                {format(parseISO(expense.createdAt), 'dd MMM yyyy')}
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                                €{expense.amount.toFixed(2)}
                            </div>
                            <button
                                onClick={() => deleteExpense(expense.id)}
                                style={{
                                    padding: '0.4em',
                                    background: 'transparent',
                                    color: 'var(--text-muted)',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                                title="Delete"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExpenseList;
