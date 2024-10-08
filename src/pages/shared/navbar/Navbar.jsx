import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const NavOptions = (
    <>
    <NavLink to='/'>
      <li>
        <a>Home</a>
      </li>
    </NavLink>
      <NavLink to='/carMenu'>
      <li>
        <a>Menu</a>
      </li>
      </NavLink>
      <li><Link to="/order/recommended">Order Car</Link></li>
      <li>
        <a>Blogs</a>
      </li>
    </>
  );

  return (
    
      <div className="navbar z-10 bg-opacity-50 max-w-screen-2xl bg-black text-white fixed w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Cars Valley</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
 
  );
};

export default Navbar;
