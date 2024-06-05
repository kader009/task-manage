import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="h-96 flex items-center justify-center bg-gray-100">
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">
            User Profile
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src={user.photoURL}
              alt="Profile Picture"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <div className="mb-4">
            <p>
              <strong>Name:</strong> {user?.displayName}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            <Link to={`edit-profile/${user?._id}}`}>Edit Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
