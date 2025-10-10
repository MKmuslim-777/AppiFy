import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/Images/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="navbar bg-base-100 shadow-sm md:px-40">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/AllApps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <img
              className="w-[45px]"
              src={logo}
              alt="Appify Application Logo"
            />
            <Link
              to={"/"}
              className=" bg-gradient-to-r from-[#274c77] to-[#274c77]/70 text-transparent bg-clip-text text-2xl font-bold"
            >
              {" "}
              AppiFy
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-10">
              <NavLink
                to="/"
                className={`text-[18px] font-semibold `}
              >
                Home
              </NavLink>

              <NavLink 
              to="/AllApps"
              className={`text-[18px] font-semibold`}
              >Apps</NavLink>

              <NavLink 
              to="/installation"
              className={`text-[18px] font-semibold`}
              >Installation</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn bg-gradient-to-br from-[#632EE3] to-[#632EE3]/60 text-white transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg"
            href="https://mk777.rf.gd"
            target="_blank"
          >
            {" "}
            <FaGithub />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
