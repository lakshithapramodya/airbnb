import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 py-16 px-28 bg-gray-200">
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans pb-8">ABOUT</h2>
        <p className="text-xs py-2">How Airbnb works</p>
        <p className="text-xs py-2">Newsroom</p>
        <p className="text-xs py-2">Investors</p>
        <p className="text-xs py-2">Airbnb Plus</p>
        <p className="text-xs py-2">Airbnb Luxe</p>
      </div>
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans">COMMUNITY</h2>
        <p className="text-xs py-2">Accessibility</p>
        <p className="text-xs py-2">This is not a real site</p>
        <p className="text-xs py-2">Its a pretty awesome clone</p>
        <p className="text-xs py-2">Referrals accepted</p>
        <p className="text-xs py-2">Papafam</p>
      </div>
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans">HOST</h2>
        <p className="text-xs py-2">Papa React</p>
        <p className="text-xs py-2">Presents</p>
        <p className="text-xs py-2">Zero to Full Stack Hero</p>
        <p className="text-xs py-2">Hundreds of Students</p>
        <p className="text-xs py-2">Join Now</p>
      </div>
      <div className="pb-8">
        <h2 className="font-bold text-xs font-sans">SUPPORT</h2>
        <p className="text-xs py-2">Help Centre</p>
        <p className="text-xs py-2">Trust & Safety</p>
        <p className="text-xs py-2">Say Hi YouTube</p>
        <p className="text-xs py-2">Easter Eggs</p>
        <p className="text-xs py-2">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
