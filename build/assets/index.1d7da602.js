function jk(t,e){return e.forEach(function(n){n&&typeof n!="string"&&!Array.isArray(n)&&Object.keys(n).forEach(function(r){if(r!=="default"&&!(r in t)){var i=Object.getOwnPropertyDescriptor(n,r);Object.defineProperty(t,r,i.get?i:{enumerable:!0,get:function(){return n[r]}})}})}),Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}const qk=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};qk();var X={exports:{}},ne={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $y=Object.getOwnPropertySymbols,zk=Object.prototype.hasOwnProperty,Wk=Object.prototype.propertyIsEnumerable;function Hk(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function Kk(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var OE=Kk()?Object.assign:function(t,e){for(var n,r=Hk(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)zk.call(n,o)&&(r[o]=n[o]);if($y){i=$y(n);for(var a=0;a<i.length;a++)Wk.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=OE,Xs=60103,PE=60106;ne.Fragment=60107;ne.StrictMode=60108;ne.Profiler=60114;var LE=60109,ME=60110,FE=60112;ne.Suspense=60113;var $E=60115,UE=60116;if(typeof Symbol=="function"&&Symbol.for){var zt=Symbol.for;Xs=zt("react.element"),PE=zt("react.portal"),ne.Fragment=zt("react.fragment"),ne.StrictMode=zt("react.strict_mode"),ne.Profiler=zt("react.profiler"),LE=zt("react.provider"),ME=zt("react.context"),FE=zt("react.forward_ref"),ne.Suspense=zt("react.suspense"),$E=zt("react.memo"),UE=zt("react.lazy")}var Uy=typeof Symbol=="function"&&Symbol.iterator;function Gk(t){return t===null||typeof t!="object"?null:(t=Uy&&t[Uy]||t["@@iterator"],typeof t=="function"?t:null)}function Su(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var VE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},BE={};function Js(t,e,n){this.props=t,this.context=e,this.refs=BE,this.updater=n||VE}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Su(85));this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jE(){}jE.prototype=Js.prototype;function Gp(t,e,n){this.props=t,this.context=e,this.refs=BE,this.updater=n||VE}var Qp=Gp.prototype=new jE;Qp.constructor=Gp;Kp(Qp,Js.prototype);Qp.isPureReactComponent=!0;var Yp={current:null},qE=Object.prototype.hasOwnProperty,zE={key:!0,ref:!0,__self:!0,__source:!0};function WE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qE.call(e,r)&&!zE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xs,type:t,key:s,ref:o,props:i,_owner:Yp.current}}function Qk(t,e){return{$$typeof:Xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xs}function Yk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vy=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Yk(""+t.key):e.toString(36)}function Rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xs:case PE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hd(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(Vy,"$&/")+"/"),Rl(i,e,n,"",function(l){return l})):i!=null&&(Xp(i)&&(i=Qk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+hd(s,a);o+=Rl(s,e,n,u,i)}else if(u=Gk(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+hd(s,a++),o+=Rl(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Su(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function rl(t,e,n){if(t==null)return t;var r=[],i=0;return Rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Xk(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var HE={current:null};function Vn(){var t=HE.current;if(t===null)throw Error(Su(321));return t}var Jk={ReactCurrentDispatcher:HE,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Yp,IsSomeRendererActing:{current:!1},assign:Kp};ne.Children={map:rl,forEach:function(t,e,n){rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return rl(t,function(){e++}),e},toArray:function(t){return rl(t,function(e){return e})||[]},only:function(t){if(!Xp(t))throw Error(Su(143));return t}};ne.Component=Js;ne.PureComponent=Gp;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jk;ne.cloneElement=function(t,e,n){if(t==null)throw Error(Su(267,t));var r=Kp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)qE.call(e,u)&&!zE.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Xs,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:ME,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:LE,_context:t},t.Consumer=t};ne.createElement=WE;ne.createFactory=function(t){var e=WE.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:FE,render:t}};ne.isValidElement=Xp;ne.lazy=function(t){return{$$typeof:UE,_payload:{_status:-1,_result:t},_init:Xk}};ne.memo=function(t,e){return{$$typeof:$E,type:t,compare:e===void 0?null:e}};ne.useCallback=function(t,e){return Vn().useCallback(t,e)};ne.useContext=function(t,e){return Vn().useContext(t,e)};ne.useDebugValue=function(){};ne.useEffect=function(t,e){return Vn().useEffect(t,e)};ne.useImperativeHandle=function(t,e,n){return Vn().useImperativeHandle(t,e,n)};ne.useLayoutEffect=function(t,e){return Vn().useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Vn().useMemo(t,e)};ne.useReducer=function(t,e,n){return Vn().useReducer(t,e,n)};ne.useRef=function(t){return Vn().useRef(t)};ne.useState=function(t){return Vn().useState(t)};ne.version="17.0.2";X.exports=ne;var rn=X.exports,cf=jk({__proto__:null,default:rn},[X.exports]),Jp={exports:{}},qt={},KE={exports:{}},GE={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var M=t.unstable_now();u(!0,M),u=null}catch(z){throw setTimeout(c,0),z}};e=function(M){u!==null?setTimeout(e,0,M):(u=M,setTimeout(c,0))},n=function(M,z){l=setTimeout(M,z)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var f=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof f!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var g=!1,v=null,m=-1,p=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},i=function(){},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):p=0<M?Math.floor(1e3/M):5};var E=new MessageChannel,S=E.port2;E.port1.onmessage=function(){if(v!==null){var M=t.unstable_now();y=M+p;try{v(!0,M)?S.postMessage(null):(g=!1,v=null)}catch(z){throw S.postMessage(null),z}}else g=!1},e=function(M){v=M,g||(g=!0,S.postMessage(null))},n=function(M,z){m=h(function(){M(t.unstable_now())},z)},r=function(){d(m),m=-1}}function N(M,z){var Y=M.length;M.push(z);e:for(;;){var Te=Y-1>>>1,He=M[Te];if(He!==void 0&&0<x(He,z))M[Te]=z,M[Y]=He,Y=Te;else break e}}function w(M){return M=M[0],M===void 0?null:M}function b(M){var z=M[0];if(z!==void 0){var Y=M.pop();if(Y!==z){M[0]=Y;e:for(var Te=0,He=M.length;Te<He;){var Hr=2*(Te+1)-1,Kr=M[Hr],To=Hr+1,Xi=M[To];if(Kr!==void 0&&0>x(Kr,Y))Xi!==void 0&&0>x(Xi,Kr)?(M[Te]=Xi,M[To]=Y,Te=To):(M[Te]=Kr,M[Hr]=Y,Te=Hr);else if(Xi!==void 0&&0>x(Xi,Y))M[Te]=Xi,M[To]=Y,Te=To;else break e}}return z}return null}function x(M,z){var Y=M.sortIndex-z.sortIndex;return Y!==0?Y:M.id-z.id}var P=[],G=[],Re=1,ye=null,ue=3,Xt=!1,Tn=!1,qr=!1;function zr(M){for(var z=w(G);z!==null;){if(z.callback===null)b(G);else if(z.startTime<=M)b(G),z.sortIndex=z.expirationTime,N(P,z);else break;z=w(G)}}function Wr(M){if(qr=!1,zr(M),!Tn)if(w(P)!==null)Tn=!0,e(cd);else{var z=w(G);z!==null&&n(Wr,z.startTime-M)}}function cd(M,z){Tn=!1,qr&&(qr=!1,r()),Xt=!0;var Y=ue;try{for(zr(z),ye=w(P);ye!==null&&(!(ye.expirationTime>z)||M&&!t.unstable_shouldYield());){var Te=ye.callback;if(typeof Te=="function"){ye.callback=null,ue=ye.priorityLevel;var He=Te(ye.expirationTime<=z);z=t.unstable_now(),typeof He=="function"?ye.callback=He:ye===w(P)&&b(P),zr(z)}else b(P);ye=w(P)}if(ye!==null)var Hr=!0;else{var Kr=w(G);Kr!==null&&n(Wr,Kr.startTime-z),Hr=!1}return Hr}finally{ye=null,ue=Y,Xt=!1}}var Bk=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){Tn||Xt||(Tn=!0,e(cd))},t.unstable_getCurrentPriorityLevel=function(){return ue},t.unstable_getFirstCallbackNode=function(){return w(P)},t.unstable_next=function(M){switch(ue){case 1:case 2:case 3:var z=3;break;default:z=ue}var Y=ue;ue=z;try{return M()}finally{ue=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Bk,t.unstable_runWithPriority=function(M,z){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var Y=ue;ue=M;try{return z()}finally{ue=Y}},t.unstable_scheduleCallback=function(M,z,Y){var Te=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Te+Y:Te):Y=Te,M){case 1:var He=-1;break;case 2:He=250;break;case 5:He=1073741823;break;case 4:He=1e4;break;default:He=5e3}return He=Y+He,M={id:Re++,callback:z,priorityLevel:M,startTime:Y,expirationTime:He,sortIndex:-1},Y>Te?(M.sortIndex=Y,N(G,M),w(P)===null&&M===w(G)&&(qr?r():qr=!0,n(Wr,Y-Te))):(M.sortIndex=He,N(P,M),Tn||Xt||(Tn=!0,e(cd))),M},t.unstable_wrapCallback=function(M){var z=ue;return function(){var Y=ue;ue=z;try{return M.apply(this,arguments)}finally{ue=Y}}}})(GE);KE.exports=GE;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh=X.exports,me=OE,Ve=KE.exports;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!eh)throw Error(D(227));var QE=new Set,Pa={};function $i(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Pa[t]=e,t=0;t<e.length;t++)QE.add(e[t])}var Mn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Zk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By=Object.prototype.hasOwnProperty,jy={},qy={};function eC(t){return By.call(qy,t)?!0:By.call(jy,t)?!1:Zk.test(t)?qy[t]=!0:(jy[t]=!0,!1)}function tC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nC(t,e,n,r){if(e===null||typeof e=="undefined"||tC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){et[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];et[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){et[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){et[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){et[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){et[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){et[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){et[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){et[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zp=/[\-:]([a-z])/g;function em(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zp,em);et[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zp,em);et[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zp,em);et[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){et[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});et.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){et[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tm(t,e,n,r){var i=et.hasOwnProperty(e)?et[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(nC(e,n,i,r)&&(n=null),r||i===null?eC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ui=eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=60103,ii=60106,Jn=60107,nm=60108,ca=60114,rm=60109,im=60110,th=60112,ha=60113,ec=60120,nh=60115,sm=60116,om=60121,am=60128,YE=60129,um=60130,hf=60131;if(typeof Symbol=="function"&&Symbol.for){var Le=Symbol.for;Xo=Le("react.element"),ii=Le("react.portal"),Jn=Le("react.fragment"),nm=Le("react.strict_mode"),ca=Le("react.profiler"),rm=Le("react.provider"),im=Le("react.context"),th=Le("react.forward_ref"),ha=Le("react.suspense"),ec=Le("react.suspense_list"),nh=Le("react.memo"),sm=Le("react.lazy"),om=Le("react.block"),Le("react.scope"),am=Le("react.opaque.id"),YE=Le("react.debug_trace_mode"),um=Le("react.offscreen"),hf=Le("react.legacy_hidden")}var zy=typeof Symbol=="function"&&Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=zy&&t[zy]||t["@@iterator"],typeof t=="function"?t:null)}var dd;function Jo(t){if(dd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dd=e&&e[1]||""}return`
`+dd+t}var fd=!1;function il(t,e){if(!t||fd)return"";fd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{fd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function rC(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=il(t.type,!1),t;case 11:return t=il(t.type.render,!1),t;case 22:return t=il(t.type._render,!1),t;case 1:return t=il(t.type,!0),t;default:return""}}function ms(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Jn:return"Fragment";case ii:return"Portal";case ca:return"Profiler";case nm:return"StrictMode";case ha:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case im:return(t.displayName||"Context")+".Consumer";case rm:return(t._context.displayName||"Context")+".Provider";case th:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case nh:return ms(t.type);case om:return ms(t._render);case sm:e=t._payload,t=t._init;try{return ms(t(e))}catch{}}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function XE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iC(t){var e=XE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=iC(t))}function JE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=XE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function df(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ZE(t,e){e=e.checked,e!=null&&tm(t,"checked",e,!1)}function ff(t,e){ZE(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function sC(t){var e="";return eh.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function mf(t,e){return t=me({children:void 0},e),(e=sC(e.children))&&(t.children=e),t}function gs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function eI(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var yf={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function tI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?tI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,nI=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==yf.svg||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function La(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oC=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){oC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function rI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function iI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=rI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aC=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wf(t,e){if(e){if(aC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Ef(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function lm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var If=null,ys=null,vs=null;function Qy(t){if(t=bu(t)){if(typeof If!="function")throw Error(D(280));var e=t.stateNode;e&&(e=uh(e),If(t.stateNode,t.type,e))}}function sI(t){ys?vs?vs.push(t):vs=[t]:ys=t}function oI(){if(ys){var t=ys,e=vs;if(vs=ys=null,Qy(t),e)for(t=0;t<e.length;t++)Qy(e[t])}}function cm(t,e){return t(e)}function aI(t,e,n,r,i){return t(e,n,r,i)}function hm(){}var uI=cm,si=!1,pd=!1;function dm(){(ys!==null||vs!==null)&&(hm(),oI())}function uC(t,e,n){if(pd)return t(e,n);pd=!0;try{return uI(t,e,n)}finally{pd=!1,dm()}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var _f=!1;if(Mn)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){_f=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{_f=!1}function lC(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var fa=!1,nc=null,rc=!1,Sf=null,cC={onError:function(t){fa=!0,nc=t}};function hC(t,e,n,r,i,s,o,a,u){fa=!1,nc=null,lC.apply(cC,arguments)}function dC(t,e,n,r,i,s,o,a,u){if(hC.apply(this,arguments),fa){if(fa){var l=nc;fa=!1,nc=null}else throw Error(D(198));rc||(rc=!0,Sf=l)}}function Vi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yy(t){if(Vi(t)!==t)throw Error(D(188))}function fC(t){var e=t.alternate;if(!e){if(e=Vi(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yy(i),t;if(s===r)return Yy(i),e;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function cI(t){if(t=fC(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Xy(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var hI,fm,dI,fI,Tf=!1,sn=[],ur=null,lr=null,cr=null,Fa=new Map,$a=new Map,Co=[],Jy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Zy(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function Ao(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=bf(e,n,r,i,s),e!==null&&(e=bu(e),e!==null&&fm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pC(t,e,n,r,i){switch(e){case"focusin":return ur=Ao(ur,t,e,n,r,i),!0;case"dragenter":return lr=Ao(lr,t,e,n,r,i),!0;case"mouseover":return cr=Ao(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fa.set(s,Ao(Fa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,$a.set(s,Ao($a.get(s)||null,t,e,n,r,i)),!0}return!1}function mC(t){var e=oi(t.target);if(e!==null){var n=Vi(e);if(n!==null){if(e=n.tag,e===13){if(e=lI(n),e!==null){t.blockedOn=e,fI(t.lanePriority,function(){Ve.unstable_runWithPriority(t.priority,function(){dI(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ym(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=bu(n),e!==null&&fm(e),t.blockedOn=n,!1;e.shift()}return!0}function ev(t,e,n){xl(t)&&n.delete(e)}function gC(){for(Tf=!1;0<sn.length;){var t=sn[0];if(t.blockedOn!==null){t=bu(t.blockedOn),t!==null&&hI(t);break}for(var e=t.targetContainers;0<e.length;){var n=ym(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&sn.shift()}ur!==null&&xl(ur)&&(ur=null),lr!==null&&xl(lr)&&(lr=null),cr!==null&&xl(cr)&&(cr=null),Fa.forEach(ev),$a.forEach(ev)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,Tf||(Tf=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,gC)))}function pI(t){function e(i){return No(i,t)}if(0<sn.length){No(sn[0],t);for(var n=1;n<sn.length;n++){var r=sn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&No(ur,t),lr!==null&&No(lr,t),cr!==null&&No(cr,t),Fa.forEach(e),$a.forEach(e),n=0;n<Co.length;n++)r=Co[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Co.length&&(n=Co[0],n.blockedOn===null);)mC(n),n.blockedOn===null&&Co.shift()}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},md={},mI={};Mn&&(mI=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function rh(t){if(md[t])return md[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mI)return md[t]=e[n];return t}var gI=rh("animationend"),yI=rh("animationiteration"),vI=rh("animationstart"),wI=rh("transitionend"),EI=new Map,pm=new Map,yC=["abort","abort",gI,"animationEnd",yI,"animationIteration",vI,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",wI,"transitionEnd","waiting","waiting"];function mm(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),pm.set(r,e),EI.set(r,i),$i(i,[r])}}var vC=Ve.unstable_now;vC();var oe=8;function rs(t){if((1&t)!==0)return oe=15,1;if((2&t)!==0)return oe=14,2;if((4&t)!==0)return oe=13,4;var e=24&t;return e!==0?(oe=12,e):(t&32)!==0?(oe=11,32):(e=192&t,e!==0?(oe=10,e):(t&256)!==0?(oe=9,256):(e=3584&t,e!==0?(oe=8,e):(t&4096)!==0?(oe=7,4096):(e=4186112&t,e!==0?(oe=6,e):(e=62914560&t,e!==0?(oe=5,e):t&67108864?(oe=4,67108864):(t&134217728)!==0?(oe=3,134217728):(e=805306368&t,e!==0?(oe=2,e):(1073741824&t)!==0?(oe=1,1073741824):(oe=8,t))))))}function wC(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function EC(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(D(358,t))}}function Ua(t,e){var n=t.pendingLanes;if(n===0)return oe=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=oe=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=rs(u),i=oe):(a&=s,a!==0&&(r=rs(a),i=oe))}else s=n&~o,s!==0?(r=rs(s),i=oe):a!==0&&(r=rs(a),i=oe);if(r===0)return 0;if(r=31-wr(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)===0){if(rs(e),i<=oe)return e;oe=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wr(e),i=1<<n,r|=t[n],e&=~i;return r}function II(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ic(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=is(24&~e),t===0?ic(10,e):t;case 10:return t=is(192&~e),t===0?ic(8,e):t;case 8:return t=is(3584&~e),t===0&&(t=is(4186112&~e),t===0&&(t=512)),t;case 2:return e=is(805306368&~e),e===0&&(e=268435456),e}throw Error(D(358,t))}function is(t){return t&-t}function gd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ih(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-wr(e),t[e]=n}var wr=Math.clz32?Math.clz32:SC,IC=Math.log,_C=Math.LN2;function SC(t){return t===0?32:31-(IC(t)/_C|0)|0}var TC=Ve.unstable_UserBlockingPriority,bC=Ve.unstable_runWithPriority,Dl=!0;function kC(t,e,n,r){si||hm();var i=gm,s=si;si=!0;try{aI(i,t,e,n,r)}finally{(si=s)||dm()}}function CC(t,e,n,r){bC(TC,gm.bind(null,t,e,n,r))}function gm(t,e,n,r){if(Dl){var i;if((i=(e&4)===0)&&0<sn.length&&-1<Jy.indexOf(t))t=bf(null,t,e,n,r),sn.push(t);else{var s=ym(t,e,n,r);if(s===null)i&&Zy(t,r);else{if(i){if(-1<Jy.indexOf(t)){t=bf(s,t,e,n,r),sn.push(t);return}if(pC(s,t,e,n,r))return;Zy(t,r)}PI(t,e,r,null,n)}}}}function ym(t,e,n,r){var i=lm(r);if(i=oi(i),i!==null){var s=Vi(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=lI(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return PI(t,e,r,i,n),null}var nr=null,vm=null,Ol=null;function _I(){if(Ol)return Ol;var t,e=vm,n=e.length,r,i="value"in nr?nr.value:nr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ol=i.slice(t,1<r?1-r:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function tv(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:tv,this.isPropagationStopped=tv,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=Ot(Zs),Tu=me({},Zs,{view:0,detail:0}),AC=Ot(Tu),yd,vd,Ro,sh=me({},Tu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Em,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(yd=t.screenX-Ro.screenX,vd=t.screenY-Ro.screenY):vd=yd=0,Ro=t),yd)},movementY:function(t){return"movementY"in t?t.movementY:vd}}),nv=Ot(sh),NC=me({},sh,{dataTransfer:0}),RC=Ot(NC),xC=me({},Tu,{relatedTarget:0}),wd=Ot(xC),DC=me({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),OC=Ot(DC),PC=me({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LC=Ot(PC),MC=me({},Zs,{data:0}),rv=Ot(MC),FC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UC[t])?!!e[t]:!1}function Em(){return VC}var BC=me({},Tu,{key:function(t){if(t.key){var e=FC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$C[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Em,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jC=Ot(BC),qC=me({},sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iv=Ot(qC),zC=me({},Tu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Em}),WC=Ot(zC),HC=me({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),KC=Ot(HC),GC=me({},sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QC=Ot(GC),YC=[9,13,27,32],Im=Mn&&"CompositionEvent"in window,pa=null;Mn&&"documentMode"in document&&(pa=document.documentMode);var XC=Mn&&"TextEvent"in window&&!pa,SI=Mn&&(!Im||pa&&8<pa&&11>=pa),sv=String.fromCharCode(32),ov=!1;function TI(t,e){switch(t){case"keyup":return YC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function JC(t,e){switch(t){case"compositionend":return bI(e);case"keypress":return e.which!==32?null:(ov=!0,sv);case"textInput":return t=e.data,t===sv&&ov?null:t;default:return null}}function ZC(t,e){if(as)return t==="compositionend"||!Im&&TI(t,e)?(t=_I(),Ol=vm=nr=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return SI&&e.locale!=="ko"?null:e.data;default:return null}}var eA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eA[t.type]:e==="textarea"}function kI(t,e,n,r){sI(r),e=sc(e,"onChange"),0<e.length&&(n=new wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ma=null,Va=null;function tA(t){xI(t,0)}function oh(t){var e=ls(t);if(JE(e))return t}function nA(t,e){if(t==="change")return e}var CI=!1;if(Mn){var Ed;if(Mn){var Id="oninput"in document;if(!Id){var uv=document.createElement("div");uv.setAttribute("oninput","return;"),Id=typeof uv.oninput=="function"}Ed=Id}else Ed=!1;CI=Ed&&(!document.documentMode||9<document.documentMode)}function lv(){ma&&(ma.detachEvent("onpropertychange",AI),Va=ma=null)}function AI(t){if(t.propertyName==="value"&&oh(Va)){var e=[];if(kI(e,Va,t,lm(t)),t=tA,si)t(e);else{si=!0;try{cm(t,e)}finally{si=!1,dm()}}}}function rA(t,e,n){t==="focusin"?(lv(),ma=e,Va=n,ma.attachEvent("onpropertychange",AI)):t==="focusout"&&lv()}function iA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oh(Va)}function sA(t,e){if(t==="click")return oh(e)}function oA(t,e){if(t==="input"||t==="change")return oh(e)}function aA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:aA,uA=Object.prototype.hasOwnProperty;function Ba(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!uA.call(e,n[r])||!Pt(t[n[r]],e[n[r]]))return!1;return!0}function cv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,e){var n=cv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cv(n)}}function NI(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?NI(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var lA=Mn&&"documentMode"in document&&11>=document.documentMode,us=null,Cf=null,ga=null,Af=!1;function fv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Af||us==null||us!==tc(r)||(r=us,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ga&&Ba(ga,r)||(ga=r,r=sc(Cf,"onSelect"),0<r.length&&(e=new wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=us)))}mm("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);mm("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);mm(yC,2);for(var pv="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),_d=0;_d<pv.length;_d++)pm.set(pv[_d],0);Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$i("onBeforeInput",["compositionend","keypress","textInput","paste"]);$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function mv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dC(r,e,void 0,t),t.currentTarget=null}function xI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;mv(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;mv(i,a,l),s=u}}}if(rc)throw t=Sf,rc=!1,Sf=null,t}function le(t,e){var n=MI(e),r=t+"__bubble";n.has(r)||(OI(e,t,2,!1),n.add(r))}var gv="_reactListening"+Math.random().toString(36).slice(2);function DI(t){t[gv]||(t[gv]=!0,QE.forEach(function(e){RI.has(e)||yv(e,!1,t,null),yv(e,!0,t,null)}))}function yv(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&RI.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=MI(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),OI(s,t,i,e),o.add(a))}function OI(t,e,n,r){var i=pm.get(e);switch(i===void 0?2:i){case 0:i=kC;break;case 1:i=CC;break;default:i=gm}n=i.bind(null,e,n,t),i=void 0,!_f||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function PI(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}uC(function(){var l=s,c=lm(n),h=[];e:{var d=EI.get(t);if(d!==void 0){var f=wm,g=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":f=jC;break;case"focusin":g="focus",f=wd;break;case"focusout":g="blur",f=wd;break;case"beforeblur":case"afterblur":f=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=nv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=RC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=WC;break;case gI:case yI:case vI:f=OC;break;case wI:f=KC;break;case"scroll":f=AC;break;case"wheel":f=QC;break;case"copy":case"cut":case"paste":f=LC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=iv}var v=(e&4)!==0,m=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var y=l,E;y!==null;){E=y;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,p!==null&&(S=Ma(y,p),S!=null&&v.push(ja(y,S,E)))),m)break;y=y.return}0<v.length&&(d=new f(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",d&&(e&16)===0&&(g=n.relatedTarget||n.fromElement)&&(oi(g)||g[eo]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=l,g=g?oi(g):null,g!==null&&(m=Vi(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=l),f!==g)){if(v=nv,S="onMouseLeave",p="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=iv,S="onPointerLeave",p="onPointerEnter",y="pointer"),m=f==null?d:ls(f),E=g==null?d:ls(g),d=new v(S,y+"leave",f,n,c),d.target=m,d.relatedTarget=E,S=null,oi(c)===l&&(v=new v(p,y+"enter",g,n,c),v.target=E,v.relatedTarget=m,S=v),m=S,f&&g)t:{for(v=f,p=g,y=0,E=v;E;E=Ji(E))y++;for(E=0,S=p;S;S=Ji(S))E++;for(;0<y-E;)v=Ji(v),y--;for(;0<E-y;)p=Ji(p),E--;for(;y--;){if(v===p||p!==null&&v===p.alternate)break t;v=Ji(v),p=Ji(p)}v=null}else v=null;f!==null&&vv(h,d,f,v,!1),g!==null&&m!==null&&vv(h,m,g,v,!0)}}e:{if(d=l?ls(l):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var N=nA;else if(av(d))if(CI)N=oA;else{N=iA;var w=rA}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=sA);if(N&&(N=N(t,l))){kI(h,N,n,c);break e}w&&w(t,d,l),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&pf(d,"number",d.value)}switch(w=l?ls(l):window,t){case"focusin":(av(w)||w.contentEditable==="true")&&(us=w,Cf=l,ga=null);break;case"focusout":ga=Cf=us=null;break;case"mousedown":Af=!0;break;case"contextmenu":case"mouseup":case"dragend":Af=!1,fv(h,n,c);break;case"selectionchange":if(lA)break;case"keydown":case"keyup":fv(h,n,c)}var b;if(Im)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else as?TI(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(SI&&n.locale!=="ko"&&(as||x!=="onCompositionStart"?x==="onCompositionEnd"&&as&&(b=_I()):(nr=c,vm="value"in nr?nr.value:nr.textContent,as=!0)),w=sc(l,x),0<w.length&&(x=new rv(x,t,null,n,c),h.push({event:x,listeners:w}),b?x.data=b:(b=bI(n),b!==null&&(x.data=b)))),(b=XC?JC(t,n):ZC(t,n))&&(l=sc(l,"onBeforeInput"),0<l.length&&(c=new rv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=b))}xI(h,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ma(t,n),s!=null&&r.unshift(ja(t,s,i)),s=Ma(t,e),s!=null&&r.push(ja(t,s,i))),t=t.return}return r}function Ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ma(n,s),u!=null&&o.unshift(ja(n,u,a))):i||(u=Ma(n,s),u!=null&&o.push(ja(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function oc(){}var Sd=null,Td=null;function LI(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Nf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var wv=typeof setTimeout=="function"?setTimeout:void 0,cA=typeof clearTimeout=="function"?clearTimeout:void 0;function _m(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ws(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Ev(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bd=0;function hA(t){return{$$typeof:am,toString:t,valueOf:t}}var ah=Math.random().toString(36).slice(2),rr="__reactFiber$"+ah,ac="__reactProps$"+ah,eo="__reactContainer$"+ah,Iv="__reactEvents$"+ah;function oi(t){var e=t[rr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[eo]||n[rr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ev(t);t!==null;){if(n=t[rr])return n;t=Ev(t)}return e}t=n,n=t.parentNode}return null}function bu(t){return t=t[rr]||t[eo],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function uh(t){return t[ac]||null}function MI(t){var e=t[Iv];return e===void 0&&(e=t[Iv]=new Set),e}var Rf=[],cs=-1;function Pr(t){return{current:t}}function ce(t){0>cs||(t.current=Rf[cs],Rf[cs]=null,cs--)}function Ee(t,e){cs++,Rf[cs]=t.current,t.current=e}var Er={},ut=Pr(Er),St=Pr(!1),Ii=Er;function Os(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(t){return t=t.childContextTypes,t!=null}function uc(){ce(St),ce(ut)}function _v(t,e,n){if(ut.current!==Er)throw Error(D(168));Ee(ut,e),Ee(St,n)}function FI(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,ms(e)||"Unknown",i));return me({},n,r)}function Ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Ii=ut.current,Ee(ut,t),Ee(St,St.current),!0}function Sv(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=FI(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,ce(St),ce(ut),Ee(ut,t)):ce(St),Ee(St,n)}var Sm=null,mi=null,dA=Ve.unstable_runWithPriority,Tm=Ve.unstable_scheduleCallback,xf=Ve.unstable_cancelCallback,fA=Ve.unstable_shouldYield,Tv=Ve.unstable_requestPaint,Df=Ve.unstable_now,pA=Ve.unstable_getCurrentPriorityLevel,lh=Ve.unstable_ImmediatePriority,$I=Ve.unstable_UserBlockingPriority,UI=Ve.unstable_NormalPriority,VI=Ve.unstable_LowPriority,BI=Ve.unstable_IdlePriority,kd={},mA=Tv!==void 0?Tv:function(){},bn=null,Ml=null,Cd=!1,bv=Df(),it=1e4>bv?Df:function(){return Df()-bv};function Ps(){switch(pA()){case lh:return 99;case $I:return 98;case UI:return 97;case VI:return 96;case BI:return 95;default:throw Error(D(332))}}function jI(t){switch(t){case 99:return lh;case 98:return $I;case 97:return UI;case 96:return VI;case 95:return BI;default:throw Error(D(332))}}function _i(t,e){return t=jI(t),dA(t,e)}function qa(t,e,n){return t=jI(t),Tm(t,e,n)}function Sn(){if(Ml!==null){var t=Ml;Ml=null,xf(t)}qI()}function qI(){if(!Cd&&bn!==null){Cd=!0;var t=0;try{var e=bn;_i(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),bn=null}catch(n){throw bn!==null&&(bn=bn.slice(t+1)),Tm(lh,Sn),n}finally{Cd=!1}}}var gA=Ui.ReactCurrentBatchConfig;function Wt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var lc=Pr(null),cc=null,hs=null,hc=null;function bm(){hc=hs=cc=null}function km(t){var e=lc.current;ce(lc),t.type._context._currentValue=e}function zI(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function Es(t,e){cc=t,hc=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Kt=!0),t.firstContext=null)}function Vt(t,e){if(hc!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(hc=t,e=1073741823),e={context:t,observedBits:e,next:null},hs===null){if(cc===null)throw Error(D(308));hs=e,cc.dependencies={lanes:0,firstContext:e,responders:null}}else hs=hs.next=e;return t._currentValue}var Xn=!1;function Cm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function WI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function kv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function za(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=t,g=s;switch(a=e,d=n,g.tag){case 1:if(f=g.payload,typeof f=="function"){h=f.call(d,h,a);break e}h=f;break e;case 3:f.flags=f.flags&-4097|64;case 0:if(f=g.payload,a=typeof f=="function"?f.call(d,h,a):f,a==null)break e;h=me({},h,a);break e;case 2:Xn=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,Cu|=o,t.lanes=o,t.memoizedState=h}}function Cv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var HI=new eh.Component().refs;function dc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ch={isMounted:function(t){return(t=t._reactInternals)?Vi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=fr(t),s=hr(r,i);s.payload=e,n!=null&&(s.callback=n),dr(t,s),pr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=fr(t),s=hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),dr(t,s),pr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=fr(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),dr(t,i),pr(t,r,n)}};function Av(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,r)||!Ba(i,s):!0}function KI(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=Tt(e)?Ii:ut.current,r=e.contextTypes,s=(r=r!=null)?Os(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ch,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ch.enqueueReplaceState(e,e.state,null)}function Of(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=HI,Cm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=Tt(e)?Ii:ut.current,i.context=Os(t,s)),za(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ch.enqueueReplaceState(i,i.state,null),za(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var ll=Array.isArray;function xo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===HI&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function cl(t,e){if(t.type!=="textarea")throw Error(D(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function GI(t){function e(m,p){if(t){var y=m.lastEffect;y!==null?(y.nextEffect=p,m.lastEffect=p):m.firstEffect=m.lastEffect=p,p.nextEffect=null,p.flags=8}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=_r(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags=2,p):y):(m.flags=2,p)):p}function o(m){return t&&m.alternate===null&&(m.flags=2),m}function a(m,p,y,E){return p===null||p.tag!==6?(p=Dd(y,m.mode,E),p.return=m,p):(p=i(p,y),p.return=m,p)}function u(m,p,y,E){return p!==null&&p.elementType===y.type?(E=i(p,y.props),E.ref=xo(m,p,y),E.return=m,E):(E=Vl(y.type,y.key,y.props,null,m.mode,E),E.ref=xo(m,p,y),E.return=m,E)}function l(m,p,y,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Od(y,m.mode,E),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function c(m,p,y,E,S){return p===null||p.tag!==7?(p=Ts(y,m.mode,E,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"||typeof p=="number")return p=Dd(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Xo:return y=Vl(p.type,p.key,p.props,null,m.mode,y),y.ref=xo(m,null,p),y.return=m,y;case ii:return p=Od(p,m.mode,y),p.return=m,p}if(ll(p)||bo(p))return p=Ts(p,m.mode,y,null),p.return=m,p;cl(m,p)}return null}function d(m,p,y,E){var S=p!==null?p.key:null;if(typeof y=="string"||typeof y=="number")return S!==null?null:a(m,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Xo:return y.key===S?y.type===Jn?c(m,p,y.props.children,E,S):u(m,p,y,E):null;case ii:return y.key===S?l(m,p,y,E):null}if(ll(y)||bo(y))return S!==null?null:c(m,p,y,E,null);cl(m,y)}return null}function f(m,p,y,E,S){if(typeof E=="string"||typeof E=="number")return m=m.get(y)||null,a(p,m,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xo:return m=m.get(E.key===null?y:E.key)||null,E.type===Jn?c(p,m,E.props.children,S,E.key):u(p,m,E,S);case ii:return m=m.get(E.key===null?y:E.key)||null,l(p,m,E,S)}if(ll(E)||bo(E))return m=m.get(y)||null,c(p,m,E,S,null);cl(p,E)}return null}function g(m,p,y,E){for(var S=null,N=null,w=p,b=p=0,x=null;w!==null&&b<y.length;b++){w.index>b?(x=w,w=null):x=w.sibling;var P=d(m,w,y[b],E);if(P===null){w===null&&(w=x);break}t&&w&&P.alternate===null&&e(m,w),p=s(P,p,b),N===null?S=P:N.sibling=P,N=P,w=x}if(b===y.length)return n(m,w),S;if(w===null){for(;b<y.length;b++)w=h(m,y[b],E),w!==null&&(p=s(w,p,b),N===null?S=w:N.sibling=w,N=w);return S}for(w=r(m,w);b<y.length;b++)x=f(w,m,b,y[b],E),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?b:x.key),p=s(x,p,b),N===null?S=x:N.sibling=x,N=x);return t&&w.forEach(function(G){return e(m,G)}),S}function v(m,p,y,E){var S=bo(y);if(typeof S!="function")throw Error(D(150));if(y=S.call(y),y==null)throw Error(D(151));for(var N=S=null,w=p,b=p=0,x=null,P=y.next();w!==null&&!P.done;b++,P=y.next()){w.index>b?(x=w,w=null):x=w.sibling;var G=d(m,w,P.value,E);if(G===null){w===null&&(w=x);break}t&&w&&G.alternate===null&&e(m,w),p=s(G,p,b),N===null?S=G:N.sibling=G,N=G,w=x}if(P.done)return n(m,w),S;if(w===null){for(;!P.done;b++,P=y.next())P=h(m,P.value,E),P!==null&&(p=s(P,p,b),N===null?S=P:N.sibling=P,N=P);return S}for(w=r(m,w);!P.done;b++,P=y.next())P=f(w,m,b,P.value,E),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?b:P.key),p=s(P,p,b),N===null?S=P:N.sibling=P,N=P);return t&&w.forEach(function(Re){return e(m,Re)}),S}return function(m,p,y,E){var S=typeof y=="object"&&y!==null&&y.type===Jn&&y.key===null;S&&(y=y.props.children);var N=typeof y=="object"&&y!==null;if(N)switch(y.$$typeof){case Xo:e:{for(N=y.key,S=p;S!==null;){if(S.key===N){switch(S.tag){case 7:if(y.type===Jn){n(m,S.sibling),p=i(S,y.props.children),p.return=m,m=p;break e}break;default:if(S.elementType===y.type){n(m,S.sibling),p=i(S,y.props),p.ref=xo(m,S,y),p.return=m,m=p;break e}}n(m,S);break}else e(m,S);S=S.sibling}y.type===Jn?(p=Ts(y.props.children,m.mode,E,y.key),p.return=m,m=p):(E=Vl(y.type,y.key,y.props,null,m.mode,E),E.ref=xo(m,p,y),E.return=m,m=E)}return o(m);case ii:e:{for(S=y.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Od(y,m.mode,E),p.return=m,m=p}return o(m)}if(typeof y=="string"||typeof y=="number")return y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=Dd(y,m.mode,E),p.return=m,m=p),o(m);if(ll(y))return g(m,p,y,E);if(bo(y))return v(m,p,y,E);if(N&&cl(m,y),typeof y=="undefined"&&!S)switch(m.tag){case 1:case 22:case 0:case 11:case 15:throw Error(D(152,ms(m.type)||"Component"))}return n(m,p)}}var fc=GI(!0),QI=GI(!1),ku={},dn=Pr(ku),Wa=Pr(ku),Ha=Pr(ku);function ai(t){if(t===ku)throw Error(D(174));return t}function Pf(t,e){switch(Ee(Ha,e),Ee(Wa,t),Ee(dn,ku),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vf(e,t)}ce(dn),Ee(dn,e)}function Ls(){ce(dn),ce(Wa),ce(Ha)}function Rv(t){ai(Ha.current);var e=ai(dn.current),n=vf(e,t.type);e!==n&&(Ee(Wa,t),Ee(dn,n))}function Am(t){Wa.current===t&&(ce(dn),ce(Wa))}var we=Pr(0);function pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cn=null,ir=null,fn=!1;function YI(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function xv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Lf(t){if(fn){var e=ir;if(e){var n=e;if(!xv(t,e)){if(e=ws(n.nextSibling),!e||!xv(t,e)){t.flags=t.flags&-1025|2,fn=!1,Cn=t;return}YI(Cn,n)}Cn=t,ir=ws(e.firstChild)}else t.flags=t.flags&-1025|2,fn=!1,Cn=t}}function Dv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function hl(t){if(t!==Cn)return!1;if(!fn)return Dv(t),fn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Nf(e,t.memoizedProps))for(e=ir;e;)YI(t,e),e=ws(e.nextSibling);if(Dv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ir=ws(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ir=null}}else ir=Cn?ws(t.stateNode.nextSibling):null;return!0}function Ad(){ir=Cn=null,fn=!1}var Is=[];function Nm(){for(var t=0;t<Is.length;t++)Is[t]._workInProgressVersionPrimary=null;Is.length=0}var ya=Ui.ReactCurrentDispatcher,$t=Ui.ReactCurrentBatchConfig,Ka=0,Ce=null,rt=null,Ke=null,mc=!1,va=!1;function yt(){throw Error(D(321))}function Rm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pt(t[n],e[n]))return!1;return!0}function xm(t,e,n,r,i,s){if(Ka=s,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?vA:wA,t=n(r,i),va){s=0;do{if(va=!1,!(25>s))throw Error(D(301));s+=1,Ke=rt=null,e.updateQueue=null,ya.current=EA,t=n(r,i)}while(va)}if(ya.current=wc,e=rt!==null&&rt.next!==null,Ka=0,Ke=rt=Ce=null,mc=!1,e)throw Error(D(300));return t}function ui(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ce.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Bi(){if(rt===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=Ke===null?Ce.memoizedState:Ke.next;if(e!==null)Ke=e,rt=t;else{if(t===null)throw Error(D(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Ke===null?Ce.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function on(t,e){return typeof e=="function"?e(t):e}function Do(t){var e=Bi(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((Ka&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ce.lanes|=l,Cu|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,Pt(r,e.memoizedState)||(Kt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Oo(t){var e=Bi(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pt(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ov(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Ka&t)===t)&&(e._workInProgressVersionPrimary=r,Is.push(e))),t)return n(e._source);throw Is.push(e),Error(D(350))}function XI(t,e,n,r){var i=ft;if(i===null)throw Error(D(349));var s=e._getVersion,o=s(e._source),a=ya.current,u=a.useState(function(){return Ov(i,e,n)}),l=u[1],c=u[0];u=Ke;var h=t.memoizedState,d=h.refs,f=d.getSnapshot,g=h.source;h=h.subscribe;var v=Ce;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var m=s(e._source);if(!Pt(o,m)){m=n(e._source),Pt(c,m)||(l(m),m=fr(v),i.mutableReadLanes|=m&i.pendingLanes),m=i.mutableReadLanes,i.entangledLanes|=m;for(var p=i.entanglements,y=m;0<y;){var E=31-wr(y),S=1<<E;p[E]|=m,y&=~S}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var m=d.getSnapshot,p=d.setSnapshot;try{p(m(e._source));var y=fr(v);i.mutableReadLanes|=y&i.pendingLanes}catch(E){p(function(){throw E})}})},[e,r]),Pt(f,n)&&Pt(g,e)&&Pt(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:on,lastRenderedState:c},t.dispatch=l=Pm.bind(null,Ce,t),u.queue=t,u.baseQueue=null,c=Ov(i,e,n),u.memoizedState=u.baseState=c),c}function JI(t,e,n){var r=Bi();return XI(r,t,e,n)}function Po(t){var e=ui();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:on,lastRenderedState:t},t=t.dispatch=Pm.bind(null,Ce,t),[e.memoizedState,t]}function gc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Pv(t){var e=ui();return t={current:t},e.memoizedState=t}function yc(){return Bi().memoizedState}function Mf(t,e,n,r){var i=ui();Ce.flags|=t,i.memoizedState=gc(1|e,n,void 0,r===void 0?null:r)}function Dm(t,e,n,r){var i=Bi();r=r===void 0?null:r;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,r!==null&&Rm(r,o.deps)){gc(e,n,s,r);return}}Ce.flags|=t,i.memoizedState=gc(1|e,n,s,r)}function Lv(t,e){return Mf(516,4,t,e)}function vc(t,e){return Dm(516,4,t,e)}function ZI(t,e){return Dm(4,2,t,e)}function e_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function t_(t,e,n){return n=n!=null?n.concat([t]):null,Dm(4,2,e_.bind(null,e,t),n)}function Om(){}function n_(t,e){var n=Bi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function r_(t,e){var n=Bi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yA(t,e){var n=Ps();_i(98>n?98:n,function(){t(!0)}),_i(97<n?97:n,function(){var r=$t.transition;$t.transition=1;try{t(!1),e()}finally{$t.transition=r}})}function Pm(t,e,n){var r=At(),i=fr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ce||o!==null&&o===Ce)va=mc=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,Pt(u,a))return}catch{}finally{}pr(t,i,r)}}var wc={readContext:Vt,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useOpaqueIdentifier:yt,unstable_isNewReconciler:!1},vA={readContext:Vt,useCallback:function(t,e){return ui().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Lv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mf(4,2,e_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mf(4,2,t,e)},useMemo:function(t,e){var n=ui();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ui();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Pm.bind(null,Ce,t),[r.memoizedState,t]},useRef:Pv,useState:Po,useDebugValue:Om,useDeferredValue:function(t){var e=Po(t),n=e[0],r=e[1];return Lv(function(){var i=$t.transition;$t.transition=1;try{r(t)}finally{$t.transition=i}},[t]),n},useTransition:function(){var t=Po(!1),e=t[0];return t=yA.bind(null,t[1]),Pv(t),[t,e]},useMutableSource:function(t,e,n){var r=ui();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},XI(r,t,e,n)},useOpaqueIdentifier:function(){if(fn){var t=!1,e=hA(function(){throw t||(t=!0,n("r:"+(bd++).toString(36))),Error(D(355))}),n=Po(e)[1];return(Ce.mode&2)===0&&(Ce.flags|=516,gc(5,function(){n("r:"+(bd++).toString(36))},void 0,null)),e}return e="r:"+(bd++).toString(36),Po(e),e},unstable_isNewReconciler:!1},wA={readContext:Vt,useCallback:n_,useContext:Vt,useEffect:vc,useImperativeHandle:t_,useLayoutEffect:ZI,useMemo:r_,useReducer:Do,useRef:yc,useState:function(){return Do(on)},useDebugValue:Om,useDeferredValue:function(t){var e=Do(on),n=e[0],r=e[1];return vc(function(){var i=$t.transition;$t.transition=1;try{r(t)}finally{$t.transition=i}},[t]),n},useTransition:function(){var t=Do(on)[0];return[yc().current,t]},useMutableSource:JI,useOpaqueIdentifier:function(){return Do(on)[0]},unstable_isNewReconciler:!1},EA={readContext:Vt,useCallback:n_,useContext:Vt,useEffect:vc,useImperativeHandle:t_,useLayoutEffect:ZI,useMemo:r_,useReducer:Oo,useRef:yc,useState:function(){return Oo(on)},useDebugValue:Om,useDeferredValue:function(t){var e=Oo(on),n=e[0],r=e[1];return vc(function(){var i=$t.transition;$t.transition=1;try{r(t)}finally{$t.transition=i}},[t]),n},useTransition:function(){var t=Oo(on)[0];return[yc().current,t]},useMutableSource:JI,useOpaqueIdentifier:function(){return Oo(on)[0]},unstable_isNewReconciler:!1},IA=Ui.ReactCurrentOwner,Kt=!1;function vt(t,e,n,r){e.child=t===null?QI(e,null,n,r):fc(e,t.child,n,r)}function Mv(t,e,n,r,i){n=n.render;var s=e.ref;return Es(e,i),r=xm(t,e,n,r,s,i),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,An(t,e,i)):(e.flags|=1,vt(t,e,r,i),e.child)}function Fv(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Vm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,i_(t,e,o,r,i,s)):(t=Vl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)===0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Ba,n(i,r)&&t.ref===e.ref)?An(t,e,s):(e.flags|=1,t=_r(o,r),t.ref=e.ref,t.return=e,e.child=t)}function i_(t,e,n,r,i,s){if(t!==null&&Ba(t.memoizedProps,r)&&t.ref===e.ref)if(Kt=!1,(s&i)!==0)(t.flags&16384)!==0&&(Kt=!0);else return e.lanes=t.lanes,An(t,e,s);return Ff(t,e,n,r,s)}function Nd(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)===0)e.memoizedState={baseLanes:0},fl(e,n);else if((n&1073741824)!==0)e.memoizedState={baseLanes:0},fl(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},fl(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fl(e,r);return vt(t,e,i,n),e.child}function s_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Ff(t,e,n,r,i){var s=Tt(n)?Ii:ut.current;return s=Os(e,s),Es(e,i),n=xm(t,e,n,r,s,i),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,An(t,e,i)):(e.flags|=1,vt(t,e,n,i),e.child)}function $v(t,e,n,r,i){if(Tt(n)){var s=!0;Ll(e)}else s=!1;if(Es(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),KI(e,n,r),Of(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Vt(l):(l=Tt(n)?Ii:ut.current,l=Os(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Nv(e,o,r,l),Xn=!1;var d=e.memoizedState;o.state=d,za(e,r,o,i),u=e.memoizedState,a!==r||d!==u||St.current||Xn?(typeof c=="function"&&(dc(e,n,c,r),u=e.memoizedState),(a=Xn||Av(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,WI(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Wt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Vt(u):(u=Tt(n)?Ii:ut.current,u=Os(e,u));var f=n.getDerivedStateFromProps;(c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Nv(e,o,r,u),Xn=!1,d=e.memoizedState,o.state=d,za(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||St.current||Xn?(typeof f=="function"&&(dc(e,n,f,r),g=e.memoizedState),(l=Xn||Av(e,n,l,r,d,g,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return $f(t,e,n,r,s,i)}function $f(t,e,n,r,i,s){s_(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&Sv(e,n,!1),An(t,e,s);r=e.stateNode,IA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fc(e,t.child,null,s),e.child=fc(e,null,a,s)):vt(t,e,a,s),e.memoizedState=r.state,i&&Sv(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?_v(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_v(t,e.context,!1),Pf(t,e.containerInfo)}var dl={dehydrated:null,retryLane:0};function Vv(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Ee(we,i&1),t===null?(r.fallback!==void 0&&Lf(e),t=r.children,i=r.fallback,s?(t=Bv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=dl,t):typeof r.unstable_expectedLoadTime=="number"?(t=Bv(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=dl,e.lanes=33554432,t):(n=Bm({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=qv(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=dl,r):(n=jv(t,e,r.children,n),e.memoizedState=null,n):s?(r=qv(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=dl,r):(n=jv(t,e,r.children,n),e.memoizedState=null,n)}function Bv(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)===0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=Bm(e,i,0,null),n=Ts(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function jv(t,e,n,r){var i=t.child;return t=i.sibling,n=_r(i,{mode:"visible",children:n}),(e.mode&2)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function qv(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)===0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=_r(o,a),t!==null?r=_r(t,r):(r=Ts(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function zv(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),zI(t.return,e)}function Rd(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Wv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=we.current,(r&2)!==0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zv(t,n);else if(t.tag===19)zv(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(we,r),(e.mode&2)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&pc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rd(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&pc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rd(e,!0,n,null,s,e.lastEffect);break;case"together":Rd(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cu|=e.lanes,(n&e.childLanes)!==0){if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var o_,Uf,a_,u_;o_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uf=function(){};a_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ai(dn.current);var s=null;switch(n){case"input":i=df(t,i),r=df(t,r),s=[];break;case"option":i=mf(t,i),r=mf(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=gf(t,i),r=gf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=oc)}wf(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Pa.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Pa.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&le("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===am?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};u_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lo(t,e){if(!fn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _A(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Tt(e.type)&&uc(),null;case 3:return Ls(),ce(St),ce(ut),Nm(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(hl(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Uf(e),null;case 5:Am(e);var i=ai(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)a_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(D(166));return null}if(t=ai(dn.current),hl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[rr]=e,r[ac]=s,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(t=0;t<Zo.length;t++)le(Zo[t],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Wy(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Ky(r,s),le("invalid",r)}wf(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Pa.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&le("scroll",r));switch(n){case"input":sl(r),Hy(r,s,!0);break;case"textarea":sl(r),Gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=oc)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===yf.html&&(t=tI(n)),t===yf.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[rr]=e,t[ac]=r,o_(t,e,!1,!1),e.stateNode=t,o=Ef(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Zo.length;i++)le(Zo[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Wy(t,r),i=df(t,r),le("invalid",t);break;case"option":i=mf(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":Ky(t,r),i=gf(t,r),le("invalid",t);break;default:i=r}wf(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?iI(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nI(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&La(t,u):typeof u=="number"&&La(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&le("scroll",t):u!=null&&tm(t,s,u,o))}switch(n){case"input":sl(t),Hy(t,r,!1);break;case"textarea":sl(t),Gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gs(t,!!r.multiple,s,!1):r.defaultValue!=null&&gs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=oc)}LI(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)u_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));n=ai(Ha.current),ai(dn.current),hl(e)?(r=e.stateNode,n=e.memoizedProps,r[rr]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rr]=e,e.stateNode=r)}return null;case 13:return ce(we),r=e.memoizedState,(e.flags&64)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&hl(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!==0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(we.current&1)!==0?Qe===0&&(Qe=3):((Qe===0||Qe===3)&&(Qe=4),ft===null||(Cu&134217727)===0&&(no&134217727)===0||_s(ft,st))),(r||n)&&(e.flags|=4),null);case 4:return Ls(),Uf(e),t===null&&DI(e.stateNode.containerInfo),null;case 10:return km(e),null;case 17:return Tt(e.type)&&uc(),null;case 19:if(ce(we),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)Lo(r,!1);else{if(Qe!==0||t!==null&&(t.flags&64)!==0)for(t=e.child;t!==null;){if(o=pc(t),o!==null){for(e.flags|=64,Lo(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(we,we.current&1|2),e.child}t=t.sibling}r.tail!==null&&it()>Wf&&(e.flags|=64,s=!0,Lo(r,!1),e.lanes=33554432)}else{if(!s)if(t=pc(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!fn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*it()-r.renderingStartTime>Wf&&n!==1073741824&&(e.flags|=64,s=!0,Lo(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=it(),n.sibling=null,e=we.current,Ee(we,s?e&1|2:e&1),n):null;case 23:case 24:return Um(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(D(156,e.tag))}function SA(t){switch(t.tag){case 1:Tt(t.type)&&uc();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(Ls(),ce(St),ce(ut),Nm(),e=t.flags,(e&64)!==0)throw Error(D(285));return t.flags=e&-4097|64,t;case 5:return Am(t),null;case 13:return ce(we),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ce(we),null;case 4:return Ls(),null;case 10:return km(t),null;case 23:case 24:return Um(),null;default:return null}}function Lm(t,e){try{var n="",r=e;do n+=rC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TA=typeof WeakMap=="function"?WeakMap:Map;function l_(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ic||(Ic=!0,Hf=r),Vf(t,e)},n}function c_(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Vf(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(an===null?an=new Set([this]):an.add(this),Vf(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var bA=typeof WeakSet=="function"?WeakSet:Set;function Hv(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){mr(t,n)}else e.current=null}function kA(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:Wt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&_m(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(D(163))}function CA(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!==0&&(i&1)!==0&&(w_(n,t),LA(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:Wt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Cv(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Cv(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&LI(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&pI(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(D(163))}function Kv(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=rI("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Gv(t,e){if(mi&&typeof mi.onCommitFiberUnmount=="function")try{mi.onCommitFiberUnmount(Sm,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!==0)w_(e,n);else{r=e;try{i()}catch(s){mr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(Hv(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){mr(e,s)}break;case 5:Hv(e);break;case 4:h_(t,e)}}function Qv(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Yv(t){return t.tag===5||t.tag===3||t.tag===4}function Xv(t){e:{for(var e=t.return;e!==null;){if(Yv(e))break e;e=e.return}throw Error(D(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(D(161))}n.flags&16&&(La(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Yv(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Bf(t,n,e):jf(t,n,e)}function Bf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(r!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function jf(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jf(t,e,n),t=t.sibling;t!==null;)jf(t,e,n),t=t.sibling}function h_(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(D(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(Gv(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(Gv(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function xd(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[ac]=r,t==="input"&&r.type==="radio"&&r.name!=null&&ZE(n,r),Ef(t,i),e=Ef(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?iI(n,a):o==="dangerouslySetInnerHTML"?nI(n,a):o==="children"?La(n,a):tm(n,o,a,e)}switch(t){case"input":ff(n,r);break;case"textarea":eI(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?gs(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?gs(n,!!r.multiple,r.defaultValue,!0):gs(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(D(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,pI(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&($m=it(),Kv(e.child,!0)),Jv(e);return;case 19:Jv(e);return;case 17:return;case 23:case 24:Kv(e,e.memoizedState!==null);return}throw Error(D(163))}function Jv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bA),e.forEach(function(r){var i=$A.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function AA(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var NA=Math.ceil,Ec=Ui.ReactCurrentDispatcher,Mm=Ui.ReactCurrentOwner,q=0,ft=null,De=null,st=0,Si=0,qf=Pr(0),Qe=0,hh=null,to=0,Cu=0,no=0,Fm=0,zf=null,$m=0,Wf=1/0;function ro(){Wf=it()+500}var F=null,Ic=!1,Hf=null,an=null,Ir=!1,wa=null,ea=90,Kf=[],Gf=[],Dn=null,Ea=0,Qf=null,Fl=-1,kn=0,$l=0,Ia=null,Ul=!1;function At(){return(q&48)!==0?it():Fl!==-1?Fl:Fl=it()}function fr(t){if(t=t.mode,(t&2)===0)return 1;if((t&4)===0)return Ps()===99?1:2;if(kn===0&&(kn=to),gA.transition!==0){$l!==0&&($l=zf!==null?zf.pendingLanes:0),t=kn;var e=4186112&~$l;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=Ps(),(q&4)!==0&&t===98?t=ic(12,kn):(t=wC(t),t=ic(t,kn)),t}function pr(t,e,n){if(50<Ea)throw Ea=0,Qf=null,Error(D(185));if(t=dh(t,e),t===null)return null;ih(t,e,n),t===ft&&(no|=e,Qe===4&&_s(t,st));var r=Ps();e===1?(q&8)!==0&&(q&48)===0?Yf(t):(Bt(t,n),q===0&&(ro(),Sn())):((q&4)===0||r!==98&&r!==99||(Dn===null?Dn=new Set([t]):Dn.add(t)),Bt(t,n)),zf=t}function dh(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Bt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-wr(o),u=1<<a,l=s[a];if(l===-1){if((u&r)===0||(u&i)!==0){l=e,rs(u);var c=oe;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=Ua(t,t===ft?st:0),e=oe,r===0)n!==null&&(n!==kd&&xf(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==kd&&xf(n)}e===15?(n=Yf.bind(null,t),bn===null?(bn=[n],Ml=Tm(lh,qI)):bn.push(n),n=kd):e===14?n=qa(99,Yf.bind(null,t)):(n=EC(e),n=qa(n,d_.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function d_(t){if(Fl=-1,$l=kn=0,(q&48)!==0)throw Error(D(327));var e=t.callbackNode;if(Lr()&&t.callbackNode!==e)return null;var n=Ua(t,t===ft?st:0);if(n===0)return null;var r=n,i=q;q|=16;var s=g_();(ft!==t||st!==r)&&(ro(),Ss(t,r));do try{DA();break}catch(a){m_(t,a)}while(1);if(bm(),Ec.current=s,q=i,De!==null?r=0:(ft=null,st=0,r=Qe),(to&no)!==0)Ss(t,0);else if(r!==0){if(r===2&&(q|=64,t.hydrate&&(t.hydrate=!1,_m(t.containerInfo)),n=II(t),n!==0&&(r=ta(t,n))),r===1)throw e=hh,Ss(t,0),_s(t,n),Bt(t,it()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(D(345));case 2:Yr(t);break;case 3:if(_s(t,n),(n&62914560)===n&&(r=$m+500-it(),10<r)){if(Ua(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=wv(Yr.bind(null,t),r);break}Yr(t);break;case 4:if(_s(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-wr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=it()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*NA(n/1960))-n,10<n){t.timeoutHandle=wv(Yr.bind(null,t),n);break}Yr(t);break;case 5:Yr(t);break;default:throw Error(D(329))}}return Bt(t,it()),t.callbackNode===e?d_.bind(null,t):null}function _s(t,e){for(e&=~Fm,e&=~no,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wr(e),r=1<<n;t[n]=-1,e&=~r}}function Yf(t){if((q&48)!==0)throw Error(D(327));if(Lr(),t===ft&&(t.expiredLanes&st)!==0){var e=st,n=ta(t,e);(to&no)!==0&&(e=Ua(t,e),n=ta(t,e))}else e=Ua(t,0),n=ta(t,e);if(t.tag!==0&&n===2&&(q|=64,t.hydrate&&(t.hydrate=!1,_m(t.containerInfo)),e=II(t),e!==0&&(n=ta(t,e))),n===1)throw n=hh,Ss(t,0),_s(t,e),Bt(t,it()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t),Bt(t,it()),null}function RA(){if(Dn!==null){var t=Dn;Dn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,Bt(e,it())})}Sn()}function f_(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(ro(),Sn())}}function p_(t,e){var n=q;q&=-2,q|=8;try{return t(e)}finally{q=n,q===0&&(ro(),Sn())}}function fl(t,e){Ee(qf,Si),Si|=e,to|=e}function Um(){Si=qf.current,ce(qf)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cA(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&uc();break;case 3:Ls(),ce(St),ce(ut),Nm();break;case 5:Am(r);break;case 4:Ls();break;case 13:ce(we);break;case 19:ce(we);break;case 10:km(r);break;case 23:case 24:Um()}n=n.return}ft=t,De=_r(t.current,null),st=Si=to=e,Qe=0,hh=null,Fm=no=Cu=0}function m_(t,e){do{var n=De;try{if(bm(),ya.current=wc,mc){for(var r=Ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}mc=!1}if(Ka=0,Ke=rt=Ce=null,va=!1,Mm.current=null,n===null||n.return===null){Qe=1,hh=e,De=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=st,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)===0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(we.current&1)!==0,d=o;do{var f;if(f=d.tag===13){var g=d.memoizedState;if(g!==null)f=g.dehydrated!==null;else{var v=d.memoizedProps;f=v.fallback===void 0?!1:v.unstable_avoidThisFallback!==!0?!0:!h}}if(f){var m=d.updateQueue;if(m===null){var p=new Set;p.add(l),d.updateQueue=p}else m.add(l);if((d.mode&2)===0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var y=hr(-1,1);y.tag=2,dr(a,y)}a.lanes|=1;break e}u=void 0,a=e;var E=s.pingCache;if(E===null?(E=s.pingCache=new TA,u=new Set,E.set(l,u)):(u=E.get(l),u===void 0&&(u=new Set,E.set(l,u))),!u.has(a)){u.add(a);var S=FA.bind(null,s,l,a);l.then(S,S)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((ms(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}Qe!==5&&(Qe=2),u=Lm(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var N=l_(d,s,e);kv(d,N);break e;case 1:s=u;var w=d.type,b=d.stateNode;if((d.flags&64)===0&&(typeof w.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(an===null||!an.has(b)))){d.flags|=4096,e&=-e,d.lanes|=e;var x=c_(d,s,e);kv(d,x);break e}}d=d.return}while(d!==null)}v_(n)}catch(P){e=P,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function g_(){var t=Ec.current;return Ec.current=wc,t===null?wc:t}function ta(t,e){var n=q;q|=16;var r=g_();ft===t&&st===e||Ss(t,e);do try{xA();break}catch(i){m_(t,i)}while(1);if(bm(),q=n,Ec.current=r,De!==null)throw Error(D(261));return ft=null,st=0,Qe}function xA(){for(;De!==null;)y_(De)}function DA(){for(;De!==null&&!fA();)y_(De)}function y_(t){var e=E_(t.alternate,t,Si);t.memoizedProps=t.pendingProps,e===null?v_(t):De=e,Mm.current=null}function v_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)===0){if(n=_A(n,e,Si),n!==null){De=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Si&1073741824)!==0||(n.mode&4)===0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)===0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=SA(e),n!==null){n.flags&=2047,De=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);Qe===0&&(Qe=5)}function Yr(t){var e=Ps();return _i(99,OA.bind(null,t,e)),null}function OA(t,e){do Lr();while(wa!==null);if((q&48)!==0)throw Error(D(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-wr(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Dn!==null&&(r&24)===0&&Dn.has(t)&&Dn.delete(t),t===ft&&(De=ft=null,st=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=q,q|=32,Mm.current=null,Sd=Dl,o=dv(),kf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,f=0,g=0,v=o,m=null;t:for(;;){for(var p;v!==a||s!==0&&v.nodeType!==3||(h=c+s),v!==u||l!==0&&v.nodeType!==3||(d=c+l),v.nodeType===3&&(c+=v.nodeValue.length),(p=v.firstChild)!==null;)m=v,v=p;for(;;){if(v===o)break t;if(m===a&&++f===s&&(h=c),m===u&&++g===l&&(d=c),(p=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=p}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Td={focusedElem:o,selectionRange:a},Dl=!1,Ia=null,Ul=!1,F=r;do try{PA()}catch(P){if(F===null)throw Error(D(330));mr(F,P),F=F.nextEffect}while(F!==null);Ia=null,F=r;do try{for(o=t;F!==null;){var y=F.flags;if(y&16&&La(F.stateNode,""),y&128){var E=F.alternate;if(E!==null){var S=E.ref;S!==null&&(typeof S=="function"?S(null):S.current=null)}}switch(y&1038){case 2:Xv(F),F.flags&=-3;break;case 6:Xv(F),F.flags&=-3,xd(F.alternate,F);break;case 1024:F.flags&=-1025;break;case 1028:F.flags&=-1025,xd(F.alternate,F);break;case 4:xd(F.alternate,F);break;case 8:a=F,h_(o,a);var N=a.alternate;Qv(a),N!==null&&Qv(N)}F=F.nextEffect}}catch(P){if(F===null)throw Error(D(330));mr(F,P),F=F.nextEffect}while(F!==null);if(S=Td,E=dv(),y=S.focusedElem,o=S.selectionRange,E!==y&&y&&y.ownerDocument&&NI(y.ownerDocument.documentElement,y)){for(o!==null&&kf(y)&&(E=o.start,S=o.end,S===void 0&&(S=E),"selectionStart"in y?(y.selectionStart=E,y.selectionEnd=Math.min(S,y.value.length)):(S=(E=y.ownerDocument||document)&&E.defaultView||window,S.getSelection&&(S=S.getSelection(),a=y.textContent.length,N=Math.min(o.start,a),o=o.end===void 0?N:Math.min(o.end,a),!S.extend&&N>o&&(a=o,o=N,N=a),a=hv(y,N),s=hv(y,o),a&&s&&(S.rangeCount!==1||S.anchorNode!==a.node||S.anchorOffset!==a.offset||S.focusNode!==s.node||S.focusOffset!==s.offset)&&(E=E.createRange(),E.setStart(a.node,a.offset),S.removeAllRanges(),N>o?(S.addRange(E),S.extend(s.node,s.offset)):(E.setEnd(s.node,s.offset),S.addRange(E)))))),E=[],S=y;S=S.parentNode;)S.nodeType===1&&E.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<E.length;y++)S=E[y],S.element.scrollLeft=S.left,S.element.scrollTop=S.top}Dl=!!Sd,Td=Sd=null,t.current=n,F=r;do try{for(y=t;F!==null;){var w=F.flags;if(w&36&&CA(y,F.alternate,F),w&128){E=void 0;var b=F.ref;if(b!==null){var x=F.stateNode;switch(F.tag){case 5:E=x;break;default:E=x}typeof b=="function"?b(E):b.current=E}}F=F.nextEffect}}catch(P){if(F===null)throw Error(D(330));mr(F,P),F=F.nextEffect}while(F!==null);F=null,mA(),q=i}else t.current=n;if(Ir)Ir=!1,wa=t,ea=e;else for(F=r;F!==null;)e=F.nextEffect,F.nextEffect=null,F.flags&8&&(w=F,w.sibling=null,w.stateNode=null),F=e;if(r=t.pendingLanes,r===0&&(an=null),r===1?t===Qf?Ea++:(Ea=0,Qf=t):Ea=0,n=n.stateNode,mi&&typeof mi.onCommitFiberRoot=="function")try{mi.onCommitFiberRoot(Sm,n,void 0,(n.current.flags&64)===64)}catch{}if(Bt(t,it()),Ic)throw Ic=!1,t=Hf,Hf=null,t;return(q&8)!==0||Sn(),null}function PA(){for(;F!==null;){var t=F.alternate;Ul||Ia===null||((F.flags&8)!==0?Xy(F,Ia)&&(Ul=!0):F.tag===13&&AA(t,F)&&Xy(F,Ia)&&(Ul=!0));var e=F.flags;(e&256)!==0&&kA(t,F),(e&512)===0||Ir||(Ir=!0,qa(97,function(){return Lr(),null})),F=F.nextEffect}}function Lr(){if(ea!==90){var t=97<ea?97:ea;return ea=90,_i(t,MA)}return!1}function LA(t,e){Kf.push(e,t),Ir||(Ir=!0,qa(97,function(){return Lr(),null}))}function w_(t,e){Gf.push(e,t),Ir||(Ir=!0,qa(97,function(){return Lr(),null}))}function MA(){if(wa===null)return!1;var t=wa;if(wa=null,(q&48)!==0)throw Error(D(331));var e=q;q|=32;var n=Gf;Gf=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(D(330));mr(s,u)}}for(n=Kf,Kf=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(D(330));mr(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return q=e,Sn(),!0}function Zv(t,e,n){e=Lm(n,e),e=l_(t,e,1),dr(t,e),e=At(),t=dh(t,1),t!==null&&(ih(t,1,e),Bt(t,e))}function mr(t,e){if(t.tag===3)Zv(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Zv(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){t=Lm(e,t);var i=c_(n,t,1);if(dr(n,i),i=At(),n=dh(n,1),n!==null)ih(n,1,i),Bt(n,i);else if(typeof r.componentDidCatch=="function"&&(an===null||!an.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function FA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(st&n)===n&&(Qe===4||Qe===3&&(st&62914560)===st&&500>it()-$m?Ss(t,0):Fm|=n),Bt(t,e)}function $A(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)===0?e=1:(e&4)===0?e=Ps()===99?1:2:(kn===0&&(kn=to),e=is(62914560&~kn),e===0&&(e=4194304))),n=At(),t=dh(t,e),t!==null&&(ih(t,e,n),Bt(t,n))}var E_;E_=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||St.current)Kt=!0;else if((n&r)!==0)Kt=(t.flags&16384)!==0;else{switch(Kt=!1,e.tag){case 3:Uv(e),Ad();break;case 5:Rv(e);break;case 1:Tt(e.type)&&Ll(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Ee(lc,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!==0?Vv(t,e,n):(Ee(we,we.current&1),e=An(t,e,n),e!==null?e.sibling:null);Ee(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&64)!==0){if(r)return Wv(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(we,we.current),r)break;return null;case 23:case 24:return e.lanes=0,Nd(t,e,n)}return An(t,e,n)}else Kt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=Os(e,ut.current),Es(e,n),i=xm(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tt(r)){var s=!0;Ll(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cm(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&dc(e,r,o,t),i.updater=ch,e.stateNode=i,i._reactInternals=e,Of(e,r,t,n),e=$f(null,e,r,!0,s,n)}else e.tag=0,vt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=VA(i),t=Wt(i,t),s){case 0:e=Ff(null,e,i,t,n);break e;case 1:e=$v(null,e,i,t,n);break e;case 11:e=Mv(null,e,i,t,n);break e;case 14:e=Fv(null,e,i,Wt(i.type,t),r,n);break e}throw Error(D(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Ff(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),$v(t,e,r,i,n);case 3:if(Uv(e),r=e.updateQueue,t===null||r===null)throw Error(D(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,WI(t,e),za(e,r,null,n),r=e.memoizedState.element,r===i)Ad(),e=An(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(ir=ws(e.stateNode.containerInfo.firstChild),Cn=e,s=fn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Is.push(s);for(n=QI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else vt(t,e,r,n),Ad();e=e.child}return e;case 5:return Rv(e),t===null&&Lf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nf(r,i)?o=null:s!==null&&Nf(r,s)&&(e.flags|=16),s_(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return Vv(t,e,n);case 4:return Pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fc(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),Mv(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Ee(lc,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=Pt(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!St.current){e=An(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!==0){a.tag===1&&(l=hr(-1,n&-n),l.tag=2,dr(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),zI(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Es(e,n),i=Vt(i,s.unstable_observedBits),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return i=e.type,s=Wt(i,e.pendingProps),s=Wt(i.type,s),Fv(t,e,i,s,r,n);case 15:return i_(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Wt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Tt(r)?(t=!0,Ll(e)):t=!1,Es(e,n),KI(e,r,i),Of(e,r,i,n),$f(null,e,r,!0,t,n);case 19:return Wv(t,e,n);case 23:return Nd(t,e,n);case 24:return Nd(t,e,n)}throw Error(D(156,e.tag))};function UA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new UA(t,e,n,r)}function Vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VA(t){if(typeof t=="function")return Vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===th)return 11;if(t===nh)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Jn:return Ts(n.children,i,s,e);case YE:o=8,i|=16;break;case nm:o=8,i|=1;break;case ca:return t=Lt(12,n,e,i|8),t.elementType=ca,t.type=ca,t.lanes=s,t;case ha:return t=Lt(13,n,e,i),t.type=ha,t.elementType=ha,t.lanes=s,t;case ec:return t=Lt(19,n,e,i),t.elementType=ec,t.lanes=s,t;case um:return Bm(n,i,s,e);case hf:return t=Lt(24,n,e,i),t.elementType=hf,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rm:o=10;break e;case im:o=9;break e;case th:o=11;break e;case nh:o=14;break e;case sm:o=16,r=null;break e;case om:o=22;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ts(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function Bm(t,e,n,r){return t=Lt(23,t,r,e),t.elementType=um,t.lanes=n,t}function Dd(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Od(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BA(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=gd(0),this.expirationTimes=gd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gd(0),this.mutableSourceEagerHydrationData=null}function jA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _c(t,e,n,r){var i=e.current,s=At(),o=fr(i);e:if(n){n=n._reactInternals;t:{if(Vi(n)!==n||n.tag!==1)throw Error(D(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Tt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(D(171))}if(n.tag===1){var u=n.type;if(Tt(u)){n=FI(n,u,a);break e}}n=a}else n=Er;return e.context===null?e.context=n:e.pendingContext=n,e=hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),dr(i,e),pr(i,o,s),o}function Pd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ew(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jm(t,e){ew(t,e),(t=t.alternate)&&ew(t,e)}function qA(){return null}function qm(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new BA(t,e,n!=null&&n.hydrate===!0),e=Lt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Cm(e),t[eo]=n.current,DI(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}qm.prototype.render=function(t){_c(t,this._internalRoot,null,null)};qm.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;_c(null,t,null,function(){e[eo]=null})};function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zA(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new qm(t,0,e?{hydrate:!0}:void 0)}function fh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=Pd(o);a.call(l)}}_c(e,o,t,i)}else{if(s=n._reactRootContainer=zA(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=Pd(o);u.call(l)}}p_(function(){_c(e,o,t,i)})}return Pd(o)}hI=function(t){if(t.tag===13){var e=At();pr(t,4,e),jm(t,4)}};fm=function(t){if(t.tag===13){var e=At();pr(t,67108864,e),jm(t,67108864)}};dI=function(t){if(t.tag===13){var e=At(),n=fr(t);pr(t,n,e),jm(t,n)}};fI=function(t,e){return e()};If=function(t,e,n){switch(e){case"input":if(ff(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uh(r);if(!i)throw Error(D(90));JE(r),ff(r,i)}}}break;case"textarea":eI(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};cm=f_;aI=function(t,e,n,r,i){var s=q;q|=4;try{return _i(98,t.bind(null,e,n,r,i))}finally{q=s,q===0&&(ro(),Sn())}};hm=function(){(q&49)===0&&(RA(),Lr())};uI=function(t,e){var n=q;q|=2;try{return t(e)}finally{q=n,q===0&&(ro(),Sn())}};function I_(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(e))throw Error(D(200));return jA(t,e,null,n)}var WA={Events:[bu,ls,uh,sI,oI,Lr,{current:!1}]},Mo={findFiberByHostInstance:oi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},HA={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cI(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||qA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{Sm=pl.inject(HA),mi=pl}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WA;qt.createPortal=I_;qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):Error(D(268,Object.keys(t)));return t=cI(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t,e){var n=q;if((n&48)!==0)return t(e);q|=1;try{if(t)return _i(99,t.bind(null,e))}finally{q=n,Sn()}};qt.hydrate=function(t,e,n){if(!Au(e))throw Error(D(200));return fh(null,t,e,!0,n)};qt.render=function(t,e,n){if(!Au(e))throw Error(D(200));return fh(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!Au(t))throw Error(D(40));return t._reactRootContainer?(p_(function(){fh(null,null,t,!1,function(){t._reactRootContainer=null,t[eo]=null})}),!0):!1};qt.unstable_batchedUpdates=f_;qt.unstable_createPortal=function(t,e){return I_(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Au(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return fh(t,e,n,!1,r)};qt.version="17.0.2";function __(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(__)}catch(t){console.error(t)}}__(),Jp.exports=qt;var KA=Jp.exports;const GA="modulepreload",tw={},QA="/",S_=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${QA}${r}`,r in tw)return;tw[r]=!0;const i=r.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":GA,i||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),i)return new Promise((a,u)=>{o.addEventListener("load",a),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
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
 */const T_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},b_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;u||(f=64,o||(d=64)),r.push(n[c],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},XA=function(t){const e=T_(t);return b_.encodeByteArray(e,!0)},Sc=function(t){return XA(t).replace(/\./g,"")},k_=function(t){try{return b_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Tc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!JA(n)||(t[n]=Tc(t[n],e[n]));return t}function JA(t){return t!=="__proto__"}/**
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
 */function ge(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZA(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function zm(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eN(){return typeof self=="object"&&self.self===self}function C_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function A_(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tN(){return!zm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ga(){return typeof indexedDB=="object"}function nN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function rN(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iN=()=>rN().__FIREBASE_DEFAULTS__,sN=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oN=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&k_(t[1]);return e&&JSON.parse(e)},N_=()=>{try{return iN()||sN()||oN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aN=()=>{var t;return(t=N_())===null||t===void 0?void 0:t.config},uN=t=>{var e;return(e=N_())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Sc(JSON.stringify(n)),Sc(JSON.stringify(o)),a].join(".")}/**
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
 */const hN="FirebaseError";class pt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hN,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pt(i,a,r)}}function dN(t,e){return t.replace(fN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fN=/\{\$([^}]+)}/g;/**
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
 */function nw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rw(s)&&rw(o)){if(!Xf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rw(t){return t!==null&&typeof t=="object"}/**
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
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function na(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function R_(t,e){const n=new mN(t,e);return n.subscribe.bind(n)}class mN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");gN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ld),i.error===void 0&&(i.error=Ld),i.complete===void 0&&(i.complete=Ld);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ld(){}/**
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
 */function V(t){return t&&t._delegate?t._delegate:t}class vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class yN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wN(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vN(t){return t===Xr?void 0:t}function wN(t){return t.instantiationMode==="EAGER"}/**
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
 */class EN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new yN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Hm=[];var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const x_={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},IN=te.INFO,_N={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},SN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_N[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ph{constructor(e){this.name=e,this._logLevel=IN,this._logHandler=SN,this._userLogHandler=null,Hm.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?x_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}function TN(t){Hm.forEach(e=>{e.setLogLevel(t)})}function bN(t,e){for(const n of Hm){let r=null;e&&e.level&&(r=x_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:te[s].toLowerCase(),message:a,args:o,type:i.name})}}}const kN=(t,e)=>e.some(n=>t instanceof n);let iw,sw;function CN(){return iw||(iw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AN(){return sw||(sw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D_=new WeakMap,Jf=new WeakMap,O_=new WeakMap,Md=new WeakMap,Km=new WeakMap;function NN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(gr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&D_.set(n,t)}).catch(()=>{}),Km.set(e,t),e}function RN(t){if(Jf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jf.set(t,e)}let Zf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xN(t){Zf=t(Zf)}function DN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fd(this),e,...n);return O_.set(r,e.sort?e.sort():[e]),gr(r)}:AN().includes(t)?function(...e){return t.apply(Fd(this),e),gr(D_.get(this))}:function(...e){return gr(t.apply(Fd(this),e))}}function ON(t){return typeof t=="function"?DN(t):(t instanceof IDBTransaction&&RN(t),kN(t,CN())?new Proxy(t,Zf):t)}function gr(t){if(t instanceof IDBRequest)return NN(t);if(Md.has(t))return Md.get(t);const e=ON(t);return e!==t&&(Md.set(t,e),Km.set(e,t)),e}const Fd=t=>Km.get(t);function PN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const LN=["get","getKey","getAll","getAllKeys","count"],MN=["put","add","delete","clear"],$d=new Map;function ow(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($d.get(e))return $d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||LN.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return $d.set(e,s),s}xN(t=>({...t,get:(e,n,r)=>ow(e,n)||t.get(e,n,r),has:(e,n)=>!!ow(e,n)||t.has(e,n)}));/**
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
 */class FN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($N(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $N(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ep="@firebase/app",aw="0.8.3";/**
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
 */const Ti=new ph("@firebase/app"),UN="@firebase/app-compat",VN="@firebase/analytics-compat",BN="@firebase/analytics",jN="@firebase/app-check-compat",qN="@firebase/app-check",zN="@firebase/auth",WN="@firebase/auth-compat",HN="@firebase/database",KN="@firebase/database-compat",GN="@firebase/functions",QN="@firebase/functions-compat",YN="@firebase/installations",XN="@firebase/installations-compat",JN="@firebase/messaging",ZN="@firebase/messaging-compat",eR="@firebase/performance",tR="@firebase/performance-compat",nR="@firebase/remote-config",rR="@firebase/remote-config-compat",iR="@firebase/storage",sR="@firebase/storage-compat",oR="@firebase/firestore",aR="@firebase/firestore-compat",uR="firebase",lR="9.13.0";/**
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
 */const Sr="[DEFAULT]",cR={[ep]:"fire-core",[UN]:"fire-core-compat",[BN]:"fire-analytics",[VN]:"fire-analytics-compat",[qN]:"fire-app-check",[jN]:"fire-app-check-compat",[zN]:"fire-auth",[WN]:"fire-auth-compat",[HN]:"fire-rtdb",[KN]:"fire-rtdb-compat",[GN]:"fire-fn",[QN]:"fire-fn-compat",[YN]:"fire-iid",[XN]:"fire-iid-compat",[JN]:"fire-fcm",[ZN]:"fire-fcm-compat",[eR]:"fire-perf",[tR]:"fire-perf-compat",[nR]:"fire-rc",[rR]:"fire-rc-compat",[iR]:"fire-gcs",[sR]:"fire-gcs-compat",[oR]:"fire-fst",[aR]:"fire-fst-compat","fire-js":"fire-js",[uR]:"fire-js-all"};/**
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
 */const Tr=new Map,Qa=new Map;function bc(t,e){try{t.container.addComponent(e)}catch(n){Ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function P_(t,e){t.container.addOrOverwriteComponent(e)}function br(t){const e=t.name;if(Qa.has(e))return Ti.debug(`There were multiple attempts to register component ${e}.`),!1;Qa.set(e,t);for(const n of Tr.values())bc(n,t);return!0}function L_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hR(t,e,n=Sr){L_(t,e).clearInstance(n)}function dR(){Qa.clear()}/**
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
 */const fR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},On=new ji("app","Firebase",fR);/**
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
 */class pR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw On.create("app-deleted",{appName:this._name})}}/**
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
 */const qi=lR;function Gm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw On.create("bad-app-name",{appName:String(i)});if(n||(n=aN()),!n)throw On.create("no-options");const s=Tr.get(i);if(s){if(Xf(n,s.options)&&Xf(r,s.config))return s;throw On.create("duplicate-app",{appName:i})}const o=new EN(i);for(const u of Qa.values())o.addComponent(u);const a=new pR(n,r,o);return Tr.set(i,a),a}function mR(t=Sr){const e=Tr.get(t);if(!e&&t===Sr)return Gm();if(!e)throw On.create("no-app",{appName:t});return e}function gR(){return Array.from(Tr.values())}async function M_(t){const e=t.name;Tr.has(e)&&(Tr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function pn(t,e,n){var r;let i=(r=cR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ti.warn(a.join(" "));return}br(new vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function F_(t,e){if(t!==null&&typeof t!="function")throw On.create("invalid-log-argument");bN(t,e)}function $_(t){TN(t)}/**
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
 */const yR="firebase-heartbeat-database",vR=1,Ya="firebase-heartbeat-store";let Ud=null;function U_(){return Ud||(Ud=PN(yR,vR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ya)}}}).catch(t=>{throw On.create("idb-open",{originalErrorMessage:t.message})})),Ud}async function wR(t){var e;try{return(await U_()).transaction(Ya).objectStore(Ya).get(V_(t))}catch(n){if(n instanceof pt)Ti.warn(n.message);else{const r=On.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Ti.warn(r.message)}}}async function uw(t,e){var n;try{const i=(await U_()).transaction(Ya,"readwrite");return await i.objectStore(Ya).put(e,V_(t)),i.done}catch(r){if(r instanceof pt)Ti.warn(r.message);else{const i=On.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Ti.warn(i.message)}}}function V_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ER=1024,IR=30*24*60*60*1e3;class _R{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lw();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=IR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lw(),{heartbeatsToSend:n,unsentEntries:r}=SR(this._heartbeatsCache.heartbeats),i=Sc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lw(){return new Date().toISOString().substring(0,10)}function SR(t,e=ER){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ga()?nN().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cw(t){return Sc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bR(t){br(new vn("platform-logger",e=>new FN(e),"PRIVATE")),br(new vn("heartbeat",e=>new _R(e),"PRIVATE")),pn(ep,aw,t),pn(ep,aw,"esm2017"),pn("fire-js","")}bR("");var kR=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:qi,_DEFAULT_ENTRY_NAME:Sr,_addComponent:bc,_addOrOverwriteComponent:P_,_apps:Tr,_clearComponents:dR,_components:Qa,_getProvider:L_,_registerComponent:br,_removeServiceInstance:hR,deleteApp:M_,getApp:mR,getApps:gR,initializeApp:Gm,onLog:F_,registerVersion:pn,setLogLevel:$_,FirebaseError:pt},Symbol.toStringTag,{value:"Module"}));/**
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
 */class CR{constructor(e,n){this._delegate=e,this.firebase=n,bc(e,new vn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),M_(this._delegate)))}_getService(e,n=Sr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Sr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){bc(this._delegate,e)}_addOrOverwriteComponent(e){P_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const AR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},hw=new ji("app-compat","Firebase",AR);/**
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
 */function NR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:pn,setLogLevel:$_,onLog:F_,apps:null,SDK_VERSION:qi,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:kR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Sr,!nw(e,l))throw hw.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=Gm(l,c);if(nw(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(br(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw hw.create("invalid-app-argument",{appName:c});return f[h]()};l.serviceProps!==void 0&&Tc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,c).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
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
 */function B_(){const t=NR(CR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:B_,extendNamespace:e,createSubscribe:R_,ErrorFactory:ji,deepExtend:Tc});function e(n){Tc(t,n)}return t}const RR=B_();/**
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
 */const dw=new ph("@firebase/app-compat"),xR="@firebase/app-compat",DR="0.1.38";/**
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
 */function OR(t){pn(xR,DR,t)}/**
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
 */if(eN()&&self.firebase!==void 0){dw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&dw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const so=RR;OR();var PR="firebase",LR="9.13.0";/**
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
 */so.registerVersion(PR,LR,"app-compat");function Qm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Fo={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Zi={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function MR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function j_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FR=MR,$R=j_,q_=new ji("auth","Firebase",j_());/**
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
 */const fw=new ph("@firebase/auth");function Bl(t,...e){fw.logLevel<=te.ERROR&&fw.error(`Auth (${qi}): ${t}`,...e)}/**
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
 */function tt(t,...e){throw Ym(t,...e)}function Je(t,...e){return Ym(t,...e)}function z_(t,e,n){const r=Object.assign(Object.assign({},$R()),{[e]:n});return new ji("auth","Firebase",r).create(e,{appName:t.name})}function oo(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&tt(t,"argument-error"),z_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q_.create(t,...e)}function R(t,e,...n){if(!t)throw Ym(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Yt(t,e){t||un(e)}/**
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
 */const pw=new Map;function Ct(t){Yt(t instanceof Function,"Expected a class definition");let e=pw.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pw.set(t,e),e)}function UR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Xa(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xm(){return mw()==="http:"||mw()==="https:"}function mw(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xm()||C_()||"connection"in navigator)?navigator.onLine:!0}function BR(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Nu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=ZA()||Wm()}get(){return VR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Jm(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class W_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const qR=new Nu(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qe(t,e,n,r,i={}){return H_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=io(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),W_.fetch()(K_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function H_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},jR),e);try{const i=new zR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ra(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ra(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ra(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ra(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw z_(t,c,l);tt(t,c)}}catch(i){if(i instanceof pt)throw i;tt(t,"network-request-failed")}}async function Bn(t,e,n,r,i={}){const s=await qe(t,e,n,r,i);return"mfaPendingCredential"in s&&tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function K_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Jm(t.config,i):`${t.config.apiScheme}://${i}`}class zR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),qR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function WR(t,e){return qe(t,"POST","/v1/accounts:delete",e)}async function HR(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function KR(t,e){return qe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _a(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GR(t,e=!1){const n=V(t),r=await n.getIdToken(e),i=mh(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_a(Vd(i.auth_time)),issuedAtTime:_a(Vd(i.iat)),expirationTime:_a(Vd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vd(t){return Number(t)*1e3}function mh(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=k_(r);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function QR(t){const e=mh(t);return R(e,"internal-error"),R(typeof e.exp!="undefined","internal-error"),R(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pt&&YR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class G_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fn(t,KR(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ex(s.providerUserInfo):[],a=ZR(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new G_(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function JR(t){const e=V(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ex(t){return t.map(e=>{var{providerId:n}=e,r=Qm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tx(t,e){const n=await H_(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=K_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",W_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken!="undefined","internal-error"),R(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):QR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Za;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Za,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function Kn(t,e){R(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class gi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new G_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GR(this,e)}reload(){return JR(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fn(this,WR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:E,emailVerified:S,isAnonymous:N,providerData:w,stsTokenManager:b}=n;R(E&&b,e,"internal-error");const x=Za.fromJSON(this.name,b);R(typeof E=="string",e,"internal-error"),Kn(h,e.name),Kn(d,e.name),R(typeof S=="boolean",e,"internal-error"),R(typeof N=="boolean",e,"internal-error"),Kn(f,e.name),Kn(g,e.name),Kn(v,e.name),Kn(m,e.name),Kn(p,e.name),Kn(y,e.name);const P=new gi({uid:E,auth:e,email:d,emailVerified:S,displayName:h,isAnonymous:N,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:y});return w&&Array.isArray(w)&&(P.providerData=w.map(G=>Object.assign({},G))),m&&(P._redirectEventId=m),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Za;i.updateFromServerResponse(n);const s=new gi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ja(s),s}}/**
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
 */class Q_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Q_.type="NONE";const Ms=Q_;/**
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
 */function yi(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yi(this.userKey,i.apiKey,s),this.fullPersistenceKey=yi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bs(Ct(Ms),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ct(Ms);const o=yi(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=gi._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new bs(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new bs(s,e,r))}}/**
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
 */function gw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Y_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Z_(e))return"Blackberry";if(eS(e))return"Webos";if(Zm(e))return"Safari";if((e.includes("chrome/")||X_(e))&&!e.includes("edge/"))return"Chrome";if(Ru(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Y_(t=ge()){return/firefox\//i.test(t)}function Zm(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X_(t=ge()){return/crios\//i.test(t)}function J_(t=ge()){return/iemobile/i.test(t)}function Ru(t=ge()){return/android/i.test(t)}function Z_(t=ge()){return/blackberry/i.test(t)}function eS(t=ge()){return/webos/i.test(t)}function ao(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nx(t=ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function rx(t=ge()){var e;return ao(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ix(){return A_()&&document.documentMode===10}function tS(t=ge()){return ao(t)||Ru(t)||eS(t)||Z_(t)||/windows phone/i.test(t)||J_(t)}function sx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function nS(t,e=[]){let n;switch(t){case"Browser":n=gw(ge());break;case"Worker":n=`${gw(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qi}/${r}`}/**
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
 */class ox{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class ax{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yw(this),this.idTokenSubscription=new yw(this),this.beforeStateQueue=new ox(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ct(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u==null?void 0:u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ja(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?V(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ct(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ct(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Be(t){return V(t)}class yw{constructor(e){this.auth=e,this.observer=null,this.addObserver=R_(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ux(t,e,n){const r=Be(t);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rS(e),{host:o,port:a}=lx(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cx()}function rS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lx(t){const e=rS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vw(o)}}}function vw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function iS(t,e){return qe(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function sS(t,e){return qe(t,"POST","/v1/accounts:update",e)}async function hx(t,e){return qe(t,"POST","/v1/accounts:update",Pe(t,e))}/**
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
 */async function dx(t,e){return Bn(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function gh(t,e){return qe(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function fx(t,e){return gh(t,e)}async function px(t,e){return gh(t,e)}async function mx(t,e){return gh(t,e)}async function gx(t,e){return gh(t,e)}/**
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
 */async function yx(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function vx(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
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
 */class eu extends uo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dx(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yx(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return sS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vx(e,{idToken:n,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pn(t,e){return Bn(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
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
 */const wx="http://localhost";class wn extends uo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pn(e,n)}buildRequest(){const e={requestUri:wx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
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
 */async function Ex(t,e){return qe(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function Ix(t,e){return Bn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function _x(t,e){const n=await Bn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw ra(t,"account-exists-with-different-credential",n);return n}const Sx={USER_NOT_FOUND:"user-not-found"};async function Tx(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Bn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),Sx)}/**
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
 */class vi extends uo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ix(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return _x(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Tx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new vi({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function bx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kx(t){const e=ds(na(t)).link,n=e?ds(na(e)).deep_link_id:null,r=ds(na(t)).deep_link_id;return(r?ds(na(r)).link:null)||r||n||e||t}class yh{constructor(e){var n,r,i,s,o,a;const u=ds(na(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=bx((i=u.mode)!==null&&i!==void 0?i:null);R(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=kx(e);try{return new yh(n)}catch{return null}}}/**
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
 */class Mr{constructor(){this.providerId=Mr.PROVIDER_ID}static credential(e,n){return eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=yh.parseLink(n);return R(r,"argument-error"),eu._fromEmailAndCode(e,r.code,r.tenantId)}}Mr.PROVIDER_ID="password";Mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class lo extends jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ks extends lo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return R("providerId"in n&&"signInMethod"in n,"argument-error"),wn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),wn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ks.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ks.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new ks(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class Jt extends lo{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class Zt extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";/**
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
 */class en extends lo{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";/**
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
 */const Cx="http://localhost";class Fs extends uo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Pn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Fs(r,s)}static _create(e,n){return new Fs(e,n)}buildRequest(){return{requestUri:Cx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Ax="saml.";class kc extends jn{constructor(e){R(e.startsWith(Ax),"argument-error"),super(e)}static credentialFromResult(e){return kc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return kc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Fs.fromJSON(e);return R(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Fs._create(r,n)}catch{return null}}}/**
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
 */class tn extends lo{constructor(){super("twitter.com")}static credential(e,n){return wn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tn.credential(n,r)}catch{return null}}}tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";/**
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
 */async function oS(t,e){return Bn(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
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
 */class jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gi._fromIdTokenResponse(e,r,i),o=ww(r);return new jt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ww(r);return new jt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ww(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Nx(t){var e;const n=Be(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new jt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await oS(n,{returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Cc extends pt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Cc(e,n,r,i)}}function aS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function uS(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Rx(t,e){const n=V(t);await vh(!0,n,e);const{providerUserInfo:r}=await HR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=uS(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function eg(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jt._forOperation(t,"link",r)}async function vh(t,e,n){await Ja(e);const r=uS(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";R(r.has(n)===t,e.auth,i)}/**
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
 */async function lS(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await Fn(t,aS(i,s,e,t),n);R(o.idToken,i,"internal-error");const a=mh(o.idToken);R(a,i,"internal-error");const{sub:u}=a;return R(t.uid===u,i,"user-mismatch"),jt._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&tt(i,"user-mismatch"),o}}/**
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
 */async function cS(t,e,n=!1){const r="signIn",i=await aS(t,r,e),s=await jt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wh(t,e){return cS(Be(t),e)}async function hS(t,e){const n=V(t);return await vh(!1,n,e.providerId),eg(n,e)}async function dS(t,e){return lS(V(t),e)}/**
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
 */async function xx(t,e){return Bn(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
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
 */async function Dx(t,e){const n=Be(t),r=await xx(n,{token:e,returnSecureToken:!0}),i=await jt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Eh{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?tg._fromServerResponse(e,n):tt(e,"internal-error")}}class tg extends Eh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new tg(n)}}/**
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
 */function Ih(t,e,n){var r;R(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),R(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(R(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(R(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Ox(t,e,n){const r=V(t),i={requestType:"PASSWORD_RESET",email:e};n&&Ih(r,i,n),await px(r,i)}async function Px(t,e,n){await iS(V(t),{oobCode:e,newPassword:n})}async function Lx(t,e){await hx(V(t),{oobCode:e})}async function fS(t,e){const n=V(t),r=await iS(n,{oobCode:e}),i=r.requestType;switch(R(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(r.mfaInfo,n,"internal-error");default:R(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Eh._fromServerResponse(Be(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Mx(t,e){const{data:n}=await fS(V(t),e);return n.email}async function Fx(t,e,n){const r=Be(t),i=await oS(r,{returnSecureToken:!0,email:e,password:n}),s=await jt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function $x(t,e,n){return wh(V(t),Mr.credential(e,n))}/**
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
 */async function Ux(t,e,n){const r=V(t),i={requestType:"EMAIL_SIGNIN",email:e};R(n.handleCodeInApp,r,"argument-error"),n&&Ih(r,i,n),await mx(r,i)}function Vx(t,e){const n=yh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Bx(t,e,n){const r=V(t),i=Mr.credentialWithLink(e,n||Xa());return R(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wh(r,i)}/**
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
 */async function jx(t,e){return qe(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
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
 */async function qx(t,e){const n=Xm()?Xa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await jx(V(t),r);return i||[]}async function zx(t,e){const n=V(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Ih(n.auth,i,e);const{email:s}=await fx(n.auth,i);s!==t.email&&await t.reload()}async function Wx(t,e,n){const r=V(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Ih(r.auth,s,n);const{email:o}=await gx(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function Hx(t,e){return qe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Kx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=V(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fn(r,Hx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Gx(t,e){return pS(V(t),e,null)}function Qx(t,e){return pS(V(t),null,e)}async function pS(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Fn(t,sS(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function Yx(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=mh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Cs(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new Xx(s,i);case"github.com":return new Jx(s,i);case"google.com":return new Zx(s,i);case"twitter.com":return new eD(s,i,t.screenName||null);case"custom":case"anonymous":return new Cs(s,null);default:return new Cs(s,r,i)}}class Cs{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class mS extends Cs{constructor(e,n,r,i){super(e,n,r),this.username=i}}class Xx extends Cs{constructor(e,n){super(e,"facebook.com",n)}}class Jx extends mS{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Zx extends Cs{constructor(e,n){super(e,"google.com",n)}}class eD extends mS{constructor(e,n,r){super(e,"twitter.com",n,r)}}function tD(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:Yx(n)}class li{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new li("enroll",e,n)}static _fromMfaPendingCredential(e){return new li("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return li._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return li._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ng{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Be(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Eh._fromServerResponse(r,a));R(i.mfaPendingCredential,r,"internal-error");const o=li._fromMfaPendingCredential(i.mfaPendingCredential);return new ng(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await jt._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return R(n.user,r,"internal-error"),jt._forOperation(n.user,n.operationType,l);default:tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function nD(t,e){var n;const r=V(t),i=e;return R(e.customData.operationType,r,"argument-error"),R((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),ng._fromError(r,i)}/**
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
 */function rD(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function iD(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function sD(t,e){return qe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class rg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Eh._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new rg(e)}async getSession(){return li._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Fn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){var n;const r=typeof e=="string"?e:e.uid,i=await this.user.getIdToken(),s=await Fn(this.user,sD(this.user.auth,{idToken:i,mfaEnrollmentId:r}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==r),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(o){if(((n=o)===null||n===void 0?void 0:n.code)!=="auth/user-token-expired")throw o}}}const Bd=new WeakMap;function oD(t){const e=V(t);return Bd.has(e)||Bd.set(e,rg._fromUser(e)),Bd.get(e)}const Ac="__sak";/**
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
 */class gS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aD(){const t=ge();return Zm(t)||ao(t)}const uD=1e3,lD=10;class yS extends gS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aD()&&sx(),this.fallbackToPolling=tS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ix()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yS.type="LOCAL";const ig=yS;/**
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
 */class vS extends gS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vS.type="SESSION";const bi=vS;/**
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
 */function cD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await cD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=xu("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xe(){return window}function dD(t){xe().location.href=t}/**
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
 */function sg(){return typeof xe().WorkerGlobalScope!="undefined"&&typeof xe().importScripts=="function"}async function fD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mD(){return sg()?self:null}/**
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
 */const wS="firebaseLocalStorageDb",gD=1,Nc="firebaseLocalStorage",ES="fbase_key";class Du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sh(t,e){return t.transaction([Nc],e?"readwrite":"readonly").objectStore(Nc)}function yD(){const t=indexedDB.deleteDatabase(wS);return new Du(t).toPromise()}function tp(){const t=indexedDB.open(wS,gD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Nc,{keyPath:ES})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Nc)?e(r):(r.close(),await yD(),e(await tp()))})})}async function Ew(t,e,n){const r=Sh(t,!0).put({[ES]:e,value:n});return new Du(r).toPromise()}async function vD(t,e){const n=Sh(t,!1).get(e),r=await new Du(n).toPromise();return r===void 0?null:r.value}function Iw(t,e){const n=Sh(t,!0).delete(e);return new Du(n).toPromise()}const wD=800,ED=3;class IS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ED)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(mD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fD(),!this.activeServiceWorker)return;this.sender=new hD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tp();return await Ew(e,Ac,"1"),await Iw(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ew(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Iw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sh(i,!1).getAll();return new Du(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}IS.type="LOCAL";const tu=IS;/**
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
 */function ID(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function _D(t,e){return qe(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
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
 */async function SD(t){return(await qe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function TD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _S(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TD().appendChild(r)})}function SS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const bD=500,kD=6e4,ml=1e12;class CD{constructor(e){this.auth=e,this.counter=ml,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||ml;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||ml;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||ml;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class AD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;R(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ND(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},kD)},bD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ND(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const jd=SS("rcb"),RD=new Nu(3e4,6e4),xD="https://www.google.com/recaptcha/api.js?";class DD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=xe().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return R(OD(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(xe().grecaptcha):new Promise((r,i)=>{const s=xe().setTimeout(()=>{i(Je(e,"network-request-failed"))},RD.get());xe()[jd]=()=>{xe().clearTimeout(s),delete xe()[jd];const a=xe().grecaptcha;if(!a){i(Je(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${xD}?${io({onload:jd,render:"explicit",hl:n})}`;_S(o).catch(()=>{clearTimeout(s),i(Je(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=xe().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function OD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class PD{async load(e){return new CD(e)}clearedOneInstance(){}}/**
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
 */const TS="recaptcha",LD={theme:"light",type:"image"};class MD{constructor(e,n=Object.assign({},LD),r){this.parameters=n,this.type=TS,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Be(r),this.isInvisible=this.parameters.size==="invisible",R(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;R(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new PD:new DD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=xe()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(Xm()&&!sg(),this.auth,"internal-error"),await FD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await SD(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function FD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class og{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function $D(t,e,n){const r=Be(t),i=await Th(r,e,V(n));return new og(i,s=>wh(r,s))}async function UD(t,e,n){const r=V(t);await vh(!1,r,"phone");const i=await Th(r.auth,e,V(n));return new og(i,s=>hS(r,s))}async function VD(t,e,n){const r=V(t),i=await Th(r.auth,e,V(n));return new og(i,s=>dS(r,s))}async function Th(t,e,n){var r;const i=await n.verify();try{R(typeof i=="string",t,"argument-error"),R(n.type===TS,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return R(o.type==="enroll",t,"internal-error"),(await rD(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{R(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return R(a,t,"missing-multi-factor-info"),(await ID(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Ex(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function BD(t,e){await eg(V(t),e)}/**
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
 */class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=Be(e)}verifyPhoneNumber(e,n){return Th(this.auth,e,V(n))}static credential(e,n){return vi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Qt.credentialFromTaggedObject(n)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?vi._fromTokenResponse(n,r):null}}Qt.PROVIDER_ID="phone";Qt.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function zi(t,e){return e?Ct(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ag extends uo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jD(t){return cS(t.auth,new ag(t),t.bypassAuthState)}function qD(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),lS(n,new ag(t),t.bypassAuthState)}async function zD(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),eg(n,new ag(t),t.bypassAuthState)}/**
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
 */class bS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jD;case"linkViaPopup":case"linkViaRedirect":return zD;case"reauthViaPopup":case"reauthViaRedirect":return qD;default:tt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WD=new Nu(2e3,1e4);async function HD(t,e,n){const r=Be(t);oo(t,e,jn);const i=zi(r,n);return new Nn(r,"signInViaPopup",e,i).executeNotNull()}async function KD(t,e,n){const r=V(t);oo(r.auth,e,jn);const i=zi(r.auth,n);return new Nn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function GD(t,e,n){const r=V(t);oo(r.auth,e,jn);const i=zi(r.auth,n);return new Nn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Nn extends bS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,WD.get())};e()}}Nn.currentPopupAction=null;/**
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
 */const QD="pendingRedirect",Sa=new Map;class YD extends bS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sa.get(this.auth._key());if(!e){try{const r=await XD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sa.set(this.auth._key(),e)}return this.bypassAuthState||Sa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XD(t,e){const n=CS(e),r=kS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function ug(t,e){return kS(t)._set(CS(e),"true")}function JD(){Sa.clear()}function lg(t,e){Sa.set(t._key(),e)}function kS(t){return Ct(t._redirectPersistence)}function CS(t){return yi(QD,t.config.apiKey,t.name)}/**
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
 */function ZD(t,e,n){return eO(t,e,n)}async function eO(t,e,n){const r=Be(t);oo(t,e,jn);const i=zi(r,n);return await ug(i,r),i._openRedirect(r,e,"signInViaRedirect")}function tO(t,e,n){return nO(t,e,n)}async function nO(t,e,n){const r=V(t);oo(r.auth,e,jn);const i=zi(r.auth,n);await ug(i,r.auth);const s=await AS(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function rO(t,e,n){return iO(t,e,n)}async function iO(t,e,n){const r=V(t);oo(r.auth,e,jn);const i=zi(r.auth,n);await vh(!1,r,e.providerId),await ug(i,r.auth);const s=await AS(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function sO(t,e){return await Be(t)._initializationPromise,bh(t,e,!1)}async function bh(t,e,n=!1){const r=Be(t),i=zi(r,e),o=await new YD(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function AS(t){const e=xu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const oO=10*60*1e3;class NS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oO&&this.cachedEventUids.clear(),this.cachedEventUids.has(_w(e))}saveEventToCache(e){this.cachedEventUids.add(_w(e)),this.lastProcessedEventTime=Date.now()}}function _w(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RS(t);default:return!1}}/**
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
 */async function xS(t,e={}){return qe(t,"GET","/v1/projects",e)}/**
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
 */const uO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lO=/^https?/;async function cO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xS(t);for(const n of e)try{if(hO(n))return}catch{}tt(t,"unauthorized-domain")}function hO(t){const e=Xa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lO.test(n))return!1;if(uO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const dO=new Nu(3e4,6e4);function Sw(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fO(t){return new Promise((e,n)=>{var r,i,s;function o(){Sw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sw(),n(Je(t,"network-request-failed"))},timeout:dO.get()})}if(!((i=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xe().gapi)===null||s===void 0)&&s.load)o();else{const a=SS("iframefcb");return xe()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},_S(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw jl=null,e})}let jl=null;function pO(t){return jl=jl||fO(t),jl}/**
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
 */const mO=new Nu(5e3,15e3),gO="__/auth/iframe",yO="emulator/auth/iframe",vO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function EO(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Jm(e,yO):`https://${t.config.authDomain}/${gO}`,r={apiKey:e.apiKey,appName:t.name,v:qi},i=wO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${io(r).slice(1)}`}async function IO(t){const e=await pO(t),n=xe().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:EO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=xe().setTimeout(()=>{s(o)},mO.get());function u(){xe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const _O={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SO=500,TO=600,bO="_blank",kO="http://localhost";class Tw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CO(t,e,n,r=SO,i=TO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},_O),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ge().toLowerCase();n&&(a=X_(l)?bO:n),Y_(l)&&(e=e||kO,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(rx(l)&&a!=="_self")return AO(e||"",a),new Tw(null);const h=window.open(e||"",a,c);R(h,t,"popup-blocked");try{h.focus()}catch{}return new Tw(h)}function AO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const NO="__/auth/handler",RO="emulator/auth/handler";function np(t,e,n,r,i,s){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qi,eventId:i};if(e instanceof jn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof lo){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${xO(t)}?${io(a).slice(1)}`}function xO({config:t}){return t.emulator?Jm(t,RO):`https://${t.authDomain}/${NO}`}/**
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
 */const qd="webStorageSupport";class DO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bi,this._completeRedirectFn=bh,this._overrideRedirectResult=lg}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=np(e,n,r,Xa(),i);return CO(e,o,xu())}async _openRedirect(e,n,r,i){return await this._originValidation(e),dD(np(e,n,r,Xa(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IO(e),r=new NS(e);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qd,{type:qd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[qd];o!==void 0&&n(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tS()||Zm()||ao()}}const OO=DO;class PO{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return un("unexpected MultiFactorSessionType")}}}class cg extends PO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new cg(e)}_finalizeEnroll(e,n,r){return iD(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return _D(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class DS{constructor(){}static assertion(e){return cg._fromCredential(e)}}DS.FACTOR_ID="phone";var bw="@firebase/auth",kw="0.20.11";/**
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
 */class LO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function FO(t){br(new vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,u)=>{R(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nS(t)},c=new ax(a,u,l);return UR(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),br(new vn("auth-internal",e=>{const n=Be(e.getProvider("auth").getImmediate());return(r=>new LO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(bw,kw,MO(t)),pn(bw,kw,"esm2017")}/**
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
 */const $O=5*60;uN("authIdTokenMaxAge");FO("Browser");/**
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
 */function ki(){return window}/**
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
 */const UO=2e3;async function VO(t,e,n){var r;const{BuildInfo:i}=ki();Yt(e.sessionId,"AuthEvent did not contain a session ID");const s=await WO(e.sessionId),o={};return ao()?o.ibi=i.packageName:Ru()?o.apn=i.packageName:tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,np(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function BO(t){const{BuildInfo:e}=ki(),n={};ao()?n.iosBundleId=e.packageName:Ru()?n.androidPackageName=e.packageName:tt(t,"operation-not-supported-in-this-environment"),await xS(t,n)}function jO(t){const{cordova:e}=ki();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,nx()?"_blank":"_system","location=yes"),n(i)})})}async function qO(t,e,n){const{cordova:r}=ki();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(Je(t,"redirect-cancelled-by-user"))},UO))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Ru()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function zO(t){var e,n,r,i,s,o,a,u,l,c;const h=ki();R(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),R(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),R(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function WO(t){const e=HO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function HO(t){if(Yt(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const KO=20;class GO extends NS{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function QO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:JO(),postBody:null,tenantId:t.tenantId,error:Je(t,"no-auth-event")}}function YO(t,e){return rp()._set(ip(t),e)}async function Cw(t){const e=await rp()._get(ip(t));return e&&await rp()._remove(ip(t)),e}function XO(t,e){var n,r;const i=eP(e);if(i.includes("/__/auth/callback")){const s=ql(i),o=s.firebaseError?ZO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?Je(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function JO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<KO;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function rp(){return Ct(ig)}function ip(t){return yi("authEvent",t.config.apiKey,t.name)}function ZO(t){try{return JSON.parse(t)}catch{return null}}function eP(t){const e=ql(t),n=e.link?decodeURIComponent(e.link):void 0,r=ql(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ql(i).link||i||r||n||t}function ql(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return ds(n.join("?"))}/**
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
 */const tP=500;class nP{constructor(){this._redirectPersistence=bi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bh,this._overrideRedirectResult=lg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new GO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){zO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),JD(),await this._originValidation(e);const o=QO(e,r,i);await YO(e,o);const a=await VO(e,o,n),u=await jO(a);return qO(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=ki(),o=setTimeout(async()=>{await Cw(e),n.onEvent(Aw())},tP),a=async c=>{clearTimeout(o);const h=await Cw(e);let d=null;h&&(c==null?void 0:c.url)&&(d=XO(h,c.url)),n.onEvent(d||Aw())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;ki().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const rP=nP;function Aw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Je("no-auth-event")}}/**
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
 */function iP(t,e){Be(t)._logFramework(e)}var sP="@firebase/auth-compat",oP="0.2.24";/**
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
 */const aP=1e3;function Ta(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function uP(){return Ta()==="http:"||Ta()==="https:"}function OS(t=ge()){return!!((Ta()==="file:"||Ta()==="ionic:"||Ta()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function lP(){return Wm()||zm()}function cP(){return A_()&&(document==null?void 0:document.documentMode)===11}function hP(t=ge()){return/Edge\/\d+/.test(t)}function dP(t=ge()){return cP()||hP(t)}function PS(){try{const t=self.localStorage,e=xu();if(t)return t.setItem(e,"1"),t.removeItem(e),dP()?Ga():!0}catch{return hg()&&Ga()}return!1}function hg(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function zd(){return(uP()||C_()||OS())&&!lP()&&PS()&&!hg()}function LS(){return OS()&&typeof document!="undefined"}async function fP(){return LS()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},aP);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function pP(){return typeof window!="undefined"?window:null}/**
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
 */const kt={LOCAL:"local",NONE:"none",SESSION:"session"},$o=R,MS="persistence";function mP(t,e){if($o(Object.values(kt).includes(e),t,"invalid-persistence-type"),Wm()){$o(e!==kt.SESSION,t,"unsupported-persistence-type");return}if(zm()){$o(e===kt.NONE,t,"unsupported-persistence-type");return}if(hg()){$o(e===kt.NONE||e===kt.LOCAL&&Ga(),t,"unsupported-persistence-type");return}$o(e===kt.NONE||PS(),t,"unsupported-persistence-type")}async function sp(t){await t._initializationPromise;const e=FS(),n=yi(MS,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function gP(t,e){const n=FS();if(!n)return[];const r=yi(MS,t,e);switch(n.getItem(r)){case kt.NONE:return[Ms];case kt.LOCAL:return[tu,bi];case kt.SESSION:return[bi];default:return[]}}function FS(){var t;try{return((t=pP())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const yP=R;class sr{constructor(){this.browserResolver=Ct(OO),this.cordovaResolver=Ct(rP),this.underlyingResolver=null,this._redirectPersistence=bi,this._completeRedirectFn=bh,this._overrideRedirectResult=lg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return LS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return yP(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await fP();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function $S(t){return t.unwrap()}function vP(t){return t.wrapped()}/**
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
 */function wP(t){return US(t)}function EP(t,e){var n,r;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(((r=e)===null||r===void 0?void 0:r.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new IP(t,nD(t,e))}else if(i){const s=US(e),o=e;s&&(o.credential=s,o.tenantId=i.tenantId||void 0,o.email=i.email||void 0,o.phoneNumber=i.phoneNumber||void 0)}}function US(t){const{_tokenResponse:e}=t instanceof pt?t.customData:t;if(!e)return null;if(!(t instanceof pt)&&"temporaryProof"in e&&"phoneNumber"in e)return Qt.credentialFromResult(t);const n=e.providerId;if(!n||n===Fo.PASSWORD)return null;let r;switch(n){case Fo.GOOGLE:r=Zt;break;case Fo.FACEBOOK:r=Jt;break;case Fo.GITHUB:r=en;break;case Fo.TWITTER:r=tn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Fs._create(n,a):wn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new ks(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof pt?r.credentialFromError(t):r.credentialFromResult(t)}function wt(t,e){return e.catch(n=>{throw n instanceof pt&&EP(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:wP(n),additionalUserInfo:tD(n),user:Rn.getOrCreate(i)}})}async function op(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>wt(t,n.confirm(r))}}class IP{constructor(e,n){this.resolver=n,this.auth=vP(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return wt($S(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Rn{constructor(e){this._delegate=e,this.multiFactor=oD(e)}static getOrCreate(e){return Rn.USER_MAP.has(e)||Rn.USER_MAP.set(e,new Rn(e)),Rn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return wt(this.auth,hS(this._delegate,e))}async linkWithPhoneNumber(e,n){return op(this.auth,UD(this._delegate,e,n))}async linkWithPopup(e){return wt(this.auth,GD(this._delegate,e,sr))}async linkWithRedirect(e){return await sp(Be(this.auth)),rO(this._delegate,e,sr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return wt(this.auth,dS(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return op(this.auth,VD(this._delegate,e,n))}reauthenticateWithPopup(e){return wt(this.auth,KD(this._delegate,e,sr))}async reauthenticateWithRedirect(e){return await sp(Be(this.auth)),tO(this._delegate,e,sr)}sendEmailVerification(e){return zx(this._delegate,e)}async unlink(e){return await Rx(this._delegate,e),this}updateEmail(e){return Gx(this._delegate,e)}updatePassword(e){return Qx(this._delegate,e)}updatePhoneNumber(e){return BD(this._delegate,e)}updateProfile(e){return Kx(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return Wx(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Rn.USER_MAP=new WeakMap;/**
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
 */const Uo=R;class ap{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Uo(r,"invalid-api-key",{appName:e.name}),Uo(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?sr:void 0;this._delegate=n.initialize({options:{persistence:_P(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(FR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){ux(this._delegate,e,n)}applyActionCode(e){return Lx(this._delegate,e)}checkActionCode(e){return fS(this._delegate,e)}confirmPasswordReset(e,n){return Px(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return wt(this._delegate,Fx(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return qx(this._delegate,e)}isSignInWithEmailLink(e){return Vx(this._delegate,e)}async getRedirectResult(){Uo(zd(),this._delegate,"operation-not-supported-in-this-environment");const e=await sO(this._delegate,sr);return e?wt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){iP(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=Nw(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=Nw(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return Ux(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Ox(this._delegate,e,n||void 0)}async setPersistence(e){mP(this._delegate,e);let n;switch(e){case kt.SESSION:n=bi;break;case kt.LOCAL:n=await Ct(tu)._isAvailable()?tu:ig;break;case kt.NONE:n=Ms;break;default:return tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return wt(this._delegate,Nx(this._delegate))}signInWithCredential(e){return wt(this._delegate,wh(this._delegate,e))}signInWithCustomToken(e){return wt(this._delegate,Dx(this._delegate,e))}signInWithEmailAndPassword(e,n){return wt(this._delegate,$x(this._delegate,e,n))}signInWithEmailLink(e,n){return wt(this._delegate,Bx(this._delegate,e,n))}signInWithPhoneNumber(e,n){return op(this._delegate,$D(this._delegate,e,n))}async signInWithPopup(e){return Uo(zd(),this._delegate,"operation-not-supported-in-this-environment"),wt(this._delegate,HD(this._delegate,e,sr))}async signInWithRedirect(e){return Uo(zd(),this._delegate,"operation-not-supported-in-this-environment"),await sp(this._delegate),ZD(this._delegate,e,sr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Mx(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ap.Persistence=kt;function Nw(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Rn.getOrCreate(o)),error:e,complete:n}}function _P(t,e){const n=gP(t,e);if(typeof self!="undefined"&&!n.includes(tu)&&n.push(tu),typeof window!="undefined")for(const r of[ig,bi])n.includes(r)||n.push(r);return n.includes(Ms)||n.push(Ms),n}/**
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
 */class dg{constructor(){this.providerId="phone",this._delegate=new Qt($S(so.auth()))}static credential(e,n){return Qt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}dg.PHONE_SIGN_IN_METHOD=Qt.PHONE_SIGN_IN_METHOD;dg.PROVIDER_ID=Qt.PROVIDER_ID;/**
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
 */const SP=R;class TP{constructor(e,n,r=so.app()){var i;SP((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new MD(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const bP="auth-compat";function kP(t){t.INTERNAL.registerComponent(new vn(bP,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ap(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Zi.EMAIL_SIGNIN,PASSWORD_RESET:Zi.PASSWORD_RESET,RECOVER_EMAIL:Zi.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Zi.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Zi.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Zi.VERIFY_EMAIL}},EmailAuthProvider:Mr,FacebookAuthProvider:Jt,GithubAuthProvider:en,GoogleAuthProvider:Zt,OAuthProvider:ks,SAMLAuthProvider:kc,PhoneAuthProvider:dg,PhoneMultiFactorGenerator:DS,RecaptchaVerifier:TP,TwitterAuthProvider:tn,Auth:ap,AuthCredential:uo,Error:pt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(sP,oP)}kP(so);var CP=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U,fg=fg||{},W=CP||self;function Rc(){}function kh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ou(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function AP(t){return Object.prototype.hasOwnProperty.call(t,Wd)&&t[Wd]||(t[Wd]=++NP)}var Wd="closure_uid_"+(1e9*Math.random()>>>0),NP=0;function RP(t,e,n){return t.call.apply(t.bind,arguments)}function xP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=RP:ot=xP,ot.apply(null,arguments)}function gl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fr(){this.s=this.s,this.o=this.o}var DP=0;Fr.prototype.s=!1;Fr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),DP!=0)&&AP(this)};Fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const VS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function pg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rw(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(kh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var OP=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Rc,e),W.removeEventListener("test",Rc,e)}catch{}return t}();function xc(t){return/^[\s\xa0]*$/.test(t)}var xw=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hd(t,e){return t<e?-1:t>e?1:0}function Ch(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function nn(t){return Ch().indexOf(t)!=-1}function mg(t){return mg[" "](t),t}mg[" "]=Rc;function PP(t){var e=FP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var LP=nn("Opera"),$s=nn("Trident")||nn("MSIE"),BS=nn("Edge"),up=BS||$s,jS=nn("Gecko")&&!(Ch().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge"))&&!(nn("Trident")||nn("MSIE"))&&!nn("Edge"),MP=Ch().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge");function qS(){var t=W.document;return t?t.documentMode:void 0}var Dc;e:{var Kd="",Gd=function(){var t=Ch();if(jS)return/rv:([^\);]+)(\)|;)/.exec(t);if(BS)return/Edge\/([\d\.]+)/.exec(t);if($s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MP)return/WebKit\/(\S+)/.exec(t);if(LP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Gd&&(Kd=Gd?Gd[1]:""),$s){var Qd=qS();if(Qd!=null&&Qd>parseFloat(Kd)){Dc=String(Qd);break e}}Dc=Kd}var FP={};function $P(){return PP(function(){let t=0;const e=xw(String(Dc)).split("."),n=xw("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hd(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hd(i[2].length==0,s[2].length==0)||Hd(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lp;if(W.document&&$s){var Dw=qS();lp=Dw||parseInt(Dc,10)||void 0}else lp=void 0;var UP=lp;function nu(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(jS){e:{try{mg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:VP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nu.X.h.call(this)}}nt(nu,at);var VP={2:"touch",3:"pen",4:"mouse"};nu.prototype.h=function(){nu.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pu="closure_listenable_"+(1e6*Math.random()|0),BP=0;function jP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++BP,this.ba=this.ea=!1}function Ah(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function gg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zS(t){const e={};for(const n in t)e[n]=t[n];return e}const Ow="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function WS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ow.length;s++)n=Ow[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nh(t){this.src=t,this.g={},this.h=0}Nh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hp(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new jP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function cp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=VS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ah(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var yg="closure_lm_"+(1e6*Math.random()|0),Yd={};function HS(t,e,n,r,i){if(r&&r.once)return GS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)HS(t,e[s],n,r,i);return null}return n=Eg(n),t&&t[Pu]?t.N(e,n,Ou(r)?!!r.capture:!!r,i):KS(t,e,n,!1,r,i)}function KS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ou(i)?!!i.capture:!!i,a=wg(t);if(a||(t[yg]=a=new Nh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=qP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)OP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(YS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function qP(){function t(n){return e.call(t.src,t.listener,n)}const e=zP;return t}function GS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)GS(t,e[s],n,r,i);return null}return n=Eg(n),t&&t[Pu]?t.O(e,n,Ou(r)?!!r.capture:!!r,i):KS(t,e,n,!0,r,i)}function QS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)QS(t,e[s],n,r,i);else r=Ou(r)?!!r.capture:!!r,n=Eg(n),t&&t[Pu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hp(s,n,r,i),-1<n&&(Ah(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=wg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hp(e,n,r,i)),(n=-1<t?e[t]:null)&&vg(n))}function vg(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Pu])cp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(YS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=wg(e))?(cp(n,t),n.h==0&&(n.src=null,e[yg]=null)):Ah(t)}}}function YS(t){return t in Yd?Yd[t]:Yd[t]="on"+t}function zP(t,e){if(t.ba)t=!0;else{e=new nu(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&vg(t),t=n.call(r,e)}return t}function wg(t){return t=t[yg],t instanceof Nh?t:null}var Xd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eg(t){return typeof t=="function"?t:(t[Xd]||(t[Xd]=function(e){return t.handleEvent(e)}),t[Xd])}function je(){Fr.call(this),this.i=new Nh(this),this.P=this,this.I=null}nt(je,Fr);je.prototype[Pu]=!0;je.prototype.removeEventListener=function(t,e,n,r){QS(this,t,e,n,r)};function Ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),WS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yl(o,r,!0,e)&&i}if(o=e.g=t,i=yl(o,r,!0,e)&&i,i=yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yl(o,r,!1,e)&&i}je.prototype.M=function(){if(je.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ah(n[r]);delete t.g[e],t.h--}}this.I=null};je.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.ea&&cp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ig=W.JSON.stringify;function WP(){var t=ZS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class HP{constructor(){this.h=this.g=null}add(e,n){const r=XS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var XS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new KP,t=>t.reset());class KP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GP(t){W.setTimeout(()=>{throw t},0)}function JS(t,e){dp||QP(),fp||(dp(),fp=!0),ZS.add(t,e)}var dp;function QP(){var t=W.Promise.resolve(void 0);dp=function(){t.then(YP)}}var fp=!1,ZS=new HP;function YP(){for(var t;t=WP();){try{t.h.call(t.g)}catch(n){GP(n)}var e=XS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}fp=!1}function Rh(t,e){je.call(this),this.h=t||1,this.g=e||W,this.j=ot(this.lb,this),this.l=Date.now()}nt(Rh,je);U=Rh.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ze(this,"tick"),this.ca&&(_g(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _g(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Rh.X.M.call(this),_g(this),delete this.g};function Sg(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function eT(t){t.g=Sg(()=>{t.g=null,t.i&&(t.i=!1,eT(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class XP extends Fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:eT(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ru(t){Fr.call(this),this.h=t,this.g={}}nt(ru,Fr);var Pw=[];function tT(t,e,n,r){Array.isArray(n)||(n&&(Pw[0]=n.toString()),n=Pw);for(var i=0;i<n.length;i++){var s=HS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function nT(t){gg(t.g,function(e,n){this.g.hasOwnProperty(n)&&vg(e)},t),t.g={}}ru.prototype.M=function(){ru.X.M.call(this),nT(this)};ru.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xh(){this.g=!0}xh.prototype.Aa=function(){this.g=!1};function JP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function ZP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function fs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tL(t,n)+(r?" "+r:"")})}function eL(t,e){t.info(function(){return"TIMEOUT: "+e})}xh.prototype.info=function(){};function tL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ig(n)}catch{return e}}var Wi={},Lw=null;function Dh(){return Lw=Lw||new je}Wi.Pa="serverreachability";function rT(t){at.call(this,Wi.Pa,t)}nt(rT,at);function iu(t){const e=Dh();Ze(e,new rT(e))}Wi.STAT_EVENT="statevent";function iT(t,e){at.call(this,Wi.STAT_EVENT,t),this.stat=e}nt(iT,at);function dt(t){const e=Dh();Ze(e,new iT(e,t))}Wi.Qa="timingevent";function sT(t,e){at.call(this,Wi.Qa,t),this.size=e}nt(sT,at);function Lu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Oh={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},oT={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Tg(){}Tg.prototype.h=null;function Mw(t){return t.h||(t.h=t.i())}function aT(){}var Mu={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function bg(){at.call(this,"d")}nt(bg,at);function kg(){at.call(this,"c")}nt(kg,at);var pp;function Ph(){}nt(Ph,Tg);Ph.prototype.g=function(){return new XMLHttpRequest};Ph.prototype.i=function(){return{}};pp=new Ph;function Fu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ru(this),this.O=nL,t=up?125:void 0,this.T=new Rh(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new uT}function uT(){this.i=null,this.g="",this.h=!1}var nL=45e3,mp={},Oc={};U=Fu.prototype;U.setTimeout=function(t){this.O=t};function gp(t,e,n){t.K=1,t.v=Mh($n(e)),t.s=n,t.P=!0,lT(t,null)}function lT(t,e){t.F=Date.now(),$u(t),t.A=$n(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),yT(n.i,"t",r),t.C=0,n=t.l.H,t.h=new uT,t.g=$T(t.l,n?e:null,!t.s),0<t.N&&(t.L=new XP(ot(t.La,t,t.g),t.N)),tT(t.S,t.g,"readystatechange",t.ib),e=t.H?zS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),iu(),JP(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&xn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const c=xn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||up||this.g&&(this.h.h||this.g.fa()||Vw(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?iu(3):iu(2)),Lh(this);var n=this.g.aa();this.Y=n;t:if(cT(this)){var r=Vw(this.g);t="";var i=r.length,s=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){ci(this),ba(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,ZP(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xc(a)){var l=a;break t}}l=null}if(n=l)fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,yp(this,n);else{this.i=!1,this.o=3,dt(12),ci(this),ba(this);break e}}this.P?(hT(this,c,o),up&&this.i&&c==3&&(tT(this.S,this.T,"tick",this.hb),this.T.start())):(fs(this.j,this.m,o,null),yp(this,o)),c==4&&ci(this),this.i&&!this.I&&(c==4?PT(this.l,this):(this.i=!1,$u(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),ci(this),ba(this)}}}catch{}finally{}};function cT(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function hT(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=rL(t,n),i==Oc){e==4&&(t.o=4,dt(14),r=!1),fs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mp){t.o=4,dt(15),fs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else fs(t.j,t.m,i,null),yp(t,i);cT(t)&&i!=Oc&&i!=mp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Og(e),e.K=!0,dt(11))):(fs(t.j,t.m,n,"[Invalid Chunked Response]"),ci(t),ba(t))}U.hb=function(){if(this.g){var t=xn(this.g),e=this.g.fa();this.C<e.length&&(Lh(this),hT(this,t,e),this.i&&t!=4&&$u(this))}};function rL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Oc:(n=Number(e.substring(n,r)),isNaN(n)?mp:(r+=1,r+n>e.length?Oc:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,ci(this)};function $u(t){t.V=Date.now()+t.O,dT(t,t.O)}function dT(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Lu(ot(t.gb,t),e)}function Lh(t){t.B&&(W.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(eL(this.j,this.A),this.K!=2&&(iu(),dt(17)),ci(this),this.o=2,ba(this)):dT(this,this.V-t)};function ba(t){t.l.G==0||t.I||PT(t.l,t)}function ci(t){Lh(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,_g(t.T),nT(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function yp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||vp(n.h,t))){if(!t.J&&vp(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Mc(n),Uh(n);else break e;Dg(n),dt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Lu(ot(n.cb,n),6e3));if(1>=ET(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else hi(n,11)}else if((t.J||n.g==t)&&Mc(n),!xc(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const c=l[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Cg(s,s.h),s.h=null))}if(r.D){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,de(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=FT(r,r.H?r.ka:null,r.V),o.J){IT(r.h,o);var a=o,u=r.J;u&&a.setTimeout(u),a.B&&(Lh(a),$u(a)),r.g=o}else DT(r);0<n.i.length&&Vh(n)}else l[0]!="stop"&&l[0]!="close"||hi(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?hi(n,7):xg(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}iu(4)}catch{}}function iL(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(kh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function sL(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(kh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function fT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(kh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=sL(t),r=iL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var pT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wi){this.h=e!==void 0?e:t.h,Pc(this,t.j),this.s=t.s,this.g=t.g,Lc(this,t.m),this.l=t.l,e=t.i;var n=new su;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Fw(this,n),this.o=t.o}else t&&(n=String(t).match(pT))?(this.h=!!e,Pc(this,n[1]||"",!0),this.s=ia(n[2]||""),this.g=ia(n[3]||"",!0),Lc(this,n[4]),this.l=ia(n[5]||"",!0),Fw(this,n[6]||"",!0),this.o=ia(n[7]||"")):(this.h=!!e,this.i=new su(null,this.h))}wi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(sa(e,$w,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(sa(e,$w,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(sa(n,n.charAt(0)=="/"?lL:uL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",sa(n,hL)),t.join("")};function $n(t){return new wi(t)}function Pc(t,e,n){t.j=n?ia(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Lc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fw(t,e,n){e instanceof su?(t.i=e,dL(t.i,t.h)):(n||(e=sa(e,cL)),t.i=new su(e,t.h))}function de(t,e,n){t.i.set(e,n)}function Mh(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ia(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function sa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,aL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $w=/[#\/\?@]/g,uL=/[#\?:]/g,lL=/[#\?]/g,cL=/[#\?@]/g,hL=/#/g;function su(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $r(t){t.g||(t.g=new Map,t.h=0,t.i&&oL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=su.prototype;U.add=function(t,e){$r(this),this.i=null,t=co(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mT(t,e){$r(t),e=co(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function gT(t,e){return $r(t),e=co(t,e),t.g.has(e)}U.forEach=function(t,e){$r(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){$r(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){$r(this);let e=[];if(typeof t=="string")gT(this,t)&&(e=e.concat(this.g.get(co(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return $r(this),this.i=null,t=co(this,t),gT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function yT(t,e,n){mT(t,e),0<n.length&&(t.i=null,t.g.set(co(t,e),pg(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function co(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dL(t,e){e&&!t.j&&($r(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(mT(this,r),yT(this,i,n))},t)),t.j=e}var fL=class{constructor(t,e){this.h=t,this.g=e}};function vT(t){this.l=t||pL,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pL=10;function wT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ET(t){return t.h?1:t.g?t.g.size:0}function vp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Cg(t,e){t.g?t.g.add(e):t.h=e}function IT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}vT.prototype.cancel=function(){if(this.i=_T(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function _T(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return pg(t.i)}function Ag(){}Ag.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};Ag.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function mL(){this.g=new Ag}function gL(t,e,n){const r=n||"";try{fT(t,function(i,s){let o=i;Ou(i)&&(o=Ig(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function yL(t,e){const n=new xh;if(W.Image){const r=new Image;r.onload=gl(vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gl(vl,n,r,"TestLoadImage: error",!1,e),r.onabort=gl(vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gl(vl,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Uu(t){this.l=t.ac||null,this.j=t.jb||!1}nt(Uu,Tg);Uu.prototype.g=function(){return new Fh(this.l,this.j)};Uu.prototype.i=function(t){return function(){return t}}({});function Fh(t,e){je.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ng,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Fh,je);var Ng=0;U=Fh.prototype;U.open=function(t,e){if(this.readyState!=Ng)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ou(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vu(this)),this.readyState=Ng};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ou(this)),this.g&&(this.readyState=3,ou(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ST(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ST(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vu(this):ou(this),this.readyState==3&&ST(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Vu(this))};U.Ua=function(t){this.g&&(this.response=t,Vu(this))};U.ga=function(){this.g&&Vu(this)};function Vu(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ou(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ou(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Fh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vL=W.JSON.parse;function Ie(t){je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=TT,this.K=this.L=!1}nt(Ie,je);var TT="",wL=/^https?$/i,EL=["POST","PUT"];U=Ie.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():pp.g(),this.C=this.u?Mw(this.u):Mw(pp),this.g.onreadystatechange=ot(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Uw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=VS(EL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{CT(this),0<this.B&&((this.K=IL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.qa,this)):this.A=Sg(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Uw(this,s)}};function IL(t){return $s&&$P()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof fg!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ze(this,"timeout"),this.abort(8))};function Uw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,bT(t),$h(t)}function bT(t){t.D||(t.D=!0,Ze(t,"complete"),Ze(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ze(this,"complete"),Ze(this,"abort"),$h(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$h(this,!0)),Ie.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?kT(this):this.fb())};U.fb=function(){kT(this)};function kT(t){if(t.h&&typeof fg!="undefined"&&(!t.C[1]||xn(t)!=4||t.aa()!=2)){if(t.v&&xn(t)==4)Sg(t.Ha,0,t);else if(Ze(t,"readystatechange"),xn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(pT)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!wL.test(i?i.toLowerCase():"")}n=r}if(n)Ze(t,"complete"),Ze(t,"success");else{t.m=6;try{var o=2<xn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",bT(t)}}finally{$h(t)}}}}function $h(t,e){if(t.g){CT(t);const n=t.g,r=t.C[0]?Rc:null;t.g=null,t.C=null,e||Ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function CT(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function xn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vL(e)}};function Vw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case TT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function AT(t){let e="";return gg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Rg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=AT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function Vo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function NT(t){this.Ca=0,this.i=[],this.j=new xh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vo("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vo("baseRetryDelayMs",5e3,t),this.bb=Vo("retryDelaySeedMs",1e4,t),this.$a=Vo("forwardChannelMaxRetries",2,t),this.ta=Vo("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new vT(t&&t.concurrentRequestLimit),this.Fa=new mL,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=NT.prototype;U.ma=8;U.G=1;function xg(t){if(RT(t),t.G==3){var e=t.U++,n=$n(t.F);de(n,"SID",t.I),de(n,"RID",e),de(n,"TYPE","terminate"),Bu(t,n),e=new Fu(t,t.j,e,void 0),e.K=2,e.v=Mh($n(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=$T(e.l,null),e.g.da(e.v)),e.F=Date.now(),$u(e)}MT(t)}function Uh(t){t.g&&(Og(t),t.g.cancel(),t.g=null)}function RT(t){Uh(t),t.u&&(W.clearTimeout(t.u),t.u=null),Mc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Vh(t){wT(t.h)||t.m||(t.m=!0,JS(t.Ja,t),t.C=0)}function _L(t,e){return ET(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Lu(ot(t.Ja,t,e),LT(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Fu(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=zS(s),WS(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xT(this,i,e),n=$n(this.F),de(n,"RID",t),de(n,"CVER",22),this.D&&de(n,"X-HTTP-Session-Id",this.D),Bu(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(AT(s)))+"&"+e:this.o&&Rg(n,this.o,s)),Cg(this.h,i),this.Ya&&de(n,"TYPE","init"),this.O?(de(n,"$req",e),de(n,"SID","null"),i.Z=!0,gp(i,n,null)):gp(i,n,e),this.G=2}}else this.G==3&&(t?Bw(this,t):this.i.length==0||wT(this.h)||Bw(this))};function Bw(t,e){var n;e?n=e.m:n=t.U++;const r=$n(t.F);de(r,"SID",t.I),de(r,"RID",n),de(r,"AID",t.T),Bu(t,r),t.o&&t.s&&Rg(r,t.o,t.s),n=new Fu(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=xT(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Cg(t.h,n),gp(n,r,e)}function Bu(t,e){t.ia&&gg(t.ia,function(n,r){de(e,r,n)}),t.l&&fT({},function(n,r){de(e,r,n)})}function xT(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ot(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{gL(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function DT(t){t.g||t.u||(t.Z=1,JS(t.Ia,t),t.A=0)}function Dg(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Lu(ot(t.Ia,t),LT(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,OT(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Lu(ot(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,dt(10),Uh(this),OT(this))};function Og(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function OT(t){t.g=new Fu(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=$n(t.sa);de(e,"RID","rpc"),de(e,"SID",t.I),de(e,"CI",t.L?"0":"1"),de(e,"AID",t.T),de(e,"TYPE","xmlhttp"),Bu(t,e),t.o&&t.s&&Rg(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Mh($n(e)),n.s=null,n.P=!0,lT(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Uh(this),Dg(this),dt(19))};function Mc(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function PT(t,e){var n=null;if(t.g==e){Mc(t),Og(t),t.g=null;var r=2}else if(vp(t.h,e))n=e.D,IT(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Dh(),Ze(r,new sT(r,n)),Vh(t)}else DT(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&_L(t,e)||r==2&&Dg(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:hi(t,5);break;case 4:hi(t,10);break;case 3:hi(t,6);break;default:hi(t,2)}}}function LT(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function hi(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ot(t.kb,t);n||(n=new wi("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Pc(n,"https"),Mh(n)),yL(n.toString(),r)}else dt(2);t.G=0,t.l&&t.l.va(e),MT(t),RT(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function MT(t){if(t.G=0,t.la=[],t.l){const e=_T(t.h);(e.length!=0||t.i.length!=0)&&(Rw(t.la,e),Rw(t.la,t.i),t.h.i.length=0,pg(t.i),t.i.length=0),t.l.ua()}}function FT(t,e,n){var r=n instanceof wi?$n(n):new wi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Lc(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new wi(null,void 0);r&&Pc(s,r),e&&(s.g=e),i&&Lc(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&de(r,n,e),de(r,"VER",t.ma),Bu(t,r),r}function $T(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ie(new Uu({jb:!0})):new Ie(t.ra),e.Ka(t.H),e}function UT(){}U=UT.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Fc(){if($s&&!(10<=Number(UP)))throw Error("Environmental error: no available transport.")}Fc.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){je.call(this),this.g=new NT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!xc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ho(this)}nt(Rt,je);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=FT(t,null,t.V),Vh(t)};Rt.prototype.close=function(){xg(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ig(t),t=n);e.i.push(new fL(e.ab++,t)),e.G==3&&Vh(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,xg(this.g),delete this.g,Rt.X.M.call(this)};function VT(t){bg.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(VT,bg);function BT(){kg.call(this),this.status=1}nt(BT,kg);function ho(t){this.g=t}nt(ho,UT);ho.prototype.xa=function(){Ze(this.g,"a")};ho.prototype.wa=function(t){Ze(this.g,new VT(t))};ho.prototype.va=function(t){Ze(this.g,new BT)};ho.prototype.ua=function(){Ze(this.g,"b")};Fc.prototype.createWebChannel=Fc.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;Oh.NO_ERROR=0;Oh.TIMEOUT=8;Oh.HTTP_ERROR=6;oT.COMPLETE="complete";aT.EventType=Mu;Mu.OPEN="a";Mu.CLOSE="b";Mu.ERROR="c";Mu.MESSAGE="d";je.prototype.listen=je.prototype.N;Ie.prototype.listenOnce=Ie.prototype.O;Ie.prototype.getLastError=Ie.prototype.Oa;Ie.prototype.getLastErrorCode=Ie.prototype.Ea;Ie.prototype.getStatus=Ie.prototype.aa;Ie.prototype.getResponseJson=Ie.prototype.Sa;Ie.prototype.getResponseText=Ie.prototype.fa;Ie.prototype.send=Ie.prototype.da;Ie.prototype.setWithCredentials=Ie.prototype.Ka;var SL=function(){return new Fc},TL=function(){return Dh()},Jd=Oh,bL=oT,kL=Wi,jw={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},CL=Uu,wl=aT,AL=Ie;const qw="@firebase/firestore";/**
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
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
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
 */let fo="9.13.0";/**
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
 */const kr=new ph("@firebase/firestore");function wp(){return kr.logLevel}function NL(t){kr.setLogLevel(t)}function A(t,...e){if(kr.logLevel<=te.DEBUG){const n=e.map(Pg);kr.debug(`Firestore (${fo}): ${t}`,...n)}}function be(t,...e){if(kr.logLevel<=te.ERROR){const n=e.map(Pg);kr.error(`Firestore (${fo}): ${t}`,...n)}}function Us(t,...e){if(kr.logLevel<=te.WARN){const n=e.map(Pg);kr.warn(`Firestore (${fo}): ${t}`,...n)}}function Pg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${fo}) INTERNAL ASSERTION FAILED: `+t;throw be(e),new Error(e)}function j(t,e){t||$()}function RL(t,e){t||$()}function L(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends pt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $e{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class jT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Fe.UNAUTHENTICATED))}shutdown(){}}class DL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OL{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new $e;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $e,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $e)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new jT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Fe(e)}}class PL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(j(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class LL{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new PL(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Fe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ML{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class FL{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.A=n.token,new ML(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function $L(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class qT{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=$L(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function H(t,e){return t<e?-1:t>e?1:0}function Vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function zT(t){return t+"\0"}/**
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
 */class pe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new pe(0,0))}static max(){return new B(new pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class au{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return au.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof au?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ee extends au{construct(e,n,r){return new ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ee(n)}static emptyPath(){return new ee([])}}const UL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends au{construct(e,n,r){return new ke(e,n,r)}static isValidIdentifier(e){return UL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ke(n)}static emptyPath(){return new ke([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ee.fromString(e))}static fromName(e){return new O(ee.fromString(e).popFirst(5))}static empty(){return new O(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ee(e.slice()))}}/**
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
 */class WT{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Ep(t){return t.fields.find(e=>e.kind===2)}function Jr(t){return t.fields.filter(e=>e.kind!==2)}WT.UNKNOWN_ID=-1;class VL{constructor(e,n){this.fieldPath=e,this.kind=n}}class $c{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new $c(0,xt.min())}}function HT(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new xt(i,O.empty(),e)}function KT(t){return new xt(t.readTime,t.key,-1)}class xt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xt(B.min(),O.empty(),-1)}static max(){return new xt(B.max(),O.empty(),-1)}}function Lg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:H(t.largestBatchId,e.largestBatchId))}/**
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
 */const GT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ur(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==GT)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Bh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new $e,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new ka(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const i=Mg(r.target.error);this.P.reject(new ka(e,i))}}static open(e,n,r,i){try{return new Bh(n,e.transaction(i,r))}catch(s){throw new ka(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new jL(n)}}class Gt{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Gt.D(ge())===12.2&&be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Zr(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Ga())return!1;if(Gt.N())return!0;const e=ge(),n=Gt.D(e),r=0<n&&n<10,i=Gt.k(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static N(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ka(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ka(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Bh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.V(),l)).catch(l=>(a.abort(l),I.reject(l))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class BL{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Zr(this.U.delete())}}class ka extends C{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Vr(t){return t.name==="IndexedDbTransactionError"}class jL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Zr(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Zr(this.store.add(e))}get(e){return Zr(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Zr(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Zr(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.H(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new I((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}Y(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const i=this.cursor(r);return this.H(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.H(i,n)}tt(e){const n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{const o=Mg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new BL(a),l=n(a.primaryKey,a.value,u);if(l instanceof I){const c=l.catch(h=>(u.done(),I.reject(h)));r.push(c)}u.isDone?i():u.G===null?a.continue():a.continue(u.G)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Zr(t){return new I((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Mg(r.target.error);n(i)}})}let zw=!1;function Mg(t){const e=Gt.D(ge());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return zw||(zw=!0,setTimeout(()=>{throw r},0)),r}}return t}class qL{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Vr(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Ur(n)}await this.nt(6e4)})}}class zL{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let i=n,s=!0;return I.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(i,s)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=KT(s);Lg(o,r)>0&&(r=o)}),new xt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class It{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function Ww(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */It.at=-1;class _e{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Ge.RED,this.left=i!=null?i:Ge.EMPTY,this.right=s!=null?s:Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ge(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hw(this.data.getIterator())}getIteratorFrom(e){return new Hw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new se(this.comparator);return n.data=e,n}}class Hw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function es(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(ke.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new se(ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function WL(){return typeof atob!="undefined"}/**
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
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Oe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Oe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const HL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(j(!!t),typeof t=="string"){let e=0;const n=HL.exec(t);if(j(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ve(t.seconds),nanos:ve(t.nanos)}}function ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ci(t){return typeof t=="string"?Oe.fromBase64String(t):Oe.fromUint8Array(t)}/**
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
 */function Fg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function XT(t){const e=t.mapValue.fields.__previous_value__;return Fg(e)?XT(e):e}function uu(t){const e=Cr(t.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class KL{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class Ar{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ar("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ar&&e.projectId===this.projectId&&e.database===this.database}}function ju(t){return t==null}function lu(t){return t===0&&1/t==-1/0}function JT(t){return typeof t=="number"&&Number.isInteger(t)&&!lu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const or={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},zl={nullValue:"NULL_VALUE"};function Ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fg(t)?4:ZT(t)?9007199254740991:10:$()}function En(t,e){if(t===e)return!0;const n=Ai(t);if(n!==Ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uu(t).isEqual(uu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Cr(r.timestampValue),o=Cr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ci(r.bytesValue).isEqual(Ci(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ve(r.geoPointValue.latitude)===ve(i.geoPointValue.latitude)&&ve(r.geoPointValue.longitude)===ve(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ve(r.integerValue)===ve(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ve(r.doubleValue),o=ve(i.doubleValue);return s===o?lu(s)===lu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Vs(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ww(s)!==Ww(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!En(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function cu(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Nr(t,e){if(t===e)return 0;const n=Ai(t),r=Ai(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ve(i.integerValue||i.doubleValue),a=ve(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Kw(t.timestampValue,e.timestampValue);case 4:return Kw(uu(t),uu(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ci(i),a=Ci(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=H(o[u],a[u]);if(l!==0)return l}return H(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=H(ve(i.latitude),ve(s.latitude));return o!==0?o:H(ve(i.longitude),ve(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Nr(o[u],a[u]);if(l)return l}return H(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===or.mapValue&&s===or.mapValue)return 0;if(i===or.mapValue)return 1;if(s===or.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=H(a[c],l[c]);if(h!==0)return h;const d=Nr(o[a[c]],u[l[c]]);if(d!==0)return d}return H(a.length,l.length)}(t.mapValue,e.mapValue);default:throw $()}}function Kw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=Cr(t),r=Cr(e),i=H(n.seconds,r.seconds);return i!==0?i:H(n.nanos,r.nanos)}function As(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Cr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ci(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Ip(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Ip(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Ni(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _p(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function Gw(t){return!!t&&"nullValue"in t}function Qw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wl(t){return!!t&&"mapValue"in t}function Ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ca(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ZT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function GL(t){return"nullValue"in t?zl:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ni(Ar.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function QL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ni(Ar.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?or:$()}function Yw(t,e){const n=Nr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Xw(t,e){const n=Nr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ca(n)}setAll(e){let n=ke.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ca(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ye(Ca(this.value))}}function e1(t){const e=[];return Hi(t.fields,(n,r)=>{const i=new ke([n]);if(Wl(r)){const s=e1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
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
 */class ae{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ae(e,0,B.min(),B.min(),Ye.empty(),0)}static newFoundDocument(e,n,r){return new ae(e,1,n,B.min(),r,0)}static newNoDocument(e,n){return new ae(e,2,n,B.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new ae(e,3,n,B.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ae(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class YL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Jw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new YL(t,e,n,r,i,s,o)}function Ri(t){const e=L(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+As(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ju(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>As(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>As(r)).join(",")),e.ht=n}return e.ht}function XL(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${As(r.value)}`;var r}).join(", ")}]`),ju(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>As(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>As(n)).join(",")),`Target(${e})`}function qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!sM(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!En(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!n0(t.startAt,e.startAt)&&n0(t.endAt,e.endAt)}function Uc(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Vc(t,e){return t.filters.filter(n=>n instanceof Xe&&n.field.isEqual(e))}function Zw(t,e,n){let r=zl,i=!0;for(const s of Vc(t,e)){let o=zl,a=!0;switch(s.op){case"<":case"<=":o=GL(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=zl}Yw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Yw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function e0(t,e,n){let r=or,i=!0;for(const s of Vc(t,e)){let o=or,a=!0;switch(s.op){case">=":case">":o=QL(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=or}Xw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Xw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}class Xe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new JL(e,n,r):n==="array-contains"?new tM(e,r):n==="in"?new nM(e,r):n==="not-in"?new rM(e,r):n==="array-contains-any"?new iM(e,r):new Xe(e,n,r)}static lt(e,n,r){return n==="in"?new ZL(e,r):new eM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Nr(n,this.value)):n!==null&&Ai(this.value)===Ai(n)&&this.ft(Nr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class JL extends Xe{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.ft(n)}}class ZL extends Xe{constructor(e,n){super(e,"in",n),this.keys=t1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class eM extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=t1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function t1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class tM extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&cu(n.arrayValue,this.value)}}class nM extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cu(this.value.arrayValue,n)}}class rM extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(cu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!cu(this.value.arrayValue,n)}}class iM extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cu(this.value.arrayValue,r))}}class Rr{constructor(e,n){this.position=e,this.inclusive=n}}class Ns{constructor(e,n="asc"){this.field=e,this.dir=n}}function sM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function t0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=Nr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function n0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}function n1(t,e,n,r,i,s,o,a){return new qn(t,e,n,r,i,s,o,a)}function po(t){return new qn(t)}function r0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $g(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ug(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Vg(t){return t.collectionGroup!==null}function Bs(t){const e=L(t);if(e._t===null){e._t=[];const n=Ug(e),r=$g(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ns(n)),e._t.push(new Ns(ke.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ns(ke.keyField(),s))}}}return e._t}function bt(t){const e=L(t);if(!e.wt)if(e.limitType==="F")e.wt=Jw(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Bs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ns(s.field,o))}const r=e.endAt?new Rr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Rr(e.startAt.position,e.startAt.inclusive):null;e.wt=Jw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Bc(t,e,n){return new qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zu(t,e){return qu(bt(t),bt(e))&&t.limitType===e.limitType}function r1(t){return`${Ri(bt(t))}|lt:${t.limitType}`}function Sp(t){return`Query(target=${XL(bt(t))}; limitType=${t.limitType})`}function Bg(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=t0(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Bs(n),r)||n.endAt&&!function(i,s,o){const a=t0(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Bs(n),r))}(t,e)}function i1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s1(t){return(e,n)=>{let r=!1;for(const i of Bs(t)){const s=oM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function oM(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Nr(a,u):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */function o1(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lu(e)?"-0":e}}function a1(t){return{integerValue:""+t}}function u1(t,e){return JT(e)?a1(e):o1(t,e)}/**
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
 */class jh{constructor(){this._=void 0}}function aM(t,e,n){return t instanceof js?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof xi?c1(t,e):t instanceof Di?h1(t,e):function(r,i){const s=l1(r,i),o=i0(s)+i0(r.yt);return _p(s)&&_p(r.yt)?a1(o):o1(r.It,o)}(t,e)}function uM(t,e,n){return t instanceof xi?c1(t,e):t instanceof Di?h1(t,e):n}function l1(t,e){return t instanceof qs?_p(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class js extends jh{}class xi extends jh{constructor(e){super(),this.elements=e}}function c1(t,e){const n=d1(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class Di extends jh{constructor(e){super(),this.elements=e}}function h1(t,e){let n=d1(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class qs extends jh{constructor(e,n){super(),this.It=e,this.yt=n}}function i0(t){return ve(t.integerValue||t.doubleValue)}function d1(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Wu{constructor(e,n){this.field=e,this.transform=n}}function lM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof xi&&r instanceof xi||n instanceof Di&&r instanceof Di?Vs(n.elements,r.elements,En):n instanceof qs&&r instanceof qs?En(n.yt,r.yt):n instanceof js&&r instanceof js}(t.transform,e.transform)}class cM{constructor(e,n){this.version=e,this.transformResults=n}}class fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fe}static exists(e){return new fe(void 0,e)}static updateTime(e){return new fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function f1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new go(t.key,fe.none()):new mo(t.key,t.data,fe.none());{const n=t.data,r=Ye.empty();let i=new se(ke.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zn(t.key,r,new Nt(i.toArray()),fe.none())}}function hM(t,e,n){t instanceof mo?function(r,i,s){const o=r.value.clone(),a=o0(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zn?function(r,i,s){if(!Hl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=o0(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(p1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Aa(t,e,n,r){return t instanceof mo?function(i,s,o,a){if(!Hl(i.precondition,s))return o;const u=i.value.clone(),l=a0(i.fieldTransforms,a,s);return u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof zn?function(i,s,o,a){if(!Hl(i.precondition,s))return o;const u=a0(i.fieldTransforms,a,s),l=s.data;return l.setAll(p1(i)),l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Hl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function dM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=l1(r.transform,i||null);s!=null&&(n===null&&(n=Ye.empty()),n.set(r.field,s))}return n||null}function s0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Vs(n,r,(i,s)=>lM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mo extends qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zn extends qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function p1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function o0(t,e,n){const r=new Map;j(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,uM(o,a,n[i]))}return r}function a0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,aM(s,o,e))}return r}class go extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jg extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fM{constructor(e){this.count=e}}/**
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
 */var Ae,J;function m1(t){switch(t){default:return $();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function g1(t){if(t===void 0)return be("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ae.OK:return T.OK;case Ae.CANCELLED:return T.CANCELLED;case Ae.UNKNOWN:return T.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return T.INTERNAL;case Ae.UNAVAILABLE:return T.UNAVAILABLE;case Ae.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ae.NOT_FOUND:return T.NOT_FOUND;case Ae.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ae.ABORTED:return T.ABORTED;case Ae.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ae.DATA_LOSS:return T.DATA_LOSS;default:return $()}}(J=Ae||(Ae={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Br{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
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
 */const pM=new _e(O.comparator);function _t(){return pM}const y1=new _e(O.comparator);function oa(...t){let e=y1;for(const n of t)e=e.insert(n.key,n);return e}function v1(t){let e=y1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ln(){return Na()}function w1(){return Na()}function Na(){return new Br(t=>t.toString(),(t,e)=>t.isEqual(e))}const mM=new _e(O.comparator),gM=new se(O.comparator);function K(...t){let e=gM;for(const n of t)e=e.add(n);return e}const yM=new se(H);function zh(){return yM}/**
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
 */class Hu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ku.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hu(B.min(),i,zh(),_t(),K())}}class Ku{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ku(r,n,K(),K(),K())}}/**
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
 */class Kl{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class E1{constructor(e,n){this.targetId=e,this.At=n}}class I1{constructor(e,n,r=Oe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class u0{constructor(){this.Rt=0,this.bt=c0(),this.Pt=Oe.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=K(),n=K(),r=K();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Ku(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=c0()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class vM{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=_t(),this.qt=l0(),this.Kt=new se(H)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Uc(s))if(r===0){const o=new O(s.path);this.jt(n,o,ae.newNoDocument(o,B.min()))}else j(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Uc(a.target)){const u=new O(a.target.path);this.Ut.get(u)!==null||this.ee(o,u)||this.jt(o,u,ae.newNoDocument(u,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=K();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Hu(e,n,this.Kt,this.Ut,r);return this.Ut=_t(),this.qt=l0(),this.Kt=new se(H),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new u0,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new se(H),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new u0),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function l0(){return new _e(O.comparator)}function c0(){return new _e(O.comparator)}/**
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
 */const wM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class IM{constructor(e,n){this.databaseId=e,this.gt=n}}function du(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _1(t,e){return t.gt?e.toBase64():e.toUint8Array()}function _M(t,e){return du(t,e.toTimestamp())}function Ue(t){return j(!!t),B.fromTimestamp(function(e){const n=Cr(e);return new pe(n.seconds,n.nanos)}(t))}function qg(t,e){return function(n){return new ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function S1(t){const e=ee.fromString(t);return j(x1(e)),e}function fu(t,e){return qg(t.databaseId,e.path)}function mn(t,e){const n=S1(e);if(n.get(1)!==t.databaseId.projectId)throw new C(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(b1(n))}function Tp(t,e){return qg(t.databaseId,e)}function T1(t){const e=S1(t);return e.length===4?ee.emptyPath():b1(e)}function pu(t){return new ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b1(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function h0(t,e,n){return{name:fu(t,e),fields:n.value.mapValue.fields}}function k1(t,e,n){const r=mn(t,e.name),i=Ue(e.updateTime),s=new Ye({mapValue:{fields:e.fields}}),o=ae.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function SM(t,e){return"found"in e?function(n,r){j(!!r.found),r.found.name,r.found.updateTime;const i=mn(n,r.found.name),s=Ue(r.found.updateTime),o=new Ye({mapValue:{fields:r.found.fields}});return ae.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){j(!!r.missing),j(!!r.readTime);const i=mn(n,r.missing),s=Ue(r.readTime);return ae.newNoDocument(i,s)}(t,e):$()}function TM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.gt?(j(l===void 0||typeof l=="string"),Oe.fromBase64String(l||"")):(j(l===void 0||l instanceof Uint8Array),Oe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?T.UNKNOWN:g1(u.code);return new C(l,u.message||"")}(o);n=new I1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=mn(t,r.document.name),s=Ue(r.document.updateTime),o=new Ye({mapValue:{fields:r.document.fields}}),a=ae.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Kl(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=mn(t,r.document),s=r.readTime?Ue(r.readTime):B.min(),o=ae.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Kl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=mn(t,r.document),s=r.removedTargetIds||[];n=new Kl([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new fM(i),o=r.targetId;n=new E1(o,s)}}return n}function mu(t,e){let n;if(e instanceof mo)n={update:h0(t,e.key,e.value)};else if(e instanceof go)n={delete:fu(t,e.key)};else if(e instanceof zn)n={update:h0(t,e.key,e.data),updateMask:xM(e.fieldMask)};else{if(!(e instanceof jg))return $();n={verify:fu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof js)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xi)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Di)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qs)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:_M(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function bp(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?fe.updateTime(Ue(i.updateTime)):i.exists!==void 0?fe.exists(i.exists):fe.none()}(e.currentDocument):fe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new js;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new xi(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Di(l)}else"increment"in o?a=new qs(s,o.increment):$();const u=ke.fromServerFormat(o.fieldPath);return new Wu(u,a)}(t,i)):[];if(e.update){e.update.name;const i=mn(t,e.update.name),s=new Ye({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Nt(u.map(l=>ke.fromServerFormat(l)))}(e.updateMask);return new zn(i,s,o,n,r)}return new mo(i,s,n,r)}if(e.delete){const i=mn(t,e.delete);return new go(i,n)}if(e.verify){const i=mn(t,e.verify);return new jg(i,n)}return $()}function bM(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ue(r.updateTime):Ue(i);return s.isEqual(B.min())&&(s=Ue(i)),new cM(s,r.transformResults||[])}(n,e))):[]}function C1(t,e){return{documents:[Tp(t,e.path)]}}function A1(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Tp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(c=>function(h){if(h.op==="=="){if(Qw(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NAN"}};if(Gw(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Qw(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NOT_NAN"}};if(Gw(h.value))return{unaryFilter:{field:ts(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ts(h.field),op:AM(h.op),value:h.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(c){return{field:ts(c.field),direction:CM(c.dir)}}(l))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(u,l){return u.gt||ju(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function N1(t){let e=T1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){j(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=R1(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ns(ps(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ju(h)?null:h}(n.limit));let u=null;n.startAt&&(u=function(c){const h=!!c.before,d=c.values||[];return new Rr(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(c){const h=!c.before,d=c.values||[];return new Rr(d,h)}(n.endAt)),n1(e,i,o,s,a,"F",u,l)}function kM(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function R1(t){return t?t.unaryFilter!==void 0?[RM(t)]:t.fieldFilter!==void 0?[NM(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>R1(e)).reduce((e,n)=>e.concat(n)):$():[]}function CM(t){return wM[t]}function AM(t){return EM[t]}function ts(t){return{fieldPath:t.canonicalString()}}function ps(t){return ke.fromServerFormat(t.fieldPath)}function NM(t){return Xe.create(ps(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}function RM(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ps(t.unaryFilter.field);return Xe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ps(t.unaryFilter.field);return Xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ps(t.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ps(t.unaryFilter.field);return Xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}function xM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=d0(e)),e=DM(t.get(n),e);return d0(e)}function DM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function d0(t){return t+""}function cn(t){const e=t.length;if(j(e>=2),e===2)return j(t.charAt(0)===""&&t.charAt(1)===""),ee.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:$()}s=o+2}return new ee(r)}/**
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
 */const f0=["userId","batchId"];/**
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
 */function Gl(t,e){return[t,mt(e)]}function D1(t,e,n){return[t,mt(e),n]}const OM={},PM=["prefixPath","collectionGroup","readTime","documentId"],LM=["prefixPath","collectionGroup","documentId"],MM=["collectionGroup","readTime","prefixPath","documentId"],FM=["canonicalId","targetId"],$M=["targetId","path"],UM=["path","targetId"],VM=["collectionId","parent"],BM=["indexId","uid"],jM=["uid","sequenceNumber"],qM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],zM=["indexId","uid","orderedDocumentKey"],WM=["userId","collectionPath","documentId"],HM=["userId","collectionPath","largestBatchId"],KM=["userId","collectionGroup","largestBatchId"],O1=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],GM=[...O1,"documentOverlays"],P1=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],L1=P1,QM=[...L1,"indexConfiguration","indexState","indexEntries"];/**
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
 */class kp extends QT{constructor(e,n){super(),this.ie=e,this.currentSequenceNumber=n}}function ze(t,e){const n=L(t);return Gt.M(n.ie,e)}/**
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
 */class zg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&hM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=w1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=f1(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&Vs(this.mutations,e.mutations,(n,r)=>s0(n,r))&&Vs(this.baseMutations,e.baseMutations,(n,r)=>s0(n,r))}}class Wg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){j(e.mutations.length===r.length);let i=mM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Wg(e,n,r,i)}}/**
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
 */class Hg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yr{constructor(e,n,r,i,s=B.min(),o=B.min(),a=Oe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class M1{constructor(e){this.re=e}}function YM(t,e){let n;if(e.document)n=k1(t.re,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),i=Pi(e.noDocument.readTime);n=ae.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=O.fromSegments(e.unknownDocument.path),i=Pi(e.unknownDocument.version);n=ae.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(r){const i=new pe(r[0],r[1]);return B.fromTimestamp(i)}(e.readTime)),n}function p0(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:jc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,s){return{name:fu(i,s.key),fields:s.data.value.mapValue.fields,updateTime:du(i,s.version.toTimestamp())}}(t.re,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Oi(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:n.path.toArray(),version:Oi(e.version)}}return r}function jc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Oi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Pi(t){const e=new pe(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function ei(t,e){const n=(e.baseMutations||[]).map(s=>bp(t.re,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>bp(t.re,s)),i=pe.fromMillis(e.localWriteTimeMs);return new zg(e.batchId,i,n,r)}function aa(t){const e=Pi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Pi(t.lastLimboFreeSnapshotVersion):B.min();let r;var i;return t.query.documents!==void 0?(j((i=t.query).documents.length===1),r=bt(po(T1(i.documents[0])))):r=function(s){return bt(N1(s))}(t.query),new yr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Oe.fromBase64String(t.resumeToken))}function F1(t,e){const n=Oi(e.snapshotVersion),r=Oi(e.lastLimboFreeSnapshotVersion);let i;i=Uc(e.target)?C1(t.re,e.target):A1(t.re,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ri(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Kg(t){const e=N1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bc(e,e.limit,"L"):e}function Zd(t,e){return new Hg(e.largestBatchId,bp(t.re,e.overlayMutation))}function m0(t,e){const n=e.path.lastSegment();return[t,mt(e.path.popLast()),n]}function g0(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Oi(r.readTime),documentKey:mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class XM{getBundleMetadata(e,n){return y0(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Pi(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return y0(e).put({bundleId:(r=n).id,createTime:Oi(Ue(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return v0(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:Kg(i.bundledQuery),readTime:Pi(i.readTime)};var i})}saveNamedQuery(e,n){return v0(e).put(function(r){return{name:r.name,readTime:Oi(Ue(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function y0(t){return ze(t,"bundles")}function v0(t){return ze(t,"namedQueries")}/**
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
 */class Wh{constructor(e,n){this.It=e,this.userId=n}static oe(e,n){const r=n.uid||"";return new Wh(e,r)}getOverlay(e,n){return Bo(e).get(m0(this.userId,n)).next(r=>r?Zd(this.It,r):null)}getOverlays(e,n){const r=ln();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new Hg(n,o);i.push(this.ue(e,a))}),I.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(mt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Bo(e).Y("collectionPathOverlayIndex",a))}),I.waitFor(s)}getOverlaysForCollection(e,n,r){const i=ln(),s=mt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Bo(e).W("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const l=Zd(this.It,u);i.set(l.getKey(),l)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=ln();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Bo(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,l,c)=>{const h=Zd(this.It,l);s.size()<i||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):c.done()}).next(()=>s)}ue(e,n){return Bo(e).put(function(r,i,s){const[o,a,u]=m0(i,s.mutation.key);return{userId:i,collectionPath:a,documentId:u,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:mu(r.re,s.mutation)}}(this.It,this.userId,n))}}function Bo(t){return ze(t,"documentOverlays")}/**
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
 */class ti{constructor(){}ce(e,n){this.ae(e,n),n.he()}ae(e,n){if("nullValue"in e)this.le(n,5);else if("booleanValue"in e)this.le(n,10),n.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(n,15),n.fe(ve(e.integerValue));else if("doubleValue"in e){const r=ve(e.doubleValue);isNaN(r)?this.le(n,13):(this.le(n,15),lu(r)?n.fe(0):n.fe(r))}else if("timestampValue"in e){const r=e.timestampValue;this.le(n,20),typeof r=="string"?n.de(r):(n.de(`${r.seconds||""}`),n.fe(r.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,n),this.we(n);else if("bytesValue"in e)this.le(n,30),n.me(Ci(e.bytesValue)),this.we(n);else if("referenceValue"in e)this.ge(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.le(n,45),n.fe(r.latitude||0),n.fe(r.longitude||0)}else"mapValue"in e?ZT(e)?this.le(n,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,n),this.we(n)):"arrayValue"in e?(this.pe(e.arrayValue,n),this.we(n)):$()}_e(e,n){this.le(n,25),this.Ie(e,n)}Ie(e,n){n.de(e)}ye(e,n){const r=e.fields||{};this.le(n,55);for(const i of Object.keys(r))this._e(i,n),this.ae(r[i],n)}pe(e,n){const r=e.values||[];this.le(n,50);for(const i of r)this.ae(i,n)}ge(e,n){this.le(n,37),O.fromName(e).path.forEach(r=>{this.le(n,60),this.Ie(r,n)})}le(e,n){e.fe(n)}we(e){e.fe(2)}}ti.Te=new ti;function JM(t){if(t===0)return 8;let e=0;return t>>4==0&&(e+=4,t<<=4),t>>6==0&&(e+=2,t<<=2),t>>7==0&&(e+=1),e}function w0(t){const e=64-function(n){let r=0;for(let i=0;i<8;++i){const s=JM(255&n[i]);if(r+=s,s!==8)break}return r}(t);return Math.ceil(e/8)}class ZM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ae(r.value),r=n.next();this.Re()}be(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Pe(r.value),r=n.next();this.ve()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ae(r);else if(r<2048)this.Ae(960|r>>>6),this.Ae(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ae(480|r>>>12),this.Ae(128|63&r>>>6),this.Ae(128|63&r);else{const i=n.codePointAt(0);this.Ae(240|i>>>18),this.Ae(128|63&i>>>12),this.Ae(128|63&i>>>6),this.Ae(128|63&i)}}this.Re()}Se(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Pe(r);else if(r<2048)this.Pe(960|r>>>6),this.Pe(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Pe(480|r>>>12),this.Pe(128|63&r>>>6),this.Pe(128|63&r);else{const i=n.codePointAt(0);this.Pe(240|i>>>18),this.Pe(128|63&i>>>12),this.Pe(128|63&i>>>6),this.Pe(128|63&i)}}this.ve()}De(e){const n=this.Ce(e),r=w0(n);this.xe(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Ne(e){const n=this.Ce(e),r=w0(n);this.xe(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const n=function(i){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,i,!1),new Uint8Array(s.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ae(e){const n=255&e;n===0?(this.Oe(0),this.Oe(255)):n===255?(this.Oe(255),this.Oe(0)):this.Oe(n)}Pe(e){const n=255&e;n===0?(this.Fe(0),this.Fe(255)):n===255?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class eF{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class tF{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class jo{constructor(){this.Be=new ZM,this.Le=new eF(this.Be),this.Ue=new tF(this.Be)}seed(e){this.Be.seed(e)}qe(e){return e===0?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}/**
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
 */class ni{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ke(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ni(this.indexId,this.documentKey,this.arrayValue,r)}}function Gr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=E0(t.arrayValue,e.arrayValue),n!==0?n:(n=E0(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function E0(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class nF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const n of e.filters){const r=n;r.dt()?this.je=r:this.Qe.push(r)}}We(e){const n=Ep(e);if(n!==void 0&&!this.ze(n))return!1;const r=Jr(e);let i=0,s=0;for(;i<r.length&&this.ze(r[i]);++i);if(i===r.length)return!0;if(this.je!==void 0){const o=r[i];if(!this.He(this.je,o)||!this.Je(this.Ge[s++],o))return!1;++i}for(;i<r.length;++i){const o=r[i];if(s>=this.Ge.length||!this.Je(this.Ge[s++],o))return!1}return!0}ze(e){for(const n of this.Qe)if(this.He(n,e))return!0;return!1}He(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}Je(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */class rF{constructor(){this.Ye=new Gg}addToCollectionParentIndex(e,n){return this.Ye.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(xt.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class Gg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new se(ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(ee.comparator)).toArray()}}/**
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
 */const Il=new Uint8Array(0);class iF{constructor(e,n){this.user=e,this.databaseId=n,this.Xe=new Gg,this.Ze=new Br(r=>Ri(r),(r,i)=>qu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Xe.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Xe.add(n)});const s={collectionId:r,parent:mt(i)};return I0(e).put(s)}return I.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[zT(n),""],!1,!0);return I0(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(cn(o.parent))}return r})}addFieldIndex(e,n){const r=_l(e),i=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=zo(e);return s.next(a=>{o.put(g0(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=_l(e),i=zo(e),s=qo(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=qo(e);let i=!0;const s=new Map;return I.forEach(this.tn(n),o=>this.en(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=K();const a=[];return I.forEach(s,(u,l)=>{var c;A("IndexedDbIndexManager",`Using index ${c=u,`id=${c.indexId}|cg=${c.collectionGroup}|f=${c.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`} to execute ${Ri(n)}`);const h=function(E,S){const N=Ep(S);if(N===void 0)return null;for(const w of Vc(E,N.fieldPath))switch(w.op){case"array-contains-any":return w.value.arrayValue.values||[];case"array-contains":return[w.value]}return null}(l,u),d=function(E,S){const N=new Map;for(const w of Jr(S))for(const b of Vc(E,w.fieldPath))switch(b.op){case"==":case"in":N.set(w.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return N.set(w.fieldPath.canonicalString(),b.value),Array.from(N.values())}return null}(l,u),f=function(E,S){const N=[];let w=!0;for(const b of Jr(S)){const x=b.kind===0?Zw(E,b.fieldPath,E.startAt):e0(E,b.fieldPath,E.startAt);N.push(x.value),w&&(w=x.inclusive)}return new Rr(N,w)}(l,u),g=function(E,S){const N=[];let w=!0;for(const b of Jr(S)){const x=b.kind===0?e0(E,b.fieldPath,E.endAt):Zw(E,b.fieldPath,E.endAt);N.push(x.value),w&&(w=x.inclusive)}return new Rr(N,w)}(l,u),v=this.nn(u,l,f),m=this.nn(u,l,g),p=this.sn(u,l,d),y=this.rn(u.indexId,h,v,f.inclusive,m,g.inclusive,p);return I.forEach(y,E=>r.J(E,n.limit).next(S=>{S.forEach(N=>{const w=O.fromSegments(N.documentKey);o.has(w)||(o=o.add(w),a.push(w))})}))}).next(()=>a)}return I.resolve(null)})}tn(e){let n=this.Ze.get(e);return n||(n=[e],this.Ze.set(e,n),n)}rn(e,n,r,i,s,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),l=u/(n!=null?n.length:1),c=[];for(let h=0;h<u;++h){const d=n?this.on(n[h/l]):Il,f=this.un(e,d,r[h%l],i),g=this.cn(e,d,s[h%l],o),v=a.map(m=>this.un(e,d,m,!0));c.push(...this.createRange(f,g,v))}return c}un(e,n,r,i){const s=new ni(e,O.empty(),n,r);return i?s:s.Ke()}cn(e,n,r,i){const s=new ni(e,O.empty(),n,r);return i?s.Ke():s}en(e,n){const r=new nF(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.We(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;return I.forEach(this.tn(n),i=>this.en(e,i).next(s=>{s?r!==0&&s.fields.length<function(o){let a=new se(ke.comparator),u=!1;for(const l of o.filters){const c=l;c.field.isKeyField()||(c.op==="array-contains"||c.op==="array-contains-any"?u=!0:a=a.add(c.field))}for(const l of o.orderBy)l.field.isKeyField()||(a=a.add(l.field));return a.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>r)}an(e,n){const r=new jo;for(const i of Jr(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.qe(i.kind);ti.Te.ce(s,o)}return r.$e()}on(e){const n=new jo;return ti.Te.ce(e,n.qe(0)),n.$e()}hn(e,n){const r=new jo;return ti.Te.ce(Ni(this.databaseId,n),r.qe(function(i){const s=Jr(i);return s.length===0?0:s[s.length-1].kind}(e))),r.$e()}sn(e,n,r){if(r===null)return[];let i=[];i.push(new jo);let s=0;for(const o of Jr(e)){const a=r[s++];for(const u of i)if(this.ln(n,o.fieldPath)&&hu(a))i=this.fn(i,o,a);else{const l=u.qe(o.kind);ti.Te.ce(a,l)}}return this.dn(i)}nn(e,n,r){return this.sn(e,n,r.position)}dn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].$e();return n}fn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const u=new jo;u.seed(a.$e()),ti.Te.ce(o,u.qe(n.kind)),s.push(u)}return s}ln(e,n){return!!e.filters.find(r=>r instanceof Xe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=_l(e),i=zo(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return I.forEach(s,a=>i.get([a.indexId,this.uid]).next(u=>{o.push(function(l,c){const h=c?new $c(c.sequenceNumber,new xt(Pi(c.readTime),new O(cn(c.documentKey)),c.largestBatchId)):$c.empty(),d=l.fields.map(([f,g])=>new VL(ke.fromServerFormat(f),g));return new WT(l.indexId,l.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:H(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=_l(e),s=zo(e);return this._n(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>I.forEach(a,u=>s.put(g0(u.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return I.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?I.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),I.forEach(a,u=>this.wn(e,i,u).next(l=>{const c=this.mn(s,u);return l.isEqual(c)?I.resolve():this.gn(e,s,u,l,c)}))))})}yn(e,n,r,i){return qo(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.hn(r,n.key),documentKey:n.key.path.toArray()})}pn(e,n,r,i){return qo(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.hn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=qo(e);let s=new se(Gr);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.hn(r,n)])},(o,a)=>{s=s.add(new ni(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}mn(e,n){let r=new se(Gr);const i=this.an(n,e);if(i==null)return r;const s=Ep(n);if(s!=null){const o=e.data.field(s.fieldPath);if(hu(o))for(const a of o.arrayValue.values||[])r=r.add(new ni(n.indexId,e.key,this.on(a),i))}else r=r.add(new ni(n.indexId,e.key,Il,i));return r}gn(e,n,r,i,s){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,u,l,c,h){const d=a.getIterator(),f=u.getIterator();let g=es(d),v=es(f);for(;g||v;){let m=!1,p=!1;if(g&&v){const y=l(g,v);y<0?p=!0:y>0&&(m=!0)}else g!=null?p=!0:m=!0;m?(c(v),v=es(f)):p?(h(g),g=es(d)):(g=es(d),v=es(f))}}(i,s,Gr,a=>{o.push(this.yn(e,n,r,a))},a=>{o.push(this.pn(e,n,r,a))}),I.waitFor(o)}_n(e){let n=1;return zo(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Gr(o,a)).filter((o,a,u)=>!a||Gr(o,u[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Gr(o,e),u=Gr(o,n);if(a===0)i[0]=e.Ke();else if(a>0&&u<0)i.push(o),i.push(o.Ke());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2)s.push(IDBKeyRange.bound([i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Il,[]],[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Il,[]]));return s}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(_0)}getMinOffset(e,n){return I.mapArray(this.tn(n),r=>this.en(e,r).next(i=>i||$())).next(_0)}}function I0(t){return ze(t,"collectionParents")}function qo(t){return ze(t,"indexEntries")}function _l(t){return ze(t,"indexConfiguration")}function zo(t){return ze(t,"indexState")}function _0(t){j(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Lg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new xt(e.readTime,e.documentKey,n)}/**
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
 */const S0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function $1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.Z({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{j(a===1)}));const l=[];for(const c of n.mutations){const h=D1(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return I.waitFor(s).next(()=>l)}function qc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class Hh{constructor(e,n,r,i){this.userId=e,this.It=n,this.indexManager=r,this.referenceDelegate=i,this.In={}}static oe(e,n,r,i){j(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Hh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Gn(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ss(e),o=Gn(e);return o.add({}).next(a=>{j(typeof a=="number");const u=new zg(a,n,r,i),l=function(d,f,g){const v=g.baseMutations.map(p=>mu(d.re,p)),m=g.mutations.map(p=>mu(d.re,p));return{userId:f,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:v,mutations:m}}(this.It,this.userId,u),c=[];let h=new se((d,f)=>H(d.canonicalString(),f.canonicalString()));for(const d of i){const f=D1(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(f,OM))}return h.forEach(d=>{c.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=u.keys()}),I.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Gn(e).get(n).next(r=>r?(j(r.userId===this.userId),ei(this.It,r)):null)}Tn(e,n){return this.In[n]?I.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.In[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Gn(e).Z({index:"userMutationsIndex",range:i},(o,a,u)=>{a.userId===this.userId&&(j(a.batchId>=r),s=ei(this.It,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Gn(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Gn(e).W("userMutationsIndex",n).next(r=>r.map(i=>ei(this.It,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Gl(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ss(e).Z({range:i},(o,a,u)=>{const[l,c,h]=o,d=cn(c);if(l===this.userId&&n.path.isEqual(d))return Gn(e).get(h).next(f=>{if(!f)throw $();j(f.userId===this.userId),s.push(ei(this.It,f))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(H);const i=[];return n.forEach(s=>{const o=Gl(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=ss(e).Z({range:a},(l,c,h)=>{const[d,f,g]=l,v=cn(f);d===this.userId&&s.path.isEqual(v)?r=r.add(g):h.done()});i.push(u)}),I.waitFor(i).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Gl(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new se(H);return ss(e).Z({range:o},(u,l,c)=>{const[h,d,f]=u,g=cn(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):c.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Gn(e).get(s).next(o=>{if(o===null)throw $();j(o.userId===this.userId),r.push(ei(this.It,o))}))}),I.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return $1(e.ie,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),I.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return I.resolve();const r=IDBKeyRange.lowerBound([this.userId]),i=[];return ss(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=cn(s[1]);i.push(u)}else a.done()}).next(()=>{j(i.length===0)})})}containsKey(e,n){return U1(e,this.userId,n)}Rn(e){return V1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function U1(t,e,n){const r=Gl(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ss(t).Z({range:s,X:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Gn(t){return ze(t,"mutations")}function ss(t){return ze(t,"documentMutations")}function V1(t){return ze(t,"mutationQueues")}/**
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
 */class Li{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Li(0)}static vn(){return new Li(-1)}}/**
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
 */class sF{constructor(e,n){this.referenceDelegate=e,this.It=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new Li(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>B.fromTimestamp(new pe(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Sn(e,i)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ns(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ns(e).Z((o,a)=>{const u=aa(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>I.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ns(e).Z((r,i)=>{const s=aa(i);n(s)})}Vn(e){return T0(e).get("targetGlobalKey").next(n=>(j(n!==null),n))}Sn(e,n){return T0(e).put("targetGlobalKey",n)}Dn(e,n){return ns(e).put(F1(this.It,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Ri(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ns(e).Z({range:i,index:"queryTargetsIndex"},(o,a,u)=>{const l=aa(a);qu(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Zn(e);return n.forEach(o=>{const a=mt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),I.waitFor(i)}removeMatchingKeys(e,n,r){const i=Zn(e);return I.forEach(n,s=>{const o=mt(s.path);return I.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Zn(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Zn(e);let s=K();return i.Z({range:r,X:!0},(o,a,u)=>{const l=cn(o[1]),c=new O(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=mt(n.path),i=IDBKeyRange.bound([r],[zT(r)],!1,!0);let s=0;return Zn(e).Z({index:"documentTargetsIndex",X:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}se(e,n){return ns(e).get(n).next(r=>r?aa(r):null)}}function ns(t){return ze(t,"targets")}function T0(t){return ze(t,"targetGlobal")}function Zn(t){return ze(t,"targetDocuments")}/**
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
 */function b0([t,e],[n,r]){const i=H(t,n);return i===0?H(e,r):i}class oF{constructor(e){this.xn=e,this.buffer=new se(b0),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();b0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aF{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vr(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ur(n)}await this.Fn(3e5)})}}class uF{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return I.resolve(It.at);const r=new oF(n);return this.$n.forEachTarget(e,i=>r.On(i.sequenceNumber)).next(()=>this.$n.Ln(e,i=>r.On(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),I.resolve(S0)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),S0):this.Un(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),wp()<=te.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
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
 */class lF{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new uF(r,i)}(this,n)}Bn(e){const n=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}qn(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,i)=>n(i))}addReference(e,n,r){return Sl(e,r)}removeReference(e,n,r){return Sl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Sl(e,n)}Gn(e,n){return function(r,i){let s=!1;return V1(r).tt(o=>U1(r,o,i).next(a=>(a&&(s=!0),I.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const u=this.Gn(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,B.min()),Zn(e).delete([0,mt(o.path)])))});i.push(u)}}).next(()=>I.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Sl(e,n)}Kn(e,n){const r=Zn(e);let i,s=It.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==It.at&&n(new O(cn(i)),s),s=l,i=u):s=It.at}).next(()=>{s!==It.at&&n(new O(cn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Sl(t,e){return Zn(t).put(function(n,r){return{targetId:0,path:mt(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class B1{constructor(){this.changes=new Br(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cF{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Qr(e).put(r)}removeEntry(e,n,r){return Qr(e).delete(function(i,s){const o=i.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],jc(s),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=ae.newInvalidDocument(n);return Qr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Wo(n))},(i,s)=>{r=this.jn(n,s)}).next(()=>r)}Wn(e,n){let r={size:0,document:ae.newInvalidDocument(n)};return Qr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Wo(n))},(i,s)=>{r={document:this.jn(n,s),size:qc(s)}}).next(()=>r)}getEntries(e,n){let r=_t();return this.zn(e,n,(i,s)=>{const o=this.jn(i,s);r=r.insert(i,o)}).next(()=>r)}Hn(e,n){let r=_t(),i=new _e(O.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);r=r.insert(s,a),i=i.insert(s,qc(o))}).next(()=>({documents:r,Jn:i}))}zn(e,n,r){if(n.isEmpty())return I.resolve();let i=new se(A0);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(Wo(i.first()),Wo(i.last())),o=i.getIterator();let a=o.getNext();return Qr(e).Z({index:"documentKeyIndex",range:s},(u,l,c)=>{const h=O.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&A0(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,l),a=o.hasNext()?o.getNext():null),a?c.j(Wo(a)):c.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const i=[n.popLast().toArray(),n.lastSegment(),jc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],s=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Qr(e).W(IDBKeyRange.bound(i,s,!0)).next(o=>{let a=_t();for(const u of o){const l=this.jn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);a=a.insert(l.key,l)}return a})}getAllFromCollectionGroup(e,n,r,i){let s=_t();const o=C0(n,r),a=C0(n,xt.max());return Qr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,l,c)=>{const h=this.jn(O.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);s=s.insert(h.key,h),s.size===i&&c.done()}).next(()=>s)}newChangeBuffer(e){return new hF(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return k0(e).get("remoteDocumentGlobalKey").next(n=>(j(!!n),n))}Qn(e,n){return k0(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=YM(this.It,n);if(!(r.isNoDocument()&&r.version.isEqual(B.min())))return r}return ae.newInvalidDocument(e)}}function j1(t){return new cF(t)}class hF extends B1{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Br(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new se((s,o)=>H(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const u=p0(this.Yn.It,o);i=i.add(s.path.popLast()),r+=qc(u)-a.size,n.push(this.Yn.addEntry(e,s,u))}else if(r-=a.size,this.trackRemovals){const u=p0(this.Yn.It,o.convertToNoDocument(B.min()));n.push(this.Yn.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,r)),I.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:i})=>(i.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function k0(t){return ze(t,"remoteDocumentGlobal")}function Qr(t){return ze(t,"remoteDocumentsV14")}function Wo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function C0(t,e){const n=e.documentKey.path.toArray();return[t,jc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function A0(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=H(n[s],r[s]),i)return i;return i=H(n.length,r.length),i||(i=H(n[n.length-2],r[r.length-2]),i||H(n[n.length-1],r[r.length-1]))}/**
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
 */class dF{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class q1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Aa(r.mutation,i,Nt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=ln();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ln();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=_t();const o=Na(),a=Na();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof zn)?s=s.insert(l.key,l):c!==void 0&&(o.set(l.key,c.mutation.getFieldMask()),Aa(c.mutation,l,c.mutation.getFieldMask(),pe.now()))}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new dF(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Na();let i=new _e((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||Nt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||K()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=w1();c.forEach(d=>{if(!s.has(d)){const f=f1(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Vg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(ln());let a=-1,u=s;return o.next(l=>I.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.getBaseDocument(e,c,h).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,K())).next(c=>({batchId:a,changes:v1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=oa();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const u=function(l,c){return new qn(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,ae.newInvalidDocument(l)))});let o=oa();return i.forEach((a,u)=>{const l=s.get(a);l!==void 0&&Aa(l.mutation,u,Nt.empty(),pe.now()),Bg(n,u)&&(o=o.insert(a,u))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(ae.newInvalidDocument(n))}}/**
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
 */class fF{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return I.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ue(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Kg(r.bundledQuery),readTime:Ue(r.readTime)}}(n)),I.resolve()}}/**
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
 */class pF{constructor(){this.overlays=new _e(O.comparator),this.es=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ln();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=ln(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=ln(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=ln(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return I.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hg(n,r));let s=this.es.get(n);s===void 0&&(s=K(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Qg{constructor(){this.ns=new se(Me.ss),this.rs=new se(Me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Me(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Me(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new ee([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new ee([])),r=new Me(n,e),i=new Me(n,e+1);let s=K();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||H(e._s,n._s)}static os(e,n){return H(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class mF{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new se(Me.ss)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zg(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(H);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),I.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new Me(new O(s),0);let a=new se(H);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u._s)),!0)},o),I.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){j(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return I.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Me(n,0),i=this.gs.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gF{constructor(e){this.Es=e,this.docs=new _e(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():ae.newInvalidDocument(n))}getEntries(e,n){let r=_t();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ae.newInvalidDocument(i))}),I.resolve(r)}getAllFromCollection(e,n,r){let i=_t();const s=new O(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Lg(KT(u),r)<=0||(i=i.insert(u.key,u.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yF(this)}getSize(e){return I.resolve(this.size)}}class yF extends B1{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class vF{constructor(e){this.persistence=e,this.Rs=new Br(n=>Ri(n),qu),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Qg,this.targetCount=0,this.vs=Li.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),I.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Li(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.Dn(n),I.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Ps.containsKey(n))}}/**
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
 */class z1{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new It(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new vF(this),this.indexManager=new rF,this.remoteDocumentCache=function(r){return new gF(r)}(r=>this.referenceDelegate.xs(r)),this.It=new M1(n),this.Ns=new fF(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pF,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new mF(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new wF(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return I.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class wF extends QT{constructor(e){super(),this.currentSequenceNumber=e}}class Kh{constructor(e){this.persistence=e,this.Fs=new Qg,this.$s=null}static Bs(e){return new Kh(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),I.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Ls,r=>{const i=O.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return I.or([()=>I.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class EF{constructor(e){this.It=e}$(e,n,r,i){const s=new Bh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",f0,{unique:!0}),a.createObjectStore("documentMutations")}(e),N0(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=I.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),N0(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),l={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").W().next(l=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",f0,{unique:!0});const c=u.store("mutations"),h=l.map(d=>c.put(d));return I.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.qs(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),r<7&&i>=7&&(o=o.next(()=>this.Gs(s))),r<8&&i>=8&&(o=o.next(()=>this.Qs(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.js(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:WM});u.createIndex("collectionPathOverlayIndex",HM,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",KM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:PM});u.createIndex("documentKeyIndex",LM),u.createIndex("collectionGroupIndex",MM)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.zs(e,s))),r<15&&i>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:BM}).createIndex("sequenceNumberIndex",jM,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:qM}).createIndex("documentKeyIndex",zM,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=qc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>I.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>I.forEach(a,u=>{j(u.userId===s.userId);const l=ei(this.It,u);return $1(e,s.userId,l).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const u=new ee(o),l=function(c){return[0,mt(c)]}(u);s.push(n.get(l).next(c=>c?I.resolve():(h=>n.put({targetId:0,path:mt(h),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>I.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:VM});const r=n.store("collectionParents"),i=new Gg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:mt(u)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const u=new ee(o);return s(u.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,u],l)=>{const c=cn(a);return s(c.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,i)=>{const s=aa(i),o=F1(this.It,s);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),u=(l=o,l.document?new O(ee.fromString(l.document.name).popFirst(5)):l.noDocument?O.fromSegments(l.noDocument.path):l.unknownDocument?O.fromSegments(l.unknownDocument.path):$()).path.toArray();var l;/**
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
*/const c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>I.waitFor(i))}zs(e,n){const r=n.store("mutations"),i=j1(this.It),s=new z1(Kh.Bs,this.It.re);return r.W().next(o=>{const a=new Map;return o.forEach(u=>{var l;let c=(l=a.get(u.userId))!==null&&l!==void 0?l:K();ei(this.It,u).keys().forEach(h=>c=c.add(h)),a.set(u.userId,c)}),I.forEach(a,(u,l)=>{const c=new Fe(l),h=Wh.oe(this.It,c),d=s.getIndexManager(c),f=Hh.oe(c,this.It,d,s.referenceDelegate);return new q1(i,f,h,d).recalculateAndSaveOverlaysForDocumentKeys(new kp(n,It.at),u).next()})})}}function N0(t){t.createObjectStore("targetDocuments",{keyPath:$M}).createIndex("documentTargetsIndex",UM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",FM,{unique:!0}),t.createObjectStore("targetGlobal")}const ef="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Yg{constructor(e,n,r,i,s,o,a,u,l,c,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=s,this.window=o,this.document=a,this.Js=l,this.Ys=c,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Yg.C())throw new C(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new lF(this,i),this.ii=n+"main",this.It=new M1(u),this.ri=new Gt(this.ii,this.Xs,new EF(this.It)),this.Cs=new sF(this.referenceDelegate,this.It),this.remoteDocumentCache=j1(this.It),this.Ns=new XM,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,c===!1&&be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new C(T.FAILED_PRECONDITION,ef);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new It(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Tl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Vr(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Ho(e).get("owner").next(n=>I.resolve(this.mi(n)))}gi(e){return Tl(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=ze(n,"clientMetadata");return r.W().next(i=>{const s=this.Ii(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return I.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?I.resolve(!0):Ho(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new C(T.FAILED_PRECONDITION,ef);return!1}}return!(!this.networkEnabled||!this.inForeground)||Tl(e).W().next(r=>this.Ii(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new kp(e,It.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Tl(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Hh.oe(e,this.It,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new iF(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return Wh.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?QM:o===14?L1:o===13?P1:o===12?GM:o===11?O1:void $();var o;let a;return this.ri.runTransaction(e,i,s,u=>(a=new kp(u,this.Ss?this.Ss.next():It.at),n==="readwrite-primary"?this.fi(a).next(l=>!!l||this.di(a)).next(l=>{if(!l)throw be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new C(T.FAILED_PRECONDITION,GT);return r(a)}).next(l=>this.wi(a).next(()=>l)):this.Vi(a).next(()=>r(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Vi(e){return Ho(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new C(T.FAILED_PRECONDITION,ef)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ho(e).put("owner",n)}static C(){return Gt.C()}_i(e){const n=Ho(e);return n.get("owner").next(r=>this.mi(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):I.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),tN()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){be("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ho(t){return ze(t,"owner")}function Tl(t){return ze(t,"clientMetadata")}function Xg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Jg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jg(e,n.fromCache,r,i)}}/**
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
 */class W1{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(r0(n))return I.resolve(null);let r=bt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Bc(n,null,"F"),r=bt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Fi(n,a);return this.$i(n,l,o,u.readTime)?this.ki(e,Bc(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,r,i){return r0(n)||i.isEqual(B.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(wp()<=te.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sp(n)),this.Bi(e,o,n,HT(i,-1)))})}Fi(e,n){let r=new se(s1(e));return n.forEach((i,s)=>{Bg(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return wp()<=te.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Sp(n)),this.Ni.getDocumentsMatchingQuery(e,n,xt.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class IF{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new _e(H),this.qi=new Br(s=>Ri(s),qu),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q1(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function H1(t,e,n,r){return new IF(t,e,n,r)}async function K1(t,e){const n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=K();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function _F(t,e){const n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=I.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const v=u.docVersions.get(f);j(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,u),g.isValidDocument()&&(g.setReadTime(u.commitVersion),l.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=K();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function G1(t){const e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function SF(t,e){const n=L(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Oe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(g,v,m){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,f,c)&&a.push(n.Cs.updateTargetData(s,f))});let u=_t(),l=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Q1(s,o,e.documentUpdates).next(c=>{u=c.Wi,l=c.zi})),!r.isEqual(B.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.Ui=i,s))}function Q1(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=_t();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{Wi:o,zi:i}})}function TF(t,e){const n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zs(t,e){const n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new yr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Ws(t,e,n){const r=L(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vr(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function zc(t,e,n){const r=L(t);let i=B.min(),s=K();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=L(a),h=c.qi.get(l);return h!==void 0?I.resolve(c.Ui.get(h)):c.Cs.getTargetData(u,l)}(r,o,bt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:K())).next(a=>(J1(r,i1(e),a),{documents:a,Hi:s})))}function Y1(t,e){const n=L(t),r=L(n.Cs),i=n.Ui.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.se(s,e).next(o=>o?o.target:null))}function X1(t,e){const n=L(t),r=n.Ki.get(e)||B.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.Gi.getAllFromCollectionGroup(i,e,HT(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(J1(n,e,i),i))}function J1(t,e,n){let r=t.Ki.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}async function bF(t,e,n,r){const i=L(t);let s=K(),o=_t();for(const l of n){const c=e.Ji(l.metadata.name);l.document&&(s=s.add(c));const h=e.Yi(l);h.setReadTime(e.Xi(l.metadata.readTime)),o=o.insert(c,h)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),u=await zs(i,function(l){return bt(po(ee.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>Q1(l,a,o).next(c=>(a.apply(l),c)).next(c=>i.Cs.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.Cs.addMatchingKeys(l,s,u.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(l,c.Wi,c.zi)).next(()=>c.Wi)))}async function kF(t,e,n=K()){const r=await zs(t,bt(Kg(e.bundledQuery))),i=L(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ue(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ns.saveNamedQuery(s,e);const a=r.withResumeToken(Oe.EMPTY_BYTE_STRING,o);return i.Ui=i.Ui.insert(a.targetId,a),i.Cs.updateTargetData(s,a).next(()=>i.Cs.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Cs.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ns.saveNamedQuery(s,e))})}function R0(t,e){return`firestore_clients_${t}_${e}`}function x0(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function tf(t,e){return`firestore_targets_${t}_${e}`}class Wc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Zi(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new C(i.error.code,i.error.message))),o?new Wc(e,n,i.state,s):(be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ra{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Zi(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new C(r.error.code,r.error.message))),s?new Ra(e,r.state,i):(be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Hc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=zh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=JT(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Hc(e,s):(be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Zg{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Zg(n.clientId,n.onlineState):(be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Cp{constructor(){this.activeTargetIds=zh()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nf{constructor(e,n,r,i,s){this.window=e,this.Hs=n,this.persistenceKey=r,this.sr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new _e(H),this.started=!1,this.cr=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=R0(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Cp),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const r of e){if(r===this.sr)continue;const i=this.getItem(R0(this.persistenceKey,r));if(i){const s=Hc.Zi(r,i);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const r=this.yr(n);r&&this.pr(r)}for(const r of this.cr)this.rr(r);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,r){this.Tr(e,n,r),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(tf(this.persistenceKey,e));if(r){const i=Ra.Zi(e,r);i&&(n=i.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(tf(this.persistenceKey,e))}updateQueryState(e,n,r){this.Rr(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Er(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const r=this.vr(n.key);return this.Vr(r,null)}{const r=this.Sr(n.key,n.newValue);if(r)return this.Vr(r.clientId,r)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const r=this.Dr(n.key,n.newValue);if(r)return this.Cr(r)}}else if(this._r.test(n.key)){if(n.newValue!==null){const r=this.Nr(n.key,n.newValue);if(r)return this.kr(r)}}else if(n.key===this.wr){if(n.newValue!==null){const r=this.yr(n.newValue);if(r)return this.pr(r)}}else if(n.key===this.hr){const r=function(i){let s=It.at;if(i!=null)try{const o=JSON.parse(i);j(typeof o=="number"),s=o}catch(o){be("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==It.at&&this.sequenceNumberHandler(r)}else if(n.key===this.mr){const r=this.Or(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Mr(i)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,r){const i=new Wc(this.currentUser,e,n,r),s=x0(this.persistenceKey,this.currentUser,e);this.setItem(s,i.tr())}Er(e){const n=x0(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,r){const i=tf(this.persistenceKey,e),s=new Ra(e,n,r);this.setItem(i,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const r=this.vr(e);return Hc.Zi(r,n)}Dr(e,n){const r=this.dr.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Wc.Zi(new Fe(s),i,n)}Nr(e,n){const r=this._r.exec(e),i=Number(r[1]);return Ra.Zi(i,n)}yr(e){return Zg.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const r=n?this.ur.insert(e,n):this.ur.remove(e),i=this.Ir(this.ur),s=this.Ir(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.Br(o,a).then(()=>{this.ur=r})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=zh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Z1{constructor(){this.Lr=new Cp,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CF{qr(e){}shutdown(){}}/**
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
 */class D0{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const AF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class NF{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class RF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);A("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(u=>(A("RestConnection","Received: ",u),u),u=>{throw Us("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+fo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=AF[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new AL;a.setWithCredentials(!0),a.listenOnce(bL.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Jd.NO_ERROR:const l=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(l)),s(l);break;case Jd.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new C(T.DEADLINE_EXCEEDED,"Request time out"));break;case Jd.HTTP_ERROR:const c=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(g)>=0?g:T.UNKNOWN}(h.status);o(new C(d,h.message))}else o(new C(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new C(T.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=SL(),o=TL(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new CL({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");A("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new NF({Hr:g=>{h?A("Connection","Not sending because WebChannel is closed:",g):(c||(A("Connection","Opening WebChannel transport."),l.open(),c=!0),A("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),f=(g,v,m)=>{g.listen(v,p=>{try{m(p)}catch(y){setTimeout(()=>{throw y},0)}})};return f(l,wl.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),f(l,wl.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.io())}),f(l,wl.EventType.ERROR,g=>{h||(h=!0,Us("Connection","WebChannel transport errored:",g),d.io(new C(T.UNAVAILABLE,"The operation could not be completed")))}),f(l,wl.EventType.MESSAGE,g=>{var v;if(!h){const m=g.data[0];j(!!m);const p=m,y=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(y){A("Connection","WebChannel received error:",y);const E=y.status;let S=function(w){const b=Ae[w];if(b!==void 0)return g1(b)}(E),N=y.message;S===void 0&&(S=T.INTERNAL,N="Unknown error status: "+E+" with message "+y.message),h=!0,d.io(new C(S,N)),l.close()}else A("Connection","WebChannel received:",m),d.ro(m)}}),f(o,kL.STAT_EVENT,g=>{g.stat===jw.PROXY?A("Connection","Detected buffering proxy"):g.stat===jw.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function eb(){return typeof window!="undefined"?window:null}function Ql(){return typeof document!="undefined"?document:null}/**
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
 */function Gu(t){return new IM(t,!0)}class ey{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class tb{constructor(e,n,r,i,s,o,a,u){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new ey(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(be(n.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new C(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xF extends tb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=TM(this.It,e),r=function(i){if(!("targetChange"in i))return B.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?B.min():s.readTime?Ue(s.readTime):B.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=pu(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Uc(a)?{documents:C1(i,a)}:{query:A1(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=_1(i,s.resumeToken):s.snapshotVersion.compareTo(B.min())>0&&(o.readTime=du(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=kM(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=pu(this.It),n.removeTarget=e,this.Bo(n)}}class DF extends tb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=bM(e.writeResults,e.commitTime),r=Ue(e.commitTime);return this.listener.Zo(r,n)}return j(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=pu(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mu(this.It,r))};this.Bo(n)}}/**
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
 */class OF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new C(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new C(T.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(T.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class PF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(be(n),this.ou=!1):A("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class LF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{jr(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=L(a);u._u.add(4),await yo(u),u.gu.set("Unknown"),u._u.delete(4),await Qu(u)}(this))})}),this.gu=new PF(r,i)}}async function Qu(t){if(jr(t))for(const e of t.wu)await e(!0)}async function yo(t){for(const e of t.wu)await e(!1)}function Gh(t,e){const n=L(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),ry(n)?ny(n):wo(n).ko()&&ty(n,e))}function gu(t,e){const n=L(t),r=wo(n);n.du.delete(e),r.ko()&&nb(n,e),n.du.size===0&&(r.ko()?r.Fo():jr(n)&&n.gu.set("Unknown"))}function ty(t,e){t.yu.Mt(e.targetId),wo(t).zo(e)}function nb(t,e){t.yu.Mt(e),wo(t).Ho(e)}function ny(t){t.yu=new vM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),wo(t).start(),t.gu.uu()}function ry(t){return jr(t)&&!wo(t).No()&&t.du.size>0}function jr(t){return L(t)._u.size===0}function rb(t){t.yu=void 0}async function MF(t){t.du.forEach((e,n)=>{ty(t,e)})}async function FF(t,e){rb(t),ry(t)?(t.gu.hu(e),ny(t)):t.gu.set("Unknown")}async function $F(t,e,n){if(t.gu.set("Online"),e instanceof I1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kc(t,r)}else if(e instanceof Kl?t.yu.Gt(e):e instanceof E1?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(B.min()))try{const r=await G1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.du.get(u);l&&i.du.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.du.get(a);if(!u)return;i.du.set(a,u.withResumeToken(Oe.EMPTY_BYTE_STRING,u.snapshotVersion)),nb(i,a);const l=new yr(u.target,a,1,u.sequenceNumber);ty(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await Kc(t,r)}}async function Kc(t,e,n){if(!Vr(e))throw e;t._u.add(1),await yo(t),t.gu.set("Offline"),n||(n=()=>G1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Qu(t)})}function ib(t,e){return e().catch(n=>Kc(t,n,e))}async function vo(t){const e=L(t),n=xr(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;UF(e);)try{const i=await TF(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,VF(e,i)}catch(i){await Kc(e,i)}sb(e)&&ob(e)}function UF(t){return jr(t)&&t.fu.length<10}function VF(t,e){t.fu.push(e);const n=xr(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function sb(t){return jr(t)&&!xr(t).No()&&t.fu.length>0}function ob(t){xr(t).start()}async function BF(t){xr(t).eu()}async function jF(t){const e=xr(t);for(const n of t.fu)e.Xo(n.mutations)}async function qF(t,e,n){const r=t.fu.shift(),i=Wg.from(r,e,n);await ib(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await vo(t)}async function zF(t,e){e&&xr(t).Yo&&await async function(n,r){if(i=r.code,m1(i)&&i!==T.ABORTED){const s=n.fu.shift();xr(n).Mo(),await ib(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vo(n)}var i}(t,e),sb(t)&&ob(t)}async function O0(t,e){const n=L(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=jr(n);n._u.add(3),await yo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Qu(n)}async function Ap(t,e){const n=L(t);e?(n._u.delete(2),await Qu(n)):e||(n._u.add(2),await yo(n),n.gu.set("Unknown"))}function wo(t){return t.pu||(t.pu=function(e,n,r){const i=L(e);return i.su(),new xF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:MF.bind(null,t),Zr:FF.bind(null,t),Wo:$F.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),ry(t)?ny(t):t.gu.set("Unknown")):(await t.pu.stop(),rb(t))})),t.pu}function xr(t){return t.Iu||(t.Iu=function(e,n,r){const i=L(e);return i.su(),new DF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:BF.bind(null,t),Zr:zF.bind(null,t),tu:jF.bind(null,t),Zo:qF.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await vo(t)):(await t.Iu.stop(),t.fu.length>0&&(A("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class iy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new iy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eo(t,e){if(be("AsyncQueue",`${e}: ${t}`),Vr(t))return new C(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class P0{constructor(){this.Tu=new _e(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(e,n,Rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class WF{constructor(){this.Au=void 0,this.listeners=[]}}class HF{constructor(){this.queries=new Br(e=>r1(e),zu),this.onlineState="Unknown",this.Ru=new Set}}async function sy(t,e){const n=L(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new WF),i)try{s.Au=await n.onListen(r)}catch(o){const a=Eo(o,`Initialization of query '${Sp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&ay(n)}async function oy(t,e){const n=L(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KF(t,e){const n=L(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&ay(n)}function GF(t,e,n){const r=L(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ay(t){t.Ru.forEach(e=>{e.next()})}class uy{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class QF{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
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
 */class L0{constructor(e){this.It=e}Ji(e){return mn(this.It,e)}Yi(e){return e.metadata.exists?k1(this.It,e.document,!1):ae.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ue(e)}}class YF{constructor(e,n,r){this.Mu=e,this.localStore=n,this.It=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ab(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const r=ee.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,r=new L0(this.It);for(const i of e)if(i.metadata.queries){const s=r.Ji(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||K()).add(s);n.set(o,a)}}return n}async complete(){const e=await bF(this.localStore,new L0(this.It),this.documents,this.Mu.id),n=this.$u(this.documents);for(const r of this.queries)await kF(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function ab(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class ub{constructor(e){this.key=e}}class lb{constructor(e){this.key=e}}class cb{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=K(),this.mutatedKeys=K(),this.Gu=s1(e),this.Qu=new Rs(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new P0,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),f=Bg(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let m=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),m=!0):this.Hu(d,f)||(r.track({type:2,doc:f}),m=!0,(u&&this.Gu(f,u)>0||l&&this.Gu(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),m=!0):d&&!f&&(r.track({type:1,doc:d}),m=!0,(u||l)&&(a=!0)),m&&(f?(o=o.add(f),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((l,c)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return f(h)-f(d)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,s.length!==0||u?{snapshot:new Hs(this.query,e.Qu,i,s,e.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new P0,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=K(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new lb(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new ub(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=K();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Hs.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class XF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JF{constructor(e){this.key=e,this.nc=!1}}class ZF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Br(a=>r1(a),zu),this.rc=new Map,this.oc=new Set,this.uc=new _e(O.comparator),this.cc=new Map,this.ac=new Qg,this.hc={},this.lc=new Map,this.fc=Li.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function e$(t,e){const n=fy(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await zs(n.localStore,bt(e));n.isPrimaryClient&&Gh(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ly(n,e,r,a==="current",o.resumeToken)}return i}async function ly(t,e,n,r,i){t._c=(h,d,f)=>async function(g,v,m,p){let y=v.view.Wu(m);y.$i&&(y=await zc(g.localStore,v.query,!1).then(({documents:N})=>v.view.Wu(N,y)));const E=p&&p.targetChanges.get(v.targetId),S=v.view.applyChanges(y,g.isPrimaryClient,E);return Np(g,v.targetId,S.Xu),S.snapshot}(t,h,d,f);const s=await zc(t.localStore,e,!0),o=new cb(e,s.Hi),a=o.Wu(s.documents),u=Ku.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Np(t,n,l.Xu);const c=new XF(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function t$(t,e){const n=L(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!zu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ws(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gu(n.remoteStore,r.targetId),Ks(n,r.targetId)}).catch(Ur)):(Ks(n,r.targetId),await Ws(n.localStore,r.targetId,!0))}async function n$(t,e,n){const r=py(t);try{const i=await function(s,o){const a=L(s),u=pe.now(),l=o.reduce((d,f)=>d.add(f.key),K());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=_t(),g=K();return a.Gi.getEntries(d,l).next(v=>{f=v,f.forEach((m,p)=>{p.isValidDocument()||(g=g.add(m))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(v=>{c=v;const m=[];for(const p of o){const y=dM(p,c.get(p.key).overlayedDocument);y!=null&&m.push(new zn(p.key,y,e1(y.value.mapValue),fe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,m,o)}).next(v=>{h=v;const m=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,m)})}).then(()=>({batchId:h.batchId,changes:v1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.hc[s.currentUser.toKey()];u||(u=new _e(H)),u=u.insert(o,a),s.hc[s.currentUser.toKey()]=u}(r,i.batchId,n),await Wn(r,i.changes),await vo(r.remoteStore)}catch(i){const s=Eo(i,"Failed to persist write");n.reject(s)}}async function hb(t,e){const n=L(t);try{const r=await SF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(j(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?j(o.nc):i.removedDocuments.size>0&&(j(o.nc),o.nc=!1))}),await Wn(n,r,e)}catch(r){await Ur(r)}}function M0(t,e,n){const r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=L(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.bu(o)&&(u=!0)}),u&&ay(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function r$(t,e,n){const r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new _e(O.comparator);o=o.insert(s,ae.newNoDocument(s,B.min()));const a=K().add(s),u=new Hu(B.min(),new Map,new se(H),o,a);await hb(r,u),r.uc=r.uc.remove(s),r.cc.delete(e),dy(r)}else await Ws(r.localStore,e,!1).then(()=>Ks(r,e,n)).catch(Ur)}async function i$(t,e){const n=L(t),r=e.batch.batchId;try{const i=await _F(n.localStore,e);hy(n,r,null),cy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wn(n,i)}catch(i){await Ur(i)}}async function s$(t,e,n){const r=L(t);try{const i=await function(s,o){const a=L(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.mutationQueue.lookupMutationBatch(u,o).next(c=>(j(c!==null),l=c.keys(),a.mutationQueue.removeMutationBatch(u,c))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>a.localDocuments.getDocuments(u,l))})}(r.localStore,e);hy(r,e,n),cy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wn(r,i)}catch(i){await Ur(i)}}async function o$(t,e){const n=L(t);jr(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=L(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.lc.get(r)||[];i.push(e),n.lc.set(r,i)}catch(r){const i=Eo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function cy(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function hy(t,e,n){const r=L(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Ks(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||db(t,r)})}function db(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(gu(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),dy(t))}function Np(t,e,n){for(const r of n)r instanceof ub?(t.ac.addReference(r.key,e),a$(t,r)):r instanceof lb?(A("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||db(t,r.key)):$()}function a$(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(A("SyncEngine","New document in limbo: "+n),t.oc.add(r),dy(t))}function dy(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(ee.fromString(e)),r=t.fc.next();t.cc.set(r,new JF(n)),t.uc=t.uc.insert(n,r),Gh(t.remoteStore,new yr(bt(po(n.path)),r,2,It.at))}}async function Wn(t,e,n){const r=L(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,u)=>{o.push(r._c(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Jg.Ci(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,u){const l=L(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(u,h=>I.forEach(h.Si,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.Di,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Vr(c))throw c;A("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.Ui.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ui=l.Ui.insert(h,g)}}}(r.localStore,s))}async function u$(t,e){const n=L(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await K1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new C(T.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wn(n,r.ji)}}function l$(t,e){const n=L(t),r=n.cc.get(e);if(r&&r.nc)return K().add(r.key);{let i=K();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}async function c$(t,e){const n=L(t),r=await zc(n.localStore,e.query,!0),i=e.view.tc(r);return n.isPrimaryClient&&Np(n,e.targetId,i.Xu),i}async function h$(t,e){const n=L(t);return X1(n.localStore,e).then(r=>Wn(n,r))}async function d$(t,e,n,r){const i=L(t),s=await function(o,a){const u=L(o),l=L(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Tn(c,a).next(h=>h?u.localDocuments.getDocuments(c,h):I.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await vo(i.remoteStore):n==="acknowledged"||n==="rejected"?(hy(i,e,r||null),cy(i,e),function(o,a){L(L(o).mutationQueue).An(a)}(i.localStore,e)):$(),await Wn(i,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function f$(t,e){const n=L(t);if(fy(n),py(n),e===!0&&n.dc!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await F0(n,r.toArray());n.dc=!0,await Ap(n.remoteStore,!0);for(const s of i)Gh(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const r=[];let i=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Ks(n,o),Ws(n.localStore,o,!0))),gu(n.remoteStore,o)}),await i,await F0(n,r),function(s){const o=L(s);o.cc.forEach((a,u)=>{gu(o.remoteStore,u)}),o.ac.fs(),o.cc=new Map,o.uc=new _e(O.comparator)}(n),n.dc=!1,await Ap(n.remoteStore,!1)}}async function F0(t,e,n){const r=L(t),i=[],s=[];for(const o of e){let a;const u=r.rc.get(o);if(u&&u.length!==0){a=await zs(r.localStore,bt(u[0]));for(const l of u){const c=r.ic.get(l),h=await c$(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await Y1(r.localStore,o);a=await zs(r.localStore,l),await ly(r,fb(l),o,!1,a.resumeToken)}i.push(a)}return r.sc.Wo(s),i}function fb(t){return n1(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function p$(t){const e=L(t);return L(L(e.localStore).persistence).vi()}async function m$(t,e,n,r){const i=L(t);if(i.dc)return void A("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await X1(i.localStore,i1(s[0])),a=Hu.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Oe.EMPTY_BYTE_STRING);await Wn(i,o,a);break}case"rejected":await Ws(i.localStore,e,!0),Ks(i,e,r);break;default:$()}}async function g$(t,e,n){const r=fy(t);if(r.dc){for(const i of e){if(r.rc.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const s=await Y1(r.localStore,i),o=await zs(r.localStore,s);await ly(r,fb(s),o.targetId,!1,o.resumeToken),Gh(r.remoteStore,o)}for(const i of n)r.rc.has(i)&&await Ws(r.localStore,i,!1).then(()=>{gu(r.remoteStore,i),Ks(r,i)}).catch(Ur)}}function fy(t){const e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=l$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=r$.bind(null,e),e.sc.Wo=KF.bind(null,e.eventManager),e.sc.wc=GF.bind(null,e.eventManager),e}function py(t){const e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=i$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=s$.bind(null,e),e}function y$(t,e,n){const r=L(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=L(h),g=Ue(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",v=>f.Ns.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(ab(a));const u=new YF(a,i.localStore,s.It);let l=await s.mc();for(;l;){const h=await u.Fu(l);h&&o._updateProgress(h),l=await s.mc()}const c=await u.complete();return await Wn(i,c.Lu,void 0),await function(h,d){const f=L(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Ns.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(c.progress),Promise.resolve(c.Bu)}catch(a){return Us("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class pb{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return H1(this.persistence,new W1,e.initialUser,this.It)}yc(e){return new z1(Kh.Bs,this.It)}gc(e){return new Z1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mb extends pb{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await py(this.Ac.syncEngine),await vo(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return H1(this.persistence,new W1,e.initialUser,this.It)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new aF(r,e.asyncQueue,n)}Ec(e,n){const r=new zL(n,this.persistence);return new qL(e.asyncQueue,r)}yc(e){const n=Xg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Yg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,eb(),Ql(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Z1}}class v$ extends mb{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof nf&&(this.sharedClientState.syncEngine={Fr:d$.bind(null,n),$r:m$.bind(null,n),Br:g$.bind(null,n),vi:p$.bind(null,n),Mr:h$.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async r=>{await f$(this.Ac.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}gc(e){const n=eb();if(!nf.C(n))throw new C(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Xg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new nf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class my{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>M0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u$.bind(null,this.syncEngine),await Ap(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new HF}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new RF(i));var i;return function(s,o,a,u){return new OF(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>M0(this.syncEngine,a,0),o=D0.C()?new D0:new CF,new LF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new ZF(r,i,s,o,a,u);return l&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=L(e);A("RemoteStore","RemoteStore shutting down."),n._u.add(5),await yo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function gy(t,e,n){if(!n)throw new C(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gb(t,e,n,r){if(e===!0&&r===!0)throw new C(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $0(t){if(!O.isDocumentKey(t))throw new C(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function U0(t){if(O.isDocumentKey(t))throw new C(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function re(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qh(t);throw new C(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function yb(t,e){if(e<=0)throw new C(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */const V0=new Map;class B0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new C(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Yu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xL;switch(n.type){case"gapi":const r=n.client;return new LL(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=V0.get(e);n&&(A("ComponentProvider","Removing Datastore"),V0.delete(e),n.terminate())}(this),Promise.resolve()}}function w$(t,e,n,r={}){var i;const s=(t=re(t,Yu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Us("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Fe.MOCK_USER;else{o=cN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new C(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Fe(u)}t._authCredentials=new DL(new jT(o,a))}}/**
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
 */class he{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}}class lt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class gn extends lt{constructor(e,n,r){super(e,n,po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new O(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function vb(t,e,...n){if(t=V(t),gy("collection","path",e),t instanceof Yu){const r=ee.fromString(e,...n);return U0(r),new gn(t,null,r)}{if(!(t instanceof he||t instanceof gn))throw new C(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return U0(r),new gn(t.firestore,null,r)}}function E$(t,e){if(t=re(t,Yu),gy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new C(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(t,null,function(n){return new qn(ee.emptyPath(),n)}(e))}function Gc(t,e,...n){if(t=V(t),arguments.length===1&&(e=qT.R()),gy("doc","path",e),t instanceof Yu){const r=ee.fromString(e,...n);return $0(r),new he(t,null,new O(r))}{if(!(t instanceof he||t instanceof gn))throw new C(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ee.fromString(e,...n));return $0(r),new he(t.firestore,t instanceof gn?t.converter:null,new O(r))}}function wb(t,e){return t=V(t),e=V(e),(t instanceof he||t instanceof gn)&&(e instanceof he||e instanceof gn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function Eb(t,e){return t=V(t),e=V(e),t instanceof lt&&e instanceof lt&&t.firestore===e.firestore&&zu(t._query,e._query)&&t.converter===e.converter}/**
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
 */function j0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class Yh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):be("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class I${constructor(e,n){this.Pc=e,this.It=n,this.metadata=new $e,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(r=>{r&&r.Ou()?this.metadata.resolve(r.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ku)}`))},r=>this.metadata.reject(r))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),r=Number(n);isNaN(r)&&this.Dc(`length string (${n}) is not valid number`);const i=await this.Cc(r);return new QF(JSON.parse(i),e.length+r)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class _${constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new C(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=L(r),o=pu(s.It)+"/documents",a={documents:i.map(h=>fu(s.It,h))},u=await s._o("BatchGetDocuments",o,a,i.length),l=new Map;u.forEach(h=>{const d=SM(s.It,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());j(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new go(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=O.fromPath(r);this.mutations.push(new jg(i,this.precondition(i)))}),await async function(n,r){const i=L(n),s=pu(i.It)+"/documents",o={writes:r.map(a=>mu(i.It,a))};await i.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=B.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new C(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(B.min())?fe.exists(!1):fe.updateTime(n):fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(B.min()))throw new C(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return fe.updateTime(n)}return fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class S${constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.kc=r.maxAttempts,this.xo=new ey(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new _$(this.datastore),n=this.Mc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Fc(i)}))}).catch(r=>{this.Fc(r)})})}Mc(e){try{const n=this.updateFunction(e);return!ju(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!m1(n)}return!1}}/**
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
 */class T${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Fe.UNAUTHENTICATED,this.clientId=qT.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Eo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ib(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await K1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function _b(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yy(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>O0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>O0(e.remoteStore,s)),t.onlineComponents=e}async function yy(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await Ib(t,new pb)),t.offlineComponents}async function Xh(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await _b(t,new my)),t.onlineComponents}function Sb(t){return yy(t).then(e=>e.persistence)}function vy(t){return yy(t).then(e=>e.localStore)}function Tb(t){return Xh(t).then(e=>e.remoteStore)}function wy(t){return Xh(t).then(e=>e.syncEngine)}function b$(t){return Xh(t).then(e=>e.datastore)}async function Gs(t){const e=await Xh(t),n=e.eventManager;return n.onListen=e$.bind(null,e.syncEngine),n.onUnlisten=t$.bind(null,e.syncEngine),n}function k$(t){return t.asyncQueue.enqueue(async()=>{const e=await Sb(t),n=await Tb(t);return e.setNetworkEnabled(!0),function(r){const i=L(r);return i._u.delete(0),Qu(i)}(n)})}function C$(t){return t.asyncQueue.enqueue(async()=>{const e=await Sb(t),n=await Tb(t);return e.setNetworkEnabled(!1),async function(r){const i=L(r);i._u.add(0),await yo(i),i.gu.set("Offline")}(n)})}function A$(t,e){const n=new $e;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=L(a);return l.persistence.runTransaction("read document","readonly",c=>l.localDocuments.getDocument(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new C(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Eo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await vy(t),e,n)),n.promise}function bb(t,e,n={}){const r=new $e;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Yh({next:h=>{s.enqueueAndForget(()=>oy(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new C(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new C(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new uy(po(o.path),l,{includeMetadataChanges:!0,Nu:!0});return sy(i,c)}(await Gs(t),t.asyncQueue,e,n,r)),r.promise}function N$(t,e){const n=new $e;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await zc(r,i,!0),a=new cb(i,o.Hi),u=a.Wu(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=Eo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await vy(t),e,n)),n.promise}function kb(t,e,n={}){const r=new $e;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Yh({next:h=>{s.enqueueAndForget(()=>oy(i,c)),h.fromCache&&a.source==="server"?u.reject(new C(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new uy(o,l,{includeMetadataChanges:!0,Nu:!0});return sy(i,c)}(await Gs(t),t.asyncQueue,e,n,r)),r.promise}function R$(t,e){const n=new Yh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Ru.add(i),i.next()}(await Gs(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){L(r).Ru.delete(i)}(await Gs(t),n))}}function x$(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new I$(u,l)}(function(u,l){if(u instanceof Uint8Array)return j0(u,l);if(u instanceof ArrayBuffer)return j0(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Gu(e));t.asyncQueue.enqueueAndForget(async()=>{y$(await wy(t),i,r)})}function D$(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=L(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ns.getNamedQuery(s,r))}(await vy(t),e))}class O${constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new ey(this,"async_queue_retry"),this.Wc=()=>{const n=Ql();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ql();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new $e;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Vr(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=iy.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Rp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class P${constructor(){this._progressObserver={},this._taskCompletionResolver=new $e,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const L$=-1;class Se extends Yu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new O$,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cb(this),this._firestoreClient.terminate()}}function We(t){return t._firestoreClient||Cb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cb(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new KL(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new T$(t._authCredentials,t._appCheckCredentials,t._queue,r)}function M$(t,e){Nb(t=re(t,Se));const n=We(t),r=t._freezeSettings(),i=new my;return Ab(n,i,new mb(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function F$(t){Nb(t=re(t,Se));const e=We(t),n=t._freezeSettings(),r=new my;return Ab(e,r,new v$(r,n.cacheSizeBytes))}function Ab(t,e,n){const r=new $e;return t.asyncQueue.enqueue(async()=>{try{await Ib(t,n),await _b(t,e),r.resolve()}catch(i){const s=i;if(!function(o){return o.name==="FirebaseError"?o.code===T.FAILED_PRECONDITION||o.code===T.UNIMPLEMENTED:typeof DOMException!="undefined"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;Us("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function $$(t){if(t._initialized&&!t._terminated)throw new C(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new $e;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Gt.C())return Promise.resolve();const r=n+"main";await Gt.delete(r)}(Xg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function U$(t){return function(e){const n=new $e;return e.asyncQueue.enqueueAndForget(async()=>o$(await wy(e),n)),n.promise}(We(t=re(t,Se)))}function V$(t){return k$(We(t=re(t,Se)))}function B$(t){return C$(We(t=re(t,Se)))}function j$(t,e){const n=We(t=re(t,Se)),r=new P$;return x$(n,t._databaseId,e,r),r}function q$(t,e){return D$(We(t=re(t,Se)),e).then(n=>n?new lt(t,null,n.query):null)}function Nb(t){if(t._initialized||t._terminated)throw new C(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class In{constructor(e){this._byteString=e}static fromBase64String(e){try{return new In(Oe.fromBase64String(e))}catch(n){throw new C(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new In(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Dr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ki{constructor(e){this._methodName=e}}/**
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
 */class Jh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
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
 */const z$=/^__.*__$/;class W${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zn(e,this.data,this.fieldMask,n,this.fieldTransforms):new mo(e,this.data,n,this.fieldTransforms)}}class Rb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Zh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Qc(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(xb(this.sa)&&z$.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class H${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Gu(e)}da(e,n,r,i=!1){return new Zh({sa:e,methodName:n,fa:r,path:ke.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function Gi(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new H$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ed(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Sy("Data must be an object, but it was:",o,r);const a=Pb(r,o);let u,l;if(s.merge)u=new Nt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=xp(e,h,n);if(!o.contains(d))throw new C(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Mb(c,d)||c.push(d)}u=new Nt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new W$(new Ye(a),u,l)}class Xu extends Ki{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xu}}function Db(t,e,n){return new Zh({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.It,e.ignoreUndefinedProperties)}class Ey extends Ki{_toFieldTransform(e){return new Wu(e.path,new js)}isEqual(e){return e instanceof Ey}}class K$ extends Ki{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Db(this,e,!0),r=this._a.map(s=>Qi(s,n)),i=new xi(r);return new Wu(e.path,i)}isEqual(e){return this===e}}class G$ extends Ki{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=Db(this,e,!0),r=this._a.map(s=>Qi(s,n)),i=new Di(r);return new Wu(e.path,i)}isEqual(e){return this===e}}class Q$ extends Ki{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new qs(e.It,u1(e.It,this.wa));return new Wu(e.path,n)}isEqual(e){return this===e}}function Iy(t,e,n,r){const i=t.da(1,e,n);Sy("Data must be an object, but it was:",i,r);const s=[],o=Ye.empty();Hi(r,(u,l)=>{const c=Ty(e,u,n);l=V(l);const h=i.ca(c);if(l instanceof Xu)s.push(c);else{const d=Qi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Nt(s);return new Rb(o,a,i.fieldTransforms)}function _y(t,e,n,r,i,s){const o=t.da(1,e,n),a=[xp(e,r,n)],u=[i];if(s.length%2!=0)throw new C(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(xp(e,s[d])),u.push(s[d+1]);const l=[],c=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!Mb(l,a[d])){const f=a[d];let g=u[d];g=V(g);const v=o.ca(f);if(g instanceof Xu)l.push(f);else{const m=Qi(g,v);m!=null&&(l.push(f),c.set(f,m))}}const h=new Nt(l);return new Rb(c,h,o.fieldTransforms)}function Ob(t,e,n,r=!1){return Qi(n,t.da(r?4:3,e))}function Qi(t,e){if(Lb(t=V(t)))return Sy("Unsupported field value:",e,t),Pb(t,e);if(t instanceof Ki)return function(n,r){if(!xb(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Qi(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=V(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return u1(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=pe.fromDate(n);return{timestampValue:du(r.It,i)}}if(n instanceof pe){const i=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:du(r.It,i)}}if(n instanceof Jh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof In)return{bytesValue:_1(r.It,n._byteString)};if(n instanceof he){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Qh(n)}`)}(t,e)}function Pb(t,e){const n={};return YT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(t,(r,i)=>{const s=Qi(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Lb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof Jh||t instanceof In||t instanceof he||t instanceof Ki)}function Sy(t,e,n){if(!Lb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Qh(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function xp(t,e,n){if((e=V(e))instanceof Dr)return e._internalPath;if(typeof e=="string")return Ty(t,e);throw Qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Y$=new RegExp("[~\\*/\\[\\]]");function Ty(t,e,n){if(e.search(Y$)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dr(...e.split("."))._internalPath}catch{throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(T.INVALID_ARGUMENT,a+t+u)}function Mb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class yu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(td("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X$ extends yu{data(){return super.data()}}function td(t,e){return typeof e=="string"?Ty(t,e):e instanceof Dr?e._internalPath:e._delegate._internalPath}/**
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
 */function Fb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ju{}function Qn(t,...e){for(const n of e)t=n._apply(t);return t}class J$ extends Ju{constructor(e,n,r){super(),this.ma=e,this.ga=n,this.ya=r,this.type="where"}_apply(e){const n=Gi(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new C(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){z0(c,l);const f=[];for(const g of c)f.push(q0(a,i,g));h={arrayValue:{values:f}}}else h=q0(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||z0(c,l),h=Ob(o,s,c,l==="in"||l==="not-in");const d=Xe.create(u,l,h);return function(f,g){if(g.dt()){const m=Ug(f);if(m!==null&&!m.isEqual(g.field))throw new C(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${m.toString()}' and '${g.field.toString()}'`);const p=$g(f);p!==null&&jb(f,g.field,p)}const v=function(m,p){for(const y of m.filters)if(p.indexOf(y.op)>=0)return y.op;return null}(f,function(m){switch(m){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(v!==null)throw v===g.op?new C(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new C(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${v.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new lt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new qn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function Z$(t,e,n){const r=e,i=td("where",t);return new J$(i,r,n)}class eU extends Ju{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new C(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new C(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ns(i,s);return function(a,u){if($g(a)===null){const l=Ug(a);l!==null&&jb(a,l,u.field)}}(r,o),o}(e._query,this.ma,this.pa);return new lt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new qn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function tU(t,e="asc"){const n=e,r=td("orderBy",t);return new eU(r,n)}class $b extends Ju{constructor(e,n,r){super(),this.type=e,this.Ia=n,this.Ta=r}_apply(e){return new lt(e.firestore,e.converter,Bc(e._query,this.Ia,this.Ta))}}function nU(t){return yb("limit",t),new $b("limit",t,"F")}function rU(t){return yb("limitToLast",t),new $b("limitToLast",t,"L")}class Ub extends Ju{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=Bb(e,this.type,this.Ea,this.Aa);return new lt(e.firestore,e.converter,function(r,i){return new qn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function iU(...t){return new Ub("startAt",t,!0)}function sU(...t){return new Ub("startAfter",t,!1)}class Vb extends Ju{constructor(e,n,r){super(),this.type=e,this.Ea=n,this.Aa=r}_apply(e){const n=Bb(e,this.type,this.Ea,this.Aa);return new lt(e.firestore,e.converter,function(r,i){return new qn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function oU(...t){return new Vb("endBefore",t,!1)}function aU(...t){return new Vb("endAt",t,!0)}function Bb(t,e,n,r){if(n[0]=V(n[0]),n[0]instanceof yu)return function(i,s,o,a,u){if(!a)throw new C(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of Bs(i))if(c.field.isKeyField())l.push(Ni(s,a.key));else{const h=a.data.field(c.field);if(Fg(h))throw new C(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new C(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Rr(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Gi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new C(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new C(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof g}`);if(!Vg(s)&&g.indexOf("/")!==-1)throw new C(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${g}' contains a slash.`);const v=s.path.child(ee.fromString(g));if(!O.isDocumentKey(v))throw new C(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const m=new O(v);d.push(Ni(o,m))}else{const v=Ob(a,u,g);d.push(v)}}return new Rr(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function q0(t,e,n){if(typeof(n=V(n))=="string"){if(n==="")throw new C(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vg(e)&&n.indexOf("/")!==-1)throw new C(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ee.fromString(n));if(!O.isDocumentKey(r))throw new C(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ni(t,new O(r))}if(n instanceof he)return Ni(t,n._key);throw new C(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qh(n)}.`)}function z0(t,e){if(!Array.isArray(t)||t.length===0)throw new C(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new C(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function jb(t,e,n){if(!n.isEqual(e))throw new C(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class by{convertValue(e,n="none"){switch(Ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return Hi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Jh(ve(e.latitude),ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=XT(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uu(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ee.fromString(e);j(x1(r));const i=new Ar(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function nd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class uU extends by{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}/**
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
 */class di{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Un extends yu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(td("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xa extends Un{data(e={}){return super.data(e)}}class Or{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new di(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xa(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new xa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new di(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new xa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new di(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:lU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function qb(t,e){return t instanceof Un&&e instanceof Un?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Or&&e instanceof Or&&t._firestore===e._firestore&&Eb(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function cU(t){t=re(t,he);const e=re(t.firestore,Se);return bb(We(e),t._key).then(n=>ky(e,t,n))}class Yi extends by{constructor(e){super(),this.firestore=e}convertBytes(e){return new In(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,n)}}function hU(t){t=re(t,he);const e=re(t.firestore,Se),n=We(e),r=new Yi(e);return A$(n,t._key).then(i=>new Un(e,r,t._key,i,new di(i!==null&&i.hasLocalMutations,!0),t.converter))}function dU(t){t=re(t,he);const e=re(t.firestore,Se);return bb(We(e),t._key,{source:"server"}).then(n=>ky(e,t,n))}function fU(t){t=re(t,lt);const e=re(t.firestore,Se),n=We(e),r=new Yi(e);return Fb(t._query),kb(n,t._query).then(i=>new Or(e,r,t,i))}function pU(t){t=re(t,lt);const e=re(t.firestore,Se),n=We(e),r=new Yi(e);return N$(n,t._query).then(i=>new Or(e,r,t,i))}function mU(t){t=re(t,lt);const e=re(t.firestore,Se),n=We(e),r=new Yi(e);return kb(n,t._query,{source:"server"}).then(i=>new Or(e,r,t,i))}function W0(t,e,n){t=re(t,he);const r=re(t.firestore,Se),i=nd(t.converter,e,n);return Zu(r,[ed(Gi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fe.none())])}function H0(t,e,n,...r){t=re(t,he);const i=re(t.firestore,Se),s=Gi(i);let o;return o=typeof(e=V(e))=="string"||e instanceof Dr?_y(s,"updateDoc",t._key,e,n,r):Iy(s,"updateDoc",t._key,e),Zu(i,[o.toMutation(t._key,fe.exists(!0))])}function gU(t){return Zu(re(t.firestore,Se),[new go(t._key,fe.none())])}function yU(t,e){const n=re(t.firestore,Se),r=Gc(t),i=nd(t.converter,e);return Zu(n,[ed(Gi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fe.exists(!1))]).then(()=>r)}function zb(t,...e){var n,r,i;t=V(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Rp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof he)l=re(t.firestore,Se),c=po(t._key.path),u={next:h=>{e[o]&&e[o](ky(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=re(t,lt);l=re(h.firestore,Se),c=h._query;const d=new Yi(l);u={next:f=>{e[o]&&e[o](new Or(l,d,h,f))},error:e[o+1],complete:e[o+2]},Fb(t._query)}return function(h,d,f,g){const v=new Yh(g),m=new uy(d,v,f);return h.asyncQueue.enqueueAndForget(async()=>sy(await Gs(h),m)),()=>{v.bc(),h.asyncQueue.enqueueAndForget(async()=>oy(await Gs(h),m))}}(We(l),c,a,u)}function vU(t,e){return R$(We(t=re(t,Se)),Rp(e)?e:{next:e})}function Zu(t,e){return function(n,r){const i=new $e;return n.asyncQueue.enqueueAndForget(async()=>n$(await wy(n),r,i)),i.promise}(We(t),e)}function ky(t,e,n){const r=n.docs.get(e._key),i=new Yi(t);return new Un(t,i,e._key,r,new di(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const wU={maxAttempts:5};/**
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
 */class EU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Gi(e)}set(e,n,r){this._verifyNotCommitted();const i=er(e,this._firestore),s=nd(i.converter,n,r),o=ed(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,fe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=er(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof Dr?_y(this._dataReader,"WriteBatch.update",s._key,n,r,i):Iy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=er(e,this._firestore);return this._mutations=this._mutations.concat(new go(n._key,fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new C(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function er(t,e){if((t=V(t)).firestore!==e)throw new C(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class IU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Gi(e)}get(e){const n=er(e,this._firestore),r=new uU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return $();const s=i[0];if(s.isFoundDocument())return new yu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new yu(this._firestore,r,n._key,null,n.converter);throw $()})}set(e,n,r){const i=er(e,this._firestore),s=nd(i.converter,n,r),o=ed(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=er(e,this._firestore);let o;return o=typeof(n=V(n))=="string"||n instanceof Dr?_y(this._dataReader,"Transaction.update",s._key,n,r,i):Iy(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=er(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=er(e,this._firestore),r=new Yi(this._firestore);return super.get(e).then(i=>new Un(this._firestore,r,n._key,i._document,new di(!1,!1),n.converter))}}function _U(t,e,n){t=re(t,Se);const r=Object.assign(Object.assign({},wU),n);return function(i){if(i.maxAttempts<1)throw new C(T.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new $e;return i.asyncQueue.enqueueAndForget(async()=>{const u=await b$(i);new S$(i.asyncQueue,u,o,s,a).run()}),a.promise}(We(t),i=>e(new IU(t,i)),r)}/**
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
 */function SU(){return new Xu("deleteField")}function TU(){return new Ey("serverTimestamp")}function bU(...t){return new K$("arrayUnion",t)}function kU(...t){return new G$("arrayRemove",t)}function CU(t){return new Q$("increment",t)}(function(t,e=!0){(function(n){fo=n})(qi),br(new vn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Se(new OL(n.getProvider("auth-internal")),new FL(n.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new C(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ar(a.options.projectId,u)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),pn(qw,"3.7.2",t),pn(qw,"3.7.2","esm2017")})();const AU="@firebase/firestore-compat",NU="0.2.2";/**
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
 */function Cy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new C("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function K0(){if(typeof Uint8Array=="undefined")throw new C("unimplemented","Uint8Arrays are not available in this environment.")}function G0(){if(!WL())throw new C("unimplemented","Blobs are unavailable in Firestore in this environment.")}class vu{constructor(e){this._delegate=e}static fromBase64String(e){return G0(),new vu(In.fromBase64String(e))}static fromUint8Array(e){return K0(),new vu(In.fromUint8Array(e))}toBase64(){return G0(),this._delegate.toBase64()}toUint8Array(){return K0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Dp(t){return RU(t,["next","error","complete"])}function RU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class xU{enableIndexedDbPersistence(e,n){return M$(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return F$(e._delegate)}clearIndexedDbPersistence(e){return $$(e._delegate)}}class Wb{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ar||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Us("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){w$(this._delegate,e,n,r)}enableNetwork(){return V$(this._delegate)}disableNetwork(){return B$(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,gb("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return U$(this._delegate)}onSnapshotsInSync(e){return vU(this._delegate,e)}get app(){if(!this._appCompat)throw new C("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Qs(this,vb(this._delegate,e))}catch(n){throw ht(n,"collection()","Firestore.collection()")}}doc(e){try{return new Mt(this,Gc(this._delegate,e))}catch(n){throw ht(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new ct(this,E$(this._delegate,e))}catch(n){throw ht(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return _U(this._delegate,n=>e(new Hb(this,n)))}batch(){return We(this._delegate),new Kb(new EU(this._delegate,e=>Zu(this._delegate,e)))}loadBundle(e){return j$(this._delegate,e)}namedQuery(e){return q$(this._delegate,e).then(n=>n?new ct(this,n):null)}}class rd extends by{constructor(e){super(),this.firestore=e}convertBytes(e){return new vu(new In(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Mt.forKey(n,this.firestore,null)}}function DU(t){NL(t)}class Hb{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new rd(e)}get(e){const n=fi(e);return this._delegate.get(n).then(r=>new wu(this._firestore,new Un(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=fi(e);return r?(Cy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=fi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=fi(e);return this._delegate.delete(n),this}}class Kb{constructor(e){this._delegate=e}set(e,n,r){const i=fi(e);return r?(Cy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=fi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=fi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Mi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new xa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Eu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Mi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Mi(e,new rd(e),n),i.set(n,s)),s}}Mi.INSTANCES=new WeakMap;class Mt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new rd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new C("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Mt(n,new he(n._delegate,r,new O(e)))}static forKey(e,n,r){return new Mt(n,new he(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Qs(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Qs(this.firestore,vb(this._delegate,e))}catch(n){throw ht(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=V(e),e instanceof he?wb(this._delegate,e):!1}set(e,n){n=Cy("DocumentReference.set",n);try{return n?W0(this._delegate,e,n):W0(this._delegate,e)}catch(r){throw ht(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?H0(this._delegate,e):H0(this._delegate,e,n,...r)}catch(i){throw ht(i,"updateDoc()","DocumentReference.update()")}}delete(){return gU(this._delegate)}onSnapshot(...e){const n=Gb(e),r=Qb(e,i=>new wu(this.firestore,new Un(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return zb(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=hU(this._delegate):(e==null?void 0:e.source)==="server"?n=dU(this._delegate):n=cU(this._delegate),n.then(r=>new wu(this.firestore,new Un(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Mt(this.firestore,e?this._delegate.withConverter(Mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ht(t,e,n){return t.message=t.message.replace(e,n),t}function Gb(t){for(const e of t)if(typeof e=="object"&&!Dp(e))return e;return{}}function Qb(t,e){var n,r;let i;return Dp(t[0])?i=t[0]:Dp(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class wu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Mt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return qb(this._delegate,e._delegate)}}class Eu extends wu{data(e){const n=this._delegate.data(e);return RL(n!==void 0),n}}class ct{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new rd(e)}where(e,n,r){try{return new ct(this.firestore,Qn(this._delegate,Z$(e,n,r)))}catch(i){throw ht(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new ct(this.firestore,Qn(this._delegate,tU(e,n)))}catch(r){throw ht(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new ct(this.firestore,Qn(this._delegate,nU(e)))}catch(n){throw ht(n,"limit()","Query.limit()")}}limitToLast(e){try{return new ct(this.firestore,Qn(this._delegate,rU(e)))}catch(n){throw ht(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new ct(this.firestore,Qn(this._delegate,iU(...e)))}catch(n){throw ht(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new ct(this.firestore,Qn(this._delegate,sU(...e)))}catch(n){throw ht(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new ct(this.firestore,Qn(this._delegate,oU(...e)))}catch(n){throw ht(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new ct(this.firestore,Qn(this._delegate,aU(...e)))}catch(n){throw ht(n,"endAt()","Query.endAt()")}}isEqual(e){return Eb(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=pU(this._delegate):(e==null?void 0:e.source)==="server"?n=mU(this._delegate):n=fU(this._delegate),n.then(r=>new Op(this.firestore,new Or(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Gb(e),r=Qb(e,i=>new Op(this.firestore,new Or(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return zb(this._delegate,n,r)}withConverter(e){return new ct(this.firestore,e?this._delegate.withConverter(Mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class OU{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Eu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Op{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new ct(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Eu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new OU(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Eu(this._firestore,r))})}isEqual(e){return qb(this._delegate,e._delegate)}}class Qs extends ct{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Mt(this.firestore,e):null}doc(e){try{return e===void 0?new Mt(this.firestore,Gc(this._delegate)):new Mt(this.firestore,Gc(this._delegate,e))}catch(n){throw ht(n,"doc()","CollectionReference.doc()")}}add(e){return yU(this._delegate,e).then(n=>new Mt(this.firestore,n))}isEqual(e){return wb(this._delegate,e._delegate)}withConverter(e){return new Qs(this.firestore,e?this._delegate.withConverter(Mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fi(t){return re(t,he)}/**
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
 */class Ay{constructor(...e){this._delegate=new Dr(...e)}static documentId(){return new Ay(ke.keyField().canonicalString())}isEqual(e){return e=V(e),e instanceof Dr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ri{constructor(e){this._delegate=e}static serverTimestamp(){const e=TU();return e._methodName="FieldValue.serverTimestamp",new ri(e)}static delete(){const e=SU();return e._methodName="FieldValue.delete",new ri(e)}static arrayUnion(...e){const n=bU(...e);return n._methodName="FieldValue.arrayUnion",new ri(n)}static arrayRemove(...e){const n=kU(...e);return n._methodName="FieldValue.arrayRemove",new ri(n)}static increment(e){const n=CU(e);return n._methodName="FieldValue.increment",new ri(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const PU={Firestore:Wb,GeoPoint:Jh,Timestamp:pe,Blob:vu,Transaction:Hb,WriteBatch:Kb,DocumentReference:Mt,DocumentSnapshot:wu,Query:ct,QueryDocumentSnapshot:Eu,QuerySnapshot:Op,CollectionReference:Qs,FieldPath:Ay,FieldValue:ri,setLogLevel:DU,CACHE_SIZE_UNLIMITED:L$};function LU(t,e){t.INTERNAL.registerComponent(new vn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},PU)))}/**
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
 */function MU(t){LU(t,(e,n)=>new Wb(e,n,new xU)),t.registerVersion(AU,NU)}MU(so);const FU={apiKey:"AIzaSyBv504VsjiTp0BjefpcPO91DD7F4cFym0M",authDomain:"temp-monitor-dash.firebaseapp.com",projectId:"temp-monitor-dash",storageBucket:"temp-monitor-dash.appspot.com",messagingSenderId:"562555966406",appId:"1:562555966406:web:dd91cb429ccf8a290dd8c7",measurementId:"G-1D6562XRQG"};so.initializeApp(FU);var id={exports:{}},el={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $U=X.exports,Yb=60103;el.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Q0=Symbol.for;Yb=Q0("react.element"),el.Fragment=Q0("react.fragment")}var UU=$U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VU=Object.prototype.hasOwnProperty,BU={key:!0,ref:!0,__self:!0,__source:!0};function Xb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)VU.call(e,r)&&!BU.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Yb,type:t,key:s,ref:o,props:i,_owner:UU.current}}el.jsx=Xb;el.jsxs=Xb;id.exports=el;const Q=id.exports.jsx,Ft=id.exports.jsxs,jU=id.exports.Fragment;function qU(){const t=[zU,WU,HU],e=Math.floor(Math.random()*t.length+0),n=t[e];return Q(n,{})}function zU(){return Q("div",{id:"loading-wrapper",children:Q("main",{children:Ft("svg",{className:"ap",viewBox:"0 0 128 256",width:"128px",height:"256px",xmlns:"http://www.w3.org/2000/svg",children:[Ft("defs",{children:[Ft("linearGradient",{id:"ap-grad1",x1:"0",y1:"0",x2:"0",y2:"1",children:[Q("stop",{offset:"0%",stopColor:"hsl(223,90%,55%)"}),Q("stop",{offset:"100%",stopColor:"hsl(253,90%,55%)"})]}),Ft("linearGradient",{id:"ap-grad2",x1:"0",y1:"0",x2:"0",y2:"1",children:[Q("stop",{offset:"0%",stopColor:"hsl(193,90%,55%)"}),Q("stop",{offset:"50%",stopColor:"hsl(223,90%,55%)"}),Q("stop",{offset:"100%",stopColor:"hsl(253,90%,55%)"})]})]}),Q("circle",{className:"ap__ring",r:"56",cx:"64",cy:"192",fill:"none",stroke:"#ddd",strokeWidth:"16",strokeLinecap:"round"}),Q("circle",{className:"ap__worm1",r:"56",cx:"64",cy:"192",fill:"none",stroke:"url(#ap-grad1)",strokeWidth:"16",strokeLinecap:"round",strokeDasharray:"87.96 263.89"}),Q("path",{className:"ap__worm2",d:"M120,192A56,56,0,0,1,8,192C8,161.07,16,8,64,8S120,161.07,120,192Z",fill:"none",stroke:"url(#ap-grad2)",strokeWidth:"16",strokeLinecap:"round",strokeDasharray:"87.96 494"})]})})})}function WU(){return Q("div",{className:"loading-wrapper-scateboard",children:Q("main",{children:Ft("svg",{className:"pl",viewBox:"0 0 176 160",width:"176px",height:"160px",xmlns:"http://www.w3.org/2000/svg",children:[Q("defs",{children:Ft("linearGradient",{id:"pl-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[Q("stop",{offset:"0%",stopColor:"hsl(33,90%,55%)"}),Q("stop",{offset:"30%",stopColor:"hsl(33,90%,55%)"}),Q("stop",{offset:"100%",stopColor:"hsl(3,90%,55%)"})]})}),Ft("g",{fill:"none",strokeWidth:"16",strokeLinecap:"round",children:[Q("circle",{className:"pl__ring",r:"56",cx:"88",cy:"96",stroke:"hsla(0,10%,10%,0.1)"}),Q("path",{className:"pl__worm1",d:"M144,96A56,56,0,0,1,32,96",stroke:"url(#pl-grad)",strokeDasharray:"43.98 307.87"}),Q("path",{className:"pl__worm2",d:"M32,136V96s-.275-25.725,14-40",stroke:"hsl(33,90%,55%)",strokeDasharray:"0 40 0 44",strokeDashoffset:"0.001",visibility:"hidden"}),Q("path",{className:"pl__worm3",d:"M144,136V96s.275-25.725-14-40",stroke:"hsl(33,90%,55%)",strokeDasharray:"0 40 0 44",strokeDashoffset:"0.001",visibility:"hidden"})]})]})})})}function HU(){return Q("div",{className:"loading-wrapper-bouncing",children:Ft("svg",{className:"pl",viewBox:"0 0 128 128",width:"128px",height:"128px",xmlns:"http://www.w3.org/2000/svg",children:[Q("defs",{children:Ft("linearGradient",{id:"pl-grad",x1:"0",y1:"0",x2:"0",y2:"1",children:[Q("stop",{offset:"0%",stopColor:"hsl(193,90%,55%)"}),Q("stop",{offset:"100%",stopColor:"hsl(223,90%,55%)"})]})}),Q("circle",{className:"pl__ring",r:"56",cx:"64",cy:"64",fill:"none",stroke:"hsla(0,10%,10%,0.1)",strokeWidth:"16",strokeLinecap:"round"}),Q("path",{className:"pl__worm",d:"M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z",fill:"none",stroke:"url(#pl-grad)",strokeWidth:"16",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"44 1111",strokeDashoffset:"10"})]})})}try{self["workbox:window:6.5.3"]&&_()}catch{}function Pp(t,e){return new Promise(function(n){var r=new MessageChannel;r.port1.onmessage=function(i){n(i.data)},t.postMessage(e,[r.port2])})}function KU(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Y0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function GU(t,e){var n;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=function(i,s){if(i){if(typeof i=="string")return Y0(i,s);var o=Object.prototype.toString.call(i).slice(8,-1);return o==="Object"&&i.constructor&&(o=i.constructor.name),o==="Map"||o==="Set"?Array.from(i):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?Y0(i,s):void 0}}(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(n=t[Symbol.iterator]()).next.bind(n)}try{self["workbox:core:6.5.3"]&&_()}catch{}var rf=function(){var t=this;this.promise=new Promise(function(e,n){t.resolve=e,t.reject=n})};function sf(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}var Ko=function(t,e){this.type=t,Object.assign(this,e)};function bl(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function QU(){}var YU={type:"SKIP_WAITING"};function X0(t,e){if(!e)return t&&t.then?t.then(QU):Promise.resolve()}var XU=function(t){var e,n;function r(a,u){var l,c;return u===void 0&&(u={}),(l=t.call(this)||this).nn={},l.tn=0,l.rn=new rf,l.en=new rf,l.on=new rf,l.un=0,l.an=new Set,l.cn=function(){var h=l.fn,d=h.installing;l.tn>0||!sf(d.scriptURL,l.sn.toString())||performance.now()>l.un+6e4?(l.vn=d,h.removeEventListener("updatefound",l.cn)):(l.hn=d,l.an.add(d),l.rn.resolve(d)),++l.tn,d.addEventListener("statechange",l.ln)},l.ln=function(h){var d=l.fn,f=h.target,g=f.state,v=f===l.vn,m={sw:f,isExternal:v,originalEvent:h};!v&&l.mn&&(m.isUpdate=!0),l.dispatchEvent(new Ko(g,m)),g==="installed"?l.wn=self.setTimeout(function(){g==="installed"&&d.waiting===f&&l.dispatchEvent(new Ko("waiting",m))},200):g==="activating"&&(clearTimeout(l.wn),v||l.en.resolve(f))},l.dn=function(h){var d=l.hn,f=d!==navigator.serviceWorker.controller;l.dispatchEvent(new Ko("controlling",{isExternal:f,originalEvent:h,sw:d,isUpdate:l.mn})),f||l.on.resolve(d)},l.gn=(c=function(h){var d=h.data,f=h.ports,g=h.source;return bl(l.getSW(),function(){l.an.has(g)&&l.dispatchEvent(new Ko("message",{data:d,originalEvent:h,ports:f,sw:g}))})},function(){for(var h=[],d=0;d<arguments.length;d++)h[d]=arguments[d];try{return Promise.resolve(c.apply(this,h))}catch(f){return Promise.reject(f)}}),l.sn=a,l.nn=u,navigator.serviceWorker.addEventListener("message",l.gn),l}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i,s,o=r.prototype;return o.register=function(a){var u=(a===void 0?{}:a).immediate,l=u!==void 0&&u;try{var c=this;return function(h,d){var f=h();return f&&f.then?f.then(d):d(f)}(function(){if(!l&&document.readyState!=="complete")return X0(new Promise(function(h){return window.addEventListener("load",h)}))},function(){return c.mn=Boolean(navigator.serviceWorker.controller),c.yn=c.pn(),bl(c.bn(),function(h){c.fn=h,c.yn&&(c.hn=c.yn,c.en.resolve(c.yn),c.on.resolve(c.yn),c.yn.addEventListener("statechange",c.ln,{once:!0}));var d=c.fn.waiting;return d&&sf(d.scriptURL,c.sn.toString())&&(c.hn=d,Promise.resolve().then(function(){c.dispatchEvent(new Ko("waiting",{sw:d,wasWaitingBeforeRegister:!0}))}).then(function(){})),c.hn&&(c.rn.resolve(c.hn),c.an.add(c.hn)),c.fn.addEventListener("updatefound",c.cn),navigator.serviceWorker.addEventListener("controllerchange",c.dn),c.fn})})}catch(h){return Promise.reject(h)}},o.update=function(){try{return this.fn?X0(this.fn.update()):void 0}catch(a){return Promise.reject(a)}},o.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},o.messageSW=function(a){try{return bl(this.getSW(),function(u){return Pp(u,a)})}catch(u){return Promise.reject(u)}},o.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&Pp(this.fn.waiting,YU)},o.pn=function(){var a=navigator.serviceWorker.controller;return a&&sf(a.scriptURL,this.sn.toString())?a:void 0},o.bn=function(){try{var a=this;return function(u,l){try{var c=u()}catch(h){return l(h)}return c&&c.then?c.then(void 0,l):c}(function(){return bl(navigator.serviceWorker.register(a.sn,a.nn),function(u){return a.un=performance.now(),u})},function(u){throw u})}catch(u){return Promise.reject(u)}},i=r,(s=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&KU(i.prototype,s),r}(function(){function t(){this.Pn=new Map}var e=t.prototype;return e.addEventListener=function(n,r){this.Sn(n).add(r)},e.removeEventListener=function(n,r){this.Sn(n).delete(r)},e.dispatchEvent=function(n){n.target=this;for(var r,i=GU(this.Sn(n.type));!(r=i()).done;)(0,r.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},t}());function JU(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisterError:s}=t;let o,a;const u=async(l=!0)=>{l&&(o==null||o.addEventListener("controlling",c=>{c.isUpdate&&window.location.reload()})),a&&a.waiting&&await Pp(a.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){o=new XU("/sw.js",{scope:"/",type:"classic"}),o.addEventListener("activated",l=>{l.isUpdate||r==null||r()});{const l=()=>{n==null||n()};o.addEventListener("waiting",l),o.addEventListener("externalwaiting",l)}o.register({immediate:e}).then(l=>{a=l,i==null||i(l)}).catch(l=>{s==null||s(l)})}return u}function ZU(t={}){const{immediate:e=!0,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisterError:s}=t,[o,a]=X.exports.useState(!1),[u,l]=X.exports.useState(!1),[c]=X.exports.useState(()=>JU({immediate:e,onOfflineReady(){l(!0),r==null||r()},onNeedRefresh(){a(!0),n==null||n()},onRegistered:i,onRegisterError:s}));return{needRefresh:[o,a],offlineReady:[u,l],updateServiceWorker:c}}function eV(){return ZU({onRegistered(t){console.log("SW Registered: "+t)},onRegisterError(t){console.log("SW registration error",t)}}),Q(jU,{})}function tV(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}else return Array.from(t)}var sd=!1;if(typeof window!="undefined"){var J0={get passive(){sd=!0}};window.addEventListener("testPassive",null,J0),window.removeEventListener("testPassive",null,J0)}var Ny=typeof window!="undefined"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),hn=[],Ys=!1,Ry=-1,Da=void 0,Oa=void 0,Jb=function(e){return hn.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(e))})},Iu=function(e){var n=e||window.event;return Jb(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},nV=function(e){if(Oa===void 0){var n=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;n&&r>0&&(Oa=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}Da===void 0&&(Da=document.body.style.overflow,document.body.style.overflow="hidden")},Zb=function(){Oa!==void 0&&(document.body.style.paddingRight=Oa,Oa=void 0),Da!==void 0&&(document.body.style.overflow=Da,Da=void 0)},rV=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},iV=function(e,n){var r=e.targetTouches[0].clientY-Ry;return Jb(e.target)?!1:n&&n.scrollTop===0&&r>0||rV(n)&&r<0?Iu(e):(e.stopPropagation(),!0)},sV=function(e,n){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!hn.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:n||{}};hn=[].concat(tV(hn),[r]),Ny?(e.ontouchstart=function(i){i.targetTouches.length===1&&(Ry=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&iV(i,e)},Ys||(document.addEventListener("touchmove",Iu,sd?{passive:!1}:void 0),Ys=!0)):nV(n)}},oV=function(){Ny?(hn.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),Ys&&(document.removeEventListener("touchmove",Iu,sd?{passive:!1}:void 0),Ys=!1),Ry=-1):Zb(),hn=[]},aV=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}hn=hn.filter(function(n){return n.targetElement!==e}),Ny?(e.ontouchstart=null,e.ontouchmove=null,Ys&&hn.length===0&&(document.removeEventListener("touchmove",Iu,sd?{passive:!1}:void 0),Ys=!1)):hn.length||Zb()};/*!
* tabbable 6.0.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ek=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Yc=ek.join(","),tk=typeof Element=="undefined",Fi=tk?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Xc=!tk&&Element.prototype.getRootNode?function(t){return t.getRootNode()}:function(t){return t.ownerDocument},nk=function(e,n,r){var i=Array.prototype.slice.apply(e.querySelectorAll(Yc));return n&&Fi.call(e,Yc)&&i.unshift(e),i=i.filter(r),i},rk=function t(e,n,r){for(var i=[],s=Array.from(e);s.length;){var o=s.shift();if(o.tagName==="SLOT"){var a=o.assignedElements(),u=a.length?a:o.children,l=t(u,!0,r);r.flatten?i.push.apply(i,l):i.push({scope:o,candidates:l})}else{var c=Fi.call(o,Yc);c&&r.filter(o)&&(n||!e.includes(o))&&i.push(o);var h=o.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(o),d=!r.shadowRootFilter||r.shadowRootFilter(o);if(h&&d){var f=t(h===!0?o.children:h.children,!0,r);r.flatten?i.push.apply(i,f):i.push({scope:o,candidates:f})}else s.unshift.apply(s,o.children)}}return i},ik=function(e,n){return e.tabIndex<0&&(n||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},uV=function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex},sk=function(e){return e.tagName==="INPUT"},lV=function(e){return sk(e)&&e.type==="hidden"},cV=function(e){var n=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return n},hV=function(e,n){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===n)return e[r]},dV=function(e){if(!e.name)return!0;var n=e.form||Xc(e),r=function(a){return n.querySelectorAll('input[type="radio"][name="'+a+'"]')},i;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(e.name));else try{i=r(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var s=hV(i,e.form);return!s||s===e},fV=function(e){return sk(e)&&e.type==="radio"},pV=function(e){return fV(e)&&!dV(e)},mV=function(e){for(var n,r=Xc(e).host,i=!!((n=r)!==null&&n!==void 0&&n.ownerDocument.contains(r)||e.ownerDocument.contains(e));!i&&r;){var s;r=Xc(r).host,i=!!((s=r)!==null&&s!==void 0&&s.ownerDocument.contains(r))}return i},Z0=function(e){var n=e.getBoundingClientRect(),r=n.width,i=n.height;return r===0&&i===0},gV=function(e,n){var r=n.displayCheck,i=n.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var s=Fi.call(e,"details>summary:first-of-type"),o=s?e.parentElement:e;if(Fi.call(o,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var a=e;e;){var u=e.parentElement,l=Xc(e);if(u&&!u.shadowRoot&&i(u)===!0)return Z0(e);e.assignedSlot?e=e.assignedSlot:!u&&l!==e.ownerDocument?e=l.host:e=u}e=a}if(mV(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return Z0(e);return!1},yV=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var n=e.parentElement;n;){if(n.tagName==="FIELDSET"&&n.disabled){for(var r=0;r<n.children.length;r++){var i=n.children.item(r);if(i.tagName==="LEGEND")return Fi.call(n,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}n=n.parentElement}return!1},Jc=function(e,n){return!(n.disabled||lV(n)||gV(n,e)||cV(n)||yV(n))},Lp=function(e,n){return!(pV(n)||ik(n)<0||!Jc(e,n))},vV=function(e){var n=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},wV=function t(e){var n=[],r=[];return e.forEach(function(i,s){var o=!!i.scope,a=o?i.scope:i,u=ik(a,o),l=o?t(i.candidates):a;u===0?o?n.push.apply(n,l):n.push(a):r.push({documentOrder:s,tabIndex:u,item:i,isScope:o,content:l})}),r.sort(uV).reduce(function(i,s){return s.isScope?i.push.apply(i,s.content):i.push(s.content),i},[]).concat(n)},EV=function(e,n){n=n||{};var r;return n.getShadowRoot?r=rk([e],n.includeContainer,{filter:Lp.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:vV}):r=nk(e,n.includeContainer,Lp.bind(null,n)),wV(r)},IV=function(e,n){n=n||{};var r;return n.getShadowRoot?r=rk([e],n.includeContainer,{filter:Jc.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):r=nk(e,n.includeContainer,Jc.bind(null,n)),r},kl=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Fi.call(e,Yc)===!1?!1:Lp(n,e)},_V=ek.concat("iframe").join(","),of=function(e,n){if(n=n||{},!e)throw new Error("No node provided");return Fi.call(e,_V)===!1?!1:Jc(n,e)};/*!
* focus-trap 7.0.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function eE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tE(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?eE(Object(n),!0).forEach(function(r){SV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):eE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function SV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nE=function(){var t=[];return{activateTrap:function(n){if(t.length>0){var r=t[t.length-1];r!==n&&r.pause()}var i=t.indexOf(n);i===-1||t.splice(i,1),t.push(n)},deactivateTrap:function(n){var r=t.indexOf(n);r!==-1&&t.splice(r,1),t.length>0&&t[t.length-1].unpause()}}}(),TV=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},bV=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},kV=function(e){return e.key==="Tab"||e.keyCode===9},rE=function(e){return setTimeout(e,0)},iE=function(e,n){var r=-1;return e.every(function(i,s){return n(i)?(r=s,!1):!0}),r},Go=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return typeof e=="function"?e.apply(void 0,r):e},Cl=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},CV=function(e,n){var r=(n==null?void 0:n.document)||document,i=tE({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},n),s={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o,a=function(w,b,x){return w&&w[b]!==void 0?w[b]:i[x||b]},u=function(w){return s.containerGroups.findIndex(function(b){var x=b.container,P=b.tabbableNodes;return x.contains(w)||P.find(function(G){return G===w})})},l=function(w){var b=i[w];if(typeof b=="function"){for(var x=arguments.length,P=new Array(x>1?x-1:0),G=1;G<x;G++)P[G-1]=arguments[G];b=b.apply(void 0,P)}if(b===!0&&(b=void 0),!b){if(b===void 0||b===!1)return b;throw new Error("`".concat(w,"` was specified but was not a node, or did not return a node"))}var Re=b;if(typeof b=="string"&&(Re=r.querySelector(b),!Re))throw new Error("`".concat(w,"` as selector refers to no known node"));return Re},c=function(){var w=l("initialFocus");if(w===!1)return!1;if(w===void 0)if(u(r.activeElement)>=0)w=r.activeElement;else{var b=s.tabbableGroups[0],x=b&&b.firstTabbableNode;w=x||l("fallbackFocus")}if(!w)throw new Error("Your focus-trap needs to have at least one focusable element");return w},h=function(){if(s.containerGroups=s.containers.map(function(w){var b=EV(w,i.tabbableOptions),x=IV(w,i.tabbableOptions);return{container:w,tabbableNodes:b,focusableNodes:x,firstTabbableNode:b.length>0?b[0]:null,lastTabbableNode:b.length>0?b[b.length-1]:null,nextTabbableNode:function(G){var Re=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,ye=x.findIndex(function(ue){return ue===G});if(!(ye<0))return Re?x.slice(ye+1).find(function(ue){return kl(ue,i.tabbableOptions)}):x.slice(0,ye).reverse().find(function(ue){return kl(ue,i.tabbableOptions)})}}}),s.tabbableGroups=s.containerGroups.filter(function(w){return w.tabbableNodes.length>0}),s.tabbableGroups.length<=0&&!l("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},d=function N(w){if(w!==!1&&w!==r.activeElement){if(!w||!w.focus){N(c());return}w.focus({preventScroll:!!i.preventScroll}),s.mostRecentlyFocusedNode=w,TV(w)&&w.select()}},f=function(w){var b=l("setReturnFocus",w);return b||(b===!1?!1:w)},g=function(w){var b=Cl(w);if(!(u(b)>=0)){if(Go(i.clickOutsideDeactivates,w)){o.deactivate({returnFocus:i.returnFocusOnDeactivate&&!of(b,i.tabbableOptions)});return}Go(i.allowOutsideClick,w)||w.preventDefault()}},v=function(w){var b=Cl(w),x=u(b)>=0;x||b instanceof Document?x&&(s.mostRecentlyFocusedNode=b):(w.stopImmediatePropagation(),d(s.mostRecentlyFocusedNode||c()))},m=function(w){var b=Cl(w);h();var x=null;if(s.tabbableGroups.length>0){var P=u(b),G=P>=0?s.containerGroups[P]:void 0;if(P<0)w.shiftKey?x=s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:x=s.tabbableGroups[0].firstTabbableNode;else if(w.shiftKey){var Re=iE(s.tabbableGroups,function(zr){var Wr=zr.firstTabbableNode;return b===Wr});if(Re<0&&(G.container===b||of(b,i.tabbableOptions)&&!kl(b,i.tabbableOptions)&&!G.nextTabbableNode(b,!1))&&(Re=P),Re>=0){var ye=Re===0?s.tabbableGroups.length-1:Re-1,ue=s.tabbableGroups[ye];x=ue.lastTabbableNode}}else{var Xt=iE(s.tabbableGroups,function(zr){var Wr=zr.lastTabbableNode;return b===Wr});if(Xt<0&&(G.container===b||of(b,i.tabbableOptions)&&!kl(b,i.tabbableOptions)&&!G.nextTabbableNode(b))&&(Xt=P),Xt>=0){var Tn=Xt===s.tabbableGroups.length-1?0:Xt+1,qr=s.tabbableGroups[Tn];x=qr.firstTabbableNode}}}else x=l("fallbackFocus");x&&(w.preventDefault(),d(x))},p=function(w){if(bV(w)&&Go(i.escapeDeactivates,w)!==!1){w.preventDefault(),o.deactivate();return}if(kV(w)){m(w);return}},y=function(w){var b=Cl(w);u(b)>=0||Go(i.clickOutsideDeactivates,w)||Go(i.allowOutsideClick,w)||(w.preventDefault(),w.stopImmediatePropagation())},E=function(){if(!!s.active)return nE.activateTrap(o),s.delayInitialFocusTimer=i.delayInitialFocus?rE(function(){d(c())}):d(c()),r.addEventListener("focusin",v,!0),r.addEventListener("mousedown",g,{capture:!0,passive:!1}),r.addEventListener("touchstart",g,{capture:!0,passive:!1}),r.addEventListener("click",y,{capture:!0,passive:!1}),r.addEventListener("keydown",p,{capture:!0,passive:!1}),o},S=function(){if(!!s.active)return r.removeEventListener("focusin",v,!0),r.removeEventListener("mousedown",g,!0),r.removeEventListener("touchstart",g,!0),r.removeEventListener("click",y,!0),r.removeEventListener("keydown",p,!0),o};return o={get active(){return s.active},get paused(){return s.paused},activate:function(w){if(s.active)return this;var b=a(w,"onActivate"),x=a(w,"onPostActivate"),P=a(w,"checkCanFocusTrap");P||h(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=r.activeElement,b&&b();var G=function(){P&&h(),E(),x&&x()};return P?(P(s.containers.concat()).then(G,G),this):(G(),this)},deactivate:function(w){if(!s.active)return this;var b=tE({onDeactivate:i.onDeactivate,onPostDeactivate:i.onPostDeactivate,checkCanReturnFocus:i.checkCanReturnFocus},w);clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,S(),s.active=!1,s.paused=!1,nE.deactivateTrap(o);var x=a(b,"onDeactivate"),P=a(b,"onPostDeactivate"),G=a(b,"checkCanReturnFocus"),Re=a(b,"returnFocus","returnFocusOnDeactivate");x&&x();var ye=function(){rE(function(){Re&&d(f(s.nodeFocusedBeforeActivation)),P&&P()})};return Re&&G?(G(f(s.nodeFocusedBeforeActivation)).then(ye,ye),this):(ye(),this)},pause:function(){return s.paused||!s.active?this:(s.paused=!0,S(),this)},unpause:function(){return!s.paused||!s.active?this:(s.paused=!1,h(),E(),this)},updateContainerElements:function(w){var b=[].concat(w).filter(Boolean);return s.containers=b.map(function(x){return typeof x=="string"?r.querySelector(x):x}),s.active&&h(),this}},o.updateContainerElements(e),o},AV={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},NV=function(t){return rn.createElement("div",{style:AV},t.children)},RV={position:"fixed",top:0,left:0,bottom:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.5)"},xV=function(){return rn.createElement("div",{style:RV})},DV=function(t){return rn.createElement(X.exports.Fragment,null,t.children)};function Zc(){return Zc=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zc.apply(this,arguments)}var OV=function(t){var e=t.children,n=t.isOpen,r=t.close,i=t.elementId,s=i===void 0?"root":i,o=t.title,a=t.description,u=t.preventScroll,l=t.focusTrapOptions,c=t.components,h=t.additionalProps,d=X.exports.useRef(null);return function(f,g,v){X.exports.useEffect(function(){if(g&&f.current!==null){var m=CV(f.current,Zc({fallbackFocus:f.current},v));return m.activate(),setTimeout(function(){document.activeElement===f.current&&console.warn(`[react-hooks-use-modal]: Since there were no focusable elements in the modal, the initial focus was on the containing element.
  WAI-ARIA 1.1 states that there should be at least one focusable element in the modal.
  https://www.w3.org/TR/wai-aria-1.1/#dialog`)},100),function(){m.deactivate()}}},[v,g,f])}(d,n,X.exports.useMemo(function(){return Zc({onDeactivate:r,clickOutsideDeactivates:!0},l)},[r,l])),function(f,g,v){X.exports.useEffect(function(){if(f.current!==null)return v?(g?sV(f.current,{reserveScrollBarGap:!0}):aV(f.current),function(){oV()}):void 0},[g,v,f])}(d,n,u),n===!1?null:Jp.exports.createPortal(rn.createElement(c.Wrapper,null,rn.createElement(c.Overlay,null),rn.createElement("div",{ref:d,role:"dialog","aria-modal":"true",tabIndex:-1,style:{position:"relative"}},rn.createElement(c.Modal,{title:o,description:a,close:r,additionalProps:h},e))),document.getElementById(s))},PV=X.exports.createContext({}),LV={initialValue:!1,preventScroll:!1,focusTrapOptions:{},components:{}},MV=function(t,e){var n,r,i;t===void 0&&(t="root");var s=X.exports.useContext(PV),o=X.exports.useMemo(function(){return Object.assign({},LV,s,e)},[s,e]),a=o.preventScroll,u=o.focusTrapOptions,l=o.components,c=X.exports.useState(o.initialValue),h=c[0],d=c[1],f=X.exports.useCallback(function(){d(!0)},[d]),g=X.exports.useCallback(function(){d(!1)},[d]),v=(n=l.Wrapper)!=null?n:NV,m=(r=l.Overlay)!=null?r:xV,p=(i=l.Modal)!=null?i:DV;return[X.exports.useCallback(function(y){return rn.createElement(OV,{isOpen:h,close:g,elementId:t,title:y.title,description:y.description,preventScroll:a,focusTrapOptions:u,components:{Modal:p,Overlay:m,Wrapper:v},additionalProps:y.additionalProps},y.children)},[p,m,v,g,t,u,h,a]),f,g,h]};const _n=Object.create(null);_n.open="0";_n.close="1";_n.ping="2";_n.pong="3";_n.message="4";_n.upgrade="5";_n.noop="6";const Yl=Object.create(null);Object.keys(_n).forEach(t=>{Yl[_n[t]]=t});const FV={type:"error",data:"parser error"},$V=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",UV=typeof ArrayBuffer=="function",VV=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,ok=({type:t,data:e},n,r)=>$V&&e instanceof Blob?n?r(e):sE(e,r):UV&&(e instanceof ArrayBuffer||VV(e))?n?r(e):sE(new Blob([e]),r):r(_n[t]+(e||"")),sE=(t,e)=>{const n=new FileReader;return n.onload=function(){const r=n.result.split(",")[1];e("b"+r)},n.readAsDataURL(t)},oE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ua=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(let t=0;t<oE.length;t++)ua[oE.charCodeAt(t)]=t;const BV=t=>{let e=t.length*.75,n=t.length,r,i=0,s,o,a,u;t[t.length-1]==="="&&(e--,t[t.length-2]==="="&&e--);const l=new ArrayBuffer(e),c=new Uint8Array(l);for(r=0;r<n;r+=4)s=ua[t.charCodeAt(r)],o=ua[t.charCodeAt(r+1)],a=ua[t.charCodeAt(r+2)],u=ua[t.charCodeAt(r+3)],c[i++]=s<<2|o>>4,c[i++]=(o&15)<<4|a>>2,c[i++]=(a&3)<<6|u&63;return l},jV=typeof ArrayBuffer=="function",ak=(t,e)=>{if(typeof t!="string")return{type:"message",data:uk(t,e)};const n=t.charAt(0);return n==="b"?{type:"message",data:qV(t.substring(1),e)}:Yl[n]?t.length>1?{type:Yl[n],data:t.substring(1)}:{type:Yl[n]}:FV},qV=(t,e)=>{if(jV){const n=BV(t);return uk(n,e)}else return{base64:!0,data:t}},uk=(t,e)=>{switch(e){case"blob":return t instanceof ArrayBuffer?new Blob([t]):t;case"arraybuffer":default:return t}},lk=String.fromCharCode(30),zV=(t,e)=>{const n=t.length,r=new Array(n);let i=0;t.forEach((s,o)=>{ok(s,!1,a=>{r[o]=a,++i===n&&e(r.join(lk))})})},WV=(t,e)=>{const n=t.split(lk),r=[];for(let i=0;i<n.length;i++){const s=ak(n[i],e);if(r.push(s),s.type==="error")break}return r},ck=4;function Ne(t){if(t)return HV(t)}function HV(t){for(var e in Ne.prototype)t[e]=Ne.prototype[e];return t}Ne.prototype.on=Ne.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this};Ne.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this};Ne.prototype.off=Ne.prototype.removeListener=Ne.prototype.removeAllListeners=Ne.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return n.length===0&&delete this._callbacks["$"+t],this};Ne.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),n=this._callbacks["$"+t],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this};Ne.prototype.emitReserved=Ne.prototype.emit;Ne.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};Ne.prototype.hasListeners=function(t){return!!this.listeners(t).length};const ar=(()=>typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")())();function hk(t,...e){return e.reduce((n,r)=>(t.hasOwnProperty(r)&&(n[r]=t[r]),n),{})}const KV=setTimeout,GV=clearTimeout;function od(t,e){e.useNativeTimers?(t.setTimeoutFn=KV.bind(ar),t.clearTimeoutFn=GV.bind(ar)):(t.setTimeoutFn=setTimeout.bind(ar),t.clearTimeoutFn=clearTimeout.bind(ar))}const QV=1.33;function YV(t){return typeof t=="string"?XV(t):Math.ceil((t.byteLength||t.size)*QV)}function XV(t){let e=0,n=0;for(let r=0,i=t.length;r<i;r++)e=t.charCodeAt(r),e<128?n+=1:e<2048?n+=2:e<55296||e>=57344?n+=3:(r++,n+=4);return n}class JV extends Error{constructor(e,n,r){super(e),this.description=n,this.context=r,this.type="TransportError"}}class dk extends Ne{constructor(e){super(),this.writable=!1,od(this,e),this.opts=e,this.query=e.query,this.readyState="",this.socket=e.socket}onError(e,n,r){return super.emitReserved("error",new JV(e,n,r)),this}open(){return(this.readyState==="closed"||this.readyState==="")&&(this.readyState="opening",this.doOpen()),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const n=ak(e,this.socket.binaryType);this.onPacket(n)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}}const fk="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),Mp=64,ZV={};let aE=0,Al=0,uE;function lE(t){let e="";do e=fk[t%Mp]+e,t=Math.floor(t/Mp);while(t>0);return e}function pk(){const t=lE(+new Date);return t!==uE?(aE=0,uE=t):t+"."+lE(aE++)}for(;Al<Mp;Al++)ZV[fk[Al]]=Al;function mk(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e}function eB(t){let e={},n=t.split("&");for(let r=0,i=n.length;r<i;r++){let s=n[r].split("=");e[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return e}let gk=!1;try{gk=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch{}const tB=gk;function yk(t){const e=t.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||tB))return new XMLHttpRequest}catch{}if(!e)try{return new ar[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}function nB(){}const rB=function(){return new yk({xdomain:!1}).responseType!=null}();class iB extends dk{constructor(e){if(super(e),this.polling=!1,typeof location!="undefined"){const r=location.protocol==="https:";let i=location.port;i||(i=r?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||i!==e.port,this.xs=e.secure!==r}const n=e&&e.forceBase64;this.supportsBinary=rB&&!n}get name(){return"polling"}doOpen(){this.poll()}pause(e){this.readyState="pausing";const n=()=>{this.readyState="paused",e()};if(this.polling||!this.writable){let r=0;this.polling&&(r++,this.once("pollComplete",function(){--r||n()})),this.writable||(r++,this.once("drain",function(){--r||n()}))}else n()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const n=r=>{if(this.readyState==="opening"&&r.type==="open"&&this.onOpen(),r.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(r)};WV(e,this.socket.binaryType).forEach(n),this.readyState!=="closed"&&(this.polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this.poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,zV(e,n=>{this.doWrite(n,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.query||{};const n=this.opts.secure?"https":"http";let r="";this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=pk()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.opts.port&&(n==="https"&&Number(this.opts.port)!==443||n==="http"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port);const i=mk(e),s=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}request(e={}){return Object.assign(e,{xd:this.xd,xs:this.xs},this.opts),new yn(this.uri(),e)}doWrite(e,n){const r=this.request({method:"POST",data:e});r.on("success",n),r.on("error",(i,s)=>{this.onError("xhr post error",i,s)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(n,r)=>{this.onError("xhr poll error",n,r)}),this.pollXhr=e}}class yn extends Ne{constructor(e,n){super(),od(this,n),this.opts=n,this.method=n.method||"GET",this.uri=e,this.async=n.async!==!1,this.data=n.data!==void 0?n.data:null,this.create()}create(){const e=hk(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this.opts.xd,e.xscheme=!!this.opts.xs;const n=this.xhr=new yk(e);try{n.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let r in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(r)&&n.setRequestHeader(r,this.opts.extraHeaders[r])}}catch{}if(this.method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}"withCredentials"in n&&(n.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(n.timeout=this.opts.requestTimeout),n.onreadystatechange=()=>{n.readyState===4&&(n.status===200||n.status===1223?this.onLoad():this.setTimeoutFn(()=>{this.onError(typeof n.status=="number"?n.status:0)},0))},n.send(this.data)}catch(r){this.setTimeoutFn(()=>{this.onError(r)},0);return}typeof document!="undefined"&&(this.index=yn.requestsCount++,yn.requests[this.index]=this)}onError(e){this.emitReserved("error",e,this.xhr),this.cleanup(!0)}cleanup(e){if(!(typeof this.xhr=="undefined"||this.xhr===null)){if(this.xhr.onreadystatechange=nB,e)try{this.xhr.abort()}catch{}typeof document!="undefined"&&delete yn.requests[this.index],this.xhr=null}}onLoad(){const e=this.xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}yn.requestsCount=0;yn.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",cE);else if(typeof addEventListener=="function"){const t="onpagehide"in ar?"pagehide":"unload";addEventListener(t,cE,!1)}}function cE(){for(let t in yn.requests)yn.requests.hasOwnProperty(t)&&yn.requests[t].abort()}const vk=(()=>typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,n)=>n(e,0))(),Nl=ar.WebSocket||ar.MozWebSocket,hE=!0,sB="arraybuffer",dE=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class oB extends dk{constructor(e){super(e),this.supportsBinary=!e.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const e=this.uri(),n=this.opts.protocols,r=dE?{}:hk(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(r.headers=this.opts.extraHeaders);try{this.ws=hE&&!dE?n?new Nl(e,n):new Nl(e):new Nl(e,n,r)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||sB,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let n=0;n<e.length;n++){const r=e[n],i=n===e.length-1;ok(r,this.supportsBinary,s=>{const o={};try{hE&&this.ws.send(s)}catch{}i&&vk(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.close(),this.ws=null)}uri(){let e=this.query||{};const n=this.opts.secure?"wss":"ws";let r="";this.opts.port&&(n==="wss"&&Number(this.opts.port)!==443||n==="ws"&&Number(this.opts.port)!==80)&&(r=":"+this.opts.port),this.opts.timestampRequests&&(e[this.opts.timestampParam]=pk()),this.supportsBinary||(e.b64=1);const i=mk(e),s=this.opts.hostname.indexOf(":")!==-1;return n+"://"+(s?"["+this.opts.hostname+"]":this.opts.hostname)+r+this.opts.path+(i.length?"?"+i:"")}check(){return!!Nl}}const aB={websocket:oB,polling:iB},uB=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,lB=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Fp(t){const e=t,n=t.indexOf("["),r=t.indexOf("]");n!=-1&&r!=-1&&(t=t.substring(0,n)+t.substring(n,r).replace(/:/g,";")+t.substring(r,t.length));let i=uB.exec(t||""),s={},o=14;for(;o--;)s[lB[o]]=i[o]||"";return n!=-1&&r!=-1&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s.pathNames=cB(s,s.path),s.queryKey=hB(s,s.query),s}function cB(t,e){const n=/\/{2,9}/g,r=e.replace(n,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&r.splice(0,1),e.slice(-1)=="/"&&r.splice(r.length-1,1),r}function hB(t,e){const n={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(r,i,s){i&&(n[i]=s)}),n}class tr extends Ne{constructor(e,n={}){super(),e&&typeof e=="object"&&(n=e,e=null),e?(e=Fp(e),n.hostname=e.host,n.secure=e.protocol==="https"||e.protocol==="wss",n.port=e.port,e.query&&(n.query=e.query)):n.host&&(n.hostname=Fp(n.host).host),od(this,n),this.secure=n.secure!=null?n.secure:typeof location!="undefined"&&location.protocol==="https:",n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.hostname=n.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=n.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),this.transports=n.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},n),this.opts.path=this.opts.path.replace(/\/$/,"")+"/",typeof this.opts.query=="string"&&(this.opts.query=eB(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,typeof addEventListener=="function"&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(e){const n=Object.assign({},this.opts.query);n.EIO=ck,n.transport=e,this.id&&(n.sid=this.id);const r=Object.assign({},this.opts.transportOptions[e],this.opts,{query:n,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new aB[e](r)}open(){let e;if(this.opts.rememberUpgrade&&tr.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)e="websocket";else if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else e=this.transports[0];this.readyState="opening";try{e=this.createTransport(e)}catch{this.transports.shift(),this.open();return}e.open(),this.setTransport(e)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",n=>this.onClose("transport close",n))}probe(e){let n=this.createTransport(e),r=!1;tr.priorWebsocketSuccess=!1;const i=()=>{r||(n.send([{type:"ping",data:"probe"}]),n.once("packet",h=>{if(!r)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",n),!n)return;tr.priorWebsocketSuccess=n.name==="websocket",this.transport.pause(()=>{r||this.readyState!=="closed"&&(c(),this.setTransport(n),n.send([{type:"upgrade"}]),this.emitReserved("upgrade",n),n=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=n.name,this.emitReserved("upgradeError",d)}}))};function s(){r||(r=!0,c(),n.close(),n=null)}const o=h=>{const d=new Error("probe error: "+h);d.transport=n.name,s(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function u(){o("socket closed")}function l(h){n&&h.name!==n.name&&s()}const c=()=>{n.removeListener("open",i),n.removeListener("error",o),n.removeListener("close",a),this.off("close",u),this.off("upgrading",l)};n.once("open",i),n.once("error",o),n.once("close",a),this.once("close",u),this.once("upgrading",l),n.open()}onOpen(){if(this.readyState="open",tr.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade&&this.transport.pause){let e=0;const n=this.upgrades.length;for(;e<n;e++)this.probe(this.upgrades[e])}}onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const n=new Error("server error");n.code=e.data,this.onError(n);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this.getWritablePackets();this.transport.send(e),this.prevBufferLen=e.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let n=1;for(let r=0;r<this.writeBuffer.length;r++){const i=this.writeBuffer[r].data;if(i&&(n+=YV(i)),r>0&&n>this.maxPayload)return this.writeBuffer.slice(0,r);n+=2}return this.writeBuffer}write(e,n,r){return this.sendPacket("message",e,n,r),this}send(e,n,r){return this.sendPacket("message",e,n,r),this}sendPacket(e,n,r,i){if(typeof n=="function"&&(i=n,n=void 0),typeof r=="function"&&(i=r,r=null),this.readyState==="closing"||this.readyState==="closed")return;r=r||{},r.compress=r.compress!==!1;const s={type:e,data:n,options:r};this.emitReserved("packetCreate",s),this.writeBuffer.push(s),i&&this.once("flush",i),this.flush()}close(){const e=()=>{this.onClose("forced close"),this.transport.close()},n=()=>{this.off("upgrade",n),this.off("upgradeError",n),e()},r=()=>{this.once("upgrade",n),this.once("upgradeError",n)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?r():e()}):this.upgrading?r():e()),this}onError(e){tr.priorWebsocketSuccess=!1,this.emitReserved("error",e),this.onClose("transport error",e)}onClose(e,n){(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),typeof removeEventListener=="function"&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",e,n),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(e){const n=[];let r=0;const i=e.length;for(;r<i;r++)~this.transports.indexOf(e[r])&&n.push(e[r]);return n}}tr.protocol=ck;function dB(t,e="",n){let r=t;n=n||typeof location!="undefined"&&location,t==null&&(t=n.protocol+"//"+n.host),typeof t=="string"&&(t.charAt(0)==="/"&&(t.charAt(1)==="/"?t=n.protocol+t:t=n.host+t),/^(https?|wss?):\/\//.test(t)||(typeof n!="undefined"?t=n.protocol+"//"+t:t="https://"+t),r=Fp(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const s=r.host.indexOf(":")!==-1?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+s+":"+r.port+e,r.href=r.protocol+"://"+s+(n&&n.port===r.port?"":":"+r.port),r}const fB=typeof ArrayBuffer=="function",pB=t=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,wk=Object.prototype.toString,mB=typeof Blob=="function"||typeof Blob!="undefined"&&wk.call(Blob)==="[object BlobConstructor]",gB=typeof File=="function"||typeof File!="undefined"&&wk.call(File)==="[object FileConstructor]";function xy(t){return fB&&(t instanceof ArrayBuffer||pB(t))||mB&&t instanceof Blob||gB&&t instanceof File}function Xl(t,e){if(!t||typeof t!="object")return!1;if(Array.isArray(t)){for(let n=0,r=t.length;n<r;n++)if(Xl(t[n]))return!0;return!1}if(xy(t))return!0;if(t.toJSON&&typeof t.toJSON=="function"&&arguments.length===1)return Xl(t.toJSON(),!0);for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&Xl(t[n]))return!0;return!1}function yB(t){const e=[],n=t.data,r=t;return r.data=$p(n,e),r.attachments=e.length,{packet:r,buffers:e}}function $p(t,e){if(!t)return t;if(xy(t)){const n={_placeholder:!0,num:e.length};return e.push(t),n}else if(Array.isArray(t)){const n=new Array(t.length);for(let r=0;r<t.length;r++)n[r]=$p(t[r],e);return n}else if(typeof t=="object"&&!(t instanceof Date)){const n={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=$p(t[r],e));return n}return t}function vB(t,e){return t.data=Up(t.data,e),t.attachments=void 0,t}function Up(t,e){if(!t)return t;if(t&&t._placeholder===!0){if(typeof t.num=="number"&&t.num>=0&&t.num<e.length)return e[t.num];throw new Error("illegal attachments")}else if(Array.isArray(t))for(let n=0;n<t.length;n++)t[n]=Up(t[n],e);else if(typeof t=="object")for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(t[n]=Up(t[n],e));return t}const wB=5;var Z;(function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"})(Z||(Z={}));class EB{constructor(e){this.replacer=e}encode(e){return(e.type===Z.EVENT||e.type===Z.ACK)&&Xl(e)?(e.type=e.type===Z.EVENT?Z.BINARY_EVENT:Z.BINARY_ACK,this.encodeAsBinary(e)):[this.encodeAsString(e)]}encodeAsString(e){let n=""+e.type;return(e.type===Z.BINARY_EVENT||e.type===Z.BINARY_ACK)&&(n+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(n+=e.nsp+","),e.id!=null&&(n+=e.id),e.data!=null&&(n+=JSON.stringify(e.data,this.replacer)),n}encodeAsBinary(e){const n=yB(e),r=this.encodeAsString(n.packet),i=n.buffers;return i.unshift(r),i}}class Dy extends Ne{constructor(e){super(),this.reviver=e}add(e){let n;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");n=this.decodeString(e),n.type===Z.BINARY_EVENT||n.type===Z.BINARY_ACK?(this.reconstructor=new IB(n),n.attachments===0&&super.emitReserved("decoded",n)):super.emitReserved("decoded",n)}else if(xy(e)||e.base64)if(this.reconstructor)n=this.reconstructor.takeBinaryData(e),n&&(this.reconstructor=null,super.emitReserved("decoded",n));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let n=0;const r={type:Number(e.charAt(0))};if(Z[r.type]===void 0)throw new Error("unknown packet type "+r.type);if(r.type===Z.BINARY_EVENT||r.type===Z.BINARY_ACK){const s=n+1;for(;e.charAt(++n)!=="-"&&n!=e.length;);const o=e.substring(s,n);if(o!=Number(o)||e.charAt(n)!=="-")throw new Error("Illegal attachments");r.attachments=Number(o)}if(e.charAt(n+1)==="/"){const s=n+1;for(;++n&&!(e.charAt(n)===","||n===e.length););r.nsp=e.substring(s,n)}else r.nsp="/";const i=e.charAt(n+1);if(i!==""&&Number(i)==i){const s=n+1;for(;++n;){const o=e.charAt(n);if(o==null||Number(o)!=o){--n;break}if(n===e.length)break}r.id=Number(e.substring(s,n+1))}if(e.charAt(++n)){const s=this.tryParse(e.substr(n));if(Dy.isPayloadValid(r.type,s))r.data=s;else throw new Error("invalid payload")}return r}tryParse(e){try{return JSON.parse(e,this.reviver)}catch{return!1}}static isPayloadValid(e,n){switch(e){case Z.CONNECT:return typeof n=="object";case Z.DISCONNECT:return n===void 0;case Z.CONNECT_ERROR:return typeof n=="string"||typeof n=="object";case Z.EVENT:case Z.BINARY_EVENT:return Array.isArray(n)&&n.length>0;case Z.ACK:case Z.BINARY_ACK:return Array.isArray(n)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class IB{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const n=vB(this.reconPack,this.buffers);return this.finishedReconstruction(),n}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var _B=Object.freeze(Object.defineProperty({__proto__:null,protocol:wB,get PacketType(){return Z},Encoder:EB,Decoder:Dy},Symbol.toStringTag,{value:"Module"}));function Ht(t,e,n){return t.on(e,n),function(){t.off(e,n)}}const SB=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Ek extends Ne{constructor(e,n,r){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=n,r&&r.auth&&(this.auth=r.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[Ht(e,"open",this.onopen.bind(this)),Ht(e,"packet",this.onpacket.bind(this)),Ht(e,"error",this.onerror.bind(this)),Ht(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...n){if(SB.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');n.unshift(e);const r={type:Z.EVENT,data:n};if(r.options={},r.options.compress=this.flags.compress!==!1,typeof n[n.length-1]=="function"){const o=this.ids++,a=n.pop();this._registerAckCallback(o,a),r.id=o}const i=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!i||!this.connected)||(this.connected?(this.notifyOutgoingListeners(r),this.packet(r)):this.sendBuffer.push(r)),this.flags={},this}_registerAckCallback(e,n){const r=this.flags.timeout;if(r===void 0){this.acks[e]=n;return}const i=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===e&&this.sendBuffer.splice(s,1);n.call(this,new Error("operation has timed out"))},r);this.acks[e]=(...s)=>{this.io.clearTimeoutFn(i),n.apply(this,[null,...s])}}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this.packet({type:Z.CONNECT,data:e})}):this.packet({type:Z.CONNECT,data:this.auth})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,n){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,n)}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case Z.CONNECT:if(e.data&&e.data.sid){const i=e.data.sid;this.onconnect(i)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Z.EVENT:case Z.BINARY_EVENT:this.onevent(e);break;case Z.ACK:case Z.BINARY_ACK:this.onack(e);break;case Z.DISCONNECT:this.ondisconnect();break;case Z.CONNECT_ERROR:this.destroy();const r=new Error(e.data.message);r.data=e.data.data,this.emitReserved("connect_error",r);break}}onevent(e){const n=e.data||[];e.id!=null&&n.push(this.ack(e.id)),this.connected?this.emitEvent(n):this.receiveBuffer.push(Object.freeze(n))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const n=this._anyListeners.slice();for(const r of n)r.apply(this,e)}super.emit.apply(this,e)}ack(e){const n=this;let r=!1;return function(...i){r||(r=!0,n.packet({type:Z.ACK,id:e,data:i}))}}onack(e){const n=this.acks[e.id];typeof n=="function"&&(n.apply(this,e.data),delete this.acks[e.id])}onconnect(e){this.id=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Z.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const n=this._anyListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const n=this._anyOutgoingListeners;for(let r=0;r<n.length;r++)if(e===n[r])return n.splice(r,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const n=this._anyOutgoingListeners.slice();for(const r of n)r.apply(this,e.data)}}}function Io(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}Io.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=(Math.floor(e*10)&1)==0?t-n:t+n}return Math.min(t,this.max)|0};Io.prototype.reset=function(){this.attempts=0};Io.prototype.setMin=function(t){this.ms=t};Io.prototype.setMax=function(t){this.max=t};Io.prototype.setJitter=function(t){this.jitter=t};class Vp extends Ne{constructor(e,n){var r;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(n=e,e=void 0),n=n||{},n.path=n.path||"/socket.io",this.opts=n,od(this,n),this.reconnection(n.reconnection!==!1),this.reconnectionAttempts(n.reconnectionAttempts||1/0),this.reconnectionDelay(n.reconnectionDelay||1e3),this.reconnectionDelayMax(n.reconnectionDelayMax||5e3),this.randomizationFactor((r=n.randomizationFactor)!==null&&r!==void 0?r:.5),this.backoff=new Io({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(n.timeout==null?2e4:n.timeout),this._readyState="closed",this.uri=e;const i=n.parser||_B;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=n.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var n;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(n=this.backoff)===null||n===void 0||n.setMin(e),this)}randomizationFactor(e){var n;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(n=this.backoff)===null||n===void 0||n.setJitter(e),this)}reconnectionDelayMax(e){var n;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(n=this.backoff)===null||n===void 0||n.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new tr(this.uri,this.opts);const n=this.engine,r=this;this._readyState="opening",this.skipReconnect=!1;const i=Ht(n,"open",function(){r.onopen(),e&&e()}),s=Ht(n,"error",o=>{r.cleanup(),r._readyState="closed",this.emitReserved("error",o),e?e(o):r.maybeReconnectOnOpen()});if(this._timeout!==!1){const o=this._timeout;o===0&&i();const a=this.setTimeoutFn(()=>{i(),n.close(),n.emit("error",new Error("timeout"))},o);this.opts.autoUnref&&a.unref(),this.subs.push(function(){clearTimeout(a)})}return this.subs.push(i),this.subs.push(s),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(Ht(e,"ping",this.onping.bind(this)),Ht(e,"data",this.ondata.bind(this)),Ht(e,"error",this.onerror.bind(this)),Ht(e,"close",this.onclose.bind(this)),Ht(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(n){this.onclose("parse error",n)}}ondecoded(e){vk(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,n){let r=this.nsps[e];return r||(r=new Ek(this,e,n),this.nsps[e]=r),r}_destroy(e){const n=Object.keys(this.nsps);for(const r of n)if(this.nsps[r].active)return;this._close()}_packet(e){const n=this.encoder.encode(e);for(let r=0;r<n.length;r++)this.engine.write(n[r],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(e,n){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,n),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const n=this.backoff.duration();this._reconnecting=!0;const r=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(i=>{i?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",i)):e.onreconnect()}))},n);this.opts.autoUnref&&r.unref(),this.subs.push(function(){clearTimeout(r)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Qo={};function xs(t,e){typeof t=="object"&&(e=t,t=void 0),e=e||{};const n=dB(t,e.path||"/socket.io"),r=n.source,i=n.id,s=n.path,o=Qo[i]&&s in Qo[i].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let u;return a?u=new Vp(r,e):(Qo[i]||(Qo[i]=new Vp(r,e)),u=Qo[i]),n.query&&!e.query&&(e.query=n.queryKey),u.socket(n.path,e)}Object.assign(xs,{Manager:Vp,Socket:Ek,io:xs,connect:xs});function Ik(t,e){return function(){return t.apply(e,arguments)}}const{toString:_k}=Object.prototype,{getPrototypeOf:Oy}=Object,Py=(t=>e=>{const n=_k.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Hn=t=>(t=t.toLowerCase(),e=>Py(e)===t),ad=t=>e=>typeof e===t,{isArray:tl}=Array,Bp=ad("undefined");function TB(t){return t!==null&&!Bp(t)&&t.constructor!==null&&!Bp(t.constructor)&&_o(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Sk=Hn("ArrayBuffer");function bB(t){let e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Sk(t.buffer),e}const kB=ad("string"),_o=ad("function"),Tk=ad("number"),bk=t=>t!==null&&typeof t=="object",CB=t=>t===!0||t===!1,Jl=t=>{if(Py(t)!=="object")return!1;const e=Oy(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},AB=Hn("Date"),NB=Hn("File"),RB=Hn("Blob"),xB=Hn("FileList"),DB=t=>bk(t)&&_o(t.pipe),OB=t=>{const e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||_k.call(t)===e||_o(t.toString)&&t.toString()===e)},PB=Hn("URLSearchParams"),LB=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ud(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t=="undefined")return;let r,i;if(typeof t!="object"&&(t=[t]),tl(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(r=0;r<o;r++)a=s[r],e.call(null,t[a],a,t)}}function jp(){const t={},e=(n,r)=>{Jl(t[r])&&Jl(n)?t[r]=jp(t[r],n):Jl(n)?t[r]=jp({},n):tl(n)?t[r]=n.slice():t[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&ud(arguments[n],e);return t}const MB=(t,e,n,{allOwnKeys:r}={})=>(ud(e,(i,s)=>{n&&_o(i)?t[s]=Ik(i,n):t[s]=i},{allOwnKeys:r}),t),FB=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),$B=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},UB=(t,e,n,r)=>{let i,s,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Oy(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},VB=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},BB=t=>{if(!t)return null;if(tl(t))return t;let e=t.length;if(!Tk(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},jB=(t=>e=>t&&e instanceof t)(typeof Uint8Array!="undefined"&&Oy(Uint8Array)),qB=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},zB=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},WB=Hn("HTMLFormElement"),HB=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),fE=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),KB=Hn("RegExp"),kk=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ud(n,(i,s)=>{e(i,s,t)!==!1&&(r[s]=i)}),Object.defineProperties(t,r)},GB=t=>{kk(t,(e,n)=>{const r=t[n];if(!!_o(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},QB=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return tl(t)?r(t):r(String(t).split(e)),n},YB=()=>{},XB=(t,e)=>(t=+t,Number.isFinite(t)?t:e);var k={isArray:tl,isArrayBuffer:Sk,isBuffer:TB,isFormData:OB,isArrayBufferView:bB,isString:kB,isNumber:Tk,isBoolean:CB,isObject:bk,isPlainObject:Jl,isUndefined:Bp,isDate:AB,isFile:NB,isBlob:RB,isRegExp:KB,isFunction:_o,isStream:DB,isURLSearchParams:PB,isTypedArray:jB,isFileList:xB,forEach:ud,merge:jp,extend:MB,trim:LB,stripBOM:FB,inherits:$B,toFlatObject:UB,kindOf:Py,kindOfTest:Hn,endsWith:VB,toArray:BB,forEachEntry:qB,matchAll:zB,isHTMLForm:WB,hasOwnProperty:fE,hasOwnProp:fE,reduceDescriptors:kk,freezeMethods:GB,toObjectSet:QB,toCamelCase:HB,noop:YB,toFiniteNumber:XB};function ie(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}k.inherits(ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ck=ie.prototype,Ak={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Ak[t]={value:t}});Object.defineProperties(ie,Ak);Object.defineProperty(Ck,"isAxiosError",{value:!0});ie.from=(t,e,n,r,i,s)=>{const o=Object.create(Ck);return k.toFlatObject(t,o,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),ie.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var JB=typeof self=="object"?self.FormData:window.FormData;function qp(t){return k.isPlainObject(t)||k.isArray(t)}function Nk(t){return k.endsWith(t,"[]")?t.slice(0,-2):t}function pE(t,e,n){return t?t.concat(e).map(function(i,s){return i=Nk(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function ZB(t){return k.isArray(t)&&!t.some(qp)}const e2=k.toFlatObject(k,{},null,function(e){return/^is[A-Z]/.test(e)});function t2(t){return t&&k.isFunction(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator]}function ld(t,e,n){if(!k.isObject(t))throw new TypeError("target must be an object");e=e||new(JB||FormData),n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!k.isUndefined(m[v])});const r=n.metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob!="undefined"&&Blob)&&t2(e);if(!k.isFunction(i))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(k.isDate(g))return g.toISOString();if(!u&&k.isBlob(g))throw new ie("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(g)||k.isTypedArray(g)?u&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,m){let p=g;if(g&&!m&&typeof g=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(k.isArray(g)&&ZB(g)||k.isFileList(g)||k.endsWith(v,"[]")&&(p=k.toArray(g)))return v=Nk(v),p.forEach(function(E,S){!(k.isUndefined(E)||E===null)&&e.append(o===!0?pE([v],S,s):o===null?v:v+"[]",l(E))}),!1}return qp(g)?!0:(e.append(pE(m,v,s),l(g)),!1)}const h=[],d=Object.assign(e2,{defaultVisitor:c,convertValue:l,isVisitable:qp});function f(g,v){if(!k.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(g),k.forEach(g,function(p,y){(!(k.isUndefined(p)||p===null)&&i.call(e,p,k.isString(y)?y.trim():y,v,d))===!0&&f(p,v?v.concat(y):[y])}),h.pop()}}if(!k.isObject(t))throw new TypeError("data must be an object");return f(t),e}function mE(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Ly(t,e){this._pairs=[],t&&ld(t,this,e)}const Rk=Ly.prototype;Rk.append=function(e,n){this._pairs.push([e,n])};Rk.toString=function(e){const n=e?function(r){return e.call(this,r,mE)}:mE;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function n2(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xk(t,e,n){if(!e)return t;const r=n&&n.encode||n2,i=n&&n.serialize;let s;if(i?s=i(e,n):s=k.isURLSearchParams(e)?e.toString():new Ly(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class gE{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,function(r){r!==null&&e(r)})}}var Dk={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},r2=typeof URLSearchParams!="undefined"?URLSearchParams:Ly,i2=FormData;const s2=(()=>{let t;return typeof navigator!="undefined"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})();var Ln={isBrowser:!0,classes:{URLSearchParams:r2,FormData:i2,Blob},isStandardBrowserEnv:s2,protocols:["http","https","file","blob","url","data"]};function o2(t,e){return ld(t,new Ln.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Ln.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function a2(t){return k.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function u2(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Ok(t){function e(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),u=s>=n.length;return o=!o&&k.isArray(i)?i.length:o,u?(k.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!k.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&k.isArray(i[o])&&(i[o]=u2(i[o])),!a)}if(k.isFormData(t)&&k.isFunction(t.entries)){const n={};return k.forEachEntry(t,(r,i)=>{e(a2(r),i,n,0)}),n}return null}function l2(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new ie("Request failed with status code "+n.status,[ie.ERR_BAD_REQUEST,ie.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var c2=Ln.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const u=[];u.push(n+"="+encodeURIComponent(r)),k.isNumber(i)&&u.push("expires="+new Date(i).toGMTString()),k.isString(s)&&u.push("path="+s),k.isString(o)&&u.push("domain="+o),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function h2(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function d2(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Pk(t,e){return t&&!h2(e)?d2(t,e):e}var f2=Ln.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=k.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function nl(t,e,n){ie.call(this,t==null?"canceled":t,ie.ERR_CANCELED,e,n),this.name="CanceledError"}k.inherits(nl,ie,{__CANCEL__:!0});function p2(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}const m2=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var g2=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&m2[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e};const yE=Symbol("internals"),Lk=Symbol("defaults");function la(t){return t&&String(t).trim().toLowerCase()}function Zl(t){return t===!1||t==null?t:k.isArray(t)?t.map(Zl):String(t)}function y2(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}function vE(t,e,n,r){if(k.isFunction(r))return r.call(this,e,n);if(!!k.isString(e)){if(k.isString(r))return e.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(e)}}function v2(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function w2(t,e){const n=k.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}function Yo(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}function Ut(t,e){t&&this.set(t),this[Lk]=e||null}Object.assign(Ut.prototype,{set:function(t,e,n){const r=this;function i(s,o,a){const u=la(o);if(!u)throw new Error("header name must be a non-empty string");const l=Yo(r,u);l&&a!==!0&&(r[l]===!1||a===!1)||(r[l||o]=Zl(s))}return k.isPlainObject(t)?k.forEach(t,(s,o)=>{i(s,o,e)}):i(e,t,n),this},get:function(t,e){if(t=la(t),!t)return;const n=Yo(this,t);if(n){const r=this[n];if(!e)return r;if(e===!0)return y2(r);if(k.isFunction(e))return e.call(this,r,n);if(k.isRegExp(e))return e.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(t,e){if(t=la(t),t){const n=Yo(this,t);return!!(n&&(!e||vE(this,this[n],n,e)))}return!1},delete:function(t,e){const n=this;let r=!1;function i(s){if(s=la(s),s){const o=Yo(n,s);o&&(!e||vE(n,n[o],o,e))&&(delete n[o],r=!0)}}return k.isArray(t)?t.forEach(i):i(t),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(t){const e=this,n={};return k.forEach(this,(r,i)=>{const s=Yo(n,i);if(s){e[s]=Zl(r),delete e[i];return}const o=t?v2(i):String(i).trim();o!==i&&delete e[i],e[o]=Zl(r),n[o]=!0}),this},toJSON:function(t){const e=Object.create(null);return k.forEach(Object.assign({},this[Lk]||null,this),(n,r)=>{n==null||n===!1||(e[r]=t&&k.isArray(n)?n.join(", "):n)}),e}});Object.assign(Ut,{from:function(t){return k.isString(t)?new this(g2(t)):t instanceof this?t:new this(t)},accessor:function(t){const n=(this[yE]=this[yE]={accessors:{}}).accessors,r=this.prototype;function i(s){const o=la(s);n[o]||(w2(r,s),n[o]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}});Ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);k.freezeMethods(Ut.prototype);k.freezeMethods(Ut);function E2(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const l=Date.now(),c=r[s];o||(o=l),n[i]=u,r[i]=l;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),l-o<e)return;const f=c&&l-c;return f?Math.round(d*1e3/f):void 0}}function wE(t,e){let n=0;const r=E2(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,u=r(a),l=s<=o;n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:u||void 0,estimated:u&&o&&l?(o-s)/u:void 0};c[e?"download":"upload"]=!0,t(c)}}function EE(t){return new Promise(function(n,r){let i=t.data;const s=Ut.from(t.headers).normalize(),o=t.responseType;let a;function u(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}k.isFormData(i)&&Ln.isStandardBrowserEnv&&s.setContentType(!1);let l=new XMLHttpRequest;if(t.auth){const f=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+g))}const c=Pk(t.baseURL,t.url);l.open(t.method.toUpperCase(),xk(c,t.params,t.paramsSerializer),!0),l.timeout=t.timeout;function h(){if(!l)return;const f=Ut.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:t,request:l};l2(function(p){n(p),u()},function(p){r(p),u()},v),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){!l||(r(new ie("Request aborted",ie.ECONNABORTED,t,l)),l=null)},l.onerror=function(){r(new ie("Network Error",ie.ERR_NETWORK,t,l)),l=null},l.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Dk;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),r(new ie(g,v.clarifyTimeoutError?ie.ETIMEDOUT:ie.ECONNABORTED,t,l)),l=null},Ln.isStandardBrowserEnv){const f=(t.withCredentials||f2(c))&&t.xsrfCookieName&&c2.read(t.xsrfCookieName);f&&s.set(t.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&k.forEach(s.toJSON(),function(g,v){l.setRequestHeader(v,g)}),k.isUndefined(t.withCredentials)||(l.withCredentials=!!t.withCredentials),o&&o!=="json"&&(l.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&l.addEventListener("progress",wE(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",wE(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=f=>{!l||(r(!f||f.type?new nl(null,t,l):f),l.abort(),l=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const d=p2(c);if(d&&Ln.protocols.indexOf(d)===-1){r(new ie("Unsupported protocol "+d+":",ie.ERR_BAD_REQUEST,t));return}l.send(i||null)})}const IE={http:EE,xhr:EE};var _E={getAdapter:t=>{if(k.isString(t)){const e=IE[t];if(!t)throw Error(k.hasOwnProp(t)?`Adapter '${t}' is not available in the build`:`Can not resolve adapter '${t}'`);return e}if(!k.isFunction(t))throw new TypeError("adapter is not a function");return t},adapters:IE};const I2={"Content-Type":"application/x-www-form-urlencoded"};function _2(){let t;return typeof XMLHttpRequest!="undefined"?t=_E.getAdapter("xhr"):typeof process!="undefined"&&k.kindOf(process)==="process"&&(t=_E.getAdapter("http")),t}function S2(t,e,n){if(k.isString(t))try{return(e||JSON.parse)(t),k.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const So={transitional:Dk,adapter:_2(),transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=k.isObject(e);if(s&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return i&&i?JSON.stringify(Ok(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return o2(e,this.formSerializer).toString();if((a=k.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ld(a?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),S2(e)):e}],transformResponse:[function(e){const n=this.transitional||So.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&k.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?ie.from(a,ie.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ln.classes.FormData,Blob:Ln.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};k.forEach(["delete","get","head"],function(e){So.headers[e]={}});k.forEach(["post","put","patch"],function(e){So.headers[e]=k.merge(I2)});function af(t,e){const n=this||So,r=e||n,i=Ut.from(r.headers);let s=r.data;return k.forEach(t,function(a){s=a.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Mk(t){return!!(t&&t.__CANCEL__)}function uf(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new nl}function SE(t){return uf(t),t.headers=Ut.from(t.headers),t.data=af.call(t,t.transformRequest),(t.adapter||So.adapter)(t).then(function(r){return uf(t),r.data=af.call(t,t.transformResponse,r),r.headers=Ut.from(r.headers),r},function(r){return Mk(r)||(uf(t),r&&r.response&&(r.response.data=af.call(t,t.transformResponse,r.response),r.response.headers=Ut.from(r.response.headers))),Promise.reject(r)})}function _u(t,e){e=e||{};const n={};function r(l,c){return k.isPlainObject(l)&&k.isPlainObject(c)?k.merge(l,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function i(l){if(k.isUndefined(e[l])){if(!k.isUndefined(t[l]))return r(void 0,t[l])}else return r(t[l],e[l])}function s(l){if(!k.isUndefined(e[l]))return r(void 0,e[l])}function o(l){if(k.isUndefined(e[l])){if(!k.isUndefined(t[l]))return r(void 0,t[l])}else return r(void 0,e[l])}function a(l){if(l in e)return r(t[l],e[l]);if(l in t)return r(void 0,t[l])}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a};return k.forEach(Object.keys(t).concat(Object.keys(e)),function(c){const h=u[c]||i,d=h(c);k.isUndefined(d)&&h!==a||(n[c]=d)}),n}const Fk="1.1.3",My={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{My[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const TE={};My.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Fk+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(e===!1)throw new ie(i(o," has been removed"+(n?" in "+n:"")),ie.ERR_DEPRECATED);return n&&!TE[o]&&(TE[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function T2(t,e,n){if(typeof t!="object")throw new ie("options must be an object",ie.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const a=t[s],u=a===void 0||o(a,s,t);if(u!==!0)throw new ie("option "+s+" must be "+u,ie.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ie("Unknown option "+s,ie.ERR_BAD_OPTION)}}var zp={assertOptions:T2,validators:My};const Yn=zp.validators;class Ei{constructor(e){this.defaults=e,this.interceptors={request:new gE,response:new gE}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=_u(this.defaults,n);const{transitional:r,paramsSerializer:i}=n;r!==void 0&&zp.assertOptions(r,{silentJSONParsing:Yn.transitional(Yn.boolean),forcedJSONParsing:Yn.transitional(Yn.boolean),clarifyTimeoutError:Yn.transitional(Yn.boolean)},!1),i!==void 0&&zp.assertOptions(i,{encode:Yn.function,serialize:Yn.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();const s=n.headers&&k.merge(n.headers.common,n.headers[n.method]);s&&k.forEach(["delete","get","head","post","put","patch","common"],function(g){delete n.headers[g]}),n.headers=new Ut(n.headers,s);const o=[];let a=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(n)===!1||(a=a&&g.synchronous,o.unshift(g.fulfilled,g.rejected))});const u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});let l,c=0,h;if(!a){const f=[SE.bind(this),void 0];for(f.unshift.apply(f,o),f.push.apply(f,u),h=f.length,l=Promise.resolve(n);c<h;)l=l.then(f[c++],f[c++]);return l}h=o.length;let d=n;for(c=0;c<h;){const f=o[c++],g=o[c++];try{d=f(d)}catch(v){g.call(this,v);break}}try{l=SE.call(this,d)}catch(f){return Promise.reject(f)}for(c=0,h=u.length;c<h;)l=l.then(u[c++],u[c++]);return l}getUri(e){e=_u(this.defaults,e);const n=Pk(e.baseURL,e.url);return xk(n,e.params,e.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(e){Ei.prototype[e]=function(n,r){return this.request(_u(r||{},{method:e,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,a){return this.request(_u(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ei.prototype[e]=n(),Ei.prototype[e+"Form"]=n(!0)});class Fy{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,a){r.reason||(r.reason=new nl(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Fy(function(i){e=i}),cancel:e}}}function b2(t){return function(n){return t.apply(null,n)}}function k2(t){return k.isObject(t)&&t.isAxiosError===!0}function $k(t){const e=new Ei(t),n=Ik(Ei.prototype.request,e);return k.extend(n,Ei.prototype,e,{allOwnKeys:!0}),k.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return $k(_u(t,i))},n}const Dt=$k(So);Dt.Axios=Ei;Dt.CanceledError=nl;Dt.CancelToken=Fy;Dt.isCancel=Mk;Dt.VERSION=Fk;Dt.toFormData=ld;Dt.AxiosError=ie;Dt.Cancel=Dt.CanceledError;Dt.all=function(e){return Promise.all(e)};Dt.spread=b2;Dt.isAxiosError=k2;Dt.formToJSON=t=>Ok(k.isHTMLForm(t)?new FormData(t):t);window.location.host.startsWith("localhost")?xs.connect("http://localhost:80"):window.location.host.startsWith("192.168.1.90")||window.location.host.startsWith("127")?xs.connect("http://192.168.1.90:80"):window.location.host.startsWith("rimell")?xs.connect("https://rimell.cc/tmdash"):console.log("request coming from incorrect site");const C2=X.exports.createContext();function A2(t){return MV("root",{preventScroll:!0}),Q(C2.Provider,{value:{},children:t.children})}const N2=X.exports.lazy(()=>S_(()=>import("./Dashboard.6c62bd98.js"),["assets/Dashboard.6c62bd98.js","assets/jquery.a7cfb2de.js"])),R2=X.exports.lazy(()=>S_(()=>import("./Instructions.7ed7870e.js"),["assets/Instructions.7ed7870e.js","assets/jquery.a7cfb2de.js"]));function x2(){return X.exports.useState(0),Ft(A2,{children:[Q(eV,{}),Q(X.exports.Suspense,{fallback:Q(qU,{}),children:Ft("div",{className:"App",children:[Q(Nav,{}),Ft(Routes,{children:[Q(Route,{path:"/",element:Q(N2,{})}),Q(Route,{path:"/instructions",element:Q(R2,{})})]})]})})]})}/**
 * @remix-run/router v1.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wp(){return Wp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wp.apply(this,arguments)}var pi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pi||(pi={}));const bE="popstate";function D2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Hp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:P2(i)}return L2(e,n,null,t)}function O2(){return Math.random().toString(36).substr(2,8)}function kE(t){return{usr:t.state,key:t.key}}function Hp(t,e,n,r){return n===void 0&&(n=null),Wp({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Uk(e):e,{state:n,key:e&&e.key||r||O2()})}function P2(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Uk(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function L2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pi.Pop,u=null;function l(){a=pi.Pop,u&&u({action:a,location:d.location})}function c(f,g){a=pi.Push;let v=Hp(d.location,f,g);n&&n(v,f);let m=kE(v),p=d.createHref(v);try{o.pushState(m,"",p)}catch{i.location.assign(p)}s&&u&&u({action:a,location:v})}function h(f,g){a=pi.Replace;let v=Hp(d.location,f,g);n&&n(v,f);let m=kE(v),p=d.createHref(v);o.replaceState(m,"",p),s&&u&&u({action:a,location:v})}let d={get action(){return a},get location(){return t(i,o)},listen(f){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(bE,l),u=f,()=>{i.removeEventListener(bE,l),u=null}},createHref(f){return e(i,f)},push:c,replace:h,go(f){return o.go(f)}};return d}var CE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(CE||(CE={}));function M2(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function F2(t,e){if(t===!1||t===null||typeof t=="undefined")throw new Error(e)}/**
 * React Router v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const U2=typeof Object.is=="function"?Object.is:$2,{useState:V2,useEffect:B2,useLayoutEffect:j2,useDebugValue:q2}=cf;function z2(t,e,n){const r=e(),[{inst:i},s]=V2({inst:{value:r,getSnapshot:e}});return j2(()=>{i.value=r,i.getSnapshot=e,lf(i)&&s({inst:i})},[t,r,e]),B2(()=>(lf(i)&&s({inst:i}),t(()=>{lf(i)&&s({inst:i})})),[t]),q2(r),r}function lf(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!U2(n,r)}catch{return!0}}function W2(t,e,n){return e()}const H2=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",K2=!H2,G2=K2?W2:z2;"useSyncExternalStore"in cf&&(t=>t.useSyncExternalStore)(cf);const Q2=X.exports.createContext(null),Vk=X.exports.createContext(null);function Y2(){return X.exports.useContext(Vk)!=null}var AE;(function(t){t.UseRevalidator="useRevalidator"})(AE||(AE={}));var NE;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(NE||(NE={}));function X2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pi.Pop,navigator:s,static:o=!1}=t;Y2()&&F2(!1);let a=e.replace(/^\/*/,"/"),u=X.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Uk(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:f="default"}=r,g=X.exports.useMemo(()=>{let v=M2(l,a);return v==null?null:{pathname:v,search:c,hash:h,state:d,key:f}},[a,l,c,h,d,f]);return g==null?null:X.exports.createElement(Q2.Provider,{value:u},X.exports.createElement(Vk.Provider,{children:n,value:{location:g,navigationType:i}}))}var RE;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(RE||(RE={}));new Promise(()=>{});/**
 * React Router DOM v6.4.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function J2(t){let{basename:e,children:n,window:r}=t,i=X.exports.useRef();i.current==null&&(i.current=D2({window:r,v5Compat:!0}));let s=i.current,[o,a]=X.exports.useState({action:s.action,location:s.location});return X.exports.useLayoutEffect(()=>s.listen(a),[s]),X.exports.createElement(X2,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var xE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(xE||(xE={}));var DE;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(DE||(DE={}));KA.render(Q(rn.StrictMode,{children:Q(J2,{children:Q(x2,{})})}),document.getElementById("root"));export{jU as F,Q as j};
