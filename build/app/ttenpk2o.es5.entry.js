/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,u)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};App.loadBundle("ttenpk2o",["exports"],function(e){var t=window.App.h,n=function(){function e(){this.state=[]}return e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,fetch("/api/lessons/index.json")];case 1:return[4,t.sent().json()];case 2:return(e=t.sent())&&(this.state=e),[2]}})})},e.prototype.render=function(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"../"})),t("ion-title",null,"Categories"))),t("ion-content",{padding:!0},this.state.map(function(e){return t("ion-item",{href:document.URL+e.url.slice(1)},t("ion-icon",{name:"book",slot:"start"}),t("ion-label",null,e.name),t("ion-icon",{name:"arrow-forward",slot:"end"}))}))]},Object.defineProperty(e,"is",{get:function(){return"mt-categories"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.MtCategories=n,Object.defineProperty(e,"__esModule",{value:!0})});