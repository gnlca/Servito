import { React, useEffect, useState } from "react";

export default function SysVersion(props) {
  const [version, setVersion] = useState("");

  useEffect(() => {
    setVersion(props.version);
  }, [props]);

  return (
    <div className="SysVersion">
      <div className="widget  extendedFont">
        <span className="widgetTitle">version</span>
        <br />
        <span>{version}</span>
      </div>
    </div>
  );
}
