import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import { View, Panel, PanelHeader, PromoBanner } from '@vkontakte/vkui';
import WeatherData from './WeatherData';

class App extends React.Component {
	constructor(props) {
        super(props);
    }

	componentDidMount() {

	}

	render() {
		return (
			<View activePanel="main">
				<Panel id="main">
					  <PanelHeader>Погода</PanelHeader>
					  <WeatherData></WeatherData>
				</Panel>
		  </View>
		);
	}
}

export default App;

