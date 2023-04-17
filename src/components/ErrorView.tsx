import React from "react";
import {Panel, View} from "@vkontakte/vkui";

type ErrorViewProps = {
    goBack: () => void;
    history: string[];
    activePanel: string;
};

const ErrorView:React.FC<ErrorViewProps> = ({ goBack, history, activePanel }) => {
    const ErrorImage = '../img/error.png';

    return (
        <View
            onSwipeBack={goBack}
            history={history}
            activePanel={activePanel}
        >
            <Panel id='weatherImage'>
                <div className='mainGradient fullHeight aligner'>
                    <img src={ErrorImage}  className='loading' alt={'Ошибка'} />
                    <h1 className='errorMessage faded'>Упс... сломалось :(</h1>
                </div>
            </Panel>
        </View>
    );
};
export default ErrorView;