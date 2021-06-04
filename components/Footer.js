import React from 'react';

import Icon from './Icon';

function Footer() {


    // var today = new Date();
    // var time = today.getDate() + "." + today.getMonth() + "."  + today.getFullYear();

    return (
      <footer className="Footer extendedFont" style={{ fontSize: "small" }}>
        <div className="footeroni">
          <div>v0.01</div>

          <span id="createdWith" >created with Next.js &nbsp; &#8594;</span>
          {/* <div className="instagram" style={{ fontSize: "small",  }}>
             <a href="http://instagram.com/gianlucandretta" style={{textDecoration:"none",color:"inherit"}}>@gianlucandretta &nbsp;</a>
             <a href="http://instagram.com/gianlucandretta"><Icon name="instagram" size={20} fill="rgba(255, 255, 255, 0.3)"/></a>
          </div> */}
          <div className="github"style={{ fontSize: "small", justifySelf: "end" }}>
          <a href="http://github.com/gnlca/Servito" style={{textDecoration:"none",color:"inherit"}}>gnlca/Servito &nbsp;</a> 
            <a href="http://github.com/gnlca/Servito">
              <Icon name="github" size={20} fill="rgba(255, 255, 255, 0.3)"/>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;