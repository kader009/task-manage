import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditTask = () => {
  const tasks = useLoaderData();
  console.log(tasks);

  const {
    title: initialTitle,
    description: initialDescription,
    status: initialStatus,
    priority: initialPriority,
    _id,
  } = tasks;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    setTitle(initialTitle || '');
    setDescription(initialDescription || '');
    setStatus(initialStatus || '');
    setPriority(initialPriority || '');
  }, [initialTitle, initialDescription, initialStatus, initialPriority]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskList = { title, description, status, priority };

    try {
      const response = await fetch(
        `https://task-manage-backend-blush.vercel.app/tasks/${_id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(taskList),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success('Tasks updated successfully!');
      } else {
        toast.error('Failed to update tasks.');
      }
    } catch (error) {
      toast.error('An error occurred while updating the tasks.');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="my-3 text-2xl font-semibold text-center">
          Edit Your Task
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Task title"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Task description"
              rows={4}
              required
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-gray-700"
            >
              Priority
            </label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
