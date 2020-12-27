import React from "react";
import './Footer.css';
const Footer = () => {
  return (
    <div>
      <div className="footer copyright py-4 text-center ">
      <hr/>

          <small>Copyright © Clazana {(new Date()).getFullYear()}</small>
        
      </div>
    </div>
  );
};

export default Footer;
