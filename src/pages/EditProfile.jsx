import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditProfile = () => {
  const user = useLoaderData();
  console.log(user);

  const Handlesubmit = async (e) => {
    // const token = localStorage.getItem('token')
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { name, email, password };
    console.log(userData);

    try {
      const response = await fetch(
        `https://task-manage-backend-blush.vercel.app/user/${user?.email}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            // authorization:`Bearer ${token}`
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('profile edit successfully!');
      } else {
        toast.error('Failed to profile edit.');
      }
    } catch (error) {
      toast.error('An error occurred while edit the profile.');
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-sm p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
        <form onSubmit={Handlesubmit}>
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="text-gray-700 font-semibold">Email</span>
            </label>
            <input
              name="email"
              defaultValue={user?.email}
              placeholder="Enter your email"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="text-gray-700 font-semibold">Name</span>
            </label>
            <input
              name="name"
              defaultValue={user?.name}
              placeholder="Enter your name"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label mb-2">
              <span className="text-gray-700 font-semibold">Password</span>
            </label>
            <input
              name="password"
              placeholder="Enter new password"
              type="password"
              className="input input-bordered w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-control mt-6">
            <button className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
