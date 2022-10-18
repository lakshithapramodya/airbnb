import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      {/* Left */}
      <div className="w-5 object-contain">
        <Image
          src="https://cdn.freebiesupply.com/logos/large/2x/airbnb-2-logo-png-transparent.png"
          layout="fill"
          objectFit="contain"
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
