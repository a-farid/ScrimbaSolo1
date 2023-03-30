import React from 'react';
import IMAGES from "../images/img"

export default function Contact() {
return (
<div className="contact">
<h3>Ben Harper</h3>
<h6>Full Stack developer</h6>
<h5></h5>
    <div className="btn">
        <button className="btn-logo">
             <img className="logo" src={IMAGES.Email} />Email</button>
        <button className="btn-logo"><img className="logo" src={IMAGES.linkedin} />Linked In</button>
    </div>
</div>
  )
}
