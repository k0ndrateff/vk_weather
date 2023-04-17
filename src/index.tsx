import React from "react";
import ReactDOM from "react-dom/client";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit").then(() => {
    const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
});



