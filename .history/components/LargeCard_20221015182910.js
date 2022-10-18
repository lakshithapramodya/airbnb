import React from "react";
import Image from "next/image";

function LargeCard(img, title) {
  return (
    <div>
      <div className="w-16 h-16">
        <Image src={img} layout="fill" className="" />
      </div>
    </div>
  );
}

export default LargeCard;
