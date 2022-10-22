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
    <div>
      <div className="relative">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
    </div>
  );
}

export default infoCard;
