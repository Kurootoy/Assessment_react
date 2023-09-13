
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Owner from '../Component/Owner.jsx';
import Homepage_user from '../Component/Homepage_user.jsx';
import Homepage_admin from '../Component/Homepage_admin.jsx';


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
  {
    path:"/user-home",
    element: <Homepage_user/>
  },
  {
    path:"/add-home-sector",
    element:<Homepage_admin/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);