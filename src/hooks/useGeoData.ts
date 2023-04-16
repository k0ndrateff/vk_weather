import bridge from "@vkontakte/vk-bridge";
import {useCallback, useState} from "react";

export const useGeoData = () => {
    let [weather, setWeather] = useState('');
    let [forecast, setForecast] = useState('');
    let [hourlyWeather, setHourlyWeather] = useState('');
    let [error, setError] = useState(false);
    let [isLoaded, setLoaded] = useState(false);

    const updateGeoData = useCallback((city) => {
        let lat = 0;
        let long = 0;

        if (!city) {
            bridge.send('VKWebAppGetGeodata')
                .then(data => {
                        if (data.available) {
                            lat = data.lat;
                            long = data.long;
                        }
                        else updateGeoData('Москва');
                    }
                ).catch((error) => setError(error));
        }
        else {
            fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=e937bb61987a79d09b7604a3375a9941')
                .then(res => res.json())
                .then((result) => {
                    lat = result[0].lat;
                    long = result[0].long;
                })
                .catch((error) => setError(error));
        }

        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
            .then(res => res.json())
            .then((result) => setWeather(result))
            .catch((error) => setError(error))

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
            .then(res => res.json())
            .then((result) => {
                    setForecast(result.daily.slice(1));
                    setHourlyWeather(result.hourly);
                    setLoaded(true);
            })
            .catch((error) => setError(error))
    }, []);

    return {weather, forecast, hourlyWeather, error, isLoaded, updateGeoData};
};