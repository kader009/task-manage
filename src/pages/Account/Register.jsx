import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { Createuser, googleLogin, githubLogin } = useAuth();

  const handleGoogle = () => {
    // const token = localStorage.getItem('token');
    googleLogin().then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch(`https://task-manage-backend-blush.vercel.app/users`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            // 'authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // localStorage.setItem('token', data?.token);
            console.log(data);
          });
      }
    });
  };

  const handleGithub = () => {
    githubLogin();
  };

  const HandleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    Createuser(email, password);
    form.reset();
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-6">
            Register to TaskHub
          </h2>
          <form onSubmit={HandleRegister}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-900 dark:text-white bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
          <div className="flex items-center justify-center my-6">
            <span className="border-t border-gray-300 dark:border-gray-600 flex-grow"></span>
            <span className="mx-4 text-gray-600 dark:text-gray-400">OR</span>
            <span className="border-t border-gray-300 dark:border-gray-600 flex-grow"></span>
          </div>
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center bg-red-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-red-700 transition"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.17 0 5.63 1.38 7.33 2.68l5.52-5.52C33.23 3.53 28.91 2 24 2 14.71 2 7.01 7.86 3.82 15.68l6.43 5.11C12.66 13.76 17.9 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M46.9 24.6c0-1.43-.13-2.79-.36-4.11H24v8.19h12.9c-.55 2.85-2.23 5.27-4.72 6.9l7.17 5.69C43.74 36.35 46.9 30.97 46.9 24.6z"
              />
              <path
                fill="#FBBC05"
                d="M10.25 28.39a12.79 12.79 0 0 1-.68-4.14c0-1.44.24-2.83.67-4.15l-6.42-5.11C2.36 17.75 1.5 20.29 1.5 24c0 3.71.85 7.24 2.32 10.31l6.43-5.92z"
              />
              <path
                fill="#4285F4"
                d="M24 47c5.9 0 10.85-1.95 14.46-5.28l-7.18-5.69c-2.02 1.35-4.61 2.19-7.28 2.19-5.43 0-10.05-3.64-11.71-8.58l-6.44 5.9C7.01 41.78 14.71 47 24 47z"
              />
            </svg>
            Register with Google
          </button>
          <button
            onClick={handleGithub}
            className="w-full flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition dark:bg-black"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.579 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.237-3.221-.124-.305-.535-1.529.117-3.186 0 0 1.008-.322 3.301 1.23.956-.265 1.983-.398 3.003-.403 1.02.005 2.047.138 3.004.403 2.292-1.552 3.299-1.23 3.299-1.23.654 1.657.242 2.881.118 3.186.77.839 1.237 1.911 1.237 3.221 0 4.61-2.803 5.623-5.473 5.921.43.369.813 1.096.813 2.213 0 1.598-.015 2.886-.015 3.276 0 .32.218.694.825.576 4.765-1.584 8.198-6.081 8.198-11.383 0-6.627-5.373-12-12-12z" />
            </svg>
            Register with GitHub
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              All ready have an account?{' '}
              <Link
                to={'/login'}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
