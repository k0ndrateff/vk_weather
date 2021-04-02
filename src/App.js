import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, View, ModalRoot, ModalPage, ModalPageHeader, PanelHeaderClose, PanelHeaderSubmit, FormItem, Input, FormLayout, HorizontalScroll, HorizontalCell, Group, List, Cell } from '@vkontakte/vkui';

import LoadingImage from './img/loading.gif';
import ErrorImage from './img/error.png';
import ClearImage from './img/clear.png';
import RainImage from './img/rain.png';
import MistImage from './img/mist.png';
import NightClearImage from './img/nightClear.png';
import NightRainImage from './img/nightRain.png';
import NightSnowImage from './img/nightSnow.png';
import NightLightRainImage from './img/nightLightRain.png';
import AutumnCloudsImage from './img/autumnClouds.png';
import SpringCloudsImage from './img/springClouds.png';
import SummerCloudsImage from './img/summerClouds.png';
import WinterCloudsImage from './img/winterClouds.png';
import SpringClearImage from './img/springClear.png';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: false,
            weather: '',
            forecast: '',
            hourly: '',
            activePanel: 'weatherImage',
            history: ['weatherImage'],
            activeModal: null,
            modalHistory: [],
            help: 'share'
        };
    }

    componentDidMount() {
        let lat = 0;
        let long = 0;
        bridge.send('VKWebAppGetGeodata')
                .then(data => {
                    if (data.error_type == 'client_error') {
                        lat = 30;
                        long = 50;
                    }
                    else {
                        lat = data.lat;
                        long = data.long;
                    }
                    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({ 
                                weather: result
                            });
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        })
                    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({
                                isLoaded: true, 
                                forecast: result.daily.slice(1),
                                hourly: result.hourly
                            });
                            this.showWeatherImage();
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
                })
                .catch(error => {
                    this.setState({ 
                        isLoaded: true,
                        error
                    });
                });
    }

    goBack = () => {
		const history = [...this.state.history];
		history.pop();
		const activePanel = history[history.length - 1];
		if (activePanel === 'main') {
		  bridge.send('VKWebAppEnableSwipeBack');
		}
		this.setState({ history, activePanel });
	}
	
	goForward = (activePanel) => {
		const history = [...this.state.history];
		history.push(activePanel);
		if (this.state.activePanel === 'main') {
		  bridge.send('VKWebAppDisableSwipeBack');
		}
		this.setState({ history, activePanel });
	}

    modalBack = () => {
        this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
    };

    setActiveModal = (activeModal) => {
        activeModal = activeModal || null;
        let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];
    
        if (activeModal === null) {
          modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
          modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
          modalHistory.push(activeModal);
        }
    
        this.setState({
          activeModal,
          modalHistory
        });
    };

    toNormalDate = (dt) => {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        let date = new Date(dt * 1000);
        let day = date.getDate();
        let month = date.getMonth();
        return day + ' ' + months[month];
    }

    getTime = (dt) => {
        let date = new Date(dt * 1000);
        let hour = date.getHours();
        let minute = date.getMinutes();
        let time = 'утром';
        const week = ['Вс', 'Пн', 'Вт', 'Cр', 'Чт', 'Пт', 'Сб'];
        let dayOfWeek = week[date.getDay()];
        if (hour < 5 || hour > 22) { time = 'ночью' } else if (hour > 18) { time = 'вечером' } else if (hour > 10) { time = 'днём' }
        if (hour < 10) { hour = '0' + hour; }
        if (minute < 10) { minute = '0' + minute; }
        let res = {
            hour: hour,
            minute: minute,
            time: hour + ':' + minute,
            string: time,
            day: dayOfWeek
        }
        return res
    }

    getSeason = (dt) => {
        let date = new Date(dt * 1000);
        let month = date.getMonth();
        if (month == 12 || month <= 1) {
            return 'winter';
        } 
        else if (month <= 4) {
            return 'spring';
        }
        else if (month <= 7) {
            return 'summer';
        }
        else { return 'autumn'; }
    }

    updateGeoData = (city) => {
        this.modalBack();
        if (city === null || city === undefined) {
            let lat = 0;
            let long = 0;
            bridge.send('VKWebAppGetGeodata')
                .then(data => {
                    if (data.error_type == 'client_error') {
                        lat = 30;
                        long = 50;
                    }
                    else {
                        lat = data.lat;
                        long = data.long;
                    }
                    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({ 
                                weather: result
                            });
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        })
                    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({
                                isLoaded: true, 
                                forecast: result.daily.slice(1),
                                hourly: result.hourly
                            });
                            this.showWeatherImage();
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                        }
                    )
                })
                .catch(error => {
                    this.setState({ 
                        isLoaded: true,
                        error
                    });
                });
        } else {
            fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=e937bb61987a79d09b7604a3375a9941')
                .then(res => res.json())
                .then((result) => {
                    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ result[0].lat +"&lon=" + result[0].lon + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({ 
                                weather: result
                            });
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                            });
                    })
                    fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ result[0].lat +"&lon=" + result[0].lon + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({
                                isLoaded: true,
                                forecast: result.daily.slice(1),
                                hourly: result.hourly
                            });
                            this.showWeatherImage();
                        },
                        (error) => {
                            this.setState({
                                isLoaded: true,
                                error
                        });
                        })},
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
        }
    }

    getCityValue = () => {
        if (document.getElementById('city') != null) {
            return document.getElementById('city').value;
        } 
        else { return null }
    }

    lookupWeather = (weather) => {
         const list = {
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
        return list[weather];
    }

    showWeatherImage = () => { 
        this.goForward('weatherImage');
        setTimeout(() => this.goForward('main'), 3000);
    }

    toWindDirection = (deg) => {
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
    }

    render() {
        const { error, isLoaded, weather, hourly, forecast } = this.state;

        const IMAGES = [ClearImage, RainImage, MistImage, NightLightRainImage, NightRainImage, NightSnowImage, NightClearImage,
                        AutumnCloudsImage, SpringClearImage, SpringCloudsImage, SummerCloudsImage, WinterCloudsImage];

        const WeatherPanel = (weather) => { 
            return (
                <Panel id={weather.dt}>
                    <div className='mainGradient fullHeight'>
                        <div className='wrapper'>
                            <h1 className='city' onClick={() => this.goBack() }>Назад</h1>
                            <h1 className='displayText'>Погода {this.toNormalDate(weather.dt)} <span className='faded'>{this.getTime(weather.dt).day}</span></h1>
                            <h2 className='cityUnder faded'>в городе {this.state.weather.name}</h2>
                            <h2>Погода: {weather.weather[0].description}</h2> 
                            <h2>Температура: {Math.round(weather.temp.day)}°C</h2>
                            <h2>Ощущается как {Math.round(weather.feels_like.day)}°C</h2>
                            <h2>Рассвет: {this.getTime(weather.sunrise).time}</h2>
                            <h2>Закат: {this.getTime(weather.sunset).time}</h2>
                            <h2>Ветер: {this.toWindDirection(weather.wind_deg)} {Math.round(weather.wind_speed)} м/c</h2>
                            <div className='shareDiv' onClick={() => bridge.send("VKWebAppShare", {"link": "https://vk.com/app7752385"}) }>
                                <h2 className='shareLink linky'>Рассказать друзьям...</h2>
                            </div>
                        </div>
                    </div>
                </Panel>
        );};

        let fore_weather = [...forecast].map((day) => (
            <div className="laterBoxes foreBack faded" onClick={() => this.goForward(day.dt) } >
                <h2 className="fore">{this.toNormalDate(day.dt)}</h2>
                <h2 className="fore">{this.lookupWeather(day.weather[0].main)}</h2>
                <h2 className="fore">{Math.round(day.temp.day)}°C</h2>
            </div>
        ));

        let fore_panels = [...forecast].map((day) => (
            WeatherPanel(day)
        ));
        
        const modal = (
            <ModalRoot
                activeModal={this.state.activeModal}
                onClose={this.modalBack}
            >
                <ModalPage
                    id='chooseCity'
                    onClose={this.modalBack}
                    header={
                        <ModalPageHeader
                          left={<PanelHeaderClose onClick={this.modalBack}/>}
                          right={<PanelHeaderSubmit onClick={() => { this.updateGeoData(this.getCityValue()); }}/>}
                        >
                          Выбрать город
                        </ModalPageHeader>
                      }
                >
                    <FormLayout>
                        <FormItem top='Введите название'>
                            <Input id='city' placeholder={weather.name} />
                        </FormItem>
                    </FormLayout> 
                    <Group>
                        <List>
                            <Cell onClick={() => { this.updateGeoData() }}>🏠 Геолокация</Cell>
                            <Cell onClick={() => { this.updateGeoData('Москва') }}>🏰 Москва</Cell>
                            <Cell onClick={() => { this.updateGeoData('Париж') }}>🗺 Париж</Cell>
                            <Cell onClick={() => { this.updateGeoData('Нью-Йорк') }}>🗽 Нью-Йорк</Cell>
                        </List>
                    </Group>
                </ModalPage>
            </ModalRoot>
        ); 

        let weatherImage = (weather) => { 
            if (this.getTime(weather.dt).hour > 20 || this.getTime(weather.dt).hour < 5) {
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
                    switch (this.getSeason(weather.dt)) {
                        case 'spring':
                            return SpringClearImage;
                        default:
                            return ClearImage;
                    }
                case 'Clouds':
                    switch (this.getSeason(weather.dt)) {
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

        let imagesPreload = [...IMAGES].map((image) => (
            <img src={image} className='fullHeight preload'></img>
        ));

        if (error) {
            return (
                <View
                    onSwipeBack={this.goBack}
                    history={this.state.history}
                    activePanel={this.state.activePanel}
                >
                    <Panel id='weatherImage'>
                        <div className='mainGradient fullHeight aligner'>
                            <img src={ErrorImage}  className='loading' />
                            <h1 className='errorMessage faded'>Упс... сломалось :(</h1>
                        </div>
                    </Panel>
                </View>
            );}
        else if (!isLoaded) {
            return (
                <View
                    onSwipeBack={this.goBack}
                    history={this.state.history}
                    activePanel={this.state.activePanel}
                >
                    <Panel id='weatherImage'>
                        <div className='mainGradient fullHeight'>
                            <img src={LoadingImage}  className='loading' />
                            {imagesPreload}
                        </div>
                    </Panel>
                </View>
            );}
        else {
            return (
                <View 
					onSwipeBack={this.goBack}
					history={this.state.history}
					activePanel={this.state.activePanel}
                    modal={modal}
				>
                    <Panel id='main'>
                        <div className='mainGradient'>
                            <div className='wrapper'>
                                <h1 className='city' onClick={() => this.setActiveModal('chooseCity')}>{weather.name}</h1>
                                <h1 className='displayText linky' onClick={() => this.goForward('now')}>Сегодня {this.toNormalDate(weather.dt)}</h1>
                                <h2>Погода: {weather.weather[0].description}</h2> 
                                <h2>Температура: {Math.round(weather.main.temp)}°C</h2>
                                <h2>Ощущается как {Math.round(weather.main.feels_like)}°C</h2>
                                <div className='laterBoxes'>
                                    <div className='laterBox faded'>
                                        <h2 className='laterTime'>{this.getTime(hourly[1].dt).time}</h2>
                                        <h2 className='laterTemp'>{Math.round(hourly[1].temp)}°</h2>
                                    </div>
                                    <div className='laterBox faded'>
                                        <h2 className='laterTime'>{this.getTime(hourly[6].dt).time}</h2>
                                        <h2 className='laterTemp'>{Math.round(hourly[6].temp)}°</h2>
                                    </div>
                                    <div className='laterBox faded'>
                                        <h2 className='laterTime'>{this.getTime(hourly[12].dt).time}</h2>
                                        <h2 className='laterTemp'>{Math.round(hourly[12].temp)}°</h2>
                                    </div>
                                </div>
                                <h1 className='displayText'>На неделе</h1>
                                {fore_weather}
                                <h3 className='copyright'>
                                    <a className='copyright' href='https://vk.com/k0ndrateff'>Разработка: Егор @k0ndrateff</a> •  
                                    <a className='copyright' href='https://instagram.com/_alinapics_'>Дизайн: Алина @_alinapics_</a>
                                </h3>
                            </div>
                        </div>
                    </Panel>
                    {fore_panels}
                    <Panel id='weatherImage'>
                        <div className='mainGradient fullHeight aligner'>
                            <img src={weatherImage(weather)} className='fullHeight varWidth'></img>
                        </div>
                    </Panel>
                    <Panel id='now'>
                        <div className='mainGradient fullHeight'>
                            <div className='wrapper'>
                                <h1 className='city' onClick={() => this.goBack() }>Назад</h1>
                                <h1 className='displayText'>Погода сейчас</h1>
                                <h2 className='cityUnder faded'>в городе {this.state.weather.name}</h2>
                                <h2>Погода: {weather.weather[0].description}</h2> 
                                <h2>Температура: {Math.round(weather.main.temp)}°C</h2>
                                <h2>Ощущается как {Math.round(weather.main.feels_like)}°C</h2>
                                <h2>Рассвет: {this.getTime(weather.sys.sunrise).time}</h2>
                                <h2>Закат: {this.getTime(weather.sys.sunset).time}</h2>
                                <h2>Ветер: {this.toWindDirection(weather.wind.deg)} {Math.round(weather.wind.speed)} м/c</h2>
                                <div className='shareDiv' onClick={() => bridge.send("VKWebAppShare", {"link": "https://vk.com/app7752385"}) }>
                                    <h2 className='shareLink linky'>Рассказать друзьям...</h2>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </View>
            );
        }
    }

}

export default App;