import React, { useState } from 'react';
import { Search, Filter, Download, User, Mail, Smartphone } from 'lucide-react';

const Attendees = () => {
    const [search, setSearch] = useState('');

    // Mock Attendees Data
    const attendees = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "+1 234 567 8900", ticket: "VIP Pass", status: "Checked In" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "+1 987 654 3210", ticket: "General Admission", status: "Registered" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "+1 555 123 4567", ticket: "General Admission", status: "Checked In" },
        { id: 4, name: "Diana Prince", email: "diana@example.com", phone: "+1 777 888 9999", ticket: "VIP Pass", status: "Registered" },
        { id: 5, name: "Evan Wright", email: "evan@example.com", phone: "+1 444 555 6666", ticket: "Early Bird", status: "Checked In" },
    ];

    const filteredAttendees = attendees.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-page)]">Attendees List</h1>
                    <p className="text-[var(--text-muted)]">Manage ticket holders and guests.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] rounded-xl text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] transition-colors text-sm font-medium">
                        <Filter size={16} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors text-sm font-medium">
                        <Download size={16} /> Export CSV
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-3 text-[var(--text-muted)]" size={20} />
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    className="w-full pl-12 pr-4 py-2.5 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all text-[var(--text-page)]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Table */}
            <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[var(--bg-subtle)] border-b border-[var(--border-color)]">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Attendee</th>
                                <th className="px-6 py-4 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Ticket Type</th>
                                <th className="px-6 py-4 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--border-color)]">
                            {filteredAttendees.map((attendee) => (
                                <tr key={attendee.id} className="hover:bg-[var(--bg-subtle)]/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold">
                                                {attendee.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-[var(--text-page)]">{attendee.name}</p>
                                                <p className="text-xs text-[var(--text-muted)]">ID: #{1000 + attendee.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-sm text-[var(--text-page)]">
                                                <Mail size={14} className="text-[var(--text-muted)]" /> {attendee.email}
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-[var(--text-page)]">
                                                <Smartphone size={14} className="text-[var(--text-muted)]" /> {attendee.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                                            {attendee.ticket}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${attendee.status === 'Checked In'
                                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                                            }`}>
                                            {attendee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 underline">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendees;
