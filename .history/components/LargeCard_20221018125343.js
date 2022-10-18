import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative">
      <div className="py-12 p-3">
        <div className="relative h-96 min-w-[300px] cursor-pointer">
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute space-y-3 pt-16 pl-10">
            <h2 className="text-4xl w-44 ">{title}</h2>
            <h3>{description}</h3>
            <div className="pt-2">
              <button className="text-white bg-gray-800 p-2 px-4 rounded-xl text-sm">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;
