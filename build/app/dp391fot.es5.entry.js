/*! Built with http://stenciljs.com */
App.loadBundle("dp391fot",["exports","./chunk-f17883f5.js"],function(e,t){window;var n=function(){function e(){}return e.prototype.addRipple=function(e,n){var i=this;this.config.getBoolean("animated",!0)&&t.rIC(function(){return i.prepareRipple(e,n)})},e.prototype.prepareRipple=function(e,t){var n,u,p,a=this;this.queue.read(function(){var i=a.el.getBoundingClientRect(),r=i.width,c=i.height;p=Math.min(2*Math.sqrt(r*r+c*c),o),n=e-i.left-.5*p,u=t-i.top-.5*p}),this.queue.write(function(){var e=a.win.document.createElement("div");e.classList.add("ripple-effect");var t=e.style,o=Math.max(i*Math.sqrt(p),r);t.top=u+"px",t.left=n+"px",t.width=t.height=p+"px",t.animationDuration=o+"ms",(a.el.shadowRoot||a.el).appendChild(e),setTimeout(function(){return e.remove()},o+50)})},Object.defineProperty(e,"is",{get:function(){return"ion-ripple-effect"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{addRipple:{method:!0},config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0}.ripple-effect,:host{position:absolute;contain:strict}.ripple-effect{border-radius:50%;background-color:currentColor;color:inherit;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}to{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"},enumerable:!0,configurable:!0}),e}(),i=35,r=260,o=550;e.IonRippleEffect=n,Object.defineProperty(e,"__esModule",{value:!0})});