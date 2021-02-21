import React from 'react';

class DailyForecast extends React.Component {
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
            <div className="forecast" onClick={this.props.onClick}>
                <h2 className="fore-date">{this.toNormalDate(this.props.weather.dt)}</h2>
                <h2 className="fore-temp">{Math.round(this.props.weather.temp.day)}°С</h2>
            </div>
        )
    }
}

export default DailyForecast;