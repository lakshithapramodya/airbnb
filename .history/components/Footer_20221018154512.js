import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 py-16 px-28 bg-gray-200">
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans mb-4 cursor-pointer">
          ABOUT
        </h2>
        <p className="text-xs my-2 cursor-pointer">How Airbnb works</p>
        <p className="text-xs my-2 cursor-pointer">Newsroom</p>
        <p className="text-xs my-2 cursor-pointer">Investors</p>
        <p className="text-xs my-2 cursor-pointer">Airbnb Plus</p>
        <p className="text-xs my-2 cursor-pointer">Airbnb Luxe</p>
      </div>
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans mb-4 cursor-pointer">
          COMMUNITY
        </h2>
        <p className="text-xs my-2 cursor-pointer">Accessibility</p>
        <p className="text-xs my-2 cursor-pointer">This is not a real site</p>
        <p className="text-xs my-2 cursor-pointer">
          Its a pretty awesome clone
        </p>
        <p className="text-xs my-2 cursor-pointer">Referrals accepted</p>
        <p className="text-xs my-2 cursor-pointer">Papafam</p>
      </div>
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans mb-4 cursor-pointer">
          HOST
        </h2>
        <p className="text-xs my-2 cursor-pointer">Papa React</p>
        <p className="text-xs my-2 cursor-pointer">Presents</p>
        <p className="text-xs my-2 cursor-pointer">Zero to Full Stack Hero</p>
        <p className="text-xs my-2 cursor-pointer">Hundreds of Students</p>
        <p className="text-xs my-2 cursor-pointer">Join Now</p>
      </div>
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans mb-4 cursor-pointer">
          SUPPORT
        </h2>
        <p className="text-xs my-2 cursor-pointer">Help Centre</p>
        <p className="text-xs my-2 cursor-pointer">Trust & Safety</p>
        <p className="text-xs my-2 cursor-pointer">Say Hi YouTube</p>
        <p className="text-xs my-2 cursor-pointer">Easter Eggs</p>
        <p className="text-xs my-2 cursor-pointer">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
