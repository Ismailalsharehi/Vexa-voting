import React from 'react';

const ForgetPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-10 w-full max-w-2xl rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Change Your Password</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 mb-2">Enter the old password</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2"> Enter New Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-600 mb-2">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              required 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
          >
            Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
