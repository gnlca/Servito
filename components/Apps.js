import React from 'react';
import Image from 'next/image'


function Apps() {


    // const reqSvgs = require.context('../assets/img/', true, /\.svg$/ )
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
                        {/* <Icon name="code" size={23} fill="#ffffff"/> */}
                        {/* <img src={ciccio} style={{fill:"#ffffff",filter:"invert(100%)"}}/> */}
                        {/* <img  src={svgs[0]}/> */}
                        <Image  src="/assets/img/code2.svg" width={24}  height={24} />
                        <span>Codeserver</span>
                </a></li>
    
                <li>
                    <a href="http://agpi.local:8581">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="ffffff"viewBox="0 0 992.09 1000"><defs></defs><path className="a" d="M950.19,508.06a41.91,41.91,0,0,1-42-41.9c0-.48.3-.91.3-1.42L825.86,382.1a74.26,74.26,0,0,1-21.51-52V138.22a16.13,16.13,0,0,0-16.09-16H736.4a16.1,16.1,0,0,0-16,16V274.88l-220.09-213a16.08,16.08,0,0,0-22.64.19L62.34,477.34a16,16,0,0,0,0,22.65l39.39,39.49a16.18,16.18,0,0,0,22.64,0L443.52,225.09a73.72,73.72,0,0,1,103.62.45L860,538.38a73.61,73.61,0,0,1,0,104l-38.46,38.47a73.87,73.87,0,0,1-103.22.75L498.79,468.28a16.05,16.05,0,0,0-22.65.22L265.3,680.29a16.13,16.13,0,0,0,0,22.66l38.92,39a16.06,16.06,0,0,0,22.65,0l114-112.39a73.75,73.75,0,0,1,103.22,0l113,111,.42.42a73.54,73.54,0,0,1,0,104L545.08,957.35v.71a41.95,41.95,0,1,1-42-41.94c.53,0,.95.3,1.44.3L616.43,804.23a16.09,16.09,0,0,0,4.71-11.33,15.85,15.85,0,0,0-4.79-11.32l-113-111a16.13,16.13,0,0,0-22.66,0L367.16,782.79a73.66,73.66,0,0,1-103.67-.27l-39-39a73.66,73.66,0,0,1,0-103.86L435.17,427.88a73.79,73.79,0,0,1,103.37-.9L758.1,639.75a16.13,16.13,0,0,0,22.66,0l38.43-38.43a16.13,16.13,0,0,0,0-22.66L506.5,265.93a16.11,16.11,0,0,0-22.66,0L164.69,580.44A73.69,73.69,0,0,1,61.1,580L21.57,540.69l-.11-.12a73.46,73.46,0,0,1,.11-103.88L436.85,21.41A73.89,73.89,0,0,1,540,20.56L662.63,139.32v-1.1a73.61,73.61,0,0,1,73.54-73.5H788a73.61,73.61,0,0,1,73.5,73.5V329.81a16,16,0,0,0,4.71,11.32l83.07,83.05h.79a41.94,41.94,0,0,1,.08,83.88Z"/></svg>
                    <span>Homebridge</span></a>
                </li>
                
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <svg width="30" height="24" viewBox="0 0 23 11" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="5.5" r="5" stroke="white"/><circle cx="19.5" cy="5.5" r="3" stroke="white"/><circle cx="3.5" cy="5.5" r="3" stroke="white"/></svg> */}
                    {/* <img  src={svgs["cloud2"]} style={{filter:"invert(100%)"}}/> */}
                    <span>Nextcloud</span></a>
                </li>
                
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["servers"]} style={{filter:"invert(100%)"}}/> */}
                    <span id="pesciolo">Portainer</span></a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["adguard"]} style={{filter:"invert(100%)"}}/> */}
                    <span id="pesciolo">AdGuard</span></a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/my-drive">
                    {/* <img  src={svgs["proxy"]} style={{filter:"invert(100%)"}}/> */}
                    <span id="pesciolo">NginxProxy<span></span></span></a>
                </li>
                
                
                
            </ul>
        </div>
    )

}

export default Apps;