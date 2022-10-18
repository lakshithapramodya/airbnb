import React from "react";
import Image from "next/image";

function SmallCard({ imageUrl, location, distance }) {
  return (
    <div
      className="flex item-center my-3 mx-2 rounded-xl cursor-pointer
    hover:bg-gray-50 hover:scale-125"
    >
      <div className="relative h-16 w-16">
        <Image src={imageUrl} layout="fill" className="rounded-lg" />
      </div>
      <div className="ml-4 my-auto">
        <h2>{location}</h2>
        <h3 className="text-md text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
