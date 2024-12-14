import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <section className="p-8">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to <span className="text-blue-500">TaskHub</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Simplify, organize, and collaborate—TaskHub is built for you.
          </p>
        </div>

        {/* Introduction */}
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          <p className="mb-4">
            TaskHub is your ultimate task management platform designed to help
            individuals and teams stay productive. Whether you are tracking
            personal goals or managing complex team projects, we provide
            intuitive tools that streamline your workflow.
          </p>
          <p>
            With a modern, user-friendly interface and powerful features,
            TaskHub adapts to your needs so you can focus on what truly matters:
            achieving your goals.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
            Why Choose TaskHub?
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>
              <span className="font-semibold text-blue-500">Customizable </span>
              task labels, deadlines, and reminders for seamless tracking.
            </li>
            <li>
              Collaborative tools that simplify teamwork and enhance
              productivity.
            </li>
            <li>
              Secure cloud storage ensures your data is always safe and
              accessible anywhere.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Get Started Today
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Take control of your tasks and streamline your workflow with
            TaskHub. Sign up today and experience task management like never
            before.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Back Home
            </Link>
            <a
              href="#learn-more"
              className="text-blue-500 py-2 px-6 rounded-lg hover:text-blue-600 hover:underline transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
