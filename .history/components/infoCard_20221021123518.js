import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

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
    <div className="flex items-center space-x-4">
      <div className="relative h-32 w-48 md:h-52 md:w-80 my-8 border-b flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="text-xs space-y-2 h-32">
        <div className="flex">
          <p className="flex-grow">{location}</p>
          <HeartIcon className="w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p>{description}</p>
        </div>
        <div className="flex">
          <p className="flex align-bottom">
            <StarIcon className="h-4 text-yellow-400" />
            {star}
          </p>
          <div>
            {" "}
            <p>{price}</p>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
