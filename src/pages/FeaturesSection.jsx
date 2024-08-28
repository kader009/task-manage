const FeaturesSection = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Awesome Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover the amazing features that will boost your productivity and
            help you manage your tasks efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-blue-500 text-white p-3 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m5-3a9 9 0 11-9 9 9 9 0 010-18z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Task Prioritization
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Easily prioritize your tasks to focus on what matters most and
              complete your projects efficiently.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-green-500 text-white p-3 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Collaborative Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Work together with your team in real-time, share updates, and
              ensure everyone is on the same page.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-yellow-500 text-white p-3 rounded-full">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 12v8H4v-8H1l9-9 9 9h-3v8h-4v-8H8z" />
                </svg>
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Progress Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor your progress with visual charts and keep track of your
              task completion status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
