import { Link } from "react-router-dom";
import Container from "../pages/shared/Container";


const Navbar = () => {
  return (
    <div className="w-full bg-violet-300">
      <Container>
        <div className="navbar  z-10 bg-opacity-30 bg-violet-300 font-bold ">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-200 rounded-box w-52">
                <li><Link>Home</Link></li>
                <li><Link>Template</Link></li>

                <li>

                  <a>Convert</a>
                  <ul className="p-2">
                    <li><a>Text to pdf</a></li>
                    <li><a>Word to pdf</a></li>
                    <li><a>Docs to pdf</a></li>
                  </ul>
                </li>
                <li><Link>Pricing</Link></li>
                <li><Link>About</Link></li>

              </ul>

            </div>
            {/* <img className="w-10 rounded-full" src="https://i.ibb.co/tJXTwtN/Devs-SQUAD.png" alt="" /> */}
            <Link to={'/'} className="text-xl"><span className="bg-blue-400 p-1 rounded">L</span>ikho</Link>

          </div>
          <div className="navbar-center hidden lg:flex ">

            <ul className="menu menu-horizontal px-1">

              <li><Link className=" font-normal">Home</Link></li>
              <li> <Link className=" font-normal">Template</Link></li>
              <li tabIndex={0} >
                <details>
                  <summary className=" font-normal">Convert</summary>
                  <ul className="p-2 bg-violet-200 w-32">
                    <li><a className=" font-normal">Text to pdf</a></li>
                    <li><a className=" font-normal">Word to pdf</a></li>
                    <li><a className=" font-normal">Docs to pdf</a></li>
                  </ul>
                </details>
              </li>
              <li><Link className=" font-normal">Pricing</Link></li>
              <li><Link className=" font-normal">About</Link></li>
            </ul>

          </div>
          <div className="navbar-end ml-4 ">
            <Link to='/login' className="btn btn-xs capitalize btn-outline m-4 font-normal bg-violet-200">Get Started</Link>
            
            {/* if user logged in then show this div */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/V2RBzLh/ana1.jpg" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-violet-200 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge bg-violet-200 font-normal ">New</span>
                  </a>
                </li>
                <li><a className="font-normal">Settings</a></li>
                <li><a className="font-normal">Logout</a></li>
              </ul>
            </div>
            {/* if user not login, then show Login btn */}
            {/* <button className="btn btn-xs capitalize btn-outline bg-violet-200  font-normal">Login</button> */}

          </div>
        </div>
      </Container>
    </div>

  );
};

export default Navbar;