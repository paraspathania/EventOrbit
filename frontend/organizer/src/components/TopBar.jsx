import React, { useState } from 'react';
import { Bell, Search, User, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const TopBar = ({ toggleSidebar }) => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="h-20 bg-[var(--bg-page)]/80 backdrop-blur-md border-b border-[var(--border-color)] fixed top-0 right-0 left-0 lg:left-64 z-30 px-6 flex items-center justify-between transition-all">

            {/* Mobile Toggle & Search */}
            <div className="flex items-center gap-4 flex-1">
                <button onClick={toggleSidebar} className="lg:hidden p-2 text-[var(--text-muted)]">
                    <Menu size={24} />
                </button>

                <div className="hidden md:flex items-center gap-3 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-xl border border-[var(--border-color)] w-full max-w-md focus-within:ring-2 focus-within:ring-yellow-400/50 transition-all">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search events, orders..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none outline-none text-[var(--text-page)] placeholder-gray-400 w-full text-sm font-medium"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <button onClick={toggleTheme} className="p-2.5 text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] rounded-full transition-colors">
                    {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <div className="relative">
                    <button className="p-2.5 text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] rounded-full transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-[var(--bg-page)]"></span>
                    </button>
                </div>

                <div className="h-10 w-[1px] bg-[var(--border-color)] mx-2"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-[var(--text-page)]">{user?.name || 'Organizer'}</p>
                        <p className="text-xs text-[var(--text-muted)]">Administrator</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                        {user?.name?.charAt(0) || 'O'}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
