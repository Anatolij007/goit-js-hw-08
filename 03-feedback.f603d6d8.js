!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,m=Math.min,y=function(){return s.Date.now()};function g(e,t,n){var r,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,l=t,f=e.apply(i,n)}function S(e){return l=e,a=setTimeout(T,t),d?g(e):f}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=y();if(O(e))return h(e);a=setTimeout(T,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function h(e){return a=void 0,v&&r?g(e):(r=o=void 0,f)}function w(){var e=y(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return S(c);if(s)return a=setTimeout(T,t),g(c)}return void 0===a&&(a=setTimeout(T,t)),f}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?p(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},w.flush=function(){return void 0===a?f:h(y())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),O=document.querySelector("input"),T=document.querySelector("textarea"),h="feedback-form-state",w=JSON.parse(localStorage.getItem(h)),x=w||{};S.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(h),console.log(x)})),S.addEventListener("input",e(t)((function(e){x[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(x))}),500)),function(){if(!w)return;O.value=w.input||"",T.value=w.textarea||""}()}();
//# sourceMappingURL=03-feedback.f603d6d8.js.map
