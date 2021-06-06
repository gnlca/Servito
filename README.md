# Servito 🛎 

It's a dashboard written with [Next.js](https://nextjs.org/) for your server
 

## Getting Started

First clone the repo on your raspberry pi 
```bash
git clone [http://github.com/gnlca/Servito](http://github.com/gnlca/Servito)
```
cd into the folder 
```bash
cd Servito/
```
Personalize Servito going to the public/ folder and changing the logo, favicon and apple bookmark icon, the change the port of your apps in UserConfig.json
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
sudo docker run --name Servito --hostname [ YOUR HOSTNAME ] -p  [ EXPOSED PORT ]:3000 servito
```
enjoy Servito

@gianlucandretta Gianluca Andretta
