import React from "react";
import {Panel, View} from "@vkontakte/vkui";

type NotLoadedViewProps = {
    goBack: () => void;
    history: string[];
    activePanel: string;
};

const NotLoadedView:React.FC<NotLoadedViewProps> = ({ goBack, history, activePanel }) => {
    const LoadingImage = '../img/loading.gif';

    return (
        <View
            onSwipeBack={goBack}
            history={history}
            activePanel={activePanel}
        >
            <Panel id='weatherImage'>
                <div className='mainGradient fullHeight'>
                    <img src={LoadingImage}  className='loading' alt={'Загрузка'} />
                </div>
            </Panel>
        </View>
    );
};
export default NotLoadedView;