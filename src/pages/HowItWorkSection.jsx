const HowItWorksSection = () => {
  return (
    <div className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Follow these simple steps to start managing your tasks efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-500 text-white p-4 rounded-full">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-5h2v5h-2zm1-6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
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
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-500 text-white p-4 rounded-full">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 5.917a1.75 1.75 0 00-2.744-1.396L5.25 11.25 2.992 9.75a.75.75 0 10-.984 1.165l3 2a.75.75 0 00.738 0l12-6.666a.75.75 0 011.496.499V19.75a.75.75 0 001.5 0V5.917z" />
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
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-yellow-500 text-white p-4 rounded-full">
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1a11 11 0 11-8 4.11 11 11 0 0116 0 11 11 0 01-8 18 11 11 0 010-22zm-2.5 14a.5.5 0 100 1 .5.5 0 000-1zm-1-7.5a.5.5 0 100 1 .5.5 0 000-1zm5.5 7.5a.5.5 0 100 1 .5.5 0 000-1zm-3-1.5a.5.5 0 100 1 .5.5 0 000-1zm1-6a.5.5 0 100 1 .5.5 0 000-1zm2 8a.5.5 0 100 1 .5.5 0 000-1z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Step 3: Update Task
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
