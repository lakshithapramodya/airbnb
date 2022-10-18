import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
        <h2 className="font-semibold text-sm">ABOUT</h2>
        <p className="text-sm font-thin">How Airbnb works</p>
        <p className="text-sm font-thin">Newsroom</p>
        <p className="text-sm font-thin">Investors</p>
        <p className="text-sm font-thin">Airbnb Plus</p>
        <p className="text-sm font-thin">Airbnb Luxe</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">COMMUNITY</h2>
        <p className="text-sm font-thin">Accessibility</p>
        <p className="text-sm font-thin">This is not a real site</p>
        <p className="text-sm font-thin">Its a pretty awesome clone</p>
        <p className="text-sm font-thin">Referrals accepted</p>
        <p className="text-sm font-thin">Papafam</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">HOST</h2>
        <p className="text-sm font-thin">Papa React</p>
        <p className="text-sm font-thin">Presents</p>
        <p className="text-sm font-thin">Zero to Full Stack Hero</p>
        <p className="text-sm font-thin">Hundreds of Students</p>
        <p className="text-sm font-thin">Join Now</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">SUPPORT</h2>
        <p className="text-sm font-thin">Help Centre</p>
        <p className="text-sm font-thin">Trust & Safety</p>
        <p className="text-sm font-thin">Say Hi YouTube</p>
        <p className="text-sm font-thin">Easter Eggs</p>
        <p className="text-sm font-thin">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
