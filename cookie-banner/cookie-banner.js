!function(e){function n(n){for(var t,r,i=n[0],a=n[1],l=0,u=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(c&&c(n);u.length;)u.shift()()}var t={},o={1:0};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=function(e){return r.p+""+e+"-000ff141fe6ec0790f93-cookie-banner.js"}(e);var c=new Error;a=function(n){l.onerror=l.onload=null,clearTimeout(u);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,t[1](c)}o[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpCookieBanner=window.webpackJsonpCookieBanner||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var c=a;r(r.s=12)}([function(e,n,t){"use strict";t.d(n,"q",(function(){return o})),t.d(n,"s",(function(){return r})),t.d(n,"r",(function(){return i})),t.d(n,"p",(function(){return a})),t.d(n,"h",(function(){return l})),t.d(n,"k",(function(){return c})),t.d(n,"l",(function(){return u})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return f})),t.d(n,"f",(function(){return d})),t.d(n,"g",(function(){return v})),t.d(n,"j",(function(){return p})),t.d(n,"m",(function(){return m})),t.d(n,"o",(function(){return h})),t.d(n,"n",(function(){return b})),t.d(n,"c",(function(){return g})),t.d(n,"d",(function(){return y})),t.d(n,"i",(function(){return k})),t.d(n,"e",(function(){return w}));var o="cookie-banner-brand",r="cookie-banner-language",i="cookie-banner-country",a="bw-cookie-banner",l="bw-cookie-banner-container",c="bw-cookie-settings-form",u="bw-cookie-setting-options",s="accept_cookies_btn",f="accept_all_cookies_btn",d="change_cookie_settings_btn-link",v="bw-cookie-banner__back",p="bw-cookie-form__radio-option",m="af",h="en-us",b="fr",g="bw_cookie_banner",y=90,k=["information/legal/cookie-policy","information/legal/edito-cookies"],w={FUNCTIONAL_ANALYTICAL:{id:"functional_analytical",titleLabelKey:"cookie_banner.change_settings.functional_analytical.title",cookiePreferences:{1:!0,2:!1,3:!1},descriptionGroups:["functional_analytical"],checked:!0,categoryNumber:12,radioGroupName:u},MARKETING_PERFORMANCE:{id:"marketing_performance",titleLabelKey:"cookie_banner.change_settings.marketing_performance.title",cookiePreferences:{1:!0,2:!0,3:!1},descriptionGroups:["functional_analytical","marketing_performance"],checked:!1,categoryNumber:13,radioGroupName:u},MARKETING_PERFORMANCE_ADVERTISEMENT:{id:"marketing_performance_advertisement",titleLabelKey:"cookie_banner.change_settings.marketing_performance_advertisement.title",cookiePreferences:{1:!0,2:!0,3:!0},descriptionGroups:["functional_analytical","marketing_performance","marketing_performance_advertisement"],checked:!1,categoryNumber:14,radioGroupName:u}}},function(e,n,t){"use strict";n.a=window},function(e,n,t){"use strict";n.a=function(e){var n=this.constructor;return this.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){return n.reject(t)}))}))}},function(e,n,t){"use strict";n.a=function(e){return new this((function(n,t){if(!e||void 0===e.length)return t(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var o=Array.prototype.slice.call(e);if(0===o.length)return n([]);var r=o.length;function i(e,t){if(t&&("object"==typeof t||"function"==typeof t)){var a=t.then;if("function"==typeof a)return void a.call(t,(function(n){i(e,n)}),(function(t){o[e]={status:"rejected",reason:t},0==--r&&n(o)}))}o[e]={status:"fulfilled",value:t},0==--r&&n(o)}for(var a=0;a<o.length;a++)i(a,o[a])}))}},function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var o=t(1);function r(e){var n=document.createElement(e.tag);return e.id&&(n.id=e.id),e.classes&&e.classes.forEach((function(e){n.classList.add(e)})),e.attributes&&e.attributes.forEach((function(e){n.setAttribute(e.name,e.value)})),e.innerHTML&&(n.innerHTML=e.innerHTML),n}function i(e){var n,t,r=document.getElementById(e);r&&(null===(n=r.parentNode)||void 0===n||n.removeChild(r)),document.body.style.overflow="auto",((null===(t=o.a.BWCookieBanner)||void 0===t?void 0:t.lastActiveElement)||document.body).focus()}},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return s}));var o=t(0),r=t(8),i=t(10);function a(){return{tag:"div",classes:["bw-cookie-banner__divider-line"]}}function l(e,n,t){var r=["bw-cookie-form__radio-label"];return e.checked&&r.push("bw-cookie-form__radio-checked"),{tag:"label",classes:r,attributes:[{name:"for",value:"bw-cookie-form-radio-"+e.id}],children:[{tag:"span",classes:["bw-cookie-form__radio-container"],children:[{tag:"span",classes:["bw-cookie-form__radio-outer-circle"]},{tag:"span",classes:["bw-cookie-form__radio-inner-circle"]},{tag:"input",id:"bw-cookie-form-radio-"+e.id,attributes:[{name:"type",value:"radio"},{name:"name",value:e.radioGroupName},{name:"value",value:JSON.stringify(e.cookiePreferences)},{name:"checked",value:""+e.checked}]},{tag:"span",classes:["bw-cookie-form__radio-ripple"]}]},{tag:"span",classes:[o.j],children:c(e,n,t)}]}}function c(e,n,t){var a=[];return e.descriptionGroups.forEach((function(e){(function(e,n){var t=Object(r.b)(e,n+".description.item");return[{tag:"p",innerHTML:e["cookie_banner.change_settings."+n+".description"]},{tag:"ul",children:t.map((function(e){return{tag:"li",innerHTML:e}}))}]})(n,e).forEach((function(e){return a.push(e)}))})),[{tag:"div",classes:[o.j+"--title"],children:[{tag:"p",classes:[o.j+"--title-text"],innerHTML:n[e.titleLabelKey]},{tag:"button",classes:[o.j+"--toggle-arrow"],innerHTML:Object(i.b)(t).outerHTML,attributes:[{name:"type",value:"button"},{name:"id",value:o.k+".toggle."+e.id},{name:"onclick",value:"BWCookieBanner.toggleExpandableBlock(event);"}]}]},{tag:"div",classes:[o.j+"--content",o.j+"--hidden"],attributes:[{name:"id",value:o.k+".content."+e.id}],children:a}]}function u(){var e=document.querySelectorAll("#"+o.k+" input");Array.prototype.slice.call(e).forEach((function(e){var n,t,o,r,i,a;null===(o=null===(t=null===(n=null==e?void 0:e.parentNode)||void 0===n?void 0:n.parentNode)||void 0===t?void 0:t.classList)||void 0===o||o.remove("bw-cookie-form__radio-checked"),(null==e?void 0:e.checked)&&(null===(a=null===(i=null===(r=null==e?void 0:e.parentNode)||void 0===r?void 0:r.parentNode)||void 0===i?void 0:i.classList)||void 0===a||a.add("bw-cookie-form__radio-checked"))}))}function s(e){e.stopPropagation();var n=e.currentTarget.id,t=document.getElementsByClassName(o.j+"--content");Array.prototype.slice.call(t).forEach((function(e){var t=o.k+".content."+n.split(".").pop()===e.id?"toggle":"add";e.classList[t](o.j+"--hidden")}));var r=document.getElementsByClassName(o.j+"--toggle-arrow");Array.prototype.slice.call(r).forEach((function(e){var t=n===e.id?"toggle":"remove";e.classList[t](o.j+"--toggle-arrow-open")}))}},function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t(4);function r(e){var n=Object(o.b)(e);return e.children&&e.children.forEach((function(e){var t=r(e);n.appendChild(t)})),n}},function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return c}));function o(e,n,t,o){return new(t||(t=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,l)}c((o=o.apply(e,n||[])).next())}))}function r(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}Object.create;Object.create;var i=t(0);function a(e,n){return o(this,void 0,void 0,(function(){return r(this,(function(o){switch(o.label){case 0:"kl"!==e&&"af"!==e&&(e=i.m),o.label=1;case 1:return o.trys.push([1,3,,5]),[4,t(9)("./"+e+"-"+n+"-labels.json")];case 2:return[2,o.sent()];case 3:return o.sent(),[4,t(9)("./"+e+"-"+i.o+"-labels.json")];case 4:return[2,o.sent()];case 5:return[2]}}))}))}function l(e,n){return Object.keys(e).filter((function(e){return e.indexOf(n)>-1})).sort().map((function(n){return e[n]}))}function c(e,n,t){return t=t.split("-")[0],e.replace(/{{country}}/g,n).replace(/{{language}}/g,t).replace(/{{countryUppercase}}/g,n.toLocaleUpperCase())}},function(e,n,t){var o={"./af-bg-labels.json":[19,2],"./af-da-labels.json":[20,3],"./af-de-labels.json":[21,4],"./af-en-gb-labels.json":[22,5],"./af-en-us-labels.json":[23,6],"./af-es-labels.json":[24,7],"./af-fi-labels.json":[25,8],"./af-fr-labels.json":[26,9],"./af-hu-labels.json":[27,10],"./af-id-labels.json":[28,11],"./af-it-labels.json":[29,12],"./af-ja-labels.json":[30,13],"./af-ko-labels.json":[31,14],"./af-nl-labels.json":[32,15],"./af-no-labels.json":[33,16],"./af-pl-labels.json":[34,17],"./af-pt-br-labels.json":[35,18],"./af-pt-labels.json":[36,19],"./af-ro-labels.json":[37,20],"./af-ru-labels.json":[38,21],"./af-sl-labels.json":[39,22],"./af-sv-labels.json":[40,23],"./af-th-labels.json":[41,24],"./af-tr-labels.json":[42,25],"./af-uk-labels.json":[43,26],"./af-zh-cn-labels.json":[44,27],"./af-zh-hk-labels.json":[45,28],"./af-zh-tw-labels.json":[46,29],"./kl-bg-labels.json":[47,30],"./kl-da-labels.json":[48,31],"./kl-de-labels.json":[49,32],"./kl-en-gb-labels.json":[50,33],"./kl-en-us-labels.json":[51,34],"./kl-es-labels.json":[52,35],"./kl-fi-labels.json":[53,36],"./kl-fr-labels.json":[54,37],"./kl-hu-labels.json":[55,38],"./kl-id-labels.json":[56,39],"./kl-it-labels.json":[57,40],"./kl-ja-labels.json":[58,41],"./kl-ko-labels.json":[59,42],"./kl-nl-labels.json":[60,43],"./kl-no-labels.json":[61,44],"./kl-pl-labels.json":[62,45],"./kl-pt-br-labels.json":[63,46],"./kl-pt-labels.json":[64,47],"./kl-ro-labels.json":[65,48],"./kl-ru-labels.json":[66,49],"./kl-sl-labels.json":[67,50],"./kl-sv-labels.json":[68,51],"./kl-th-labels.json":[69,52],"./kl-tr-labels.json":[70,53],"./kl-uk-labels.json":[71,54],"./kl-zh-cn-labels.json":[72,55],"./kl-zh-hk-labels.json":[73,56],"./kl-zh-tw-labels.json":[74,57]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return t.e(n[1]).then((function(){return t.t(r,3)}))}r.keys=function(){return Object.keys(o)},r.id=9,e.exports=r},function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return i}));var o=t(7);function r(e){var n="kl"===e?{tag:"svg",attributes:[{name:"height",value:"100%"},{name:"width",value:"100%"},{name:"viewBox",value:"0 0 15 14"},{name:"xmlns",value:"http://www.w3.org/2000/svg"},{name:"preserveAspectRatio",value:"xMidYMid meet"},{name:"focusable",value:"false"}],children:[{tag:"path",attributes:[{name:"d",value:"M11.411 7.99l-4.366 4.614L8.371 14 15 7 8.371 0 7.045 1.396l4.366 4.614H0v1.98h11.411z"},{name:"fill-rule",value:"evenodd"}]}]}:{tag:"svg",attributes:[{name:"height",value:"100%"},{name:"width",value:"100%"},{name:"viewBox",value:"0 0 16 10"},{name:"xmlns",value:"http://www.w3.org/2000/svg"},{name:"preserveAspectRatio",value:"xMidYMid meet"},{name:"focusable",value:"false"}],children:[{tag:"path",attributes:[{name:"d",value:"m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"},{name:"fill-rule",value:"evenodd"}]}]};return Object(o.a)(n)}function i(e){var n="kl"===e?{tag:"svg",attributes:[{name:"height",value:"100%"},{name:"width",value:"100%"},{name:"viewBox",value:"0 0 9 15"},{name:"xmlns",value:"http://www.w3.org/2000/svg"},{name:"preserveAspectRatio",value:"xMidYMid meet"},{name:"focusable",value:"false"}],children:[{tag:"path",attributes:[{name:"d",value:"m6 7.5-6-6 1.5-1.5 7.5 7.5-7.5 7.5-1.5-1.5z"},{name:"fill-rule",value:"evenodd"}]}]}:{tag:"svg",attributes:[{name:"height",value:"100%"},{name:"width",value:"100%"},{name:"viewBox",value:"0 0 16 10"},{name:"xmlns",value:"http://www.w3.org/2000/svg"},{name:"preserveAspectRatio",value:"xMidYMid meet"},{name:"focusable",value:"false"}],children:[{tag:"path",attributes:[{name:"d",value:"m.942 7.526a1.513 1.513 0 0 0 0 2.05c.534.565 1.4.565 1.933 0l5.167-5.476 5.166 5.476c.535.565 1.4.565 1.933 0 .267-.284.4-.655.4-1.025a1.49 1.49 0 0 0 -.4-1.025l-7.099-7.526z"},{name:"fill-rule",value:"evenodd"}]}]};return Object(o.a)(n)}},function(e,n,t){"use strict";(function(e){var o=t(2),r=t(3),i=setTimeout;function a(e){return Boolean(e&&void 0!==e.length)}function l(){}function c(e){if(!(this instanceof c))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function u(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,c._immediateFn((function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(e){return void f(n.promise,e)}s(n.promise,o)}else(1===e._state?s:f)(n.promise,e._value)}))):e._deferreds.push(n)}function s(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof c)return e._state=3,e._value=n,void d(e);if("function"==typeof t)return void p((o=t,r=n,function(){o.apply(r,arguments)}),e)}e._state=1,e._value=n,d(e)}catch(n){f(e,n)}var o,r}function f(e,n){e._state=2,e._value=n,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&c._immediateFn((function(){e._handled||c._unhandledRejectionFn(e._value)}));for(var n=0,t=e._deferreds.length;n<t;n++)u(e,e._deferreds[n]);e._deferreds=null}function v(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function p(e,n){var t=!1;try{e((function(e){t||(t=!0,s(n,e))}),(function(e){t||(t=!0,f(n,e))}))}catch(e){if(t)return;t=!0,f(n,e)}}c.prototype.catch=function(e){return this.then(null,e)},c.prototype.then=function(e,n){var t=new this.constructor(l);return u(this,new v(e,n,t)),t},c.prototype.finally=o.a,c.all=function(e){return new c((function(n,t){if(!a(e))return t(new TypeError("Promise.all accepts an array"));var o=Array.prototype.slice.call(e);if(0===o.length)return n([]);var r=o.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var l=a.then;if("function"==typeof l)return void l.call(a,(function(n){i(e,n)}),t)}o[e]=a,0==--r&&n(o)}catch(e){t(e)}}for(var l=0;l<o.length;l++)i(l,o[l])}))},c.allSettled=r.a,c.resolve=function(e){return e&&"object"==typeof e&&e.constructor===c?e:new c((function(n){n(e)}))},c.reject=function(e){return new c((function(n,t){t(e)}))},c.race=function(e){return new c((function(n,t){if(!a(e))return t(new TypeError("Promise.race accepts an array"));for(var o=0,r=e.length;o<r;o++)c.resolve(e[o]).then(n,t)}))},c._immediateFn="function"==typeof e&&function(n){e(n)}||function(e){i(e,0)},c._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},n.a=c}).call(this,t(14).setImmediate)},function(e,n,t){t(18),e.exports=t(17)},function(e,n,t){"use strict";(function(e){var n=t(11),o=t(2),r=t(3),i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("unable to locate global object")}();"function"!=typeof i.Promise?i.Promise=n.a:i.Promise.prototype.finally?i.Promise.allSettled||(i.Promise.allSettled=r.a):i.Promise.prototype.finally=o.a}).call(this,t(5))},function(e,n,t){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,n){this._id=e,this._clearFn=n}n.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},n.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),n))},t(15),n.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,n.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,t(5))},function(e,n,t){(function(e,n){!function(e,t){"use strict";if(!e.setImmediate){var o,r,i,a,l,c=1,u={},s=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?o=function(e){n.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},o=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,o=function(e){var n=f.createElement("script");n.onreadystatechange=function(){p(e),n.onreadystatechange=null,r.removeChild(n),n=null},r.appendChild(n)}):o=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",l=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(a)&&p(+n.data.slice(a.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),o=function(n){e.postMessage(a+n,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var r={callback:e,args:n};return u[c]=r,o(c),c++},d.clearImmediate=v}function v(e){delete u[e]}function p(e){if(s)setTimeout(p,0,e);else{var n=u[e];if(n){s=!0;try{!function(e){var n=e.callback,t=e.args;switch(t.length){case 0:n();break;case 1:n(t[0]);break;case 2:n(t[0],t[1]);break;case 3:n(t[0],t[1],t[2]);break;default:n.apply(void 0,t)}}(n)}finally{v(e),s=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,t(5),t(16))},function(e,n){var t,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var c,u=[],s=!1,f=-1;function d(){s&&c&&(s=!1,c.length?u=c.concat(u):f=-1,u.length&&v())}function v(){if(!s){var e=l(d);s=!0;for(var n=u.length;n;){for(c=u,u=[];++f<n;)c&&c[f].run();f=-1,n=u.length}c=null,s=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(n){try{return o.call(null,e)}catch(n){return o.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function m(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];u.push(new p(e,n)),1!==u.length||s||l(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,n,t){"use strict";t.r(n);t(13);var o=t(0);function r(e,n,t){var o="";if(t){var r=new Date;r.setTime(r.getTime()+24*t*60*60*1e3),o="; expires="+r.toUTCString()}document.cookie=e+"="+(null!=n?n:"")+o+"; path=/"}var i=t(4),a=t(1);function l(e,n){var t,o;"function"==typeof(null===(o=null===(t=a.a._st)||void 0===t?void 0:t.cookiepermission)||void 0===o?void 0:o.setCookiePreferences)&&(a.a._st.cookiepermission.setCookiePreferences(e),c(n),function(){var e,n;"function"==typeof(null===(n=null===(e=a.a._st)||void 0===e?void 0:e.core)||void 0===n?void 0:n.executeTags)&&a.a._st.core.executeTags()}())}function c(e){var n,t;"function"==typeof(null===(t=null===(n=a.a._st)||void 0===n?void 0:n.counter)||void 0===t?void 0:t.call)&&a.a._st.counter.call(e)}function u(){var e,n,t,r=null===(n=null===(e=a.a._st)||void 0===e?void 0:e.cookiepermission)||void 0===n?void 0:n.getCookiePreferences();if(r)t=r;else{var i=function(e){for(var n=e+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var r=t[o];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}(o.c);t=i?JSON.parse(i):{}}return Object.keys(t).length>0}function s(){d(o.e.MARKETING_PERFORMANCE_ADVERTISEMENT.cookiePreferences,o.e.MARKETING_PERFORMANCE_ADVERTISEMENT.categoryNumber)}function f(){d(o.e.FUNCTIONAL_ANALYTICAL.cookiePreferences,o.e.FUNCTIONAL_ANALYTICAL.categoryNumber)}function d(e,n){var t;l(e,n),t=e,r(o.c,JSON.stringify(t),o.d),Object(i.a)(o.p)}function v(){var e,n=document.getElementById(o.k).elements[o.l].value,t=JSON.parse(n),r=Object.keys(o.e).find((function(e){return JSON.stringify(o.e[e].cookiePreferences)===n}));d(t,null===(e=o.e[r||""])||void 0===e?void 0:e.categoryNumber)}function p(){var e=h(o.q),n=h(o.s),t=h(o.r);(e||n||t)&&(m(e,n,t),b())}function m(e,n,t){void 0===e&&(e=o.m),void 0===n&&(n=o.o),void 0===t&&(t=o.n),a.a.BWCookieBanner.brand=e.toLocaleLowerCase(),a.a.BWCookieBanner.language=n.toLocaleLowerCase(),a.a.BWCookieBanner.country=t.toLocaleLowerCase()}function h(e){var n,t=null===(n=document.getElementsByName(e))||void 0===n?void 0:n[0];if(t)return t.getAttribute("content")||void 0}function b(){u()||o.i.some((function(e){return location.href.search(e)>0}))||t.e(0).then(t.bind(null,80)).then((function(e){e.createBanner(),c(11)})).catch((function(e){return console.error(e)}))}function g(){t.e(0).then(t.bind(null,80)).then((function(e){e.createBanner(),c(11)})).catch((function(e){return console.error(e)}))}function y(){var e,n,t=document.getElementById(o.h);t&&(t.classList.toggle("bw-cookie-banner__view--change-settings"),"block"===window.getComputedStyle(document.querySelector(".bw-cookie-banner__main")).display?null===(e=t.querySelector("#"+o.b))||void 0===e||e.focus():null===(n=t.querySelector("#"+o.a))||void 0===n||n.focus())}var k,w=t(6);(k=window).BWCookieBanner={acceptAllCookies:s,declineCookies:f,initialize:p,openAutomatically:b,openManually:g,saveChangeSettings:v,selectRadioButtonOption:w.c,setup:m,toggleExpandableBlock:w.d,toggleSettings:y},k.BWCookieBanner.initialize()},function(e,n,t){"use strict";t.r(n);var o,r=/\/cookie-banner\.js$/g;function i(e){var n;return(null===(n=null===document||void 0===document?void 0:document.currentScript)||void 0===n?void 0:n.src)?document.currentScript.src:function(e){var n;void 0===e&&(e=document.getElementsByTagName("script"));for(var t="https://www.static-af.com/assets/cookie-banner/cookie-banner.js",o=0;o<e.length;o++)if(null===(n=e[o].src)||void 0===n?void 0:n.match(r)){t=e[o].src;break}return t}(e)}t.p=i(o).replace(r,"/")}]);