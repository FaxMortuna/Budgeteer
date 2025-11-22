import React from 'react';
import { format, addMonths, subMonths, parse } from 'date-fns';

const MonthSelector = ({ currentMonth, setCurrentMonth }) => {
    const date = parse(currentMonth, 'yyyy-MM', new Date());

    const handlePrev = () => {
        setCurrentMonth(format(subMonths(date, 1), 'yyyy-MM'));
    };

    const handleNext = () => {
        setCurrentMonth(format(addMonths(date, 1), 'yyyy-MM'));
    };

    return (
        <div className="card flex-between" style={{ padding: '1rem 2rem' }}>
            <button onClick={handlePrev}>&lt;</button>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>{format(date, 'MMMM yyyy')}</h2>
            <button onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default MonthSelector;
