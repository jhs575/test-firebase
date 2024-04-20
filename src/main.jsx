import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Body/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [

      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/home",
        element: <Home />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
