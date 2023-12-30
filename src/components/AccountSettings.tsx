// src/components/AccountSettings.tsx
import React from 'react';

const AccountSettings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Account Settings</h2>

        {/* Update user profile details */}
        <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
          {/* User Profile Details */}
          <div className="mb-4">
            <label htmlFor="userName" className="block text-white text-sm font-bold mb-2">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className="w-1/2 p-2 border-b border-white bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="userEmail" className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              className="w-1/2 p-2 border-b border-white bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Change password */}
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-white text-sm font-bold mb-2">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="w-1/2 p-2 border-b border-white bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-white text-sm font-bold mb-2">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-1/2 p-2 border-b border-white bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
