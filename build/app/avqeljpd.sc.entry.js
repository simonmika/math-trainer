/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{b as e,c as o,d as s,e as a,f as i,g as n}from"./chunk-1004ea03.js";import{a as r,e as l}from"./chunk-f49656cd.js";function c(t,e,o){const s=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","calc(10px + var(--ion-safe-area-top, 0px))");break;case"middle":const t=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=`${t}px`,a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","calc(-10px - var(--ion-safe-area-bottom, 0px))")}return Promise.resolve(s.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(a))}function d(t,e,o){const s=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","calc(10px + var(--ion-safe-area-top, 0px))","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","calc(-10px - var(--ion-safe-area-bottom, 0px))","100%")}return Promise.resolve(s.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}function m(t,e,o){const s=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","-100%","0%");break;case"middle":const t=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=`${t}px`,a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%","0%")}return Promise.resolve(s.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(a))}function u(t,e,o){const s=new t,a=new t,i=e.querySelector(".toast-wrapper");switch(a.addElement(i),o){case"top":a.fromTo("translateY","0px","-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY","0px","100%")}return Promise.resolve(s.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}class p{constructor(){this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.showCloseButton=!1,this.translucent=!1,this.animated=!0}componentDidLoad(){this.ionToastDidLoad.emit()}componentDidUnload(){this.ionToastDidUnload.emit()}async present(){await s(this,"toastEnter",c,m,this.position),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(void 0,"timeout"),this.duration))}dismiss(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),e(this,t,o,"toastLeave",d,u,this.position)}onDidDismiss(){return o(this.el,"ionToastDidDismiss")}onWillDismiss(){return o(this.el,"ionToastWillDismiss")}hostData(){return{style:{zIndex:6e4+this.overlayIndex},class:Object.assign({},r(this.color),l(this.cssClass),{"toast-translucent":this.translucent})}}render(){return t("div",{class:{"toast-wrapper":!0,[`toast-${this.position}`]:!0}},t("div",{class:"toast-container"},void 0!==this.message&&t("div",{class:"toast-message"},this.message),this.showCloseButton&&t("ion-button",{fill:"clear","ion-activatable":!0,class:"toast-button",onClick:()=>this.dismiss(void 0,"cancel")},this.closeButtonText||"Close")))}static get is(){return"ion-toast"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},color:{type:String,attr:"color"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"}}}static get events(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-toast-md-h{--button-color:inherit;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1000;pointer-events:none}.ion-color.sc-ion-toast-md-h{--color:var(--ion-color-contrast);--background:var(--ion-color-base);--button-color:inherit}.toast-wrapper.sc-ion-toast-md{background:var(--background)}.toast-wrapper.toast-top.sc-ion-toast-md{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-bottom.sc-ion-toast-md{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-container.sc-ion-toast-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button.sc-ion-toast-md{color:var(--button-color);font-size:15px}.toast-message.sc-ion-toast-md{-ms-flex:1;flex:1}.sc-ion-toast-md-h{--background:var(--ion-text-color-step-150,#262626);--color:var(--ion-background-color,#fff);font-size:15px}.toast-wrapper.sc-ion-toast-md{left:0;right:0;margin:auto;display:block;position:absolute;width:100%;max-width:700px;z-index:10}.toast-wrapper.toast-top.sc-ion-toast-md{padding-top:var(--ion-safe-area-top,0)}.toast-wrapper.toast-bottom.sc-ion-toast-md{padding-bottom:var(--ion-safe-area-bottom,0)}.toast-wrapper.toast-middle.sc-ion-toast-md{opacity:.01}.toast-message.sc-ion-toast-md{padding:19px 16px 17px}"}static get styleMode(){return"md"}}class h{create(t){return a(this.doc.createElement("ion-toast"),t)}dismiss(t,e,o){return i(this.doc,t,e,"ion-toast",o)}async getTop(){return n(this.doc,"ion-toast")}static get is(){return"ion-toast-controller"}static get properties(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}}}export{p as IonToast,h as IonToastController};