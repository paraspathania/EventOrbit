import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, User, Check, ArrowRight, Loader2, Sparkles } from 'lucide-react';

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    // 'user' or 'organizer'
    const [isOrganizer, setIsOrganizer] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        const role = isOrganizer ? 'organizer' : 'user';
        const { success, error: apiError } = await signup(formData.name, formData.email, formData.password, role);

        if (success) {
            navigate('/');
        } else {
            setError(apiError || 'Failed to create account');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--bg-page)] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-[var(--bg-card)] rounded-2xl shadow-xl overflow-hidden border border-[var(--border-color)]">
                {/* Header */}
                <div className={`p-8 text-center text-white transition-colors duration-300 ${isOrganizer ? 'bg-gradient-to-br from-purple-600 to-indigo-700' : 'bg-gradient-to-br from-blue-600 to-cyan-600'}`}>
                    <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                    <p className="text-white/90">
                        {isOrganizer ? "Start managing events today!" : "Join us and explore amazing events."}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                    {/* Role Toggle */}
                    <div
                        onClick={() => setIsOrganizer(!isOrganizer)}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-start gap-4 mb-6 group ${isOrganizer
                                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                                : 'border-[var(--border-color)] hover:border-blue-300'
                            }`}
                    >
                        <div className={`p-2 rounded-lg ${isOrganizer ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500'} transition-colors`}>
                            <Sparkles size={24} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h3 className={`font-semibold ${isOrganizer ? 'text-purple-700 dark:text-purple-400' : 'text-[var(--text-page)]'}`}>
                                    Become an Organizer
                                </h3>
                                {isOrganizer && <Check size={18} className="text-purple-600" />}
                            </div>
                            <p className="text-xs text-[var(--text-muted)] mt-1">
                                Check this to create and manage your own events.
                            </p>
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-100 dark:border-red-800">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-[var(--text-page)] mb-1.5">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-[var(--text-page)] mb-1.5">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-page)] mb-1.5">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                placeholder="••••••"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[var(--text-page)] mb-1.5">Confirm</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-[var(--bg-page)] border border-[var(--border-color)] rounded-xl text-[var(--text-page)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                placeholder="••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full text-white font-semibold py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2 
                            ${isOrganizer
                                ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-500/30'
                                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30'}`}
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={20} />
                        ) : (
                            <>
                                <span>Create Account</span>
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-sm text-[var(--text-muted)]">
                            Already have an account?{' '}
                            <Link to="/login" className={`font-semibold hover:underline ${isOrganizer ? 'text-purple-600 hover:text-purple-700' : 'text-blue-600 hover:text-blue-700'}`}>
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
