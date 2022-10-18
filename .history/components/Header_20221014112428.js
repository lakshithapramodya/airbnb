import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      {/* Left */}
      <div className="w-10">
        <Image
          src="https://cdn.freebiesupply.com/logos/large/2x/airbnb-2-logo-png-transparent.png"
          layout="fill"
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
