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
          feels_like: ""
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
                            feels_like: result.current.feels_like
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
        const { error, isLoaded, temperature, timezone, feels_like } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <h1>Часовой пояс: {timezone}, температура: {temperature}°С, чувствуется как {feels_like}°С</h1>
          );
        }
      }
}

export default WeatherData;