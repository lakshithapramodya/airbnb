import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
        <h2 className="font-semibold text-sm">ABOUT</h2>
        <p className="text-xs">How Airbnb works</p>
        <p className="text-xs">Newsroom</p>
        <p className="text-xs">Investors</p>
        <p className="text-xs">Airbnb Plus</p>
        <p className="text-xs">Airbnb Luxe</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">COMMUNITY</h2>
        <p className="text-xs">Accessibility</p>
        <p className="text-xs">This is not a real site</p>
        <p className="text-xs">Its a pretty awesome clone</p>
        <p className="text-xs">Referrals accepted</p>
        <p className="text-xs">Papafam</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">HOST</h2>
        <p className="text-xs">Papa React</p>
        <p className="text-xs">Presents</p>
        <p className="text-xs">Zero to Full Stack Hero</p>
        <p className="text-xs">Hundreds of Students</p>
        <p className="text-xs">Join Now</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">SUPPORT</h2>
        <p className="text-xs">Help Centre</p>
        <p className="text-xs">Trust & Safety</p>
        <p className="text-xs">Say Hi YouTube</p>
        <p className="text-xs">Easter Eggs</p>
        <p className="text-xs">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
