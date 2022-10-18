import React from "react";
import Image from "next/image";

function LargeCard({ img }) {
  return (
    <div>
      <Image src={img} />
    </div>
  );
}

export default LargeCard;
