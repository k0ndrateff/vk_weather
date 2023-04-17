import React from "react";
import {Panel} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {getTime, toNormalDate} from "../lib/dateTimePrettificator";
import {toWindDirection} from "../lib/weatherPrettificator";

type WeatherPanelProps = {
    cityName: string;
    weather: any;
    goBack: () => void;
};

const WeatherPanel:React.FC<WeatherPanelProps> = ({ weather, goBack, cityName }) => {
    return (
        <Panel id={weather.dt}>
            <div className={'mainGradient fullHeight'}>
                <div className={'wrapper'}>
                    <h1 className='city' onClick={goBack}>Назад</h1>
                    <h1 className='displayText'>Погода {toNormalDate(weather.dt)}
                        <span className='faded'>{getTime(weather.dt).day}</span>
                    </h1>
                    <h2 className='cityUnder faded'>в городе {cityName}</h2>
                    <h2>Погода: {weather.weather[0].description}</h2>
                    <h2>Температура: {Math.round(weather.temp.day)}°C</h2>
                    <h2>Ощущается как {Math.round(weather.feels_like.day)}°C</h2>
                    <h2>Рассвет: {getTime(weather.sunrise).time}</h2>
                    <h2>Закат: {getTime(weather.sunset).time}</h2>
                    <h2>Ветер: {toWindDirection(weather.wind_deg)} {Math.round(weather.wind_speed)} м/c</h2>
                    <div className='shareDiv'
                         onClick={() => bridge.send("VKWebAppShare", {"link": "https://vk.com/app7752385"})}>
                        <h2 className='shareLink linky'>Рассказать друзьям...</h2>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
export default WeatherPanel;