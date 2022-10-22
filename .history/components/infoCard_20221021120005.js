import React from "react";
import Image from "next/image";

function infoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div className="relative h-24 w-40 md:h-52 md:w-80 my-8 border-b">
      <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
      <div className="">
        <h3>{location}</h3>
      </div>
    </div>
  );
}

export default infoCard;
