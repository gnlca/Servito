import React from 'react';
import Image from 'next/image'

import Icon from './Icon';




function Apps() {


    // const reqSvgs = require.context('../public/assets/img', true, /\.svg$/ )
    // const svgs = reqSvgs.keys().reduce( (images, path) => {
    //     images[path.slice(2,-4)] = reqSvgs(path).default;
    //     return images;
    // }, {} )
    // console.log(svgs);


    return(
        <div className="Apps">
            <ul>
                <li>
                    <a href="http://agpi.local:8443">
                        <Icon name="code2" size={24} fill="#ffffff"/>
                        {/* <img src={ciccio} style={{fill:"#ffffff",filter:"invert(100%)"}}/> */}
                        {/* <img  src={svgs[0]}/> */}
                        {/* <Image  src="/assets/img/code2.svg" width={24}  height={24} /> */}
                        
                        <span>Codeserver</span>
                </a></li>
    
                <li>
                    <a href="http://agpi.local:8581">
                    <Icon name="homebridge" size={22} fill="#ffffff"/>
                    <span>Homebridge</span></a>
                </li>
                
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    <Icon name="cloud2" size={24} fill="#ffffff"/>
                    <span>Nextcloud</span></a>
                </li>
                
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["servers"]} style={{filter:"invert(100%)"}}/> */}
                    <Icon name="servers" size={24} fill="#ffffff"/>
                    <span id="pesciolo">Portainer</span></a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["adguard"]} style={{filter:"invert(100%)"}}/> */}
                    <Icon name="adguard" size={24} fill="#ffffff"/>
                    <span id="pesciolo">AdGuard</span></a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["proxy"]} style={{filter:"invert(100%)"}}/> */}
                    <Icon name="proxy" size={24} fill="#ffffff"/>
                    <span id="pesciolo">NginxProxy<span></span></span></a>
                </li>
                
                
                
            </ul>
        </div>
    )

}

export default Apps;