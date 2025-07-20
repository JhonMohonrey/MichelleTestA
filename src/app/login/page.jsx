'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // change to your protected route
    } catch (err) {
      setError(err.message);
    }
  };

  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
            <form onSubmit={login} className="flex flex-col gap-4">
            <input
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button className="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700 transition">
                Login
            </button>
            </form>
            <p className="text-sm text-gray-600 mt-4 text-center">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-600 hover:underline">
                Sign up
            </a>
            </p>
        </div>
        </div>
  );
}
