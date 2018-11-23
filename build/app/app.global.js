/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){!function(i){var n=window,o=n.Ionic;if(!o||!o.config||"Object"===o.config.constructor.name)return n.Ionic=n.Ionic||{},n.Ionic.config=Object.assign({},n.Ionic.config,{}),n.Ionic.config;console.error("ionic config was already initialized")}();
})(resourcesUrl);


(function(resourcesUrl){const t={ipad:function(t){return c(t,/iPad/i)},iphone:function(t){return c(t,/iPhone/i)},ios:function(t){return c(t,/iPad|iPhone|iPod/i)},android:function(t){return c(t,/android|sink/i)},phablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>390&&o<520&&i>620&&i<800},tablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>460&&o<820&&i>780&&i<1400},cordova:i,capacitor:r,electron:function(t){return c(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:o,desktop:function(t){return!o(t)},hybrid:function(t){return i(t)||r(t)}};function n(t,n){return function(t){return e(t)}(t).includes(n)}function e(n){n.Ionic=n.Ionic||{};let e=n.Ionic.platforms;if(null==e){e=n.Ionic.platforms=function(n){return Object.keys(t).filter(e=>t[e](n))}(n);const o=n.document.documentElement.classList;e.forEach(t=>o.add(`plt-${t}`))}return e}function o(t){return function(t,n){return t.matchMedia("(any-pointer:coarse)").matches}(t)}function i(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function r(t){const n=t.Capacitor;return!(!n||!n.isNative)}function c(t,n){return n.test(t.navigator.userAgent)}const s=window,u=s.Ionic=s.Ionic||{};Object.defineProperty(u,"queue",{get:()=>Context.queue}),e(s),Context.isPlatform=n;const a=Object.assign({},function(){try{const t=window.sessionStorage.getItem("ionic-persist-config");return null!==t?JSON.parse(t):{}}catch(t){return{}}}(),{persistConfig:!1},u.config,function(){const t={};return window.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,n])=>[decodeURIComponent(t),decodeURIComponent(n)]).filter(([t])=>(function(n,e){return"ionic:"===t.substr(0,"ionic:".length)})()).map(([t,n])=>[t.slice("ionic:".length),n]).forEach(([n,e])=>{t[n]=e}),t}()),d=u.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,n){const e=this.m.get(t);return void 0!==e?e:n}getBoolean(t,n=!1){const e=this.m.get(t);return void 0===e?n:"string"==typeof e?"true"===e:!!e}getNumber(t,n){const e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==n?n:NaN:e}set(t,n){this.m.set(t,n)}}(a);d.getBoolean("persistConfig")&&function(t){try{window.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}catch(t){return}}(a);const f=document.documentElement,m=d.get("mode",f.getAttribute("mode")||(n(s,"ios")?"ios":"md"));u.mode=Context.mode=m,d.set("mode",m),f.setAttribute("mode",m),f.classList.add(m),d.getBoolean("_testing")&&d.set("animated",!1);
})(resourcesUrl);
})("App");