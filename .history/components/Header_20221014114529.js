import React from "react";
import Image from "next/image";

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
      <div></div>

      {/* Right */}
      <div></div>
    </div>
  );
}

export default Header;
