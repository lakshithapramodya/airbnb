import React from "react";

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
      <img src={img} alt="" />
    </div>
  );
}

export default infoCard;
