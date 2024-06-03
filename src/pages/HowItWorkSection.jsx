const HowItWorksSection = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Follow these simple steps to start managing your tasks efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 7H7v6h6V7z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 1: Sign Up
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Create your account by signing up with your email address or
              social media accounts.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10V6h8v4h5v5h-1v5H7v-5H6v-5H1v-5h5zm1-1h6V7H7v2z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 2: Create Tasks
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Add your tasks and organize them by priority, due date, or project
              to stay on top of your work.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-500 text-white p-4 rounded-full">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z" />
                  <path
                    fillRule="evenodd"
                    d="M10 5.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zM10 4a6 6 0 100 12 6 6 0 000-12zm0 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 3: Track Progress
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monitor your task completion status and track your progress with
              our intuitive dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
