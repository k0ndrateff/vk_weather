import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit").then(r => {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    , document.getElementById("root"));
});

