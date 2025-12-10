import React from 'react';

const Profile = () => {
    return (
        <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Personal Information</h2>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-8">
                <div className="flex items-center gap-6 mb-8">
                    <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-3xl">
                        U
                    </div>
                    <button className="text-blue-600 font-medium hover:bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 transition-colors">
                        Change Photo
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            defaultValue="John User"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            defaultValue="user@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none"
                        />
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                        type="tel"
                        defaultValue="+1 234 567 890"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 outline-none"
                    />
                </div>

                <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Update Profile
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Security</h3>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium text-gray-900">Password</p>
                        <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                    </div>
                    <button className="text-gray-600 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 font-medium font-sm">
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
