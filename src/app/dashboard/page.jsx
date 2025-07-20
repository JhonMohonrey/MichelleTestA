'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
      } else {
        setUserName(user.displayName || 'User'); // Get name
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [router]);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {userName}!</h1>
      <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded-lg">
        Logout
      </button>
      <p>
        Something something bihira lang ako maligo 
      </p>
    </div>
  );
}
