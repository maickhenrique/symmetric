import React from 'react';
import RevenueReport from './RevenueReport';
import RevenueChart from './RevenueChart';
import Dashboard from './Dashboard';
import Charts from './Charts';
import HorizontalMenu from '../VerticalMenu';

const HeaderBidding = () => {
    return (
        <>
            <HorizontalMenu />
            <RevenueReport />
            <RevenueChart />
            <Dashboard />
            <Charts />
        </>
    );
}

export default HeaderBidding;