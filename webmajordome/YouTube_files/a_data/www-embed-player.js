(function(){'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function fa(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ia=fa(this);function u(a,b){if(b)a:{var c=ia;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ea(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ea(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ia[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ea(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ka(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||oa});
var pa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=pa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ra;
if("function"==typeof Object.setPrototypeOf)ra=Object.setPrototypeOf;else{var sa;a:{var ta={a:!0},ua={};try{ua.__proto__=ta;sa=ua.a;break a}catch(a){}sa=!1}ra=sa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var va=ra;
function w(a,b){a.prototype=pa(b.prototype);a.prototype.constructor=a;if(va)va(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function wa(){this.s=!1;this.m=null;this.i=void 0;this.h=1;this.G=this.l=0;this.B=this.j=null}
function xa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
wa.prototype.ga=function(a){this.i=a};
function ya(a,b){a.j={exception:b,md:!0};a.h=a.l||a.G}
wa.prototype.return=function(a){this.j={return:a};this.h=this.G};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.v=function(a){this.h=a};
function za(a,b,c){a.l=b;void 0!=c&&(a.G=c)}
function Aa(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.B.splice(0)[0];(b=a.j=a.j||b)?b.md?a.h=a.l||a.G:void 0!=b.v&&a.G<b.v?(a.h=b.v,a.j=null):a.h=a.G:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.m;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.s=!1,e;var f=e.value}catch(g){return a.h.m=null,ya(a.h,g),Fa(a)}a.h.m=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.s=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.s=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.md)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m.next,b,a.h.ga):(a.h.ga(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.m?b=Ea(a,a.h.m["throw"],b,a.h.ga):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return qa});
u("Reflect.setPrototypeOf",function(a){return a?a:va?function(b,c){try{return va(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.s=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ia.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.m)}};
b.prototype.W=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.da(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.S(g):this.G(g)}};
b.prototype.S=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ea(h,g):this.G(g)};
b.prototype.m=function(g){this.ga(2,g)};
b.prototype.G=function(g){this.ga(1,g)};
b.prototype.ga=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.B()};
b.prototype.Y=function(){var g=this;e(function(){if(g.R()){var h=ia.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.R=function(){if(this.s)return!1;var g=ia.CustomEvent,h=ia.Event,k=ia.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ia.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.da=function(g){var h=this.l();g.Xb(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,r){return"function"==typeof t?function(x){try{l(t(x))}catch(y){n(y)}}:r}
var l,n,p=new b(function(t,r){l=t;n=r});
this.Xb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Xb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Xb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(y){t[x]=y;r--;0==r&&l(t)}}
var t=[],r=0;do t.push(void 0),r++,d(k.value).Xb(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!na(k,g)){var l=new c;ea(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ja(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&na(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ja(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||va});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ja(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ia});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},B=this||self;function C(a,b,c){a=a.split(".");c=c||B;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function D(a,b){a=a.split(".");b=b||B;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ta(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ua(a,b,c){Ua=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa:Ta;return Ua.apply(null,arguments)}
function Va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Wa(){return Date.now()}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;function xb(){if(void 0===wb){var a=null,b=B.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){B.console&&B.console.error(c.message)}wb=a}else wb=a}return wb}
;function yb(){}
function zb(a){return new yb(Ab,a)}
var Ab={};zb("");var Bb={};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h.toString()};function Db(a){this.h=a}
Db.prototype.toString=function(){return this.h+""};
function Eb(a){if(a instanceof Db&&a.constructor===Db)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Fb={};function Gb(a){var b=xb();a=b?b.createScriptURL(a):a;return new Db(a,Fb)}
;var Hb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Ib(a){this.h=a}
Ib.prototype.toString=function(){return this.h.toString()};
var Jb={},Kb=new Ib("about:invalid#zClosurez",Jb);var Lb,Mb=D("CLOSURE_FLAGS"),Nb=Mb&&Mb[610401301];Lb=null!=Nb?Nb:!1;function Ob(){var a=B.navigator;return a&&(a=a.userAgent)?a:""}
var Pb,Qb=B.navigator;Pb=Qb?Qb.userAgentData||null:null;function Rb(a){return Lb?Pb?Pb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Ob().indexOf(a)}
;function Sb(){return Lb?!!Pb&&0<Pb.brands.length:!1}
function Tb(){return Sb()?!1:E("Opera")}
function Ub(){return Sb()?!1:E("Trident")||E("MSIE")}
function Vb(){return E("Firefox")||E("FxiOS")}
function Wb(){return Sb()?Rb("Chromium"):(E("Chrome")||E("CriOS"))&&!(Sb()?0:E("Edge"))||E("Silk")}
;function Xb(a){this.h=a}
Xb.prototype.toString=function(){return this.h.toString()};function Yb(){a:{var a=B.document;if(a.querySelector&&(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Zb.test(a))break a;a=""}return a}
var Zb=/^[\w+/_-]+[=]{0,2}$/;function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function hc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)ic(a[b],a[b+1],c);return c.join("&")}
function kc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function lc(a,b){var c=2==arguments.length?jc(arguments[1],0):jc(arguments,1);return hc(a,c)}
function mc(a,b){b=kc(b);return hc(a,b)}
function nc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return hc(a,b+c)}
function oc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var pc=/#|$/,qc=/[?&]($|#)/;function rc(a,b){for(var c=a.search(pc),d=0,e,f=[];0<=(e=oc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(qc,"$1")}
;function sc(a){this.h=a}
;function tc(a,b,c){this.i=a;this.l=b;this.h=c||[];this.pb=new Map}
m=tc.prototype;m.Md=function(a){var b=Ia.apply(1,arguments),c=this.yc(b);c?c.push(new sc(a)):this.yd(a,b)};
m.yd=function(a){var b=this.getKey(Ia.apply(1,arguments));this.pb.set(b,[new sc(a)])};
m.yc=function(){var a=this.getKey(Ia.apply(0,arguments));return this.pb.has(a)?this.pb.get(a):void 0};
m.de=function(){var a=this.yc(Ia.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.pb.clear()};
m.getKey=function(){var a=Ia.apply(0,arguments);return a?a.join(","):"key"};function uc(a,b){tc.call(this,a,3,b)}
w(uc,tc);uc.prototype.j=function(a){var b=Ia.apply(1,arguments),c=0,d=this.de(b);d&&(c=d.h);this.yd(c+a,b)};function vc(a,b){tc.call(this,a,2,b)}
w(vc,tc);vc.prototype.record=function(a){this.Md(a,Ia.apply(1,arguments))};function wc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function xc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?xc.apply(null,d):wc(d)}}
;function F(){this.ga=this.ga;this.G=this.G}
F.prototype.ga=!1;F.prototype.Z=function(){return this.ga};
F.prototype.dispose=function(){this.ga||(this.ga=!0,this.M())};
function yc(a,b){zc(a,Va(wc,b))}
function zc(a,b){a.ga?b():(a.G||(a.G=[]),a.G.push(b))}
F.prototype.M=function(){if(this.G)for(;this.G.length;)this.G.shift()()};function Ac(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ac.prototype.stopPropagation=function(){this.j=!0};
Ac.prototype.preventDefault=function(){this.defaultPrevented=!0};function Bc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Cc(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||B.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Dc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ec[c])c=Ec[c];else{c=String(c);if(!Ec[c]){var f=/function\s+([^\(]+)/m.exec(c);Ec[c]=f?f[1]:"[Anonymous]"}c=Ec[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Dc(a,b){b||(b={});b[Fc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Fc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Dc(a,b));return c}
function Fc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ec={};var Gc=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
B.addEventListener("test",c,b);B.removeEventListener("test",c,b)}catch(d){}return a}();function Hc(){return Lb?!!Pb&&!!Pb.platform:!1}
function Ic(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function Jc(a){Jc[" "](a);return a}
Jc[" "]=function(){};var Nc=Tb(),Oc=Ub(),Pc=E("Edge"),Qc=E("Gecko")&&!(-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),Rc=-1!=Ob().toLowerCase().indexOf("webkit")&&!E("Edge");Rc&&E("Mobile");Hc()||E("Macintosh");Hc()||E("Windows");(Hc()?"Linux"===Pb.platform:E("Linux"))||Hc()||E("CrOS");var Sc=B.navigator||null;Sc&&(Sc.appVersion||"").indexOf("X11");var Tc=Hc()?"Android"===Pb.platform:E("Android");Ic();E("iPad");E("iPod");Ic()||E("iPad")||E("iPod");Ob().toLowerCase().indexOf("kaios");
function Uc(){var a=B.document;return a?a.documentMode:void 0}
var Vc;a:{var Wc="",Xc=function(){var a=Ob();if(Qc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Pc)return/Edge\/([\d\.]+)/.exec(a);if(Oc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Rc)return/WebKit\/(\S+)/.exec(a);if(Nc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Xc&&(Wc=Xc?Xc[1]:"");if(Oc){var Yc=Uc();if(null!=Yc&&Yc>parseFloat(Wc)){Vc=String(Yc);break a}}Vc=Wc}var Zc=Vc,$c;if(B.document&&Oc){var ad=Uc();$c=ad?ad:parseInt(Zc,10)||void 0}else $c=void 0;var bd=$c;function cd(a,b){Ac.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(cd,Ac);var dd={2:"touch",3:"pen",4:"mouse"};
cd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Qc){a:{try{Jc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:dd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&cd.Aa.preventDefault.call(this)};
cd.prototype.stopPropagation=function(){cd.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
cd.prototype.preventDefault=function(){cd.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ed="closure_listenable_"+(1E6*Math.random()|0);var fd=0;function gd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++fd;this.Qb=this.Wb=!1}
function hd(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function id(a){this.src=a;this.listeners={};this.h=0}
id.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=jd(a,b,d,e);-1<g?(b=a[g],c||(b.Wb=!1)):(b=new gd(b,this.src,f,!!d,e),b.Wb=c,a.push(b));return b};
id.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=jd(e,b,c,d);return-1<b?(hd(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function kd(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(hd(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function jd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var ld="closure_lm_"+(1E6*Math.random()|0),md={},nd=0;function od(a,b,c,d,e){if(d&&d.once)pd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=qd(c),a&&a[ed]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):rd(a,b,c,!1,d,e)}
function rd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=sd(a);h||(a[ld]=h=new id(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=td();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ud(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");nd++}}
function td(){function a(c){return b.call(a.src,a.listener,c)}
var b=vd;return a}
function pd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pd(a,b[f],c,d,e);else c=qd(c),a&&a[ed]?a.h.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):rd(a,b,c,!0,d,e)}
function wd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)wd(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=qd(c),a&&a[ed])?a.h.remove(String(b),c,d,e):a&&(a=sd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=jd(b,c,d,e)),(c=-1<a?b[a]:null)&&xd(c))}
function xd(a){if("number"!==typeof a&&a&&!a.Qb){var b=a.src;if(b&&b[ed])kd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ud(c),d):b.addListener&&b.removeListener&&b.removeListener(d);nd--;(c=sd(b))?(kd(c,a),0==c.h&&(c.src=null,b[ld]=null)):hd(a)}}}
function ud(a){return a in md?md[a]:md[a]="on"+a}
function vd(a,b){if(a.Qb)a=!0;else{b=new cd(b,this);var c=a.listener,d=a.cc||a.src;a.Wb&&xd(a);a=c.call(d,b)}return a}
function sd(a){a=a[ld];return a instanceof id?a:null}
var yd="__closure_events_fn_"+(1E9*Math.random()>>>0);function qd(a){if("function"===typeof a)return a;a[yd]||(a[yd]=function(b){return a.handleEvent(b)});
return a[yd]}
;function zd(){F.call(this);this.h=new id(this);this.Ia=this;this.ea=null}
Xa(zd,F);zd.prototype[ed]=!0;m=zd.prototype;m.addEventListener=function(a,b,c,d){od(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){wd(this,a,b,c,d)};
function Ad(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Ia;c=b.type||b;"string"===typeof b?b=new Ac(b,a):b instanceof Ac?b.target=b.target||a:(e=b,b=new Ac(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Bd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Bd(g,c,!0,b)&&e,b.j||(e=Bd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Bd(g,c,!1,b)&&e}
m.M=function(){zd.Aa.M.call(this);this.removeAllListeners();this.ea=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,hd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Bd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Wb&&kd(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Cd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Cd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Dd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Ed(a,b){return a+Math.random()*(b-a)}
;function Fd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Fd.prototype;m.clone=function(){return new Fd(this.x,this.y)};
m.equals=function(a){return a instanceof Fd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Gd(a,b){this.width=a;this.height=b}
m=Gd.prototype;m.clone=function(){return new Gd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.Lb=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Hd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Id(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Jd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Kd;function Ld(){var a=B.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Id("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ua(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Zc;c.Zc=null;e()}};
return function(e){d.next={Zc:e};d=d.next;b.port2.postMessage(0)}}return function(e){B.setTimeout(e,0)}}
;function Md(a){B.setTimeout(function(){throw a;},0)}
;function Nd(){this.i=this.h=null}
Nd.prototype.add=function(a,b){var c=Od.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Nd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Od=new Cd(function(){return new Pd},function(a){return a.reset()});
function Pd(){this.next=this.scope=this.h=null}
Pd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Pd.prototype.reset=function(){this.next=this.scope=this.h=null};var Qd,Rd=!1,Sd=new Nd;function Td(a,b){Qd||Ud();Rd||(Qd(),Rd=!0);Sd.add(a,b)}
function Ud(){if(B.Promise&&B.Promise.resolve){var a=B.Promise.resolve(void 0);Qd=function(){a.then(Vd)}}else Qd=function(){var b=Vd;
"function"!==typeof B.setImmediate||B.Window&&B.Window.prototype&&(Sb()||!E("Edge"))&&B.Window.prototype.setImmediate==B.setImmediate?(Kd||(Kd=Ld()),Kd(b)):B.setImmediate(b)}}
function Vd(){for(var a;a=Sd.remove();){try{a.h.call(a.scope)}catch(b){Md(b)}Dd(Od,a)}Rd=!1}
;function Wd(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.G=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Xd(b,2,c)},function(c){Xd(b,3,c)})}catch(c){Xd(this,3,c)}}
function Yd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Yd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Zd=new Cd(function(){return new Yd},function(a){a.reset()});
function $d(a,b,c){var d=Zd.get();d.i=a;d.h=b;d.context=c;return d}
function ae(a){return new Wd(function(b,c){c(a)})}
Wd.prototype.then=function(a,b,c){return be(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Wd.prototype.$goog_Thenable=!0;m=Wd.prototype;m.pc=function(a,b){return be(this,null,a,b)};
m.catch=Wd.prototype.pc;m.cancel=function(a){if(0==this.h){var b=new ce(a);Td(function(){de(this,b)},this)}};
function de(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?de(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):ee(c),fe(c,e,3,b)))}a.j=null}else Xd(a,3,b)}
function ge(a,b){a.i||2!=a.h&&3!=a.h||he(a);a.l?a.l.next=b:a.i=b;a.l=b}
function be(a,b,c,d){var e=$d(null,null,null);e.child=new Wd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ce?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ge(a,e);return e.child}
m.cf=function(a){this.h=0;Xd(this,2,a)};
m.df=function(a){this.h=0;Xd(this,3,a)};
function Xd(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.cf,f=a.df;if(d instanceof Wd){ge(d,$d(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if("function"===typeof k){ie(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,he(a),3!=b||c instanceof ce||je(a,c))}}
function ie(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function he(a){a.G||(a.G=!0,Td(a.Yd,a))}
function ee(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Yd=function(){for(var a;a=ee(this);)fe(this,a,this.h,this.s);this.G=!1};
function fe(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,ke(b,c,d);else try{b.j?b.i.call(b.context):ke(b,c,d)}catch(e){le.call(null,e)}Dd(Zd,b)}
function ke(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function je(a,b){a.m=!0;Td(function(){a.m&&le.call(null,b)})}
var le=Md;function ce(a){Za.call(this,a)}
Xa(ce,Za);ce.prototype.name="cancel";function me(a,b){zd.call(this);this.j=a||1;this.i=b||B;this.l=Ua(this.af,this);this.m=Wa()}
Xa(me,zd);m=me.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.af=function(){if(this.enabled){var a=Wa()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),Ad(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Wa())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.M=function(){me.Aa.M.call(this);this.stop();delete this.i};
function ne(a,b,c){if("function"===typeof a)c&&(a=Ua(a,c));else if(a&&"function"==typeof a.handleEvent)a=Ua(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:B.setTimeout(a,b||0)}
;function oe(a){F.call(this);this.B=a;this.i=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.h=new me(this.flushInterval);this.h.listen("tick",this.mb,!1,this);yc(this,this.h);this.m=!1}
w(oe,F);m=oe.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function pe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.mb()}
m.mb=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.pb.size});
a.length&&this.B.flush(a,this.m);qe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Uc=function(a){var b=Ia.apply(1,arguments);this.i.has(a)||this.i.set(a,new uc(a,b))};
m.Vc=function(a){var b=Ia.apply(1,arguments);this.i.has(a)||this.i.set(a,new vc(a,b))};
function re(a,b){return a.s.has(b)?void 0:a.i.get(b)}
m.qc=function(a){this.Kd.apply(this,[a,1].concat(ma(Ia.apply(1,arguments))))};
m.Kd=function(a,b){var c=Ia.apply(2,arguments),d=re(this,a);d&&d instanceof uc&&(d.j(b,c),pe(this))};
m.record=function(a,b){var c=Ia.apply(2,arguments),d=re(this,a);d&&d instanceof vc&&(d.record(b,c),pe(this))};
function qe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function se(a){this.h=a;this.h.Uc("/client_streamz/bg/fiec",{bb:3,ab:"rk"},{bb:2,ab:"ec"},{bb:3,ab:"em"})}
function te(a,b,c,d){a.h.qc("/client_streamz/bg/fiec",b,c,d)}
function ue(a){this.h=a;this.h.Vc("/client_streamz/bg/fil",{bb:3,ab:"rk"},{bb:3,ab:"ke"})}
ue.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ve(a){this.h=a;this.h.Uc("/client_streamz/bg/fsc",{bb:3,ab:"rk"})}
function we(a){this.h=a;this.h.Vc("/client_streamz/bg/fsl",{bb:3,ab:"rk"})}
we.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var xe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ye(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=ze(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Ae(a,h),d+=Ae(a,h+4),e+=Ae(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return xe.toString(e)}
function ze(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Ae(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Vb();var Be=Ic()||E("iPod"),Ce=E("iPad");!E("Android")||Wb()||Vb()||Tb()||E("Silk");Wb();var De=E("Safari")&&!(Wb()||(Sb()?0:E("Coast"))||Tb()||(Sb()?0:E("Edge"))||(Sb()?Rb("Microsoft Edge"):E("Edg/"))||(Sb()?Rb("Opera"):E("OPR"))||Vb()||E("Silk")||E("Android"))&&!(Ic()||E("iPad")||E("iPod"));var Ee={},Fe=null;function Ge(a,b){Na(a);void 0===b&&(b=0);He();b=Ee[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Ie(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Je(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Je(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Fe[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
He();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function He(){if(!Fe){Fe={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ee[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===Fe[f]&&(Fe[f]=e)}}}}
;var Ke="undefined"!==typeof Uint8Array,Le=!Oc&&"function"===typeof btoa;function Me(a){if(!Le)return Ge(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ne=/[-_.]/g,Oe={"-":"+",_:"/",".":"="};function Pe(a){return Oe[a]||""}
function Qe(a){return Ke&&null!=a&&a instanceof Uint8Array}
var Re={};var Se;function Te(a){if(a!==Re)throw Error("illegal external caller");}
function Ue(a,b){Te(b);this.value_=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Ue.prototype.Lb=function(){return null==this.value_};
Ue.prototype.sizeBytes=function(){Te(Re);var a=this.value_;if(null!=a&&!Qe(a))if("string"===typeof a)if(Le){Ne.test(a)&&(a=a.replace(Ne,Pe));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ie(a);else Ma(a),a=null;return(a=null==a?a:this.value_=a)?a.length:0};function Ve(a){return Array.prototype.slice.call(a)}
;var We="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,ma(Object.values({Ff:1,Df:2,Cf:4,If:8,Hf:16,Gf:32,uf:64,Jf:128,Bf:256,Af:512,Ef:1024,zf:2048})));var Xe=We?function(a,b){a[We]|=b}:function(a,b){void 0!==a.Ra?a.Ra|=b:Object.defineProperties(a,{Ra:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ye(a){var b=Ze(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Ve(a)),$e(a,b|1))}
function af(a,b,c){return c?a|b:a&~b}
var Ze=We?function(a){return a[We]|0}:function(a){return a.Ra|0},bf=We?function(a){return a[We]}:function(a){return a.Ra},$e=We?function(a,b){a[We]=b}:function(a,b){void 0!==a.Ra?a.Ra=b:Object.defineProperties(a,{Ra:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function cf(){var a=[];Xe(a,1);return a}
function df(a,b){$e(b,(a|0)&-2303)}
function ef(a,b){$e(b,(a|34)&-2269)}
function ff(a){a=a>>12&1023;return 0===a?536870912:a}
;var gf={};function hf(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var jf;function kf(a,b){if(null==a){if(!b)throw Error();}else if("string"===typeof a)a=a?new Ue(a,Re):Se||(Se=new Ue(null,Re));else if(a.constructor!==Ue)if(Qe(a))a instanceof Uint8Array||Array.isArray(a),a=a.length?new Ue(new Uint8Array(a),Re):Se||(Se=new Ue(null,Re));else throw Error();return a}
var lf,mf=[];$e(mf,55);lf=Object.freeze(mf);function nf(a){if(a&2)throw Error();}
;function of(){var a=Error();Bc(a,"incident");Md(a)}
function pf(a){a=Error(a);Bc(a,"warning");return a}
;function qf(a){return a.displayName||a.name||"unknown type name"}
function rf(a){if(null!=a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ma(a)+": "+a);a=!!a}return a}
var sf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function tf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:sf.test(a)}
function uf(a){if(null!=a){if("number"!==typeof a)throw pf("int32");Number.isFinite(a)||of()}return a}
function vf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return a}
function wf(a){if(null!=a){if(!tf(a))throw pf("int64");a="string"===typeof a?xf(a):yf(a)}return a}
function yf(a){tf(a);return a}
function xf(a){tf(a);return a}
function zf(a){if("string"!==typeof a)throw Error();return a}
function Af(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Bf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+qf(b)+" but got "+(a&&qf(a.constructor)));}
function Cf(a,b,c){if(null!=a&&"object"===typeof a&&a.Ic===gf)return a;if(Array.isArray(a)){var d=Ze(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&$e(a,e);return new b(a)}}
;var Df;function Ef(a,b){Ze(b);Df=b;a=new a(b);Df=void 0;return a}
function Ff(a,b,c){null==a&&(a=Df);Df=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-4190209|(b&1023)<<12)}else{if(!Array.isArray(a))throw Error();d=Ze(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(hf(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Gf(c,b,g),e=1023);d=d&-4190209|(e&1023)<<12;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Gf(c,g,{}),d|=256,b=1023),d=d&-4190209|(b&1023)<<12)}}$e(a,d);return a}
function Gf(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Hf(a,b){return If(b)}
function If(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(Qe(a))return Me(a);if(a instanceof Ue){var b=a.value_;return null==b?"":"string"===typeof b?b:a.value_=Me(b)}}}return a}
;function Jf(a,b,c){a=Ve(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Kf(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Ze(a)&1?void 0:f&&Ze(a)&2?a:Lf(a,b,c,void 0!==d,e,f);else if(hf(a)){var g={},h;for(h in a)g[h]=Kf(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Lf(a,b,c,d,e,f){var g=d||c?Ze(a):0;d=d?!!(g&32):void 0;a=Ve(a);for(var h=0;h<a.length;h++)a[h]=Kf(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Mf(a){return a.Ic===gf?a.toJSON():If(a)}
;function Nf(a,b,c){c=void 0===c?ef:c;if(null!=a){if(Ke&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Ze(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?($e(a,(d|34)&-5),a):Lf(a,Nf,d&4?ef:c,!0,!1,!0)}a.Ic===gf&&(c=a.A,d=bf(c),a=d&2?a:Ef(a.constructor,Of(c,d,!0)));return a}}
function Of(a,b,c){var d=c||b&2?ef:df,e=!!(b&32);a=Jf(a,b,function(f){return Nf(f,e,d)});
Xe(a,32|(c?2:0));return a}
function Pf(a){var b=a.A,c=bf(b);return c&2?Ef(a.constructor,Of(b,c,!1)):a}
;Object.freeze({});function Qf(a,b){a=a.A;return Rf(a,bf(a),b)}
function Rf(a,b,c,d){if(-1===c)return null;if(c>=ff(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function G(a,b,c){var d=a.A,e=bf(d);nf(e);Sf(d,e,b,c);return a}
function Sf(a,b,c,d,e){hf(d);var f=ff(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&$e(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Tf(a){return void 0!==Uf(a,Vf,11,!1)}
function Wf(a,b,c,d){var e=a.A,f=bf(e);nf(f);if(null==c)return Sf(e,f,b),a;var g=Ze(c),h=g,k=!!(2&g)||Object.isFrozen(c),l=!k&&!1;if(!(4&g))for(g=21,k&&(c=Ve(c),h=0,g=Xf(g,f,!0)),k=0;k<c.length;k++)c[k]=d(c[k]);l&&(g=af(g,2,!0));g!==h&&$e(c,g);l&&Object.freeze(c);Sf(e,f,b,c);return a}
function Yf(a,b,c,d){a=a.A;var e=bf(a);nf(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Rf(a,f,k)&&(0!==g&&(f=Sf(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=Sf(a,e,c));Sf(a,e,b,d)}
function Uf(a,b,c,d){a=a.A;var e=bf(a),f=Rf(a,e,c,d);b=Cf(f,b,e);b!==f&&null!=b&&Sf(a,e,c,b,d);return b}
function Zf(a,b,c,d){d=void 0===d?!1:d;b=Uf(a,b,c,d);if(null==b)return b;a=a.A;var e=bf(a);if(!(e&2)){var f=Pf(b);f!==b&&(b=f,Sf(a,e,c,b,d))}return b}
function $f(a,b,c,d){null!=d?Bf(d,b):d=void 0;return G(a,c,d)}
function ag(a,b,c,d){var e=a.A,f=bf(e);nf(f);if(null==d)return Sf(e,f,c),a;for(var g=Ze(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,t=!0,r=0;r<d.length;r++){var x=d[r];Bf(x,b);k||(x=!!(Ze(x.A)&2),p&&(p=!x),t&&(t=x))}k||(g=af(g,5,!0),g=af(g,8,p),g=af(g,16,t),n&&(g=af(g,t?2:2048,!0)),g!==h&&(l&&(d=Ve(d),g=Xf(g,f,!0)),$e(d,g)),n&&Object.freeze(d));Sf(e,f,c,d);return a}
function Xf(a,b,c){a=af(a,2,!!(2&b));a=af(a,32,!!(32&b)&&c);return a=af(a,2048,!1)}
function bg(a,b){a=Qf(a,b);var c;null==a?c=a:tf(a)?"number"===typeof a?c=yf(a):c=xf(a):c=void 0;return c}
function cg(a){a=Qf(a,1);a=null==a?a:tf(a)?"string"===typeof a?xf(a):yf(a):void 0;return a}
function dg(a){return kf(a,!1)}
function eg(a,b,c){null!=c&&(Number.isFinite(c)||of());return G(a,b,c)}
;function fg(a,b,c){this.A=Ff(a,b,c)}
m=fg.prototype;m.toJSON=function(){if(jf)var a=gg(this,this.A,!1);else a=Lf(this.A,Mf,void 0,void 0,!1,!1),a=gg(this,a,!0);return a};
m.serialize=function(){jf=!0;try{return JSON.stringify(this.toJSON(),Hf)}finally{jf=!1}};
function hg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Xe(b,32);return Ef(a,b)}
m.clone=function(){var a=this.A,b=bf(a);return Ef(this.constructor,Of(a,b,!1))};
m.Ic=gf;m.toString=function(){return gg(this,this.A,!1).toString()};
function gg(a,b,c){var d=a.constructor.Ta,e=bf(c?a.A:b),f=ff(e);e=!1;if(d){if(!c){b=Ve(b);var g;if(b.length&&hf(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=bf(a.A);a=ff(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var n=g[k];null==n?g[k]=c?lf:cf():c&&n!==lf&&Ye(n)}else h||(n=void 0,g.length&&hf(n=g[g.length-1])?h=n:g.push(h={})),n=h[k],null==h[k]?h[k]=c?lf:cf():c&&n!==lf&&Ye(n)}d=b.length;if(!d)return b;var p;
if(hf(h=b[d-1])){a:{var t=h;g={};c=!1;for(var r in t)a=t[r],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[r]=a:c=!0;if(c){for(var x in g){t=g;break a}t=null}}t!=h&&(p=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var y=!0}if(!p&&!y)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);t&&b.push(t);return b}
;function ig(a){this.A=Ff(a)}
w(ig,fg);var jg=[1,2,3];function kg(a){this.A=Ff(a)}
w(kg,fg);var lg=[1,2,3];function mg(a){this.A=Ff(a)}
w(mg,fg);mg.Ta=[1];function ng(a){this.A=Ff(a)}
w(ng,fg);ng.Ta=[3,6,4];function og(a){this.A=Ff(a)}
w(og,fg);og.Ta=[1];function pg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function qg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,r=0;64>r;r+=4)t[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],z=e[3],H=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var L=z^x&(y^z);var I=1518500249}else L=x^y^z,I=1859775393;else 60>r?(L=x&y|z&(x|y),I=2400959708):(L=x^y^z,I=3395469782);L=((p<<5|p>>>27)&4294967295)+L+H+I+t[r]&4294967295;H=z;z=y;y=(x<<30|x>>>2)&4294967295;x=p;p=L}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],x=0,y=p.length;x<y;++x)r.push(p.charCodeAt(x));p=r}t||(t=p.length);r=0;if(0==l)for(;r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<t;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<t;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var x=24;0<=x;x-=8)p[t++]=e[r]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ud:function(){for(var p=d(),t="",r=0;r<p.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return t}}}
;function rg(a,b,c){var d=String(B.location.href);return d&&a&&b?[b,sg(pg(d),a,c||null)].join(" "):null}
function sg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),tg(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=tg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function tg(a){var b=qg();b.update(a);return b.Ud().toLowerCase()}
;var ug={};function vg(a){this.h=a||{cookie:""}}
m=vg.prototype;m.isEnabled=function(){if(!B.navigator.cookieEnabled)return!1;if(!this.Lb())return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.eg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Hb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Bc=function(){return wg(this).keys};
m.Lb=function(){return!this.h.cookie};
m.clear=function(){for(var a=wg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function wg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Hb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var xg=new vg("undefined"==typeof document?null:document);function yg(a){return!!ug.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function zg(a){a=void 0===a?!1:a;var b=B.__SAPISID||B.__APISID||B.__3PSAPISID||B.__OVERRIDE_SID;yg(a)&&(b=b||B.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new vg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");yg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Ag(a,b,c,d){(a=B[a])||"undefined"===typeof document||(a=(new vg(document)).get(b));return a?rg(a,c,d):null}
function Bg(a,b){b=void 0===b?!1:b;var c=pg(String(B.location.href)),d=[];if(zg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?B.__SAPISID:B.__APISID;e||"undefined"===typeof document||(e=new vg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?rg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&yg(b)&&((b=Ag("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ag("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Cg(a){this.A=Ff(a)}
w(Cg,fg);Cg.Ta=[2];function Dg(a){zd.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Wa()};
this.j=this.i()}
w(Dg,zd);Dg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Dg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Dg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Dg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),Ad(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Eg(a){this.A=Ff(a)}
w(Eg,fg);function Fg(a){this.A=Ff(a)}
w(Fg,fg);function Gg(a){this.h=this.i=this.j=a}
Gg.prototype.reset=function(){this.h=this.i=this.j};
Gg.prototype.getValue=function(){return this.i};function Hg(a){this.A=Ff(a)}
w(Hg,fg);function Ig(a){this.A=Ff(a)}
w(Ig,fg);Ig.Ta=[1];function Vf(a){this.A=Ff(a)}
w(Vf,fg);var Jg=["platform","platformVersion","architecture","model","uaFullVersion"];new Ig;function Kg(a){this.A=Ff(a)}
w(Kg,fg);function Lg(a){this.A=Ff(a)}
w(Lg,fg);function Mg(a){this.A=Ff(a,34)}
w(Mg,fg);Mg.Ta=[3,20,27];function Ng(a){this.A=Ff(a,19)}
w(Ng,fg);Ng.prototype.Rb=function(a){return eg(this,2,a)};
Ng.Ta=[3,5];function Og(a){this.A=Ff(a,6)}
w(Og,fg);var Pg=function(a){return function(b){return hg(a,b)}}(Og);
Og.Ta=[5];function Qg(a){this.A=Ff(a)}
w(Qg,fg);var Rg;Rg=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=Zf;this.defaultValue=void 0}(175237375,{Tf:0},Qg);function Sg(a){F.call(this);var b=this;this.componentId="";this.i=[];this.na="";this.Ba=this.ea=-1;this.ma=!1;this.B=this.experimentIds=null;this.Y=this.da=this.s=this.l=0;this.Ia=1;this.timeoutMillis=0;this.R=!1;this.logSource=a.logSource;this.rb=a.rb||function(){};
this.j=new Tg(a.logSource,a.vb);this.network=a.network;this.Cb=a.Cb||null;this.bufferSize=1E3;this.nb=Va(Ed,0,1);this.W=a.ef||null;this.sessionIndex=a.sessionIndex||null;this.Jb=a.Jb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.dd;this.vb=a.vb||!1;var c=eg(new Kg,1,1);Ug(this.j,c);this.m=new Gg(1E4);this.h=new Dg(this.m.getValue());a=Vg(this,a.Wc);od(this.h,"tick",a,!1,this);this.S=new Dg(6E5);od(this.S,"tick",a,!1,this);this.Jb||this.S.start();this.vb||(od(document,"visibilitychange",
function(){"hidden"===document.visibilityState&&b.wc()}),od(document,"pagehide",this.wc,!1,this))}
w(Sg,F);function Vg(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
m=Sg.prototype;m.M=function(){this.wc();this.h.stop();this.S.stop();F.prototype.M.call(this)};
function Wg(a){a.W||(a.W=.01>a.nb()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.W}
function Xg(a,b){a.m=new Gg(1>b?1:b);a.h.setInterval(a.m.getValue())}
m.log=function(a){a=a.clone();var b=this.Ia++;a=G(a,21,wf(b));this.componentId&&G(a,26,Af(this.componentId));cg(a)||(b=Date.now(),b=Number.isFinite(b)?b.toString():"0",G(a,1,wf(b)));null==bg(a,15)&&G(a,15,wf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=this.experimentIds.clone(),$f(a,Cg,16,b));b=this.i.length-this.bufferSize+1;0<b&&(this.i.splice(0,b),this.l+=b);this.i.push(a);this.Jb||this.h.enabled||this.h.start()};
m.flush=function(a,b){var c=this;if(0===this.i.length)a&&a();else if(this.R)Yg(this.j,3),Zg(this);else{var d=Date.now();if(this.Ba>d&&this.ea<d)b&&b("throttled");else{Yg(this.j,1);var e=$g(this.j,this.i,this.l,this.s,this.Cb,this.da,this.Y);d={};var f=this.rb();f&&(d.Authorization=f);var g=Wg(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=nc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=nc(g,"pageId",this.pageId));if(f&&this.na===f)b&&b("stale-auth-token");
else{this.i=[];this.h.enabled&&this.h.stop();this.l=0;var h=e.serialize(),k;this.B&&this.B.isSupported(h.length)&&(k=this.B.compress(h));var l={url:g,body:h,Qd:1,Mc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(r){c.m.reset();c.h.setInterval(c.m.getValue());if(r){var x=null;try{var y=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));x=Pg(y)}catch(H){}if(x){r=Number;y="-1";y=void 0===y?"0":y;var z=cg(x);r=r(null!=z?z:y);0<r&&(c.ea=Date.now(),
c.Ba=c.ea+r);x=Rg.ctor?Rg.i(x,Rg.ctor,Rg.h,!0):Rg.i(x,Rg.h,null,!0);if(r=null===x?void 0:x)x=-1,x=void 0===x?0:x,r=vf(Qf(r,1)),x=null!=r?r:x,-1!==x&&(c.ma||Xg(c,x))}}a&&a();c.s=0},p=function(r,x){var y=void 0===y?2:y;
var z=e.A;var H=bf(z),L=!!(2&H),I=H;H=L?1:y;y=1===H;H=2===H;var da=!!(2&I)&&H,S=I;var O=S&2;I=Rf(z,S,3);Array.isArray(I)||(I=lf);var ba=!!(S&32);S=Ze(I);0===S&&ba&&!O?(S|=33,$e(I,S)):S&1||(S|=1,$e(I,S));O&&(O=!1,S&2||(Xe(I,34),O=!!(4&S)),O&&Object.freeze(I));O=I;I=bf(z);var J=Ze(O),ca=!!(2&J);S=!!(4&J);ba=!!(32&J);var ha=ca&&S||!!(2048&J);if(!S){var V=O,ab=I,Kc=!!(2&J);Kc&&(ab=af(ab,2,!0));for(var Lc=!Kc,Mc=!0,X=0,wi=0;X<V.length;X++){var xi=Cf(V[X],Mg,ab);if(xi instanceof Mg){if(!Kc){var Wm=!!(Ze(xi.A)&
2);Lc&&(Lc=!Wm);Mc&&(Mc=Wm)}V[wi++]=xi}}wi<X&&(V.length=wi);J=af(J,4,!0);J=af(J,16,Mc);J=af(J,8,Lc);$e(V,J);ca&&!da&&(Object.freeze(O),ha=!0)}da=J;ca=!!(8&J)||y&&!O.length;if(!L&&!ca){ha&&(O=Ve(O),ha=!1,da=0,J=Xf(J,I,!1),I=Sf(z,I,3,O));L=O;ca=J;for(V=0;V<L.length;V++)J=L[V],ab=Pf(J),J!==ab&&(L[V]=ab);ca=af(ca,8,!0);J=ca=af(ca,16,!L.length)}ha||(y?J=af(J,!O.length||16&J&&(!S||ba)?2:2048,!0):J=af(J,32,!1),J!==da&&$e(O,J),y&&(Object.freeze(O),ha=!0));H&&ha&&(O=Ve(O),J=Xf(J,I,!1),$e(O,J),Sf(z,I,3,O));
z=O;y=bg(e,14);H=c.m;H.h=Math.min(3E5,2*H.h);H.i=Math.min(3E5,H.h+Math.round(.2*(Math.random()-.5)*H.h));c.h.setInterval(c.m.getValue());401===r&&f&&(c.na=f);y&&(c.l+=y);void 0===x&&(x=c.isRetryable(r));x&&(c.i=z.concat(c.i),c.Jb||c.h.enabled||c.h.start());b&&b("net-send-failed",r);++c.s},t=function(){c.network&&c.network.send(l,n,p)};
k?k.then(function(r){l.Mc["Content-Encoding"]="gzip";l.Mc["Content-Type"]="application/binary";l.body=r;l.Qd=2;t()},function(){t()}):t()}}}};
m.wc=function(){ah(this.j,!0);this.flush();ah(this.j,!1)};
function Zg(a){bh(a,function(b,c){b=nc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.R&&!d&&(a.R=!1);return d})}
function bh(a,b){if(0!==a.i.length){var c=rc(Wg(a),"format");c=lc(c,"auth",a.rb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.i.length;++d){var e=a.i.slice(0,32),f=$g(a.j,e,a.l,a.s,a.Cb,a.da,a.Y);if(!b(c,f)){++a.s;break}a.l=0;a.s=0;a.da=0;a.Y=0;a.i=a.i.slice(e.length)}a.h.enabled&&a.h.stop()}}
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Tg(a,b){this.vb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Ng;Number.isInteger(a)&&this.h.Rb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ug(this,new Kg)}
Tg.prototype.Rb=function(a){this.h.Rb(a);return this};
function Ug(a,b){$f(a.h,Kg,1,b);Qf(b,1)||eg(b,1,1);if(!a.vb){b=ch(a);var c=Qf(b,5);(null==c||"string"===typeof c)&&c||G(b,5,Af(a.locale))}a.uach&&(b=ch(a),Zf(b,Ig,9)||$f(b,Ig,9,a.uach))}
function Yg(a,b){Tf(dh(a))&&(a=eh(a),eg(a,1,b))}
function ah(a,b){Tf(dh(a))&&(a=eh(a),G(a,2,rf(b)))}
function dh(a){return Zf(a.h,Kg,1)}
function fh(a,b){var c=void 0===c?Jg:c;b(window,c).then(function(d){a.uach=d;d=ch(a);$f(d,Ig,9,a.uach);return!0}).catch(function(){return!1})}
function ch(a){a=dh(a);var b=Zf(a,Vf,11);b||(b=new Vf,$f(a,Vf,11,b));return b}
function eh(a){a=ch(a);var b=Zf(a,Hg,10);b||(b=new Hg,G(b,2,rf(!1)),$f(a,Hg,10,b));return b}
function $g(a,b,c,d,e,f,g){c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Tf(dh(a))){var h=eh(a);G(h,3,uf(d))}Tf(dh(a))&&(d=eh(a),G(d,4,uf(f)));Tf(dh(a))&&(f=eh(a),G(f,5,uf(g)));a=a.h.clone();g=Date.now().toString();a=G(a,4,wf(g));b=ag(a,Mg,3,b);e&&(a=new Eg,e=G(a,13,uf(e)),a=new Fg,e=$f(a,Eg,2,e),a=new Lg,e=$f(a,Fg,1,e),e=eg(e,2,9),$f(b,Lg,18,e));c&&G(b,14,wf(c));return b}
;function gh(){}
gh.prototype.serialize=function(a){var b=[];hh(this,a,b);return b.join("")};
function hh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),hh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ih(d,c),c.push(":"),hh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ih(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var jh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},kh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ih(a,b){b.push('"',a.replace(kh,function(c){var d=jh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),jh[c]=d);return d}),'"')}
;function lh(){}
lh.prototype.h=null;lh.prototype.getOptions=function(){var a;(a=this.h)||(a={},mh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var nh;function oh(){}
Xa(oh,lh);function ph(a){return(a=mh(a))?new ActiveXObject(a):new XMLHttpRequest}
function mh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
nh=new oh;function qh(a){zd.call(this);this.headers=new Map;this.S=a||null;this.i=!1;this.R=this.I=null;this.l=this.da="";this.j=this.Y=this.s=this.W=!1;this.m=0;this.B=null;this.Ba="";this.ma=this.na=!1}
Xa(qh,zd);var rh=/^https?$/i,sh=["POST","PUT"],th=[];function uh(a,b,c,d,e,f,g){var h=new qh;th.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Sd,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
m=qh.prototype;m.Sd=function(){this.dispose();jb(th,this)};
m.send=function(a,b,c,d){if(this.I)throw Error("[goog.net.XhrIo] Object is active with another request="+this.da+"; newUri="+a);b=b?b.toUpperCase():"GET";this.da=a;this.l="";this.W=!1;this.i=!0;this.I=this.S?ph(this.S):ph(nh);this.R=this.S?this.S.getOptions():nh.getOptions();this.I.onreadystatechange=Ua(this.pd,this);try{this.getStatus(),this.Y=!0,this.I.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();vh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=B.FormData&&a instanceof B.FormData;!(0<=db(sh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.I.setRequestHeader(d,c);this.Ba&&(this.I.responseType=this.Ba);"withCredentials"in this.I&&this.I.withCredentials!==this.na&&(this.I.withCredentials=this.na);try{wh(this),0<this.m&&(this.ma=xh(this.I),this.getStatus(),this.ma?(this.I.timeout=this.m,this.I.ontimeout=Ua(this.Dd,
this)):this.B=ne(this.Dd,this.m,this)),this.getStatus(),this.s=!0,this.I.send(a),this.s=!1}catch(g){this.getStatus(),vh(this,g)}};
function xh(a){return Oc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Dd=function(){"undefined"!=typeof La&&this.I&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),Ad(this,"timeout"),this.abort(8))};
function vh(a,b){a.i=!1;a.I&&(a.j=!0,a.I.abort(),a.j=!1);a.l=b;yh(a);zh(a)}
function yh(a){a.W||(a.W=!0,Ad(a,"complete"),Ad(a,"error"))}
m.abort=function(){this.I&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.I.abort(),this.j=!1,Ad(this,"complete"),Ad(this,"abort"),zh(this))};
m.M=function(){this.I&&(this.i&&(this.i=!1,this.j=!0,this.I.abort(),this.j=!1),zh(this,!0));qh.Aa.M.call(this)};
m.pd=function(){this.Z()||(this.Y||this.s||this.j?Ah(this):this.ze())};
m.ze=function(){Ah(this)};
function Ah(a){if(a.i&&"undefined"!=typeof La)if(a.R[1]&&4==Bh(a)&&2==a.getStatus())a.getStatus();else if(a.s&&4==Bh(a))ne(a.pd,0,a);else if(Ad(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Ch(a))Ad(a,"complete"),Ad(a,"success");else{try{var b=2<Bh(a)?a.I.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";yh(a)}}finally{zh(a)}}}
function zh(a,b){if(a.I){wh(a);var c=a.I,d=a.R[0]?function(){}:null;
a.I=null;a.R=null;b||Ad(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function wh(a){a.I&&a.ma&&(a.I.ontimeout=null);a.B&&(B.clearTimeout(a.B),a.B=null)}
m.isActive=function(){return!!this.I};
m.isComplete=function(){return 4==Bh(this)};
function Ch(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=cc(1,String(a.da)),!a&&B.self&&B.self.location&&(a=B.self.location.protocol.slice(0,-1)),b=!rh.test(a?a.toLowerCase():"");c=b}return c}
function Bh(a){return a.I?a.I.readyState:0}
m.getStatus=function(){try{return 2<Bh(this)?this.I.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Dh(){}
Dh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
uh(a.url,function(d){d=d.target;if(Ch(d)){try{var e=d.I?d.I.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Mc,a.timeoutMillis,a.withCredentials)};function Eh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.j=!1;this.componentId="";this.network=new Dh}
w(Eh,F);Eh.prototype.dd=function(){this.W=!0;return this};function Fh(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;F.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Eh(a,"0"),a.componentId=b,yc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),b=new Sg({logSource:a.logSource,rb:a.rb?a.rb:Bg,sessionIndex:a.sessionIndex,ef:a.i,vb:a.j,Jb:!1,dd:a.W,pageId:a.pageId,Wc:a.Wc,network:a.network?a.network:void 0}),yc(a,b),a.s&&Ug(b.j,a.s),a.h&&(c=a.h,d=ch(b.j),G(d,7,Af(c))),a.m&&(b.B=a.m),a.componentId&&
(b.componentId=a.componentId),a.Cb&&(b.Cb=a.Cb),a.l&&((c=a.l)?(b.experimentIds||(b.experimentIds=new Cg),c=c.serialize(),G(b.experimentIds,4,Af(c))):b.experimentIds&&G(b.experimentIds,4)),a.R&&(c=a.R,b.experimentIds||(b.experimentIds=new Cg),Wf(b.experimentIds,2,c,dg)),a.B&&(c=a.B,b.ma=!0,Xg(b,c)),a.S&&fh(b.j,a.S),a.network.Rb&&a.network.Rb(a.logSource),a.network.Te&&a.network.Te(b),a=b);this.h=a}
w(Fh,F);
Fh.prototype.flush=function(a){var b=a||[];if(b.length){a=new og;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new ng;f=G(f,1,Af(e.i));for(var g=[],h=0;h<e.h.length;h++)g.push(e.h[h].ab);f=Wf(f,3,g,zf);g=[];h=[];for(var k=v(e.pb.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var n=e.l;for(var p=e.yc(l)||[],t=[],r=0;r<p.length;r++){var x=p[r],y=x&&x.h;x=new kg;switch(n){case 3:y=Number(y);Number.isFinite(y)&&Yf(x,1,lg,wf(y));break;case 2:y=Number(y);
if(null!=y&&"number"!==typeof y)throw Error("Value of float/double field must be a number, found "+typeof y+": "+y);Yf(x,2,lg,y)}t.push(x)}n=t;for(p=0;p<n.length;p++){t=n[p];r=new mg;t=$f(r,kg,2,t);r=l;x=[];y=[];for(var z=0;z<e.h.length;z++)y.push(e.h[z].bb);for(z=0;z<y.length;z++){var H=y[z],L=r[z],I=new ig;switch(H){case 3:Yf(I,1,jg,Af(String(L)));break;case 2:H=Number(L);Number.isFinite(H)&&Yf(I,2,jg,uf(H));break;case 1:Yf(I,3,jg,rf("true"===L))}x.push(I)}ag(t,ig,1,x);g.push(t)}}ag(f,mg,4,g);c.push(f);
e.clear()}ag(a,ng,1,c);b=this.h;a instanceof Mg?b.log(a):(c=new Mg,a=a.serialize(),a=G(c,8,Af(a)),b.log(a));this.h.flush()}};function Gh(a,b){this.ga=b;this.l=void 0;this.s=new Fh(1828);this.i=new oe(this.s);this.B=new ue(this.i);this.m=new ve(this.i);this.G=new we(this.i);this.j=new se(this.i);this.h=ye(a)}
function Hh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Ih(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Jh(a){function b(z,H){Promise.resolve().then(function(){var L;null!=(L=c.ra)&&void 0!==L.l&&L.B.record(Hh()-L.l,L.h,L.ga);h.resolve({Od:z,We:H})})}
var c=this;this.h=!1;var d=a.program;var e=a.ge;if(!1!==a.Fe){var f,g;this.ra=null!=(g=a.ra)?g:new Gh(e,null!=(f=a.Zf)?f:"_")}var h=new Ih;this.i=h.promise;if(!B[e]){var k;null!=(k=this.ra)&&te(k.j,k.h,1,"");var l;null!=(l=this.ra)&&l.i.mb()}else if(!B[e].a){var n;null!=(n=this.ra)&&te(n.j,n.h,2,"");var p;null!=(p=this.ra)&&p.i.mb()}try{var t=B[e].a,r;null!=(r=this.ra)&&(r.l=Hh());this.j=v(t(d,b,!0,a.lg)).next().value;this.Ve=h.promise.then(function(){})}catch(z){var x;
null!=(x=this.ra)&&te(x.j,x.h,4,z.message);var y;null!=(y=this.ra)&&y.i.mb();throw z;}}
Jh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");var c=Hh(),d;null!=(d=this.ra)&&d.m.h.qc("/client_streamz/bg/fsc",d.h);return this.i.then(function(e){var f=e.Od;return new Promise(function(g){f(function(h){var k;null!=(k=b.ra)&&k.G.record(Hh()-c,k.h);g(h)},[a.cd,
a.Xe,a.gf])})})};
Jh.prototype.Ad=function(a){if(this.h)throw Error("Already disposed");var b=Hh(),c;null!=(c=this.ra)&&c.m.h.qc("/client_streamz/bg/fsc",c.h);a=this.j([a.cd,a.Xe,a.gf]);var d;null!=(d=this.ra)&&d.G.record(Hh()-b,d.h);return a};
Jh.prototype.dispose=function(){var a;null!=(a=this.ra)&&a.i.mb();this.h=!0;this.i.then(function(b){(b=b.We)&&b()})};
Jh.prototype.Z=function(){return this.h};var Kh=window;zb("csi.gstatic.com");zb("googleads.g.doubleclick.net");zb("partner.googleadservices.com");zb("pubads.g.doubleclick.net");zb("securepubads.g.doubleclick.net");zb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Lh="function"===typeof URL;function Mh(a){if(a instanceof Ib)a instanceof Ib&&a.constructor===Ib?a=a.h:(Ma(a),a="type_error:SafeUrl");else{b:if(Lh){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;function Nh(a,b){b=Mh(b);void 0!==b&&(a.href=b)}
;var Oh={};function Ph(){}
function Qh(a){this.h=a}
w(Qh,Ph);Qh.prototype.toString=function(){return this.h};function Rh(a){var b="true".toString(),c=[new Qh(Sh[0].toLowerCase(),Oh)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof Qh)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Th(){throw Error("unknown trace type");}
;var Uh="alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Vh(a,b){if(b instanceof Db)a.href=Eb(b).toString();else{if(-1===Uh.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Mh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function Wh(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function Xh(a,b){a.src=Eb(b);Wh(a)}
;var Yh=ka([""]),Zh=la(["\x00"],["\\0"]),$h=la(["\n"],["\\n"]),ai=la(["\x00"],["\\u0000"]);function bi(a){return-1===a.toString().indexOf("`")}
bi(function(a){return a(Yh)})||bi(function(a){return a(Zh)})||bi(function(a){return a($h)})||bi(function(a){return a(ai)});function ci(a){this.qe=a}
function di(a){return new ci(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ei=[di("data"),di("http"),di("https"),di("mailto"),di("ftp"),new ci(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function fi(a){var b=gi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function hi(){var a=[];fi(function(b){a.push(b)});
return a}
var gi={hf:"allow-forms",jf:"allow-modals",kf:"allow-orientation-lock",lf:"allow-pointer-lock",mf:"allow-popups",nf:"allow-popups-to-escape-sandbox",pf:"allow-presentation",qf:"allow-same-origin",rf:"allow-scripts",sf:"allow-top-navigation",tf:"allow-top-navigation-by-user-activation"},ii=cb(function(){return hi()});
function ji(){var a=ki(),b={};eb(ii(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ki(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function li(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var mi=(new Date).getTime();"undefined"!==typeof TextDecoder&&new TextDecoder;var ni="undefined"!==typeof TextEncoder?new TextEncoder:null,oi=ni?function(a){return ni.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function pi(a){zd.call(this);var b=this;this.s=this.j=0;this.Da=null!=a?a:{oa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(qi(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.s||ri(this)}
w(pi,zd);function si(){var a=ti;pi.h||(pi.h=new pi(a));return pi.h}
pi.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.qa(this.s);delete pi.h};
pi.prototype.wa=function(){return this.i};
function ri(a){a.s=a.Da.oa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):c.yield(qi(a),3):c.yield(qi(a),3);ri(a);c.h=0})},3E4)}
function qi(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Da.oa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.j];h.l=0;h.G=0;a.m=void 0;a.j&&(a.Da.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Ad(a,"networkstatus-online"):Ad(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.v(3)}})})}
;function ui(){this.data=[];this.h=-1}
ui.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
ui.prototype.get=function(a){return!!this.data[a]};
function vi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function yi(a,b){this.h=a[B.Symbol.iterator]();this.i=b}
yi.prototype[Symbol.iterator]=function(){return this};
yi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function zi(a,b){return new yi(a,b)}
;function Ai(){this.blockSize=-1}
;function Bi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.G=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Xa(Bi,Ai);Bi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ci(a,b,c){c||(c=0);var d=a.G;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Bi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Ci(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ci(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ci(this,e);f=0;break}}this.i=f;this.l+=b}};
Bi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Ci(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Di(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ei(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Fi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Di(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Gi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Fi(a,"inverted-hdpi")&&Ei(a,Array.prototype.filter.call(a.classList?a.classList:Di(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Hi(){}
Hi.prototype.next=function(){return Ii};
var Ii={done:!0,value:void 0};function Ji(a){return{value:a,done:!1}}
Hi.prototype.Fa=function(){return this};function Ki(a){if(a instanceof Li||a instanceof Mi||a instanceof Ni)return a;if("function"==typeof a.next)return new Li(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Li(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new Li(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function Li(a){this.i=a}
Li.prototype.Fa=function(){return new Mi(this.i())};
Li.prototype[Symbol.iterator]=function(){return new Ni(this.i())};
Li.prototype.h=function(){return new Ni(this.i())};
function Mi(a){this.i=a}
w(Mi,Hi);Mi.prototype.next=function(){return this.i.next()};
Mi.prototype[Symbol.iterator]=function(){return new Ni(this.i)};
Mi.prototype.h=function(){return new Ni(this.i)};
function Ni(a){Li.call(this,function(){return a});
this.j=a}
w(Ni,Li);Ni.prototype.next=function(){return this.j.next()};function Oi(a,b){this.i={};this.h=[];this.Va=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Oi)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=Oi.prototype;m.Bc=function(){Pi(this);return this.h.concat()};
m.has=function(a){return Qi(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ri;Pi(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ri(a,b){return a===b}
m.Lb=function(){return 0==this.size};
m.clear=function(){this.i={};this.Va=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Qi(this.i,a)?(delete this.i[a],--this.size,this.Va++,this.h.length>2*this.size&&Pi(this),!0):!1};
function Pi(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Qi(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Qi(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Qi(this.i,a)?this.i[a]:b};
m.set=function(a,b){Qi(this.i,a)||(this.size+=1,this.h.push(a),this.Va++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Oi(this)};
m.keys=function(){return Ki(this.Fa(!0)).h()};
m.values=function(){return Ki(this.Fa(!1)).h()};
m.entries=function(){var a=this;return zi(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){Pi(this);var b=0,c=this.Va,d=this,e=new Hi;e.next=function(){if(c!=d.Va)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ii;var f=d.h[b++];return Ji(a?f:d.i[f])};
return e};
function Qi(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){F.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.s=!!a}
Xa(K,F);m=K.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Eb(a)}return!1};
m.Eb=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&jb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Xa=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Si(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Eb(c)}}return 0!=e}return!1};
function Si(a,b,c){Td(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Eb,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.M=function(){K.Aa.M.call(this);this.clear();this.j.length=0};function Ti(a){this.h=a}
Ti.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new gh).serialize(b))};
Ti.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ti.prototype.remove=function(a){this.h.remove(a)};function Ui(a){this.h=a}
Xa(Ui,Ti);function Vi(a){this.data=a}
function Wi(a){return void 0===a||a instanceof Vi?a:new Vi(a)}
Ui.prototype.set=function(a,b){Ui.Aa.set.call(this,a,Wi(b))};
Ui.prototype.i=function(a){a=Ui.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ui.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Xi(a){this.h=a}
Xa(Xi,Ui);Xi.prototype.set=function(a,b,c){if(b=Wi(b)){if(c){if(c<Wa()){Xi.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Xi.Aa.set.call(this,a,b)};
Xi.prototype.i=function(a){var b=Xi.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Xi.prototype.remove.call(this,a);else return b}};function Yi(){}
;function Zi(){}
Xa(Zi,Yi);Zi.prototype[Symbol.iterator]=function(){return Ki(this.Fa(!0)).h()};
Zi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function $i(a){this.h=a}
Xa($i,Zi);m=$i.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.Fa=function(a){var b=0,c=this.h,d=new Hi;d.next=function(){if(b>=c.length)return Ii;var e=c.key(b++);if(a)return Ji(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ji(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function aj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
Xa(aj,$i);function bj(a,b){this.i=a;this.h=null;var c;if(c=Oc)c=!(9<=Number(bd));if(c){cj||(cj=new Oi);this.h=cj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),cj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Xa(bj,Zi);var dj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},cj=null;function ej(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return dj[b]})}
m=bj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(ej(a),b);fj(this)};
m.get=function(a){a=this.h.getAttribute(ej(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(ej(a));fj(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Hi;d.next=function(){if(b>=c.length)return Ii;var e=c[b++];if(a)return Ji(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ji(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);fj(this)};
function fj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function gj(a,b){this.i=a;this.h=b+"::"}
Xa(gj,Zi);gj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
gj.prototype.get=function(a){return this.i.get(this.h+a)};
gj.prototype.remove=function(a){this.i.remove(this.h+a)};
gj.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Hi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ji(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},hj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Pc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ij={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},jj={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
M.Ue=function(){hj?(M.lb=Uint8Array,M.Ha=Uint16Array,M.Jd=Int32Array,M.assign(M,ij)):(M.lb=Array,M.Ha=Array,M.Jd=Array,M.assign(M,jj))};
M.Ue();var kj=!0;try{new Uint8Array(1)}catch(a){kj=!1}
function lj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var mj={};mj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var nj={},oj,pj=[],qj=0;256>qj;qj++){oj=qj;for(var rj=0;8>rj;rj++)oj=oj&1?3988292384^oj>>>1:oj>>>1;pj[qj]=oj}nj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^pj[(a^b[d])&255];return a^-1};var sj={};sj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function tj(a){for(var b=a.length;0<=--b;)a[b]=0}
var uj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],vj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],wj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],xj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],yj=Array(576);tj(yj);var zj=Array(60);tj(zj);var Aj=Array(512);tj(Aj);var Bj=Array(256);tj(Bj);var Cj=Array(29);tj(Cj);var Dj=Array(30);tj(Dj);function Ej(a,b,c,d,e){this.Bd=a;this.ae=b;this.Zd=c;this.Vd=d;this.we=e;this.kd=a&&a.length}
var Fj,Gj,Hj;function Ij(a,b){this.ed=a;this.zb=0;this.Ua=b}
function Jj(a,b){a.V[a.pending++]=b&255;a.V[a.pending++]=b>>>8&255}
function Kj(a,b,c){a.fa>16-c?(a.la|=b<<a.fa&65535,Jj(a,a.la),a.la=b>>16-a.fa,a.fa+=c-16):(a.la|=b<<a.fa&65535,a.fa+=c)}
function Lj(a,b,c){Kj(a,c[2*b],c[2*b+1])}
function Mj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Nj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Mj(d[e]++,e))}
function Oj(a){var b;for(b=0;286>b;b++)a.sa[2*b]=0;for(b=0;30>b;b++)a.Za[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.sa[512]=1;a.Oa=a.Db=0;a.ya=a.matches=0}
function Pj(a){8<a.fa?Jj(a,a.la):0<a.fa&&(a.V[a.pending++]=a.la);a.la=0;a.fa=0}
function Qj(a,b,c){Pj(a);Jj(a,c);Jj(a,~c);M.ob(a.V,a.window,b,c,a.pending);a.pending+=c}
function Rj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Sj(a,b,c){for(var d=a.X[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Rj(b,a.X[e+1],a.X[e],a.depth)&&e++;if(Rj(b,d,a.X[e],a.depth))break;a.X[c]=a.X[e];c=e;e<<=1}a.X[c]=d}
function Tj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.V[a.Ib+2*d]<<8|a.V[a.Ib+2*d+1];var f=a.V[a.Fc+d];d++;if(0===e)Lj(a,f,b);else{var g=Bj[f];Lj(a,g+256+1,b);var h=uj[g];0!==h&&(f-=Cj[g],Kj(a,f,h));e--;g=256>e?Aj[e]:Aj[256+(e>>>7)];Lj(a,g,c);h=vj[g];0!==h&&(e-=Dj[g],Kj(a,e,h))}}while(d<a.ya)}Lj(a,256,b)}
function Uj(a,b){var c=b.ed,d=b.Ua.Bd,e=b.Ua.kd,f=b.Ua.Vd,g,h=-1;a.Ma=0;a.tb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.X[++a.Ma]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ma;){var k=a.X[++a.Ma]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Oa--;e&&(a.Db-=d[2*k+1])}b.zb=h;for(g=a.Ma>>1;1<=g;g--)Sj(a,c,g);k=f;do g=a.X[1],a.X[1]=a.X[a.Ma--],Sj(a,c,1),d=a.X[1],a.X[--a.tb]=g,a.X[--a.tb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.X[1]=k++,Sj(a,c,1);while(2<=a.Ma);a.X[--a.tb]=
a.X[1];g=b.ed;k=b.zb;d=b.Ua.Bd;e=b.Ua.kd;f=b.Ua.ae;var l=b.Ua.Zd,n=b.Ua.we,p,t=0;for(p=0;15>=p;p++)a.Ja[p]=0;g[2*a.X[a.tb]+1]=0;for(b=a.tb+1;573>b;b++){var r=a.X[b];p=g[2*g[2*r+1]+1]+1;p>n&&(p=n,t++);g[2*r+1]=p;if(!(r>k)){a.Ja[p]++;var x=0;r>=l&&(x=f[r-l]);var y=g[2*r];a.Oa+=y*(p+x);e&&(a.Db+=y*(d[2*r+1]+x))}}if(0!==t){do{for(p=n-1;0===a.Ja[p];)p--;a.Ja[p]--;a.Ja[p+1]+=2;a.Ja[n]--;t-=2}while(0<t);for(p=n;0!==p;p--)for(r=a.Ja[p];0!==r;)d=a.X[--b],d>k||(g[2*d+1]!==p&&(a.Oa+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),r--)}Nj(c,h,a.Ja)}
function Vj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Wj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Lj(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(Lj(a,l,a.ha),g--),Lj(a,16,a.ha),Kj(a,g-3,2)):10>=g?(Lj(a,17,a.ha),Kj(a,g-3,3)):(Lj(a,18,a.ha),Kj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Xj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.sa[2*c])return 0;if(0!==a.sa[18]||0!==a.sa[20]||0!==a.sa[26])return 1;for(c=32;256>c;c++)if(0!==a.sa[2*c])return 1;return 0}
var Yj=!1;function Zj(a,b,c){a.V[a.Ib+2*a.ya]=b>>>8&255;a.V[a.Ib+2*a.ya+1]=b&255;a.V[a.Fc+a.ya]=c&255;a.ya++;0===b?a.sa[2*c]++:(a.matches++,b--,a.sa[2*(Bj[c]+256+1)]++,a.Za[2*(256>b?Aj[b]:Aj[256+(b>>>7)])]++);return a.ya===a.Mb-1}
;function ak(a,b){a.msg=sj[b];return b}
function bk(a){for(var b=a.length;0<=--b;)a[b]=0}
function ck(a){var b=a.state,c=b.pending;c>a.K&&(c=a.K);0!==c&&(M.ob(a.output,b.V,b.Pb,c,a.Ab),a.Ab+=c,b.Pb+=c,a.Qc+=c,a.K-=c,b.pending-=c,0===b.pending&&(b.Pb=0))}
function dk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.H.vc&&(a.H.vc=Xj(a));Uj(a,a.ec);Uj(a,a.Zb);Vj(a,a.sa,a.ec.zb);Vj(a,a.Za,a.Zb.zb);Uj(a,a.Xc);for(e=18;3<=e&&0===a.ha[2*xj[e]+1];e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.Db+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Kj(a,b?1:0,3),Qj(a,c,d);else if(4===a.strategy||g===f)Kj(a,2+(b?1:0),3),Tj(a,yj,zj);else{Kj(a,4+(b?1:0),3);c=a.ec.zb+1;d=a.Zb.zb+1;e+=1;Kj(a,c-257,5);Kj(a,d-1,5);Kj(a,e-4,4);for(f=0;f<e;f++)Kj(a,a.ha[2*
xj[f]+1],3);Wj(a,a.sa,c-1);Wj(a,a.Za,d-1);Tj(a,a.sa,a.Za)}Oj(a);b&&Pj(a);a.va=a.o;ck(a.H)}
function N(a,b){a.V[a.pending++]=b}
function ek(a,b){a.V[a.pending++]=b>>>8&255;a.V[a.pending++]=b&255}
function fk(a,b){var c=a.nd,d=a.o,e=a.xa,f=a.od,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Wa,l=a.Ga,n=a.o+258,p=h[d+e-1],t=h[d+e];a.xa>=a.jd&&(c>>=2);f>a.u&&(f=a.u);do{var r=b;if(h[r+e]===t&&h[r+e-1]===p&&h[r]===h[d]&&h[++r]===h[d+1]){d+=2;for(r++;h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&h[++d]===h[++r]&&d<n;);r=258-(n-d);d=n-258;if(r>e){a.yb=b;e=r;if(r>=f)break;p=h[d+e-1];t=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function gk(a){var b=a.ja,c;do{var d=a.Hd-a.u-a.o;if(a.o>=b+(b-262)){M.ob(a.window,a.window,b,b,0);a.yb-=b;a.o-=b;a.va-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.H.ka)break;e=a.H;c=a.window;f=a.o+a.u;var g=e.ka;g>d&&(g=d);0===g?c=0:(e.ka-=g,M.ob(c,e.input,e.hb,g,f),1===e.state.wrap?e.F=mj(e.F,c,g,f):2===e.state.wrap&&(e.F=nj(e.F,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ta)for(d=a.o-a.ta,a.J=a.window[d],
a.J=(a.J<<a.La^a.window[d+1])&a.Ka;a.ta&&!(a.J=(a.J<<a.La^a.window[d+3-1])&a.Ka,a.Ga[d&a.Wa]=a.head[a.J],a.head[a.J]=d,d++,a.ta--,3>a.u+a.ta););}while(262>a.u&&0!==a.H.ka)}
function hk(a,b){for(var c;;){if(262>a.u){gk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ga[a.o&a.Wa]=a.head[a.J],a.head[a.J]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.P=fk(a,c));if(3<=a.P)if(c=Zj(a,a.o-a.yb,a.P-3),a.u-=a.P,a.P<=a.Gc&&3<=a.u){a.P--;do a.o++,a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,a.Ga[a.o&a.Wa]=a.head[a.J],a.head[a.J]=a.o;while(0!==--a.P);a.o++}else a.o+=a.P,a.P=0,a.J=a.window[a.o],a.J=(a.J<<a.La^a.window[a.o+1])&a.Ka;else c=Zj(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(dk(a,!1),0===a.H.K))return 1}a.ta=2>a.o?a.o:2;return 4===b?(dk(a,!0),0===a.H.K?3:4):a.ya&&(dk(a,!1),0===a.H.K)?1:2}
function ik(a,b){for(var c,d;;){if(262>a.u){gk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,c=a.Ga[a.o&a.Wa]=a.head[a.J],a.head[a.J]=a.o);a.xa=a.P;a.rd=a.yb;a.P=2;0!==c&&a.xa<a.Gc&&a.o-c<=a.ja-262&&(a.P=fk(a,c),5>=a.P&&(1===a.strategy||3===a.P&&4096<a.o-a.yb)&&(a.P=2));if(3<=a.xa&&a.P<=a.xa){d=a.o+a.u-3;c=Zj(a,a.o-1-a.rd,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.J=(a.J<<a.La^a.window[a.o+3-1])&a.Ka,a.Ga[a.o&a.Wa]=a.head[a.J],a.head[a.J]=a.o);
while(0!==--a.xa);a.fb=0;a.P=2;a.o++;if(c&&(dk(a,!1),0===a.H.K))return 1}else if(a.fb){if((c=Zj(a,0,a.window[a.o-1]))&&dk(a,!1),a.o++,a.u--,0===a.H.K)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(Zj(a,0,a.window[a.o-1]),a.fb=0);a.ta=2>a.o?a.o:2;return 4===b?(dk(a,!0),0===a.H.K?3:4):a.ya&&(dk(a,!1),0===a.H.K)?1:2}
function jk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){gk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.P=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.P=258-(e-d);a.P>a.u&&(a.P=a.u)}3<=a.P?(c=Zj(a,1,a.P-3),a.u-=a.P,a.o+=a.P,a.P=0):(c=Zj(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(dk(a,!1),0===a.H.K))return 1}a.ta=0;return 4===b?(dk(a,!0),0===a.H.K?3:4):
a.ya&&(dk(a,!1),0===a.H.K)?1:2}
function kk(a,b){for(var c;;){if(0===a.u&&(gk(a),0===a.u)){if(0===b)return 1;break}a.P=0;c=Zj(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(dk(a,!1),0===a.H.K))return 1}a.ta=0;return 4===b?(dk(a,!0),0===a.H.K?3:4):a.ya&&(dk(a,!1),0===a.H.K)?1:2}
function lk(a,b,c,d,e){this.he=a;this.ue=b;this.ye=c;this.te=d;this.ce=e}
var mk;mk=[new lk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){gk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,dk(a,!1),0===a.H.K)return 1;if(a.o-a.va>=a.ja-262&&(dk(a,!1),0===a.H.K))return 1}a.ta=0;if(4===b)return dk(a,!0),0===a.H.K?3:4;a.o>a.va&&dk(a,!1);return 1}),
new lk(4,4,8,4,hk),new lk(4,5,16,8,hk),new lk(4,6,32,32,hk),new lk(4,4,16,16,ik),new lk(8,16,32,32,ik),new lk(8,16,128,128,ik),new lk(8,32,128,256,ik),new lk(32,128,258,1024,ik),new lk(32,258,258,4096,ik)];
function nk(){this.H=null;this.status=0;this.V=null;this.wrap=this.pending=this.Pb=this.za=0;this.D=null;this.Ca=0;this.method=8;this.wb=-1;this.Wa=this.Sc=this.ja=0;this.window=null;this.Hd=0;this.head=this.Ga=null;this.od=this.jd=this.strategy=this.level=this.Gc=this.nd=this.xa=this.u=this.yb=this.o=this.fb=this.rd=this.P=this.va=this.La=this.Ka=this.Cc=this.dc=this.J=0;this.sa=new M.Ha(1146);this.Za=new M.Ha(122);this.ha=new M.Ha(78);bk(this.sa);bk(this.Za);bk(this.ha);this.Xc=this.Zb=this.ec=
null;this.Ja=new M.Ha(16);this.X=new M.Ha(573);bk(this.X);this.tb=this.Ma=0;this.depth=new M.Ha(573);bk(this.depth);this.fa=this.la=this.ta=this.matches=this.Db=this.Oa=this.Ib=this.ya=this.Mb=this.Fc=0}
function ok(a,b){if(!a||!a.state||5<b||0>b)return a?ak(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ka||666===c.status&&4!==b)return ak(a,0===a.K?-5:-2);c.H=a;var d=c.wb;c.wb=b;if(42===c.status)if(2===c.wrap)a.F=0,N(c,31),N(c,139),N(c,8),c.D?(N(c,(c.D.text?1:0)+(c.D.Qa?2:0)+(c.D.extra?4:0)+(c.D.name?8:0)+(c.D.comment?16:0)),N(c,c.D.time&255),N(c,c.D.time>>8&255),N(c,c.D.time>>16&255),N(c,c.D.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.D.os&255),c.D.extra&&c.D.extra.length&&
(N(c,c.D.extra.length&255),N(c,c.D.extra.length>>8&255)),c.D.Qa&&(a.F=nj(a.F,c.V,c.pending,0)),c.Ca=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.Sc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;ek(c,e+(31-e%31));0!==c.o&&(ek(c,a.F>>>16),ek(c,a.F&65535));a.F=1}if(69===c.status)if(c.D.extra){for(e=c.pending;c.Ca<(c.D.extra.length&65535)&&(c.pending!==c.za||
(c.D.Qa&&c.pending>e&&(a.F=nj(a.F,c.V,c.pending-e,e)),ck(a),e=c.pending,c.pending!==c.za));)N(c,c.D.extra[c.Ca]&255),c.Ca++;c.D.Qa&&c.pending>e&&(a.F=nj(a.F,c.V,c.pending-e,e));c.Ca===c.D.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.D.name){e=c.pending;do{if(c.pending===c.za&&(c.D.Qa&&c.pending>e&&(a.F=nj(a.F,c.V,c.pending-e,e)),ck(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.D.name.length?c.D.name.charCodeAt(c.Ca++)&255:0;N(c,f)}while(0!==f);c.D.Qa&&c.pending>
e&&(a.F=nj(a.F,c.V,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.D.comment){e=c.pending;do{if(c.pending===c.za&&(c.D.Qa&&c.pending>e&&(a.F=nj(a.F,c.V,c.pending-e,e)),ck(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.D.comment.length?c.D.comment.charCodeAt(c.Ca++)&255:0;N(c,f)}while(0!==f);c.D.Qa&&c.pending>e&&(a.F=nj(a.F,c.V,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.D.Qa?(c.pending+2>c.za&&ck(a),c.pending+2<=c.za&&(N(c,a.F&
255),N(c,a.F>>8&255),a.F=0,c.status=113)):c.status=113);if(0!==c.pending){if(ck(a),0===a.K)return c.wb=-1,0}else if(0===a.ka&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ak(a,-5);if(666===c.status&&0!==a.ka)return ak(a,-5);if(0!==a.ka||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?kk(c,b):3===c.strategy?jk(c,b):mk[c.level].ce(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.K&&(c.wb=-1),0;if(2===d&&(1===b?(Kj(c,2,3),Lj(c,256,yj),16===c.fa?(Jj(c,c.la),c.la=0,c.fa=0):8<=c.fa&&
(c.V[c.pending++]=c.la&255,c.la>>=8,c.fa-=8)):5!==b&&(Kj(c,0,3),Qj(c,0,0),3===b&&(bk(c.head),0===c.u&&(c.o=0,c.va=0,c.ta=0))),ck(a),0===a.K))return c.wb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.F&255),N(c,a.F>>8&255),N(c,a.F>>16&255),N(c,a.F>>24&255),N(c,a.kb&255),N(c,a.kb>>8&255),N(c,a.kb>>16&255),N(c,a.kb>>24&255)):(ek(c,a.F>>>16),ek(c,a.F&65535));ck(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var pk={};pk=function(){this.input=null;this.kb=this.ka=this.hb=0;this.output=null;this.Qc=this.K=this.Ab=0;this.msg="";this.state=null;this.vc=2;this.F=0};var qk=Object.prototype.toString;
function rk(a){if(!(this instanceof rk))return new rk(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.H=new pk;this.H.K=0;var b=this.H;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ak(b,-2);else{8===e&&(e=9);var k=new nk;b.state=k;k.H=b;k.wrap=h;k.D=null;k.Sc=e;k.ja=1<<k.Sc;k.Wa=k.ja-1;k.Cc=f+7;k.dc=1<<k.Cc;k.Ka=k.dc-1;k.La=~~((k.Cc+3-1)/3);k.window=new M.lb(2*k.ja);k.head=new M.Ha(k.dc);k.Ga=new M.Ha(k.ja);k.Mb=1<<f+6;k.za=4*k.Mb;k.V=new M.lb(k.za);k.Ib=1*k.Mb;k.Fc=3*k.Mb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Qc=0;b.vc=2;c=b.state;c.pending=0;c.Pb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.F=2===c.wrap?
0:1;c.wb=0;if(!Yj){d=Array(16);for(f=g=0;28>f;f++)for(Cj[f]=g,e=0;e<1<<uj[f];e++)Bj[g++]=f;Bj[g-1]=f;for(f=g=0;16>f;f++)for(Dj[f]=g,e=0;e<1<<vj[f];e++)Aj[g++]=f;for(g>>=7;30>f;f++)for(Dj[f]=g<<7,e=0;e<1<<vj[f]-7;e++)Aj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)yj[2*e+1]=8,e++,d[8]++;for(;255>=e;)yj[2*e+1]=9,e++,d[9]++;for(;279>=e;)yj[2*e+1]=7,e++,d[7]++;for(;287>=e;)yj[2*e+1]=8,e++,d[8]++;Nj(yj,287,d);for(e=0;30>e;e++)zj[2*e+1]=5,zj[2*e]=Mj(e,5);Fj=new Ej(yj,uj,257,286,15);Gj=new Ej(zj,
vj,0,30,15);Hj=new Ej([],wj,0,19,7);Yj=!0}c.ec=new Ij(c.sa,Fj);c.Zb=new Ij(c.Za,Gj);c.Xc=new Ij(c.ha,Hj);c.la=0;c.fa=0;Oj(c);c=0}else c=ak(b,-2);0===c&&(b=b.state,b.Hd=2*b.ja,bk(b.head),b.Gc=mk[b.level].ue,b.jd=mk[b.level].he,b.od=mk[b.level].ye,b.nd=mk[b.level].te,b.o=0,b.va=0,b.u=0,b.ta=0,b.P=b.xa=2,b.fb=0,b.J=0);b=c}}else b=-2;if(0!==b)throw Error(sj[b]);a.header&&(b=this.H)&&b.state&&2===b.state.wrap&&(b.state.D=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=lj(a.dictionary):
"[object ArrayBuffer]"===qk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.H;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.F=mj(a.F,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(bk(l.head),l.o=0,l.va=0,l.ta=0),c=new M.lb(l.ja),M.ob(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.ka;d=a.hb;e=a.input;a.ka=g;a.hb=0;a.input=f;for(gk(l);3<=l.u;){f=l.o;g=l.u-2;do l.J=(l.J<<l.La^l.window[f+3-1])&l.Ka,l.Ga[f&l.Wa]=l.head[l.J],l.head[l.J]=f,f++;while(--g);
l.o=f;l.u=2;gk(l)}l.o+=l.u;l.va=l.o;l.ta=l.u;l.u=0;l.P=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.ka=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(sj[b]);this.Kf=!0}}
rk.prototype.push=function(a,b){var c=this.H,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=lj(a):"[object ArrayBuffer]"===qk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.ka=c.input.length;do{0===c.K&&(c.output=new M.lb(d),c.Ab=0,c.K=d);a=ok(c,e);if(1!==a&&0!==a)return sk(this,a),this.ended=!0,!1;if(0===c.K||0===c.ka&&(4===e||2===e))if("string"===this.options.to){var f=M.Pc(c.output,c.Ab);b=f;f=f.length;if(65537>f&&(b.subarray&&kj||!b.subarray))b=
String.fromCharCode.apply(null,M.Pc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Pc(c.output,c.Ab),this.chunks.push(b)}while((0<c.ka||0===c.K)&&1!==a);if(4===e)return(c=this.H)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ak(c,-2):(c.state=null,a=113===d?ak(c,-3):0)):a=-2,sk(this,a),this.ended=!0,0===a;2===e&&(sk(this,0),c.K=0);return!0};
function sk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):M.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.H.msg}
function tk(a,b){b=b||{};b.gzip=!0;b=new rk(b);b.push(a,!0);if(b.err)throw b.msg||sj[b.err];return b.result}
;function uk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Gb(a):b=null;return b}
;function vk(a){return Gb(null===a?"null":void 0===a?"undefined":a)}
;function wk(a){this.name=a}
;var xk=new wk("rawColdConfigGroup");var yk=new wk("rawHotConfigGroup");function zk(a){this.A=Ff(a)}
w(zk,fg);var Ak=new wk("continuationCommand");var Bk=new wk("webCommandMetadata");var Ck=new wk("signalServiceEndpoint");var Dk={yf:"EMBEDDED_PLAYER_MODE_UNKNOWN",vf:"EMBEDDED_PLAYER_MODE_DEFAULT",xf:"EMBEDDED_PLAYER_MODE_PFP",wf:"EMBEDDED_PLAYER_MODE_PFL"};var Ek=new wk("feedbackEndpoint");function Fk(a){this.A=Ff(a)}
w(Fk,fg);var Gk=new wk("webPlayerShareEntityServiceEndpoint");var Hk=new wk("playlistEditEndpoint");var Ik=new wk("modifyChannelNotificationPreferenceEndpoint");var Jk=new wk("unsubscribeEndpoint");var Kk=new wk("subscribeEndpoint");function Lk(){var a=Mk;D("yt.ads.biscotti.getId_")||C("yt.ads.biscotti.getId_",a)}
function Nk(a){C("yt.ads.biscotti.lastId_",a)}
;function Ok(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Pk=B.window,Qk,Rk,Sk=(null==Pk?void 0:null==(Qk=Pk.yt)?void 0:Qk.config_)||(null==Pk?void 0:null==(Rk=Pk.ytcfg)?void 0:Rk.data_)||{};C("yt.config_",Sk);function Tk(){Ok(Sk,arguments)}
function P(a,b){return a in Sk?Sk[a]:b}
function Uk(a){var b=Sk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Vk=[];function Wk(a){Vk.forEach(function(b){return b(a)})}
function Xk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Yk(b)}}:a}
function Yk(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Tk("ERRORS",b));Wk(a)}
function Zk(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Tk("ERRORS",f))}
;var $k=/^[\w.]*$/,al={q:!0,search_query:!0};function bl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=cl(f[0]||""),h=cl(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(bl);k.args=[{key:l,value:f[1],query:a,method:dl==n?"unchanged":n}];al.hasOwnProperty(l)||Zk(k)}}return c}
var dl=String(bl);function el(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function fl(a){"?"==a.charAt(0)&&(a=a.substr(1));return bl(a,"&")}
function gl(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),fl(1<a.length?a[1]:a[0])):{}}
function hl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=fl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return mc(a,e)+d}
function il(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)==d&&(Number(cc(4,b))||null)==(Number(cc(4,a))||null):!0;return a}
function cl(a){return a&&a.match($k)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function jl(a){var b=kl;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=mi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(V){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Kh:g;try{var h=g.history.length}catch(V){h=0}e.u_his=h;var k;e.u_h=null==(k=Kh.screen)?void 0:k.height;var l;e.u_w=null==(l=Kh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Kh.screen)?void 0:n.availHeight;var p;e.u_aw=null==
(p=Kh.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=Kh.screen)?void 0:t.colorDepth}catch(V){}h=b.h;try{var r=h.screenX;var x=h.screenY}catch(V){}try{var y=h.outerWidth;var z=h.outerHeight}catch(V){}try{var H=h.innerWidth;var L=h.innerHeight}catch(V){}try{var I=h.screenLeft;var da=h.screenTop}catch(V){}try{H=h.innerWidth,L=h.innerHeight}catch(V){}try{var S=h.screen.availWidth;var O=h.screen.availTop}catch(V){}r=[I,da,r,x,S,O,y,z,H,L];try{var ba=(b.h.top||window).document,J="CSS1Compat"==ba.compatMode?
ba.documentElement:ba.body;var ca=(new Gd(J.clientWidth,J.clientHeight)).round()}catch(V){ca=new Gd(-12245933,-12245933)}ba=ca;ca={};var ha=void 0===ha?B:ha;J=new ui;"SVGElement"in ha&&"createElementNS"in ha.document&&J.set(0);x=ji();x["allow-top-navigation-by-user-activation"]&&J.set(1);x["allow-popups-to-escape-sandbox"]&&J.set(2);ha.crypto&&ha.crypto.subtle&&J.set(3);"TextDecoder"in ha&&"TextEncoder"in ha&&J.set(4);ha=vi(J);ca.bc=ha;ca.bih=ba.height;ca.biw=ba.width;ca.brdim=r.join();b=b.i;b=(ca.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!Kh.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var kl=new function(){var a=window.document;this.h=window;this.i=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return el(jl(a))});Wa();navigator.userAgent.indexOf(" (CrKey ");function R(a){a=ll(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ml(a,b){a=ll(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ll(a){return P("EXPERIMENT_FLAGS",{})[a]}
function nl(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});var e=v(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var ol="XMLHttpRequest"in B?function(){return new XMLHttpRequest}:null;
function pl(){if(!ol)return null;var a=ol();return"open"in a?a:null}
function ql(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function rl(a,b){"function"===typeof a&&(a=Xk(a));return window.setTimeout(a,b)}
;var sl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(sl),["client_dev_set_cookie"]);var tl={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ul="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(sl)),vl=!1;
function wl(a,b){b=void 0===b?{}:b;var c=il(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in tl){var f=P(tl[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&dc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===P("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&P("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==P("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&P("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=el(jl()));return b}
function xl(a){var b=window.location.search,c=dc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&il(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=fl(b),f={};eb(ul,function(g){e[g]&&(f[g]=e[g])});
return hl(a,f||{},!1)}
function yl(a,b){var c=b.format||"JSON";a=zl(a,b);var d=Al(a,b),e=!1,f=Bl(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=ql(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Cl(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||B;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=rl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||B,f))},d)}return f}
function zl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=hl(a,b||{},!0);return a}
function Al(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=fl(e),vb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):kc(e));f=e||f&&!ob(f);!vl&&f&&"POST"!=b.method&&(vl=!0,Yk(Error("AJAX request with postData should use POST")));return e}
function Cl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Zk(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Dl(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=El(g)})}d&&Fl(e);
return e}
function Fl(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=xb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else Fl(a[b])}}
function Dl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function El(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Gl(a,b){b.method="POST";b.postParams||(b.postParams={});return yl(a,b)}
function Bl(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Xk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=pl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=xl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=wl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Hl=[{Hc:function(a){return"Cannot read property '"+a.key+"'"},
kc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Hc:function(a){return"Cannot call '"+a.key+"'"},
kc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Hc:function(a){return a.key+" is not defined"},
kc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Jl={Sa:[],Pa:[{callback:Il,weight:500}]};function Il(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Kl(){this.Pa=[];this.Sa=[]}
var Ll;function Ml(){if(!Ll){var a=Ll=new Kl;a.Sa.length=0;a.Pa.length=0;Jl.Sa&&a.Sa.push.apply(a.Sa,Jl.Sa);Jl.Pa&&a.Pa.push.apply(a.Pa,Jl.Pa)}return Ll}
;var Nl=new K;function Ol(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Pl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Pl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Pl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Pl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ql(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Rl(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ol(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Rl(f+".ve",g,h,k):0;d+=f;d+=Rl(e,a[e],b,c);if(500<d)break}}else c[b]=Sl(a),d+=c[b].length;else c[b]=Sl(a),d+=c[b].length;return d}
function Rl(a,b,c,d){c+="."+a;a=Sl(b);d[c]=a;return c.length+a.length}
function Sl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Tl(){this.Ye=!0}
function Ul(){Tl.h||(Tl.h=new Tl);return Tl.h}
function Vl(a,b){a={};var c=Bg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Sk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Sk&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var Wl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Xl(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Yl(){if(!B.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return B.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":B.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":B.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":B.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Zl(a,b,c,d,e){xg.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function $l(a){return xg.get(""+a,void 0)}
function am(a,b,c){xg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function bm(){if(!xg.isEnabled())return!1;if(!xg.Lb())return!0;xg.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==xg.get("TESTCOOKIESENABLED"))return!1;xg.remove("TESTCOOKIESENABLED");return!0}
;var cm=D("ytglobal.prefsUserPrefsPrefs_")||{};C("ytglobal.prefsUserPrefsPrefs_",cm);function dm(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=$l(this.h);a&&this.parse(a)}
var em;function fm(){em||(em=new dm);return em}
m=dm.prototype;m.get=function(a,b){gm(a);hm(a);a=void 0!==cm[a]?cm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){gm(a);hm(a);if(null==b)throw Error("ExpectedNotNull");cm[a]=b.toString()};
function im(a){return!!((jm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){gm(a);hm(a);delete cm[a]};
m.clear=function(){for(var a in cm)delete cm[a]};
function hm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function gm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function jm(a){a=void 0!==cm[a]?cm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(cm[d]=c.toString())}};var km={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},lm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function mm(){var a=B.navigator;return a?a.connection:void 0}
function nm(){var a=mm();if(a){var b=km[a.type||"unknown"]||"CONN_UNKNOWN";a=km[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function om(){var a=mm();if(null!=a&&a.effectiveType)return lm.hasOwnProperty(a.effectiveType)?lm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
w(T,Error);function pm(){try{return qm(),!0}catch(a){return!1}}
function qm(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new T("Datasync ID not set",void 0===a?"unknown":a);}
;function rm(){}
function sm(a,b){return ti.Ya(a,0,b)}
rm.prototype.oa=function(a,b){return this.Ya(a,1,b)};
rm.prototype.Fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var tm=ml("web_emulated_idle_callback_delay",300),um=1E3/60-3,wm=[8,5,4,3,2,1,0];
function xm(a){a=void 0===a?{}:a;F.call(this);this.i=[];this.j={};this.Y=this.h=0;this.W=this.m=!1;this.R=[];this.S=this.da=!1;for(var b=v(wm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.uc=a.timeout||1;this.B=um;this.s=0;this.ma=this.Ae.bind(this);this.sc=this.bf.bind(this);this.Ba=this.Nd.bind(this);this.Ia=this.je.bind(this);this.nb=this.De.bind(this);this.na=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.ea=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ma)}
w(xm,F);m=xm.prototype;m.Fb=function(a){var b=Wa();ym(this,a);a=Wa()-b;this.m||(this.B-=a)};
m.Ya=function(a,b,c){++this.Y;if(10===b)return this.Fb(a),this.Y;var d=this.Y;this.j[d]=a;this.m&&!c?this.R.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.m||(0!==this.h&&zm(this)!==this.s&&this.stop(),this.start()));return d};
m.qa=function(a){delete this.j[a]};
function Am(a){a.R.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Bm(a){return!a.isHidden()&&a.ea}
function zm(a){if(a.i[8].length){if(a.S)return 4;if(Bm(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Bm(a)?3:2:1;return 0}
m.Nb=function(a){var b=D("yt.logging.errors.log");b&&b(a)};
function ym(a,b){try{b()}catch(c){a.Nb(c)}}
function Cm(a){for(var b=v(wm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.je=function(a){var b=void 0;a&&(b=a.timeRemaining());this.da=!0;Dm(this,b);this.da=!1};
m.bf=function(){Dm(this)};
m.Nd=function(){Em(this)};
m.De=function(a){this.S=!0;var b=zm(this);4===b&&b!==this.s&&(this.stop(),this.start());Dm(this,void 0,a);this.S=!1};
m.Ae=function(){this.isHidden()||Em(this);this.h&&(this.stop(),this.start())};
function Em(a){a.stop();a.m=!0;for(var b=Wa(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&ym(a,e)}Fm(a);a.m=!1;Cm(a)&&a.start();b=Wa()-b;a.B-=b}
function Fm(a){for(var b=0,c=a.R.length;b<c;b++){var d=a.R[b];a.i[d.priority].push(d.id)}a.R.length=0}
function Dm(a,b,c){a.S&&4===a.s&&a.h||a.stop();a.m=!0;b=Wa()+(b||a.B);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Nb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&ym(a,f);d=a.da?0:1;d=a.l>d?a.l:d;if(!(Wa()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&ym(a,c)}while(c&&Wa()<b)}a.m=!1;Fm(a);a.B=um;Cm(a)&&a.start()}
m.start=function(){this.W=!1;if(0===this.h)switch(this.s=zm(this),this.s){case 1:var a=this.Ia;this.h=this.na?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,tm);break;case 2:this.h=window.setTimeout(this.sc,this.uc);break;case 3:this.h=window.requestAnimationFrame(this.nb);break;case 4:this.h=window.setTimeout(this.Ba,0)}};
m.pause=function(){this.stop();this.W=!0};
m.stop=function(){if(this.h){switch(this.s){case 1:var a=this.h;this.na?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.M=function(){Am(this);this.stop();this.ea&&document.removeEventListener("visibilitychange",this.ma);F.prototype.M.call(this)};var Gm=D("yt.scheduler.instance.timerIdMap_")||{},Hm=ml("kevlar_tuner_scheduler_soft_state_timer_ms",800),Im=0,Jm=0;function Km(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new xm(P("scheduler")||{}),C("ytglobal.schedulerInstanceInstance_",a);return a}
function Lm(){Mm();var a=D("ytglobal.schedulerInstanceInstance_");a&&(wc(a),C("ytglobal.schedulerInstanceInstance_",null))}
function Mm(){Am(Km());for(var a in Gm)Gm.hasOwnProperty(a)&&delete Gm[Number(a)]}
function Nm(a,b,c){if(!c)return c=void 0===c,-Km().Ya(a,b,c);var d=window.setTimeout(function(){var e=Km().Ya(a,b);Gm[d]=e},c);
return d}
function Om(a){Km().Fb(a)}
function Pm(a){var b=Km();if(0>a)b.qa(-a);else{var c=Gm[a];c?(b.qa(c),delete Gm[a]):window.clearTimeout(a)}}
function Qm(){Rm()}
function Rm(){window.clearTimeout(Im);Km().start()}
function Sm(){Km().pause();window.clearTimeout(Im);Im=window.setTimeout(Qm,Hm)}
function Tm(){window.clearTimeout(Jm);Jm=window.setTimeout(function(){Um(0)},Hm)}
function Um(a){Tm();var b=Km();b.l=a;b.start()}
function Vm(a){Tm();var b=Km();b.l>a&&(b.l=a,b.start())}
function Xm(){window.clearTimeout(Jm);var a=Km();a.l=0;a.start()}
function Ym(){D("yt.scheduler.initialized")||(C("yt.scheduler.instance.dispose",Lm),C("yt.scheduler.instance.addJob",Nm),C("yt.scheduler.instance.addImmediateJob",Om),C("yt.scheduler.instance.cancelJob",Pm),C("yt.scheduler.instance.cancelAllJobs",Mm),C("yt.scheduler.instance.start",Rm),C("yt.scheduler.instance.pause",Sm),C("yt.scheduler.instance.setPriorityThreshold",Um),C("yt.scheduler.instance.enablePriorityThreshold",Vm),C("yt.scheduler.instance.clearPriorityThreshold",Xm),C("yt.scheduler.initialized",
!0))}
;function Zm(){rm.apply(this,arguments)}
w(Zm,rm);function $m(){Zm.h||(Zm.h=new Zm);return Zm.h}
Zm.prototype.Ya=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):rl(a,c||0)};
Zm.prototype.qa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Zm.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
Zm.prototype.pause=function(){var a=D("yt.scheduler.instance.pause");a&&a()};
var ti=$m();R("web_scheduler_auto_init")&&Ym();function an(a){var b=new aj;(b=b.isAvailable()?a?new gj(b,a):b:null)||(a=new bj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Xi(a):null;this.i=document.domain||window.location.hostname}
an.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new gh).serialize(b))}catch(f){return}else e=escape(b);Zl(a,e,c,this.i)};
an.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=$l(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
an.prototype.remove=function(a){this.h&&this.h.remove(a);am(a,"/",this.i)};var bn=function(){var a;return function(){a||(a=new an("ytidb"));return a}}();
function cn(){var a;return null==(a=bn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var dn=[],en,fn=!1;function gn(){var a={};for(en=new hn(void 0===a.handleError?jn:a.handleError,void 0===a.logEvent?kn:a.logEvent);0<dn.length;)switch(a=dn.shift(),a.type){case "ERROR":en.Nb(a.payload);break;case "EVENT":en.logEvent(a.eventType,a.payload)}}
function ln(a){fn||(en?en.Nb(a):(dn.push({type:"ERROR",payload:a}),10<dn.length&&dn.shift()))}
function mn(a,b){fn||(en?en.logEvent(a,b):(dn.push({type:"EVENT",eventType:a,payload:b}),10<dn.length&&dn.shift()))}
;function nn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function on(a){return a.substr(0,a.indexOf(":"))||a}
;var pn=Be||Ce;function qn(a){var b=Ob();return b?0<=b.toLowerCase().indexOf(a):!1}
;var rn={},sn=(rn.AUTH_INVALID="No user identifier specified.",rn.EXPLICIT_ABORT="Transaction was explicitly aborted.",rn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",rn.MISSING_INDEX="Index not created.",rn.MISSING_OBJECT_STORES="Object stores not created.",rn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",rn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",rn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
rn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",rn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",rn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",rn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",rn),tn={},un=(tn.AUTH_INVALID="ERROR",tn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",tn.EXPLICIT_ABORT="IGNORED",tn.IDB_NOT_SUPPORTED="ERROR",tn.MISSING_INDEX=
"WARNING",tn.MISSING_OBJECT_STORES="ERROR",tn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",tn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",tn.QUOTA_EXCEEDED="WARNING",tn.QUOTA_MAYBE_EXCEEDED="WARNING",tn.UNKNOWN_ABORT="WARNING",tn.INCOMPATIBLE_DB_VERSION="WARNING",tn),vn={},wn=(vn.AUTH_INVALID=!1,vn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,vn.EXPLICIT_ABORT=!1,vn.IDB_NOT_SUPPORTED=!1,vn.MISSING_INDEX=!1,vn.MISSING_OBJECT_STORES=!1,vn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,vn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,vn.QUOTA_EXCEEDED=!1,vn.QUOTA_MAYBE_EXCEEDED=!0,vn.UNKNOWN_ABORT=!0,vn.INCOMPATIBLE_DB_VERSION=!1,vn);function xn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?sn[a]:c;d=void 0===d?un[a]:d;e=void 0===e?wn[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,xn.prototype)}
w(xn,T);function yn(a,b){xn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},sn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,yn.prototype)}
w(yn,xn);function zn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zn.prototype)}
w(zn,Error);var An=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bn(a,b,c,d){b=on(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof xn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new xn("QUOTA_EXCEEDED",a);if(De&&"UnknownError"===e.name)return new xn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zn)return new xn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&An.some(function(f){return e.message.includes(f)}))return new xn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new xn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",qd:e.name})];e.level="WARNING";return e}
function Cn(a,b,c){var d=cn();return new xn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Dn(a){if(!a)throw Error();throw a;}
function En(a){return a}
function Fn(a){this.h=a}
function Gn(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Gn.all=function(a){return new Gn(new Fn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ub:0};f.ub<a.length;f={ub:f.ub},++f.ub)Gn.resolve(a[f.ub]).then(function(g){return function(h){d[g.ub]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Gn.resolve=function(a){return new Gn(new Fn(function(b,c){a instanceof Gn?a.then(b,c):b(a)}))};
Gn.reject=function(a){return new Gn(new Fn(function(b,c){c(a)}))};
Gn.prototype.then=function(a,b){var c=this,d=null!=a?a:En,e=null!=b?b:Dn;return new Gn(new Fn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Hn(c,c,d,f,g)}),c.i.push(function(){In(c,c,e,f,g)})):"FULFILLED"===c.state.status?Hn(c,c,d,f,g):"REJECTED"===c.state.status&&In(c,c,e,f,g)}))};
Gn.prototype.catch=function(a){return this.then(void 0,a)};
function Hn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Gn?Jn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function In(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Gn?Jn(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jn(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Gn?Jn(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Kn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ln(a){return new Promise(function(b,c){Kn(a,b,c)})}
function Mn(a){return new Gn(new Fn(function(b,c){Kn(a,b,c)}))}
;function Nn(a,b){return new Gn(new Fn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var On=window,U=On.ytcsi&&On.ytcsi.now?On.ytcsi.now:On.performance&&On.performance.timing&&On.performance.now&&On.performance.timing.navigationStart?function(){return On.performance.timing.navigationStart+On.performance.now()}:function(){return(new Date).getTime()};function Pn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
m=Pn.prototype;m.add=function(a,b,c){return Qn(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Qn(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Qn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Rn(a,b,c){a=a.h.createObjectStore(b,c);return new Sn(a)}
m.delete=function(a,b){return Qn(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Qn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function Tn(a,b,c){return Qn(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return Mn(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Qn(a,b,c,d){var e,f,g,h,k,l,n,p,t,r,x,y;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){z.v(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var L=new Un(l);L=Vn(L,d);return H.call(z,L,7);case 7:return n=z.i,p=Math.round(U()),Wn(a,k,p,g,void 0,b.join(),e),z.return(n);case 5:t=Aa(z);r=Math.round(U());x=Bn(t,
a.h.name,b.join(),a.h.version);if((y=x instanceof xn&&!x.h)||g>=f)Wn(a,k,r,g,x,b.join(),e),h=x;z.v(2);break;case 4:return z.return(Promise.reject(h))}})}
function Wn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof xn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&mn("QUOTA_EXCEEDED",{dbName:on(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof xn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),mn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Xn(a,!1,d,f,b,g.tag),ln(e)):Xn(a,!0,d,f,b,g.tag)}
function Xn(a,b,c,d,e,f){mn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Sn(a){this.h=a}
m=Sn.prototype;m.add=function(a,b){return Mn(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Mn(this.h.clear()).then(function(){})};
function Yn(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return Mn(this.h.count(a))};
function Zn(a,b){return $n(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Zn(this,a):Mn(this.h.delete(a))};
m.get=function(a){return Mn(this.h.get(a))};
m.index=function(a){try{return new ao(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new zn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function $n(a,b,c){a=a.h.openCursor(b.query,b.direction);return bo(a).then(function(d){return Nn(d,c)})}
function Un(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=xn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Vn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Un.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new xn("EXPLICIT_ABORT");};
Un.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Sn(a),this.i.set(a,b));return b};
function ao(a){this.h=a}
m=ao.prototype;m.count=function(a){return Mn(this.h.count(a))};
m.delete=function(a){return co(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Mn(this.h.get(a))};
m.getKey=function(a){return Mn(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function co(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return bo(a).then(function(d){return Nn(d,c)})}
function eo(a,b){this.request=a;this.cursor=b}
function bo(a){return Mn(a).then(function(b){return b?new eo(a,b):null})}
m=eo.prototype;m.advance=function(a){this.cursor.advance(a);return bo(this.request)};
m.continue=function(a){this.cursor.continue(a);return bo(this.request)};
m.delete=function(){return Mn(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Mn(this.cursor.update(a))};function fo(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Pn(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pd,k=c.blocking,l=c.Ze,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(r){try{if(null===r.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");r.dataLoss&&"none"!==r.dataLoss&&mn("IDB_DATA_CORRUPTED",{reason:r.dataLossMessage||"unknown reason",dbName:on(a)});var x=f(),y=new Un(g.transaction);
n&&n(x,function(z){return r.oldVersion<z&&r.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var r=g.result;k&&r.addEventListener("versionchange",function(){k(f())});
r.addEventListener("close",function(){mn("IDB_UNEXPECTEDLY_CLOSED",{dbName:on(a),dbVersion:r.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function go(a,b,c){c=void 0===c?{}:c;return fo(a,b,c)}
function ho(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pd)&&c.addEventListener("blocked",function(){e()}),g.yield(Ln(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Aa(g),Bn(f,a,"",-1);})}
;function io(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
io.prototype.i=function(a,b,c){c=void 0===c?{}:c;return go(a,b,c)};
io.prototype.delete=function(a){a=void 0===a?{}:a;return ho(this.name,a)};
function jo(a,b){return new xn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function ko(a,b){if(!b)throw Cn("openWithToken",on(a.name));return a.open()}
io.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,r,x;return A(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",za(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:h=y.i;for(var z=c.options,H=[],L=v(Object.keys(z.Bb)),I=L.next();!I.done;I=L.next()){I=I.value;var da=z.Bb[I],S=void 0===da.Ge?Number.MAX_VALUE:da.Ge;!(h.h.version>=da.Gb)||h.h.version>=S||h.h.objectStoreNames.contains(I)||H.push(I)}k=H;if(0===k.length){y.v(5);break}l=Object.keys(c.options.Bb);n=h.objectStoreNames();
if(c.m<ml("ytidb_reopen_db_retries",0))return c.m++,h.close(),ln(new xn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.l<ml("ytidb_remake_db_retries",1))){y.v(6);break}c.l++;return y.yield(c.delete(),7);case 7:return ln(new xn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());case 6:throw new yn(n,l);case 5:return y.return(h);case 2:p=Aa(y);if(p instanceof DOMException?
"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:t=y.i;r=t.h.version;if(void 0!==c.options.version&&r>c.options.version+1)throw t.close(),c.j=!1,jo(c,r);return y.return(t);case 8:throw b(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bn(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw jo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ze:b,upgrade:this.options.upgrade};return this.h=d=a()};var lo=new io("YtIdbMeta",{Bb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&Rn(a,"databases",{keyPath:"actualName"})}});
function mo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(ko(lo,b),2);c=d.i;return d.return(Qn(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Mn(f.h.put(a,void 0)).then(function(){})})}))})}
function no(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(ko(lo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function oo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(ko(lo,b),2)):3!=e.h?(d=e.i,e.yield(Qn(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return $n(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function po(a){return oo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function qo(a,b,c){return oo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function ro(a){var b,c;return A(function(d){if(1==d.h)return b=qm("YtIdbMeta hasAnyMeta other"),d.yield(oo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var so,to=new function(){}(new function(){});
function uo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=cn();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=pn)f=/WebKit\/([0-9]+)/.exec(Ob()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Ob()),f=!(f&&602<=parseInt(f[1],10)));if(f||Pc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(mo(d,to),4);case 4:return e.yield(no("yt-idb-test-do-not-use",to),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function vo(){if(void 0!==so)return so;fn=!0;return so=uo().then(function(a){fn=!1;var b;if(null!=(b=bn())&&b.h){var c;b={hasSucceededOnce:(null==(c=cn())?void 0:c.hasSucceededOnce)||a};var d;null==(d=bn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wo(){return D("ytglobal.idbToken_")||void 0}
function xo(){var a=wo();return a?Promise.resolve(a):vo().then(function(b){(b=b?to:void 0)&&C("ytglobal.idbToken_",b);return b})}
;var yo=0;function zo(a,b){yo||(yo=ti.oa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(xo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(qo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(ho(f.actualName),7);case 7:return h.yield(no(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Aa(h),ln(g),d=!1;case 4:ti.qa(yo),yo=0,d&&zo(a,b),h.h=0}})}))}
function Ao(){var a;return A(function(b){return 1==b.h?b.yield(xo(),2):(a=b.i)?b.return(ro(a)):b.return(!1)})}
new Ih;function Bo(a){if(!pm())throw a=new xn("AUTH_INVALID",{dbName:a}),ln(a),a;var b=qm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Co(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(xo(),2);case 2:g=n.i;if(!g)throw h=Cn("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ln(h),h;nn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Bo(a);za(n,3);return n.yield(mo(k,g),5);case 5:return n.yield(go(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Aa(n),za(n,7),n.yield(no(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Aa(n);case 8:throw l;}})}
function Do(a,b,c){c=void 0===c?{}:c;return Co(a,b,!1,c)}
function Eo(a,b,c){c=void 0===c?{}:c;return Co(a,b,!0,c)}
function Fo(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(xo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();nn(a);d=Bo(a);return e.yield(ho(d.actualName,b),3)}return e.yield(no(d.actualName,c),0)})}
function Go(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(ho(d.actualName,b),2):e.yield(no(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ho(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(xo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();nn("LogsDatabaseV2");return d.yield(po(b),3)}c=d.i;return d.yield(Go(c,a,b),0)})}
function Io(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(xo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();nn(a);return d.yield(ho(a,b),3)}return d.yield(no(a,c),0)})}
;function Jo(a,b){io.call(this,a,b);this.options=b;nn(a)}
w(Jo,io);function Ko(a,b){var c;return function(){c||(c=new Jo(a,b));return c}}
Jo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.oc?Eo:Do)(a,b,Object.assign({},c))};
Jo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.oc?Io:Fo)(this.name,a)};
function Lo(a,b){return Ko(a,b)}
;var Mo={},No=Lo("ytGcfConfig",{Bb:(Mo.coldConfigStore={Gb:1},Mo.hotConfigStore={Gb:1},Mo),oc:!1,upgrade:function(a,b){b(1)&&(Yn(Rn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Yn(Rn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Oo(a){return ko(No(),a)}
function Po(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Oo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Tn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Qo(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Oo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Tn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Ro(a){var b,c;return A(function(d){return 1==d.h?d.yield(Oo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Qn(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return co(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function So(a){var b,c;return A(function(d){return 1==d.h?d.yield(Oo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Qn(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return co(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function To(){F.call(this);this.i=[];this.h=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],C("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(To,F);To.prototype.M=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;F.prototype.M.call(this)};function Uo(){this.h=0;this.i=new To}
function Vo(){var a;return null!=(a=D("yt.gcf.config.hotConfigGroup"))?a:null}
function Wo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.v(0);break}c&&(a.j=c,C("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=wo();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(So(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Po(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Xo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!R("start_client_gcf"))return h.v(0);a.coldHashData=b;C("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=wo())?c?h.v(4):h.yield(Ro(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(Qo(c,b,g,d),0)})}
function Yo(){if(!Uo.h){var a=new Uo;Uo.h=a}a=Uo.h;var b=U()-a.h;if(!(0!==a.h&&b<ml("send_config_hash_timer"))){b=D("yt.gcf.config.coldConfigData");var c=D("yt.gcf.config.hotHashData"),d=D("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Uo.prototype.l=function(a){this.hotHashData=a;C("yt.gcf.config.hotHashData",this.hotHashData||null)};function Zo(){return"INNERTUBE_API_KEY"in Sk&&"INNERTUBE_API_VERSION"in Sk}
function $o(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),ke:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ld:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Sf:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),me:P("INNERTUBE_CONTEXT_HL"),le:P("INNERTUBE_CONTEXT_GL"),ne:P("INNERTUBE_HOST_OVERRIDE")||"",pe:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oe:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ap(a){var b={client:{hl:a.me,gl:a.le,clientName:a.ld,clientVersion:a.innertubeContextClientVersion,configInfo:a.ke}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=B.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=nl();0<c.length&&(b.request={internalExperimentFlags:c});c=a.ld;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=Yl()}(d=D("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&(null==(e=B.navigator)?0:e.deviceMemory)){var f;e=null==(f=B.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=nm())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&(a=om())&&
b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=Yo())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(fl(P("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function bp(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+D("gapi.auth.getToken")().Lf:(a=Vl(Ul()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;function cp(a,b){this.version=a;this.args=b}
cp.prototype.serialize=function(){return{version:this.version,args:this.args}};function dp(a,b){this.topic=a;this.h=b}
dp.prototype.toString=function(){return this.topic};var ep=D("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Eb;K.prototype.publish=K.prototype.Xa;K.prototype.clear=K.prototype.clear;C("ytPubsub2Pubsub2Instance",ep);var fp=D("ytPubsub2Pubsub2SubscribedKeys")||{};C("ytPubsub2Pubsub2SubscribedKeys",fp);var gp=D("ytPubsub2Pubsub2TopicToKeys")||{};C("ytPubsub2Pubsub2TopicToKeys",gp);var hp=D("ytPubsub2Pubsub2IsAsync")||{};C("ytPubsub2Pubsub2IsAsync",hp);
C("ytPubsub2Pubsub2SkipSubKey",null);function ip(a,b){var c=jp();c&&c.publish.call(c,a.toString(),a,b)}
function kp(a){var b=lp,c=jp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=D("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(fp[d])try{if(f&&b instanceof dp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Va){var l=new h;h.Va=l.version}var n=h.Va}catch(z){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var t=k.args,r=t.length;if(0<r){var x=Array(r);for(k=0;k<r;k++)x[k]=t[k];var y=x}else y=[];f=p.call(n,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Yk(z)}},hp[b.toString()]?D("yt.scheduler.instance")?ti.oa(g):rl(g,0):g())});
fp[d]=!0;gp[b.toString()]||(gp[b.toString()]=[]);gp[b.toString()].push(d);return d}
function mp(){var a=np,b=kp(function(c){a.apply(void 0,arguments);op(b)});
return b}
function op(a){var b=jp();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete fp[c]}))}
function jp(){return D("ytPubsub2Pubsub2Instance")}
;function pp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&ip("meta_logging_csi_event",{timerName:a,kg:b})}
;var qp=void 0,rp=void 0;function sp(){rp||(rp=uk(P("WORKER_SERIALIZATION_URL")));return rp||void 0}
function tp(){var a=sp();qp||void 0===a||(qp=new Worker(Eb(a),void 0));return qp}
;var up=ml("max_body_size_to_compress",5E5),vp=ml("min_body_size_to_compress",500),wp=!0,xp=0,yp=0,zp=ml("compression_performance_threshold_lr",250),Ap=ml("slow_compressions_before_abandon_count",4),Bp=!1,Cp=new Map,Dp=1,Ep=!0;function Fp(){if("function"===typeof Worker&&sp()&&!Bp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Cp.get(c.key);d&&(Gp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Cp.delete(c.key))}},b=tp();
b&&(b.addEventListener("message",a),b.onerror=function(){Cp.clear()},Bp=!0)}}
function Hp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(wp)try{var g=Ip(b);if(null!=g&&(g>up||g<vp))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Ep||!R("initial_gzip_use_main_thread"))){Bp||Fp();var h=tp();if(h&&!e){Cp.set(Dp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Dp});Dp++;return}}var k=tk(oi(b));Gp(k,f,a,c,d)}}catch(l){Zk(l),d(a,c)}else d(a,c)}
function Gp(a,b,c,d,e){Ep=!1;var f=U();b.ticks.gelc=f;yp++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=zp&&(xp++,R("abandon_compression_after_N_slow_zips")?yp===ml("compression_disable_point")&&xp>Ap&&(wp=!1):wp=!1);Jp(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Kp(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?D("yt.logging.gzipForFetch",!1):!0;if(wp&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Ip(g);if(null!=h&&(h>up||h<vp))return a;f=tk(oi(g),b?{level:1}:void 0);var k=U();e.ticks.gelc=k;if(b){yp++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=zp)if(xp++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=xp/yp;var l=Ap/ml("compression_disable_point");0<yp&&0===yp%ml("compression_disable_point")&&b>=l&&(wp=!1)}else wp=!1;Jp(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return Zk(n),a}}else return a}
function Ip(a){try{return(new Blob(a.split(""))).size}catch(b){return Zk(b),null}}
function Jp(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||pp("gel_compression",a,{sampleRate:.1})}
;function Lp(a){a=Object.assign({},a);delete a.Authorization;var b=Bg();if(b){var c=new Bi;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=Ge(c.digest(),3)}return a}
;var Mp;function Np(){Mp||(Mp=new an("yt.innertube"));return Mp}
function Op(a,b,c,d){if(d)return null;d=Np().get("nextId",!0)||1;var e=Np().get("requests",!0)||{};e[d]={method:a,request:b,authState:Lp(c),requestTime:Math.round(U())};Np().set("nextId",d+1,86400,!0);Np().set("requests",e,86400,!0);return d}
function Pp(a){var b=Np().get("requests",!0)||{};delete b[a];Np().set("requests",b,86400,!0)}
function Qp(a){var b=Np().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Lp(bp(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Rp(a,d.method,e,{}));delete b[c]}}Np().set("requests",b,86400,!0)}}
;function Sp(a){this.Vb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.sb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.Cd=null!=(b=a.Cd)?b:100;var c;this.wd=null!=(c=a.wd)?c:1;var d;this.ud=null!=(d=a.ud)?d:2592E6;var e;this.sd=null!=(e=a.sd)?e:12E4;var f;this.vd=null!=(f=a.vd)?f:5E3;var g;this.T=null!=(g=a.T)?g:void 0;this.ac=!!a.ac;var h;this.Yb=null!=(h=a.Yb)?h:.1;var k;this.lc=null!=(k=a.lc)?k:10;a.handleError&&(this.handleError=a.handleError);a.sb&&(this.sb=a.sb);a.Kb&&(this.Kb=a.Kb);a.Vb&&(this.Vb=a.Vb);this.U=a.U;this.Da=a.Da;this.ba=a.ba;this.aa=a.aa;this.sendFn=a.sendFn;
this.Kc=a.Kc;this.Jc=a.Jc;Tp(this)&&(!this.U||this.U("networkless_logging"))&&Up(this)}
function Up(a){Tp(a)&&!a.Kb&&(a.h=!0,a.ac&&Math.random()<=a.Yb&&a.ba.Rd(a.T),Vp(a),a.aa.wa()&&a.Tb(),a.aa.listen(a.Kc,a.Tb.bind(a)),a.aa.listen(a.Jc,a.Yc.bind(a)))}
m=Sp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Tp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ba.set(d,this.T).then(function(e){d.id=e;c.aa.wa()&&Wp(c,d)}).catch(function(e){Wp(c,d);
Xp(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Tp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.U&&this.U("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.U&&this.U("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.ba.set(e,d.T).catch(function(l){Xp(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ba.set(e,this.T).catch(function(g){d.sendFn(a,b,e.skipRetry);
Xp(d,g)})}else this.sendFn(a,b,this.U&&this.U("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Tp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.ba.qb(d.id,c.T):e=!0;c.aa.gb&&c.U&&c.U("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ba.set(d,this.T).then(function(g){d.id=g;e&&c.ba.qb(d.id,c.T)}).catch(function(g){Xp(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Tb=function(){var a=this;if(!Tp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.oa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.ba.hd("NEW",a.T),2);if(3!=c.h)return b=c.i,b?c.yield(Wp(a,b),3):(a.Yc(),c.return());a.i&&(a.i=0,a.Tb());c.h=0})},this.Cd))};
m.Yc=function(){this.Da.qa(this.i);this.i=0};
function Wp(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Tp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.v(2);break}return d.yield(a.ba.se(b.id,a.T),3);case 3:(c=d.i)||a.sb(Error("The request cannot be found in the database."));case 2:if(Yp(a,b,a.ud)){d.v(4);break}a.sb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.v(5);break}return d.yield(a.ba.qb(b.id,a.T),5);case 5:return d.return();case 4:b.skipRetry||(b=Zp(a,
b));if(!b){d.v(0);break}if(!b.skipRetry||void 0===b.id){d.v(8);break}return d.yield(a.ba.qb(b.id,a.T),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Zp(a,b){if(!Tp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=$p(f);(h=aq(f))&&a.U&&a.U("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.U&&a.U("nwl_consider_error_code")&&g||a.U&&!a.U("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.lc)){n.v(2);break}if(!a.aa.nc){n.v(3);break}return n.yield(a.aa.nc(),3);case 3:if(a.aa.wa()){n.v(2);break}c(e,f);if(!a.U||!a.U("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);
break}return n.yield(a.ba.Nc(b.id,a.T,!1),6);case 6:return n.return();case 2:if(a.U&&a.U("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.lc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.v(8);break}return b.sendCount<a.wd?n.yield(a.ba.Nc(b.id,a.T,!0,h?!1:void 0),12):n.yield(a.ba.qb(b.id,a.T),8);case 12:a.Da.oa(function(){a.aa.wa()&&a.Tb()},a.vd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):h.yield(a.ba.qb(b.id,a.T),2);a.aa.gb&&a.U&&a.U("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function Yp(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Vp(a){if(!Tp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ba.hd("QUEUED",a.T).then(function(b){b&&!Yp(a,b,a.sd)?a.Da.oa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.v(2):c.yield(a.ba.Nc(b.id,a.T),2);Vp(a);c.h=0})}):a.aa.wa()&&a.Tb()})}
function Xp(a,b){a.Id&&!a.aa.wa()?a.Id(b):a.handleError(b)}
function Tp(a){return!!a.T||a.Vb}
function $p(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function aq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var bq;
function cq(){if(bq)return bq();var a={};bq=Lo("LogsDatabaseV2",{Bb:(a.LogsRequestsStore={Gb:2},a),oc:!1,upgrade:function(b,c,d){c(2)&&Rn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Yn(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return bq()}
;function dq(a){return ko(cq(),a)}
function eq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(dq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Tn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();fq(c);return g.return(f)})}
function gq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(dq(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Qn(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(n){return co(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=U();fq(c);return l.return(k)})}
function hq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(dq(b),2);c=d.i;return d.return(Qn(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Mn(f.h.put(g,void 0)).then(function(){return g})})}))})}
function iq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(dq(b),2);e=f.i;return f.return(Qn(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Mn(h.h.put(k,void 0)).then(function(){return k})):Gn.resolve(void 0)})}))})}
function jq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(dq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function kq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(dq(a),2);b=d.i;c=U()-2592E6;return d.yield(Qn(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return $n(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function lq(){A(function(a){return a.yield(Ho(),0)})}
function fq(a){R("nwl_csi_killswitch")||pp("networkless_performance",a,{sampleRate:1})}
;var mq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488};var nq={},oq=Lo("ServiceWorkerLogsDatabase",{Bb:(nq.SWHealthLog={Gb:1},nq),oc:!0,upgrade:function(a,b){b(1)&&Yn(Rn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function pq(a){return ko(oq(),a)}
function qq(a){var b,c;A(function(d){if(1==d.h)return d.yield(pq(a),2);b=d.i;c=U()-2592E6;return d.yield(Qn(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return $n(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function rq(a){var b;return A(function(c){if(1==c.h)return c.yield(pq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var sq={},tq=0;function uq(a){var b=new Image,c=""+tq++;sq[c]=b;b.onload=b.onerror=function(){delete sq[c]};
b.src=a}
;function vq(){this.h=new Map;this.i=!1}
function wq(){if(!vq.h){var a=D("yt.networkRequestMonitor.instance")||new vq;C("yt.networkRequestMonitor.instance",a);vq.h=a}return vq.h}
vq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
vq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
vq.prototype.removeParams=function(a){return a.split("?")[0]};
vq.prototype.removeParams=vq.prototype.removeParams;vq.prototype.isEndpointCFR=vq.prototype.isEndpointCFR;vq.prototype.requestComplete=vq.prototype.requestComplete;vq.getInstance=wq;var xq;function yq(){xq||(xq=new an("yt.offline"));return xq}
function zq(a){if(R("offline_error_handling")){var b=yq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);yq().set("errors",b,2592E3,!0)}}
;function Aq(){zd.call(this);var a=this;this.j=!1;this.i=si();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=yq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Yk(d)}yq().set("errors",{},2592E3,!0)}}})}
w(Aq,zd);function Bq(){if(!Aq.h){var a=D("yt.networkStatusManager.instance")||new Aq;C("yt.networkStatusManager.instance",a);Aq.h=a}return Aq.h}
m=Aq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.ee=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Wd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.nc=function(a){a=qi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&wq().requestComplete("generate_204",b)});
return a};
Aq.prototype.sendNetworkCheckRequest=Aq.prototype.nc;Aq.prototype.listen=Aq.prototype.listen;Aq.prototype.enableErrorFlushing=Aq.prototype.Wd;Aq.prototype.getWindowStatus=Aq.prototype.ee;Aq.prototype.networkStatusHint=Aq.prototype.gb;Aq.prototype.isNetworkAvailable=Aq.prototype.wa;Aq.getInstance=Bq;function Cq(a){a=void 0===a?{}:a;zd.call(this);var b=this;this.i=this.m=0;this.j=Bq();var c=D("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Dq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Dq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ad(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ad(b,"publicytnetworkstatus-offline")})))}
w(Cq,zd);Cq.prototype.wa=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Cq.prototype.gb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Cq.prototype.nc=function(a){var b=this,c;return A(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&wq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Dq(a,b){a.rateLimit?a.i?(ti.qa(a.m),a.m=ti.oa(function(){a.l!==b&&(Ad(a,b),a.l=b,a.i=U())},a.rateLimit-(U()-a.i))):(Ad(a,b),a.l=b,a.i=U()):Ad(a,b)}
;var Eq;function Fq(){var a=Sp.call;Eq||(Eq=new Cq({Xf:!0,Pf:!0}));a.call(Sp,this,{ba:{Rd:kq,qb:jq,hd:gq,se:hq,Nc:iq,set:eq},aa:Eq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Zk(new T(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Yk(b)},
sb:Zk,sendFn:Gq,now:U,Id:zq,Da:$m(),Kc:"publicytnetworkstatus-online",Jc:"publicytnetworkstatus-offline",ac:!0,Yb:.1,lc:ml("potential_esf_error_limit",10),U:R,Kb:!(pm()&&Hq())});this.j=new Ih;R("networkless_immediately_drop_all_requests")&&lq();Io("LogsDatabaseV2")}
w(Fq,Sp);function Iq(){var a=D("yt.networklessRequestController.instance");a||(a=new Fq,C("yt.networklessRequestController.instance",a),R("networkless_logging")&&xo().then(function(b){a.T=b;Up(a);a.j.resolve();a.ac&&Math.random()<=a.Yb&&a.T&&qq(a.T);R("networkless_immediately_drop_sw_health_store")&&Jq(a)}));
return a}
Fq.prototype.writeThenSend=function(a,b){b||(b={});pm()||(this.h=!1);Sp.prototype.writeThenSend.call(this,a,b)};
Fq.prototype.sendThenWrite=function(a,b,c){b||(b={});pm()||(this.h=!1);Sp.prototype.sendThenWrite.call(this,a,b,c)};
Fq.prototype.sendAndWrite=function(a,b){b||(b={});pm()||(this.h=!1);Sp.prototype.sendAndWrite.call(this,a,b)};
Fq.prototype.awaitInitialization=function(){return this.j.promise};
function Jq(a){var b;A(function(c){if(!a.T)throw b=Cn("clearSWHealthLogsDb"),b;return c.return(rq(a.T).catch(function(d){a.handleError(d)}))})}
function Gq(a,b,c,d){d=void 0===d?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Kq(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)Bl(a,void 0,"POST",f);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Bl(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new $a({url:a});if(k.j&&k.i||k.l){var l=bc(cc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(pc),t=oc(a,0,"ri",p);if(0>t)var r=null;else{var x=a.indexOf("&",t);if(0>x||x>p)x=p;r=decodeURIComponent(a.slice(t+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==r}var y=!n;break b}}catch(H){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=!1;c||
uq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Hp(a,b.postBody,b,yl,d)):Hp(a,JSON.stringify(b.postParams),b,Gl,d):yl(a,b)}
function Kq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){wq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){wq().requestComplete(a,!0);d(e,f)}}
function Hq(){return"www.youtube-nocookie.com"!==dc(document.location.toString())}
;var Lq=!1,Mq=B.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Lq};C("ytNetworklessLoggingInitializationOptions",Mq);function Nq(){var a;A(function(b){if(1==b.h)return b.yield(xo(),2);a=b.i;if(!a||!pm()&&!R("nwl_init_require_datasync_id_killswitch")||!Hq())return b.v(0);Lq=!0;Mq.isNwlInitialized=Lq;return b.yield(Iq().awaitInitialization(),0)})}
;function Oq(a){var b=this;this.config_=null;a?this.config_=a:Zo()&&(this.config_=$o());sm(function(){Qp(b)},5E3)}
Oq.prototype.isReady=function(){!this.config_&&Zo()&&(this.config_=$o());return!!this.config_};
function Rp(a,b,c,d){function e(x){x=void 0===x?!1:x;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=Op(b,c,l,k)),y)){var z=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(da,S){Pp(y);z(da,S)};
c.onFetchSuccess=function(da,S){Pp(y);H(da,S)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Iq().writeThenSend(r,g):Iq().sendAndWrite(r,g);
else if(d.compress){var L=!d.networklessOptions.writeThenSend;if(g.postBody){var I=g.postBody;"string"!==typeof I&&(I=JSON.stringify(g.postBody));Hp(r,I,g,yl,L)}else Hp(r,JSON.stringify(g.postParams),g,Gl,L)}else R("web_all_payloads_via_jspb")?yl(r,g):Gl(r,g)}catch(da){if("InvalidAccessError"==da.name)y&&(Pp(y),y=0),Zk(Error("An extension is blocking network request."));else throw da;}y&&sm(function(){Qp(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Zk(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);Yk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,y){if(d.onError)d.onError(y)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ne)&&(h=f);var k=a.config_.pe||!1,l=bp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.oe&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.innertubeApiKey);var r=hl(""+h+n,p||{},!0);(D("ytNetworklessLoggingInitializationOptions")?
Mq.isNwlInitialized:Lq)?vo().then(function(x){e(x)}):e(!1)}
;var Pq=0,Qq=Rc?"webkit":Qc?"moz":Oc?"ms":Nc?"o":"";C("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Pq});var Rq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Tq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Sq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=B.ytEventsEventsListeners||{};C("ytEventsEventsListeners",nb);var Uq=B.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Uq);
function Vq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Wq=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Xq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Vq(a,b,c,d);if(e)return e;e=++Uq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sq(h);if(!Jd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sq(h);
h.currentTarget=a;return c.call(a,h)};
g=Xk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function Yq(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;function Zq(a){this.B=a;this.h=null;this.l=0;this.s=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.S=Xq(window,"mousemove",Ua(this.W,this));a=Ua(this.R,this);"function"===typeof a&&(a=Xk(a));this.Y=window.setInterval(a,25)}
Xa(Zq,F);Zq.prototype.W=function(a){void 0===a.h&&Tq(a);var b=a.h;void 0===a.i&&Tq(a);this.h=new Fd(b,a.i)};
Zq.prototype.R=function(){if(this.h){var a=U();if(0!=this.l){var b=this.s,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.B();this.m=d}this.l=a;this.s=this.h;this.j=(this.j+1)%4}};
Zq.prototype.M=function(){window.clearInterval(this.Y);Yq(this.S)};var $q={};
function ar(a){var b=void 0===a?{}:a;a=void 0===b.Ce?!1:b.Ce;b=void 0===b.Xd?!0:b.Xd;if(null==D("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;C("_lact",c,window);C("_fact",c,window);-1==c&&br();Xq(document,"keydown",br);Xq(document,"keyup",br);Xq(document,"mousedown",br);Xq(document,"mouseup",br);a?Xq(window,"touchmove",function(){cr("touchmove",200)},{passive:!0}):(Xq(window,"resize",function(){cr("resize",200)}),b&&Xq(window,"scroll",function(){cr("scroll",200)}));
new Zq(function(){cr("mouse",100)});
Xq(document,"touchstart",br,{passive:!0});Xq(document,"touchend",br,{passive:!0})}}
function cr(a,b){$q[a]||($q[a]=!0,ti.oa(function(){br();$q[a]=!1},b))}
function br(){null==D("_lact",window)&&ar();var a=Date.now();C("_lact",a,window);-1==D("_fact",window)&&C("_fact",a,window);(a=D("ytglobal.ytUtilActivityCallback_"))&&a()}
function dr(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var er=B.ytPubsubPubsubInstance||new K,fr=B.ytPubsubPubsubSubscribedKeys||{},gr=B.ytPubsubPubsubTopicToKeys||{},hr=B.ytPubsubPubsubIsSynchronous||{};function ir(a,b){var c=jr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){fr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{hr[a]?f():rl(f,0)}catch(g){Yk(g)}},void 0);
fr[d]=!0;gr[a]||(gr[a]=[]);gr[a].push(d);return d}return 0}
function kr(a){var b=jr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete fr[c]}))}
function lr(a,b){var c=jr();c&&c.publish.apply(c,arguments)}
function mr(a){var b=jr();if(b)if(b.clear(a),a)nr(a);else for(var c in gr)nr(c)}
function jr(){return B.ytPubsubPubsubInstance}
function nr(a){gr[a]&&(a=gr[a],eb(a,function(b){fr[b]&&delete fr[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Eb;K.prototype.publish=K.prototype.Xa;K.prototype.clear=K.prototype.clear;C("ytPubsubPubsubInstance",er);C("ytPubsubPubsubTopicToKeys",gr);C("ytPubsubPubsubIsSynchronous",hr);C("ytPubsubPubsubSubscribedKeys",fr);var or=Symbol("injectionDeps");function pr(a){this.name=a}
pr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function qr(a){this.key=a}
function rr(){this.h=new Map;this.i=new Map}
rr.prototype.resolve=function(a){return a instanceof qr?sr(this,a.key,[],!0):sr(this,a,[])};
function sr(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Fd)var e=d.Fd;else if(d.ff)e=d[or]?tr(a,d[or],c):[],e=d.ff.apply(d,ma(e));else if(d.Ed){e=d.Ed;var f=e[or]?tr(a,e[or],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ig||a.i.set(b,e);return e}
function tr(a,b,c){return b?b.map(function(d){return d instanceof qr?sr(a,d.key,c,!0):sr(a,d,c)}):[]}
;var ur;function vr(){ur||(ur=new rr);return ur}
;var wr=window;function xr(){var a,b;return"h5vcc"in wr&&(null==(a=wr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=wr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in wr&&wr.performance.mark&&wr.performance.measure?2:0}
function yr(a){switch(xr()){case 1:wr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:wr.performance.mark(a+"-start");break;case 0:break;default:Th()}}
function zr(a){switch(xr()){case 1:wr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";wr.performance.mark(c);wr.performance.measure(a,b,c);break;case 0:break;default:Th()}}
;var Ar=R("web_enable_lifecycle_monitoring")&&0!==xr(),Br=R("web_enable_lifecycle_monitoring");function Cr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?$m():d;this.j=c;this.scheduler=d;this.i=new Ih;this.h=a;for(a={cb:0};a.cb<this.h.length;a={Ob:a.Ob,cb:a.cb},a.cb++)a.Ob=this.h[a.cb],c=function(e){return function(){e.Ob.Ec();b.h[e.cb].mc=!0;b.h.every(function(f){return!0===f.mc})&&b.i.resolve()}}(a),d=this.getPriority(a.Ob),d=this.scheduler.Ya(c,d),this.h[a.cb]=Object.assign({},a.Ob,{Ec:c,
jobId:d})}
function Dr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.mc||(a.scheduler.qa(c.jobId),a.scheduler.Ya(c.Ec,10))}
Cr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.mc||this.scheduler.qa(b.jobId),b.mc=!0;this.i.resolve()};
Cr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Er(a){this.state=a;this.plugins=[];this.l=void 0;this.s={};Ar&&yr(this.state)}
m=Er.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;Ia.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Ar&&zr(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Dr(this.j),this.j=void 0);Fr(this,a,b);this.state=a;Ar&&yr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Gr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Gr(a,b){var c=b.filter(function(e){return 10===Hr(a,e)}),d=b.filter(function(e){return 10!==Hr(a,e)});
return a.s.hg?function(){var e=Ia.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Je.apply(a,[c].concat(ma(e))),2);a.zd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=Ia.apply(0,arguments);
a.Ke.apply(a,[c].concat(ma(e)));a.zd.apply(a,[d].concat(ma(e)))}}
m.Ke=function(a){for(var b=Ia.apply(1,arguments),c=$m(),d=v(a),e=d.next(),f={};!e.done;f={xb:f.xb},e=d.next())f.xb=e.value,c.Fb(function(g){return function(){Ir(g.xb.name);g.xb.callback.apply(g.xb,ma(b));Jr(g.xb.name)}}(f))};
m.Je=function(a){var b=Ia.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=$m(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.v(0);f.eb=e.value;f.Hb=void 0;g=function(k){return function(){Ir(k.eb.name);var l=k.eb.callback.apply(k.eb,ma(b));"function"===typeof(null==l?void 0:l.then)?k.Hb=l.then(function(){Jr(k.eb.name)}):Jr(k.eb.name)}}(f);
c.Fb(g);return f.Hb?h.yield(f.Hb,3):h.v(3)}f={eb:f.eb,Hb:f.Hb};e=d.next();return h.v(2)})};
m.zd=function(a){var b=Ia.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Ir(e.name);e.callback.apply(e,ma(b));Jr(e.name)},
priority:Hr(c,e)}});
d.length&&(this.j=new Cr(d))};
function Hr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Ir(a){Ar&&a&&yr(a)}
function Jr(a){Ar&&a&&zr(a)}
function Fr(a,b,c){Br&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ia.Object.defineProperties(Er.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Kr(a){Er.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.m},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Lr;w(Kr,Er);Kr.prototype.i=function(a,b){var c=this;this.h=sm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Kr.prototype.m=function(a,b){this.h&&(ti.qa(this.h),this.h=null);a(null==b?void 0:b.event)};
function Mr(){Lr||(Lr=new Kr);return Lr}
;var Nr=[];C("yt.logging.transport.getScrapedGelPayloads",function(){return Nr});function Or(){this.store={};this.h={}}
Or.prototype.storePayload=function(a,b){a=Pr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Or.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Qr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
Or.prototype.extractMatchingEntries=function(a){a=Qr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
Or.prototype.getSequenceCount=function(a){a=Qr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Qr(a,b){var c=Pr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Pr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Rr(b.auth,g[0])){var h=b.isJspb;Rr(void 0===h?"undefined":h?"true":"false",g[1])&&Rr(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Rr(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Rr(a,b){return void 0===a||"undefined"===a?!0:a===b}
Or.prototype.getSequenceCount=Or.prototype.getSequenceCount;Or.prototype.extractMatchingEntries=Or.prototype.extractMatchingEntries;Or.prototype.smartExtractMatchingEntries=Or.prototype.smartExtractMatchingEntries;Or.prototype.storePayload=Or.prototype.storePayload;function Pr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Sr(a,b){if(a)return a[b.name]}
;var Tr=ml("initial_gel_batch_timeout",2E3),Ur=ml("gel_queue_timeout_max_ms",6E4),Vr=Math.pow(2,16)-1,Wr=ml("gel_min_batch_size",5),Xr=void 0;function Yr(){this.l=this.h=this.i=0;this.j=!1}
var Zr=new Yr,$r=new Yr,as=new Yr,bs=new Yr,cs,ds=!0,es=B.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",es);var gs={};function hs(){var a=D("yt.logging.ims");a||(a=new Or,C("yt.logging.ims",a));return a}
function is(a,b){if("log_event"===a.endpoint){js();var c=ks(a),d=ls(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=mq[d||""];var f,g,h,k=null==vr().resolve(new qr(Uo))?void 0:null==(f=Vo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!R("web_payload_policy_disabled_killswitch"))return;k=ms(e.tier);if(400===k){ns(a,b);return}}gs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};hs().storePayload(e,a.payload);ps(b,c,e,"gelDebuggingEvent"===d)}}
function ps(a,b,c,d){function e(){qs({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;a&&(Xr=new a);a=ml("tvhtml5_logging_max_batch_ads_fork")||ml("web_logging_max_batch")||100;var g=U(),h=rs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=hs().getSequenceCount(c));1E3<=d?e():d>=a?cs||(cs=ss(function(){e();cs=void 0},0)):10<=g-k&&(ts(f,c.tier),h.l=g)}
function ns(a,b){if("log_event"===a.endpoint){js();var c=ks(a),d=new Map;d.set(c,[a.payload]);var e=ls(a.payload)||"";b&&(Xr=new b);return new Wd(function(f,g){Xr&&Xr.isReady()?us(d,Xr,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function ks(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);es[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function qs(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Wd(function(e,f){var g=rs(c,d),h=g.j;g.j=!1;vs(g.i);vs(g.h);g.h=0;Xr&&Xr.isReady()?void 0===d&&R("enable_web_tiered_gel")?ws(e,f,a,b,c,300,h):ws(e,f,a,b,c,d,h):(ts(c,d),e())})}
function ws(a,b,c,d,e,f,g){var h=Xr;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map;var l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=R("enable_web_tiered_gel")?hs().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):hs().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(gs)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?hs().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):hs().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete gs[l];us(k,h,a,b,c,!1,g)}
function ts(a,b){function c(){qs({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=rs(a,b),e=d===bs||d===as?5E3:Ur;R("web_gel_timeout_cap")&&!d.h&&(e=ss(function(){c()},e),d.h=e);
vs(d.i);e=P("LOGGING_BATCH_TIMEOUT",ml("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&ds&&(e=Tr);e=ss(function(){0<ml("gel_min_batch_size")?hs().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Wr&&c():c()},e);
d.i=e}
function us(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(U()),k=a.size,l=(void 0===g?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={hc:g.hc,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,jc:g.jc,ic:g.ic},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=tb({context:ap(b.config_||$o())});if(!Na(p)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=
p;(p=es[n])&&xs(g.batchRequest,n,p);delete es[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;ys(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.jc=function(t){R("start_client_gcf")&&ti.oa(function(){return A(function(r){return r.yield(zs(t),0)})});
k--;k||c()};
g.hc=0;g.ic=function(t){return function(){t.hc++;if(e.bypassNetworkless&&1===t.hc)try{Rp(b,l,t.batchRequest,As({writeThenSend:!0},t.dangerousLogToVisitorSession,t.jc,t.ic,f)),ds=!1}catch(r){Yk(r),d()}k--;k||c()}}(g);
try{Rp(b,l,g.batchRequest,As(e,g.dangerousLogToVisitorSession,g.jc,g.ic,f)),ds=!1}catch(t){Yk(t),d()}}}
function As(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Mf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};Bs()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function ys(a,b,c){Bs()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Vr/2)),c++,c>Vr&&(c=1),Tk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function xs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function js(){var a;(a=D("yt.logging.transport.enableScrapingForTest"))||(a=ll("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Nr=[],C("yt.logging.transport.enableScrapingForTest",!0),C("yt.logging.transport.scrapedPayloadsForTesting",Nr),C("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
C("yt.logging.transport.scrapeClientEvent",!0))}
function Bs(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function ss(a,b){return R("transport_use_scheduler")?R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?sm(function(){if("none"===Mr().currentState)a();else{var c={};Mr().install((c.none={callback:a},c))}},b):sm(a,b):rl(a,b)}
function vs(a){R("transport_use_scheduler")?ti.qa(a):window.clearTimeout(a)}
function zs(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Sr(d,yk),g=null==(f=d)?void 0:f.hotHashData,h=Sr(d,xk),l=null==(k=d)?void 0:k.coldHashData,(n=vr().resolve(new qr(Uo)))?g?e?p.yield(Wo(n,g,e),2):p.yield(Wo(n,g),2):p.v(2):p.return()):l?h?p.yield(Xo(n,l,h),0):p.yield(Xo(n,l),0):p.v(0)})}
function rs(a,b){b=void 0===b?200:b;return a?300===b?bs:$r:300===b?as:Zr}
function ls(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,mq[b])return b}
function ms(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Cs=B.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Cs);
function Ds(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=dr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Cs[b]=b in Cs?Cs[b]+1:0,a.sequence={index:Cs[b],groupKey:b},d.endOfSequence&&delete Cs[d.sequenceGroup]);(d.sendIsolatedPayload?ns:is)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function kn(a,b,c){c=void 0===c?{}:c;var d=Oq;P("ytLoggingEventsDefaultDisabled",!1)&&Oq===Oq&&(d=null);R("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=dr(),c.timestamp=U());Ds(a,b,d,c)}
;C("ytLoggingGelSequenceIdObj_",B.ytLoggingGelSequenceIdObj_||{});var Es=new Set,Fs=0,Gs=0,Hs=0,Is=[],Js=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function jn(a){Ks(a)}
function Ls(a){Ks(a,"WARNING")}
function Ms(a){a instanceof Error?Ks(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",Ls(a))}
function Ks(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Fs))){d=Is;var k=Cc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var t=0;t<a.args.length&&!(p=Ql(a.args[t],"params."+t,c,p),
500<=p);t++);else if(a.hasOwnProperty("params")&&a.params){var r=a.params;if("object"===typeof a.params)for(t in r){if(r[t]){var x="params."+t,y=Sl(r[t]);c[x]=y;p+=x.length+y.length;if(500<p)break}}else c.params=Sl(r)}if(d.length)for(t=0;t<d.length&&!(p=Ql(d[t],"params.context."+t,c,p),500<=p);t++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);t={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(t.lineNumber=
t.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Ml();c=v(a.Sa);for(d=c.next();!d.done;d=c.next())if(d=d.value,t.message&&t.message.match(d.Yf)){a=d.weight;break a}a=v(a.Pa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(t)){a=c.weight;break a}a=1}t.sampleWeight=a;a=v(Hl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.kc[t.name])for(e=v(c.kc[t.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=t.message.match(f.regexp)){t.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],t.params["params.error."+e[n]]=d[n+1];t.message=c.Hc(f);break}t.params||(t.params={});a=Ml();t.params["params.errorServiceSignature"]="msg="+a.Sa.length+"&cb="+a.Pa.length;t.params["params.serviceWorker"]="false";B.document&&B.document.querySelectorAll&&(t.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));zb("sample").constructor!==yb&&(t.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(t);
if(0!==t.sampleWeight&&!Es.has(t.message)){if(g&&R("web_enable_error_204"))Ns(void 0===b?"ERROR":b,t);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Nl.Xa("handleError",t),R("record_app_crashed_web")&&0===Hs&&1===t.sampleWeight&&(Hs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:t.message}}}}),kn("appCrashed",g)),Gs++):"WARNING"===b&&Nl.Xa("handleWarning",t);if(R("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Js);for(c=a.next();!c.done;c=a.next())if(qn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:t.stack};t.fileName&&(c.filename=t.fileName);a=t.lineNumber&&t.lineNumber.split?t.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:t.message,errorClassName:t.name,sampleWeight:t.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));e=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Uk("web_disable_gel_stp_ecatcher_killswitch")&&e)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=d.value,h.kvPairs.push({key:d,value:String(e[d])});if(e=t.params)for(f=v(Object.keys(e)),d=f.next();!d.done;d=f.next())d=
d.value,h.kvPairs.push({key:"client."+d,value:String(e[d])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(kn("clientError",h),("ERROR"===g||R("errors_flush_gel_always_killswitch"))&&qs(void 0,void 0,!1))}R("suppress_error_204_logging")||Ns(b,t)}try{Es.add(t.message)}catch(z){}Fs++}}}
function Ns(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}yl(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Os(){this.register=new Map}
function Ps(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.cg("ABORTED")}
Os.prototype.clear=function(){Ps(this);this.register.clear()};
var Qs=new Os;var Rs=Date.now().toString();
function Ss(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Rs)for(a=1,b=0;b<Rs.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Rs.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ts,Us=B.ytLoggingDocDocumentNonce_;Us||(Us=Ss(),C("ytLoggingDocDocumentNonce_",Us));Ts=Us;function Vs(a){this.h=a}
m=Vs.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Fk;void 0!==this.h.trackingParams?G(a,1,kf(this.h.trackingParams,!0)):(void 0!==this.h.veType&&G(a,2,uf(this.h.veType)),void 0!==this.h.veCounter&&G(a,6,uf(this.h.veCounter)),void 0!==this.h.elementIndex&&G(a,3,uf(this.h.elementIndex)),this.h.isCounterfactual&&G(a,5,rf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();$f(a,Fk,7,b)}void 0!==this.h.youtubeData&&$f(a,zk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ws(a){return P("client-screen-nonce-store",{})[void 0===a?0:a]}
function Xs(a,b){b=void 0===b?0:b;var c=P("client-screen-nonce-store");c||(c={},Tk("client-screen-nonce-store",c));c[b]=a}
function Ys(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Zs(a){return P(Ys(void 0===a?0:a))}
C("yt_logging_screen.getRootVeType",Zs);function $s(){var a=P("csn-to-ctt-auth-info");a||(a={},Tk("csn-to-ctt-auth-info",a));return a}
function at(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function bt(a){a=Ws(void 0===a?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
C("yt_logging_screen.getCurrentCsn",bt);function ct(a,b,c){var d=$s();(c=bt(c))&&delete d[c];b&&(d[a]=b)}
function dt(a){return $s()[a]}
C("yt_logging_screen.getCttAuthInfo",dt);C("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==Ws(c)||b!==P(Ys(c)))if(ct(a,d,c),Xs(a,c),Tk(Ys(c),b),b=function(){setTimeout(function(){a&&kn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ts,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var et=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};C("yt.msgs_",et);function ft(a){Ok(et,arguments)}
;function gt(){var a=sb(ht),b;return(new Wd(function(c,d){a.onSuccess=function(e){ql(e)?c(new jt(e)):d(new kt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new kt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new kt("Request timed out","net.timeout",e))};
b=yl("//googleads.g.doubleclick.net/pagead/id",a)})).pc(function(c){c instanceof ce&&b.abort();
return ae(c)})}
function kt(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(kt,Za);function jt(a){this.xhr=a}
;function lt(){this.h=0;this.value_=null}
lt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.value_))&&"function"===typeof a.then?a:mt(a):2===this.h&&b?(a=b.call(c,this.value_))&&"function"===typeof a.then?a:nt(a):this};
lt.prototype.getValue=function(){return this.value_};
lt.prototype.isRejected=function(){return 2==this.h};
lt.prototype.$goog_Thenable=!0;function nt(a){var b=new lt;a=void 0===a?null:a;b.h=2;b.value_=void 0===a?null:a;return b}
function mt(a){var b=new lt;a=void 0===a?null:a;b.h=1;b.value_=void 0===a?null:a;return b}
;function ot(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:il(a)?"same-origin":"cors",credentials:il(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function pt(){return zg()||(Be||Ce)&&qn("applewebkit")&&!qn("version")&&(!qn("safari")||qn("gsa/"))||Tc&&qn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function qt(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Dk)if(Dk[d]==c.embeddedPlayerMode){b=Dk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function rt(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof st;this.isTimeout=a instanceof kt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ce}
w(rt,Za);rt.prototype.name="BiscottiError";function st(){Za.call(this,"Biscotti ID is missing from server")}
w(st,Za);st.prototype.name="BiscottiMissingError";var ht={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},tt=null;function ut(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!pt())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==qb(a))return Error("Biscotti ID is not available in private embed mode");if(qt(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Mk(){var a=ut();if(void 0!==a)return ae(a);tt||(tt=gt().then(vt).pc(function(b){return wt(2,b)}));
return tt}
function vt(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new st;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new st;a=a.id;Nk(a);tt=mt(a);xt(18E5,2);return a}
function wt(a,b){b=new rt(b);Nk("");tt=nt(b);0<a&&xt(12E4,a-1);throw b;}
function xt(a,b){rl(function(){gt().then(vt,function(c){return wt(b,c)}).pc(bb)},a)}
function zt(){try{var a=D("yt.ads.biscotti.getId_");return a?a():Mk()}catch(b){return ae(b)}}
;function At(a){if("1"!=qb(P("PLAYER_VARS",{}))){a&&Lk();try{zt().then(function(){},function(){}),rl(At,18E5)}catch(b){Yk(b)}}}
;function Bt(){var a=fm(),b=im(119),c=1<window.devicePixelRatio;if(document.body&&Fi(document.body,"exp-invert-logo"))if(c&&!Fi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Fi(d,"inverted-hdpi")){var e=Di(d);Ei(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Fi(document.body,"inverted-hdpi")&&Gi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=jm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete cm[b]:(c=d.toString(16),cm[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in cm)cm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(cm[f])));var f=d.join("&");Zl(b,f,63072E3,a.i,c)}}
;var Ct=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Dt(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;bc(cc(5,a));try{var b=gl(a).theme;return Ct.get(b)||null}catch(c){}return null}
;function Et(){this.h={};if(this.i=bm()){var a=$l("CONSISTENCY");a&&Ft(this,{encryptedTokenJarContents:a})}}
Et.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Na.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Ft(this,a)}};
function Ft(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Zl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Gt=window.location.hostname.split(".").slice(-2).join(".");function Ht(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=It(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Jt;function Kt(){Jt=D("yt.clientLocationService.instance");Jt||(Jt=new Ht,C("yt.clientLocationService.instance",Jt));return Jt}
m=Ht.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=It(this))&&this.h.set("yt-location-playability-token",a,15552E3):Zl("YT_CL",JSON.stringify({loctok:a}),15552E3,Gt,!0))};
function It(a){return void 0===a.h?new an("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=It(this))&&this.h.remove("yt-location-playability-token"):am("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Lt(a,b){var c,d=null==(c=Sr(a,Ck))?void 0:c.signal;if(d&&b.Sb&&(c=b.Sb[d]))return c();var e;if((c=null==(e=Sr(a,Ak))?void 0:e.request)&&b.Td&&(e=b.Td[c]))return e();for(var f in a)if(b.bd[f]&&(a=b.bd[f]))return a()}
;function Mt(a){return function(){return new a}}
;var Nt={},Ot=(Nt.WEB_UNPLUGGED="^unplugged/",Nt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Nt.WEB_UNPLUGGED_OPS="^unplugged/",Nt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Nt.WEB_CREATOR="^creator/",Nt.WEB_KIDS="^kids/",Nt.WEB_EXPERIMENTS="^experiments/",Nt.WEB_MUSIC="^music/",Nt.WEB_REMIX="^music/",Nt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Nt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Nt);
function Pt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Ot[b];if(c){var d=new RegExp(c),e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Ot).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=v(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Qt(){}
Qt.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Wl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=tb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;fm();var l="USER_INTERFACE_THEME_LIGHT";im(165)?l="USER_INTERFACE_THEME_DARK":im(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");k=k?l:Dt()||l;h.userInterfaceTheme=k;if(!f){if(k=nm())h.connectionType=
k;R("web_log_effective_connection_type")&&(k=om())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=B.navigator)?0:n.deviceMemory)){var p;n=null==(p=B.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}R("web_gcf_hashes_innertube")&&(k=Yo())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=
k);p=gl(B.location.href);!R("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:B.location.href},R("kevlar_woffle")&&Xl.h&&(p=Xl.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Yl(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):
"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(p=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var t=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(J){}t=void 0}t&&(h.timeZone=t)}(t=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=
t:delete h.experimentsToken;t=nl();Et.h||(Et.h=new Et);h=Et.h.h;p=[];n=0;for(var r in h)p[n++]=h[r];g.request=Object.assign({},g.request,{internalExperimentFlags:t,consistencyTokenJars:p});!R("web_prequest_context_killswitch")&&(r=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=r);t=fm();r=im(58);t=t.get("gsml","");g.user=Object.assign({},g.user);r&&(g.user.enableSafetyMode=r);t&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=bt())&&(g.clientScreenNonce=f):
!f&&(f=bt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=D("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Kt().setLocationOnInnerTubeContext(g);try{var x=jl(),y=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:y};var z=v(Object.entries(x));for(var H=z.next();!H.done;H=z.next()){var L=v(H.value),I=L.next().value,da=L.next().value;x=I;y=da;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+y})}var S;if(R("add_ifa_to_tvh5_requests")&&"TVHTML5"===(null==
(S=g.client)?void 0:S.clientName)){var O=P("INNERTUBE_CONTEXT");O.adSignalsInfo&&(g.adSignalsInfo.advertisingId=O.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=O.adSignalsInfo.limitAdTracking)}}catch(J){Ks(J)}z=g}else Ks(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(H=this.h(a)){this.i(z,H,b);var ba;b="/youtubei/v1/"+Pt(this.j());(H=null==(ba=Sr(a.commandMetadata,Bk))?void 0:ba.apiUrl)&&(b=H);ba=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(ba=String(b)+
String(ec(ba)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint="false");ba=hl(ba,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:ba,ib:ot(ba),Na:z,config:a};a.config.Ub?a.config.Ub.identity=c:a.config.Ub={identity:c};return a}Ks(new T("Error: Failed to create Request from Command.",a))};
ia.Object.defineProperties(Qt.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Rt(){}
w(Rt,Qt);Rt.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:ot("/getDatasyncIdsEndpoint","GET"),Na:{}}};
Rt.prototype.j=function(){return[]};
Rt.prototype.h=function(){};
Rt.prototype.i=function(){};var St={},Tt=(St.GET_DATASYNC_IDS=Mt(Rt),St);var Ut="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Vt(a,b){var c=void 0===c?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(0<=db(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Nh(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:bt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&Wt(a,b,f)}else Wt(a,b)}
function Wt(a,b,c){a=Xt(a);b=b?kc(b):"";c=c||5;pt()&&Zl(a,b,c)}
function Xt(a){for(var b=v(Ut),c=b.next();!c.done;c=b.next())a=rc(a,c.value);return"ST-"+$b(a).toString(36)}
;function Yt(){try{return!!self.localStorage}catch(a){return!1}}
;function Zt(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function $t(a){if(Yt()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Zt(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function au(){if(!Yt())return!1;var a=qm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=Zt(c.value),void 0!==c&&c!==a)return!0;return!1}
;function bu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return R("copy_login_info_to_st_cookie")&&("WEB"===P("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===P("INNERTUBE_CLIENT_NAME"))&&a}
function cu(a){if(P("LOGGED_IN",!0)&&bu()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);0<=db(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=ec(a),(b=fc(b))?(b=Xt(b),b=(b=$l(b)||null)?fl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;bu()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Vt(a,b)}}
;function du(a){var b=Ia.apply(1,arguments);if(!eu(a)||b.some(function(d){return!eu(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())fu(a,c.value);return a}
function fu(a,b){for(var c in b)if(eu(b[c])){if(c in a&&!eu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});fu(a[c],b[c])}else if(gu(b[c])){if(c in a&&!gu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);hu(a[c],b[c])}else a[c]=b[c];return a}
function hu(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,eu(c)?a.push(fu({},c)):gu(c)?a.push(hu([],c)):a.push(c);return a}
function eu(a){return"object"===typeof a&&!Array.isArray(a)}
function gu(a){return"object"===typeof a&&Array.isArray(a)}
;function iu(a){var b;(b=D("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},C("ytcsi."+(a||"")+"data_",b));return b}
function ju(){var a=iu();a.info||(a.info={});return a.info}
function ku(a){a=iu(a);a.metadata||(a.metadata={});return a.metadata}
function lu(a){a=iu(a);a.tick||(a.tick={});return a.tick}
function mu(a){a=iu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function nu(a){a=mu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ou(a){var b=iu(a).nonce;b||(b=Ss(),iu(a).nonce=b);return b}
;function pu(){var a=D("ytcsi.debug");a||(a=[],C("ytcsi.debug",a),C("ytcsi.reference",{}));return a}
function qu(a){a=a||"";var b=D("ytcsi.reference");b||(pu(),b=D("ytcsi.reference"));if(b[a])return b[a];var c=pu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},ru=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W.app_startup="LATENCY_ACTION_APP_STARTUP",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",
W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channels="LATENCY_ACTION_CHANNELS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.home="LATENCY_ACTION_HOME",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.onboarding="LATENCY_ACTION_ONBOARDING",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",
W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]=
"LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]=
"LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",
W["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W.search_ui="LATENCY_ACTION_SEARCH_UI",
W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]=
"LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",
W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W.voice_assistant=
"LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W),Y={},su=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p=
"httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav=
"kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",
Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",
Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID=
"requestIds",Y),tu="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),uu={},vu=(uu.ccs="CANARY_STATE_",uu.mver="MEASUREMENT_VERSION_",uu.pis="PLAYER_INITIALIZED_STATE_",uu.yt_pt="LATENCY_PLAYER_",uu.pa="LATENCY_ACTION_",
uu.ctop="TOP_ENTITY_TYPE_",uu.yt_vst="VIDEO_STREAM_TYPE_",uu),wu="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function xu(a,b,c){c=mu(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in su){c=su[a];0<=db(tu,c)&&(b=!!b);a in vu&&"string"===typeof b&&(b=vu[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return du({},d)}0<=db(wu,a)||Ls(new T("Unknown label logged with GEL CSI",a))}
;function yu(a,b){cp.call(this,1,arguments);this.timer=b}
w(yu,cp);var zu=new dp("aft-recorded",yu);var Au=B.ytLoggingLatencyUsageStats_||{};C("ytLoggingLatencyUsageStats_",Au);function Bu(){this.h=0}
function Cu(){Bu.h||(Bu.h=new Bu);return Bu.h}
Bu.prototype.tick=function(a,b,c,d){Du(this,"tick_"+a+"_"+b)||kn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Bu.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Du(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,kn("latencyActionInfo",a,{cttAuthInfo:c}))};
Bu.prototype.jspbInfo=function(){};
Bu.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Du(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,kn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Du(a,b){Au[b]=Au[b]||{count:0};var c=Au[b];c.count++;c.time=U();a.h||(a.h=sm(function(){var d=U(),e;for(e in Au)Au[e]&&6E4<d-Au[e].time&&delete Au[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Ls(c)),!0):!1}
;var Eu=window;function Fu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Gu(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Z?void 0:null==(a=Z.getEntriesByType)?void 0:null==(b=a.call(Z,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Hu(e.requestStart),e.responseEnd=Hu(e.responseEnd),e.redirectStart=Hu(e.redirectStart),e.redirectEnd=Hu(e.redirectEnd),e.domainLookupEnd=Hu(e.domainLookupEnd),e.connectStart=Hu(e.connectStart),e.connectEnd=
Hu(e.connectEnd),e.responseStart=Hu(e.responseStart),e.secureConnectionStart=Hu(e.secureConnectionStart),e.domainLookupStart=Hu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=Z.timing;return a}
function Hu(a){return Math.round(Iu()+a)}
function Iu(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=Eu.performance||Eu.mozPerformance||Eu.msPerformance||Eu.webkitPerformance||new Fu;var Ju=!1,Ku=!1,Lu={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Ua(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||bb,Z);function Mu(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;ku(c).loadType=e}(a=xu(a,b,c))&&Nu(a,c,d)}}
function Nu(a,b){if(!R("web_csi_action_sampling_enabled")||!iu(b).actionDisabled){var c=qu(b||"");du(c.info,a);a.loadType&&(c=a.loadType,ku(b).loadType=c);du(nu(b),a);c=ou(b);b=iu(b).cttAuthInfo;Cu().info(a,c,b)}}
function Ou(){var a,b,c,d;return(null!=(d=null==vr().resolve(new qr(Uo))?void 0:null==(a=Vo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Pu(a,b,c){if(!R("web_csi_action_sampling_enabled")||!iu(c).actionDisabled){var d=ou(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(null==vr().resolve(new qr(Uo))?0:Vo())&&!Ku&&(Ku=!0,Pu("gcfl",U(),c));var f,g,h;e=(null==vr().resolve(new qr(Uo))?void 0:null==(f=Vo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=Ou();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+
d.charCodeAt(g),g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;iu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Nu(f,c));iu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Z.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Z.mark(e)));e=qu(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=mu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=lu(c);e=b||U();R("log_repeated_ytcsi_ticks")?a in f||
(f[a]=e):f[a]=e;f=iu(c).cttAuthInfo;"_start"===a?(a=Cu(),Du(a,"baseline_"+d)||kn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Cu().tick(a,d,b,f);Qu(c);return e}}}
function Ru(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Qq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Su(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Yb()&&a.setAttribute("nonce",Yb());return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=Iu(),Pu("rsf_"+b,c+Math.round(a.fetchStart)),Pu("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Tu(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Pu("wffs",Hu(b.startTime)),Pu("wffe",Hu(b.responseEnd)))}
function Uu(a){var b=Vu("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Vu(b[d],a);if(e)return e}return NaN}
function Vu(a,b){if(a=lu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Qu(a){var b=Vu("_start",a),c=Uu(a);b&&c&&!Ju&&(ip(zu,new yu(Math.round(c-b),a)),Ju=!0)}
function Wu(a,b){for(var c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Wu(a[d],b[d]))return!1;return!0}
function Xu(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return Hu(a.startTime)}a=Z.timing;
return a.xe?Math.max(0,a.xe):0}
;function Yu(a,b){Xk(function(){qu("").info.actionType=a;b&&Tk("TIMING_AFT_KEYS",b);Tk("TIMING_ACTION",a);var c=P("TIMING_INFO",{}),d;for(d in c)c.hasOwnProperty(d)&&Mu(d,c[d]);c={isNavigation:!0,actionType:ru[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};if(d=P("PREVIOUS_ACTION"))c.previousAction=ru[d]||"LATENCY_ACTION_UNKNOWN";if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=bt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=Ru();if(1===d||-1===d)c.isVisible=
!0;ku();ju();c.loadType="cold";d=ju();var e=Gu(),f=Iu(),g=P("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Pu("srt",e.responseStart),1!==d.prerender&&Pu("_start",f,void 0));d=Xu();0<d&&Pu("fpt",d);d=Gu();d.isPerformanceNavigationTiming&&Nu({performanceNavigationTiming:!0},void 0);Pu("nreqs",d.requestStart,void 0);Pu("nress",d.responseStart,void 0);Pu("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Pu("nrs",d.redirectStart,void 0),
Pu("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Pu("ndnss",d.domainLookupStart,void 0),Pu("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Pu("ntcps",d.connectStart,void 0),Pu("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Iu()&&0<d.connectEnd-d.secureConnectionStart&&(Pu("nstcps",d.secureConnectionStart,void 0),Pu("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&Tu();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in Lu)Lu.hasOwnProperty(h)&&
(e=Lu[h],Su(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Nu(c);c=ju();h=mu();h.preLoggedGelInfos||(h.preLoggedGelInfos=[]);d=h.preLoggedGelInfos;h=nu();e=void 0;for(f=0;f<d.length;f++)if(g=d[f],g.loadType){e=g.loadType;break}if("cold"===ku().loadType&&("cold"===c.yt_lt||"cold"===h.loadType||"cold"===e)){e=lu();f=mu();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var k in e)if(!(k in f))if("number"===typeof e[k])Pu(k,
Vu(k));else if(R("log_repeated_ytcsi_ticks")){g=v(e[k]);for(var l=g.next();!l.done;l=g.next())l=l.value,Pu(k.slice(1),l)}k={};e=!1;if(R("use_infogel_early_logging"))for(d=v(d),f=d.next();!f.done;f=d.next())e=f.value,du(h,e),du(k,e),e=!0;d=v(Object.keys(c));for(f=d.next();!f.done;f=d.next())f=f.value,(f=xu(f,c[f]))&&!Wu(nu(),f)&&(du(h,f),du(k,f),e=!0);e&&Nu(k)}C("ytglobal.timingready_",!0);k=P("TIMING_ACTION");D("ytglobal.timingready_")&&k&&Zu()&&Uu()&&Qu()})()}
function $u(a,b,c,d){Xk(Mu)(a,b,c,d)}
function av(a,b,c){Xk(Nu)(a,b,void 0===c?!1:c)}
function bv(a,b,c){return Xk(Pu)(a,b,c)}
function Zu(){return Xk(function(){return"_start"in lu()})()}
function cv(){Xk(function(){var a=ou();requestAnimationFrame(function(){setTimeout(function(){a===ou()&&bv("ol",void 0,void 0)},0)})})()}
var dv=window;dv.ytcsi&&(dv.ytcsi.info=$u,dv.ytcsi.Rf=av,dv.ytcsi.tick=bv);var ev="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),fv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function gv(a,b,c,d){this.m=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Sb||(a.Sb={});a.Sb=Object.assign({},Tt,a.Sb)}
function hv(a,b,c,d){if(void 0!==gv.h){if(d=gv.h,a=[a!==d.m,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else gv.h=new gv(a,b,c,d)}
function iv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Wl:c;var d=Lt(b,a.m);if(!d)return ae(new T("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?(cu(e.input),new Wd(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.Ye){var n=e.config,p;n=null==n?void 0:null==(p=n.Ub)?void 0:p.sessionIndex;p=Vl(0,{sessionIndex:n});k=Object.assign({},jv(h),p);return l.v(2)}return l.yield(kv(e.config,
h),3)}2!=l.h&&(k=l.i);f(lv(a,e,k));l.h=0})})):ae(new T("Error: Failed to build request for command.",b))}
function mv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.fg)?0:d.jg)&&a.j){d=v(ev);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function lv(a,b,c){var d,e,f,g,h,k,l,n,p,t,r,x,y,z,H,L,I,da,S,O,ba,J,ca,ha,V,ab,Kc,Lc,Mc;return A(function(X){switch(X.h){case 1:X.v(2);break;case 3:if((d=X.i)&&!d.isExpired())return X.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Na)?0:f.context)){X.v(4);break}g=b.Na.context;X.v(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){X.v(4);break}l=k.value;return X.yield(l.ag(g),8);case 8:k=h.next();X.v(7);break;case 4:if(null==(n=a.i)||!n.gg(b.input,b.Na)){X.v(11);break}return X.yield(a.i.Wf(b.input,
b.Na),12);case 12:return p=X.i,R("kevlar_process_local_innertube_responses_killswitch")||mv(a,p,b),X.return(p);case 11:return(x=null==(r=b.config)?void 0:r.dg)&&a.h.has(x)&&R("web_memoize_inflight_requests")?t=a.h.get(x):(y=JSON.stringify(b.Na),L=null!=(H=null==(z=b.ib)?void 0:z.headers)?H:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},L,c)}),I=Object.assign({},b.ib),"POST"===b.ib.method&&(I=Object.assign({},I,{body:y})),(null==(da=b.config)?0:da.He)&&bv(b.config.He),S=function(){return a.aa.fetch(b.input,
I,b.config)},t=S(),x&&a.h.set(x,t)),X.yield(t,13);
case 13:if((O=X.i)&&"error"in O&&(null==(ba=O)?0:null==(J=ba.error)?0:J.details))for(ca=O.error.details,ha=v(ca),V=ha.next();!V.done;V=ha.next())ab=V.value,(Kc=ab["@type"])&&-1<fv.indexOf(Kc)&&(delete ab["@type"],O=ab);x&&a.h.has(x)&&a.h.delete(x);(null==(Lc=b.config)?0:Lc.Ie)&&bv(b.config.Ie);if(O||null==(Mc=a.i)||!Mc.Nf(b.input,b.Na)){X.v(14);break}return X.yield(a.i.Vf(b.input,b.Na),15);case 15:O=X.i;case 14:return mv(a,O,b),X.return(O||void 0)}})}
function kv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Ub)?void 0:d.sessionIndex;var h=g.yield;var k=Vl(0,{sessionIndex:e});if(!(k instanceof Wd)){var l=new Wd(bb);Xd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},jv(b),f)))})}
function jv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));P("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&
(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var nv=new pr("INNERTUBE_TRANSPORT_TOKEN");var ov=["share/get_web_player_share_panel"],pv=["feedback"],qv=["notification/modify_channel_preference"],rv=["browse/edit_playlist"],sv=["subscription/subscribe"],tv=["subscription/unsubscribe"];function uv(){}
w(uv,Qt);uv.prototype.j=function(){return sv};
uv.prototype.h=function(a){return Sr(a,Kk)||void 0};
uv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ia.Object.defineProperties(uv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vv(){}
w(vv,Qt);vv.prototype.j=function(){return tv};
vv.prototype.h=function(a){return Sr(a,Jk)||void 0};
vv.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ia.Object.defineProperties(vv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function wv(){}
w(wv,Qt);wv.prototype.j=function(){return pv};
wv.prototype.h=function(a){return Sr(a,Ek)||void 0};
wv.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ia.Object.defineProperties(wv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function xv(){}
w(xv,Qt);xv.prototype.j=function(){return qv};
xv.prototype.h=function(a){return Sr(a,Ik)||void 0};
xv.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function yv(){}
w(yv,Qt);yv.prototype.j=function(){return rv};
yv.prototype.h=function(a){return Sr(a,Hk)||void 0};
yv.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function zv(){}
w(zv,Qt);zv.prototype.j=function(){return ov};
zv.prototype.h=function(a){return Sr(a,Gk)};
zv.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Av=new pr("NETWORK_SLI_TOKEN");function Bv(a){this.h=a}
Bv.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h&&(e=bc(cc(5,rc(a,"key")))||"/UNKNOWN_PATH",d.h.start(e));f=b;R("wug_networking_gzip_request")&&(f=Kp(b));g=new window.Request(a,f);return h.return(fetch(g).then(function(k){return d.handleResponse(k,c)}).catch(function(k){Ls(k)}))})};
Bv.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.re)?hg(b.re,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Qf(),c=c.then(function(d){Ls(new T("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Bv[or]=[new qr(Av)];var Cv=new pr("NETWORK_MANAGER_TOKEN");var Dv;function Ev(){var a,b,c;return A(function(d){if(1==d.h)return a=vr().resolve(nv),a?d.yield(iv(a),2):(Ls(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Ls(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Of;return d.return(c)}Ls(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Fv=B.caches,Gv;function Hv(a){var b=a.indexOf(":");return-1===b?{qd:a}:{qd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Iv(){return A(function(a){if(void 0!==Gv)return a.return(Gv);Gv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(Fv.open("test-only"),4);case 4:return d.yield(Fv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Gv)})}
function Jv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Iv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Fv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Hv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Fv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Kv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Iv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=qm("cache contains other");return h.yield(Fv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Hv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Lv(){Ev().then(function(a){a&&(zo(a),Jv(a),$t(a))})}
function Mv(){var a=new Cq;ti.oa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=qm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];zo(g);Jv(g);$t(g);return f.return()}c=au();return f.yield(Kv(),3);case 3:return d=f.i,f.yield(Ao(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?Lv():a.h.add("publicytnetworkstatus-online",Lv,!0,void 0,void 0),f.h=0}})})}
;var Sh=ka(["data-"]);function Nv(a){a&&(a.dataset?a.dataset[Ov("loaded")]="true":Rh(a))}
function Pv(a,b){return a?a.dataset?a.dataset[Ov(b)]:a.getAttribute("data-"+b):null}
var Qv={};function Ov(a){return Qv[a]||(Qv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Rv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Sv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Tv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Rv,""),c=c.replace(Sv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Uv(a,b,c)}
function Uv(a,b,c){c=void 0===c?null:c;var d=Vv(a),e=document.getElementById(d),f=e&&Pv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=ir(d,b),b=""+Pa(b),Wv[b]=f),g||(e=Xv(a,d,function(){if(!Pv(e,"loaded")){Nv(e);lr(d);var h=Va(mr,d);rl(h,0)}},c)))}
function Xv(a,b,c,d){d=void 0===d?null:d;var e=Id("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Xh(e,vk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Yv(a){a=Vv(a);var b=document.getElementById(a);b&&(mr(a),b.parentNode.removeChild(b))}
function Zv(a,b){a&&b&&(a=""+Pa(b),(a=Wv[a])&&kr(a))}
function Vv(a){var b=document.createElement("a");Nh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var Wv={};var $v=[],aw=!1;function bw(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&pt()){var a=P("PLAYER_VARS",{});if("1"!=qb(a)&&!qt(a)){var b=function(){aw=!0;"google_ad_status"in window?Tk("DCLKSTAT",1):Tk("DCLKSTAT",2)};
try{Tv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}$v.push(ti.oa(function(){if(!(aw||"google_ad_status"in window)){try{Zv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}aw=!0;Tk("DCLKSTAT",3)}},5E3))}}}
function cw(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function dw(a){Er.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.ga},{from:"document_active",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"document_disposed",action:this.m},{from:"document_disposed_preventable",to:"flush_logs",action:this.G},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.G},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(dw,Er);dw.prototype.ga=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
dw.prototype.m=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
dw.prototype.G=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
dw.prototype.i=function(){this.h=new Map};function ew(a){Er.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.G},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.m},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.G},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.G},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.m},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.m},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(ew,Er);ew.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ew.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ew.prototype.m=function(a,b){a(null==b?void 0:b.event)};
ew.prototype.G=function(a,b){a(null==b?void 0:b.event)};function fw(){this.l=new dw;this.m=new ew}
fw.prototype.install=function(){var a=Ia.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.m.install(c)})};function gw(a){cp.call(this,1,arguments);this.csn=a}
w(gw,cp);var lp=new dp("screen-created",gw),hw=[],iw=0,jw=new Map,kw=new Map,lw=new Map;
function mw(a,b,c,d,e){e=void 0===e?!1:e;for(var f=nw({cttAuthInfo:dt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ob(k)||!k.trackingParams&&!k.veType)&&Ls(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=ow(h,b);if(k.veType&&!kw.has(l)&&!lw.has(l)&&!e){jw.set(l,[a,b,c,h]);return}h=ow(c,b);jw.has(h)?pw(c,b):lw.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:gb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?qw("visualElementAttached",f,c):a?Ds("visualElementAttached",c,a,f):kn("visualElementAttached",c,f)}
function qw(a,b,c){hw.push({Be:a,payload:c,Uf:void 0,options:b});iw||(iw=mp())}
function np(a){if(hw){for(var b=v(hw),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,kn(c.Be,c.payload,c.options));hw.length=0}iw=0}
function ow(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function pw(a,b){a=ow(a,b);jw.has(a)&&(b=jw.get(a)||[],mw(b[0],b[1],b[2],[b[3]],!0),jw.delete(a))}
function nw(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function rw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
rw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=bt(void 0===c?0:c)){a=this.client;d=new Vs({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=ow(d,c);kw.set(f,!0);pw(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=nw({cttAuthInfo:dt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?qw("visualElementGestured",f,d):a?Ds("visualElementGestured",d,a,f):kn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
rw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Vs({trackingParams:a}),b,void 0===c?0:c)};
rw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=bt(d);a||(a=(a=Zs(void 0===d?0:d))?new Vs({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=nw({cttAuthInfo:dt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?qw("visualElementStateChanged",d,b):a?Ds("visualElementStateChanged",b,a,d):kn("visualElementStateChanged",b,d))}};
function sw(a,b){if(void 0===b)for(var c=at(),d=0;d<c.length;d++)void 0!==c[d]&&sw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&mw(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function tw(){fw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(tw,fw);tw.prototype.j=function(){kn("finalPayload",{csn:bt()})};
tw.prototype.h=function(){Ps(Qs)};
tw.prototype.i=function(){var a=sw;rw.h||(rw.h=new rw);a(rw.h)};function uw(){}
function vw(){var a=D("ytglobal.storage_");a||(a=new uw,C("ytglobal.storage_",a));return a}
uw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(ww()):d.return()})};
function ww(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
C("ytglobal.storageClass_",uw);function hn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=ml("ytidb_transaction_ended_event_rate_limit_session",.2)}
hn.prototype.Nb=function(a){this.handleError(a)};
hn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":xw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=ml("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function xw(a,b){vw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:yw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:yw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function yw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function zw(a,b,c){F.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.s=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=db(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.s)}
w(zw,F);zw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Zk(d)}}};
zw.prototype.M=function(){window.removeEventListener("message",this.s);F.prototype.M.call(this)};function Aw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new zw(!!P("WIDGET_ID_ENFORCE")),b=this.Ee.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
m=Aw.prototype;m.Ee=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Tc(a,b,c)};
m.Tc=function(){};
m.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.be=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");eb(this.i,this.xd,this);this.i=[]};
m.Ac=function(){return null};
function Bw(a,b){a.sendMessage("infoDelivery",b)}
m.xd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.xd({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Cw={},Dw=(Cw["api.invalidparam"]=2,Cw.auth=150,Cw["drm.auth"]=150,Cw["heartbeat.net"]=150,Cw["heartbeat.servererror"]=150,Cw["heartbeat.stop"]=150,Cw["html5.unsupportedads"]=5,Cw["fmt.noneavailable"]=5,Cw["fmt.decode"]=5,Cw["fmt.unplayable"]=5,Cw["html5.missingapi"]=5,Cw["html5.unsupportedlive"]=5,Cw["drm.unavailable"]=5,Cw["mrm.blocked"]=151,Cw);var Ew=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Fw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Gw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Ew);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Hw(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Iw(a){Aw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Qe.bind(this));this.addEventListener("onVolumeChange",this.Re.bind(this));this.addEventListener("onApiChange",this.Le.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ne.bind(this));this.addEventListener("onPlaybackRateChange",this.Oe.bind(this));this.addEventListener("onStateChange",this.Pe.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Se.bind(this))}
w(Iw,Aw);m=Iw.prototype;
m.Tc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Fw(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Gw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Gw(e);break;case "loadPlaylist":case "cuePlaylist":e=Hw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Fw(a)&&Bw(this,this.Ac())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Aw.prototype.Dc.call(this,a,b)};
m.xc=function(a,b){var c=this,d=Aw.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.be.bind(this);this.h.h=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Dw[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Pe=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Bw(this,a)};
m.Ne=function(a){Bw(this,{playbackQuality:a})};
m.Oe=function(a){Bw(this,{playbackRate:a})};
m.Le=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Re=function(){Bw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Qe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Bw(this,a)};
m.Se=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Bw(this,a)};
m.dispose=function(){Aw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Jw(a){F.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.td,this)}
w(Jw,F);m=Jw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.td=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Kw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Lw(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Me.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Me=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.zc(a,b))};
m.zc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.M=function(){this.connection.unsubscribe("command",this.td,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.M.call(this)};function Mw(a,b){Jw.call(this,b);this.api=a;this.start()}
w(Mw,Jw);Mw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Mw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Kw(a,b){switch(a){case "loadVideoById":return a=Gw(b),[a];case "cueVideoById":return a=Gw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Hw(b),[a];case "cuePlaylist":return a=Hw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Lw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Mw.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Jw.prototype.zc.call(this,a,b)};
Mw.prototype.M=function(){Jw.prototype.M.call(this);delete this.api};function Nw(a){a=void 0===a?!1:a;F.call(this);this.h=new K(a);yc(this,this.h)}
Xa(Nw,F);Nw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Nw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Nw.prototype.l=function(a,b){this.Z()||this.h.Xa.apply(this.h,arguments)};function Ow(a,b,c){Nw.call(this);this.j=a;this.i=b;this.id=c}
w(Ow,Nw);Ow.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
Ow.prototype.M=function(){this.i=this.j=null;Nw.prototype.M.call(this)};function Pw(a,b,c){F.call(this);this.h=a;this.origin=c;this.i=Xq(window,"message",this.j.bind(this));this.connection=new Ow(this,a,b);yc(this,this.connection)}
w(Pw,F);Pw.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Pw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Pw.prototype.M=function(){Yq(this.i);this.h=null;F.prototype.M.call(this)};function Qw(){this.state=1;this.h=null}
m=Qw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=xb())?d.createScript(f):f,f=new Cb(f,Bb)):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=uk(a.interpreterSafeUrl).toString());Rw(this,d,e,a.program,b,c)}else Ls(Error("Cannot initialize botguard without program"))};
function Rw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Tv(c,function(){window[g]?Sw(a,d,g,e):(a.state=3,Yv(c),Ls(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Id("SCRIPT"),b instanceof Cb?(b instanceof Cb&&b.constructor===Cb?b=b.h:(Ma(b),b="type_error:SafeScript"),f.textContent=b,Wh(f)):f.textContent=b,f.nonce=Yb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Sw(a,d,g,e):(a.state=4,Ls(new T("Unable to load Botguard from JS")))):Ls(new T("Unable to load VM; no url or JS provided"))}
function Sw(a,b,c,d){a.state=5;try{var e=new Jh({program:b,ge:c,Fe:R("att_web_record_metrics")});e.Ve.then(function(){a.state=6;d&&d(b)});
a.Oc(e)}catch(f){a.state=7,f instanceof Error&&Ls(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Rc()?this.Gd({cd:a}):null};
m.dispose=function(){this.Oc(null);this.state=8};
m.Rc=function(){return!!this.h};
m.Gd=function(a){return this.h.Ad(a)};
m.Oc=function(a){wc(this.h);this.h=a};function Tw(){var a=D("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Uw(){Qw.apply(this,arguments)}
w(Uw,Qw);Uw.prototype.Oc=function(a){var b;null==(b=Tw())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Ad.bind(a)},C("yt.abuse.playerAttLoader",b),C("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(C("yt.abuse.playerAttLoader",null),C("yt.abuse.playerAttLoaderRun",null))};
Uw.prototype.Rc=function(){return!!Tw()};
Uw.prototype.Gd=function(a){return Tw().bgvmc(a)};var Vw=new Uw;function Ww(){return Vw.Rc()}
function Xw(a){a=void 0===a?{}:a;return Vw.invoke(a)}
;function Yw(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sb(b);this.assets=a.assets||{};this.attrs=a.attrs||sb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Yw.prototype.clone=function(){var a=new Yw,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=sb(c):a[b]=c}return a};var Zw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function $w(a){a=a||"";if(window.spf){var b=a.match(Zw);spf.style.load(a,b?b[1]:"",void 0)}else ax(a)}
function ax(a){var b=bx(a),c=document.getElementById(b),d=c&&Pv(c,"loaded");d||c&&!d||(c=cx(a,b,function(){if(!Pv(c,"loaded")){Nv(c);lr(b);var e=Va(mr,b);rl(e,0)}}))}
function cx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=vk(a);Vh(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function bx(a){var b=Id("A");Nh(b,new Ib(a,Jb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function dx(){F.call(this);this.h=[]}
w(dx,F);dx.prototype.M=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.callback,void 0)}F.prototype.M.call(this)};function ex(){dx.apply(this,arguments)}
w(ex,dx);function fx(a,b,c,d,e){F.call(this);var f=this;this.l=b;this.webPlayerContextConfig=d;this.sc=e;this.Ba=!1;this.api={};this.ea=this.s=null;this.S=new K;this.h={};this.Y=this.ma=this.elementId=this.Ia=this.config=null;this.W=!1;this.j=this.B=null;this.na={};this.uc=["onReady"];this.lastError=null;this.nb=NaN;this.R={};this.Ld=new ex(this);this.da=0;this.i=this.m=a;yc(this,this.S);gx(this);yc(this,this.Ld);c?this.da=rl(function(){f.loadNewVideoConfig(c)},0):d&&(hx(this),ix(this))}
w(fx,F);m=fx.prototype;m.getId=function(){return this.l};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.da&&(window.clearTimeout(this.da),this.da=0);var b=a||{};b instanceof Yw||(b=new Yw(b));this.config=b;this.setConfig(a);ix(this);this.isReady()&&jx(this)}};
function hx(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.l,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.l:a.config.attrs.id=a.l);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Ia=a;this.config=kx(a);hx(this);if(!this.ma){var b;this.ma=lx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=li(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=li(Number(a)||a))};
function jx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function mx(a){var b=!0,c=nx(a);c&&a.config&&(a=ox(a),b=Pv(c,"version")===a);return b&&!!D("yt.player.Application.create")}
function ix(a){if(!a.Z()&&!a.W){var b=mx(a);if(b&&"html5"===(nx(a)?"html5":null))a.Y="html5",a.isReady()||px(a);else if(qx(a),a.Y="html5",b&&a.j&&a.m)a.m.appendChild(a.j),px(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=rx(a,"player_bootstrap_method")?D("yt.player.Application.createAlternate")||D("yt.player.Application.create"):D("yt.player.Application.create");var e=a.config?kx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.sc);px(a)};
a.W=!0;b?a.B():(Tv(ox(a),a.B),(b=sx(a))&&$w(b),tx(a)&&!c&&C("yt.player.Application.create",null))}}}
function nx(a){var b=Hd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function px(a){if(!a.Z()){var b=nx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!rx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}ux(a)}else a.nb=rl(function(){px(a)},50)}}
function ux(a){gx(a);a.Ba=!0;var b=nx(a);if(b){a.s=vx(a,b,"addEventListener");a.ea=vx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=vx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.s&&a.s(g,a.h[g]);jx(a);a.ma&&a.ma(a.api);a.S.Xa("onReady",a.api)}
function vx(a,b,c){var d=b[c];return function(){var e=Ia.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.l}),e.level="WARNING",e;}}}
function gx(a){a.Ba=!1;if(a.ea)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ea(b,a.h[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ia};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ba};
m.addEventListener=function(a,b){var c=this,d=lx(this,b);d&&(0<=db(this.uc,a)||this.h[a]||(b=wx(this,a),this.s&&this.s(a,b)),this.S.subscribe(a,d),"onReady"===a&&this.isReady()&&rl(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=lx(this,b))&&this.S.unsubscribe(a,b)};
function lx(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=Ia.apply(0,arguments),e=D(b);if(e)try{e.apply(B,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.na[b]=c}return c?c:null}
function wx(a,b){var c="ytPlayer"+b+a.l;a.h[b]=c;B[c]=function(d){var e=rl(function(){if(!a.Z()){try{a.S.Xa(b,null!=d?d:void 0)}catch(h){var f=new T("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.l,data:d});f.level="WARNING";throw f;}f=a.R;var g=String(e);g in f&&delete f[g]}},0);
pb(a.R,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(nx(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function qx(a){a.cancel();gx(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=nx(a);b&&(mx(a)||!tx(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&Zv(ox(this),this.B);window.clearTimeout(this.nb);this.W=!1};
m.M=function(){qx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.na=null;for(a in this.h)this.h.hasOwnProperty(a)&&(B[this.h[a]]=null);this.Ia=this.config=this.api=null;delete this.m;delete this.i;F.prototype.M.call(this)};
function tx(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ox(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function sx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function rx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===bl(c||"","&")[b]}
function kx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?sb(e):e}return b}
;var xx={},yx="player_uid_"+(1E9*Math.random()>>>0);function zx(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Hd(c):c;var e=yx+"_"+Pa(c),f=xx[e];if(f&&d)return Ax(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new fx(c,e,a,b,void 0);xx[e]=f;zc(f,function(){delete xx[f.getId()]});
return f.api}
function Ax(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Bx=null,Cx=null,Dx=null;function Ex(){Fx()}
function Gx(){Fx()}
function Fx(){var a=Bx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Hx(){Bx&&Bx.sendAbandonmentPing&&Bx.sendAbandonmentPing();P("PL_ATT")&&Vw.dispose();for(var a=ti,b=0,c=$v.length;b<c;b++)a.qa($v[b]);$v.length=0;Yv("//static.doubleclick.net/instream/ad_status.js");aw=!1;Tk("DCLKSTAT",0);xc(Dx,Cx);Bx&&(Bx.removeEventListener("onVideoDataChange",Ex),Bx.destroy())}
;function Ix(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Vt(a,b);if(c)return!1;cu(a);if((window.ytspf||{}).enabled)spf.navigate(a);else{var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=mc(a,e);cu(a);f=a+f;var h=void 0===h?ei:h;a:if(h=void 0===h?ei:h,f instanceof Ib)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ci&&b.qe(f)){h=new Ib(f,Jb);break a}h=void 0}g=g.location;h=Mh(h||Kb);void 0!==h&&(g.href=h)}return!0}
;C("yt.setConfig",Tk);C("yt.config.set",Tk);C("yt.setMsg",ft);C("yt.msgs.set",ft);C("yt.logging.errors.log",Ks);
C("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}At(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Yu("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=gl(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Yu("watch",["pbs","pbu","pbp"]);Bx=zx(a,c);Bx.addEventListener("onVideoDataChange",Ex);Bx.addEventListener("onReady",Gx);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Dx=new Iw(Bx):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Cx=new Pw(window.parent,a,b),Dx=new Mw(Bx,Cx.connection));bw();R("ytidb_create_logger_embed_killswitch")||gn();a={};tw.h||(tw.h=new tw);
tw.h.install((a.flush_logs={callback:function(){qs()}},a));
Nq();R("ytidb_clear_embedded_player")&&ti.oa(function(){var f,g;if(!Dv){var h=vr(),k={Lc:Cv,Ed:Bv};h.h.set(k.Lc,k);k={bd:{feedbackEndpoint:Mt(wv),modifyChannelNotificationPreferenceEndpoint:Mt(xv),playlistEditEndpoint:Mt(yv),subscribeEndpoint:Mt(uv),unsubscribeEndpoint:Mt(vv),webPlayerShareEntityServiceEndpoint:Mt(zv)}};var l=Kt(),n={};l&&(n.client_location=l);void 0===f&&(f=Ul());void 0===g&&(g=h.resolve(Cv));hv(k,g,f,n);f={Lc:nv,Fd:gv.h};h.h.set(f.Lc,f);Dv=h.resolve(nv)}Mv()})});
var Jx=Xk(function(){cv();Bt()}),Kx=Xk(function(a){a.persisted||(cv(),Bt())}),Lx=Xk(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Hx():a.persisted||Hx()}),Mx=Xk(Hx);
window.addEventListener?(window.addEventListener("load",Jx),window.addEventListener("pageshow",Kx),window.addEventListener("pagehide",Lx)):window.attachEvent&&(window.attachEvent("onload",Jx),window.attachEvent("onunload",Mx));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Uk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new T(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Ks(e):Ls(e))};
le=Ms;window.addEventListener("unhandledrejection",function(a){Ms(a.reason)});
eb(P("ERRORS")||[],function(a){Ks.apply(null,a)});
Tk("ERRORS",[]);R("embeds_web_enable_scheduler_to_player_binary")&&Ym();C("yt.abuse.player.botguardInitialized",D("yt.abuse.player.botguardInitialized")||Ww);C("yt.abuse.player.invokeBotguard",D("yt.abuse.player.invokeBotguard")||Xw);C("yt.abuse.dclkstatus.checkDclkStatus",D("yt.abuse.dclkstatus.checkDclkStatus")||cw);C("yt.player.exports.navigate",D("yt.player.exports.navigate")||Ix);C("yt.util.activity.init",D("yt.util.activity.init")||ar);
C("yt.util.activity.getTimeSinceActive",D("yt.util.activity.getTimeSinceActive")||dr);C("yt.util.activity.setTimestamp",D("yt.util.activity.setTimestamp")||br);}).call(this);
