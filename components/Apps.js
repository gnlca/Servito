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
        <li  key={key}>
        <a href={config.apps[key][1]}>
          <Icon name={config.apps[key][0]} width={24} />
          <span>{key}</span>
        </a>
      </li>
      )
      }
      

    

    return (
      <div className="Apps grid center rowGap15">
        <span className="groupTitle extendedFont">apps</span>
        <ul className="grid center col3 rowGap2 colGap15">
          {apps}
        </ul>
      </div>
    );

}

export default Apps;