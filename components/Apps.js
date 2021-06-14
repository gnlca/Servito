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


    let apps = [];
    for (var key in config.apps) {
      apps.push(
        <li className="app grid center rowGap05" key={key}>
        <a className="grid center noLink " href={config.apps[key][1]}>
          {/* <Icon name={config.apps[key][0]} width={24} /> */}
          <i className="material-icons-outlined " >{config.apps[key][0]} </i>
        </a>
        <span>{key}</span>
      </li>
      )
      }
      

    return (
      <div className="Apps grid center rowGap07">
        <span className="groupTitle extendedFont">apps</span>
        <ul className={`grid center ${(Object.keys(config.apps).length >6 ) ? "col4" : "col3"} rowGap12 colGap15`}>
          {apps}
        </ul>
      </div>
    );

}

export default Apps;