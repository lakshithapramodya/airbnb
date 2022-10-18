import React from "react";
import Image from "next/image";

function SmallCard({ imageUrl, location, distance }) {
  return (
    <div className="">
      <div className="relative h-16 w-16">
        <Image src={imageUrl} layout="fill" />
      </div>
    </div>
  );
}

export default SmallCard;
