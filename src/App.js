import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { Panel, View, ModalRoot, ModalPage, ModalPageHeader, PanelHeaderClose, PanelHeaderSubmit, FormItem, Input, FormLayout } from '@vkontakte/vkui';

import LoadingImage from './img/loading.svg';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            weather: '',
            forecast: '',
            hourly: '',
            activePanel: 'main',
            history: ['main'],
            activeModal: null,
            modalHistory: []
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
        if (hour < 5 || hour > 22) { time = 'ночью' } else if (hour > 18) { time = 'вечером' } else if (hour > 10) { time = 'днём' }
        if (hour < 10) { hour = '0' + hour; }
        if (minute < 10) { minute = '0' + minute; }
        let res = {
            hour: hour,
            minute: minute,
            time: hour + ':' + minute,
            string: time
        }
        return res
    }

    updateGeoData = (city) => {
        this.modalBack();
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
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                    });
            }
        )
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
        })
    }

    render() {
        const { error, isLoaded, weather, hourly } = this.state;

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
                          right={<PanelHeaderSubmit onClick={() => {
                                if (document.getElementById('city') != null) {
                                    this.updateGeoData(document.getElementById('city').value);
                                }  
                          }}/>}
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
                </ModalPage>
            </ModalRoot>
        );

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
                    modal={modal}
				>
                    <Panel id='main'>
                        <div className='mainGradient'>
                            <div className='cityWrap'>
                                <h1 className='city' onClick={() => this.setActiveModal('chooseCity')}>{weather.name}</h1>
                            </div>
                            <div className='currentWrap'>
                                <div className='today'>
                                    <h1 className='todayString'>Сейчас</h1>
                                    <h1 className='todayDate'>{this.toNormalDate(weather.dt)}</h1>
                                </div>
                                <h2 className='mainTemp'>{Math.round(weather.main.temp)}°C</h2>
                                <h3 className='mainFeels'>Ощущается как {Math.round(weather.main.feels_like)}°C</h3>
                                <h4 className='mainWeather'>На улице {weather.weather[0].description}</h4>
                            </div>
                            <div className="currentWrap wrapTop">
                                <h1 className='todayString'>Позже</h1>
                                <div className="laterBoxes">
                                    <div className="laterBox">
                                        <h3 className='laterTemp'>{Math.round(hourly[1].temp)}°C</h3>
                                        <h3 className='laterTime'>{this.getTime(hourly[1].dt).hour}:{this.getTime(hourly[1].dt).minute}</h3>
                                 </div>
                                    <div className="laterBox">
                                        <h3 className='laterTemp'>{Math.round(hourly[6].temp)}°C</h3>
                                        <h3 className='laterTime'>{this.getTime(hourly[6].dt).hour}:{this.getTime(hourly[6].dt).minute}</h3>
                                    </div>
                                    <div className="laterBox">
                                        <h3 className='laterTemp'>{Math.round(hourly[12].temp)}°C</h3>
                                        <h3 className='laterTime'>{this.getTime(hourly[12].dt).hour}:{this.getTime(hourly[12].dt).minute}</h3>
                                    </div>
                                    <div className="laterBox">
                                        <h3 className='laterTemp'>{Math.round(hourly[18].temp)}°C</h3>
                                        <h3 className='laterTime'>{this.getTime(hourly[18].dt).hour}:{this.getTime(hourly[18].dt).minute}</h3>
                                    </div>
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