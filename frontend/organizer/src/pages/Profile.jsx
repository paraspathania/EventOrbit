import React, { useState } from 'react';
import { ShieldCheck, Upload, Building, User, Mail, Phone, CheckCircle } from 'lucide-react';

const Profile = () => {
    const [kycStatus, setKycStatus] = useState('Pending'); // Pending, Approved, Rejected

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
                <div>
                    <h1 className="text-2xl font-bold text-[var(--text-page)]">Organizer Profile</h1>
                    <p className="text-[var(--text-muted)]">Manage your organization details and KYC.</p>
                </div>
                {kycStatus === 'Approved' ? (
                    <span className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full font-bold text-sm">
                        <ShieldCheck size={18} /> KYC Verified
                    </span>
                ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full font-bold text-sm">
                        <ShieldCheck size={18} /> KYC Pending
                    </span>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Organization Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 space-y-6">
                        <h3 className="font-bold text-[var(--text-page)] text-lg">Organization Details</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[var(--text-muted)]">Organization Name</label>
                                <div className="relative">
                                    <Building className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input type="text" defaultValue="EventOrbit Demo Corp" className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] outline-none focus:ring-2 focus:ring-yellow-400/50" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[var(--text-muted)]">Contact Person</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input type="text" defaultValue="John Organizer" className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] outline-none focus:ring-2 focus:ring-yellow-400/50" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[var(--text-muted)]">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input type="email" defaultValue="org@demo.com" className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] outline-none focus:ring-2 focus:ring-yellow-400/50" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-[var(--text-muted)]">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <input type="tel" defaultValue="+1 234 567 8900" className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] outline-none focus:ring-2 focus:ring-yellow-400/50" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-medium text-[var(--text-muted)]">Address</label>
                            <textarea className="w-full p-4 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] outline-none focus:ring-2 focus:ring-yellow-400/50 min-h-[100px]" defaultValue="123 Event Street, Tech City, NY"></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button className="px-6 py-2.5 bg-[var(--text-page)] text-[var(--bg-page)] font-bold rounded-xl hover:opacity-90 transition-opacity">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column: KYC Uploads */}
                <div className="space-y-6">
                    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6">
                        <h3 className="font-bold text-[var(--text-page)] text-lg mb-4">KYC Verification</h3>
                        <p className="text-sm text-[var(--text-muted)] mb-6">Upload government issued ID to verify your organization status.</p>

                        <div className="space-y-4">
                            <div className="border-[2px] border-dashed border-[var(--border-color)] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-blue-500 mb-3 group-hover:scale-110 transition-transform">
                                    <Upload size={24} />
                                </div>
                                <p className="text-sm font-medium text-[var(--text-page)]">Upload Business License</p>
                                <p className="text-xs text-[var(--text-muted)]">PDF, JPG or PNG</p>
                            </div>

                            <div className="border-[2px] border-dashed border-[var(--border-color)] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-[var(--bg-subtle)] transition-colors cursor-pointer group">
                                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-500 mb-3 group-hover:scale-110 transition-transform">
                                    <Upload size={24} />
                                </div>
                                <p className="text-sm font-medium text-[var(--text-page)]">Upload Tax ID (EIN)</p>
                                <p className="text-xs text-[var(--text-muted)]">PDF, JPG or PNG</p>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                            Submit for Verification
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
