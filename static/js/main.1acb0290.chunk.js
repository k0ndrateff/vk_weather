(this.webpackJsonpvk_weather=this.webpackJsonpvk_weather||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),c=a(15),i=a.n(c),o=a(22),m=a(18),h=a(19),p=a(21),d=a(20),u=(a(121),a(6)),f=a(127),E=a(25),w=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"forecast"},r.a.createElement("p",null,this.props.weather.dt),r.a.createElement("p",null,this.props.weather.temp.day))}}]),a}(r.a.Component),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=Object(o.a)(n.state.history);e.pop();var t=e[e.length-1];"main"===t&&i.a.send("VKWebAppEnableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(o.a)(n.state.history);t.push(e),"main"===n.state.activePanel&&i.a.send("VKWebAppDisableSwipeBack"),n.setState({history:t,activePanel:e})},n.state={error:null,isLoaded:!1,temperature:0,city:"",feels_like:"",dt:0,weather:"",other:"",forecast:"",activePanel:"main",history:["main"]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=0,a=0;i.a.send("VKWebAppGetGeodata").then((function(n){t=n.lat,a=n.long,fetch("https://api.openweathermap.org/data/2.5/weather?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({temperature:t.main.temp,city:t.name,feels_like:t.main.feels_like,dt:t.dt,weather:t.weather[0].description,other:t})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+t+"&lon="+a+"&units=metric&lang=ru&appid=e937bb61987a79d09b7604a3375a9941").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,forecast:t.daily})}),(function(t){e.setState({isLoaded:!0,error:t})}))})).catch((function(e){console.log(e.message)}))}},{key:"render",value:function(){var e=this,t=this.props.platform,a=this.state,n=a.error,l=a.isLoaded,s=a.temperature,c=a.city,i=a.feels_like,m=a.dt,h=a.weather,p=a.other,d=a.forecast,v=new Date(1e3*m),y=v.getDate(),b=v.getMonth(),g=v.getHours(),k="\u0443\u0442\u0440\u043e\u043c",N=Math.round(i);g>=23||g<=4?k="\u043d\u043e\u0447\u044c\u044e":g>=18?k="\u0432\u0435\u0447\u0435\u0440\u043e\u043c":g>=12&&(k="\u0434\u043d\u0451\u043c");var j=Object(o.a)(d).map((function(e){return r.a.createElement(w,{weather:e})}));return n?r.a.createElement(u.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.d,{id:"main"},r.a.createElement(u.e,{left:r.a.createElement(f.a,null)},"\u041e\u0448\u0438\u0431\u043a\u0430"),r.a.createElement("div",null,n.message))):l?r.a.createElement(u.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.d,{id:"main"},r.a.createElement(u.e,null,c),r.a.createElement("div",null,r.a.createElement("div",{className:"main-weather"},r.a.createElement("h2",{className:"dayMonth"},"\u0421\u0435\u0433\u043e\u0434\u043d\u044f ",k," ",r.a.createElement("span",{className:"fadedText"},y," ",["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"][b])),r.a.createElement("div",{className:"inline-temp"},r.a.createElement("h3",{className:"temp"},s,"\xb0\u0421"),r.a.createElement(E.a,{autoplay:!0,loop:!0,src:"https://assets10.lottiefiles.com/temp/lf20_WtPCZs.json",style:{height:"100px",width:"100px"}})),r.a.createElement("h3",{className:"feelsLike"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",N,"\xb0\u0421"),r.a.createElement("h3",{className:"weatherName"},"\u041d\u0430 \u0443\u043b\u0438\u0446\u0435 ",h)),r.a.createElement(u.b,null,r.a.createElement(u.a,{onClick:function(){return e.goForward("more_weather")}},"\u0415\u0449\u0451 \u043e \u043f\u043e\u0433\u043e\u0434\u0435")),r.a.createElement(u.b,null,r.a.createElement(u.c,{mode:"secondary"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043d\u0430 \u0437\u0430\u0432\u0442\u0440\u0430"),j))),r.a.createElement(u.d,{id:"more_weather"},r.a.createElement(u.e,{left:r.a.createElement(u.f,{onClick:function(){return e.goBack()},label:"VKCOM"===t?"\u041d\u0430\u0437\u0430\u0434":void 0})},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043f\u043e\u0433\u043e\u0434\u0430"),r.a.createElement("div",null,r.a.createElement("p",{className:"weatherInfo"},"\u0413\u043e\u0440\u043e\u0434: ",c),r.a.createElement("p",{className:"weatherInfo"},"\u041f\u043e\u0433\u043e\u0434\u0430: ",h),r.a.createElement("p",{className:"weatherInfo"},"\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",s,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u041e\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",i,"\xb0\u0421"),r.a.createElement("p",{className:"weatherInfo"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",p.main.pressure," \u0433\u041f\u0430"),r.a.createElement("p",{className:"weatherInfo"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",p.main.humidity,"%"),r.a.createElement("p",{className:"weatherInfo"},"\u0412\u0435\u0442\u0435\u0440: ",p.wind.deg,"\xb0 ",p.wind.speed," \u043c/\u0441"),r.a.createElement("p",{className:"weatherInfo"},"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c: ",p.clouds.all,"%")))):r.a.createElement(u.g,{onSwipeBack:this.goBack,history:this.state.history,activePanel:this.state.activePanel},r.a.createElement(u.d,{id:"main"},r.a.createElement(u.e,null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(E.a,{autoplay:!0,loop:!0,src:"https://assets4.lottiefiles.com/packages/lf20_Cemmpu.json",style:{height:"300px",width:"300px"}}))))}}]),a}(r.a.Component);i.a.send("VKWebAppInit"),s.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.1acb0290.chunk.js.map