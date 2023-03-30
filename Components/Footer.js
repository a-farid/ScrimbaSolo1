import React from 'react';
import IMAGES from "../images/img"

export default function Footer() {
return (
    <div className="footer">
        <img className="logo" src={IMAGES.twitter} />
        <img className="logo" src={IMAGES.facebook} />
        <img className="logo" src={IMAGES.instagram} />
        <img className="logo" src={IMAGES.github} />
    </div>
  )
}