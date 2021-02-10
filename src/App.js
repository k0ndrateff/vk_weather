import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, Spinner } from '@vkontakte/vkui';
import {  Icon24PlaceOutline, Icon28ErrorCircleOutline, Icon24Spinner } from '@vkontakte/icons';

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
                lat = data.lat;
                long = data.long;
                fetch("https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + long + "&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941")
                    .then(res => res.json())
                    .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            temperature: result.main.temp,
                            city: result.name,
                            feels_like: result.main.feels_like,
                            dt: result.dt,
                            weather: result.weather[0].description
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
                console.log(error.message);
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

	render() {
		const { error, isLoaded, temperature, city, feels_like, dt, weather } = this.state;
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        let date = new Date(dt * 1000);
        let day = date.getDate();
        let month = date.getMonth();
        let hours = date.getHours();
        let time = 'утром';
        if (hours >= 23 || hours <= 4) { time = 'ночью' } else if ( hours >= 18 ) { time = 'вечером' } else if ( hours >= 12) { time = 'днём' }
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
						<PanelHeader left={<Icon24Spinner />}>Загрузка...</PanelHeader>
			  			<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
							<Spinner size="large" style={{ margin: '20px 0' }} />
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
					  	<PanelHeader left={<Icon24PlaceOutline />}>{city}</PanelHeader>
					  	<div>
                			<h2 className='dayMonth'>Сегодня {time} <span className='fadedText'>{day} {months[month]}</span></h2>
                			<h3 className='temp'>{temperature}°С</h3>
                			<h3 className='feelsLike'>Ощущается как {feels_like}°С</h3>
                			<h3 className='weatherName'>{weather}</h3>
            			</div>
					</Panel>
		  		</View>
			);}
	}
}

export default App;

