(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),i=a.n(l),c=a(15),s=a.n(c),o=a(21),m=a(26),h=a(27),d=a(31),p=a(30),u=(a(119),a(10)),f=a(126),E=a(125),w=a(127),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&s.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(o.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&s.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.state={error:null,isLoaded:!1,temperature:0,city:"",feels_like:"",dt:0,weather:"",other:"",forecast:"",activePanel:"main",history:["main"]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(n){t=n.lat,a=n.long,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({temperature:t.main.temp,city:t.name,feels_like:t.main.feels_like,dt:t.dt,weather:t.weather[0].description,other:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("api.openweathermap.org/data/2.5/forecast/daily?lat="+t+"&lon="+a+"&cnt=1&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,forecast:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props.platform,a=this.state,n=a.error,l=a.isLoaded,i=a.temperature,c=a.city,s=a.feels_like,o=a.dt,m=a.weather,h=a.other,d=new Date(1e3*o),p=d.getDate(),v=d.getMonth(),g=d.getHours(),y="\u0443\u0442\u0440\u043e\u043c";return g>=23||g<=4?y="\u043d\u043e\u0447\u044c\u044e":g>=18?y="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":g>=12&&(y="\u0434\u043d\u0451\u043c"),n?r.a.createElement(u.h,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.d,{id:"main"},r.a.createElement(u.e,{left:r.a.createElement(f.a,null)},"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("div",null,n.message))):l?r.a.createElement(u.h,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.d,{id:"main"},r.a.createElement(u.e,{left:r.a.createElement(w.a,null)},c),r.a.createElement("div",null,r.a.createElement("h2",{className:"dayMonth"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",y," ",r.a.createElement("span",{className:"fadedText"},p," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][v])),r.a.createElement("h3",{className:"temp"},i,"\xb0\u0421"),r.a.createElement("h3",{className:"feelsLike"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",s,"\xb0\u0421"),r.a.createElement("h3",{className:"weatherName"},m),r.a.createElement(u.b,null,r.a.createElement(u.a,{onClick:function(){return e.goForward("more_weather")}},"\u0415\u0449\u0451 \u043e \u043f\u043e\u0433\u043e\u0434\u0435")),r.a.createElement(u.b,null,r.a.createElement(u.c,{mode:"secondary"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u0437\u0430\u0432\u0442\u0440\u0430"),r.a.createElement(SimpleCell,{multiline:!0},r.a.createElement(InfoRow,{header:"\u041f\u043e\u0433\u043e\u0434\u0430"},forecast.list[0].weather[0].description)),r.a.createElement(SimpleCell,{multiline:!0},r.a.createElement(InfoRow,{header:"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430"},forecast.list[0].temp.day)),r.a.createElement(SimpleCell,{multiline:!0},r.a.createElement(InfoRow,{header:"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c"},forecast.list[0].clouds))))),r.a.createElement(u.d,{id:"more_weather"},r.a.createElement(u.e,{left:r.a.createElement(u.f,{onClick:function(){return e.goBack()},label:"VKCOM"===t?"\u041d\u0430\u0437\u0430\u0434":void 0})},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement("div",null,r.a.createElement("p",{className:"weatherInfo"},"\u0413\u043e\u0440\u043e\u0434: ",c),r.a.createElement("p",{className:"weatherInfo"},"\u041f\u043e\u0433\u043e\u0434\u0430: ",m),r.a.createElement("p",{className:"weatherInfo"},"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",i,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u0420\u0430\u0437\u0431\u0440\u043e\u0441: ",h.main.temp_min,"...",h.main.temp_max,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",s,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",h.main.pressure," \u0433\u041f\u0430"),r.a.createElement("p",{className:"weatherInfo"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",h.main.humidity,"%"),r.a.createElement("p",{className:"weatherInfo"},"\u0412\u0435\u0442\u0435\u0440: ",h.wind.deg,"\xb0 ",h.wind.speed," \u043c/\u0441"),r.a.createElement("p",{className:"weatherInfo"},"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c: ",h.clouds.all,"%")))):r.a.createElement(u.h,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.d,{id:"main"},r.a.createElement(u.e,{left:r.a.createElement(E.a,null)},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(u.g,{size:"large",style:{margin:"20px 0"}}))))}}]),a}(r.a.Component);s.a.send("VKWebAppInit"),i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.cf5f01ac.chunk.js.map