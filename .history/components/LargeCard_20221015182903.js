import React from "react";
import Image from "next/image";

function LargeCard(img, title) {
  return (
    <div>
      <div>
        <Image src={img} layout="fill" className="w-16 h-16" />
      </div>
    </div>
  );
}

export default LargeCard;
