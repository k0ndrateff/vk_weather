import React from "react";
import WeatherPanel from "./WeatherPanel";

type ForecastPanelsProps = {
    cityName: string;
    forecast: object[];
    goBack: () => void;
};

const ForecastPanels:React.FC<ForecastPanelsProps> = ({ cityName, forecast, goBack}) => {
    return [...forecast].map((day) => (
        <WeatherPanel cityName={cityName} weather={day} goBack={goBack} />
    ));
};
export default ForecastPanels;