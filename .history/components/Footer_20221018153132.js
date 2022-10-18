import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
        <h2 className="font-semibold text-sm">ABOUT</h2>
        <p className="text-sm font-light">How Airbnb works</p>
        <p className="text-sm font-light">Newsroom</p>
        <p className="text-sm font-light">Investors</p>
        <p className="text-sm font-light">Airbnb Plus</p>
        <p className="text-sm font-light">Airbnb Luxe</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">COMMUNITY</h2>
        <p className="text-sm font-light">Accessibility</p>
        <p className="text-sm font-light">This is not a real site</p>
        <p className="text-sm font-light">Its a pretty awesome clone</p>
        <p className="text-sm font-light">Referrals accepted</p>
        <p className="text-sm font-light">Papafam</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">HOST</h2>
        <p className="text-sm font-light">Papa React</p>
        <p className="text-sm font-light">Presents</p>
        <p className="text-sm font-light">Zero to Full Stack Hero</p>
        <p className="text-sm font-light">Hundreds of Students</p>
        <p className="text-sm font-light">Join Now</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">SUPPORT</h2>
        <p className="text-sm font-light">Help Centre</p>
        <p className="text-sm font-light">Trust & Safety</p>
        <p className="text-sm font-light">Say Hi YouTube</p>
        <p className="text-sm font-light">Easter Eggs</p>
        <p className="text-sm font-light">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
