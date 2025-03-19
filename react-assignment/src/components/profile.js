import React from 'react';

const Profile = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-2xl shadow-lg text-center space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
      <p className="text-gray-700"><span className="font-medium">Name:</span> {name}</p>
      <p className="text-gray-700"><span className="font-medium">Email:</span> {email}</p>
    </div>
  );
};

export default Profile;
