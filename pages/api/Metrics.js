// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import { resolve } from 'path';


export default function Metrics(req, res)  {




  const paths = {
    temperature: "/sys/class/thermal/thermal_zone0/temp",
    meminfo: "/proc/meminfo",
    hostname: "/etc/hostname",
    version: "proc/version"
  }

  

  function fetchData(path) {

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        
        
      }
      console.log(data)
      res.status(200).json({ version: data })
    })

  }






  // fs.readFile(path, 'utf8', (err, data) => {
  //   if (err) {
  //     console.error(err)
  //     res.status(500).json({ err })
  //   }
  //   console.log(data)
  //   res.status(200).json({ version: data })
  // })

  
}
