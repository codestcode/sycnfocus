import React from 'react';
import logo from "D:/habeba/habeba/new work of DOM/dashbor--/src/assets/sycn.png";
import { Link } from 'react-router-dom';
import 'D:/habeba/habeba/new work of DOM/dashbor--/src/styles/index.css'


const Sidebar = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6  m-0 w-full flex flex-col justify-between h-screen  border-r border-black border-border transition duration-300 md:w-4/12 
      lg:ml-0 lg:w-[26%] xl:w-[20%] 2xl:w-[15%]  bg-[#00040aa9] ">
        <div>
          {/* Logo */}
          <div className="-mx-6 px-6 py-4">
            <Link to="/" title="home">
              <img src={logo} className="w-10 rounded-[50%]" alt="logo" />
            </Link>
          </div>

          {/* User Info */}
          <div className="mt-8 text-center">
            <img src={logo} alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
            <h5 className="hidden mt-4 text-xl font-semibold text-[#e5e7eb] lg:block">Habeba Ehab</h5>
            <span className="hidden text-text-secondary lg:block">Admin</span>
          </div>

          {/* Navigation */}
          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <Link
                to="/"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-text-primary bg-secondary-bg hover:bg-hover"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" className="fill-current text-accent-blue" />
                  <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-accent-purple" />
                  <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V15Z" className="fill-current text-accent-blue" />
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/StudyTracker"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-text-secondary hover:bg-hover group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    className="fill-current text-text-secondary group-hover:text-accent-purple"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-text-primary group-hover:text-accent-blue"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-text-primary">Study Tracker</span>
              </Link>
            </li>

            <li>
              <Link
                to="/HealthTracker"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-text-secondary hover:bg-hover group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    className="fill-current text-text-primary group-hover:text-accent-blue"
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path className="fill-current text-text-secondary group-hover:text-accent-purple" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span className="group-hover:text-text-primary">Health Tracker</span>
              </Link>
            </li>

            <li>
              <Link
                to="/MoodTracker"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-text-secondary hover:bg-hover group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path className="fill-current text-text-primary group-hover:text-accent-blue" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path className="fill-current text-text-secondary group-hover:text-accent-purple" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                <span className="group-hover:text-text-primary">Mood Tracker</span>
              </Link>
            </li>

            <li>
              <Link
                to="/ExpenseTracker"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-text-secondary hover:bg-hover group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path className="fill-current text-text-secondary group-hover:text-accent-purple" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    className="fill-current text-text-primary group-hover:text-accent-blue"
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-text-primary">Expense Tracker</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-border">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-text-secondary hover:bg-hover group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="group-hover:text-text-primary">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

