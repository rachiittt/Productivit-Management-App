import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginSignupPage = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState({ text: '', type: '' });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const session = localStorage.getItem('sessionUser');
        if (session) navigate('/');
    }, [navigate]);

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const showMessage = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    };

    const getStoredUsers = () => {
        return JSON.parse(localStorage.getItem('users')) || [];
    };

    const saveUser = (user) => {
        const users = getStoredUsers();
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' });

        const normalizedEmail = formData.email.trim().toLowerCase();
        const password = formData.password.trim();

        if (!normalizedEmail || !password) {
            showMessage('Both email and password are required', 'error');
            setLoading(false);
            return;
        }

        if (!isValidEmail(normalizedEmail)) {
            showMessage('Please enter a valid email address', 'error');
            setLoading(false);
            return;
        }

        const users = getStoredUsers();
        const user = users.find(u => u.email === normalizedEmail);

        if (!user || user.password !== password) {
            showMessage('Invalid email or password.', 'error');
            setLoading(false);
            return;
        }

        localStorage.setItem('sessionUser', JSON.stringify({ email: user.email }));
        showMessage('Login successful! Redirecting...');
        navigate('/');
        setLoading(false);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: '', type: '' });

        const normalizedEmail = formData.email.trim().toLowerCase();
        const password = formData.password.trim();
        const confirmPassword = formData.confirmPassword.trim();

        if (!isValidEmail(normalizedEmail)) {
            showMessage('Please enter a valid email address.', 'error');
            setLoading(false);
            return;
        }
        if (password.length < 6) {
            showMessage('Password must be at least 6 characters long.', 'error');
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            showMessage('Passwords do not match.', 'error');
            setLoading(false);
            return;
        }

        const users = getStoredUsers();
        const existingUser = users.find(u => u.email === normalizedEmail);
        if (existingUser) {
            showMessage('This email is already registered. Please login instead.', 'error');
            setLoading(false);
            return;
        }

        saveUser({
            email: normalizedEmail,
            password: password,
            created_at: new Date().toISOString()
        });

        showMessage('Signup successful! You can now log in.');
        setIsLoginMode(true);
        setFormData({ email: '', password: '', confirmPassword: '' });
        setLoading(false);
    };

    const handleSwitchMode = () => {
        setIsLoginMode(!isLoginMode);
        setFormData({ email: '', password: '', confirmPassword: '' });
        setMessage({ text: '', type: '' });
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>{isLoginMode ? 'Login' : 'Sign Up'}</h2>

                {message.text && (
                    <div className={`message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={isLoginMode ? handleLogin : handleSignup}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            disabled={loading}
                            autoComplete={isLoginMode ? 'current-password' : 'new-password'}
                        />
                    </div>

                    {!isLoginMode && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                disabled={loading}
                                autoComplete="new-password"
                            />
                        </div>
                    )}

                    <Link to="home"><button type="submit" disabled={loading} className="auth-button">
                        {loading ? <span className="spinner"></span> : (isLoginMode ? 'Login' : 'Sign Up')}
                        </button>
                    </Link>
                </form>

                <div className="switch-mode">
                    {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                    <button 
                        type="button" 
                        onClick={handleSwitchMode} 
                        className="switch-button"
                        disabled={loading}
                    >
                        {isLoginMode ? 'Sign Up' : 'Login'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupPage;
