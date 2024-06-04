/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleTask = ({ task, handleUpdate }) => {
  const { _id, title, description, status, priority } = task;
  const handleDelete = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await fetch(`http://localhost:5000/tasks/${_id}`, {
        method: 'DELETE',
        headers:{
          authorization:`Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleUpdate(_id);
        toast.success('task deleted successfully!');
      } else {
        console.error('Failed to delete task');
        toast.error('Failed to delete task.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while deleting the task.');
    }
  };

  return (
    <div>
      <div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-base font-bold">{title}</p>
          <p>Description: {description}</p>
          <p>Status: {status}</p>
          <p>Priority: {priority}</p>
          <div className="mt-4 space-x-2">
            <button className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition">
              <Link to={`edit/${_id}`}>Edit</Link>
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
