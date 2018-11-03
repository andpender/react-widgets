import React, { Component } from 'react';

const PATH_BASE = 'http://api.openweathermap.org/data/2.5/weather?';
const PATH_ID = 'APPID=f324b2befe43c84eaeb130dd443a5404';
const PATH_UNITS = '&units=metric';

class Weather extends Component {
	constructor(props) {
		super(props);

		this.state = {
			weather: '',
		};
		this.currentPosition = this.currentPosition.bind(this);
	}

	currentPosition(position) {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		this.fetchWeather(lat, lon);
	}

	fetchWeather(lat, lon) {
		fetch(`${PATH_BASE}${PATH_ID}${PATH_UNITS}&lat=${lat}&lon=${lon}`)
		.then(response => response.json())
		.then(result => this.setWeather(result))
		.catch(error => error);
	}

	setWeather(weather) {
		this.setState({ weather });
		console.log(weather.main.temp);
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(this.currentPosition);
	}

	componentWillUnmount () {
    this.interval && clearInterval(this.interval);
    this.interval = false;
	}	

	render () {
		const { weather } = this.state;
		return (
			<div className="weatherApp">
				{weather ?
					<>
						<p>City: {weather.name}</p>
						<p>Temperature: {weather.main.temp}&deg;C</p>
					</>
					: <p>Loading Weather....</p>
				}
			</div>
		);
	}
}

export default Weather;