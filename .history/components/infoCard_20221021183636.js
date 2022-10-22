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
    <div className="flex">
      <div className="relative h-32 w-48 md:h-52 md:w-80 my-8 border-b flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="w-7 cursor-pointer" />
        </div>

        {/* <h4 className="text-xl">{title}</h4>
        <p className="md:text-sm">{description}</p>

        <div className="flex justify-between pt-5 items-end">
          <p className="flex align-bottom items-center md:text-lg">
            <StarIcon className="h-4 text-red-400" />
            {star}
          </p>
          <div className="items-end">
            <p className="text-sm lg:text-2xl font-semibold">{price}</p>
            <p>{total}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default InfoCard;
