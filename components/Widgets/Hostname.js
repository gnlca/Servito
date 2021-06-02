import { React, useEffect, useState } from 'react';

const Hostname = (props) => {
    const [hostname, setHostname] = useState()

    useEffect(() => {
        setHostname(props.hostname);

    }, [props.hostname])

    return (
        <div className="Hostname">
            {hostname ? hostname.replace(/(\r\n|\n|\r)/gm, "") : null}
        </div>
    )


}

export default Hostname;