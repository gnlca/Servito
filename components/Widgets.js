import React from 'react';


import CpuTemp from './Widgets/CpuTemp';


const Widgets = props => {

    return(
        <div className="Widgets">
            <div className="griglia">

                <div className="cpu  extendedFont">cpu<CpuTemp temperature={props.temperature}/></div>
                <div className="cpu  extendedFont" > freeRam<br/><span className="widgettino">1338MB</span></div>
                <div className="cpu  extendedFont">hostname<br/><span className="widgettino">agpi</span></div>

            </div>
            <div className="cpu  extendedFont" >version<br/><span style={{}}>Linux version 5.10.17-v7l+ (dom@buildbot) (arm-linux-gnueabihf-gcc-8 (Ubuntu/Linaro 8.4.0-3ubuntu1) 8.4.0, GNU ld (GNU Binutils for Ubuntu) 2.34) #1414 SMP Fri Apr 30 13:20:47 BST 2021</span></div>
        </div>
    )

}

export default Widgets;