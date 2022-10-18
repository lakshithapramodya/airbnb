import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
        <h2 className="font-semibold text-sm">ABOUT</h2>
        <p className="text-sm">How Airbnb works</p>
        <p className="text-sm">Newsroom</p>
        <p className="text-sm">Investors</p>
        <p className="text-sm">Airbnb Plus</p>
        <p className="text-sm">Airbnb Luxe</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">COMMUNITY</h2>
        <p className="text-sm">Accessibility</p>
        <p className="text-sm">This is not a real site</p>
        <p className="text-sm">Its a pretty awesome clone</p>
        <p className="text-sm">Referrals accepted</p>
        <p className="text-sm">Papafam</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">HOST</h2>
        <p className="text-sm">Papa React</p>
        <p className="text-sm">Presents</p>
        <p className="text-sm">Zero to Full Stack Hero</p>
        <p className="text-sm">Hundreds of Students</p>
        <p className="text-sm">Join Now</p>
      </div>
      <div>
        <h2 className="font-semibold text-sm">SUPPORT</h2>
        <p className="text-sm">Help Centre</p>
        <p className="text-sm">Trust & Safety</p>
        <p className="text-sm">Say Hi YouTube</p>
        <p className="text-sm">Easter Eggs</p>
        <p className="text-sm">For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
