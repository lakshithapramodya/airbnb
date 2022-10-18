import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div>
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default LargeCard;
