/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{constructor(){this.state=[]}async componentWillLoad(){const t=await(await fetch("/api/lessons/index.json")).json();t&&(this.state=t)}render(){return[t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"../"})),t("ion-title",null,"Categories"))),t("ion-content",{padding:!0},this.state.map(e=>t("ion-item",{href:document.URL+e.url.slice(1)},t("ion-icon",{name:"book",slot:"start"}),t("ion-label",null,e.name),t("ion-icon",{name:"arrow-forward",slot:"end"}))))]}static get is(){return"mt-categories"}static get properties(){return{state:{state:!0}}}static get style(){return""}}export{e as MtCategories};