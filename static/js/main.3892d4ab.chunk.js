(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),c=a.n(l),i=a(15),s=a.n(i),m=a(21),o=a(26),h=a(27),p=a(31),d=a(30),u=(a(123),a(10)),E=a(130),f=a(129),w=a(131),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(m.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&s.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(m.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&s.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.state={error:null,isLoaded:!1,temperature:0,city:"",feels_like:"",dt:0,weather:"",other:"",activePanel:"main",history:["main"]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(n){t=n.lat,a=n.long,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,temperature:t.main.temp,city:t.name,feels_like:t.main.feels_like,dt:t.dt,weather:t.weather[0].description,other:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props.platform,a=this.state,n=a.error,l=a.isLoaded,c=a.temperature,i=a.city,s=a.feels_like,m=a.dt,o=a.weather,h=a.other,p=new Date(1e3*m),d=p.getDate(),v=p.getMonth(),g=p.getHours(),k="\u0443\u0442\u0440\u043e\u043c";return g>=23||g<=4?k="\u043d\u043e\u0447\u044c\u044e":g>=18?k="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":g>=12&&(k="\u0434\u043d\u0451\u043c"),n?r.a.createElement(u.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.c,{id:"main"},r.a.createElement(u.d,{left:r.a.createElement(E.a,null)},"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("div",null,n.message))):l?r.a.createElement(u.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.c,{id:"main"},r.a.createElement(u.d,{left:r.a.createElement(w.a,null)},i),r.a.createElement("div",null,r.a.createElement("h2",{className:"dayMonth"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",k," ",r.a.createElement("span",{className:"fadedText"},d," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][v])),r.a.createElement("h3",{className:"temp"},c,"\xb0\u0421"),r.a.createElement("h3",{className:"feelsLike"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",s,"\xb0\u0421"),r.a.createElement("h3",{className:"weatherName"},o),r.a.createElement(u.b,null,r.a.createElement(u.a,{onClick:function(){return e.goForward("more_weather")}},"\u0415\u0449\u0451 \u043e \u043f\u043e\u0433\u043e\u0434\u0435")))),r.a.createElement(u.c,{id:"more_weather"},r.a.createElement(u.d,{left:r.a.createElement(u.e,{onClick:function(){return e.goBack()},label:"VKCOM"===t?"\u041d\u0430\u0437\u0430\u0434":void 0})},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement("div",null,r.a.createElement("p",{className:"weatherInfo"},"\u0413\u043e\u0440\u043e\u0434: ",i),r.a.createElement("p",{className:"weatherInfo"},"\u041f\u043e\u0433\u043e\u0434\u0430: ",o),r.a.createElement("p",{className:"weatherInfo"},"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",c,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u0420\u0430\u0437\u0431\u0440\u043e\u0441: ",h.main.temp_min,"...",h.main.temp_max,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",s,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",h.main.pressure," \u0433\u041f\u0430"),r.a.createElement("p",{className:"weatherInfo"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",h.main.humidity,"%"),r.a.createElement("p",{className:"weatherInfo"},"\u0412\u0435\u0442\u0435\u0440: ",h.wind.deg,"\xb0 ",h.wind.speed," \u043c/\u0441"),r.a.createElement("p",{className:"weatherInfo"},"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c: ",h.clouds.all,"%")))):r.a.createElement(u.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.c,{id:"main"},r.a.createElement(u.d,{left:r.a.createElement(f.a,null)},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(u.f,{size:"large",style:{margin:"20px 0"}}))))}}]),a}(r.a.Component);s.a.send("VKWebAppInit"),c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.3892d4ab.chunk.js.map