(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),l=a(14),s=a.n(l),o=a(15),m=a(28),d=a(29),u=a(34),h=a(33),p=(a(117),a(6)),g=a.p+"static/media/loading.71f6a116.gif",f=a.p+"static/media/error.def73663.png",E=a.p+"static/media/clear.bb693d08.png",w=a.p+"static/media/rain.cc74d3c5.png",y=a.p+"static/media/mist.f05a9e0a.png",v=a.p+"static/media/nightClear.fdaa924a.png",b=a.p+"static/media/nightRain.77d1efa6.png",k=a.p+"static/media/nightSnow.963b7cd9.png",N=a.p+"static/media/nightLightRain.1a8870bc.png",S=a.p+"static/media/autumnClouds.b5c3cb2c.png",C=a.p+"static/media/springClouds.4bc0e789.png",T=a.p+"static/media/summerClouds.97cf2434.png",M=a.p+"static/media/winterClouds.81ad28de.png",D=a.p+"static/media/springClear.643be763.png",B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&s.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(o.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&s.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n.setActiveModal=function(e){e=e||null;var t=n.state.modalHistory?Object(o.a)(n.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),n.setState({activeModal:e,modalHistory:t})},n.toNormalDate=function(e){var t=new Date(1e3*e);return t.getDate()+" "+["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][t.getMonth()]},n.getTime=function(e){var t=new Date(1e3*e),a=t.getHours(),n=t.getMinutes(),r="\u0443\u0442\u0440\u043e\u043c";return a<5||a>22?r="\u043d\u043e\u0447\u044c\u044e":a>18?r="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":a>10&&(r="\u0434\u043d\u0451\u043c"),a<10&&(a="0"+a),n<10&&(n="0"+n),{hour:a,minute:n,time:a+":"+n,string:r,day:["\u0412\u0441","\u041f\u043d","\u0412\u0442","C\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"][t.getDay()]}},n.getSeason=function(e){var t=new Date(1e3*e).getMonth();return 12==t||t<=1?"winter":t<=4?"spring":t<=7?"summer":"autumn"},n.updateGeoData=function(e){if(n.modalBack(),null===e||void 0===e){var t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(e){"client_error"==e.error_type?(t=30,a=50):(t=e.lat,a=e.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({weather:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,forecast:e.daily.slice(1),hourly:e.hourly}),n.showWeatherImage()}),(function(e){n.setState({isLoaded:!0,error:e})}))})).catch((function(e){n.setState({isLoaded:!0,error:e})}))}else fetch("https://api.openweathermap.org/geo/1.0/direct?q="+e+"&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat="+e[0].lat+"&lon="+e[0].lon+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({weather:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+e[0].lat+"&lon="+e[0].lon+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,forecast:e.daily.slice(1),hourly:e.hourly}),n.showWeatherImage()}),(function(e){n.setState({isLoaded:!0,error:e})}))}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.getCityValue=function(){return null!=document.getElementById("city")?document.getElementById("city").value:null},n.lookupWeather=function(e){return{Thunderstorm:"\u0448\u0442\u043e\u0440\u043c",Drizzle:"\u0434\u043e\u0436\u0434\u0438\u043a",Rain:"\u0434\u043e\u0436\u0434\u044c",Snow:"\u0441\u043d\u0435\u0433",Mist:"\u0442\u0443\u043c\u0430\u043d",Smoke:"\u0441\u043c\u043e\u0433",Haze:"\u0434\u044b\u043c\u043a\u0430",Dust:"\u043f\u044b\u043b\u044c",Fog:"\u0442\u0443\u043c\u0430\u043d",Sand:"\u043f\u0435\u0441\u043e\u043a",Ash:"\u0437\u0430\u0434\u044b\u043c\u043b\u0435\u043d\u0438\u0435",Squall:"\u0448\u043a\u0432\u0430\u043b",Tornado:"\u0442\u043e\u0440\u043d\u0430\u0434\u043e",Clear:"\u044f\u0441\u043d\u043e",Clouds:"\u043e\u0431\u043b\u0430\u0447\u043d\u043e"}[e]},n.showWeatherImage=function(){n.goForward("weatherImage"),setTimeout((function(){return n.goForward("main")}),3e3)},n.toWindDirection=function(e){return e>=330||e<=30?"\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439":e<60?"\u0441\u0435\u0432\u0435\u0440\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e<120?"\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e<150?"\u044e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e<210?"\u044e\u0436\u043d\u044b\u0439":e<240?"\u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439":e<300?"\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439":"\u0441\u0435\u0432\u0435\u0440\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439"},n.state={error:!1,isLoaded:!1,weather:"",forecast:"",hourly:"",activePanel:"weatherImage",history:["weatherImage"],activeModal:null,modalHistory:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;s.a.send("VKWebAppGetGeodata").then((function(n){"client_error"==n.error_type?(t=30,a=50):(t=n.lat,a=n.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({weather:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,forecast:t.daily.slice(1),hourly:t.hourly}),e.showWeatherImage()}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,i=t.weather,c=t.hourly,l=t.forecast,s=[E,w,y,N,b,k,v,S,D,C,T,M],m=Object(o.a)(l).map((function(t){return r.a.createElement("div",{className:"laterBoxes foreBack faded",onClick:function(){return e.goForward(t.dt)}},r.a.createElement("h2",{className:"fore"},e.toNormalDate(t.dt)),r.a.createElement("h2",{className:"fore"},e.lookupWeather(t.weather[0].main)),r.a.createElement("h2",{className:"fore"},Math.round(t.temp.day),"\xb0C"))})),d=Object(o.a)(l).map((function(t){return function(t){return r.a.createElement(p.j,{id:t.dt},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"city",onClick:function(){return e.goBack()}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("h1",{className:"displayText"},"\u041f\u043e\u0433\u043e\u0434\u0430 ",e.toNormalDate(t.dt)," ",r.a.createElement("span",{className:"faded"},e.getTime(t.dt).day)),r.a.createElement("h2",{className:"cityUnder faded"},"\u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",e.state.weather.name),r.a.createElement("h2",null,"\u041f\u043e\u0433\u043e\u0434\u0430: ",t.weather[0].description),r.a.createElement("h2",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(t.temp.day),"\xb0C"),r.a.createElement("h2",null,"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(t.feels_like.day),"\xb0C"),r.a.createElement("h2",null,"\u0420\u0430\u0441\u0441\u0432\u0435\u0442: ",e.getTime(t.sunrise).time),r.a.createElement("h2",null,"\u0417\u0430\u043a\u0430\u0442: ",e.getTime(t.sunset).time),r.a.createElement("h2",null,"\u0412\u0435\u0442\u0435\u0440: ",e.toWindDirection(t.wind_deg)," ",Math.round(t.wind_speed)," \u043c/c"))))}(t)})),u=r.a.createElement(p.i,{activeModal:this.state.activeModal,onClose:this.modalBack},r.a.createElement(p.g,{id:"chooseCity",onClose:this.modalBack,header:r.a.createElement(p.h,{left:r.a.createElement(p.k,{onClick:this.modalBack}),right:r.a.createElement(p.l,{onClick:function(){e.updateGeoData(e.getCityValue())}})},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434")},r.a.createElement(p.c,null,r.a.createElement(p.b,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},r.a.createElement(p.e,{id:"city",placeholder:i.name}))),r.a.createElement(p.d,null,r.a.createElement(p.f,null,r.a.createElement(p.a,{onClick:function(){e.updateGeoData()}},"\ud83c\udfe0 \u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"),r.a.createElement(p.a,{onClick:function(){e.updateGeoData("\u041c\u043e\u0441\u043a\u0432\u0430")}},"\ud83c\udff0 \u041c\u043e\u0441\u043a\u0432\u0430"),r.a.createElement(p.a,{onClick:function(){e.updateGeoData("\u041f\u0430\u0440\u0438\u0436")}},"\ud83d\uddfa \u041f\u0430\u0440\u0438\u0436"),r.a.createElement(p.a,{onClick:function(){e.updateGeoData("\u041d\u044c\u044e-\u0419\u043e\u0440\u043a")}},"\ud83d\uddfd \u041d\u044c\u044e-\u0419\u043e\u0440\u043a"))))),h=[].concat(s).map((function(e){return r.a.createElement("img",{src:e,className:"fullHeight preload"})}));return a?r.a.createElement(p.m,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.j,{id:"weatherImage"},r.a.createElement("div",{className:"mainGradient fullHeight aligner"},r.a.createElement("img",{src:f,className:"loading"}),r.a.createElement("h1",{className:"errorMessage faded"},"\u0423\u043f\u0441... \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c :(")))):n?r.a.createElement(p.m,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel,modal:u},r.a.createElement(p.j,{id:"main"},r.a.createElement("div",{className:"mainGradient"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"city",onClick:function(){return e.setActiveModal("chooseCity")}},i.name),r.a.createElement("h1",{className:"displayText font-effect-anaglyph",onClick:function(){return e.goForward("now")}},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",this.toNormalDate(i.dt)),r.a.createElement("h2",null,"\u041f\u043e\u0433\u043e\u0434\u0430: ",i.weather[0].description),r.a.createElement("h2",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(i.main.temp),"\xb0C"),r.a.createElement("h2",null,"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(i.main.feels_like),"\xb0C"),r.a.createElement("div",{className:"laterBoxes"},r.a.createElement("div",{className:"laterBox faded"},r.a.createElement("h2",{className:"laterTime"},this.getTime(c[1].dt).time),r.a.createElement("h2",{className:"laterTemp"},Math.round(c[1].temp),"\xb0")),r.a.createElement("div",{className:"laterBox faded"},r.a.createElement("h2",{className:"laterTime"},this.getTime(c[6].dt).time),r.a.createElement("h2",{className:"laterTemp"},Math.round(c[6].temp),"\xb0")),r.a.createElement("div",{className:"laterBox faded"},r.a.createElement("h2",{className:"laterTime"},this.getTime(c[12].dt).time),r.a.createElement("h2",{className:"laterTemp"},Math.round(c[12].temp),"\xb0"))),r.a.createElement("h1",{className:"displayText"},"\u041d\u0430 \u043d\u0435\u0434\u0435\u043b\u0435"),m))),d,r.a.createElement(p.j,{id:"weatherImage"},r.a.createElement("div",{className:"mainGradient fullHeight aligner"},r.a.createElement("img",{src:function(t){if(e.getTime(t.dt).hour>20||e.getTime(t.dt).hour<5)switch(t.weather[0].main){case"Drizzle":case"Rain":return N;case"Thunderstorm":case"Squall":case"Tornado":return b;case"Snow":return k;case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":return y;case"Clear":case"Clouds":return v}switch(t.weather[0].main){case"Thunderstorm":case"Drizzle":case"Rain":case"Snow":case"Squall":case"Tornado":return w;case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":return y;case"Clear":switch(e.getSeason(t.dt)){case"spring":return D;default:return E}case"Clouds":switch(e.getSeason(t.dt)){case"spring":return C;case"summer":return T;case"autumn":return S;case"winter":return M}}}(i),className:"fullHeight varWidth"}))),r.a.createElement(p.j,{id:"now"},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"city",onClick:function(){return e.goBack()}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("h1",{className:"displayText"},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0441\u0435\u0439\u0447\u0430\u0441"),r.a.createElement("h2",{className:"cityUnder faded"},"\u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",this.state.weather.name),r.a.createElement("h2",null,"\u041f\u043e\u0433\u043e\u0434\u0430: ",i.weather[0].description),r.a.createElement("h2",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(i.main.temp),"\xb0C"),r.a.createElement("h2",null,"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(i.main.feels_like),"\xb0C"),r.a.createElement("h2",null,"\u0420\u0430\u0441\u0441\u0432\u0435\u0442: ",this.getTime(i.sys.sunrise).time),r.a.createElement("h2",null,"\u0417\u0430\u043a\u0430\u0442: ",this.getTime(i.sys.sunset).time),r.a.createElement("h2",null,"\u0412\u0435\u0442\u0435\u0440: ",this.toWindDirection(i.wind.deg)," ",Math.round(i.wind.speed)," \u043c/c"))))):r.a.createElement(p.m,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.j,{id:"weatherImage"},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("img",{src:g,className:"loading"}),h)))}}]),a}(r.a.Component);s.a.send("VKWebAppInit"),c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.fa8f3ac3.chunk.js.map