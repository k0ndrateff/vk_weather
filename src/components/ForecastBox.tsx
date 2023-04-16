import React from "react";
import {toNormalDate} from "../lib/dateTimePrettificator";
import {lookupWeather} from "../lib/weatherPrettificator";

type ForecastBoxProps = {
    day: object;
    goForward: (number) => void;
};

const ForecastBox:React.FC<ForecastBoxProps> = ({day, goForward}) => {
    return (
        <div className="laterBoxes foreBack faded" onClick={() => goForward(day.dt) } >
            <h2 className="fore">{toNormalDate(day.dt)}</h2>
            <h2 className="fore">{lookupWeather(day.weather[0].main)}</h2>
            <h2 className="fore">{Math.round(day.temp.day)}°C</h2>
        </div>
    );
};
export default ForecastBox;