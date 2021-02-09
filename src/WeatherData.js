import React from 'react';
import bridge from '@vkontakte/vk-bridge';

import { Spinner } from '@vkontakte/vkui';

class WeatherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          temperature: 0,
          city: "",
          feels_like: "",
          dt: 0,
          weather: ""
        };
    }

    componentDidMount() {
        let lat = 0;
        let long = 0;
        bridge
            .send('VKWebAppGetGeodata')
            .then(data => {
                lat = data.lat;
                long = data.long;
                fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            temperature: result.main.temp,
                            city: result.name,
                            feels_like: result.main.feels_like,
                            dt: result.dt,
                            weather: result.weather[0].main
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                    });
                    }
                )
            })
            .catch(error => {
                console.log(error.message);
            });
      }
    
      render() {
        const { error, isLoaded, temperature, city, feels_like, dt, weather } = this.state;
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        let date = new Date(dt * 1000);
        let day = date.getDate();
        let month = date.getMonth();
        let hours = date.getHours();
        let time = 'утром';
        if (hours >= 23) { time = 'ночью' } else if ( hours >= 18 ) { time = 'вечером' } else if ( hours >= 12) { time = 'днём' }
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Spinner size="large" style={{ margin: '20px 0' }} />
            </div>
          );
        } else {
          return (
            <div>
                <h2 className='dayMonth'>Сегодня {time} <span className='fadedText'>{day} {months[month]}</span></h2>
                <h3 className='temp'>{temperature}°С</h3>
                <h3 className='feelsLike'>Ощущается как {feels_like}°С</h3>
                <h3>{weather}</h3>
            </div>
          );
        }
      }
}

export default WeatherData;