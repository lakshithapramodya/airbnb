import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      {/* Left */}
      <div className="relative">
        <Image
          src="https://cdn.freebiesupply.com/logos/large/2x/airbnb-2-logo-png-transparent.png"
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
