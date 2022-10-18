import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] 
    xl:h-[600px] 2xl:h-[700px] items-center"
    >
      <Image
        src="https://airbnb-pi.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2F0fm&w=828&q=75"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute">
        <p>Not sure where to go? Perfect.</p>
        <div className="bg-white rounded-full pl-5 ">
          <p>I'm flexible</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
