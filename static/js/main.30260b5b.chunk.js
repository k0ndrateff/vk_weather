(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{128:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(17),c=t.n(i),s=t(14),l=t.n(s),o=t(15),m=t(28),d=t(29),h=t(34),u=t(33),p=(t(117),t(6)),g=t.p+"static/media/loading.71f6a116.gif",f=t.p+"static/media/error.def73663.png",E=t.p+"static/media/clear.bb693d08.png",w=t.p+"static/media/rain.cc74d3c5.png",y=t.p+"static/media/mist.f05a9e0a.png",v=t.p+"static/media/nightClear.fdaa924a.png",k=t.p+"static/media/nightRain.77d1efa6.png",b=t.p+"static/media/nightSnow.963b7cd9.png",N=t.p+"static/media/nightLightRain.1a8870bc.png",S=t.p+"static/media/autumnClouds.b5c3cb2c.png",C=t.p+"static/media/springClouds.4bc0e789.png",D=t.p+"static/media/summerClouds.97cf2434.png",T=t.p+"static/media/winterClouds.81ad28de.png",M=t.p+"static/media/springClear.643be763.png",B=function(e){Object(h.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var a=e[e.length-1];"main"===a&&l.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:a})},n.goForward=function(e){var a=Object(o.a)(n.state.history);a.push(e),"main"===n.state.activePanel&&l.a.send("VKWebAppDisableSwipeBack"),n.setState({history:a,activePanel:e})},n.modalBack=function(){n.setActiveModal(n.state.modalHistory[n.state.modalHistory.length-2])},n.setActiveModal=function(e){e=e||null;var a=n.state.modalHistory?Object(o.a)(n.state.modalHistory):[];null===e?a=[]:-1!==a.indexOf(e)?a=a.splice(0,a.indexOf(e)+1):a.push(e),n.setState({activeModal:e,modalHistory:a})},n.toNormalDate=function(e){var a=new Date(1e3*e);return a.getDate()+" "+["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][a.getMonth()]},n.getTime=function(e){var a=new Date(1e3*e),t=a.getHours(),n=a.getMinutes(),r="\u0443\u0442\u0440\u043e\u043c";return t<5||t>22?r="\u043d\u043e\u0447\u044c\u044e":t>18?r="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":t>10&&(r="\u0434\u043d\u0451\u043c"),t<10&&(t="0"+t),n<10&&(n="0"+n),{hour:t,minute:n,time:t+":"+n,string:r,day:["\u0412\u0441","\u041f\u043d","\u0412\u0442","C\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"][a.getDay()]}},n.getSeason=function(e){var a=new Date(1e3*e).getMonth();return 12==a||a<=1?"winter":a<=4?"spring":a<=7?"summer":"autumn"},n.updateGeoData=function(e){if(n.modalBack(),null===e||void 0===e){var a=0,t=0;l.a.send("VKWebAppGetGeodata").then((function(e){"client_error"==e.error_type?(a=30,t=50):(a=e.lat,t=e.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+t+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({weather:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+a+"&lon="+t+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,forecast:e.daily.slice(1),hourly:e.hourly}),n.showWeatherImage()}),(function(e){n.setState({isLoaded:!0,error:e})}))})).catch((function(e){n.setState({isLoaded:!0,error:e})}))}else fetch("https://api.openweathermap.org/geo/1.0/direct?q="+e+"&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat="+e[0].lat+"&lon="+e[0].lon+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({weather:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+e[0].lat+"&lon="+e[0].lon+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,forecast:e.daily.slice(1),hourly:e.hourly}),n.showWeatherImage()}),(function(e){n.setState({isLoaded:!0,error:e})}))}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.getCityValue=function(){return null!=document.getElementById("city")?document.getElementById("city").value:null},n.lookupWeather=function(e){return{Thunderstorm:"\u0448\u0442\u043e\u0440\u043c",Drizzle:"\u0434\u043e\u0436\u0434\u0438\u043a",Rain:"\u0434\u043e\u0436\u0434\u044c",Snow:"\u0441\u043d\u0435\u0433",Mist:"\u0442\u0443\u043c\u0430\u043d",Smoke:"\u0441\u043c\u043e\u0433",Haze:"\u0434\u044b\u043c\u043a\u0430",Dust:"\u043f\u044b\u043b\u044c",Fog:"\u0442\u0443\u043c\u0430\u043d",Sand:"\u043f\u0435\u0441\u043e\u043a",Ash:"\u0437\u0430\u0434\u044b\u043c\u043b\u0435\u043d\u0438\u0435",Squall:"\u0448\u043a\u0432\u0430\u043b",Tornado:"\u0442\u043e\u0440\u043d\u0430\u0434\u043e",Clear:"\u044f\u0441\u043d\u043e",Clouds:"\u043e\u0431\u043b\u0430\u0447\u043d\u043e"}[e]},n.showWeatherImage=function(){n.goForward("weatherImage"),setTimeout((function(){return n.goForward("main")}),3e3)},n.toWindDirection=function(e){return e>=330||e<=30?"\u0441\u0435\u0432\u0435\u0440\u043d\u044b\u0439":e<60?"\u0441\u0435\u0432\u0435\u0440\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e<120?"\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e<150?"\u044e\u0433\u043e-\u0432\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439":e<210?"\u044e\u0436\u043d\u044b\u0439":e<240?"\u044e\u0433\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439":e<300?"\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439":"\u0441\u0435\u0432\u0435\u0440\u043e-\u0437\u0430\u043f\u0430\u0434\u043d\u044b\u0439"},n.state={error:!1,isLoaded:!1,weather:"",forecast:"",hourly:"",activePanel:"weatherImage",history:["weatherImage"],activeModal:null,modalHistory:[],help:"share"},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=0,t=0;l.a.send("VKWebAppGetGeodata").then((function(n){"client_error"==n.error_type?(a=30,t=50):(a=n.lat,t=n.long),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+a+"&lon="+t+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(a){e.setState({weather:a})}),(function(a){e.setState({isLoaded:!0,error:a})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+a+"&lon="+t+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,forecast:a.daily.slice(1),hourly:a.hourly}),e.showWeatherImage()}),(function(a){e.setState({isLoaded:!0,error:a})}))})).catch((function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.error,n=a.isLoaded,i=a.weather,c=a.hourly,s=a.forecast,m=[E,w,y,N,k,b,v,S,M,C,D,T],d=Object(o.a)(s).map((function(a){return r.a.createElement("div",{className:"laterBoxes foreBack faded",onClick:function(){return e.goForward(a.dt)}},r.a.createElement("h2",{className:"fore"},e.toNormalDate(a.dt)),r.a.createElement("h2",{className:"fore"},e.lookupWeather(a.weather[0].main)),r.a.createElement("h2",{className:"fore"},Math.round(a.temp.day),"\xb0C"))})),h=Object(o.a)(s).map((function(a){return function(a){return r.a.createElement(p.j,{id:a.dt},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"city",onClick:function(){return e.goBack()}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("h1",{className:"displayText"},"\u041f\u043e\u0433\u043e\u0434\u0430 ",e.toNormalDate(a.dt)," ",r.a.createElement("span",{className:"faded"},e.getTime(a.dt).day)),r.a.createElement("h2",{className:"cityUnder faded"},"\u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",e.state.weather.name),r.a.createElement("h2",null,"\u041f\u043e\u0433\u043e\u0434\u0430: ",a.weather[0].description),r.a.createElement("h2",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(a.temp.day),"\xb0C"),r.a.createElement("h2",null,"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(a.feels_like.day),"\xb0C"),r.a.createElement("h2",null,"\u0420\u0430\u0441\u0441\u0432\u0435\u0442: ",e.getTime(a.sunrise).time),r.a.createElement("h2",null,"\u0417\u0430\u043a\u0430\u0442: ",e.getTime(a.sunset).time),r.a.createElement("h2",null,"\u0412\u0435\u0442\u0435\u0440: ",e.toWindDirection(a.wind_deg)," ",Math.round(a.wind_speed)," \u043c/c"),r.a.createElement("div",{className:"shareDiv",onClick:function(){return l.a.send("VKWebAppShare",{link:"https://vk.com/app7752385"})}},r.a.createElement("h2",{className:"shareLink linky"},"\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0437\u044c\u044f\u043c...")))))}(a)})),u=r.a.createElement(p.i,{activeModal:this.state.activeModal,onClose:this.modalBack},r.a.createElement(p.g,{id:"chooseCity",onClose:this.modalBack,header:r.a.createElement(p.h,{left:r.a.createElement(p.k,{onClick:this.modalBack}),right:r.a.createElement(p.l,{onClick:function(){e.updateGeoData(e.getCityValue())}})},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434")},r.a.createElement(p.c,null,r.a.createElement(p.b,{top:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},r.a.createElement(p.e,{id:"city",placeholder:i.name}))),r.a.createElement(p.d,null,r.a.createElement(p.f,null,r.a.createElement(p.a,{onClick:function(){e.updateGeoData()}},"\ud83c\udfe0 \u0413\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044f"),r.a.createElement(p.a,{onClick:function(){e.updateGeoData("\u041c\u043e\u0441\u043a\u0432\u0430")}},"\ud83c\udff0 \u041c\u043e\u0441\u043a\u0432\u0430"),r.a.createElement(p.a,{onClick:function(){e.updateGeoData("\u041f\u0430\u0440\u0438\u0436")}},"\ud83d\uddfa \u041f\u0430\u0440\u0438\u0436"),r.a.createElement(p.a,{onClick:function(){e.updateGeoData("\u041d\u044c\u044e-\u0419\u043e\u0440\u043a")}},"\ud83d\uddfd \u041d\u044c\u044e-\u0419\u043e\u0440\u043a"))))),B=[].concat(m).map((function(e){return r.a.createElement("img",{src:e,className:"fullHeight preload"})}));return t?r.a.createElement(p.m,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.j,{id:"weatherImage"},r.a.createElement("div",{className:"mainGradient fullHeight aligner"},r.a.createElement("img",{src:f,className:"loading"}),r.a.createElement("h1",{className:"errorMessage faded"},"\u0423\u043f\u0441... \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c :(")))):n?r.a.createElement(p.m,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel,modal:u},r.a.createElement(p.j,{id:"main"},r.a.createElement("div",{className:"mainGradient"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"city",onClick:function(){return e.setActiveModal("chooseCity")}},i.name),r.a.createElement("h1",{className:"displayText linky",onClick:function(){return e.goForward("now")}},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",this.toNormalDate(i.dt)),r.a.createElement("h2",null,"\u041f\u043e\u0433\u043e\u0434\u0430: ",i.weather[0].description),r.a.createElement("h2",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(i.main.temp),"\xb0C"),r.a.createElement("h2",null,"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(i.main.feels_like),"\xb0C"),r.a.createElement("div",{className:"laterBoxes"},r.a.createElement("div",{className:"laterBox faded"},r.a.createElement("h2",{className:"laterTime"},this.getTime(c[1].dt).time),r.a.createElement("h2",{className:"laterTemp"},Math.round(c[1].temp),"\xb0")),r.a.createElement("div",{className:"laterBox faded"},r.a.createElement("h2",{className:"laterTime"},this.getTime(c[6].dt).time),r.a.createElement("h2",{className:"laterTemp"},Math.round(c[6].temp),"\xb0")),r.a.createElement("div",{className:"laterBox faded"},r.a.createElement("h2",{className:"laterTime"},this.getTime(c[12].dt).time),r.a.createElement("h2",{className:"laterTemp"},Math.round(c[12].temp),"\xb0"))),r.a.createElement("h1",{className:"displayText"},"\u041d\u0430 \u043d\u0435\u0434\u0435\u043b\u0435"),d,r.a.createElement("h3",{className:"copyright"},r.a.createElement("a",{className:"copyright",href:"https://vk.com/k0ndrateff"},"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430: \u0415\u0433\u043e\u0440 @k0ndrateff")," \u2022",r.a.createElement("a",{className:"copyright",href:"https://instagram.com/_alinapics_"},"\u0414\u0438\u0437\u0430\u0439\u043d: \u0410\u043b\u0438\u043d\u0430 @_alinapics_"))))),h,r.a.createElement(p.j,{id:"weatherImage"},r.a.createElement("div",{className:"mainGradient fullHeight aligner"},r.a.createElement("img",{src:function(a){if(e.getTime(a.dt).hour>20||e.getTime(a.dt).hour<5)switch(a.weather[0].main){case"Drizzle":case"Rain":return N;case"Thunderstorm":case"Squall":case"Tornado":return k;case"Snow":return b;case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":return y;case"Clear":case"Clouds":return v}switch(a.weather[0].main){case"Thunderstorm":case"Drizzle":case"Rain":case"Snow":case"Squall":case"Tornado":return w;case"Mist":case"Smoke":case"Haze":case"Dust":case"Fog":case"Sand":case"Ash":return y;case"Clear":switch(e.getSeason(a.dt)){case"spring":return M;default:return E}case"Clouds":switch(e.getSeason(a.dt)){case"spring":return C;case"summer":return D;case"autumn":return S;case"winter":return T}}}(i),className:"fullHeight varWidth"}))),r.a.createElement(p.j,{id:"now"},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",{className:"city",onClick:function(){return e.goBack()}},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("h1",{className:"displayText"},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0441\u0435\u0439\u0447\u0430\u0441"),r.a.createElement("h2",{className:"cityUnder faded"},"\u0432 \u0433\u043e\u0440\u043e\u0434\u0435 ",this.state.weather.name),r.a.createElement("h2",null,"\u041f\u043e\u0433\u043e\u0434\u0430: ",i.weather[0].description),r.a.createElement("h2",null,"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",Math.round(i.main.temp),"\xb0C"),r.a.createElement("h2",null,"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",Math.round(i.main.feels_like),"\xb0C"),r.a.createElement("h2",null,"\u0420\u0430\u0441\u0441\u0432\u0435\u0442: ",this.getTime(i.sys.sunrise).time),r.a.createElement("h2",null,"\u0417\u0430\u043a\u0430\u0442: ",this.getTime(i.sys.sunset).time),r.a.createElement("h2",null,"\u0412\u0435\u0442\u0435\u0440: ",this.toWindDirection(i.wind.deg)," ",Math.round(i.wind.speed)," \u043c/c"),r.a.createElement("div",{className:"shareDiv",onClick:function(){return l.a.send("VKWebAppShare",{link:"https://vk.com/app7752385"})}},r.a.createElement("h2",{className:"shareLink linky"},"\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0437\u044c\u044f\u043c...")))))):r.a.createElement(p.m,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(p.j,{id:"weatherImage"},r.a.createElement("div",{className:"mainGradient fullHeight"},r.a.createElement("img",{src:g,className:"loading"}),B)))}}]),t}(r.a.Component);l.a.send("VKWebAppInit"),c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.30260b5b.chunk.js.map