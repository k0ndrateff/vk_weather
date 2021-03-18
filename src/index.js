import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";

// Init VK  Mini App
bridge.send("VKWebAppInit");

addEventListener("VKWebAppUpdateConfig", (event) => {
    console.log(event);
})

ReactDOM.render(<App />, document.getElementById("root"));