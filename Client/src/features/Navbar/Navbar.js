import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectLoggedIn,
  selectAccountType,
  selectUserDetail,
} from "../Auth/AuthSlice";

// #0b70ff
// #e2eaf8
export default function Navbar() {
  const loginStatus = useSelector(selectLoggedIn);
  const loginType = useSelector(selectAccountType);
  const userDetails = useSelector(selectUserDetail);
  console.log(userDetails);
  const toggleMenu = () => {
    if (
      document
        .getElementById("mobile-menu")
        .classList.contains("left-[-100rem]")
    ) {
      document.getElementById("mobile-menu").classList.remove("left-[-100rem]");
      document.getElementById("mobile-menu").classList.add("left-0");
    } else {
      document.getElementById("mobile-menu").classList.remove("left-0");
      document.getElementById("mobile-menu").classList.add("left-[-100rem]");
    }
  };
  return (
    <>
      {/* For Desktop */}
      <nav className="w-full flex items-center justify-between px-2 py-3 lg:px-5 lg:py-1">
        <ul className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap- mr-10">
            <img className="w-10 lg:w-16 rounded-full" src={Logo} alt="" />
            <p className="text-xl font-semibold lg:text-2xl">JobTrek</p>
          </Link>
          <Link
            to="/"
            className="hidden lg:block hover:text-[#0b70ff] cursor-pointer transition-colors  text-[#1967d2]"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="hidden lg:block hover:text-[#0b70ff] cursor-pointer transition-colors "
          >
            Find jobs
          </Link>
          <Link
            to="/freelance"
            className="hidden lg:block hover:text-[#0b70ff] cursor-pointer transition-colors "
          >
            Freelance opportunities
          </Link>
          <Link
            to="/myapplication"
            className="hidden lg:block hover:text-[#0b70ff] cursor-pointer transition-colors "
          >
            Applications
          </Link>
        </ul>
        <ul className="hidden lg:flex items-center gap-5">
          {loginStatus ? (
            <>
              <div className="relative flex gap-1 text-[#1967d2] bg-[#e2eaf8] px-2 py-1 rounded-mdhover:text-white cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                {userDetails.firstName}
                <ul className="absolute  top-10 w-max right-0 p-3 bg-gray-200 rounded-md space-y-2">
                  <Link to="/profile" className="px-1 block transition-all duration-150 rounded hover:bg-white">Profile</Link>
                  
                  <Link to="/hirefreelancer" className="px-1 block transition-all duration-150 rounded hover:bg-white">Hire Freelancer</Link>
                  <li className="px-1 block transition-all duration-150 rounded hover:bg-red-500 hover:text-white text-red-500">Log Out</li>
                  </ul>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="text-[#1967d2] bg-[#e2eaf8] px-2 py-1 rounded-md hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in cursor-pointer"
            >
              Login / Signup
            </Link>
          )}
          {loginType === "recruiter" && (
            <li className="bg-[#1967d2] px-3 py-1 rounded-md text-white hover:bg-blue-800 transition-all duration-300 cursor-pointer">
              Post a Job
            </li>
          )}
        </ul>
        {/* for Mobile */}
        <div className="flex gap-4 lg:hidden">
          {loginStatus ? (
            <Link
              to="/login"
              className="text-[#1967d2] block bg-[#e2eaf8] px-2 rounded-sm"
            >
              Profile
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-[#1967d2] block bg-[#e2eaf8] px-2 rounded-sm"
            >
              Login
            </Link>
          )}
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="bg-[#0000003e] left-[-100rem] transition-all duration-500 lg:hidden absolute top-0 w-screen h-screen"
      >
        <ul
          id="mobile-menu-item"
          className=" bg-white w-fit relative overflow-hidden min-h-full py-3 "
        >
          <li className="flex items-center gap-14 pr-5 ps-2 pb-5">
            <div className="flex items-center">
              <img className="w-14" src={Logo} alt="" />
              <p className="font-semibold text-lg">JobTrek</p>
            </div>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <Link
            t0="/"
            className="px-4 text-base py-2 text-[#0b70ff] bg-teal-50"
          >
            Home
          </Link>
          <Link to="/jobs" className="px-4 block text-base py-2">
            Jobs
          </Link>
          <Link to="/freelance" className="px-4 block text-base py-2">
            Freelance opportunities
          </Link>
          <Link to="/myapplication" className="px-4 block text-base py-2">
            Application
          </Link>
          <li className="px-4 text-base py-2">Profile</li>
          {loginType === "recruiter" && (
            <li className="mx-4 my-5 text-center bg-[#0b70ff] py-1 rounded-md text-white hover:bg-blue-800 transition-all duration-300 cursor-pointer">
              Post a Job
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
