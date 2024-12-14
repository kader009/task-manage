const NewsletterSection = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign Up for Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Stay updated with the latest news and updates from our team.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-lg">
            <form className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="mt-4 sm:mt-0 w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
