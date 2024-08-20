import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import ContactUsPage from '../pages/ContactUsPage';
import AboutUs from '../pages/AboutUs';
import Login from '../pages/Account/Login';
import Register from '../pages/Account/Register';
import ErrorPage from '../pages/ErrorPage';
import DashboardLayout from '../Layout/DashboardLayout';
import ProfilePage from '../pages/Profile';
import DashboardHome from '../Layout/DashboardHome';
import AddTask from '../pages/Task/AddTask';
import AllTask from '../pages/Task/AllTask';
import PrivateRoute from './private/PrivateRoute';
import EditTask from '../pages/Task/EditTask';
import EditProfile from '../pages/EditProfile';
import Content from '../pages/Content';

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
        path: 'profile/edit-profile/:id',
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://task-manage-backend-blush.vercel.app/users/get/${params.id}`)
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
        path: 'content',
        element: (
          <PrivateRoute>
            <Content />
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
      {
        path: 'alltask/edit/:id',
        element: (
          <PrivateRoute>
            <EditTask />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://task-manage-backend-blush.vercel.app/tasks/${params.id}`),
      },
    ],
  },
]);

export default route;
