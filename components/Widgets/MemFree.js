import { React, useState, useEffect } from 'react';


const MemFree = (props) => {

    const [memInfo, setMemInfo] = useState();



    function formattedData(data) {
        var formatted = {};
        var lista = data.split("\n");
        var tmp;
        for (var i = 0; i < lista.length; i++) {
            tmp = lista[i].split(/\s+/);
            formatted[tmp[0].slice(0, -1)] = tmp[1] + " " + tmp[2]
        }
        return formatted;
    }


    useEffect(() => {

        if (props.meminfo != undefined) setMemInfo(formattedData(props.meminfo));

    }, [props]);

    return (<div className="MemFree"><span style={{ whiteSpace: "nowrap" }}>{memInfo ? memInfo["MemFree"] : null}</span></div>);

}

export default MemFree;