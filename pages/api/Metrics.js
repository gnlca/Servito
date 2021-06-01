// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import { resolve } from "path";

export default function Metrics(req, res) {
  const paths = {
    temperature: "/sys/class/thermal/thermal_zone0/temp",
    meminfo: "/proc/meminfo",
    hostname: "/etc/hostname",
    version: "proc/version",
    ciccio: "/Users/gianlucandretta/Desktop/minchia.txt",
  };

  function fetchData(path) {
    if (!fs.existsSync(path)) {
      res.status(500).json({ error: "File doesn't exists" });
    }

    try {
      const data = fs.readFileSync(path, "utf8");
      console.log(data);
      res.status(200).json({ temperature: data });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err });
    }
  }

  console.log(paths["ciccio"]);
  fetchData(paths["ciccio"]);


}
