import React from 'react';
import { TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';

const StatCard = ({ title, value, change, icon: Icon, color }) => (
    <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-[var(--text-muted)] text-sm font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-[var(--text-page)]">{value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${color}`}>
                <Icon size={20} className="text-white" />
            </div>
        </div>
        <div className="mt-4 flex items-center gap-1 text-sm">
            <span className="text-green-500 font-bold">{change}</span>
            <span className="text-[var(--text-muted)]">vs last month</span>
        </div>
    </div>
);

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-[var(--text-page)]">Overview</h1>
                <p className="text-[var(--text-muted)]">Welcome back, here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value="₹45,231"
                    change="+20.1%"
                    icon={DollarSign}
                    color="bg-gradient-to-br from-green-400 to-emerald-600"
                />
                <StatCard
                    title="Active Events"
                    value="12"
                    change="+3"
                    icon={Calendar}
                    color="bg-gradient-to-br from-blue-400 to-indigo-600"
                />
                <StatCard
                    title="Total Tickets Sold"
                    value="1,234"
                    change="+12.5%"
                    icon={Ticket}
                    color="bg-gradient-to-br from-yellow-400 to-orange-500"
                />
                <StatCard
                    title="Total Attendees"
                    value="892"
                    change="+5.2%"
                    icon={Users}
                    color="bg-gradient-to-br from-purple-400 to-pink-600"
                />
            </div>

            {/* Charts Placeholder */}
            <div className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] h-96 flex items-center justify-center text-[var(--text-muted)]">
                Charts & Activity Feed Coming Soon
            </div>
        </div>
    );
};

// Required for StatCard icon prop
import { Ticket } from 'lucide-react';

export default Dashboard;
