import { useState } from 'react';

const TaskCategory = () => {
  // Sample task categories
  const categories = [
    { id: 1, name: 'Work', color: 'bg-blue-500' },
    { id: 2, name: 'Personal', color: 'bg-green-500' },
    { id: 3, name: 'Urgent', color: 'bg-red-500' },
    { id: 4, name: 'Completed', color: 'bg-gray-500' },
  ];

  // Sample tasks
  const tasks = [
    { id: 1, title: 'Finish report', category: 'Work' },
    { id: 2, title: 'Grocery shopping', category: 'Personal' },
    { id: 3, title: 'Prepare presentation', category: 'Urgent' },
    { id: 4, title: 'Workout', category: 'Personal' },
    { id: 5, title: 'Email updates', category: 'Work' },
    { id: 6, title: 'Plan weekend trip', category: 'Personal' },
    { id: 7, title: 'Team meeting', category: 'Work' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter tasks based on selected category
  const filteredTasks =
    selectedCategory === 'All'
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Task Categories
      </h2>

      {/* Categories Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === 'All'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-800'
          } transition-all duration-200`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.name
                ? `${category.color} text-white`
                : 'bg-gray-200 text-gray-800'
            } transition-all duration-200`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Task List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white shadow-lg rounded-lg p-4 border-b-8 border-blue-400 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Category: {task.category}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tasks in this category
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskCategory;
