import React from "react";
import Image from "next/image";

function SmallCard({ imageUrl, location, distance }) {
  return (
    <div className="flex rounded-md my-4 mx-2">
      <div className="relative h-16 w-16">
        <Image src={imageUrl} layout="fill" className="rounded-lg" />
      </div>
      <div className="ml-4 my-auto">
        <h1>{location}</h1>
        <h2 className="text-md text-gray-500">{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
