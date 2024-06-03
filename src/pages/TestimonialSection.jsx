const TestimonialsSection = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hear what our users have to say about our task management tool.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-400">CEO, Company</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              This task management tool has transformed the way we work. The
              intuitive interface and powerful features make managing projects a
              breeze.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="User"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Jane Smith
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Project Manager
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              I love how easy it is to keep track of tasks and deadlines. The
              collaboration features have improved our teams productivity
              immensely.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="User"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Michael Johnson
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Freelancer</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              As a freelancer, this tool helps me stay organized and meet my
              clients deadlines. Highly recommend to anyone who needs to manage
              tasks efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
