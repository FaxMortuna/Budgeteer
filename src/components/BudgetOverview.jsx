import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';

const BudgetOverview = ({ currentMonth }) => {
    const { budget, setBudget, getExpensesByMonth } = useBudget();
    const [isEditing, setIsEditing] = useState(false);
    const [newBudget, setNewBudget] = useState(budget);

    const expenses = getExpensesByMonth(currentMonth);
    const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const remaining = budget - totalSpent;
    const percentage = Math.min((totalSpent / budget) * 100, 100);

    const handleSave = () => {
        setBudget(parseFloat(newBudget));
        setIsEditing(false);
    };

    return (
        <div className="card">
            <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <h3 style={{ margin: 0 }}>Monthly Budget</h3>
                {isEditing ? (
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input
                            type="number"
                            value={newBudget}
                            onChange={(e) => setNewBudget(e.target.value)}
                            style={{ width: '100px', margin: 0 }}
                            autoFocus
                        />
                        <button onClick={handleSave} className="text-success">Save</button>
                    </div>
                ) : (
                    <button onClick={() => setIsEditing(true)} style={{ fontSize: '0.9rem', padding: '0.4em 0.8em' }}>
                        Edit Budget
                    </button>
                )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', textAlign: 'center', marginBottom: '1.5rem' }}>
                <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Budget</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>€{budget.toFixed(2)}</div>
                </div>
                <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Spent</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--danger)' }}>€{totalSpent.toFixed(2)}</div>
                </div>
                <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Remaining</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: remaining >= 0 ? 'var(--success)' : 'var(--danger)' }}>
                        €{remaining.toFixed(2)}
                    </div>
                </div>
            </div>

            <div style={{ height: '10px', background: '#333', borderRadius: '5px', overflow: 'hidden' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${percentage}%`,
                        background: percentage > 100 ? 'var(--danger)' : 'var(--accent-secondary)',
                        transition: 'width 0.5s ease-in-out'
                    }}
                />
            </div>
        </div>
    );
};

export default BudgetOverview;
