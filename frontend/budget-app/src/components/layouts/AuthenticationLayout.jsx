import React from 'react';

const AuthenticationLayout = ({ children }) => {
    return (
        <>
        <div>
        <h2>Expense Tracker App</h2>
            {children}
        </div>
        </>
    );
};

export default AuthenticationLayout;