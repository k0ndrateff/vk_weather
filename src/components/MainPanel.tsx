import React from "react";
import {Panel} from "@vkontakte/vkui";
import {getTime, toNormalDate} from "../lib/dateTimePrettificator";
import ForecastBoxes from "./ForecastBoxes";
import CopyrightBlock from "./CopyrightBlock";
import LaterBoxes from "./LaterBoxes";
import LaterBox from "./LaterBox";

type MainPanelProps = {
    setActiveModal: (string) => void;
    goForward: (string) => void;
    weather: object;
    hourly: object;
    forecast: object;
};

const MainPanel:React.FC<MainPanelProps> = ({ setActiveModal, hourly, weather, goForward, forecast }) => {
    return (
        <Panel id='main'>
            <div className='mainGradient'>
                <div className='wrapper'>
                    <h1 className='city' onClick={() => setActiveModal('chooseCity')}>{weather.name}</h1>
                    <h1 className='displayText linky' onClick={() => goForward('now')}>
                        Сегодня {toNormalDate(weather.dt)}
                    </h1>
                    <h2>Погода: {weather.weather[0].description}</h2>
                    <h2>Температура: {Math.round(weather.main.temp)}°C</h2>
                    <h2>Ощущается как {Math.round(weather.main.feels_like)}°C</h2>
                    <LaterBoxes>
                        <LaterBox timeOffset={1} hourly={hourly} />
                        <LaterBox timeOffset={6} hourly={hourly} />
                        <LaterBox timeOffset={12} hourly={hourly} />
                    </LaterBoxes>
                    <h1 className='displayText'>На неделе</h1>
                    <ForecastBoxes forecast={forecast} goForward={goForward} />
                    <CopyrightBlock />
                </div>
            </div>
        </Panel>
    );
};
export default MainPanel;