import fs from "fs";
import { resolve } from "path";

export default function OWMapiKey(req, res) {
  if (req.query["key"]) {

    fs.writeFileSync(
        
      process.cwd() + "/.env",
      "NEXT_PUBLIC_WEATHER_API_KEY=" + req.query["key"],
      function (err, data) {

        if (err) {
          return console.log(err);
        }
        console.log(data);
      }
    );

    res.status(200).json({ api_key: req.query["key"] });
  } else {
    res.status(500).json({ error: "no key inserted" });
  }

  console.log(req.query);
}
