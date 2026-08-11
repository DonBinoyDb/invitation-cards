import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock } from 'lucide-react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Strict role-based check for Admin only
    if (username.toLowerCase() === 'rahul' && password === '123456') {
      signIn(username, 'admin');
      navigate('/admin');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="max-w-md w-full bg-white p-10 border border-gray-100 shadow-xl rounded-xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brand-dark/5 rounded-full flex items-center justify-center">
            <Lock size={32} className="text-brand-dark" />
          </div>
        </div>
        
        <h2 className="text-3xl font-black font-sans uppercase tracking-tight text-brand-dark mb-2 text-center">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">Access the restricted management portal</p>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 text-sm mb-6 border border-red-100 rounded-lg font-medium text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Username
            </label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 outline-none transition-all"
              placeholder="Enter admin username"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 outline-none transition-all"
              placeholder="Enter admin password"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-dark text-white font-bold text-sm px-6 py-4 uppercase tracking-widest hover:bg-black transition-colors mt-8 rounded-lg shadow-md"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
