import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUserPlus, FaUserCircle } from "react-icons/fa"; // Import React Icons
import AuthContext from "../../context/AuthContext";
import jobIcon from "../../assets/job-portal-logo.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.log("Error logging out", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/jobs">All Job</NavLink>
      </li>
      <li>
        <NavLink to="/myApplications">My Application</NavLink>
      </li>
      <li>
        <NavLink to="/addJob">Add Job</NavLink>
      </li>
      <li>
        <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-gradient-to-bl from-sky-200 to-slate-200 rounded-b-lg shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
            <img className="w-12" src={jobIcon} alt="Job Portal Logo" />
            <h3 className="text-3xl font-bold">Job Portal</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end font-semibold gap-2">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="btn bg-gradient-to-br from-rose-700 to-cyan-900 text-white flex items-center gap-2"
              >
                <FaSignOutAlt /> Log Out
              </button>
              <img
                className="w-12 h-12 rounded-full border-2 border-green-400"
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt="User Avatar"
              />
            </>
          ) : (
            <>
              <Link to="/register">
                <button className="btn btn-accent flex items-center gap-2">
                  <FaUserPlus /> Register
                </button>
              </Link>
              <Link to="/signIn">
                <button className="btn btn-success flex items-center gap-2">
                  <FaSignInAlt /> Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
