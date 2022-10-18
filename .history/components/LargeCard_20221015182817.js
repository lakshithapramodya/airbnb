import React from "react";
import Image from "next/image";

function LargeCard(img, title) {
  return (
    <div>
      <Image src={img} layout="fill" className="w-16 h-16" />
    </div>
  );
}

export default LargeCard;
