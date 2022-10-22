import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { GlobeAltIcon, UsersIcon } from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchText, setSearchTExt] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleChange = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchTExt("");
  };

  return (
    <div
      className="sticky top-0  z-50 grid grid-cols-3 bg-white shadow-md 
    p-5 md:px-10"
    >
      {/* Left */}
      <div className="relative flex item-center h-12 cursor-pointer my-auto">
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
          value={searchText}
          onChange={(e) => setSearchTExt(e.target.value)}
          className="!outline-0 pl-5 bg-transparent flex-grow 
          md:min-w-0  text-sm text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer md:mx-2 "
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end">
        <p
          className="text-sm font-semibold cursor-pointer 
        rounded-full text-gray-600 hidden md:inline"
        >
          Become a Host
        </p>

        <GlobeAltIcon className="h-5 text-gray-600 cursor-pointer" />

        <div
          className="flex items-center border rounded-full p-1 
        space-x-2 shadow-sm px-2 hover:shadow-md"
        >
          <Bars3Icon className="h-5 text-gray-500" />
          <UserCircleIcon className="h-8 text-gray-400" />
        </div>
      </div>
      {searchText && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleChange}
          />
          <div>
            <div className="flex items-center border-b">
              <h2 className="text-2xl font-semibold flex-grow">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min={1}
                type="number"
                className="w-12 ml-2 !outline-0 text-lg text-red-500"
              />
            </div>
            <div className="flex mt-4">
              <button onClick={resetInput} className="text-gray-500 flex-grow">
                Cancel
              </button>
              <button className="text-red-500 flex-grow">Search</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
