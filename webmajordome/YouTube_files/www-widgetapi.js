(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},ra={};try{ra.__proto__=oa;na=ra.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function ta(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.M=function(a){this.h=a};
function va(a,b){a.i={mc:b,xc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
ta.prototype.B=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a){a.o=0;var b=a.i.mc;a.i=null;return b}
function ya(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.xc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.j;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,va(a.g,g),Ca(a)}a.g.j=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.xc)throw b.mc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j["throw"],b,a.g.M):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new za(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.eb),reject:g(this.o)}};
b.prototype.eb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.gb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ub(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.fb();this.S()};
b.prototype.fb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.gb=function(g){var h=this.j();g.xb(h.resolve,h.reject)};
b.prototype.ub=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.xb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).xb(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ja(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||sa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ja(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Sa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Ra;return Sa.apply(null,arguments)}
function Ua(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ne=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},cb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function db(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function gb(a){return Array.prototype.concat.apply([],arguments)}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){C.console&&C.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(){}
function tb(a){return new sb(ub,a)}
var ub={};tb("");function vb(a){this.g=a}
vb.prototype.toString=function(){return this.g+""};
var wb={};var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},yb=/&/g,zb=/</g,Ab=/>/g,Bb=/"/g,Cb=/'/g,Db=/\x00/g,Eb=/[\x00&<>"']/;function Fb(a){this.g=a}
Fb.prototype.toString=function(){return this.g.toString()};
var Gb={},Hb=new Fb("about:invalid#zClosurez",Gb);var Ib,Jb=D("CLOSURE_FLAGS"),Kb=Jb&&Jb[610401301];Ib=null!=Kb?Kb:!1;function Lb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=C.navigator;Mb=Nb?Nb.userAgentData||null:null;function Tb(a){return Ib?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Lb().indexOf(a)}
;function Ub(){return Ib?!!Mb&&0<Mb.brands.length:!1}
function Vb(){return Ub()?!1:F("Trident")||F("MSIE")}
function Wb(){return Ub()?Tb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Ub()?0:F("Edge"))||F("Silk")}
;function Xb(a){this.g=a}
Xb.prototype.toString=function(){return this.g.toString()};function Yb(a){Eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(yb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(zb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Cb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Db,"&#0;")));return a}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a){var b=a.match(Zb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
var ec=/#|$/;function fc(a,b){var c=a.search(ec);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function gc(a){C.setTimeout(function(){throw a;},0)}
;function hc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function ic(a){ic[" "](a);return a}
ic[" "]=function(){};var jc=Ub()?!1:F("Opera"),kc=Vb(),lc=F("Edge"),mc=F("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),nc=-1!=Lb().toLowerCase().indexOf("webkit")&&!F("Edge");function oc(){var a=C.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=Lb();if(mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(kc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,yc;if(C.document&&kc){var zc=oc();yc=zc?zc:parseInt(tc,10)||void 0}else yc=void 0;var Ac=yc;var Bc=hc()||F("iPod"),Cc=F("iPad");!F("Android")||Wb();Wb();var Dc=F("Safari")&&!(Wb()||(Ub()?0:F("Coast"))||(Ub()?0:F("Opera"))||(Ub()?0:F("Edge"))||(Ub()?Tb("Microsoft Edge"):F("Edg/"))||(Ub()?Tb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(hc()||F("iPad")||F("iPod"));var Ec={},Fc=null;
function Gc(a,b){La(a);void 0===b&&(b=0);if(!Fc){Fc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}}b=Ec[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Hc="undefined"!==typeof Uint8Array,Ic=!kc&&"function"===typeof btoa;function Jc(a){return Array.prototype.slice.call(a)}
;var Kc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({ae:1,Yd:2,Xd:4,de:8,ce:16,be:32,Pd:64,ee:128,Vd:256,Ud:512,Zd:1024,Td:2048})));var Lc=Kc?function(a,b){a[Kc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Mc(a){var b=Nc(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Jc(a)),Oc(a,b|1))}
var Pc=Kc?function(a,b){a[Kc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function Qc(a,b,c){return c?a|b:a&~b}
var Nc=Kc?function(a){return a[Kc]|0}:function(a){return a.ga|0},Rc=Kc?function(a){return a[Kc]}:function(a){return a.ga},Oc=Kc?function(a,b){a[Kc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Sc(){var a=[];Lc(a,1);return a}
function Tc(a,b){Oc(b,(a|0)&-2303)}
function Uc(a,b){Oc(b,(a|34)&-2269)}
function Vc(a){a=a>>12&1023;return 0===a?536870912:a}
;var Wc={};function Xc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Yc,Zc,$c=[];Oc($c,55);Zc=Object.freeze($c);function ad(a){if(a&2)throw Error();}
;function bd(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function cd(){var a=Error();bd(a,"incident");gc(a)}
function dd(a){a=Error(a);bd(a,"warning");return a}
;function ed(a){return a.displayName||a.name||"unknown type name"}
function fd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ja(a)+": "+a);return!!a}
var gd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function hd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:gd.test(a)}
function id(a){if(!hd(a))throw dd("int64");"string"===typeof a?hd(a):hd(a);return a}
function jd(a){return null==a?a:id(a)}
function kd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function ld(a){return null==a||"string"===typeof a?a:void 0}
function pd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ed(b)+" but got "+(a&&ed(a.constructor)));return a}
function qd(a,b,c){if(null!=a&&"object"===typeof a&&a.Wb===Wc)return a;if(Array.isArray(a)){var d=Nc(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Oc(a,e);return new b(a)}}
;var rd;function H(a,b,c){null==a&&(a=rd);rd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-4190209|(b&1023)<<12)}else{if(!Array.isArray(a))throw Error();d=Nc(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Xc(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(sd(c,b,g),e=1023);d=d&-4190209|(e&1023)<<12;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(sd(c,g,{}),d|=256,b=1023),d=d&-4190209|(b&1023)<<12)}}Oc(a,d);return a}
function sd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function td(a,b){return ud(b)}
function ud(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Hc&&null!=a&&a instanceof Uint8Array){if(Ic){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Gc(a);return a}}return a}
;function vd(a,b,c){a=Jc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function wd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Nc(a)&1?void 0:f&&Nc(a)&2?a:xd(a,b,c,void 0!==d,e,f);else if(Xc(a)){var g={},h;for(h in a)g[h]=wd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function xd(a,b,c,d,e,f){var g=d||c?Nc(a):0;d=d?!!(g&32):void 0;a=Jc(a);for(var h=0;h<a.length;h++)a[h]=wd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function yd(a){return a.Wb===Wc?a.toJSON():ud(a)}
;function zd(a,b,c){c=void 0===c?Uc:c;if(null!=a){if(Hc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Nc(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Oc(a,(d|34)&-5),a):xd(a,zd,d&4?Uc:c,!0,!1,!0)}a.Wb===Wc&&(c=a.s,d=Rc(c),a=d&2?a:Ad(a,c,d,!0));return a}}
function Ad(a,b,c,d){a=a.constructor;b=Bd(b,c,d);Nc(b);rd=b;b=new a(b);rd=void 0;return b}
function Bd(a,b,c){var d=c||b&2?Uc:Tc,e=!!(b&32);a=vd(a,b,function(f){return zd(f,e,d)});
Lc(a,32|(c?2:0));return a}
;Object.freeze({});function Cd(a,b){a=a.s;return Dd(a,Rc(a),b)}
function Dd(a,b,c,d){if(-1===c)return null;if(c>=Vc(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function I(a,b,c){var d=a.s,e=Rc(d);ad(e);Ed(d,e,b,c);return a}
function Ed(a,b,c,d,e){Xc(d);var f=Vc(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Oc(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Fd(a,b,c,d){var e=b&2,f=Dd(a,b,c);Array.isArray(f)||(f=Zc);var g=!(d&2);d=!(d&1);var h=!!(b&32),k=Nc(f);0!==k||!h||e||g?k&1||(k|=1,Oc(f,k)):(k|=33,Oc(f,k));e?(a=!1,k&2||(Lc(f,34),a=!!(4&k)),(d||a)&&Object.freeze(f)):(e=!!(2&k)||!!(2048&k),d&&e?(f=Jc(f),d=1,h&&!g&&(d|=32),Oc(f,d),Ed(a,b,c,f)):g&&k&32&&!e&&Pc(f,32));return f}
function Gd(a,b,c,d){a=a.s;var e=Rc(a);ad(e);(c=Hd(a,e,c))&&c!==b&&null!=d&&(e=Ed(a,e,c));Ed(a,e,b,d)}
function Id(a,b,c){a=a.s;return Hd(a,Rc(a),b)===c?c:-1}
function Hd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Dd(a,b,f)&&(0!==d&&(b=Ed(a,b,d)),d=f)}return d}
function Jd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Rc(e),g=Dd(e,f,c,d);b=qd(g,b,f);b!==g&&null!=b&&Ed(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Rc(a);if(!(f&2)){g=e;b=g.s;var h=Rc(b);g=h&2?Ad(g,b,h,!1):g;g!==e&&(e=g,Ed(a,f,c,e,d))}return e}
function J(a,b,c,d){null!=d?pd(d,b):d=void 0;return I(a,c,d)}
function Kd(a,b,c,d,e){null!=e?pd(e,b):e=void 0;Gd(a,c,d,e)}
function Ld(a,b,c){a=Qc(a,2,!!(2&b));a=Qc(a,32,!!(32&b)&&c);return a=Qc(a,2048,!1)}
function Md(a,b,c,d){a=a.s;var e=Rc(a);ad(e);var f=!!f;var g=!!(2&e)&&!0,h=Fd(a,e,b,3);e=Rc(a);var k=Nc(h),l=!!(2&k),m=!!(4&k),n=l&&m||!!(2048&k);if(!m){m=h;var q=e,p=!!(2&k);p&&(q=Qc(q,2,!0));for(var t=!p,u=!0,z=0,G=0;z<m.length;z++){var O=qd(m[z],c,q);if(O instanceof c){if(!p){var Q=!!(Nc(O.s)&2);t&&(t=!Q);u&&(u=Q)}m[G++]=O}}G<z&&(m.length=G);k=Qc(k,4,!0);k=Qc(k,16,u);k=Qc(k,8,t);Oc(m,k);l&&!g&&(Object.freeze(h),n=!0)}g=k;n||(f||(k=Qc(k,32,!1)),k!==g&&Oc(h,k));n&&(h=Jc(h),k=Ld(k,e,f),Oc(h,k),Ed(a,
e,b,h));b=h;c=null!=d?pd(d,c):new c;b.push(c);Nc(c.s)&2?Pc(b,8):Pc(b,16)}
function Nd(a,b){var c=void 0===c?"":c;a=ld(Cd(a,b));return null!=a?a:c}
function Od(a,b){b=Id(a,Pd,b);return ld(Cd(a,b))}
function Qd(a,b,c){if(null!=c){if("number"!==typeof c)throw dd("int32");Number.isFinite(c)||cd()}I(a,b,c)}
function K(a,b,c){return I(a,b,kd(c))}
function Rd(a,b,c){null!=c&&(Number.isFinite(c)||cd());return I(a,b,c)}
;function L(a,b,c){this.s=H(a,b,c)}
L.prototype.toJSON=function(){if(Yc)var a=Sd(this,this.s,!1);else a=xd(this.s,yd,void 0,void 0,!1,!1),a=Sd(this,a,!0);return a};
function Td(a){Yc=!0;try{return JSON.stringify(a.toJSON(),td)}finally{Yc=!1}}
L.prototype.clone=function(){var a=this.s;return Ad(this,a,Rc(a),!1)};
L.prototype.Wb=Wc;L.prototype.toString=function(){return Sd(this,this.s,!1).toString()};
function Sd(a,b,c){var d=a.constructor.ma,e=Rc(c?a.s:b),f=Vc(e);e=!1;if(d){if(!c){b=Jc(b);var g;if(b.length&&Xc(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Rc(a.s);a=Vc(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?Zc:Sc():c&&m!==Zc&&Mc(m)}else h||(m=void 0,g.length&&Xc(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?Zc:Sc():c&&m!==Zc&&Mc(m)}d=b.length;if(!d)return b;var n;
if(Xc(h=b[d-1])){a:{var q=h;g={};c=!1;for(var p in q)a=q[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var t in g){q=g;break a}q=null}}q!=h&&(n=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var u=!0}if(!n&&!u)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);q&&b.push(q);return b}
;var Ud=window;tb("csi.gstatic.com");tb("googleads.g.doubleclick.net");tb("partner.googleadservices.com");tb("pubads.g.doubleclick.net");tb("securepubads.g.doubleclick.net");tb("tpc.googlesyndication.com");function Vd(a,b){this.width=a;this.height=b}
r=Vd.prototype;r.clone=function(){return new Vd(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Qb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Wd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Xd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Yd(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Zd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,$d[c])c=$d[c];else{c=String(c);if(!$d[c]){var f=/function\s+([^\(]+)/m.exec(c);$d[c]=f?f[1]:"[Anonymous]"}c=$d[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Zd(a,b){b||(b={});b[ae(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ae(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Zd(a,b));return c}
function ae(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var $d={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var be="function"===typeof URL;function ce(){throw Error("unknown trace type");}
;var de={Sd:0,Wd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function ee(a,b){b=Error.call(this,a+" cannot be used with intent "+de[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(ee,Error);
function fe(a,b){a.removeAttribute("srcdoc");if(b instanceof vb)throw new ee("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Fb)b instanceof Fb&&b.constructor===Fb?b=b.g:(Ja(b),b="type_error:SafeUrl");else{b:if(be){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function ge(a){this.nd=a}
function he(a){return new ge(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ie=[he("data"),he("http"),he("https"),he("mailto"),he("ftp"),new ge(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function je(a,b){b=void 0===b?ie:b;if(a instanceof Fb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof ge&&d.nd(a))return new Fb(a,Gb)}}
function ke(a){var b=void 0===b?ie:b;return je(a,b)||Hb}
;function le(a){var b=me;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ne(){var a=[];le(function(b){a.push(b)});
return a}
var me={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},oe=$a(function(){return ne()});
function pe(){var a=qe(),b={};cb(oe(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function qe(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var re=(new Date).getTime();function se(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function te(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var O=z^t&(u^z);var Q=1518500249}else O=t^u^z,Q=1859775393;else 60>p?(O=t&u|z&(t|u),Q=2400959708):(O=t^u^z,Q=3395469782);O=((n<<5|n>>>27)&4294967295)+O+G+Q+q[p]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=O}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Wc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function ue(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,ve(se(d),a,c||null)].join(" "):null}
function ve(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],cb(d,function(h){e.push(h)}),we(e.join(" "));
var f=[],g=[];cb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];cb(d,function(h){e.push(h)});
a=we(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function we(a){var b=te();b.update(a);return b.Wc().toLowerCase()}
;var xe={};function ye(a){this.g=a||{cookie:""}}
r=ye.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Qb())return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ue;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.Qb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var ze=new ye("undefined"==typeof document?null:document);function Ae(a){return!!xe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Be(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new ye(document)).get(b));return a?ue(a,c,d):null}
function Ce(a){var b=void 0===b?!1:b;var c=se(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ae(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new ye(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Ae(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new ye(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?ue(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Ae(b)&&((b=Be("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Be("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var De="undefined"!==typeof TextEncoder?new TextEncoder:null,Ee=De?function(a){return De.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Fe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Ge(){this.Ha=this.Ha;this.oa=this.oa}
Ge.prototype.Ha=!1;Ge.prototype.dispose=function(){this.Ha||(this.Ha=!0,this.sa())};
Ge.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function He(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
He.prototype.stopPropagation=function(){this.i=!0};
He.prototype.preventDefault=function(){this.defaultPrevented=!0};var Le=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Me(a,b){He.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(Me,He);var Ne={2:"touch",3:"pen",4:"mouse"};
Me.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(mc){a:{try{ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ne[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Me.na.preventDefault.call(this)};
Me.prototype.stopPropagation=function(){Me.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Me.prototype.preventDefault=function(){Me.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Oe="closure_listenable_"+(1E6*Math.random()|0);var Pe=0;function Qe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Bb=e;this.key=++Pe;this.rb=this.wb=!1}
function Re(a){a.rb=!0;a.listener=null;a.proxy=null;a.src=null;a.Bb=null}
;function Se(a){this.src=a;this.listeners={};this.g=0}
Se.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Te(a,b,d,e);-1<g?(b=a[g],c||(b.wb=!1)):(b=new Qe(b,this.src,f,!!d,e),b.wb=c,a.push(b));return b};
Se.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Te(e,b,c,d);return-1<b?(Re(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Ue(a,b){var c=b.type;c in a.listeners&&db(a.listeners[c],b)&&(Re(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Te(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.rb&&f.listener==b&&f.capture==!!c&&f.Bb==d)return e}return-1}
;var Ve="closure_lm_"+(1E6*Math.random()|0),We={},Xe=0;function Ye(a,b,c,d,e){if(d&&d.once)Ze(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ye(a,b[f],c,d,e);else c=$e(c),a&&a[Oe]?a.La(b,c,Ma(d)?!!d.capture:!!d,e):af(a,b,c,!1,d,e)}
function af(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=bf(a);h||(a[Ve]=h=new Se(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=cf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Le||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(df(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Xe++}}
function cf(){function a(c){return b.call(a.src,a.listener,c)}
var b=ef;return a}
function Ze(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ze(a,b[f],c,d,e);else c=$e(c),a&&a[Oe]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):af(a,b,c,!0,d,e)}
function ff(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ff(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=$e(c),a&&a[Oe])?a.g.remove(String(b),c,d,e):a&&(a=bf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Te(b,c,d,e)),(c=-1<a?b[a]:null)&&gf(c))}
function gf(a){if("number"!==typeof a&&a&&!a.rb){var b=a.src;if(b&&b[Oe])Ue(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(df(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Xe--;(c=bf(b))?(Ue(c,a),0==c.g&&(c.src=null,b[Ve]=null)):Re(a)}}}
function df(a){return a in We?We[a]:We[a]="on"+a}
function ef(a,b){if(a.rb)a=!0;else{b=new Me(b,this);var c=a.listener,d=a.Bb||a.src;a.wb&&gf(a);a=c.call(d,b)}return a}
function bf(a){a=a[Ve];return a instanceof Se?a:null}
var hf="__closure_events_fn_"+(1E9*Math.random()>>>0);function $e(a){if("function"===typeof a)return a;a[hf]||(a[hf]=function(b){return a.handleEvent(b)});
return a[hf]}
;function jf(){Ge.call(this);this.g=new Se(this);this.M=this;this.u=null}
Va(jf,Ge);jf.prototype[Oe]=!0;jf.prototype.addEventListener=function(a,b,c,d){Ye(this,a,b,c,d)};
jf.prototype.removeEventListener=function(a,b,c,d){ff(this,a,b,c,d)};
function kf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new He(b,a):b instanceof He?b.target=b.target||a:(e=b,b=new He(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=lf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=lf(g,c,!0,b)&&e,b.i||(e=lf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=lf(g,c,!1,b)&&e}
jf.prototype.sa=function(){jf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Re(d[e]);delete a.listeners[c];a.g--}}this.u=null};
jf.prototype.La=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function lf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.rb&&g.capture==c){var h=g.listener,k=g.Bb||g.src;g.wb&&Ue(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function mf(a){jf.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return B(function(e){return A(e,nf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||of(this)}
y(mf,jf);function pf(){var a=qf;mf.g||(mf.g=new mf(a));return mf.g}
mf.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete mf.g};
mf.prototype.ca=function(){return this.h};
function of(a){a.H=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,nf(a),3):A(c,nf(a),3);of(a);c.g=0})},3E4)}
function nf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?kf(a,"networkstatus-online"):kf(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function rf(){this.data=[];this.g=-1}
rf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
rf.prototype.get=function(a){return!!this.data[a]};
function sf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function tf(a){this.s=H(a)}
y(tf,L);function uf(a){this.s=H(a)}
y(uf,L);function vf(a,b){return K(a,2,b)}
function wf(a,b){return K(a,3,b)}
function xf(a,b){return K(a,4,b)}
function yf(a,b){return K(a,5,b)}
function zf(a,b){return K(a,9,b)}
function Af(a,b){var c=a.s,d=Rc(c);ad(d);if(null==b)Ed(c,d,10);else{var e=Nc(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,m=!0,n=0;n<b.length;n++){var q=b[n];pd(q,tf);g||(q=!!(Nc(q.s)&2),l&&(l=!q),m&&(m=q))}g||(e=Qc(e,5,!0),e=Qc(e,8,l),e=Qc(e,16,m),k&&(e=Qc(e,m?2:2048,!0)),e!==f&&(h&&(b=Jc(b),e=Ld(e,d,!0)),Oc(b,e)),k&&Object.freeze(b));Ed(c,d,10,b)}return a}
function Bf(a,b){return I(a,11,null==b?b:fd(b))}
function Cf(a,b){return K(a,1,b)}
function Df(a,b){return I(a,7,null==b?b:fd(b))}
uf.ma=[10,6];var Ef="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ff(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Gf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Hf(){var a=window;if(!Gf(a))return null;var b=Ff(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Ef).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function If(a){var b;return Bf(Af(yf(vf(Cf(xf(Df(zf(wf(new uf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new tf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Jf(){var a,b;return null!=(b=null==(a=Hf())?void 0:a.then(function(c){return If(c)}))?b:null}
;function Kf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Kf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Lf(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Mf;function Nf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Wd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jc;c.jc=null;e()}};
return function(e){d.next={jc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Of(){this.h=this.g=null}
Of.prototype.add=function(a,b){var c=Pf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Of.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Pf=new Kf(function(){return new Qf},function(a){return a.reset()});
function Qf(){this.next=this.scope=this.g=null}
Qf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Qf.prototype.reset=function(){this.next=this.scope=this.g=null};var Rf,Sf=!1,Tf=new Of;function Uf(a,b){Rf||Vf();Sf||(Rf(),Sf=!0);Tf.add(a,b)}
function Vf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Rf=function(){a.then(Wf)}}else Rf=function(){var b=Wf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Ub()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Mf||(Mf=Nf()),Mf(b)):C.setImmediate(b)}}
function Wf(){for(var a;a=Tf.remove();){try{a.g.call(a.scope)}catch(b){gc(b)}Lf(Pf,a)}Sf=!1}
;function Xf(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
Xf.prototype[Symbol.iterator]=function(){return this};
Xf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Yf(a,b){return new Xf(a,b)}
;function Zf(){this.blockSize=-1}
;function $f(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Va($f,Zf);$f.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function ag(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
$f.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)ag(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ag(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ag(this,e);f=0;break}}this.h=f;this.j+=b}};
$f.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;ag(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function bg(){}
bg.prototype.next=function(){return cg};
var cg={done:!0,value:void 0};function dg(a){return{value:a,done:!1}}
bg.prototype.ia=function(){return this};function eg(a){if(a instanceof fg||a instanceof gg||a instanceof hg)return a;if("function"==typeof a.next)return new fg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new fg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new fg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function fg(a){this.h=a}
fg.prototype.ia=function(){return new gg(this.h())};
fg.prototype[Symbol.iterator]=function(){return new hg(this.h())};
fg.prototype.g=function(){return new hg(this.h())};
function gg(a){this.h=a}
y(gg,bg);gg.prototype.next=function(){return this.h.next()};
gg.prototype[Symbol.iterator]=function(){return new hg(this.h)};
gg.prototype.g=function(){return new hg(this.h)};
function hg(a){fg.call(this,function(){return a});
this.i=a}
y(hg,fg);hg.prototype.next=function(){return this.i.next()};function ig(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ig)for(c=jg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function jg(a){kg(a);return a.g.concat()}
r=ig.prototype;r.has=function(a){return lg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||mg;kg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function mg(a,b){return a===b}
r.Qb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return lg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&kg(this),!0):!1};
function kg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];lg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],lg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return lg(this.h,a)?this.h[a]:b};
r.set=function(a,b){lg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=jg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new ig(this)};
r.keys=function(){return eg(this.ia(!0)).g()};
r.values=function(){return eg(this.ia(!1)).g()};
r.entries=function(){var a=this;return Yf(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){kg(this);var b=0,c=this.i,d=this,e=new bg;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return cg;var f=d.g[b++];return dg(a?f:d.h[f])};
return e};
function lg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var ng=C.JSON.stringify;function og(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function pg(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){qg(b,2,c)},function(c){qg(b,3,c)})}catch(c){qg(this,3,c)}}
function rg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
rg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var sg=new Kf(function(){return new rg},function(a){a.reset()});
function tg(a,b,c){var d=sg.get();d.i=a;d.h=b;d.context=c;return d}
pg.prototype.then=function(a,b,c){return ug(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
pg.prototype.$goog_Thenable=!0;pg.prototype.cancel=function(a){if(0==this.g){var b=new vg(a);Uf(function(){wg(this,b)},this)}};
function wg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?wg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):xg(c),yg(c,e,3,b)))}a.i=null}else qg(a,3,b)}
function zg(a,b){a.h||2!=a.g&&3!=a.g||Ag(a);a.j?a.j.next=b:a.h=b;a.j=b}
function ug(a,b,c,d){var e=tg(null,null,null);e.g=new pg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof vg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;zg(a,e);return e.g}
pg.prototype.S=function(a){this.g=0;qg(this,2,a)};
pg.prototype.oa=function(a){this.g=0;qg(this,3,a)};
function qg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof pg){zg(d,tg(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){Bg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,Ag(a),3!=b||c instanceof vg||Cg(a,c))}}
function Bg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ag(a){a.u||(a.u=!0,Uf(a.M,a))}
function xg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
pg.prototype.M=function(){for(var a;a=xg(this);)yg(this,a,this.g,this.H);this.u=!1};
function yg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Dg(b,c,d);else try{b.j?b.i.call(b.context):Dg(b,c,d)}catch(e){Eg.call(null,e)}Lf(sg,b)}
function Dg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Cg(a,b){a.o=!0;Uf(function(){a.o&&Eg.call(null,b)})}
var Eg=gc;function vg(a){Xa.call(this,a)}
Va(vg,Xa);vg.prototype.name="cancel";function M(a){Ge.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Va(M,Ge);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function Fg(a,b,c){var d=Gg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.tb(a)}}
r.tb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&db(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.bb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Hg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ha;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.tb(c)}}return 0!=e}return!1};
function Hg(a,b,c){Uf(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.tb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Ig(a){this.g=a}
Ig.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,ng(b))};
Ig.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ig.prototype.remove=function(a){this.g.remove(a)};function Jg(a){this.g=a}
Va(Jg,Ig);function Kg(a){this.data=a}
function Lg(a){return void 0===a||a instanceof Kg?a:new Kg(a)}
Jg.prototype.set=function(a,b){Jg.na.set.call(this,a,Lg(b))};
Jg.prototype.h=function(a){a=Jg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Jg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Mg(a){this.g=a}
Va(Mg,Jg);Mg.prototype.set=function(a,b,c){if(b=Lg(b)){if(c){if(c<Ua()){Mg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Mg.na.set.call(this,a,b)};
Mg.prototype.h=function(a){var b=Mg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Mg.prototype.remove.call(this,a);else return b}};function Ng(){}
;function Og(){}
Va(Og,Ng);Og.prototype[Symbol.iterator]=function(){return eg(this.ia(!0)).g()};
Og.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Pg(a){this.g=a}
Va(Pg,Og);r=Pg.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new bg;d.next=function(){if(b>=c.length)return cg;var e=c.key(b++);if(a)return dg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return dg(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function Qg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Qg,Pg);function Rg(a,b){this.h=a;this.g=null;var c;if(c=kc)c=!(9<=Number(Ac));if(c){Sg||(Sg=new ig);this.g=Sg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Sg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Rg,Og);var Tg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Sg=null;function Ug(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Tg[b]})}
r=Rg.prototype;r.set=function(a,b){this.g.setAttribute(Ug(a),b);Vg(this)};
r.get=function(a){a=this.g.getAttribute(Ug(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(Ug(a));Vg(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new bg;d.next=function(){if(b>=c.length)return cg;var e=c[b++];if(a)return dg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return dg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Vg(this)};
function Vg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Wg(a,b){this.h=a;this.g=b+"::"}
Va(Wg,Og);Wg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Wg.prototype.get=function(a){return this.h.get(this.g+a)};
Wg.prototype.remove=function(a){this.h.remove(this.g+a)};
Wg.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new bg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return dg(a?e.slice(c.g.length):c.h.get(e))};
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
var P={},Xg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Yg={Ra:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Zg={Ra:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){return[].concat.apply([],a)}};
P.xd=function(){Xg?(P.Qa=Uint8Array,P.pa=Uint16Array,P.Lc=Int32Array,P.assign(P,Yg)):(P.Qa=Array,P.pa=Array,P.Lc=Array,P.assign(P,Zg))};
P.xd();var $g=!0;try{new Uint8Array(1)}catch(a){$g=!1}
function ah(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new P.Qa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var bh={};bh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var ch={},dh,eh=[],fh=0;256>fh;fh++){dh=fh;for(var gh=0;8>gh;gh++)dh=dh&1?3988292384^dh>>>1:dh>>>1;eh[fh]=dh}ch=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^eh[(a^b[d])&255];return a^-1};var hh={};hh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ih(a){for(var b=a.length;0<=--b;)a[b]=0}
var jh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],kh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],lh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],mh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],nh=Array(576);ih(nh);var oh=Array(60);ih(oh);var ph=Array(512);ih(ph);var qh=Array(256);ih(qh);var rh=Array(29);ih(rh);var sh=Array(30);ih(sh);function th(a,b,c,d,e){this.Hc=a;this.ad=b;this.Zc=c;this.Xc=d;this.rd=e;this.qc=a&&a.length}
var uh,vh,wh;function xh(a,b){this.lc=a;this.Ya=0;this.Ca=b}
function yh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function zh(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,yh(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function Ah(a,b,c){zh(a,c[2*b],c[2*b+1])}
function Bh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Ch(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Bh(d[e]++,e))}
function Dh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.cb=0;a.da=a.matches=0}
function $h(a){8<a.O?yh(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function ai(a,b,c){$h(a);yh(a,c);yh(a,~c);P.Ra(a.K,a.window,b,c,a.pending);a.pending+=c}
function bi(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ci(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&bi(b,a.L[e+1],a.L[e],a.depth)&&e++;if(bi(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function di(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.lb+2*d]<<8|a.K[a.lb+2*d+1];var f=a.K[a.Sb+d];d++;if(0===e)Ah(a,f,b);else{var g=qh[f];Ah(a,g+256+1,b);var h=jh[g];0!==h&&(f-=rh[g],zh(a,f,h));e--;g=256>e?ph[e]:ph[256+(e>>>7)];Ah(a,g,c);h=kh[g];0!==h&&(e-=sh[g],zh(a,e,h))}}while(d<a.da)}Ah(a,256,b)}
function ei(a,b){var c=b.lc,d=b.Ca.Hc,e=b.Ca.qc,f=b.Ca.Xc,g,h=-1;a.wa=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.cb-=d[2*k+1])}b.Ya=h;for(g=a.wa>>1;1<=g;g--)ci(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],ci(a,c,1),d=a.L[1],a.L[--a.Ua]=g,a.L[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,ci(a,c,1);while(2<=a.wa);a.L[--a.Ua]=
a.L[1];g=b.lc;k=b.Ya;d=b.Ca.Hc;e=b.Ca.qc;f=b.Ca.ad;var l=b.Ca.Zc,m=b.Ca.rd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.cb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Ch(c,h,a.ra)}
function fi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function gi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Ah(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(Ah(a,l,a.R),g--),Ah(a,16,a.R),zh(a,g-3,2)):10>=g?(Ah(a,17,a.R),zh(a,g-3,3)):(Ah(a,18,a.R),zh(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function hi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var ii=!1;function ji(a,b,c){a.K[a.lb+2*a.da]=b>>>8&255;a.K[a.lb+2*a.da+1]=b&255;a.K[a.Sb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(qh[c]+256+1)]++,a.Ia[2*(256>b?ph[b]:ph[256+(b>>>7)])]++);return a.da===a.ob-1}
;function ki(a,b){a.msg=hh[b];return b}
function li(a){for(var b=a.length;0<=--b;)a[b]=0}
function mi(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(P.Ra(a.output,b.K,b.qb,c,a.Za),a.Za+=c,b.qb+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.qb=0))}
function R(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Nb&&(a.C.Nb=hi(a));ei(a,a.Db);ei(a,a.zb);fi(a,a.X,a.Db.Ya);fi(a,a.Ia,a.zb.Ya);ei(a,a.hc);for(e=18;3<=e&&0===a.R[2*mh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.cb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)zh(a,b?1:0,3),ai(a,c,d);else if(4===a.strategy||g===f)zh(a,2+(b?1:0),3),di(a,nh,oh);else{zh(a,4+(b?1:0),3);c=a.Db.Ya+1;d=a.zb.Ya+1;e+=1;zh(a,c-257,5);zh(a,d-1,5);zh(a,e-4,4);for(f=0;f<e;f++)zh(a,a.R[2*mh[f]+
1],3);gi(a,a.X,c-1);gi(a,a.Ia,d-1);di(a,a.X,a.Ia)}Dh(a);b&&$h(a);a.Z=a.l;mi(a.C)}
function S(a,b){a.K[a.pending++]=b}
function ni(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function oi(a,b){var c=a.yc,d=a.l,e=a.aa,f=a.zc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ea,l=a.la,m=a.l+258,n=h[d+e-1],q=h[d+e];a.aa>=a.pc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Xa=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function pi(a){var b=a.T,c;do{var d=a.Jc-a.m-a.l;if(a.l>=b+(b-262)){P.Ra(a.window,a.window,b,b,0);a.Xa-=b;a.l-=b;a.Z-=b;var e=c=a.Cb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,P.Ra(c,e.input,e.Oa,g,f),1===e.state.wrap?e.A=bh(e.A,c,g,f):2===e.state.wrap&&(e.A=ch(e.A,c,g,f)),e.Oa+=g,e.Pa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Ea]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function qi(a,b){for(var c;;){if(262>a.m){pi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=oi(a,c));if(3<=a.G)if(c=ji(a,a.l-a.Xa,a.G-3),a.m-=a.G,a.G<=a.Ub&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=ji(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function ri(a,b){for(var c,d;;){if(262>a.m){pi(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Cc=a.Xa;a.G=2;0!==c&&a.aa<a.Ub&&a.l-c<=a.T-262&&(a.G=oi(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Xa)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=ji(a,a.l-1-a.Cc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Ma=0;a.G=2;a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}else if(a.Ma){if((c=ji(a,0,a.window[a.l-1]))&&R(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Ma=1,a.l++,a.m--}a.Ma&&(ji(a,0,a.window[a.l-1]),a.Ma=0);a.Y=2>a.l?a.l:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function si(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){pi(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=ji(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=ji(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&
(R(a,!1),0===a.C.F)?1:2}
function ti(a,b){for(var c;;){if(0===a.m&&(pi(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=ji(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function ui(a,b,c,d,e){this.dd=a;this.qd=b;this.td=c;this.pd=d;this.bd=e}
var vi;vi=[new ui(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){pi(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,R(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(R(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return R(a,!0),0===a.C.F?3:4;a.l>a.Z&&R(a,!1);return 1}),
new ui(4,4,8,4,qi),new ui(4,5,16,8,qi),new ui(4,6,32,32,qi),new ui(4,4,16,16,ri),new ui(8,16,32,32,ri),new ui(8,16,128,128,ri),new ui(8,32,128,256,ri),new ui(32,128,258,1024,ri),new ui(32,258,258,4096,ri)];
function wi(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.qb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Va=-1;this.Ea=this.dc=this.T=0;this.window=null;this.Jc=0;this.head=this.la=null;this.zc=this.pc=this.strategy=this.level=this.Ub=this.yc=this.aa=this.m=this.Xa=this.l=this.Ma=this.Cc=this.G=this.Z=this.va=this.ta=this.Ob=this.Cb=this.D=0;this.X=new P.pa(1146);this.Ia=new P.pa(122);this.R=new P.pa(78);li(this.X);li(this.Ia);li(this.R);this.hc=this.zb=this.Db=null;this.ra=
new P.pa(16);this.L=new P.pa(573);li(this.L);this.Ua=this.wa=0;this.depth=new P.pa(573);li(this.depth);this.O=this.V=this.Y=this.matches=this.cb=this.xa=this.lb=this.da=this.ob=this.Sb=0}
function xi(a,b){if(!a||!a.state||5<b||0>b)return a?ki(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return ki(a,0===a.F?-5:-2);c.C=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,S(c,31),S(c,139),S(c,8),c.v?(S(c,(c.v.text?1:0)+(c.v.Aa?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),S(c,c.v.time&255),S(c,c.v.time>>8&255),S(c,c.v.time>>16&255),S(c,c.v.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.v.te&255),c.v.extra&&c.v.extra.length&&
(S(c,c.v.extra.length&255),S(c,c.v.extra.length>>8&255)),c.v.Aa&&(a.A=ch(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.dc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;ni(c,e+(31-e%31));0!==c.l&&(ni(c,a.A>>>16),ni(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Aa&&c.pending>e&&(a.A=ch(a.A,c.K,c.pending-e,e)),mi(a),e=c.pending,c.pending!==c.ea));)S(c,c.v.extra[c.fa]&255),c.fa++;c.v.Aa&&c.pending>e&&(a.A=ch(a.A,c.K,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=ch(a.A,c.K,c.pending-e,e)),mi(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Aa&&c.pending>
e&&(a.A=ch(a.A,c.K,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=ch(a.A,c.K,c.pending-e,e)),mi(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Aa&&c.pending>e&&(a.A=ch(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Aa?(c.pending+2>c.ea&&mi(a),c.pending+2<=c.ea&&(S(c,a.A&
255),S(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(mi(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ki(a,-5);if(666===c.status&&0!==a.U)return ki(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?ti(c,b):3===c.strategy?si(c,b):vi[c.level].bd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(zh(c,2,3),Ah(c,256,nh),16===c.O?(yh(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=
c.V&255,c.V>>=8,c.O-=8)):5!==b&&(zh(c,0,3),ai(c,0,0),3===b&&(li(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),mi(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.A&255),S(c,a.A>>8&255),S(c,a.A>>16&255),S(c,a.A>>24&255),S(c,a.Pa&255),S(c,a.Pa>>8&255),S(c,a.Pa>>16&255),S(c,a.Pa>>24&255)):(ni(c,a.A>>>16),ni(c,a.A&65535));mi(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var yi={};yi=function(){this.input=null;this.Pa=this.U=this.Oa=0;this.output=null;this.cc=this.F=this.Za=0;this.msg="";this.state=null;this.Nb=2;this.A=0};var zi=Object.prototype.toString;
function Ai(a){if(!(this instanceof Ai))return new Ai(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,Fa:15,sd:8,strategy:0,Da:""},a||{});a.raw&&0<a.Fa?a.Fa=-a.Fa:a.ed&&0<a.Fa&&16>a.Fa&&(a.Fa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new yi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Fa,f=a.sd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ki(b,-2);else{8===e&&(e=9);var k=new wi;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.dc=e;k.T=1<<k.dc;k.Ea=k.T-1;k.Ob=f+7;k.Cb=1<<k.Ob;k.ta=k.Cb-1;k.va=~~((k.Ob+3-1)/3);k.window=new P.Qa(2*k.T);k.head=new P.pa(k.Cb);k.la=new P.pa(k.T);k.ob=1<<f+6;k.ea=4*k.ob;k.K=new P.Qa(k.ea);k.lb=1*k.ob;k.Sb=3*k.ob;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Pa=b.cc=0;b.Nb=2;c=b.state;c.pending=0;c.qb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!ii){d=Array(16);for(f=g=0;28>f;f++)for(rh[f]=g,e=0;e<1<<jh[f];e++)qh[g++]=
f;qh[g-1]=f;for(f=g=0;16>f;f++)for(sh[f]=g,e=0;e<1<<kh[f];e++)ph[g++]=f;for(g>>=7;30>f;f++)for(sh[f]=g<<7,e=0;e<1<<kh[f]-7;e++)ph[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)nh[2*e+1]=8,e++,d[8]++;for(;255>=e;)nh[2*e+1]=9,e++,d[9]++;for(;279>=e;)nh[2*e+1]=7,e++,d[7]++;for(;287>=e;)nh[2*e+1]=8,e++,d[8]++;Ch(nh,287,d);for(e=0;30>e;e++)oh[2*e+1]=5,oh[2*e]=Bh(e,5);uh=new th(nh,jh,257,286,15);vh=new th(oh,kh,0,30,15);wh=new th([],lh,0,19,7);ii=!0}c.Db=new xh(c.X,uh);c.zb=new xh(c.Ia,vh);c.hc=new xh(c.R,
wh);c.V=0;c.O=0;Dh(c);c=0}else c=ki(b,-2);0===c&&(b=b.state,b.Jc=2*b.T,li(b.head),b.Ub=vi[b.level].qd,b.pc=vi[b.level].dd,b.zc=vi[b.level].td,b.yc=vi[b.level].pd,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Ma=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(hh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.mb){var l;"string"===typeof a.mb?l=ah(a.mb):"[object ArrayBuffer]"===zi.call(a.mb)?l=new Uint8Array(a.mb):l=a.mb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=bh(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(li(l.head),l.l=0,l.Z=0,l.Y=0),c=new P.Qa(l.T),P.Ra(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Oa;e=a.input;a.U=g;a.Oa=0;a.input=f;for(pi(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Ea]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;pi(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Ma=0;a.Oa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(hh[b]);this.ke=!0}}
Ai.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=ah(a):"[object ArrayBuffer]"===zi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Oa=0;c.U=c.input.length;do{0===c.F&&(c.output=new P.Qa(d),c.Za=0,c.F=d);a=xi(c,e);if(1!==a&&0!==a)return Bi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Da){var f=P.ac(c.output,c.Za);b=f;f=f.length;if(65537>f&&(b.subarray&&$g||!b.subarray))b=
String.fromCharCode.apply(null,P.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.ac(c.output,c.Za),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ki(c,-2):(c.state=null,a=113===d?ki(c,-3):0)):a=-2,Bi(this,a),this.ended=!0,0===a;2===e&&(Bi(this,0),c.F=0);return!0};
function Bi(a,b){0===b&&(a.result="string"===a.options.Da?a.chunks.join(""):P.nc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ci(a){this.name=a}
;var Di=new Ci("rawColdConfigGroup");var Ei=new Ci("rawHotConfigGroup");function Fi(a){this.s=H(a)}
y(Fi,L);Fi.prototype.g=function(a){K(this,5,a)};function Gi(a){this.s=H(a)}
y(Gi,L);function Hi(a){this.s=H(a)}
y(Hi,L);Hi.ma=[2];function Ii(a){this.s=H(a)}
y(Ii,L);Ii.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Cd(this,36);return null!=b?b:a};
Ii.prototype.setHomeGroupInfo=function(a){return J(this,Hi,81,a)};
Ii.ma=[9,66,32,86,100,101];function Ji(a){this.s=H(a)}
y(Ji,L);Ji.prototype.getKey=function(){return Nd(this,1)};
Ji.prototype.ja=function(){return Nd(this,Id(this,Ki,2))};
var Ki=[2,3,4,5,6];function Li(a){this.s=H(a)}
y(Li,L);Li.ma=[15,26,28];function Mi(a){this.s=H(a)}
y(Mi,L);Mi.ma=[5];function Ni(a){this.s=H(a)}
y(Ni,L);function Oi(a){this.s=H(a)}
y(Oi,L);Oi.prototype.setSafetyMode=function(a){return Rd(this,5,a)};
Oi.ma=[12];function Pi(a){this.s=H(a)}
y(Pi,L);Pi.ma=[12];var Qi={je:"WEB_DISPLAY_MODE_UNKNOWN",fe:"WEB_DISPLAY_MODE_BROWSER",he:"WEB_DISPLAY_MODE_MINIMAL_UI",ie:"WEB_DISPLAY_MODE_STANDALONE",ge:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ri(a){this.s=H(a)}
y(Ri,L);Ri.prototype.getKey=function(){return Nd(this,1)};
Ri.prototype.ja=function(){return Nd(this,2)};function Si(a){this.s=H(a)}
y(Si,L);Si.ma=[4,5];function Ti(a){this.s=H(a)}
y(Ti,L);function Ui(a){this.s=H(a)}
y(Ui,L);var Vi=[2,3,4,5];function Wi(a){this.s=H(a)}
y(Wi,L);function Xi(a){this.s=H(a)}
y(Xi,L);function Yi(a){this.s=H(a)}
y(Yi,L);function Zi(a){this.s=H(a)}
y(Zi,L);Zi.ma=[10,17];function $i(a){this.s=H(a)}
y($i,L);function aj(a){this.s=H(a)}
y(aj,L);function bj(a){this.s=H(a)}
y(bj,L);function cj(a){this.s=H(a,487)}
y(cj,L);
var dj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486];function ej(a){this.s=H(a)}
y(ej,L);function fj(a){this.s=H(a)}
y(fj,L);fj.prototype.getPlaylistId=function(){return Od(this,2)};
var Pd=[1,2];function gj(a){this.s=H(a)}
y(gj,L);gj.ma=[3];var hj=C.window,ij,jj,kj=(null==hj?void 0:null==(ij=hj.yt)?void 0:ij.config_)||(null==hj?void 0:null==(jj=hj.ytcfg)?void 0:jj.data_)||{};E("yt.config_",kj);function lj(){var a=arguments;1<a.length?kj[a[0]]=a[1]:1===a.length&&Object.assign(kj,a[0])}
function T(a,b){return a in kj?kj[a]:b}
function mj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function nj(){var a=kj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var oj=[];function pj(a){oj.forEach(function(b){return b(a)})}
function qj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){rj(b)}}:a}
function rj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),lj("ERRORS",b));pj(a)}
function sj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),lj("ERRORS",f))}
;function U(a){a=tj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function V(a,b){a=tj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function tj(a){return T("EXPERIMENT_FLAGS",{})[a]}
function uj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var vj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++vj});var wj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function xj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in wj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
xj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
xj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
xj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",lb);var yj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",yj);
function zj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Aj(a){a&&("string"==typeof a&&(a=[a]),cb(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Bj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Bj=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Cj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=zj(a,b,c,d);if(!e){e=++yj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new xj(h);if(!Xd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new xj(h);
h.currentTarget=a;return c.call(a,h)};
g=qj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Bj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Dj(a,b){"function"===typeof a&&(a=qj(a));return window.setTimeout(a,b)}
function Ej(a){"function"===typeof a&&(a=qj(a));return window.setInterval(a,250)}
;var Fj=/^[\w.]*$/,Gj={q:!0,search_query:!0};function Hj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Ij(f[0]||""),h=Ij(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Hj);k.args=[{key:l,value:f[1],query:a,method:Jj==m?"unchanged":m}];Gj.hasOwnProperty(l)||sj(k)}}return c}
var Jj=String(Hj);function Kj(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];cb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Lj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Hj(a,"&")}
function Mj(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Lj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=dc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Nj(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function Ij(a){return a&&a.match(Fj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Oj(a){var b=Pj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=re;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ea){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ud:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=Ud.screen)?void 0:k.height;var l;e.u_w=null==(l=Ud.screen)?void 0:l.width;var m;e.u_ah=null==(m=Ud.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Ud.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=Ud.screen)?void 0:q.colorDepth}catch(ea){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ea){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ea){}try{var G=h.innerWidth;var O=h.innerHeight}catch(ea){}try{var Q=h.screenLeft;var fa=h.screenTop}catch(ea){}try{G=h.innerWidth,O=h.innerHeight}catch(ea){}try{var ab=h.screen.availWidth;var Ta=h.screen.availTop}catch(ea){}p=[Q,fa,p,t,ab,Ta,u,z,G,O];t=b.g.top;try{var Ha=(t||window).document,ha=
"CSS1Compat"==Ha.compatMode?Ha.documentElement:Ha.body;var pa=(new Vd(ha.clientWidth,ha.clientHeight)).round()}catch(ea){pa=new Vd(-12245933,-12245933)}Ha=pa;pa={};var qa=void 0===qa?C:qa;ha=new rf;"SVGElement"in qa&&"createElementNS"in qa.document&&ha.set(0);t=pe();t["allow-top-navigation-by-user-activation"]&&ha.set(1);t["allow-popups-to-escape-sandbox"]&&ha.set(2);qa.crypto&&qa.crypto.subtle&&ha.set(3);"TextDecoder"in qa&&"TextEncoder"in qa&&ha.set(4);qa=sf(ha);pa.bc=qa;pa.bih=Ha.height;pa.biw=
Ha.width;pa.brdim=p.join();b=b.h;b=(pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,pa.wgl=!!Ud.WebGLRenderingContext,pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Pj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Kj(Oj(a))});Ua();var Qj="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Rj(){if(!Qj)return null;var a=Qj();return"open"in a?a:null}
;var Sj="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Sj);var Tj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Uj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Sj)),Vj=!1;
function Wj(a,b){b=void 0===b?{}:b;var c=Nj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Tj){var f=T(Tj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=Kj(Oj()));return b}
function Xj(a){var b=window.location.search,c=ac(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Nj(a)&&(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Lj(b),f={};cb(Uj,function(g){e[g]&&(f[g]=e[g])});
return Mj(a,f||{},!1)}
function Yj(a,b){var c=b.format||"JSON";a=Zj(a,b);var d=ak(a,b),e=!1,f=bk(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=ck(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Dj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Zj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Mj(a,b||{},!0);return a}
function ak(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Lj(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):dc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Vj&&a&&"POST"!=b.method&&(Vj=!0,rj(Error("AJAX request with postData should use POST")));return e}
function ck(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,sj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?dk(a):null)e={},cb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ek(g)})}d&&fk(e);
return e}
function fk(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=rb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else fk(a[b])}}
function dk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ek(a){var b="";cb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function gk(a,b){b.method="POST";b.postParams||(b.postParams={});return Yj(a,b)}
function bk(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&qj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Rj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Xj(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Wj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var hk=[{Vb:function(a){return"Cannot read property '"+a.key+"'"},
Hb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Vb:function(a){return"Cannot call '"+a.key+"'"},
Hb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Vb:function(a){return a.key+" is not defined"},
Hb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var jk={Ba:[],za:[{kb:ik,weight:500}]};function ik(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function kk(){this.za=[];this.Ba=[]}
var lk;function mk(){if(!lk){var a=lk=new kk;a.Ba.length=0;a.za.length=0;jk.Ba&&a.Ba.push.apply(a.Ba,jk.Ba);jk.za&&a.za.push.apply(a.za,jk.za)}return lk}
;var nk=new M;function ok(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=pk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=pk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=pk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function pk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function qk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=rk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=ok(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?rk(f+".ve",g,h,k):0;d+=f;d+=rk(e,a[e],b,c);if(500<d)break}}else c[b]=sk(a),d+=c[b].length;else c[b]=sk(a),d+=c[b].length;return d}
function rk(a,b,c,d){c+="."+a;a=sk(b);d[c]=a;return c.length+a.length}
function sk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function tk(){}
;function uk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function vk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var wk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},yk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},zk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ak(){var a=C.navigator;return a?a.connection:void 0}
;function Bk(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Bk,Error);function Ck(){try{return Dk(),!0}catch(a){return!1}}
function Dk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new Bk("Datasync ID not set","unknown");}
;function Ek(){}
function Fk(a,b){return qf.Ga(a,0,b)}
Ek.prototype.qa=function(a,b){return this.Ga(a,1,b)};
Ek.prototype.hb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Gk=V("web_emulated_idle_callback_delay",300),Hk=1E3/60-3,Ik=[8,5,4,3,2,1,0];
function Jk(a){a=void 0===a?{}:a;Ge.call(this);this.h=[];this.i={};this.fb=this.g=0;this.eb=this.o=!1;this.M=[];this.S=this.gb=!1;for(var b=w(Ik),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Qc=a.timeout||1;this.H=Hk;this.u=0;this.ub=this.ud.bind(this);this.Pc=this.zd.bind(this);this.Mc=this.Rc.bind(this);this.Nc=this.fd.bind(this);this.Oc=this.vd.bind(this);this.ec=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ub)}
y(Jk,Ge);r=Jk.prototype;r.hb=function(a){var b=Ua();Kk(a);a=Ua()-b;this.o||(this.H-=a)};
r.Ga=function(a,b,c){++this.fb;if(10===b)return this.hb(a),this.fb;var d=this.fb;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.eb||this.o||(0!==this.g&&Lk(this)!==this.u&&Mk(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Nk(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Mk(a)}
function Lk(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function Ok(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Kk(a){try{a()}catch(b){Ok(b)}}
function Pk(a){for(var b=w(Ik),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.fd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.gb=!0;Qk(this,b);this.gb=!1};
r.zd=function(){Qk(this)};
r.Rc=function(){Rk(this)};
r.vd=function(a){this.S=!0;var b=Lk(this);4===b&&b!==this.u&&(Mk(this),this.start());Qk(this,void 0,a);this.S=!1};
r.ud=function(){document.hidden||Rk(this);this.g&&(Mk(this),this.start())};
function Rk(a){Mk(a);a.o=!0;for(var b=Ua(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Kk(e)}Sk(a);a.o=!1;Pk(a)&&a.start();b=Ua()-b;a.H-=b}
function Sk(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function Qk(a,b,c){a.S&&4===a.u&&a.g||Mk(a);a.o=!0;b=Ua()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Ok(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Kk(e);d=a.gb?0:1;d=a.j>d?a.j:d;if(!(Ua()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Kk(c)}while(c&&Ua()<b)}a.o=!1;Sk(a);a.H=Hk;Pk(a)&&a.start()}
r.start=function(){this.eb=!1;if(0===this.g)switch(this.u=Lk(this),this.u){case 1:var a=this.Nc;this.g=this.ec?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Gk);break;case 2:this.g=window.setTimeout(this.Pc,this.Qc);break;case 3:this.g=window.requestAnimationFrame(this.Oc);break;case 4:this.g=window.setTimeout(this.Mc,0)}};
function Mk(a){if(a.g){switch(a.u){case 1:var b=a.g;a.ec?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){Nk(this);Mk(this);this.ya&&document.removeEventListener("visibilitychange",this.ub);Ge.prototype.sa.call(this)};var Tk=D("yt.scheduler.instance.timerIdMap_")||{},Uk=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),Vk=0,Wk=0;function Xk(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Ha)a=new Jk(T("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Yk(){Zk();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Fe(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Zk(){Nk(Xk());for(var a in Tk)Tk.hasOwnProperty(a)&&delete Tk[Number(a)]}
function $k(a,b,c){if(!c)return c=void 0===c,-Xk().Ga(a,b,c);var d=window.setTimeout(function(){var e=Xk().Ga(a,b);Tk[d]=e},c);
return d}
function al(a){Xk().hb(a)}
function bl(a){var b=Xk();if(0>a)b.ba(-a);else{var c=Tk[a];c?(b.ba(c),delete Tk[a]):window.clearTimeout(a)}}
function cl(){dl()}
function dl(){window.clearTimeout(Vk);Xk().start()}
function el(){var a=Xk();Mk(a);a.eb=!0;window.clearTimeout(Vk);Vk=window.setTimeout(cl,Uk)}
function fl(){window.clearTimeout(Wk);Wk=window.setTimeout(function(){gl(0)},Uk)}
function gl(a){fl();var b=Xk();b.j=a;b.start()}
function hl(a){fl();var b=Xk();b.j>a&&(b.j=a,b.start())}
function il(){window.clearTimeout(Wk);var a=Xk();a.j=0;a.start()}
;function jl(){Ek.apply(this,arguments)}
y(jl,Ek);function kl(){jl.g||(jl.g=new jl);return jl.g}
jl.prototype.Ga=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Dj(a,c||0)};
jl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var qf=kl();
U("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Yk),E("yt.scheduler.instance.addJob",$k),E("yt.scheduler.instance.addImmediateJob",al),E("yt.scheduler.instance.cancelJob",bl),E("yt.scheduler.instance.cancelAllJobs",Zk),E("yt.scheduler.instance.start",dl),E("yt.scheduler.instance.pause",el),E("yt.scheduler.instance.setPriorityThreshold",gl),E("yt.scheduler.instance.enablePriorityThreshold",hl),E("yt.scheduler.instance.clearPriorityThreshold",il),E("yt.scheduler.initialized",
!0));function ll(a){var b=new Qg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Wg(b,a):b:null)||(a=new Rg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Mg(a):null;this.h=document.domain||window.location.hostname}
ll.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(ng(b))}catch(f){return}else e=escape(b);b=this.h;ze.set(""+a,e,{Tb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ll.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=ze.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ll.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;ze.remove(""+a,"/",void 0===b?"youtube.com":b)};var ml=function(){var a;return function(){a||(a=new ll("ytidb"));return a}}();
function nl(){var a;return null==(a=ml())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ol=[],pl=!1;function ql(a){pl||(ol.push({type:"ERROR",payload:a}),10<ol.length&&ol.shift())}
function rl(a,b){pl||(ol.push({type:"EVENT",eventType:a,payload:b}),10<ol.length&&ol.shift())}
;function sl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function tl(a){return a.substr(0,a.indexOf(":"))||a}
;var ul=Bc||Cc;var vl={},wl=(vl.AUTH_INVALID="No user identifier specified.",vl.EXPLICIT_ABORT="Transaction was explicitly aborted.",vl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",vl.MISSING_INDEX="Index not created.",vl.MISSING_OBJECT_STORES="Object stores not created.",vl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",vl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",vl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
vl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",vl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",vl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",vl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",vl),xl={},yl=(xl.AUTH_INVALID="ERROR",xl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",xl.EXPLICIT_ABORT="IGNORED",xl.IDB_NOT_SUPPORTED="ERROR",xl.MISSING_INDEX=
"WARNING",xl.MISSING_OBJECT_STORES="ERROR",xl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",xl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",xl.QUOTA_EXCEEDED="WARNING",xl.QUOTA_MAYBE_EXCEEDED="WARNING",xl.UNKNOWN_ABORT="WARNING",xl.INCOMPATIBLE_DB_VERSION="WARNING",xl),zl={},Al=(zl.AUTH_INVALID=!1,zl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,zl.EXPLICIT_ABORT=!1,zl.IDB_NOT_SUPPORTED=!1,zl.MISSING_INDEX=!1,zl.MISSING_OBJECT_STORES=!1,zl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,zl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,zl.QUOTA_EXCEEDED=!1,zl.QUOTA_MAYBE_EXCEEDED=!0,zl.UNKNOWN_ABORT=!0,zl.INCOMPATIBLE_DB_VERSION=!1,zl);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?wl[a]:c;d=void 0===d?yl[a]:d;e=void 0===e?Al[a]:e;Bk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Bk);function Bl(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},wl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Bl.prototype)}
y(Bl,X);function Cl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Cl.prototype)}
y(Cl,Error);var Dl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function El(a,b,c,d){b=tl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Dc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Cl)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Dl.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",se:e.name})];e.level="WARNING";return e}
function Fl(a,b,c){var d=nl();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Gl(a){if(!a)throw Error();throw a;}
function Hl(a){return a}
function Il(a){this.g=a}
function Jl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Jl.resolve=function(a){return new Jl(new Il(function(b,c){a instanceof Jl?a.then(b,c):b(a)}))};
Jl.reject=function(a){return new Jl(new Il(function(b,c){c(a)}))};
Jl.prototype.then=function(a,b){var c=this,d=null!=a?a:Hl,e=null!=b?b:Gl;return new Jl(new Il(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Kl(c,c,d,f,g)}),c.h.push(function(){Ll(c,c,e,f,g)})):"FULFILLED"===c.state.status?Kl(c,c,d,f,g):"REJECTED"===c.state.status&&Ll(c,c,e,f,g)}))};
function Ml(a,b){a.then(void 0,b)}
function Kl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Jl?Nl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ll(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Jl?Nl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Nl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Jl?Nl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ol(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Pl(a){return new Promise(function(b,c){Ol(a,b,c)})}
function Ql(a){return new Jl(new Il(function(b,c){Ol(a,b,c)}))}
;function Rl(a,b){return new Jl(new Il(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Sl=window,Y=Sl.ytcsi&&Sl.ytcsi.now?Sl.ytcsi.now:Sl.performance&&Sl.performance.timing&&Sl.performance.now&&Sl.performance.timing.navigationStart?function(){return Sl.performance.timing.navigationStart+Sl.performance.now()}:function(){return(new Date).getTime()};function Tl(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=Tl.prototype;r.add=function(a,b,c){return Ul(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Ul(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Vl(a,b,c){a=a.g.createObjectStore(b,c);return new Wl(a)}
r.delete=function(a,b){return Ul(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Ul(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Xl(a,b,c){return Ul(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Ql(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Ul(a,b,c,d){var e,f,g,h,k,l,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(Y());wa(z,5);l=a.g.transaction(b,e.mode);G=new Yl(l);G=Zl(G,d);return A(z,G,7);case 7:return m=z.h,n=Math.round(Y()),$l(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:q=xa(z);p=Math.round(Y());t=El(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)$l(a,k,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function $l(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&rl("QUOTA_EXCEEDED",{dbName:tl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),rl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),am(a,!1,d,f,b,g.tag),ql(e)):am(a,!0,d,f,b,g.tag)}
function am(a,b,c,d,e,f){rl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function Wl(a){this.g=a}
r=Wl.prototype;r.add=function(a,b){return Ql(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return Ql(this.g.clear()).then(function(){})};
function bm(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function cm(a,b){return dm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?cm(this,a):Ql(this.g.delete(a))};
r.get=function(a){return Ql(this.g.get(a))};
r.index=function(a){try{return new em(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Cl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function dm(a,b,c){a=a.g.openCursor(b.query,b.direction);return fm(a).then(function(d){return Rl(d,c)})}
function Yl(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Zl(a,b){var c=new Promise(function(d,e){try{Ml(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Yl.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Yl.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Wl(a),this.i.set(a,b));return b};
function em(a){this.g=a}
r=em.prototype;r.delete=function(a){return gm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return Ql(this.g.get(a))};
r.getKey=function(a){return Ql(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function gm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return fm(a).then(function(d){return Rl(d,c)})}
function hm(a,b){this.request=a;this.cursor=b}
function fm(a){return Ql(a).then(function(b){return b?new hm(a,b):null})}
r=hm.prototype;r.advance=function(a){this.cursor.advance(a);return fm(this.request)};
r.continue=function(a){this.cursor.continue(a);return fm(this.request)};
r.delete=function(){return Ql(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return Ql(this.cursor.update(a))};function im(a,b,c){return new Promise(function(d,e){function f(){q||(q=new Tl(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Tc,k=c.Uc,l=c.yd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&rl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:tl(a)});var t=f(),u=new Yl(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){rl("IDB_UNEXPECTEDLY_CLOSED",{dbName:tl(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function jm(a,b,c){c=void 0===c?{}:c;return im(a,b,c)}
function km(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Tc)&&c.addEventListener("blocked",function(){e()}),A(g,Pl(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=xa(g),El(f,a,"",-1);})}
;function lm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
lm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return jm(a,b,c)};
lm.prototype.delete=function(a){a=void 0===a?{}:a;return km(this.name,a)};
function mm(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function nm(a,b){if(!b)throw Fl("openWithToken",tl(a.name));return om(a)}
function om(a){function b(){var f,g,h,k,l,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var z=a.options,G=[],O=w(Object.keys(z.ab)),Q=O.next();!Q.done;Q=O.next()){Q=Q.value;var fa=z.ab[Q],ab=void 0===fa.wd?Number.MAX_VALUE:fa.wd;!(h.g.version>=fa.ib)||h.g.version>=ab||h.g.objectStoreNames.contains(Q)||G.push(Q)}k=G;if(0===k.length){u.B(5);break}l=Object.keys(a.options.ab);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),ql(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.j<V("ytidb_remake_db_retries",1))){u.B(6);break}a.j++;return A(u,a.delete(),7);case 7:return ql(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Bl(m,l);case 5:return u.return(h);case 2:n=xa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,mm(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),El(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw mm(a);if(a.g)return a.g;var d={Uc:function(f){f.close()},
closed:c,yd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var pm=new lm("YtIdbMeta",{ab:{databases:{ib:1}},upgrade:function(a,b){b(1)&&Vl(a,"databases",{keyPath:"actualName"})}});
function qm(a,b){var c;return B(function(d){if(1==d.g)return A(d,nm(pm,b),2);c=d.h;return d.return(Ul(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ql(f.g.put(a,void 0)).then(function(){})})}))})}
function rm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,nm(pm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function sm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,nm(pm,b),2)):3!=e.g?(d=e.h,A(e,Ul(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return dm(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function tm(a){return sm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var um,vm=new function(){}(new function(){});
function wm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=nl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ul)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,qm(d,vm),4);case 4:return A(e,rm("yt-idb-test-do-not-use",vm),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function xm(){if(void 0!==um)return um;pl=!0;return um=wm().then(function(a){pl=!1;var b;if(null!=(b=ml())&&b.g){var c;b={hasSucceededOnce:(null==(c=nl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=ml())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function ym(){return D("ytglobal.idbToken_")||void 0}
function zm(){var a=ym();return a?Promise.resolve(a):xm().then(function(b){(b=b?vm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new og;function Am(a){if(!Ck())throw a=new X("AUTH_INVALID",{dbName:a}),ql(a),a;var b=Dk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Bm(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,zm(),2);case 2:g=m.h;if(!g)throw h=Fl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ql(h),h;sl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Am(a);wa(m,3);return A(m,qm(k,g),5);case 5:return A(m,jm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=xa(m),wa(m,7),A(m,rm(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw l;}})}
function Cm(a,b,c){c=void 0===c?{}:c;return Bm(a,b,!1,c)}
function nn(a,b,c){c=void 0===c?{}:c;return Bm(a,b,!0,c)}
function on(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,zm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();sl(a);d=Am(a);return A(e,km(d.actualName,b),3)}return A(e,rm(d.actualName,c),0)})}
function pn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,km(d.actualName,b),2):A(e,rm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function qn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,zm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();sl("LogsDatabaseV2");return A(d,tm(b),3)}c=d.h;return A(d,pn(c,a,b),0)})}
function rn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,zm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();sl(a);return A(d,km(a,b),3)}return A(d,rm(a,c),0)})}
;function sn(a,b){lm.call(this,a,b);this.options=b;sl(a)}
y(sn,lm);function tn(a,b){var c;return function(){c||(c=new sn(a,b));return c}}
sn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Mb?nn:Cm)(a,b,Object.assign({},c))};
sn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Mb?rn:on)(this.name,a)};
function un(a,b){return tn(a,b)}
;var vn={},wn=un("ytGcfConfig",{ab:(vn.coldConfigStore={ib:1},vn.hotConfigStore={ib:1},vn),Mb:!1,upgrade:function(a,b){b(1)&&(bm(Vl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),bm(Vl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function xn(a){return nm(wn(),a)}
function yn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,xn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,Xl(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function zn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,xn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,Xl(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function An(a){var b,c;return B(function(d){return 1==d.g?A(d,xn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Ul(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return gm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Bn(a){var b,c;return B(function(d){return 1==d.g?A(d,xn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Ul(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return gm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Cn(){Ge.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Cn,Ge);Cn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Ge.prototype.sa.call(this)};function Dn(){this.h=0;this.i=new Cn}
function En(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=ym();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Bn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,yn(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Fn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=ym())?c?h.B(4):A(h,An(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,zn(c,b,g,d),0)})}
Dn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Gn(){return"INNERTUBE_API_KEY"in kj&&"INNERTUBE_API_VERSION"in kj}
function Hn(){return{gd:T("INNERTUBE_API_KEY"),hd:T("INNERTUBE_API_VERSION"),Pb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jd:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),uc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),wc:T("INNERTUBE_CONTEXT_HL"),vc:T("INNERTUBE_CONTEXT_GL"),kd:T("INNERTUBE_HOST_OVERRIDE")||"",md:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ld:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function In(a){var b={client:{hl:a.wc,gl:a.vc,clientName:a.sc,clientVersion:a.uc,configInfo:a.Pb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=uj();0<c.length&&(b.request={internalExperimentFlags:c});Jn(a,void 0,b);Kn(void 0,b);Ln(void 0,b);Mn(a,void 0,b);Nn(void 0,b);U("start_client_gcf")&&On(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Lj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Jn(a,b,c){a=a.sc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Jd(b,Gi,96)||new Gi;var d=uk();d=Object.keys(Qi).indexOf(d);d=-1===d?null:d;null!==d&&Rd(c,3,d);J(b,Gi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=uk())}
function Kn(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Jd(a,Mi,7)||new Mi,K(b,4,c),J(a,Mi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Ln(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?I(a,95,jd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Mn(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Jd(b,Fi,62))?d:new Fi;K(c,6,a.appInstallData);J(b,Fi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Nn(a,b){a:{var c=Ak();if(c){var d=wk[c.type||"unknown"]||"CONN_UNKNOWN";c=wk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Rd(a,61,xk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Ak(),d=null!=d&&d.effectiveType?zk.hasOwnProperty(d.effectiveType)?zk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Rd(a,94,yk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Pn(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.me||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().le;else{tk.g||(tk.g=new tk);a={};if(c=Ce([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in kj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in kj&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function On(a,b){if(!Dn.g){var c=new Dn;Dn.g=c}c=Dn.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Jd(a,Fi,62))?g:new Fi;K(b,1,c);K(b,3,d);b.g(e);J(a,Fi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Qn=D("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",Qn);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Rn(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={ze:a,ye:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Sn=void 0,Tn=void 0;function Un(){if(!Tn){var a=T("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=rb();a=b?b.createScriptURL(a):a;a=new vb(a,wb)}else a=null;Tn=a}else Tn=null}return Tn||void 0}
function Vn(){var a=Un();if(!Sn&&void 0!==a){var b=Worker;a instanceof vb&&a.constructor===vb?a=a.g:(Ja(a),a="type_error:TrustedResourceUrl");Sn=new b(a,void 0)}return Sn}
;var Wn=V("max_body_size_to_compress",5E5),Xn=V("min_body_size_to_compress",500),Yn=!0,Zn=0,$n=0,ao=V("compression_performance_threshold_lr",250),bo=V("slow_compressions_before_abandon_count",4),co=!1,eo=new Map,fo=1,go=!0;function ho(){if("function"===typeof Worker&&Un()&&!co){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=eo.get(c.key);d&&(io(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),eo.delete(c.key))}},b=Vn();
b&&(b.addEventListener("message",a),b.onerror=function(){eo.clear()},co=!0)}}
function jo(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Yn)try{try{var g=(new Blob(b.split(""))).size}catch(n){sj(n),g=null}if(null!=g&&(g>Wn||g<Xn))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!go||!U("initial_gzip_use_main_thread"))){co||ho();var h=Vn();if(h&&!e){eo.set(fo,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:fo});fo++;return}}var k=Ee(b);var l=l||{};l.ed=!0;var m=new Ai(l);
m.push(k,!0);if(m.err)throw m.msg||hh[m.err];io(m.result,f,a,c,d)}}catch(n){sj(n),d(a,c)}else d(a,c)}
function io(a,b,c,d,e){go=!1;var f=Y();b.ticks.gelc=f;$n++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=ao&&(Zn++,U("abandon_compression_after_N_slow_zips")?$n===V("compression_disable_point")&&Zn>bo&&(Yn=!1):Yn=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Rn("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function ko(a){a=Object.assign({},a);delete a.Authorization;var b=Ce();if(b){var c=new $f;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Gc(c.digest(),3)}return a}
;var lo;function mo(){lo||(lo=new ll("yt.innertube"));return lo}
function no(a,b,c,d){if(d)return null;d=mo().get("nextId",!0)||1;var e=mo().get("requests",!0)||{};e[d]={method:a,request:b,authState:ko(c),requestTime:Math.round(Y())};mo().set("nextId",d+1,86400,!0);mo().set("requests",e,86400,!0);return d}
function oo(a){var b=mo().get("requests",!0)||{};delete b[a];mo().set("requests",b,86400,!0)}
function po(a){var b=mo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=ko(Pn(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),qo(a,d.method,e,{}));delete b[c]}}mo().set("requests",b,86400,!0)}}
;function ro(a){this.vb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.nb=!1;var b;this.Ic=null!=(b=a.Ic)?b:100;var c;this.Gc=null!=(c=a.Gc)?c:1;var d;this.Ec=null!=(d=a.Ec)?d:2592E6;var e;this.Dc=null!=(e=a.Dc)?e:12E4;var f;this.Fc=null!=(f=a.Fc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Ab=!!a.Ab;var h;this.yb=null!=(h=a.yb)?h:.1;var k;this.Ib=null!=(k=a.Ib)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.nb&&(this.nb=a.nb);a.vb&&(this.vb=a.vb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Xb=a.Xb;so(this)&&(!this.J||this.J("networkless_logging"))&&to(this)}
function to(a){so(a)&&!a.nb&&(a.g=!0,a.Ab&&Math.random()<=a.yb&&a.N.Vc(a.I),uo(a),a.P.ca()&&a.sb(),a.P.La(a.Yb,a.sb.bind(a)),a.P.La(a.Xb,a.ic.bind(a)))}
r=ro.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(so(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&vo(c,d)}).catch(function(e){vo(c,d);
wo(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(so(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){wo(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
wo(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(so(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Sa(d.id,c.I):e=!0;c.P.Na&&c.J&&c.J("vss_network_hint")&&c.P.Na(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Sa(d.id,c.I)}).catch(function(g){wo(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.sb=function(){var a=this;if(!so(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.oc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,vo(a,b),3):(a.ic(),c.return());a.h&&(a.h=0,a.sb());c.g=0})},this.Ic))};
r.ic=function(){this.ha.ba(this.h);this.h=0};
function vo(a,b){var c;return B(function(d){switch(d.g){case 1:if(!so(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.od(b.id,a.I),3);case 3:(c=d.h)||a.Ta(Error("The request cannot be found in the database."));case 2:if(xo(a,b,a.Ec)){d.B(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Sa(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=yo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Sa(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function yo(a,b){if(!so(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=zo(f);(h=Ao(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ib)){m.B(2);break}if(!a.P.Lb){m.B(3);break}return A(m,a.P.Lb(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return A(m,a.N.Zb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Ib)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Gc?A(m,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Sa(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.sb()},a.Fc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Sa(b.id,a.I),2);a.P.Na&&a.J&&a.J("vss_network_hint")&&a.P.Na(!0);d(e,f);h.g=0})};
return b}
function xo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function uo(a){if(!so(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.oc("QUEUED",a.I).then(function(b){b&&!xo(a,b,a.Dc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);uo(a);c.g=0})}):a.P.ca()&&a.sb()})}
function wo(a,b){a.Kc&&!a.P.ca()?a.Kc(b):a.handleError(b)}
function so(a){return!!a.I||a.vb}
function zo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Ao(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Bo;
function Co(){if(Bo)return Bo();var a={};Bo=un("LogsDatabaseV2",{ab:(a.LogsRequestsStore={ib:2},a),Mb:!1,upgrade:function(b,c,d){c(2)&&Vl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),bm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Bo()}
;function Do(a){return nm(Co(),a)}
function Eo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,Do(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,Xl(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();Fo(c);return g.return(f)})}
function Go(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,Do(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,Ul(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return gm(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();Fo(c);return l.return(k)})}
function Ho(a,b){var c;return B(function(d){if(1==d.g)return A(d,Do(b),2);c=d.h;return d.return(Ul(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ql(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Io(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,Do(b),2);e=f.h;return f.return(Ul(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Ql(h.g.put(k,void 0)).then(function(){return k})):Jl.resolve(void 0)})}))})}
function Jo(a,b){var c;return B(function(d){if(1==d.g)return A(d,Do(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Ko(a){var b,c;return B(function(d){if(1==d.g)return A(d,Do(a),2);b=d.h;c=Y()-2592E6;return A(d,Ul(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return dm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Lo(){B(function(a){return A(a,qn(),0)})}
function Fo(a){U("nwl_csi_killswitch")||Rn("networkless_performance",a,{sampleRate:1})}
;var Mo={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
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
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488};var No={},Oo=un("ServiceWorkerLogsDatabase",{ab:(No.SWHealthLog={ib:1},No),Mb:!0,upgrade:function(a,b){b(1)&&bm(Vl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Po(a){return nm(Oo(),a)}
function Qo(a){var b,c;B(function(d){if(1==d.g)return A(d,Po(a),2);b=d.h;c=Y()-2592E6;return A(d,Ul(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return dm(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ro(a){var b;return B(function(c){if(1==c.g)return A(c,Po(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var So={},To=0;function Uo(a){var b=new Image,c=""+To++;So[c]=b;b.onload=b.onerror=function(){delete So[c]};
b.src=a}
;function Vo(){this.g=new Map;this.h=!1}
function Wo(){if(!Vo.g){var a=D("yt.networkRequestMonitor.instance")||new Vo;E("yt.networkRequestMonitor.instance",a);Vo.g=a}return Vo.g}
Vo.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Vo.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Vo.prototype.removeParams=function(a){return a.split("?")[0]};
Vo.prototype.removeParams=Vo.prototype.removeParams;Vo.prototype.isEndpointCFR=Vo.prototype.isEndpointCFR;Vo.prototype.requestComplete=Vo.prototype.requestComplete;Vo.getInstance=Wo;var Xo;function Yo(){Xo||(Xo=new ll("yt.offline"));return Xo}
function Zo(a){if(U("offline_error_handling")){var b=Yo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Yo().set("errors",b,2592E3,!0)}}
;function Z(){jf.call(this);var a=this;this.i=!1;this.h=pf();this.h.La("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=Yo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Bk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;rj(d)}Yo().set("errors",{},2592E3,!0)}}})}
y(Z,jf);function $o(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Na=function(a){this.h.h=a};
r.cd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Yc=function(){this.i=!0};
r.La=function(a,b){return this.h.La(a,b)};
r.Lb=function(a){a=nf(this.h,a);a.then(function(b){U("use_cfr_monitor")&&Wo().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Lb;Z.prototype.listen=Z.prototype.La;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Na;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=$o;function ap(a){a=void 0===a?{}:a;jf.call(this);var b=this;this.h=this.o=0;this.i=$o();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Kb?(this.Kb=a.Kb,c("networkstatus-online",function(){bp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){bp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){kf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){kf(b,"publicytnetworkstatus-offline")})))}
y(ap,jf);ap.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
ap.prototype.Na=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
ap.prototype.Lb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&Wo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Na((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function bp(a,b){a.Kb?a.h?(qf.ba(a.o),a.o=qf.qa(function(){a.j!==b&&(kf(a,b),a.j=b,a.h=Y())},a.Kb-(Y()-a.h))):(kf(a,b),a.j=b,a.h=Y()):kf(a,b)}
;var cp;function dp(){var a=ro.call;cp||(cp=new ap({qe:!0,pe:!0}));a.call(ro,this,{N:{Vc:Ko,Sa:Jo,oc:Go,od:Ho,Zb:Io,set:Eo},P:cp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;sj(new Bk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else rj(b)},
Ta:sj,sendFn:ep,now:Y,Kc:Zo,ha:kl(),Yb:"publicytnetworkstatus-online",Xb:"publicytnetworkstatus-offline",Ab:!0,yb:.1,Ib:V("potential_esf_error_limit",10),J:U,nb:!(Ck()&&"www.youtube-nocookie.com"!==ac(document.location.toString()))});this.i=new og;U("networkless_immediately_drop_all_requests")&&Lo();rn("LogsDatabaseV2")}
y(dp,ro);function fp(){var a=D("yt.networklessRequestController.instance");a||(a=new dp,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&zm().then(function(b){a.I=b;to(a);a.i.resolve();a.Ab&&Math.random()<=a.yb&&a.I&&Qo(a.I);U("networkless_immediately_drop_sw_health_store")&&gp(a)}));
return a}
dp.prototype.writeThenSend=function(a,b){b||(b={});Ck()||(this.g=!1);ro.prototype.writeThenSend.call(this,a,b)};
dp.prototype.sendThenWrite=function(a,b,c){b||(b={});Ck()||(this.g=!1);ro.prototype.sendThenWrite.call(this,a,b,c)};
dp.prototype.sendAndWrite=function(a,b){b||(b={});Ck()||(this.g=!1);ro.prototype.sendAndWrite.call(this,a,b)};
dp.prototype.awaitInitialization=function(){return this.i.promise};
function gp(a){var b;B(function(c){if(!a.I)throw b=Fl("clearSWHealthLogsDb"),b;return c.return(Ro(a.I).catch(function(d){a.handleError(d)}))})}
function ep(a,b,c,d){d=void 0===d?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&hp(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)bk(a,void 0,"POST",f);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))bk(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Ya({url:a});if(k.i&&k.h||k.j){var l=$b(a.match(Zb)[5]||null);var m=!(!l||!l.endsWith("/aclk")||"1"!==fc(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||Uo(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),jo(a,b.postBody,b,Yj,d)):jo(a,JSON.stringify(b.postParams),
b,gk,d):Yj(a,b)}
function hp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Wo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Wo().requestComplete(a,!0);d(e,f)}}
;var ip=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",ip);function jp(a){var b=this;this.config_=null;a?this.config_=a:Gn()&&(this.config_=Hn());Fk(function(){po(b)},5E3)}
jp.prototype.isReady=function(){!this.config_&&Gn()&&(this.config_=Hn());return!!this.config_};
function qo(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=no(b,c,l,k)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(fa,ab){oo(u);z(fa,ab)};
c.onFetchSuccess=function(fa,ab){oo(u);G(fa,ab)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?fp().writeThenSend(p,g):fp().sendAndWrite(p,g);
else if(d.compress){var O=!d.networklessOptions.writeThenSend;if(g.postBody){var Q=g.postBody;"string"!==typeof Q&&(Q=JSON.stringify(g.postBody));jo(p,Q,g,Yj,O)}else jo(p,JSON.stringify(g.postParams),g,gk,O)}else U("web_all_payloads_via_jspb")?Yj(p,g):gk(p,g)}catch(fa){if("InvalidAccessError"==fa.name)u&&(oo(u),u=0),sj(Error("An extension is blocking network request."));else throw fa;}u&&Fk(function(){po(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&sj(new Bk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Bk("innertube xhrclient not ready",b,c,d);rj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.kd)&&(h=f);var k=a.config_.md||!1,l=Pn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.hd+"/"+b,n={alt:"json"},q=a.config_.ld&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.gd);var p=Mj(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
ip.isNwlInitialized?xm().then(function(t){e(t)}):e(!1)}
;function kp(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var lp=C.ytPubsubPubsubInstance||new M,mp=C.ytPubsubPubsubSubscribedKeys||{},np=C.ytPubsubPubsubTopicToKeys||{},op=C.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",lp);E("ytPubsubPubsubTopicToKeys",np);E("ytPubsubPubsubIsSynchronous",op);E("ytPubsubPubsubSubscribedKeys",mp);var pp=Symbol("injectionDeps");function qp(){this.key=Dn}
function rp(){this.h=new Map;this.g=new Map}
rp.prototype.resolve=function(a){return a instanceof qp?sp(this,a.key,[],!0):sp(this,a,[])};
function sp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Cd)var e=d.Cd;else if(d.Bd)e=d[pp]?tp(a,d[pp],c):[],e=d.Bd.apply(d,x(e));else if(d.Ad){e=d.Ad;var f=e[pp]?tp(a,e[pp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.xe||a.g.set(b,e);return e}
function tp(a,b,c){return b?b.map(function(d){return d instanceof qp?sp(a,d.key,c,!0):sp(a,d,c)}):[]}
;var up;function vp(){up||(up=new rp);return up}
;var wp=window;function xp(){var a,b;return"h5vcc"in wp&&(null==(a=wp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=wp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in wp&&wp.performance.mark&&wp.performance.measure?2:0}
function yp(a){switch(xp()){case 1:wp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:wp.performance.mark(a+"-start");break;case 0:break;default:ce()}}
function zp(a){switch(xp()){case 1:wp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";wp.performance.mark(c);wp.performance.measure(a,b,c);break;case 0:break;default:ce()}}
;var Ap=U("web_enable_lifecycle_monitoring")&&0!==xp(),Bp=U("web_enable_lifecycle_monitoring");function Cp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?kl():d;this.j=c;this.h=d;this.i=new og;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={pb:a.pb,Ja:a.Ja},a.Ja++)a.pb=this.g[a.Ja],c=function(e){return function(){e.pb.Rb();b.g[e.Ja].Jb=!0;b.g.every(function(f){return!0===f.Jb})&&b.i.resolve()}}(a),d=this.h.Ga(c,Dp(this,a.pb)),this.g[a.Ja]=Object.assign({},a.pb,{Rb:c,
jobId:d})}
function Ep(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Dp(a,a.g[e])-Dp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Jb||(a.h.ba(c.jobId),a.h.Ga(c.Rb,10))}
Cp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Jb||this.h.ba(b.jobId),b.Jb=!0;this.i.resolve()};
function Dp(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function Fp(a){this.state=a;this.i=[];this.o=void 0;this.H={};Ap&&yp(this.state)}
Fp.prototype.install=function(a){this.i.push(a);return this};
function Gp(a){Ap&&zp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Da}):d.from===a.state&&"none"===d.Da});
if(b){a.h&&(Ep(a.h),a.h=void 0);Bp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Ap&&yp(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Hp(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Hp(a,b){var c=b.filter(function(e){return 10===Ip(a,e)}),d=b.filter(function(e){return 10!==Ip(a,e)});
return a.H.we?function(){var e=Fa.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Fp.prototype.ya=function(a){for(var b=Fa.apply(1,arguments),c=kl(),d=w(a),e=d.next(),f={};!e.done;f={Wa:f.Wa},e=d.next())f.Wa=e.value,c.hb(function(g){return function(){Jp(g.Wa.name);g.Wa.kb.apply(g.Wa,x(b));Kp(g.Wa.name)}}(f))};
Fp.prototype.oa=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=kl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ka=e.value;f.jb=void 0;g=function(k){return function(){Jp(k.Ka.name);var l=k.Ka.kb.apply(k.Ka,x(b));"function"===typeof(null==l?void 0:l.then)?k.jb=l.then(function(){Kp(k.Ka.name)}):Kp(k.Ka.name)}}(f);
c.hb(g);return f.jb?A(h,f.jb,3):h.B(3)}f={Ka:f.Ka,jb:f.jb};e=d.next();return h.B(2)})};
Fp.prototype.u=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Rb:function(){Jp(e.name);e.kb.apply(e,x(b));Kp(e.name)},
priority:Ip(c,e)}});
d.length&&(this.h=new Cp(d))};
function Ip(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Jp(a){Ap&&a&&yp(a)}
function Kp(a){Ap&&a&&zp(a)}
da.Object.defineProperties(Fp.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Lp(a){Fp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Da:"application_navigating",action:this.M},{from:"application_navigating",Da:"none",action:this.S},{from:"application_navigating",Da:"application_navigating",action:function(){}},
{from:"none",Da:"none",action:function(){}}]}
var Mp;y(Lp,Fp);Lp.prototype.M=function(a,b){var c=this;this.g=Fk(function(){"application_navigating"===c.j&&Gp(c)},5E3);
a(null==b?void 0:b.event)};
Lp.prototype.S=function(a,b){this.g&&(qf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function Np(){Mp||(Mp=new Lp);return Mp}
;var Op=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return Op});function Pp(){this.store={};this.g={}}
Pp.prototype.storePayload=function(a,b){a=Qp(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
Pp.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Rp(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Pp.prototype.extractMatchingEntries=function(a){a=Rp(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Pp.prototype.getSequenceCount=function(a){a=Rp(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Rp(a,b){var c=Qp(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Qp(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Sp(b.auth,g[0])){var h=b.isJspb;Sp(void 0===h?"undefined":h?"true":"false",g[1])&&Sp(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Sp(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Sp(a,b){return void 0===a||"undefined"===a?!0:a===b}
Pp.prototype.getSequenceCount=Pp.prototype.getSequenceCount;Pp.prototype.extractMatchingEntries=Pp.prototype.extractMatchingEntries;Pp.prototype.smartExtractMatchingEntries=Pp.prototype.smartExtractMatchingEntries;Pp.prototype.storePayload=Pp.prototype.storePayload;function Qp(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Tp=V("initial_gel_batch_timeout",2E3),Up=V("gel_queue_timeout_max_ms",6E4),Vp=Math.pow(2,16)-1,Wp=V("gel_min_batch_size",5),Xp=void 0;function Yp(){this.j=this.g=this.h=0;this.i=!1}
var Zp=new Yp,$p=new Yp,aq=new Yp,bq=new Yp,cq,dq=!0,eq=1,fq=new Map,gq=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",gq);var hq=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",hq);var iq={};function jq(){var a=D("yt.logging.ims");a||(a=new Pp,E("yt.logging.ims",a));return a}
function kq(a,b){if("log_event"===a.endpoint){lq(a);var c=mq(a),d=nq(a.payload)||"",e=oq(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=pq(e.tier);if(400===f){qq(a,b);return}}iq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};jq().storePayload(e,a.payload);rq(b,c,!1,e,sq(d))}}
function tq(a,b,c){if("log_event"===b.endpoint){lq(void 0,b);var d=mq(b,!0),e=oq(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=pq(e.tier);if(400===f){uq(a,b,c);return}}iq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};jq().storePayload(e,b.payload.toJSON());rq(c,d,!0,e,sq(a))}}
function rq(a,b,c,d,e){function f(){vq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Xp=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=wq(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=jq().getSequenceCount(d));1E3<=e?f():e>=a?cq||(cq=xq(function(){f();cq=void 0},0)):10<=g-k&&(yq(c,d.tier),h.j=g)}
function qq(a,b){if("log_event"===a.endpoint){lq(a);var c=mq(a),d=new Map;d.set(c,[a.payload]);var e=nq(a.payload)||"";b&&(Xp=new b);return new pg(function(f,g){Xp&&Xp.isReady()?zq(d,Xp,f,g,{bypassNetworkless:!0},!0,sq(e)):f()})}}
function uq(a,b,c){if("log_event"===b.endpoint){lq(void 0,b);var d=mq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Xp=new c);return new pg(function(f){Xp&&Xp.isReady()?Aq(e,Xp,f,{bypassNetworkless:!0},!0,sq(a)):f()})}}
function mq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new fj;c.videoId?Gd(d,1,Pd,kd(c.videoId)):c.playlistId&&Gd(d,2,Pd,kd(c.playlistId));hq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),gq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function vq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new pg(function(e,f){var g=wq(c,d),h=g.i;g.i=!1;Bq(g.h);Bq(g.g);g.g=0;Xp&&Xp.isReady()?void 0===d&&U("enable_web_tiered_gel")?Cq(e,f,a,b,c,300,h):Cq(e,f,a,b,c,d,h):(yq(c,d),e())})}
function Cq(a,b,c,d,e,f,g){var h=Xp;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?jq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):jq().extractMatchingEntries(n),k.set(d,b),Aq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?jq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):jq().extractMatchingEntries(n),l.set(d,k),zq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(iq));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?jq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):jq().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete iq[l];Aq(k,h,a,c,!1,g)}else{k=w(Object.keys(iq));for(d=k.next();!d.done;d=k.next())m=d.value,n=U("enable_web_tiered_gel")?jq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):jq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete iq[m];zq(l,h,a,b,c,!1,g)}}
function yq(a,b){function c(){vq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=wq(a,b),e=d===bq||d===aq?5E3:Up;U("web_gel_timeout_cap")&&!d.g&&(e=xq(function(){c()},e),d.g=e);
Bq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&dq&&(e=Tp);e=xq(function(){0<V("gel_min_batch_size")?jq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Wp&&c():c()},e);
d.h=e}
function zq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=Dq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Eb:g.Eb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Gb:g.Gb,Fb:g.Fb},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=nb({context:In(b.config_||Hn())});if(!La(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=gq[m])&&Eq(g.batchRequest,m,n);delete gq[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;Fq(g.batchRequest,h,g.dangerousLogToVisitorSession);Gq(e);g.Gb=function(q){U("start_client_gcf")&&qf.qa(function(){return B(function(p){return A(p,Hq(q),0)})});
k--;k||c()};
g.Eb=0;g.Fb=function(q){return function(){q.Eb++;if(e.bypassNetworkless&&1===q.Eb)try{qo(b,l,q.batchRequest,Iq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Gb,q.Fb,f)),dq=!1}catch(p){rj(p),d()}k--;k||c()}}(g);
try{qo(b,l,g.batchRequest,Iq(e,g.dangerousLogToVisitorSession,g.Gb,g.Fb,f)),dq=!1}catch(q){rj(q),d()}}}
function Aq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new gj;var q=b.config_||Hn(),p=new Pi,t=new Ii;K(t,1,q.wc);K(t,2,q.vc);Rd(t,16,q.jd);K(t,17,q.uc);if(q.Pb){var u=q.Pb,z=new Fi;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Fi,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);I(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=uj();if(0<u.length){z=new Li;for(var G=0;G<u.length;G++){var O=new Ji;K(O,1,u[G].key);Gd(O,2,Ki,kd(u[G].value));Md(z,15,Ji,O)}J(p,Li,5,z)}Jn(q,t);Kn(p);Ln(t);Mn(q,t);Nn(t);U("start_client_gcf")&&On(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new Oi,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Jd(p,Oi,3)||new Oi,q=K(u,18,q),J(p,Oi,3,q));q=t;u=w(Object.entries(Lj(T("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?K(q,12,G):"cmodel"===z?K(q,13,G):"cbr"===z?K(q,87,G):"cbrver"===z?K(q,88,G):"cos"===z?K(q,18,G):"cosver"===z?K(q,19,G):"cplatform"===z&&Rd(q,42,vk(G));J(p,Ii,1,t);J(l,Pi,1,p);if(t=hq[m])a:{if(Od(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,fj,4,t);
t=Jd(l,Pi,1)||new Pi;q=Jd(t,Oi,3)||new Oi;u=new Ni;K(u,2,m);Rd(u,1,p);Md(q,12,Ni,u);J(t,Oi,3,q)}delete hq[m];m="visitorOnlyApprovedKey"===m;Jq()||I(l,2,jd(g));!m&&(p=T("EVENT_ID"))&&(t=Kq(),q=new ej,K(q,1,p),I(q,2,jd(t)),J(l,ej,5,q));Gq(d);if(U("jspb_serialize_with_worker")&&(p=Vn())&&d.writeThenSend){fq.set(eq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),
clientEvents:n,key:eq});eq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new cj(n[t]))}catch(Q){rj(new Bk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Md(l,3,cj,p.value);n={startTime:Y(),ticks:{},infos:{}};l=Td(l);n.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&Rn("gel_jspb_serialize",n,{sampleRate:.1});Lq(l,b,c,d,e,f,m,h)}}
function Lq(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=Dq(f);d=Iq(d,g,function(k){U("start_client_gcf")&&qf.qa(function(){return B(function(l){return A(l,Hq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;qo(b,f,"",d);dq=!1}
function Gq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function Iq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,oe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Jq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Fq(a,b,c){Jq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=Kq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Kq(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Vp/2));a++;a>Vp&&(a=1);lj("BATCH_CLIENT_COUNTER",a);return a}
function Eq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function lq(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=tj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))Op=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",Op),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Jq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function xq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Fk(function(){if("none"===Np().j)a();else{var c={};Np().install((c.none={kb:a},c))}},b):Fk(a,b):Dj(a,b)}
function Bq(a){U("transport_use_scheduler")?qf.ba(a):window.clearTimeout(a)}
function Hq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Ei.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Di.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=vp().resolve(new qp))?g?e?A(n,En(m,g,e),2):A(n,En(m,g),2):n.B(2):n.return()}return l?h?A(n,Fn(m,l,h),0):A(n,Fn(m,l),0):n.B(0)})}
function wq(a,b){b=void 0===b?200:b;return a?300===b?bq:$p:300===b?aq:Zp}
function oq(a){if(U("enable_web_tiered_gel")){a=Mo[a||""];var b,c;if(null==vp().resolve(new qp))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function nq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Mo[b])return b}
function pq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function sq(a){return"gelDebuggingEvent"===a}
function Dq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var Mq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Mq);
function Nq(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=kp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:Oq(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete Mq[d.sequenceGroup]);(d.sendIsolatedPayload?qq:kq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function Pq(a){vq(void 0,void 0,void 0===a?!1:a)}
function Oq(a){Mq[a]=a in Mq?Mq[a]+1:0;return Mq[a]}
;var Qq=[];function Rq(a,b,c){c=void 0===c?{}:c;var d=jp;T("ytLoggingEventsDefaultDisabled",!1)&&jp===jp&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=kp(),c.timestamp=Y()),Qq.push({Ac:a,payload:b,options:c})):Nq(a,b,d,c)}
;var Sq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",Sq);function Tq(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:jp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());I(b,1,jd(e<Number.MAX_SAFE_INTEGER?e:0));e=new bj;if(c.lact)I(e,1,jd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)I(e,1,jd(-1));else{var f=kp();I(e,1,jd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=Oq(f),h=new aj;I(h,2,jd(g));K(h,1,f);J(e,aj,3,h);c.endOfSequence&&delete Sq[c.sequenceGroup]}J(b,
bj,33,e);(c.sendIsolatedPayload?uq:tq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var Uq=new Set,Vq=0,Wq=0,Xq=0,Yq=[],Zq=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function $q(a){try{Uq.add(a.message)}catch(b){}Vq++}
function ar(){for(var a=w(Zq),b=a.next();!b.done;b=a.next()){var c=Lb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function br(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Yj(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function cr(){var a;return B(function(b){return(a=Jf())?b.return(a.then(function(c){c=Td(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Gc(d,3)})):b.return(Promise.resolve(null))})}
;var dr={};function er(a){return dr[a]||(dr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var fr={},gr=[],Gg=new M,hr={};function ir(){for(var a=w(gr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function jr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[er(b)]:a.getAttribute("data-"+b):null;return c}
function kr(a){Gg.bb.apply(Gg,arguments)}
;function lr(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function mr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function nr(a,b,c){or||(or={},pr=new Set,Cj(window,"message",function(d){a:if(pr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=or[e.id];f&&d.origin===f.Sc&&(d=f.Dd,d.H=!0,d.H&&(cb(d.u,d.sendMessage,d),d.u.length=0),d.fc(e))}}));
a=String(mr(a,"host"));or[c]={Dd:b,Sc:a};pr.add(a)}
var or=null,pr=null;var qr=window;
function rr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?bc(a.src):"https://www.youtube.com"),this.h=new lr(b),c||(b=sr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),fr[this.g.id]=this,window.postMessage){this.j=
new M;tr(this);b=mr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in hr)hr.hasOwnProperty(e)&&ur(this,e)}}
r=rr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.fc=function(a){vr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);wr(this,a);return this};
function ur(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&wr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(fr[this.g.id]=null);Fe(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);or&&(or[this.id]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&Aj(c);this.o=this.g=null};
r.kc=function(){return{}};
function xr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function vr(a,b,c){a.j.Ha||(c={target:a,data:c},a.j.bb(b,c),kr(a.M+"."+b,c))}
function sr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+mr(a.h,"title"));(b=mr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=mr(a.h,"height"))&&
c.setAttribute("height",b.toString());qr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.kc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&cb(["debugjs","debugcss"],function(k){var l=fc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+mr(a.h,"host")+("/embed/"+mr(a.h,"videoId"))+"?"+dc(g);qr.yt_embedsEnableUaChProbe?cr().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=je(l.href).toString();fe(c,ke(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):qr.yt_embedsEnableIframeSrcWithIntent?(fe(c,ke(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Bc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function tr(a){nr(a.h,a,a.id);a.i=Ej(a.Bc.bind(a));Cj(a.g,"load",function(){window.clearInterval(a.i);a.i=Ej(a.Bc.bind(a))})}
function wr(a,b){a.S[b]||(a.S[b]=!0,xr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[bc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(uc){if(uc.name&&"SyntaxError"===uc.name){if(!(uc.message&&0<uc.message.indexOf("target origin ''"))){var e=void 0,f=uc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Vq)){var m=void 0,n=void 0,q=f,p=e,t=Yd(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var O=G.split("\n");O.shift();G=O.join("\n")}var Q=t.lineNumber||"Not available",fa=t.fileName||"Not available",ab=G,Ta=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ha=0;Ha<q.args.length&&!(Ta=qk(q.args[Ha],"params."+Ha,p,Ta),500<=Ta);Ha++);else if(q.hasOwnProperty("params")&&q.params){var ha=q.params;if("object"===typeof q.params)for(n in ha){if(ha[n]){var pa="params."+n,qa=sk(ha[n]);p[pa]=qa;Ta+=
pa.length+qa.length;if(500<Ta)break}}else p.params=sk(ha)}if(Yq.length)for(var ea=0;ea<Yq.length&&!(Ta=qk(Yq[ea],"params.context."+ea,p,Ta),500<=Ta);ea++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:Q,fileName:fa,stack:ab,params:p,sampleWeight:1},Dm=Number(q.columnNumber);isNaN(Dm)||(W.lineNumber=W.lineNumber+":"+Dm);if("IGNORED"===q.level)m=0;else a:{for(var Em=mk(),Fm=w(Em.Ba),Eh=Fm.next();!Eh.done;Eh=Fm.next()){var Gm=
Eh.value;if(W.message&&W.message.match(Gm.re)){m=Gm.weight;break a}}for(var Hm=w(Em.za),Fh=Hm.next();!Fh.done;Fh=Hm.next()){var Im=Fh.value;if(Im.kb(W)){m=Im.weight;break a}}m=1}W.sampleWeight=m;for(var Jm=w(hk),Gh=Jm.next();!Gh.done;Gh=Jm.next()){var Hh=Gh.value;if(Hh.Hb[W.name])for(var Km=w(Hh.Hb[W.name]),Ih=Km.next();!Ih.done;Ih=Km.next()){var Lm=Ih.value,Ie=W.message.match(Lm.regexp);if(Ie){W.params["params.error.original"]=Ie[0];for(var Jh=Lm.groups,Mm={},vc=0;vc<Jh.length;vc++)Mm[Jh[vc]]=Ie[vc+
1],W.params["params.error."+Jh[vc]]=Ie[vc+1];W.message=Hh.Vb(Mm);break}}}W.params||(W.params={});var Nm=mk();W.params["params.errorServiceSignature"]="msg="+Nm.Ba.length+"&cb="+Nm.za.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));tb("sample").constructor!==sb&&(W.params["params.fconst"]="true");var md=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(md);
if(0!==md.sampleWeight&&!Uq.has(md.message))if(h&&U("web_enable_error_204")){var Om=md;br(void 0===g?"ERROR":g,Om);$q(Om)}else{var Kh=void 0,Lh=void 0,Pm=void 0,Qm=void 0,Mh=void 0,N=md,Ob=g;Ob=void 0===Ob?"ERROR":Ob;if("ERROR"===Ob){nk.bb("handleError",N);if(U("record_app_crashed_web")&&0===Xq&&1===N.sampleWeight)if(Xq++,U("errors_via_jspb")){var Dr=new $i;Mh=Rd(Dr,1,1);if(!U("report_client_error_with_app_crash_ks")){var Er=new Zi,Fr=new Yi,Gr=new Xi,Hr=new Wi;var Ir=K(Hr,1,N.message);var Jr=J(Gr,
Wi,3,Ir);Qm=J(Fr,Xi,5,Jr);Pm=J(Er,Yi,9,Qm);J(Mh,Zi,4,Pm)}var Rm=U("jspb_sparse_encoded_pivot")?new cj([{}]):new cj;Kd(Rm,$i,20,dj,Mh);Tq("appCrashed",Rm)}else{var Sm={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(Sm.systemHealth={crashData:{clientError:{logMessage:{message:N.message}}}});Rq("appCrashed",Sm)}Wq++}else"WARNING"===Ob&&nk.bb("handleWarning",N);if(U("kevlar_gel_error_routing"))a:{var nd=Ob;if(U("errors_via_jspb")){if(ar())Lh=void 0;else{var wc=new Ti;
K(wc,1,N.stack);N.fileName&&K(wc,4,N.fileName);var eb=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==eb.length&&(1!==eb.length||isNaN(Number(eb[0]))?2!==eb.length||isNaN(Number(eb[0]))||isNaN(Number(eb[1]))||(Qd(wc,2,Number(eb[0])),Qd(wc,3,Number(eb[1]))):Qd(wc,2,Number(eb[0])));var Pb=new Wi;K(Pb,1,N.message);K(Pb,3,N.name);Qd(Pb,6,N.sampleWeight);"ERROR"===nd?Rd(Pb,2,2):"WARNING"===nd?Rd(Pb,2,1):Rd(Pb,2,0);var Nh=new Ui;I(Nh,1,fd(!0));Kd(Nh,Ti,3,Vi,wc);var Qb=new Si;K(Qb,3,window.location.href);
for(var Tm=T("FEXP_EXPERIMENTS",[]),Oh=0;Oh<Tm.length;Oh++){var Um=Qb.s,Ph=Tm[Oh],Vm=Rc(Um);ad(Vm);var Kr=Fd(Um,Vm,5,2);Ph=id(Ph);Kr.push(Ph)}var Qh=mj();if(!nj()&&Qh)for(var Wm=w(Object.keys(Qh)),Rb=Wm.next();!Rb.done;Rb=Wm.next()){var Xm=Rb.value,Rh=new Ri;K(Rh,1,Xm);K(Rh,2,String(Qh[Xm]));Md(Qb,4,Ri,Rh)}var Sh=N.params;if(Sh){var Ym=w(Object.keys(Sh));for(Rb=Ym.next();!Rb.done;Rb=Ym.next()){var Zm=Rb.value,Th=new Ri;K(Th,1,"client."+Zm);K(Th,2,String(Sh[Zm]));Md(Qb,4,Ri,Th)}}var $m=T("SERVER_NAME"),
an=T("SERVER_VERSION");if($m&&an){var Uh=new Ri;K(Uh,1,"server.name");K(Uh,2,$m);Md(Qb,4,Ri,Uh);var Vh=new Ri;K(Vh,1,"server.version");K(Vh,2,an);Md(Qb,4,Ri,Vh)}var Je=new Xi;J(Je,Si,1,Qb);J(Je,Ui,2,Nh);J(Je,Wi,3,Pb);Lh=Je}var bn=Lh;if(!bn)break a;var cn=U("jspb_sparse_encoded_pivot")?new cj([{}]):new cj;Kd(cn,Xi,163,dj,bn);Tq("clientError",cn)}else{var Ka=void 0;Ka=void 0===Ka?{}:Ka;if(ar())Kh=void 0;else{var od={stackTrace:N.stack};N.fileName&&(od.filename=N.fileName);var fb=N.lineNumber&&N.lineNumber.split?
N.lineNumber.split(":"):[];0!==fb.length&&(1!==fb.length||isNaN(Number(fb[0]))?2!==fb.length||isNaN(Number(fb[0]))||isNaN(Number(fb[1]))||(od.lineNumber=Number(fb[0]),od.columnNumber=Number(fb[1])):od.lineNumber=Number(fb[0]));var Wh={level:"ERROR_LEVEL_UNKNOWN",message:N.message,errorClassName:N.name,sampleWeight:N.sampleWeight};"ERROR"===nd?Wh.level="ERROR_LEVEL_ERROR":"WARNING"===nd&&(Wh.level="ERROR_LEVEL_WARNNING");var Lr={isObfuscated:!0,browserStackInfo:od};Ka.pageUrl=window.location.href;
Ka.kvPairs=[];T("FEXP_EXPERIMENTS")&&(Ka.experimentIds=T("FEXP_EXPERIMENTS"));var Xh=mj();if(!nj()&&Xh)for(var dn=w(Object.keys(Xh)),Sb=dn.next();!Sb.done;Sb=dn.next()){var en=Sb.value;Ka.kvPairs.push({key:en,value:String(Xh[en])})}var Yh=N.params;if(Yh){var fn=w(Object.keys(Yh));for(Sb=fn.next();!Sb.done;Sb=fn.next()){var gn=Sb.value;Ka.kvPairs.push({key:"client."+gn,value:String(Yh[gn])})}}var hn=T("SERVER_NAME"),jn=T("SERVER_VERSION");hn&&jn&&(Ka.kvPairs.push({key:"server.name",value:hn}),Ka.kvPairs.push({key:"server.version",
value:jn}));Kh={errorMetadata:Ka,stackTrace:Lr,logMessage:Wh}}var kn=Kh;if(!kn)break a;Rq("clientError",kn)}if("ERROR"===nd||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Ke=!0;Ke=void 0===Ke?!1:Ke;var ln=Qq;Qq=[];if(ln)for(var mn=w(ln),Zh=mn.next();!Zh.done;Zh=mn.next()){var xc=Zh.value;Ke?Nq(xc.Ac,xc.payload,jp,xc.options):Rq(xc.Ac,xc.payload,xc.options)}Pq(!0);if(!U("web_fp_via_jspb_and_json"))break b}Pq()}}U("suppress_error_204_logging")||br(Ob,N);$q(N)}}}}}else throw uc;
}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function yr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function zr(a){return 0===a.search("get")||0===a.search("is")}
;function Ar(a,b){rr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Ar,rr);r=Ar.prototype;r.kc=function(){var a=mr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=mr(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.fc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":Br(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},Cr(this,a.apiInterface),Br(this,a));break;default:vr(this,b,a)}};
function Br(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+mr(a.h,"title"))))}}
function Cr(a,b){cb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:yr(c)?this[c]=function(){this.playerInfo={};
this.ka={};xr(this,c,arguments);return this}:zr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){xr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=mr(this.h,"host")+("/embed/"+mr(this.h,"videoId")),b=Number(mr(this.h,"width")),c=Number(mr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Yb(a);d=Yb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function Mr(a){if("iframe"!==a.tagName.toLowerCase()){var b=jr(a,"videoid");b&&(b={videoId:b,width:jr(a,"width"),height:jr(a,"height")},new Ar(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return fr[a]});
E("YT.scan",ir);E("YT.subscribe",function(a,b,c){Gg.subscribe(a,b,c);hr[a]=!0;for(var d in fr)fr.hasOwnProperty(d)&&ur(fr[d],a)});
E("YT.unsubscribe",function(a,b,c){Fg(a,b,c)});
E("YT.Player",Ar);rr.prototype.destroy=rr.prototype.destroy;rr.prototype.setSize=rr.prototype.setSize;rr.prototype.getIframe=rr.prototype.getIframe;rr.prototype.addEventListener=rr.prototype.addEventListener;Ar.prototype.getVideoEmbedCode=Ar.prototype.getVideoEmbedCode;Ar.prototype.getOptions=Ar.prototype.getOptions;Ar.prototype.getOption=Ar.prototype.getOption;
gr.push(function(a){var b=a;b||(b=document);a=hb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=hb(b);cb(gb(a,b),Mr)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||ir();var Nr=C.onYTReady;Nr&&Nr();var Or=C.onYouTubeIframeAPIReady;Or&&Or();var Pr=C.onYouTubePlayerAPIReady;Pr&&Pr();}).call(this);
