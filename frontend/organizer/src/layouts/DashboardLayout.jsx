import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const DashboardLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-page)] font-sans transition-colors">
            {/* Sidebar (Desktop: Fixed, Mobile: Toggle) */}
            <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 lg:static`}>
                <Sidebar />
            </div>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content Area */}
            <div className="lg:pl-64 flex flex-col min-h-screen transition-all duration-300">
                <TopBar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

                <main className="flex-1 pt-24 p-6 lg:p-8">
                    <div className="max-w-7xl mx-auto animate-in fade-in duration-500">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
