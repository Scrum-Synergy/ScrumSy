import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Profile: React.FC = () => {

    const { user } = useAuth(); 

  return (
    <div className="flex items-center bg-gray-100  rounded-lg w-[600px] m-auto p-8">
      <div className="flex-shrink-0">
      <img src="/user.webp" alt="Default Avatar" className="w-20 h-20 rounded-full" />
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-bold">{user.username}</h2>
        {user.email && <p className="text-blue-500">Email: {user.email}</p>}
        {user.userType && <p className="text-green-500">User Type: {user.userType}</p>}
      </div>
    </div>
  );
};

export default Profile;
