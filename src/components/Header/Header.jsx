import React from "react";
const Header = ({ coin }) => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Fixture</a>
      </li>
      <li>
        <a>Teams</a>
      </li>
      <li>
        <a>Schedules</a>
      </li>
    </>
  );
  return (
    <div className="navbar shadow-lg p-3 rounded-md sticky top-0 left-0 right-0 z-50">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src="https://i.ibb.co.com/G3VvkHZL/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          {parseInt(coin)} Coins{" "}
          <img src="https://i.ibb.co.com/23vNPfzM/coin.png" alt="Coin" />
        </a>
      </div>
    </div>
  );
};

export default Header;
