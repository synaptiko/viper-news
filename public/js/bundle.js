!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var a,c,u=0,s=[];u<t.length;u++)c=t[u],o[c]&&s.push(o[c][0]),o[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(n&&n(t,r,i);s.length;)s.shift()()};var r={},o={8:0};t.e=function(e){function n(){c.onerror=c.onload=null,clearTimeout(u);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var a=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.charset="utf-8",c.async=!0,c.timeout=12e4,t.nc&&c.setAttribute("nonce",t.nc),c.src=t.p+"bundle."+e+".js";var u=setTimeout(n,12e4);return c.onerror=c.onload=n,a.appendChild(c),i},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/js/",t.oe=function(e){throw console.error(e),e},t(t.s=0)}([function(e,t,n){var r=n(1),o=n(6),i=r(),a="viperHTML 🐍 Hacker News",c=void 0,u=function(){return document.querySelector("main")},s=function(e){return scrollTo(0,0),u().classList.remove("opaque"),e},l=function(e){return!e.deleted},f=function e(t){return t.comments=(t.comments||[]).filter(l).map(e),o.comment(t)};i.get("/user/:name",function(e){var t=c=location.pathname;u().classList.add("opaque"),o.header("user"),fetch(t+".json").then(function(e){return e.json()}).then(function(e){c===t&&(document.title="Profile: "+e.id+" | "+a,o.main(o.user(e).then(s)))})}),i.get("/item/:id(\\d+)",function(e){var t=c=location.pathname;u().classList.add("opaque"),fetch(t+".json").then(function(e){return e.json()}).then(function(e){c===t&&(document.title=e.title,e.comments=e.comments.filter(l).map(f),o.main(o.item(e).then(s)))})}),i.get("/about",function(e){var t=c=location.pathname;u().classList.add("opaque"),o.header("about"),setTimeout(function(){c===t&&o.about([]).then(s)},150)}),i.get("/:section/:id(\\d+)",function(e){var t=c=location.pathname;u().classList.add("opaque"),o.header(e.params.section),fetch(c+".json").then(function(e){return e.json()}).then(function(e){c===t&&(document.title=a,o.main(Promise.all(e.items.map(o.summary).concat(e.next?o.next(e):[])).then(s)))})}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js")},function(e,t,n){(function(t){var r=function(){"use strict";function e(e,t){return"string"!=typeof e&&(e=e.toString(),e=e.slice(1,e.lastIndexOf("/"))),a(e,t)}function r(e,t){for(var n,r={},o=1,i=e.length;o<i;o++)(n=e[o])&&(r[t[o-1].name]=n);return r}function o(){this.parentNode.removeChild(this)}function i(){this._params={},this._paths={},t.addEventListener("popstate",this,!1),t.addEventListener("pushstate",this,!1)}var a=(n(3),n(4)),c=i.prototype;return c.get=function(t){for(var n=[],r=e(t,n),o=this._paths[r]||(this._paths[r]={keys:n,cb:[],re:r}),i=1,a=arguments.length;i<a;i++)o.cb.push(arguments[i]);return this},c.delete=function(t){for(var n=e(t,[]),r=this._paths[n],o=1,i=arguments.length;o<i;o++){var a=arguments[o],c=r?r.cb.lastIndexOf(a):-1;-1<c&&r.cb.splice(c,1)}return this},c.use=function(e,t){for(var n=[].concat(e),r=0,o=n.length;r<o;r++)this.get(n[r],t);return this},c.param=function(e,t){for(var n=[].concat(e),r=0,o=n.length;r<o;r++)this._params[n[r]]=t;return this},c.navigate=function(e,t){switch(!0){case!!t:switch(!0){case!!t.replace:case!!t.replaceState:history.replaceState(history.state,document.title,e)}break;case e===location.pathname+location.search:this.handleEvent({type:"samestate"});break;default:var n=document,r=n.documentElement,i=n.createElement("a");i.href=e,i.onclick=o,r.insertBefore(i,r.firstChild),i.click()}return this},c.handleEvent=function(e){var t=this._paths;for(var n in t)if(t.hasOwnProperty(n)){var o=t[n],i=o.re.exec(location.pathname);if(i){var a=[],c=[],u=this._params,s={params:r(i,o.keys),type:e.type},l=0,f=o.cb.length;for(n in s.params)u.hasOwnProperty(n)&&c.push(n);return void function e(){c.length?(n=c.shift(),u[n](s,e,s.params[n])):function e(){if(l<f){var t=o.cb[l++];a.lastIndexOf(t)<0?(a.push(t),t(s,e)):e()}}()}()}}},function(){return new i}}();e.exports=(t.hyperHTML||{}).app=r}).call(t,n(2))},function(e,t){var n,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}e.exports=n},function(e,t){/*! (C) 2017 Andrea Giammarchi - @WebReflection - ISC License */
document.addEventListener("click",function(e){var t=e.target,n=t.closest||function(e){for(;t&&t.nodeName!==e;)t=t.parentNode;return t},r=n.call(t,"A");if(r&&/^(?:_self)?$/i.test(r.target)&&!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")){var o=new URL(r.href),i=location;if(o.origin===i.origin){var a=o.pathname+o.search,c=o.hash,u=!0;if(e.preventDefault(),a===i.pathname+i.search){if(/^#[a-z][a-z0-9.:_-]+$/i.test(c)){var t=document.querySelector(c+',[name="'+c.slice(1)+'"]');t&&(e.preventDefault=function(){u=!1},setTimeout(function(){u&&t.scrollIntoView(!0)}))}history.replaceState(history.state,document.title,a+c)}else{var s=new CustomEvent("pushstate");s.state=i.href,setTimeout(function(){dispatchEvent(s),window.onpushstate&&onpushstate(s)}),history.pushState(s.state,document.title,a+c)}}}},!0)},function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,a="",c=t&&t.delimiter||"/";null!=(n=b.exec(e));){var l=n[0],f=n[1],p=n.index;if(a+=e.slice(i,p),i=p+l.length,f)a+=f[1];else{var d=e[i],h=n[2],m=n[3],v=n[4],y=n[5],g=n[6],w=n[7];a&&(r.push(a),a="");var x=null!=h&&null!=d&&d!==h,k="+"===g||"*"===g,E="?"===g||"*"===g,N=n[2]||c,j=v||y;r.push({name:m||o++,prefix:h||"",delimiter:N,optional:E,repeat:k,partial:x,asterisk:!!w,pattern:j?s(j):w?".*":"[^"+u(N)+"]+?"})}}return i<e.length&&(a+=e.substr(i)),a&&r.push(a),r}function o(e,t){return c(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"===y(e[n])&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",c=n||{},u=r||{},s=u.pretty?i:encodeURIComponent,l=0;l<e.length;l++){var f=e[l];if("string"!=typeof f){var p,d=c[f.name];if(null==d){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(g(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<d.length;h++){if(p=s(d[h]),!t[l].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?f.prefix:f.delimiter)+p}}else{if(p=f.asterisk?a(d):s(d),!t[l].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');o+=f.prefix+p}}else o+=f}return o}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}function d(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(v(e[o],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),t)}function h(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){g(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=!1!==n.end,i="",a=0;a<e.length;a++){var c=e[a];if("string"==typeof c)i+=u(c);else{var s=u(c.prefix),p="(?:"+c.pattern+")";t.push(c),c.repeat&&(p+="(?:"+s+p+")*"),p=c.optional?c.partial?s+"("+p+")?":"(?:"+s+"("+p+"))?":s+"("+p+")",i+=p}}var d=u(n.delimiter||"/"),h=i.slice(-d.length)===d;return r||(i=(h?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),i+=o?"$":r&&h?"":"(?="+d+"|$)",l(new RegExp("^"+i,f(n)),t)}function v(e,t,n){return g(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):g(e)?d(e,t,n):h(e,t,n)}var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=n(5);e.exports=v,e.exports.parse=r,e.exports.compile=o,e.exports.tokensToFunction=c,e.exports.tokensToRegExp=m;var b=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},function(e,t,n){var r=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["",""],["",""]),o=n(7),i=function(e,t,r){return n(8)("./"+e+".js").then(function(e){return e(t,r)})},a={about:function(e,t){return i("about",e,t)},summary:function(e,t){return i("summary",e,t)},item:function(e,t){return i("item",e,t)},comment:function(e,t){return i("comment",e,t)},user:function(e,t){return i("user",e,t)},next:function(e,t){return i("next",e,t)}},c={main:o.bind(document.querySelector("main")),user:o.wire(),next:o.wire()};e.exports={main:function(e){return c.main(r,e)},item:function(e){return a.item(o.wire(e),e)},comment:function(e){return a.comment(o.wire(e),e)},about:function(e){return a.about(c.main,e)},summary:function(e){return a.summary(o.wire(e),e)},header:function(e){return[].forEach.call(document.querySelectorAll("header a"),function(t){t.classList[~t.getAttribute("href").indexOf("/"+e)?"add":"remove"]("selected")})},user:function(e){return a.user(c.user,e)},next:function(e){return a.next(c.next,e)}}},function(e,t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){"use strict";function t(e){var t=ye.get(this);return t&&t.template===(Y?H(e):e)||(t=$.apply(this,arguments),ye.set(this,t)),P.apply(t.updates,arguments),this}function r(e,t){for(var n=0,r=e.length,o=t.length;n<r;){if(!(n<o&&e[n]===t[n]))return n;n++}return n===o?-1:n}function o(e,t){switch(t.nodeType){case I:var n=e.childNodes;if(n[0]===t){i(n,1);break}a(e,t);break;case F:-1!==r(e.childNodes,t.childNodes)&&a(e,t);break;case B:e.textContent=t.textContent}}function i(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function a(e,t){e.textContent="",e.appendChild(t)}function c(e,t,n){var r=k(e);0!==n?(i(e.childNodes,n),ue(r,t.slice(n)),e.appendChild(r)):(ue(r,t),a(e,r))}function u(e){return function t(a){switch(void 0===a?"undefined":n(a)){case"string":case"number":case"boolean":e.innerHTML=a;break;case"function":t(a(e,e.children,0));break;default:if(ae(a)){var u,s=a.length;if(1===s)t(a[0]);else switch(0===s?"":n(a[0])){case"string":case"number":case"boolean":t(a.join(""));break;case"function":var l=te.call(e.children);for(u=0,s=a.length;u<s;u++)a[u]=a[u](e,l,u);i(l,u),t(a.concat.apply([],a));break;case"object":if(ae(a[0])&&(a=a.concat.apply([],a)),N(a[0])){Promise.all(a).then(t);break}default:u=r(e.childNodes,a),-1!==u&&c(e,a,u)}}else N(a)?a.then(t):o(e,a)}}}function s(e,t){var n,r=e.name,o=e.ownerElement,i=/^on/.test(r),a=r in o&&!(W in o||V.test(r)),c=i?r.slice(2):"";return(a||i)&&t.push(o,r),i?function(e){n!==e&&(n&&o.removeEventListener(c,n,!1),n=e,e&&o.addEventListener(c,e,!1))}:a?function(e){n!==e&&(n=e,o[r]!==e&&(o[r]=e))}:function(t){n!==t&&(n=t,e.value!==t&&(e.value=t))}}function l(e){var t;return function(n){t!==n&&(t=n,e.textContent=n)}}function f(e,t){return function r(o){switch(void 0===o?"undefined":n(o)){case"string":case"number":case"boolean":i(t,0);var a=y(e,o);t=te.call(a.childNodes),e.parentNode.insertBefore(a,e);break;case"function":r(o(e.parentNode,t,0));break;default:if(ae(o))if(0===o.length)i(t,0),t=[];else switch(n(o[0])){case"string":case"number":case"boolean":r(o.join(""));break;case"function":for(var c=e.parentNode,u=0,s=o.length;u<s;u++)o[u]=o[u](c,t,u);r(o.concat.apply([],o));break;case"object":if(ae(o[0])&&(o=o.concat.apply([],o)),N(o[0])){Promise.all(o).then(r);break}default:T(e,t,o)}else N(o)?o.then(r):T(e,t,o.nodeType===F?te.call(o.childNodes):[o])}}}function p(e,t){for(var n,r=Z?K:Q,o=e.attributes,i=0,a=o.length;i<a;i++)n=o[i],n.value===r&&t.push(O("attr",Z?e.attributes[pe.shift()]:n))}function d(e,t){for(var n,r,o=e.childNodes,i=o.length,a=0;a<i;a++)switch(n=o[a],n.nodeType){case I:p(n,t),d(n,t);break;case U:n.textContent===K&&(1===i?t.push(O("any",e)):!(a<1||o[a-1].nodeType===I)||a+1!==i&&o[a+1].nodeType!==I?(r=w(n,""),n.parentNode.replaceChild(r,n),t.push(O("text",r))):t.push(O("virtual",n)));break;case B:V.test(e.nodeName)&&n.textContent===Q&&t.push(O("text",e))}}function h(e){return re[e]}function m(e){for(var t,n=[],r=e.childNodes,o=0,i=r.length;o<i;o++)t=r[o],t.nodeType!==I&&0===ce.call(t.textContent).length||n.push(t);return 1===n.length?n[0]:n}function v(e){return e.createDocumentFragment()}function y(e,t){return(W in e?b:g)(e,t)}function g(e,t){var n,r=e.ownerDocument,o=r.createElement("template"),i="content"in o,a=!1;if(i||(n=v(r),a=/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t)),a){var c=RegExp.$1;o.innerHTML="<table>"+t+"</table>",ue(n,te.call(o.querySelectorAll(c)))}else o.innerHTML=t,i?n=o.content:ue(n,te.call(o.childNodes));return n}function b(e,t){var n=e.ownerDocument,r=v(n),o=n.createElementNS(J,"svg");return o.innerHTML=t,ue(r,te.call(o.childNodes)),r}function w(e,t){return e.ownerDocument.createTextNode(t)}function x(e,t,n,r){for(var o=e,i=e.ownerDocument,a=n.path,c=fe(t,a),u=0,s=a.length;u<s;u++)switch(a[u++]){case"attributes":var l=c.name;e.hasAttribute(l)||e.setAttribute(l,""),o=e.attributes[l];break;case"childNodes":switch(n.type){case"text":var f=E(c,"previous"),p=E(c,"next");do{if(!(o=e.firstChild)||o.nodeType!==B)break;e.removeChild(o)}while(o);var d=v(i);f.length&&d.appendChild(w(e,f)),o=d.appendChild(w(e,"")),p.length&&d.appendChild(w(e,p)),e.insertBefore(d,e.firstChild);break;case"virtual":var h=le(e),m=le(c.parentNode);o=ve(c);var f=o?a.indexOf.call(m,o)+1:-1;o=me(c);var p=o?a.indexOf.call(m,o):-1;switch(o=i.createComment(K),!0){case p<0:p=h.length;break;case f<0:f=0;default:p=-(m.length-p)}r.push.apply(r,te.call(h,f,p)),e.insertBefore(o,r.length?me(r[r.length-1]):te.call(h,p)[0]),0===r.length&&S(e,o)}break;default:o=le(e)[a[u]]||e.appendChild(e.ownerDocument.createElement(fe(t,a.slice(0,u+1)).nodeName)),e=o}return o}function k(e){return v(e.ownerDocument)}function E(e,t){for(var n=[],r="next"===t?n.push:n.unshift;;){if(!(e=e[t+"Sibling"])||e.nodeType!==B)return n.join("");r.call(n,e.textContent)}}function N(e){return null!=e&&"then"in e}function j(e){for(var t=0,n=e.length;t<n;t++)e[t++].removeAttribute(e[t])}function S(e,t){var n=t.previousSibling;n&&n.nodeType===B&&(e.removeChild(n),S(e,t))}function C(e,t,n,r){var o;switch(e){case"any":o=u(t);break;case"attr":o=s(t,n);break;case"text":o=l(t);break;case"virtual":o=f(t,r)}return o}function T(e,t,n){var o=r(t,n);if(-1!==o){var a=k(e);i(t,o),t.splice(o),n=n.slice(o),ue(a,n),e.parentNode.insertBefore(a,e),t.push.apply(t,n)}}function O(e,t){return{type:e,path:A(t)}}function L(e){var t=[],n=e.join(Q);Z&&(pe=[],n=n.replace(de,he));var r=y(this,n),o={fragment:r,paths:t};return d(r,t),be.set(e,o),o}function A(e){var t,n=[];switch(e.nodeType){case I:case F:t=e;break;case B:case U:t=e.parentNode,n.unshift("childNodes",n.indexOf.call(t.childNodes,e));break;case z:default:t=e.ownerElement,n.unshift("attributes",e.name)}for(e=t;t=t.parentNode;e=t)n.unshift("children",n.indexOf.call(le(t),e));return n}function M(e,t){for(var n,r,o=[],a=[],c=0,u=t.length;c<u;c++)n=t[c],r=fe(e,n.path),r.nodeType===F&&(i(r.childNodes,0),r=this),o[c]=C(n.type,r,a,[]);return j(a),o}function _(e,t){for(var n,r,o=[],i=[],a=0,c=t.length;a<c;a++)r=[],n=t[a],o[a]=C(n.type,x(this,e,n,r),i,r);return j(i),o}function P(){for(var e=1,t=arguments.length;e<t;e++)this[e-1](arguments[e])}function $(e){Y&&(e=H(e));var t,n=be.get(e)||L.call(this,e);if(we){var r=xe(n.fragment);t=M.call(this,r,n.paths),a(this,r)}else t=_.call(this,n.fragment,n.paths);return{template:e,updates:t}}function D(e){function n(n){c=v(n),a="svg"===e?n.createElementNS(J,"svg"):c,u=t.bind(a)}function r(){return s&&(s=!1,"svg"===e&&ue(c,te.call(a.childNodes)),i=m(c)),i}var o,i,a,c,u,s,l;return"adopt"===e?function(i){var f=arguments;return Y&&(i=H(i)),l!==i&&(s=!0,l=i,o=function(o,i,l){return s&&(l<i.length?(a=i[l],c={ownerDocument:a.ownerDocument,childNodes:[a],children:[a]},u=t.adopt(c)):(W in o&&(e="svg"),n(o.ownerDocument))),u.apply(null,f),r()}),o}:function(e){return Y&&(e=H(e)),l!==e&&(s=!0,l=e,n(t.document)),u.apply(null,arguments),r()}}function R(e,t){var n=ge.get(e),r=t.indexOf(":"),o=t;return-1<r&&(o=t.slice(r+1),t=t.slice(0,r)||"html"),n||(n={},ge.set(e,n)),n[o]||(n[o]=D(t))}/*! (c) 2017 Andrea Giammarchi @WebReflection, (MIT) */
t.document=e,t.adopt=function(e){return function(){return we=!1,t.apply(e,arguments),we=!0,e}},t.escape=function(e){return e.replace(ne,h)},t.wire=function(e,t){return arguments.length<1?D("html"):null==e?D(t||"html"):R(e,t||"html")};var q,H,I=1,z=2,B=3,U=8,F=11,W="ownerSVGElement",J="http://www.w3.org/2000/svg",V=/^style$/i,G="_hyper_html: ",K=G+(Math.random()*new Date|0)+";",Q="\x3c!--"+K+"--\x3e",X=v(e),Y="object"===("undefined"==typeof navigator?"undefined":n(navigator))&&/Firefox\/(\d+)/.test(navigator.userAgent)&&parseFloat(RegExp.$1)<55,Z=function(){var t=e.createElement("p");return t.innerHTML='<i data-i="" class=""></i>',/class/i.test(t.firstChild.attributes[0].name)}(),ee=!("children"in X),te=[].slice,ne=/[&<>'"]/g,re={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},oe=("undefined"==typeof WeakMap?"undefined":n(WeakMap))===(void 0===oe?"undefined":n(oe))?function(){return{get:function(e){return e[G]},set:function(e,t){Object.defineProperty(e,G,{configurable:!0,value:t})}}}:WeakMap,ie=("undefined"==typeof Map?"undefined":n(Map))===(void 0===ie?"undefined":n(ie))?function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}}:Map,ae=Array.isArray||function(){var e={}.toString,t=e.call([]);return function(n){return e.call(n)===t}}(),ce=G.trim||function(){return this.replace(/^\s+|\s+$/g,"")};Y&&(q=Object.create(null),H=function(e){var t=e.join(K);return q[t]||(q[t]=e)});var ue="append"in X?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])},se=t.bind;t.bind=function(){return se.apply(t,arguments)};var le=ee?function(e){for(var t,n=[],r=e.childNodes,o=0,i=0,a=r.length;i<a;i++)t=r[i],t.nodeType===I&&(n[o++]=t);return n}:function(e){return e.children},fe=Z||ee?function(e,t){for(var n,r=0,o=t.length;r<o;r++)switch(n=t[r++]){case"children":e=le(e)[t[r]];break;default:e=e[n][t[r]]}return e}:function(e,t){for(var n=0,r=t.length;n<r;n++)e=e[t[n++]][t[n]];return e};if(Z)var pe,de=new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+Q+"\\2","g"),he=function(e,t,n){return pe.push(t.slice(1,-1)),t+n+K+n};var me=Z?function(e){return e=e.nextSibling,e&&e.nodeType===I?e:void 0}:function(e){return e.nextElementSibling},ve=Z?function(e){return e=e.previousSibling,e&&e.nodeType===I?e:void 0}:function(e){return e.previousElementSibling},ye=new oe,ge=new oe,be=new ie,we=!0,xe=function(){return X.appendChild(w(X,"g")),X.appendChild(w(X,"")),1===X.cloneNode(!0).childNodes.length?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=0,o=n.length;r<o;r++)t.appendChild(xe(n[r]));return t}:function(e){return e.cloneNode(!0)}}();return t}(document);try{e.exports=r}catch(e){}},function(e,t,n){function r(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./about.js":[9,7],"./comment.js":[10,6],"./header.js":[11,5],"./index.js":[12,4],"./item.js":[13,3],"./next.js":[14,2],"./summary.js":[15,1],"./user.js":[16,0]};r.keys=function(){return Object.keys(o)},r.id=8,e.exports=r}]);