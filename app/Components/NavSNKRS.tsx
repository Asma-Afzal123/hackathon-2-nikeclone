import React from "react";
import { ShoppingCart, Globe, Menu } from "lucide-react";
import Link from "next/link";

const NavSNKRS = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-4 py-3 shadow-md">
      {/* Left Section */}
      <div className="flex items-center justify-center w-1/3">
        <Link href="#" className="flex items-center">
          <img
            src="/images/snkrs-logo.PNG" // Replace with your Nike logo path
            alt="Nike Logo"
            className="w-8 h-8"
          />
        </Link>
      </div>

      {/* Center Section (Links) */}
      <div className="hidden md:flex space-x-6 mx-auto">
        <Link
          href="/SnkrsRoute"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          Feed
        </Link>
        <Link
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium"
        >
          In Stock
        </Link>
        <Link href="/incoming" className="text-gray-800 hover:text-black text-sm font-medium">
           
            Upcoming
          
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Hidden on small screens */}
        <a
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium hidden md:inline"
        >
          Join/Log In
        </a>
        <a
          href="#"
          className="text-gray-800 hover:text-black text-sm font-medium hidden md:inline"
        >
          Help
        </a>
        <ShoppingCart className="w-5 h-5 text-gray-800 hover:text-black" />
        <Globe className="w-5 h-5 text-gray-800 hover:text-black" />
        
        {/* Menu icon for smaller screens */}
        <button className="w-5 h-5 text-gray-800 hover:text-black md:hidden">
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default NavSNKRS;
