(this.webpackJsonpAMM_IOT_webapp=this.webpackJsonpAMM_IOT_webapp||[]).push([[19],{177:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_back_button",(function(){return d}));var o=i(2),r=i(6),e=i(16),a=i(221),d=function(){function t(t){var n=this;Object(r.q)(this,t),this.disabled=!1,this.type="button",this.onClick=function(t){return Object(o.a)(n,void 0,void 0,(function(){var n,i;return Object(o.c)(this,(function(o){switch(o.label){case 0:return n=this.el.closest("ion-nav"),t.preventDefault(),(i=n)?[4,n.canGoBack()]:[3,2];case 1:i=o.sent(),o.label=2;case 2:return i?[2,n.pop({animationBuilder:this.routerAnimation,skipIfBusy:!0})]:[2,Object(a.d)(this.defaultHref,t,"back",this.routerAnimation)]}}))}))}}return t.prototype.componentWillLoad=function(){void 0===this.defaultHref&&(this.defaultHref=e.c.get("backButtonDefaultHref"))},Object.defineProperty(t.prototype,"backButtonIcon",{get:function(){var t=this.icon;return null!=t?t:"ios"===Object(e.b)(this)?e.c.get("backButtonIcon","chevron-back"):e.c.get("backButtonIcon","arrow-back-sharp")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"backButtonText",{get:function(){var t="ios"===Object(e.b)(this)?"Back":null;return null!=this.text?this.text:e.c.get("backButtonText",t)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasIconOnly",{get:function(){return this.backButtonIcon&&!this.backButtonText},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"rippleType",{get:function(){return this.hasIconOnly?"unbounded":"bounded"},enumerable:!1,configurable:!0}),t.prototype.render=function(){var t,n=this,i=n.color,o=n.defaultHref,d=n.disabled,s=n.type,c=n.hasIconOnly,g=n.backButtonIcon,l=n.backButtonText,p=void 0!==o,u=Object(e.b)(this);return Object(r.l)(r.c,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(a.a)(i)),(t={},t[u]=!0,t.button=!0,t["back-button-disabled"]=d,t["back-button-has-icon-only"]=c,t["in-toolbar"]=Object(a.c)("ion-toolbar",this.el),t["in-toolbar-color"]=Object(a.c)("ion-toolbar[color]",this.el),t["ion-activatable"]=!0,t["ion-focusable"]=!0,t["show-back-button"]=p,t))},Object(r.l)("button",{type:s,disabled:d,class:"button-native",part:"native","aria-label":l||"back"},Object(r.l)("span",{class:"button-inner"},g&&Object(r.l)("ion-icon",{part:"icon",icon:g,"aria-hidden":"true",lazy:!1}),l&&Object(r.l)("span",{part:"text","aria-hidden":"true",class:"button-text"},l)),"md"===u&&Object(r.l)("ion-ripple-effect",{type:this.rippleType})))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.m)(this)},enumerable:!1,configurable:!0}),t}();d.style={ios:':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',md:':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;height:48px}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-text{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}'}},221:function(t,n,i){"use strict";i.d(n,"a",(function(){return e})),i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return r})),i.d(n,"d",(function(){return s}));var o=i(2),r=function(t,n){return null!==n.closest(t)},e=function(t){var n;return"string"===typeof t&&t.length>0?((n={"ion-color":!0})["ion-color-"+t]=!0,n):void 0},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},d=/^[a-z][a-z0-9+\-.]*:/,s=function(t,n,i,r){return Object(o.a)(void 0,void 0,void 0,(function(){var e;return Object(o.c)(this,(function(o){return null!=t&&"#"!==t[0]&&!d.test(t)&&(e=document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[2,e.push(t,i,r)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=19.91454703.chunk.js.map