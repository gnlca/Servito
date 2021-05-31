import React from 'react';


function Footer() {


    var today = new Date();
    var time = today.getDate() + "." + today.getMonth() + "."  + today.getFullYear();

    return(<div className="Footer">
        <footer>
        <span style={{fontFamily:"Esteso", fontSize:"small"}}>{time}</span>
        </footer>
        
    </div>)
}

export default Footer;