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
    <div className="relative h-48 w-80">
      <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
    </div>
  );
}

export default infoCard;
