import React, { useState, useEffect } from 'react';
import { User, Mail, Shield, Key, Smartphone, MapPin, CheckCircle, Save, Loader2, Camera, Lock } from 'lucide-react';
import axios from 'axios';

const Profile = () => {
    const [loading, setLoading] = useState(false);
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

    // Admin Data State
    const [adminDetails, setAdminDetails] = useState({
        name: '',
        email: '',
        role: 'Super Admin',
        phone: '',
        location: ''
    });

    useEffect(() => {
        fetchAdminProfile();
    }, []);

    const fetchAdminProfile = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/profile');
            if (response.data) {
                setAdminDetails({
                    name: response.data.fullName || '',
                    email: response.data.email || '',
                    role: response.data.role || 'Super Admin',
                    phone: response.data.phone || '',
                    location: response.data.location || ''
                });
            }
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    const handleChange = (e) => {
        setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.put('http://localhost:5000/api/admin/profile', {
                fullName: adminDetails.name,
                phone: adminDetails.phone,
                location: adminDetails.location
            });
            // Simulate delay for UX
            await new Promise(resolve => setTimeout(resolve, 800));
            alert('Profile updated successfully!');
            window.location.reload();
        } catch (error) {
            console.error("Error updating profile:", error);
            alert('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 relative pb-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-[var(--text-page)]">Your Profile</h1>
                <p className="text-[var(--text-muted)] mt-2">Manage your admin profile and security settings.</p>
            </div>

            {/* Main Profile Card */}
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-sm overflow-hidden">
                {/* Gradient Banner */}
                <div className="h-32 bg-gradient-to-r from-[#FFDA8A] to-[#ffc107]"></div>

                <div className="px-8 pb-8 relative">
                    {/* Avatar (Overlapping) */}
                    <div className="absolute -top-12 left-8">
                        <div className="relative group">
                            <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full p-1 shadow-lg overflow-hidden border-2 border-white dark:border-slate-800">
                                <div className="w-full h-full bg-gradient-to-br from-violet-100 to-violet-200 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center text-3xl font-bold text-violet-600 dark:text-violet-300">
                                    {adminDetails.name.charAt(0) || <User size={32} />}
                                </div>
                            </div>
                            {/* Camera Icon (Visual only for now since upload logic wasn't in original admin) */}
                            <button className="absolute bottom-1 right-1 p-2 bg-[#FFDA8A] text-gray-900 rounded-full shadow-lg hover:bg-[#ffc107] transition-transform hover:scale-105" title="Change Photo">
                                <Camera size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Info Header */}
                    <div className="pt-16 flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-bold text-[var(--text-page)]">{adminDetails.name || 'Admin User'}</h2>
                            <p className="text-[var(--text-muted)]">{adminDetails.email}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-[#FFDA8A]/20 text-orange-700 dark:text-[#FFDA8A]">
                                    <Shield size={10} /> {adminDetails.role}
                                </span>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                                    <CheckCircle size={10} /> Active
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleUpdateProfile} className="mt-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-page)] flex items-center gap-2">
                                    <User size={16} className="text-[#FFDA8A]" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={adminDetails.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFDA8A]/50 focus:border-[#FFDA8A] transition-all"
                                />
                            </div>

                            {/* Email (Disabled) */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-page)] flex items-center gap-2">
                                    <Mail size={16} className="text-[#FFDA8A]" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    value={adminDetails.email}
                                    disabled
                                    className="w-full px-4 py-2.5 bg-gray-100 dark:bg-slate-800/80 border border-[var(--border-color)] rounded-xl text-[var(--text-muted)] cursor-not-allowed"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-page)] flex items-center gap-2">
                                    <Smartphone size={16} className="text-[#FFDA8A]" /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={adminDetails.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFDA8A]/50 focus:border-[#FFDA8A] transition-all"
                                />
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-page)] flex items-center gap-2">
                                    <MapPin size={16} className="text-[#FFDA8A]" /> Location
                                </label>
                                <input
                                    type="text"
                                    name="location"
                                    value={adminDetails.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2.5 bg-white dark:bg-slate-900 border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFDA8A]/50 focus:border-[#FFDA8A] transition-all"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-color)]">
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-6 py-2.5 bg-[#FFDA8A] hover:bg-[#ffc107] text-gray-900 font-semibold rounded-xl shadow-lg shadow-[#FFDA8A]/20 transition-all flex items-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Security Section (Stacked below) */}
            <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] shadow-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg"><Lock size={20} /></div>
                    <div>
                        <h3 className="text-lg font-bold text-[var(--text-page)]">Security & Recovery</h3>
                        <p className="text-sm text-[var(--text-muted)]">Manage your account security and 2FA.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Password Change */}
                    <div className="flex items-center justify-between p-4 border border-[var(--border-color)] rounded-xl bg-[var(--bg-page)]">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg">
                                <Key size={18} />
                            </div>
                            <div>
                                <p className="font-medium text-[var(--text-page)]">Login Password</p>
                                <p className="text-sm text-[var(--text-muted)]">Last changed: 3 months ago</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-[var(--border-color)] rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            Change Password
                        </button>
                    </div>

                    {/* Recovery Email */}
                    <div className="flex items-center justify-between p-4 border border-[var(--border-color)] rounded-xl bg-[var(--bg-page)]">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg">
                                <Mail size={18} />
                            </div>
                            <div>
                                <p className="font-medium text-[var(--text-page)]">Recovery Email</p>
                                <p className="text-sm text-[var(--text-muted)]">ad***@eventorbit.com</p>
                            </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-[var(--border-color)] rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
