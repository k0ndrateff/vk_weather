import React, {useEffect, useState} from "react";
import {usePanel} from "./hooks/usePanel";
import {useModal} from "./hooks/useModal";
import {useGeoData} from "./hooks/useGeoData";
import ErrorView from "./components/ErrorView";
import NotLoadedView from "./components/NotLoadedView";
import {SplitLayout, View} from "@vkontakte/vkui";
import CityModal from "./components/CityModal";
import MainPanel from "./components/MainPanel";
import ForecastPanels from "./components/ForecastPanels";
import NowPanel from "./components/NowPanel";
import WeatherImagePanel from "./components/WeatherImagePanel";

export default function App() {
    let [city, setCity] = useState('Москва');

    let {activePanel, history, goBack, goForward} = usePanel();
    let {activeModal, modalBack, setModal} = useModal();
    let {weather, forecast, hourlyWeather, error, isLoaded, updateGeoData} = useGeoData();

    const showWeatherImage = () => {
        goForward('weatherImage');
        setTimeout(() => goForward('main'), 2500);
    };

    useEffect(() => {
        if (!error) updateGeoData(city);
        showWeatherImage();
    }, [city]);

    if (error) {
        return (
            <ErrorView goBack={goBack} history={history} activePanel={activePanel} />
        );
    }
    else if (!isLoaded) {
        return (
            <NotLoadedView goBack={goBack} history={history} activePanel={activePanel} />
        );
    }
    else {
        return (
            <View
                onSwipeBack={goBack}
                history={history}
                activePanel={activePanel}
            >
                <SplitLayout modal={<CityModal city={city}
                                      activeModal={activeModal}
                                      setCity={setCity}
                                      modalBack={modalBack}
                                      updateGeoData={updateGeoData}
                    />}
                >
                    <MainPanel setActiveModal={setModal}
                               goForward={goForward}
                               weather={weather}
                               hourly={hourlyWeather}
                               forecast={forecast}
                    />
                    <WeatherImagePanel weather={weather} />
                    <ForecastPanels forecast={forecast} goBack={goBack} cityName={city} />
                    <NowPanel goBack={goBack} weather={weather} />
                </SplitLayout>
            </View>
        );
    }
}