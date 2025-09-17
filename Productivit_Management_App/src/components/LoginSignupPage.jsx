import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSignupPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('sessionUser');
    if (session) navigate('/home'); // redirect to home if already logged in
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

  const getUsers = () => JSON.parse(localStorage.getItem('users')) || {};
  const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (!email || !password) {
      showMessage('Email and password are required', 'error');
      setLoading(false);
      return;
    }
    if (!isValidEmail(email)) {
      showMessage('Invalid email format', 'error');
      setLoading(false);
      return;
    }

    const users = getUsers();
    if (!users[email] || users[email].password !== password) {
      showMessage('Email or password incorrect', 'error');
      setLoading(false);
      return;
    }

    localStorage.setItem('sessionUser', JSON.stringify({ email }));
    showMessage('Login successful! Redirecting...');
    setTimeout(() => navigate('/home'), 1000);
    setLoading(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();
    const confirmPassword = formData.confirmPassword.trim();

    if (!isValidEmail(email)) {
      showMessage('Invalid email format', 'error');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      showMessage('Password must be at least 6 characters', 'error');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      showMessage('Passwords do not match', 'error');
      setLoading(false);
      return;
    }

    const users = getUsers();
    if (users[email]) {
      showMessage('Email already registered. Please login.', 'error');
      setLoading(false);
      return;
    }

    users[email] = { password };
    saveUsers(users);

    showMessage('Signup successful! You can now login.');
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
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
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
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={loading}
                autoComplete="new-password"
              />
            </div>
          )}

          {/* Original styled submit button */}
          <button type="submit" disabled={loading} className={`auth-button ${isLoginMode ? '' : 'signup-button'}`}>
            {loading ? 'Processing...' : (isLoginMode ? 'Login' : 'Sign Up')}
          </button>
        </form>

        <div className="switch-mode">
          {isLoginMode ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={handleSwitchMode} disabled={loading} className="switch-button">
            {isLoginMode ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPage;