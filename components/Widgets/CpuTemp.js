import React, { useState, useEffect, useRef } from 'react';




// export async function getServerSideProps() {
    
//     fs.readFile('/proc/version', 'utf8' , (err, data) => {
//         if (err) {
//           console.error(err)
//           return
//         }

        
//         return {
//             props: {
      
//                 results: data,
//             }
//           }
        
//       })

//     // Generally you would parse/transform the contents
//     // For example you can transform markdown to HTML here

    
    
// }

const CpuTemp = (props) => {

    const [cpuTemp,setCpuTemp] = React.useState();


    async function fetchTXT(api_url) {
        
        const res = await fetch(api_url);
        // if(!res.ok) {
        //     console.log("ERRORE GRAVISSIMISSSIMO")
        //     return(null)
        // }
        const data = await res.text()
        console.log(data);
        return(data);
    }


    async function fetchCpuTemp() {
        var data = await fetchTXT(process.env.PUBLIC_URL + "/temperature.txt");
        var temp = (parseInt(data)/1000);
        
        setCpuTemp(temp);
        
    }


    function Temperature() {
        var temp = parseInt(props.temperature)/1000;
        setCpuTemp(temp);
        return(temp);
    }

    

    React.useEffect(() => {

        

        console.log("QUESTO è CICCIO : " + Temperature());
        Temperature();
        setInterval(()=>Temperature(),2000);
        
        
    },[]);

    return(<div className="CpuTemp"><span>{cpuTemp}°</span></div>)


}

export default CpuTemp;