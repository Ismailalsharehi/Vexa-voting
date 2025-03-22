import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg transform rotate-[-5deg] transition-transform duration-300 ease-in-out hover:rotate-[5deg]">
        <h2 className="text-2xl text-center mb-6 font-semibold text-gray-700">Login</h2>
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
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
