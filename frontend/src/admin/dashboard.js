import React from 'react';
import BuyerHeader from '../components/buyerHeader';
import './dashboard.css';
import DashboardContent from './dashboardContent';
import Sidebar from './sidebar';


function Dashboard() {
    return (
        <div className="dashboard">
            <BuyerHeader />
            {/* Main */}
            <div className="dashboard__main">
                <DashboardContent />
                <Sidebar />
            </div>

        </div>
    )
}

export default Dashboard;
