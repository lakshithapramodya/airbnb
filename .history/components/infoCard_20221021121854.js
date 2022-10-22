import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";

function InfoCard({
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
    <div className="flex items-center">
      <div className="relative h-24 w-40 md:h-52 md:w-80 my-8 border-b flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="text-xs space-y-2">
        <div>
          <p className="">{location}</p>
          <HeartIcon className="w-6" />
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
        <div>
          <p>{star}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
