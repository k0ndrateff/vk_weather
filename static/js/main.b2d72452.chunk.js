(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),l=a.n(i),s=a(12),c=a.n(s),o=a(13),m=a(28),d=a(29),h=a(34),u=a(33),p=(a(122),a(6)),E=a.p+"static/media/loading.8a1887f1.svg",f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&c.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(o.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&c.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n.setActiveModal=function(e){e=e||null;var t=n.state.modalHistory?Object(o.a)(n.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),n.setState({activeModal:e,modalHistory:t})},n.toNormalDate=function(e){var t=new Date(1e3*e);return t.getDate()+" "+["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()]},n.getTime=function(e){var t=new Date(1e3*e),a=t.getHours(),n=t.getMinutes(),r="\u0443\u0442\u0440\u043e\u043c";return a<5||a>22?r="\u043d\u043e\u0447\u044c\u044e":a>18?r="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":a>10&&(r="\u0434\u043d\u0451\u043c"),a<10&&(a="0"+a),n<10&&(n="0"+n),{hour:a,minute:n,time:a+":"+n,string:r}},n.updateGeoData=function(e){n.modalBack(),fetch("https://api.openweathermap.org/geo/1.0/direct?q="+e+"&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat="+e[0].lat+"&lon="+e[0].lon+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({weather:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+e[0].lat+"&lon="+e[0].lon+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,forecast:e.daily.slice(1),hourly:e.hourly})}),(function(e){n.setState({isLoaded:!0,error:e})}))}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,weather:"",forecast:"",hourly:"",activePanel:"main",history:["main"],activeModal:null,modalHistory:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;c.a.send("VKWebAppGetGeodata").then((function(n){"client_error"==n.error_type?(t=30,a=50):(t=n.lat,a=n.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({weather:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,forecast:t.daily.slice(1),hourly:t.hourly})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,i=t.weather,l=t.hourly,s=t.forecast,c=Object(o.a)(s).map((function(t){return r.a.createElement("div",{className:"boxes"},r.a.createElement("p",{className:"fore"},e.toNormalDate(t.dt)),r.a.createElement("p",{className:"fore"},t.weather[0].main),r.a.createElement("p",{className:"fore"},Math.round(t.temp.day),"\xb0C"))})),m=r.a.createElement(p.f,{activeModal:this.state.activeModal,onClose:this.modalBack},r.a.createElement(p.d,{id:"chooseCity",onClose:this.modalBack,header:r.a.createElement(p.e,{left:r.a.createElement(p.h,{onClick:this.modalBack}),right:r.a.createElement(p.i,{onClick:function(){null!=document.getElementById("city")&&e.updateGeoData(document.getElementById("city").value)}})},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434")},r.a.createElement(p.b,null,r.a.createElement(p.a,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},r.a.createElement(p.c,{id:"city",placeholder:i.name})))));return a?r.a.createElement(p.j,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.g,{id:"main"},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("h1",null,"\u041e\u0448\u0438\u0431\u043a\u0430 :("),r.a.createElement("p",null,a.message)))):n?r.a.createElement(p.j,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel,modal:m},r.a.createElement(p.g,{id:"main"},r.a.createElement("div",{className:"mainGradient"},r.a.createElement("div",{className:"cityWrap"},r.a.createElement("h1",{className:"city",onClick:function(){return e.setActiveModal("chooseCity")}},i.name)),r.a.createElement("div",{className:"currentWrap"},r.a.createElement("div",{className:"today"},r.a.createElement("h1",{className:"todayString"},"\u0421\u0435\u0439\u0447\u0430\u0441"),r.a.createElement("h1",{className:"todayDate"},this.toNormalDate(i.dt))),r.a.createElement("h2",{className:"mainTemp"},Math.round(i.main.temp),"\xb0C"),r.a.createElement("h3",{className:"mainFeels"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(i.main.feels_like),"\xb0C"),r.a.createElement("h4",{className:"mainWeather"},"\u041d\u0430 \u0443\u043b\u0438\u0446\u0435 ",i.weather[0].description)),r.a.createElement("div",{className:"currentWrap wrapTop"},r.a.createElement("h1",{className:"todayString"},"\u041f\u043e\u0437\u0436\u0435"),r.a.createElement("div",{className:"boxes"},r.a.createElement("div",{className:"laterBox"},r.a.createElement("h3",{className:"laterTemp"},Math.round(l[1].temp),"\xb0C"),r.a.createElement("h3",{className:"laterTime"},this.getTime(l[1].dt).hour,":",this.getTime(l[1].dt).minute)),r.a.createElement("div",{className:"laterBox"},r.a.createElement("h3",{className:"laterTemp"},Math.round(l[6].temp),"\xb0C"),r.a.createElement("h3",{className:"laterTime"},this.getTime(l[6].dt).hour,":",this.getTime(l[6].dt).minute)),r.a.createElement("div",{className:"laterBox"},r.a.createElement("h3",{className:"laterTemp"},Math.round(l[12].temp),"\xb0C"),r.a.createElement("h3",{className:"laterTime"},this.getTime(l[12].dt).hour,":",this.getTime(l[12].dt).minute)),r.a.createElement("div",{className:"laterBox"},r.a.createElement("h3",{className:"laterTemp"},Math.round(l[18].temp),"\xb0C"),r.a.createElement("h3",{className:"laterTime"},this.getTime(l[18].dt).hour,":",this.getTime(l[18].dt).minute)))),r.a.createElement("div",{className:"currentWrap wrapTop"},r.a.createElement("h1",{className:"todayString"},"\u041d\u0430 \u043d\u0435\u0434\u0435\u043b\u0435"),c)))):r.a.createElement(p.j,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.g,{id:"main"},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("h1",{className:"loadingText"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("img",{src:E}))))}}]),a}(r.a.Component);c.a.send("VKWebAppInit"),addEventListener("VKWebAppUpdateConfig",(function(e){console.log(e)})),l.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.b2d72452.chunk.js.map