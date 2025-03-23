import Link from 'next/link';
import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-10 w-full max-w-2xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
          >
            Login
          </button>
        </form>
        <Link href="/register" className=' text-blue-500 font-semibold hover:underline'>Don`t Have an Acount?</Link>
      </div>
    </div>
  );
};
export default LoginForm;

