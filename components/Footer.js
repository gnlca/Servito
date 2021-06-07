import React from 'react';

import Icon from './Icon';

import SwitchTheme from './SwitchTheme'

function Footer() {

    return (
      <footer className="Footer extendedFont" style={{ fontSize: "small" }}>
        <div className="footeroni grid alignCenter colGap05">
          <div className="options inlineGrid alignCenter"><span>v0.01</span> <SwitchTheme/></div>

          <div className="github inlineGrid alignCenter col3auto selfEnd ">
            <span id="createdWith" >created with Next.js &nbsp; &#8594; &nbsp; &nbsp; &nbsp;</span>
            <a className="" href="http://github.com/gnlca/Servito" style={{textDecoration:"none",color:"inherit"}}>
              gnlca/Servito &nbsp; 
              
              <i className="fab fa-github" aria-hidden="true" style={{fontSize:"20px"}}/>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;