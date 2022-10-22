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
      <div>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default infoCard;
