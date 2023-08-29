import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../Navbar/Navbar";


import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Editor from "../pages/Editor/Editor/Editor";

import Dashboard from "../pages/Dashboard/Dashboard";
import ProfileDetails from "../pages/Profile/ProfileDetails";
import MyProfile from "../pages/Profile/MyProfile";
import ForgotPassword from "../pages/Home/ForgotPassword/ForgotPassword";
import UpdateProfile from "../pages/Profile/UpdateProfile";
import ChatContainer from "../pages/RealTimeChatInfo/ChatContainer";
import Blog from "../pages/shared/Blog/Blog";
import Dash from "../pages/Dashboard/Dash";



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
        path: '/reset-password',
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: '/profile',
        element: <ProfileDetails></ProfileDetails>
      },
      {
        path: '/profile/:id',
        element: <MyProfile></MyProfile>,
        loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/editor',
        element:<Editor></Editor>
      },
      {
        path: "/updateProfile/:id",
        element: <UpdateProfile></UpdateProfile>,
        loader:({params})=>
        fetch(`http://localhost:5000/users/${params.id}`)
},
       { path:"/chat",
        element: <ChatContainer></ChatContainer>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path:'dash',
        element:<Dash></Dash>
      }
    ]
  },
]);

export default router;