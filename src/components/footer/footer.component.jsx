import React from "react";
import "./footer.style.css";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";

const FooterPanel = () => {
  return (
    <div>
      <div  className="py-2 text-center footer-style">
        <h1>Address</h1>
        <br/>
        <p>Nikunjo-2,Dhaka,Bangladesh</p>
      <div className="py-2 text-center footer-style">© Nishat Raihana Prantik &nbsp; {new Date().getFullYear()}</div>
    </div>
  
     
    </div>
  );
};

export default FooterPanel;
