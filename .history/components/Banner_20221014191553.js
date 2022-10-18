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

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="bg-white p-4 px-10 mt-2 rounded-full">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
