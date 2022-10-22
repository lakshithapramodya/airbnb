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
    <div className="relative h-48 w-80 my-8 flex boder-b">
      <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
      <div>
        <h3>{location}</h3>
      </div>
    </div>
  );
}

export default infoCard;
