import React from "react";
import {Panel} from "@vkontakte/vkui";
import bridge from "@vkontakte/vk-bridge";
import {getTime} from "../lib/dateTimePrettificator";
import {toWindDirection} from "../lib/weatherPrettificator";

type NowPanelProps = {
    goBack: () => void;
    weather: object;
};

const NowPanel:React.FC<NowPanelProps> = ({ goBack, weather }) => {
    return (
        <Panel id='now'>
            <div className='mainGradient fullHeight'>
                <div className='wrapper'>
                    <h1 className='city' onClick={goBack}>Назад</h1>
                    <h1 className='displayText'>Погода сейчас</h1>
                    <h2 className='cityUnder faded'>в городе {weather.name}</h2>
                    <h2>Погода: {weather.weather[0].description}</h2>
                    <h2>Температура: {Math.round(weather.main.temp)}°C</h2>
                    <h2>Ощущается как {Math.round(weather.main.feels_like)}°C</h2>
                    <h2>Рассвет: {getTime(weather.sys.sunrise).time}</h2>
                    <h2>Закат: {getTime(weather.sys.sunset).time}</h2>
                    <h2>Ветер: {toWindDirection(weather.wind.deg)} {Math.round(weather.wind.speed)} м/c</h2>
                    <div className='shareDiv' onClick={() => bridge.send("VKWebAppShare", {"link": "https://vk.com/app7752385"}) }>
                        <h2 className='shareLink linky'>Рассказать друзьям...</h2>
                    </div>
                </div>
            </div>
        </Panel>
    );
};
export default NowPanel;