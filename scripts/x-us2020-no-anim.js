!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";function o(e){var t,n=0;return function(){window.innerWidth!==n&&(n=window.innerWidth,t&&clearTimeout(t),t=setTimeout((function(){e()}),100))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){window.addEventListener("resize",o(e),!1),window.addEventListener("orientationchange",(function(){setTimeout(o(e),100)}),!1)};t.default=r},,,function(e,t,n){"use strict";var o,r=(o=n(4))&&o.__esModule?o:{default:o};"addEventListener"in window&&"querySelector"in document&&"localStorage"in window&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",(function(){(0,r.default)()}),!1):(0,r.default)())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(0))&&o.__esModule?o:{default:o};var i="nw-us2020-banner",a="".concat(i,"__chart"),d="".concat(i,"__bar"),c="".concat(i,"__votes-bar--dem"),u="".concat(i,"__votes-bar--gop"),l="".concat(i,"__votes-count--dem"),s="".concat(i,"__votes-count--gop"),f="".concat(i,"__votes-count--inside"),v="".concat(i,"__votes-count--outside"),m="".concat(i,"__chart--under"),_="IN",b="OUT",p="UNDER",y=function(e){var t=e.label,n=e.placement;return n===_?(t.classList.add(f),void t.classList.remove(v)):n===b?(t.classList.remove(f),void t.classList.add(v)):(t.classList.remove(f),void t.classList.remove(v))},g=function(e){var t=e.label,n=e.barId,o=e.otherBarId,r=e.resultWidth,i=t.offsetWidth,a=document.getElementById(n),d=document.getElementById(o),c=a.clientWidth,u=d.clientWidth,l=(r-1)/2,s=Math.min(l-c,r-u-c);return c>=i?_:i>s?p:b},h=function(){var e=document.getElementById(a),t=document.getElementById(d).clientWidth,n=document.getElementById(l),o=document.getElementById(s),r=g({align:"left",label:n,barId:c,otherBarId:u,resultWidth:t}),i=g({align:"right",label:o,barId:u,otherBarId:c,resultWidth:t});if(r===p||i===p)return e.classList.add(m),y({label:n,placement:p}),void y({label:o,placement:p});e.classList.remove(m),y({label:n,placement:r}),y({label:o,placement:i})},w=function(){h(),(0,r.default)((function(){h()}))};t.default=w}]);
