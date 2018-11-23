/*! Built with http://stenciljs.com */
const{h:t}=window.App;class s{constructor(t,s,e,i,r){this.id=s,this.name=e,this.priority=i,this.disableScroll=r,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class e{constructor(t,s,e,i){this.id=s,this.disable=e,this.disableScroll=i,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const i=new class{constructor(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){return new s(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)}createBlocker(t={}){return new e(this,this.newID(),t.disable,!!t.disableScroll)}start(t,s,e){return this.canStart(t)?(this.requestedStart.set(s,e),!0):(this.requestedStart.delete(s),!1)}capture(t,s,e){if(!this.start(t,s,e))return!1;const i=this.requestedStart;let r=-1e4;if(i.forEach(t=>{r=Math.max(r,t)}),r===e){this.capturedId=s,i.clear();const e=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(e),!0}return i.delete(s),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,s){let e=this.disabledGestures.get(t);void 0===e&&(e=new Set,this.disabledGestures.set(t,e)),e.add(s)}enableGesture(t,s){const e=this.disabledGestures.get(t);void 0!==e&&e.delete(s)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add("backdrop-no-scroll")}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove("backdrop-no-scroll")}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const s=this.disabledGestures.get(t);return!!(s&&s.size>0)}newID(){return this.gestureId++,this.gestureId}}(document);export{i as a};