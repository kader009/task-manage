import { useEffect, useState } from 'react';
import SingleTask from './SingleTask';

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://task-manage-backend-blush.vercel.app/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setRecords(data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const Filter = (event) => {
    setRecords(
      tasks.filter((tsk) =>
        tsk.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleUpdate = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    setRecords((prevRecords) => prevRecords.filter((task) => task._id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="ms-3 mb-3 text-2xl font-semibold">All Task</h1>
      <div className="mb-4">
        <input
          onChange={Filter}
          type="text"
          className="block w-full max-w-xs px-4 py-2 text-sm font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none leading-relaxed"
          placeholder="Search Title"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <p className="text-black col-span-full text-center">Loading...</p>
        ) : records.length > 0 ? (
          records.map((task) => (
            <SingleTask
              key={task._id}
              task={task}
              handleUpdate={handleUpdate}
            />
          ))
        ) : (
          <p className="text-black col-span-full text-center">No tasks found</p>
        )}
      </div>
    </div>
  );
};

export default AllTask;
