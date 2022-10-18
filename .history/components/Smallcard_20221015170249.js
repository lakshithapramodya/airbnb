import React from "react";
import Image from "next/image";

function SmallCard({ imageUrl, location, distance }) {
  return (
    <div className="flex">
      <div className="relative w-10 h-10">
        <Image src={imageUrl} layout="fill" />
      </div>
      <div className="">
        <h1>{location}</h1>
        <h2>{distance}</h2>
      </div>
    </div>
  );
}

export default SmallCard;
