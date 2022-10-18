import React from "react";
import Image from "next/image";
import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/Outline";

function Header() {
  return (
    <div className="sticky top-0  z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex item-center h-10 cursor-pointer my-auto">
        <Image
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div
        className="flex items-center md:border-2 rounded-full py-2 
      md:shadow-md"
      >
        <input
          className="!outline-0 pl-5 bg-transparent flex-grow 
          md:min-w-0  text-sm text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer md:mx-2 "
        />
      </div>

      {/* Right */}
      <div className="my-auto flex items-center mx-auto pl-4 gap-4">
        <p className="text-sm font-semibold text-wrap">Become a Host</p>
        <GlobeAltIcon className="h-5 text-gray-600" />
        <div className="flex items-center">
          <MenuIcon className="h-5 text-gray-500" />
          <UserCircleIcon className="h-8 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Header;
