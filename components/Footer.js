import React from 'react';

import Icon from './Icon';

function Footer() {


    // var today = new Date();
    // var time = today.getDate() + "." + today.getMonth() + "."  + today.getFullYear();

    return (
      <footer className="Footer">
        <div className="footeroni extendedFont">
          <div style={{ fontSize: "small" }}>v0.01</div>
          <div className="pesc"style={{ fontSize: "small", justifySelf: "end" }}>
          <a href="http://github.com/gnlca/Servito" style={{textDecoration:"none",color:"inherit"}}>gnlca/Servito &nbsp;</a> 
            <a href="http://github.com/gnlca/Servito"><Icon name="github" size={20} fill="rgba(255, 255, 255, 0.3)"/></a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;