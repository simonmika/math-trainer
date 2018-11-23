/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{e}from"./chunk-88f61838.js";import{a as o,b as s}from"./chunk-f49656cd.js";class n{constructor(){this.keyFocus=!1,this.buttonType="button",this.disabled=!1,this.strong=!1,this.type="button",this.onFocus=(()=>{this.ionFocus.emit()}),this.onKeyUp=(()=>{this.keyFocus=!0}),this.onBlur=(()=>{this.keyFocus=!1,this.ionBlur.emit()}),this.onClick=(t=>{if("button"===this.type)return s(this.win,this.href,t,this.routerDirection);if(e(this.el)){const e=this.el.closest("form");if(e){t.preventDefault();const o=document.createElement("button");o.type=this.type,o.style.display="none",e.appendChild(o),o.click(),o.remove()}}return Promise.resolve(!1)})}componentWillLoad(){void 0===this.fill&&(this.fill=this.el.closest("ion-buttons")?"clear":"solid")}hostData(){const{buttonType:t,keyFocus:e,disabled:s,color:n,expand:i,fill:r,shape:l,size:a,strong:c}=this;return{"ion-activatable":!0,class:Object.assign({},o(n),{[t]:!0,[`${t}-${i}`]:!!i,[`${t}-${a}`]:!!a,[`${t}-${l}`]:!!l,[`${t}-${r}`]:!!r,[`${t}-strong`]:c,focused:e,"button-disabled":s})}}render(){const e=void 0===this.href?"button":"a";return t(e,Object.assign({},"button"===e?{type:this.type}:{href:this.href},{class:"button-native",disabled:this.disabled,onFocus:this.onFocus,onKeyUp:this.onKeyUp,onBlur:this.onBlur,onClick:this.onClick}),t("span",{class:"button-inner"},t("slot",{name:"icon-only"}),t("slot",{name:"start"}),t("slot",null),t("slot",{name:"end"})),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-button"}static get encapsulation(){return"shadow"}static get properties(){return{buttonType:{type:String,attr:"button-type",mutable:!0},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},el:{elementRef:!0},expand:{type:String,attr:"expand",reflectToAttr:!0},fill:{type:String,attr:"fill",reflectToAttr:!0,mutable:!0},href:{type:String,attr:"href"},keyFocus:{state:!0},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},shape:{type:String,attr:"shape",reflectToAttr:!0},size:{type:String,attr:"size",reflectToAttr:!0},strong:{type:Boolean,attr:"strong"},type:{type:String,attr:"type"},win:{context:"window"}}}static get events(){return[{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-button-ios-h{--width:auto;--overflow:hidden;--ripple-color:currentColor;display:inline-block;color:var(--color);font-family:var(--ion-font-family,inherit);pointer-events:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-font-kerning:none;font-kerning:none}.button-disabled.sc-ion-button-ios-h{pointer-events:none}.button-solid.sc-ion-button-ios-h{--background:var(--ion-color-primary,#3880ff);--background-activated:var(--ion-color-primary-shade,#3171e0);--background-focused:var(--ion-color-primary-shade,#3171e0);--color:var(--ion-color-primary-contrast,#fff);--color-activated:var(--ion-color-primary-contrast,#fff);--color-focused:var(--ion-color-primary-contrast,#fff)}.button-solid.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}.button-solid.ion-color.activated.sc-ion-button-ios-h   .button-native.sc-ion-button-ios, .button-solid.ion-color.focused.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-shade)}.button-outline.sc-ion-button-ios-h{--border-color:var(--ion-color-primary,#3880ff);--background:transparent;--color:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-outline.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}.button-outline.focused.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.sc-ion-button-ios-h{--border-width:0;--background:transparent;--color:var(--ion-color-primary,#3880ff)}.button-clear.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:transparent;color:var(--ion-color-base)}.button-clear.focused.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:rgba(var(--ion-color-base-rgb),.1);color:var(--ion-color-base)}.button-clear.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:transparent}.button-block.sc-ion-button-ios-h{display:block}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:strict}.button-block.sc-ion-button-ios-h   .button-native.sc-ion-button-ios:after{clear:both}.button-full.sc-ion-button-ios-h{display:block}.button-full.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{margin-left:0;margin-right:0;display:block;width:100%;contain:strict}.button-full.sc-ion-button-ios-h:not(.button-round)   .button-native.sc-ion-button-ios{border-radius:0;border-right-width:0;border-left-width:0}.button-native.sc-ion-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:var(--width);height:var(--height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:content;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-native[disabled].sc-ion-button-ios{cursor:default;opacity:.5;pointer-events:none}.focused.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--background-focused);color:var(--color-focused)}.activated.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--background-activated);color:var(--color-activated)}.button-inner.sc-ion-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.sc-ion-button-ios-s > ion-icon{font-size:1.4em;pointer-events:none}.sc-ion-button-ios-s > ion-icon[slot=start]{margin:0 .3em 0 -.3em}.sc-ion-button-ios-s > ion-icon[slot=end]{margin:0 -.2em 0 .3em}.sc-ion-button-ios-s > ion-icon[slot=icon-only]{font-size:1.8em}ion-ripple-effect.sc-ion-button-ios{color:var(--ripple-color)}.sc-ion-button-ios-h{--border-radius:12px;--margin-top:4px;--margin-bottom:4px;--margin-start:2px;--margin-end:2px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--height:2.8em;--transition:background-color,opacity 100ms linear;font-size:16px;font-weight:500;letter-spacing:-.03em}\@media (any-hover:hover){.button-solid.sc-ion-button-ios-h:hover{--opacity:0.8}}.button-solid.activated.sc-ion-button-ios-h{--opacity:1}.button-outline.sc-ion-button-ios-h{--border-radius:12px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary,#3880ff);--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary-contrast,#fff)}.button-outline.activated.ion-color.sc-ion-button-ios-h   .button-native.sc-ion-button-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}\@media (any-hover:hover){.button-clear.sc-ion-button-ios-h:hover{--opacity:0.6}}.button-clear.activated.sc-ion-button-ios-h{--opacity:0.4}.button-clear.sc-ion-button-ios-h{--background-activated:transparent;--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--color-activated:var(--ion-color-primary,#3880ff);--color-focused:var(--ion-color-primary,#3880ff)}.button-round.sc-ion-button-ios-h{--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}.button-large.sc-ion-button-ios-h{--border-radius:14px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;--height:2.8em;font-size:20px}.button-small.sc-ion-button-ios-h{--border-radius:8px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;--height:2.1em;font-size:13px}.button-strong.sc-ion-button-ios-h{font-weight:600}"}static get styleMode(){return"ios"}}export{n as IonButton};