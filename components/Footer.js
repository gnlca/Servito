import React from 'react';

import Icon from './Icon';

import SwitchTheme from './SwitchTheme'

function Footer() {


    // var today = new Date();
    // var time = today.getDate() + "." + today.getMonth() + "."  + today.getFullYear();

    return (
      <footer className="Footer extendedFont" style={{ fontSize: "small" }}>
        <div className="footeroni grid alignCenter colGap05">
          <div className="options inlineGrid alignCenter"><span>v0.01</span> <SwitchTheme/></div>

          {/* <div className="instagram" style={{ fontSize: "small",  }}>
             <a href="http://instagram.com/gianlucandretta" style={{textDecoration:"none",color:"inherit"}}>@gianlucandretta &nbsp;</a>
             <a href="http://instagram.com/gianlucandretta"><Icon name="instagram" size={20} fill="rgba(255, 255, 255, 0.3)"/></a>
            </div> */}
          <div className="github inlineGrid alignCenter ">
            <span id="createdWith" >created with Next.js &nbsp; &#8594; &nbsp; &nbsp; &nbsp;</span>
            <a className="" href="http://github.com/gnlca/Servito" style={{textDecoration:"none",color:"inherit"}}>
              gnlca/Servito &nbsp; 
              {/* <Icon name="github" size={20} fill="rgba(255, 255, 255, 0.3)"/> */}
              <i className="fab fa-github" aria-hidden="true" style={{fontSize:"20px"}}/>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;