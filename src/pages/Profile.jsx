import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';

const ProfilePage = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://task-manage-backend-blush.vercel.app/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  console.log(userInfo);

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
              <span className="text-base font-semibold">Name: </span>
              {user?.displayName}
            </p>
            <p>
              <span className="text-base font-semibold">Email: </span>
              {user?.email}
            </p>
          </div>
          <button className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            <Link to={`edit-profile/${userInfo?._id}`}>Edit Profile</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
