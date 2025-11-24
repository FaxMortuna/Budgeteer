import React from 'react';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
    return (
        <div style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1rem'
        }}>
            <header style={{ marginBottom: '1rem', flexShrink: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <img src="/favicon.png" alt="Budget Tracker Logo" style={{ width: '48px', height: '48px' }} />
                    <div style={{ textAlign: 'left' }}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '800',
                            color: 'var(--text-main)',
                            marginBottom: '0.5rem',
                            marginTop: 0,
                            lineHeight: 1
                        }}>
                            Budgeteer
                        </h1>
                        <p style={{ color: 'var(--text-muted)', margin: 0 }}>Master your monthly finances</p>
                    </div>
                </div>
                <ThemeToggle />
            </header>
            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0, // Critical for nested flex scrolling
                gap: '1rem'
            }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
