import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
                <Navbar />
                <DashboardContent />
            </div>
        </>
    );
}
export default Dashboard;