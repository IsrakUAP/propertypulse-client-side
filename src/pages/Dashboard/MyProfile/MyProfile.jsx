import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">My Profile</h2>
        <div className="flex items-center mb-4">
          <img
            src={user.photoURL}
            alt="User"
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="text-xl font-semibold">{user.displayName}</p>
            <p className="text-xl font-semibold">{user.email}</p>
            {user.role && <p className="text-gray-600">Role: {user.role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
