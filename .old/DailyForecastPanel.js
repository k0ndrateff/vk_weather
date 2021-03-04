import React from 'react';

class DailyForecastPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    toNormalDate = (dt) => {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        let date = new Date(dt * 1000);
        let day = date.getDate();
        let month = date.getMonth();
        return day + ' ' + months[month];
    }

    render() {
        return (
            <div>
				<p className='weatherInfo'>Погода: {this.props.weather.weather[0].description}</p>
				<p className='weatherInfo'>Температура: {this.props.weather.temp.day}°С</p>
				<p className='weatherInfo'>Ощущается как: {this.props.weather.feels_like.day}°С</p>
				<p className='weatherInfo'>Давление: {this.props.weather.pressure} гПа</p>
				<p className='weatherInfo'>Влажность: {this.props.weather.humidity}%</p>
				<p className='weatherInfo'>Ветер: {this.props.weather.wind_deg}° {this.props.weather.wind_speed} м/с</p>
				<p className='weatherInfo'>Облачность: {this.props.weather.clouds}%</p>
            </div>
        )
    }
}

export default DailyForecastPanel;