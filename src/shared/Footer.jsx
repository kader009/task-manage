import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-base-300 dark:bg-gray-900 text-base-content dark:text-gray-200 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">TaskHub</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
            Manage your tasks, boost productivity, and stay organized with TaskHub.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-3">Services</h2>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-blue-500 transition">Task Management</Link></li>
            <li><Link to="#" className="hover:text-blue-500 transition">Team Collaboration</Link></li>
            <li><Link to="#" className="hover:text-blue-500 transition">Analytics</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link to="/about-us" className="hover:text-blue-500 transition">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:text-blue-500 transition">Contact</Link></li>
            <li><Link to="#" className="hover:text-blue-500 transition">Careers</Link></li>
          </ul>
        </div>

        {/* Stay Updated (Social Links only) */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Stay Updated</h4>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-2">
            {/* Facebook */}
            <Link to="https://www.facebook.com/ra.sel.7549/" className="hover:text-blue-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </Link>

            {/* Instagram */}
            <Link to="https://www.instagram.com/" className="hover:text-pink-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.257 2.242 1.32 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.32 3.608-.975.975-2.242 1.257-3.608 1.32-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.32-.975-.975-1.257-2.242-1.32-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.32-3.608.975-.975 2.242-1.257 3.608-1.32 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.071-1.563.072-2.954.341-4.036 1.423-1.082 1.082-1.351 2.473-1.423 4.036-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.072 1.563.341 2.954 1.423 4.036 1.082 1.082 2.473 1.351 4.036 1.423 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.563-.072 2.954-.341 4.036-1.423 1.082-1.082 1.351-2.473 1.423-4.036.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.072-1.563-.341-2.954-1.423-4.036-1.082-1.082-2.473-1.351-4.036-1.423-1.28-.059-1.688-.071-4.947-.071z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link to="https://www.linkedin.com/" className="hover:text-blue-700 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.273V1.727C24 .774 23.21 0 22.23 0zM7.06 20.452H3.545V9h3.515v11.452zM5.303 7.544a2.03 2.03 0 1 1 0-4.059 2.03 2.03 0 0 1 0 4.06zm14.847 12.908h-3.515v-5.605c0-1.337-.025-3.062-1.865-3.062-1.867 0-2.153 1.46-2.153 2.968v5.699h-3.515V9h3.377v1.561h.048c.471-.891 1.621-1.833 3.336-1.833 3.565 0 4.219 2.346 4.219 5.39v6.834z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-5 text-center text-sm">
        © {new Date().getFullYear()} TaskHub | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
