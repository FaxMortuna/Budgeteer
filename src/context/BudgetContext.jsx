import { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

const BudgetContext = createContext();

export const useBudget = () => {
    return useContext(BudgetContext);
};

export const BudgetProvider = ({ children }) => {
    // Initial state from localStorage or default
    const [expenses, setExpenses] = useState(() => {
        const savedExpenses = localStorage.getItem('budget_tracker_expenses');
        return savedExpenses ? JSON.parse(savedExpenses) : [];
    });

    const [budget, setBudget] = useState(() => {
        const savedBudget = localStorage.getItem('budget_tracker_budget');
        return savedBudget ? parseFloat(savedBudget) : 0;
    });

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('budget_tracker_theme') || 'dark';
    });

    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('budget_tracker_expenses', JSON.stringify(expenses));
    }, [expenses]);

    useEffect(() => {
        localStorage.setItem('budget_tracker_budget', budget.toString());
    }, [budget]);

    useEffect(() => {
        localStorage.setItem('budget_tracker_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // Actions
    const addExpense = (name, amount, date = new Date()) => {
        const newExpense = {
            id: uuidv4(),
            name,
            amount: parseFloat(amount),
            date: format(date, 'yyyy-MM-dd'), // Store as string YYYY-MM-DD
            createdAt: new Date().toISOString(),
        };
        setExpenses((prev) => [newExpense, ...prev]);
    };

    const deleteExpense = (id) => {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    };

    const editExpense = (id, updatedData) => {
        setExpenses((prev) =>
            prev.map((expense) =>
                expense.id === id ? { ...expense, ...updatedData } : expense
            )
        );
    };

    const getExpensesByMonth = (monthStr) => {
        // monthStr format: "yyyy-MM"
        return expenses.filter((expense) => expense.date.startsWith(monthStr));
    };

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const value = {
        expenses,
        budget,
        theme,
        setBudget,
        addExpense,
        deleteExpense,
        editExpense,
        getExpensesByMonth,
        toggleTheme,
    };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
};
