import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from '../../lib/fetch';

import config from '../../../UserConfig.json';

export default async function Weather(req: NextApiRequest, res: NextApiResponse) {
	const posizione_api = 'http://ip-api.com/json/';
	const meteo_api = `http://api.openweathermap.org/data/2.5/weather?units=metric`;

	const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

	const city = config.location;

	let lat = req.query['lat'];
	let lon = req.query['lon'];

	async function fetchWeather(url: string) {
		const data = await fetchData(url);
		return data;
	}

	if (!API_KEY) {
		res.status(500).json({ error: 'NO OPENWEATHERMAP API KEY ADDED' });
	}

	if (lat && lon) {
		console.log('FORTUNATAMENTE GEOLOCALIZZAZIONE ATTIVA', lat, lon);
		res.status(200).json({
			temperature: await fetchWeather(`${meteo_api}&lat=${lat}&lon=${lon}&appid=${API_KEY}`),
		});
		return;
	} else {
		console.error('HTML5 GEOLOCATION REFUSED');
	}

	if (city) {
		console.error('COGLIONE');
		res
			.status(200)
			.json({ temperature: await fetchWeather(`${meteo_api}&q=${city}&appid=${API_KEY}`) });
		// res.status(500).json({ error: "No latitude and longitude provided" });
		return;
	}

	const data = await fetchData(posizione_api);
	lat = data['lat'];
	lon = data['lon'];

	console.error('COGLIONE ULTERIORE');
	res.status(200).json({
		temperature: await fetchWeather(`${meteo_api}&lat=${lat}&lon=${lon}&appid=${API_KEY}`),
	});
}
