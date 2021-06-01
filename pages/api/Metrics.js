// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import { resolve } from "path";

export default function Metrics(req, res) {
  const paths = {
    temperature: "/sys/class/thermal/thermal_zone0/temp",
    meminfo: "/proc/meminfo",
    hostname: "/etc/hostname",
    version: "/proc/version",
  };

  function fetchFile(path) {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path, "utf8");

      return data;
    } else {
      // res.status(500).json({ error: "FILE NON ESISTE" });
      return null;
    }
  }

  function fetchData(percorsi) {
    const Risposta = {};

    for (const [key, value] of Object.entries(percorsi)) {
      Risposta[key] = fetchFile(value);
    }

    res.status(200).json(Risposta);
  }

  fetchData(paths);
}
