import React from "react";
import {getTime} from "../lib/dateTimePrettificator";

type LaterBoxProps = {
    timeOffset: number;
    hourly: any;
};

const LaterBox:React.FC<LaterBoxProps> = ({ timeOffset, hourly }) => {
    return (
        <div className='laterBox faded'>
            <h2 className='laterTime'>{getTime(hourly[timeOffset].dt).time}</h2>
            <h2 className='laterTemp'>{Math.round(hourly[timeOffset].temp)}°</h2>
        </div>
    );
};
export default LaterBox;