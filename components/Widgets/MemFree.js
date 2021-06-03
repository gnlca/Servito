import { React, useState, useEffect } from 'react';


const MemFree = (props) => {

    const [memInfo, setMemInfo] = useState();

    function formattedData(data) {
        var formatted = {};
        var lista = data.split("\n");
        var tmp;
        for (var i = 0; i < lista.length; i++) {
            tmp = lista[i].split(/\s+/);
            formatted[tmp[0].slice(0, -1)] = [tmp[1], (tmp[2]) ? tmp[2].toUpperCase() : ""] 
        }
        // console.log(formatted);
        return formatted;
    }
    


    function formattedMemFreeData() {
        var MB = parseInt(memInfo["MemFree"])/1000
        return(MB + " MB")
    }

    useEffect(() => {

        if (props.meminfo != undefined) setMemInfo(formattedData(props.meminfo));

    }, [props.meminfo]);

    return (<div className="MemFree"><span style={{ whiteSpace: "nowrap" }}>{memInfo ? formattedMemFreeData() : null}</span></div>);

}

export default MemFree;