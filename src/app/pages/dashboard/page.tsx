import RootLayout from '@/app/layouts/RootLayout';
import React from 'react';

'use client';


const DashboardPage: React.FC = () => {
    return (
        <RootLayout>
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
        </div>
        </RootLayout>
    );
};

export default DashboardPage;