import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import route from './routes/routes.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={route} />
        <ToastContainer />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
