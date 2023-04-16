import React from "react";
import {Panel} from "@vkontakte/vkui";
import {chooseWeatherImage} from "../lib/weatherPrettificator";

type WeatherImagePanelProps = {
    weather: object;
};

const WeatherImagePanel:React.FC<WeatherImagePanelProps> = ({ weather }) => {
    return (
        <Panel id='weatherImage'>
            <div className='mainGradient fullHeight aligner'>
                <img src={chooseWeatherImage(weather)} className='fullHeight varWidth'></img>
            </div>
        </Panel>
    );
};
export default WeatherImagePanel;