!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,o(r.key),r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}function a(e,n,r){return n=i(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,c()?Reflect.construct(n,r||[],i(e).constructor):n.apply(e,r))}function c(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(c=function(){return!!t})()}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}System.register(["./chunk-legacy-Ctq4hCpH.js"],(function(t,n){"use strict";var o,c,i,l,u,f;return{setters:[function(t){o=t.E,c=t.M,i=t.Q,l=t.V,u=t.O,f=t.a}],execute:function(){var n=function(t){function n(t){var r;return e(this,n),(r=a(this,n)).element=t,r.element.style.position="absolute",r.element.style.pointerEvents="auto",r.addEventListener("removed",(function(){r.traverse((function(t){t instanceof n&&t.element instanceof Element&&null!==t.element.parentNode&&t.element.parentNode.removeChild(t.element)}))})),r}return s(n,t),r(n,[{key:"copy",value:function(t,e){return f.prototype.copy.call(this,t,e),this.element=t.element.cloneNode(!0),this}}])}(f);t("a",n);var p=function(t){function n(t){var r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e(this,n),(r=a(this,n,[t])).spriteRatio=o,r.spriteMatrixWorld=(new c).copy(r.matrixWorld),r}return s(n,t),r(n)}(n);t("C",function(t){function o(){var t,r,s;e(this,o),(t=a(this,o))._width=0,t._height=0,t._widthHalf=0,t._heightHalf=0,t.matrix=new c,t._spriteQuat=new i,t._objectQuat=new i,t.cache={camera:{fov:0,style:""},objects:new WeakMap},t.epsilon=function(t){return Math.abs(t)<1e-10?0:t},t.getDistanceToSquared=(r=new l,s=new l,function(t,e){return r.setFromMatrixPosition(t.matrixWorld),s.setFromMatrixPosition(e.matrixWorld),r.distanceToSquared(s)}),t.getCameraCSSMatrix=function(e,n,r){var o=t.epsilon,a=e.elements,c="matrix3d(".concat(o(a[0]),",").concat(o(-a[1]),",").concat(o(a[2]),",").concat(o(a[3]),",").concat(o(a[4]),",").concat(o(-a[5]),",").concat(o(a[6]),",").concat(o(a[7]),",").concat(o(a[8]),",").concat(o(-a[9]),",").concat(o(a[10]),",").concat(o(a[11]),",").concat(o(a[12]),",").concat(o(-a[13]),",").concat(o(a[14]),",").concat(o(a[15]),")");if(n instanceof u){var i=-(n.right+n.left)/2,s=(n.top+n.bottom)/2;return"scale(".concat(r,")translate(").concat(o(i),"px,").concat(o(s),"px)").concat(c)}return"translateZ(".concat(r,"px)").concat(c)},t.getObjectCSSMatrix=function(e,n){var r=t.epsilon,o=e.elements,a="matrix3d(".concat(r(o[0]),",").concat(r(o[1]),",").concat(r(o[2]),",").concat(r(o[3]),",").concat(r(-o[4]),",").concat(r(-o[5]),",").concat(r(-o[6]),",").concat(r(-o[7]),",").concat(r(o[8]),",").concat(r(o[9]),",").concat(r(o[10]),",").concat(r(o[11]),",").concat(r(o[12]),",").concat(r(o[13]),",").concat(r(o[14]),",").concat(r(o[15]),")");return t.isIE?"translate(-50%,-50%)translate(".concat(t._widthHalf,"px,").concat(t._heightHalf,"px)").concat(n).concat(a):"translate(-50%,-50%)".concat(a)},t.renderObject=function(e,r,o,a){var c=t,i=c.matrix,s=c.getObjectCSSMatrix,l=c.cache,u=c.cameraElement,f=c.renderObject,m=c.isIE,d=c.getDistanceToSquared;if(e instanceof n){var h;e.onBeforeRender(t,r,o),e instanceof p?(i.copy(o.matrixWorldInverse),i.transpose(),t._spriteQuat.setFromRotationMatrix(i),t._objectQuat.setFromRotationMatrix(e.matrixWorld),t._objectQuat.slerp(t._spriteQuat,e.spriteRatio),i.makeRotationFromQuaternion(t._objectQuat),i.copyPosition(e.matrixWorld),i.scale(e.scale),i.elements[3]=0,i.elements[7]=0,i.elements[11]=0,i.elements[15]=1,e.spriteMatrixWorld.copy(i),h=s(i,a)):h=s(e.matrixWorld,a);var y=e.element,v=l.objects.get(e);if(void 0===v||v.style!==h){y.style.transform=h;var b={style:h};l.objects.set(e,b),m&&(b.distanceToCameraSquared=d(o,e))}y.style.display=e.visible?"":"none",y.parentNode!==u&&u.appendChild(y),e.onAfterRender(t,r,o)}for(var x=0,g=e.children.length;x<g;x++)f(e.children[x],r,o,a)};var f=document.createElement("div");t.domElement=f,f.style.overflow="hidden";var m=document.createElement("div");return t.cameraElement=m,m.style.transformStyle="preserve-3d",f.appendChild(m),t.isIE=/Trident/i.test(navigator.userAgent),t}return s(o,t),r(o,[{key:"zOrder",value:function(t){var e=this.cache,n=[];t.traverse((function(t){var r=t;e.objects.has(r)&&n.push({object:r,data:e.objects.get(r)})}));var r=n.sort((function(t,e){return t.data.distanceToCameraSquared-e.data.distanceToCameraSquared})),o=r.length;r.forEach((function(t,e){t.object.element.style.zIndex="".concat(o-e)}))}},{key:"setClearColor",value:function(){}},{key:"getSize",value:function(){return{width:this._width,height:this._height}}},{key:"setSize",value:function(t,e){this._width=t,this._height=e,this._widthHalf=this._width/2,this._heightHalf=this._height/2,this.domElement.style.width="".concat(t,"px"),this.domElement.style.height="".concat(e,"px"),this.cameraElement.style.width="".concat(t,"px"),this.cameraElement.style.height="".concat(e,"px")}},{key:"render",value:function(t,e){var n=this._heightHalf,r=this._widthHalf,o=this.isIE,a=this.cameraElement,c=this.cache,i=this.domElement,s=this.getCameraCSSMatrix,l=this.zOrder,u=this.renderObject,f=e.projectionMatrix.elements[5]*n;c.camera.fov!==f&&(i.style.perspective="".concat(f,"px"),c.camera.fov=f),(t.matrixAutoUpdate&&!0===t.matrixAutoUpdate||!0===t.autoUpdate)&&t.updateMatrixWorld(),null===e.parent&&e.updateMatrixWorld();var p=s(e.matrixWorldInverse,e,f),m="".concat(p,"translate(").concat(r,"px,").concat(n,"px)");c.camera.style===m||o||(a.style.transform=m,c.camera.style=m),u(t,t,e,p),o&&l(t)}}])}(o))}}}))}();
