import {getSeason, getTime} from "./dateTimePrettificator";
const ClearImage = './img/clear.png';
const RainImage = './img/rain.png';
const MistImage = '../img/mist.png';
const NightClearImage = './img/nightClear.png';
const NightRainImage = './img/nightRain.png';
const NightSnowImage = './img/nightSnow.png';
const NightLightRainImage = './img/nightLightRain.png';
const AutumnCloudsImage = './img/autumnClouds.png';
const SpringCloudsImage = './img/springClouds.png';
const SummerCloudsImage = './img/summerClouds.png';
const WinterCloudsImage = './img/winterClouds.png';
const SpringClearImage = './img/springClear.png';

const weatherList = {
    'Thunderstorm': 'шторм',
    'Drizzle': 'дождик',
    'Rain': 'дождь',
    'Snow': 'снег',
    'Mist': 'туман',
    'Smoke': 'смог',
    'Haze': 'дымка',
    'Dust': 'пыль',
    'Fog': 'туман',
    'Sand': 'песок',
    'Ash': 'задымление',
    'Squall': 'шквал',
    'Tornado': 'торнадо',
    'Clear': 'ясно',
    'Clouds': 'облачно'
};

const IMAGES = [ClearImage, RainImage, MistImage, NightLightRainImage, NightRainImage, NightSnowImage, NightClearImage,
    AutumnCloudsImage, SpringClearImage, SpringCloudsImage, SummerCloudsImage, WinterCloudsImage];

/**
 * Преобразует название погоды из API в удобочитаемое
 * @param weather название погодного состояния OpenWeatherMap
 */
export const lookupWeather = (weather: string) => {
    return weatherList[weather];
};

/**
 * Преобразует направление ветра в градусах в строковое представление
 * @param deg направление ветра в градусах
 */
export const toWindDirection = (deg: number) => {
    if (deg >= 330 || deg <= 30) {
        return 'северный';
    }
    else if (deg < 60) {
        return 'северо-восточный';
    }
    else if (deg < 120) {
        return 'восточный';
    }
    else if (deg < 150) {
        return 'юго-восточный';
    }
    else if (deg < 210) {
        return 'южный';
    }
    else if (deg < 240) {
        return 'юго-западный';
    }
    else if (deg < 300) {
        return 'западный';
    }
    else {
        return 'северо-западный';
    }
};

export const chooseWeatherImage = (weather) => {
    if (Number(getTime(weather.dt).hour) > 20 || Number(getTime(weather.dt).hour) < 5) {
        switch (weather.weather[0].main) {
            case 'Drizzle':
            case 'Rain':
                return NightLightRainImage;
            case 'Thunderstorm':
            case 'Squall':
            case 'Tornado':
                return NightRainImage;
            case 'Snow':
                return NightSnowImage;
            case 'Mist':
            case 'Smoke':
            case 'Haze':
            case 'Dust':
            case 'Fog':
            case 'Sand':
            case 'Ash':
                return MistImage;
            case 'Clear':
            case 'Clouds':
                return NightClearImage;
        }
    }
    switch (weather.weather[0].main) {
        case 'Thunderstorm':
        case 'Drizzle':
        case 'Rain':
        case 'Snow':
        case 'Squall':
        case 'Tornado':
            return RainImage;
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Ash':
            return MistImage;
        case 'Clear':
            switch (getSeason(weather.dt)) {
                case 'spring':
                    return SpringClearImage;
                default:
                    return ClearImage;
            }
        case 'Clouds':
            switch (getSeason(weather.dt)) {
                case 'spring':
                    return SpringCloudsImage;
                case 'summer':
                    return SummerCloudsImage;
                case 'autumn':
                    return AutumnCloudsImage;
                case 'winter':
                    return WinterCloudsImage;
            }
    }
};