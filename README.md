# Servito 🛎 V2

It's a dashboard written with [Next.js](https://nextjs.org/) for your server.


![ServitoDarkLight](https://user-images.githubusercontent.com/25036072/120935372-c130e080-c702-11eb-9716-3a9adfe5fa51.png)

Demo → [servito.vercel.app](http://servito.vercel.app)


## How to install as a Docker container

First clone the repo on your server (currently cpu temperature only works with raspberry pi)
```bash
git clone http://github.com/gnlca/Servito
```
cd into the folder 
```bash
cd Servito/
```
Personalize Servito going to the public/ folder and changing the logo, favicon and apple bookmark icon

![image](https://user-images.githubusercontent.com/25036072/121042115-a9fdfb80-c7b3-11eb-90a5-6585988ff485.png)


Then change the route of your apps in UserConfig.json
```json
{
    "apps": {
        "Code": [
            "code",
            "http://hostname.local:PORT"
        ],
        "Homebridge": [
            "homebridge",
            "http://hostname.local:PORT"
        ],
        "Nextcloud": [
            "cloud",
            "http://hostname.local:PORT"
        ],
        "Portainer": [
            "servers",
            "http://hostname.local:PORT"
        ],
        "Adguard": [
            "adguard",
            "http://hostname.local:PORT"
        ],
        "NginxProxy": [
            "proxy",
            "http://hostname.local:PORT"
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


@gianlucandretta Gianluca Andretta
