import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const { logOut, user } = useAuth();
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={''} className="btn btn-ghost text-xl">
            TaskHub
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoURL ||
                    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={''} className="justify-between">
                  Home
                </Link>
              </li>
              <li>
                <Link to={'/about-us'}>About Us</Link>
              </li>
              <li>
                <Link to={'/contact-us'}>Contact Us</Link>
              </li>
              <li>
                <Link to={'/dashboard'}>Dashboard</Link>
              </li>
              <li>
                <Link to={'/login'}>Login</Link>
              </li>
              <li>
                <Link to={'/register'}>SignUp</Link>
              </li>
              <li>
                <button onClick={logOut} className="btn btn-primary">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
