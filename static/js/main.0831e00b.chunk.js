(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),i=a(13),s=a.n(i),o=a(16),u=a(17),m=a(19),d=a(18),h=(a(125),a(14)),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,temperature:0,city:"",feels_like:"",dt:0,weather:0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(n){t=n.lat,a=n.long,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,temperature:t.main.temp,city:t.name,feels_like:t.main.feels_like,dt:t.dt,weather:t.weather.id})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.temperature,l=(e.city,e.feels_like),c=e.dt,i=e.weather,s=new Date(1e3*c),o=s.getDate(),u=s.getMonth(),m=s.getHours(),d="\u0443\u0442\u0440\u043e\u043c";return m>=23?d="\u043d\u043e\u0447\u044c\u044e":m>=18?d="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":m>=12&&(d="\u0434\u043d\u0451\u043c"),t?r.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0430: ",t.message):a?r.a.createElement("div",null,r.a.createElement("h2",{className:"dayMonth"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",d," ",r.a.createElement("span",{className:"fadedText"},o," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][u])),r.a.createElement("h3",{className:"temp"},n,"\xb0\u0421"),r.a.createElement("h3",{className:"feelsLike"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",l,"\xb0\u0421"),r.a.createElement("h3",null,i)):r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(h.c,{size:"large",style:{margin:"20px 0"}}))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(h.d,{activePanel:"main"},r.a.createElement(h.a,{id:"main"},r.a.createElement(h.b,null,"\u041f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement(p,null)))}}]),a}(r.a.Component);s.a.send("VKWebAppInit"),c.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[131,1,2]]]);
//# sourceMappingURL=main.0831e00b.chunk.js.map