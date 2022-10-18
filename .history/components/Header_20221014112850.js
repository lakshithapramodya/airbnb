import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      {/* Left */}
      <div className="relative flex item-center h-10 cursor-pointer">
        <Image
          src="https://banner2.cleanpng.com/20180907/il/kisspng-logo-airbnb-jpeg-brand-vector-graphics-madaz-money-learn-to-day-trade-stocks-penny-stoc-5b92a0f47ddf87.1656733615363361165156.jpg"
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
