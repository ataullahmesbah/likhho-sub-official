import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar z-10 bg-opacity-30 bg-violet-300 font-bold ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            <li>
              <li><Link><small>Home</small></Link></li>
              <li><Link><small>Template</small></Link></li>
              <li><Link><small>Edit Document Online</small></Link></li>
              <li><Link><small>About</small></Link></li>

            </li>

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-sm">Likho</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link><small>Home</small></Link></li>
          <li> <Link><small>Template</small></Link></li>
          <li><Link><small>Edit Document Online</small></Link></li>
          <li><Link><small>About</small></Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-xs capitalize btn-outline "><small>Get Started</small></Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/V2RBzLh/ana1.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-accent rounded-box w-52">
            <li>
              <a className="justify-between">
                <small> Profile</small>
                <span className="badge bg-accent"><small>New</small></span>
              </a>
            </li>
            <li><a><small>Settings</small></a></li>
            <li><a><small>Logout</small></a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;