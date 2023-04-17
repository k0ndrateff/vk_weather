import React from "react";
import ForecastBox from "./ForecastBox";

type ForecastBoxesProps = {
    forecast: object[];
    goForward: (arg0: string) => void;
};

const ForecastBoxes:React.FC<ForecastBoxesProps> = ({forecast, goForward}) => {
    return (
        <>
            {
                [...forecast].map((day) => (
                    <ForecastBox day={day} goForward={goForward} />
                ))
            }
        </>
    );
};
export default ForecastBoxes;