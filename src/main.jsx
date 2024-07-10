import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Error from './pages/Error';


//Defining routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe/>,
      },
      {
        path: '/Portfolio',
        element: <Portfolio/>,
      },
      {
        path: '/Contact',
        element: <Contact/>,
      },
      {
        path: '/Error',
        element: <Contact/>,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
