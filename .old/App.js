import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Group, CellButton, PanelHeaderBack, Header, SimpleCell, InfoRow, Tooltip } from '@vkontakte/vkui';
import {  Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { Player } from '@lottiefiles/react-lottie-player';
import DailyForecast from './DailyForecast';
import DailyForecastPanel from './DailyForecastPanel';

class App extends React.Component {
	constructor(props) {
        super(props);
		this.state = {
			error: null,
			isLoaded: false,
			temperature: 0,
			city: "",
			feels_like: "",
			dt: 0,
			weather: "",
			other: '',
			forecast: '',
			alerts: '',
			activePanel: 'main',
			history: ['main']
		  };
    }

	componentDidMount() {
		let lat = 0;
        let long = 0;
        bridge
            .send('VKWebAppGetGeodata')
            .then(data => {
				if (data.error_type == "client_error") {
					lat = 30;
					long = 50;
				}
				else {
					lat = data.lat;
                	long = data.long;
				}
                fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                            temperature: result.main.temp,
                            city: result.name,
                            feels_like: result.main.feels_like,
                            dt: result.dt,
                            weather: result.weather[0].description,
							other: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                    	});
                    }
                )
				fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            forecast: result.daily.slice(1),
							alerts: result.alerts
                        });
						console.log(result.alerts);
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

	render() {
		const { platform } = this.props;
		const { error, isLoaded, temperature, city, feels_like, dt, weather, other, forecast, alerts } = this.state;
        let date = new Date(dt * 1000);
        let hours = date.getHours();
        let time = 'утром';
        if (hours >= 23 || hours <= 4) { time = 'ночью' } else if ( hours >= 18 ) { time = 'вечером' } else if ( hours >= 12) { time = 'днём' }
		let feeling = Math.round(feels_like);
		let fore_weather = [...forecast].map((day) =>
			<DailyForecast weather={day} onClick={ () => this.goForward(day.dt) } />
		);
		let fore_panels = [...forecast].map((day) => (
			<Panel id={day.dt}>
				<PanelHeader
              		left={<PanelHeaderBack  onClick={() => this.goBack()} label={platform === 'VKCOM' ? 'Назад' : undefined} />}
            	>
              		Погода {this.toNormalDate(day.dt)}
            	</PanelHeader>
				<DailyForecastPanel weather={day} />
			</Panel>
		));
		let alertsMap = [...alerts].map((alert) => (
			<p className="weatherInfo">{alert.description}</p>
		));
		if (error) {
			return (
				<View 
					onSwipeBack={this.goBack}
					history={this.state.history}
					activePanel={this.state.activePanel}
				>
					<Panel id='main'>
						<PanelHeader left={<Icon28ErrorCircleOutline />}>Ошибка</PanelHeader>
						<div>{error.message}</div>
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
						<PanelHeader>Загрузка...</PanelHeader>
			  			<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
						  	<Player
  								autoplay
  								loop
  								src="https://assets4.lottiefiles.com/packages/lf20_Cemmpu.json"
  								style={{ height: '300px', width: '300px' }}
						  	>
							</Player>
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
					<Panel id="main">
					  	<PanelHeader>{city}</PanelHeader>
					  	<div>
							<div className='main-weather'>
								<h2 className='dayMonth'>Сегодня {time} <span className='fadedText'>{this.toNormalDate(dt)}</span></h2>
								<div className='inline-temp'>
									<h3 className='temp'>{temperature}°С</h3>
									<Player
										autoplay
										loop
										src='https://assets10.lottiefiles.com/temp/lf20_WtPCZs.json'
										style={{height: '100px', width: '100px'}}
									></Player>
								</div>
                				<h3 className='feelsLike'>Ощущается как {feeling}°С</h3>
                				<h3 className='weatherName'>На улице {weather}</h3>
							</div>
							<Group>
              					<CellButton onClick={ () => this.goForward('more_weather') }>
                					Ещё о погоде
              					</CellButton>
            				</Group>
							<Group>
								<Header mode='secondary'>Прогноз</Header>
								{fore_weather}
							</Group>
            			</div>
					</Panel>
					<Panel id='more_weather'>
						<PanelHeader
              				left={<PanelHeaderBack  onClick={() => this.goBack()} label={platform === 'VKCOM' ? 'Назад' : undefined} />}
            			>
              				Текущая погода
            			</PanelHeader>
						<div>
							<p className='weatherInfo'>Город: {city}</p>
							<p className='weatherInfo'>Погода: {weather}</p>
							<p className='weatherInfo'>Температура: {temperature}°С</p>
							<p className='weatherInfo'>Ощущается как: {feels_like}°С</p>
							<p className='weatherInfo'>Давление: {other.main.pressure} гПа</p>
							<p className='weatherInfo'>Влажность: {other.main.humidity}%</p>
							<p className='weatherInfo'>Ветер: {other.wind.deg}° {other.wind.speed} м/с</p>
							<p className='weatherInfo'>Облачность: {other.clouds.all}%</p>
						</div>
						<Group>
								<Header mode='secondary'>Предупреждения!!!</Header>
								{alertsMap}
						</Group>
					</Panel>
					{fore_panels}
		  		</View>
			);}
	}
}

export default App;

