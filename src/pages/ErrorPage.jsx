import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          It might have been moved or deleted.
        </p>
        <Link
          to={"/"}
          className="inline-block btn btn-primary text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
