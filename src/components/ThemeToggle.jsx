import React from 'react';
import { useBudget } from '../context/BudgetContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useBudget();

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'transparent',
                border: '1px solid var(--text-muted)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                fontSize: '1.2rem',
                padding: 0
            }}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
