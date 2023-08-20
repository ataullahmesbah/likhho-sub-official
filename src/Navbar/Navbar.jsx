import { Link } from "react-router-dom";
import Container from "../pages/shared/Container";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../pages/Providers/AuthProvider"




const Navbar = () => {

  


  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  }
  return (
    <div className="w-full">
      <Container>
        <div className="navbar  bg-black text-white left-0 fixed z-10 bg-opacity-30  w-full">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className=" z-[30] menu menu-sm dropdown-content mt-3  p-2 shadow rounded-box w-52">
                <li><Link className=" text-white ">Home</Link></li>
                <li><Link className=" text-white ">Template</Link></li>

                <li>

                  <Link className=" text-white ">Convert</Link>
                  <ul className="p-2  text-white  ">
                    <li><Link>Text to pdf</Link></li>
                    <li><Link>Word to pdf</Link></li>
                    <li><Link>Docs to pdf</Link></li>
                  </ul>
                </li>

                <li><Link className=" text-white ">About</Link></li>

              </ul>

            </div>

            <Link to={'/'} className="text-3xl   text-white"><span className="bg-blue-500 p-1  rounded">L</span>ikho</Link>

          </div>
          <div className="navbar-center hidden lg:flex ">

            <ul className="menu menu-horizontal px-1">

              <li><Link className="  text-white ">Home</Link></li>
              <li> <Link className="   text-white ">Template</Link></li>
              <li tabIndex={0} className="z-[30]" >
                <details>
                  <summary className="  text-white ">Convert</summary>
                  <ul className="p-2 w-32">
                    <li><Link className="   text-white ">Text to pdf</Link></li>
                    <li><Link className="   text-white ">Word to pdf</Link></li>
                    <li><Link className="   text-white ">Docs to pdf</Link></li>
                  </ul>
                </details>
              </li>

              <li><Link className="   text-white ">About</Link></li>
            </ul>

          </div>
          <div className="navbar-end ml-4 ">



            {
              user ?
                <>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div >
                        <img className='w-[50px] h-[50px]  rounded-[50%]' src={user.photoURL} alt="" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[30] p-2 shadow rounded-box w-52">

                      <Link className="justify-between">Profile </Link>

                      <Link to="/dashboard" className=" font-normal">Dashboard</Link>

                      <button onClick={handleLogOut} className="font-normal">Logout</button>
                    </ul>
                  </div>
                </>
                :
                <Link to="/signup" className="  text-white">SignUp</Link>


            }
            {/* if user not login, then show Login btn */}

          </div>
        </div>
      </Container>
    </div>

  );
};

export default Navbar;