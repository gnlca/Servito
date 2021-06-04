import React from 'react';
import Image from 'next/image'

import Icon from './Icon';

import config from  '../UserConfig.json';


function Apps() {


    // const reqSvgs = require.context('../public/assets/img', true, /\.svg$/ )
    // const svgs = reqSvgs.keys().reduce( (images, path) => {
    //     images[path.slice(2,-4)] = reqSvgs(path).default;
    //     return images;
    // }, {} )
    // console.log(svgs);

    console.log(config);

    return(
        <div className="Apps grid rowGap2">
            <span className="groupTitle extendedFont">apps</span>
            <ul>
                <li>
                    <a href="http://agpi.local:8443">
                        <Icon name="code" width={24} />
                        {/* <img src={ciccio} style={{fill:"#ffffff",filter:"invert(100%)"}}/> */}
                        {/* <img  src={svgs[0]}/> */}
                        {/* <Image  src="/assets/img/code2.svg" width={24}  height={24} /> */}
                        
                        <span>Codeserver</span>
                </a></li>
    
                <li>
                    <a href="http://agpi.local:8581">
                    <Icon name="homebridge" width={22} />
                    <span>Homebridge</span></a>
                </li>
                
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    <Icon name="cloud" width={24} />
                    <span>Nextcloud</span></a>
                </li>
                
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["servers"]} style={{filter:"invert(100%)"}}/> */}
                    <Icon name="servers" width={24} />
                    <span>Portainer</span></a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["adguard"]} style={{filter:"invert(100%)"}}/> */}
                    <Icon name="adguard" width={24} />
                    <span>AdGuard</span></a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["proxy"]} style={{filter:"invert(100%)"}}/> */}
                    <Icon name="proxy" width={24} />
                    <span>NginxProxy<span></span></span></a>
                </li>
                
                
                
            </ul>
        </div>
    )

}

export default Apps;