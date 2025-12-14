import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';

// Simple Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();
    if (loading) return <div>Loading...</div>;
    // For now, allow everyone or handle redirect later. 
    // Since we mock login, defaulting to allow for setup check.
    return children;
};

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    {/* Add more routes here later */}
                    <Route path="create-event" element={<div className="text-[var(--text-page)]">Create Event Page</div>} />
                    <Route path="my-events" element={<div className="text-[var(--text-page)]">My Events Page</div>} />
                    <Route path="analytics" element={<div className="text-[var(--text-page)]">Analytics Page</div>} />
                    <Route path="settings" element={<div className="text-[var(--text-page)]">Settings Page</div>} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
