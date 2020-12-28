import React from "react";
import './Footer.css';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return (
    <div>
      <div className="footer copyright py-4 text-center ">
      <hr/>

          <small className="foot">Copyright © Clazana {(new Date()).getFullYear()}</small>
          <a className="terms" href="/ ">Terms of use</a>
          <div className="icons">
          <a href="/"><FontAwesome className="facebook" name="facebook"/></a>
          <a href="/"><FontAwesome className="linkedin" name="linkedin"/></a>
          <a href="/"><FontAwesome className="github" name="github"/></a>
          <a href="/"><FontAwesome className="twitter" name="twitter"/></a>
          </div>
          


      </div>
    </div>
  );
};

export default Footer;
