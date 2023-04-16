import React, {useCallback, useState} from "react";
import bridge from "@vkontakte/vk-bridge";

export function usePanel() {
    let [activePanel, setActivePanel] = useState('weatherImage');
    let [history, setHistory] = useState(['weatherImage']);

    const goBack = useCallback(() => {
        const gbHistory = [...history];
        gbHistory.pop();
        const gbActivePanel = gbHistory[gbHistory.length - 1];
        if (gbActivePanel === 'main') {
            bridge.send('VKWebAppEnableSwipeBack');
        }
        setActivePanel(gbActivePanel);
        setHistory(gbHistory);
    }, [activePanel, history]);

    const goForward = useCallback((newActivePanel) => {
        const gbHistory = [...history];
        gbHistory.push(newActivePanel);
        if (activePanel === 'main') {
            bridge.send('VKWebAppDisableSwipeBack');
        }
        setActivePanel(newActivePanel);
        setHistory(gbHistory);
    }, [activePanel, history]);

    return {activePanel, history, goBack, goForward};
};