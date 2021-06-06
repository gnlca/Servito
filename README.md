# Servito 🛎 

It's a dashboard written with [Next.js](https://nextjs.org/) for your server

![Servito](https://user-images.githubusercontent.com/25036072/120930240-bc613200-c6ec-11eb-999d-ad9e88d48c3d.png)


## Getting Started

First clone the repo on your raspberry pi 
```bash
git clone [http://github.com/gnlca/Servito](http://github.com/gnlca/Servito)
```
cd into the folder 
```bash
cd Servito/
```
Personalize Servito going to the public/ folder and changing the logo, favicon and apple bookmark icon
The change the port of your apps in UserConfig.json
```json
{
    "apps": {
        "Code": [
            "code",
            "http://hostname.local:8443"
        ],
        "Homebridge": [
            "homebridge",
            "http://hostname.local:8581"
        ],
        "Nextcloud": [
            "cloud",
            "http://hostname.local:9321"
        ],
        "Portainer": [
            "servers",
            "http://hostname.local:9000"
        ],
        "Adguard": [
            "adguard",
            "http://hostname.local:3000"
        ],
        "NginxProxy": [
            "proxy",
            ""
        ]
    }
}
```


Install the dependencies
```bash
npm install
```
Build the project
```bash
npm run build
```
Then build the image 
```bash
sudo docker build . -t servito
```
And run the container
```bash
sudo docker run --name Servito --hostname [YOUR_HOSTNAME] -p  [EXPOSED_PORT]:3000 servito
```
### Done
I will create a configuration page in the next release and deploy the image to docker hub for an easier install process

### Enable weather 
Currently using html5 geolocation that needs https to work (will use another way to retrieve location in the next release)
Get your free api key at openweathermap.org and paste it in at
```
/api/OWMapiKey?key=YOUR_API_KEY
```
restart Servito container and you should see weather info

## enjoy Servito


@gianlucandretta Gianluca Andretta
