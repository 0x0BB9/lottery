System.register(["./chunk-legacy-BPWnHybO.js"],(function(n,i){"use strict";var t;return{setters:[function(n){t=n.p}],execute:function(){function i(){return t()}n("k",{install:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;n.directive("dompurify-html",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:i)();!function(n,i){var t,e,o=null!==(t=n.hooks)&&void 0!==t?t:{};for(e in o){var r=o[e];void 0!==r&&i.addHook(e,r)}}(n,t);var e=function(i,e){var o,r=e.value;if(e.oldValue!==r){var u,a="".concat(r),d=e.arg,v=n.namedConfigurations,l=null!==(o=n.default)&&void 0!==o?o:{};i.innerHTML=v&&void 0!==d?t.sanitize(a,null!==(u=v[d])&&void 0!==u?u:l):t.sanitize(a,l)}};return{mounted:e,updated:e}}(t,e))}})}}}));
