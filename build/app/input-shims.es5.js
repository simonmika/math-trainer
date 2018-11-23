/*! Built with http://stenciljs.com */
App.loadBundle("input-shims.js",["exports","./chunk-f17883f5.js"],function(t,e){window;var n="$ionRelocated";function o(t,e,o,r){void 0===r&&(r=0),t[n]!==o&&(o?(!function(t,e){var n,o,r=t.parentElement,i=t.ownerDocument;if(t&&r){var a=t.offsetTop,s=t.offsetLeft,u=t.offsetWidth,l=t.offsetHeight,c=i.createElement("div"),d=c.style;(n=c.classList).add.apply(n,Array.from(t.classList)),c.classList.add("cloned-input"),c.setAttribute("aria-hidden","true"),d.pointerEvents="none",d.position="absolute",d.top=a+"px",d.left=s+"px",d.width=u+"px",d.height=l+"px";var f=i.createElement("input");(o=f.classList).add.apply(o,Array.from(e.classList)),f.value=e.value,f.type=e.type,f.placeholder=e.placeholder,f.tabIndex=-1,c.appendChild(f),r.appendChild(c),t.style.pointerEvents="none"}e.style.transform="scale(0)"}(t,e),e.style.transform="translate3d("+("rtl"===t.ownerDocument.dir?9999:-9999)+"px,"+r+"px,0)"):function(t,e){t&&t.parentElement&&(Array.from(t.parentElement.querySelectorAll(".cloned-input")).forEach(function(t){return t.remove()}),t.style.pointerEvents=""),e.style.transform="",e.style.opacity=""}(t,e),t[n]=o)}function r(t){return t===t.ownerDocument.activeElement}var i="input, textarea, [no-blur]",a=.3;function s(t,n,i,s){var u,l=function(t){u=e.pointerCoord(t)},c=function(l){u&&(function(t,e,n){if(u&&n){var o=u.x-n.x,r=u.y-n.y;return o*o+r*r>36}return!1}(0,0,e.pointerCoord(l))||r(n)||(l.preventDefault(),l.stopPropagation(),function(t,e,n,r){var i=function(t,e,n){return function(t,e,n,o){var r=t.top,i=t.bottom,s=e.top+10,u=Math.min(e.bottom,o-n)/2-i,l=s-r,c=Math.round(u<0?-u:l>0?-l:0),d=Math.abs(c);return{scrollAmount:c,scrollDuration:Math.min(400,Math.max(150,d/a)),scrollPadding:n,inputSafeY:4-(r-s)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n,window.innerHeight)}(t,n,r);Math.abs(i.scrollAmount)<4?e.focus():(o(t,e,!0,i.inputSafeY),e.focus(),n.scrollByPoint(0,i.scrollAmount,i.scrollDuration).then(function(){o(t,e,!1,i.inputSafeY),e.focus()}))}(t,n,i,s)))};return t.addEventListener("touchstart",l,!0),t.addEventListener("touchend",c,!0),function(){t.removeEventListener("touchstart",l,!0),t.removeEventListener("touchend",c,!0)}}var u="$ionPaddingTimer";function l(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[u];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[u]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}t.startInputShims=function(t,e){var n=e.getNumber("keyboardHeight",290),a=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),c=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),f=new WeakMap,p=new WeakMap;function v(t){var e=(t.shadowRoot||t).querySelector("input"),i=t.closest("ion-content");if(e){if(i&&u&&!f.has(t)){var l=function(t,e,n){if(!n||!e)return function(){};var i=function(n){r(e)&&o(t,e,n)},a=function(){return o(t,e,!1)},s=function(){return i(!0)},u=function(){return i(!1)};return n.addEventListener("ionScrollStart",s),n.addEventListener("ionScrollEnd",u),e.addEventListener("blur",a),function(){n.removeEventListener("ionScrollStart",s),n.removeEventListener("ionScrollEnd",u),e.addEventListener("ionBlur",a)}}(t,e,i);f.set(t,l)}i&&a&&!p.has(t)&&(l=s(t,e,i,n),p.set(t,l))}}c&&function(t){var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(i)){var a=o.target;a!==r&&(a.matches(i)||a.closest(i)||a.classList.contains("input-cover")||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),d&&function(t,e){t.addEventListener("focusin",function(t){l(t.target,e)}),t.addEventListener("focusout",function(t){l(t.target,0)})}(t,n);for(var m=0,h=Array.from(t.querySelectorAll("ion-input"));m<h.length;m++)v(h[m]);t.body.addEventListener("ionInputDidLoad",function(t){v(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,u&&((n=f.get(e))&&n(),f.delete(e)),a&&((n=p.get(e))&&n(),p.delete(e))})},Object.defineProperty(t,"__esModule",{value:!0})});