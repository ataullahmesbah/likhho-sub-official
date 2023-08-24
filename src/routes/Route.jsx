import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import MainLayout from "../Layout/MainLayout";
import Navbar from "../Navbar/Navbar";


import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Editor from "../pages/Editor/Editor/Editor";
import UserDashboard from "../pages/Dashboard/UserDashboard/UserDashboard";
import ProfileDetails from "../pages/Profile/ProfileDetails";
import MyProfile from "../pages/Profile/MyProfile";
import ForgotPassword from "../pages/Home/ForgotPassword/ForgotPassword";
import ChatContainer from "../pages/RealTimeChatInfo/ChatContainer";



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
        loader: () => fetch(`http://localhost:5000/users`)
      },
      {
        path:'/dashboard',
        element:<UserDashboard></UserDashboard>
      },
      {
        path:'/editor',
        element:<Editor></Editor>
      },
      {
        path:"/chat",
        element: <ChatContainer></ChatContainer>
      }
    ]
  },
]);

export default router;