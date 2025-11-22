import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const ExpenseForm = () => {
    const { addExpense } = useBudget();
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !amount) return;
        addExpense(name, amount);
        setName('');
        setAmount('');
        setIsExpanded(false);
    };

    if (!isExpanded) {
        return (
            <button
                onClick={() => setIsExpanded(true)}
                style={{ width: '100%', marginBottom: '1.5rem', background: 'var(--accent)', color: 'white', border: 'none' }}
            >
                + Add Expense
            </button>
        );
    }

    return (
        <div className="card">
            <h3 style={{ marginTop: 0 }}>Add New Expense</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Expense Name (e.g., Groceries)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount (€)"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    step="0.01"
                />
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <button type="button" onClick={() => setIsExpanded(false)} style={{ background: 'transparent', border: '1px solid #555' }}>
                        Cancel
                    </button>
                    <button type="submit" style={{ background: 'var(--accent)', color: 'white', border: 'none' }}>
                        Add Expense
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ExpenseForm;
