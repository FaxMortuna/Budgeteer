import React from 'react';

const Layout = ({ children }) => {
    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    background: 'linear-gradient(to right, #fff, #aaa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem'
                }}>
                    Budget Tracker
                </h1>
                <p style={{ color: 'var(--text-muted)' }}>Master your monthly finances</p>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;
