import React from 'react';
import ChirpList from './ChirpList';

const DashboardPage = ({ chirps }) => (
    <div>
        <h2>What's New</h2>
        <ChirpList />
    </div>
);

export default DashboardPage;