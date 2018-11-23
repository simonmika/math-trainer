/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))(function(r,i){function a(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n.throw(e))}catch(e){i(e)}}function l(e){e.done?r(e.value):new o(function(t){t(e.value)}).then(a,s)}l((n=n.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var o,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};App.loadBundle("zupo2dv8",["exports","./chunk-b760673a.js","./chunk-af80afde.js"],function(e,t,o){var n=window.App.h;function r(e,t,o){var n=new e,r=new e,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),o){case"top":r.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":var a=Math.floor(t.clientHeight/2-i.clientHeight/2);i.style.top=a+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(n.addElement(t).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(r))}function i(e,t,o){var n=new e,r=new e,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),o){case"top":r.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))}function a(e,t,o){var n=new e,r=new e,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),o){case"top":r.fromTo("translateY","-100%","0%");break;case"middle":var a=Math.floor(t.clientHeight/2-i.clientHeight/2);i.style.top=a+"px",r.fromTo("opacity",.01,1);break;default:r.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(r))}function s(e,t,o){var n=new e,r=new e,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),o){case"top":r.fromTo("translateY","0px","-100%");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(r))}var l=function(){function e(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},e.prototype.present=function(){return __awaiter(this,void 0,void 0,function(){var e=this;return __generator(this,function(o){switch(o.label){case 0:return[4,t.present(this,"toastEnter",r,a,this.position)];case 1:return o.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss(void 0,"timeout")},this.duration)),[2]}})})},e.prototype.dismiss=function(e,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),t.dismiss(this,e,o,"toastLeave",i,s,this.position)},e.prototype.onDidDismiss=function(){return t.eventMethod(this.el,"ionToastDidDismiss")},e.prototype.onWillDismiss=function(){return t.eventMethod(this.el,"ionToastWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},o.createColorClasses(this.color),o.getClassMap(this.cssClass),{"toast-translucent":this.translucent})}},e.prototype.render=function(){var e,t=this,o=((e={"toast-wrapper":!0})["toast-"+this.position]=!0,e);return n("div",{class:o},n("div",{class:"toast-container"},void 0!==this.message&&n("div",{class:"toast-message"},this.message),this.showCloseButton&&n("ion-button",{fill:"clear","ion-activatable":!0,class:"toast-button",onClick:function(){return t.dismiss(void 0,"cancel")}},this.closeButtonText||"Close")))},Object.defineProperty(e,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--button-color:inherit;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}:host(.ion-color){--color:var(--ion-color-contrast);--background:var(--ion-color-base);--button-color:inherit}.toast-wrapper{background:var(--background)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{color:var(--button-color);font-size:15px}.toast-message{-ms-flex:1;flex:1}:host{--background:var(--ion-background-color-step-50,#f2f2f2);--button-color:var(--ion-text-color-step-400,#666);--color:var(--ion-text-color-step-150,#262626);font-size:14px}.toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;display:block;position:absolute;max-width:700px;z-index:10}:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-wrapper.toast-middle{opacity:.01}.toast-message{padding:15px}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){}return e.prototype.create=function(e){return t.createOverlay(this.doc.createElement("ion-toast"),e)},e.prototype.dismiss=function(e,o,n){return t.dismissOverlay(this.doc,e,o,"ion-toast",n)},e.prototype.getTop=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,t.getOverlay(this.doc,"ion-toast")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();e.IonToast=l,e.IonToastController=c,Object.defineProperty(e,"__esModule",{value:!0})});