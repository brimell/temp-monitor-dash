function Pk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var U2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ee={exports:{}},te={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Oy=Object.getOwnPropertySymbols,Lk=Object.prototype.hasOwnProperty,Mk=Object.prototype.propertyIsEnumerable;function Fk(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function $k(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var CE=$k()?Object.assign:function(t,e){for(var n,r=Fk(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)Lk.call(n,o)&&(r[o]=n[o]);if(Oy){i=Oy(n);for(var a=0;a<i.length;a++)Mk.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp=CE,Ys=60103,NE=60106;te.Fragment=60107;te.StrictMode=60108;te.Profiler=60114;var AE=60109,RE=60110,xE=60112;te.Suspense=60113;var DE=60115,OE=60116;if(typeof Symbol=="function"&&Symbol.for){var qt=Symbol.for;Ys=qt("react.element"),NE=qt("react.portal"),te.Fragment=qt("react.fragment"),te.StrictMode=qt("react.strict_mode"),te.Profiler=qt("react.profiler"),AE=qt("react.provider"),RE=qt("react.context"),xE=qt("react.forward_ref"),te.Suspense=qt("react.suspense"),DE=qt("react.memo"),OE=qt("react.lazy")}var Py=typeof Symbol=="function"&&Symbol.iterator;function Uk(t){return t===null||typeof t!="object"?null:(t=Py&&t[Py]||t["@@iterator"],typeof t=="function"?t:null)}function Iu(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var PE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},LE={};function Xs(t,e,n){this.props=t,this.context=e,this.refs=LE,this.updater=n||PE}Xs.prototype.isReactComponent={};Xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Iu(85));this.updater.enqueueSetState(this,t,e,"setState")};Xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ME(){}ME.prototype=Xs.prototype;function jp(t,e,n){this.props=t,this.context=e,this.refs=LE,this.updater=n||PE}var qp=jp.prototype=new ME;qp.constructor=jp;Bp(qp,Xs.prototype);qp.isPureReactComponent=!0;var zp={current:null},FE=Object.prototype.hasOwnProperty,$E={key:!0,ref:!0,__self:!0,__source:!0};function UE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)FE.call(e,r)&&!$E.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ys,type:t,key:s,ref:o,props:i,_owner:zp.current}}function Vk(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function Bk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ly=/\/+/g;function ud(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bk(""+t.key):e.toString(36)}function Cl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ys:case NE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ud(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Ly,"$&/")+"/"),Cl(i,e,n,"",function(l){return l})):i!=null&&(Wp(i)&&(i=Vk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ly,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+ud(s,a);o+=Cl(s,e,n,u,i)}else if(u=Uk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+ud(s,a++),o+=Cl(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Iu(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function tl(t,e,n){if(t==null)return t;var r=[],i=0;return Cl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jk(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var VE={current:null};function $n(){var t=VE.current;if(t===null)throw Error(Iu(321));return t}var qk={ReactCurrentDispatcher:VE,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:zp,IsSomeRendererActing:{current:!1},assign:Bp};te.Children={map:tl,forEach:function(t,e,n){tl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tl(t,function(){e++}),e},toArray:function(t){return tl(t,function(e){return e})||[]},only:function(t){if(!Wp(t))throw Error(Iu(143));return t}};te.Component=Xs;te.PureComponent=jp;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;te.cloneElement=function(t,e,n){if(t==null)throw Error(Iu(267,t));var r=Bp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)FE.call(e,u)&&!$E.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Ys,type:t.type,key:i,ref:s,props:r,_owner:o}};te.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:RE,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:AE,_context:t},t.Consumer=t};te.createElement=UE;te.createFactory=function(t){var e=UE.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:xE,render:t}};te.isValidElement=Wp;te.lazy=function(t){return{$$typeof:OE,_payload:{_status:-1,_result:t},_init:jk}};te.memo=function(t,e){return{$$typeof:DE,type:t,compare:e===void 0?null:e}};te.useCallback=function(t,e){return $n().useCallback(t,e)};te.useContext=function(t,e){return $n().useContext(t,e)};te.useDebugValue=function(){};te.useEffect=function(t,e){return $n().useEffect(t,e)};te.useImperativeHandle=function(t,e,n){return $n().useImperativeHandle(t,e,n)};te.useLayoutEffect=function(t,e){return $n().useLayoutEffect(t,e)};te.useMemo=function(t,e){return $n().useMemo(t,e)};te.useReducer=function(t,e,n){return $n().useReducer(t,e,n)};te.useRef=function(t){return $n().useRef(t)};te.useState=function(t){return $n().useState(t)};te.version="17.0.2";(function(t){t.exports=te})(ee);const er=kE(ee.exports),sf=Pk({__proto__:null,default:er},[ee.exports]);var Hp={exports:{}},jt={},BE={exports:{}},jE={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window>"u"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var L=t.unstable_now();u(!0,L),u=null}catch(q){throw setTimeout(c,0),q}};e=function(L){u!==null?setTimeout(e,0,L):(u=L,setTimeout(c,0))},n=function(L,q){l=setTimeout(L,q)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console<"u"){var f=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof f!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var g=!1,v=null,m=-1,p=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},i=function(){},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<L?Math.floor(1e3/L):5};var E=new MessageChannel,_=E.port2;E.port1.onmessage=function(){if(v!==null){var L=t.unstable_now();y=L+p;try{v(!0,L)?_.postMessage(null):(g=!1,v=null)}catch(q){throw _.postMessage(null),q}}else g=!1},e=function(L){v=L,g||(g=!0,_.postMessage(null))},n=function(L,q){m=h(function(){L(t.unstable_now())},q)},r=function(){d(m),m=-1}}function N(L,q){var Q=L.length;L.push(q);e:for(;;){var Te=Q-1>>>1,We=L[Te];if(We!==void 0&&0<R(We,q))L[Te]=q,L[Q]=We,Q=Te;else break e}}function w(L){return L=L[0],L===void 0?null:L}function S(L){var q=L[0];if(q!==void 0){var Q=L.pop();if(Q!==q){L[0]=Q;e:for(var Te=0,We=L.length;Te<We;){var Wr=2*(Te+1)-1,Hr=L[Wr],To=Wr+1,Yi=L[To];if(Hr!==void 0&&0>R(Hr,Q))Yi!==void 0&&0>R(Yi,Hr)?(L[Te]=Yi,L[To]=Q,Te=To):(L[Te]=Hr,L[Wr]=Q,Te=Wr);else if(Yi!==void 0&&0>R(Yi,Q))L[Te]=Yi,L[To]=Q,Te=To;else break e}}return q}return null}function R(L,q){var Q=L.sortIndex-q.sortIndex;return Q!==0?Q:L.id-q.id}var O=[],G=[],Ae=1,ge=null,ae=3,Yt=!1,_n=!1,jr=!1;function qr(L){for(var q=w(G);q!==null;){if(q.callback===null)S(G);else if(q.startTime<=L)S(G),q.sortIndex=q.expirationTime,N(O,q);else break;q=w(G)}}function zr(L){if(jr=!1,qr(L),!_n)if(w(O)!==null)_n=!0,e(ad);else{var q=w(G);q!==null&&n(zr,q.startTime-L)}}function ad(L,q){_n=!1,jr&&(jr=!1,r()),Yt=!0;var Q=ae;try{for(qr(q),ge=w(O);ge!==null&&(!(ge.expirationTime>q)||L&&!t.unstable_shouldYield());){var Te=ge.callback;if(typeof Te=="function"){ge.callback=null,ae=ge.priorityLevel;var We=Te(ge.expirationTime<=q);q=t.unstable_now(),typeof We=="function"?ge.callback=We:ge===w(O)&&S(O),qr(q)}else S(O);ge=w(O)}if(ge!==null)var Wr=!0;else{var Hr=w(G);Hr!==null&&n(zr,Hr.startTime-q),Wr=!1}return Wr}finally{ge=null,ae=Q,Yt=!1}}var Ok=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_n||Yt||(_n=!0,e(ad))},t.unstable_getCurrentPriorityLevel=function(){return ae},t.unstable_getFirstCallbackNode=function(){return w(O)},t.unstable_next=function(L){switch(ae){case 1:case 2:case 3:var q=3;break;default:q=ae}var Q=ae;ae=q;try{return L()}finally{ae=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Ok,t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=ae;ae=L;try{return q()}finally{ae=Q}},t.unstable_scheduleCallback=function(L,q,Q){var Te=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Te+Q:Te):Q=Te,L){case 1:var We=-1;break;case 2:We=250;break;case 5:We=1073741823;break;case 4:We=1e4;break;default:We=5e3}return We=Q+We,L={id:Ae++,callback:q,priorityLevel:L,startTime:Q,expirationTime:We,sortIndex:-1},Q>Te?(L.sortIndex=Q,N(G,L),w(O)===null&&L===w(G)&&(jr?r():jr=!0,n(zr,Q-Te))):(L.sortIndex=We,N(O,L),_n||Yt||(_n=!0,e(ad))),L},t.unstable_wrapCallback=function(L){var q=ae;return function(){var Q=ae;ae=q;try{return L.apply(this,arguments)}finally{ae=Q}}}})(jE);(function(t){t.exports=jE})(BE);/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xc=ee.exports,pe=CE,Ue=BE.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Xc)throw Error(x(227));var qE=new Set,Da={};function Fi(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(Da[t]=e,t=0;t<e.length;t++)qE.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,My=Object.prototype.hasOwnProperty,Fy={},$y={};function Wk(t){return My.call($y,t)?!0:My.call(Fy,t)?!1:zk.test(t)?$y[t]=!0:(Fy[t]=!0,!1)}function Hk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Kk(t,e,n,r){if(e===null||typeof e>"u"||Hk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kp=/[\-:]([a-z])/g;function Gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kp,Gp);Ze[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kp,Gp);Ze[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kp,Gp);Ze[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qp(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(Kk(e,n,i,r)&&(n=null),r||i===null?Wk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $i=Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=60103,ri=60106,Yn=60107,Yp=60108,ua=60114,Xp=60109,Jp=60110,Jc=60112,la=60113,Xl=60120,Zc=60115,Zp=60116,em=60121,tm=60128,zE=60129,nm=60130,of=60131;if(typeof Symbol=="function"&&Symbol.for){var Pe=Symbol.for;Qo=Pe("react.element"),ri=Pe("react.portal"),Yn=Pe("react.fragment"),Yp=Pe("react.strict_mode"),ua=Pe("react.profiler"),Xp=Pe("react.provider"),Jp=Pe("react.context"),Jc=Pe("react.forward_ref"),la=Pe("react.suspense"),Xl=Pe("react.suspense_list"),Zc=Pe("react.memo"),Zp=Pe("react.lazy"),em=Pe("react.block"),Pe("react.scope"),tm=Pe("react.opaque.id"),zE=Pe("react.debug_trace_mode"),nm=Pe("react.offscreen"),of=Pe("react.legacy_hidden")}var Uy=typeof Symbol=="function"&&Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Uy&&t[Uy]||t["@@iterator"],typeof t=="function"?t:null)}var ld;function Yo(t){if(ld===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ld=e&&e[1]||""}return`
`+ld+t}var cd=!1;function nl(t,e){if(!t||cd)return"";cd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{cd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function Gk(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=nl(t.type,!1),t;case 11:return t=nl(t.type.render,!1),t;case 22:return t=nl(t.type._render,!1),t;case 1:return t=nl(t.type,!0),t;default:return""}}function ps(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yn:return"Fragment";case ri:return"Portal";case ua:return"Profiler";case Yp:return"StrictMode";case la:return"Suspense";case Xl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jp:return(t.displayName||"Context")+".Consumer";case Xp:return(t._context.displayName||"Context")+".Provider";case Jc:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Zc:return ps(t.type);case em:return ps(t._render);case Zp:e=t._payload,t=t._init;try{return ps(t(e))}catch{}}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function WE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qk(t){var e=WE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function rl(t){t._valueTracker||(t._valueTracker=Qk(t))}function HE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=WE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Vy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function KE(t,e){e=e.checked,e!=null&&Qp(t,"checked",e,!1)}function uf(t,e){KE(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function By(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function Yk(t){var e="";return Xc.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function cf(t,e){return t=pe({children:void 0},e),(e=Yk(e.children))&&(t.children=e),t}function ms(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function GE(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var df={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function QE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?QE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,YE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==df.svg||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ca={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xk=["Webkit","ms","Moz","O"];Object.keys(ca).forEach(function(t){Xk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ca[e]=ca[t]})});function XE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ca.hasOwnProperty(t)&&ca[t]?(""+e).trim():e+"px"}function JE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=XE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Jk=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(Jk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function mf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function rm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,gs=null,ys=null;function zy(t){if(t=Tu(t)){if(typeof gf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=sh(e),gf(t.stateNode,t.type,e))}}function ZE(t){gs?ys?ys.push(t):ys=[t]:gs=t}function eI(){if(gs){var t=gs,e=ys;if(ys=gs=null,zy(t),e)for(t=0;t<e.length;t++)zy(e[t])}}function im(t,e){return t(e)}function tI(t,e,n,r,i){return t(e,n,r,i)}function sm(){}var nI=im,ii=!1,hd=!1;function om(){(gs!==null||ys!==null)&&(sm(),eI())}function Zk(t,e,n){if(hd)return t(e,n);hd=!0;try{return nI(t,e,n)}finally{hd=!1,om()}}function Pa(t,e){var n=t.stateNode;if(n===null)return null;var r=sh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var yf=!1;if(Pn)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){yf=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{yf=!1}function eC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var ha=!1,Zl=null,ec=!1,vf=null,tC={onError:function(t){ha=!0,Zl=t}};function nC(t,e,n,r,i,s,o,a,u){ha=!1,Zl=null,eC.apply(tC,arguments)}function rC(t,e,n,r,i,s,o,a,u){if(nC.apply(this,arguments),ha){if(ha){var l=Zl;ha=!1,Zl=null}else throw Error(x(198));ec||(ec=!0,vf=l)}}function Ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wy(t){if(Ui(t)!==t)throw Error(x(188))}function iC(t){var e=t.alternate;if(!e){if(e=Ui(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wy(i),t;if(s===r)return Wy(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function iI(t){if(t=iC(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Hy(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var sI,am,oI,aI,wf=!1,nn=[],ar=null,ur=null,lr=null,La=new Map,Ma=new Map,ko=[],Ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Gy(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":La.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(e.pointerId)}}function Co(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Ef(e,n,r,i,s),e!==null&&(e=Tu(e),e!==null&&am(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sC(t,e,n,r,i){switch(e){case"focusin":return ar=Co(ar,t,e,n,r,i),!0;case"dragenter":return ur=Co(ur,t,e,n,r,i),!0;case"mouseover":return lr=Co(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return La.set(s,Co(La.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ma.set(s,Co(Ma.get(s)||null,t,e,n,r,i)),!0}return!1}function oC(t){var e=si(t.target);if(e!==null){var n=Ui(e);if(n!==null){if(e=n.tag,e===13){if(e=rI(n),e!==null){t.blockedOn=e,aI(t.lanePriority,function(){Ue.unstable_runWithPriority(t.priority,function(){oI(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=Tu(n),e!==null&&am(e),t.blockedOn=n,!1;e.shift()}return!0}function Qy(t,e,n){Nl(t)&&n.delete(e)}function aC(){for(wf=!1;0<nn.length;){var t=nn[0];if(t.blockedOn!==null){t=Tu(t.blockedOn),t!==null&&sI(t);break}for(var e=t.targetContainers;0<e.length;){var n=hm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&nn.shift()}ar!==null&&Nl(ar)&&(ar=null),ur!==null&&Nl(ur)&&(ur=null),lr!==null&&Nl(lr)&&(lr=null),La.forEach(Qy),Ma.forEach(Qy)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,wf||(wf=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,aC)))}function uI(t){function e(i){return No(i,t)}if(0<nn.length){No(nn[0],t);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&No(ar,t),ur!==null&&No(ur,t),lr!==null&&No(lr,t),La.forEach(e),Ma.forEach(e),n=0;n<ko.length;n++)r=ko[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ko.length&&(n=ko[0],n.blockedOn===null);)oC(n),n.blockedOn===null&&ko.shift()}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},dd={},lI={};Pn&&(lI=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function eh(t){if(dd[t])return dd[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lI)return dd[t]=e[n];return t}var cI=eh("animationend"),hI=eh("animationiteration"),dI=eh("animationstart"),fI=eh("transitionend"),pI=new Map,um=new Map,uC=["abort","abort",cI,"animationEnd",hI,"animationIteration",dI,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",fI,"transitionEnd","waiting","waiting"];function lm(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),um.set(r,e),pI.set(r,i),Fi(i,[r])}}var lC=Ue.unstable_now;lC();var se=8;function ns(t){if((1&t)!==0)return se=15,1;if((2&t)!==0)return se=14,2;if((4&t)!==0)return se=13,4;var e=24&t;return e!==0?(se=12,e):(t&32)!==0?(se=11,32):(e=192&t,e!==0?(se=10,e):(t&256)!==0?(se=9,256):(e=3584&t,e!==0?(se=8,e):(t&4096)!==0?(se=7,4096):(e=4186112&t,e!==0?(se=6,e):(e=62914560&t,e!==0?(se=5,e):t&67108864?(se=4,67108864):(t&134217728)!==0?(se=3,134217728):(e=805306368&t,e!==0?(se=2,e):(1073741824&t)!==0?(se=1,1073741824):(se=8,t))))))}function cC(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function hC(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(x(358,t))}}function Fa(t,e){var n=t.pendingLanes;if(n===0)return se=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=se=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=ns(u),i=se):(a&=s,a!==0&&(r=ns(a),i=se))}else s=n&~o,s!==0?(r=ns(s),i=se):a!==0&&(r=ns(a),i=se);if(r===0)return 0;if(r=31-vr(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if(ns(e),i<=se)return e;se=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vr(e),i=1<<n,r|=t[n],e&=~i;return r}function mI(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tc(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=rs(24&~e),t===0?tc(10,e):t;case 10:return t=rs(192&~e),t===0?tc(8,e):t;case 8:return t=rs(3584&~e),t===0&&(t=rs(4186112&~e),t===0&&(t=512)),t;case 2:return e=rs(805306368&~e),e===0&&(e=268435456),e}throw Error(x(358,t))}function rs(t){return t&-t}function fd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function th(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-vr(e),t[e]=n}var vr=Math.clz32?Math.clz32:pC,dC=Math.log,fC=Math.LN2;function pC(t){return t===0?32:31-(dC(t)/fC|0)|0}var mC=Ue.unstable_UserBlockingPriority,gC=Ue.unstable_runWithPriority,Al=!0;function yC(t,e,n,r){ii||sm();var i=cm,s=ii;ii=!0;try{tI(i,t,e,n,r)}finally{(ii=s)||om()}}function vC(t,e,n,r){gC(mC,cm.bind(null,t,e,n,r))}function cm(t,e,n,r){if(Al){var i;if((i=(e&4)===0)&&0<nn.length&&-1<Ky.indexOf(t))t=Ef(null,t,e,n,r),nn.push(t);else{var s=hm(t,e,n,r);if(s===null)i&&Gy(t,r);else{if(i){if(-1<Ky.indexOf(t)){t=Ef(s,t,e,n,r),nn.push(t);return}if(sC(s,t,e,n,r))return;Gy(t,r)}NI(t,e,r,null,n)}}}}function hm(t,e,n,r){var i=rm(r);if(i=si(i),i!==null){var s=Ui(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=rI(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return NI(t,e,r,i,n),null}var tr=null,dm=null,Rl=null;function gI(){if(Rl)return Rl;var t,e=dm,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rl=i.slice(t,1<r?1-r:void 0)}function xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Yy(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:Yy,this.isPropagationStopped=Yy,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fm=Dt(Js),_u=pe({},Js,{view:0,detail:0}),wC=Dt(_u),pd,md,Ao,nh=pe({},_u,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(pd=t.screenX-Ao.screenX,md=t.screenY-Ao.screenY):md=pd=0,Ao=t),pd)},movementY:function(t){return"movementY"in t?t.movementY:md}}),Xy=Dt(nh),EC=pe({},nh,{dataTransfer:0}),IC=Dt(EC),_C=pe({},_u,{relatedTarget:0}),gd=Dt(_C),TC=pe({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),SC=Dt(TC),bC=pe({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kC=Dt(bC),CC=pe({},Js,{data:0}),Jy=Dt(CC),NC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RC[t])?!!e[t]:!1}function pm(){return xC}var DC=pe({},_u,{key:function(t){if(t.key){var e=NC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pm,charCode:function(t){return t.type==="keypress"?xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OC=Dt(DC),PC=pe({},nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zy=Dt(PC),LC=pe({},_u,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pm}),MC=Dt(LC),FC=pe({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),$C=Dt(FC),UC=pe({},nh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VC=Dt(UC),BC=[9,13,27,32],mm=Pn&&"CompositionEvent"in window,da=null;Pn&&"documentMode"in document&&(da=document.documentMode);var jC=Pn&&"TextEvent"in window&&!da,yI=Pn&&(!mm||da&&8<da&&11>=da),ev=String.fromCharCode(32),tv=!1;function vI(t,e){switch(t){case"keyup":return BC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function qC(t,e){switch(t){case"compositionend":return wI(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return t=e.data,t===ev&&tv?null:t;default:return null}}function zC(t,e){if(os)return t==="compositionend"||!mm&&vI(t,e)?(t=gI(),Rl=dm=tr=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yI&&e.locale!=="ko"?null:e.data;default:return null}}var WC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!WC[t.type]:e==="textarea"}function EI(t,e,n,r){ZE(r),e=nc(e,"onChange"),0<e.length&&(n=new fm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,$a=null;function HC(t){bI(t,0)}function rh(t){var e=us(t);if(HE(e))return t}function KC(t,e){if(t==="change")return e}var II=!1;if(Pn){var yd;if(Pn){var vd="oninput"in document;if(!vd){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),vd=typeof rv.oninput=="function"}yd=vd}else yd=!1;II=yd&&(!document.documentMode||9<document.documentMode)}function iv(){fa&&(fa.detachEvent("onpropertychange",_I),$a=fa=null)}function _I(t){if(t.propertyName==="value"&&rh($a)){var e=[];if(EI(e,$a,t,rm(t)),t=HC,ii)t(e);else{ii=!0;try{im(t,e)}finally{ii=!1,om()}}}}function GC(t,e,n){t==="focusin"?(iv(),fa=e,$a=n,fa.attachEvent("onpropertychange",_I)):t==="focusout"&&iv()}function QC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rh($a)}function YC(t,e){if(t==="click")return rh(e)}function XC(t,e){if(t==="input"||t==="change")return rh(e)}function JC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:JC,ZC=Object.prototype.hasOwnProperty;function Ua(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!ZC.call(e,n[r])||!Ot(t[n[r]],e[n[r]]))return!1;return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ov(t,e){var n=sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function TI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?TI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var eN=Pn&&"documentMode"in document&&11>=document.documentMode,as=null,_f=null,pa=null,Tf=!1;function uv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tf||as==null||as!==Jl(r)||(r=as,"selectionStart"in r&&If(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&Ua(pa,r)||(pa=r,r=nc(_f,"onSelect"),0<r.length&&(e=new fm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=as)))}lm("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);lm("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);lm(uC,2);for(var lv="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),wd=0;wd<lv.length;wd++)um.set(lv[wd],0);xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function cv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,rC(r,e,void 0,t),t.currentTarget=null}function bI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;cv(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;cv(i,a,l),s=u}}}if(ec)throw t=vf,ec=!1,vf=null,t}function ue(t,e){var n=RI(e),r=t+"__bubble";n.has(r)||(CI(e,t,2,!1),n.add(r))}var hv="_reactListening"+Math.random().toString(36).slice(2);function kI(t){t[hv]||(t[hv]=!0,qE.forEach(function(e){SI.has(e)||dv(e,!1,t,null),dv(e,!0,t,null)}))}function dv(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&SI.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=RI(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),CI(s,t,i,e),o.add(a))}function CI(t,e,n,r){var i=um.get(e);switch(i===void 0?2:i){case 0:i=yC;break;case 1:i=vC;break;default:i=cm}n=i.bind(null,e,n,t),i=void 0,!yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function NI(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=si(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zk(function(){var l=s,c=rm(n),h=[];e:{var d=pI.get(t);if(d!==void 0){var f=fm,g=t;switch(t){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":f=OC;break;case"focusin":g="focus",f=gd;break;case"focusout":g="blur",f=gd;break;case"beforeblur":case"afterblur":f=gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Xy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=IC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=MC;break;case cI:case hI:case dI:f=SC;break;case fI:f=$C;break;case"scroll":f=wC;break;case"wheel":f=VC;break;case"copy":case"cut":case"paste":f=kC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Zy}var v=(e&4)!==0,m=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var y=l,E;y!==null;){E=y;var _=E.stateNode;if(E.tag===5&&_!==null&&(E=_,p!==null&&(_=Pa(y,p),_!=null&&v.push(Va(y,_,E)))),m)break;y=y.return}0<v.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(g=n.relatedTarget||n.fromElement)&&(si(g)||g[Zs]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=l,g=g?si(g):null,g!==null&&(m=Ui(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=l),f!==g)){if(v=Xy,_="onMouseLeave",p="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zy,_="onPointerLeave",p="onPointerEnter",y="pointer"),m=f==null?d:us(f),E=g==null?d:us(g),d=new v(_,y+"leave",f,n,c),d.target=m,d.relatedTarget=E,_=null,si(c)===l&&(v=new v(p,y+"enter",g,n,c),v.target=E,v.relatedTarget=m,_=v),m=_,f&&g)t:{for(v=f,p=g,y=0,E=v;E;E=Xi(E))y++;for(E=0,_=p;_;_=Xi(_))E++;for(;0<y-E;)v=Xi(v),y--;for(;0<E-y;)p=Xi(p),E--;for(;y--;){if(v===p||p!==null&&v===p.alternate)break t;v=Xi(v),p=Xi(p)}v=null}else v=null;f!==null&&fv(h,d,f,v,!1),g!==null&&m!==null&&fv(h,m,g,v,!0)}}e:{if(d=l?us(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var N=KC;else if(nv(d))if(II)N=XC;else{N=QC;var w=GC}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=YC);if(N&&(N=N(t,l))){EI(h,N,n,c);break e}w&&w(t,d,l),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&lf(d,"number",d.value)}switch(w=l?us(l):window,t){case"focusin":(nv(w)||w.contentEditable==="true")&&(as=w,_f=l,pa=null);break;case"focusout":pa=_f=as=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,uv(h,n,c);break;case"selectionchange":if(eN)break;case"keydown":case"keyup":uv(h,n,c)}var S;if(mm)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else os?vI(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(yI&&n.locale!=="ko"&&(os||R!=="onCompositionStart"?R==="onCompositionEnd"&&os&&(S=gI()):(tr=c,dm="value"in tr?tr.value:tr.textContent,os=!0)),w=nc(l,R),0<w.length&&(R=new Jy(R,t,null,n,c),h.push({event:R,listeners:w}),S?R.data=S:(S=wI(n),S!==null&&(R.data=S)))),(S=jC?qC(t,n):zC(t,n))&&(l=nc(l,"onBeforeInput"),0<l.length&&(c=new Jy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=S))}bI(h,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pa(t,n),s!=null&&r.unshift(Va(t,s,i)),s=Pa(t,e),s!=null&&r.push(Va(t,s,i))),t=t.return}return r}function Xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Pa(n,s),u!=null&&o.unshift(Va(n,u,a))):i||(u=Pa(n,s),u!=null&&o.push(Va(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function rc(){}var Ed=null,Id=null;function AI(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Sf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pv=typeof setTimeout=="function"?setTimeout:void 0,tN=typeof clearTimeout=="function"?clearTimeout:void 0;function gm(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function vs(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _d=0;function nN(t){return{$$typeof:tm,toString:t,valueOf:t}}var ih=Math.random().toString(36).slice(2),nr="__reactFiber$"+ih,ic="__reactProps$"+ih,Zs="__reactContainer$"+ih,gv="__reactEvents$"+ih;function si(t){var e=t[nr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zs]||n[nr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mv(t);t!==null;){if(n=t[nr])return n;t=mv(t)}return e}t=n,n=t.parentNode}return null}function Tu(t){return t=t[nr]||t[Zs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function sh(t){return t[ic]||null}function RI(t){var e=t[gv];return e===void 0&&(e=t[gv]=new Set),e}var bf=[],ls=-1;function Or(t){return{current:t}}function le(t){0>ls||(t.current=bf[ls],bf[ls]=null,ls--)}function we(t,e){ls++,bf[ls]=t.current,t.current=e}var wr={},at=Or(wr),_t=Or(!1),Ei=wr;function Ds(t,e){var n=t.type.contextTypes;if(!n)return wr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function sc(){le(_t),le(at)}function yv(t,e,n){if(at.current!==wr)throw Error(x(168));we(at,e),we(_t,n)}function xI(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,ps(e)||"Unknown",i));return pe({},n,r)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Ei=at.current,we(at,t),we(_t,_t.current),!0}function vv(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=xI(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,le(_t),le(at),we(at,t)):le(_t),we(_t,n)}var ym=null,pi=null,rN=Ue.unstable_runWithPriority,vm=Ue.unstable_scheduleCallback,kf=Ue.unstable_cancelCallback,iN=Ue.unstable_shouldYield,wv=Ue.unstable_requestPaint,Cf=Ue.unstable_now,sN=Ue.unstable_getCurrentPriorityLevel,oh=Ue.unstable_ImmediatePriority,DI=Ue.unstable_UserBlockingPriority,OI=Ue.unstable_NormalPriority,PI=Ue.unstable_LowPriority,LI=Ue.unstable_IdlePriority,Td={},oN=wv!==void 0?wv:function(){},Tn=null,Ol=null,Sd=!1,Ev=Cf(),rt=1e4>Ev?Cf:function(){return Cf()-Ev};function Os(){switch(sN()){case oh:return 99;case DI:return 98;case OI:return 97;case PI:return 96;case LI:return 95;default:throw Error(x(332))}}function MI(t){switch(t){case 99:return oh;case 98:return DI;case 97:return OI;case 96:return PI;case 95:return LI;default:throw Error(x(332))}}function Ii(t,e){return t=MI(t),rN(t,e)}function Ba(t,e,n){return t=MI(t),vm(t,e,n)}function In(){if(Ol!==null){var t=Ol;Ol=null,kf(t)}FI()}function FI(){if(!Sd&&Tn!==null){Sd=!0;var t=0;try{var e=Tn;Ii(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Tn=null}catch(n){throw Tn!==null&&(Tn=Tn.slice(t+1)),vm(oh,In),n}finally{Sd=!1}}}var aN=$i.ReactCurrentBatchConfig;function zt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var oc=Or(null),ac=null,cs=null,uc=null;function wm(){uc=cs=ac=null}function Em(t){var e=oc.current;le(oc),t.type._context._currentValue=e}function $I(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function ws(t,e){ac=t,uc=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ht=!0),t.firstContext=null)}function Ut(t,e){if(uc!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(uc=t,e=1073741823),e={context:t,observedBits:e,next:null},cs===null){if(ac===null)throw Error(x(308));cs=e,ac.dependencies={lanes:0,firstContext:e,responders:null}}else cs=cs.next=e;return t._currentValue}var Qn=!1;function Im(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function UI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ja(t,e,n,r){var i=t.updateQueue;Qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=t,g=s;switch(a=e,d=n,g.tag){case 1:if(f=g.payload,typeof f=="function"){h=f.call(d,h,a);break e}h=f;break e;case 3:f.flags=f.flags&-4097|64;case 0:if(f=g.payload,a=typeof f=="function"?f.call(d,h,a):f,a==null)break e;h=pe({},h,a);break e;case 2:Qn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,bu|=o,t.lanes=o,t.memoizedState=h}}function _v(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var VI=new Xc.Component().refs;function lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ah={isMounted:function(t){return(t=t._reactInternals)?Ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=dr(t),s=cr(r,i);s.payload=e,n!=null&&(s.callback=n),hr(t,s),fr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),i=dr(t),s=cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),hr(t,s),fr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=dr(t),i=cr(n,r);i.tag=2,e!=null&&(i.callback=e),hr(t,i),fr(t,r,n)}};function Tv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,r)||!Ua(i,s):!0}function BI(t,e,n){var r=!1,i=wr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=Tt(e)?Ei:at.current,r=e.contextTypes,s=(r=r!=null)?Ds(t,i):wr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ah,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ah.enqueueReplaceState(e,e.state,null)}function Nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=VI,Im(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=Tt(e)?Ei:at.current,i.context=Ds(t,s)),ja(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ah.enqueueReplaceState(i,i.state,null),ja(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var al=Array.isArray;function Ro(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===VI&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function ul(t,e){if(t.type!=="textarea")throw Error(x(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function jI(t){function e(m,p){if(t){var y=m.lastEffect;y!==null?(y.nextEffect=p,m.lastEffect=p):m.firstEffect=m.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ir(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags=2,p):y):(m.flags=2,p)):p}function o(m){return t&&m.alternate===null&&(m.flags=2),m}function a(m,p,y,E){return p===null||p.tag!==6?(p=Ad(y,m.mode,E),p.return=m,p):(p=i(p,y),p.return=m,p)}function u(m,p,y,E){return p!==null&&p.elementType===y.type?(E=i(p,y.props),E.ref=Ro(m,p,y),E.return=m,E):(E=Fl(y.type,y.key,y.props,null,m.mode,E),E.ref=Ro(m,p,y),E.return=m,E)}function l(m,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Rd(y,m.mode,E),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,E,_){return p===null||p.tag!==7?(p=Ts(y,m.mode,E,_),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"||typeof p=="number")return p=Ad(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qo:return y=Fl(p.type,p.key,p.props,null,m.mode,y),y.ref=Ro(m,null,p),y.return=m,y;case ri:return p=Rd(p,m.mode,y),p.return=m,p}if(al(p)||So(p))return p=Ts(p,m.mode,y,null),p.return=m,p;ul(m,p)}return null}function d(m,p,y,E){var _=p!==null?p.key:null;if(typeof y=="string"||typeof y=="number")return _!==null?null:a(m,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qo:return y.key===_?y.type===Yn?c(m,p,y.props.children,E,_):u(m,p,y,E):null;case ri:return y.key===_?l(m,p,y,E):null}if(al(y)||So(y))return _!==null?null:c(m,p,y,E,null);ul(m,y)}return null}function f(m,p,y,E,_){if(typeof E=="string"||typeof E=="number")return m=m.get(y)||null,a(p,m,""+E,_);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Qo:return m=m.get(E.key===null?y:E.key)||null,E.type===Yn?c(p,m,E.props.children,_,E.key):u(p,m,E,_);case ri:return m=m.get(E.key===null?y:E.key)||null,l(p,m,E,_)}if(al(E)||So(E))return m=m.get(y)||null,c(p,m,E,_,null);ul(p,E)}return null}function g(m,p,y,E){for(var _=null,N=null,w=p,S=p=0,R=null;w!==null&&S<y.length;S++){w.index>S?(R=w,w=null):R=w.sibling;var O=d(m,w,y[S],E);if(O===null){w===null&&(w=R);break}t&&w&&O.alternate===null&&e(m,w),p=s(O,p,S),N===null?_=O:N.sibling=O,N=O,w=R}if(S===y.length)return n(m,w),_;if(w===null){for(;S<y.length;S++)w=h(m,y[S],E),w!==null&&(p=s(w,p,S),N===null?_=w:N.sibling=w,N=w);return _}for(w=r(m,w);S<y.length;S++)R=f(w,m,S,y[S],E),R!==null&&(t&&R.alternate!==null&&w.delete(R.key===null?S:R.key),p=s(R,p,S),N===null?_=R:N.sibling=R,N=R);return t&&w.forEach(function(G){return e(m,G)}),_}function v(m,p,y,E){var _=So(y);if(typeof _!="function")throw Error(x(150));if(y=_.call(y),y==null)throw Error(x(151));for(var N=_=null,w=p,S=p=0,R=null,O=y.next();w!==null&&!O.done;S++,O=y.next()){w.index>S?(R=w,w=null):R=w.sibling;var G=d(m,w,O.value,E);if(G===null){w===null&&(w=R);break}t&&w&&G.alternate===null&&e(m,w),p=s(G,p,S),N===null?_=G:N.sibling=G,N=G,w=R}if(O.done)return n(m,w),_;if(w===null){for(;!O.done;S++,O=y.next())O=h(m,O.value,E),O!==null&&(p=s(O,p,S),N===null?_=O:N.sibling=O,N=O);return _}for(w=r(m,w);!O.done;S++,O=y.next())O=f(w,m,S,O.value,E),O!==null&&(t&&O.alternate!==null&&w.delete(O.key===null?S:O.key),p=s(O,p,S),N===null?_=O:N.sibling=O,N=O);return t&&w.forEach(function(Ae){return e(m,Ae)}),_}return function(m,p,y,E){var _=typeof y=="object"&&y!==null&&y.type===Yn&&y.key===null;_&&(y=y.props.children);var N=typeof y=="object"&&y!==null;if(N)switch(y.$$typeof){case Qo:e:{for(N=y.key,_=p;_!==null;){if(_.key===N){switch(_.tag){case 7:if(y.type===Yn){n(m,_.sibling),p=i(_,y.props.children),p.return=m,m=p;break e}break;default:if(_.elementType===y.type){n(m,_.sibling),p=i(_,y.props),p.ref=Ro(m,_,y),p.return=m,m=p;break e}}n(m,_);break}else e(m,_);_=_.sibling}y.type===Yn?(p=Ts(y.props.children,m.mode,E,y.key),p.return=m,m=p):(E=Fl(y.type,y.key,y.props,null,m.mode,E),E.ref=Ro(m,p,y),E.return=m,m=E)}return o(m);case ri:e:{for(_=y.key;p!==null;){if(p.key===_)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Rd(y,m.mode,E),p.return=m,m=p}return o(m)}if(typeof y=="string"||typeof y=="number")return y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Ad(y,m.mode,E),p.return=m,m=p),o(m);if(al(y))return g(m,p,y,E);if(So(y))return v(m,p,y,E);if(N&&ul(m,y),typeof y>"u"&&!_)switch(m.tag){case 1:case 22:case 0:case 11:case 15:throw Error(x(152,ps(m.type)||"Component"))}return n(m,p)}}var cc=jI(!0),qI=jI(!1),Su={},cn=Or(Su),qa=Or(Su),za=Or(Su);function oi(t){if(t===Su)throw Error(x(174));return t}function Af(t,e){switch(we(za,e),we(qa,t),we(cn,Su),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}le(cn),we(cn,e)}function Ps(){le(cn),le(qa),le(za)}function bv(t){oi(za.current);var e=oi(cn.current),n=ff(e,t.type);e!==n&&(we(qa,t),we(cn,n))}function _m(t){qa.current===t&&(le(cn),le(qa))}var ve=Or(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bn=null,rr=null,hn=!1;function zI(t,e){var n=Pt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function kv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Rf(t){if(hn){var e=rr;if(e){var n=e;if(!kv(t,e)){if(e=vs(n.nextSibling),!e||!kv(t,e)){t.flags=t.flags&-1025|2,hn=!1,bn=t;return}zI(bn,n)}bn=t,rr=vs(e.firstChild)}else t.flags=t.flags&-1025|2,hn=!1,bn=t}}function Cv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;bn=t}function ll(t){if(t!==bn)return!1;if(!hn)return Cv(t),hn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Sf(e,t.memoizedProps))for(e=rr;e;)zI(t,e),e=vs(e.nextSibling);if(Cv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rr=vs(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rr=null}}else rr=bn?vs(t.stateNode.nextSibling):null;return!0}function bd(){rr=bn=null,hn=!1}var Es=[];function Tm(){for(var t=0;t<Es.length;t++)Es[t]._workInProgressVersionPrimary=null;Es.length=0}var ma=$i.ReactCurrentDispatcher,Ft=$i.ReactCurrentBatchConfig,Wa=0,ke=null,nt=null,He=null,dc=!1,ga=!1;function gt(){throw Error(x(321))}function Sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function bm(t,e,n,r,i,s){if(Wa=s,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ma.current=t===null||t.memoizedState===null?lN:cN,t=n(r,i),ga){s=0;do{if(ga=!1,!(25>s))throw Error(x(301));s+=1,He=nt=null,e.updateQueue=null,ma.current=hN,t=n(r,i)}while(ga)}if(ma.current=gc,e=nt!==null&&nt.next!==null,Wa=0,He=nt=ke=null,dc=!1,e)throw Error(x(300));return t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ke.memoizedState=He=t:He=He.next=t,He}function Vi(){if(nt===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=He===null?ke.memoizedState:He.next;if(e!==null)He=e,nt=t;else{if(t===null)throw Error(x(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},He===null?ke.memoizedState=He=t:He=He.next=t}return He}function rn(t,e){return typeof e=="function"?e(t):e}function xo(t){var e=Vi(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=nt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((Wa&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,ke.lanes|=l,bu|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,Ot(r,e.memoizedState)||(Ht=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Do(t){var e=Vi(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ot(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Nv(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Wa&t)===t)&&(e._workInProgressVersionPrimary=r,Es.push(e))),t)return n(e._source);throw Es.push(e),Error(x(350))}function WI(t,e,n,r){var i=dt;if(i===null)throw Error(x(349));var s=e._getVersion,o=s(e._source),a=ma.current,u=a.useState(function(){return Nv(i,e,n)}),l=u[1],c=u[0];u=He;var h=t.memoizedState,d=h.refs,f=d.getSnapshot,g=h.source;h=h.subscribe;var v=ke;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var m=s(e._source);if(!Ot(o,m)){m=n(e._source),Ot(c,m)||(l(m),m=dr(v),i.mutableReadLanes|=m&i.pendingLanes),m=i.mutableReadLanes,i.entangledLanes|=m;for(var p=i.entanglements,y=m;0<y;){var E=31-vr(y),_=1<<E;p[E]|=m,y&=~_}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var m=d.getSnapshot,p=d.setSnapshot;try{p(m(e._source));var y=dr(v);i.mutableReadLanes|=y&i.pendingLanes}catch(E){p(function(){throw E})}})},[e,r]),Ot(f,n)&&Ot(g,e)&&Ot(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:rn,lastRenderedState:c},t.dispatch=l=Nm.bind(null,ke,t),u.queue=t,u.baseQueue=null,c=Nv(i,e,n),u.memoizedState=u.baseState=c),c}function HI(t,e,n){var r=Vi();return WI(r,t,e,n)}function Oo(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:rn,lastRenderedState:t},t=t.dispatch=Nm.bind(null,ke,t),[e.memoizedState,t]}function fc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Av(t){var e=ai();return t={current:t},e.memoizedState=t}function pc(){return Vi().memoizedState}function xf(t,e,n,r){var i=ai();ke.flags|=t,i.memoizedState=fc(1|e,n,void 0,r===void 0?null:r)}function km(t,e,n,r){var i=Vi();r=r===void 0?null:r;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,r!==null&&Sm(r,o.deps)){fc(e,n,s,r);return}}ke.flags|=t,i.memoizedState=fc(1|e,n,s,r)}function Rv(t,e){return xf(516,4,t,e)}function mc(t,e){return km(516,4,t,e)}function KI(t,e){return km(4,2,t,e)}function GI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function QI(t,e,n){return n=n!=null?n.concat([t]):null,km(4,2,GI.bind(null,e,t),n)}function Cm(){}function YI(t,e){var n=Vi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function XI(t,e){var n=Vi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function uN(t,e){var n=Os();Ii(98>n?98:n,function(){t(!0)}),Ii(97<n?97:n,function(){var r=Ft.transition;Ft.transition=1;try{t(!1),e()}finally{Ft.transition=r}})}function Nm(t,e,n){var r=Ct(),i=dr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===ke||o!==null&&o===ke)ga=dc=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Ot(u,a))return}catch{}finally{}fr(t,i,r)}}var gc={readContext:Ut,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useOpaqueIdentifier:gt,unstable_isNewReconciler:!1},lN={readContext:Ut,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Rv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xf(4,2,GI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xf(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ai();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Nm.bind(null,ke,t),[r.memoizedState,t]},useRef:Av,useState:Oo,useDebugValue:Cm,useDeferredValue:function(t){var e=Oo(t),n=e[0],r=e[1];return Rv(function(){var i=Ft.transition;Ft.transition=1;try{r(t)}finally{Ft.transition=i}},[t]),n},useTransition:function(){var t=Oo(!1),e=t[0];return t=uN.bind(null,t[1]),Av(t),[t,e]},useMutableSource:function(t,e,n){var r=ai();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},WI(r,t,e,n)},useOpaqueIdentifier:function(){if(hn){var t=!1,e=nN(function(){throw t||(t=!0,n("r:"+(_d++).toString(36))),Error(x(355))}),n=Oo(e)[1];return(ke.mode&2)===0&&(ke.flags|=516,fc(5,function(){n("r:"+(_d++).toString(36))},void 0,null)),e}return e="r:"+(_d++).toString(36),Oo(e),e},unstable_isNewReconciler:!1},cN={readContext:Ut,useCallback:YI,useContext:Ut,useEffect:mc,useImperativeHandle:QI,useLayoutEffect:KI,useMemo:XI,useReducer:xo,useRef:pc,useState:function(){return xo(rn)},useDebugValue:Cm,useDeferredValue:function(t){var e=xo(rn),n=e[0],r=e[1];return mc(function(){var i=Ft.transition;Ft.transition=1;try{r(t)}finally{Ft.transition=i}},[t]),n},useTransition:function(){var t=xo(rn)[0];return[pc().current,t]},useMutableSource:HI,useOpaqueIdentifier:function(){return xo(rn)[0]},unstable_isNewReconciler:!1},hN={readContext:Ut,useCallback:YI,useContext:Ut,useEffect:mc,useImperativeHandle:QI,useLayoutEffect:KI,useMemo:XI,useReducer:Do,useRef:pc,useState:function(){return Do(rn)},useDebugValue:Cm,useDeferredValue:function(t){var e=Do(rn),n=e[0],r=e[1];return mc(function(){var i=Ft.transition;Ft.transition=1;try{r(t)}finally{Ft.transition=i}},[t]),n},useTransition:function(){var t=Do(rn)[0];return[pc().current,t]},useMutableSource:HI,useOpaqueIdentifier:function(){return Do(rn)[0]},unstable_isNewReconciler:!1},dN=$i.ReactCurrentOwner,Ht=!1;function yt(t,e,n,r){e.child=t===null?qI(e,null,n,r):cc(e,t.child,n,r)}function xv(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=bm(t,e,n,r,s,i),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,kn(t,e,i)):(e.flags|=1,yt(t,e,r,i),e.child)}function Dv(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Pm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,JI(t,e,o,r,i,s)):(t=Fl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Ua,n(i,r)&&t.ref===e.ref)?kn(t,e,s):(e.flags|=1,t=Ir(o,r),t.ref=e.ref,t.return=e,e.child=t)}function JI(t,e,n,r,i,s){if(t!==null&&Ua(t.memoizedProps,r)&&t.ref===e.ref)if(Ht=!1,(s&i)!==0)(t.flags&16384)!==0&&(Ht=!0);else return e.lanes=t.lanes,kn(t,e,s);return Df(t,e,n,r,s)}function kd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},hl(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},hl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},hl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,hl(e,r);return yt(t,e,i,n),e.child}function ZI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Df(t,e,n,r,i){var s=Tt(n)?Ei:at.current;return s=Ds(e,s),ws(e,i),n=bm(t,e,n,r,s,i),t!==null&&!Ht?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,kn(t,e,i)):(e.flags|=1,yt(t,e,n,i),e.child)}function Ov(t,e,n,r,i){if(Tt(n)){var s=!0;Dl(e)}else s=!1;if(ws(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),BI(e,n,r),Nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Ut(l):(l=Tt(n)?Ei:at.current,l=Ds(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Sv(e,o,r,l),Qn=!1;var d=e.memoizedState;o.state=d,ja(e,r,o,i),u=e.memoizedState,a!==r||d!==u||_t.current||Qn?(typeof c=="function"&&(lc(e,n,c,r),u=e.memoizedState),(a=Qn||Tv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,UI(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:zt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=Tt(n)?Ei:at.current,u=Ds(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Sv(e,o,r,u),Qn=!1,d=e.memoizedState,o.state=d,ja(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||_t.current||Qn?(typeof f=="function"&&(lc(e,n,f,r),g=e.memoizedState),(l=Qn||Tv(e,n,l,r,d,g,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Of(t,e,n,r,s,i)}function Of(t,e,n,r,i,s){ZI(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&vv(e,n,!1),kn(t,e,s);r=e.stateNode,dN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cc(e,t.child,null,s),e.child=cc(e,null,a,s)):yt(t,e,a,s),e.memoizedState=r.state,i&&vv(e,n,!0),e.child}function Pv(t){var e=t.stateNode;e.pendingContext?yv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yv(t,e.context,!1),Af(t,e.containerInfo)}var cl={dehydrated:null,retryLane:0};function Lv(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),we(ve,i&1),t===null?(r.fallback!==void 0&&Rf(e),t=r.children,i=r.fallback,s?(t=Mv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=cl,t):typeof r.unstable_expectedLoadTime=="number"?(t=Mv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=cl,e.lanes=33554432,t):(n=Lm({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=$v(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=cl,r):(n=Fv(t,e,r.children,n),e.memoizedState=null,n):s?(r=$v(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=cl,r):(n=Fv(t,e,r.children,n),e.memoizedState=null,n)}function Mv(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Lm(e,i,0,null),n=Ts(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function Fv(t,e,n,r){var i=t.child;return t=i.sibling,n=Ir(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function $v(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Ir(o,a),t!==null?r=Ir(t,r):(r=Ts(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function Uv(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),$I(t.return,e)}function Cd(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Vv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(yt(t,e,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uv(t,n);else if(t.tag===19)Uv(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(ve,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Cd(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&hc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Cd(e,!0,n,null,s,e.lastEffect);break;case"together":Cd(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bu|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var e_,Pf,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pf=function(){};t_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,oi(cn.current);var s=null;switch(n){case"input":i=af(t,i),r=af(t,r),s=[];break;case"option":i=cf(t,i),r=cf(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=hf(t,i),r=hf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rc)}pf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Da.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Da.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&ue("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===tm?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};n_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Po(t,e){if(!hn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function fN(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Tt(e.type)&&sc(),null;case 3:return Ps(),le(_t),le(at),Tm(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ll(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Pf(e),null;case 5:_m(e);var i=oi(za.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(x(166));return null}if(t=oi(cn.current),ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nr]=e,r[ic]=s,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(t=0;t<Xo.length;t++)ue(Xo[t],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Vy(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":jy(r,s),ue("invalid",r)}pf(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Da.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ue("scroll",r));switch(n){case"input":rl(r),By(r,s,!0);break;case"textarea":rl(r),qy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rc)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===df.html&&(t=QE(n)),t===df.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nr]=e,t[ic]=r,e_(t,e,!1,!1),e.stateNode=t,o=mf(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xo.length;i++)ue(Xo[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Vy(t,r),i=af(t,r),ue("invalid",t);break;case"option":i=cf(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ue("invalid",t);break;case"textarea":jy(t,r),i=hf(t,r),ue("invalid",t);break;default:i=r}pf(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?JE(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&YE(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Oa(t,u):typeof u=="number"&&Oa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&Qp(t,s,u,o))}switch(n){case"input":rl(t),By(t,r,!1);break;case"textarea":rl(t),qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ms(t,!!r.multiple,s,!1):r.defaultValue!=null&&ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rc)}AI(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));n=oi(za.current),oi(cn.current),ll(e)?(r=e.stateNode,n=e.memoizedProps,r[nr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nr]=e,e.stateNode=r)}return null;case 13:return le(ve),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&ll(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(ve.current&1)!==0?Ge===0&&(Ge=3):((Ge===0||Ge===3)&&(Ge=4),dt===null||(bu&134217727)===0&&(to&134217727)===0||Is(dt,it))),(r||n)&&(e.flags|=4),null);case 4:return Ps(),Pf(e),t===null&&kI(e.stateNode.containerInfo),null;case 10:return Em(e),null;case 17:return Tt(e.type)&&sc(),null;case 19:if(le(ve),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)Po(r,!1);else{if(Ge!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=64,Po(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(ve,ve.current&1|2),e.child}t=t.sibling}r.tail!==null&&rt()>Vf&&(e.flags|=64,s=!0,Po(r,!1),e.lanes=33554432)}else{if(!s)if(t=hc(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!hn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*rt()-r.renderingStartTime>Vf&&n!==1073741824&&(e.flags|=64,s=!0,Po(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=rt(),n.sibling=null,e=ve.current,we(ve,s?e&1|2:e&1),n):null;case 23:case 24:return Om(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(x(156,e.tag))}function pN(t){switch(t.tag){case 1:Tt(t.type)&&sc();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Ps(),le(_t),le(at),Tm(),e=t.flags,(e&64)!==0)throw Error(x(285));return t.flags=e&-4097|64,t;case 5:return _m(t),null;case 13:return le(ve),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return le(ve),null;case 4:return Ps(),null;case 10:return Em(t),null;case 23:case 24:return Om(),null;default:return null}}function Am(t,e){try{var n="",r=e;do n+=Gk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Lf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mN=typeof WeakMap=="function"?WeakMap:Map;function r_(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){vc||(vc=!0,Bf=r),Lf(t,e)},n}function i_(t,e,n){n=cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Lf(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this),Lf(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var gN=typeof WeakSet=="function"?WeakSet:Set;function Bv(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){pr(t,n)}else e.current=null}function yN(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:zt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&gm(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(x(163))}function vN(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(f_(n,t),kN(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:zt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&_v(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}_v(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&AI(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&uI(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(x(163))}function jv(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=XE("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function qv(t,e){if(pi&&typeof pi.onCommitFiberUnmount=="function")try{pi.onCommitFiberUnmount(ym,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)f_(e,n);else{r=e;try{i()}catch(s){pr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(Bv(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){pr(e,s)}break;case 5:Bv(e);break;case 4:s_(t,e)}}function zv(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Wv(t){return t.tag===5||t.tag===3||t.tag===4}function Hv(t){e:{for(var e=t.return;e!==null;){if(Wv(e))break e;e=e.return}throw Error(x(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(x(161))}n.flags&16&&(Oa(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Wv(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Mf(t,n,e):Ff(t,n,e)}function Mf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Ff(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}function s_(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(x(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(qv(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(qv(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Nd(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[ic]=r,t==="input"&&r.type==="radio"&&r.name!=null&&KE(n,r),mf(t,i),e=mf(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?JE(n,a):o==="dangerouslySetInnerHTML"?YE(n,a):o==="children"?Oa(n,a):Qp(n,o,a,e)}switch(t){case"input":uf(n,r);break;case"textarea":GE(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?ms(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?ms(n,!!r.multiple,r.defaultValue,!0):ms(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(x(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,uI(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(Dm=rt(),jv(e.child,!0)),Kv(e);return;case 19:Kv(e);return;case 17:return;case 23:case 24:jv(e,e.memoizedState!==null);return}throw Error(x(163))}function Kv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gN),e.forEach(function(r){var i=AN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wN(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var EN=Math.ceil,yc=$i.ReactCurrentDispatcher,Rm=$i.ReactCurrentOwner,j=0,dt=null,xe=null,it=0,_i=0,$f=Or(0),Ge=0,uh=null,eo=0,bu=0,to=0,xm=0,Uf=null,Dm=0,Vf=1/0;function no(){Vf=rt()+500}var M=null,vc=!1,Bf=null,sn=null,Er=!1,ya=null,Jo=90,jf=[],qf=[],Rn=null,va=0,zf=null,Pl=-1,Sn=0,Ll=0,wa=null,Ml=!1;function Ct(){return(j&48)!==0?rt():Pl!==-1?Pl:Pl=rt()}function dr(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return Os()===99?1:2;if(Sn===0&&(Sn=eo),aN.transition!==0){Ll!==0&&(Ll=Uf!==null?Uf.pendingLanes:0),t=Sn;var e=4186112&~Ll;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Os(),(j&4)!==0&&t===98?t=tc(12,Sn):(t=cC(t),t=tc(t,Sn)),t}function fr(t,e,n){if(50<va)throw va=0,zf=null,Error(x(185));if(t=lh(t,e),t===null)return null;th(t,e,n),t===dt&&(to|=e,Ge===4&&Is(t,it));var r=Os();e===1?(j&8)!==0&&(j&48)===0?Wf(t):(Vt(t,n),j===0&&(no(),In())):((j&4)===0||r!==98&&r!==99||(Rn===null?Rn=new Set([t]):Rn.add(t)),Vt(t,n)),Uf=t}function lh(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Vt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-vr(o),u=1<<a,l=s[a];if(l===-1){if((u&r)===0||(u&i)!==0){l=e,ns(u);var c=se;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=Fa(t,t===dt?it:0),e=se,r===0)n!==null&&(n!==Td&&kf(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Td&&kf(n)}e===15?(n=Wf.bind(null,t),Tn===null?(Tn=[n],Ol=vm(oh,FI)):Tn.push(n),n=Td):e===14?n=Ba(99,Wf.bind(null,t)):(n=hC(e),n=Ba(n,o_.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function o_(t){if(Pl=-1,Ll=Sn=0,(j&48)!==0)throw Error(x(327));var e=t.callbackNode;if(Pr()&&t.callbackNode!==e)return null;var n=Fa(t,t===dt?it:0);if(n===0)return null;var r=n,i=j;j|=16;var s=c_();(dt!==t||it!==r)&&(no(),_s(t,r));do try{TN();break}catch(a){l_(t,a)}while(1);if(wm(),yc.current=s,j=i,xe!==null?r=0:(dt=null,it=0,r=Ge),(eo&to)!==0)_s(t,0);else if(r!==0){if(r===2&&(j|=64,t.hydrate&&(t.hydrate=!1,gm(t.containerInfo)),n=mI(t),n!==0&&(r=Zo(t,n))),r===1)throw e=uh,_s(t,0),Is(t,n),Vt(t,rt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(x(345));case 2:Qr(t);break;case 3:if(Is(t,n),(n&62914560)===n&&(r=Dm+500-rt(),10<r)){if(Fa(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){Ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pv(Qr.bind(null,t),r);break}Qr(t);break;case 4:if(Is(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-vr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=rt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*EN(n/1960))-n,10<n){t.timeoutHandle=pv(Qr.bind(null,t),n);break}Qr(t);break;case 5:Qr(t);break;default:throw Error(x(329))}}return Vt(t,rt()),t.callbackNode===e?o_.bind(null,t):null}function Is(t,e){for(e&=~xm,e&=~to,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vr(e),r=1<<n;t[n]=-1,e&=~r}}function Wf(t){if((j&48)!==0)throw Error(x(327));if(Pr(),t===dt&&(t.expiredLanes&it)!==0){var e=it,n=Zo(t,e);(eo&to)!==0&&(e=Fa(t,e),n=Zo(t,e))}else e=Fa(t,0),n=Zo(t,e);if(t.tag!==0&&n===2&&(j|=64,t.hydrate&&(t.hydrate=!1,gm(t.containerInfo)),e=mI(t),e!==0&&(n=Zo(t,e))),n===1)throw n=uh,_s(t,0),Is(t,e),Vt(t,rt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Qr(t),Vt(t,rt()),null}function IN(){if(Rn!==null){var t=Rn;Rn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Vt(e,rt())})}In()}function a_(t,e){var n=j;j|=1;try{return t(e)}finally{j=n,j===0&&(no(),In())}}function u_(t,e){var n=j;j&=-2,j|=8;try{return t(e)}finally{j=n,j===0&&(no(),In())}}function hl(t,e){we($f,_i),_i|=e,eo|=e}function Om(){_i=$f.current,le($f)}function _s(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tN(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&sc();break;case 3:Ps(),le(_t),le(at),Tm();break;case 5:_m(r);break;case 4:Ps();break;case 13:le(ve);break;case 19:le(ve);break;case 10:Em(r);break;case 23:case 24:Om()}n=n.return}dt=t,xe=Ir(t.current,null),it=_i=eo=e,Ge=0,uh=null,xm=to=bu=0}function l_(t,e){do{var n=xe;try{if(wm(),ma.current=gc,dc){for(var r=ke.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dc=!1}if(Wa=0,He=nt=ke=null,ga=!1,Rm.current=null,n===null||n.return===null){Ge=1,uh=e,xe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=it,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(ve.current&1)!==0,d=o;do{var f;if(f=d.tag===13){var g=d.memoizedState;if(g!==null)f=g.dehydrated!==null;else{var v=d.memoizedProps;f=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!h}}if(f){var m=d.updateQueue;if(m===null){var p=new Set;p.add(l),d.updateQueue=p}else m.add(l);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var y=cr(-1,1);y.tag=2,hr(a,y)}a.lanes|=1;break e}u=void 0,a=e;var E=s.pingCache;if(E===null?(E=s.pingCache=new mN,u=new Set,E.set(l,u)):(u=E.get(l),u===void 0&&(u=new Set,E.set(l,u))),!u.has(a)){u.add(a);var _=NN.bind(null,s,l,a);l.then(_,_)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((ps(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Ge!==5&&(Ge=2),u=Am(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var N=r_(d,s,e);Iv(d,N);break e;case 1:s=u;var w=d.type,S=d.stateNode;if((d.flags&64)===0&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(sn===null||!sn.has(S)))){d.flags|=4096,e&=-e,d.lanes|=e;var R=i_(d,s,e);Iv(d,R);break e}}d=d.return}while(d!==null)}d_(n)}catch(O){e=O,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function c_(){var t=yc.current;return yc.current=gc,t===null?gc:t}function Zo(t,e){var n=j;j|=16;var r=c_();dt===t&&it===e||_s(t,e);do try{_N();break}catch(i){l_(t,i)}while(1);if(wm(),j=n,yc.current=r,xe!==null)throw Error(x(261));return dt=null,it=0,Ge}function _N(){for(;xe!==null;)h_(xe)}function TN(){for(;xe!==null&&!iN();)h_(xe)}function h_(t){var e=p_(t.alternate,t,_i);t.memoizedProps=t.pendingProps,e===null?d_(t):xe=e,Rm.current=null}function d_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=fN(n,e,_i),n!==null){xe=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(_i&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=pN(e),n!==null){n.flags&=2047,xe=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Ge===0&&(Ge=5)}function Qr(t){var e=Os();return Ii(99,SN.bind(null,t,e)),null}function SN(t,e){do Pr();while(ya!==null);if((j&48)!==0)throw Error(x(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-vr(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Rn!==null&&(r&24)===0&&Rn.has(t)&&Rn.delete(t),t===dt&&(xe=dt=null,it=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=j,j|=32,Rm.current=null,Ed=Al,o=av(),If(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,f=0,g=0,v=o,m=null;t:for(;;){for(var p;v!==a||s!==0&&v.nodeType!==3||(h=c+s),v!==u||l!==0&&v.nodeType!==3||(d=c+l),v.nodeType===3&&(c+=v.nodeValue.length),(p=v.firstChild)!==null;)m=v,v=p;for(;;){if(v===o)break t;if(m===a&&++f===s&&(h=c),m===u&&++g===l&&(d=c),(p=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=p}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Id={focusedElem:o,selectionRange:a},Al=!1,wa=null,Ml=!1,M=r;do try{bN()}catch(O){if(M===null)throw Error(x(330));pr(M,O),M=M.nextEffect}while(M!==null);wa=null,M=r;do try{for(o=t;M!==null;){var y=M.flags;if(y&16&&Oa(M.stateNode,""),y&128){var E=M.alternate;if(E!==null){var _=E.ref;_!==null&&(typeof _=="function"?_(null):_.current=null)}}switch(y&1038){case 2:Hv(M),M.flags&=-3;break;case 6:Hv(M),M.flags&=-3,Nd(M.alternate,M);break;case 1024:M.flags&=-1025;break;case 1028:M.flags&=-1025,Nd(M.alternate,M);break;case 4:Nd(M.alternate,M);break;case 8:a=M,s_(o,a);var N=a.alternate;zv(a),N!==null&&zv(N)}M=M.nextEffect}}catch(O){if(M===null)throw Error(x(330));pr(M,O),M=M.nextEffect}while(M!==null);if(_=Id,E=av(),y=_.focusedElem,o=_.selectionRange,E!==y&&y&&y.ownerDocument&&TI(y.ownerDocument.documentElement,y)){for(o!==null&&If(y)&&(E=o.start,_=o.end,_===void 0&&(_=E),"selectionStart"in y?(y.selectionStart=E,y.selectionEnd=Math.min(_,y.value.length)):(_=(E=y.ownerDocument||document)&&E.defaultView||window,_.getSelection&&(_=_.getSelection(),a=y.textContent.length,N=Math.min(o.start,a),o=o.end===void 0?N:Math.min(o.end,a),!_.extend&&N>o&&(a=o,o=N,N=a),a=ov(y,N),s=ov(y,o),a&&s&&(_.rangeCount!==1||_.anchorNode!==a.node||_.anchorOffset!==a.offset||_.focusNode!==s.node||_.focusOffset!==s.offset)&&(E=E.createRange(),E.setStart(a.node,a.offset),_.removeAllRanges(),N>o?(_.addRange(E),_.extend(s.node,s.offset)):(E.setEnd(s.node,s.offset),_.addRange(E)))))),E=[],_=y;_=_.parentNode;)_.nodeType===1&&E.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<E.length;y++)_=E[y],_.element.scrollLeft=_.left,_.element.scrollTop=_.top}Al=!!Ed,Id=Ed=null,t.current=n,M=r;do try{for(y=t;M!==null;){var w=M.flags;if(w&36&&vN(y,M.alternate,M),w&128){E=void 0;var S=M.ref;if(S!==null){var R=M.stateNode;switch(M.tag){case 5:E=R;break;default:E=R}typeof S=="function"?S(E):S.current=E}}M=M.nextEffect}}catch(O){if(M===null)throw Error(x(330));pr(M,O),M=M.nextEffect}while(M!==null);M=null,oN(),j=i}else t.current=n;if(Er)Er=!1,ya=t,Jo=e;else for(M=r;M!==null;)e=M.nextEffect,M.nextEffect=null,M.flags&8&&(w=M,w.sibling=null,w.stateNode=null),M=e;if(r=t.pendingLanes,r===0&&(sn=null),r===1?t===zf?va++:(va=0,zf=t):va=0,n=n.stateNode,pi&&typeof pi.onCommitFiberRoot=="function")try{pi.onCommitFiberRoot(ym,n,void 0,(n.current.flags&64)===64)}catch{}if(Vt(t,rt()),vc)throw vc=!1,t=Bf,Bf=null,t;return(j&8)!==0||In(),null}function bN(){for(;M!==null;){var t=M.alternate;Ml||wa===null||((M.flags&8)!==0?Hy(M,wa)&&(Ml=!0):M.tag===13&&wN(t,M)&&Hy(M,wa)&&(Ml=!0));var e=M.flags;(e&256)!==0&&yN(t,M),(e&512)===0||Er||(Er=!0,Ba(97,function(){return Pr(),null})),M=M.nextEffect}}function Pr(){if(Jo!==90){var t=97<Jo?97:Jo;return Jo=90,Ii(t,CN)}return!1}function kN(t,e){jf.push(e,t),Er||(Er=!0,Ba(97,function(){return Pr(),null}))}function f_(t,e){qf.push(e,t),Er||(Er=!0,Ba(97,function(){return Pr(),null}))}function CN(){if(ya===null)return!1;var t=ya;if(ya=null,(j&48)!==0)throw Error(x(331));var e=j;j|=32;var n=qf;qf=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(x(330));pr(s,u)}}for(n=jf,jf=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(x(330));pr(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return j=e,In(),!0}function Gv(t,e,n){e=Am(n,e),e=r_(t,e,1),hr(t,e),e=Ct(),t=lh(t,1),t!==null&&(th(t,1,e),Vt(t,e))}function pr(t,e){if(t.tag===3)Gv(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Gv(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){t=Am(e,t);var i=i_(n,t,1);if(hr(n,i),i=Ct(),n=lh(n,1),n!==null)th(n,1,i),Vt(n,i);else if(typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function NN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,dt===t&&(it&n)===n&&(Ge===4||Ge===3&&(it&62914560)===it&&500>rt()-Dm?_s(t,0):xm|=n),Vt(t,e)}function AN(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=Os()===99?1:2:(Sn===0&&(Sn=eo),e=rs(62914560&~Sn),e===0&&(e=4194304))),n=Ct(),t=lh(t,e),t!==null&&(th(t,e,n),Vt(t,n))}var p_;p_=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)Ht=!0;else if((n&r)!==0)Ht=(t.flags&16384)!==0;else{switch(Ht=!1,e.tag){case 3:Pv(e),bd();break;case 5:bv(e);break;case 1:Tt(e.type)&&Dl(e);break;case 4:Af(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;we(oc,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?Lv(t,e,n):(we(ve,ve.current&1),e=kn(t,e,n),e!==null?e.sibling:null);we(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return Vv(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(ve,ve.current),r)break;return null;case 23:case 24:return e.lanes=0,kd(t,e,n)}return kn(t,e,n)}else Ht=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Ds(e,at.current),ws(e,n),i=bm(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)){var s=!0;Dl(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Im(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&lc(e,r,o,t),i.updater=ah,e.stateNode=i,i._reactInternals=e,Nf(e,r,t,n),e=Of(null,e,r,!0,s,n)}else e.tag=0,yt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=xN(i),t=zt(i,t),s){case 0:e=Df(null,e,i,t,n);break e;case 1:e=Ov(null,e,i,t,n);break e;case 11:e=xv(null,e,i,t,n);break e;case 14:e=Dv(null,e,i,zt(i.type,t),r,n);break e}throw Error(x(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Df(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ov(t,e,r,i,n);case 3:if(Pv(e),r=e.updateQueue,t===null||r===null)throw Error(x(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,UI(t,e),ja(e,r,null,n),r=e.memoizedState.element,r===i)bd(),e=kn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(rr=vs(e.stateNode.containerInfo.firstChild),bn=e,s=hn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Es.push(s);for(n=qI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else yt(t,e,r,n),bd();e=e.child}return e;case 5:return bv(e),t===null&&Rf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sf(r,i)?o=null:s!==null&&Sf(r,s)&&(e.flags|=16),ZI(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&Rf(e),null;case 13:return Lv(t,e,n);case 4:return Af(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cc(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),xv(t,e,r,i,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(we(oc,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Ot(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!_t.current){e=kn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!==0){a.tag===1&&(l=cr(-1,n&-n),l.tag=2,hr(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),$I(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,ws(e,n),i=Ut(i,s.unstable_observedBits),r=r(i),e.flags|=1,yt(t,e,r,n),e.child;case 14:return i=e.type,s=zt(i,e.pendingProps),s=zt(i.type,s),Dv(t,e,i,s,r,n);case 15:return JI(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Tt(r)?(t=!0,Dl(e)):t=!1,ws(e,n),BI(e,r,i),Nf(e,r,i,n),Of(null,e,r,!0,t,n);case 19:return Vv(t,e,n);case 23:return kd(t,e,n);case 24:return kd(t,e,n)}throw Error(x(156,e.tag))};function RN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,e,n,r){return new RN(t,e,n,r)}function Pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xN(t){if(typeof t=="function")return Pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jc)return 11;if(t===Zc)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yn:return Ts(n.children,i,s,e);case zE:o=8,i|=16;break;case Yp:o=8,i|=1;break;case ua:return t=Pt(12,n,e,i|8),t.elementType=ua,t.type=ua,t.lanes=s,t;case la:return t=Pt(13,n,e,i),t.type=la,t.elementType=la,t.lanes=s,t;case Xl:return t=Pt(19,n,e,i),t.elementType=Xl,t.lanes=s,t;case nm:return Lm(n,i,s,e);case of:return t=Pt(24,n,e,i),t.elementType=of,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xp:o=10;break e;case Jp:o=9;break e;case Jc:o=11;break e;case Zc:o=14;break e;case Zp:o=16,r=null;break e;case em:o=22;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ts(t,e,n,r){return t=Pt(7,t,r,e),t.lanes=n,t}function Lm(t,e,n,r){return t=Pt(23,t,r,e),t.elementType=nm,t.lanes=n,t}function Ad(t,e,n){return t=Pt(6,t,null,e),t.lanes=n,t}function Rd(t,e,n){return e=Pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DN(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=fd(0),this.expirationTimes=fd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fd(0),this.mutableSourceEagerHydrationData=null}function ON(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wc(t,e,n,r){var i=e.current,s=Ct(),o=dr(i);e:if(n){n=n._reactInternals;t:{if(Ui(n)!==n||n.tag!==1)throw Error(x(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Tt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(x(171))}if(n.tag===1){var u=n.type;if(Tt(u)){n=xI(n,u,a);break e}}n=a}else n=wr;return e.context===null?e.context=n:e.pendingContext=n,e=cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),hr(i,e),fr(i,o,s),o}function xd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mm(t,e){Qv(t,e),(t=t.alternate)&&Qv(t,e)}function PN(){return null}function Fm(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new DN(t,e,n!=null&&n.hydrate===!0),e=Pt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Im(e),t[Zs]=n.current,kI(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Fm.prototype.render=function(t){wc(t,this._internalRoot,null,null)};Fm.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;wc(null,t,null,function(){e[Zs]=null})};function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function LN(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Fm(t,0,e?{hydrate:!0}:void 0)}function ch(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=xd(o);a.call(l)}}wc(e,o,t,i)}else{if(s=n._reactRootContainer=LN(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=xd(o);u.call(l)}}u_(function(){wc(e,o,t,i)})}return xd(o)}sI=function(t){if(t.tag===13){var e=Ct();fr(t,4,e),Mm(t,4)}};am=function(t){if(t.tag===13){var e=Ct();fr(t,67108864,e),Mm(t,67108864)}};oI=function(t){if(t.tag===13){var e=Ct(),n=dr(t);fr(t,n,e),Mm(t,n)}};aI=function(t,e){return e()};gf=function(t,e,n){switch(e){case"input":if(uf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sh(r);if(!i)throw Error(x(90));HE(r),uf(r,i)}}}break;case"textarea":GE(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};im=a_;tI=function(t,e,n,r,i){var s=j;j|=4;try{return Ii(98,t.bind(null,e,n,r,i))}finally{j=s,j===0&&(no(),In())}};sm=function(){(j&49)===0&&(IN(),Pr())};nI=function(t,e){var n=j;j|=2;try{return t(e)}finally{j=n,j===0&&(no(),In())}};function m_(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(e))throw Error(x(200));return ON(t,e,null,n)}var MN={Events:[Tu,us,sh,ZE,eI,Pr,{current:!1}]},Lo={findFiberByHostInstance:si,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},FN={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iI(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||PN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{ym=dl.inject(FN),pi=dl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MN;jt.createPortal=m_;jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):Error(x(268,Object.keys(t)));return t=iI(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t,e){var n=j;if((n&48)!==0)return t(e);j|=1;try{if(t)return Ii(99,t.bind(null,e))}finally{j=n,In()}};jt.hydrate=function(t,e,n){if(!ku(e))throw Error(x(200));return ch(null,t,e,!0,n)};jt.render=function(t,e,n){if(!ku(e))throw Error(x(200));return ch(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!ku(t))throw Error(x(40));return t._reactRootContainer?(u_(function(){ch(null,null,t,!1,function(){t._reactRootContainer=null,t[Zs]=null})}),!0):!1};jt.unstable_batchedUpdates=a_;jt.unstable_createPortal=function(t,e){return m_(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return ch(t,e,n,!1,r)};jt.version="17.0.2";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=jt})(Hp);const $N=kE(Hp.exports),UN="modulepreload",VN=function(t){return"/"+t},Yv={},$m=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=VN(s),s in Yv)return;Yv[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":UN,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((c,h)=>{l.addEventListener("load",c),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},y_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jN=function(t){const e=g_(t);return y_.encodeByteArray(e,!0)},Ec=function(t){return jN(t).replace(/\./g,"")},v_=function(t){try{return y_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ic(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qN(n)||(t[n]=Ic(t[n],e[n]));return t}function qN(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Um(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WN(){return typeof self=="object"&&self.self===self}function w_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E_(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function HN(){return!Um()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ha(){return typeof indexedDB=="object"}function KN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function GN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN=()=>GN().__FIREBASE_DEFAULTS__,YN=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},XN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&v_(t[1]);return e&&JSON.parse(e)},I_=()=>{try{return QN()||YN()||XN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},JN=()=>{var t;return(t=I_())===null||t===void 0?void 0:t.config},ZN=t=>{var e;return(e=I_())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ec(JSON.stringify(n)),Ec(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="FirebaseError";class ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nA,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ft(i,a,r)}}function rA(t,e){return t.replace(iA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jv(s)&&Jv(o)){if(!Hf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ea(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function __(t,e){const n=new oA(t,e);return n.subscribe.bind(n)}class oA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Dd),i.error===void 0&&(i.error=Dd),i.complete===void 0&&(i.complete=Dd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cA(e))try{this.getOrInitializeService({instanceIdentifier:Yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yr){return this.instances.has(e)}getOptions(e=Yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yr){return this.component?this.component.multipleInstances?e:Yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lA(t){return t===Yr?void 0:t}function cA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=[];var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const T_={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},dA=Z.INFO,fA={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},pA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=dA,this._logHandler=pA,this._userLogHandler=null,Bm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}function mA(t){Bm.forEach(e=>{e.setLogLevel(t)})}function gA(t,e){for(const n of Bm){let r=null;e&&e.level&&(r=T_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:Z[s].toLowerCase(),message:a,args:o,type:i.name})}}}const yA=(t,e)=>e.some(n=>t instanceof n);let Zv,ew;function vA(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wA(){return ew||(ew=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,Kf=new WeakMap,b_=new WeakMap,Od=new WeakMap,jm=new WeakMap;function EA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S_.set(n,t)}).catch(()=>{}),jm.set(e,t),e}function IA(t){if(Kf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kf.set(t,e)}let Gf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||b_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _A(t){Gf=t(Gf)}function TA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pd(this),e,...n);return b_.set(r,e.sort?e.sort():[e]),mr(r)}:wA().includes(t)?function(...e){return t.apply(Pd(this),e),mr(S_.get(this))}:function(...e){return mr(t.apply(Pd(this),e))}}function SA(t){return typeof t=="function"?TA(t):(t instanceof IDBTransaction&&IA(t),yA(t,vA())?new Proxy(t,Gf):t)}function mr(t){if(t instanceof IDBRequest)return EA(t);if(Od.has(t))return Od.get(t);const e=SA(t);return e!==t&&(Od.set(t,e),jm.set(e,t)),e}const Pd=t=>jm.get(t);function bA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const kA=["get","getKey","getAll","getAllKeys","count"],CA=["put","add","delete","clear"],Ld=new Map;function tw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ld.get(e))return Ld.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kA.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Ld.set(e,s),s}_A(t=>({...t,get:(e,n,r)=>tw(e,n)||t.get(e,n,r),has:(e,n)=>!!tw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qf="@firebase/app",nw="0.8.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=new hh("@firebase/app"),RA="@firebase/app-compat",xA="@firebase/analytics-compat",DA="@firebase/analytics",OA="@firebase/app-check-compat",PA="@firebase/app-check",LA="@firebase/auth",MA="@firebase/auth-compat",FA="@firebase/database",$A="@firebase/database-compat",UA="@firebase/functions",VA="@firebase/functions-compat",BA="@firebase/installations",jA="@firebase/installations-compat",qA="@firebase/messaging",zA="@firebase/messaging-compat",WA="@firebase/performance",HA="@firebase/performance-compat",KA="@firebase/remote-config",GA="@firebase/remote-config-compat",QA="@firebase/storage",YA="@firebase/storage-compat",XA="@firebase/firestore",JA="@firebase/firestore-compat",ZA="firebase",eR="9.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]",tR={[Qf]:"fire-core",[RA]:"fire-core-compat",[DA]:"fire-analytics",[xA]:"fire-analytics-compat",[PA]:"fire-app-check",[OA]:"fire-app-check-compat",[LA]:"fire-auth",[MA]:"fire-auth-compat",[FA]:"fire-rtdb",[$A]:"fire-rtdb-compat",[UA]:"fire-fn",[VA]:"fire-fn-compat",[BA]:"fire-iid",[jA]:"fire-iid-compat",[qA]:"fire-fcm",[zA]:"fire-fcm-compat",[WA]:"fire-perf",[HA]:"fire-perf-compat",[KA]:"fire-rc",[GA]:"fire-rc-compat",[QA]:"fire-gcs",[YA]:"fire-gcs-compat",[XA]:"fire-fst",[JA]:"fire-fst-compat","fire-js":"fire-js",[ZA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,Ka=new Map;function _c(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function k_(t,e){t.container.addOrOverwriteComponent(e)}function Sr(t){const e=t.name;if(Ka.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,t);for(const n of Tr.values())_c(n,t);return!0}function C_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nR(t,e,n=_r){C_(t,e).clearInstance(n)}function rR(){Ka.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xn=new Bi("app","Firebase",iR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=eR;function qm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_r,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xn.create("bad-app-name",{appName:String(i)});if(n||(n=JN()),!n)throw xn.create("no-options");const s=Tr.get(i);if(s){if(Hf(n,s.options)&&Hf(r,s.config))return s;throw xn.create("duplicate-app",{appName:i})}const o=new hA(i);for(const u of Ka.values())o.addComponent(u);const a=new sR(n,r,o);return Tr.set(i,a),a}function oR(t=_r){const e=Tr.get(t);if(!e&&t===_r)return qm();if(!e)throw xn.create("no-app",{appName:t});return e}function aR(){return Array.from(Tr.values())}async function N_(t){const e=t.name;Tr.has(e)&&(Tr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function dn(t,e,n){var r;let i=(r=tR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}Sr(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function A_(t,e){if(t!==null&&typeof t!="function")throw xn.create("invalid-log-argument");gA(t,e)}function R_(t){mA(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="firebase-heartbeat-database",lR=1,Ga="firebase-heartbeat-store";let Md=null;function x_(){return Md||(Md=bA(uR,lR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ga)}}}).catch(t=>{throw xn.create("idb-open",{originalErrorMessage:t.message})})),Md}async function cR(t){var e;try{return(await x_()).transaction(Ga).objectStore(Ga).get(D_(t))}catch(n){if(n instanceof ft)Ti.warn(n.message);else{const r=xn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ti.warn(r.message)}}}async function rw(t,e){var n;try{const i=(await x_()).transaction(Ga,"readwrite");return await i.objectStore(Ga).put(e,D_(t)),i.done}catch(r){if(r instanceof ft)Ti.warn(r.message);else{const i=xn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ti.warn(i.message)}}}function D_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=1024,dR=30*24*60*60*1e3;class fR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=dR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iw(),{heartbeatsToSend:n,unsentEntries:r}=pR(this._heartbeatsCache.heartbeats),i=Ec(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iw(){return new Date().toISOString().substring(0,10)}function pR(t,e=hR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ha()?KN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sw(t){return Ec(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){Sr(new gn("platform-logger",e=>new NA(e),"PRIVATE")),Sr(new gn("heartbeat",e=>new fR(e),"PRIVATE")),dn(Qf,nw,t),dn(Qf,nw,"esm2017"),dn("fire-js","")}gR("");const yR=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:ji,_DEFAULT_ENTRY_NAME:_r,_addComponent:_c,_addOrOverwriteComponent:k_,_apps:Tr,_clearComponents:rR,_components:Ka,_getProvider:C_,_registerComponent:Sr,_removeServiceInstance:nR,deleteApp:N_,getApp:oR,getApps:aR,initializeApp:qm,onLog:A_,registerVersion:dn,setLogLevel:R_,FirebaseError:ft},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this._delegate=e,this.firebase=n,_c(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),N_(this._delegate)))}_getService(e,n=_r){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=_r){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){_c(this._delegate,e)}_addOrOverwriteComponent(e){k_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ow=new Bi("app-compat","Firebase",wR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:dn,setLogLevel:R_,onLog:A_,apps:null,SDK_VERSION:ji,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:yR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||_r,!Xv(e,l))throw ow.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=qm(l,c);if(Xv(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(Sr(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw ow.create("invalid-app-argument",{appName:c});return f[h]()};l.serviceProps!==void 0&&Ic(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){const t=ER(vR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:O_,extendNamespace:e,createSubscribe:__,ErrorFactory:Bi,deepExtend:Ic});function e(n){Ic(t,n)}return t}const IR=O_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aw=new hh("@firebase/app-compat"),_R="@firebase/app-compat",TR="0.1.38";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t){dn(_R,TR,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(WN()&&self.firebase!==void 0){aw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&aw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const io=IR;SR();var bR="firebase",kR="9.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */io.registerVersion(bR,kR,"app-compat");function zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Mo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ji={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function P_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NR=CR,AR=P_,L_=new Bi("auth","Firebase",P_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new hh("@firebase/auth");function $l(t,...e){uw.logLevel<=Z.ERROR&&uw.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw Wm(t,...e)}function Xe(t,...e){return Wm(t,...e)}function M_(t,e,n){const r=Object.assign(Object.assign({},AR()),{[e]:n});return new Bi("auth","Firebase",r).create(e,{appName:t.name})}function so(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&et(t,"argument-error"),M_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function A(t,e,...n){if(!t)throw Wm(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $l(e),new Error(e)}function Qt(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new Map;function kt(t){Qt(t instanceof Function,"Expected a class definition");let e=lw.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lw.set(t,e),e)}function RR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hm(){return cw()==="http:"||cw()==="https:"}function cw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hm()||w_()||"connection"in navigator)?navigator.onLine:!0}function DR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=zN()||Vm()}get(){return xR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PR=new Cu(3e4,6e4);function Oe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function je(t,e,n,r,i={}){return $_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ro(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),F_.fetch()(U_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function $_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OR),e);try{const i=new LR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ta(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ta(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ta(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw M_(t,c,l);et(t,c)}}catch(i){if(i instanceof ft)throw i;et(t,"network-request-failed")}}async function Un(t,e,n,r,i={}){const s=await je(t,e,n,r,i);return"mfaPendingCredential"in s&&et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Km(t.config,i):`${t.config.apiScheme}://${i}`}class LR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),PR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(t,e){return je(t,"POST","/v1/accounts:delete",e)}async function FR(t,e){return je(t,"POST","/v1/accounts:update",e)}async function $R(t,e){return je(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UR(t,e=!1){const n=U(t),r=await n.getIdToken(e),i=dh(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ea(Fd(i.auth_time)),issuedAtTime:Ea(Fd(i.iat)),expirationTime:Ea(Fd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fd(t){return Number(t)*1e3}function dh(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return $l("JWT malformed, contained fewer than 3 sections"),null;try{const s=v_(r);return s?JSON.parse(s):($l("Failed to decode base64 JWT payload"),null)}catch(s){return $l("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function VR(t){const e=dh(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ft&&BR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ea(this.lastLoginAt),this.creationTime=Ea(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ln(t,$R(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?WR(s.providerUserInfo):[],a=zR(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function qR(t){const e=U(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function WR(t){return t.map(e=>{var{providerId:n}=e,r=zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){const n=await $_(t,{},async()=>{const r=ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):VR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await HR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Xa;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xa,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ln(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UR(this,e)}reload(){return qR(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ln(this,MR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:E,emailVerified:_,isAnonymous:N,providerData:w,stsTokenManager:S}=n;A(E&&S,e,"internal-error");const R=Xa.fromJSON(this.name,S);A(typeof E=="string",e,"internal-error"),Wn(h,e.name),Wn(d,e.name),A(typeof _=="boolean",e,"internal-error"),A(typeof N=="boolean",e,"internal-error"),Wn(f,e.name),Wn(g,e.name),Wn(v,e.name),Wn(m,e.name),Wn(p,e.name),Wn(y,e.name);const O=new mi({uid:E,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:N,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:R,createdAt:p,lastLoginAt:y});return w&&Array.isArray(w)&&(O.providerData=w.map(G=>Object.assign({},G))),m&&(O._redirectEventId=m),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new Xa;i.updateFromServerResponse(n);const s=new mi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ya(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B_.type="NONE";const Ls=B_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gi(this.userKey,i.apiKey,s),this.fullPersistenceKey=gi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ss(kt(Ls),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||kt(Ls);const o=gi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=mi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ss(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ss(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if(H_(e))return"Webos";if(Gm(e))return"Safari";if((e.includes("chrome/")||q_(e))&&!e.includes("edge/"))return"Chrome";if(Nu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j_(t=me()){return/firefox\//i.test(t)}function Gm(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function q_(t=me()){return/crios\//i.test(t)}function z_(t=me()){return/iemobile/i.test(t)}function Nu(t=me()){return/android/i.test(t)}function W_(t=me()){return/blackberry/i.test(t)}function H_(t=me()){return/webos/i.test(t)}function oo(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KR(t=me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function GR(t=me()){var e;return oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QR(){return E_()&&document.documentMode===10}function K_(t=me()){return oo(t)||Nu(t)||H_(t)||W_(t)||/windows phone/i.test(t)||z_(t)}function YR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e=[]){let n;switch(t){case"Browser":n=hw(me());break;case"Worker":n=`${hw(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dw(this),this.idTokenSubscription=new dw(this),this.beforeStateQueue=new XR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ya(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?U(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Ss.create(this,[kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return A(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ve(t){return U(t)}class dw{constructor(e){this.auth=e,this.observer=null,this.addObserver=__(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ZR(t,e,n){const r=Ve(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Q_(e),{host:o,port:a}=ex(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tx()}function Q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ex(t){const e=Q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:fw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:fw(o)}}}function fw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(t,e){return je(t,"POST","/v1/accounts:resetPassword",Oe(t,e))}async function X_(t,e){return je(t,"POST","/v1/accounts:update",e)}async function nx(t,e){return je(t,"POST","/v1/accounts:update",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rx(t,e){return Un(t,"POST","/v1/accounts:signInWithPassword",Oe(t,e))}async function fh(t,e){return je(t,"POST","/v1/accounts:sendOobCode",Oe(t,e))}async function ix(t,e){return fh(t,e)}async function sx(t,e){return fh(t,e)}async function ox(t,e){return fh(t,e)}async function ax(t,e){return fh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ux(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Oe(t,e))}async function lx(t,e){return Un(t,"POST","/v1/accounts:signInWithEmailLink",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends ao{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return rx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ux(e,{email:this._email,oobCode:this._password});default:et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return X_(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lx(e,{idToken:n,email:this._email,oobCode:this._password});default:et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e){return Un(t,"POST","/v1/accounts:signInWithIdp",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="http://localhost";class yn extends ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}buildRequest(){const e={requestUri:cx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(t,e){return je(t,"POST","/v1/accounts:sendVerificationCode",Oe(t,e))}async function dx(t,e){return Un(t,"POST","/v1/accounts:signInWithPhoneNumber",Oe(t,e))}async function fx(t,e){const n=await Un(t,"POST","/v1/accounts:signInWithPhoneNumber",Oe(t,e));if(n.temporaryProof)throw ta(t,"account-exists-with-different-credential",n);return n}const px={USER_NOT_FOUND:"user-not-found"};async function mx(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Un(t,"POST","/v1/accounts:signInWithPhoneNumber",Oe(t,n),px)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends ao{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new yi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new yi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return dx(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return fx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return mx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new yi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yx(t){const e=hs(ea(t)).link,n=e?hs(ea(e)).deep_link_id:null,r=hs(ea(t)).deep_link_id;return(r?hs(ea(r)).link:null)||r||n||e||t}class ph{constructor(e){var n,r,i,s,o,a;const u=hs(ea(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=gx((i=u.mode)!==null&&i!==void 0?i:null);A(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yx(e);try{return new ph(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.providerId=Lr.PROVIDER_ID}static credential(e,n){return Ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ph.parseLink(n);return A(r,"argument-error"),Ja._fromEmailAndCode(e,r.code,r.tenantId)}}Lr.PROVIDER_ID="password";Lr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Vn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bs extends uo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return A("providerId"in n&&"signInMethod"in n,"argument-error"),yn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),yn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return bs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new bs(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends uo{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Jt.credential(n,r)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends uo{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zt.credential(e.oauthAccessToken)}catch{return null}}}Zt.GITHUB_SIGN_IN_METHOD="github.com";Zt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="http://localhost";class Ms extends ao{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Dn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ms(r,s)}static _create(e,n){return new Ms(e,n)}buildRequest(){return{requestUri:vx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="saml.";class Tc extends Vn{constructor(e){A(e.startsWith(wx),"argument-error"),super(e)}static credentialFromResult(e){return Tc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Tc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ms.fromJSON(e);return A(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ms._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends uo{constructor(){super("twitter.com")}static credential(e,n){return yn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return en.credential(n,r)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J_(t,e){return Un(t,"POST","/v1/accounts:signUp",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await mi._fromIdTokenResponse(e,r,i),o=pw(r);return new Bt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pw(r);return new Bt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(t){var e;const n=Ve(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Bt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await J_(n,{returnSecureToken:!0}),i=await Bt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends ft{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sc(e,n,r,i)}}function Z_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ix(t,e){const n=U(t);await mh(!0,n,e);const{providerUserInfo:r}=await FR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=eT(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Qm(t,e,n=!1){const r=await Ln(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}async function mh(t,e,n){await Ya(e);const r=eT(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";A(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Ln(t,Z_(i,s,e,t),n);A(o.idToken,i,"internal-error");const a=dh(o.idToken);A(a,i,"internal-error");const{sub:u}=a;return A(t.uid===u,i,"user-mismatch"),Bt._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&et(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e,n=!1){const r="signIn",i=await Z_(t,r,e),s=await Bt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gh(t,e){return nT(Ve(t),e)}async function rT(t,e){const n=U(t);return await mh(!1,n,e.providerId),Qm(n,e)}async function iT(t,e){return tT(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _x(t,e){return Un(t,"POST","/v1/accounts:signInWithCustomToken",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e){const n=Ve(t),r=await _x(n,{token:e,returnSecureToken:!0}),i=await Bt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ym._fromServerResponse(e,n):et(e,"internal-error")}}class Ym extends yh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ym(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e,n){var r;A(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),A(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(A(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(A(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e,n){const r=U(t),i={requestType:"PASSWORD_RESET",email:e};n&&vh(r,i,n),await sx(r,i)}async function bx(t,e,n){await Y_(U(t),{oobCode:e,newPassword:n})}async function kx(t,e){await nx(U(t),{oobCode:e})}async function sT(t,e){const n=U(t),r=await Y_(n,{oobCode:e}),i=r.requestType;switch(A(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,n,"internal-error");default:A(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=yh._fromServerResponse(Ve(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Cx(t,e){const{data:n}=await sT(U(t),e);return n.email}async function Nx(t,e,n){const r=Ve(t),i=await J_(r,{returnSecureToken:!0,email:e,password:n}),s=await Bt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Ax(t,e,n){return gh(U(t),Lr.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(t,e,n){const r=U(t),i={requestType:"EMAIL_SIGNIN",email:e};A(n.handleCodeInApp,r,"argument-error"),n&&vh(r,i,n),await ox(r,i)}function xx(t,e){const n=ph.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Dx(t,e,n){const r=U(t),i=Lr.credentialWithLink(e,n||Qa());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),gh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e){return je(t,"POST","/v1/accounts:createAuthUri",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e){const n=Hm()?Qa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Ox(U(t),r);return i||[]}async function Lx(t,e){const n=U(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&vh(n.auth,i,e);const{email:s}=await ix(n.auth,i);s!==t.email&&await t.reload()}async function Mx(t,e,n){const r=U(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&vh(r.auth,s,n);const{email:o}=await ax(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e){return je(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=U(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ln(r,Fx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Ux(t,e){return oT(U(t),e,null)}function Vx(t,e){return oT(U(t),null,e)}async function oT(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Ln(t,X_(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=dh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ks(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new jx(s,i);case"github.com":return new qx(s,i);case"google.com":return new zx(s,i);case"twitter.com":return new Wx(s,i,t.screenName||null);case"custom":case"anonymous":return new ks(s,null);default:return new ks(s,r,i)}}class ks{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class aT extends ks{constructor(e,n,r,i){super(e,n,r),this.username=i}}class jx extends ks{constructor(e,n){super(e,"facebook.com",n)}}class qx extends aT{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class zx extends ks{constructor(e,n){super(e,"google.com",n)}}class Wx extends aT{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Hx(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Bx(n)}class ui{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new ui("enroll",e,n)}static _fromMfaPendingCredential(e){return new ui("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ui._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return ui._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Ve(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>yh._fromServerResponse(r,a));A(i.mfaPendingCredential,r,"internal-error");const o=ui._fromMfaPendingCredential(i.mfaPendingCredential);return new Xm(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await Bt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return A(n.user,r,"internal-error"),Bt._forOperation(n.user,n.operationType,l);default:et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function Kx(t,e){var n;const r=U(t),i=e;return A(e.customData.operationType,r,"argument-error"),A((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Xm._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:start",Oe(t,e))}function Qx(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:finalize",Oe(t,e))}function Yx(t,e){return je(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Oe(t,e))}class Jm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>yh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Jm(e)}async getSession(){return ui._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Ln(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await Ln(this.user,Yx(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const $d=new WeakMap;function Xx(t){const e=U(t);return $d.has(e)||$d.set(e,Jm._fromUser(e)),$d.get(e)}const bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(){const t=me();return Gm(t)||oo(t)}const Zx=1e3,eD=10;class lT extends uT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jx()&&YR(),this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);QR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,eD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lT.type="LOCAL";const Zm=lT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends uT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cT.type="SESSION";const Si=cT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await tD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Au("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return window}function rD(t){Re().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function iD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oD(){return eg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="firebaseLocalStorageDb",aD=1,kc="firebaseLocalStorage",dT="fbase_key";class Ru{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eh(t,e){return t.transaction([kc],e?"readwrite":"readonly").objectStore(kc)}function uD(){const t=indexedDB.deleteDatabase(hT);return new Ru(t).toPromise()}function Yf(){const t=indexedDB.open(hT,aD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kc,{keyPath:dT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kc)?e(r):(r.close(),await uD(),e(await Yf()))})})}async function mw(t,e,n){const r=Eh(t,!0).put({[dT]:e,value:n});return new Ru(r).toPromise()}async function lD(t,e){const n=Eh(t,!1).get(e),r=await new Ru(n).toPromise();return r===void 0?null:r.value}function gw(t,e){const n=Eh(t,!0).delete(e);return new Ru(n).toPromise()}const cD=800,hD=3;class fT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(oD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iD(),!this.activeServiceWorker)return;this.sender=new nD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yf();return await mw(e,bc,"1"),await gw(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Eh(i,!1).getAll();return new Ru(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fT.type="LOCAL";const Za=fT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dD(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:start",Oe(t,e))}function fD(t,e){return je(t,"POST","/v2/accounts/mfaSignIn:finalize",Oe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pD(t){return(await je(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mD().appendChild(r)})}function mT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gD=500,yD=6e4,fl=1e12;class vD{constructor(e){this.auth=e,this.counter=fl,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new wD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||fl;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||fl;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||fl;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class wD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;A(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ED(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},yD)},gD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ED(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=mT("rcb"),ID=new Cu(3e4,6e4),_D="https://www.google.com/recaptcha/api.js?";class TD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Re().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return A(SD(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(Re().grecaptcha):new Promise((r,i)=>{const s=Re().setTimeout(()=>{i(Xe(e,"network-request-failed"))},ID.get());Re()[Ud]=()=>{Re().clearTimeout(s),delete Re()[Ud];const a=Re().grecaptcha;if(!a){i(Xe(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${_D}?${ro({onload:Ud,render:"explicit",hl:n})}`;pT(o).catch(()=>{clearTimeout(s),i(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Re().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function SD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class bD{async load(e){return new vD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="recaptcha",kD={theme:"light",type:"image"};class CD{constructor(e,n=Object.assign({},kD),r){this.parameters=n,this.type=gT,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Ve(r),this.isInvisible=this.parameters.size==="invisible",A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;A(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new bD:new TD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Re()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(Hm()&&!eg(),this.auth,"internal-error"),await ND(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pD(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ND(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=yi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function AD(t,e,n){const r=Ve(t),i=await Ih(r,e,U(n));return new tg(i,s=>gh(r,s))}async function RD(t,e,n){const r=U(t);await mh(!1,r,"phone");const i=await Ih(r.auth,e,U(n));return new tg(i,s=>rT(r,s))}async function xD(t,e,n){const r=U(t),i=await Ih(r.auth,e,U(n));return new tg(i,s=>iT(r,s))}async function Ih(t,e,n){var r;const i=await n.verify();try{A(typeof i=="string",t,"argument-error"),A(n.type===gT,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return A(o.type==="enroll",t,"internal-error"),(await Gx(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{A(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return A(a,t,"missing-multi-factor-info"),(await dD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await hx(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function DD(t,e){await Qm(U(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.providerId=Gt.PROVIDER_ID,this.auth=Ve(e)}verifyPhoneNumber(e,n){return Ih(this.auth,e,U(n))}static credential(e,n){return yi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Gt.credentialFromTaggedObject(n)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?yi._fromTokenResponse(n,r):null}}Gt.PROVIDER_ID="phone";Gt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){return e?kt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OD(t){return nT(t.auth,new ng(t),t.bypassAuthState)}function PD(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),tT(n,new ng(t),t.bypassAuthState)}async function LD(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Qm(n,new ng(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OD;case"linkViaPopup":case"linkViaRedirect":return LD;case"reauthViaPopup":case"reauthViaRedirect":return PD;default:et(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD=new Cu(2e3,1e4);async function FD(t,e,n){const r=Ve(t);so(t,e,Vn);const i=qi(r,n);return new Cn(r,"signInViaPopup",e,i).executeNotNull()}async function $D(t,e,n){const r=U(t);so(r.auth,e,Vn);const i=qi(r.auth,n);return new Cn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function UD(t,e,n){const r=U(t);so(r.auth,e,Vn);const i=qi(r.auth,n);return new Cn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Cn extends yT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MD.get())};e()}}Cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD="pendingRedirect",Ia=new Map;class BD extends yT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ia.get(this.auth._key());if(!e){try{const r=await jD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ia.set(this.auth._key(),e)}return this.bypassAuthState||Ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jD(t,e){const n=wT(e),r=vT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function rg(t,e){return vT(t)._set(wT(e),"true")}function qD(){Ia.clear()}function ig(t,e){Ia.set(t._key(),e)}function vT(t){return kt(t._redirectPersistence)}function wT(t){return gi(VD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t,e,n){return WD(t,e,n)}async function WD(t,e,n){const r=Ve(t);so(t,e,Vn);const i=qi(r,n);return await rg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function HD(t,e,n){return KD(t,e,n)}async function KD(t,e,n){const r=U(t);so(r.auth,e,Vn);const i=qi(r.auth,n);await rg(i,r.auth);const s=await ET(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function GD(t,e,n){return QD(t,e,n)}async function QD(t,e,n){const r=U(t);so(r.auth,e,Vn);const i=qi(r.auth,n);await mh(!1,r,e.providerId),await rg(i,r.auth);const s=await ET(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function YD(t,e){return await Ve(t)._initializationPromise,_h(t,e,!1)}async function _h(t,e,n=!1){const r=Ve(t),i=qi(r,e),o=await new BD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function ET(t){const e=Au(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=10*60*1e3;class IT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_T(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XD&&this.cachedEventUids.clear(),this.cachedEventUids.has(yw(e))}saveEventToCache(e){this.cachedEventUids.add(yw(e)),this.lastProcessedEventTime=Date.now()}}function yw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _T({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _T(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(t,e={}){return je(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eO=/^https?/;async function tO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TT(t);for(const n of e)try{if(nO(n))return}catch{}et(t,"unauthorized-domain")}function nO(t){const e=Qa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eO.test(n))return!1;if(ZD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=new Cu(3e4,6e4);function vw(){const t=Re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iO(t){return new Promise((e,n)=>{var r,i,s;function o(){vw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vw(),n(Xe(t,"network-request-failed"))},timeout:rO.get()})}if(!((i=(r=Re().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Re().gapi)===null||s===void 0)&&s.load)o();else{const a=mT("iframefcb");return Re()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},pT(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Ul=null,e})}let Ul=null;function sO(t){return Ul=Ul||iO(t),Ul}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new Cu(5e3,15e3),aO="__/auth/iframe",uO="emulator/auth/iframe",lO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hO(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Km(e,uO):`https://${t.config.authDomain}/${aO}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=cO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ro(r).slice(1)}`}async function dO(t){const e=await sO(t),n=Re().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:hO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},oO.get());function u(){Re().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pO=500,mO=600,gO="_blank",yO="http://localhost";class ww{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vO(t,e,n,r=pO,i=mO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},fO),{width:r.toString(),height:i.toString(),top:s,left:o}),l=me().toLowerCase();n&&(a=q_(l)?gO:n),j_(l)&&(e=e||yO,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(GR(l)&&a!=="_self")return wO(e||"",a),new ww(null);const h=window.open(e||"",a,c);A(h,t,"popup-blocked");try{h.focus()}catch{}return new ww(h)}function wO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="__/auth/handler",IO="emulator/auth/handler";function Xf(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof Vn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof uo){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${_O(t)}?${ro(a).slice(1)}`}function _O({config:t}){return t.emulator?Km(t,IO):`https://${t.authDomain}/${EO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="webStorageSupport";class TO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Si,this._completeRedirectFn=_h,this._overrideRedirectResult=ig}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Xf(e,n,r,Qa(),i);return vO(e,o,Au())}async _openRedirect(e,n,r,i){return await this._originValidation(e),rD(Xf(e,n,r,Qa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dO(e),r=new IT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vd,{type:Vd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vd];o!==void 0&&n(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||Gm()||oo()}}const SO=TO;class bO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return on("unexpected MultiFactorSessionType")}}}class sg extends bO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new sg(e)}_finalizeEnroll(e,n,r){return Qx(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return fD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ST{constructor(){}static assertion(e){return sg._fromCredential(e)}}ST.FACTOR_ID="phone";var Ew="@firebase/auth",Iw="0.20.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function NO(t){Sr(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{A(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),A(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(t)},c=new JR(a,u,l);return RR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sr(new gn("auth-internal",e=>{const n=Ve(e.getProvider("auth").getImmediate());return(r=>new kO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Ew,Iw,CO(t)),dn(Ew,Iw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=5*60;ZN("authIdTokenMaxAge");NO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO=2e3;async function xO(t,e,n){var r;const{BuildInfo:i}=bi();Qt(e.sessionId,"AuthEvent did not contain a session ID");const s=await MO(e.sessionId),o={};return oo()?o.ibi=i.packageName:Nu()?o.apn=i.packageName:et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Xf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function DO(t){const{BuildInfo:e}=bi(),n={};oo()?n.iosBundleId=e.packageName:Nu()?n.androidPackageName=e.packageName:et(t,"operation-not-supported-in-this-environment"),await TT(t,n)}function OO(t){const{cordova:e}=bi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,KR()?"_blank":"_system","location=yes"),n(i)})})}async function PO(t,e,n){const{cordova:r}=bi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Xe(t,"redirect-cancelled-by-user"))},RO))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Nu()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function LO(t){var e,n,r,i,s,o,a,u,l,c;const h=bi();A(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function MO(t){const e=FO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function FO(t){if(Qt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O=20;class UO extends IT{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function VO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qO(),postBody:null,tenantId:t.tenantId,error:Xe(t,"no-auth-event")}}function BO(t,e){return Jf()._set(Zf(t),e)}async function _w(t){const e=await Jf()._get(Zf(t));return e&&await Jf()._remove(Zf(t)),e}function jO(t,e){var n,r;const i=WO(e);if(i.includes("/__/auth/callback")){const s=Vl(i),o=s.firebaseError?zO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Xe(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function qO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<$O;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Jf(){return kt(Zm)}function Zf(t){return gi("authEvent",t.config.apiKey,t.name)}function zO(t){try{return JSON.parse(t)}catch{return null}}function WO(t){const e=Vl(t),n=e.link?decodeURIComponent(e.link):void 0,r=Vl(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Vl(i).link||i||r||n||t}function Vl(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return hs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=500;class KO{constructor(){this._redirectPersistence=Si,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=_h,this._overrideRedirectResult=ig}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new UO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){LO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),qD(),await this._originValidation(e);const o=VO(e,r,i);await BO(e,o);const a=await xO(e,o,n),u=await OO(a);return PO(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=bi(),o=setTimeout(async()=>{await _w(e),n.onEvent(Tw())},HO),a=async c=>{clearTimeout(o);const h=await _w(e);let d=null;h&&(c==null?void 0:c.url)&&(d=jO(h,c.url)),n.onEvent(d||Tw())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;bi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const GO=KO;function Tw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QO(t,e){Ve(t)._logFramework(e)}var YO="@firebase/auth-compat",XO="0.2.24";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=1e3;function _a(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function ZO(){return _a()==="http:"||_a()==="https:"}function bT(t=me()){return!!((_a()==="file:"||_a()==="ionic:"||_a()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function eP(){return Vm()||Um()}function tP(){return E_()&&(document==null?void 0:document.documentMode)===11}function nP(t=me()){return/Edge\/\d+/.test(t)}function rP(t=me()){return tP()||nP(t)}function kT(){try{const t=self.localStorage,e=Au();if(t)return t.setItem(e,"1"),t.removeItem(e),rP()?Ha():!0}catch{return og()&&Ha()}return!1}function og(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Bd(){return(ZO()||w_()||bT())&&!eP()&&kT()&&!og()}function CT(){return bT()&&typeof document<"u"}async function iP(){return CT()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},JO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function sP(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={LOCAL:"local",NONE:"none",SESSION:"session"},Fo=A,NT="persistence";function oP(t,e){if(Fo(Object.values(bt).includes(e),t,"invalid-persistence-type"),Vm()){Fo(e!==bt.SESSION,t,"unsupported-persistence-type");return}if(Um()){Fo(e===bt.NONE,t,"unsupported-persistence-type");return}if(og()){Fo(e===bt.NONE||e===bt.LOCAL&&Ha(),t,"unsupported-persistence-type");return}Fo(e===bt.NONE||kT(),t,"unsupported-persistence-type")}async function ep(t){await t._initializationPromise;const e=AT(),n=gi(NT,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function aP(t,e){const n=AT();if(!n)return[];const r=gi(NT,t,e);switch(n.getItem(r)){case bt.NONE:return[Ls];case bt.LOCAL:return[Za,Si];case bt.SESSION:return[Si];default:return[]}}function AT(){var t;try{return((t=sP())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=A;class ir{constructor(){this.browserResolver=kt(SO),this.cordovaResolver=kt(GO),this.underlyingResolver=null,this._redirectPersistence=Si,this._completeRedirectFn=_h,this._overrideRedirectResult=ig}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return CT()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return uP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await iP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(t){return t.unwrap()}function lP(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){return xT(t)}function hP(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new dP(t,Kx(t,e))}else if(i){const s=xT(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function xT(t){const{_tokenResponse:e}=t instanceof ft?t.customData:t;if(!e)return null;if(!(t instanceof ft)&&"temporaryProof"in e&&"phoneNumber"in e)return Gt.credentialFromResult(t);const n=e.providerId;if(!n||n===Mo.PASSWORD)return null;let r;switch(n){case Mo.GOOGLE:r=Jt;break;case Mo.FACEBOOK:r=Xt;break;case Mo.GITHUB:r=Zt;break;case Mo.TWITTER:r=en;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ms._create(n,a):yn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new bs(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof ft?r.credentialFromError(t):r.credentialFromResult(t)}function vt(t,e){return e.catch(n=>{throw n instanceof ft&&hP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:cP(n),additionalUserInfo:Hx(n),user:Nn.getOrCreate(i)}})}async function tp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>vt(t,n.confirm(r))}}class dP{constructor(e,n){this.resolver=n,this.auth=lP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return vt(RT(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._delegate=e,this.multiFactor=Xx(e)}static getOrCreate(e){return Nn.USER_MAP.has(e)||Nn.USER_MAP.set(e,new Nn(e)),Nn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return vt(this.auth,rT(this._delegate,e))}async linkWithPhoneNumber(e,n){return tp(this.auth,RD(this._delegate,e,n))}async linkWithPopup(e){return vt(this.auth,UD(this._delegate,e,ir))}async linkWithRedirect(e){return await ep(Ve(this.auth)),GD(this._delegate,e,ir)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return vt(this.auth,iT(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return tp(this.auth,xD(this._delegate,e,n))}reauthenticateWithPopup(e){return vt(this.auth,$D(this._delegate,e,ir))}async reauthenticateWithRedirect(e){return await ep(Ve(this.auth)),HD(this._delegate,e,ir)}sendEmailVerification(e){return Lx(this._delegate,e)}async unlink(e){return await Ix(this._delegate,e),this}updateEmail(e){return Ux(this._delegate,e)}updatePassword(e){return Vx(this._delegate,e)}updatePhoneNumber(e){return DD(this._delegate,e)}updateProfile(e){return $x(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return Mx(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Nn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=A;class np{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;$o(r,"invalid-api-key",{appName:e.name}),$o(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?ir:void 0;this._delegate=n.initialize({options:{persistence:fP(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(NR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Nn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){ZR(this._delegate,e,n)}applyActionCode(e){return kx(this._delegate,e)}checkActionCode(e){return sT(this._delegate,e)}confirmPasswordReset(e,n){return bx(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return vt(this._delegate,Nx(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Px(this._delegate,e)}isSignInWithEmailLink(e){return xx(this._delegate,e)}async getRedirectResult(){$o(Bd(),this._delegate,"operation-not-supported-in-this-environment");const e=await YD(this._delegate,ir);return e?vt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Sw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Sw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return Rx(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Sx(this._delegate,e,n||void 0)}async setPersistence(e){oP(this._delegate,e);let n;switch(e){case bt.SESSION:n=Si;break;case bt.LOCAL:n=await kt(Za)._isAvailable()?Za:Zm;break;case bt.NONE:n=Ls;break;default:return et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return vt(this._delegate,Ex(this._delegate))}signInWithCredential(e){return vt(this._delegate,gh(this._delegate,e))}signInWithCustomToken(e){return vt(this._delegate,Tx(this._delegate,e))}signInWithEmailAndPassword(e,n){return vt(this._delegate,Ax(this._delegate,e,n))}signInWithEmailLink(e,n){return vt(this._delegate,Dx(this._delegate,e,n))}signInWithPhoneNumber(e,n){return tp(this._delegate,AD(this._delegate,e,n))}async signInWithPopup(e){return $o(Bd(),this._delegate,"operation-not-supported-in-this-environment"),vt(this._delegate,FD(this._delegate,e,ir))}async signInWithRedirect(e){return $o(Bd(),this._delegate,"operation-not-supported-in-this-environment"),await ep(this._delegate),zD(this._delegate,e,ir)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Cx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}np.Persistence=bt;function Sw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Nn.getOrCreate(o)),error:e,complete:n}}function fP(t,e){const n=aP(t,e);if(typeof self<"u"&&!n.includes(Za)&&n.push(Za),typeof window<"u")for(const r of[Zm,Si])n.includes(r)||n.push(r);return n.includes(Ls)||n.push(Ls),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.providerId="phone",this._delegate=new Gt(RT(io.auth()))}static credential(e,n){return Gt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ag.PHONE_SIGN_IN_METHOD=Gt.PHONE_SIGN_IN_METHOD;ag.PROVIDER_ID=Gt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=A;class mP{constructor(e,n,r=io.app()){var i;pP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new CD(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="auth-compat";function yP(t){t.INTERNAL.registerComponent(new gn(gP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new np(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ji.EMAIL_SIGNIN,PASSWORD_RESET:Ji.PASSWORD_RESET,RECOVER_EMAIL:Ji.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ji.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ji.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ji.VERIFY_EMAIL}},EmailAuthProvider:Lr,FacebookAuthProvider:Xt,GithubAuthProvider:Zt,GoogleAuthProvider:Jt,OAuthProvider:bs,SAMLAuthProvider:Tc,PhoneAuthProvider:ag,PhoneMultiFactorGenerator:ST,RecaptchaVerifier:mP,TwitterAuthProvider:en,Auth:np,AuthCredential:ao,Error:ft}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(YO,XO)}yP(io);var vP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,ug=ug||{},W=vP||self;function Cc(){}function Th(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xu(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wP(t){return Object.prototype.hasOwnProperty.call(t,jd)&&t[jd]||(t[jd]=++EP)}var jd="closure_uid_"+(1e9*Math.random()>>>0),EP=0;function IP(t,e,n){return t.call.apply(t.bind,arguments)}function _P(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=IP:st=_P,st.apply(null,arguments)}function pl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function tt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Mr(){this.s=this.s,this.o=this.o}var TP=0;Mr.prototype.s=!1;Mr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),TP!=0)&&wP(this)};Mr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DT=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function lg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function bw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Th(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var SP=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Cc,e),W.removeEventListener("test",Cc,e)}catch{}return t}();function Nc(t){return/^[\s\xa0]*$/.test(t)}var kw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function qd(t,e){return t<e?-1:t>e?1:0}function Sh(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return Sh().indexOf(t)!=-1}function cg(t){return cg[" "](t),t}cg[" "]=Cc;function bP(t){var e=NP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kP=tn("Opera"),Fs=tn("Trident")||tn("MSIE"),OT=tn("Edge"),rp=OT||Fs,PT=tn("Gecko")&&!(Sh().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),CP=Sh().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function LT(){var t=W.document;return t?t.documentMode:void 0}var Ac;e:{var zd="",Wd=function(){var t=Sh();if(PT)return/rv:([^\);]+)(\)|;)/.exec(t);if(OT)return/Edge\/([\d\.]+)/.exec(t);if(Fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CP)return/WebKit\/(\S+)/.exec(t);if(kP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Wd&&(zd=Wd?Wd[1]:""),Fs){var Hd=LT();if(Hd!=null&&Hd>parseFloat(zd)){Ac=String(Hd);break e}}Ac=zd}var NP={};function AP(){return bP(function(){let t=0;const e=kw(String(Ac)).split("."),n=kw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=qd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||qd(i[2].length==0,s[2].length==0)||qd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var ip;if(W.document&&Fs){var Cw=LT();ip=Cw||parseInt(Ac,10)||void 0}else ip=void 0;var RP=ip;function eu(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(PT){e:{try{cg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eu.X.h.call(this)}}tt(eu,ot);var xP={2:"touch",3:"pen",4:"mouse"};eu.prototype.h=function(){eu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Du="closure_listenable_"+(1e6*Math.random()|0),DP=0;function OP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++DP,this.ba=this.ea=!1}function bh(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function hg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function MT(t){const e={};for(const n in t)e[n]=t[n];return e}const Nw="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function FT(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Nw.length;s++)n=Nw[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function kh(t){this.src=t,this.g={},this.h=0}kh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=op(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new OP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function sp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=DT(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function op(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var dg="closure_lm_"+(1e6*Math.random()|0),Kd={};function $T(t,e,n,r,i){if(r&&r.once)return VT(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$T(t,e[s],n,r,i);return null}return n=mg(n),t&&t[Du]?t.N(e,n,xu(r)?!!r.capture:!!r,i):UT(t,e,n,!1,r,i)}function UT(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xu(i)?!!i.capture:!!i,a=pg(t);if(a||(t[dg]=a=new kh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(jT(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PP(){function t(n){return e.call(t.src,t.listener,n)}const e=LP;return t}function VT(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)VT(t,e[s],n,r,i);return null}return n=mg(n),t&&t[Du]?t.O(e,n,xu(r)?!!r.capture:!!r,i):UT(t,e,n,!0,r,i)}function BT(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)BT(t,e[s],n,r,i);else r=xu(r)?!!r.capture:!!r,n=mg(n),t&&t[Du]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=op(s,n,r,i),-1<n&&(bh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=op(e,n,r,i)),(n=-1<t?e[t]:null)&&fg(n))}function fg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Du])sp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jT(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pg(e))?(sp(n,t),n.h==0&&(n.src=null,e[dg]=null)):bh(t)}}}function jT(t){return t in Kd?Kd[t]:Kd[t]="on"+t}function LP(t,e){if(t.ba)t=!0;else{e=new eu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&fg(t),t=n.call(r,e)}return t}function pg(t){return t=t[dg],t instanceof kh?t:null}var Gd="__closure_events_fn_"+(1e9*Math.random()>>>0);function mg(t){return typeof t=="function"?t:(t[Gd]||(t[Gd]=function(e){return t.handleEvent(e)}),t[Gd])}function Be(){Mr.call(this),this.i=new kh(this),this.P=this,this.I=null}tt(Be,Mr);Be.prototype[Du]=!0;Be.prototype.removeEventListener=function(t,e,n,r){BT(this,t,e,n,r)};function Je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),FT(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ml(o,r,!0,e)&&i}if(o=e.g=t,i=ml(o,r,!0,e)&&i,i=ml(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ml(o,r,!1,e)&&i}Be.prototype.M=function(){if(Be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bh(n[r]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ml(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&sp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var gg=W.JSON.stringify;function MP(){var t=WT;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FP{constructor(){this.h=this.g=null}add(e,n){const r=qT.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qT=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new $P,t=>t.reset());class $P{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UP(t){W.setTimeout(()=>{throw t},0)}function zT(t,e){ap||VP(),up||(ap(),up=!0),WT.add(t,e)}var ap;function VP(){var t=W.Promise.resolve(void 0);ap=function(){t.then(BP)}}var up=!1,WT=new FP;function BP(){for(var t;t=MP();){try{t.h.call(t.g)}catch(n){UP(n)}var e=qT;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}up=!1}function Ch(t,e){Be.call(this),this.h=t||1,this.g=e||W,this.j=st(this.lb,this),this.l=Date.now()}tt(Ch,Be);$=Ch.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(yg(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function yg(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){Ch.X.M.call(this),yg(this),delete this.g};function vg(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function HT(t){t.g=vg(()=>{t.g=null,t.i&&(t.i=!1,HT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jP extends Mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:HT(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tu(t){Mr.call(this),this.h=t,this.g={}}tt(tu,Mr);var Aw=[];function KT(t,e,n,r){Array.isArray(n)||(n&&(Aw[0]=n.toString()),n=Aw);for(var i=0;i<n.length;i++){var s=$T(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function GT(t){hg(t.g,function(e,n){this.g.hasOwnProperty(n)&&fg(e)},t),t.g={}}tu.prototype.M=function(){tu.X.M.call(this),GT(this)};tu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nh(){this.g=!0}Nh.prototype.Aa=function(){this.g=!1};function qP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function zP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ds(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HP(t,n)+(r?" "+r:"")})}function WP(t,e){t.info(function(){return"TIMEOUT: "+e})}Nh.prototype.info=function(){};function HP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gg(n)}catch{return e}}var zi={},Rw=null;function Ah(){return Rw=Rw||new Be}zi.Pa="serverreachability";function QT(t){ot.call(this,zi.Pa,t)}tt(QT,ot);function nu(t){const e=Ah();Je(e,new QT(e))}zi.STAT_EVENT="statevent";function YT(t,e){ot.call(this,zi.STAT_EVENT,t),this.stat=e}tt(YT,ot);function ht(t){const e=Ah();Je(e,new YT(e,t))}zi.Qa="timingevent";function XT(t,e){ot.call(this,zi.Qa,t),this.size=e}tt(XT,ot);function Ou(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Rh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},JT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wg(){}wg.prototype.h=null;function xw(t){return t.h||(t.h=t.i())}function ZT(){}var Pu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Eg(){ot.call(this,"d")}tt(Eg,ot);function Ig(){ot.call(this,"c")}tt(Ig,ot);var lp;function xh(){}tt(xh,wg);xh.prototype.g=function(){return new XMLHttpRequest};xh.prototype.i=function(){return{}};lp=new xh;function Lu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new tu(this),this.O=KP,t=rp?125:void 0,this.T=new Ch(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new eS}function eS(){this.i=null,this.g="",this.h=!1}var KP=45e3,cp={},Rc={};$=Lu.prototype;$.setTimeout=function(t){this.O=t};function hp(t,e,n){t.K=1,t.v=Oh(Mn(e)),t.s=n,t.P=!0,tS(t,null)}function tS(t,e){t.F=Date.now(),Mu(t),t.A=Mn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),lS(n.i,"t",r),t.C=0,n=t.l.H,t.h=new eS,t.g=RS(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jP(st(t.La,t,t.g),t.N)),KT(t.S,t.g,"readystatechange",t.ib),e=t.H?MT(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),nu(),qP(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&An(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const c=An(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||rp||this.g&&(this.h.h||this.g.fa()||Lw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?nu(3):nu(2)),Dh(this);var n=this.g.aa();this.Y=n;t:if(nS(this)){var r=Lw(this.g);t="";var i=r.length,s=An(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){li(this),Ta(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,zP(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nc(a)){var l=a;break t}}l=null}if(n=l)ds(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,dp(this,n);else{this.i=!1,this.o=3,ht(12),li(this),Ta(this);break e}}this.P?(rS(this,c,o),rp&&this.i&&c==3&&(KT(this.S,this.T,"tick",this.hb),this.T.start())):(ds(this.j,this.m,o,null),dp(this,o)),c==4&&li(this),this.i&&!this.I&&(c==4?kS(this.l,this):(this.i=!1,Mu(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),li(this),Ta(this)}}}catch{}finally{}};function nS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function rS(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=GP(t,n),i==Rc){e==4&&(t.o=4,ht(14),r=!1),ds(t.j,t.m,null,"[Incomplete Response]");break}else if(i==cp){t.o=4,ht(15),ds(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ds(t.j,t.m,i,null),dp(t,i);nS(t)&&i!=Rc&&i!=cp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ng(e),e.K=!0,ht(11))):(ds(t.j,t.m,n,"[Invalid Chunked Response]"),li(t),Ta(t))}$.hb=function(){if(this.g){var t=An(this.g),e=this.g.fa();this.C<e.length&&(Dh(this),rS(this,t,e),this.i&&t!=4&&Mu(this))}};function GP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Rc:(n=Number(e.substring(n,r)),isNaN(n)?cp:(r+=1,r+n>e.length?Rc:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,li(this)};function Mu(t){t.V=Date.now()+t.O,iS(t,t.O)}function iS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ou(st(t.gb,t),e)}function Dh(t){t.B&&(W.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(WP(this.j,this.A),this.K!=2&&(nu(),ht(17)),li(this),this.o=2,Ta(this)):iS(this,this.V-t)};function Ta(t){t.l.G==0||t.I||kS(t.l,t)}function li(t){Dh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,yg(t.T),GT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function dp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||fp(n.h,t))){if(!t.J&&fp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Oc(n),Mh(n);else break e;Cg(n),ht(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ou(st(n.cb,n),6e3));if(1>=dS(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ci(n,11)}else if((t.J||n.g==t)&&Oc(n),!Nc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(_g(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,he(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=AS(r,r.H?r.ka:null,r.V),o.J){fS(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Dh(a),Mu(a)),r.g=o}else SS(r);0<n.i.length&&Fh(n)}else l[0]!="stop"&&l[0]!="close"||ci(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ci(n,7):kg(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}nu(4)}catch{}}function QP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Th(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function YP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Th(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Th(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=YP(t),r=QP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var oS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function vi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof vi){this.h=e!==void 0?e:t.h,xc(this,t.j),this.s=t.s,this.g=t.g,Dc(this,t.m),this.l=t.l,e=t.i;var n=new ru;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Dw(this,n),this.o=t.o}else t&&(n=String(t).match(oS))?(this.h=!!e,xc(this,n[1]||"",!0),this.s=na(n[2]||""),this.g=na(n[3]||"",!0),Dc(this,n[4]),this.l=na(n[5]||"",!0),Dw(this,n[6]||"",!0),this.o=na(n[7]||"")):(this.h=!!e,this.i=new ru(null,this.h))}vi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ra(e,Ow,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ra(e,Ow,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ra(n,n.charAt(0)=="/"?eL:ZP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ra(n,nL)),t.join("")};function Mn(t){return new vi(t)}function xc(t,e,n){t.j=n?na(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Dc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Dw(t,e,n){e instanceof ru?(t.i=e,rL(t.i,t.h)):(n||(e=ra(e,tL)),t.i=new ru(e,t.h))}function he(t,e,n){t.i.set(e,n)}function Oh(t){return he(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function na(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ra(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ow=/[#\/\?@]/g,ZP=/[#\?:]/g,eL=/[#\?]/g,tL=/[#\?@]/g,nL=/#/g;function ru(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&XP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=ru.prototype;$.add=function(t,e){Fr(this),this.i=null,t=lo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aS(t,e){Fr(t),e=lo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uS(t,e){return Fr(t),e=lo(t,e),t.g.has(e)}$.forEach=function(t,e){Fr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.oa=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.W=function(t){Fr(this);let e=[];if(typeof t=="string")uS(this,t)&&(e=e.concat(this.g.get(lo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return Fr(this),this.i=null,t=lo(this,t),uS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function lS(t,e,n){aS(t,e),0<n.length&&(t.i=null,t.g.set(lo(t,e),lg(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function lo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rL(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aS(this,r),lS(this,i,n))},t)),t.j=e}var iL=class{constructor(t,e){this.h=t,this.g=e}};function cS(t){this.l=t||sL,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sL=10;function hS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dS(t){return t.h?1:t.g?t.g.size:0}function fp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _g(t,e){t.g?t.g.add(e):t.h=e}function fS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cS.prototype.cancel=function(){if(this.i=pS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return lg(t.i)}function Tg(){}Tg.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};Tg.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function oL(){this.g=new Tg}function aL(t,e,n){const r=n||"";try{sS(t,function(i,s){let o=i;xu(i)&&(o=gg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function uL(t,e){const n=new Nh;if(W.Image){const r=new Image;r.onload=pl(gl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pl(gl,n,r,"TestLoadImage: error",!1,e),r.onabort=pl(gl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pl(gl,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function gl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Fu(t){this.l=t.ac||null,this.j=t.jb||!1}tt(Fu,wg);Fu.prototype.g=function(){return new Ph(this.l,this.j)};Fu.prototype.i=function(t){return function(){return t}}({});function Ph(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Sg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}tt(Ph,Be);var Sg=0;$=Ph.prototype;$.open=function(t,e){if(this.readyState!=Sg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,iu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$u(this)),this.readyState=Sg};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,iu(this)),this.g&&(this.readyState=3,iu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mS(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function mS(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$u(this):iu(this),this.readyState==3&&mS(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,$u(this))};$.Ua=function(t){this.g&&(this.response=t,$u(this))};$.ga=function(){this.g&&$u(this)};function $u(t){t.readyState=4,t.l=null,t.j=null,t.A=null,iu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function iu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ph.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var lL=W.JSON.parse;function Ee(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gS,this.K=this.L=!1}tt(Ee,Be);var gS="",cL=/^https?$/i,hL=["POST","PUT"];$=Ee.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lp.g(),this.C=this.u?xw(this.u):xw(lp),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Pw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=DT(hL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{wS(this),0<this.B&&((this.K=dL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=vg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pw(this,s)}};function dL(t){return Fs&&AP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof ug<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function Pw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yS(t),Lh(t)}function yS(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),Lh(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lh(this,!0)),Ee.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?vS(this):this.fb())};$.fb=function(){vS(this)};function vS(t){if(t.h&&typeof ug<"u"&&(!t.C[1]||An(t)!=4||t.aa()!=2)){if(t.v&&An(t)==4)vg(t.Ha,0,t);else if(Je(t,"readystatechange"),An(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(oS)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!cL.test(i?i.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<An(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",yS(t)}}finally{Lh(t)}}}}function Lh(t,e){if(t.g){wS(t);const n=t.g,r=t.C[0]?Cc:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function wS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function An(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<An(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),lL(e)}};function Lw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case gS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ES(t){let e="";return hg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ES(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):he(t,e,n))}function Uo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function IS(t){this.Ca=0,this.i=[],this.j=new Nh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Uo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Uo("baseRetryDelayMs",5e3,t),this.bb=Uo("retryDelaySeedMs",1e4,t),this.$a=Uo("forwardChannelMaxRetries",2,t),this.ta=Uo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new cS(t&&t.concurrentRequestLimit),this.Fa=new oL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=IS.prototype;$.ma=8;$.G=1;function kg(t){if(_S(t),t.G==3){var e=t.U++,n=Mn(t.F);he(n,"SID",t.I),he(n,"RID",e),he(n,"TYPE","terminate"),Uu(t,n),e=new Lu(t,t.j,e,void 0),e.K=2,e.v=Oh(Mn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=RS(e.l,null),e.g.da(e.v)),e.F=Date.now(),Mu(e)}NS(t)}function Mh(t){t.g&&(Ng(t),t.g.cancel(),t.g=null)}function _S(t){Mh(t),t.u&&(W.clearTimeout(t.u),t.u=null),Oc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Fh(t){hS(t.h)||t.m||(t.m=!0,zT(t.Ja,t),t.C=0)}function fL(t,e){return dS(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ou(st(t.Ja,t,e),CS(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Lu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=MT(s),FT(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TS(this,i,e),n=Mn(this.F),he(n,"RID",t),he(n,"CVER",22),this.D&&he(n,"X-HTTP-Session-Id",this.D),Uu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(ES(s)))+"&"+e:this.o&&bg(n,this.o,s)),_g(this.h,i),this.Ya&&he(n,"TYPE","init"),this.O?(he(n,"$req",e),he(n,"SID","null"),i.Z=!0,hp(i,n,null)):hp(i,n,e),this.G=2}}else this.G==3&&(t?Mw(this,t):this.i.length==0||hS(this.h)||Mw(this))};function Mw(t,e){var n;e?n=e.m:n=t.U++;const r=Mn(t.F);he(r,"SID",t.I),he(r,"RID",n),he(r,"AID",t.T),Uu(t,r),t.o&&t.s&&bg(r,t.o,t.s),n=new Lu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=TS(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),_g(t.h,n),hp(n,r,e)}function Uu(t,e){t.ia&&hg(t.ia,function(n,r){he(e,r,n)}),t.l&&sS({},function(n,r){he(e,r,n)})}function TS(t,e,n){n=Math.min(t.i.length,n);var r=t.l?st(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{aL(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function SS(t){t.g||t.u||(t.Z=1,zT(t.Ia,t),t.A=0)}function Cg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ou(st(t.Ia,t),CS(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,bS(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ou(st(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),Mh(this),bS(this))};function Ng(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function bS(t){t.g=new Lu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Mn(t.sa);he(e,"RID","rpc"),he(e,"SID",t.I),he(e,"CI",t.L?"0":"1"),he(e,"AID",t.T),he(e,"TYPE","xmlhttp"),Uu(t,e),t.o&&t.s&&bg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Oh(Mn(e)),n.s=null,n.P=!0,tS(n,t)}$.cb=function(){this.v!=null&&(this.v=null,Mh(this),Cg(this),ht(19))};function Oc(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function kS(t,e){var n=null;if(t.g==e){Oc(t),Ng(t),t.g=null;var r=2}else if(fp(t.h,e))n=e.D,fS(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ah(),Je(r,new XT(r,n)),Fh(t)}else SS(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&fL(t,e)||r==2&&Cg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ci(t,5);break;case 4:ci(t,10);break;case 3:ci(t,6);break;default:ci(t,2)}}}function CS(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ci(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=st(t.kb,t);n||(n=new vi("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||xc(n,"https"),Oh(n)),uL(n.toString(),r)}else ht(2);t.G=0,t.l&&t.l.va(e),NS(t),_S(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function NS(t){if(t.G=0,t.la=[],t.l){const e=pS(t.h);(e.length!=0||t.i.length!=0)&&(bw(t.la,e),bw(t.la,t.i),t.h.i.length=0,lg(t.i),t.i.length=0),t.l.ua()}}function AS(t,e,n){var r=n instanceof vi?Mn(n):new vi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Dc(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new vi(null,void 0);r&&xc(s,r),e&&(s.g=e),i&&Dc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&he(r,n,e),he(r,"VER",t.ma),Uu(t,r),r}function RS(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ee(new Fu({jb:!0})):new Ee(t.ra),e.Ka(t.H),e}function xS(){}$=xS.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Pc(){if(Fs&&!(10<=Number(RP)))throw Error("Environmental error: no available transport.")}Pc.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Be.call(this),this.g=new IS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Nc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new co(this)}tt(At,Be);At.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=AS(t,null,t.V),Fh(t)};At.prototype.close=function(){kg(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gg(t),t=n);e.i.push(new iL(e.ab++,t)),e.G==3&&Fh(e)};At.prototype.M=function(){this.g.l=null,delete this.j,kg(this.g),delete this.g,At.X.M.call(this)};function DS(t){Eg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}tt(DS,Eg);function OS(){Ig.call(this),this.status=1}tt(OS,Ig);function co(t){this.g=t}tt(co,xS);co.prototype.xa=function(){Je(this.g,"a")};co.prototype.wa=function(t){Je(this.g,new DS(t))};co.prototype.va=function(t){Je(this.g,new OS)};co.prototype.ua=function(){Je(this.g,"b")};Pc.prototype.createWebChannel=Pc.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;Rh.NO_ERROR=0;Rh.TIMEOUT=8;Rh.HTTP_ERROR=6;JT.COMPLETE="complete";ZT.EventType=Pu;Pu.OPEN="a";Pu.CLOSE="b";Pu.ERROR="c";Pu.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Ee.prototype.listenOnce=Ee.prototype.O;Ee.prototype.getLastError=Ee.prototype.Oa;Ee.prototype.getLastErrorCode=Ee.prototype.Ea;Ee.prototype.getStatus=Ee.prototype.aa;Ee.prototype.getResponseJson=Ee.prototype.Sa;Ee.prototype.getResponseText=Ee.prototype.fa;Ee.prototype.send=Ee.prototype.da;Ee.prototype.setWithCredentials=Ee.prototype.Ka;var pL=function(){return new Pc},mL=function(){return Ah()},Qd=Rh,gL=JT,yL=zi,Fw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},vL=Fu,yl=ZT,wL=Ee;const $w="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="9.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new hh("@firebase/firestore");function pp(){return br.logLevel}function EL(t){br.setLogLevel(t)}function C(t,...e){if(br.logLevel<=Z.DEBUG){const n=e.map(Ag);br.debug(`Firestore (${ho}): ${t}`,...n)}}function Se(t,...e){if(br.logLevel<=Z.ERROR){const n=e.map(Ag);br.error(`Firestore (${ho}): ${t}`,...n)}}function $s(t,...e){if(br.logLevel<=Z.WARN){const n=e.map(Ag);br.warn(`Firestore (${ho}): ${t}`,...n)}}function Ag(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: `+t;throw Se(e),new Error(e)}function B(t,e){t||F()}function IL(t,e){t||F()}function P(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Me.UNAUTHENTICATED))}shutdown(){}}class TL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SL{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Fe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fe,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new PS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new Me(e)}}class bL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(B(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class kL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new bL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,C("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.A=n.token,new CL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function H(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function MS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new k(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new k(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new fe(0,0))}static max(){return new V(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return su.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof su?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class J extends su{construct(e,n,r){return new J(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new k(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new J(n)}static emptyPath(){return new J([])}}const RL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends su{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return RL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new k(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new k(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new k(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new k(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(J.fromString(e))}static fromName(e){return new D(J.fromString(e).popFirst(5))}static empty(){return new D(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return J.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new J(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function mp(t){return t.fields.find(e=>e.kind===2)}function Xr(t){return t.fields.filter(e=>e.kind!==2)}FS.UNKNOWN_ID=-1;class xL{constructor(e,n){this.fieldPath=e,this.kind=n}}class Lc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Lc(0,Rt.min())}}function $S(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new Rt(i,D.empty(),e)}function US(t){return new Rt(t.readTime,t.key,-1)}class Rt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rt(V.min(),D.empty(),-1)}static max(){return new Rt(V.max(),D.empty(),-1)}}function Rg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:H(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class BS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==VS)throw t;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new Fe,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Sa(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=xg(r.target.error);this.P.reject(new Sa(e,i))}}static open(e,n,r,i){try{return new $h(n,e.transaction(i,r))}catch(s){throw new Sa(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(C("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new OL(n)}}class Kt{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Kt.D(me())===12.2&&Se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return C("SimpleDb","Removing database:",e),Jr(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Ha())return!1;if(Kt.N())return!0;const e=me(),n=Kt.D(e),r=0<n&&n<10,i=Kt.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Sa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new k(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new k(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Sa(e,o))},i.onupgradeneeded=s=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=$h.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),I.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(C("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class DL{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Jr(this.U.delete())}}class Sa extends k{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ur(t){return t.name==="IndexedDbTransactionError"}class OL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(C("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Jr(r)}add(e){return C("SimpleDb","ADD",this.store.name,e,e),Jr(this.store.add(e))}get(e){return Jr(this.store.get(e)).next(n=>(n===void 0&&(n=null),C("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return C("SimpleDb","DELETE",this.store.name,e),Jr(this.store.delete(e))}count(){return C("SimpleDb","COUNT",this.store.name),Jr(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new I((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){C("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=xg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new DL(a),l=n(a.primaryKey,a.value,u);if(l instanceof I){const c=l.catch(h=>(u.done(),I.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Jr(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=xg(r.target.error);n(i)}})}let Uw=!1;function xg(t){const e=Kt.D(me());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new k("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Uw||(Uw=!0,setTimeout(()=>{throw r},0)),r}}return t}class PL{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){C("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{C("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Ur(n)?C("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await $r(n)}await this.nt(6e4)})}}class LL{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return C("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(C("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=US(s);Rg(o,r)>0&&(r=o)}),new Rt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.at=-1;class Ie{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vl(this.root,e,this.comparator,!1)}getReverseIterator(){return new vl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vl(this.root,e,this.comparator,!0)}}class vl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ke.RED,this.left=i!=null?i:Ke.EMPTY,this.right=s!=null?s:Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bw(this.data.getIterator())}getIteratorFrom(e){return new Bw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ie)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ie(this.comparator);return n.data=e,n}}class Bw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Zi(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new ie(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ML(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new De(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new De(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const FL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(B(!!t),typeof t=="string"){let e=0;const n=FL.exec(t);if(B(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(t.seconds),nanos:ye(t.nanos)}}function ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ki(t){return typeof t=="string"?De.fromBase64String(t):De.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qS(t){const e=t.mapValue.fields.__previous_value__;return Dg(e)?qS(e):e}function ou(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Cr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cr&&e.projectId===this.projectId&&e.database===this.database}}function Vu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function zS(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Bl={nullValue:"NULL_VALUE"};function Ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dg(t)?4:WS(t)?9007199254740991:10:F()}function vn(t,e){if(t===e)return!0;const n=Ci(t);if(n!==Ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ou(t).isEqual(ou(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=kr(r.timestampValue),o=kr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ki(r.bytesValue).isEqual(ki(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ye(r.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(r.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ye(r.integerValue)===ye(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ye(r.doubleValue),o=ye(i.doubleValue);return s===o?au(s)===au(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vw(s)!==Vw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!vn(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function uu(t,e){return(t.values||[]).find(n=>vn(n,e))!==void 0}function Nr(t,e){if(t===e)return 0;const n=Ci(t),r=Ci(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ye(i.integerValue||i.doubleValue),a=ye(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jw(t.timestampValue,e.timestampValue);case 4:return jw(ou(t),ou(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ki(i),a=ki(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=H(o[u],a[u]);if(l!==0)return l}return H(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=H(ye(i.latitude),ye(s.latitude));return o!==0?o:H(ye(i.longitude),ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Nr(o[u],a[u]);if(l)return l}return H(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===sr.mapValue&&s===sr.mapValue)return 0;if(i===sr.mapValue)return 1;if(s===sr.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=H(a[c],l[c]);if(h!==0)return h;const d=Nr(o[a[c]],u[l[c]]);if(d!==0)return d}return H(a.length,l.length)}(t.mapValue,e.mapValue);default:throw F()}}function jw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=kr(t),r=kr(e),i=H(n.seconds,r.seconds);return i!==0?i:H(n.nanos,r.nanos)}function Cs(t){return gp(t)}function gp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=kr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ki(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,D.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=gp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${gp(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function Ni(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function yp(t){return!!t&&"integerValue"in t}function lu(t){return!!t&&"arrayValue"in t}function qw(t){return!!t&&"nullValue"in t}function zw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jl(t){return!!t&&"mapValue"in t}function ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function UL(t){return"nullValue"in t?Bl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ni(Cr.empty(),D.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:F()}function VL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ni(Cr.empty(),D.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?sr:F()}function Ww(t,e){const n=Nr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Hw(t,e){const n=Nr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!jl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ba(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());jl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];jl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Qe(ba(this.value))}}function HS(t){const e=[];return Wi(t.fields,(n,r)=>{const i=new be([n]);if(jl(r)){const s=HS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new oe(e,0,V.min(),V.min(),Qe.empty(),0)}static newFoundDocument(e,n,r){return new oe(e,1,n,V.min(),r,0)}static newNoDocument(e,n){return new oe(e,2,n,V.min(),Qe.empty(),0)}static newUnknownDocument(e,n){return new oe(e,3,n,V.min(),Qe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new oe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Kw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BL(t,e,n,r,i,s,o)}function Ai(t){const e=P(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Cs(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ht=n}return e.ht}function jL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Cs(r.value)}`;var r}).join(", ")}]`),Vu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Cs(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Cs(n)).join(",")),`Target(${e})`}function Bu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!YL(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!vn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xw(t.startAt,e.startAt)&&Xw(t.endAt,e.endAt)}function Mc(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Fc(t,e){return t.filters.filter(n=>n instanceof Ye&&n.field.isEqual(e))}function Gw(t,e,n){let r=Bl,i=!0;for(const s of Fc(t,e)){let o=Bl,a=!0;switch(s.op){case"<":case"<=":o=UL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Bl}Ww({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ww({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Qw(t,e,n){let r=sr,i=!0;for(const s of Fc(t,e)){let o=sr,a=!0;switch(s.op){case">=":case">":o=VL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=sr}Hw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Hw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class Ye extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new qL(e,n,r):n==="array-contains"?new HL(e,r):n==="in"?new KL(e,r):n==="not-in"?new GL(e,r):n==="array-contains-any"?new QL(e,r):new Ye(e,n,r)}static lt(e,n,r){return n==="in"?new zL(e,r):new WL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Nr(n,this.value)):n!==null&&Ci(this.value)===Ci(n)&&this.ft(Nr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qL extends Ye{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.ft(n)}}class zL extends Ye{constructor(e,n){super(e,"in",n),this.keys=KS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class WL extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=KS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class HL extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lu(n)&&uu(n.arrayValue,this.value)}}class KL extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uu(this.value.arrayValue,n)}}class GL extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(uu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uu(this.value.arrayValue,n)}}class QL extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uu(this.value.arrayValue,r))}}class Ar{constructor(e,n){this.position=e,this.inclusive=n}}class Ns{constructor(e,n="asc"){this.field=e,this.dir=n}}function YL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Yw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=Nr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function GS(t,e,n,r,i,s,o,a){return new Bn(t,e,n,r,i,s,o,a)}function fo(t){return new Bn(t)}function Jw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Og(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pg(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Lg(t){return t.collectionGroup!==null}function Vs(t){const e=P(t);if(e._t===null){e._t=[];const n=Pg(e),r=Og(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ns(n)),e._t.push(new Ns(be.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ns(be.keyField(),s))}}}return e._t}function St(t){const e=P(t);if(!e.wt)if(e.limitType==="F")e.wt=Kw(e.path,e.collectionGroup,Vs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Vs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ns(s.field,o))}const r=e.endAt?new Ar(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ar(e.startAt.position,e.startAt.inclusive):null;e.wt=Kw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function $c(t,e,n){return new Bn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return Bu(St(t),St(e))&&t.limitType===e.limitType}function QS(t){return`${Ai(St(t))}|lt:${t.limitType}`}function vp(t){return`Query(target=${jL(St(t))}; limitType=${t.limitType})`}function Mg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):D.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Yw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Vs(n),r)||n.endAt&&!function(i,s,o){const a=Yw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Vs(n),r))}(t,e)}function YS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function XS(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=XL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XL(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Nr(a,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function ZS(t){return{integerValue:""+t}}function e1(t,e){return zS(e)?ZS(e):JS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this._=void 0}}function JL(t,e,n){return t instanceof Bs?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ri?n1(t,e):t instanceof xi?r1(t,e):function(r,i){const s=t1(r,i),o=Zw(s)+Zw(r.yt);return yp(s)&&yp(r.yt)?ZS(o):JS(r.It,o)}(t,e)}function ZL(t,e,n){return t instanceof Ri?n1(t,e):t instanceof xi?r1(t,e):n}function t1(t,e){return t instanceof js?yp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Bs extends Uh{}class Ri extends Uh{constructor(e){super(),this.elements=e}}function n1(t,e){const n=i1(e);for(const r of t.elements)n.some(i=>vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xi extends Uh{constructor(e){super(),this.elements=e}}function r1(t,e){let n=i1(e);for(const r of t.elements)n=n.filter(i=>!vn(i,r));return{arrayValue:{values:n}}}class js extends Uh{constructor(e,n){super(),this.It=e,this.yt=n}}function Zw(t){return ye(t.integerValue||t.doubleValue)}function i1(t){return lu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.field=e,this.transform=n}}function eM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ri&&r instanceof Ri||n instanceof xi&&r instanceof xi?Us(n.elements,r.elements,vn):n instanceof js&&r instanceof js?vn(n.yt,r.yt):n instanceof Bs&&r instanceof Bs}(t.transform,e.transform)}class tM{constructor(e,n){this.version=e,this.transformResults=n}}class de{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new de}static exists(e){return new de(void 0,e)}static updateTime(e){return new de(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Vh{}function s1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mo(t.key,de.none()):new po(t.key,t.data,de.none());{const n=t.data,r=Qe.empty();let i=new ie(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jn(t.key,r,new Nt(i.toArray()),de.none())}}function nM(t,e,n){t instanceof po?function(r,i,s){const o=r.value.clone(),a=t0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jn?function(r,i,s){if(!ql(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=t0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(o1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ka(t,e,n,r){return t instanceof po?function(i,s,o,a){if(!ql(i.precondition,s))return o;const u=i.value.clone(),l=n0(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jn?function(i,s,o,a){if(!ql(i.precondition,s))return o;const u=n0(i.fieldTransforms,a,s),l=s.data;return l.setAll(o1(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ql(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function rM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=t1(r.transform,i||null);s!=null&&(n===null&&(n=Qe.empty()),n.set(r.field,s))}return n||null}function e0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Us(n,r,(i,s)=>eM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class po extends Vh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jn extends Vh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function o1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function t0(t,e,n){const r=new Map;B(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZL(o,a,n[i]))}return r}function n0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,JL(s,o,e))}return r}class mo extends Vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fg extends Vh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,Y;function a1(t){switch(t){default:return F();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function u1(t){if(t===void 0)return Se("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ce.OK:return T.OK;case Ce.CANCELLED:return T.CANCELLED;case Ce.UNKNOWN:return T.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return T.INTERNAL;case Ce.UNAVAILABLE:return T.UNAVAILABLE;case Ce.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ce.NOT_FOUND:return T.NOT_FOUND;case Ce.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ce.ABORTED:return T.ABORTED;case Ce.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ce.DATA_LOSS:return T.DATA_LOSS;default:return F()}}(Y=Ce||(Ce={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM=new Ie(D.comparator);function It(){return sM}const l1=new Ie(D.comparator);function ia(...t){let e=l1;for(const n of t)e=e.insert(n.key,n);return e}function c1(t){let e=l1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function an(){return Ca()}function h1(){return Ca()}function Ca(){return new Vr(t=>t.toString(),(t,e)=>t.isEqual(e))}const oM=new Ie(D.comparator),aM=new ie(D.comparator);function K(...t){let e=aM;for(const n of t)e=e.add(n);return e}const uM=new ie(H);function Bh(){return uM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zu(V.min(),i,Bh(),It(),K())}}class Wu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wu(r,n,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class d1{constructor(e,n){this.targetId=e,this.At=n}}class f1{constructor(e,n,r=De.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class r0{constructor(){this.Rt=0,this.bt=s0(),this.Pt=De.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=K(),n=K(),r=K();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Wu(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=s0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class lM{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=It(),this.qt=i0(),this.Kt=new ie(H)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Mc(s))if(r===0){const o=new D(s.path);this.jt(n,o,oe.newNoDocument(o,V.min()))}else B(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Mc(a.target)){const u=new D(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,oe.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=K();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new zu(e,n,this.Kt,this.Ut,r);return this.Ut=It(),this.qt=i0(),this.Kt=new ie(H),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new r0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ie(H),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||C("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new r0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function i0(){return new Ie(D.comparator)}function s0(){return new Ie(D.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),hM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class dM{constructor(e,n){this.databaseId=e,this.gt=n}}function cu(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function p1(t,e){return t.gt?e.toBase64():e.toUint8Array()}function fM(t,e){return cu(t,e.toTimestamp())}function $e(t){return B(!!t),V.fromTimestamp(function(e){const n=kr(e);return new fe(n.seconds,n.nanos)}(t))}function $g(t,e){return function(n){return new J(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function m1(t){const e=J.fromString(t);return B(T1(e)),e}function hu(t,e){return $g(t.databaseId,e.path)}function fn(t,e){const n=m1(e);if(n.get(1)!==t.databaseId.projectId)throw new k(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new k(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(y1(n))}function wp(t,e){return $g(t.databaseId,e)}function g1(t){const e=m1(t);return e.length===4?J.emptyPath():y1(e)}function du(t){return new J(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function y1(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function o0(t,e,n){return{name:hu(t,e),fields:n.value.mapValue.fields}}function v1(t,e,n){const r=fn(t,e.name),i=$e(e.updateTime),s=new Qe({mapValue:{fields:e.fields}}),o=oe.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function pM(t,e){return"found"in e?function(n,r){B(!!r.found),r.found.name,r.found.updateTime;const i=fn(n,r.found.name),s=$e(r.found.updateTime),o=new Qe({mapValue:{fields:r.found.fields}});return oe.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){B(!!r.missing),B(!!r.readTime);const i=fn(n,r.missing),s=$e(r.readTime);return oe.newNoDocument(i,s)}(t,e):F()}function mM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(B(l===void 0||typeof l=="string"),De.fromBase64String(l||"")):(B(l===void 0||l instanceof Uint8Array),De.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?T.UNKNOWN:u1(u.code);return new k(l,u.message||"")}(o);n=new f1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fn(t,r.document.name),s=$e(r.document.updateTime),o=new Qe({mapValue:{fields:r.document.fields}}),a=oe.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new zl(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fn(t,r.document),s=r.readTime?$e(r.readTime):V.min(),o=oe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new zl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fn(t,r.document),s=r.removedTargetIds||[];n=new zl([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new iM(i),o=r.targetId;n=new d1(o,s)}}return n}function fu(t,e){let n;if(e instanceof po)n={update:o0(t,e.key,e.value)};else if(e instanceof mo)n={delete:hu(t,e.key)};else if(e instanceof jn)n={update:o0(t,e.key,e.data),updateMask:_M(e.fieldMask)};else{if(!(e instanceof Fg))return F();n={verify:hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Bs)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ri)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof js)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function Ep(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?de.updateTime($e(i.updateTime)):i.exists!==void 0?de.exists(i.exists):de.none()}(e.currentDocument):de.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)B(o.setToServerValue==="REQUEST_TIME"),a=new Bs;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new Ri(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new xi(l)}else"increment"in o?a=new js(s,o.increment):F();const u=be.fromServerFormat(o.fieldPath);return new qu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=fn(t,e.update.name),s=new Qe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Nt(u.map(l=>be.fromServerFormat(l)))}(e.updateMask);return new jn(i,s,o,n,r)}return new po(i,s,n,r)}if(e.delete){const i=fn(t,e.delete);return new mo(i,n)}if(e.verify){const i=fn(t,e.verify);return new Fg(i,n)}return F()}function gM(t,e){return t&&t.length>0?(B(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?$e(r.updateTime):$e(i);return s.isEqual(V.min())&&(s=$e(i)),new tM(s,r.transformResults||[])}(n,e))):[]}function w1(t,e){return{documents:[wp(t,e.path)]}}function E1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(zw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NAN"}};if(qw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(zw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NOT_NAN"}};if(qw(h.value))return{unaryFilter:{field:es(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(h.field),op:wM(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:es(c.field),direction:vM(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||Vu(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function I1(t){let e=g1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){B(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=_1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ns(fs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Vu(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Ar(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Ar(d,h)}(n.endAt)),GS(e,i,o,s,a,"F",u,l)}function yM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function _1(t){return t?t.unaryFilter!==void 0?[IM(t)]:t.fieldFilter!==void 0?[EM(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>_1(e)).reduce((e,n)=>e.concat(n)):F():[]}function vM(t){return cM[t]}function wM(t){return hM[t]}function es(t){return{fieldPath:t.canonicalString()}}function fs(t){return be.fromServerFormat(t.fieldPath)}function EM(t){return Ye.create(fs(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}function IM(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fs(t.unaryFilter.field);return Ye.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fs(t.unaryFilter.field);return Ye.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=fs(t.unaryFilter.field);return Ye.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=fs(t.unaryFilter.field);return Ye.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}function _M(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function T1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=a0(e)),e=TM(t.get(n),e);return a0(e)}function TM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function a0(t){return t+""}function un(t){const e=t.length;if(B(e>=2),e===2)return B(t.charAt(0)===""&&t.charAt(1)===""),J.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&F(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:F()}s=o+2}return new J(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e){return[t,pt(e)]}function S1(t,e,n){return[t,pt(e),n]}const SM={},bM=["prefixPath","collectionGroup","readTime","documentId"],kM=["prefixPath","collectionGroup","documentId"],CM=["collectionGroup","readTime","prefixPath","documentId"],NM=["canonicalId","targetId"],AM=["targetId","path"],RM=["path","targetId"],xM=["collectionId","parent"],DM=["indexId","uid"],OM=["uid","sequenceNumber"],PM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],LM=["indexId","uid","orderedDocumentKey"],MM=["userId","collectionPath","documentId"],FM=["userId","collectionPath","largestBatchId"],$M=["userId","collectionGroup","largestBatchId"],b1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],UM=[...b1,"documentOverlays"],k1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],C1=k1,VM=[...C1,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends BS{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function qe(t,e){const n=P(t);return Kt.M(n.ie,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ka(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=h1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=s1(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,r)=>e0(n,r))&&Us(this.baseMutations,e.baseMutations,(n,r)=>e0(n,r))}}class Vg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){B(e.mutations.length===r.length);let i=oM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=V.min(),o=V.min(),a=De.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.re=e}}function BM(t,e){let n;if(e.document)n=v1(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=D.fromSegments(e.noDocument.path),i=Oi(e.noDocument.readTime);n=oe.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return F();{const r=D.fromSegments(e.unknownDocument.path),i=Oi(e.unknownDocument.version);n=oe.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new fe(r[0],r[1]);return V.fromTimestamp(i)}(e.readTime)),n}function l0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Uc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:hu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:cu(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Di(e.version)};else{if(!e.isUnknownDocument())return F();r.unknownDocument={path:n.path.toArray(),version:Di(e.version)}}return r}function Uc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Di(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Oi(t){const e=new fe(t.seconds,t.nanoseconds);return V.fromTimestamp(e)}function Zr(t,e){const n=(e.baseMutations||[]).map(s=>Ep(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Ep(t.re,s)),i=fe.fromMillis(e.localWriteTimeMs);return new Ug(e.batchId,i,n,r)}function sa(t){const e=Oi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Oi(t.lastLimboFreeSnapshotVersion):V.min();let r;var i;return t.query.documents!==void 0?(B((i=t.query).documents.length===1),r=St(fo(g1(i.documents[0])))):r=function(s){return St(I1(s))}(t.query),new gr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,De.fromBase64String(t.resumeToken))}function A1(t,e){const n=Di(e.snapshotVersion),r=Di(e.lastLimboFreeSnapshotVersion);let i;i=Mc(e.target)?w1(t.re,e.target):E1(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ai(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function jg(t){const e=I1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}function Yd(t,e){return new Bg(e.largestBatchId,Ep(t.re,e.overlayMutation))}function c0(t,e){const n=e.path.lastSegment();return[t,pt(e.path.popLast()),n]}function h0(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Di(r.readTime),documentKey:pt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{getBundleMetadata(e,n){return d0(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Oi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return d0(e).put({bundleId:(r=n).id,createTime:Di($e(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return f0(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:jg(i.bundledQuery),readTime:Oi(i.readTime)};var i})}saveNamedQuery(e,n){return f0(e).put(function(r){return{name:r.name,readTime:Di($e(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function d0(t){return qe(t,"bundles")}function f0(t){return qe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new jh(e,r)}getOverlay(e,n){return Vo(e).get(c0(this.userId,n)).next(r=>r?Yd(this.It,r):null)}getOverlays(e,n){const r=an();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Bg(n,o);i.push(this.ue(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(pt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Vo(e).Y("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=an(),s=pt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Vo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Yd(this.It,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=an();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Vo(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Yd(this.It,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ue(e,n){return Vo(e).put(function(r,i,s){const[o,a,u]=c0(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:fu(r.re,s.mutation)}}(this.It,this.userId,n))}}function Vo(t){return qe(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(ye(e.integerValue));else if("doubleValue"in e){const r=ye(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),au(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(ki(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?WS(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):F()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),D.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}ei.Te=new ei;function qM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function p0(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=qM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class zM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=p0(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=p0(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class WM{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class HM{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class Bo{constructor(){this.Be=new zM,this.Le=new WM(this.Be),this.Ue=new HM(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ti(this.indexId,this.documentKey,this.arrayValue,r)}}function Kr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=m0(t.arrayValue,e.arrayValue),n!==0?n:(n=m0(t.directionalValue,e.directionalValue),n!==0?n:D.comparator(t.documentKey,e.documentKey)))}function m0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KM{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=mp(e);if(n!==void 0&&!this.ze(n))return!1;const r=Xr(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.Ye=new qg}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Rt.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class qg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ie(J.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ie(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Uint8Array(0);class QM{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new qg,this.Ze=new Vr(r=>Ai(r),(r,i)=>Bu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:pt(i)};return g0(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[MS(n),""],!1,!0);return g0(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(un(o.parent))}return r})}addFieldIndex(e,n){const r=El(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=qo(e);return s.next(a=>{o.put(h0(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=El(e),i=qo(e),s=jo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=jo(e);let i=!0;const s=new Map;return I.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=K();const a=[];return I.forEach(s,(u,l)=>{var c;C("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`} to execute ${Ai(n)}`);const h=function(E,_){const N=mp(_);if(N===void 0)return null;for(const w of Fc(E,N.fieldPath))switch(w.op){case"array-contains-any":return w.value.arrayValue.values||[];case"array-contains":return[w.value]}return null}(l,u),d=function(E,_){const N=new Map;for(const w of Xr(_))for(const S of Fc(E,w.fieldPath))switch(S.op){case"==":case"in":N.set(w.fieldPath.canonicalString(),S.value);break;case"not-in":case"!=":return N.set(w.fieldPath.canonicalString(),S.value),Array.from(N.values())}return null}(l,u),f=function(E,_){const N=[];let w=!0;for(const S of Xr(_)){const R=S.kind===0?Gw(E,S.fieldPath,E.startAt):Qw(E,S.fieldPath,E.startAt);N.push(R.value),w&&(w=R.inclusive)}return new Ar(N,w)}(l,u),g=function(E,_){const N=[];let w=!0;for(const S of Xr(_)){const R=S.kind===0?Qw(E,S.fieldPath,E.endAt):Gw(E,S.fieldPath,E.endAt);N.push(R.value),w&&(w=R.inclusive)}return new Ar(N,w)}(l,u),v=this.nn(u,l,f),m=this.nn(u,l,g),p=this.sn(u,l,d),y=this.rn(u.indexId,h,v,f.inclusive,m,g.inclusive,p);return I.forEach(y,E=>r.J(E,n.limit).next(_=>{_.forEach(N=>{const w=D.fromSegments(N.documentKey);o.has(w)||(o=o.add(w),a.push(w))})}))}).next(()=>a)}return I.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.on(n[h/l]):wl,f=this.un(e,d,r[h%l],i),g=this.cn(e,d,s[h%l],o),v=a.map(m=>this.un(e,d,m,!0));c.push(...this.createRange(f,g,v))}return c}un(e,n,r,i){const s=new ti(e,D.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new ti(e,D.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new KM(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return I.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new ie(be.comparator),u=!1;for(const l of o.filters){const c=l;c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:a=a.add(c.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new Bo;for(const i of Xr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);ei.Te.ce(s,o)}return r.$e()}on(e){const n=new Bo;return ei.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new Bo;return ei.Te.ce(Ni(this.databaseId,n),r.qe(function(i){const s=Xr(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new Bo);let s=0;for(const o of Xr(e)){const a=r[s++];for(const u of i)if(this.ln(n,o.fieldPath)&&lu(a))i=this.fn(i,o,a);else{const l=u.qe(o.kind);ei.Te.ce(a,l)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new Bo;u.seed(a.$e()),ei.Te.ce(o,u.qe(n.kind)),s.push(u)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof Ye&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=El(e),i=qo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new Lc(c.sequenceNumber,new Rt(Oi(c.readTime),new D(un(c.documentKey)),c.largestBatchId)):Lc.empty(),d=l.fields.map(([f,g])=>new xL(be.fromServerFormat(f),g));return new FS(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:H(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=El(e),s=qo(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,u=>s.put(h0(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,u=>this.wn(e,i,u).next(l=>{const c=this.mn(s,u);return l.isEqual(c)?I.resolve():this.gn(e,s,u,l,c)}))))})}yn(e,n,r,i){return jo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return jo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=jo(e);let s=new ie(Kr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new ti(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new ie(Kr);const i=this.an(n,e);if(i==null)return r;const s=mp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(lu(o))for(const a of o.arrayValue.values||[])r=r.add(new ti(n.indexId,e.key,this.on(a),i))}else r=r.add(new ti(n.indexId,e.key,wl,i));return r}gn(e,n,r,i,s){C("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),f=u.getIterator();let g=Zi(d),v=Zi(f);for(;g||v;){let m=!1,p=!1;if(g&&v){const y=l(g,v);y<0?p=!0:y>0&&(m=!0)}else g!=null?p=!0:m=!0;m?(c(v),v=Zi(f)):p?(h(g),g=Zi(d)):(g=Zi(d),v=Zi(f))}}(i,s,Kr,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),I.waitFor(o)}_n(e){let n=1;return qo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Kr(o,a)).filter((o,a,u)=>!a||Kr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Kr(o,e),u=Kr(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&u<0)i.push(o),i.push(o.Ke());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,wl,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,wl,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(y0)}getMinOffset(e,n){return I.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||F())).next(y0)}}function g0(t){return qe(t,"collectionParents")}function jo(t){return qe(t,"indexEntries")}function El(t){return qe(t,"indexConfiguration")}function qo(t){return qe(t,"indexState")}function y0(t){B(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Rg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Rt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class wt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new wt(e,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{B(a===1)}));const l=[];for(const c of n.mutations){const h=S1(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return I.waitFor(s).next(()=>l)}function Vc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw F();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt.DEFAULT_COLLECTION_PERCENTILE=10,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,wt.DEFAULT=new wt(41943040,wt.DEFAULT_COLLECTION_PERCENTILE,wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),wt.DISABLED=new wt(-1,0,0);class qh{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){B(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new qh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hn(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=is(e),o=Hn(e);return o.add({}).next(a=>{B(typeof a=="number");const u=new Ug(a,n,r,i),l=function(d,f,g){const v=g.baseMutations.map(p=>fu(d.re,p)),m=g.mutations.map(p=>fu(d.re,p));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:v,mutations:m}}(this.It,this.userId,u),c=[];let h=new ie((d,f)=>H(d.canonicalString(),f.canonicalString()));for(const d of i){const f=S1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,SM))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),I.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Hn(e).get(n).next(r=>r?(B(r.userId===this.userId),Zr(this.It,r)):null)}Tn(e,n){return this.In[n]?I.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Hn(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(B(a.batchId>=r),s=Zr(this.It,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Hn(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Hn(e).W("userMutationsIndex",n).next(r=>r.map(i=>Zr(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Wl(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return is(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=un(c);if(l===this.userId&&n.path.isEqual(d))return Hn(e).get(h).next(f=>{if(!f)throw F();B(f.userId===this.userId),s.push(Zr(this.It,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ie(H);const i=[];return n.forEach(s=>{const o=Wl(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=is(e).Z({range:a},(l,c,h)=>{const[d,f,g]=l,v=un(f);d===this.userId&&s.path.isEqual(v)?r=r.add(g):h.done()});i.push(u)}),I.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Wl(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ie(H);return is(e).Z({range:o},(u,l,c)=>{const[h,d,f]=u,g=un(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Hn(e).get(s).next(o=>{if(o===null)throw F();B(o.userId===this.userId),r.push(Zr(this.It,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return R1(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return is(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=un(s[1]);i.push(u)}else a.done()}).next(()=>{B(i.length===0)})})}containsKey(e,n){return x1(e,this.userId,n)}Rn(e){return D1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function x1(t,e,n){const r=Wl(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return is(t).Z({range:s,X:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Hn(t){return qe(t,"mutations")}function is(t){return qe(t,"documentMutations")}function D1(t){return qe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Pi(0)}static vn(){return new Pi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Pi(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>V.fromTimestamp(new fe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ts(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(B(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ts(e).Z((o,a)=>{const u=sa(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ts(e).Z((r,i)=>{const s=sa(i);n(s)})}Vn(e){return w0(e).get("targetGlobalKey").next(n=>(B(n!==null),n))}Sn(e,n){return w0(e).put("targetGlobalKey",n)}Dn(e,n){return ts(e).put(A1(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ai(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ts(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=sa(a);Bu(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Xn(e);return n.forEach(o=>{const a=pt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Xn(e);return I.forEach(n,s=>{const o=pt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Xn(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Xn(e);let s=K();return i.Z({range:r,X:!0},(o,a,u)=>{const l=un(o[1]),c=new D(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=pt(n.path),i=IDBKeyRange.bound([r],[MS(r)],!1,!0);let s=0;return Xn(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}se(e,n){return ts(e).get(n).next(r=>r?sa(r):null)}}function ts(t){return qe(t,"targets")}function w0(t){return qe(t,"targetGlobal")}function Xn(t){return qe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0([t,e],[n,r]){const i=H(t,n);return i===0?H(e,r):i}class XM{constructor(e){this.xn=e,this.buffer=new ie(E0),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();E0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class JM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){C("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ur(n)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await $r(n)}await this.Fn(3e5)})}}class ZM{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(Et.at);const r=new XM(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(v0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),v0):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),pp()<=Z.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),I.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new ZM(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Il(e,r)}removeReference(e,n,r){return Il(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Il(e,n)}Gn(e,n){return function(r,i){let s=!1;return D1(r).tt(o=>x1(r,o,i).next(a=>(a&&(s=!0),I.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,V.min()),Xn(e).delete([0,pt(o.path)])))});i.push(u)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Il(e,n)}Kn(e,n){const r=Xn(e);let i,s=Et.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Et.at&&n(new D(un(i)),s),s=l,i=u):s=Et.at}).next(()=>{s!==Et.at&&n(new D(un(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Il(t,e){return Xn(t).put(function(n,r){return{targetId:0,path:pt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.changes=new Vr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Gr(e).put(r)}removeEntry(e,n,r){return Gr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Uc(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=oe.newInvalidDocument(n);return Gr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zo(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:oe.newInvalidDocument(n)};return Gr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(zo(n))},(i,s)=>{r={document:this.jn(n,s),size:Vc(s)}}).next(()=>r)}getEntries(e,n){let r=It();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=It(),i=new Ie(D.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,Vc(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return I.resolve();let i=new ie(T0);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(zo(i.first()),zo(i.last())),o=i.getIterator();let a=o.getNext();return Gr(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=D.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&T0(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(zo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),Uc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gr(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=It();for(const u of o){const l=this.jn(D.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=It();const o=_0(n,r),a=_0(n,Rt.max());return Gr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.jn(D.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new nF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return I0(e).get("remoteDocumentGlobalKey").next(n=>(B(!!n),n))}Qn(e,n){return I0(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=BM(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(V.min())))return r}return oe.newInvalidDocument(e)}}function P1(t){return new tF(t)}class nF extends O1{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Vr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ie((s,o)=>H(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=l0(this.Yn.It,o);i=i.add(s.path.popLast());const l=Vc(u);r+=l-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=l0(this.Yn.It,o.convertToNoDocument(V.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function I0(t){return qe(t,"remoteDocumentGlobal")}function Gr(t){return qe(t,"remoteDocumentsV14")}function zo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function _0(t,e){const n=e.documentKey.path.toArray();return[t,Uc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function T0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=H(n[s],r[s]),i)return i;return i=H(n.length,r.length),i||(i=H(n[n.length-2],r[r.length-2]),i||H(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&ka(r.mutation,i,Nt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=an();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ia();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=an();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=It();const o=Ca(),a=Ca();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof jn)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),ka(c.mutation,l,c.mutation.getFieldMask(),fe.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new rF(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ca();let i=new Ie((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Nt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||K()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=h1();c.forEach(d=>{if(!s.has(d)){const f=s1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return D.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(an());let a=-1,u=s;return o.next(l=>I.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,K())).next(c=>({batchId:a,changes:c1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=ia();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ia();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const u=function(l,c){return new Bn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,oe.newInvalidDocument(l)))});let o=ia();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&ka(l.mutation,u,Nt.empty(),fe.now()),Mg(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(oe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:$e(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:jg(r.bundledQuery),readTime:$e(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(){this.overlays=new Ie(D.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=an();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=an(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=an(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=an(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return I.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bg(n,r));let s=this.es.get(n);s===void 0&&(s=K(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.ns=new ie(Le.ss),this.rs=new ie(Le.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Le(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Le(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new D(new J([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new D(new J([])),r=new Le(n,e),i=new Le(n,e+1);let s=K();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return D.comparator(e.key,n.key)||H(e._s,n._s)}static os(e,n){return H(e._s,n._s)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ie(Le.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ug(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ie(H);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),I.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new Le(new D(s),0);let a=new ie(H);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){B(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return I.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Le(n,0),i=this.gs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(e){this.Es=e,this.docs=new Ie(D.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():oe.newInvalidDocument(n))}getEntries(e,n){let r=It();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():oe.newInvalidDocument(i))}),I.resolve(r)}getAllFromCollection(e,n,r){let i=It();const s=new D(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Rg(US(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,i){F()}As(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uF(this)}getSize(e){return I.resolve(this.size)}}class uF extends O1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e){this.persistence=e,this.Rs=new Vr(n=>Ai(n),Bu),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.bs=0,this.Ps=new zg,this.targetCount=0,this.vs=Pi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Pi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Et(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new lF(this),this.indexManager=new GM,this.remoteDocumentCache=function(r){return new aF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new N1(n),this.Ns=new iF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new oF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){C("MemoryPersistence","Starting transaction:",e);const i=new cF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return I.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class cF extends BS{constructor(e){super(),this.currentSequenceNumber=e}}class zh{constructor(e){this.persistence=e,this.Fs=new zg,this.$s=null}static Bs(e){return new zh(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,r=>{const i=D.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e){this.It=e}$(e,n,r,i){const s=new $h("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",u0,{unique:!0}),a.createObjectStore("documentMutations")}(e),S0(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),S0(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:V.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",u0,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:MM});u.createIndex("collectionPathOverlayIndex",FM,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",$M,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:bM});u.createIndex("documentKeyIndex",kM),u.createIndex("collectionGroupIndex",CM)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:DM}).createIndex("sequenceNumberIndex",OM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:PM}).createIndex("documentKeyIndex",LM,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Vc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,u=>{B(u.userId===s.userId);const l=Zr(this.It,u);return R1(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new J(o),l=function(c){return[0,pt(c)]}(u);s.push(n.get(l).next(c=>c?I.resolve():(h=>n.put({targetId:0,path:pt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>I.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:xM});const r=n.store("collectionParents"),i=new qg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:pt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new J(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=un(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=sa(i),o=A1(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new D(J.fromString(l.document.name).popFirst(5)):l.noDocument?D.fromSegments(l.noDocument.path):l.unknownDocument?D.fromSegments(l.unknownDocument.path):F()).path.toArray();var l;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>I.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=P1(this.It),s=new M1(zh.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:K();Zr(this.It,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),I.forEach(a,(u,l)=>{const c=new Me(l),h=jh.oe(this.It,c),d=s.getIndexManager(c),f=qh.oe(c,this.It,d,s.referenceDelegate);return new L1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ip(n,Et.at),u).next()})})}}function S0(t){t.createObjectStore("targetDocuments",{keyPath:AM}).createIndex("documentTargetsIndex",RM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",NM,{unique:!0}),t.createObjectStore("targetGlobal")}const Xd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Wg{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Wg.C())throw new k(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new eF(this,i),this.ii=n+"main",this.It=new N1(u),this.ri=new Kt(this.ii,this.Xs,new hF(this.It)),this.Cs=new YM(this.referenceDelegate,this.It),this.remoteDocumentCache=P1(this.It),this.Ns=new jM,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&Se("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new k(T.FAILED_PRECONDITION,Xd);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Et(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>_l(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Ur(e))return C("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Wo(e).get("owner").next(n=>I.resolve(this.mi(n)))}gi(e){return _l(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=qe(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?I.resolve(!0):Wo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new k(T.FAILED_PRECONDITION,Xd);return!1}}return!(!this.networkEnabled||!this.inForeground)||_l(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&C("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Ip(e,Et.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>_l(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return qh.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new QM(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return jh.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){C("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?VM:o===14?C1:o===13?k1:o===12?UM:o===11?b1:void F();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new Ip(u,this.Ss?this.Ss.next():Et.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw Se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new k(T.FAILED_PRECONDITION,VS);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return Wo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new k(T.FAILED_PRECONDITION,Xd)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Wo(e).put("owner",n)}static C(){return Kt.C()}_i(e){const n=Wo(e);return n.get("owner").next(r=>this.mi(r)?(C("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Se(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),HN()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return C("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Se("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Se("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Wo(t){return qe(t,"owner")}function _l(t){return qe(t,"clientMetadata")}function Hg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Jw(n))return I.resolve(null);let r=St(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$c(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,$c(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return Jw(n)||i.isEqual(V.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(pp()<=Z.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vp(n)),this.Bi(e,o,n,$S(i,-1)))})}Fi(e,n){let r=new ie(XS(e));return n.forEach((i,s)=>{Mg(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return pp()<=Z.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",vp(n)),this.Ni.getDocumentsMatchingQuery(e,n,Rt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Ie(H),this.qi=new Vr(s=>Ai(s),Bu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new L1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function $1(t,e,n,r){return new dF(t,e,n,r)}async function U1(t,e){const n=P(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=K();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function fF(t,e){const n=P(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=I.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const v=u.docVersions.get(f);B(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=K();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function V1(t){const e=P(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function pF(t,e){const n=P(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(De.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(g,v,m){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let u=It(),l=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(B1(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(V.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function B1(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=It();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(V.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):C("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function mF(t,e){const n=P(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function qs(t,e){const n=P(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new gr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function zs(t,e,n){const r=P(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ur(o))throw o;C("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Bc(t,e,n){const r=P(t);let i=V.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=P(a),h=c.qi.get(l);return h!==void 0?I.resolve(c.Ui.get(h)):c.Cs.getTargetData(u,l)}(r,o,St(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:K())).next(a=>(z1(r,YS(e),a),{documents:a,Hi:s})))}function j1(t,e){const n=P(t),r=P(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function q1(t,e){const n=P(t),r=n.Ki.get(e)||V.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,$S(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(z1(n,e,i),i))}function z1(t,e,n){let r=t.Ki.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function gF(t,e,n,r){const i=P(t);let s=K(),o=It();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await qs(i,function(l){return St(fo(J.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>B1(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function yF(t,e,n=K()){const r=await qs(t,St(jg(e.bundledQuery))),i=P(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=$e(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(De.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function b0(t,e){return`firestore_clients_${t}_${e}`}function k0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Jd(t,e){return`firestore_targets_${t}_${e}`}class jc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new k(i.error.code,i.error.message))),o?new jc(e,n,i.state,s):(Se("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Na{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new k(r.error.code,r.error.message))),s?new Na(e,r.state,i):(Se("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class qc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Bh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=zS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new qc(e,s):(Se("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Gg{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Gg(n.clientId,n.onlineState):(Se("SharedClientState",`Failed to parse online state: ${e}`),null)}}class _p{constructor(){this.activeTargetIds=Bh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zd{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Ie(H),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=b0(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new _p),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(b0(this.persistenceKey,r));if(i){const s=qc.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Jd(this.persistenceKey,e));if(r){const i=Na.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Jd(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return C("SharedClientState","READ",e,n),n}setItem(e,n){C("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){C("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(C("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=Et.at;if(i!=null)try{const o=JSON.parse(i);B(typeof o=="number"),s=o}catch(o){Se("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Et.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new jc(this.currentUser,e,n,r),s=k0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=k0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=Jd(this.persistenceKey,e),s=new Na(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return qc.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return jc.Zi(new Me(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return Na.Zi(i,n)}yr(e){return Gg.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);C("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=Bh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class W1{constructor(){this.Lr=new _p,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new _p,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);C("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(C("RestConnection","Received: ",u),u),u=>{throw $s("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ho,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=wF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new wL;a.setWithCredentials(!0),a.listenOnce(gL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Qd.NO_ERROR:const l=a.getResponseJson();C("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Qd.TIMEOUT:C("Connection",'RPC "'+e+'" timed out'),o(new k(T.DEADLINE_EXCEEDED,"Request time out"));break;case Qd.HTTP_ERROR:const c=a.getStatus();if(C("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(g)>=0?g:T.UNKNOWN}(h.status);o(new k(d,h.message))}else o(new k(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new k(T.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{C("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=pL(),o=mL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new vL({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");C("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new EF({Hr:g=>{h?C("Connection","Not sending because WebChannel is closed:",g):(c||(C("Connection","Opening WebChannel transport."),l.open(),c=!0),C("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),f=(g,v,m)=>{g.listen(v,p=>{try{m(p)}catch(y){setTimeout(()=>{throw y},0)}})};return f(l,yl.EventType.OPEN,()=>{h||C("Connection","WebChannel transport opened.")}),f(l,yl.EventType.CLOSE,()=>{h||(h=!0,C("Connection","WebChannel transport closed"),d.io())}),f(l,yl.EventType.ERROR,g=>{h||(h=!0,$s("Connection","WebChannel transport errored:",g),d.io(new k(T.UNAVAILABLE,"The operation could not be completed")))}),f(l,yl.EventType.MESSAGE,g=>{var v;if(!h){const m=g.data[0];B(!!m);const p=m,y=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(y){C("Connection","WebChannel received error:",y);const E=y.status;let _=function(w){const S=Ce[w];if(S!==void 0)return u1(S)}(E),N=y.message;_===void 0&&(_=T.INTERNAL,N="Unknown error status: "+E+" with message "+y.message),h=!0,d.io(new k(_,N)),l.close()}else C("Connection","WebChannel received:",m),d.ro(m)}}),f(o,yL.STAT_EVENT,g=>{g.stat===Fw.PROXY?C("Connection","Detected buffering proxy"):g.stat===Fw.NOPROXY&&C("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){return typeof window<"u"?window:null}function Hl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){return new dM(t,!0)}class Qg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&C("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Qg(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Se(n.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new k(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return C("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _F extends K1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=mM(this.It,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?$e(s.readTime):V.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=du(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Mc(a)?{documents:w1(i,a)}:{query:E1(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=p1(i,s.resumeToken):s.snapshotVersion.compareTo(V.min())>0&&(o.readTime=cu(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=yM(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=du(this.It),n.removeTarget=e,this.Bo(n)}}class TF extends K1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=gM(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.Zo(r,n)}return B(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=du(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>fu(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new k(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new k(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new k(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class bF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Se(n),this.ou=!1):C("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{Br(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=P(a);u._u.add(4),await go(u),u.gu.set("Unknown"),u._u.delete(4),await Ku(u)}(this))})}),this.gu=new bF(r,i)}}async function Ku(t){if(Br(t))for(const e of t.wu)await e(!0)}async function go(t){for(const e of t.wu)await e(!1)}function Wh(t,e){const n=P(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Jg(n)?Xg(n):vo(n).ko()&&Yg(n,e))}function pu(t,e){const n=P(t),r=vo(n);n.du.delete(e),r.ko()&&G1(n,e),n.du.size===0&&(r.ko()?r.Fo():Br(n)&&n.gu.set("Unknown"))}function Yg(t,e){t.yu.Mt(e.targetId),vo(t).zo(e)}function G1(t,e){t.yu.Mt(e),vo(t).Ho(e)}function Xg(t){t.yu=new lM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),vo(t).start(),t.gu.uu()}function Jg(t){return Br(t)&&!vo(t).No()&&t.du.size>0}function Br(t){return P(t)._u.size===0}function Q1(t){t.yu=void 0}async function CF(t){t.du.forEach((e,n)=>{Yg(t,e)})}async function NF(t,e){Q1(t),Jg(t)?(t.gu.hu(e),Xg(t)):t.gu.set("Unknown")}async function AF(t,e,n){if(t.gu.set("Online"),e instanceof f1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){C("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zc(t,r)}else if(e instanceof zl?t.yu.Gt(e):e instanceof d1?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(V.min()))try{const r=await V1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(De.EMPTY_BYTE_STRING,u.snapshotVersion)),G1(i,a);const l=new gr(u.target,a,1,u.sequenceNumber);Yg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){C("RemoteStore","Failed to raise snapshot:",r),await zc(t,r)}}async function zc(t,e,n){if(!Ur(e))throw e;t._u.add(1),await go(t),t.gu.set("Offline"),n||(n=()=>V1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ku(t)})}function Y1(t,e){return e().catch(n=>zc(t,n,e))}async function yo(t){const e=P(t),n=Rr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;RF(e);)try{const i=await mF(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,xF(e,i)}catch(i){await zc(e,i)}X1(e)&&J1(e)}function RF(t){return Br(t)&&t.fu.length<10}function xF(t,e){t.fu.push(e);const n=Rr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function X1(t){return Br(t)&&!Rr(t).No()&&t.fu.length>0}function J1(t){Rr(t).start()}async function DF(t){Rr(t).eu()}async function OF(t){const e=Rr(t);for(const n of t.fu)e.Xo(n.mutations)}async function PF(t,e,n){const r=t.fu.shift(),i=Vg.from(r,e,n);await Y1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yo(t)}async function LF(t,e){e&&Rr(t).Yo&&await async function(n,r){if(i=r.code,a1(i)&&i!==T.ABORTED){const s=n.fu.shift();Rr(n).Mo(),await Y1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await yo(n)}var i}(t,e),X1(t)&&J1(t)}async function N0(t,e){const n=P(t);n.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const r=Br(n);n._u.add(3),await go(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ku(n)}async function Tp(t,e){const n=P(t);e?(n._u.delete(2),await Ku(n)):e||(n._u.add(2),await go(n),n.gu.set("Unknown"))}function vo(t){return t.pu||(t.pu=function(e,n,r){const i=P(e);return i.su(),new _F(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:CF.bind(null,t),Zr:NF.bind(null,t),Wo:AF.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Jg(t)?Xg(t):t.gu.set("Unknown")):(await t.pu.stop(),Q1(t))})),t.pu}function Rr(t){return t.Iu||(t.Iu=function(e,n,r){const i=P(e);return i.su(),new TF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:DF.bind(null,t),Zr:LF.bind(null,t),tu:OF.bind(null,t),Zo:PF.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await yo(t)):(await t.Iu.stop(),t.fu.length>0&&(C("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Zg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wo(t,e){if(Se("AsyncQueue",`${e}: ${t}`),Ur(t))return new k(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=ia(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new As(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof As)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new As;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(){this.Tu=new Ie(D.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ws{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ws(e,n,As.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(){this.Au=void 0,this.listeners=[]}}class FF{constructor(){this.queries=new Vr(e=>QS(e),ju),this.onlineState="Unknown",this.Ru=new Set}}async function ey(t,e){const n=P(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new MF),i)try{s.Au=await n.onListen(r)}catch(o){const a=wo(o,`Initialization of query '${vp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&ny(n)}async function ty(t,e){const n=P(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function $F(t,e){const n=P(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&ny(n)}function UF(t,e,n){const r=P(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ny(t){t.Ru.forEach(e=>{e.next()})}class ry{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VF{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.It=e}Ji(e){return fn(this.It,e)}Yi(e){return e.metadata.exists?v1(this.It,e.document,!1):oe.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return $e(e)}}class BF{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Z1(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=J.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new R0(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||K()).add(s);n.set(o,a)}}return n}async complete(){const e=await gF(this.localStore,new R0(this.It),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await yF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Z1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.key=e}}class tb{constructor(e){this.key=e}}class nb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=K(),this.mutatedKeys=K(),this.Gu=XS(e),this.Qu=new As(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new A0,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Mg(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),m=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),m=!0,(u&&this.Gu(f,u)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),m=!0):d&&!f&&(r.track({type:1,doc:d}),m=!0,(u||l)&&(a=!0)),m&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,c)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return f(h)-f(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new Ws(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new A0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=K(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new tb(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new eb(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=K();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ws.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class jF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qF{constructor(e){this.key=e,this.nc=!1}}class zF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Vr(a=>QS(a),ju),this.rc=new Map,this.oc=new Set,this.uc=new Ie(D.comparator),this.cc=new Map,this.ac=new zg,this.hc={},this.lc=new Map,this.fc=Pi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function WF(t,e){const n=uy(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await qs(n.localStore,St(e));n.isPrimaryClient&&Wh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await iy(n,e,r,a==="current",o.resumeToken)}return i}async function iy(t,e,n,r,i){t._c=(h,d,f)=>async function(g,v,m,p){let y=v.view.Wu(m);y.$i&&(y=await Bc(g.localStore,v.query,!1).then(({documents:N})=>v.view.Wu(N,y)));const E=p&&p.targetChanges.get(v.targetId),_=v.view.applyChanges(y,g.isPrimaryClient,E);return Sp(g,v.targetId,_.Xu),_.snapshot}(t,h,d,f);const s=await Bc(t.localStore,e,!0),o=new nb(e,s.Hi),a=o.Wu(s.documents),u=Wu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Sp(t,n,l.Xu);const c=new jF(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function HF(t,e){const n=P(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!ju(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),pu(n.remoteStore,r.targetId),Hs(n,r.targetId)}).catch($r)):(Hs(n,r.targetId),await zs(n.localStore,r.targetId,!0))}async function KF(t,e,n){const r=ly(t);try{const i=await function(s,o){const a=P(s),u=fe.now(),l=o.reduce((d,f)=>d.add(f.key),K());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=It(),g=K();return a.Gi.getEntries(d,l).next(v=>{f=v,f.forEach((m,p)=>{p.isValidDocument()||(g=g.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const m=[];for(const p of o){const y=rM(p,c.get(p.key).overlayedDocument);y!=null&&m.push(new jn(p.key,y,HS(y.value.mapValue),de.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,m,o)}).next(v=>{h=v;const m=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,m)})}).then(()=>({batchId:h.batchId,changes:c1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new Ie(H)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await qn(r,i.changes),await yo(r.remoteStore)}catch(i){const s=wo(i,"Failed to persist write");n.reject(s)}}async function rb(t,e){const n=P(t);try{const r=await pF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(B(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?B(o.nc):i.removedDocuments.size>0&&(B(o.nc),o.nc=!1))}),await qn(n,r,e)}catch(r){await $r(r)}}function x0(t,e,n){const r=P(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=P(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&ny(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GF(t,e,n){const r=P(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Ie(D.comparator);o=o.insert(s,oe.newNoDocument(s,V.min()));const a=K().add(s),u=new zu(V.min(),new Map,new ie(H),o,a);await rb(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),ay(r)}else await zs(r.localStore,e,!1).then(()=>Hs(r,e,n)).catch($r)}async function QF(t,e){const n=P(t),r=e.batch.batchId;try{const i=await fF(n.localStore,e);oy(n,r,null),sy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qn(n,i)}catch(i){await $r(i)}}async function YF(t,e,n){const r=P(t);try{const i=await function(s,o){const a=P(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(B(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);oy(r,e,n),sy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qn(r,i)}catch(i){await $r(i)}}async function XF(t,e){const n=P(t);Br(n.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=P(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=wo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function sy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function oy(t,e,n){const r=P(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Hs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||ib(t,r)})}function ib(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(pu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ay(t))}function Sp(t,e,n){for(const r of n)r instanceof eb?(t.ac.addReference(r.key,e),JF(t,r)):r instanceof tb?(C("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||ib(t,r.key)):F()}function JF(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(C("SyncEngine","New document in limbo: "+n),t.oc.add(r),ay(t))}function ay(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new D(J.fromString(e)),r=t.fc.next();t.cc.set(r,new qF(n)),t.uc=t.uc.insert(n,r),Wh(t.remoteStore,new gr(St(fo(n.path)),r,2,Et.at))}}async function qn(t,e,n){const r=P(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Kg.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const l=P(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(u,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ur(c))throw c;C("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,g)}}}(r.localStore,s))}async function ZF(t,e){const n=P(t);if(!n.currentUser.isEqual(e)){C("SyncEngine","User change. New user:",e.toKey());const r=await U1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new k(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qn(n,r.ji)}}function e$(t,e){const n=P(t),r=n.cc.get(e);if(r&&r.nc)return K().add(r.key);{let i=K();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function t$(t,e){const n=P(t),r=await Bc(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&Sp(n,e.targetId,i.Xu),i}async function n$(t,e){const n=P(t);return q1(n.localStore,e).then(r=>qn(n,r))}async function r$(t,e,n,r){const i=P(t),s=await function(o,a){const u=P(o),l=P(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await yo(i.remoteStore):n==="acknowledged"||n==="rejected"?(oy(i,e,r||null),sy(i,e),function(o,a){P(P(o).mutationQueue).An(a)}(i.localStore,e)):F(),await qn(i,s)):C("SyncEngine","Cannot apply mutation batch with id: "+e)}async function i$(t,e){const n=P(t);if(uy(n),ly(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await D0(n,r.toArray());n.dc=!0,await Tp(n.remoteStore,!0);for(const s of i)Wh(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Hs(n,o),zs(n.localStore,o,!0))),pu(n.remoteStore,o)}),await i,await D0(n,r),function(s){const o=P(s);o.cc.forEach((a,u)=>{pu(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new Ie(D.comparator)}(n),n.dc=!1,await Tp(n.remoteStore,!1)}}async function D0(t,e,n){const r=P(t),i=[],s=[];for(const o of e){let a;const u=r.rc.get(o);if(u&&u.length!==0){a=await qs(r.localStore,St(u[0]));for(const l of u){const c=r.ic.get(l),h=await t$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await j1(r.localStore,o);a=await qs(r.localStore,l),await iy(r,sb(l),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function sb(t){return GS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function s$(t){const e=P(t);return P(P(e.localStore).persistence).vi()}async function o$(t,e,n,r){const i=P(t);if(i.dc)return void C("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await q1(i.localStore,YS(s[0])),a=zu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",De.EMPTY_BYTE_STRING);await qn(i,o,a);break}case"rejected":await zs(i.localStore,e,!0),Hs(i,e,r);break;default:F()}}async function a$(t,e,n){const r=uy(t);if(r.dc){for(const i of e){if(r.rc.has(i)){C("SyncEngine","Adding an already active target "+i);continue}const s=await j1(r.localStore,i),o=await qs(r.localStore,s);await iy(r,sb(s),o.targetId,!1,o.resumeToken),Wh(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await zs(r.localStore,i,!1).then(()=>{pu(r.remoteStore,i),Hs(r,i)}).catch($r)}}function uy(t){const e=P(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=e$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GF.bind(null,e),e.sc.Wo=$F.bind(null,e.eventManager),e.sc.wc=UF.bind(null,e.eventManager),e}function ly(t){const e=P(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YF.bind(null,e),e}function u$(t,e,n){const r=P(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=P(h),g=$e(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Z1(a));const u=new BF(a,i.localStore,s.It);let l=await s.mc();for(;l;){const h=await u.Fu(l);h&&o._updateProgress(h),l=await s.mc()}const c=await u.complete();return await qn(i,c.Lu,void 0),await function(h,d){const f=P(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Ns.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Bu)}catch(a){return $s("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class ob{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Hu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return $1(this.persistence,new F1,e.initialUser,this.It)}yc(e){return new M1(zh.Bs,this.It)}gc(e){return new W1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ab extends ob{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await ly(this.Ac.syncEngine),await yo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return $1(this.persistence,new F1,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new JM(r,e.asyncQueue,n)}Ec(e,n){const r=new LL(n,this.persistence);return new PL(e.asyncQueue,r)}yc(e){const n=Hg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?wt.withCacheSize(this.cacheSizeBytes):wt.DEFAULT;return new Wg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,H1(),Hl(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new W1}}class l$ extends ab{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof Zd&&(this.sharedClientState.syncEngine={Fr:r$.bind(null,n),$r:o$.bind(null,n),Br:a$.bind(null,n),vi:s$.bind(null,n),Mr:n$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await i$(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=H1();if(!Zd.C(n))throw new k(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Hg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class cy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZF.bind(null,this.syncEngine),await Tp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new FF}createDatastore(e){const n=Hu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new IF(i));var i;return function(s,o,a,u){return new SF(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>x0(this.syncEngine,a,0),o=C0.C()?new C0:new vF,new kF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new zF(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=P(e);C("RemoteStore","RemoteStore shutting down."),n._u.add(5),await go(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t,e,n){if(!n)throw new k(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ub(t,e,n,r){if(e===!0&&r===!0)throw new k(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function O0(t){if(!D.isDocumentKey(t))throw new k(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function P0(t){if(D.isDocumentKey(t))throw new k(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new k(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hh(t);throw new k(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function lb(t,e){if(e<=0)throw new k(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new Map;class M0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new k(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new k(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ub("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new M0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new k(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new M0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new _L;switch(n.type){case"gapi":const r=n.client;return new kL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=L0.get(e);n&&(C("ComponentProvider","Removing Datastore"),L0.delete(e),n.terminate())}(this),Promise.resolve()}}function c$(t,e,n,r={}){var i;const s=(t=ne(t,Gu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&$s("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Me.MOCK_USER;else{o=tA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new k(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Me(u)}t._authCredentials=new TL(new PS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ce(this.firestore,e,this._key)}}class ut{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ut(this.firestore,e,this._query)}}class pn extends ut{constructor(e,n,r){super(e,n,fo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ce(this.firestore,null,new D(e))}withConverter(e){return new pn(this.firestore,e,this._path)}}function cb(t,e,...n){if(t=U(t),hy("collection","path",e),t instanceof Gu){const r=J.fromString(e,...n);return P0(r),new pn(t,null,r)}{if(!(t instanceof ce||t instanceof pn))throw new k(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return P0(r),new pn(t.firestore,null,r)}}function h$(t,e){if(t=ne(t,Gu),hy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new k(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ut(t,null,function(n){return new Bn(J.emptyPath(),n)}(e))}function Wc(t,e,...n){if(t=U(t),arguments.length===1&&(e=LS.R()),hy("doc","path",e),t instanceof Gu){const r=J.fromString(e,...n);return O0(r),new ce(t,null,new D(r))}{if(!(t instanceof ce||t instanceof pn))throw new k(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(J.fromString(e,...n));return O0(r),new ce(t.firestore,t instanceof pn?t.converter:null,new D(r))}}function hb(t,e){return t=U(t),e=U(e),(t instanceof ce||t instanceof pn)&&(e instanceof ce||e instanceof pn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function db(t,e){return t=U(t),e=U(e),t instanceof ut&&e instanceof ut&&t.firestore===e.firestore&&ju(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Se("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d${constructor(e,n){this.Pc=e,this.It=n,this.metadata=new Fe,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new VF(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new k(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=P(r),o=du(s.It)+"/documents",a={documents:i.map(h=>hu(s.It,h))},u=await s._o("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=pM(s.It,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());B(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new mo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=D.fromPath(r);this.mutations.push(new Fg(i,this.precondition(i)))}),await async function(n,r){const i=P(n),s=du(i.It)+"/documents",o={writes:r.map(a=>fu(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw F();n=V.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new k(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(V.min())?de.exists(!1):de.updateTime(n):de.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(V.min()))throw new k(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return de.updateTime(n)}return de.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p${constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new Qg(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new f$(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!Vu(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!a1(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=LS.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{C("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(C("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fb(t,e){t.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await U1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function pb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dy(t);C("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>N0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>N0(e.remoteStore,s)),t.onlineComponents=e}async function dy(t){return t.offlineComponents||(C("FirestoreClient","Using default OfflineComponentProvider"),await fb(t,new ob)),t.offlineComponents}async function Gh(t){return t.onlineComponents||(C("FirestoreClient","Using default OnlineComponentProvider"),await pb(t,new cy)),t.onlineComponents}function mb(t){return dy(t).then(e=>e.persistence)}function fy(t){return dy(t).then(e=>e.localStore)}function gb(t){return Gh(t).then(e=>e.remoteStore)}function py(t){return Gh(t).then(e=>e.syncEngine)}function g$(t){return Gh(t).then(e=>e.datastore)}async function Ks(t){const e=await Gh(t),n=e.eventManager;return n.onListen=WF.bind(null,e.syncEngine),n.onUnlisten=HF.bind(null,e.syncEngine),n}function y$(t){return t.asyncQueue.enqueue(async()=>{const e=await mb(t),n=await gb(t);return e.setNetworkEnabled(!0),function(r){const i=P(r);return i._u.delete(0),Ku(i)}(n)})}function v$(t){return t.asyncQueue.enqueue(async()=>{const e=await mb(t),n=await gb(t);return e.setNetworkEnabled(!1),async function(r){const i=P(r);i._u.add(0),await go(i),i.gu.set("Offline")}(n)})}function w$(t,e){const n=new Fe;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=P(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new k(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=wo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await fy(t),e,n)),n.promise}function yb(t,e,n={}){const r=new Fe;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Kh({next:h=>{s.enqueueAndForget(()=>ty(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new k(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new k(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ry(fo(o.path),l,{includeMetadataChanges:!0,Nu:!0});return ey(i,c)}(await Ks(t),t.asyncQueue,e,n,r)),r.promise}function E$(t,e){const n=new Fe;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await Bc(r,i,!0),a=new nb(i,o.Hi),u=a.Wu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=wo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await fy(t),e,n)),n.promise}function vb(t,e,n={}){const r=new Fe;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Kh({next:h=>{s.enqueueAndForget(()=>ty(i,c)),h.fromCache&&a.source==="server"?u.reject(new k(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new ry(o,l,{includeMetadataChanges:!0,Nu:!0});return ey(i,c)}(await Ks(t),t.asyncQueue,e,n,r)),r.promise}function I$(t,e){const n=new Kh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).Ru.add(i),i.next()}(await Ks(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){P(r).Ru.delete(i)}(await Ks(t),n))}}function _$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new d$(u,l)}(function(u,l){if(u instanceof Uint8Array)return F0(u,l);if(u instanceof ArrayBuffer)return F0(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Hu(e));t.asyncQueue.enqueueAndForget(async()=>{u$(await py(t),i,r)})}function T$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=P(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await fy(t),e))}class S${constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Qg(this,"async_queue_retry"),this.Wc=()=>{const n=Hl();n&&C("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Hl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Hl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new Fe;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Ur(e))throw e;C("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Se("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Zg.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&F()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function bp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class b${constructor(){this._progressObserver={},this._taskCompletionResolver=new Fe,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k$=-1;class _e extends Gu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new S$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wb(this),this._firestoreClient.terminate()}}function ze(t){return t._firestoreClient||wb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function wb(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new $L(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new m$(t._authCredentials,t._appCheckCredentials,t._queue,r)}function C$(t,e){Ib(t=ne(t,_e));const n=ze(t),r=t._freezeSettings(),i=new cy;return Eb(n,i,new ab(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function N$(t){Ib(t=ne(t,_e));const e=ze(t),n=t._freezeSettings(),r=new cy;return Eb(e,r,new l$(r,n.cacheSizeBytes))}function Eb(t,e,n){const r=new Fe;return t.asyncQueue.enqueue(async()=>{try{await fb(t,n),await pb(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===T.FAILED_PRECONDITION||o.code===T.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;$s("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function A$(t){if(t._initialized&&!t._terminated)throw new k(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Fe;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Kt.C())return Promise.resolve();const r=n+"main";await Kt.delete(r)}(Hg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function R$(t){return function(e){const n=new Fe;return e.asyncQueue.enqueueAndForget(async()=>XF(await py(e),n)),n.promise}(ze(t=ne(t,_e)))}function x$(t){return y$(ze(t=ne(t,_e)))}function D$(t){return v$(ze(t=ne(t,_e)))}function O$(t,e){const n=ze(t=ne(t,_e)),r=new b$;return _$(n,t._databaseId,e,r),r}function P$(t,e){return T$(ze(t=ne(t,_e)),e).then(n=>n?new ut(t,null,n.query):null)}function Ib(t){if(t._initialized||t._terminated)throw new k(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wn(De.fromBase64String(e))}catch(n){throw new k(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wn(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new k(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new k(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new k(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L$=/^__.*__$/;class M${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jn(e,this.data,this.fieldMask,n,this.fieldTransforms):new po(e,this.data,n,this.fieldTransforms)}}class _b{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Tb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class Yh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Hc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Tb(this.sa)&&L$.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class F${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Hu(e)}da(e,n,r,i=!1){return new Yh({sa:e,methodName:n,fa:r,path:be.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Ki(t){const e=t._freezeSettings(),n=Hu(t._databaseId);return new F$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xh(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);vy("Data must be an object, but it was:",o,r);const a=kb(r,o);let u,l;if(s.merge)u=new Nt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=kp(e,h,n);if(!o.contains(d))throw new k(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Nb(c,d)||c.push(d)}u=new Nt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new M$(new Qe(a),u,l)}class Qu extends Hi{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qu}}function Sb(t,e,n){return new Yh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class my extends Hi{_toFieldTransform(e){return new qu(e.path,new Bs)}isEqual(e){return e instanceof my}}class $$ extends Hi{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Sb(this,e,!0),r=this._a.map(s=>Gi(s,n)),i=new Ri(r);return new qu(e.path,i)}isEqual(e){return this===e}}class U$ extends Hi{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Sb(this,e,!0),r=this._a.map(s=>Gi(s,n)),i=new xi(r);return new qu(e.path,i)}isEqual(e){return this===e}}class V$ extends Hi{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new js(e.It,e1(e.It,this.wa));return new qu(e.path,n)}isEqual(e){return this===e}}function gy(t,e,n,r){const i=t.da(1,e,n);vy("Data must be an object, but it was:",i,r);const s=[],o=Qe.empty();Wi(r,(u,l)=>{const c=wy(e,u,n);l=U(l);const h=i.ca(c);if(l instanceof Qu)s.push(c);else{const d=Gi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Nt(s);return new _b(o,a,i.fieldTransforms)}function yy(t,e,n,r,i,s){const o=t.da(1,e,n),a=[kp(e,r,n)],u=[i];if(s.length%2!=0)throw new k(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(kp(e,s[d])),u.push(s[d+1]);const l=[],c=Qe.empty();for(let d=a.length-1;d>=0;--d)if(!Nb(l,a[d])){const f=a[d];let g=u[d];g=U(g);const v=o.ca(f);if(g instanceof Qu)l.push(f);else{const m=Gi(g,v);m!=null&&(l.push(f),c.set(f,m))}}const h=new Nt(l);return new _b(c,h,o.fieldTransforms)}function bb(t,e,n,r=!1){return Gi(n,t.da(r?4:3,e))}function Gi(t,e){if(Cb(t=U(t)))return vy("Unsupported field value:",e,t),kb(t,e);if(t instanceof Hi)return function(n,r){if(!Tb(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Gi(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=U(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return e1(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=fe.fromDate(n);return{timestampValue:cu(r.It,i)}}if(n instanceof fe){const i=new fe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cu(r.It,i)}}if(n instanceof Qh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof wn)return{bytesValue:p1(r.It,n._byteString)};if(n instanceof ce){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$g(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Hh(n)}`)}(t,e)}function kb(t,e){const n={};return jS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wi(t,(r,i)=>{const s=Gi(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Cb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Qh||t instanceof wn||t instanceof ce||t instanceof Hi)}function vy(t,e,n){if(!Cb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Hh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function kp(t,e,n){if((e=U(e))instanceof xr)return e._internalPath;if(typeof e=="string")return wy(t,e);throw Hc("Field path arguments must be of type string or ",t,!1,void 0,n)}const B$=new RegExp("[~\\*/\\[\\]]");function wy(t,e,n){if(e.search(B$)>=0)throw Hc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xr(...e.split("."))._internalPath}catch{throw Hc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new k(T.INVALID_ARGUMENT,a+t+u)}function Nb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new j$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class j$ extends mu{data(){return super.data()}}function Jh(t,e){return typeof e=="string"?wy(t,e):e instanceof xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new k(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yu{}function Kn(t,...e){for(const n of e)t=n._apply(t);return t}class q$ extends Yu{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=Ki(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new k(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){U0(c,l);const f=[];for(const g of c)f.push($0(a,i,g));h={arrayValue:{values:f}}}else h=$0(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||U0(c,l),h=bb(o,s,c,l==="in"||l==="not-in");const d=Ye.create(u,l,h);return function(f,g){if(g.dt()){const m=Pg(f);if(m!==null&&!m.isEqual(g.field))throw new k(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${m.toString()}' and '${g.field.toString()}'`);const p=Og(f);p!==null&&Pb(f,g.field,p)}const v=function(m,p){for(const y of m.filters)if(p.indexOf(y.op)>=0)return y.op;return null}(f,function(m){switch(m){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new k(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new k(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new ut(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Bn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function z$(t,e,n){const r=e,i=Jh("where",t);return new q$(i,r,n)}class W$ extends Yu{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new k(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new k(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ns(i,s);return function(a,u){if(Og(a)===null){const l=Pg(a);l!==null&&Pb(a,l,u.field)}}(r,o),o}(e._query,this.ma,this.pa);return new ut(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Bn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function H$(t,e="asc"){const n=e,r=Jh("orderBy",t);return new W$(r,n)}class Rb extends Yu{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new ut(e.firestore,e.converter,$c(e._query,this.Ia,this.Ta))}}function K$(t){return lb("limit",t),new Rb("limit",t,"F")}function G$(t){return lb("limitToLast",t),new Rb("limitToLast",t,"L")}class xb extends Yu{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=Ob(e,this.type,this.Ea,this.Aa);return new ut(e.firestore,e.converter,function(r,i){return new Bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function Q$(...t){return new xb("startAt",t,!0)}function Y$(...t){return new xb("startAfter",t,!1)}class Db extends Yu{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=Ob(e,this.type,this.Ea,this.Aa);return new ut(e.firestore,e.converter,function(r,i){return new Bn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function X$(...t){return new Db("endBefore",t,!1)}function J$(...t){return new Db("endAt",t,!0)}function Ob(t,e,n,r){if(n[0]=U(n[0]),n[0]instanceof mu)return function(i,s,o,a,u){if(!a)throw new k(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Vs(i))if(c.field.isKeyField())l.push(Ni(s,a.key));else{const h=a.data.field(c.field);if(Dg(h))throw new k(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new k(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ar(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ki(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new k(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new k(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof g}`);if(!Lg(s)&&g.indexOf("/")!==-1)throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${g}' contains a slash.`);const v=s.path.child(J.fromString(g));if(!D.isDocumentKey(v))throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const m=new D(v);d.push(Ni(o,m))}else{const v=bb(a,u,g);d.push(v)}}return new Ar(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function $0(t,e,n){if(typeof(n=U(n))=="string"){if(n==="")throw new k(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lg(e)&&n.indexOf("/")!==-1)throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(J.fromString(n));if(!D.isDocumentKey(r))throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ni(t,new D(r))}if(n instanceof ce)return Ni(t,n._key);throw new k(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hh(n)}.`)}function U0(t,e){if(!Array.isArray(t)||t.length===0)throw new k(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new k(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Pb(t,e,n){if(!n.isEqual(e))throw new k(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{convertValue(e,n="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return Wi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Qh(ye(e.latitude),ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ou(e));default:return null}}convertTimestamp(e){const n=kr(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=J.fromString(e);B(T1(r));const i=new Cr(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||Se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Z$ extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fn extends mu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Aa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Aa extends Fn{data(e={}){return super.data(e)}}class Dr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new hi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Aa(this._firestore,this._userDataWriter,r.key,r,new hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Aa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new hi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Aa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new hi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:eU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function eU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}function Lb(t,e){return t instanceof Fn&&e instanceof Fn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Dr&&e instanceof Dr&&t._firestore===e._firestore&&db(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(t){t=ne(t,ce);const e=ne(t.firestore,_e);return yb(ze(e),t._key).then(n=>Iy(e,t,n))}class Qi extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new wn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ce(this.firestore,null,n)}}function nU(t){t=ne(t,ce);const e=ne(t.firestore,_e),n=ze(e),r=new Qi(e);return w$(n,t._key).then(i=>new Fn(e,r,t._key,i,new hi(i!==null&&i.hasLocalMutations,!0),t.converter))}function rU(t){t=ne(t,ce);const e=ne(t.firestore,_e);return yb(ze(e),t._key,{source:"server"}).then(n=>Iy(e,t,n))}function iU(t){t=ne(t,ut);const e=ne(t.firestore,_e),n=ze(e),r=new Qi(e);return Ab(t._query),vb(n,t._query).then(i=>new Dr(e,r,t,i))}function sU(t){t=ne(t,ut);const e=ne(t.firestore,_e),n=ze(e),r=new Qi(e);return E$(n,t._query).then(i=>new Dr(e,r,t,i))}function oU(t){t=ne(t,ut);const e=ne(t.firestore,_e),n=ze(e),r=new Qi(e);return vb(n,t._query,{source:"server"}).then(i=>new Dr(e,r,t,i))}function V0(t,e,n){t=ne(t,ce);const r=ne(t.firestore,_e),i=Zh(t.converter,e,n);return Xu(r,[Xh(Ki(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,de.none())])}function B0(t,e,n,...r){t=ne(t,ce);const i=ne(t.firestore,_e),s=Ki(i);let o;return o=typeof(e=U(e))=="string"||e instanceof xr?yy(s,"updateDoc",t._key,e,n,r):gy(s,"updateDoc",t._key,e),Xu(i,[o.toMutation(t._key,de.exists(!0))])}function aU(t){return Xu(ne(t.firestore,_e),[new mo(t._key,de.none())])}function uU(t,e){const n=ne(t.firestore,_e),r=Wc(t),i=Zh(t.converter,e);return Xu(n,[Xh(Ki(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,de.exists(!1))]).then(()=>r)}function Mb(t,...e){var n,r,i;t=U(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(bp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof ce)l=ne(t.firestore,_e),c=fo(t._key.path),u={next:h=>{e[o]&&e[o](Iy(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ne(t,ut);l=ne(h.firestore,_e),c=h._query;const d=new Qi(l);u={next:f=>{e[o]&&e[o](new Dr(l,d,h,f))},error:e[o+1],complete:e[o+2]},Ab(t._query)}return function(h,d,f,g){const v=new Kh(g),m=new ry(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>ey(await Ks(h),m)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>ty(await Ks(h),m))}}(ze(l),c,a,u)}function lU(t,e){return I$(ze(t=ne(t,_e)),bp(e)?e:{next:e})}function Xu(t,e){return function(n,r){const i=new Fe;return n.asyncQueue.enqueueAndForget(async()=>KF(await py(n),r,i)),i.promise}(ze(t),e)}function Iy(t,e,n){const r=n.docs.get(e._key),i=new Qi(t);return new Fn(t,i,e._key,r,new hi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cU={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ki(e)}set(e,n,r){this._verifyNotCommitted();const i=Jn(e,this._firestore),s=Zh(i.converter,n,r),o=Xh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,de.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Jn(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof xr?yy(this._dataReader,"WriteBatch.update",s._key,n,r,i):gy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,de.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Jn(e,this._firestore);return this._mutations=this._mutations.concat(new mo(n._key,de.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new k(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jn(t,e){if((t=U(t)).firestore!==e)throw new k(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ki(e)}get(e){const n=Jn(e,this._firestore),r=new Z$(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return F();const s=i[0];if(s.isFoundDocument())return new mu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new mu(this._firestore,r,n._key,null,n.converter);throw F()})}set(e,n,r){const i=Jn(e,this._firestore),s=Zh(i.converter,n,r),o=Xh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Jn(e,this._firestore);let o;return o=typeof(n=U(n))=="string"||n instanceof xr?yy(this._dataReader,"Transaction.update",s._key,n,r,i):gy(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Jn(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Jn(e,this._firestore),r=new Qi(this._firestore);return super.get(e).then(i=>new Fn(this._firestore,r,n._key,i._document,new hi(!1,!1),n.converter))}}function fU(t,e,n){t=ne(t,_e);const r=Object.assign(Object.assign({},cU),n);return function(i){if(i.maxAttempts<1)throw new k(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Fe;return i.asyncQueue.enqueueAndForget(async()=>{const u=await g$(i);new p$(i.asyncQueue,u,o,s,a).run()}),a.promise}(ze(t),i=>e(new dU(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pU(){return new Qu("deleteField")}function mU(){return new my("serverTimestamp")}function gU(...t){return new $$("arrayUnion",t)}function yU(...t){return new U$("arrayRemove",t)}function vU(t){return new V$("increment",t)}(function(t,e=!0){(function(n){ho=n})(ji),Sr(new gn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new _e(new SL(n.getProvider("auth-internal")),new NL(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new k(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cr(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dn($w,"3.7.2",t),dn($w,"3.7.2","esm2017")})();const wU="@firebase/firestore-compat",EU="0.2.2";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new k("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(){if(typeof Uint8Array>"u")throw new k("unimplemented","Uint8Arrays are not available in this environment.")}function q0(){if(!ML())throw new k("unimplemented","Blobs are unavailable in Firestore in this environment.")}class gu{constructor(e){this._delegate=e}static fromBase64String(e){return q0(),new gu(wn.fromBase64String(e))}static fromUint8Array(e){return j0(),new gu(wn.fromUint8Array(e))}toBase64(){return q0(),this._delegate.toBase64()}toUint8Array(){return j0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t){return IU(t,["next","error","complete"])}function IU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{enableIndexedDbPersistence(e,n){return C$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return N$(e._delegate)}clearIndexedDbPersistence(e){return A$(e._delegate)}}class Fb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Cr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&$s("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){c$(this._delegate,e,n,r)}enableNetwork(){return x$(this._delegate)}disableNetwork(){return D$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ub("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return R$(this._delegate)}onSnapshotsInSync(e){return lU(this._delegate,e)}get app(){if(!this._appCompat)throw new k("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Gs(this,cb(this._delegate,e))}catch(n){throw ct(n,"collection()","Firestore.collection()")}}doc(e){try{return new Lt(this,Wc(this._delegate,e))}catch(n){throw ct(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new lt(this,h$(this._delegate,e))}catch(n){throw ct(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return fU(this._delegate,n=>e(new $b(this,n)))}batch(){return ze(this._delegate),new Ub(new hU(this._delegate,e=>Xu(this._delegate,e)))}loadBundle(e){return O$(this._delegate,e)}namedQuery(e){return P$(this._delegate,e).then(n=>n?new lt(this,n):null)}}class ed extends Ey{constructor(e){super(),this.firestore=e}convertBytes(e){return new gu(new wn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Lt.forKey(n,this.firestore,null)}}function TU(t){EL(t)}class $b{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}get(e){const n=di(e);return this._delegate.get(n).then(r=>new yu(this._firestore,new Fn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=di(e);return r?(_y("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=di(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=di(e);return this._delegate.delete(n),this}}class Ub{constructor(e){this._delegate=e}set(e,n,r){const i=di(e);return r?(_y("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=di(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=di(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Li{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Aa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new vu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Li.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Li(e,new ed(e),n),i.set(n,s)),s}}Li.INSTANCES=new WeakMap;class Lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}static forPath(e,n,r){if(e.length%2!==0)throw new k("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Lt(n,new ce(n._delegate,r,new D(e)))}static forKey(e,n,r){return new Lt(n,new ce(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Gs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Gs(this.firestore,cb(this._delegate,e))}catch(n){throw ct(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=U(e),e instanceof ce?hb(this._delegate,e):!1}set(e,n){n=_y("DocumentReference.set",n);try{return n?V0(this._delegate,e,n):V0(this._delegate,e)}catch(r){throw ct(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?B0(this._delegate,e):B0(this._delegate,e,n,...r)}catch(i){throw ct(i,"updateDoc()","DocumentReference.update()")}}delete(){return aU(this._delegate)}onSnapshot(...e){const n=Vb(e),r=Bb(e,i=>new yu(this.firestore,new Fn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return Mb(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=nU(this._delegate):(e==null?void 0:e.source)==="server"?n=rU(this._delegate):n=tU(this._delegate),n.then(r=>new yu(this.firestore,new Fn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Lt(this.firestore,e?this._delegate.withConverter(Li.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ct(t,e,n){return t.message=t.message.replace(e,n),t}function Vb(t){for(const e of t)if(typeof e=="object"&&!Cp(e))return e;return{}}function Bb(t,e){var n,r;let i;return Cp(t[0])?i=t[0]:Cp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class yu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Lt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return Lb(this._delegate,e._delegate)}}class vu extends yu{data(e){const n=this._delegate.data(e);return IL(n!==void 0),n}}class lt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new ed(e)}where(e,n,r){try{return new lt(this.firestore,Kn(this._delegate,z$(e,n,r)))}catch(i){throw ct(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new lt(this.firestore,Kn(this._delegate,H$(e,n)))}catch(r){throw ct(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new lt(this.firestore,Kn(this._delegate,K$(e)))}catch(n){throw ct(n,"limit()","Query.limit()")}}limitToLast(e){try{return new lt(this.firestore,Kn(this._delegate,G$(e)))}catch(n){throw ct(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new lt(this.firestore,Kn(this._delegate,Q$(...e)))}catch(n){throw ct(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new lt(this.firestore,Kn(this._delegate,Y$(...e)))}catch(n){throw ct(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new lt(this.firestore,Kn(this._delegate,X$(...e)))}catch(n){throw ct(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new lt(this.firestore,Kn(this._delegate,J$(...e)))}catch(n){throw ct(n,"endAt()","Query.endAt()")}}isEqual(e){return db(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=sU(this._delegate):(e==null?void 0:e.source)==="server"?n=oU(this._delegate):n=iU(this._delegate),n.then(r=>new Np(this.firestore,new Dr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Vb(e),r=Bb(e,i=>new Np(this.firestore,new Dr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return Mb(this._delegate,n,r)}withConverter(e){return new lt(this.firestore,e?this._delegate.withConverter(Li.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class SU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new vu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Np{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new lt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new vu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new SU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new vu(this._firestore,r))})}isEqual(e){return Lb(this._delegate,e._delegate)}}class Gs extends lt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Lt(this.firestore,e):null}doc(e){try{return e===void 0?new Lt(this.firestore,Wc(this._delegate)):new Lt(this.firestore,Wc(this._delegate,e))}catch(n){throw ct(n,"doc()","CollectionReference.doc()")}}add(e){return uU(this._delegate,e).then(n=>new Lt(this.firestore,n))}isEqual(e){return hb(this._delegate,e._delegate)}withConverter(e){return new Gs(this.firestore,e?this._delegate.withConverter(Li.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function di(t){return ne(t,ce)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(...e){this._delegate=new xr(...e)}static documentId(){return new Ty(be.keyField().canonicalString())}isEqual(e){return e=U(e),e instanceof xr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this._delegate=e}static serverTimestamp(){const e=mU();return e._methodName="FieldValue.serverTimestamp",new ni(e)}static delete(){const e=pU();return e._methodName="FieldValue.delete",new ni(e)}static arrayUnion(...e){const n=gU(...e);return n._methodName="FieldValue.arrayUnion",new ni(n)}static arrayRemove(...e){const n=yU(...e);return n._methodName="FieldValue.arrayRemove",new ni(n)}static increment(e){const n=vU(e);return n._methodName="FieldValue.increment",new ni(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU={Firestore:Fb,GeoPoint:Qh,Timestamp:fe,Blob:gu,Transaction:$b,WriteBatch:Ub,DocumentReference:Lt,DocumentSnapshot:yu,Query:lt,QueryDocumentSnapshot:vu,QuerySnapshot:Np,CollectionReference:Gs,FieldPath:Ty,FieldValue:ni,setLogLevel:TU,CACHE_SIZE_UNLIMITED:k$};function kU(t,e){t.INTERNAL.registerComponent(new gn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},bU)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CU(t){kU(t,(e,n)=>new Fb(e,n,new _U)),t.registerVersion(wU,EU)}CU(io);const NU={apiKey:"AIzaSyBv504VsjiTp0BjefpcPO91DD7F4cFym0M",authDomain:"temp-monitor-dash.firebaseapp.com",projectId:"temp-monitor-dash",storageBucket:"temp-monitor-dash.appspot.com",messagingSenderId:"562555966406",appId:"1:562555966406:web:dd91cb429ccf8a290dd8c7",measurementId:"G-1D6562XRQG"};io.initializeApp(NU);var td={exports:{}},Ju={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AU=ee.exports,jb=60103;Ju.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var z0=Symbol.for;jb=z0("react.element"),Ju.Fragment=z0("react.fragment")}var RU=AU.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xU=Object.prototype.hasOwnProperty,DU={key:!0,ref:!0,__self:!0,__source:!0};function qb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)xU.call(e,r)&&!DU.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:jb,type:t,key:s,ref:o,props:i,_owner:RU.current}}Ju.jsx=qb;Ju.jsxs=qb;(function(t){t.exports=Ju})(td);const OU=td.exports.Fragment,z=td.exports.jsx,Mt=td.exports.jsxs;function PU(){const t=[LU,MU,FU],e=Math.floor(Math.random()*t.length+0),n=t[e];return z(n,{})}function LU(){return z("div",{id:"loading-wrapper",children:z("main",{children:Mt("svg",{className:"ap",viewBox:"0 0 128 256",width:"128px",height:"256px",xmlns:"http://www.w3.org/2000/svg",children:[Mt("defs",{children:[Mt("linearGradient",{id:"ap-grad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[z("stop",{offset:"0%",stopColor:"hsl(223,90%,55%)"}),z("stop",{offset:"100%",stopColor:"hsl(253,90%,55%)"})]}),Mt("linearGradient",{id:"ap-grad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[z("stop",{offset:"0%",stopColor:"hsl(193,90%,55%)"}),z("stop",{offset:"50%",stopColor:"hsl(223,90%,55%)"}),z("stop",{offset:"100%",stopColor:"hsl(253,90%,55%)"})]})]}),z("circle",{className:"ap__ring",r:"56",cx:"64",cy:"192",fill:"none",stroke:"#ddd",strokeWidth:"16",strokeLinecap:"round"}),z("circle",{className:"ap__worm1",r:"56",cx:"64",cy:"192",fill:"none",stroke:"url(#ap-grad1)",strokeWidth:"16",strokeLinecap:"round",strokeDasharray:"87.96 263.89"}),z("path",{className:"ap__worm2",d:"M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z",fill:"none",stroke:"url(#ap-grad2)",strokeWidth:"16",strokeLinecap:"round",strokeDasharray:"87.96 494"})]})})})}function MU(){return z("div",{className:"loading-wrapper-scateboard",children:z("main",{children:Mt("svg",{className:"pl",viewBox:"0 0 176 160",width:"176px",height:"160px",xmlns:"http://www.w3.org/2000/svg",children:[z("defs",{children:Mt("linearGradient",{id:"pl-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[z("stop",{offset:"0%",stopColor:"hsl(33,90%,55%)"}),z("stop",{offset:"30%",stopColor:"hsl(33,90%,55%)"}),z("stop",{offset:"100%",stopColor:"hsl(3,90%,55%)"})]})}),Mt("g",{fill:"none",strokeWidth:"16",strokeLinecap:"round",children:[z("circle",{className:"pl__ring",r:"56",cx:"88",cy:"96",stroke:"hsla(0,10%,10%,0.1)"}),z("path",{className:"pl__worm1",d:"M144,96A56,56,0,0,1,32,96",stroke:"url(#pl-grad)",strokeDasharray:"43.98 307.87"}),z("path",{className:"pl__worm2",d:"M32,136V96s-.275-25.725,14-40",stroke:"hsl(33,90%,55%)",strokeDasharray:"0 40 0 44",strokeDashoffset:"0.001",visibility:"hidden"}),z("path",{className:"pl__worm3",d:"M144,136V96s.275-25.725-14-40",stroke:"hsl(33,90%,55%)",strokeDasharray:"0 40 0 44",strokeDashoffset:"0.001",visibility:"hidden"})]})]})})})}function FU(){return z("div",{className:"loading-wrapper-bouncing",children:Mt("svg",{className:"pl",viewBox:"0 0 128 128",width:"128px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[z("defs",{children:Mt("linearGradient",{id:"pl-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[z("stop",{offset:"0%",stopColor:"hsl(193,90%,55%)"}),z("stop",{offset:"100%",stopColor:"hsl(223,90%,55%)"})]})}),z("circle",{className:"pl__ring",r:"56",cx:"64",cy:"64",fill:"none",stroke:"hsla(0,10%,10%,0.1)",strokeWidth:"16",strokeLinecap:"round"}),z("path",{className:"pl__worm",d:"M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z",fill:"none",stroke:"url(#pl-grad)",strokeWidth:"16",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"44 1111",strokeDashoffset:"10"})]})})}function $U(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let a,u,l,c;const h=async(f=!0)=>{await l,f&&(a==null||a.addEventListener("controlling",g=>{g.isUpdate&&window.location.reload()})),await(c==null?void 0:c())};async function d(){if("serviceWorker"in navigator){const{Workbox:f,messageSW:g}=await $m(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);c=async()=>{u&&u.waiting&&await g(u.waiting,{type:"SKIP_WAITING"})},a=new f("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",v=>{v.isUpdate||r==null||r()});{const v=()=>{n==null||n()};a.addEventListener("waiting",v),a.addEventListener("externalwaiting",v)}a.register({immediate:e}).then(v=>{u=v,s?s("/sw.js",v):i==null||i(v)}).catch(v=>{o==null||o(v)})}}return l=d(),h}function UU(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t,[a,u]=ee.exports.useState(!1),[l,c]=ee.exports.useState(!1),[h]=ee.exports.useState(()=>$U({immediate:e,onOfflineReady(){c(!0),r==null||r()},onNeedRefresh(){u(!0),n==null||n()},onRegistered:i,onRegisteredSW:s,onRegisterError:o}));return{needRefresh:[a,u],offlineReady:[l,c],updateServiceWorker:h}}function VU(){return UU({onRegistered(t){console.log("SW Registered: "+t)},onRegisterError(t){console.log("SW registration error",t)}}),z(OU,{})}function BU(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var nd=!1;if(typeof window<"u"){var W0={get passive(){nd=!0}};window.addEventListener("testPassive",null,W0),window.removeEventListener("testPassive",null,W0)}var Sy=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),ln=[],Qs=!1,by=-1,Ra=void 0,xa=void 0,zb=function(e){return ln.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},wu=function(e){var n=e||window.event;return zb(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},jU=function(e){if(xa===void 0){var n=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;n&&r>0&&(xa=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}Ra===void 0&&(Ra=document.body.style.overflow,document.body.style.overflow="hidden")},Wb=function(){xa!==void 0&&(document.body.style.paddingRight=xa,xa=void 0),Ra!==void 0&&(document.body.style.overflow=Ra,Ra=void 0)},qU=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},zU=function(e,n){var r=e.targetTouches[0].clientY-by;return zb(e.target)?!1:n&&n.scrollTop===0&&r>0||qU(n)&&r<0?wu(e):(e.stopPropagation(),!0)},WU=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!ln.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:n||{}};ln=[].concat(BU(ln),[r]),Sy?(e.ontouchstart=function(i){i.targetTouches.length===1&&(by=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&zU(i,e)},Qs||(document.addEventListener("touchmove",wu,nd?{passive:!1}:void 0),Qs=!0)):jU(n)}},HU=function(){Sy?(ln.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Qs&&(document.removeEventListener("touchmove",wu,nd?{passive:!1}:void 0),Qs=!1),by=-1):Wb(),ln=[]},KU=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}ln=ln.filter(function(n){return n.targetElement!==e}),Sy?(e.ontouchstart=null,e.ontouchmove=null,Qs&&ln.length===0&&(document.removeEventListener("touchmove",wu,nd?{passive:!1}:void 0),Qs=!1)):ln.length||Wb()};/*!
* tabbable 6.0.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Hb=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Kc=Hb.join(","),Kb=typeof Element>"u",Mi=Kb?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Gc=!Kb&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},Gb=function(e,n,r){var i=Array.prototype.slice.apply(e.querySelectorAll(Kc));return n&&Mi.call(e,Kc)&&i.unshift(e),i=i.filter(r),i},Qb=function t(e,n,r){for(var i=[],s=Array.from(e);s.length;){var o=s.shift();if(o.tagName==="SLOT"){var a=o.assignedElements(),u=a.length?a:o.children,l=t(u,!0,r);r.flatten?i.push.apply(i,l):i.push({scope:o,candidates:l})}else{var c=Mi.call(o,Kc);c&&r.filter(o)&&(n||!e.includes(o))&&i.push(o);var h=o.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(o),d=!r.shadowRootFilter||r.shadowRootFilter(o);if(h&&d){var f=t(h===!0?o.children:h.children,!0,r);r.flatten?i.push.apply(i,f):i.push({scope:o,candidates:f})}else s.unshift.apply(s,o.children)}}return i},Yb=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},GU=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},Xb=function(e){return e.tagName==="INPUT"},QU=function(e){return Xb(e)&&e.type==="hidden"},YU=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},XU=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},JU=function(e){if(!e.name)return!0;var n=e.form||Gc(e),r=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(e.name));else try{i=r(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var s=XU(i,e.form);return!s||s===e},ZU=function(e){return Xb(e)&&e.type==="radio"},eV=function(e){return ZU(e)&&!JU(e)},tV=function(e){for(var n,r=Gc(e).host,i=!!((n=r)!==null&&n!==void 0&&n.ownerDocument.contains(r)||e.ownerDocument.contains(e));!i&&r;){var s;r=Gc(r).host,i=!!((s=r)!==null&&s!==void 0&&s.ownerDocument.contains(r))}return i},H0=function(e){var n=e.getBoundingClientRect(),r=n.width,i=n.height;return r===0&&i===0},nV=function(e,n){var r=n.displayCheck,i=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=Mi.call(e,"details>summary:first-of-type"),o=s?e.parentElement:e;if(Mi.call(o,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var a=e;e;){var u=e.parentElement,l=Gc(e);if(u&&!u.shadowRoot&&i(u)===!0)return H0(e);e.assignedSlot?e=e.assignedSlot:!u&&l!==e.ownerDocument?e=l.host:e=u}e=a}if(tV(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return H0(e);return!1},rV=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var i=n.children.item(r);if(i.tagName==="LEGEND")return Mi.call(n,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}n=n.parentElement}return!1},Qc=function(e,n){return!(n.disabled||QU(n)||nV(n,e)||YU(n)||rV(n))},Ap=function(e,n){return!(eV(n)||Yb(n)<0||!Qc(e,n))},iV=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},sV=function t(e){var n=[],r=[];return e.forEach(function(i,s){var o=!!i.scope,a=o?i.scope:i,u=Yb(a,o),l=o?t(i.candidates):a;u===0?o?n.push.apply(n,l):n.push(a):r.push({documentOrder:s,tabIndex:u,item:i,isScope:o,content:l})}),r.sort(GU).reduce(function(i,s){return s.isScope?i.push.apply(i,s.content):i.push(s.content),i},[]).concat(n)},oV=function(e,n){n=n||{};var r;return n.getShadowRoot?r=Qb([e],n.includeContainer,{filter:Ap.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:iV}):r=Gb(e,n.includeContainer,Ap.bind(null,n)),sV(r)},aV=function(e,n){n=n||{};var r;return n.getShadowRoot?r=Qb([e],n.includeContainer,{filter:Qc.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=Gb(e,n.includeContainer,Qc.bind(null,n)),r},Tl=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Mi.call(e,Kc)===!1?!1:Ap(n,e)},uV=Hb.concat("iframe").join(","),ef=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Mi.call(e,uV)===!1?!1:Qc(n,e)};/*!
* focus-trap 7.0.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function K0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function G0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K0(Object(n),!0).forEach(function(r){lV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Q0=function(){var t=[];return{activateTrap:function(n){if(t.length>0){var r=t[t.length-1];r!==n&&r.pause()}var i=t.indexOf(n);i===-1||t.splice(i,1),t.push(n)},deactivateTrap:function(n){var r=t.indexOf(n);r!==-1&&t.splice(r,1),t.length>0&&t[t.length-1].unpause()}}}(),cV=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},hV=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},dV=function(e){return e.key==="Tab"||e.keyCode===9},Y0=function(e){return setTimeout(e,0)},X0=function(e,n){var r=-1;return e.every(function(i,s){return n(i)?(r=s,!1):!0}),r},Ho=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return typeof e=="function"?e.apply(void 0,r):e},Sl=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},fV=function(e,n){var r=(n==null?void 0:n.document)||document,i=G0({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o,a=function(w,S,R){return w&&w[S]!==void 0?w[S]:i[R||S]},u=function(w){return s.containerGroups.findIndex(function(S){var R=S.container,O=S.tabbableNodes;return R.contains(w)||O.find(function(G){return G===w})})},l=function(w){var S=i[w];if(typeof S=="function"){for(var R=arguments.length,O=new Array(R>1?R-1:0),G=1;G<R;G++)O[G-1]=arguments[G];S=S.apply(void 0,O)}if(S===!0&&(S=void 0),!S){if(S===void 0||S===!1)return S;throw new Error("`".concat(w,"` was specified but was not a node, or did not return a node"))}var Ae=S;if(typeof S=="string"&&(Ae=r.querySelector(S),!Ae))throw new Error("`".concat(w,"` as selector refers to no known node"));return Ae},c=function(){var w=l("initialFocus");if(w===!1)return!1;if(w===void 0)if(u(r.activeElement)>=0)w=r.activeElement;else{var S=s.tabbableGroups[0],R=S&&S.firstTabbableNode;w=R||l("fallbackFocus")}if(!w)throw new Error("Your focus-trap needs to have at least one focusable element");return w},h=function(){if(s.containerGroups=s.containers.map(function(w){var S=oV(w,i.tabbableOptions),R=aV(w,i.tabbableOptions);return{container:w,tabbableNodes:S,focusableNodes:R,firstTabbableNode:S.length>0?S[0]:null,lastTabbableNode:S.length>0?S[S.length-1]:null,nextTabbableNode:function(G){var Ae=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,ge=R.findIndex(function(ae){return ae===G});if(!(ge<0))return Ae?R.slice(ge+1).find(function(ae){return Tl(ae,i.tabbableOptions)}):R.slice(0,ge).reverse().find(function(ae){return Tl(ae,i.tabbableOptions)})}}}),s.tabbableGroups=s.containerGroups.filter(function(w){return w.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function N(w){if(w!==!1&&w!==r.activeElement){if(!w||!w.focus){N(c());return}w.focus({preventScroll:!!i.preventScroll}),s.mostRecentlyFocusedNode=w,cV(w)&&w.select()}},f=function(w){var S=l("setReturnFocus",w);return S||(S===!1?!1:w)},g=function(w){var S=Sl(w);if(!(u(S)>=0)){if(Ho(i.clickOutsideDeactivates,w)){o.deactivate({returnFocus:i.returnFocusOnDeactivate&&!ef(S,i.tabbableOptions)});return}Ho(i.allowOutsideClick,w)||w.preventDefault()}},v=function(w){var S=Sl(w),R=u(S)>=0;R||S instanceof Document?R&&(s.mostRecentlyFocusedNode=S):(w.stopImmediatePropagation(),d(s.mostRecentlyFocusedNode||c()))},m=function(w){var S=Sl(w);h();var R=null;if(s.tabbableGroups.length>0){var O=u(S),G=O>=0?s.containerGroups[O]:void 0;if(O<0)w.shiftKey?R=s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:R=s.tabbableGroups[0].firstTabbableNode;else if(w.shiftKey){var Ae=X0(s.tabbableGroups,function(qr){var zr=qr.firstTabbableNode;return S===zr});if(Ae<0&&(G.container===S||ef(S,i.tabbableOptions)&&!Tl(S,i.tabbableOptions)&&!G.nextTabbableNode(S,!1))&&(Ae=O),Ae>=0){var ge=Ae===0?s.tabbableGroups.length-1:Ae-1,ae=s.tabbableGroups[ge];R=ae.lastTabbableNode}}else{var Yt=X0(s.tabbableGroups,function(qr){var zr=qr.lastTabbableNode;return S===zr});if(Yt<0&&(G.container===S||ef(S,i.tabbableOptions)&&!Tl(S,i.tabbableOptions)&&!G.nextTabbableNode(S))&&(Yt=O),Yt>=0){var _n=Yt===s.tabbableGroups.length-1?0:Yt+1,jr=s.tabbableGroups[_n];R=jr.firstTabbableNode}}}else R=l("fallbackFocus");R&&(w.preventDefault(),d(R))},p=function(w){if(hV(w)&&Ho(i.escapeDeactivates,w)!==!1){w.preventDefault(),o.deactivate();return}if(dV(w)){m(w);return}},y=function(w){var S=Sl(w);u(S)>=0||Ho(i.clickOutsideDeactivates,w)||Ho(i.allowOutsideClick,w)||(w.preventDefault(),w.stopImmediatePropagation())},E=function(){if(!!s.active)return Q0.activateTrap(o),s.delayInitialFocusTimer=i.delayInitialFocus?Y0(function(){d(c())}):d(c()),r.addEventListener("focusin",v,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",y,{capture:!0,passive:!1}),r.addEventListener("keydown",p,{capture:!0,passive:!1}),o},_=function(){if(!!s.active)return r.removeEventListener("focusin",v,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",y,!0),r.removeEventListener("keydown",p,!0),o};return o={get active(){return s.active},get paused(){return s.paused},activate:function(w){if(s.active)return this;var S=a(w,"onActivate"),R=a(w,"onPostActivate"),O=a(w,"checkCanFocusTrap");O||h(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=r.activeElement,S&&S();var G=function(){O&&h(),E(),R&&R()};return O?(O(s.containers.concat()).then(G,G),this):(G(),this)},deactivate:function(w){if(!s.active)return this;var S=G0({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},w);clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,_(),s.active=!1,s.paused=!1,Q0.deactivateTrap(o);var R=a(S,"onDeactivate"),O=a(S,"onPostDeactivate"),G=a(S,"checkCanReturnFocus"),Ae=a(S,"returnFocus","returnFocusOnDeactivate");R&&R();var ge=function(){Y0(function(){Ae&&d(f(s.nodeFocusedBeforeActivation)),O&&O()})};return Ae&&G?(G(f(s.nodeFocusedBeforeActivation)).then(ge,ge),this):(ge(),this)},pause:function(){return s.paused||!s.active?this:(s.paused=!0,_(),this)},unpause:function(){return!s.paused||!s.active?this:(s.paused=!1,h(),E(),this)},updateContainerElements:function(w){var S=[].concat(w).filter(Boolean);return s.containers=S.map(function(R){return typeof R=="string"?r.querySelector(R):R}),s.active&&h(),this}},o.updateContainerElements(e),o},pV={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},mV=function(t){return z("div",{style:pV,children:t.children})},gV={position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},yV=function(){return z("div",{style:gV})},vV=function(t){return er.createElement(ee.exports.Fragment,null,t.children)};function Yc(){return Yc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yc.apply(this,arguments)}var wV=function(t){var e=t.children,n=t.isOpen,r=t.close,i=t.elementId,s=i===void 0?"root":i,o=t.title,a=t.description,u=t.preventScroll,l=t.focusTrapOptions,c=t.components,h=t.additionalProps,d=ee.exports.useRef(null);return function(f,g,v){ee.exports.useEffect(function(){if(g&&f.current!==null){var m=fV(f.current,Yc({fallbackFocus:f.current},v));return m.activate(),setTimeout(function(){document.activeElement===f.current&&console.warn(`[react-hooks-use-modal]: Since there were no focusable elements in the modal, the initial focus was on the containing element.
  WAI-ARIA 1.1 states that there should be at least one focusable element in the modal.
  https://www.w3.org/TR/wai-aria-1.1/#dialog`)},100),function(){m.deactivate()}}},[v,g,f])}(d,n,ee.exports.useMemo(function(){return Yc({onDeactivate:r,clickOutsideDeactivates:!0},l)},[r,l])),function(f,g,v){ee.exports.useEffect(function(){if(f.current!==null)return v?(g?WU(f.current,{reserveScrollBarGap:!0}):KU(f.current),function(){HU()}):void 0},[g,v,f])}(d,n,u),n===!1?null:Hp.exports.createPortal(er.createElement(c.Wrapper,null,er.createElement(c.Overlay,null),er.createElement("div",{ref:d,role:"dialog","aria-modal":"true",tabIndex:-1,style:{position:"relative"}},er.createElement(c.Modal,{title:o,description:a,close:r,additionalProps:h},e))),document.getElementById(s))},EV=ee.exports.createContext({}),IV={initialValue:!1,preventScroll:!1,focusTrapOptions:{},components:{}},_V=function(t,e){var n,r,i;t===void 0&&(t="root");var s=ee.exports.useContext(EV),o=ee.exports.useMemo(function(){return Object.assign({},IV,s,e)},[s,e]),a=o.preventScroll,u=o.focusTrapOptions,l=o.components,c=ee.exports.useState(o.initialValue),h=c[0],d=c[1],f=ee.exports.useCallback(function(){d(!0)},[d]),g=ee.exports.useCallback(function(){d(!1)},[d]),v=(n=l.Wrapper)!=null?n:mV,m=(r=l.Overlay)!=null?r:yV,p=(i=l.Modal)!=null?i:vV;return[ee.exports.useCallback(function(y){return er.createElement(wV,{isOpen:h,close:g,elementId:t,title:y.title,description:y.description,preventScroll:a,focusTrapOptions:u,components:{Modal:p,Overlay:m,Wrapper:v},additionalProps:y.additionalProps},y.children)},[p,m,v,g,t,u,h,a]),f,g,h]};const En=Object.create(null);En.open="0";En.close="1";En.ping="2";En.pong="3";En.message="4";En.upgrade="5";En.noop="6";const Kl=Object.create(null);Object.keys(En).forEach(t=>{Kl[En[t]]=t});const TV={type:"error",data:"parser error"},SV=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",bV=typeof ArrayBuffer=="function",kV=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,Jb=({type:t,data:e},n,r)=>SV&&e instanceof Blob?n?r(e):J0(e,r):bV&&(e instanceof ArrayBuffer||kV(e))?n?r(e):J0(new Blob([e]),r):r(En[t]+(e||"")),J0=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+r)},n.readAsDataURL(t)},Z0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oa=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let t=0;t<Z0.length;t++)oa[Z0.charCodeAt(t)]=t;const CV=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const l=new ArrayBuffer(e),c=new Uint8Array(l);for(r=0;r<n;r+=4)s=oa[t.charCodeAt(r)],o=oa[t.charCodeAt(r+1)],a=oa[t.charCodeAt(r+2)],u=oa[t.charCodeAt(r+3)],c[i++]=s<<2|o>>4,c[i++]=(o&15)<<4|a>>2,c[i++]=(a&3)<<6|u&63;return l},NV=typeof ArrayBuffer=="function",Zb=(t,e)=>{if(typeof t!="string")return{type:"message",data:ek(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:AV(t.substring(1),e)}:Kl[n]?t.length>1?{type:Kl[n],data:t.substring(1)}:{type:Kl[n]}:TV},AV=(t,e)=>{if(NV){const n=CV(t);return ek(n,e)}else return{base64:!0,data:t}},ek=(t,e)=>{switch(e){case"blob":return t instanceof ArrayBuffer?new Blob([t]):t;case"arraybuffer":default:return t}},tk=String.fromCharCode(30),RV=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{Jb(s,!1,a=>{r[o]=a,++i===n&&e(r.join(tk))})})},xV=(t,e)=>{const n=t.split(tk),r=[];for(let i=0;i<n.length;i++){const s=Zb(n[i],e);if(r.push(s),s.type==="error")break}return r},nk=4;function Ne(t){if(t)return DV(t)}function DV(t){for(var e in Ne.prototype)t[e]=Ne.prototype[e];return t}Ne.prototype.on=Ne.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Ne.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Ne.prototype.off=Ne.prototype.removeListener=Ne.prototype.removeAllListeners=Ne.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Ne.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};Ne.prototype.emitReserved=Ne.prototype.emit;Ne.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Ne.prototype.hasListeners=function(t){return!!this.listeners(t).length};const or=(()=>typeof self<"u"?self:typeof window<"u"?window:Function("return this")())();function rk(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const OV=setTimeout,PV=clearTimeout;function rd(t,e){e.useNativeTimers?(t.setTimeoutFn=OV.bind(or),t.clearTimeoutFn=PV.bind(or)):(t.setTimeoutFn=setTimeout.bind(or),t.clearTimeoutFn=clearTimeout.bind(or))}const LV=1.33;function MV(t){return typeof t=="string"?FV(t):Math.ceil((t.byteLength||t.size)*LV)}function FV(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}class $V extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class ik extends Ne{constructor(e){super(),this.writable=!1,rd(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,n,r){return super.emitReserved("error",new $V(e,n,r)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=Zb(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const sk="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Rp=64,UV={};let eE=0,bl=0,tE;function nE(t){let e="";do e=sk[t%Rp]+e,t=Math.floor(t/Rp);while(t>0);return e}function ok(){const t=nE(+new Date);return t!==tE?(eE=0,tE=t):t+"."+nE(eE++)}for(;bl<Rp;bl++)UV[sk[bl]]=bl;function ak(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function VV(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}let uk=!1;try{uk=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const BV=uk;function lk(t){const e=t.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||BV))return new XMLHttpRequest}catch{}if(!e)try{return new or[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function jV(){}const qV=function(){return new lk({xdomain:!1}).responseType!=null}();class zV extends ik{constructor(e){if(super(e),this.polling=!1,typeof location<"u"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==r}const n=e&&e.forceBase64;this.supportsBinary=qV&&!n}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};xV(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,RV(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const n=this.opts.secure?"https":"http";let r="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=ok()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(n==="https"&&Number(this.opts.port)!==443||n==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);const i=ak(e),s=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new mn(this.uri(),e)}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class mn extends Ne{constructor(e,n){super(),rd(this,n),this.opts=n,this.method=n.method||"GET",this.uri=e,this.async=n.async!==!1,this.data=n.data!==void 0?n.data:null,this.create()}create(){const e=rk(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const n=this.xhr=new lk(e);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document<"u"&&(this.index=mn.requestsCount++,mn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr>"u"||this.xhr===null)){if(this.xhr.onreadystatechange=jV,e)try{this.xhr.abort()}catch{}typeof document<"u"&&delete mn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}mn.requestsCount=0;mn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",rE);else if(typeof addEventListener=="function"){const t="onpagehide"in or?"pagehide":"unload";addEventListener(t,rE,!1)}}function rE(){for(let t in mn.requests)mn.requests.hasOwnProperty(t)&&mn.requests[t].abort()}const ck=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),kl=or.WebSocket||or.MozWebSocket,iE=!0,WV="arraybuffer",sE=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class HV extends ik{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),n=this.opts.protocols,r=sE?{}:rk(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=iE&&!sE?n?new kl(e,n):new kl(e):new kl(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||WV,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;Jb(r,this.supportsBinary,s=>{const o={};try{iE&&this.ws.send(s)}catch{}i&&ck(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const n=this.opts.secure?"wss":"ws";let r="";this.opts.port&&(n==="wss"&&Number(this.opts.port)!==443||n==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=ok()),this.supportsBinary||(e.b64=1);const i=ak(e),s=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}check(){return!!kl}}const KV={websocket:HV,polling:zV},GV=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,QV=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function xp(t){const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=GV.exec(t||""),s={},o=14;for(;o--;)s[QV[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=YV(s,s.path),s.queryKey=XV(s,s.query),s}function YV(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function XV(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}class Zn extends Ne{constructor(e,n={}){super(),e&&typeof e=="object"&&(n=e,e=null),e?(e=xp(e),n.hostname=e.host,n.secure=e.protocol==="https"||e.protocol==="wss",n.port=e.port,e.query&&(n.query=e.query)):n.host&&(n.hostname=xp(n.host).host),rd(this,n),this.secure=n.secure!=null?n.secure:typeof location<"u"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=n.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},n),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=VV(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=nk,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts.transportOptions[e],this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new KV[e](r)}open(){let e;if(this.opts.rememberUpgrade&&Zn.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(e){let n=this.createTransport(e),r=!1;Zn.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",h=>{if(!r)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;Zn.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(c(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=n.name,this.emitReserved("upgradeError",d)}}))};function s(){r||(r=!0,c(),n.close(),n=null)}const o=h=>{const d=new Error("probe error: "+h);d.transport=n.name,s(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function u(){o("socket closed")}function l(h){n&&h.name!==n.name&&s()}const c=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",u),this.off("upgrading",l)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",u),this.once("upgrading",l),n.open()}onOpen(){if(this.readyState="open",Zn.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const n=this.upgrades.length;for(;e<n;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=e.data,this.onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=MV(i)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(e,n,r){return this.sendPacket("message",e,n,r),this}send(e,n,r){return this.sendPacket("message",e,n,r),this}sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){Zn.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const n=[];let r=0;const i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}Zn.protocol=nk;function JV(t,e="",n){let r=t;n=n||typeof location<"u"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n<"u"?t=n.protocol+"//"+t:t="https://"+t),r=xp(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const ZV=typeof ArrayBuffer=="function",eB=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,hk=Object.prototype.toString,tB=typeof Blob=="function"||typeof Blob<"u"&&hk.call(Blob)==="[object BlobConstructor]",nB=typeof File=="function"||typeof File<"u"&&hk.call(File)==="[object FileConstructor]";function ky(t){return ZV&&(t instanceof ArrayBuffer||eB(t))||tB&&t instanceof Blob||nB&&t instanceof File}function Gl(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Gl(t[n]))return!0;return!1}if(ky(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Gl(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Gl(t[n]))return!0;return!1}function rB(t){const e=[],n=t.data,r=t;return r.data=Dp(n,e),r.attachments=e.length,{packet:r,buffers:e}}function Dp(t,e){if(!t)return t;if(ky(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=Dp(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Dp(t[r],e));return n}return t}function iB(t,e){return t.data=Op(t.data,e),t.attachments=void 0,t}function Op(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Op(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Op(t[n],e));return t}const sB=5;var X;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(X||(X={}));class oB{constructor(e){this.replacer=e}encode(e){return(e.type===X.EVENT||e.type===X.ACK)&&Gl(e)?(e.type=e.type===X.EVENT?X.BINARY_EVENT:X.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===X.BINARY_EVENT||e.type===X.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=rB(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Cy extends Ne{constructor(e){super(),this.reviver=e}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e),n.type===X.BINARY_EVENT||n.type===X.BINARY_ACK?(this.reconstructor=new aB(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(ky(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(X[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===X.BINARY_EVENT||r.type===X.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Cy.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case X.CONNECT:return typeof n=="object";case X.DISCONNECT:return n===void 0;case X.CONNECT_ERROR:return typeof n=="string"||typeof n=="object";case X.EVENT:case X.BINARY_EVENT:return Array.isArray(n)&&n.length>0;case X.ACK:case X.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class aB{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=iB(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const uB=Object.freeze(Object.defineProperty({__proto__:null,protocol:sB,get PacketType(){return X},Encoder:oB,Decoder:Cy},Symbol.toStringTag,{value:"Module"}));function Wt(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const lB=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class dk extends Ne{constructor(e,n,r){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Wt(e,"open",this.onopen.bind(this)),Wt(e,"packet",this.onpacket.bind(this)),Wt(e,"error",this.onerror.bind(this)),Wt(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){if(lB.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');n.unshift(e);const r={type:X.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,a=n.pop();this._registerAckCallback(o,a),r.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,n){const r=this.flags.timeout;if(r===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===e&&this.sendBuffer.splice(s,1);n.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...s)=>{this.io.clearTimeoutFn(i),n.apply(this,[null,...s])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:X.CONNECT,data:e})}):this.packet({type:X.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case X.CONNECT:if(e.data&&e.data.sid){const i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case X.EVENT:case X.BINARY_EVENT:this.onevent(e);break;case X.ACK:case X.BINARY_ACK:this.onack(e);break;case X.DISCONNECT:this.ondisconnect();break;case X.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e)}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:X.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(n.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:X.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Eo(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Eo.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Eo.prototype.reset=function(){this.attempts=0};Eo.prototype.setMin=function(t){this.ms=t};Eo.prototype.setMax=function(t){this.max=t};Eo.prototype.setJitter=function(t){this.jitter=t};class Pp extends Ne{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,rd(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Eo({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||uB;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Zn(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Wt(n,"open",function(){r.onopen(),e&&e()}),s=Wt(n,"error",o=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",o),e?e(o):r.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&i();const a=this.setTimeoutFn(()=>{i(),n.close(),n.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Wt(e,"ping",this.onping.bind(this)),Wt(e,"data",this.ondata.bind(this)),Wt(e,"error",this.onerror.bind(this)),Wt(e,"close",this.onclose.bind(this)),Wt(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){ck(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r||(r=new dk(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Ko={};function Rs(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=JV(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Ko[i]&&s in Ko[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return a?u=new Pp(r,e):(Ko[i]||(Ko[i]=new Pp(r,e)),u=Ko[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(Rs,{Manager:Pp,Socket:dk,io:Rs,connect:Rs});function fk(t,e){return function(){return t.apply(e,arguments)}}const{toString:pk}=Object.prototype,{getPrototypeOf:Ny}=Object,Ay=(t=>e=>{const n=pk.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),zn=t=>(t=t.toLowerCase(),e=>Ay(e)===t),id=t=>e=>typeof e===t,{isArray:Zu}=Array,Lp=id("undefined");function cB(t){return t!==null&&!Lp(t)&&t.constructor!==null&&!Lp(t.constructor)&&Io(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mk=zn("ArrayBuffer");function hB(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mk(t.buffer),e}const dB=id("string"),Io=id("function"),gk=id("number"),yk=t=>t!==null&&typeof t=="object",fB=t=>t===!0||t===!1,Ql=t=>{if(Ay(t)!=="object")return!1;const e=Ny(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},pB=zn("Date"),mB=zn("File"),gB=zn("Blob"),yB=zn("FileList"),vB=t=>yk(t)&&Io(t.pipe),wB=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||pk.call(t)===e||Io(t.toString)&&t.toString()===e)},EB=zn("URLSearchParams"),IB=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function sd(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Zu(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function Mp(){const t={},e=(n,r)=>{Ql(t[r])&&Ql(n)?t[r]=Mp(t[r],n):Ql(n)?t[r]=Mp({},n):Zu(n)?t[r]=n.slice():t[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&sd(arguments[n],e);return t}const _B=(t,e,n,{allOwnKeys:r}={})=>(sd(e,(i,s)=>{n&&Io(i)?t[s]=fk(i,n):t[s]=i},{allOwnKeys:r}),t),TB=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),SB=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},bB=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ny(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kB=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},CB=t=>{if(!t)return null;if(Zu(t))return t;let e=t.length;if(!gk(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},NB=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ny(Uint8Array)),AB=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},RB=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},xB=zn("HTMLFormElement"),DB=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),oE=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),OB=zn("RegExp"),vk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};sd(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},PB=t=>{vk(t,(e,n)=>{const r=t[n];if(!!Io(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},LB=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Zu(t)?r(t):r(String(t).split(e)),n},MB=()=>{},FB=(t,e)=>(t=+t,Number.isFinite(t)?t:e),b={isArray:Zu,isArrayBuffer:mk,isBuffer:cB,isFormData:wB,isArrayBufferView:hB,isString:dB,isNumber:gk,isBoolean:fB,isObject:yk,isPlainObject:Ql,isUndefined:Lp,isDate:pB,isFile:mB,isBlob:gB,isRegExp:OB,isFunction:Io,isStream:vB,isURLSearchParams:EB,isTypedArray:NB,isFileList:yB,forEach:sd,merge:Mp,extend:_B,trim:IB,stripBOM:TB,inherits:SB,toFlatObject:bB,kindOf:Ay,kindOfTest:zn,endsWith:kB,toArray:CB,forEachEntry:AB,matchAll:RB,isHTMLForm:xB,hasOwnProperty:oE,hasOwnProp:oE,reduceDescriptors:vk,freezeMethods:PB,toObjectSet:LB,toCamelCase:DB,noop:MB,toFiniteNumber:FB};function re(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}b.inherits(re,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const wk=re.prototype,Ek={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ek[t]={value:t}});Object.defineProperties(re,Ek);Object.defineProperty(wk,"isAxiosError",{value:!0});re.from=(t,e,n,r,i,s)=>{const o=Object.create(wk);return b.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),re.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var $B=typeof self=="object"?self.FormData:window.FormData;function Fp(t){return b.isPlainObject(t)||b.isArray(t)}function Ik(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function aE(t,e,n){return t?t.concat(e).map(function(i,s){return i=Ik(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function UB(t){return b.isArray(t)&&!t.some(Fp)}const VB=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function BB(t){return t&&b.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function od(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new($B||FormData),n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!b.isUndefined(m[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&BB(e);if(!b.isFunction(i))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(b.isDate(g))return g.toISOString();if(!u&&b.isBlob(g))throw new re("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(g)||b.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,m){let p=g;if(g&&!m&&typeof g=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(b.isArray(g)&&UB(g)||b.isFileList(g)||b.endsWith(v,"[]")&&(p=b.toArray(g)))return v=Ik(v),p.forEach(function(E,_){!(b.isUndefined(E)||E===null)&&e.append(o===!0?aE([v],_,s):o===null?v:v+"[]",l(E))}),!1}return Fp(g)?!0:(e.append(aE(m,v,s),l(g)),!1)}const h=[],d=Object.assign(VB,{defaultVisitor:c,convertValue:l,isVisitable:Fp});function f(g,v){if(!b.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(g),b.forEach(g,function(p,y){(!(b.isUndefined(p)||p===null)&&i.call(e,p,b.isString(y)?y.trim():y,v,d))===!0&&f(p,v?v.concat(y):[y])}),h.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return f(t),e}function uE(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ry(t,e){this._pairs=[],t&&od(t,this,e)}const _k=Ry.prototype;_k.append=function(e,n){this._pairs.push([e,n])};_k.toString=function(e){const n=e?function(r){return e.call(this,r,uE)}:uE;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function jB(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tk(t,e,n){if(!e)return t;const r=n&&n.encode||jB,i=n&&n.serialize;let s;if(i?s=i(e,n):s=b.isURLSearchParams(e)?e.toString():new Ry(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class lE{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Sk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},qB=typeof URLSearchParams<"u"?URLSearchParams:Ry,zB=FormData,WB=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),On={isBrowser:!0,classes:{URLSearchParams:qB,FormData:zB,Blob},isStandardBrowserEnv:WB,protocols:["http","https","file","blob","url","data"]};function HB(t,e){return od(t,new On.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return On.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function KB(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function GB(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function bk(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&b.isArray(i)?i.length:o,u?(b.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!b.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&b.isArray(i[o])&&(i[o]=GB(i[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,i)=>{e(KB(r),i,n,0)}),n}return null}function QB(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new re("Request failed with status code "+n.status,[re.ERR_BAD_REQUEST,re.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const YB=On.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const u=[];u.push(n+"="+encodeURIComponent(r)),b.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),b.isString(s)&&u.push("path="+s),b.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function XB(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function JB(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function kk(t,e){return t&&!XB(e)?JB(t,e):e}const ZB=On.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=b.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function el(t,e,n){re.call(this,t==null?"canceled":t,re.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(el,re,{__CANCEL__:!0});function e2(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const t2=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),n2=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&t2[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},cE=Symbol("internals"),Ck=Symbol("defaults");function aa(t){return t&&String(t).trim().toLowerCase()}function Yl(t){return t===!1||t==null?t:b.isArray(t)?t.map(Yl):String(t)}function r2(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function hE(t,e,n,r){if(b.isFunction(r))return r.call(this,e,n);if(!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function i2(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function s2(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}function Go(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}function $t(t,e){t&&this.set(t),this[Ck]=e||null}Object.assign($t.prototype,{set:function(t,e,n){const r=this;function i(s,o,a){const u=aa(o);if(!u)throw new Error("header name must be a non-empty string");const l=Go(r,u);l&&a!==!0&&(r[l]===!1||a===!1)||(r[l||o]=Yl(s))}return b.isPlainObject(t)?b.forEach(t,(s,o)=>{i(s,o,e)}):i(e,t,n),this},get:function(t,e){if(t=aa(t),!t)return;const n=Go(this,t);if(n){const r=this[n];if(!e)return r;if(e===!0)return r2(r);if(b.isFunction(e))return e.call(this,r,n);if(b.isRegExp(e))return e.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=aa(t),t){const n=Go(this,t);return!!(n&&(!e||hE(this,this[n],n,e)))}return!1},delete:function(t,e){const n=this;let r=!1;function i(s){if(s=aa(s),s){const o=Go(n,s);o&&(!e||hE(n,n[o],o,e))&&(delete n[o],r=!0)}}return b.isArray(t)?t.forEach(i):i(t),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,n={};return b.forEach(this,(r,i)=>{const s=Go(n,i);if(s){e[s]=Yl(r),delete e[i];return}const o=t?i2(i):String(i).trim();o!==i&&delete e[i],e[o]=Yl(r),n[o]=!0}),this},toJSON:function(t){const e=Object.create(null);return b.forEach(Object.assign({},this[Ck]||null,this),(n,r)=>{n==null||n===!1||(e[r]=t&&b.isArray(n)?n.join(", "):n)}),e}});Object.assign($t,{from:function(t){return b.isString(t)?new this(n2(t)):t instanceof this?t:new this(t)},accessor:function(t){const n=(this[cE]=this[cE]={accessors:{}}).accessors,r=this.prototype;function i(s){const o=aa(s);n[o]||(s2(r,s),n[o]=!0)}return b.isArray(t)?t.forEach(i):i(t),this}});$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);b.freezeMethods($t.prototype);b.freezeMethods($t);function o2(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),c=r[s];o||(o=l),n[i]=u,r[i]=l;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const f=c&&l-c;return f?Math.round(d*1e3/f):void 0}}function dE(t,e){let n=0;const r=o2(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a),l=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&l?(o-s)/u:void 0};c[e?"download":"upload"]=!0,t(c)}}function fE(t){return new Promise(function(n,r){let i=t.data;const s=$t.from(t.headers).normalize(),o=t.responseType;let a;function u(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}b.isFormData(i)&&On.isStandardBrowserEnv&&s.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+g))}const c=kk(t.baseURL,t.url);l.open(t.method.toUpperCase(),Tk(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const f=$t.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:t,request:l};QB(function(p){n(p),u()},function(p){r(p),u()},v),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){!l||(r(new re("Request aborted",re.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new re("Network Error",re.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Sk;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new re(g,v.clarifyTimeoutError?re.ETIMEDOUT:re.ECONNABORTED,t,l)),l=null},On.isStandardBrowserEnv){const f=(t.withCredentials||ZB(c))&&t.xsrfCookieName&&YB.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&b.forEach(s.toJSON(),function(g,v){l.setRequestHeader(v,g)}),b.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",dE(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",dE(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{!l||(r(!f||f.type?new el(null,t,l):f),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=e2(c);if(d&&On.protocols.indexOf(d)===-1){r(new re("Unsupported protocol "+d+":",re.ERR_BAD_REQUEST,t));return}l.send(i||null)})}const pE={http:fE,xhr:fE},mE={getAdapter:t=>{if(b.isString(t)){const e=pE[t];if(!t)throw Error(b.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!b.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:pE},a2={"Content-Type":"application/x-www-form-urlencoded"};function u2(){let t;return typeof XMLHttpRequest<"u"?t=mE.getAdapter("xhr"):typeof process<"u"&&b.kindOf(process)==="process"&&(t=mE.getAdapter("http")),t}function l2(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const _o={transitional:Sk,adapter:u2(),transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=b.isObject(e);if(s&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return i&&i?JSON.stringify(bk(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return HB(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return od(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),l2(e)):e}],transformResponse:[function(e){const n=this.transitional||_o.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?re.from(a,re.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:On.classes.FormData,Blob:On.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(e){_o.headers[e]={}});b.forEach(["post","put","patch"],function(e){_o.headers[e]=b.merge(a2)});function tf(t,e){const n=this||_o,r=e||n,i=$t.from(r.headers);let s=r.data;return b.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Nk(t){return!!(t&&t.__CANCEL__)}function nf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new el}function gE(t){return nf(t),t.headers=$t.from(t.headers),t.data=tf.call(t,t.transformRequest),(t.adapter||_o.adapter)(t).then(function(r){return nf(t),r.data=tf.call(t,t.transformResponse,r),r.headers=$t.from(r.headers),r},function(r){return Nk(r)||(nf(t),r&&r.response&&(r.response.data=tf.call(t,t.transformResponse,r.response),r.response.headers=$t.from(r.response.headers))),Promise.reject(r)})}function Eu(t,e){e=e||{};const n={};function r(l,c){return b.isPlainObject(l)&&b.isPlainObject(c)?b.merge(l,c):b.isPlainObject(c)?b.merge({},c):b.isArray(c)?c.slice():c}function i(l){if(b.isUndefined(e[l])){if(!b.isUndefined(t[l]))return r(void 0,t[l])}else return r(t[l],e[l])}function s(l){if(!b.isUndefined(e[l]))return r(void 0,e[l])}function o(l){if(b.isUndefined(e[l])){if(!b.isUndefined(t[l]))return r(void 0,t[l])}else return r(void 0,e[l])}function a(l){if(l in e)return r(t[l],e[l]);if(l in t)return r(void 0,t[l])}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return b.forEach(Object.keys(t).concat(Object.keys(e)),function(c){const h=u[c]||i,d=h(c);b.isUndefined(d)&&h!==a||(n[c]=d)}),n}const Ak="1.1.3",xy={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{xy[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const yE={};xy.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Ak+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new re(i(o," has been removed"+(n?" in "+n:"")),re.ERR_DEPRECATED);return n&&!yE[o]&&(yE[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function c2(t,e,n){if(typeof t!="object")throw new re("options must be an object",re.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new re("option "+s+" must be "+u,re.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new re("Unknown option "+s,re.ERR_BAD_OPTION)}}const $p={assertOptions:c2,validators:xy},Gn=$p.validators;class wi{constructor(e){this.defaults=e,this.interceptors={request:new lE,response:new lE}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Eu(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&$p.assertOptions(r,{silentJSONParsing:Gn.transitional(Gn.boolean),forcedJSONParsing:Gn.transitional(Gn.boolean),clarifyTimeoutError:Gn.transitional(Gn.boolean)},!1),i!==void 0&&$p.assertOptions(i,{encode:Gn.function,serialize:Gn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const s=n.headers&&b.merge(n.headers.common,n.headers[n.method]);s&&b.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new $t(n.headers,s);const o=[];let a=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(a=a&&g.synchronous,o.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let l,c=0,h;if(!a){const f=[gE.bind(this),void 0];for(f.unshift.apply(f,o),f.push.apply(f,u),h=f.length,l=Promise.resolve(n);c<h;)l=l.then(f[c++],f[c++]);return l}h=o.length;let d=n;for(c=0;c<h;){const f=o[c++],g=o[c++];try{d=f(d)}catch(v){g.call(this,v);break}}try{l=gE.call(this,d)}catch(f){return Promise.reject(f)}for(c=0,h=u.length;c<h;)l=l.then(u[c++],u[c++]);return l}getUri(e){e=Eu(this.defaults,e);const n=kk(e.baseURL,e.url);return Tk(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){wi.prototype[e]=function(n,r){return this.request(Eu(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(Eu(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}wi.prototype[e]=n(),wi.prototype[e+"Form"]=n(!0)});class Dy{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new el(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Dy(function(i){e=i}),cancel:e}}}function h2(t){return function(n){return t.apply(null,n)}}function d2(t){return b.isObject(t)&&t.isAxiosError===!0}function Rk(t){const e=new wi(t),n=fk(wi.prototype.request,e);return b.extend(n,wi.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Rk(Eu(t,i))},n}const xt=Rk(_o);xt.Axios=wi;xt.CanceledError=el;xt.CancelToken=Dy;xt.isCancel=Nk;xt.VERSION=Ak;xt.toFormData=od;xt.AxiosError=re;xt.Cancel=xt.CanceledError;xt.all=function(e){return Promise.all(e)};xt.spread=h2;xt.isAxiosError=d2;xt.formToJSON=t=>bk(b.isHTMLForm(t)?new FormData(t):t);window.location.host.startsWith("localhost")?Rs.connect("http://localhost:3001"):window.location.host.startsWith("192")||window.location.host.startsWith("127")?Rs.connect("http://127.0.0.1:3001"):window.location.host.startsWith("rimell")?Rs.connect("https://rimell.cc/monitor_server"):console.log("request coming from incorrect site");const f2=ee.exports.createContext();function p2(t){return _V("root",{preventScroll:!0}),z(f2.Provider,{value:{},children:t.children})}const m2=ee.exports.lazy(()=>$m(()=>import("./Dashboard.ad077cb2.js"),["assets/Dashboard.ad077cb2.js","assets/jquery.b525c19a.js"])),g2=ee.exports.lazy(()=>$m(()=>import("./Instructions.7ff1499b.js"),["assets/Instructions.7ff1499b.js","assets/jquery.b525c19a.js"]));function y2(){return ee.exports.useState(0),Mt(p2,{children:[z(VU,{}),z(ee.exports.Suspense,{fallback:z(PU,{}),children:Mt("div",{className:"App",children:[z(Nav,{}),Mt(Routes,{children:[z(Route,{path:"/",element:z(m2,{})}),z(Route,{path:"/instructions",element:z(g2,{})})]})]})})]})}/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Up(){return Up=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Up.apply(this,arguments)}var fi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fi||(fi={}));const vE="popstate";function v2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Vp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:E2(i)}return I2(e,n,null,t)}function w2(){return Math.random().toString(36).substr(2,8)}function wE(t){return{usr:t.state,key:t.key}}function Vp(t,e,n,r){return n===void 0&&(n=null),Up({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xk(e):e,{state:n,key:e&&e.key||r||w2()})}function E2(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xk(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function I2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=fi.Pop,u=null;function l(){a=fi.Pop,u&&u({action:a,location:d.location})}function c(f,g){a=fi.Push;let v=Vp(d.location,f,g);n&&n(v,f);let m=wE(v),p=d.createHref(v);try{o.pushState(m,"",p)}catch{i.location.assign(p)}s&&u&&u({action:a,location:v})}function h(f,g){a=fi.Replace;let v=Vp(d.location,f,g);n&&n(v,f);let m=wE(v),p=d.createHref(v);o.replaceState(m,"",p),s&&u&&u({action:a,location:v})}let d={get action(){return a},get location(){return t(i,o)},listen(f){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(vE,l),u=f,()=>{i.removeEventListener(vE,l),u=null}},createHref(f){return e(i,f)},push:c,replace:h,go(f){return o.go(f)}};return d}var EE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(EE||(EE={}));function _2(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function T2(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const b2=typeof Object.is=="function"?Object.is:S2,{useState:k2,useEffect:C2,useLayoutEffect:N2,useDebugValue:A2}=sf;function R2(t,e,n){const r=e(),[{inst:i},s]=k2({inst:{value:r,getSnapshot:e}});return N2(()=>{i.value=r,i.getSnapshot=e,rf(i)&&s({inst:i})},[t,r,e]),C2(()=>(rf(i)&&s({inst:i}),t(()=>{rf(i)&&s({inst:i})})),[t]),A2(r),r}function rf(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!b2(n,r)}catch{return!0}}function x2(t,e,n){return e()}const D2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",O2=!D2,P2=O2?x2:R2;"useSyncExternalStore"in sf&&(t=>t.useSyncExternalStore)(sf);const L2=ee.exports.createContext(null),Dk=ee.exports.createContext(null);function M2(){return ee.exports.useContext(Dk)!=null}var IE;(function(t){t.UseRevalidator="useRevalidator"})(IE||(IE={}));var _E;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(_E||(_E={}));function F2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=fi.Pop,navigator:s,static:o=!1}=t;M2()&&T2(!1);let a=e.replace(/^\/*/,"/"),u=ee.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=xk(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,g=ee.exports.useMemo(()=>{let v=_2(l,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:f}},[a,l,c,h,d,f]);return g==null?null:z(L2.Provider,{value:u,children:z(Dk.Provider,{children:n,value:{location:g,navigationType:i}})})}var TE;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(TE||(TE={}));new Promise(()=>{});/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $2(t){let{basename:e,children:n,window:r}=t,i=ee.exports.useRef();i.current==null&&(i.current=v2({window:r,v5Compat:!0}));let s=i.current,[o,a]=ee.exports.useState({action:s.action,location:s.location});return ee.exports.useLayoutEffect(()=>s.listen(a),[s]),z(F2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var SE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(SE||(SE={}));var bE;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(bE||(bE={}));$N.render(z(er.StrictMode,{children:z($2,{children:z(y2,{})})}),document.getElementById("root"));export{OU as F,U2 as c,z as j};
