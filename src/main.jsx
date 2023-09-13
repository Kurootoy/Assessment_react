import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Owner from '../Component/Owner.jsx';



const router = createBrowserRouter([
  // insert your path here
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/owner",
    element: <Owner />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);