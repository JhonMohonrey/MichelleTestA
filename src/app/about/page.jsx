import React from 'react';

function page(props) {


    return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border border-pink-300">
                <h1 className="text-4xl font-extrabold text-pink-600 mb-4 text-center">About</h1>
                <p className="text-gray-600 text-start font-medium">
                     Hi! This is my very first project using <span className="font-bold text-pink-500">Next.js</span>.<br />
                    I jumped right in without tutorials, relying on my React experience to explore and build.<br />
                    Excited to see what I can create as I learn more!
                </p>
                <div className="mt-6 flex justify-center">
                    <a
                        href="/"
                        className="px-6 py-2 bg-pink-500 text-white rounded-lg font-semibold shadow hover:bg-pink-600 transition"
                    >
                        Go to Main Page
                    </a>
                </div>
            </div>
        </div>
    );
}

export default page;