import React from "react";
import logo from "../../images/svg/cyber_logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function header() {
  return (
    <header>
      <div className="header-wrapper w-[100%] p-[1rem] container mx-auto">
        <ul className="flex items-center w-[100%] justify-center">
          <li>
            <img src={logo} alt="cyber" />
          </li>
          <li className="w-[40%] mx-[2rem]">
            <input
              type="text"
              placeholder="Search"
              className="p-[1rem] pl-[56px] grey-100 w-[100%] icon search-icon rounded-lg"
            />
          </li>
          <li>
            <NavLink to="/Home" className="font-size-base">
              Home
            </NavLink>
          </li>
          <li className="ml-[2rem]">
            <NavLink to="/About" className="font-size-base">
              About
            </NavLink>
          </li>
          <li className="ml-[2rem]">
            <NavLink to="/Contact-us" className="font-size-base">
              Contact Us
            </NavLink>
          </li>
          <li className="ml-[2rem]">
            <NavLink to="/Blog" className="font-size-base">
              Blog
            </NavLink>
          </li>
          <li className="ml-[2rem] h-[2rem]">
            <NavLink
              to="/Wishlist"
              className="font-size-base icon wishlist lg inline-block"
            ></NavLink>
          </li>
          <li className="ml-[2rem] h-[2rem]">
            <NavLink
              to="/Cart"
              className="font-size-base icon cart lg inline-block"
            ></NavLink>
          </li>
          <li className="ml-[2rem] h-[2rem]">
            <NavLink
              to="/Profile"
              className="font-size-base icon profile lg inline-block"
            ></NavLink>
          </li>
        </ul>
      </div>
      <div className="sub-nav w-[100%] black py-[0.5rem]">
        <div className="container">
          <ul className="sub-nav-wrapper flex justify-center items-center">
            <li>
              <Link className="white opacity-50 flex items-center">
                <span className="icon lg Phones"></span>
                Phones
              </Link>
            </li>
            <li>
              <Link className="white opacity-50 flex items-center">
                <span className="icon lg Computers"></span>
                Computers
              </Link>
            </li>
            <li>
              <Link className="white opacity-50 flex items-center">
                <span className="icon lg Smart"></span>
                Smart Watches
              </Link>
            </li>
            <li>
              <Link className="white opacity-50 flex items-center">
                <span className="icon lg Cameras"></span>
                Cameras
              </Link>
            </li>
            <li>
              <Link className="white opacity-50 flex items-center">
                <span className="icon lg Headphones"></span>
                Headphones
              </Link>
            </li>
            <li>
              <Link className="white opacity-50 flex items-center">
                <span className="icon lg Gaming"></span>
                Gaming
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
