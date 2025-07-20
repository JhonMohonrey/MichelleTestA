"use client";
import app from '@/firebaseConfig'; // Adjust the import path as necessary
import React from 'react';
import Link from 'next/link';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function page(props) {
    // React.useEffect(() => {
    //     const auth = getAuth(app);
    //     createUserWithEmailAndPassword(auth, "testuser@example.com", "testpassword")
    //     .then((userCredential) => {
    //         console.log("✅ Firebase connected. User created:", userCredential.user);
    //     })
    //     .catch((error) => {
    //         console.log("⚠️ Firebase error:", error.message);
    //     });
    // }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-500 text-white py-4 shadow-md">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">Test page</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-10 h-screen">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">This is a Test Page</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Welcome to the modern design! Explore the features and enjoy the experience.
                    </p>

                    <div className="mt-5">
                            <a href='/' className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                                Go Back to Main Page
                            </a>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-4 mt-10">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">&copy; 2025 Modern Test Page. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default page;