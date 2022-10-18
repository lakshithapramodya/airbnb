import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
        <h2 className="font-bold">ABOUT</h2>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div>
        <h2 className="font-bold">COMMUNITY</h2>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Papafam</p>
      </div>
      <div>
        <h2 className="font-bold">HOST</h2>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zero to Full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>
      <div>
        <h2 className="font-bold">SUPPORT</h2>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
