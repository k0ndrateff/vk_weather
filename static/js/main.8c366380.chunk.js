(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),l=a.n(i),c=a(15),s=a.n(c),o=a(21),m=a(26),h=a(27),d=a(31),u=a(30),p=(a(123),a(10)),f=a(130),E=a(129),v=a(131),g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&s.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(o.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&s.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.state={error:null,isLoaded:!1,temperature:0,city:"",feels_like:"",dt:0,weather:"",activePanel:"main",history:["main"]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(n){t=n.lat,a=n.long,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,temperature:t.main.temp,city:t.name,feels_like:t.main.feels_like,dt:t.dt,weather:t.weather[0].description})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props.platform,a=this.state,n=a.error,i=a.isLoaded,l=a.temperature,c=a.city,s=a.feels_like,o=a.dt,m=a.weather,h=new Date(1e3*o),d=h.getDate(),u=h.getMonth(),g=h.getHours(),k="\u0443\u0442\u0440\u043e\u043c";return g>=23||g<=4?k="\u043d\u043e\u0447\u044c\u044e":g>=18?k="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":g>=12&&(k="\u0434\u043d\u0451\u043c"),n?r.a.createElement(p.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.c,{id:"main"},r.a.createElement(p.d,{left:r.a.createElement(f.a,null)},"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("div",null,n.message))):i?r.a.createElement(p.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.c,{id:"main"},r.a.createElement(p.d,{left:r.a.createElement(v.a,null)},c),r.a.createElement("div",null,r.a.createElement("h2",{className:"dayMonth"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",k," ",r.a.createElement("span",{className:"fadedText"},d," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][u])),r.a.createElement("h3",{className:"temp"},l,"\xb0\u0421"),r.a.createElement("h3",{className:"feelsLike"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",s,"\xb0\u0421"),r.a.createElement("h3",{className:"weatherName"},m),r.a.createElement(p.b,null,r.a.createElement(p.a,{onClick:function(){return e.goForward("more_weather")}},"\u0415\u0449\u0451 \u043e \u043f\u043e\u0433\u043e\u0434\u0435")))),r.a.createElement(p.c,{id:"more_weather"},r.a.createElement(p.d,{left:r.a.createElement(p.e,{onClick:function(){return e.goBack()},label:t===VKCOM?"\u041d\u0430\u0437\u0430\u0434":void 0})},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430"))):r.a.createElement(p.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.c,{id:"main"},r.a.createElement(p.d,{left:r.a.createElement(E.a,null)},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(p.f,{size:"large",style:{margin:"20px 0"}}))))}}]),a}(r.a.Component);s.a.send("VKWebAppInit"),l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.8c366380.chunk.js.map