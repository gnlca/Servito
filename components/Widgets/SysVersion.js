import { React, useEffect, useState } from "react";

export default function SysVersion(props) {
  const [version, setVersion] = useState("");

  useEffect(() => {
    setVersion(props.version);
  }, [props]);

  return (
    <div className="SysVersion widget  extendedFont">
      <span className="widgetTitle inlineGrid center col2auto colGap03 ">
        <i className="material-icons-outlined" style={{margin:"2.3px 0 0 0"}}>info</i>
        <span className="">version</span>
      </span>
      <br />
      <span>{version}</span>
    </div>
  );
}
