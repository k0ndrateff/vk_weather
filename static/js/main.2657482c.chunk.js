(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),s=a.n(i),c=a(10),o=a.n(c),l=a(16),m=a(19),h=a(20),d=a(23),u=a(22),p=(a(128),a(11)),v=a.p+"static/media/loading.8a1887f1.svg",g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(l.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&o.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(l.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&o.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.toNormalDate=function(e){var t=new Date(1e3*e);return t.getDate()+" "+["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()]},n.getTime=function(e){var t=new Date(1e3*e),a=t.getHours(),n="\u0443\u0442\u0440\u043e\u043c";return a<5||a>22?n="\u043d\u043e\u0447\u044c\u044e":a>18?n="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":a>10&&(n="\u0434\u043d\u0451\u043c"),{time:a+":"+t.getMinutes(),string:n}},n.state={error:null,isLoaded:!1,weather:"",forecast:"",hourly:"",activePanel:"main",history:["main"]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;o.a.send("VKWebAppGetGeodata").then((function(n){"client_error"==n.error_type?(t=30,a=50):(t=n.lat,a=n.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({weather:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,forecast:t.daily.slice(1),hourly:t.hourly})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.weather;e.hourly;return t?r.a.createElement(p.b,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.a,{id:"main"},r.a.createElement("div",{className:"mainGradient"},r.a.createElement("h1",null,"\u041e\u0448\u0438\u0431\u043a\u0430 :("),r.a.createElement("p",null,t.message)))):a?r.a.createElement(p.b,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.a,{id:"main"},r.a.createElement("div",{className:"mainGradient"},r.a.createElement("div",{className:"cityWrap"},r.a.createElement("h1",{className:"city"},n.name)),r.a.createElement("div",{className:"currentWrap"},r.a.createElement("div",null,r.a.createElement("h1",{className:"todayString"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",this.getTime(n.dt).string),r.a.createElement("h1",{className:"todayDate"},this.toNormalDate(n.dt))),r.a.createElement("h2",{className:"mainTemp"},Math.round(n.main.temp),"\xb0C"),r.a.createElement("h3",{className:"mainFeels"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(n.main.feels_like),"\xb0C"),r.a.createElement("h4",{className:"mainWeather"},"\u041d\u0430 \u0443\u043b\u0438\u0446\u0435 ",n.weather[0].description))))):r.a.createElement(p.b,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.a,{id:"main"},r.a.createElement("div",{className:"mainGradient"},r.a.createElement("h1",{className:"loadingText"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("img",{src:v}))))}}]),a}(r.a.Component);o.a.send("VKWebAppInit"),s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.2657482c.chunk.js.map