System.register([],(function(t,r){"use strict";return{execute:function(){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}t("t",n);var e=/^\s+/,a=/\s+$/;function n(t,i){if(i=i||{},(t=t||"")instanceof n)return t;if(!(this instanceof n))return new n(t,i);var o=function(t){var n,i,o,h={r:0,g:0,b:0},s=1,f=null,u=null,l=null,c=!1,g=!1;return"string"==typeof t&&(t=function(t){t=t.replace(e,"").replace(a,"").toLowerCase();var r,n=!1;if(M[t])t=M[t],n=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(r=I.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=I.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=I.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=I.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=I.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=I.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=I.hex8.exec(t))?{r:S(r[1]),g:S(r[2]),b:S(r[3]),a:C(r[4]),format:n?"name":"hex8"}:(r=I.hex6.exec(t))?{r:S(r[1]),g:S(r[2]),b:S(r[3]),format:n?"name":"hex"}:(r=I.hex4.exec(t))?{r:S(r[1]+""+r[1]),g:S(r[2]+""+r[2]),b:S(r[3]+""+r[3]),a:C(r[4]+""+r[4]),format:n?"name":"hex8"}:!!(r=I.hex3.exec(t))&&{r:S(r[1]+""+r[1]),g:S(r[2]+""+r[2]),b:S(r[3]+""+r[3]),format:n?"name":"hex"}}(t)),"object"==r(t)&&(L(t.r)&&L(t.g)&&L(t.b)?(n=t.r,i=t.g,o=t.b,h={r:255*k(n,255),g:255*k(i,255),b:255*k(o,255)},c=!0,g="%"===String(t.r).substr(-1)?"prgb":"rgb"):L(t.h)&&L(t.s)&&L(t.v)?(f=R(t.s),u=R(t.v),h=function(t,r,e){t=6*k(t,360),r=k(r,100),e=k(e,100);var a=Math.floor(t),n=t-a,i=e*(1-r),o=e*(1-n*r),h=e*(1-(1-n)*r),s=a%6,f=[e,o,i,i,h,e][s],u=[h,e,e,o,i,i][s],l=[i,i,h,e,e,o][s];return{r:255*f,g:255*u,b:255*l}}(t.h,f,u),c=!0,g="hsv"):L(t.h)&&L(t.s)&&L(t.l)&&(f=R(t.s),l=R(t.l),h=function(t,r,e){var a,n,i;function o(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=k(t,360),r=k(r,100),e=k(e,100),0===r)a=n=i=e;else{var h=e<.5?e*(1+r):e+r-e*r,s=2*e-h;a=o(s,h,t+1/3),n=o(s,h,t),i=o(s,h,t-1/3)}return{r:255*a,g:255*n,b:255*i}}(t.h,f,l),c=!0,g="hsl"),t.hasOwnProperty("a")&&(s=t.a)),s=A(s),{ok:c,format:t.format||g,r:Math.min(255,Math.max(h.r,0)),g:Math.min(255,Math.max(h.g,0)),b:Math.min(255,Math.max(h.b,0)),a:s}}(t);this._originalInput=t,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||o.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function i(t,r,e){t=k(t,255),r=k(r,255),e=k(e,255);var a,n,i=Math.max(t,r,e),o=Math.min(t,r,e),h=(i+o)/2;if(i==o)a=n=0;else{var s=i-o;switch(n=h>.5?s/(2-i-o):s/(i+o),i){case t:a=(r-e)/s+(r<e?6:0);break;case r:a=(e-t)/s+2;break;case e:a=(t-r)/s+4}a/=6}return{h:a,s:n,l:h}}function o(t,r,e){t=k(t,255),r=k(r,255),e=k(e,255);var a,n,i=Math.max(t,r,e),o=Math.min(t,r,e),h=i,s=i-o;if(n=0===i?0:s/i,i==o)a=0;else{switch(i){case t:a=(r-e)/s+(r<e?6:0);break;case r:a=(e-t)/s+2;break;case e:a=(t-r)/s+4}a/=6}return{h:a,s:n,v:h}}function h(t,r,e,a){var n=[H(Math.round(t).toString(16)),H(Math.round(r).toString(16)),H(Math.round(e).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function s(t,r,e,a){return[H(F(a)),H(Math.round(t).toString(16)),H(Math.round(r).toString(16)),H(Math.round(e).toString(16))].join("")}function f(t,r){r=0===r?0:r||10;var e=n(t).toHsl();return e.s-=r/100,e.s=w(e.s),n(e)}function u(t,r){r=0===r?0:r||10;var e=n(t).toHsl();return e.s+=r/100,e.s=w(e.s),n(e)}function l(t){return n(t).desaturate(100)}function c(t,r){r=0===r?0:r||10;var e=n(t).toHsl();return e.l+=r/100,e.l=w(e.l),n(e)}function g(t,r){r=0===r?0:r||10;var e=n(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-r/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-r/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-r/100*255))),n(e)}function d(t,r){r=0===r?0:r||10;var e=n(t).toHsl();return e.l-=r/100,e.l=w(e.l),n(e)}function b(t,r){var e=n(t).toHsl(),a=(e.h+r)%360;return e.h=a<0?360+a:a,n(e)}function m(t){var r=n(t).toHsl();return r.h=(r.h+180)%360,n(r)}function p(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var e=n(t).toHsl(),a=[n(t)],i=360/r,o=1;o<r;o++)a.push(n({h:(e.h+o*i)%360,s:e.s,l:e.l}));return a}function _(t){var r=n(t).toHsl(),e=r.h;return[n(t),n({h:(e+72)%360,s:r.s,l:r.l}),n({h:(e+216)%360,s:r.s,l:r.l})]}function v(t,r,e){r=r||6,e=e||30;var a=n(t).toHsl(),i=360/e,o=[n(t)];for(a.h=(a.h-(i*r>>1)+720)%360;--r;)a.h=(a.h+i)%360,o.push(n(a));return o}function y(t,r){r=r||6;for(var e=n(t).toHsv(),a=e.h,i=e.s,o=e.v,h=[],s=1/r;r--;)h.push(n({h:a,s:i,v:o})),o=(o+s)%1;return h}n.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,e,a=this.toRgb();return t=a.r/255,r=a.g/255,e=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},setAlpha:function(t){return this._a=A(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=o(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=o(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+a+"%)":"hsva("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=i(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=i(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+a+"%)":"hsla("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return h(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,r,e,a,n){var i=[H(Math.round(t).toString(16)),H(Math.round(r).toString(16)),H(Math.round(e).toString(16)),H(F(a))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*k(this._r,255))+"%",g:Math.round(100*k(this._g,255))+"%",b:Math.round(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*k(this._r,255))+"%, "+Math.round(100*k(this._g,255))+"%, "+Math.round(100*k(this._b,255))+"%)":"rgba("+Math.round(100*k(this._r,255))+"%, "+Math.round(100*k(this._g,255))+"%, "+Math.round(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(x[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+s(this._r,this._g,this._b,this._a),e=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var i=n(t);e="#"+s(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,a=this._a<1&&this._a>=0;return r||!a||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return n(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(c,arguments)},brighten:function(){return this._applyModification(g,arguments)},darken:function(){return this._applyModification(d,arguments)},desaturate:function(){return this._applyModification(f,arguments)},saturate:function(){return this._applyModification(u,arguments)},greyscale:function(){return this._applyModification(l,arguments)},spin:function(){return this._applyModification(b,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(v,arguments)},complement:function(){return this._applyCombination(m,arguments)},monochromatic:function(){return this._applyCombination(y,arguments)},splitcomplement:function(){return this._applyCombination(_,arguments)},triad:function(){return this._applyCombination(p,[3])},tetrad:function(){return this._applyCombination(p,[4])}},n.fromRatio=function(t,e){if("object"==r(t)){var a={};for(var i in t)t.hasOwnProperty(i)&&(a[i]="a"===i?t[i]:R(t[i]));t=a}return n(t,e)},n.equals=function(t,r){return!(!t||!r)&&n(t).toRgbString()==n(r).toRgbString()},n.random=function(){return n.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},n.mix=function(t,r,e){e=0===e?0:e||50;var a=n(t).toRgb(),i=n(r).toRgb(),o=e/100;return n({r:(i.r-a.r)*o+a.r,g:(i.g-a.g)*o+a.g,b:(i.b-a.b)*o+a.b,a:(i.a-a.a)*o+a.a})},n.readability=function(t,r){var e=n(t),a=n(r);return(Math.max(e.getLuminance(),a.getLuminance())+.05)/(Math.min(e.getLuminance(),a.getLuminance())+.05)},n.isReadable=function(t,r,e){var a,i,o,h,s,f=n.readability(t,r);switch(i=!1,(o=e,h=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(o.size||"small").toLowerCase(),"AA"!==h&&"AAA"!==h&&(h="AA"),"small"!==s&&"large"!==s&&(s="small"),a={level:h,size:s}).level+a.size){case"AAsmall":case"AAAlarge":i=f>=4.5;break;case"AAlarge":i=f>=3;break;case"AAAsmall":i=f>=7}return i},n.mostReadable=function(t,r,e){var a,i,o,h,s=null,f=0;i=(e=e||{}).includeFallbackColors,o=e.level,h=e.size;for(var u=0;u<r.length;u++)(a=n.readability(t,r[u]))>f&&(f=a,s=n(r[u]));return n.isReadable(t,s,{level:o,size:h})||!i?s:(e.includeFallbackColors=!1,n.mostReadable(t,["#fff","#000"],e))};var M=n.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},x=n.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(M);function A(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function k(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function w(t){return Math.min(1,Math.max(0,t))}function S(t){return parseInt(t,16)}function H(t){return 1==t.length?"0"+t:""+t}function R(t){return t<=1&&(t=100*t+"%"),t}function F(t){return Math.round(255*parseFloat(t)).toString(16)}function C(t){return S(t)/255}var q,N,E,I=(N="[\\s|\\(]+("+(q="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+q+")[,|\\s]+("+q+")\\s*\\)?",E="[\\s|\\(]+("+q+")[,|\\s]+("+q+")[,|\\s]+("+q+")[,|\\s]+("+q+")\\s*\\)?",{CSS_UNIT:new RegExp(q),rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+E),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+E),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+E),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function L(t){return!!I.CSS_UNIT.exec(t)}}}}));
