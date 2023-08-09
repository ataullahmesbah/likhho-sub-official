import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../Navbar/Navbar";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/navbar",
          element:<Navbar></Navbar>
        }
      ]
    },
  ]);

export default router;