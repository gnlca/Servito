import { useEffect, useMemo, useState } from 'react';

import weatherEmoji from './weatherEmoji.json';

import { fetchData } from '../src/lib/fetch';
import styled from 'styled-components';

const weatherApi = `/api/weather`;
// const weatherIconApi = `http://openweathermap.org/img/wn/`;

interface WeatherIcons {
	[key: string]: { day: string; night: string };
}

interface Weather {
	temperature?: string;
	description?: string;
	icon?: string;
	location?: string;
}

export const WeatherData = () => {
	const [weather, setWeather] = useState<Weather>({});
	const { temperature, description, location, icon } = weather;

	const icons: WeatherIcons = weatherEmoji;

	const daytime = useMemo(
		() => (new Date().getHours() >= 18 || new Date().getHours() <= 5 ? 'night' : 'day'),
		[],
	);

	const fetchWeather = async (apiUrl: string) => {
		const data = await fetchData(apiUrl);
		setWeather({
			temperature: data.temperature.main.temp,
			description: data.temperature.weather[0].description.toLowerCase(),
			icon: data.temperature.weather[0].icon,
			location: data.temperature.name,
		});
	};

	useEffect(() => {
		const success = (position: GeolocationPosition) => {
			const {
				coords: { latitude, longitude },
			} = position;

			if (latitude && longitude) {
				const url = weatherApi + `?lat=${latitude}&lon=${longitude}`;
				fetchWeather(url);
			}
		};

		const error = (err: GeolocationPositionError) => {
			console.error('Geolocation denied, using configured Location', err);
			fetchWeather(weatherApi);
		};

		navigator.geolocation.getCurrentPosition(success, error, {
			enableHighAccuracy: true,
			timeout: 10000,
			maximumAge: 1000 * 60 * 60 * 1, // cache for 1 hour in milliseconds
		});
	}, []);

	return (
		<WeatherDataWrapper className="Servito__weather">
			{temperature && description && icon && (
				<WeatherDataText className="Servito__weather-data">
					{`${temperature}° ${description} `}
					{icons[icon.slice(0, -1)][daytime]}
					<span className="Servito__weather-data-location"> in {location}.</span>
				</WeatherDataText>
			)}
		</WeatherDataWrapper>
	);
};
export default WeatherData;

const WeatherDataWrapper = styled.div`
	transition-property: color;
	transition: var(--Nsecondi);
	font-family: 'Esteso';
`;
const WeatherDataText = styled.span`
	transition-property: color;
	transition: var(--Nsecondi);

	@media only screen and (max-width: 600px) {
		.Servito__weather-data-location {
			display: none;
		}
	}
`;
