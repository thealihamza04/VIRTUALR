import Logo from "../assets/logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants/index";

const NAVBAR = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/800'>
      <div className='container py-4 mx-auto relative text-sm z-50 '>
        <div className='flex justify-between items-center '>
          <div className='flex items-center flex-shrink-0'>
            <img className='h-10 w-10 mr-2' src={Logo} alt='Logo' />
            <span className='text-xl tracking-tight'>VirtualR</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          <div className='hidden lg:flex justify-center space-x-12 items-center'>
            <a href='#' className='py-2 px-3 border rounded-md'>
              Sign In
            </a>
            <a
              href='#'
              className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'
            >
              Create an account
            </a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button className='pr-3' onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div
          className={`fixed right-0 z-20 bg-neutral-900 w-full p-12 flex ${
            mobileDrawerOpen ? "top-12 opacity-100" : "-top-96 opacity-0"
          } transition-all duration-150 ease-in flex-col justify-center items-center -z-10 lg:hidden `}
        >
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className='py-4'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className='flex space-x-2 md:space-x-6'>
            <a
              href='#'
              className='py-2 px-2 border rounded-md text-xs md:text-md'
            >
              Sign In
            </a>
            <a
              href='#'
              className='px-2 py-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NAVBAR;
