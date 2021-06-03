import { React, useEffect, useState } from "react";

export default function SysVersion(props) {
  const [version, setVersion] = useState("");

  useEffect(() => {
    setVersion(props.version);
  }, [props]);

  return (
    <div className="SysVersion">
      <span>{version.slice(0,-37)}</span>
    </div>
  );
}
