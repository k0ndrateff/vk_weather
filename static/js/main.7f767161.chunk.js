(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),o=a.n(r),c=a(12),s=a.n(c),l=a(17),d=a(28),m=a(29),h=a(34),u=a(33),p=(a(122),a(6)),f=a.p+"static/media/loading.8a1887f1.svg",v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(l.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&s.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(l.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&s.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n.setActiveModal=function(e){e=e||null;var t=n.state.modalHistory?Object(l.a)(n.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),n.setState({activeModal:e,modalHistory:t})},n.toNormalDate=function(e){var t=new Date(1e3*e);return t.getDate()+" "+["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()]},n.getTime=function(e){var t=new Date(1e3*e),a=t.getHours(),n="\u0443\u0442\u0440\u043e\u043c";return a<5||a>22?n="\u043d\u043e\u0447\u044c\u044e":a>18?n="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":a>10&&(n="\u0434\u043d\u0451\u043c"),{time:a+":"+t.getMinutes(),string:n}},n.updateGeoData=function(e){n.modalBack();var t=0,a=0;fetch("https://api.openweathermap.org/geo/1.0/direct?q="+e+"&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){t=e[0].lat,a=e[0].lon}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({weather:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,forecast:e.daily.slice(1),hourly:e.hourly})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,weather:"",forecast:"",hourly:"",activePanel:"main",history:["main"],activeModal:null,modalHistory:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(n){"client_error"==n.error_type?(t=30,a=50):(t=n.lat,a=n.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({weather:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,forecast:t.daily.slice(1),hourly:t.hourly})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,r=t.weather,o=(t.hourly,i.a.createElement(p.f,{activeModal:this.state.activeModal,onClose:this.modalBack},i.a.createElement(p.d,{id:"chooseCity",onClose:this.modalBack,header:i.a.createElement(p.e,{left:i.a.createElement(p.h,{onClick:this.modalBack}),right:i.a.createElement(p.i,{onClick:function(){null!=document.getElementById("city")&&e.updateGeoData(document.getElementById("city").value)}})},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434")},i.a.createElement(p.b,null,i.a.createElement(p.a,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},i.a.createElement(p.c,{id:"city",placeholder:r.name}))))));return a?i.a.createElement(p.j,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},i.a.createElement(p.g,{id:"main"},i.a.createElement("div",{className:"mainGradient"},i.a.createElement("h1",null,"\u041e\u0448\u0438\u0431\u043a\u0430 :("),i.a.createElement("p",null,a.message)))):n?i.a.createElement(p.j,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel,modal:o},i.a.createElement(p.g,{id:"main"},i.a.createElement("div",{className:"mainGradient"},i.a.createElement("div",{className:"cityWrap"},i.a.createElement("h1",{className:"city",onClick:function(){return e.setActiveModal("chooseCity")}},r.name)),i.a.createElement("div",{className:"currentWrap"},i.a.createElement("div",{className:"today"},i.a.createElement("h1",{className:"todayString"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",this.getTime(r.dt).string),i.a.createElement("h1",{className:"todayDate"},this.toNormalDate(r.dt))),i.a.createElement("h2",{className:"mainTemp"},Math.round(r.main.temp),"\xb0C"),i.a.createElement("h3",{className:"mainFeels"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(r.main.feels_like),"\xb0C"),i.a.createElement("h4",{className:"mainWeather"},"\u041d\u0430 \u0443\u043b\u0438\u0446\u0435 ",r.weather[0].description))))):i.a.createElement(p.j,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},i.a.createElement(p.g,{id:"main"},i.a.createElement("div",{className:"mainGradient"},i.a.createElement("h1",{className:"loadingText"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),i.a.createElement("img",{src:f}))))}}]),a}(i.a.Component);s.a.send("VKWebAppInit"),o.a.render(i.a.createElement(v,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.7f767161.chunk.js.map