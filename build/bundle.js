(()=>{"use strict";var e={978:(e,n,t)=>{const r=require("express"),a=require("react");var i=t.n(a);const l=require("react-dom/server"),o=require("react-router"),c=require("react-redux"),u=require("@reduxjs/toolkit"),d=require("styled-components");var s=t.n(d),p="metric",f="℃",m=[{name:"Moscow",url:"/city/weather/moscow"},{name:"Saint Peterburg",url:"/city/weather/saint petersburg"},{name:"Naples",url:"/city/weather/naples"},{name:"Vienna",url:"/city/weather/vienna"}],v={RU:"🇷🇺",IT:"🇮🇹",AT:"🇦🇹"},x=function(e){return"https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("d9aeccbe6071e6c656cb96372543b45e","&units=").concat(p)};function y(e,n,t,r,a,i,l){try{var o=e[i](l),c=o.value}catch(e){return void t(e)}o.done?n(c):Promise.resolve(c).then(r,a)}var w,h,b,g=(0,u.createAsyncThunk)("city/fetchCity",function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(x(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function l(e){y(i,r,a,l,o,"next",e)}function o(e){y(i,r,a,l,o,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}()),E=(0,u.createSlice)({name:"city",initialState:{},reducers:{cityLoaded:function(e,n){return n.payload}},extraReducers:(w={},h=g.fulfilled,b=function(e,n){return n.payload},h in w?Object.defineProperty(w,h,{value:b,enumerable:!0,configurable:!0,writable:!0}):w[h]=b,w)}),j=(E.actions.cityLoaded,E.reducer);const O=require("react-router-dom"),P=require("dayjs");var S,A,z,q,_,R,T,k=t.n(P);function L(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var I,D,H,M,U,N,W,Y=function(){var e=(0,O.useParams)().id,n=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.city})),r=t.city,i=t.list;if(a.useEffect((function(){(!r||e&&l.toLowerCase()!==e)&&n(g(e))}),[e]),!r)return null;var l=r.name,o=r.country;if(r.population,!l||l.toLowerCase()!==e)return null;var u,d=function(e){if(Array.isArray(e))return e}(u=i)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(u)||function(e,n){if(e){if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,n):void 0}}(u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),s=(d[0],d.slice(1),i.slice(0,5));return a.createElement(J,null,a.createElement("div",null,a.createElement("div",null,a.createElement(V,null,l," ",v[o])),a.createElement(K,null,s.map((function(e){var n;return a.createElement(B,{key:e.dt},a.createElement($,null,null==e||null===(n=e.main)||void 0===n?void 0:n.temp,f,a.createElement("img",{width:"64px",src:"".concat("http://localhost:3000","/assets/icons/").concat(e.weather[0].icon,"@2x.png")})),a.createElement("p",null,"Wind ",e.wind.speed),a.createElement("h2",null,k().unix(e.dt).format("HH:mm")))})))))},K=s().div(S||(S=L(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),B=s().div(A||(A=L(["\n  box-shadow: 2px 3px 5px 0px rgb(0 0 0 / 12%);\n  padding: 0 25px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 20px 0 0;\n  width: 200px;\n  height: 200px;\n"]))),J=s().div(z||(z=L(["\n  padding: 30px;\n"]))),V=(s().div(q||(q=L(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n  max-width: 300px;\n"]))),s().div(_||(_=L(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n"]))),s().h1(R||(R=L(["\n  display: flex;\n  align-items: center;\n"])))),$=s().h1(T||(T=L(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n"])));function F(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var G,Q,X,Z=function(){var e=(0,O.useParams)().id,n=(0,c.useDispatch)(),t=(0,c.useSelector)((function(e){return e.city})),r=t.name,i=t.weather,l=t.main,o=t.wind,u=t.sys;return console.log(t),a.useEffect((function(){t&&!e&&r&&r.toLowerCase()===e||n(g(e))}),[e]),t&&r&&i&&l&&o&&u?a.createElement(ne,null,a.createElement("div",null,a.createElement("div",null,a.createElement(te,null,r," ",v[u.country])),a.createElement(ee,null,a.createElement(re,null,null==l?void 0:l.temp,f,a.createElement("img",{width:"64px",src:"".concat("http://localhost:3000","/assets/icons/").concat(i[0].icon,"@2x.png")})),a.createElement("p",null,"Wind ",o.speed)))):null},ee=s().div(I||(I=F(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n"]))),ne=(s().div(D||(D=F(["\n  box-shadow: 2px 3px 5px 0px rgb(0 0 0 / 12%);\n  padding: 0 25px;\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  margin: 20px 20px 0 0;\n  width: 200px;\n  height: 200px;\n"]))),s().div(H||(H=F(["\n  padding: 30px;\n"])))),te=(s().div(M||(M=F(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n  max-width: 300px;\n"]))),s().div(U||(U=F(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n"]))),s().h1(N||(N=F(["\n  display: flex;\n  align-items: center;\n  font-size: 50px;\n"])))),re=s().h1(W||(W=F(["\n  display: flex;\n  align-items: center;\n  margin: 0;\n"])));function ae(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ie,le,oe,ce,ue,de,se=function(){return a.createElement(pe,null,a.createElement("div",null,a.createElement("div",null,a.createElement("h2",null,"MainPage"))))},pe=s().div(G||(G=ae(["\n  padding: 30px;\n"]))),fe=(s().div(Q||(Q=ae(["\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px;\n  max-width: 300px;\n"]))),s().div(X||(X=ae(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n"]))),[{path:"/",render:a.createElement(se,null),exact:!0},{path:"/city/forecast/:id",render:a.createElement(Y,null),exact:!0},{path:"/city/weather/:id",render:a.createElement(Z,null),exact:!0}]),me=function(){return a.createElement(O.Switch,null,fe.map((function(e){var n=e.path,t=e.exact,r=e.render;return a.createElement(O.Route,{key:n,exact:t,path:n,render:function(){return r}})})),a.createElement(O.Redirect,{to:"/"}))},ve=function(){return a.createElement(xe,null,a.createElement(O.Link,{to:"/"},"Home"),m.map((function(e){var n=e.name,t=e.url;return a.createElement(O.Link,{to:t,key:t},n)})))},xe=s().div(ie||(le=["\n  display: flex;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  flex-direction: column;\n  font-size: 30px;\n  padding-top: 45px;\n  a {\n    padding: 10px 30px;\n    text-decoration: none;\n    color: black;\n    font-weight: 300;\n    letter-spacing: 3px;\n  }\n"],oe||(oe=le.slice(0)),ie=Object.freeze(Object.defineProperties(le,{raw:{value:Object.freeze(oe)}}))));function ye(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var we=s().div(ce||(ce=ye(['\n  *,\n  body {\n    font-family: "Helvetica Neue";\n  }\n  --palette-snow-1000: #000000;\n  --palette-snow-500: #c0c0c0;\n  --palette-snow-100: #f5f5f5;\n  --palette-snow-0: #ffffff;\n  --palette-lavender-500: #9381f1;\n\n  /* should be rewritten to formulas */\n  --woly-line-height: 24px;\n  --woly-border-width: 1.5px;\n  --woly-rounding: 4px;\n  --woly-font-size: 15px;\n\n  --woly-const-m: 6px;\n  --woly-main-level: 3;\n\n  --woly-neutral: var(--palette-snow-500);\n  --woly-focus: #9381f1;\n  --woly-background: #ffffff;\n\n  [data-variant="default"] {\n    --woly-shape-default: #b0a3f4;\n    --woly-shape-disabled: #e5e5e5;\n    --woly-shape-hover: #c9c0f8;\n    --woly-shape-active: #b0a3f4;\n\n    --woly-shape-text-default: var(--palette-snow-0);\n    --woly-shape-text-disabled: var(--palette-snow-0);\n    --woly-shape-text-hover: var(--palette-snow-0);\n    --woly-shape-text-active: var(--palette-snow-0);\n\n    --woly-canvas-default: transparent;\n    --woly-canvas-disabled: var(--palette-snow-100);\n    --woly-canvas-hover: var(--palette-snow-500);\n    --woly-canvas-active: var(--palette-snow-500);\n\n    --woly-canvas-text-default: var(--palette-snow-1000);\n    --woly-canvas-text-disabled: var(--palette-snow-500);\n    --woly-canvas-text-hover: var(--palette-snow-500);\n    --woly-canvas-text-active: var(--palette-snow-500);\n  }\n']))),he=s().div(ue||(ue=ye(["\n  --woly-font-size: 15px;\n"]))),be=(s()(he)(de||(de=ye(["\n  --woly-component-level: 3;\n"]))),function(){return a.createElement(we,null,a.createElement("div",{style:{display:"flex"}},a.createElement(ve,null),a.createElement(me,null)))}),ge=t(786);t(334).config();var Ee=function(e){return(0,u.configureStore)({reducer:{city:j},preloadedState:{city:e}})},je=function(e,n){var t=new d.ServerStyleSheet,r=(0,l.renderToString)(t.collectStyles(i().createElement(c.Provider,{store:n},i().createElement(o.StaticRouter,{location:e.path},i().createElement(be,null))))),a=t.getStyleTags(),u=n.getState();return'<!DOCTYPE html>\n              <head>\n                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>\n                  '.concat(a,'\n                  </head>\n              <body>\n                  <div id="root">').concat(r,"</div>\n                  <script> window.__PRELOADED_STATE__ = ").concat(JSON.stringify(u).replace(/</g,"\\u003c"),'<\/script>\n                  <script src="/bundle.js"><\/script>\n              </body>\n      </html>')},Oe=function(e,n){return ge(x(e.params.id)).then((function(e){return e.json()})).then((function(e){return Ee(e)})).then((function(n){return je(e,n)})).then((function(e){return n.send(e)}))},Pe=r(),Se={WEATHER_API_KEY:"d9aeccbe6071e6c656cb96372543b45e",REACT_APP_API_KEY:"d9aeccbe6071e6c656cb96372543b45e",PUBLIC_URL:"http://localhost:3000"}.PORT||3e3;Pe.use(r.static("public")),Pe.get("/",(function(e,n){return function(e,n){var t=Ee(),r=je(e,t);n.send(r)}(e,n)})),Pe.get("/city/weather/:id",(function(e,n){return Oe(e,n)})),Pe.get("/city/forecast/:id",(function(e,n){return Oe(e,n)})),Pe.listen(Se,(function(){console.log("Listening on port: ".concat(Se))}))},949:e=>{e.exports=require("@babel/polyfill")},334:e=>{e.exports=require("dotenv")},786:e=>{e.exports=require("node-fetch")}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t(949),t(978)})();