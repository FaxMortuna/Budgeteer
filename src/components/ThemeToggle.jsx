import React from 'react';
import { useBudget } from '../context/BudgetContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useBudget();

    return (
        <label className="theme-switch" title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            <input
                type="checkbox"
                checked={theme === 'light'}
                onChange={toggleTheme}
            />
            <span className="slider"></span>
        </label>
    );
};

export default ThemeToggle;
