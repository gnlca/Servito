// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';

import exec from 'child_process';


const Metrics = (req, res) => {




  fs.readFile('/proc/version', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err })
    }
      console.log(data)
      res.status(200).json({ version: data })
    })


  
}



export default Metrics;