import React from 'react';
import bridge from '@vkontakte/vk-bridge';

class WeatherData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          temperature: 0,
          timezone: "",
          feels_like: "",
          dt: 0
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
                fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&lang=ru&units=metric&appid=e937bb61987a79d09b7604a3375a9941")
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            temperature: result.current.temp,
                            timezone: result.timezone,
                            feels_like: result.current.feels_like,
                            dt: result.current.dt
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
        const { error, isLoaded, temperature, timezone, feels_like, dt } = this.state;
        let date = new Date(dt * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let time = hours + ':' + minutes.substr(-2);
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <div>
                <p>Часовой пояс: {timezone}</p>
                <p>Время: {time}</p>
                <p>Температура: {temperature}°С</p>
                <p>Чувствуется как {feels_like}°С</p>
            </div>
          );
        }
      }
}

export default WeatherData;