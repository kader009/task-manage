const PricingSection = () => {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Pricing Plans
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Basic
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              $0
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Free forever for individual use
            </p>
            <ul className="mb-6">
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic Task Management
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                5 Projects
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Basic Support
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Daily Update
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full">Get Started</button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Pro
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              $29/mo
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For teams and professionals
            </p>
            <ul className="mb-6">
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Advanced Task Management
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Unlimited Projects
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Team Collaboration Tools
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Priority Support
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full">Get Started</button>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Enterprise
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              $99/mo
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              For large organizations
            </p>
            <ul className="mb-6">
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                All Pro Features
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Dedicated Account Manager
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Custom Integrations
              </li>
              <li className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                24/7 Support
              </li>
            </ul>
            <button className="btn bg-blue-600 text-white w-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
