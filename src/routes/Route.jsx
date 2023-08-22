import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../Navbar/Navbar";


import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Editor from "../pages/Editor/Editor/Editor";

import Dashboard from "../pages/Dashboard/Dashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/navbar",
        element: <Navbar></Navbar>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/editor',
        element:<Editor></Editor>
      }
    ]
  },
]);

export default router;