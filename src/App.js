import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, View, PanelHeader } from '@vkontakte/vkui';

import LoadingImage from './img/loading.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            weather: '',
            forecast: '',
            activePanel: 'main',
            history: ['main']
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
                                forecast: result.daily.slice(1)
                            });
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
        let time = 'утро';
        if (hour < 5 || hour > 22) { time = 'ночь' } else if (hour > 18) { time = 'вечер' } else if (hour > 10) { time = 'день' }
        let res = {
            time: hour + ':' + minute,
            string: time
        }
        return res
    }

    render() {
        const { error, isLoaded, weather } = this.state;
        if (error) {
            return (
                <View
                    onSwipeBack={this.goBack}
                    history={this.state.history}
                    activePanel={this.state.activePanel}
                >
                    <Panel id='main'>
                        <div className='mainGradient'>
                            <h1>Ошибка :(</h1>
                            <p>{error.message}</p>
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
                    <Panel id='main'>
                        <div className='mainGradient'>
                            <h1 className='loadingText'>Загрузка...</h1>
                            <img src={LoadingImage} />
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
				>
                    <Panel id='main'>
                        <div className='mainGradient'>
                            <div className='cityWrap'>
                                <h1 className='city'>{weather.name}</h1>
                            </div>
                            <h1>Сегодня {this.toNormalDate(weather.dt)}</h1>
                            <h2 className='mainTemp'>{Math.round(weather.main.temp)}°C</h2>
                            <h3 className='mainFeels'>Ощущается как {Math.round(weather.main.feels_like)}°C</h3>
                        </div>
                    </Panel>
                </View>
            );
        }
    }

}

export default App;