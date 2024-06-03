import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import ContactUsPage from '../pages/ContactUsPage';
import AboutUs from '../pages/AboutUs';
import BlogSection from '../pages/BlogSection';
import Login from '../pages/Account/Login';
import Register from '../pages/Account/Register';
import ErrorPage from '../pages/ErrorPage';
import DashboardLayout from '../Layout/DashboardLayout';
import ProfilePage from '../pages/Profile';
import DashboardHome from '../Layout/DashboardHome';
import AddTask from '../pages/Task/AddTask';
import AllTask from '../pages/Task/AllTask';
import PrivateRoute from './private/PrivateRoute';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contact-us',
        element: <ContactUsPage />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/blog',
        element: <BlogSection />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: 'addtask',
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: 'alltask',
        element: (
          <PrivateRoute>
            <AllTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default route;
