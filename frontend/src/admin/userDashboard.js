import React from 'react';
import UserHeader from '../components/userHeader';
import './dashboard.css';
import DashboardContent from './dashboardContent';
import Sidebar from './sidebar';


const UserDashboard = () => {
    return (
        <div className="dashboard">
            <UserHeader />
            {/* Main */}
            <div className="dashboard__main">
                <DashboardContent />
                <Sidebar />
            </div>

        </div>
    )
}

export default UserDashboard;