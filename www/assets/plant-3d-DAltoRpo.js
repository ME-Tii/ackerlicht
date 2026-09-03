import{An as e,Ar as t,At as n,C as r,Cr as i,Ct as a,D as o,Dn as s,Dr as c,Dt as l,E as u,En as d,Er as f,F as p,Ft as m,G as h,Hn as g,It as _,Jn as v,Jt as y,L as b,M as x,Mn as S,N as C,Nt as w,O as T,Or as E,Ot as D,P as O,Pt as k,Qn as A,R as j,Rn as ee,S as M,Sr as N,St as te,T as P,Tn as ne,Tr as re,V as ie,Vn as ae,Wt as F,Yt as oe,_ as I,ar as se,b as L,br as R,bt as z,c as ce,cr as le,dr as ue,dt as de,fr as fe,ft as pe,g as B,gr as me,h as he,hr as V,ir as ge,jn as _e,jr as ve,k as ye,kr as be,kt as xe,l as Se,lt as Ce,mr as we,or as Te,pr as Ee,pt as De,r as Oe,rr as ke,rt as Ae,u as H,ur as je,ut as Me,vr as Ne,vt as U,w as Pe,wr as W,x as Fe,xr as G,xt as Ie,y as K,yr as Le,yt as Re,zn as ze}from"./three.core-CuH04lZW.js";import{t as q}from"./BufferGeometryUtils-DLLUqnoI.js";var Be=Object.defineProperty,J=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),Y=(e,t)=>{let n={};for(var r in e)Be(n,r,{get:e[r],enumerable:!0});return t||Be(n,Symbol.toStringTag,{value:`Module`}),n},Ve=J((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=M(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ne={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ne,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:te}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),He=J(((e,t)=>{t.exports=Ve()})),Ue=J((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),We=J(((e,t)=>{t.exports=Ue()})),Ge=[{kind:`tomate`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-harzfeuer`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Harzfeuer'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-matina`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Matina'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-moneymaker`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Moneymaker'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-san-marzano`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'San Marzano'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-roma`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Roma'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-berner-rose`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Berner Rose'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-black-cherry`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Black Cherry'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-green-zebra`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Green Zebra'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-ochsenherz`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Ochsenherz'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-zuckertraube`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Zuckertraube'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-philovita`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Philovita'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-resi`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Resi'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-quedlinburger-fruehe`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Quedlinburger Frühe'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-yellow-pear`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Yellow Pear'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`tomate-indigo-rose`,group:`Gemüse`,subgroup:`Tomate`,label:`Tomate 'Indigo Rose'`,w:.35,h:.35,fill:`#c45c40`,bar:!1,shape:`plant`},{kind:`cocktailtomate`,group:`Gemüse`,subgroup:`Tomate`,label:`Cocktailtomate`,w:.35,h:.35,fill:`#d06048`,bar:!1,shape:`plant`},{kind:`cocktailtomate-sweet-million`,group:`Gemüse`,subgroup:`Tomate`,label:`Cocktailtomate 'Sweet Million'`,w:.35,h:.35,fill:`#d06048`,bar:!1,shape:`plant`},{kind:`cocktailtomate-tumbling-tom`,group:`Gemüse`,subgroup:`Tomate`,label:`Cocktailtomate 'Tumbling Tom'`,w:.35,h:.35,fill:`#d06048`,bar:!1,shape:`plant`},{kind:`cocktailtomate-gartenperle`,group:`Gemüse`,subgroup:`Tomate`,label:`Cocktailtomate 'Gartenperle'`,w:.35,h:.35,fill:`#d06048`,bar:!1,shape:`plant`},{kind:`cocktailtomate-cherry-roma`,group:`Gemüse`,subgroup:`Tomate`,label:`Cocktailtomate 'Cherry Roma'`,w:.35,h:.35,fill:`#d06048`,bar:!1,shape:`plant`},{kind:`paprika`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-neusiedler-ideal`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'Neusiedler Ideal'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-california-wonder`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'California Wonder'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-pusztagold`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'Pusztagold'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-corno-di-toro`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'Corno di Toro'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-gypsy`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'Gypsy'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-yolo-wonder`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'Yolo Wonder'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`paprika-blocky-red`,group:`Gemüse`,subgroup:`Paprika`,label:`Paprika 'Blocky Red'`,w:.35,h:.35,fill:`#d4a030`,bar:!1,shape:`plant`},{kind:`chili`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`chili-de-cayenne`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili 'De Cayenne'`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`chili-habanero`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili 'Habanero'`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`chili-jalape-o`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili 'Jalapeño'`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`chili-hungarian-hot-wax`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili 'Hungarian Hot Wax'`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`chili-bhut-jolokia`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili 'Bhut Jolokia'`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`chili-padron`,group:`Gemüse`,subgroup:`Paprika`,label:`Chili 'Padron'`,w:.35,h:.35,fill:`#c03028`,bar:!1,shape:`plant`},{kind:`gurke`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-marketmore`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'Marketmore'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-chinese-slangen`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'Chinese Slangen'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-beth-alpha`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'Beth Alpha'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-iznik`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'Iznik'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-hoffmans-produktiva`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'Hoffmans Produktiva'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-la-diva`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'La Diva'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`gurke-gergana`,group:`Gemüse`,subgroup:`Gurke`,label:`Gurke 'Gergana'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`einlegegurke`,group:`Gemüse`,subgroup:`Gurke`,label:`Einlegegurke`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`einlegegurke-vorgebirgstrauben`,group:`Gemüse`,subgroup:`Gurke`,label:`Einlegegurke 'Vorgebirgstrauben'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`einlegegurke-eva`,group:`Gemüse`,subgroup:`Gurke`,label:`Einlegegurke 'Eva'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`einlegegurke-conda`,group:`Gemüse`,subgroup:`Gurke`,label:`Einlegegurke 'Conda'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`zucchini`,group:`Gemüse`,subgroup:`Zucchini`,label:`Zucchini`,w:.35,h:.35,fill:`#5a9a40`,bar:!1,shape:`plant`},{kind:`zucchini-black-beauty`,group:`Gemüse`,subgroup:`Zucchini`,label:`Zucchini 'Black Beauty'`,w:.35,h:.35,fill:`#5a9a40`,bar:!1,shape:`plant`},{kind:`zucchini-gold-rush`,group:`Gemüse`,subgroup:`Zucchini`,label:`Zucchini 'Gold Rush'`,w:.35,h:.35,fill:`#5a9a40`,bar:!1,shape:`plant`},{kind:`zucchini-cocozelle`,group:`Gemüse`,subgroup:`Zucchini`,label:`Zucchini 'Cocozelle'`,w:.35,h:.35,fill:`#5a9a40`,bar:!1,shape:`plant`},{kind:`zucchini-tondo-di-nizza`,group:`Gemüse`,subgroup:`Zucchini`,label:`Zucchini 'Tondo di Nizza'`,w:.35,h:.35,fill:`#5a9a40`,bar:!1,shape:`plant`},{kind:`zucchini-partenon`,group:`Gemüse`,subgroup:`Zucchini`,label:`Zucchini 'Partenon'`,w:.35,h:.35,fill:`#5a9a40`,bar:!1,shape:`plant`},{kind:`kuerbis`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-hokkaido-uchiki-kuri`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Hokkaido Uchiki Kuri'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-butternut`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Butternut'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-muscade-de-provence`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Muscade de Provence'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-roter-zentner`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Roter Zentner'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-patisson`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Patisson'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-spaghetti`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Spaghetti'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-atlantic-giant`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Atlantic Giant'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`kuerbis-sweet-dumpling`,group:`Gemüse`,subgroup:`Kürbis`,label:`Kürbis 'Sweet Dumpling'`,w:.35,h:.35,fill:`#d07030`,bar:!1,shape:`plant`},{kind:`melone`,group:`Gemüse`,subgroup:`Kürbis`,label:`Melone`,w:.35,h:.35,fill:`#e0c050`,bar:!1,shape:`plant`},{kind:`melone-cantaloupe`,group:`Gemüse`,subgroup:`Kürbis`,label:`Melone 'Cantaloupe'`,w:.35,h:.35,fill:`#e0c050`,bar:!1,shape:`plant`},{kind:`melone-honigmelone`,group:`Gemüse`,subgroup:`Kürbis`,label:`Melone 'Honigmelone'`,w:.35,h:.35,fill:`#e0c050`,bar:!1,shape:`plant`},{kind:`melone-wassermelone-crimson-sweet`,group:`Gemüse`,subgroup:`Kürbis`,label:`Melone 'Wassermelone Crimson Sweet'`,w:.35,h:.35,fill:`#e0c050`,bar:!1,shape:`plant`},{kind:`melone-sugar-baby`,group:`Gemüse`,subgroup:`Kürbis`,label:`Melone 'Sugar Baby'`,w:.35,h:.35,fill:`#e0c050`,bar:!1,shape:`plant`},{kind:`aubergine`,group:`Gemüse`,subgroup:`Aubergine`,label:`Aubergine`,w:.35,h:.35,fill:`#5a3060`,bar:!1,shape:`plant`},{kind:`aubergine-black-beauty`,group:`Gemüse`,subgroup:`Aubergine`,label:`Aubergine 'Black Beauty'`,w:.35,h:.35,fill:`#5a3060`,bar:!1,shape:`plant`},{kind:`aubergine-listada-de-gandia`,group:`Gemüse`,subgroup:`Aubergine`,label:`Aubergine 'Listada de Gandia'`,w:.35,h:.35,fill:`#5a3060`,bar:!1,shape:`plant`},{kind:`aubergine-white-egg`,group:`Gemüse`,subgroup:`Aubergine`,label:`Aubergine 'White Egg'`,w:.35,h:.35,fill:`#5a3060`,bar:!1,shape:`plant`},{kind:`aubergine-rosa-bianca`,group:`Gemüse`,subgroup:`Aubergine`,label:`Aubergine 'Rosa Bianca'`,w:.35,h:.35,fill:`#5a3060`,bar:!1,shape:`plant`},{kind:`zuckermais`,group:`Gemüse`,subgroup:`Mais`,label:`Zuckermais`,w:.35,h:.35,fill:`#e0c040`,bar:!1,shape:`plant`},{kind:`zuckermais-golden-bantam`,group:`Gemüse`,subgroup:`Mais`,label:`Zuckermais 'Golden Bantam'`,w:.35,h:.35,fill:`#e0c040`,bar:!1,shape:`plant`},{kind:`zuckermais-damaun`,group:`Gemüse`,subgroup:`Mais`,label:`Zuckermais 'Damaun'`,w:.35,h:.35,fill:`#e0c040`,bar:!1,shape:`plant`},{kind:`zuckermais-mezdi`,group:`Gemüse`,subgroup:`Mais`,label:`Zuckermais 'Mezdi'`,w:.35,h:.35,fill:`#e0c040`,bar:!1,shape:`plant`},{kind:`zuckermais-tatonka`,group:`Gemüse`,subgroup:`Mais`,label:`Zuckermais 'Tatonka'`,w:.35,h:.35,fill:`#e0c040`,bar:!1,shape:`plant`},{kind:`kartoffel`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-nicola`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Nicola'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-linda`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Linda'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-agria`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Agria'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-rosara`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Rosara'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-blau-schlotte`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Blau Schlotte'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-annabelle`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Annabelle'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-princess`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Princess'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-sieglinde`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Sieglinde'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-desiree`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Desiree'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-laura`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Laura'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`kartoffel-bamberger-hoernchen`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Kartoffel 'Bamberger Hörnchen'`,w:4,h:2.4,fill:`#c4a068`,bar:!1,shape:`bed`},{kind:`suesskartoffel`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Süßkartoffel`,w:3,h:2,fill:`#d08050`,bar:!1,shape:`bed`},{kind:`suesskartoffel-beauregard`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Süßkartoffel 'Beauregard'`,w:3,h:2,fill:`#d08050`,bar:!1,shape:`bed`},{kind:`suesskartoffel-erato-white`,group:`Gemüse`,subgroup:`Kartoffel`,label:`Süßkartoffel 'Erato White'`,w:3,h:2,fill:`#d08050`,bar:!1,shape:`bed`},{kind:`moehre`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-nantaise`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Nantaise'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-rote-riesen`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Rote Riesen'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-oxhella`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Oxhella'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-purple-haze`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Purple Haze'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-yellowstone`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Yellowstone'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-jaune-du-doubs`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Jaune du Doubs'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-early-nantes`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Early Nantes'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`moehre-chantenay`,group:`Gemüse`,subgroup:`Wurzel`,label:`Möhre 'Chantenay'`,w:.35,h:.35,fill:`#e07030`,bar:!1,shape:`plant`},{kind:`pastinake`,group:`Gemüse`,subgroup:`Wurzel`,label:`Pastinake`,w:.35,h:.35,fill:`#efe0c0`,bar:!1,shape:`plant`},{kind:`pastinake-halblange-weisse`,group:`Gemüse`,subgroup:`Wurzel`,label:`Pastinake 'Halblange Weiße'`,w:.35,h:.35,fill:`#efe0c0`,bar:!1,shape:`plant`},{kind:`pastinake-white-gem`,group:`Gemüse`,subgroup:`Wurzel`,label:`Pastinake 'White Gem'`,w:.35,h:.35,fill:`#efe0c0`,bar:!1,shape:`plant`},{kind:`pastinake-aromata`,group:`Gemüse`,subgroup:`Wurzel`,label:`Pastinake 'Aromata'`,w:.35,h:.35,fill:`#efe0c0`,bar:!1,shape:`plant`},{kind:`petersilienwurzel`,group:`Gemüse`,subgroup:`Wurzel`,label:`Petersilienwurzel`,w:.35,h:.35,fill:`#d8d0b0`,bar:!1,shape:`plant`},{kind:`petersilienwurzel-halblange`,group:`Gemüse`,subgroup:`Wurzel`,label:`Petersilienwurzel 'Halblange'`,w:.35,h:.35,fill:`#d8d0b0`,bar:!1,shape:`plant`},{kind:`petersilienwurzel-eagle`,group:`Gemüse`,subgroup:`Wurzel`,label:`Petersilienwurzel 'Eagle'`,w:.35,h:.35,fill:`#d8d0b0`,bar:!1,shape:`plant`},{kind:`rettich`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rettich`,w:.35,h:.35,fill:`#eee8e0`,bar:!1,shape:`plant`},{kind:`rettich-ostergruss`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rettich 'Ostergruß'`,w:.35,h:.35,fill:`#eee8e0`,bar:!1,shape:`plant`},{kind:`rettich-runder-schwarzer`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rettich 'Runder Schwarzer'`,w:.35,h:.35,fill:`#eee8e0`,bar:!1,shape:`plant`},{kind:`rettich-minowase`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rettich 'Minowase'`,w:.35,h:.35,fill:`#eee8e0`,bar:!1,shape:`plant`},{kind:`rettich-muenchner-bier`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rettich 'Münchner Bier'`,w:.35,h:.35,fill:`#eee8e0`,bar:!1,shape:`plant`},{kind:`radieschen`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`radieschen-sora`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen 'Sora'`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`radieschen-raxe`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen 'Raxe'`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`radieschen-french-breakfast`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen 'French Breakfast'`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`radieschen-eiszapfen`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen 'Eiszapfen'`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`radieschen-cherry-belle`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen 'Cherry Belle'`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`radieschen-rudi`,group:`Gemüse`,subgroup:`Wurzel`,label:`Radieschen 'Rudi'`,w:.35,h:.35,fill:`#d04040`,bar:!1,shape:`plant`},{kind:`rote-bete`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rote Bete`,w:.35,h:.35,fill:`#7a2040`,bar:!1,shape:`plant`},{kind:`rote-bete-rote-kugel`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rote Bete 'Rote Kugel'`,w:.35,h:.35,fill:`#7a2040`,bar:!1,shape:`plant`},{kind:`rote-bete-tonda-di-chioggia`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rote Bete 'Tonda di Chioggia'`,w:.35,h:.35,fill:`#7a2040`,bar:!1,shape:`plant`},{kind:`rote-bete-golden-beet`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rote Bete 'Golden Beet'`,w:.35,h:.35,fill:`#7a2040`,bar:!1,shape:`plant`},{kind:`rote-bete-cylindra`,group:`Gemüse`,subgroup:`Wurzel`,label:`Rote Bete 'Cylindra'`,w:.35,h:.35,fill:`#7a2040`,bar:!1,shape:`plant`},{kind:`sellerie`,group:`Gemüse`,subgroup:`Wurzel`,label:`Sellerie`,w:.35,h:.35,fill:`#80a060`,bar:!1,shape:`plant`},{kind:`sellerie-prager-riesen`,group:`Gemüse`,subgroup:`Wurzel`,label:`Sellerie 'Prager Riesen'`,w:.35,h:.35,fill:`#80a060`,bar:!1,shape:`plant`},{kind:`sellerie-tall-utah`,group:`Gemüse`,subgroup:`Wurzel`,label:`Sellerie 'Tall Utah'`,w:.35,h:.35,fill:`#80a060`,bar:!1,shape:`plant`},{kind:`sellerie-ibis`,group:`Gemüse`,subgroup:`Wurzel`,label:`Sellerie 'Ibis'`,w:.35,h:.35,fill:`#80a060`,bar:!1,shape:`plant`},{kind:`sellerie-mars`,group:`Gemüse`,subgroup:`Wurzel`,label:`Sellerie 'Mars'`,w:.35,h:.35,fill:`#80a060`,bar:!1,shape:`plant`},{kind:`kohlrabi`,group:`Gemüse`,subgroup:`Wurzel`,label:`Kohlrabi`,w:.35,h:.35,fill:`#80b070`,bar:!1,shape:`plant`},{kind:`kohlrabi-blaril`,group:`Gemüse`,subgroup:`Wurzel`,label:`Kohlrabi 'Blaril'`,w:.35,h:.35,fill:`#80b070`,bar:!1,shape:`plant`},{kind:`kohlrabi-superschmelz`,group:`Gemüse`,subgroup:`Wurzel`,label:`Kohlrabi 'Superschmelz'`,w:.35,h:.35,fill:`#80b070`,bar:!1,shape:`plant`},{kind:`kohlrabi-azur-star`,group:`Gemüse`,subgroup:`Wurzel`,label:`Kohlrabi 'Azur-Star'`,w:.35,h:.35,fill:`#80b070`,bar:!1,shape:`plant`},{kind:`kohlrabi-delikatess-weisser`,group:`Gemüse`,subgroup:`Wurzel`,label:`Kohlrabi 'Delikateß Weißer'`,w:.35,h:.35,fill:`#80b070`,bar:!1,shape:`plant`},{kind:`zwiebel`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`zwiebel-stuttgarter-riesen`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel 'Stuttgarter Riesen'`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`zwiebel-red-baron`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel 'Red Baron'`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`zwiebel-braunschweiger`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel 'Braunschweiger'`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`zwiebel-tropea`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel 'Tropea'`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`zwiebel-exhibition`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel 'Exhibition'`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`zwiebel-birnformige`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Zwiebel 'Birnformige'`,w:.35,h:.35,fill:`#d8c070`,bar:!1,shape:`plant`},{kind:`lauch`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Lauch`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`lauch-blaugruener-winter`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Lauch 'Blaugrüner Winter'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`lauch-hannibal`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Lauch 'Hannibal'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`lauch-elefant`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Lauch 'Elefant'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`lauch-lyon`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Lauch 'Lyon'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`knoblauch`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Knoblauch`,w:.35,h:.35,fill:`#efe8d8`,bar:!1,shape:`plant`},{kind:`knoblauch-thermidrome`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Knoblauch 'Thermidrome'`,w:.35,h:.35,fill:`#efe8d8`,bar:!1,shape:`plant`},{kind:`knoblauch-printanor`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Knoblauch 'Printanor'`,w:.35,h:.35,fill:`#efe8d8`,bar:!1,shape:`plant`},{kind:`knoblauch-violet-de-cadours`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Knoblauch 'Violet de Cadours'`,w:.35,h:.35,fill:`#efe8d8`,bar:!1,shape:`plant`},{kind:`schalotte`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Schalotte`,w:.35,h:.35,fill:`#d0a060`,bar:!1,shape:`plant`},{kind:`schalotte-golden-gourmet`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Schalotte 'Golden Gourmet'`,w:.35,h:.35,fill:`#d0a060`,bar:!1,shape:`plant`},{kind:`schalotte-red-sun`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Schalotte 'Red Sun'`,w:.35,h:.35,fill:`#d0a060`,bar:!1,shape:`plant`},{kind:`fruehlingszwiebel`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Frühlingszwiebel`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`fruehlingszwiebel-white-lisbon`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Frühlingszwiebel 'White Lisbon'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`fruehlingszwiebel-ishikura`,group:`Gemüse`,subgroup:`Zwiebel`,label:`Frühlingszwiebel 'Ishikura'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`weisskohl`,group:`Gemüse`,subgroup:`Kohl`,label:`Weißkohl`,w:.35,h:.35,fill:`#d8e0d0`,bar:!1,shape:`plant`},{kind:`weisskohl-donar`,group:`Gemüse`,subgroup:`Kohl`,label:`Weißkohl 'Donar'`,w:.35,h:.35,fill:`#d8e0d0`,bar:!1,shape:`plant`},{kind:`weisskohl-filderkraut`,group:`Gemüse`,subgroup:`Kohl`,label:`Weißkohl 'Filderkraut'`,w:.35,h:.35,fill:`#d8e0d0`,bar:!1,shape:`plant`},{kind:`weisskohl-marner-lagerweiss`,group:`Gemüse`,subgroup:`Kohl`,label:`Weißkohl 'Marner Lagerweiß'`,w:.35,h:.35,fill:`#d8e0d0`,bar:!1,shape:`plant`},{kind:`weisskohl-brunswijker`,group:`Gemüse`,subgroup:`Kohl`,label:`Weißkohl 'Brunswijker'`,w:.35,h:.35,fill:`#d8e0d0`,bar:!1,shape:`plant`},{kind:`rotkohl`,group:`Gemüse`,subgroup:`Kohl`,label:`Rotkohl`,w:.35,h:.35,fill:`#7a3060`,bar:!1,shape:`plant`},{kind:`rotkohl-marner-lagerrot`,group:`Gemüse`,subgroup:`Kohl`,label:`Rotkohl 'Marner Lagerrot'`,w:.35,h:.35,fill:`#7a3060`,bar:!1,shape:`plant`},{kind:`rotkohl-kalibos`,group:`Gemüse`,subgroup:`Kohl`,label:`Rotkohl 'Kalibos'`,w:.35,h:.35,fill:`#7a3060`,bar:!1,shape:`plant`},{kind:`rotkohl-rodynda`,group:`Gemüse`,subgroup:`Kohl`,label:`Rotkohl 'Rodynda'`,w:.35,h:.35,fill:`#7a3060`,bar:!1,shape:`plant`},{kind:`wirsing`,group:`Gemüse`,subgroup:`Kohl`,label:`Wirsing`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`wirsing-vertus`,group:`Gemüse`,subgroup:`Kohl`,label:`Wirsing 'Vertus'`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`wirsing-smaragd`,group:`Gemüse`,subgroup:`Kohl`,label:`Wirsing 'Smaragd'`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`wirsing-vorbote`,group:`Gemüse`,subgroup:`Kohl`,label:`Wirsing 'Vorbote'`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`blumenkohl`,group:`Gemüse`,subgroup:`Kohl`,label:`Blumenkohl`,w:.35,h:.35,fill:`#f0eee0`,bar:!1,shape:`plant`},{kind:`blumenkohl-erfurter-zwerg`,group:`Gemüse`,subgroup:`Kohl`,label:`Blumenkohl 'Erfurter Zwerg'`,w:.35,h:.35,fill:`#f0eee0`,bar:!1,shape:`plant`},{kind:`blumenkohl-snowball`,group:`Gemüse`,subgroup:`Kohl`,label:`Blumenkohl 'Snowball'`,w:.35,h:.35,fill:`#f0eee0`,bar:!1,shape:`plant`},{kind:`blumenkohl-romanesco`,group:`Gemüse`,subgroup:`Kohl`,label:`Blumenkohl 'Romanesco'`,w:.35,h:.35,fill:`#f0eee0`,bar:!1,shape:`plant`},{kind:`brokkoli`,group:`Gemüse`,subgroup:`Kohl`,label:`Brokkoli`,w:.35,h:.35,fill:`#3a6a38`,bar:!1,shape:`plant`},{kind:`brokkoli-calabrese`,group:`Gemüse`,subgroup:`Kohl`,label:`Brokkoli 'Calabrese'`,w:.35,h:.35,fill:`#3a6a38`,bar:!1,shape:`plant`},{kind:`brokkoli-parthenon`,group:`Gemüse`,subgroup:`Kohl`,label:`Brokkoli 'Parthenon'`,w:.35,h:.35,fill:`#3a6a38`,bar:!1,shape:`plant`},{kind:`brokkoli-santee`,group:`Gemüse`,subgroup:`Kohl`,label:`Brokkoli 'Santee'`,w:.35,h:.35,fill:`#3a6a38`,bar:!1,shape:`plant`},{kind:`rosenkohl`,group:`Gemüse`,subgroup:`Kohl`,label:`Rosenkohl`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`rosenkohl-groninger`,group:`Gemüse`,subgroup:`Kohl`,label:`Rosenkohl 'Groninger'`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`rosenkohl-hilds-ideal`,group:`Gemüse`,subgroup:`Kohl`,label:`Rosenkohl 'Hilds Ideal'`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`rosenkohl-igor`,group:`Gemüse`,subgroup:`Kohl`,label:`Rosenkohl 'Igor'`,w:.35,h:.35,fill:`#4a7a40`,bar:!1,shape:`plant`},{kind:`gruenkohl`,group:`Gemüse`,subgroup:`Kohl`,label:`Grünkohl`,w:.35,h:.35,fill:`#2e5a28`,bar:!1,shape:`plant`},{kind:`gruenkohl-westlandse-winter`,group:`Gemüse`,subgroup:`Kohl`,label:`Grünkohl 'Westlandse Winter'`,w:.35,h:.35,fill:`#2e5a28`,bar:!1,shape:`plant`},{kind:`gruenkohl-halbhoher-gruener-krauser`,group:`Gemüse`,subgroup:`Kohl`,label:`Grünkohl 'Halbhoher Grüner Krauser'`,w:.35,h:.35,fill:`#2e5a28`,bar:!1,shape:`plant`},{kind:`gruenkohl-redbor`,group:`Gemüse`,subgroup:`Kohl`,label:`Grünkohl 'Redbor'`,w:.35,h:.35,fill:`#2e5a28`,bar:!1,shape:`plant`},{kind:`chinakohl`,group:`Gemüse`,subgroup:`Kohl`,label:`Chinakohl`,w:.35,h:.35,fill:`#c8d8b0`,bar:!1,shape:`plant`},{kind:`chinakohl-hilton`,group:`Gemüse`,subgroup:`Kohl`,label:`Chinakohl 'Hilton'`,w:.35,h:.35,fill:`#c8d8b0`,bar:!1,shape:`plant`},{kind:`chinakohl-parkin`,group:`Gemüse`,subgroup:`Kohl`,label:`Chinakohl 'Parkin'`,w:.35,h:.35,fill:`#c8d8b0`,bar:!1,shape:`plant`},{kind:`pak-choi`,group:`Gemüse`,subgroup:`Kohl`,label:`Pak Choi`,w:.35,h:.35,fill:`#80a050`,bar:!1,shape:`plant`},{kind:`pak-choi-joi-choi`,group:`Gemüse`,subgroup:`Kohl`,label:`Pak Choi 'Joi Choi'`,w:.35,h:.35,fill:`#80a050`,bar:!1,shape:`plant`},{kind:`pak-choi-tai-sai`,group:`Gemüse`,subgroup:`Kohl`,label:`Pak Choi 'Tai Sai'`,w:.35,h:.35,fill:`#80a050`,bar:!1,shape:`plant`},{kind:`kohlrabi-herbst`,group:`Gemüse`,subgroup:`Kohl`,label:`Kohlrabi-Herbst`,w:.35,h:.35,fill:`#90c080`,bar:!1,shape:`plant`},{kind:`kohlrabi-herbst-kossak`,group:`Gemüse`,subgroup:`Kohl`,label:`Kohlrabi-Herbst 'Kossak'`,w:.35,h:.35,fill:`#90c080`,bar:!1,shape:`plant`},{kind:`kohlrabi-herbst-blaril-extra`,group:`Gemüse`,subgroup:`Kohl`,label:`Kohlrabi-Herbst 'Blaril Extra'`,w:.35,h:.35,fill:`#90c080`,bar:!1,shape:`plant`},{kind:`spinat`,group:`Gemüse`,subgroup:`Blatt`,label:`Spinat`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`spinat-matador`,group:`Gemüse`,subgroup:`Blatt`,label:`Spinat 'Matador'`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`spinat-butterfly`,group:`Gemüse`,subgroup:`Blatt`,label:`Spinat 'Butterfly'`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`spinat-emilia`,group:`Gemüse`,subgroup:`Blatt`,label:`Spinat 'Emilia'`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`spinat-winterriesen`,group:`Gemüse`,subgroup:`Blatt`,label:`Spinat 'Winterriesen'`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`mangold`,group:`Gemüse`,subgroup:`Blatt`,label:`Mangold`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`mangold-lucullus`,group:`Gemüse`,subgroup:`Blatt`,label:`Mangold 'Lucullus'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`mangold-bright-lights`,group:`Gemüse`,subgroup:`Blatt`,label:`Mangold 'Bright Lights'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`mangold-verde-a-costa-bianca`,group:`Gemüse`,subgroup:`Blatt`,label:`Mangold 'Verde a Costa Bianca'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`mangold-rhubarb-chard`,group:`Gemüse`,subgroup:`Blatt`,label:`Mangold 'Rhubarb Chard'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`rucola`,group:`Gemüse`,subgroup:`Blatt`,label:`Rucola`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`rucola-wilder-rucola`,group:`Gemüse`,subgroup:`Blatt`,label:`Rucola 'Wilder Rucola'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`rucola-coltivata`,group:`Gemüse`,subgroup:`Blatt`,label:`Rucola 'Coltivata'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`rucola-runway`,group:`Gemüse`,subgroup:`Blatt`,label:`Rucola 'Runway'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`postelein`,group:`Gemüse`,subgroup:`Blatt`,label:`Postelein`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`postelein-golder-glatt`,group:`Gemüse`,subgroup:`Blatt`,label:`Postelein 'Golder Glatt'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`postelein-dunkelgruener`,group:`Gemüse`,subgroup:`Blatt`,label:`Postelein 'Dunkelgrüner'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`asiasalat`,group:`Gemüse`,subgroup:`Blatt`,label:`Asiasalat`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`asiasalat-mizuna`,group:`Gemüse`,subgroup:`Blatt`,label:`Asiasalat 'Mizuna'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`asiasalat-tatsoi`,group:`Gemüse`,subgroup:`Blatt`,label:`Asiasalat 'Tatsoi'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`asiasalat-red-giant`,group:`Gemüse`,subgroup:`Blatt`,label:`Asiasalat 'Red Giant'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`asiasalat-komatsuna`,group:`Gemüse`,subgroup:`Blatt`,label:`Asiasalat 'Komatsuna'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`kopfsalat`,group:`Gemüse`,subgroup:`Salat`,label:`Kopfsalat`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kopfsalat-maikoenig`,group:`Gemüse`,subgroup:`Salat`,label:`Kopfsalat 'Maikönig'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kopfsalat-marvel-of-four-seasons`,group:`Gemüse`,subgroup:`Salat`,label:`Kopfsalat 'Marvel of Four Seasons'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kopfsalat-trotzkopf`,group:`Gemüse`,subgroup:`Salat`,label:`Kopfsalat 'Trotzkopf'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kopfsalat-kagraner-sommer`,group:`Gemüse`,subgroup:`Salat`,label:`Kopfsalat 'Kagraner Sommer'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kopfsalat-butterhead`,group:`Gemüse`,subgroup:`Salat`,label:`Kopfsalat 'Butterhead'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`batavia`,group:`Gemüse`,subgroup:`Salat`,label:`Batavia`,w:.35,h:.35,fill:`#70b058`,bar:!1,shape:`plant`},{kind:`batavia-mariska`,group:`Gemüse`,subgroup:`Salat`,label:`Batavia 'Mariska'`,w:.35,h:.35,fill:`#70b058`,bar:!1,shape:`plant`},{kind:`batavia-loma`,group:`Gemüse`,subgroup:`Salat`,label:`Batavia 'Loma'`,w:.35,h:.35,fill:`#70b058`,bar:!1,shape:`plant`},{kind:`batavia-dor-e-de-printemps`,group:`Gemüse`,subgroup:`Salat`,label:`Batavia 'Dorée de Printemps'`,w:.35,h:.35,fill:`#70b058`,bar:!1,shape:`plant`},{kind:`eichblatt`,group:`Gemüse`,subgroup:`Salat`,label:`Eichblatt`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`eichblatt-red-salad-bowl`,group:`Gemüse`,subgroup:`Salat`,label:`Eichblatt 'Red Salad Bowl'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`eichblatt-green-salad-bowl`,group:`Gemüse`,subgroup:`Salat`,label:`Eichblatt 'Green Salad Bowl'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`eichblatt-ojja`,group:`Gemüse`,subgroup:`Salat`,label:`Eichblatt 'Ojja'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`romana`,group:`Gemüse`,subgroup:`Salat`,label:`Romana`,w:.35,h:.35,fill:`#68a848`,bar:!1,shape:`plant`},{kind:`romana-valmaine`,group:`Gemüse`,subgroup:`Salat`,label:`Romana 'Valmaine'`,w:.35,h:.35,fill:`#68a848`,bar:!1,shape:`plant`},{kind:`romana-little-gem`,group:`Gemüse`,subgroup:`Salat`,label:`Romana 'Little Gem'`,w:.35,h:.35,fill:`#68a848`,bar:!1,shape:`plant`},{kind:`romana-paris-island`,group:`Gemüse`,subgroup:`Salat`,label:`Romana 'Paris Island'`,w:.35,h:.35,fill:`#68a848`,bar:!1,shape:`plant`},{kind:`endivie`,group:`Gemüse`,subgroup:`Salat`,label:`Endivie`,w:.35,h:.35,fill:`#80b060`,bar:!1,shape:`plant`},{kind:`endivie-escariol`,group:`Gemüse`,subgroup:`Salat`,label:`Endivie 'Escariol'`,w:.35,h:.35,fill:`#80b060`,bar:!1,shape:`plant`},{kind:`endivie-nuance`,group:`Gemüse`,subgroup:`Salat`,label:`Endivie 'Nuance'`,w:.35,h:.35,fill:`#80b060`,bar:!1,shape:`plant`},{kind:`endivie-wallonne`,group:`Gemüse`,subgroup:`Salat`,label:`Endivie 'Wallonne'`,w:.35,h:.35,fill:`#80b060`,bar:!1,shape:`plant`},{kind:`radicchio`,group:`Gemüse`,subgroup:`Salat`,label:`Radicchio`,w:.35,h:.35,fill:`#a04050`,bar:!1,shape:`plant`},{kind:`radicchio-palla-rossa`,group:`Gemüse`,subgroup:`Salat`,label:`Radicchio 'Palla Rossa'`,w:.35,h:.35,fill:`#a04050`,bar:!1,shape:`plant`},{kind:`radicchio-treviso`,group:`Gemüse`,subgroup:`Salat`,label:`Radicchio 'Treviso'`,w:.35,h:.35,fill:`#a04050`,bar:!1,shape:`plant`},{kind:`radicchio-castelfranco`,group:`Gemüse`,subgroup:`Salat`,label:`Radicchio 'Castelfranco'`,w:.35,h:.35,fill:`#a04050`,bar:!1,shape:`plant`},{kind:`zuckerhut`,group:`Gemüse`,subgroup:`Salat`,label:`Zuckerhut`,w:.35,h:.35,fill:`#c8d890`,bar:!1,shape:`plant`},{kind:`zuckerhut-uranus`,group:`Gemüse`,subgroup:`Salat`,label:`Zuckerhut 'Uranus'`,w:.35,h:.35,fill:`#c8d890`,bar:!1,shape:`plant`},{kind:`zuckerhut-eros`,group:`Gemüse`,subgroup:`Salat`,label:`Zuckerhut 'Eros'`,w:.35,h:.35,fill:`#c8d890`,bar:!1,shape:`plant`},{kind:`buschbohne`,group:`Gemüse`,subgroup:`Hülsen`,label:`Buschbohne`,w:.35,h:.35,fill:`#4a8a38`,bar:!1,shape:`plant`},{kind:`buschbohne-saxa`,group:`Gemüse`,subgroup:`Hülsen`,label:`Buschbohne 'Saxa'`,w:.35,h:.35,fill:`#4a8a38`,bar:!1,shape:`plant`},{kind:`buschbohne-purple-teepee`,group:`Gemüse`,subgroup:`Hülsen`,label:`Buschbohne 'Purple Teepee'`,w:.35,h:.35,fill:`#4a8a38`,bar:!1,shape:`plant`},{kind:`buschbohne-maxi`,group:`Gemüse`,subgroup:`Hülsen`,label:`Buschbohne 'Maxi'`,w:.35,h:.35,fill:`#4a8a38`,bar:!1,shape:`plant`},{kind:`buschbohne-cupidon`,group:`Gemüse`,subgroup:`Hülsen`,label:`Buschbohne 'Cupidon'`,w:.35,h:.35,fill:`#4a8a38`,bar:!1,shape:`plant`},{kind:`buschbohne-borlotto`,group:`Gemüse`,subgroup:`Hülsen`,label:`Buschbohne 'Borlotto'`,w:.35,h:.35,fill:`#4a8a38`,bar:!1,shape:`plant`},{kind:`stangenbohne`,group:`Gemüse`,subgroup:`Hülsen`,label:`Stangenbohne`,w:.35,h:.35,fill:`#3a7a30`,bar:!1,shape:`plant`},{kind:`stangenbohne-neckarkoenigin`,group:`Gemüse`,subgroup:`Hülsen`,label:`Stangenbohne 'Neckarkönigin'`,w:.35,h:.35,fill:`#3a7a30`,bar:!1,shape:`plant`},{kind:`stangenbohne-blauhilde`,group:`Gemüse`,subgroup:`Hülsen`,label:`Stangenbohne 'Blauhilde'`,w:.35,h:.35,fill:`#3a7a30`,bar:!1,shape:`plant`},{kind:`stangenbohne-meraviglia-di-venezia`,group:`Gemüse`,subgroup:`Hülsen`,label:`Stangenbohne 'Meraviglia di Venezia'`,w:.35,h:.35,fill:`#3a7a30`,bar:!1,shape:`plant`},{kind:`stangenbohne-kentucky-wonder`,group:`Gemüse`,subgroup:`Hülsen`,label:`Stangenbohne 'Kentucky Wonder'`,w:.35,h:.35,fill:`#3a7a30`,bar:!1,shape:`plant`},{kind:`feuerbohne`,group:`Gemüse`,subgroup:`Hülsen`,label:`Feuerbohne`,w:.35,h:.35,fill:`#c04040`,bar:!1,shape:`plant`},{kind:`feuerbohne-preisgewinner`,group:`Gemüse`,subgroup:`Hülsen`,label:`Feuerbohne 'Preisgewinner'`,w:.35,h:.35,fill:`#c04040`,bar:!1,shape:`plant`},{kind:`feuerbohne-lady-di`,group:`Gemüse`,subgroup:`Hülsen`,label:`Feuerbohne 'Lady Di'`,w:.35,h:.35,fill:`#c04040`,bar:!1,shape:`plant`},{kind:`erbse`,group:`Gemüse`,subgroup:`Hülsen`,label:`Erbse`,w:.35,h:.35,fill:`#6aaa48`,bar:!1,shape:`plant`},{kind:`erbse-wunder-von-kelvedon`,group:`Gemüse`,subgroup:`Hülsen`,label:`Erbse 'Wunder von Kelvedon'`,w:.35,h:.35,fill:`#6aaa48`,bar:!1,shape:`plant`},{kind:`erbse-alderman`,group:`Gemüse`,subgroup:`Hülsen`,label:`Erbse 'Alderman'`,w:.35,h:.35,fill:`#6aaa48`,bar:!1,shape:`plant`},{kind:`erbse-ambrosia`,group:`Gemüse`,subgroup:`Hülsen`,label:`Erbse 'Ambrosia'`,w:.35,h:.35,fill:`#6aaa48`,bar:!1,shape:`plant`},{kind:`erbse-norli`,group:`Gemüse`,subgroup:`Hülsen`,label:`Erbse 'Norli'`,w:.35,h:.35,fill:`#6aaa48`,bar:!1,shape:`plant`},{kind:`erbse-blauwschokker`,group:`Gemüse`,subgroup:`Hülsen`,label:`Erbse 'Blauwschokker'`,w:.35,h:.35,fill:`#6aaa48`,bar:!1,shape:`plant`},{kind:`zuckererbse`,group:`Gemüse`,subgroup:`Hülsen`,label:`Zuckererbse`,w:.35,h:.35,fill:`#80c050`,bar:!1,shape:`plant`},{kind:`zuckererbse-norli`,group:`Gemüse`,subgroup:`Hülsen`,label:`Zuckererbse 'Norli'`,w:.35,h:.35,fill:`#80c050`,bar:!1,shape:`plant`},{kind:`zuckererbse-sweet-horizon`,group:`Gemüse`,subgroup:`Hülsen`,label:`Zuckererbse 'Sweet Horizon'`,w:.35,h:.35,fill:`#80c050`,bar:!1,shape:`plant`},{kind:`zuckererbse-oregon-sugar-pod`,group:`Gemüse`,subgroup:`Hülsen`,label:`Zuckererbse 'Oregon Sugar Pod'`,w:.35,h:.35,fill:`#80c050`,bar:!1,shape:`plant`},{kind:`dicke-bohne`,group:`Gemüse`,subgroup:`Hülsen`,label:`Dicke Bohne`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`dicke-bohne-hangdown`,group:`Gemüse`,subgroup:`Hülsen`,label:`Dicke Bohne 'Hangdown'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`dicke-bohne-witkiem`,group:`Gemüse`,subgroup:`Hülsen`,label:`Dicke Bohne 'Witkiem'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`dicke-bohne-the-sutton`,group:`Gemüse`,subgroup:`Hülsen`,label:`Dicke Bohne 'The Sutton'`,w:.35,h:.35,fill:`#5a8a40`,bar:!1,shape:`plant`},{kind:`linse`,group:`Gemüse`,subgroup:`Hülsen`,label:`Linse`,w:.35,h:.35,fill:`#8a6a40`,bar:!1,shape:`plant`},{kind:`linse-anicia`,group:`Gemüse`,subgroup:`Hülsen`,label:`Linse 'Anicia'`,w:.35,h:.35,fill:`#8a6a40`,bar:!1,shape:`plant`},{kind:`linse-beluga`,group:`Gemüse`,subgroup:`Hülsen`,label:`Linse 'Beluga'`,w:.35,h:.35,fill:`#8a6a40`,bar:!1,shape:`plant`},{kind:`kichererbse`,group:`Gemüse`,subgroup:`Hülsen`,label:`Kichererbse`,w:.35,h:.35,fill:`#d0b070`,bar:!1,shape:`plant`},{kind:`kichererbse-principe`,group:`Gemüse`,subgroup:`Hülsen`,label:`Kichererbse 'Principe'`,w:.35,h:.35,fill:`#d0b070`,bar:!1,shape:`plant`},{kind:`kichererbse-garbanzo`,group:`Gemüse`,subgroup:`Hülsen`,label:`Kichererbse 'Garbanzo'`,w:.35,h:.35,fill:`#d0b070`,bar:!1,shape:`plant`},{kind:`fenchel`,group:`Gemüse`,subgroup:`Spross`,label:`Fenchel`,w:.35,h:.35,fill:`#d0e0b0`,bar:!1,shape:`plant`},{kind:`fenchel-zefa-fino`,group:`Gemüse`,subgroup:`Spross`,label:`Fenchel 'Zefa Fino'`,w:.35,h:.35,fill:`#d0e0b0`,bar:!1,shape:`plant`},{kind:`fenchel-doux-de-florence`,group:`Gemüse`,subgroup:`Spross`,label:`Fenchel 'Doux de Florence'`,w:.35,h:.35,fill:`#d0e0b0`,bar:!1,shape:`plant`},{kind:`fenchel-cantino`,group:`Gemüse`,subgroup:`Spross`,label:`Fenchel 'Cantino'`,w:.35,h:.35,fill:`#d0e0b0`,bar:!1,shape:`plant`},{kind:`spargel`,group:`Gemüse`,subgroup:`Spross`,label:`Spargel`,w:.35,h:.35,fill:`#d8d0a0`,bar:!1,shape:`plant`},{kind:`spargel-schwetzinger-meisterschuss`,group:`Gemüse`,subgroup:`Spross`,label:`Spargel 'Schwetzinger Meisterschuss'`,w:.35,h:.35,fill:`#d8d0a0`,bar:!1,shape:`plant`},{kind:`spargel-gijnlim`,group:`Gemüse`,subgroup:`Spross`,label:`Spargel 'Gijnlim'`,w:.35,h:.35,fill:`#d8d0a0`,bar:!1,shape:`plant`},{kind:`spargel-backlim`,group:`Gemüse`,subgroup:`Spross`,label:`Spargel 'Backlim'`,w:.35,h:.35,fill:`#d8d0a0`,bar:!1,shape:`plant`},{kind:`artischocke`,group:`Gemüse`,subgroup:`Spross`,label:`Artischocke`,w:.35,h:.35,fill:`#5a8a48`,bar:!1,shape:`plant`},{kind:`artischocke-green-globe`,group:`Gemüse`,subgroup:`Spross`,label:`Artischocke 'Green Globe'`,w:.35,h:.35,fill:`#5a8a48`,bar:!1,shape:`plant`},{kind:`artischocke-violet-de-provence`,group:`Gemüse`,subgroup:`Spross`,label:`Artischocke 'Violet de Provence'`,w:.35,h:.35,fill:`#5a8a48`,bar:!1,shape:`plant`},{kind:`rhabarber`,group:`Gemüse`,subgroup:`Spross`,label:`Rhabarber`,w:.35,h:.35,fill:`#c04050`,bar:!1,shape:`plant`},{kind:`rhabarber-holsteiner-blut`,group:`Gemüse`,subgroup:`Spross`,label:`Rhabarber 'Holsteiner Blut'`,w:.35,h:.35,fill:`#c04050`,bar:!1,shape:`plant`},{kind:`rhabarber-goliath`,group:`Gemüse`,subgroup:`Spross`,label:`Rhabarber 'Goliath'`,w:.35,h:.35,fill:`#c04050`,bar:!1,shape:`plant`},{kind:`rhabarber-livingstone`,group:`Gemüse`,subgroup:`Spross`,label:`Rhabarber 'Livingstone'`,w:.35,h:.35,fill:`#c04050`,bar:!1,shape:`plant`},{kind:`topinambur`,group:`Gemüse`,subgroup:`Spross`,label:`Topinambur`,w:.35,h:.35,fill:`#d8c080`,bar:!1,shape:`plant`},{kind:`topinambur-gute-gelbe`,group:`Gemüse`,subgroup:`Spross`,label:`Topinambur 'Gute Gelbe'`,w:.35,h:.35,fill:`#d8c080`,bar:!1,shape:`plant`},{kind:`topinambur-rote-zonenkugel`,group:`Gemüse`,subgroup:`Spross`,label:`Topinambur 'Rote Zonenkugel'`,w:.35,h:.35,fill:`#d8c080`,bar:!1,shape:`plant`},{kind:`meerrettich`,group:`Gemüse`,subgroup:`Spross`,label:`Meerrettich`,w:.35,h:.35,fill:`#e8e0d0`,bar:!1,shape:`plant`},{kind:`meerrettich-bauernmeerrettich`,group:`Gemüse`,subgroup:`Spross`,label:`Meerrettich 'Bauernmeerrettich'`,w:.35,h:.35,fill:`#e8e0d0`,bar:!1,shape:`plant`},{kind:`meerrettich-java`,group:`Gemüse`,subgroup:`Spross`,label:`Meerrettich 'Java'`,w:.35,h:.35,fill:`#e8e0d0`,bar:!1,shape:`plant`},{kind:`basilikum`,group:`Kräuter`,subgroup:`Küche`,label:`Basilikum`,w:.35,h:.35,fill:`#3a8a40`,bar:!1,shape:`plant`},{kind:`basilikum-genoveser`,group:`Kräuter`,subgroup:`Küche`,label:`Basilikum 'Genoveser'`,w:.35,h:.35,fill:`#3a8a40`,bar:!1,shape:`plant`},{kind:`basilikum-thai`,group:`Kräuter`,subgroup:`Küche`,label:`Basilikum 'Thai'`,w:.35,h:.35,fill:`#3a8a40`,bar:!1,shape:`plant`},{kind:`basilikum-rote-opal`,group:`Kräuter`,subgroup:`Küche`,label:`Basilikum 'Rote Opal'`,w:.35,h:.35,fill:`#3a8a40`,bar:!1,shape:`plant`},{kind:`basilikum-zitronenbasilikum`,group:`Kräuter`,subgroup:`Küche`,label:`Basilikum 'Zitronenbasilikum'`,w:.35,h:.35,fill:`#3a8a40`,bar:!1,shape:`plant`},{kind:`basilikum-cinamon`,group:`Kräuter`,subgroup:`Küche`,label:`Basilikum 'Cinamon'`,w:.35,h:.35,fill:`#3a8a40`,bar:!1,shape:`plant`},{kind:`petersilie`,group:`Kräuter`,subgroup:`Küche`,label:`Petersilie`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`petersilie-mooskrause`,group:`Kräuter`,subgroup:`Küche`,label:`Petersilie 'Mooskrause'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`petersilie-gigante-d-italia`,group:`Kräuter`,subgroup:`Küche`,label:`Petersilie 'Gigante d Italia'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`petersilie-simple`,group:`Kräuter`,subgroup:`Küche`,label:`Petersilie 'Simple'`,w:.35,h:.35,fill:`#3a7a38`,bar:!1,shape:`plant`},{kind:`schnittlauch`,group:`Kräuter`,subgroup:`Küche`,label:`Schnittlauch`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`schnittlauch-polyvit`,group:`Kräuter`,subgroup:`Küche`,label:`Schnittlauch 'Polyvit'`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`schnittlauch-mittelgrober`,group:`Kräuter`,subgroup:`Küche`,label:`Schnittlauch 'Mittelgrober'`,w:.35,h:.35,fill:`#2e6a30`,bar:!1,shape:`plant`},{kind:`dill`,group:`Kräuter`,subgroup:`Küche`,label:`Dill`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`dill-tetra`,group:`Kräuter`,subgroup:`Küche`,label:`Dill 'Tetra'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`dill-mammoth`,group:`Kräuter`,subgroup:`Küche`,label:`Dill 'Mammoth'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`dill-sari`,group:`Kräuter`,subgroup:`Küche`,label:`Dill 'Sari'`,w:.35,h:.35,fill:`#5a9a48`,bar:!1,shape:`plant`},{kind:`koriander`,group:`Kräuter`,subgroup:`Küche`,label:`Koriander`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`koriander-thueringer`,group:`Kräuter`,subgroup:`Küche`,label:`Koriander 'Thüringer'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`koriander-santo`,group:`Kräuter`,subgroup:`Küche`,label:`Koriander 'Santo'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`koriander-lemon`,group:`Kräuter`,subgroup:`Küche`,label:`Koriander 'Lemon'`,w:.35,h:.35,fill:`#4a8a40`,bar:!1,shape:`plant`},{kind:`kerbel`,group:`Kräuter`,subgroup:`Küche`,label:`Kerbel`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kerbel-verdon`,group:`Kräuter`,subgroup:`Küche`,label:`Kerbel 'Verdon'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`kerbel-einfacher`,group:`Kräuter`,subgroup:`Küche`,label:`Kerbel 'Einfacher'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`bohnenkraut`,group:`Kräuter`,subgroup:`Küche`,label:`Bohnenkraut`,w:.35,h:.35,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`bohnenkraut-aromatisches`,group:`Kräuter`,subgroup:`Küche`,label:`Bohnenkraut 'Aromatisches'`,w:.35,h:.35,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`bohnenkraut-satureja`,group:`Kräuter`,subgroup:`Küche`,label:`Bohnenkraut 'Satureja'`,w:.35,h:.35,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`oregano`,group:`Kräuter`,subgroup:`Küche`,label:`Oregano`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`oregano-griechischer`,group:`Kräuter`,subgroup:`Küche`,label:`Oregano 'Griechischer'`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`oregano-hot-spicy`,group:`Kräuter`,subgroup:`Küche`,label:`Oregano 'Hot & Spicy'`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`oregano-thumbles`,group:`Kräuter`,subgroup:`Küche`,label:`Oregano 'Thumbles'`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`majoran`,group:`Kräuter`,subgroup:`Küche`,label:`Majoran`,w:.35,h:.35,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`majoran-natura`,group:`Kräuter`,subgroup:`Küche`,label:`Majoran 'Natura'`,w:.35,h:.35,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`majoran-erfurter`,group:`Kräuter`,subgroup:`Küche`,label:`Majoran 'Erfurter'`,w:.35,h:.35,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`thymian`,group:`Kräuter`,subgroup:`Küche`,label:`Thymian`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`thymian-deutscher-winter`,group:`Kräuter`,subgroup:`Küche`,label:`Thymian 'Deutscher Winter'`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`thymian-lemon`,group:`Kräuter`,subgroup:`Küche`,label:`Thymian 'Lemon'`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`thymian-orange`,group:`Kräuter`,subgroup:`Küche`,label:`Thymian 'Orange'`,w:.35,h:.35,fill:`#4a6a38`,bar:!1,shape:`plant`},{kind:`rosmarin`,group:`Kräuter`,subgroup:`Küche`,label:`Rosmarin`,w:.35,h:.35,fill:`#2e5a30`,bar:!1,shape:`plant`},{kind:`rosmarin-arp`,group:`Kräuter`,subgroup:`Küche`,label:`Rosmarin 'Arp'`,w:.35,h:.35,fill:`#2e5a30`,bar:!1,shape:`plant`},{kind:`rosmarin-blue-winter`,group:`Kräuter`,subgroup:`Küche`,label:`Rosmarin 'Blue Winter'`,w:.35,h:.35,fill:`#2e5a30`,bar:!1,shape:`plant`},{kind:`rosmarin-hill-hardy`,group:`Kräuter`,subgroup:`Küche`,label:`Rosmarin 'Hill Hardy'`,w:.35,h:.35,fill:`#2e5a30`,bar:!1,shape:`plant`},{kind:`salbei`,group:`Kräuter`,subgroup:`Küche`,label:`Salbei`,w:.35,h:.35,fill:`#5a7a50`,bar:!1,shape:`plant`},{kind:`salbei-berggarten`,group:`Kräuter`,subgroup:`Küche`,label:`Salbei 'Berggarten'`,w:.35,h:.35,fill:`#5a7a50`,bar:!1,shape:`plant`},{kind:`salbei-purpurascens`,group:`Kräuter`,subgroup:`Küche`,label:`Salbei 'Purpurascens'`,w:.35,h:.35,fill:`#5a7a50`,bar:!1,shape:`plant`},{kind:`salbei-tricolor`,group:`Kräuter`,subgroup:`Küche`,label:`Salbei 'Tricolor'`,w:.35,h:.35,fill:`#5a7a50`,bar:!1,shape:`plant`},{kind:`minze`,group:`Kräuter`,subgroup:`Küche`,label:`Minze`,w:.35,h:.35,fill:`#3a8a48`,bar:!1,shape:`plant`},{kind:`minze-marokkanische`,group:`Kräuter`,subgroup:`Küche`,label:`Minze 'Marokkanische'`,w:.35,h:.35,fill:`#3a8a48`,bar:!1,shape:`plant`},{kind:`minze-pfefferminze`,group:`Kräuter`,subgroup:`Küche`,label:`Minze 'Pfefferminze'`,w:.35,h:.35,fill:`#3a8a48`,bar:!1,shape:`plant`},{kind:`minze-apfelminze`,group:`Kräuter`,subgroup:`Küche`,label:`Minze 'Apfelminze'`,w:.35,h:.35,fill:`#3a8a48`,bar:!1,shape:`plant`},{kind:`minze-orangenminze`,group:`Kräuter`,subgroup:`Küche`,label:`Minze 'Orangenminze'`,w:.35,h:.35,fill:`#3a8a48`,bar:!1,shape:`plant`},{kind:`zitronenmelisse`,group:`Kräuter`,subgroup:`Küche`,label:`Zitronenmelisse`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`zitronenmelisse-citronella`,group:`Kräuter`,subgroup:`Küche`,label:`Zitronenmelisse 'Citronella'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`zitronenmelisse-lime`,group:`Kräuter`,subgroup:`Küche`,label:`Zitronenmelisse 'Lime'`,w:.35,h:.35,fill:`#6aaa50`,bar:!1,shape:`plant`},{kind:`estragon`,group:`Kräuter`,subgroup:`Küche`,label:`Estragon`,w:.35,h:.35,fill:`#4a7a38`,bar:!1,shape:`plant`},{kind:`estragon-deutscher`,group:`Kräuter`,subgroup:`Küche`,label:`Estragon 'Deutscher'`,w:.35,h:.35,fill:`#4a7a38`,bar:!1,shape:`plant`},{kind:`estragon-franzoesischer`,group:`Kräuter`,subgroup:`Küche`,label:`Estragon 'Französischer'`,w:.35,h:.35,fill:`#4a7a38`,bar:!1,shape:`plant`},{kind:`liebstoeckel`,group:`Kräuter`,subgroup:`Küche`,label:`Liebstöckel`,w:.35,h:.35,fill:`#3a6a30`,bar:!1,shape:`plant`},{kind:`liebstoeckel-maggikraut`,group:`Kräuter`,subgroup:`Küche`,label:`Liebstöckel 'Maggikraut'`,w:.35,h:.35,fill:`#3a6a30`,bar:!1,shape:`plant`},{kind:`liebstoeckel-levisticum`,group:`Kräuter`,subgroup:`Küche`,label:`Liebstöckel 'Levisticum'`,w:.35,h:.35,fill:`#3a6a30`,bar:!1,shape:`plant`},{kind:`lorbeer`,group:`Kräuter`,subgroup:`Küche`,label:`Lorbeer`,w:.8,h:.8,fill:`#2e5a28`,bar:!1,shape:`shrub`},{kind:`lorbeer-laurus-nobilis`,group:`Kräuter`,subgroup:`Küche`,label:`Lorbeer 'Laurus nobilis'`,w:.8,h:.8,fill:`#2e5a28`,bar:!1,shape:`shrub`},{kind:`kamille`,group:`Kräuter`,subgroup:`Heil`,label:`Kamille`,w:.35,h:.35,fill:`#e8e050`,bar:!1,shape:`plant`},{kind:`kamille-bodegold`,group:`Kräuter`,subgroup:`Heil`,label:`Kamille 'Bodegold'`,w:.35,h:.35,fill:`#e8e050`,bar:!1,shape:`plant`},{kind:`kamille-diploid`,group:`Kräuter`,subgroup:`Heil`,label:`Kamille 'Diploid'`,w:.35,h:.35,fill:`#e8e050`,bar:!1,shape:`plant`},{kind:`ringelblume`,group:`Kräuter`,subgroup:`Heil`,label:`Ringelblume`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`ringelblume-pacific-beauty`,group:`Kräuter`,subgroup:`Heil`,label:`Ringelblume 'Pacific Beauty'`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`ringelblume-orange-king`,group:`Kräuter`,subgroup:`Heil`,label:`Ringelblume 'Orange King'`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`johanniskraut`,group:`Kräuter`,subgroup:`Heil`,label:`Johanniskraut`,w:.35,h:.35,fill:`#d0c040`,bar:!1,shape:`plant`},{kind:`johanniskraut-hypericum`,group:`Kräuter`,subgroup:`Heil`,label:`Johanniskraut 'Hypericum'`,w:.35,h:.35,fill:`#d0c040`,bar:!1,shape:`plant`},{kind:`lavendel`,group:`Kräuter`,subgroup:`Heil`,label:`Lavendel`,w:.5,h:.5,fill:`#7060a0`,bar:!1,shape:`shrub`},{kind:`lavendel-hidcote`,group:`Kräuter`,subgroup:`Heil`,label:`Lavendel 'Hidcote'`,w:.5,h:.5,fill:`#7060a0`,bar:!1,shape:`shrub`},{kind:`lavendel-munstead`,group:`Kräuter`,subgroup:`Heil`,label:`Lavendel 'Munstead'`,w:.5,h:.5,fill:`#7060a0`,bar:!1,shape:`shrub`},{kind:`lavendel-grosso`,group:`Kräuter`,subgroup:`Heil`,label:`Lavendel 'Grosso'`,w:.5,h:.5,fill:`#7060a0`,bar:!1,shape:`shrub`},{kind:`baldrian`,group:`Kräuter`,subgroup:`Heil`,label:`Baldrian`,w:.35,h:.35,fill:`#90a070`,bar:!1,shape:`plant`},{kind:`baldrian-valeriana`,group:`Kräuter`,subgroup:`Heil`,label:`Baldrian 'Valeriana'`,w:.35,h:.35,fill:`#90a070`,bar:!1,shape:`plant`},{kind:`schafgarbe`,group:`Kräuter`,subgroup:`Heil`,label:`Schafgarbe`,w:.35,h:.35,fill:`#e8e8e0`,bar:!1,shape:`plant`},{kind:`schafgarbe-alba`,group:`Kräuter`,subgroup:`Heil`,label:`Schafgarbe 'Alba'`,w:.35,h:.35,fill:`#e8e8e0`,bar:!1,shape:`plant`},{kind:`schafgarbe-cerise-queen`,group:`Kräuter`,subgroup:`Heil`,label:`Schafgarbe 'Cerise Queen'`,w:.35,h:.35,fill:`#e8e8e0`,bar:!1,shape:`plant`},{kind:`himbeere`,group:`Beeren`,subgroup:`Strauch`,label:`Himbeere`,w:.8,h:.8,fill:`#a03050`,bar:!1,shape:`shrub`},{kind:`himbeere-autumn-bliss`,group:`Beeren`,subgroup:`Strauch`,label:`Himbeere 'Autumn Bliss'`,w:.8,h:.8,fill:`#a03050`,bar:!1,shape:`shrub`},{kind:`himbeere-tulameen`,group:`Beeren`,subgroup:`Strauch`,label:`Himbeere 'Tulameen'`,w:.8,h:.8,fill:`#a03050`,bar:!1,shape:`shrub`},{kind:`himbeere-glen-ample`,group:`Beeren`,subgroup:`Strauch`,label:`Himbeere 'Glen Ample'`,w:.8,h:.8,fill:`#a03050`,bar:!1,shape:`shrub`},{kind:`himbeere-golden-everest`,group:`Beeren`,subgroup:`Strauch`,label:`Himbeere 'Golden Everest'`,w:.8,h:.8,fill:`#a03050`,bar:!1,shape:`shrub`},{kind:`himbeere-polka`,group:`Beeren`,subgroup:`Strauch`,label:`Himbeere 'Polka'`,w:.8,h:.8,fill:`#a03050`,bar:!1,shape:`shrub`},{kind:`brombeere`,group:`Beeren`,subgroup:`Strauch`,label:`Brombeere`,w:1,h:1,fill:`#3a2040`,bar:!1,shape:`shrub`},{kind:`brombeere-loch-ness`,group:`Beeren`,subgroup:`Strauch`,label:`Brombeere 'Loch Ness'`,w:1,h:1,fill:`#3a2040`,bar:!1,shape:`shrub`},{kind:`brombeere-navaho`,group:`Beeren`,subgroup:`Strauch`,label:`Brombeere 'Navaho'`,w:1,h:1,fill:`#3a2040`,bar:!1,shape:`shrub`},{kind:`brombeere-thornless-evergreen`,group:`Beeren`,subgroup:`Strauch`,label:`Brombeere 'Thornless Evergreen'`,w:1,h:1,fill:`#3a2040`,bar:!1,shape:`shrub`},{kind:`johannisbeere`,group:`Beeren`,subgroup:`Strauch`,label:`Johannisbeere`,w:.9,h:.9,fill:`#c03040`,bar:!1,shape:`shrub`},{kind:`johannisbeere-jonkheer-van-tets`,group:`Beeren`,subgroup:`Strauch`,label:`Johannisbeere 'Jonkheer van Tets'`,w:.9,h:.9,fill:`#c03040`,bar:!1,shape:`shrub`},{kind:`johannisbeere-rovada`,group:`Beeren`,subgroup:`Strauch`,label:`Johannisbeere 'Rovada'`,w:.9,h:.9,fill:`#c03040`,bar:!1,shape:`shrub`},{kind:`johannisbeere-titania`,group:`Beeren`,subgroup:`Strauch`,label:`Johannisbeere 'Titania'`,w:.9,h:.9,fill:`#c03040`,bar:!1,shape:`shrub`},{kind:`johannisbeere-weisse-versailler`,group:`Beeren`,subgroup:`Strauch`,label:`Johannisbeere 'Weiße Versailler'`,w:.9,h:.9,fill:`#c03040`,bar:!1,shape:`shrub`},{kind:`stachelbeere`,group:`Beeren`,subgroup:`Strauch`,label:`Stachelbeere`,w:.8,h:.8,fill:`#8aaa40`,bar:!1,shape:`shrub`},{kind:`stachelbeere-invicta`,group:`Beeren`,subgroup:`Strauch`,label:`Stachelbeere 'Invicta'`,w:.8,h:.8,fill:`#8aaa40`,bar:!1,shape:`shrub`},{kind:`stachelbeere-hinnonmaeki-rot`,group:`Beeren`,subgroup:`Strauch`,label:`Stachelbeere 'Hinnonmäki Rot'`,w:.8,h:.8,fill:`#8aaa40`,bar:!1,shape:`shrub`},{kind:`stachelbeere-captivator`,group:`Beeren`,subgroup:`Strauch`,label:`Stachelbeere 'Captivator'`,w:.8,h:.8,fill:`#8aaa40`,bar:!1,shape:`shrub`},{kind:`jostabeere`,group:`Beeren`,subgroup:`Strauch`,label:`Jostabeere`,w:1,h:1,fill:`#5a2040`,bar:!1,shape:`shrub`},{kind:`jostabeere-josta`,group:`Beeren`,subgroup:`Strauch`,label:`Jostabeere 'Josta'`,w:1,h:1,fill:`#5a2040`,bar:!1,shape:`shrub`},{kind:`jostabeere-jostine`,group:`Beeren`,subgroup:`Strauch`,label:`Jostabeere 'Jostine'`,w:1,h:1,fill:`#5a2040`,bar:!1,shape:`shrub`},{kind:`heidelbeere`,group:`Beeren`,subgroup:`Strauch`,label:`Heidelbeere`,w:.7,h:.7,fill:`#3a4078`,bar:!1,shape:`shrub`},{kind:`heidelbeere-bluecrop`,group:`Beeren`,subgroup:`Strauch`,label:`Heidelbeere 'Bluecrop'`,w:.7,h:.7,fill:`#3a4078`,bar:!1,shape:`shrub`},{kind:`heidelbeere-duke`,group:`Beeren`,subgroup:`Strauch`,label:`Heidelbeere 'Duke'`,w:.7,h:.7,fill:`#3a4078`,bar:!1,shape:`shrub`},{kind:`heidelbeere-chandler`,group:`Beeren`,subgroup:`Strauch`,label:`Heidelbeere 'Chandler'`,w:.7,h:.7,fill:`#3a4078`,bar:!1,shape:`shrub`},{kind:`heidelbeere-reka`,group:`Beeren`,subgroup:`Strauch`,label:`Heidelbeere 'Reka'`,w:.7,h:.7,fill:`#3a4078`,bar:!1,shape:`shrub`},{kind:`preiselbeere`,group:`Beeren`,subgroup:`Strauch`,label:`Preiselbeere`,w:.4,h:.4,fill:`#c04040`,bar:!1,shape:`shrub`},{kind:`preiselbeere-koralle`,group:`Beeren`,subgroup:`Strauch`,label:`Preiselbeere 'Koralle'`,w:.4,h:.4,fill:`#c04040`,bar:!1,shape:`shrub`},{kind:`preiselbeere-red-pearl`,group:`Beeren`,subgroup:`Strauch`,label:`Preiselbeere 'Red Pearl'`,w:.4,h:.4,fill:`#c04040`,bar:!1,shape:`shrub`},{kind:`erdbeere`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-mieze-schindler`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Mieze Schindler'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-elsanta`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Elsanta'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-honeoye`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Honeoye'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-ostara`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Ostara'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-mara-des-bois`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Mara des Bois'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-senga-sengana`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Senga Sengana'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`erdbeere-malwina`,group:`Beeren`,subgroup:`Erdbeere`,label:`Erdbeere 'Malwina'`,w:.35,h:.35,fill:`#d03038`,bar:!1,shape:`plant`},{kind:`walderdbeere`,group:`Beeren`,subgroup:`Erdbeere`,label:`Walderdbeere`,w:.35,h:.35,fill:`#c04040`,bar:!1,shape:`plant`},{kind:`walderdbeere-alexandria`,group:`Beeren`,subgroup:`Erdbeere`,label:`Walderdbeere 'Alexandria'`,w:.35,h:.35,fill:`#c04040`,bar:!1,shape:`plant`},{kind:`walderdbeere-ruegen`,group:`Beeren`,subgroup:`Erdbeere`,label:`Walderdbeere 'Rügen'`,w:.35,h:.35,fill:`#c04040`,bar:!1,shape:`plant`},{kind:`holunder`,group:`Beeren`,subgroup:`Strauch`,label:`Holunder`,w:1.4,h:1.4,fill:`#4a2060`,bar:!1,shape:`shrub`},{kind:`holunder-haschberg`,group:`Beeren`,subgroup:`Strauch`,label:`Holunder 'Haschberg'`,w:1.4,h:1.4,fill:`#4a2060`,bar:!1,shape:`shrub`},{kind:`holunder-sampo`,group:`Beeren`,subgroup:`Strauch`,label:`Holunder 'Sampo'`,w:1.4,h:1.4,fill:`#4a2060`,bar:!1,shape:`shrub`},{kind:`aronia`,group:`Beeren`,subgroup:`Strauch`,label:`Aronia`,w:1,h:1,fill:`#402050`,bar:!1,shape:`shrub`},{kind:`aronia-nero`,group:`Beeren`,subgroup:`Strauch`,label:`Aronia 'Nero'`,w:1,h:1,fill:`#402050`,bar:!1,shape:`shrub`},{kind:`aronia-viking`,group:`Beeren`,subgroup:`Strauch`,label:`Aronia 'Viking'`,w:1,h:1,fill:`#402050`,bar:!1,shape:`shrub`},{kind:`goji`,group:`Beeren`,subgroup:`Strauch`,label:`Goji`,w:.8,h:.8,fill:`#d05030`,bar:!1,shape:`shrub`},{kind:`goji-new-big`,group:`Beeren`,subgroup:`Strauch`,label:`Goji 'New Big'`,w:.8,h:.8,fill:`#d05030`,bar:!1,shape:`shrub`},{kind:`goji-sweet-lifeberry`,group:`Beeren`,subgroup:`Strauch`,label:`Goji 'Sweet Lifeberry'`,w:.8,h:.8,fill:`#d05030`,bar:!1,shape:`shrub`},{kind:`felsenbirne`,group:`Beeren`,subgroup:`Strauch`,label:`Felsenbirne`,w:1.2,h:1.2,fill:`#6a3a50`,bar:!1,shape:`shrub`},{kind:`felsenbirne-ballerina`,group:`Beeren`,subgroup:`Strauch`,label:`Felsenbirne 'Ballerina'`,w:1.2,h:1.2,fill:`#6a3a50`,bar:!1,shape:`shrub`},{kind:`felsenbirne-obelisk`,group:`Beeren`,subgroup:`Strauch`,label:`Felsenbirne 'Obelisk'`,w:1.2,h:1.2,fill:`#6a3a50`,bar:!1,shape:`shrub`},{kind:`apfel`,group:`Obst`,subgroup:`Baum`,label:`Apfel`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-boskoop`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Boskoop'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-elstar`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Elstar'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-jonagold`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Jonagold'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-topaz`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Topaz'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-cox-orange`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Cox Orange'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-gravensteiner`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Gravensteiner'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-berlepsch`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Berlepsch'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-idared`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Idared'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-gala`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Gala'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-pinova`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Pinova'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-alkmene`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Alkmene'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-roter-berlepsch`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Roter Berlepsch'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-goldparmaene`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'Goldparmäne'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`apfel-james-grieve`,group:`Obst`,subgroup:`Baum`,label:`Apfel 'James Grieve'`,w:1.4,h:1.4,fill:`#c04040`,bar:!1,shape:`tree`},{kind:`birne`,group:`Obst`,subgroup:`Baum`,label:`Birne`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`birne-williams`,group:`Obst`,subgroup:`Baum`,label:`Birne 'Williams'`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`birne-conference`,group:`Obst`,subgroup:`Baum`,label:`Birne 'Conference'`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`birne-alexander-lucas`,group:`Obst`,subgroup:`Baum`,label:`Birne 'Alexander Lucas'`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`birne-gellerts-butterbirne`,group:`Obst`,subgroup:`Baum`,label:`Birne 'Gellerts Butterbirne'`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`birne-clapps-liebling`,group:`Obst`,subgroup:`Baum`,label:`Birne 'Clapps Liebling'`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`birne-vereinsdechants`,group:`Obst`,subgroup:`Baum`,label:`Birne 'Vereinsdechants'`,w:1.4,h:1.4,fill:`#c8d050`,bar:!1,shape:`tree`},{kind:`kirsche`,group:`Obst`,subgroup:`Baum`,label:`Kirsche`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`kirsche-hedelfinger`,group:`Obst`,subgroup:`Baum`,label:`Kirsche 'Hedelfinger'`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`kirsche-burlat`,group:`Obst`,subgroup:`Baum`,label:`Kirsche 'Burlat'`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`kirsche-kordia`,group:`Obst`,subgroup:`Baum`,label:`Kirsche 'Kordia'`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`kirsche-regina`,group:`Obst`,subgroup:`Baum`,label:`Kirsche 'Regina'`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`kirsche-schattenmorelle`,group:`Obst`,subgroup:`Baum`,label:`Kirsche 'Schattenmorelle'`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`kirsche-morellenfeuer`,group:`Obst`,subgroup:`Baum`,label:`Kirsche 'Morellenfeuer'`,w:1.4,h:1.4,fill:`#a02030`,bar:!1,shape:`tree`},{kind:`pflaume`,group:`Obst`,subgroup:`Baum`,label:`Pflaume`,w:1.4,h:1.4,fill:`#6a3a70`,bar:!1,shape:`tree`},{kind:`pflaume-hauszwetschge`,group:`Obst`,subgroup:`Baum`,label:`Pflaume 'Hauszwetschge'`,w:1.4,h:1.4,fill:`#6a3a70`,bar:!1,shape:`tree`},{kind:`pflaume-cacaks-schoene`,group:`Obst`,subgroup:`Baum`,label:`Pflaume 'Cacaks Schöne'`,w:1.4,h:1.4,fill:`#6a3a70`,bar:!1,shape:`tree`},{kind:`pflaume-hanita`,group:`Obst`,subgroup:`Baum`,label:`Pflaume 'Hanita'`,w:1.4,h:1.4,fill:`#6a3a70`,bar:!1,shape:`tree`},{kind:`pflaume-katinka`,group:`Obst`,subgroup:`Baum`,label:`Pflaume 'Katinka'`,w:1.4,h:1.4,fill:`#6a3a70`,bar:!1,shape:`tree`},{kind:`pflaume-mirabelle-von-nancy`,group:`Obst`,subgroup:`Baum`,label:`Pflaume 'Mirabelle von Nancy'`,w:1.4,h:1.4,fill:`#6a3a70`,bar:!1,shape:`tree`},{kind:`pfirsich`,group:`Obst`,subgroup:`Baum`,label:`Pfirsich`,w:1.4,h:1.4,fill:`#f0a060`,bar:!1,shape:`tree`},{kind:`pfirsich-redhaven`,group:`Obst`,subgroup:`Baum`,label:`Pfirsich 'Redhaven'`,w:1.4,h:1.4,fill:`#f0a060`,bar:!1,shape:`tree`},{kind:`pfirsich-proskauer`,group:`Obst`,subgroup:`Baum`,label:`Pfirsich 'Proskauer'`,w:1.4,h:1.4,fill:`#f0a060`,bar:!1,shape:`tree`},{kind:`pfirsich-revita`,group:`Obst`,subgroup:`Baum`,label:`Pfirsich 'Revita'`,w:1.4,h:1.4,fill:`#f0a060`,bar:!1,shape:`tree`},{kind:`aprikose`,group:`Obst`,subgroup:`Baum`,label:`Aprikose`,w:1.4,h:1.4,fill:`#f0b040`,bar:!1,shape:`tree`},{kind:`aprikose-bergeron`,group:`Obst`,subgroup:`Baum`,label:`Aprikose 'Bergeron'`,w:1.4,h:1.4,fill:`#f0b040`,bar:!1,shape:`tree`},{kind:`aprikose-hargrand`,group:`Obst`,subgroup:`Baum`,label:`Aprikose 'Hargrand'`,w:1.4,h:1.4,fill:`#f0b040`,bar:!1,shape:`tree`},{kind:`aprikose-kuresia`,group:`Obst`,subgroup:`Baum`,label:`Aprikose 'Kuresia'`,w:1.4,h:1.4,fill:`#f0b040`,bar:!1,shape:`tree`},{kind:`quitte`,group:`Obst`,subgroup:`Baum`,label:`Quitte`,w:1.4,h:1.4,fill:`#e0c040`,bar:!1,shape:`tree`},{kind:`quitte-konstantinopler`,group:`Obst`,subgroup:`Baum`,label:`Quitte 'Konstantinopler'`,w:1.4,h:1.4,fill:`#e0c040`,bar:!1,shape:`tree`},{kind:`quitte-bereczki`,group:`Obst`,subgroup:`Baum`,label:`Quitte 'Bereczki'`,w:1.4,h:1.4,fill:`#e0c040`,bar:!1,shape:`tree`},{kind:`quitte-portugiesische`,group:`Obst`,subgroup:`Baum`,label:`Quitte 'Portugiesische'`,w:1.4,h:1.4,fill:`#e0c040`,bar:!1,shape:`tree`},{kind:`nektarine`,group:`Obst`,subgroup:`Baum`,label:`Nektarine`,w:1.4,h:1.4,fill:`#f09070`,bar:!1,shape:`tree`},{kind:`nektarine-fantasia`,group:`Obst`,subgroup:`Baum`,label:`Nektarine 'Fantasia'`,w:1.4,h:1.4,fill:`#f09070`,bar:!1,shape:`tree`},{kind:`nektarine-andesine`,group:`Obst`,subgroup:`Baum`,label:`Nektarine 'Andesine'`,w:1.4,h:1.4,fill:`#f09070`,bar:!1,shape:`tree`},{kind:`walnuss`,group:`Obst`,subgroup:`Baum`,label:`Walnuss`,w:1.4,h:1.4,fill:`#8a6030`,bar:!1,shape:`tree`},{kind:`walnuss-broadview`,group:`Obst`,subgroup:`Baum`,label:`Walnuss 'Broadview'`,w:1.4,h:1.4,fill:`#8a6030`,bar:!1,shape:`tree`},{kind:`walnuss-weinsberg-1`,group:`Obst`,subgroup:`Baum`,label:`Walnuss 'Weinsberg 1'`,w:1.4,h:1.4,fill:`#8a6030`,bar:!1,shape:`tree`},{kind:`haselnuss`,group:`Obst`,subgroup:`Baum`,label:`Haselnuss`,w:1.4,h:1.4,fill:`#8a6a40`,bar:!1,shape:`tree`},{kind:`haselnuss-webbs-preisnuss`,group:`Obst`,subgroup:`Baum`,label:`Haselnuss 'Webbs Preisnuss'`,w:1.4,h:1.4,fill:`#8a6a40`,bar:!1,shape:`tree`},{kind:`haselnuss-hallesche-riesen`,group:`Obst`,subgroup:`Baum`,label:`Haselnuss 'Halle'sche Riesen'`,w:1.4,h:1.4,fill:`#8a6a40`,bar:!1,shape:`tree`},{kind:`edelkastanie`,group:`Obst`,subgroup:`Baum`,label:`Edelkastanie`,w:1.4,h:1.4,fill:`#6a4020`,bar:!1,shape:`tree`},{kind:`edelkastanie-maraval`,group:`Obst`,subgroup:`Baum`,label:`Edelkastanie 'Maraval'`,w:1.4,h:1.4,fill:`#6a4020`,bar:!1,shape:`tree`},{kind:`edelkastanie-marsol`,group:`Obst`,subgroup:`Baum`,label:`Edelkastanie 'Marsol'`,w:1.4,h:1.4,fill:`#6a4020`,bar:!1,shape:`tree`},{kind:`feige`,group:`Obst`,subgroup:`Baum`,label:`Feige`,w:1.4,h:1.4,fill:`#6a3060`,bar:!1,shape:`tree`},{kind:`feige-brown-turkey`,group:`Obst`,subgroup:`Baum`,label:`Feige 'Brown Turkey'`,w:1.4,h:1.4,fill:`#6a3060`,bar:!1,shape:`tree`},{kind:`feige-ronde-de-bordeaux`,group:`Obst`,subgroup:`Baum`,label:`Feige 'Ronde de Bordeaux'`,w:1.4,h:1.4,fill:`#6a3060`,bar:!1,shape:`tree`},{kind:`feige-violetta`,group:`Obst`,subgroup:`Baum`,label:`Feige 'Violetta'`,w:1.4,h:1.4,fill:`#6a3060`,bar:!1,shape:`tree`},{kind:`maulbeere`,group:`Obst`,subgroup:`Baum`,label:`Maulbeere`,w:1.4,h:1.4,fill:`#3a2048`,bar:!1,shape:`tree`},{kind:`maulbeere-illinois-everbearing`,group:`Obst`,subgroup:`Baum`,label:`Maulbeere 'Illinois Everbearing'`,w:1.4,h:1.4,fill:`#3a2048`,bar:!1,shape:`tree`},{kind:`maulbeere-black-beauty`,group:`Obst`,subgroup:`Baum`,label:`Maulbeere 'Black Beauty'`,w:1.4,h:1.4,fill:`#3a2048`,bar:!1,shape:`tree`},{kind:`mispel`,group:`Obst`,subgroup:`Baum`,label:`Mispel`,w:1.4,h:1.4,fill:`#c09050`,bar:!1,shape:`tree`},{kind:`mispel-grossfruechtige`,group:`Obst`,subgroup:`Baum`,label:`Mispel 'Großfrüchtige'`,w:1.4,h:1.4,fill:`#c09050`,bar:!1,shape:`tree`},{kind:`mispel-dutch`,group:`Obst`,subgroup:`Baum`,label:`Mispel 'Dutch'`,w:1.4,h:1.4,fill:`#c09050`,bar:!1,shape:`tree`},{kind:`spalierapfel`,group:`Obst`,subgroup:`Spalier`,label:`Spalierapfel`,w:6,h:.5,fill:`#c04040`,bar:!1,shape:`row`},{kind:`spalierapfel-elstar-spalier`,group:`Obst`,subgroup:`Spalier`,label:`Spalierapfel 'Elstar Spalier'`,w:6,h:.5,fill:`#c04040`,bar:!1,shape:`row`},{kind:`spalierapfel-topaz-spalier`,group:`Obst`,subgroup:`Spalier`,label:`Spalierapfel 'Topaz Spalier'`,w:6,h:.5,fill:`#c04040`,bar:!1,shape:`row`},{kind:`spalierapfel-boskoop-spalier`,group:`Obst`,subgroup:`Spalier`,label:`Spalierapfel 'Boskoop Spalier'`,w:6,h:.5,fill:`#c04040`,bar:!1,shape:`row`},{kind:`spalierbirne`,group:`Obst`,subgroup:`Spalier`,label:`Spalierbirne`,w:6,h:.5,fill:`#c8d050`,bar:!1,shape:`row`},{kind:`spalierbirne-conference-spalier`,group:`Obst`,subgroup:`Spalier`,label:`Spalierbirne 'Conference Spalier'`,w:6,h:.5,fill:`#c8d050`,bar:!1,shape:`row`},{kind:`spalierbirne-williams-spalier`,group:`Obst`,subgroup:`Spalier`,label:`Spalierbirne 'Williams Spalier'`,w:6,h:.5,fill:`#c8d050`,bar:!1,shape:`row`},{kind:`weinrebe`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`weinrebe-mueller-thurgau`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe 'Müller-Thurgau'`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`weinrebe-riesling`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe 'Riesling'`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`weinrebe-regent`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe 'Regent'`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`weinrebe-solaris`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe 'Solaris'`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`weinrebe-muscat-bleu`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe 'Muscat Bleu'`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`weinrebe-palatina`,group:`Obst`,subgroup:`Rebe`,label:`Weinrebe 'Palatina'`,w:8,h:.6,fill:`#6a3860`,bar:!1,shape:`row`},{kind:`kiwi`,group:`Obst`,subgroup:`Rebe`,label:`Kiwi`,w:6,h:.5,fill:`#6aaa40`,bar:!1,shape:`row`},{kind:`kiwi-hayward`,group:`Obst`,subgroup:`Rebe`,label:`Kiwi 'Hayward'`,w:6,h:.5,fill:`#6aaa40`,bar:!1,shape:`row`},{kind:`kiwi-jenny`,group:`Obst`,subgroup:`Rebe`,label:`Kiwi 'Jenny'`,w:6,h:.5,fill:`#6aaa40`,bar:!1,shape:`row`},{kind:`kiwi-issai`,group:`Obst`,subgroup:`Rebe`,label:`Kiwi 'Issai'`,w:6,h:.5,fill:`#6aaa40`,bar:!1,shape:`row`},{kind:`dahlie`,group:`Blumen`,subgroup:`Schnitt`,label:`Dahlie`,w:.35,h:.35,fill:`#d05070`,bar:!1,shape:`plant`},{kind:`dahlie-bishop-of-llandaff`,group:`Blumen`,subgroup:`Schnitt`,label:`Dahlie 'Bishop of Llandaff'`,w:.35,h:.35,fill:`#d05070`,bar:!1,shape:`plant`},{kind:`dahlie-caf-au-lait`,group:`Blumen`,subgroup:`Schnitt`,label:`Dahlie 'Café au Lait'`,w:.35,h:.35,fill:`#d05070`,bar:!1,shape:`plant`},{kind:`dahlie-thomas-edison`,group:`Blumen`,subgroup:`Schnitt`,label:`Dahlie 'Thomas Edison'`,w:.35,h:.35,fill:`#d05070`,bar:!1,shape:`plant`},{kind:`sonnenblume`,group:`Blumen`,subgroup:`Schnitt`,label:`Sonnenblume`,w:.35,h:.35,fill:`#e0a020`,bar:!1,shape:`plant`},{kind:`sonnenblume-helianthus`,group:`Blumen`,subgroup:`Schnitt`,label:`Sonnenblume 'Helianthus'`,w:.35,h:.35,fill:`#e0a020`,bar:!1,shape:`plant`},{kind:`sonnenblume-teddybaer`,group:`Blumen`,subgroup:`Schnitt`,label:`Sonnenblume 'Teddybär'`,w:.35,h:.35,fill:`#e0a020`,bar:!1,shape:`plant`},{kind:`sonnenblume-abendsonne`,group:`Blumen`,subgroup:`Schnitt`,label:`Sonnenblume 'Abendsonne'`,w:.35,h:.35,fill:`#e0a020`,bar:!1,shape:`plant`},{kind:`sonnenblume-hohe-schmuck`,group:`Blumen`,subgroup:`Schnitt`,label:`Sonnenblume 'Hohe Schmuck'`,w:.35,h:.35,fill:`#e0a020`,bar:!1,shape:`plant`},{kind:`zinnia`,group:`Blumen`,subgroup:`Schnitt`,label:`Zinnia`,w:.35,h:.35,fill:`#e04060`,bar:!1,shape:`plant`},{kind:`zinnia-benarys-riesen`,group:`Blumen`,subgroup:`Schnitt`,label:`Zinnia 'Benarys Riesen'`,w:.35,h:.35,fill:`#e04060`,bar:!1,shape:`plant`},{kind:`zinnia-oklahoma`,group:`Blumen`,subgroup:`Schnitt`,label:`Zinnia 'Oklahoma'`,w:.35,h:.35,fill:`#e04060`,bar:!1,shape:`plant`},{kind:`zinnia-zahara`,group:`Blumen`,subgroup:`Schnitt`,label:`Zinnia 'Zahara'`,w:.35,h:.35,fill:`#e04060`,bar:!1,shape:`plant`},{kind:`cosmea`,group:`Blumen`,subgroup:`Schnitt`,label:`Cosmea`,w:.35,h:.35,fill:`#f0f0f0`,bar:!1,shape:`plant`},{kind:`cosmea-purity`,group:`Blumen`,subgroup:`Schnitt`,label:`Cosmea 'Purity'`,w:.35,h:.35,fill:`#f0f0f0`,bar:!1,shape:`plant`},{kind:`cosmea-sensation-mix`,group:`Blumen`,subgroup:`Schnitt`,label:`Cosmea 'Sensation Mix'`,w:.35,h:.35,fill:`#f0f0f0`,bar:!1,shape:`plant`},{kind:`levkoje`,group:`Blumen`,subgroup:`Schnitt`,label:`Levkoje`,w:.35,h:.35,fill:`#d080a0`,bar:!1,shape:`plant`},{kind:`levkoje-excelsior`,group:`Blumen`,subgroup:`Schnitt`,label:`Levkoje 'Excelsior'`,w:.35,h:.35,fill:`#d080a0`,bar:!1,shape:`plant`},{kind:`levkoje-brompton`,group:`Blumen`,subgroup:`Schnitt`,label:`Levkoje 'Brompton'`,w:.35,h:.35,fill:`#d080a0`,bar:!1,shape:`plant`},{kind:`loewenmaul`,group:`Blumen`,subgroup:`Schnitt`,label:`Löwenmaul`,w:.35,h:.35,fill:`#e06080`,bar:!1,shape:`plant`},{kind:`loewenmaul-potomac`,group:`Blumen`,subgroup:`Schnitt`,label:`Löwenmaul 'Potomac'`,w:.35,h:.35,fill:`#e06080`,bar:!1,shape:`plant`},{kind:`loewenmaul-rocket`,group:`Blumen`,subgroup:`Schnitt`,label:`Löwenmaul 'Rocket'`,w:.35,h:.35,fill:`#e06080`,bar:!1,shape:`plant`},{kind:`tagetes`,group:`Blumen`,subgroup:`Schnitt`,label:`Tagetes`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`tagetes-bonanza`,group:`Blumen`,subgroup:`Schnitt`,label:`Tagetes 'Bonanza'`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`tagetes-disco`,group:`Blumen`,subgroup:`Schnitt`,label:`Tagetes 'Disco'`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`tagetes-safari`,group:`Blumen`,subgroup:`Schnitt`,label:`Tagetes 'Safari'`,w:.35,h:.35,fill:`#e09020`,bar:!1,shape:`plant`},{kind:`kapuzinerkresse`,group:`Blumen`,subgroup:`Schnitt`,label:`Kapuzinerkresse`,w:.35,h:.35,fill:`#e05020`,bar:!1,shape:`plant`},{kind:`kapuzinerkresse-alaska`,group:`Blumen`,subgroup:`Schnitt`,label:`Kapuzinerkresse 'Alaska'`,w:.35,h:.35,fill:`#e05020`,bar:!1,shape:`plant`},{kind:`kapuzinerkresse-empress-of-india`,group:`Blumen`,subgroup:`Schnitt`,label:`Kapuzinerkresse 'Empress of India'`,w:.35,h:.35,fill:`#e05020`,bar:!1,shape:`plant`},{kind:`studentenblume`,group:`Blumen`,subgroup:`Schnitt`,label:`Studentenblume`,w:.35,h:.35,fill:`#e0a010`,bar:!1,shape:`plant`},{kind:`studentenblume-antigua`,group:`Blumen`,subgroup:`Schnitt`,label:`Studentenblume 'Antigua'`,w:.35,h:.35,fill:`#e0a010`,bar:!1,shape:`plant`},{kind:`studentenblume-hero`,group:`Blumen`,subgroup:`Schnitt`,label:`Studentenblume 'Hero'`,w:.35,h:.35,fill:`#e0a010`,bar:!1,shape:`plant`},{kind:`gladiole`,group:`Blumen`,subgroup:`Schnitt`,label:`Gladiole`,w:.35,h:.35,fill:`#d080c0`,bar:!1,shape:`plant`},{kind:`gladiole-white-prosperity`,group:`Blumen`,subgroup:`Schnitt`,label:`Gladiole 'White Prosperity'`,w:.35,h:.35,fill:`#d080c0`,bar:!1,shape:`plant`},{kind:`gladiole-oscar`,group:`Blumen`,subgroup:`Schnitt`,label:`Gladiole 'Oscar'`,w:.35,h:.35,fill:`#d080c0`,bar:!1,shape:`plant`},{kind:`stiefmuetterchen`,group:`Blumen`,subgroup:`Beet`,label:`Stiefmütterchen`,w:.35,h:.35,fill:`#6050a0`,bar:!1,shape:`plant`},{kind:`stiefmuetterchen-matrix`,group:`Blumen`,subgroup:`Beet`,label:`Stiefmütterchen 'Matrix'`,w:.35,h:.35,fill:`#6050a0`,bar:!1,shape:`plant`},{kind:`stiefmuetterchen-delta`,group:`Blumen`,subgroup:`Beet`,label:`Stiefmütterchen 'Delta'`,w:.35,h:.35,fill:`#6050a0`,bar:!1,shape:`plant`},{kind:`petunie`,group:`Blumen`,subgroup:`Beet`,label:`Petunie`,w:.35,h:.35,fill:`#a040a0`,bar:!1,shape:`plant`},{kind:`petunie-wave`,group:`Blumen`,subgroup:`Beet`,label:`Petunie 'Wave'`,w:.35,h:.35,fill:`#a040a0`,bar:!1,shape:`plant`},{kind:`petunie-surfinia`,group:`Blumen`,subgroup:`Beet`,label:`Petunie 'Surfinia'`,w:.35,h:.35,fill:`#a040a0`,bar:!1,shape:`plant`},{kind:`begonie`,group:`Blumen`,subgroup:`Beet`,label:`Begonie`,w:.35,h:.35,fill:`#d04050`,bar:!1,shape:`plant`},{kind:`begonie-nonstop`,group:`Blumen`,subgroup:`Beet`,label:`Begonie 'Nonstop'`,w:.35,h:.35,fill:`#d04050`,bar:!1,shape:`plant`},{kind:`begonie-dragon-wing`,group:`Blumen`,subgroup:`Beet`,label:`Begonie 'Dragon Wing'`,w:.35,h:.35,fill:`#d04050`,bar:!1,shape:`plant`},{kind:`weizen`,group:`Getreide`,subgroup:`Korn`,label:`Weizen`,w:8,h:4,fill:`#d8c070`,bar:!1,shape:`bed`},{kind:`weizen-capo`,group:`Getreide`,subgroup:`Korn`,label:`Weizen 'Capo'`,w:8,h:4,fill:`#d8c070`,bar:!1,shape:`bed`},{kind:`weizen-tobias`,group:`Getreide`,subgroup:`Korn`,label:`Weizen 'Tobias'`,w:8,h:4,fill:`#d8c070`,bar:!1,shape:`bed`},{kind:`weizen-emmer`,group:`Getreide`,subgroup:`Korn`,label:`Weizen 'Emmer'`,w:8,h:4,fill:`#d8c070`,bar:!1,shape:`bed`},{kind:`weizen-einkorn`,group:`Getreide`,subgroup:`Korn`,label:`Weizen 'Einkorn'`,w:8,h:4,fill:`#d8c070`,bar:!1,shape:`bed`},{kind:`roggen`,group:`Getreide`,subgroup:`Korn`,label:`Roggen`,w:8,h:4,fill:`#c8b060`,bar:!1,shape:`bed`},{kind:`roggen-conduct`,group:`Getreide`,subgroup:`Korn`,label:`Roggen 'Conduct'`,w:8,h:4,fill:`#c8b060`,bar:!1,shape:`bed`},{kind:`roggen-dukato`,group:`Getreide`,subgroup:`Korn`,label:`Roggen 'Dukato'`,w:8,h:4,fill:`#c8b060`,bar:!1,shape:`bed`},{kind:`hafer`,group:`Getreide`,subgroup:`Korn`,label:`Hafer`,w:8,h:4,fill:`#e0d090`,bar:!1,shape:`bed`},{kind:`hafer-max`,group:`Getreide`,subgroup:`Korn`,label:`Hafer 'Max'`,w:8,h:4,fill:`#e0d090`,bar:!1,shape:`bed`},{kind:`hafer-scorpion`,group:`Getreide`,subgroup:`Korn`,label:`Hafer 'Scorpion'`,w:8,h:4,fill:`#e0d090`,bar:!1,shape:`bed`},{kind:`gerste`,group:`Getreide`,subgroup:`Korn`,label:`Gerste`,w:8,h:4,fill:`#d0c070`,bar:!1,shape:`bed`},{kind:`gerste-avalon`,group:`Getreide`,subgroup:`Korn`,label:`Gerste 'Avalon'`,w:8,h:4,fill:`#d0c070`,bar:!1,shape:`bed`},{kind:`gerste-quench`,group:`Getreide`,subgroup:`Korn`,label:`Gerste 'Quench'`,w:8,h:4,fill:`#d0c070`,bar:!1,shape:`bed`},{kind:`dinkel`,group:`Getreide`,subgroup:`Korn`,label:`Dinkel`,w:8,h:4,fill:`#d8c888`,bar:!1,shape:`bed`},{kind:`dinkel-zollernspelz`,group:`Getreide`,subgroup:`Korn`,label:`Dinkel 'Zollernspelz'`,w:8,h:4,fill:`#d8c888`,bar:!1,shape:`bed`},{kind:`dinkel-oberkulmer`,group:`Getreide`,subgroup:`Korn`,label:`Dinkel 'Oberkulmer'`,w:8,h:4,fill:`#d8c888`,bar:!1,shape:`bed`},{kind:`buchweizen`,group:`Getreide`,subgroup:`Korn`,label:`Buchweizen`,w:6,h:4,fill:`#c0a070`,bar:!1,shape:`bed`},{kind:`buchweizen-kora`,group:`Getreide`,subgroup:`Korn`,label:`Buchweizen 'Kora'`,w:6,h:4,fill:`#c0a070`,bar:!1,shape:`bed`},{kind:`buchweizen-hruszowska`,group:`Getreide`,subgroup:`Korn`,label:`Buchweizen 'Hruszowska'`,w:6,h:4,fill:`#c0a070`,bar:!1,shape:`bed`},{kind:`luzerne`,group:`Getreide`,subgroup:`Futter`,label:`Luzerne`,w:8,h:4,fill:`#4a8a40`,bar:!1,shape:`bed`},{kind:`luzerne-planet`,group:`Getreide`,subgroup:`Futter`,label:`Luzerne 'Planet'`,w:8,h:4,fill:`#4a8a40`,bar:!1,shape:`bed`},{kind:`luzerne-fleetwood`,group:`Getreide`,subgroup:`Futter`,label:`Luzerne 'Fleetwood'`,w:8,h:4,fill:`#4a8a40`,bar:!1,shape:`bed`},{kind:`klee`,group:`Getreide`,subgroup:`Futter`,label:`Klee`,w:8,h:3,fill:`#50a048`,bar:!1,shape:`bed`},{kind:`klee-alexandriner`,group:`Getreide`,subgroup:`Futter`,label:`Klee 'Alexandriner'`,w:8,h:3,fill:`#50a048`,bar:!1,shape:`bed`},{kind:`klee-inkarnat`,group:`Getreide`,subgroup:`Futter`,label:`Klee 'Inkarnat'`,w:8,h:3,fill:`#50a048`,bar:!1,shape:`bed`},{kind:`klee-weissklee`,group:`Getreide`,subgroup:`Futter`,label:`Klee 'Weißklee'`,w:8,h:3,fill:`#50a048`,bar:!1,shape:`bed`},{kind:`phacelia`,group:`Getreide`,subgroup:`Futter`,label:`Phacelia`,w:8,h:3,fill:`#6050b0`,bar:!1,shape:`bed`},{kind:`phacelia-angelia`,group:`Getreide`,subgroup:`Futter`,label:`Phacelia 'Angelia'`,w:8,h:3,fill:`#6050b0`,bar:!1,shape:`bed`},{kind:`beet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Beet`,w:8,h:2.4,fill:`#8a5a32`,bar:!0,shape:`bed`},{kind:`hochbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Hochbeet`,w:4,h:1.2,fill:`#6e4a2c`,bar:!1,shape:`bed`},{kind:`freilandparzelle`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Freilandparzelle`,w:10,h:6,fill:`#7a5a38`,bar:!1,shape:`bed`},{kind:`dammkultur`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Dammkultur`,w:10,h:1.6,fill:`#9a6a40`,bar:!1,shape:`bed`},{kind:`huegelbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Hügelbeet`,w:6,h:2,fill:`#8a5030`,bar:!1,shape:`bed`},{kind:`fruehbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Frühbeet`,w:4,h:1.5,fill:`#a07048`,bar:!1,shape:`bed`},{kind:`saatbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Saatbeet`,w:5,h:1.2,fill:`#b08050`,bar:!1,shape:`bed`},{kind:`kraeuterbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Kräuterbeet`,w:4,h:1.2,fill:`#5a7a40`,bar:!1,shape:`bed`},{kind:`mischkultur`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Mischkultur`,w:8,h:2.4,fill:`#6a8a48`,bar:!1,shape:`bed`},{kind:`tiefkulturbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Tiefkulturbeet`,w:8,h:2,fill:`#7a4a28`,bar:!1,shape:`bed`},{kind:`keyhole-beet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Keyhole-Beet`,w:4,h:4,fill:`#8a5a30`,bar:!1,shape:`bed`},{kind:`mandala-beet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Mandala-Beet`,w:6,h:6,fill:`#8a6040`,bar:!1,shape:`bed`},{kind:`spirale`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Spirale`,w:3,h:3,fill:`#7a5a38`,bar:!1,shape:`bed`},{kind:`jungpflanzenquartier`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Jungpflanzenquartier`,w:6,h:2,fill:`#a08050`,bar:!1,shape:`bed`},{kind:`anzuchtbeet`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Anzuchtbeet`,w:4,h:1,fill:`#b09058`,bar:!1,shape:`bed`},{kind:`versuchsparzelle`,group:`Beete & Flächen`,subgroup:`Fläche`,label:`Versuchsparzelle`,w:5,h:3,fill:`#7a6a40`,bar:!1,shape:`bed`},{kind:`weg`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Weg`,w:8,h:1,fill:`#c4b898`,bar:!0,shape:`path`},{kind:`fahrgasse`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Fahrgasse`,w:12,h:2.5,fill:`#b8a878`,bar:!1,shape:`path`},{kind:`gruenstreifen`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Grünstreifen`,w:10,h:.8,fill:`#5a8a48`,bar:!1,shape:`path`},{kind:`randstreifen`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Randstreifen`,w:8,h:.6,fill:`#4a7a38`,bar:!1,shape:`path`},{kind:`wendeplatz`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Wendeplatz`,w:6,h:6,fill:`#c0b090`,bar:!1,shape:`path`},{kind:`hofplatz`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Hofplatz`,w:8,h:8,fill:`#b0a080`,bar:!1,shape:`path`},{kind:`schotterweg`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Schotterweg`,w:8,h:1.2,fill:`#b8b0a0`,bar:!1,shape:`path`},{kind:`holzhaeckselweg`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Holzhäckselweg`,w:6,h:1,fill:`#8a6a40`,bar:!1,shape:`path`},{kind:`barfusspfad`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Barfußpfad`,w:8,h:.8,fill:`#c0a070`,bar:!1,shape:`path`},{kind:`rollstuhlweg`,group:`Wege & Fahrgassen`,subgroup:`Weg`,label:`Rollstuhlweg`,w:8,h:1.5,fill:`#b0a898`,bar:!1,shape:`path`},{kind:`gewaechshaus`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Gewächshaus`,w:6,h:4,fill:`#7aa8b8`,bar:!0,shape:`glass`},{kind:`folientunnel`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Folientunnel`,w:10,h:3,fill:`#8ab8c4`,bar:!1,shape:`glass`},{kind:`schattennetz`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Schattennetz`,w:8,h:4,fill:`#5a7080`,bar:!1,shape:`glass`},{kind:`vlies`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Vlies`,w:8,h:2.4,fill:`#d0d4d0`,bar:!1,shape:`glass`},{kind:`hagelschutz`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Hagelschutz`,w:12,h:8,fill:`#688090`,bar:!1,shape:`glass`},{kind:`insektennetz`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Insektennetz`,w:8,h:2.4,fill:`#90a8a0`,bar:!1,shape:`glass`},{kind:`kalthaus`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Kalthaus`,w:8,h:5,fill:`#6a98a8`,bar:!1,shape:`glass`},{kind:`warmhaus`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Warmhaus`,w:8,h:5,fill:`#88b8c8`,bar:!1,shape:`glass`},{kind:`anzuchthaus`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Anzuchthaus`,w:4,h:3,fill:`#9ac0c8`,bar:!1,shape:`glass`},{kind:`folienhaus-venlo`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Folienhaus Venlo`,w:12,h:8,fill:`#70a0b0`,bar:!1,shape:`glass`},{kind:`mobile-folie`,group:`Schutz & Folie`,subgroup:`Schutz`,label:`Mobile Folie`,w:10,h:3,fill:`#98c0c8`,bar:!1,shape:`glass`},{kind:`wiese`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Wiese`,w:10,h:8,fill:`#6a9a48`,bar:!1,shape:`bed`},{kind:`bluehstreifen`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Blühstreifen`,w:10,h:1,fill:`#c09040`,bar:!1,shape:`row`},{kind:`hecke`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Hecke`,w:8,h:.8,fill:`#2e5c28`,bar:!0,shape:`row`},{kind:`windschutz`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Windschutz`,w:12,h:1.2,fill:`#245020`,bar:!1,shape:`row`},{kind:`agroforst-reihe`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Agroforst-Reihe`,w:12,h:1.5,fill:`#3a6830`,bar:!1,shape:`row`},{kind:`wildacker`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Wildacker`,w:8,h:6,fill:`#5a7a38`,bar:!1,shape:`bed`},{kind:`streuobstwiese`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Streuobstwiese`,w:16,h:12,fill:`#4a8a38`,bar:!1,shape:`bed`},{kind:`benjeshecke`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Benjeshecke`,w:8,h:1.2,fill:`#5a4a30`,bar:!1,shape:`row`},{kind:`knicks`,group:`Grünland & Hecken`,subgroup:`Grün`,label:`Knicks`,w:10,h:1.5,fill:`#2a4a20`,bar:!1,shape:`row`},{kind:`tank`,group:`Wasser`,subgroup:`Wasser`,label:`Tank`,w:1.2,h:1.2,fill:`#2a6a88`,bar:!0,shape:`tank`},{kind:`teich`,group:`Wasser`,subgroup:`Wasser`,label:`Teich`,w:5,h:4,fill:`#1a5a78`,bar:!1,shape:`water`},{kind:`bewaesserung`,group:`Wasser`,subgroup:`Wasser`,label:`Bewässerung`,w:6,h:.18,fill:`#3a7aa8`,bar:!0,shape:`row`},{kind:`tropfschlauch`,group:`Wasser`,subgroup:`Wasser`,label:`Tropfschlauch`,w:8,h:.12,fill:`#4a8ab8`,bar:!1,shape:`row`},{kind:`hydrant`,group:`Wasser`,subgroup:`Wasser`,label:`Hydrant`,w:.5,h:.5,fill:`#c04040`,bar:!1,shape:`mark`},{kind:`drainage`,group:`Wasser`,subgroup:`Wasser`,label:`Drainage`,w:8,h:.2,fill:`#6a90a0`,bar:!1,shape:`row`},{kind:`regentonne`,group:`Wasser`,subgroup:`Wasser`,label:`Regentonne`,w:.8,h:.8,fill:`#3a6080`,bar:!1,shape:`tank`},{kind:`zisterne`,group:`Wasser`,subgroup:`Wasser`,label:`Zisterne`,w:2,h:2,fill:`#2a5070`,bar:!1,shape:`tank`},{kind:`schwimmteich`,group:`Wasser`,subgroup:`Wasser`,label:`Schwimmteich`,w:8,h:5,fill:`#1a6088`,bar:!1,shape:`water`},{kind:`sickergraben`,group:`Wasser`,subgroup:`Wasser`,label:`Sickergraben`,w:8,h:.6,fill:`#5a8088`,bar:!1,shape:`row`},{kind:`pumpe`,group:`Wasser`,subgroup:`Wasser`,label:`Pumpe`,w:.6,h:.6,fill:`#406080`,bar:!1,shape:`mark`},{kind:`filterbrunnen`,group:`Wasser`,subgroup:`Wasser`,label:`Filterbrunnen`,w:1,h:1,fill:`#3a7088`,bar:!1,shape:`tank`},{kind:`igel`,group:`Wasser`,subgroup:`Wasser`,label:`Igel`,w:6,h:.2,fill:`#4a90b0`,bar:!1,shape:`row`},{kind:`kompost`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Kompost`,w:1.6,h:1.6,fill:`#3a2a18`,bar:!0,shape:`build`},{kind:`misthaufen`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Misthaufen`,w:3,h:2,fill:`#4a3018`,bar:!1,shape:`build`},{kind:`gruenduengung`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Gründüngung`,w:8,h:2.4,fill:`#4a8a40`,bar:!1,shape:`bed`},{kind:`mulchflaeche`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Mulchfläche`,w:8,h:2.4,fill:`#6a5030`,bar:!1,shape:`bed`},{kind:`erdehaufen`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Erdehaufen`,w:2.5,h:2,fill:`#5a4030`,bar:!1,shape:`build`},{kind:`bokashi`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Bokashi`,w:1,h:1,fill:`#4a3828`,bar:!1,shape:`build`},{kind:`wurmkompost`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Wurmkompost`,w:1.2,h:.8,fill:`#3a2818`,bar:!1,shape:`build`},{kind:`holzhaeckselhaufen`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Holzhäckselhaufen`,w:2,h:2,fill:`#6a5030`,bar:!1,shape:`build`},{kind:`biochar-platz`,group:`Boden & Düngung`,subgroup:`Boden`,label:`Biochar-Platz`,w:2,h:2,fill:`#2a2018`,bar:!1,shape:`build`},{kind:`packstation`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Packstation`,w:4,h:3,fill:`#8a7a68`,bar:!0,shape:`build`},{kind:`waschplatz`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Waschplatz`,w:3,h:2.5,fill:`#7a9aa8`,bar:!1,shape:`path`},{kind:`kuehlhaus`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Kühlhaus`,w:4,h:3,fill:`#6a88a0`,bar:!1,shape:`build`},{kind:`lager`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Lager`,w:5,h:4,fill:`#7a6a58`,bar:!1,shape:`build`},{kind:`verkaufsstand`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Verkaufsstand`,w:3,h:2,fill:`#c0a060`,bar:!1,shape:`build`},{kind:`abholpunkt`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Abholpunkt`,w:3,h:3,fill:`#b09050`,bar:!1,shape:`path`},{kind:`schuppen`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Schuppen`,w:4,h:3,fill:`#6a5848`,bar:!1,shape:`build`},{kind:`sitzplatz`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Sitzplatz`,w:3,h:3,fill:`#90a070`,bar:!1,shape:`path`},{kind:`weidekoppeln`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Weidekoppeln`,w:12,h:10,fill:`#88a868`,bar:!1,shape:`bed`},{kind:`kistenlager`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Kistenlager`,w:4,h:3,fill:`#8a7860`,bar:!1,shape:`build`},{kind:`waage`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Waage`,w:1,h:1,fill:`#708090`,bar:!1,shape:`mark`},{kind:`hofcaf`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Hofcafé`,w:5,h:4,fill:`#c0a878`,bar:!1,shape:`build`},{kind:`seminarraum`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Seminarraum`,w:6,h:5,fill:`#a09080`,bar:!1,shape:`build`},{kind:`mitglieder-tafel`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Mitglieder-Tafel`,w:1.2,h:.4,fill:`#f0e8d8`,bar:!1,shape:`mark`},{kind:`ernteanteil-regal`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Ernteanteil-Regal`,w:3,h:1,fill:`#b09070`,bar:!1,shape:`build`},{kind:`depottisch`,group:`Hof & Solawi`,subgroup:`Hof`,label:`Depottisch`,w:2.5,h:1.2,fill:`#c0a880`,bar:!1,shape:`build`},{kind:`wohnhaus`,group:`Gebäude`,subgroup:`Bau`,label:`Wohnhaus`,w:10,h:8,fill:`#c4b4a0`,bar:!1,shape:`build`},{kind:`scheune`,group:`Gebäude`,subgroup:`Bau`,label:`Scheune`,w:12,h:8,fill:`#8a6a50`,bar:!1,shape:`build`},{kind:`maschinenhalle`,group:`Gebäude`,subgroup:`Bau`,label:`Maschinenhalle`,w:14,h:10,fill:`#7a7a78`,bar:!1,shape:`build`},{kind:`werkstatt`,group:`Gebäude`,subgroup:`Bau`,label:`Werkstatt`,w:6,h:5,fill:`#8a8070`,bar:!1,shape:`build`},{kind:`buero`,group:`Gebäude`,subgroup:`Bau`,label:`Büro`,w:5,h:4,fill:`#a09888`,bar:!1,shape:`build`},{kind:`sozialraum`,group:`Gebäude`,subgroup:`Bau`,label:`Sozialraum`,w:4,h:4,fill:`#b0a898`,bar:!1,shape:`build`},{kind:`wc`,group:`Gebäude`,subgroup:`Bau`,label:`WC`,w:2,h:2,fill:`#c0c0b8`,bar:!1,shape:`build`},{kind:`carport`,group:`Gebäude`,subgroup:`Bau`,label:`Carport`,w:6,h:4,fill:`#908880`,bar:!1,shape:`build`},{kind:`fahrradstaender`,group:`Gebäude`,subgroup:`Bau`,label:`Fahrradständer`,w:2,h:1,fill:`#606060`,bar:!1,shape:`mark`},{kind:`holzschuppen`,group:`Gebäude`,subgroup:`Bau`,label:`Holzschuppen`,w:4,h:3,fill:`#7a6048`,bar:!1,shape:`build`},{kind:`solarflaeche`,group:`Technik`,subgroup:`Gerät`,label:`Solarfläche`,w:8,h:4,fill:`#304870`,bar:!1,shape:`path`},{kind:`windrad`,group:`Technik`,subgroup:`Gerät`,label:`Windrad`,w:1.5,h:1.5,fill:`#88a0b0`,bar:!1,shape:`mark`},{kind:`notstromaggregat`,group:`Technik`,subgroup:`Gerät`,label:`Notstromaggregat`,w:1.2,h:.8,fill:`#505048`,bar:!1,shape:`mark`},{kind:`akkuladestation`,group:`Technik`,subgroup:`Gerät`,label:`Akkuladestation`,w:1,h:1,fill:`#408060`,bar:!1,shape:`mark`},{kind:`wetterstation`,group:`Technik`,subgroup:`Gerät`,label:`Wetterstation`,w:.5,h:.5,fill:`#808890`,bar:!1,shape:`mark`},{kind:`wildkamera`,group:`Technik`,subgroup:`Gerät`,label:`Wildkamera`,w:.3,h:.3,fill:`#303030`,bar:!1,shape:`mark`},{kind:`led-kulturlicht`,group:`Technik`,subgroup:`Gerät`,label:`LED-Kulturlicht`,w:1,h:.4,fill:`#e0e080`,bar:!1,shape:`mark`},{kind:`heizluefter`,group:`Technik`,subgroup:`Gerät`,label:`Heizlüfter`,w:.6,h:.6,fill:`#a04030`,bar:!1,shape:`mark`},{kind:`zaun`,group:`Zäune & Tore`,subgroup:`Zaun`,label:`Zaun`,w:8,h:.25,fill:`#4a3a28`,bar:!0,shape:`fence`},{kind:`tor`,group:`Zäune & Tore`,subgroup:`Zaun`,label:`Tor`,w:3,h:.4,fill:`#5a4a38`,bar:!1,shape:`fence`},{kind:`wildschutz`,group:`Zäune & Tore`,subgroup:`Zaun`,label:`Wildschutz`,w:10,h:.3,fill:`#3a3a30`,bar:!1,shape:`fence`},{kind:`elektrolitze`,group:`Zäune & Tore`,subgroup:`Zaun`,label:`Elektrolitze`,w:10,h:.15,fill:`#c0a040`,bar:!1,shape:`fence`},{kind:`wildzaun-2m`,group:`Zäune & Tore`,subgroup:`Zaun`,label:`Wildzaun 2m`,w:12,h:.3,fill:`#303028`,bar:!1,shape:`fence`},{kind:`lesetuer`,group:`Zäune & Tore`,subgroup:`Zaun`,label:`Lesetür`,w:1.2,h:.3,fill:`#6a5a48`,bar:!1,shape:`fence`},{kind:`stall`,group:`Tiere`,subgroup:`Tier`,label:`Stall`,w:4,h:3,fill:`#8a6a50`,bar:!1,shape:`build`},{kind:`huehnerstall`,group:`Tiere`,subgroup:`Tier`,label:`Hühnerstall`,w:3,h:2,fill:`#a08060`,bar:!1,shape:`build`},{kind:`bienenstand`,group:`Tiere`,subgroup:`Tier`,label:`Bienenstand`,w:1.5,h:1,fill:`#d0a030`,bar:!1,shape:`shrub`},{kind:`huehnerauslauf`,group:`Tiere`,subgroup:`Tier`,label:`Hühnerauslauf`,w:8,h:6,fill:`#90a060`,bar:!1,shape:`bed`},{kind:`mobilstall`,group:`Tiere`,subgroup:`Tier`,label:`Mobilstall`,w:3,h:2,fill:`#b09070`,bar:!1,shape:`build`},{kind:`schafunterstand`,group:`Tiere`,subgroup:`Tier`,label:`Schafunterstand`,w:4,h:3,fill:`#8a7860`,bar:!1,shape:`build`},{kind:`ententeich`,group:`Tiere`,subgroup:`Tier`,label:`Ententeich`,w:4,h:3,fill:`#2a6080`,bar:!1,shape:`water`},{kind:`insektenhotel`,group:`Tiere`,subgroup:`Tier`,label:`Insektenhotel`,w:.8,h:.4,fill:`#c0a060`,bar:!1,shape:`mark`},{kind:`igelburg`,group:`Tiere`,subgroup:`Tier`,label:`Igelburg`,w:.8,h:.8,fill:`#5a4a30`,bar:!1,shape:`mark`},{kind:`beschriftung`,group:`Markierung`,subgroup:`Plan`,label:`Beschriftung`,w:2.4,h:.55,fill:`#faf7f1`,bar:!1,shape:`mark`},{kind:`masslinie`,group:`Markierung`,subgroup:`Plan`,label:`Maßlinie`,w:5,h:.14,fill:`#d4c4a0`,bar:!1,shape:`mark`},{kind:`punkt`,group:`Markierung`,subgroup:`Plan`,label:`Punkt`,w:.45,h:.45,fill:`#c45c26`,bar:!1,shape:`mark`},{kind:`bodenprobe`,group:`Markierung`,subgroup:`Plan`,label:`Bodenprobe`,w:.5,h:.5,fill:`#a05020`,bar:!1,shape:`mark`},{kind:`nordpfeil`,group:`Markierung`,subgroup:`Plan`,label:`Nordpfeil`,w:1,h:1,fill:`#c45c26`,bar:!1,shape:`mark`},{kind:`schnuerung`,group:`Markierung`,subgroup:`Plan`,label:`Schnürung`,w:6,h:.08,fill:`#e0d0b0`,bar:!1,shape:`row`},{kind:`kuehlzelle`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Kühlzelle`,w:2,h:2,fill:`#6090a8`,bar:!1,shape:`build`},{kind:`vorkuehlung`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Vorkühlung`,w:3,h:2,fill:`#70a0b0`,bar:!1,shape:`build`},{kind:`kistenturm`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Kistenturm`,w:1.5,h:1.5,fill:`#a09070`,bar:!1,shape:`build`},{kind:`palettenplatz`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Palettenplatz`,w:3,h:2,fill:`#908878`,bar:!1,shape:`path`},{kind:`anlieferung`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Anlieferung`,w:6,h:4,fill:`#a09888`,bar:!1,shape:`path`},{kind:`parkplatz-mitglieder`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Parkplatz Mitglieder`,w:8,h:6,fill:`#908880`,bar:!1,shape:`path`},{kind:`hoffuehrungsweg`,group:`Hof & Solawi`,subgroup:`Logistik`,label:`Hofführungsweg`,w:10,h:1.2,fill:`#c0b090`,bar:!1,shape:`path`},{kind:`troepfchenfilter`,group:`Technik`,subgroup:`Boden`,label:`Tröpfchenfilter`,w:.5,h:.5,fill:`#5080a0`,bar:!1,shape:`mark`},{kind:`duengemischer`,group:`Technik`,subgroup:`Boden`,label:`Düngemischer`,w:1.5,h:1.5,fill:`#706050`,bar:!1,shape:`build`},{kind:`saatgutlager`,group:`Technik`,subgroup:`Boden`,label:`Saatgutlager`,w:3,h:2,fill:`#a09070`,bar:!1,shape:`build`},{kind:`jungpflanzen-tisch`,group:`Technik`,subgroup:`Boden`,label:`Jungpflanzen-Tisch`,w:3,h:1.2,fill:`#90b080`,bar:!1,shape:`build`},{kind:`anzuchtkiste`,group:`Technik`,subgroup:`Boden`,label:`Anzuchtkiste`,w:1.2,h:.8,fill:`#b09060`,bar:!1,shape:`bed`},{kind:`erdpresse`,group:`Technik`,subgroup:`Boden`,label:`Erdpresse`,w:.8,h:.8,fill:`#706050`,bar:!1,shape:`mark`},{kind:`gaertnerei-laden`,group:`Gebäude`,subgroup:`Bau`,label:`Gärtnerei-Laden`,w:6,h:5,fill:`#c0b090`,bar:!1,shape:`build`},{kind:`floristik`,group:`Gebäude`,subgroup:`Bau`,label:`Floristik`,w:4,h:3,fill:`#d0a0b0`,bar:!1,shape:`build`},{kind:`samenbank`,group:`Gebäude`,subgroup:`Bau`,label:`Samenbank`,w:3,h:3,fill:`#a09880`,bar:!1,shape:`build`},{kind:`loewenzahn`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Löwenzahn`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`giersch`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Giersch`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`brennnessel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Brennnessel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`vogelmiere`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Vogelmiere`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sauerampfer`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sauerampfer`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`baerlauch`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Bärlauch`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gundermann`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gundermann`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beinwell`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beinwell`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`rainfarn`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`wermut`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Wermut`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beifuss`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beifuß`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schoellkraut`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schöllkraut`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`spitzwegerich`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Spitzwegerich`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`breitwegerich`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Breitwegerich`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gaensebluemchen`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gänseblümchen`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`ehrenpreis`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ehrenpreis`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirtentaeschel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirtentäschel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ackersenf`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ackersenf`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`melde`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Melde`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`guter-heinrich`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Guter Heinrich`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`portulak`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Portulak`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`winterheckenzwiebel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Winterheckenzwiebel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`ewige-kohlsorte`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ewige Kohlsorte`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`palmkohl`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Palmkohl`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`cima-di-rapa`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Cima di Rapa`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stielmus`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stielmus`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mairuebe`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mairübe`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teltower-ruebchen`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teltower Rübchen`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`steckruebe`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Steckrübe`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`haferwurzel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Haferwurzel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schwarzwurzel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schwarzwurzel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`zuckerwurzel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Zuckerwurzel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`yacon`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Yacon`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`oca`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Oca`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mashua`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mashua`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`crosne`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Crosne`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`erdmandel`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Erdmandel`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`quinoa`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Quinoa`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`amarant`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Amarant`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirse`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirse`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sorghum`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sorghum`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teff`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teff`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`lein`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lein`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`mohn`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mohn`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hanf`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hanf`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hopfen`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hopfen`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`tabak`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Tabak`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`faerberwau`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberwau`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`krapp`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Krapp`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`waid`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Waid`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`faerberkamille`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberkamille`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`kosmee-mix`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Kosmee Mix`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sonnenhut`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sonnenhut`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`phlox`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Phlox`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`lupine`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lupine`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`koenigskerze`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Königskerze`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stockrose`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stockrose`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`malve`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Malve`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`nachtkerze`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Nachtkerze`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`seifenkraut`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Seifenkraut`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-sorte`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn-Sorte`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`loewenzahn-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Löwenzahn 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`giersch-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Giersch 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`brennnessel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Brennnessel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`vogelmiere-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Vogelmiere 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sauerampfer-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sauerampfer 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`baerlauch-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Bärlauch 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gundermann-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gundermann 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beinwell-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beinwell 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`wermut-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Wermut 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`beifuss-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beifuß 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schoellkraut-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schöllkraut 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`spitzwegerich-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Spitzwegerich 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`breitwegerich-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Breitwegerich 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gaensebluemchen-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gänseblümchen 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ehrenpreis-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ehrenpreis 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirtentaeschel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirtentäschel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`ackersenf-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ackersenf 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`melde-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Melde 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`guter-heinrich-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Guter Heinrich 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`portulak-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Portulak 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`winterheckenzwiebel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Winterheckenzwiebel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ewige-kohlsorte-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ewige Kohlsorte 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`palmkohl-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Palmkohl 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`cima-di-rapa-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Cima di Rapa 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stielmus-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stielmus 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mairuebe-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mairübe 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teltower-ruebchen-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teltower Rübchen 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`steckruebe-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Steckrübe 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`haferwurzel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Haferwurzel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schwarzwurzel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schwarzwurzel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`zuckerwurzel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Zuckerwurzel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`yacon-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Yacon 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`oca-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Oca 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mashua-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mashua 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`crosne-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Crosne 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`erdmandel-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Erdmandel 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`quinoa-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Quinoa 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`amarant-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Amarant 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirse-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirse 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sorghum-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sorghum 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teff-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teff 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`lein-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lein 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mohn-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mohn 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hanf-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hanf 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`hopfen-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hopfen 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`tabak-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Tabak 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`faerberwau-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberwau 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`krapp-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Krapp 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`waid-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Waid 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`faerberkamille-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberkamille 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`kosmee-mix-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Kosmee Mix 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`sonnenhut-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sonnenhut 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`phlox-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Phlox 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`lupine-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lupine 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`koenigskerze-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Königskerze 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stockrose-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stockrose 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`malve-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Malve 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`nachtkerze-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Nachtkerze 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`seifenkraut-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Seifenkraut 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-sorte-2`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn-Sorte 2`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`loewenzahn-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Löwenzahn 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`giersch-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Giersch 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`brennnessel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Brennnessel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`vogelmiere-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Vogelmiere 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sauerampfer-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sauerampfer 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`baerlauch-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Bärlauch 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gundermann-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gundermann 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beinwell-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beinwell 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`wermut-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Wermut 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beifuss-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beifuß 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schoellkraut-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schöllkraut 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`spitzwegerich-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Spitzwegerich 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`breitwegerich-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Breitwegerich 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gaensebluemchen-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gänseblümchen 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ehrenpreis-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ehrenpreis 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirtentaeschel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirtentäschel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ackersenf-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ackersenf 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`melde-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Melde 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`guter-heinrich-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Guter Heinrich 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`portulak-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Portulak 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`winterheckenzwiebel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Winterheckenzwiebel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ewige-kohlsorte-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ewige Kohlsorte 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`palmkohl-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Palmkohl 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`cima-di-rapa-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Cima di Rapa 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stielmus-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stielmus 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`mairuebe-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mairübe 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teltower-ruebchen-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teltower Rübchen 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`steckruebe-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Steckrübe 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`haferwurzel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Haferwurzel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schwarzwurzel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schwarzwurzel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`zuckerwurzel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Zuckerwurzel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`yacon-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Yacon 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`oca-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Oca 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mashua-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mashua 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`crosne-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Crosne 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`erdmandel-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Erdmandel 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`quinoa-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Quinoa 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`amarant-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Amarant 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirse-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirse 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`sorghum-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sorghum 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teff-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teff 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`lein-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lein 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mohn-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mohn 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hanf-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hanf 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hopfen-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hopfen 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`tabak-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Tabak 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`faerberwau-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberwau 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`krapp-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Krapp 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`waid-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Waid 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`faerberkamille-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberkamille 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`kosmee-mix-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Kosmee Mix 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sonnenhut-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sonnenhut 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`phlox-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Phlox 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`lupine-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lupine 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`koenigskerze-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Königskerze 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stockrose-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stockrose 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`malve-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Malve 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`nachtkerze-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Nachtkerze 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`seifenkraut-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Seifenkraut 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-sorte-3`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn-Sorte 3`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`loewenzahn-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Löwenzahn 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`giersch-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Giersch 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`brennnessel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Brennnessel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`vogelmiere-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Vogelmiere 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sauerampfer-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sauerampfer 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`baerlauch-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Bärlauch 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gundermann-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gundermann 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`beinwell-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beinwell 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`wermut-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Wermut 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beifuss-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beifuß 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schoellkraut-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schöllkraut 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`spitzwegerich-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Spitzwegerich 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`breitwegerich-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Breitwegerich 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`gaensebluemchen-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gänseblümchen 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ehrenpreis-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ehrenpreis 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirtentaeschel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirtentäschel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ackersenf-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ackersenf 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`melde-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Melde 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`guter-heinrich-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Guter Heinrich 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`portulak-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Portulak 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`winterheckenzwiebel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Winterheckenzwiebel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ewige-kohlsorte-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ewige Kohlsorte 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`palmkohl-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Palmkohl 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`cima-di-rapa-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Cima di Rapa 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`stielmus-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stielmus 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mairuebe-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mairübe 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teltower-ruebchen-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teltower Rübchen 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`steckruebe-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Steckrübe 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`haferwurzel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Haferwurzel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schwarzwurzel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schwarzwurzel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`zuckerwurzel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Zuckerwurzel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`yacon-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Yacon 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`oca-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Oca 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mashua-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mashua 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`crosne-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Crosne 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`erdmandel-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Erdmandel 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`quinoa-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Quinoa 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`amarant-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Amarant 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hirse-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirse 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sorghum-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sorghum 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`teff-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Teff 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`lein-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lein 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`mohn-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Mohn 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hanf-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hanf 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`hopfen-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hopfen 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`tabak-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Tabak 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`faerberwau-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberwau 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`krapp-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Krapp 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`waid-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Waid 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`faerberkamille-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Färberkamille 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`kosmee-mix-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Kosmee Mix 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sonnenhut-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sonnenhut 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`phlox-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Phlox 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`lupine-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Lupine 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`koenigskerze-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Königskerze 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`stockrose-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Stockrose 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`malve-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Malve 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`nachtkerze-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Nachtkerze 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`seifenkraut-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Seifenkraut 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-sorte-4`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn-Sorte 4`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`loewenzahn-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Löwenzahn 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`giersch-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Giersch 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`brennnessel-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Brennnessel 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`vogelmiere-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Vogelmiere 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`sauerampfer-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Sauerampfer 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`baerlauch-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Bärlauch 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gundermann-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gundermann 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beinwell-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beinwell 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`rainfarn-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Rainfarn 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`wermut-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Wermut 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`beifuss-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Beifuß 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`schoellkraut-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Schöllkraut 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`spitzwegerich-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Spitzwegerich 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`breitwegerich-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Breitwegerich 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`gaensebluemchen-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Gänseblümchen 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ehrenpreis-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ehrenpreis 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`},{kind:`hirtentaeschel-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Hirtentäschel 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ackersenf-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ackersenf 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`melde-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Melde 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`guter-heinrich-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Guter Heinrich 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`portulak-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Portulak 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`winterheckenzwiebel-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Winterheckenzwiebel 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`plant`},{kind:`ewige-kohlsorte-5`,group:`Wild & Rarität`,subgroup:`Rarität`,label:`Ewige Kohlsorte 5`,w:.4,h:.4,fill:`#5a7a40`,bar:!1,shape:`shrub`}],Ke=Ge.map(e=>e.kind),qe=Object.fromEntries(Ge.map(e=>[e.kind,e.fill]));qe.schlag=`#d8c49a`,qe.parzelle=`#d8c49a`,Ge.filter(e=>e.bar).map(e=>({kind:e.kind,label:e.label}));function Je(e){return e===`beschriftung`||e===`label`?{kind:e,group:`Plan`,subgroup:`Text`,label:`Beschriftung`,w:2.4,h:.55,fill:`#f4ead8`,bar:!0,shape:`mark`}:e===`mass`?{kind:e,group:`Plan`,subgroup:`Text`,label:`Bemaßung`,w:2,h:.35,fill:`#c45c26`,bar:!1,shape:`mark`}:e===`schlag`||e===`parzelle`?{kind:e,group:`Plan`,subgroup:`Schlag`,label:`Schlag`,w:8,h:6,fill:`#d8c49a`,bar:!1,shape:`mark`}:Ge.find(t=>t.kind===e)}var Ye=e=>Je(e)?.shape===`bed`;function Xe(){let e=new Set,t=[];for(let n of Ge)n.shape!==`plant`||e.has(n.label)||(e.add(n.label),t.push(n.label));return t}function Ze(){let e=[];for(let t of Ge){let n=e[e.length-1];(!n||n.label!==t.group)&&e.push({label:t.group,items:[]}),e[e.length-1].items.push({kind:t.kind,label:t.label})}return e}var Qe=[{id:`pflanzen`,label:`Pflanzen`,groups:[`Gemüse`,`Kräuter`,`Beeren`,`Obst`,`Blumen`,`Getreide`,`Wild & Rarität`]},{id:`beete`,label:`Beete`,groups:[`Beete & Flächen`]},{id:`wege`,label:`Wege`,groups:[`Wege & Fahrgassen`]},{id:`schutz`,label:`Schutz`,groups:[`Schutz & Folie`,`Grünland & Hecken`]},{id:`wasser`,label:`Wasser`,groups:[`Wasser`]},{id:`boden`,label:`Boden`,groups:[`Boden & Düngung`]},{id:`hof`,label:`Hof`,groups:[`Hof & Solawi`,`Gebäude`]},{id:`technik`,label:`Technik`,groups:[`Technik`]},{id:`zaeune`,label:`Zäune`,groups:[`Zäune & Tore`]},{id:`tiere`,label:`Tiere`,groups:[`Tiere`]},{id:`plan`,label:`Plan`,groups:[`Markierung`]}];function $e(){return Qe.map(e=>{let t=Ge.filter(t=>e.groups.includes(t.group)),n=t.filter(e=>e.bar).map(e=>({kind:e.kind,label:e.label}));if(!n.length){let e=new Set;for(let r of t)if(!e.has(r.subgroup)&&(e.add(r.subgroup),n.push({kind:r.kind,label:r.label}),n.length>=10))break}let r=[];for(let e of t){let t=r[r.length-1];(!t||t.label!==e.subgroup)&&r.push({label:e.subgroup,items:[]}),r[r.length-1].items.push({kind:e.kind,label:e.label})}return{...e,featured:n,items:t.map(e=>({kind:e.kind,label:e.label})),subs:r}})}function et(e,t){let n=e.trim().toLowerCase();return Ge.filter(e=>t&&e.group!==t?!1:!n||e.label.toLowerCase().includes(n)||e.group.toLowerCase().includes(n)||e.subgroup.toLowerCase().includes(n))}function tt(e,t,n){if(e.poly&&e.poly.length>2){let r=!1;for(let i=0,a=e.poly.length-1;i<e.poly.length;a=i++){let o=e.poly[i],s=e.poly[a];o[1]>n!=s[1]>n&&t<(s[0]-o[0])*(n-o[1])/(s[1]-o[1]+1e-9)+o[0]&&(r=!r)}return r}if(e.rot){let r=e.rot*Math.PI/180,i=e.x+e.w/2,a=e.y+e.h/2,o=t-i,s=n-a,c=o*Math.cos(-r)-s*Math.sin(-r)+e.w/2,l=o*Math.sin(-r)+s*Math.cos(-r)+e.h/2;return c>=0&&l>=0&&c<=e.w&&l<=e.h}return t>=e.x&&t<=e.x+e.w&&n>=e.y&&n<=e.y+e.h}function nt(e,t){return e.id===t.id||e.id<0||t.id<0?!1:e.x<t.x+t.w&&e.x+e.w>t.x&&e.y<t.y+t.h&&e.y+e.h>t.y}function rt(e){let t=new Set;for(let n=0;n<e.features.length;n++)for(let r=n+1;r<e.features.length;r++){let i=e.features[n],a=e.features[r];i.kind!==`schlag`&&a.kind!==`schlag`&&i.kind!==`parzelle`&&a.kind!==`parzelle`&&nt(i,a)&&(t.add(i.id),t.add(a.id))}return t}function it(e){let{x:t,y:n,w:r,h:i}=e,a=[];e.poly&&e.poly.forEach((e,t)=>a.push({id:`v${t}`,x:e[0],y:e[1]}));let o=[{id:`nw`,x:t,y:n},{id:`n`,x:t+r/2,y:n},{id:`ne`,x:t+r,y:n},{id:`e`,x:t+r,y:n+i/2},{id:`se`,x:t+r,y:n+i},{id:`s`,x:t+r/2,y:n+i},{id:`sw`,x:t,y:n+i},{id:`w`,x:t,y:n+i/2},{id:`rot`,x:t+r/2,y:n-.55}],u=(e.rot||0)*Math.PI/180;if(!u)return[...a,...o];let d=t+r/2,f=n+i/2,p=Math.cos(u),m=Math.sin(u);return[...a,...o.map(e=>{let t=e.x-d,n=e.y-f;return{...e,x:d+t*p-n*m,y:f+t*m+n*p}})]}function X(e,t,n,r){let i=Math.max(.12,8/r);for(let r of it(e))if(Math.hypot(t-r.x,n-r.y)<=i)return r.id;return null}function at(e,t,n,r){if(t===`rot`){let t=e.x+e.w/2,i=e.y+e.h/2,a=Math.atan2(n-t,i-r)*180/Math.PI;return{...e,rot:(a+360)%360}}if(t.startsWith(`v`)&&e.poly){let i=Number(t.slice(1)),a=e.poly.map((e,t)=>t===i?[n,r]:e),o=a.map(e=>e[0]),s=a.map(e=>e[1]),c=Math.min(...o),l=Math.min(...s);return{...e,poly:a,x:c,y:l,w:Math.max(.2,Math.max(...o)-c),h:Math.max(.2,Math.max(...s)-l)}}let{x:i,y:a,w:o,h:s}=e,c=i+o,l=a+s;if(t.includes(`w`)&&(i=Math.min(n,c-.2)),o=t.includes(`e`)?Math.max(.2,n-i):c-i,t.includes(`n`)&&(a=Math.min(r,l-.2)),s=t.includes(`s`)?Math.max(.2,r-a):l-a,(t===`n`||t===`s`)&&(i=e.x,o=e.w),(t===`e`||t===`w`)&&(a=e.y,s=e.h),e.poly&&e.poly.length&&e.w>.01&&e.h>.01){let t=o/e.w,n=s/e.h,r=e.poly.map(([r,o])=>[i+(r-e.x)*t,a+(o-e.y)*n]);return{...e,x:i,y:a,w:o,h:s,poly:r}}return{...e,x:i,y:a,w:o,h:s}}function ot(e,t){return Math.abs(t.x-e.x)>=Math.abs(t.y-e.y)?{x:t.x,y:e.y}:{x:e.x,y:t.y}}function st(e,t,n){let r=[],i=[t.x,t.x+t.w/2,t.x+t.w],a=[t.y,t.y+t.h/2,t.y+t.h];for(let t of e.features)if(!(n.includes(t.id)||t.id<0)){for(let n of[t.x,t.x+t.w/2,t.x+t.w])i.some(e=>Math.abs(e-n)<.06)&&r.push({x1:n,y1:0,x2:n,y2:e.heightM});for(let n of[t.y,t.y+t.h/2,t.y+t.h])a.some(e=>Math.abs(e-n)<.06)&&r.push({x1:0,y1:n,x2:e.widthM,y2:n})}return r}function ct(e,t=.4){return e.w>=e.h?{...e,id:0,name:`${e.name} versatz`,y:e.y+(e.h+t)}:{...e,id:0,name:`${e.name} versatz`,x:e.x+(e.w+t)}}function lt(e,t,n,r){let i=e.w>=e.h,a={...e};if(i){let r=n;for(let n of t)n.id!==e.id&&n.x>e.x+e.w*.5&&n.y<e.y+e.h&&n.y+n.h>e.y&&(r=Math.min(r,n.x));a.w=Math.max(.2,r-e.x)}else{let n=r;for(let r of t)r.id!==e.id&&r.y>e.y+e.h*.5&&r.x<e.x+e.w&&r.x+r.w>e.x&&(n=Math.min(n,r.y));a.h=Math.max(.2,n-e.y)}return a}function ut(e){let t=e.poly&&e.poly.length>2?e.poly:[[e.x,e.y],[e.x+e.w,e.y],[e.x+e.w,e.y+e.h],[e.x,e.y+e.h]];for(let e=0;e<2;e++){let e=[];for(let n=0;n<t.length;n++){let r=t[n],i=t[(n+1)%t.length];e.push([r[0]*.75+i[0]*.25,r[1]*.75+i[1]*.25]),e.push([r[0]*.25+i[0]*.75,r[1]*.25+i[1]*.75])}t=e}let n=t.map(e=>e[0]),r=t.map(e=>e[1]),i=Math.min(...n),a=Math.min(...r);return{...e,poly:t,x:i,y:a,w:Math.max(...n)-i,h:Math.max(...r)-a}}function dt(e,t=.18){let n=e.poly&&e.poly.length>2?e.poly:[[e.x,e.y],[e.x+e.w,e.y],[e.x+e.w,e.y+e.h],[e.x,e.y+e.h]],r=[];for(let e=0;e<n.length;e++){let i=n[(e-1+n.length)%n.length],a=n[e],o=n[(e+1)%n.length],s=Math.hypot(a[0]-i[0],a[1]-i[1])||1,c=Math.hypot(o[0]-a[0],o[1]-a[1])||1,l=Math.min(t,s*.45),u=Math.min(t,c*.45);r.push([a[0]+(i[0]-a[0])/s*l,a[1]+(i[1]-a[1])/s*l]),r.push([a[0]+(o[0]-a[0])/c*u,a[1]+(o[1]-a[1])/c*u])}let i=r.map(e=>e[0]),a=r.map(e=>e[1]),o=Math.min(...i),s=Math.min(...a);return{...e,poly:r,x:o,y:s,w:Math.max(...i)-o,h:Math.max(...a)-s}}function ft(e,t=`DXF`){if(!/^\s*0\s+SECTION/m.test(e)&&!e.includes(`ENTITIES`))return null;let n=e.replace(/\r/g,``).split(`
`),r=[],i=0,a=1,o=()=>(i+=1,Number(n[i]||0));for(;i<n.length;){let e=n[i]?.trim(),t=n[i+1]?.trim();if(e===`0`&&t===`LINE`){let e=0,t=0,s=1,c=0;for(i+=2;i<n.length&&n[i]?.trim()!==`0`;){let r=n[i]?.trim();r===`10`?e=o():r===`20`?t=o():r===`11`?s=o():r===`21`&&(c=o()),i+=1}let l=Math.min(e,s),u=Math.min(t,c);r.push({id:a++,kind:`weg`,name:`Linie ${a}`,x:l,y:u,w:Math.max(.2,Math.abs(s-e)),h:Math.max(.2,Math.abs(c-t))});continue}if(e===`0`&&(t===`LWPOLYLINE`||t===`POLYLINE`)){let e=[];for(i+=2;i<n.length&&n[i]?.trim()!==`0`;){if(n[i]?.trim()===`10`){let t=o();i+=1,n[i]?.trim()===`20`&&e.push([t,o()])}i+=1}if(e.length>=2){let t=e.map(e=>e[0]),n=e.map(e=>e[1]),i=Math.min(...t),o=Math.min(...n);r.push({id:a++,kind:`beet`,name:`Poly ${a}`,x:i,y:o,w:Math.max(.3,Math.max(...t)-i),h:Math.max(.3,Math.max(...n)-o),poly:e})}continue}if(e===`0`&&t===`CIRCLE`){let e=0,t=0,s=.5;for(i+=2;i<n.length&&n[i]?.trim()!==`0`;){let r=n[i]?.trim();r===`10`?e=o():r===`20`?t=o():r===`40`&&(s=Math.max(.1,o())),i+=1}r.push({id:a++,kind:`tank`,name:`Kreis ${a}`,x:e-s,y:t-s,w:s*2,h:s*2});continue}i+=1}if(!r.length)return null;let s=Math.max(20,...r.map(e=>e.x+e.w)),c=Math.max(16,...r.map(e=>e.y+e.h));return{v:125,kind:`ackerlicht`,name:t,widthM:Math.min(800,s+2),heightM:Math.min(800,c+2),soil:`lehm`,week:22,rainMm:0,features:r,plants:[]}}function pt(e){let t=[`0`,`SECTION`,`2`,`ENTITIES`],n=(...e)=>{for(let n of e)t.push(String(n))};for(let t of e.features)if(!(t.id<0)){if(t.poly&&t.poly.length>1){n(`0`,`LWPOLYLINE`,`8`,t.kind,`90`,t.poly.length,`70`,`1`);for(let[e,r]of t.poly)n(`10`,e.toFixed(3),`20`,r.toFixed(3))}else n(`0`,`LWPOLYLINE`,`8`,t.kind,`90`,`4`,`70`,`1`),n(`10`,t.x.toFixed(3),`20`,t.y.toFixed(3)),n(`10`,(t.x+t.w).toFixed(3),`20`,t.y.toFixed(3)),n(`10`,(t.x+t.w).toFixed(3),`20`,(t.y+t.h).toFixed(3)),n(`10`,t.x.toFixed(3),`20`,(t.y+t.h).toFixed(3))}return n(`0`,`ENDSEC`,`0`,`EOF`),t.join(`
`)}function mt(e){if(e.poly&&e.poly.length>2){let t=0;for(let n=0,r=e.poly.length-1;n<e.poly.length;r=n++)t+=e.poly[r][0]*e.poly[n][1]-e.poly[n][0]*e.poly[r][1];return Math.abs(t)/2}return Math.max(0,e.w)*Math.max(0,e.h)}function ht(e){if(e.poly&&e.poly.length>1){let t=0;for(let n=0;n<e.poly.length;n++){let r=e.poly[n],i=e.poly[(n+1)%e.poly.length];t+=Math.hypot(i[0]-r[0],i[1]-r[1])}return t}return 2*(e.w+e.h)}function gt(e,t){let n=e.features.filter(e=>t.includes(e.id));return{area:n.reduce((e,t)=>e+mt(t),0),peri:n.reduce((e,t)=>e+ht(t),0),pipe:n.filter(e=>/leitung|tropf|rohr|bewasser/i.test(e.kind)||/leitung/i.test(e.name)).reduce((e,t)=>e+ht(t)/(t.poly?1:2)*!!t.poly+(t.poly?0:Math.max(t.w,t.h)),0),n:n.length}}function _t(e,t,n,r){let i={...e,id:r&&r>0?r:e.id,name:`${e.name} Spiegel`};return t===`v`?(i.x=2*n-e.x-e.w,i.poly=e.poly?.map(([e,t])=>[2*n-e,t])):(i.y=2*n-e.y-e.h,i.poly=e.poly?.map(([e,t])=>[e,2*n-t])),i.rot=e.rot?t===`v`?(180-e.rot+360)%360:(360-e.rot)%360:e.rot,i}function vt(e,t,n,r,i){let a=[],o=e.x+e.w/2-t,s=e.y+e.h/2-n,c=1,l=i??(()=>c+=1);for(let i=1;i<r;i++){let c=i*2*Math.PI/r,u=o*Math.cos(c)-s*Math.sin(c),d=o*Math.sin(c)+s*Math.cos(c);a.push({...e,id:l(),name:`${e.name} ${i+1}`,x:t+u-e.w/2,y:n+d-e.h/2,rot:((e.rot||0)+i*360/r)%360})}return a}function yt(e,t){if(e.w>=e.h){let n=e.w/2;return[{...e,w:n,name:`${e.name} A`},{...e,id:t&&t>0?t:e.id,x:e.x+n,w:n,name:`${e.name} B`}]}let n=e.h/2;return[{...e,h:n,name:`${e.name} A`},{...e,id:t&&t>0?t:e.id,y:e.y+n,h:n,name:`${e.name} B`}]}function bt(e){if(e.length<2)return null;let t=Math.min(...e.map(e=>e.x)),n=Math.min(...e.map(e=>e.y)),r=Math.max(...e.map(e=>e.x+e.w)),i=Math.max(...e.map(e=>e.y+e.h));return{...e[0],id:e[0].id,name:e[0].name,x:t,y:n,w:r-t,h:i-n,poly:void 0}}function xt(e){let t=e.map(e=>e.x),n=e.map(e=>e.y),r=Math.min(...t),i=Math.min(...n);return{x:r,y:i,w:Math.max(.2,Math.max(...t)-r),h:Math.max(.2,Math.max(...n)-i),poly:e.map(e=>[e.x,e.y])}}function St(e,t,n,r=20){let i=2*(e.x*(t.y-n.y)+t.x*(n.y-e.y)+n.x*(e.y-t.y));if(Math.abs(i)<1e-6)return[e,t,n];let a=((e.x**2+e.y**2)*(t.y-n.y)+(t.x**2+t.y**2)*(n.y-e.y)+(n.x**2+n.y**2)*(e.y-t.y))/i,o=((e.x**2+e.y**2)*(n.x-t.x)+(t.x**2+t.y**2)*(e.x-n.x)+(n.x**2+n.y**2)*(t.x-e.x))/i,s=Math.hypot(e.x-a,e.y-o),c=Math.atan2(e.y-o,e.x-a),l=Math.atan2(t.y-o,t.x-a),u=Math.atan2(n.y-o,n.x-a),d=Math.sign((e=>(e-c+Math.PI*3)%(Math.PI*2)-Math.PI)(l))||1,f=u-c;for(;d>0&&f<0;)f+=Math.PI*2;for(;d<0&&f>0;)f-=Math.PI*2;let p=[];for(let e=0;e<=r;e++){let t=c+f*e/r;p.push({x:a+s*Math.cos(t),y:o+s*Math.sin(t)})}return p}function Ct(e){return[[e.x,e.y,e.x+e.w,e.y],[e.x+e.w,e.y,e.x+e.w,e.y+e.h],[e.x+e.w,e.y+e.h,e.x,e.y+e.h],[e.x,e.y+e.h,e.x,e.y]]}function wt(e,t){let[n,r,i,a]=e,[o,s,c,l]=t,u=(n-i)*(s-l)-(r-a)*(o-c);if(Math.abs(u)<1e-9)return null;let d=((n-o)*(s-l)-(r-s)*(o-c))/u,f=((n-o)*(r-a)-(r-s)*(n-i))/u;return d<0||d>1||f<0||f>1?null:{x:n+d*(i-n),y:r+d*(a-r)}}function Tt(e,t,n){let[r,i,a,o]=n,s=(a-r)**2+(o-i)**2||1,c=Math.max(0,Math.min(1,((e-r)*(a-r)+(t-i)*(o-i))/s));return{x:r+c*(a-r),y:i+c*(o-i)}}function Et(e,t,n,r,i=.14){let a=t,o=n,s=i,c=`objekt`,l=(e,r,i)=>{let l=Math.hypot(t-e,n-r);l<s&&(s=l,a=e,o=r,c=i)},u=e.features.filter(e=>e.id>=0);if(r.end||r.mid)for(let e of u)r.end&&(l(e.x,e.y,`end`),l(e.x+e.w,e.y,`end`),l(e.x,e.y+e.h,`end`),l(e.x+e.w,e.y+e.h,`end`)),r.mid&&(l(e.x+e.w/2,e.y,`mitte`),l(e.x+e.w/2,e.y+e.h,`mitte`),l(e.x,e.y+e.h/2,`mitte`),l(e.x+e.w,e.y+e.h/2,`mitte`),l(e.x+e.w/2,e.y+e.h/2,`mitte`));if(r.ints){let e=u.flatMap(Ct);for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let r=wt(e[t],e[n]);r&&l(r.x,r.y,`schnitt`)}}if(r.perp)for(let e of u)for(let r of Ct(e)){let e=Tt(t,n,r);l(e.x,e.y,`kante`)}return{x:a,y:o,d:s,kind:c}}function Dt(e,t=.2){let n=e.hm;if(!n||n.length<1089)return[];let r=[],i=Math.min(...n),a=Math.max(...n),o=(e,t)=>n[t*33+e]||0,s=t=>t/32*e.widthM,c=t=>t/32*e.heightM;for(let e=Math.ceil(i/t)*t;e<=a+1e-6;e+=t)for(let t=0;t<32;t++)for(let n=0;n<32;n++){let i=[o(n,t),o(n+1,t),o(n+1,t+1),o(n,t+1)],a=[],l=(t,n,r,o,s,c)=>{if(i[t]<e==i[n]<e)return;let l=(e-i[t])/(i[n]-i[t]+1e-9);a.push({x:r+(s-r)*l,y:o+(c-o)*l})};l(0,1,s(n),c(t),s(n+1),c(t)),l(1,2,s(n+1),c(t),s(n+1),c(t+1)),l(2,3,s(n+1),c(t+1),s(n),c(t+1)),l(3,0,s(n),c(t+1),s(n),c(t)),a.length>=2&&r.push({x1:a[0].x,y1:a[0].y,x2:a[1].x,y2:a[1].y})}return r}function Ot(e){let t=e.heightM,n=e=>{let n={x:t-e.y,y:e.x},r={x:t-(e.y+e.h),y:e.x+e.w},i=e.poly?.map(([e,n])=>[t-n,e]);return{...e,x:Math.min(n.x,r.x),y:Math.min(n.y,r.y),w:Math.abs(n.x-r.x)||e.h,h:Math.abs(n.y-r.y)||e.w,poly:i}},r=e.hm;if(r&&r.length>=64){let e=Math.round(Math.sqrt(r.length));if(e*e===r.length){let t=Array(e*e);for(let n=0;n<e;n++)for(let i=0;i<e;i++)t[n*e+i]=r[(e-1-i)*e+n]||0;r=t}}return{...e,widthM:e.heightM,heightM:e.widthM,features:e.features.map(n),plants:e.plants.map(e=>({...e,x:t-e.y,y:e.x})),gpsPts:e.gpsPts?.map(e=>({...e,x:t-e.y,y:e.x})),hm:r}}var kt=[{id:`sand`,label:`Sand (S)`,nfk60:48,ksat:50},{id:`sls`,label:`lehmiger Sand`,nfk60:72,ksat:25},{id:`lehm`,label:`Lehm (L)`,nfk60:102,ksat:6},{id:`ton`,label:`Ton (T)`,nfk60:102,ksat:.8},{id:`humus`,label:`Humus`,nfk60:144,ksat:15}],At=[{name:`Bunter Blattsalat`,mm:4.5,space:.25},{name:`Tomate`,mm:6,space:.5},{name:`Möhre`,mm:3.5,space:.08},{name:`Zucchini`,mm:7,space:.8},{name:`Buschbohne`,mm:3.5,space:.3},{name:`Kartoffel`,mm:4,space:.35},{name:`Zwiebel`,mm:3,space:.1},{name:`Basilikum`,mm:4,space:.2},{name:`Erdbeere`,mm:4,space:.3},{name:`Kohlrabi`,mm:5,space:.3}],jt=1,Mt=()=>jt++;function Nt(e){let t=jt++;for(;t<1||e?.has(t);)t=jt++;return e?.add(t),t}function Pt(e){return new Set([...e.features.map(e=>e.id),...e.plants.map(e=>e.id)])}function Ft(e){let t=2;for(let n of e.features){let e=Number(n.id);Number.isFinite(e)&&e>t&&(t=e)}for(let n of e.plants){let e=Number(n.id);Number.isFinite(e)&&e>t&&(t=e)}return jt=t+1,e}function It(e){let t=String(e.name||``).trim(),n=String(e.kind||``);return!!(n===`nordpfeil`&&/^nord$/i.test(t)||n===`masslinie`&&/0\s*[—\-–]\s*5/.test(t)||(n===`beschriftung`||n===`label`)&&/^schriftfeld$/i.test(t))}function Lt(e){let t=e.features.filter(e=>!It(e)),n=!!e.sheet&&(!e.sheet.drawn||e.sheet.drawn===`Ackerlicht`);return t.length===e.features.length&&!n?e:{...e,features:t,sheet:n?void 0:e.sheet}}function Rt(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Number(n.x),i=Number(n.y),a=Number(n.w),o=Number(n.h);if(![r,i,a,o].every(Number.isFinite))return null;let s=Number(n.id);return Number.isFinite(s)&&s<0?null:{...n,id:Number.isFinite(s)&&s>0?s:t+1,kind:typeof n.kind==`string`&&n.kind?n.kind:`beet`,name:String(n.name||`Objekt ${t+1}`).slice(0,80),x:r,y:i,w:Math.max(.1,a),h:Math.max(.1,o),rot:Number.isFinite(Number(n.rot))?Number(n.rot):void 0,tall:Number.isFinite(Number(n.tall))?Math.max(.05,Number(n.tall)):void 0,elev:Number.isFinite(Number(n.elev))?Number(n.elev):void 0}}function zt(e){if(!Array.isArray(e)||e.length<64)return;let t=Math.round(Math.sqrt(e.length));if(t*t===e.length)return e.map(e=>{let t=Number(e);return Number.isFinite(t)?t:0})}function Bt(e=`Irmgärtchen`){return jt=Math.max(jt,3),{v:125,kind:`ackerlicht`,name:e,widthM:24,heightM:16,soil:`lehm`,week:22,rainMm:8,year:2026,units:`m`,rainHist:Array.from({length:52},(e,t)=>t>10&&t<40?8:4),tasks:[],features:[{id:1,kind:`beet`,name:`Beet 1`,x:8,y:6,w:8,h:2.4}],plants:[]}}function Vt(e){if(!e||typeof e!=`object`)return null;let t=e;if(t.kind!==`ackerlicht`)return null;let n=Bt(t.name||`Garten`),r=t.sheet&&typeof t.sheet==`object`?t.sheet:void 0,i=!!r&&(!r.drawn||r.drawn===`Ackerlicht`),a=Array.isArray(t.features)?t.features.map(Rt).filter(Boolean).filter(e=>e.id>0&&!It(e)):n.features;return{...n,name:String(t.name||`Garten`).slice(0,80),widthM:Math.min(800,Math.max(.1,Number(t.widthM)||24)),heightM:Math.min(800,Math.max(.1,Number(t.heightM)||16)),soil:kt.some(e=>e.id===t.soil)?t.soil:`lehm`,week:Math.min(52,Math.max(1,Number(t.week)||22)),rainMm:Math.max(0,Number(t.rainMm)||0),features:a,plants:Array.isArray(t.plants)?t.plants.map((e,t)=>{if(!e||typeof e!=`object`)return null;let n=Number(e.x),r=Number(e.y);return!Number.isFinite(n)||!Number.isFinite(r)?null:{id:Number(e.id)||t+1,featureId:Number(e.featureId)||0,crop:String(e.crop||`Tomate`),x:n,y:r,harvested:!!e.harvested}}).filter(Boolean):[],aerial:t.aerial&&typeof t.aerial==`object`?t.aerial:void 0,hm:zt(t.hm),sheet:i?void 0:r,year:Math.max(2e3,Number(t.year)||2026),units:t.units===`cm`?`cm`:`m`,rainHist:Array.isArray(t.rainHist)?t.rainHist.map(e=>Number(e)||0):void 0,tasks:Array.isArray(t.tasks)?t.tasks:[],cost:Number(t.cost)||0,yieldIst:Array.isArray(t.yieldIst)?t.yieldIst:[],epsg:Number(t.epsg)||25832,origin:t.origin&&typeof t.origin==`object`?t.origin:void 0,gpsPts:Array.isArray(t.gpsPts)?t.gpsPts:[],seedStock:Array.isArray(t.seedStock)?t.seedStock:[],fert:Array.isArray(t.fert)?t.fert:[],rotationHist:Array.isArray(t.rotationHist)?t.rotationHist:[],camSlots:Array.isArray(t.camSlots)?t.camSlots:[],weather:Array.isArray(t.weather)?t.weather:[],costs:Array.isArray(t.costs)?t.costs:[],csa:t.csa&&typeof t.csa==`object`?t.csa:void 0,team:Array.isArray(t.team)?t.team:[],hours:Number(t.hours)||0,passHash:typeof t.passHash==`string`?t.passHash:void 0,readonly:!!t.readonly,photos:Array.isArray(t.photos)?t.photos:[],customCrops:Array.isArray(t.customCrops)?t.customCrops:[],layerMap:Array.isArray(t.layerMap)?t.layerMap:[],farmNo:typeof t.farmNo==`string`?t.farmNo:``,bio:!!t.bio,stock:Array.isArray(t.stock)?t.stock:[],members:Array.isArray(t.members)?t.members:[],hoursLog:Array.isArray(t.hoursLog)?t.hoursLog:[],spray:Array.isArray(t.spray)?t.spray:[],sensors:Array.isArray(t.sensors)?t.sensors:[],rules:Array.isArray(t.rules)?t.rules:[],wxStation:t.wxStation===`alpin`||t.wxStation===`warm`?t.wxStation:t.wxStation===`chiemgau`?`chiemgau`:void 0}}function Ht(e,t=`Import`){let n=e.replace(/\r/g,``).split(`
`).map(e=>e.trim()).filter(Boolean);if(n.length<2)return null;let r=Bt(t);r.features=[],r.plants=[];let i=1;for(let e of n.slice(1)){let[t,n,a,o,s,c]=e.split(`;`);if(t===`pflanze`){r.plants.push({id:i++,featureId:r.features[0]?.id??0,crop:n||`Tomate`,x:Number(a)||0,y:Number(o)||0,harvested:!1});continue}Ke.includes(t)&&r.features.push({id:i++,kind:t,name:n||t,x:Number(a)||0,y:Number(o)||0,w:Math.max(.1,Number(s)||1),h:Math.max(.1,Number(c)||1)})}return r.features.length?Ft(r):null}function Ut(e,t){let n=e.trim();if(!n)return null;if(n.startsWith(`{`))try{return Vt(JSON.parse(n))}catch{return null}let r=ft(n,t??`DXF`);return r?Ft(r):Ht(n,t??`Import`)}function Wt(e,t,n=`text/plain`){let r=typeof window<`u`?window.desktop:void 0;if(r?.save){let n=e.includes(`.`)?e.replace(/^.*\./,``):`txt`,i=e.replace(/\.[^.]+$/,``);r.save(i,t,void 0,n);return}let i=document.createElement(`a`);i.href=URL.createObjectURL(new Blob([t],{type:n})),i.download=e,i.click()}function Gt(e,t,n=`application/octet-stream`){let r=document.createElement(`a`),i=new Uint8Array(t.byteLength);i.set(t),r.href=URL.createObjectURL(new Blob([i],{type:n})),r.download=e,r.click()}function Kt(e){let t=e.reduce((e,t)=>e+t.length,0),n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}function Z(e){return Uint8Array.of(e&255,e>>>8&255)}function qt(e){return Uint8Array.of(e&255,e>>>8&255,e>>>16&255,e>>>24&255)}function Jt(e){let t=4294967295;for(let n=0;n<e.length;n++){t^=e[n];for(let e=0;e<8;e++)t=t>>>1^3988292384&-(t&1)}return(t^4294967295)>>>0}function Yt(e){let t=[],n=[],r=0,i=new TextEncoder;for(let a of e){let e=i.encode(a.name.replace(/\\/g,`/`)),o=Jt(a.data),s=a.data.length,c=Kt([qt(67324752),Z(20),Z(0),Z(0),Z(0),Z(0),qt(o),qt(s),qt(s),Z(e.length),Z(0),e,a.data]);t.push(c),n.push(Kt([qt(33639248),Z(20),Z(20),Z(0),Z(0),Z(0),Z(0),qt(o),qt(s),qt(s),Z(e.length),Z(0),Z(0),Z(0),Z(0),qt(0),qt(r),e])),r+=c.length}let a=Kt(n),o=Kt([qt(101010256),Z(0),Z(0),Z(e.length),Z(e.length),qt(a.length),qt(r),Z(0)]);return Kt([...t,a,o])}function Xt(e){let t=e.features.map(e=>`${e.kind};${e.name};${e.x};${e.y};${e.w};${e.h}`),n=e.plants.map(e=>`pflanze;${e.crop};${e.x};${e.y};;`);return[`art;name;x;y;breite;laenge`,...t,...n].join(`
`)}function Zt(e){let t=e.features.map(e=>{let t=qe[e.kind]??(e.kind===`schlag`?`#d8c49a`:`#8a5a32`),n=`transform="rotate(${e.rot||0} ${e.x+e.w/2} ${e.y+e.h/2})"`;return`<rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" fill="${t}" ${n}/><text x="${e.x+.1}" y="${e.y+.4}" font-size="0.35" fill="#faf7f1">${Qt(e.name)}</text>`}).join(``),n=Math.max(.1,e.widthM),r=Math.max(.1,e.heightM);return`<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${r}" width="1200" height="${Math.round(1200*r/n)}"><rect width="${n}" height="${r}" fill="#4a7a38"/>${t}</svg>`}function Qt(e){return e.split(`&`).join(`&amp;`).split(`<`).join(`&lt;`).split(`>`).join(`&gt;`).split(`"`).join(`&quot;`).split(`'`).join(`&apos;`)}var $t=`ackerlicht-templates-125`;function en(){try{let e=JSON.parse(localStorage.getItem($t)||`[]`);return Array.isArray(e)?e.map(e=>Vt(e)).filter(Boolean):[]}catch{return[]}}function tn(e){let t=[{...e,name:e.name||`Vorlage`},...en().filter(t=>t.name!==e.name)].slice(0,12);try{localStorage.setItem($t,JSON.stringify(t))}catch{}return t}var nn=`ackerlicht-garden-125`;function rn(e){try{localStorage.setItem(nn,JSON.stringify(e))}catch{}}function an(e,t){Ft(e);let n=Pt(e),r=new Map,i=t.features.filter(e=>e.id>0).map(e=>{let t=Nt(n);return r.set(e.id,t),{...e,id:t,x:e.x+.4,y:e.y+.4}}),a=t.plants.map(e=>({...e,id:Nt(n),featureId:r.get(e.featureId)??e.featureId,x:e.x+.4,y:e.y+.4}));return{...e,features:[...e.features,...i],plants:[...e.plants,...a]}}function on(e){return kt.find(t=>t.id===e)??kt[2]}var sn=[{name:`Bunter Blattsalat`,family:`Korbblütler`,sow:[10,36],plant:[12,38],harvest:[16,44],kgM2:2.4,n:2.2,p:.7,k:3.8,days:45,tbase:5,rootM:.25,waitY:2,kcIni:.7,kcMid:1,kcEnd:.95},{name:`Tomate`,family:`Nachtschatten`,sow:[8,16],plant:[18,24],harvest:[28,40],kgM2:8,n:2.5,p:.9,k:4.2,days:90,tbase:10,rootM:.6,waitY:4,kcIni:.6,kcMid:1.15,kcEnd:.8},{name:`Möhre`,family:`Doldenblütler`,sow:[10,28],plant:[10,28],harvest:[22,42],kgM2:4,n:1.6,p:.6,k:3.2,days:80,tbase:5,rootM:.8,waitY:3,kcIni:.7,kcMid:1.05,kcEnd:.95},{name:`Zucchini`,family:`Kürbisgewächs`,sow:[16,24],plant:[20,28],harvest:[26,38],kgM2:6,n:2,p:.8,k:3.6,days:55,tbase:10,rootM:.45,waitY:4,kcIni:.5,kcMid:1,kcEnd:.8},{name:`Buschbohne`,family:`Leguminose`,sow:[18,30],plant:[18,30],harvest:[26,38],kgM2:1.8,n:.6,p:.8,k:2.4,days:55,tbase:10,rootM:.4,waitY:3,kcIni:.4,kcMid:1.05,kcEnd:.9},{name:`Kartoffel`,family:`Nachtschatten`,sow:[12,18],plant:[12,18],harvest:[28,36],kgM2:3.5,n:3.5,p:1.2,k:5.5,days:100,tbase:7,rootM:.5,waitY:4,kcIni:.5,kcMid:1.15,kcEnd:.75},{name:`Zwiebel`,family:`Lauchgewächs`,sow:[8,16],plant:[12,18],harvest:[28,34],kgM2:3.2,n:2.4,p:.7,k:2.8,days:110,tbase:5,rootM:.35,waitY:4,kcIni:.7,kcMid:1.05,kcEnd:.75},{name:`Basilikum`,family:`Lippenblütler`,sow:[14,28],plant:[18,32],harvest:[22,40],kgM2:1.2,n:3,p:.8,k:3.5,days:40,tbase:10,rootM:.25,waitY:2,kcIni:.6,kcMid:1.1,kcEnd:.95},{name:`Erdbeere`,family:`Rosengewächs`,sow:[10,14],plant:[12,36],harvest:[20,28],kgM2:1.5,n:2.8,p:.9,k:4,days:120,tbase:5,rootM:.3,waitY:4,kcIni:.4,kcMid:.85,kcEnd:.7},{name:`Kohlrabi`,family:`Kreuzblütler`,sow:[10,30],plant:[12,32],harvest:[18,38],kgM2:3,n:3.2,p:1,k:4.4,days:55,tbase:5,rootM:.4,waitY:3,kcIni:.7,kcMid:1.05,kcEnd:.95}];function cn(e){let t=sn.find(t=>t.name===e);if(t)return t;let n=(e||``).toLowerCase(),r=sn.find(e=>n.includes(e.name.toLowerCase().split(` `)[0].toLowerCase()));if(r)return{...r,name:e};let i=/tomat|paprika|kartoffel|aubergine|chili/.test(n)?`Nachtschatten`:/bohne|erbse|linse/.test(n)?`Leguminose`:/kohl|kohlrabi|radies|senf/.test(n)?`Kreuzblütler`:/möhre|sellerie|petersil|pastinak/.test(n)?`Doldenblütler`:/zwiebel|lauch|knoblauch/.test(n)?`Lauchgewächs`:/kürbis|gurke|zucchini/.test(n)?`Kürbisgewächs`:/salat|sonnen/.test(n)?`Korbblütler`:/basilik|minze|thymian|oregano/.test(n)?`Lippenblütler`:/apfel|birne|kirsch|pflaume|beere|erdbeer/.test(n)?`Rosengewächs`:`Gemüse`;return{...i===`Nachtschatten`?sn[1]:i===`Leguminose`?sn[4]:i===`Doldenblütler`?sn[2]:i===`Lauchgewächs`?sn[6]:i===`Kürbisgewächs`?sn[3]:i===`Lippenblütler`?sn[7]:i===`Rosengewächs`?sn[8]:sn[0],name:e,family:i}}function ln(e=new Date){let t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));let n=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t.getTime()-n.getTime())/864e5+1)/7)}function un(e,t){return e>=t[0]&&e<=t[1]}function dn(e){let t=Math.max(0,Math.min(1,(e-6)/36));return .4+3.5*Math.sin(Math.PI*t)}function fn(e){let t=Math.max(0,Math.min(1,(e-5)/38));return 1.2+17.5*Math.sin(Math.PI*t)}function pn(e,t){return Math.max(0,fn(e)-t)*7}function mn(e,t){return un(t,e.harvest)?`ernte`:t>=e.plant[0]&&t<e.harvest[0]?t<e.plant[0]+3?`jung`:`wuchs`:un(t,e.sow)||un(t,e.plant)?`saat`:t>e.sow[0]&&t<e.harvest[0]?`wuchs`:`pause`}function hn(e,t){let n=mn(e,t);return n===`pause`?.15:n===`saat`?e.kcIni*.85:n===`jung`?e.kcIni:n===`wuchs`?e.kcMid:e.kcEnd}function gn(e){return e===`pause`?`Ruhe`:e===`saat`?`Saat`:e===`jung`?`Jungpflanze`:e===`wuchs`?`Hauptwuchs`:`Ernte`}function _n(e){return sn.map(t=>({name:t.name,family:t.family,sow:un(e,t.sow),plant:un(e,t.plant),harvest:un(e,t.harvest),stage:mn(t,e),kc:hn(t,e),et0:dn(e),etc:dn(e)*hn(t,e)})).filter(e=>e.sow||e.plant||e.harvest)}function vn(e){return At.find(t=>t.name===e)??At[0]}function yn(e){let t=vn(e).space;return Math.max(.01,t*t)}function bn(e){let t=on(e.soil),n=dn(e.week),r=t.nfk60*.5;return e.features.filter(e=>Ye(e.kind)).map(i=>{let a=e.plants.filter(e=>e.featureId===i.id&&!e.harvested),o=Math.max(.1,i.w*i.h),s=0,c=0,l=new Set;for(let t of a){let n=cn(t.crop);s+=hn(n,e.week),l.add(n.family),c+=1}let u=i.mulch?.72:1,d=c?s/c:.3,f=n*d*7*u,p=e.rainMm*.8,m=Math.max(0,f-p),h=Math.min(m,r*1.2),g=Math.max(0,p-f-(t.nfk60-r)),_=r+p-f,v=_<r*.3;return{id:i.id,name:i.name,need:f,store:r,rain:e.rainMm,net:_,empty:v,n:c,area:o,kc:d,et0:n,irrigMm:h,irrigL:h*o,percol:g,families:[...l],mix:l.size>1,density:c/o,occupancy:c/(o/Math.max(.04,yn(a[0]?.crop??`Bunter Blattsalat`)))}})}function xn(e){let t=on(e),n=t.nfk60;return[{id:`A`,name:`Krume 0–30 cm`,nfk:n*.4,ksat:t.ksat*1.4,aw:n*.4*.5,thick:.3},{id:`B`,name:`Unterboden 30–80 cm`,nfk:n*.4,ksat:t.ksat*.45,aw:n*.4*.5,thick:.5},{id:`C`,name:`Ausgangsgestein 80–200 cm`,nfk:n*.7,ksat:t.ksat*.12,aw:n*.7*.35,thick:1.2}]}function Sn(e,t){let n=cn(e),r=yn(e)*t,i=n.kgM2*r;return{yieldKg:i,n:i*n.n,p:i*n.p,k:i*n.k,m2:r}}function Cn(e){let t=e.features.filter(e=>Ye(e.kind)),n=Math.max(.01,e.widthM*e.heightM),r=t.reduce((e,t)=>e+t.w*t.h,0),i=e.features.filter(e=>/weg|path|gasse/i.test(e.kind+e.name)).reduce((e,t)=>e+t.w*t.h,0),a=e.plants.filter(e=>!e.harvested),o=e.plants.filter(e=>e.harvested),s=bn(e),c=on(e.soil),l=dn(e.week),u=fn(e.week),d=0,f=0,p=0,m=0,h=0,g=new Map,_=new Map;for(let t of a){let n=cn(t.crop),r=Sn(t.crop,1);d+=r.yieldKg,f+=r.n,p+=r.p,m+=r.k,h+=hn(n,e.week),g.set(t.crop,(g.get(t.crop)??0)+1),_.set(n.family,(_.get(n.family)??0)+1)}let v=a.length?h/a.length:.3,y=l*v*7,b=s.reduce((e,t)=>e+t.irrigMm*t.area,0)/Math.max(.1,r),x=s.reduce((e,t)=>e+t.irrigL,0),S=s.filter(e=>e.mix).length,C=s.filter(e=>e.families.includes(`Nachtschatten`)).length,w=r/1e4;return{area:n,bedArea:r,pathArea:i,bedShare:r/n*100,beds:t.length,plants:a.length,harvested:o.length,needMm:y,rain:e.rainMm,nfk:c.nfk60,ksat:c.ksat,netMm:c.nfk60*.5+e.rainMm*.8-y,yieldKg:d,n:f,p,k:m,byCrop:[...g.entries()].sort((e,t)=>t[1]-e[1]),week:e.week,soil:c.label,et0:l,tmean:u,kcMean:v,irrigMm:b,irrigL:x,gdd:pn(e.week,6),nKgHa:w>0?f/1e3/w:0,kasKg:f/1e3/.27,mixBeds:S,nightshadeBeds:C,occupancy:s.length?s.reduce((e,t)=>e+t.occupancy,0)/s.length:0,families:[..._.entries()]}}function wn(e){let t=Cn(e);return[[`Kennzahl`,`Wert`,`Einheit`],[`Fläche`,t.area.toFixed(1),`m²`],[`Beetfläche`,t.bedArea.toFixed(1),`m²`],[`ETc`,t.needMm.toFixed(1),`mm/Woche`],[`Beregnung`,t.irrigL.toFixed(0),`Liter`],[`Ertrag`,t.yieldKg.toFixed(1),`kg`],[`N`,t.n.toFixed(0),`g`],[`P`,t.p.toFixed(0),`g`],[`K`,t.k.toFixed(0),`g`]].map(e=>e.join(`;`)).join(`
`)}function Tn(e,t){let n=cn(e).family,r=cn(t).family;return n===`Nachtschatten`&&r===`Nachtschatten`?!1:n===`Doldenblütler`&&r===`Lauchgewächs`||r===`Doldenblütler`&&n===`Lauchgewächs`||e.includes(`Tomate`)&&t.includes(`Basilikum`)||t.includes(`Tomate`)&&e.includes(`Basilikum`)?!0:n!==r}function En(e){return bn(e).map(t=>{let n=e.plants.filter(e=>e.featureId===t.id&&!e.harvested),r=[...new Set(n.map(e=>cn(e.crop).family))],i=Math.max(0,...n.map(e=>cn(e.crop).waitY)),a=n.some((e,t)=>n.slice(t+1).some(t=>!Tn(e.crop,t.crop))),o=[t.mix?`Mischbeet mehrerer Familien`:``,r.includes(`Nachtschatten`)&&i>=4?`Nachtschatten: 4 Jahre Abstand`:``,a?`Ungünstige Nachbarschaft`:``].filter(Boolean);return{id:t.id,name:t.name,fams:r,wait:i,warn:o,n:n.length}})}function Dn(e){let t=Cn(e),n=t.families.filter(e=>e[0]===`Leguminose`).reduce((e,t)=>e+t[1],0);return t.yieldKg*.12+n*.08+t.bedArea*.05}function On(e){let t=Cn(e),n=Math.max(1,40-e.week);return t.irrigL*n*.55/1e3}function kn(e){let t=Cn(e);return(e.cost||0)+t.bedArea*1.8+t.plants*.28+t.kasKg*.85}function An(e){let t=(e||``).toLowerCase();return/tomat|paprika|chili/.test(t)?{good:[`Basilikum`,`Möhre`,`Zwiebel`,`Tagetes`],bad:[`Kartoffel`,`Fenchel`,`Erbse`],note:`Luftig stellen, nicht neben anderen Nachtschatten.`}:/kartoffel/.test(t)?{good:[`Meerrettich`,`Dicke Bohne`],bad:[`Tomate`,`Kürbis`,`Sonnenblume`],note:`Fruchtfolge 4 Jahre, Krautfäule meiden.`}:/möhre|mohre|karotte/.test(t)?{good:[`Zwiebel`,`Lauch`,`Radieschen`,`Salat`],bad:[`Dill`],note:`Mit Zwiebel gegen Möhrenfliege.`}:/zwiebel|lauch|knoblauch/.test(t)?{good:[`Möhre`,`Salat`,`Erdbeere`],bad:[`Bohne`,`Erbse`],note:`Nicht zu nass, Abstand 8–12 cm.`}:/bohne|erbse/.test(t)?{good:[`Mais`,`Gurke`,`Kartoffeln`],bad:[`Zwiebel`,`Lauch`,`Knoblauch`],note:`Bindet Stickstoff, gute Vorkultur.`}:/salat|blatt/.test(t)?{good:[`Möhre`,`Radieschen`,`Kohlrabi`],bad:[`Petersilie`],note:`Schwachzehrer, oft nachsetzen.`}:/kohl|kohlrabi/.test(t)?{good:[`Sellerie`,`Salat`,`Dill`],bad:[`andere Kreuzblütler`],note:`Erdflöhe: Netz, Fruchtfolge 3 Jahre.`}:/zucchini|kürbis|gurke/.test(t)?{good:[`Bohne`,`Mais`,`Basilikum`],bad:[`Kartoffel`],note:`Viel Wärme und Wasser, Platz lassen.`}:/basilik|kräuter|kraeuter/.test(t)?{good:[`Tomate`,`Paprika`],bad:[`Minze (wuchert)`],note:`Wärmebedürftig, oft ernten.`}:/erdbeer/.test(t)?{good:[`Lauch`,`Buschbohne`,`Spinat`],bad:[`Kohl`],note:`Mulch gegen Fruchtfäule.`}:{good:[`Salat`,`Kräuter`],bad:[`gleiche Familie`],note:cn(e).family+` · Abstand und Fruchtfolge beachten.`}}function jn(e){return e<18?{frost:!0,text:`Noch Frostgefahr (Alpenvorland oft bis KW 18).`}:e>42?{frost:!0,text:`Herbstfrost möglich ab ca. KW 42.`}:{frost:!1,text:`Frostfreie Zeit etwa KW 18–42 (Bayern, grob).`}}function Mn(e,t,n=.8){return Math.max(.05,e)*Math.max(.05,t)*Math.max(.2,n)}function Nn(e,t,n=.8){let r=Mn(e,t,n);return{m3:r,wood:r*.4,compost:r*.3,soil:r*.3}}function Pn(e=.8,t=.9){return Math.PI*(e/2)**2*t*1e3}function Fn(e){let t=(e||``).toLowerCase();return/kirsch|zwetsch|pflaume/.test(t)?5:/apfel|birne/.test(t)?3.5:/beere|himbeer|johannis/.test(t)?.8:4}function In(e){let t=(e||``).toLowerCase();return/baum|apfel|birne|kirsch|pflaume|nuss/.test(t)?4:/hecke/.test(t)?2:/zaun|tor/.test(t)?.5:/gewaechs|schuppen|haus|gebaeude/.test(t)?3:0}function Ln(e){let t=[];for(let n of e.features){let r=In(n.kind);if(!r)continue;let i=Math.min(n.x,n.y,e.widthM-(n.x+n.w),e.heightM-(n.y+n.h));i+.02<r&&t.push({name:n.name,need:r,have:Math.max(0,i)})}return t}function Rn(e,t){let n=.8,r=.4,i=1.2,a=Math.min(10,Math.max(2,e.widthM-n*2)),o=t??Math.max(.6,e.features.reduce((e,t)=>Math.max(e,t.y+t.h),.4)+.3);o+i>e.heightM-.3&&(o=.6);let s=[],c=0;for(;o+i<=e.heightM-.25&&c<24&&(c+=1,s.push({kind:`beet`,name:`Beet ${c}`,x:n,y:o,w:a,h:i}),o+=i,!(o+r>e.heightM-.2));)s.push({kind:`weg`,name:`Pfad ${c}`,x:n,y:o,w:a,h:r}),o+=r;return s}function zn(e,t){let n=e||2026,r=new Date(Date.UTC(n,0,4)),i=r.getUTCDay()||7;return r.setUTCDate(r.getUTCDate()-i+1+(Math.max(1,t)-1)*7),r}function Bn(e,t){let n=zn(e,t),r=29.530588,i=Date.UTC(2e3,0,6,18),a=((n.getTime()-i)/864e5%r+r)%r,o=a<1.9||a>27.6?`Neumond`:a<6.5?`Zunehmend`:a<8.4?`Erstes Viertel`:a<13.8?`Zunehmend`:a<16.2?`Vollmond`:a<21.6?`Abnehmend`:a<23.6?`Letztes Viertel`:`Abnehmend`;return{age:a,phase:o,hint:o===`Neumond`?`Wurzel, Unkraut`:o===`Vollmond`?`Blatt, Ernte`:/Zunehmend|Viertel/.test(o)&&a<14?`Frucht, Blüte`:`Schnitt, Ruhe`}}function Vn(e){let t=e<=18||e>=42,n=e>=26&&e<=35;return{frost:t,heat:n,label:t?`Frostwoche`:n?`Hitzewoche`:`mild`}}function Hn(e){return[e>=4&&e<=12&&`Obstbaumschnitt`,e>=10&&e<=14&&`Beeren auslichten`,e>=22&&e<=36&&`Tomate ausgeizen`,e>=28&&e<=34&&`Hecke Sommerschnitt`,e>=40&&e<=48&&`Beeren zurückschneiden`].filter(Boolean)}function Un(e){return sn.filter(t=>e>=Math.max(1,t.plant[0]-6)&&e<t.plant[0]).map(e=>({name:e.name,from:Math.max(1,e.plant[0]-6),plant:e.plant[0]}))}function Wn(e){return sn.filter(t=>e>=t.harvest[0]&&e<=Math.min(52,t.harvest[0]+4)&&t.sow[1]>=e).map(e=>({name:e.name,next:`nächster Satz bis KW ${e.sow[1]}`}))}function Gn(e){let t=e.year||new Date().getFullYear(),n=[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Ackerlicht//DE`,`CALSCALE:GREGORIAN`],r=(e,r,i)=>{let a=zn(t,e).toISOString().slice(0,10).replace(/-/g,``);n.push(`BEGIN:VEVENT`,`UID:ackerlicht-${t}-w${e}-${i}@ackerlicht`,`DTSTART;VALUE=DATE:${a}`,`SUMMARY:${r}`,`END:VEVENT`)},i=0;for(let t of e.tasks||[])r(t.week,(t.done?`[x] `:``)+t.text,i++);for(let e of sn)r(e.sow[0],`Saat ${e.name}`,i++),r(e.plant[0],`Pflanzen ${e.name}`,i++),r(e.harvest[0],`Ernte ${e.name}`,i++);return n.push(`END:VCALENDAR`),n.join(`\r
`)}var Kn=`ackerlicht-bak-125`;function qn(e){try{let t=JSON.parse(localStorage.getItem(Kn)||`[]`),n=[{at:new Date().toISOString(),name:e.name,garden:e},...t].slice(0,14);return localStorage.setItem(Kn,JSON.stringify(n)),n.length}catch{return 0}}function Jn(){try{return JSON.parse(localStorage.getItem(Kn)||`[]`)}catch{return[]}}function Yn(e,t=e.week){let n=(e.weather??[]).find(e=>e.week===t),r=n?.tmean??fn(t);return{week:t,rainMm:n?.rainMm??e.rainMm,tmean:r,frost:n?.frost??r<2,heat:n?.heat??r>28}}function Xn(e){let t=e.plants.filter(e=>!e.harvested),n=new Map;for(let e of t)n.set(e.crop,(n.get(e.crop)??0)+1);return[...n.entries()].map(([t,n])=>{let r=cn(t),i=n*Math.max(.2,80/Math.max(20,r.days)),a=(e.seedStock??[]).find(e=>e.crop===t)?.g??0;return{crop:t,n,gNeed:i,stock:a,missing:Math.max(0,i-a)}})}function Zn(e){let t=Cn(e).irrigL,n=t/2500,r=e.features.filter(e=>Ye(e.kind)).length,i=e.features.filter(e=>/tropf|leitung|rohr/.test(e.kind+e.name)).reduce((e,t)=>e+Math.max(t.w,t.h),0)||r*10;return{L:t,hours:n,dropM:i,lossBar:i*.012,filter:t>400?`Scheibenfilter 130 µm`:`Sieb 80 mesh`,beds:r}}function Qn(e){let t=Cn(e),n=Math.max(1,e.csa?.shares||20),r=t.yieldKg/28;return{shares:n,kgShare:r/n,kgWeek:r,ok:r/n>=(e.csa?.kgWeek||2.5)}}function $n(e){let t=(e.costs??[]).reduce((e,t)=>e+t.eur,0)+(e.cost||0),n=Cn(e);return{sum:t,perKg:n.yieldKg>0?t/n.yieldKg:0,perM2:n.bedArea>0?t/n.bedArea:0,hours:e.hours||0,perHour:(e.hours||0)>0?t/(e.hours||1):0}}function er(e){if(!e.hm||e.hm.length<64)return{pct:0,dir:`eben`,erosion:`gering`};let t=Math.round(Math.sqrt(e.hm.length)),n=e.hm[0]??0,r=e.hm[t-1]??n,i=e.hm[t*(t-1)]??n,a=e.widthM,o=e.heightM,s=(r-n)/Math.max(.1,a)*100,c=(i-n)/Math.max(.1,o)*100,l=Math.hypot(s,c);return{pct:l,dir:Math.abs(s)>Math.abs(c)?`Ost-West`:`Nord-Süd`,erosion:l>8?`hoch`:l>3?`mittel`:`gering`}}function tr(e,t){let n=t.x+t.w/2,r=t.y+t.h/2,i=0;for(let a=6;a<=20;a++){let o=(a-6)/12*Math.PI,s=Math.cos(o),c=Math.sin(o),l=!1;for(let i of e.features){if(i.id===t.id||!/gewaechs|haus|scheune|build|zaun|hecke/i.test(i.kind+i.name)&&(i.tall||0)<1.4)continue;let e=i.x+i.w/2-n,a=i.y+i.h/2-r;e*s+a*c<.2||Math.hypot(e,a)<Math.max(i.w,i.h)+(i.tall||2)*.8&&(l=!0)}l||(i+=1)}return i}function nr(e,t,n){let r=cn(n),i=(e.rotationHist??[]).filter(e=>e.bedId===t).sort((e,t)=>t.year-e.year),a=e.year||2026;for(let e of i)if(cn(e.crop).family===r.family&&a-e.year<r.waitY)return{ok:!1,reason:`${r.family} war ${e.year} auf dem Beet, Wartezeit ${r.waitY} Jahre`};if(r.family===`Nachtschatten`){let e=i.find(e=>cn(e.crop).family===`Nachtschatten`&&a-e.year<4);if(e)return{ok:!1,reason:`Nachtschatten-Sperre bis ${e.year+4}`}}return{ok:!0,reason:``}}function rr(e){return[{d:`${e}-01-01`,n:`Neujahr`},{d:`${e}-01-06`,n:`Hl. Drei Könige (BY)`},{d:`${e}-05-01`,n:`Tag der Arbeit`},{d:`${e}-08-15`,n:`Mariä Himmelfahrt (BY)`},{d:`${e}-10-03`,n:`Tag der Deutschen Einheit`},{d:`${e}-11-01`,n:`Allerheiligen (BY)`},{d:`${e}-12-25`,n:`1. Weihnachtstag`},{d:`${e}-12-26`,n:`2. Weihnachtstag`}]}function ir(e){let t=Yn(e),n=Cn(e),r=Zn(e),i=(e.tasks??[]).filter(t=>t.week===e.week),a=e.plants.filter(e=>!e.harvested&&cn(e.crop).sow);return{title:`${e.name} · KW ${e.week}`,weather:t,irrigL:n.irrigL,hours:r.hours,tasks:i,frost:t.frost,heat:t.heat,sowHint:a.length?`${a.length} Kulturen in Saat/Pflanzfenster`:`keine Saat diese KW`}}function ar(e){let t=Bt(e===`solawi`?`Solawi Chiemsee`:e===`haus`?`Hausgarten`:`Erwerbsgemüse`);return t.widthM=e===`haus`?16:e===`solawi`?48:80,t.heightM=e===`haus`?12:e===`solawi`?28:40,t.csa=e===`solawi`?{shares:40,kgWeek:3}:{shares:1,kgWeek:2},t.team=e===`haus`?[{name:`Familie`,role:`alles`}]:[{name:`Hof`,role:`Leitung`},{name:`Ernte`,role:`KW-Dienst`}],t.features=[{id:1,kind:`beet`,name:`Salat`,x:2,y:2,w:e===`haus`?6:12,h:1.2,crop:`Bunter Blattsalat`},{id:2,kind:`beet`,name:`Tomate`,x:2,y:4,w:e===`haus`?6:12,h:1.2,crop:`Tomate`},{id:3,kind:`weg`,name:`Fahrgasse`,x:2,y:3.2,w:e===`haus`?6:12,h:.8},{id:4,kind:`gewaechshaus`,name:`Folie`,x:e===`haus`?9:16,y:2,w:6,h:4}],t.plants=[{id:10,featureId:1,crop:`Bunter Blattsalat`,x:3,y:2.6,harvested:!1},{id:11,featureId:2,crop:`Tomate`,x:3.5,y:4.6,harvested:!1}],t.tasks=[{week:22,text:`Ernte Kiste packen`,who:`Ernte`}],Ft(t)}function or(e){return e.reduce((e,t)=>e+Math.max(0,t.w*t.h),0)}function sr(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return(t>>>0).toString(16)}function cr(e){return e.features.filter(e=>Ye(e.kind)).map(t=>{let n=e.plants.filter(e=>e.featureId===t.id),r=[...new Set(n.map(e=>e.crop).filter(Boolean))];return{id:t.id,name:t.name,m2:t.w*t.h,crop:t.crop||r[0]||`—`,n:n.length,harvested:n.filter(e=>e.harvested).length}})}function lr(e){let t=Math.max(1,e.csa?.shares||1),n=e.csa?.kgWeek||2.5,r=new Map;for(let t of e.plants.filter(e=>!e.harvested)){let e=cn(t.crop),n=Math.max(1,e.harvest[1]-e.harvest[0]+1);r.set(t.crop,(r.get(t.crop)||0)+e.kgM2*.09/n)}let i=[...r.entries()].map(([e,n])=>({crop:e,kg:n,shareKg:n/t})),a=i.reduce((e,t)=>e+t.kg,0);return{shares:t,kgWeek:n,total:a,rows:i,ok:a+1e-6>=t*n*.75}}function ur(e){let t=[];for(let n of e.replace(/\r/g,``).split(`
`)){let e=n.trim();if(!e||/kw|week|regen|tmean|°/i.test(e))continue;let r=e.split(/[;,\t]/),i=Number(r[0]),a=Number(String(r[1]||`0`).replace(`,`,`.`)),o=Number(String(r[2]||fn(i)).replace(`,`,`.`));i>=1&&i<=52&&Number.isFinite(a)&&t.push({week:i,rainMm:Math.max(0,a),tmean:Number.isFinite(o)?o:fn(i),frost:o<2,heat:o>28})}return t}function dr(e,t){let n=Math.min(e.x,t.x),r=Math.min(e.y,t.y),i=Math.max(.2,Math.abs(t.x-e.x)||.2),a=Math.max(.2,Math.abs(t.y-e.y)||.2),o=Math.hypot(t.x-e.x,t.y-e.y);return{id:Mt(),kind:`mass`,name:`${o.toFixed(2)} m`,x:n,y:r,w:i,h:a,text:`${o.toFixed(2)} m`,poly:[[e.x,e.y],[t.x,t.y]]}}function fr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function pr(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},$={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},mr={basic:{uniforms:E([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:Q.meshbasic_vert,fragmentShader:Q.meshbasic_frag},lambert:{uniforms:E([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:Q.meshlambert_vert,fragmentShader:Q.meshlambert_frag},phong:{uniforms:E([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Q.meshphong_vert,fragmentShader:Q.meshphong_frag},standard:{uniforms:E([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag},toon:{uniforms:E([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new B(0)}}]),vertexShader:Q.meshtoon_vert,fragmentShader:Q.meshtoon_frag},matcap:{uniforms:E([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:Q.meshmatcap_vert,fragmentShader:Q.meshmatcap_frag},points:{uniforms:E([$.points,$.fog]),vertexShader:Q.points_vert,fragmentShader:Q.points_frag},dashed:{uniforms:E([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Q.linedashed_vert,fragmentShader:Q.linedashed_frag},depth:{uniforms:E([$.common,$.displacementmap]),vertexShader:Q.depth_vert,fragmentShader:Q.depth_frag},normal:{uniforms:E([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:Q.meshnormal_vert,fragmentShader:Q.meshnormal_frag},sprite:{uniforms:E([$.sprite,$.fog]),vertexShader:Q.sprite_vert,fragmentShader:Q.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Q.background_vert,fragmentShader:Q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:Q.backgroundCube_vert,fragmentShader:Q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Q.cube_vert,fragmentShader:Q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Q.equirect_vert,fragmentShader:Q.equirect_frag},distance:{uniforms:E([$.common,$.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Q.distance_vert,fragmentShader:Q.distance_frag},shadow:{uniforms:E([$.lights,$.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:Q.shadow_vert,fragmentShader:Q.shadow_frag}};mr.physical={uniforms:E([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Q.meshphysical_vert,fragmentShader:Q.meshphysical_frag};var hr={r:0,b:0,g:0},gr=new Re,_r=new U;_r.set(-1,0,0,0,1,0,0,0,1);function vr(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,p=null;function m(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function h(t){let r=!1,i=m(t);i===null?v(o,s):i&&i.isColor&&(v(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let i=m(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new z(new ce(1,1,1),new ae({name:`BackgroundCubeMaterial`,uniforms:G(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(gr.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(_r),l.material.toneMapped=I.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new z(new _(2,2),new ae({name:`BackgroundMaterial`,uniforms:G(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=I.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,p=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function v(t,r){t.getRGB(hr,f(e)),n.buffers.color.setClear(hr.r,hr.g,hr.b,r,a)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,v(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,v(o,s)},render:h,addToRenderList:g,dispose:y}}function yr(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function br(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function xr(e,n,r,i){let a;function o(){if(a!==void 0)return a;if(n.has(`EXT_texture_filter_anisotropic`)===!0){let t=n.get(`EXT_texture_filter_anisotropic`);a=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(t){return t===1023||i.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function c(t){let r=t===1016&&(n.has(`EXT_color_buffer_half_float`)||n.has(`EXT_color_buffer_float`));return!(t!==1009&&i.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&t!==1015&&!r)}function l(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let u=r.precision===void 0?`highp`:r.precision,d=l(u);d!==u&&(t(`WebGLRenderer:`,u,`not supported, using`,d,`instead.`),u=d);let f=r.logarithmicDepthBuffer===!0,p=r.reversedDepthBuffer===!0&&n.has(`EXT_clip_control`);r.reversedDepthBuffer===!0&&p===!1&&t(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),C=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:x,maxSamples:S,samples:C}}function Sr(e){let t=this,n=null,r=0,i=!1,a=!1,o=new m,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Cr=4,wr=[.125,.215,.35,.446,.526,.582],Tr=20,Er=256,Dr=new w,Or=new B,kr=null,Ar=0,jr=0,Mr=!1,Nr=new V,Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Nr}=i;kr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Br(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kr,Ar,jr),this._renderer.xr.enabled=Mr,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kr=this._renderer.getRenderTarget(),Ar=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),Mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:h,format:y,colorSpace:pe,depthBuffer:!1},r=Ir(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ir(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fr(r)),this._blurMaterial=zr(r,e,t),this._ggxMaterial=Rr(r,e,t)}return r}_compileMaterial(e){let t=new z(new H,e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,r,i){let a=new k(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Or),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new ce,new Ie({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Or),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Lr(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Br());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Lr(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Dr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Cr?n-d+Cr:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Lr(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Dr),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Lr(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Dr)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,n,r,i,a,o,s){let c=this._renderer,l=this._blurMaterial;o!==`latitudinal`&&o!==`longitudinal`&&W(`blur direction must be either latitudinal or longitudinal!`);let u=this._lodMeshes[i];u.material=l;let d=l.uniforms,f=this._sizeLods[r]-1,p=isFinite(a)?Math.PI/(2*f):2*Math.PI/39,m=a/p,h=isFinite(a)?1+Math.floor(3*m):Tr;h>Tr&&t(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Tr}`);let g=[],_=0;for(let e=0;e<Tr;++e){let t=e/m,n=Math.exp(-t*t/2);g.push(n),e===0?_+=n:e<h&&(_+=2*n)}for(let e=0;e<g.length;e++)g[e]=g[e]/_;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=o===`latitudinal`,s&&(d.poleAxis.value=s);let{_lodMax:v}=this;d.dTheta.value=p,d.mipInt.value=v-r;let y=this._sizeLods[i];Lr(n,3*y*(i>v-Cr?i-v+Cr:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(n),c.render(u,Dr)}};function Fr(e){let t=[],n=[],r=[],i=e,a=e-Cr+1+wr.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Cr?s=wr[o-e+Cr-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new H;h.setAttribute(`position`,new Se(f,3)),h.setAttribute(`uv`,new Se(p,2)),h.setAttribute(`faceIndex`,new Se(m,1)),r.push(new z(h,null)),i>Cr&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ir(e,t,n){let r=new Le(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Lr(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Rr(e,t,n){return new ae({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zr(e,t,n){let r=new Float32Array(Tr),i=new V(0,1,0);return new ae({name:`SphericalGaussianBlur`,defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Br(){return new ae({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vr(){return new ae({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ur=class extends Le{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new M(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ce(5,5,5),i=new ae({name:`CubemapFromEquirect`,uniforms:G(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ce),new L(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Wr(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ur(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Pr(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Pr(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Gr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ve(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Kr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ge:ke)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function qr(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jr(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Yr(e,t,n){let r=new WeakMap,i=new me;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new P(h,p,m,u);g.type=j,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new we(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Xr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Zr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Qr(e,t,n,r,i,a){let o=new Le(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new ye(t,n):void 0}),c=new Le(t,n,{type:h,depthBuffer:!1,stencilBuffer:!1}),l=new H;l.setAttribute(`position`,new b([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new b([0,2,0,0,2,0],2));let u=new s({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new z(l,u),f=new w(-1,1,1,-1,0,1),p=null,m=null,g=!1,_,v=null,y=[],x=!1;this.setSize=function(e,t){o.setSize(e,t),c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,x=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return x===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=c;for(let i=0;i<y.length;i++){let a=y[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},I.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Zr[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),l.dispose(),u.dispose()}}var $r=new A,ei=new ye(1,1),ti=new P,ni=new Pe,ri=new M,ii=[],ai=[],oi=new Float32Array(16),si=new Float32Array(9),ci=new Float32Array(4);function li(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ii[i];if(a===void 0&&(a=new Float32Array(i),ii[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ui(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function di(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fi(e,t){let n=ai[t];n===void 0&&(n=new Int32Array(t),ai[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function pi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function mi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ui(n,t))return;e.uniform2fv(this.addr,t),di(n,t)}}function hi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ui(n,t))return;e.uniform3fv(this.addr,t),di(n,t)}}function gi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ui(n,t))return;e.uniform4fv(this.addr,t),di(n,t)}}function _i(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ui(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),di(n,t)}else{if(ui(n,r))return;ci.set(r),e.uniformMatrix2fv(this.addr,!1,ci),di(n,r)}}function vi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ui(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),di(n,t)}else{if(ui(n,r))return;si.set(r),e.uniformMatrix3fv(this.addr,!1,si),di(n,r)}}function yi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ui(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),di(n,t)}else{if(ui(n,r))return;oi.set(r),e.uniformMatrix4fv(this.addr,!1,oi),di(n,r)}}function bi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ui(n,t))return;e.uniform2iv(this.addr,t),di(n,t)}}function Si(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ui(n,t))return;e.uniform3iv(this.addr,t),di(n,t)}}function Ci(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ui(n,t))return;e.uniform4iv(this.addr,t),di(n,t)}}function wi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ti(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ui(n,t))return;e.uniform2uiv(this.addr,t),di(n,t)}}function Ei(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ui(n,t))return;e.uniform3uiv(this.addr,t),di(n,t)}}function Di(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ui(n,t))return;e.uniform4uiv(this.addr,t),di(n,t)}}function Oi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ei.compareFunction=n.isReversedDepthBuffer()?518:515,a=ei):a=$r,n.setTexture2D(t||a,i)}function ki(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ni,i)}function Ai(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ri,i)}function ji(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ti,i)}function Mi(e){switch(e){case 5126:return pi;case 35664:return mi;case 35665:return hi;case 35666:return gi;case 35674:return _i;case 35675:return vi;case 35676:return yi;case 5124:case 35670:return bi;case 35667:case 35671:return xi;case 35668:case 35672:return Si;case 35669:case 35673:return Ci;case 5125:return wi;case 36294:return Ti;case 36295:return Ei;case 36296:return Di;case 35678:case 36198:case 36298:case 36306:case 35682:return Oi;case 35679:case 36299:case 36307:return ki;case 35680:case 36300:case 36308:case 36293:return Ai;case 36289:case 36303:case 36311:case 36292:return ji}}function Ni(e,t){e.uniform1fv(this.addr,t)}function Pi(e,t){let n=li(t,this.size,2);e.uniform2fv(this.addr,n)}function Fi(e,t){let n=li(t,this.size,3);e.uniform3fv(this.addr,n)}function Ii(e,t){let n=li(t,this.size,4);e.uniform4fv(this.addr,n)}function Li(e,t){let n=li(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ri(e,t){let n=li(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zi(e,t){let n=li(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bi(e,t){e.uniform1iv(this.addr,t)}function Vi(e,t){e.uniform2iv(this.addr,t)}function Hi(e,t){e.uniform3iv(this.addr,t)}function Ui(e,t){e.uniform4iv(this.addr,t)}function Wi(e,t){e.uniform1uiv(this.addr,t)}function Gi(e,t){e.uniform2uiv(this.addr,t)}function Ki(e,t){e.uniform3uiv(this.addr,t)}function qi(e,t){e.uniform4uiv(this.addr,t)}function Ji(e,t,n){let r=this.cache,i=t.length,a=fi(n,i);ui(r,a)||(e.uniform1iv(this.addr,a),di(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ei:$r;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Yi(e,t,n){let r=this.cache,i=t.length,a=fi(n,i);ui(r,a)||(e.uniform1iv(this.addr,a),di(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ni,a[e])}function Xi(e,t,n){let r=this.cache,i=t.length,a=fi(n,i);ui(r,a)||(e.uniform1iv(this.addr,a),di(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ri,a[e])}function Zi(e,t,n){let r=this.cache,i=t.length,a=fi(n,i);ui(r,a)||(e.uniform1iv(this.addr,a),di(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ti,a[e])}function Qi(e){switch(e){case 5126:return Ni;case 35664:return Pi;case 35665:return Fi;case 35666:return Ii;case 35674:return Li;case 35675:return Ri;case 35676:return zi;case 5124:case 35670:return Bi;case 35667:case 35671:return Vi;case 35668:case 35672:return Hi;case 35669:case 35673:return Ui;case 5125:return Wi;case 36294:return Gi;case 36295:return Ki;case 36296:return qi;case 35678:case 36198:case 36298:case 36306:case 35682:return Ji;case 35679:case 36299:case 36307:return Yi;case 35680:case 36300:case 36308:case 36293:return Xi;case 36289:case 36303:case 36311:case 36292:return Zi}}var $i=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mi(t.type)}},ea=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qi(t.type)}},ta=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},na=/(\w+)(\])?(\[|\.)?/g;function ra(e,t){e.seq.push(t),e.map[t.id]=t}function ia(e,t,n){let r=e.name,i=r.length;for(na.lastIndex=0;;){let a=na.exec(r),o=na.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ra(n,l===void 0?new $i(s,e,t):new ea(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ta(s),ra(n,e)),n=e}}}var aa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ia(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function oa(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var sa=37297,ca=0;function la(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ua=new U;function da(e){I._getMatrix(ua,I.workingColorSpace,e);let n=`mat3( ${ua.elements.map(e=>e.toFixed(4))} )`;switch(I.getTransfer(e)){case De:return[n,`LinearTransferOETF`];case ze:return[n,`sRGBTransferOETF`];default:return t(`WebGLProgram: Unsupported color space: `,e),[n,`LinearTransferOETF`]}}function fa(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+la(e.getShaderSource(t),r)}return i}function pa(e,t){let n=da(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var ma={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ha(e,n){let r=ma[n];return r===void 0?(t(`WebGLProgram: Unsupported toneMapping:`,n),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+r+`ToneMapping( color ); }`}var ga=new V;function _a(){return I.getLuminanceCoefficients(ga),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ga.x.toFixed(4)}, ${ga.y.toFixed(4)}, ${ga.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function va(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xa).join(`
`)}function ya(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ba(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xa(e){return e!==``}function Sa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ca(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wa=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(e){return e.replace(wa,Da)}var Ea=new Map;function Da(e,n){let r=Q[n];if(r===void 0){let e=Ea.get(n);if(e!==void 0)r=Q[e],t(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,n,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+n+`>`)}return Ta(r)}var Oa=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(e){return e.replace(Oa,Aa)}function Aa(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function ja(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ma={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Na(e){return Ma[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Pa={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Fa(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Pa[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Ia={302:`ENVMAP_MODE_REFRACTION`};function La(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ia[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Ra={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function za(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Ra[e.combine]||`ENVMAP_BLENDING_NONE`}function Ba(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Va(e,n,r,i){let a=e.getContext(),o=r.defines,s=r.vertexShader,c=r.fragmentShader,l=Na(r),u=Fa(r),d=La(r),f=za(r),p=Ba(r),m=va(r),h=ya(o),g=a.createProgram(),_,v,y=r.glslVersion?`#version `+r.glslVersion+`
`:``;r.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h].filter(xa).join(`
`),_.length>0&&(_+=`
`),v=[`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h].filter(xa).join(`
`),v.length>0&&(v+=`
`)):(_=[ja(r),`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h,r.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,r.batching?`#define USE_BATCHING`:``,r.batchingColor?`#define USE_BATCHING_COLOR`:``,r.instancing?`#define USE_INSTANCING`:``,r.instancingColor?`#define USE_INSTANCING_COLOR`:``,r.instancingMorph?`#define USE_INSTANCING_MORPH`:``,r.useFog&&r.fog?`#define USE_FOG`:``,r.useFog&&r.fogExp2?`#define FOG_EXP2`:``,r.map?`#define USE_MAP`:``,r.envMap?`#define USE_ENVMAP`:``,r.envMap?`#define `+d:``,r.lightMap?`#define USE_LIGHTMAP`:``,r.aoMap?`#define USE_AOMAP`:``,r.bumpMap?`#define USE_BUMPMAP`:``,r.normalMap?`#define USE_NORMALMAP`:``,r.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,r.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,r.displacementMap?`#define USE_DISPLACEMENTMAP`:``,r.emissiveMap?`#define USE_EMISSIVEMAP`:``,r.anisotropy?`#define USE_ANISOTROPY`:``,r.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,r.clearcoatMap?`#define USE_CLEARCOATMAP`:``,r.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,r.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,r.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,r.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,r.specularMap?`#define USE_SPECULARMAP`:``,r.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,r.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,r.roughnessMap?`#define USE_ROUGHNESSMAP`:``,r.metalnessMap?`#define USE_METALNESSMAP`:``,r.alphaMap?`#define USE_ALPHAMAP`:``,r.alphaHash?`#define USE_ALPHAHASH`:``,r.transmission?`#define USE_TRANSMISSION`:``,r.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,r.thicknessMap?`#define USE_THICKNESSMAP`:``,r.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,r.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,r.mapUv?`#define MAP_UV `+r.mapUv:``,r.alphaMapUv?`#define ALPHAMAP_UV `+r.alphaMapUv:``,r.lightMapUv?`#define LIGHTMAP_UV `+r.lightMapUv:``,r.aoMapUv?`#define AOMAP_UV `+r.aoMapUv:``,r.emissiveMapUv?`#define EMISSIVEMAP_UV `+r.emissiveMapUv:``,r.bumpMapUv?`#define BUMPMAP_UV `+r.bumpMapUv:``,r.normalMapUv?`#define NORMALMAP_UV `+r.normalMapUv:``,r.displacementMapUv?`#define DISPLACEMENTMAP_UV `+r.displacementMapUv:``,r.metalnessMapUv?`#define METALNESSMAP_UV `+r.metalnessMapUv:``,r.roughnessMapUv?`#define ROUGHNESSMAP_UV `+r.roughnessMapUv:``,r.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+r.anisotropyMapUv:``,r.clearcoatMapUv?`#define CLEARCOATMAP_UV `+r.clearcoatMapUv:``,r.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+r.clearcoatNormalMapUv:``,r.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+r.clearcoatRoughnessMapUv:``,r.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+r.iridescenceMapUv:``,r.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+r.iridescenceThicknessMapUv:``,r.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+r.sheenColorMapUv:``,r.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+r.sheenRoughnessMapUv:``,r.specularMapUv?`#define SPECULARMAP_UV `+r.specularMapUv:``,r.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+r.specularColorMapUv:``,r.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+r.specularIntensityMapUv:``,r.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+r.transmissionMapUv:``,r.thicknessMapUv?`#define THICKNESSMAP_UV `+r.thicknessMapUv:``,r.vertexTangents&&r.flatShading===!1?`#define USE_TANGENT`:``,r.vertexNormals?`#define HAS_NORMAL`:``,r.vertexColors?`#define USE_COLOR`:``,r.vertexAlphas?`#define USE_COLOR_ALPHA`:``,r.vertexUv1s?`#define USE_UV1`:``,r.vertexUv2s?`#define USE_UV2`:``,r.vertexUv3s?`#define USE_UV3`:``,r.pointsUvs?`#define USE_POINTS_UV`:``,r.flatShading?`#define FLAT_SHADED`:``,r.skinning?`#define USE_SKINNING`:``,r.morphTargets?`#define USE_MORPHTARGETS`:``,r.morphNormals&&r.flatShading===!1?`#define USE_MORPHNORMALS`:``,r.morphColors?`#define USE_MORPHCOLORS`:``,r.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+r.morphTextureStride:``,r.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+r.morphTargetsCount:``,r.doubleSided?`#define DOUBLE_SIDED`:``,r.flipSided?`#define FLIP_SIDED`:``,r.shadowMapEnabled?`#define USE_SHADOWMAP`:``,r.shadowMapEnabled?`#define `+l:``,r.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,r.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,r.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,r.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xa).join(`
`),v=[ja(r),`#define SHADER_TYPE `+r.shaderType,`#define SHADER_NAME `+r.shaderName,h,r.useFog&&r.fog?`#define USE_FOG`:``,r.useFog&&r.fogExp2?`#define FOG_EXP2`:``,r.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,r.map?`#define USE_MAP`:``,r.matcap?`#define USE_MATCAP`:``,r.envMap?`#define USE_ENVMAP`:``,r.envMap?`#define `+u:``,r.envMap?`#define `+d:``,r.envMap?`#define `+f:``,p?`#define CUBEUV_TEXEL_WIDTH `+p.texelWidth:``,p?`#define CUBEUV_TEXEL_HEIGHT `+p.texelHeight:``,p?`#define CUBEUV_MAX_MIP `+p.maxMip+`.0`:``,r.lightMap?`#define USE_LIGHTMAP`:``,r.aoMap?`#define USE_AOMAP`:``,r.bumpMap?`#define USE_BUMPMAP`:``,r.normalMap?`#define USE_NORMALMAP`:``,r.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,r.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,r.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,r.emissiveMap?`#define USE_EMISSIVEMAP`:``,r.anisotropy?`#define USE_ANISOTROPY`:``,r.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,r.clearcoat?`#define USE_CLEARCOAT`:``,r.clearcoatMap?`#define USE_CLEARCOATMAP`:``,r.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,r.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,r.dispersion?`#define USE_DISPERSION`:``,r.iridescence?`#define USE_IRIDESCENCE`:``,r.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,r.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,r.specularMap?`#define USE_SPECULARMAP`:``,r.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,r.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,r.roughnessMap?`#define USE_ROUGHNESSMAP`:``,r.metalnessMap?`#define USE_METALNESSMAP`:``,r.alphaMap?`#define USE_ALPHAMAP`:``,r.alphaTest?`#define USE_ALPHATEST`:``,r.alphaHash?`#define USE_ALPHAHASH`:``,r.sheen?`#define USE_SHEEN`:``,r.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,r.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,r.transmission?`#define USE_TRANSMISSION`:``,r.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,r.thicknessMap?`#define USE_THICKNESSMAP`:``,r.vertexTangents&&r.flatShading===!1?`#define USE_TANGENT`:``,r.vertexColors||r.instancingColor?`#define USE_COLOR`:``,r.vertexAlphas||r.batchingColor?`#define USE_COLOR_ALPHA`:``,r.vertexUv1s?`#define USE_UV1`:``,r.vertexUv2s?`#define USE_UV2`:``,r.vertexUv3s?`#define USE_UV3`:``,r.pointsUvs?`#define USE_POINTS_UV`:``,r.gradientMap?`#define USE_GRADIENTMAP`:``,r.flatShading?`#define FLAT_SHADED`:``,r.doubleSided?`#define DOUBLE_SIDED`:``,r.flipSided?`#define FLIP_SIDED`:``,r.shadowMapEnabled?`#define USE_SHADOWMAP`:``,r.shadowMapEnabled?`#define `+l:``,r.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,r.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,r.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,r.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,r.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,r.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,r.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,r.toneMapping===0?``:`#define TONE_MAPPING`,r.toneMapping===0?``:Q.tonemapping_pars_fragment,r.toneMapping===0?``:ha(`toneMapping`,r.toneMapping),r.dithering?`#define DITHERING`:``,r.opaque?`#define OPAQUE`:``,Q.colorspace_pars_fragment,pa(`linearToOutputTexel`,r.outputColorSpace),_a(),r.useDepthPacking?`#define DEPTH_PACKING `+r.depthPacking:``,`
`].filter(xa).join(`
`)),s=Ta(s),s=Sa(s,r),s=Ca(s,r),c=Ta(c),c=Sa(c,r),c=Ca(c,r),s=ka(s),c=ka(c),r.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`#define varying in`,r.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,r.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+s,x=y+v+c,S=oa(a,a.VERTEX_SHADER,b),C=oa(a,a.FRAGMENT_SHADER,x);a.attachShader(g,S),a.attachShader(g,C),r.index0AttributeName===void 0?r.hasPositionAttribute===!0&&a.bindAttribLocation(g,0,`position`):a.bindAttribLocation(g,0,r.index0AttributeName),a.linkProgram(g);function w(n){if(e.debug.checkShaderErrors){let r=a.getProgramInfoLog(g)||``,i=a.getShaderInfoLog(S)||``,o=a.getShaderInfoLog(C)||``,s=r.trim(),c=i.trim(),l=o.trim(),u=!0,d=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1){if(u=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(a,g,S,C);else{let e=fa(a,S,`vertex`),t=fa(a,C,`fragment`);W(`WebGLProgram: Shader Error `+a.getError()+` - VALIDATE_STATUS `+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+n.name+`
Material Type: `+n.type+`

Program Info Log: `+s+`
`+e+`
`+t)}}else s===``?(c===``||l===``)&&(d=!1):t(`WebGLProgram: Program Info Log:`,s);d&&(n.diagnostics={runnable:u,programLog:s,vertexShader:{log:c,prefix:_},fragmentShader:{log:l,prefix:v}})}a.deleteShader(S),a.deleteShader(C),T=new aa(a,g),E=ba(a,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let D=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=a.getProgramParameter(g,sa)),D},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=ca++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Ha=0,Ua=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wa(e),t.set(e,n)),n}},Wa=class{constructor(e){this.id=Ha++,this.code=e,this.usedTimes=0}};function Ga(e){return e===1030||e===37490||e===36285}function Ka(e,n,r,i,a,o){let s=new Ae,c=new Ua,l=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,d,g,_){let v=d.fog,y=g.geometry,b=a.isMeshStandardMaterial||a.isMeshLambertMaterial||a.isMeshPhongMaterial?d.environment:null,x=a.isMeshStandardMaterial||a.isMeshLambertMaterial&&!a.envMap||a.isMeshPhongMaterial&&!a.envMap,S=n.get(a.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&t(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=mr[w];O=e.vertexShader,k=e.fragmentShader}else{O=a.vertexShader,k=a.fragmentShader;let e=c.getVertexShaderStage(a),t=c.getFragmentShaderStage(a);c.update(a,e,t),A=e.id,j=t.id}let ee=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=g.isInstancedMesh===!0,te=g.isBatchedMesh===!0,P=!!a.map,ne=!!a.matcap,re=!!S,ie=!!a.aoMap,ae=!!a.lightMap,F=!!a.bumpMap&&a.wireframe===!1,oe=!!a.normalMap,se=!!a.displacementMap,L=!!a.emissiveMap,R=!!a.metalnessMap,z=!!a.roughnessMap,ce=a.anisotropy>0,le=a.clearcoat>0,ue=a.dispersion>0,de=a.iridescence>0,fe=a.sheen>0,pe=a.transmission>0,B=ce&&!!a.anisotropyMap,me=le&&!!a.clearcoatMap,he=le&&!!a.clearcoatNormalMap,V=le&&!!a.clearcoatRoughnessMap,ge=de&&!!a.iridescenceMap,_e=de&&!!a.iridescenceThicknessMap,ve=fe&&!!a.sheenColorMap,ye=fe&&!!a.sheenRoughnessMap,be=!!a.specularMap,xe=!!a.specularColorMap,Se=!!a.specularIntensityMap,Ce=pe&&!!a.transmissionMap,we=pe&&!!a.thicknessMap,Te=!!a.gradientMap,Ee=!!a.alphaMap,De=a.alphaTest>0,Oe=!!a.alphaHash,ke=!!a.extensions,Ae=0;a.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ae=e.toneMapping);let H={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:te,batchingColor:te&&g._colorsTexture!==null,instancing:N,instancingColor:N&&g.instanceColor!==null,instancingMorph:N&&g.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:I.workingColorSpace,alphaToCoverage:!!a.alphaToCoverage,map:P,matcap:ne,envMap:re,envMapMode:re&&S.mapping,envMapCubeUVHeight:C,aoMap:ie,lightMap:ae,bumpMap:F,normalMap:oe,displacementMap:se,emissiveMap:L,normalMapObjectSpace:oe&&a.normalMapType===1,normalMapTangentSpace:oe&&a.normalMapType===0,packedNormalMap:oe&&a.normalMapType===0&&Ga(a.normalMap.format),metalnessMap:R,roughnessMap:z,anisotropy:ce,anisotropyMap:B,clearcoat:le,clearcoatMap:me,clearcoatNormalMap:he,clearcoatRoughnessMap:V,dispersion:ue,iridescence:de,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:fe,sheenColorMap:ve,sheenRoughnessMap:ye,specularMap:be,specularColorMap:xe,specularIntensityMap:Se,transmission:pe,transmissionMap:Ce,thicknessMap:we,gradientMap:Te,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:Oe,combine:a.combine,mapUv:P&&h(a.map.channel),aoMapUv:ie&&h(a.aoMap.channel),lightMapUv:ae&&h(a.lightMap.channel),bumpMapUv:F&&h(a.bumpMap.channel),normalMapUv:oe&&h(a.normalMap.channel),displacementMapUv:se&&h(a.displacementMap.channel),emissiveMapUv:L&&h(a.emissiveMap.channel),metalnessMapUv:R&&h(a.metalnessMap.channel),roughnessMapUv:z&&h(a.roughnessMap.channel),anisotropyMapUv:B&&h(a.anisotropyMap.channel),clearcoatMapUv:me&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:he&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:ye&&h(a.sheenRoughnessMap.channel),specularMapUv:be&&h(a.specularMap.channel),specularColorMapUv:xe&&h(a.specularColorMap.channel),specularIntensityMapUv:Se&&h(a.specularIntensityMap.channel),transmissionMapUv:Ce&&h(a.transmissionMap.channel),thicknessMapUv:we&&h(a.thicknessMap.channel),alphaMapUv:Ee&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(oe||ce),vertexNormals:!!y.attributes.normal,vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(P||Ee),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.wireframe===!1&&(a.flatShading===!0||y.attributes.normal===void 0&&oe===!1&&(a.isMeshLambertMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||a.isMeshPhysicalMaterial)),sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:M,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ae,decodeVideoTexture:P&&a.map.isVideoTexture===!0&&I.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:L&&a.emissiveMap.isVideoTexture===!0&&I.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:ke&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ke&&a.extensions.multiDraw===!0||te)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return H.vertexUv1s=l.has(1),H.vertexUv2s=l.has(2),H.vertexUv3s=l.has(3),l.clear(),H}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.instancing&&s.enable(0),t.instancingColor&&s.enable(1),t.instancingMorph&&s.enable(2),t.matcap&&s.enable(3),t.envMap&&s.enable(4),t.normalMapObjectSpace&&s.enable(5),t.normalMapTangentSpace&&s.enable(6),t.clearcoat&&s.enable(7),t.iridescence&&s.enable(8),t.alphaTest&&s.enable(9),t.vertexColors&&s.enable(10),t.vertexAlphas&&s.enable(11),t.vertexUv1s&&s.enable(12),t.vertexUv2s&&s.enable(13),t.vertexUv3s&&s.enable(14),t.vertexTangents&&s.enable(15),t.anisotropy&&s.enable(16),t.alphaHash&&s.enable(17),t.batching&&s.enable(18),t.dispersion&&s.enable(19),t.batchingColor&&s.enable(20),t.gradientMap&&s.enable(21),t.packedNormalMap&&s.enable(22),t.vertexNormals&&s.enable(23),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),t.numLightProbeGrids>0&&s.enable(22),t.hasPositionAttribute&&s.enable(23),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=mr[t];n=se.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r=d.get(n);return r===void 0?(r=new Va(e,n,t,a),u.push(r),d.set(n,r)):++r.usedTimes,r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),d.delete(e.cacheKey),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function qa(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ja(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ya(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Xa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Ja),r.length>1&&r.sort(t||Ya),i.length>1&&i.sort(t||Ya),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Za(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Xa,e.set(t,[i])):n>=r.length?(i=new Xa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Qa(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new B};break;case`SpotLight`:n={position:new V,direction:new V,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function $a(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var eo=0;function to(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function no(e){let t=new Qa,n=$a(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new Re,o=new Re;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(to);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=eo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ro(e){let t=new no(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function io(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ro(e),t.set(n,[a])):r>=i.length?(a=new ro(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ao=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oo=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,so=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],co=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],lo=new Re,uo=new V,fo=new V;function po(e,n,r){let i=new ie,s=new we,c=new we,l=new me,u=new te,d=new a,f={},p=r.maxTextureSize,m={0:1,1:0,2:2},g=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:ao,fragmentShader:oo}),_=g.clone();_.defines.HORIZONTAL_PASS=1;let v=new H;v.setAttribute(`position`,new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new z(v,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(n,r,a){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||n.length===0)return;this.type===2&&(t(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let g=x!==this.type;g&&r.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=n.length;u<d;u++){let d=n[u],f=d.shadow;if(f===void 0){t(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;s.copy(f.mapSize);let _=f.getFrameExtents();s.multiply(_),c.copy(f.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(c.x=Math.floor(p/_.x),s.x=c.x*_.x,f.mapSize.x=c.x),s.y>p&&(c.y=Math.floor(p/_.y),s.y=c.y*_.y,f.mapSize.y=c.y));let v=e.state.buffers.depth.getReversed();if(f.camera._reversedDepth=v,f.map===null||g===!0){if(f.map!==null&&(f.map.depthTexture!==null&&(f.map.depthTexture.dispose(),f.map.depthTexture=null),f.map.dispose()),this.type===3){if(d.isPointLight){t(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}f.map=new Le(s.x,s.y,{format:ne,type:h,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),f.map.texture.name=d.name+`.shadowMap`,f.map.depthTexture=new ye(s.x,s.y,j),f.map.depthTexture.name=d.name+`.shadowMapDepth`,f.map.depthTexture.format=o,f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=D,f.map.depthTexture.magFilter=D}else d.isPointLight?(f.map=new Ur(s.x),f.map.depthTexture=new Fe(s.x,je)):(f.map=new Le(s.x,s.y),f.map.depthTexture=new ye(s.x,s.y,je)),f.map.depthTexture.name=d.name+`.shadowMap`,f.map.depthTexture.format=o,this.type===1?(f.map.depthTexture.compareFunction=v?518:515,f.map.depthTexture.minFilter=Ce,f.map.depthTexture.magFilter=Ce):(f.map.depthTexture.compareFunction=null,f.map.depthTexture.minFilter=D,f.map.depthTexture.magFilter=D);f.camera.updateProjectionMatrix()}let y=f.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<y;t++){if(f.map.isWebGLCubeRenderTarget)e.setRenderTarget(f.map,t),e.clear();else{t===0&&(e.setRenderTarget(f.map),e.clear());let n=f.getViewport(t);l.set(c.x*n.x,c.y*n.y,c.x*n.z,c.y*n.w),m.viewport(l)}if(d.isPointLight){let e=f.camera,n=f.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),uo.setFromMatrixPosition(d.matrixWorld),e.position.copy(uo),fo.copy(e.position),fo.add(so[t]),e.up.copy(co[t]),e.lookAt(fo),e.updateMatrixWorld(),n.makeTranslation(-uo.x,-uo.y,-uo.z),lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),f._frustum.setFromProjectionMatrix(lo,e.coordinateSystem,e.reversedDepth)}else f.updateMatrices(d);i=f.getFrustum(),w(r,a,f.camera,d,this.type)}f.isPointLightShadow!==!0&&this.type===3&&S(f,a),f.needsUpdate=!1}x=this.type,b.needsUpdate=!1,e.setRenderTarget(u,d,f)};function S(t,r){let i=n.update(y);g.defines.VSM_SAMPLES!==t.blurSamples&&(g.defines.VSM_SAMPLES=t.blurSamples,_.defines.VSM_SAMPLES=t.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),t.mapPass===null&&(t.mapPass=new Le(s.x,s.y,{format:ne,type:h})),g.uniforms.shadow_pass.value=t.map.depthTexture,g.uniforms.resolution.value=t.mapSize,g.uniforms.radius.value=t.radius,e.setRenderTarget(t.mapPass),e.clear(),e.renderBufferDirect(r,null,i,g,y,null),_.uniforms.shadow_pass.value=t.mapPass.texture,_.uniforms.resolution.value=t.mapSize,_.uniforms.radius.value=t.radius,e.setRenderTarget(t.map),e.clear(),e.renderBufferDirect(r,null,i,_,y,null)}function C(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?d:u,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=f[e];r===void 0&&(r={},f[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,T)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?m[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function w(t,r,a,o,s){if(t.visible===!1)return;if(t.layers.test(r.layers)&&(t.isMesh||t.isLine||t.isPoints)&&(t.castShadow||t.receiveShadow&&s===3)&&(!t.frustumCulled||i.intersectsObject(t))){t.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,t.matrixWorld);let i=n.update(t),c=t.material;if(Array.isArray(c)){let n=i.groups;for(let l=0,u=n.length;l<u;l++){let u=n[l],d=c[u.materialIndex];if(d&&d.visible){let n=C(t,d,o,s);t.onBeforeShadow(e,t,r,a,i,n,u),e.renderBufferDirect(a,null,i,n,t,u),t.onAfterShadow(e,t,r,a,i,n,u)}}}else if(c.visible){let n=C(t,c,o,s);t.onBeforeShadow(e,t,r,a,i,n,null),e.renderBufferDirect(a,null,i,n,t,null),t.onAfterShadow(e,t,r,a,i,n,null)}}let c=t.children;for(let e=0,t=c.length;e<t;e++)w(c[e],r,a,o,s)}function T(e){e.target.removeEventListener(`dispose`,T);for(let t in f){let n=f[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function mo(e,t){function n(){let t=!1,n=new me,r=null,i=new me(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):R(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=S[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):R(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,C=null,w=null,T=new B(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,ee=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,te=0,P=e.getParameter(e.VERSION);P.indexOf(`WebGL`)===-1?P.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),N=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(P)[1]),N=te>=1);let ne=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),F=new me().fromArray(ie),oe=new me().fromArray(ae);function I(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=I(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=I(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=I(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=I(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),V(1),L(e.CULL_FACE),fe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function R(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function z(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(R(e.BLEND),g=!1);return}if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==D){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,C=null,w=null,T.set(0,0,0),E=0,_=t,D=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ue[n],ue[a]),v=n,x=a),(r!==y||i!==b||o!==C||s!==w)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),y=r,b=i,C=o,w=s),(c.equals(T)===!1||l!==E)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),E=l),_=t,D=!1}function pe(t,n){t.side===2?R(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),_e(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):R(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){O!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),O=t)}function V(t){t===0?R(e.CULL_FACE):(L(e.CULL_FACE),t!==k&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),k=t}function ge(t){t!==A&&(N&&e.lineWidth(t),A=t)}function _e(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(j!==n||ee!==r)&&(j=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):R(e.POLYGON_OFFSET_FILL)}function ve(t){t?L(e.SCISSOR_TEST):R(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),ne!==t&&(e.activeTexture(t),ne=t)}function be(t,n,r){r===void 0&&(r=ne===null?e.TEXTURE0+M-1:ne);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(ne!==r&&(e.activeTexture(r),ne=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function xe(){let t=re[ne];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function H(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){F.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),F.copy(t))}function U(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function G(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,re={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,C=null,w=null,T=new B(0,0,0),E=0,D=!1,O=null,k=null,A=null,j=null,ee=null,F.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:R,bindFramebuffer:z,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:he,setCullFace:V,setLineWidth:ge,setPolygonOffset:_e,setScissorTest:ve,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:H,pixelStorei:Me,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:U,reset:G}}function ho(e,r,a,o,s,c,u){let d=r.has(`WEBGL_multisampled_render_to_texture`)?r.get(`WEBGL_multisampled_render_to_texture`):null,f=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),p=new we,m=new WeakMap,h=new Set,g,_=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function y(e,t){return v?new OffscreenCanvas(e,t):i(`canvas`)}function b(e,n,r){let i=1,a=U(e);if((a.width>r||a.height>r)&&(i=r/Math.max(a.width,a.height)),i<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let r=Math.floor(i*a.width),o=Math.floor(i*a.height);g===void 0&&(g=y(r,o));let s=n?y(r,o):g;return s.width=r,s.height=o,s.getContext(`2d`).drawImage(e,0,0,r,o),t(`WebGLRenderer: Texture has been resized from (`+a.width+`x`+a.height+`) to (`+r+`x`+o+`).`),s}return`data`in e&&t(`WebGLRenderer: Image in DataTexture is too big (`+a.width+`x`+a.height+`).`),e}return e}function x(e){return e.generateMipmaps}function S(t){e.generateMipmap(t)}function C(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(n,i,a,o,s,c=!1){if(n!==null){if(e[n]!==void 0)return e[n];t(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let l;o&&(l=r.get(`EXT_texture_norm16`),l||t(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let u=i;if(i===e.RED&&(a===e.FLOAT&&(u=e.R32F),a===e.HALF_FLOAT&&(u=e.R16F),a===e.UNSIGNED_BYTE&&(u=e.R8),a===e.UNSIGNED_SHORT&&l&&(u=l.R16_EXT),a===e.SHORT&&l&&(u=l.R16_SNORM_EXT)),i===e.RED_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.R8UI),a===e.UNSIGNED_SHORT&&(u=e.R16UI),a===e.UNSIGNED_INT&&(u=e.R32UI),a===e.BYTE&&(u=e.R8I),a===e.SHORT&&(u=e.R16I),a===e.INT&&(u=e.R32I)),i===e.RG&&(a===e.FLOAT&&(u=e.RG32F),a===e.HALF_FLOAT&&(u=e.RG16F),a===e.UNSIGNED_BYTE&&(u=e.RG8),a===e.UNSIGNED_SHORT&&l&&(u=l.RG16_EXT),a===e.SHORT&&l&&(u=l.RG16_SNORM_EXT)),i===e.RG_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RG8UI),a===e.UNSIGNED_SHORT&&(u=e.RG16UI),a===e.UNSIGNED_INT&&(u=e.RG32UI),a===e.BYTE&&(u=e.RG8I),a===e.SHORT&&(u=e.RG16I),a===e.INT&&(u=e.RG32I)),i===e.RGB_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGB8UI),a===e.UNSIGNED_SHORT&&(u=e.RGB16UI),a===e.UNSIGNED_INT&&(u=e.RGB32UI),a===e.BYTE&&(u=e.RGB8I),a===e.SHORT&&(u=e.RGB16I),a===e.INT&&(u=e.RGB32I)),i===e.RGBA_INTEGER&&(a===e.UNSIGNED_BYTE&&(u=e.RGBA8UI),a===e.UNSIGNED_SHORT&&(u=e.RGBA16UI),a===e.UNSIGNED_INT&&(u=e.RGBA32UI),a===e.BYTE&&(u=e.RGBA8I),a===e.SHORT&&(u=e.RGBA16I),a===e.INT&&(u=e.RGBA32I)),i===e.RGB&&(a===e.UNSIGNED_SHORT&&l&&(u=l.RGB16_EXT),a===e.SHORT&&l&&(u=l.RGB16_SNORM_EXT),a===e.UNSIGNED_INT_5_9_9_9_REV&&(u=e.RGB9_E5),a===e.UNSIGNED_INT_10F_11F_11F_REV&&(u=e.R11F_G11F_B10F)),i===e.RGBA){let t=c?De:I.getTransfer(s);a===e.FLOAT&&(u=e.RGBA32F),a===e.HALF_FLOAT&&(u=e.RGBA16F),a===e.UNSIGNED_BYTE&&(u=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),a===e.UNSIGNED_SHORT&&l&&(u=l.RGBA16_EXT),a===e.SHORT&&l&&(u=l.RGBA16_SNORM_EXT),a===e.UNSIGNED_SHORT_4_4_4_4&&(u=e.RGBA4),a===e.UNSIGNED_SHORT_5_5_5_1&&(u=e.RGB5_A1)}return(u===e.R16F||u===e.R32F||u===e.RG16F||u===e.RG32F||u===e.RGBA16F||u===e.RGBA32F)&&r.get(`EXT_color_buffer_float`),u}function E(n,r){let i;return n?r===null||r===1014||r===1020?i=e.DEPTH24_STENCIL8:r===1015?i=e.DEPTH32F_STENCIL8:r===1012&&(i=e.DEPTH24_STENCIL8,t(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):r===null||r===1014||r===1020?i=e.DEPTH_COMPONENT24:r===1015?i=e.DEPTH_COMPONENT32F:r===1012&&(i=e.DEPTH_COMPONENT16),i}function O(e,t){return x(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function k(e){let t=e.target;t.removeEventListener(`dispose`,k),j(t),t.isVideoTexture&&m.delete(t),t.isHTMLTexture&&h.delete(t)}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),M(t)}function j(e){let t=o.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=_.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ee(e),Object.keys(r).length===0&&_.delete(n)}o.remove(e)}function ee(t){let n=o.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=_.get(r);delete i[n.__cacheKey],u.memory.textures--}function M(t){let n=o.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),o.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=o.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),u.memory.textures--),o.remove(r[t])}o.remove(t)}let N=0;function te(){N=0}function P(){return N}function ne(e){N=e}function ie(){let e=N;return e>=s.maxTextures&&t(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+s.maxTextures),N+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function F(n,r){let i=o.get(n);if(n.isVideoTexture&&je(n),n.isRenderTargetTexture===!1&&n.isExternalTexture!==!0&&n.version>0&&i.__version!==n.version){let e=n.image;if(e===null)t(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)t(`WebGLRenderer: Texture marked for update but image is incomplete`);else{B(i,n,r);return}}else n.isExternalTexture&&(i.__webglTexture=n.sourceTexture?n.sourceTexture:null);a.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function oe(t,n){let r=o.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){B(r,t,n);return}t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),a.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n)}function se(t,n){let r=o.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version){B(r,t,n);return}a.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function L(t,n){let r=o.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&r.__version!==t.version){me(r,t,n);return}a.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let R={[_e]:e.REPEAT,[he]:e.CLAMP_TO_EDGE,[l]:e.MIRRORED_REPEAT},z={[D]:e.NEAREST,[n]:e.NEAREST_MIPMAP_NEAREST,[xe]:e.NEAREST_MIPMAP_LINEAR,[Ce]:e.LINEAR,[de]:e.LINEAR_MIPMAP_NEAREST,[Me]:e.LINEAR_MIPMAP_LINEAR},ce={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function le(n,i){if(i.type===1015&&r.has(`OES_texture_float_linear`)===!1&&(i.magFilter===1006||i.magFilter===1007||i.magFilter===1005||i.magFilter===1008||i.minFilter===1006||i.minFilter===1007||i.minFilter===1005||i.minFilter===1008)&&t(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,R[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,R[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,R[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,z[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,z[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ce[i.compareFunction])),r.has(`EXT_texture_filter_anisotropic`)===!0){if(i.magFilter===1003||i.minFilter!==1005&&i.minFilter!==1008||i.type===1015&&r.has(`OES_texture_float_linear`)===!1)return;if(i.anisotropy>1||o.get(i).__currentAnisotropy){let t=r.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,s.getMaxAnisotropy())),o.get(i).__currentAnisotropy=i.anisotropy}}}function ue(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,k));let i=n.source,a=_.get(i);a===void 0&&(a={},_.set(i,a));let o=ae(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&ee(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,n,r,i){let o=t.updateRanges;if(o.length===0)a.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],r=o[e],i=t.start+t.count,a=fe(r.start,n.width,4),c=fe(t.start,n.width,4);r.start<=i+1&&a===c&&fe(r.start+r.count-1,n.width,4)===a?t.count=Math.max(t.count,r.start+r.count-t.start):(++s,o[s]=r)}o.length=s+1;let c=a.getParameter(e.UNPACK_ROW_LENGTH),l=a.getParameter(e.UNPACK_SKIP_PIXELS),u=a.getParameter(e.UNPACK_SKIP_ROWS);a.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%n.width,d=Math.floor(c/n.width),f=l;a.pixelStorei(e.UNPACK_SKIP_PIXELS,u),a.pixelStorei(e.UNPACK_SKIP_ROWS,d),a.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,r,i,n.data)}t.clearUpdateRanges(),a.pixelStorei(e.UNPACK_ROW_LENGTH,c),a.pixelStorei(e.UNPACK_SKIP_PIXELS,l),a.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function B(n,r,i){let l=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(l=e.TEXTURE_3D);let u=ue(n,r),d=r.source;a.bindTexture(l,n.__webglTexture,e.TEXTURE0+i);let f=o.get(d);if(d.version!==f.__version||u===!0){if(a.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=I.getPrimaries(I.workingColorSpace),n=r.colorSpace===``?null:I.getPrimaries(r.colorSpace),i=r.colorSpace===``||t===n?e.NONE:e.BROWSER_DEFAULT_WEBGL;a.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),a.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),a.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}a.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let n=b(r.image,!1,s.maxTextureSize);n=Ne(r,n);let o=c.convert(r.format,r.colorSpace),p=c.convert(r.type),m=w(r.internalFormat,o,p,r.normalized,r.colorSpace,r.isVideoTexture);le(l,r);let g,_=r.mipmaps,v=r.isVideoTexture!==!0,y=f.__version===void 0||u===!0,C=d.dataReady,D=O(r,n);if(r.isDepthTexture)m=E(r.format===T,r.type),y&&(v?a.texStorage2D(e.TEXTURE_2D,1,m,n.width,n.height):a.texImage2D(e.TEXTURE_2D,0,m,n.width,n.height,0,o,p,null));else if(r.isDataTexture){if(_.length>0){v&&y&&a.texStorage2D(e.TEXTURE_2D,D,m,_[0].width,_[0].height);for(let t=0,n=_.length;t<n;t++)g=_[t],v?C&&a.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,o,p,g.data):a.texImage2D(e.TEXTURE_2D,t,m,g.width,g.height,0,o,p,g.data);r.generateMipmaps=!1}else v?(y&&a.texStorage2D(e.TEXTURE_2D,D,m,n.width,n.height),C&&pe(r,n,o,p)):a.texImage2D(e.TEXTURE_2D,0,m,n.width,n.height,0,o,p,n.data)}else if(r.isCompressedTexture){if(r.isCompressedArrayTexture){v&&y&&a.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,_[0].width,_[0].height,n.depth);for(let i=0,s=_.length;i<s;i++)if(g=_[i],r.format!==1023){if(o!==null){if(v){if(C){if(r.layerUpdates.size>0){let t=re(g.width,g.height,r.format,r.type);for(let n of r.layerUpdates){let r=g.data.subarray(n*t/g.data.BYTES_PER_ELEMENT,(n+1)*t/g.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,n,g.width,g.height,1,o,r)}r.clearLayerUpdates()}else a.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,n.depth,o,g.data)}}else a.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,g.width,g.height,n.depth,0,g.data,0,0)}else t(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else v?C&&a.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,n.depth,o,p,g.data):a.texImage3D(e.TEXTURE_2D_ARRAY,i,m,g.width,g.height,n.depth,0,o,p,g.data)}else{v&&y&&a.texStorage2D(e.TEXTURE_2D,D,m,_[0].width,_[0].height);for(let n=0,i=_.length;n<i;n++)g=_[n],r.format===1023?v?C&&a.texSubImage2D(e.TEXTURE_2D,n,0,0,g.width,g.height,o,p,g.data):a.texImage2D(e.TEXTURE_2D,n,m,g.width,g.height,0,o,p,g.data):o===null?t(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):v?C&&a.compressedTexSubImage2D(e.TEXTURE_2D,n,0,0,g.width,g.height,o,g.data):a.compressedTexImage2D(e.TEXTURE_2D,n,m,g.width,g.height,0,g.data)}}else if(r.isDataArrayTexture){if(v){if(y&&a.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,n.width,n.height,n.depth),C){if(r.layerUpdates.size>0){let t=re(n.width,n.height,r.format,r.type);for(let i of r.layerUpdates){let r=n.data.subarray(i*t/n.data.BYTES_PER_ELEMENT,(i+1)*t/n.data.BYTES_PER_ELEMENT);a.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,n.width,n.height,1,o,p,r)}r.clearLayerUpdates()}else a.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,n.width,n.height,n.depth,o,p,n.data)}}else a.texImage3D(e.TEXTURE_2D_ARRAY,0,m,n.width,n.height,n.depth,0,o,p,n.data)}else if(r.isData3DTexture)v?(y&&a.texStorage3D(e.TEXTURE_3D,D,m,n.width,n.height,n.depth),C&&a.texSubImage3D(e.TEXTURE_3D,0,0,0,0,n.width,n.height,n.depth,o,p,n.data)):a.texImage3D(e.TEXTURE_3D,0,m,n.width,n.height,n.depth,0,o,p,n.data);else if(r.isFramebufferTexture){if(y){if(v)a.texStorage2D(e.TEXTURE_2D,D,m,n.width,n.height);else{let t=n.width,r=n.height;for(let n=0;n<D;n++)a.texImage2D(e.TEXTURE_2D,n,m,t,r,0,o,p,null),t>>=1,r>>=1}}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let t=e.canvas;if(t.hasAttribute(`layoutsubtree`)||t.setAttribute(`layoutsubtree`,`true`),n.parentNode!==t){t.appendChild(n),h.add(r),t.onpaint=e=>{let t=e.changedElements;for(let e of h)t.includes(e.image)&&(e.needsUpdate=!0)},t.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,n);else{let t=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,t,r,i,n)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(_.length>0){if(v&&y){let t=U(_[0]);a.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,n=_.length;t<n;t++)g=_[t],v?C&&a.texSubImage2D(e.TEXTURE_2D,t,0,0,o,p,g):a.texImage2D(e.TEXTURE_2D,t,m,o,p,g);r.generateMipmaps=!1}else if(v){if(y){let t=U(n);a.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}C&&a.texSubImage2D(e.TEXTURE_2D,0,0,0,o,p,n)}else a.texImage2D(e.TEXTURE_2D,0,m,o,p,n);x(r)&&S(l),f.__version=d.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function me(n,r,i){if(r.image.length!==6)return;let l=ue(n,r),u=r.source;a.bindTexture(e.TEXTURE_CUBE_MAP,n.__webglTexture,e.TEXTURE0+i);let d=o.get(u);if(u.version!==d.__version||l===!0){a.activeTexture(e.TEXTURE0+i);let n=I.getPrimaries(I.workingColorSpace),o=r.colorSpace===``?null:I.getPrimaries(r.colorSpace),f=r.colorSpace===``||n===o?e.NONE:e.BROWSER_DEFAULT_WEBGL;a.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),a.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),a.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),a.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=r.isCompressedTexture||r.image[0].isCompressedTexture,m=r.image[0]&&r.image[0].isDataTexture,h=[];for(let e=0;e<6;e++)!p&&!m?h[e]=b(r.image[e],!0,s.maxCubemapSize):h[e]=m?r.image[e].image:r.image[e],h[e]=Ne(r,h[e]);let g=h[0],_=c.convert(r.format,r.colorSpace),v=c.convert(r.type),y=w(r.internalFormat,_,v,r.normalized,r.colorSpace),C=r.isVideoTexture!==!0,T=d.__version===void 0||l===!0,E=u.dataReady,D=O(r,g);le(e.TEXTURE_CUBE_MAP,r);let k;if(p){C&&T&&a.texStorage2D(e.TEXTURE_CUBE_MAP,D,y,g.width,g.height);for(let n=0;n<6;n++){k=h[n].mipmaps;for(let i=0;i<k.length;i++){let o=k[i];r.format===1023?C?E&&a.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,0,0,o.width,o.height,_,v,o.data):a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,y,o.width,o.height,0,_,v,o.data):_===null?t(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):C?E&&a.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,0,0,o.width,o.height,_,o.data):a.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,i,y,o.width,o.height,0,o.data)}}}else{if(k=r.mipmaps,C&&T){k.length>0&&D++;let t=U(h[0]);a.texStorage2D(e.TEXTURE_CUBE_MAP,D,y,t.width,t.height)}for(let t=0;t<6;t++)if(m){C?E&&a.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,h[t].width,h[t].height,_,v,h[t].data):a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,h[t].width,h[t].height,0,_,v,h[t].data);for(let n=0;n<k.length;n++){let r=k[n].image[t].image;C?E&&a.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,_,v,r.data):a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,y,r.width,r.height,0,_,v,r.data)}}else{C?E&&a.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,_,v,h[t]):a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,y,_,v,h[t]);for(let n=0;n<k.length;n++){let r=k[n];C?E&&a.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,_,v,r.image[t]):a.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,y,_,v,r.image[t])}}}x(r)&&S(e.TEXTURE_CUBE_MAP),d.__version=u.version,r.onUpdate&&r.onUpdate(r)}n.__version=r.version}function V(t,n,r,i,s,l){let u=c.convert(r.format,r.colorSpace),f=c.convert(r.type),p=w(r.internalFormat,u,f,r.normalized,r.colorSpace),m=o.get(n),h=o.get(r);if(h.__renderTarget=n,!m.__hasExternalTextures){let t=Math.max(1,n.width>>l),r=Math.max(1,n.height>>l);s===e.TEXTURE_3D||s===e.TEXTURE_2D_ARRAY?a.texImage3D(s,l,p,t,r,n.depth,0,u,f,null):a.texImage2D(s,l,p,t,r,0,u,f,null)}a.bindFramebuffer(e.FRAMEBUFFER,t),H(n)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,s,h.__webglTexture,0,Ae(n)):(s===e.TEXTURE_2D||s>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,s,h.__webglTexture,l),a.bindFramebuffer(e.FRAMEBUFFER,null)}function ge(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=E(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;H(n)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=c.convert(a.format,a.colorSpace),s=c.convert(a.type),l=w(a.internalFormat,o,s,a.normalized,a.colorSpace);H(n)?d.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),l,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),l,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,l,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let s=o.get(n.depthTexture);if(s.__renderTarget=n,(!s.__webglTexture||n.depthTexture.image.width!==n.width||n.depthTexture.image.height!==n.height)&&(n.depthTexture.image.width=n.width,n.depthTexture.image.height=n.height,n.depthTexture.needsUpdate=!0),i){if(s.__webglInit===void 0&&(s.__webglInit=!0,n.depthTexture.addEventListener(`dispose`,k)),s.__webglTexture===void 0){s.__webglTexture=e.createTexture(),a.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture),le(e.TEXTURE_CUBE_MAP,n.depthTexture);let t=c.convert(n.depthTexture.format),r=c.convert(n.depthTexture.type),i;n.depthTexture.format===1026?i=e.DEPTH_COMPONENT24:n.depthTexture.format===1027&&(i=e.DEPTH24_STENCIL8);for(let a=0;a<6;a++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,i,n.width,n.height,0,t,r,null)}}else F(n.depthTexture,0);let l=s.__webglTexture,u=Ae(n),f=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,p=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)H(n)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,l,0,u):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,l,0);else if(n.depthTexture.format===1027)H(n)?d.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,l,0,u):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,l,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let n=o.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)ve(n.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ve(n.__webglFramebuffer[0],t,0):ve(n.__webglFramebuffer,t,0)}}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(a.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),ge(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?a.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):a.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),ge(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}}a.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,r){let i=o.get(t);n!==void 0&&V(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&ye(t)}function Se(t){let n=t.texture,r=o.get(t),i=o.get(n);t.addEventListener(`dispose`,A);let s=t.textures,l=t.isWebGLCubeRenderTarget===!0,d=s.length>1;if(d||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,u.memory.textures++),l){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps&&n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=s.length;t<n;t++){let n=o.get(s[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),u.memory.textures++)}if(t.samples>0&&H(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],a.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<s.length;n++){let i=s[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let a=c.convert(i.format,i.colorSpace),o=c.convert(i.type),l=w(i.internalFormat,a,o,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),u=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),ge(r.__webglDepthRenderbuffer,t,!0)),a.bindFramebuffer(e.FRAMEBUFFER,null)}}if(l){a.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),le(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps&&n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)V(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else V(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);x(n)&&S(e.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(d){for(let n=0,i=s.length;n<i;n++){let i=s[n],c=o.get(i),l=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(l=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),a.bindTexture(l,c.__webglTexture),le(l,i),V(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,l,0),x(i)&&S(l)}a.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),a.bindTexture(o,i.__webglTexture),le(o,n),n.mipmaps&&n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)V(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,o,i);else V(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,o,0);x(n)&&S(o),a.unbindTexture()}t.depthBuffer&&ye(t)}function Te(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(x(r)){let t=C(e),n=o.get(r).__webglTexture;a.bindTexture(t,n),S(t),a.unbindTexture()}}}let Ee=[],Oe=[];function ke(t){if(t.samples>0){if(H(t)===!1){let n=t.textures,r=t.width,i=t.height,s=e.COLOR_BUFFER_BIT,c=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=o.get(t),u=n.length>1;if(u)for(let t=0;t<n.length;t++)a.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),a.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);a.bindFramebuffer(e.READ_FRAMEBUFFER,l.__webglMultisampledFramebuffer);let d=t.texture.mipmaps;d&&d.length>0?a.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer[0]):a.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglFramebuffer);for(let a=0;a<n.length;a++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),u){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,l.__webglColorRenderbuffer[a]);let t=o.get(n[a]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,s,e.NEAREST),f===!0&&(Ee.length=0,Oe.length=0,Ee.push(e.COLOR_ATTACHMENT0+a),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Ee.push(c),Oe.push(c),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ee))}if(a.bindFramebuffer(e.READ_FRAMEBUFFER,null),a.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),u)for(let t=0;t<n.length;t++){a.bindFramebuffer(e.FRAMEBUFFER,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,l.__webglColorRenderbuffer[t]);let r=o.get(n[t]).__webglTexture;a.bindFramebuffer(e.FRAMEBUFFER,l.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}a.bindFramebuffer(e.DRAW_FRAMEBUFFER,l.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&f){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(s.maxSamples,e.samples)}function H(e){let t=o.get(e);return e.samples>0&&r.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function je(e){let t=u.render.frame;m.get(e)!==t&&(m.set(e,t),e.update())}function Ne(e,n){let r=e.colorSpace,i=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||r!==`srgb-linear`&&r!==``&&(I.getTransfer(r)===`srgb`?(i!==1023||a!==1009)&&t(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,r)),n}function U(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(p.width=e.naturalWidth||e.width,p.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(p.width=e.displayWidth,p.height=e.displayHeight):(p.width=e.width,p.height=e.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=te,this.getTextureUnits=P,this.setTextureUnits=ne,this.setTexture2D=F,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=L,this.rebindTextures=be,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=V,this.useMultisampledRTT=H,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function go(e,t){function n(n,r=``){let i,a=I.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var _o=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vo=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new O(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ae({vertexShader:_o,fragmentShader:vo,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new _(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bo=class extends C{constructor(e,n){super();let r=this,i=null,a=1,s=null,c=`local-floor`,l=1,u=null,d=null,f=null,p=null,m=null,h=null,g=typeof XRWebGLBinding<`u`,_=new yo,v={},b=n.getContextAttributes(),x=null,S=null,C=[],w=[],E=new we,D=null,A=new k;A.viewport=new me;let j=new k;j.viewport=new me;let ee=[A,j],M=new Oe,N=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new R,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new R,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new R,C[e]=t),t.getHandSpace()};function P(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,u||s),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){i.removeEventListener(`select`,P),i.removeEventListener(`selectstart`,P),i.removeEventListener(`selectend`,P),i.removeEventListener(`squeeze`,P),i.removeEventListener(`squeezestart`,P),i.removeEventListener(`squeezeend`,P),i.removeEventListener(`end`,ne),i.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}N=null,te=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),m=null,p=null,f=null,i=null,S=null,ce.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),r.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){a=e,r.isPresenting===!0&&t(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){c=e,r.isPresenting===!0&&t(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(e){u=e},this.getBaseLayer=function(){return p===null?m:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,n)),f},this.getFrame=function(){return h},this.getSession=function(){return i},this.setSession=async function(t){if(i=t,i!==null){if(x=e.getRenderTarget(),i.addEventListener(`select`,P),i.addEventListener(`selectstart`,P),i.addEventListener(`selectend`,P),i.addEventListener(`squeeze`,P),i.addEventListener(`squeezestart`,P),i.addEventListener(`squeezeend`,P),i.addEventListener(`end`,ne),i.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let t=null,r=null,s=null;b.depth&&(s=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,t=b.stencil?T:o,r=b.stencil?le:je);let c={colorFormat:n.RGBA8,depthFormat:s,scaleFactor:a};f=this.getBinding(),p=f.createProjectionLayer(c),i.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Le(p.textureWidth,p.textureHeight,{format:y,type:Te,depthTexture:new ye(p.textureWidth,p.textureHeight,r,void 0,void 0,void 0,void 0,void 0,void 0,t),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,n,t),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Le(m.framebufferWidth,m.framebufferHeight,{format:y,type:Te,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await i.requestReferenceSpace(c),ce.setContext(i),ce.start(),r.isPresenting=!0,r.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new V,ae=new V;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(i===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=A.near=t,M.far=j.far=A.far=n,(N!==M.near||te!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,te=M.far),M.layers.mask=e.layers.mask|6,A.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let r=e.parent,a=M.cameras;I(M,r);for(let e=0;e<a.length;e++)I(a[e],r);a.length===2?oe(M,A,j):M.projectionMatrix.copy(A.projectionMatrix),se(e,M,r)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=F*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(p!==null||m!==null)return l},this.setFoveation=function(e){l=e,p!==null&&(p.fixedFoveation=e),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let L=null;function z(t,n){if(d=n.getViewerPose(u||s),h=n,d!==null){let t=d.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let n=!1;t.length!==M.cameras.length&&(M.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(m!==null)a=m.getViewport(i);else{let t=f.getViewSubImage(p,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=ee[r];o===void 0&&(o=new k,o.layers.enable(r),o.viewport=new me,ee[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),n===!0&&M.cameras.push(o)}let a=i.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&g){f=r.getBinding();let e=f.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,i.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),f=r.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new O,v[n]=e);let t=f.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],r=C[e];t!==null&&r!==void 0&&r.update(t,n,u||s)}L&&L(t,n),n.detectedPlanes&&r.dispatchEvent({type:`planesdetected`,data:n}),h=null}let ce=new fr;ce.setAnimationLoop(z),this.setAnimationLoop=function(e){L=e},this.dispose=function(){}}},xo=new Re,So=new U;So.set(-1,0,0,0,1,0,0,0,1);function Co(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,f(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),p(e,t),t.isMeshPhysicalMaterial&&m(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),h(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),g(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(xo.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(So),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function p(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function h(e,t){t.matcap&&(e.matcap.value=t.matcap)}function g(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function wo(e,n,r,i){let a={},o={},s=[],c=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(e,t){let n=t.program;i.uniformBlockBinding(e,n)}function u(e,t){let r=a[e.id];r===void 0&&(_(e),r=d(e),a[e.id]=r,e.addEventListener(`dispose`,y));let s=t.program;i.updateUBOMapping(e,s);let c=n.render.frame;o[e.id]!==c&&(p(e),o[e.id]=c)}function d(t){let n=f();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function f(){for(let e=0;e<c;e++)if(s.indexOf(e)===-1)return s.push(e),e;return W(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function p(t){let n=a[t.id],r=t.uniforms,i=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)m(t[n],e,n,i);else m(t,e,0,i)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(t,n,r,i){if(g(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=v(i);h(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function h(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function g(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function _(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=v(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function v(e){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=48,n.storage=48):e.isMatrix4?(n.boundary=64,n.storage=64):e.isTexture?t(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):t(`WebGLRenderer: Unsupported uniform value type.`,e),n}function y(t){let n=t.target;n.removeEventListener(`dispose`,y);let r=s.indexOf(n.__bindingPointIndex);s.splice(r,1),e.deleteBuffer(a[n.id]),delete a[n.id],delete o[n.id]}function b(){for(let t in a)e.deleteBuffer(a[t]);s=[],a={},o={}}return{bind:l,update:u,dispose:b}}var To=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Eo=null;function Do(){return Eo===null&&(Eo=new u(To,16,16,ne,h),Eo.name=`DFG_LUT`,Eo.minFilter=Ce,Eo.magFilter=Ce,Eo.wrapS=he,Eo.wrapT=he,Eo.generateMipmaps=!1,Eo.needsUpdate=!0),Eo}var Oo=class{constructor(n={}){let{canvas:r=N(),context:i=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p=`default`,failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1,outputBufferType:_=Te}=n;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<`u`&&i instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);v=i.getContextAttributes().alpha}else v=s;let y=_,b=new Set([oe,d,e]),x=new Set([Te,je,Ee,le,ue,fe]),S=new Uint32Array(4),C=new Int32Array(4),w=new V,T=null,E=null,D=[],O=[],k=null;this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,j=!1,M=null,te=null,P=null,ne=null;this._outputColorSpace=ee;let re=0,ae=0,F=null,se=-1,L=null,R=new me,z=new me,ce=null,de=new B(0),pe=0,he=r.width,ge=r.height,_e=1,ve=null,ye=null,xe=new me(0,0,he,ge),Se=new me(0,0,he,ge),Ce=!1,we=new ie,De=!1,Oe=!1,ke=new Re,Ae=new V,H=new me,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return F===null?_e:1}let G=i;function Ie(e,t){return r.getContext(e,t)}try{let e={alpha:!0,depth:a,stencil:o,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if(`setAttribute`in r&&r.setAttribute(`data-engine`,`three.js r185`),r.addEventListener(`webglcontextlost`,at,!1),r.addEventListener(`webglcontextrestored`,ot,!1),r.addEventListener(`webglcontextcreationerror`,st,!1),G===null){let t=`webgl2`;if(G=Ie(t,e),G===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw W(`WebGLRenderer: `+e.message),e}let K,ze,q,Be,J,Y,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt;function it(){K=new Gr(G),K.init(),tt=new go(G,K),ze=new xr(G,K,n,tt),q=new mo(G,K),ze.reversedDepthBuffer&&g&&q.buffers.depth.setReversed(!0),te=G.createFramebuffer(),P=G.createFramebuffer(),ne=G.createFramebuffer(),Be=new Jr(G),J=new qa,Y=new ho(G,K,q,J,ze,tt,Be),Ve=new Wr(A),He=new pr(G),nt=new yr(G,He),Ue=new Kr(G,He,Be,nt),We=new Xr(G,Ue,He,nt,Be),Qe=new Yr(G,ze,Y),Ye=new Sr(J),Ge=new Ka(A,Ve,K,ze,nt,Ye),Ke=new Co(A,J),qe=new Za,Je=new io(K),Ze=new vr(A,Ve,q,We,v,u),Xe=new po(A,We,ze),rt=new wo(G,Be,ze,q),$e=new br(G,K,Be),et=new qr(G,K,Be),Be.programs=Ge.programs,A.capabilities=ze,A.extensions=K,A.properties=J,A.renderLists=qe,A.shadowMap=Xe,A.state=q,A.info=Be}it(),y!==1009&&(k=new Qr(y,r.width,r.height,l,a,o));let X=new bo(A,G);this.xr=X,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=K.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=K.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,i=!0){if(X.isPresenting){t(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,r.width=Math.floor(e*_e),r.height=Math.floor(n*_e),i===!0&&(r.style.width=e+`px`,r.style.height=n+`px`),k!==null&&k.setSize(r.width,r.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,t,n){he=e,ge=t,_e=n,r.width=Math.floor(e*n),r.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(y===1009){W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let n=0;n<e.length;n++)if(e[n].isOutputPass===!0){t(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}k.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(R)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),q.viewport(R.copy(xe).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),q.scissor(z.copy(Se).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){q.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=b.has(t)}if(e){let e=F.texture.type,t=x.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(S[0]=i,S[1]=a,S[2]=o,S[3]=r,G.clearBufferuiv(G.COLOR,0,S)):(C[0]=i,C[1]=a,C[2]=o,C[3]=r,G.clearBufferiv(G.COLOR,0,C))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),M=e},this.dispose=function(){r.removeEventListener(`webglcontextlost`,at,!1),r.removeEventListener(`webglcontextrestored`,ot,!1),r.removeEventListener(`webglcontextcreationerror`,st,!1),Ze.dispose(),qe.dispose(),Je.dispose(),J.dispose(),Ve.dispose(),We.dispose(),nt.dispose(),rt.dispose(),Ge.dispose(),X.dispose(),X.removeEventListener(`sessionstart`,mt),X.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),c(`WebGLRenderer: Context Lost.`),j=!0}function ot(){c(`WebGLRenderer: Context Restored.`),j=!1;let e=Be.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;it(),Be.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function st(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),J.remove(e)}function ut(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=U);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh){if(K.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,n),e.side=0,e.needsUpdate=!0,St(e,t,n),e.side=2):St(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),E=Je.get(n),E.init(t),O.push(E),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(E.pushLight(e),e.castShadow&&E.pushShadow(e))}),E.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];dt(a,n,e),r.add(a)}else dt(t,n,e),r.add(t)}}),E=O.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){J.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}K.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new fr;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,X.setAnimationLoop(e),e===null?gt.stop():gt.start()},X.addEventListener(`sessionstart`,mt),X.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(j===!0)return;M!==null&&M.renderStart(e,t);let n=X.enabled===!0&&X.isPresenting===!0,r=k!==null&&(F===null||n)&&k.begin(A,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(t),t=X.getCamera()),e.isScene===!0&&e.onBeforeRender(A,e,t,F),E=Je.get(e,O.length),E.init(t),E.state.textureUnits=Y.getTextureUnits(),O.push(E),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(ke,Ne,t.reversedDepth),Oe=this.localClippingEnabled,De=Ye.init(this.clippingPlanes,Oe),T=qe.get(e,D.length),T.init(),D.push(T),X.enabled===!0&&X.isPresenting===!0){let e=A.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,A.sortObjects)}_t(e,t,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(ve,ye,t.reversedDepth),Pe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Pe&&Ze.addToRenderList(T,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),De===!0&&Ye.beginShadows();let i=E.state.shadowsArray;if(Xe.render(i,e,t),De===!0&&Ye.endShadows(),(r&&k.hasRenderPass())===!1){let n=T.opaque,r=T.transmissive;if(E.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Pe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(T,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Pe&&Ze.render(e),vt(T,e,t)}F!==null&&ae===0&&(Y.updateMultisampleRenderTarget(F),Y.updateRenderTargetMipmap(F)),r&&k.end(A),e.isScene===!0&&e.onAfterRender(A,e,t),nt.resetDefaultState(),se=-1,L=null,O.pop(),O.length>0?(E=O[O.length-1],Y.setTextureUnits(E.state.textureUnits),De===!0&&Ye.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,D.pop(),T=D.length>0?D[D.length-1]:null,M!==null&&M.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)E.pushLightProbeGrid(e);else if(e.isLight)E.pushLight(e),e.castShadow&&E.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||we.intersectsSprite(e)){r&&H.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let t=We.update(e),i=e.material;i.visible&&T.push(e,t,i,n,H.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||we.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),H.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),H.copy(e.boundingSphere.center)),H.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&T.push(e,t,s,n,H.z,o)}}else i.visible&&T.push(e,t,i,n,H.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;E.setupLightsView(n),De===!0&&Ye.setGlobalState(A.clippingPlanes,n),r&&q.viewport(R.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[r.id]===void 0){let e=K.has(`EXT_color_buffer_half_float`)||K.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[r.id]=new Le(1,1,{generateMipmaps:!0,type:e?h:Te,minFilter:Me,samples:Math.max(4,ze.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:I.workingColorSpace})}let i=E.state.transmissionRenderTarget[r.id],a=r.viewport||R;i.setSize(a.z*A.transmissionResolutionScale,a.w*A.transmissionResolutionScale);let s=A.getRenderTarget(),c=A.getActiveCubeFace(),l=A.getActiveMipmapLevel();A.setRenderTarget(i),A.getClearColor(de),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),Pe&&Ze.render(n);let u=A.toneMapping;A.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),E.setupLightsView(r),De===!0&&Ye.setGlobalState(A.clippingPlanes,r),bt(e,n,r),Y.updateMultisampleRenderTarget(i),Y.updateRenderTargetMipmap(i),K.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Y.updateMultisampleRenderTarget(i),Y.updateRenderTargetMipmap(i))}A.setRenderTarget(s,c,l),A.setClearColor(de,pe),d!==void 0&&(r.viewport=d),A.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){e.onBeforeRender(A,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(A,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,A.renderBufferDirect(n,t,r,i,e,a),i.side=2):A.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(A,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=U);let r=J.get(e),i=E.state.lights,a=E.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,E.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=Ge.getUniforms(e),M!==null&&e.isNodeMaterial&&M.build(e,n,s),e.onBeforeCompile(s,A),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),wt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=E.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=aa.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];w.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(w))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=U),Y.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:I.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=A.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=E.state.lights;if(De===!0&&(Oe===!0||e!==L)){let t=e===L&&r.id===se;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=E.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),M&&r.isNodeMaterial&&M.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),D=v.uniforms;if(q.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==se&&(se=r.id,C=!0),v.needsLights){let e=Tt(E.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||L!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(G,`projectionMatrix`,e.projectionMatrix),T.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(G,Ae.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&T.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(G,`isOrthographic`,e.isOrthographicCamera===!0),L!==e&&(L=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(G,`directionalShadowMap`,y.state.directionalShadowMap,Y),y.state.spotShadowMap.length>0&&T.setValue(G,`spotShadowMap`,y.state.spotShadowMap,Y),y.state.pointShadowMap.length>0&&T.setValue(G,`pointShadowMap`,y.state.pointShadowMap,Y)),i.isSkinnedMesh){T.setOptional(G,i,`bindMatrix`),T.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(G,`boneTexture`,e.boneTexture,Y))}i.isBatchedMesh&&(T.setOptional(G,i,`batchingTexture`),T.setValue(G,`batchingTexture`,i._matricesTexture,Y),T.setOptional(G,i,`batchingIdTexture`),T.setValue(G,`batchingIdTexture`,i._indirectTexture,Y),T.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(G,`batchingColorTexture`,i._colorsTexture,Y));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Qe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(G,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=Do()),C){if(T.setValue(G,`toneMappingExposure`,A.toneMappingExposure),v.needsLights&&Dt(D,w),a&&r.fog===!0&&Ke.refreshFogUniforms(D,a),Ke.refreshMaterialUniforms(D,r,_e,ge,E.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}aa.upload(G,Ct(v),D,Y)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(aa.upload(G,Ct(v),D,Y),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(G,`center`,i.center),T.setValue(G,`modelViewMatrix`,i.modelViewMatrix),T.setValue(G,`normalMatrix`,i.normalMatrix),T.setValue(G,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,re=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(G.FRAMEBUFFER,o.__webglFramebuffer),R.copy(e.viewport),z.copy(e.scissor),ce=e.scissorTest,q.viewport(R),q.scissor(z),q.setScissorTest(ce),se=-1;return}if(o.__webglFramebuffer===void 0)Y.setupRenderTarget(e);else if(o.__hasExternalTextures)Y.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Y.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Y.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,R.copy(e.viewport),z.copy(e.scissor),ce=e.scissorTest}else R.copy(xe).multiplyScalar(_e).floor(),z.copy(Se).multiplyScalar(_e).floor(),ce=Ce;if(n!==0&&(r=te),q.bindFramebuffer(G.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(R),q.scissor(z),q.setScissorTest(ce),i){let r=J.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}se=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){q.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(c)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ze.textureTypeReadable(l)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&G.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=F===null?null:J.get(F).__webglFramebuffer;q.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ze.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,d),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),G.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0);let f=F===null?null:J.get(F).__webglFramebuffer;q.bindFramebuffer(G.FRAMEBUFFER,f);let p=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await be(G,p,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,d),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.deleteBuffer(d),G.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Y.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Y.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Y.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(Y.setTexture2D(t,0),v=G.TEXTURE_2D),q.activeTexture(G.TEXTURE0),q.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(G.UNPACK_ROW_LENGTH),b=q.getParameter(G.UNPACK_IMAGE_HEIGHT),x=q.getParameter(G.UNPACK_SKIP_PIXELS),S=q.getParameter(G.UNPACK_SKIP_ROWS),C=q.getParameter(G.UNPACK_SKIP_IMAGES);q.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(G.UNPACK_SKIP_PIXELS,l),q.pixelStorei(G.UNPACK_SKIP_ROWS,u),q.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);q.bindFramebuffer(G.READ_FRAMEBUFFER,null),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(G.READ_FRAMEBUFFER,P),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);q.bindFramebuffer(G.READ_FRAMEBUFFER,null),q.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(G.UNPACK_ROW_LENGTH,y),q.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(G.UNPACK_SKIP_PIXELS,x),q.pixelStorei(G.UNPACK_SKIP_ROWS,S),q.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Y.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Y.setTextureCube(e,0):e.isData3DTexture?Y.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Y.setTexture2DArray(e,0):Y.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){re=0,ae=0,F=null,q.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ne}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=I._getDrawingBufferColorSpace(e),t.unpackColorSpace=I._getUnpackColorSpace()}},ko=[{id:25832,label:`ETRS89 / UTM-Zone 32N (DE West)`},{id:25833,label:`ETRS89 / UTM-Zone 33N (DE Ost)`},{id:4326,label:`WGS 84 (GPS φ/λ)`},{id:3857,label:`Web Mercator`},{id:31468,label:`DHDN / 3-Grad-Gauß-Krüger Zone 4`}];function Ao(e,t=65){let n=e.replace(/[,;]/g,` `).split(/\s+/).map(Number).filter(e=>Number.isFinite(e));if(n.length<4)return null;let r=Math.max(2,Math.floor(Math.sqrt(n.length))),i=Array(t*t);for(let e=0;e<t;e++)for(let a=0;a<t;a++){let o=a/Math.max(1,t-1)*(r-1),s=e/Math.max(1,t-1)*(r-1),c=Math.floor(o),l=Math.floor(s),u=Math.min(r-1,c+1),d=Math.min(r-1,l+1),f=o-c,p=s-l,m=n[l*r+c]??0,h=n[l*r+u]??m,g=n[d*r+c]??m,_=n[d*r+u]??m;i[e*t+a]=m*(1-f)*(1-p)+h*f*(1-p)+g*(1-f)*p+_*f*p}return i}function jo(e,t,n){let r=111320*Math.cos(n.lat*Math.PI/180);return{x:(t-n.lon)*r,y:(e-n.lat)*110540}}function Mo(e,t){let n=t.ix-e.ix,r=t.iy-e.iy,i=t.x-e.x,a=t.y-e.y,o=(Math.hypot(i,a)||1)/(Math.hypot(n,r)||1),s=(Math.atan2(a,i)-Math.atan2(r,n))*180/Math.PI;return{x:e.x-e.ix*o,y:e.y-e.iy*o,scale:o,rot:s,opacity:.55}}function No(e){return e.features.filter(e=>Ye(e.kind)).map(t=>{let n=(e.rotationHist??[]).filter(e=>e.bedId===t.id).sort((e,t)=>e.year-t.year);return{bed:t.name,id:t.id,years:n}})}function Po(e){let t=new Map;for(let n of e.plants.filter(e=>!e.harvested)){let e=cn(n.crop);t.set(n.crop,(t.get(n.crop)??0)+e.kgM2*.09)}let n=new Map;for(let t of e.yieldIst??[])n.set(t.crop,(n.get(t.crop)??0)+t.kg);return[...new Set([...t.keys(),...n.keys()])].map(e=>{let r=t.get(e)??0,i=n.get(e)??0;return{crop:e,soll:r,ist:i,pct:r>0?i/r*100:i>0?100:0}})}function Fo(e,t){let n=cn(e);return t*Math.max(.08,n.n*.12)}function Io(e,t){let n=new Set(e.map(e=>`${e.kind}|${e.name}|${e.x.toFixed(1)}|${e.y.toFixed(1)}`)),r=new Set(t.map(e=>`${e.kind}|${e.name}|${e.x.toFixed(1)}|${e.y.toFixed(1)}`));return{onlyA:e.filter(e=>!r.has(`${e.kind}|${e.name}|${e.x.toFixed(1)}|${e.y.toFixed(1)}`)).length,onlyB:t.filter(e=>!n.has(`${e.kind}|${e.name}|${e.x.toFixed(1)}|${e.y.toFixed(1)}`)).length,same:e.length-e.filter(e=>!r.has(`${e.kind}|${e.name}|${e.x.toFixed(1)}|${e.y.toFixed(1)}`)).length}}function Lo(e,t){try{let n=cn(e||`Tomate`),r=n.plant[0],i=Math.max(2,n.days/7),a=.18+((Number(t)||22)-r)/i*.97;return Number.isFinite(a)?Math.max(.18,Math.min(1.15,a)):.7}catch{return .7}}function Ro(e){return/tomat/.test((e||``).toLowerCase())}function zo(e){let t=(e||``).toLowerCase();return/cocktail|cherry|zuckertraube|philovita|tumbling|gartenperle|sweet million|yellow pear/.test(t)?/yellow|pear|gelb/.test(t)?`yellow`:`cherry`:/roma|san marzano|san-marzano/.test(t)?`roma`:/ochsenherz/.test(t)?`heart`:/yellow|gelb|gold|pear/.test(t)?`yellow`:/black cherry|indigo|schwarze/.test(t)?`dark`:/green zebra|grün zebra|gruen zebra/.test(t)?`zebra`:`salad`}function Bo(e){let t=(e||``).toLowerCase();return/apfel|birne|kirsch|pflaume|nuss|baum|quitte|pfirsich/.test(t)?`tree`:/tomat/.test(t)?`tomato`:/paprika|aubergine|chili/.test(t)?`pepper`:/möhre|moehre|rettich|radies|pastinak|wurzel/.test(t)?`root`:/zwiebel|lauch|knoblauch|porree/.test(t)?`onion`:/salat|kohl|spinat|mangold|endiv/.test(t)?`leaf`:/erdbeer|beere|himbeer|johannis|stachel/.test(t)?`berry`:/basilik|schnittlauch|petersil|minze|thymian|oregano|kraut/.test(t)?`herb`:/bohne|erbse|kartoffel|zucchini|kürbis|kuerbis|gurke/.test(t)?`bush`:/rose|tulpe|sonnenblume|blume|aster/.test(t)?`herb`:/weizen|roggen|hafer|gerste|mais/.test(t)?`onion`:`leaf`}function Vo(e,t){let n=cn(e||`Tomate`),r=n.plant[0],i=n.harvest?.[1]??r+Math.max(4,n.days/7);return t<r+3?`young`:t>=i?`late`:t>=i-2?`ripe`:`stand`}function Ho(e,t){let n=Bo(e),r=Vo(e,t);if(n===`tomato`){let t=zo(e);return r===`young`?`#7cb86a`:r===`stand`?`#3d7a40`:t===`yellow`?`#d8a028`:t===`dark`?`#5a2030`:t===`zebra`?`#6a8a40`:`#c4452c`}return n===`pepper`?r===`ripe`?`#c45c26`:r===`young`?`#7cb86a`:`#3d7a40`:n===`leaf`?r===`ripe`?`#c4a050`:r===`young`?`#9fd07a`:`#4a8a3c`:n===`berry`?r===`ripe`?`#b03040`:`#3d7a40`:n===`onion`?r===`ripe`?`#c4a070`:`#6a9a48`:n===`root`?r===`ripe`?`#d07038`:`#4a8a3c`:n===`tree`?r===`ripe`?`#3a6a32`:`#2f5a30`:n===`herb`?`#5a9a48`:r===`ripe`?`#8aaa40`:`#3d7a40`}function Uo(e){let t=q(e,!1);return e.forEach(e=>e.dispose()),t??e[0]}function Wo(e){if(!e.length)return null;let t=e.map(e=>{let t=e.index?e.toNonIndexed():e;return t!==e&&e.dispose(),t.computeVertexNormals(),t});if(t.length===1)return t[0];let n=q(t,!1);return t.forEach(e=>e.dispose()),n&&n.computeVertexNormals(),n}function Go(e,t){let n=new Re;return t(n),e.applyMatrix4(n),e}function Ko(e,t,n){let r=new g,i=Math.max(.04,e),a=Math.max(.012,t);r.moveTo(0,0),r.bezierCurveTo(i*.08,-a*.18,i*.2,-a*.55,i*.34,-a*.42),r.bezierCurveTo(i*.42,-a*.62,i*.5,-a*.22,i*.58,-a*.2),r.bezierCurveTo(i*.7,-a*.48,i*.84,-a*.16,i,0),r.bezierCurveTo(i*.84,a*.16,i*.7,a*.48,i*.58,a*.2),r.bezierCurveTo(i*.5,a*.22,i*.42,a*.62,i*.34,a*.42),r.bezierCurveTo(i*.2,a*.55,i*.08,a*.18,0,0);let o=new p(r,{depth:.0018,bevelEnabled:!1,curveSegments:Math.max(2,Math.min(4,n-2))});return o.rotateX(-Math.PI/2),o}function qo(e,t){let n=[],i=new r(.0018,.003,e,Math.max(4,t-2));Go(i,t=>{t.makeRotationZ(-Math.PI/2),t.setPosition(e/2,0,0)}),n.push(i);let a=t<7?2:3;for(let r=0;r<a;r++){let i=.2+.55/a*r,o=e*(.38-r*.05),s=o*.38;for(let a of[-1,1]){let c=Ko(o,s,t);Go(c,t=>{t.makeRotationFromEuler(new x(.12,a*(.85-r*.08),a*.08,`YXZ`)),t.setPosition(i*e,.002,0)}),n.push(c)}}let o=Ko(e*.36,e*.15,t);return Go(o,t=>{t.makeRotationFromEuler(new x(.08,0,0,`YXZ`)),t.setPosition(e*.68,.002,0)}),n.push(o),Wo(n)}function Jo(e,t,n){let r=Math.max(6,n);if(e===`roma`){let e=new v(t,r,Math.max(5,r-2));return e.scale(.72,1.28,.72),e}if(e===`heart`){let e=new v(t*1.08,r,Math.max(5,r-2));return e.scale(1.08,1.12,.82),e}if(e===`cherry`)return new v(t*.48,r,Math.max(5,r-2));let i=new v(t,r,Math.max(5,r-2));return i.scale(1,.92,1),i}function Yo(e,t){let n=[];for(let r=0;r<6;r++){let i=r/6*Math.PI*2,a=new K(e*.16,e*.55,Math.max(4,t-3));Go(a,t=>{t.makeRotationFromEuler(new x(.85,i,0,`YXZ`)),t.setPosition(Math.cos(i)*e*.12,e*.42,Math.sin(i)*e*.12)}),n.push(a)}return Wo(n)}function Xo(e){let t=[];for(let n=0;n<5;n++){let r=n/5*Math.PI*2,i=new v(.011,Math.max(5,e-1),4);i.scale(.85,.16,.48),Go(i,e=>{e.makeRotationFromEuler(new x(.15,r,0,`YXZ`)),e.setPosition(Math.cos(r)*.009,.002,Math.sin(r)*.009)}),t.push(i)}let n=new K(.0045,.012,Math.max(5,e-1));return n.translate(0,.008,0),t.push(n),Wo(t)}function Zo(e,t,n){return t===`young`?`#6a9a3a`:t===`stand`?n%5==0?`#c47830`:`#6a9a38`:e===`yellow`?t===`late`?`#c49020`:`#d8a028`:e===`dark`?t===`late`?`#3a1820`:`#5a2030`:e===`zebra`?`#6a8a40`:e===`cherry`?`#d03028`:e===`roma`?`#c43828`:e===`heart`?`#c05040`:t===`late`?`#a83828`:`#c4452c`}function Qo(e,t,n=`salad`){let i=Math.max(5,e),a=t===`young`,o=a?.72:1.58,s=a?5:i<7?8:11,c=a?4:i<7?7:9,l=[],u=[],d=[],f=[],p=[],m=[],h=[],g=o+.18,_=new r(.009,.012,g,Math.max(5,i-2));_.translate(.028,g/2,.004),h.push(_);let y=.02,b=(o-.08)/s;for(let e=0;e<s;e++){let t=.011-e/Math.max(1,s-1)*.005,n=t-.001,a=new r(n,t,b,Math.max(5,i-1)),o=(e%2==0?1:-1)*.006;Go(a,e=>{e.makeRotationZ(o*2),e.setPosition(o,y+b/2,0)}),l.push(a);let c=new v(t*1.15,Math.max(5,i-2),4);c.translate(o,y+b,0),l.push(c),y+=b}let S=Math.PI*(3-Math.sqrt(5));for(let e=0;e<c;e++){let t=(e+1)/(c+1),n=.14+t*(o-.28),r=e*S,s=(a?.16:.26)*(1.08-t*.35),l=.55+t*.35,d=qo(s,i);d&&(Go(d,e=>{let t=new Re().makeRotationZ(-l),i=new Re().makeRotationY(r);e.multiplyMatrices(i,t),e.setPosition(Math.cos(r)*.014,n,Math.sin(r)*.014)}),u.push(d))}let C=a?[]:i<7?[.55,.78]:[.42,.58,.74,.9],w=n===`cherry`?i<7?5:7:i<7?3:5,T=n===`cherry`?.022:n===`heart`?.05:n===`roma`?.032:.042;C.forEach((e,a)=>{let s=e*o,c=a*1.7+.4,u=new r(.002,.003,.07,5);Go(u,e=>{e.makeRotationFromEuler(new x(.85,c,0,`YXZ`)),e.setPosition(Math.cos(c)*.02,s-.01,Math.sin(c)*.02)}),l.push(u);let h=Math.cos(c)*.069,g=Math.sin(c)*.069,_=s-.04;for(let e=0;e<w;e++){let r=e%2==0?1:-1,o=.012+e*.018,s=h+Math.cos(c+1.2)*o*r,l=g+Math.sin(c+1.2)*o*r,u=_-e*.012,v=t===`ripe`||t===`late`||t===`stand`&&e===0&&a===0;if(v||t===`stand`){let t=Jo(n,T*(1-e*.04),i);t.translate(s,u,l),v?f.push(t):d.push(t);let r=Yo(T*.85,i);r&&(r.translate(s,u+T*.55,l),p.push(r))}if((t===`stand`||t===`ripe`)&&e>=w-2&&a>=C.length-2){let t=Xo(i);t&&(Go(t,t=>{t.makeRotationFromEuler(new x(.6,c+e,0,`YXZ`)),t.setPosition(s+.01,u+.03,l+.01)}),m.push(t))}}});let E=[],D=Wo(l);D&&E.push({geo:D,color:`#3a6a32`,extra:{roughness:.82,metalness:.02},bump:`leaf`});let O=Wo(h);O&&E.push({geo:O,color:`#9a7a50`,extra:{roughness:.9,metalness:0},bump:`wood`});let k=Wo(u),A=t===`late`?`#6a7a38`:t===`young`?`#5a9a48`:`#2f6a32`;k&&E.push({geo:k,color:A,extra:{roughness:.88,metalness:0,side:2},bump:`leaf`});let j=Wo(p);j&&E.push({geo:j,color:`#2a5a28`,extra:{roughness:.86,metalness:0,side:2}});let ee=Wo(d);ee&&E.push({geo:ee,color:`#6a9a38`,extra:{roughness:.38,metalness:.04}});let M=Wo(f);M&&E.push({geo:M,color:Zo(n,t===`stand`?`ripe`:t,0),extra:{roughness:.32,metalness:.05}});let N=Wo(m);return N&&E.push({geo:N,color:`#e8c44a`,extra:{roughness:.55,metalness:.02}}),E}function $o(e,t,n=`salad`){let i=Math.max(5,e),a=t===`young`?.55:1.2,o=new r(.01,.014,a,i);o.translate(0,a/2,0);let s=new v(.16,i,6);s.scale(1.15,.7,1.15),s.translate(0,a*.72,0);let c=new r(.008,.01,a+.15,5);c.translate(.03,(a+.15)/2,0);let l=[{geo:Uo([o]),color:`#3a6a32`,bump:`leaf`},{geo:Uo([c]),color:`#9a7a50`,bump:`wood`},{geo:Uo([s]),color:t===`late`?`#6a7a38`:`#2f6a32`,bump:`leaf`}];if(t===`ripe`||t===`late`||t===`stand`){let e=[];for(let t=0;t<4;t++){let r=t/4*Math.PI*2,o=Jo(n,.03,i);o.translate(Math.cos(r)*.1,a*.62,Math.sin(r)*.1),e.push(o)}let r=Wo(e);r&&l.push({geo:r,color:Zo(n,t,1),extra:{roughness:.32,metalness:.05}})}return l}function es(e,t){let n=Math.max(5,t);if(e===`tree`){let e=new r(.035,.05,.42,n);e.translate(0,.21,0);let t=new K(.22,.55,n);return t.translate(0,.62,0),Uo([e,t])}if(e===`tomato`){let e=Qo(n,`ripe`,`salad`).map(e=>e.geo),t=q(e,!1);return e.forEach(e=>e.dispose()),t??e[0]}if(e===`pepper`){let e=new r(.018,.022,.38,n);e.translate(0,.19,0);let t=new v(.13,n,6);return t.translate(0,.4,0),Uo([e,t])}if(e===`root`){let e=new K(.045,.2,n);e.rotateX(Math.PI),e.translate(0,.05,0);let t=new v(.07,n,5);return t.scale(1.3,.45,1.3),t.translate(0,.16,0),Uo([e,t])}if(e===`onion`){let e=new v(.07,n,5);e.scale(1,.7,1),e.translate(0,.06,0);let t=new K(.03,.28,5);return t.translate(0,.24,0),Uo([e,t])}if(e===`herb`){let e=new v(.05,n,5);e.translate(-.04,.08,0);let t=new v(.045,n,5);t.translate(.04,.07,.03);let r=new v(.04,n,5);return r.translate(0,.11,-.03),Uo([e,t,r])}if(e===`berry`){let e=new v(.1,n,6);return e.scale(1.35,.55,1.2),e.translate(0,.07,0),e}if(e===`bush`){let e=new v(.14,n,6);return e.scale(1.1,.75,1.1),e.translate(0,.12,0),e}let i=new v(.12,n,6);return i.scale(1.25,.42,1.25),i.translate(0,.06,0),i}function ts(e){let t=new v(.11,Math.max(5,Math.floor(e/2)),4);return t.scale(1.1,.7,1.1),t.translate(0,.08,0),t}function ns(e,t,n){let r=Lo(e.crop,t),i=Vo(e.crop,t),a=i===`young`?.55:i===`late`?.72:i===`ripe`?1.08:1,o=Ro(e.crop)?1.28:1;return(.88+n%5*.05)*r*a*o}export{wn as $,ot as $t,lr as A,en as At,bn as B,Pt as Bt,Qn as C,Ft as Ct,rr as D,Xt as Dt,sr as E,Bt as Et,Xn as F,Vt as Ft,jn as G,tt as Gt,kn as H,at as Ht,tr as I,rn as It,xn as J,it as Jt,Gn as K,Dt as Kt,er as L,tn as Lt,qn as M,Mt,nr as N,Ut as Nt,Zn as O,Zt as Ot,cr as P,Ht as Pt,hn as Q,ct as Qt,Yn as R,Lt as Rt,$n as S,kt as St,ar as T,Wt as Tt,cn as U,St as Ut,Vn as V,Yt as Vt,dn as W,dt as Wt,Un as X,bt as Xt,Dn as Y,X as Yt,ln as Z,_t as Zt,No as _,Je as _n,Wn as _t,ns as a,gt as an,yn as at,Oo as b,J as bn,_n as bt,$o as c,pt as cn,Nn as ct,ko as d,qe as dn,On as dt,rt as en,Cn as et,Io as f,$e as fn,Ln as ft,Ao as g,et as gn,mn as gt,Lo as h,Ye as hn,gn as ht,es as i,ut as in,Sn as it,ur as j,an as jt,Jn as k,It as kt,Qo as l,lt as ln,Mn as lt,jo as m,Ze as mn,vn as mt,ts as n,xt as nn,An as nt,Ho as o,Et as on,Hn as ot,Mo as p,Xe as pn,on as pt,pn as q,st as qt,Ro as r,Ot as rn,Bn as rt,Vo as s,yt as sn,Pn as st,Bo as t,vt as tn,Rn as tt,zo as u,Qe as un,En as ut,Fo as v,We as vn,fn as vt,dr as w,Gt as wt,or as x,Y as xn,At as xt,Po as y,He as yn,Fn as yt,ir as z,Nt as zt};