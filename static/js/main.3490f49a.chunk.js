(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=a(13),u=a.n(c),i=(a(118),a(14)),s=a(24),d=a(25),m=a(27),p=a(26),h=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,temperature:0},lat=0,long=0,n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&exclude=hourly,daily&units=metric&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,temperature:t.current.temp})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){u.a.send("VKWebAppGetGeodata").then((function(e){lat=e.lat,long=e.long})).catch((function(e){console.log(e.message)}));var e=this.state,t=e.error,a=e.isLoaded,n=e.temperature;return t?r.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0430: ",t.message):a?r.a.createElement("h1",null,n):r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")}}]),a}(r.a.Component),f=function(){return r.a.createElement(i.f,{activePanel:"main"},r.a.createElement(i.d,{id:"main"},r.a.createElement(i.e,null,"\u041f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement(i.b,{header:r.a.createElement(i.c,{mode:"secondary"},"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430:")},r.a.createElement(i.a,null,r.a.createElement(h,null)," \u0433\u0440\u0430\u0434\u0443\u0441\u043e\u0432"))))};u.a.send("VKWebAppInit"),o.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[123,1,2]]]);
//# sourceMappingURL=main.3490f49a.chunk.js.map