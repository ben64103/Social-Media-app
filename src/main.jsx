import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './app/store.js';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './tailwind.css';
import Root from './routes/root.jsx';
import NotFound from './pages/404/NotFound.jsx';
import Signup from './auth/pages/signup/Signup.jsx';
import SelectAccount from './components/signup/steps/SelectAccount.jsx';

console.log(store.getState());

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/signup',
    element: <Signup />,
    children: [
      // {
      //   path: '/signup/select-account',
      //   element: <SelectAccount />,
      // },
      {
        path: '/signup/info',
        // element: <Use,
      },

    ],
  },
  {
    path: '/signup/select-account',
    element: <SelectAccount />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
