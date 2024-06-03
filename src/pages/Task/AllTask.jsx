const AllTask = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">title</h3>
          <p>description</p>
          <p>Status: </p>
          <p>Priority: </p>
          <div className="mt-4 space-x-2">
            <button className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition">
              Edit
            </button>
            <button className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 transition">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
