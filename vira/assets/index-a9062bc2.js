var ff=Object.defineProperty;var hf=(t,e,r)=>e in t?ff(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var E=(t,e,r)=>(hf(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const mf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function In(t,e){return t?mf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ql(t,e){return t&&e.every(r=>In(t,r))}function mn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ui(t){return!!t}function pf(t,{keepNewLines:e}={}){return(e?t.replace(/[\s\n]*\n+[\s\n]*/g,`
`):t.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}var na;(function(t){t.Upper="upper",t.Lower="lower"})(na||(na={}));function gf({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var sa;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(sa||(sa={}));function ec(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(r=>di(r).trim()).join(`
`))}function di(t){return t?t instanceof Error?t.message:In(t,"message")?String(t.message):String(t):""}const wf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function yf(t,e){return t?wf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function bf(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var ia;(function(t){t.Upper="upper",t.Lower="lower"})(ia||(ia={}));var aa;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(aa||(aa={}));function vf(t){return t?t instanceof Error?t.message:yf(t,"message")?String(t.message):String(t):""}function oa(t){return!!t&&typeof t=="object"}function $f(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}$f();class Sf extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const kf=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function pn(t,e){return t?kf.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function tc(t){return t instanceof Promise}function gn(t){return Array.isArray(t)?"array":typeof t}function L(t,e){return gn(t)===e}class Ef extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function rs(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Ne(t,e){try{return t===e||rs(t,e)?!0:oa(t)&&oa(e)?rs(Object.keys(t).sort(),Object.keys(e).sort())?bf(t).every(n=>Ne(t[n],e[n])):!1:rs(t,e)}catch(r){throw new Ef(vf(r))}}function rc(t,e){return t===e}function Tf(t,e){if(!(L(t,"string")||L(t,"number")||L(t,"symbol")))throw new Sf(e||`value is of type '${gn(t)}' but expected a PropertyKey.`)}function ns(t){try{return Tf(t),!0}catch{return!1}}function Mf(t){return mn(t).filter(e=>isNaN(Number(e)))}function xf(t){return Mf(t).map(r=>t[r])}function Af(t,e){return xf(e).includes(t)}function Cf(t,e){return mn(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function Lf(t,e){return Cf(t,r=>!e.includes(r))}function Nf(t,e,r){const n=e;if(t.has(n))return t.get(n);{const s=r();return t.set(n,s),s}}function wn(t,e){let r=!1;const n=mn(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(mn(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function la(t,e){try{return Of(t,e),!0}catch{return!1}}function Of(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function nc(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${nc.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Pf(t){const e=nc();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function If(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const _f=If();function Rf({min:t,max:e}){const{min:r,max:n}=gf({min:Math.floor(t),max:Math.floor(e)}),s=n-r+1,i=Math.ceil(Math.log2(s)/8),a=Math.floor(256**i/s)*s,o=new Uint8Array(i);let l;do _f.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%s}const ca=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Vf(t=16){let e="";for(let r=0;r<t;r++){const n=Rf({min:0,max:ca.length-1});e+=ca[n]}return e}function Df(t,e){return In(t,"entryType")&&t.entryType===e}var ne=(t=>(t.ElementExample="element-example",t.Page="page",t.Root="root",t))(ne||{});function xt(t,e){return t.controlType===e}var j=(t=>(t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Hidden="hidden",t.Number="number",t.Text="text",t))(j||{});const sc=Symbol("any-type"),Hf={checkbox:!1,color:"",dropdown:"",hidden:sc,number:0,text:""};function Bf(t,e){if(!t)return[];const r=[];return Object.entries(t).forEach(([n,s])=>{const i=Hf[s.controlType];i!==sc&&(typeof i!=typeof s.initValue&&r.push(new Error(`Control '${n}' in page '${e}' has invalid initValue '${s.initValue}': expected initValue of type ${typeof i} because the control is of type ${s.controlType}.`)),n||r.push(new Error(`'${e}' cannot have an empty control name.`)))}),r}function fi(t,e){const r=yn(t.title);return t.parent?[...fi(t.parent,!1),yn(t.parent.title)].concat(e?[r]:[]):e?[r]:[]}function yn(t){return pf(t).toLowerCase().replaceAll(/\s/g,"-")}function Ff({searchFor:t,searchIn:e}){return t.every((r,n)=>e[n]===r)}function it(t){const e={...t,entryType:ne.Page,elementExamples:{},descriptionParagraphs:t.descriptionParagraphs??[],controls:t.controls??{},errors:[]},r=new Set;return t.elementExamplesCallback&&t.elementExamplesCallback({defineExample(n){const s={...n,entryType:ne.ElementExample,parent:e,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${t.title}' is already taken.`)].filter(ui)};r.add(n.title),e.elementExamples[yn(s.title)]=s}}),e}var He=(t=>(t.Footer="book-footer",t.NavHeader="book-nav-header",t))(He||{}),ua;(function(t){t.Upper="upper",t.Lower="lower"})(ua||(ua={}));var da;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(da||(da={}));function zf(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function ic(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${ic.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Uf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Uf();async function Vs(t=1){const e=ic();function r(){requestAnimationFrame(()=>{t--,t?r():e.resolve()})}return r(),e.promise}async function Wf(t){return jf(t,1)}async function jf(t,e){return new Promise(r=>{new IntersectionObserver((s,i)=>{zf(s,1),i.disconnect(),r(s[0].intersectionRatio>=e)}).observe(t)})}var Gf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function qf(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const Zf=globalThis.CustomEvent||qf();function at(){function t(e){var r;return r=class extends Zf{constructor(s){super(e,s)}},Gf(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var Yf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function hi(t){var e;return e=class extends Event{constructor(n){super(t,n)}},Yf(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}function Kf(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function fa(t){return Kf(t).map(e=>t[e])}var ha;(function(t){t.Upper="upper",t.Lower="lower"})(ha||(ha={}));var ma;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ma||(ma={}));function Jf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Jf();class Xf{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return fa(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(e,r,n={}){const s=this.listeners,i=L(e,"string")?e:e.type;function a(){var l;return((l=s[i])==null?void 0:l.delete(r))||!1}function o(l,c){n.once&&a(),r(l,c)}return s[i]||(s[i]=new Map),s[i].set(r,{listener:o,removeListener:a}),a}removeListener(e,r){const n=L(e,"string")?e:e.type,s=this.listeners[n];if(!s)return!1;const i=s.get(r);return i?i.removeListener():!1}dispatch(e){const r=this.listeners[e.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(s=>{s.listener(e,s.removeListener)}),n}removeAllListeners(){const r=fa(this.listeners).reduce((n,s)=>{const i=(s==null?void 0:s.size)||0;return s==null||s.clear(),n+i},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class Qf extends Xf{}function eh(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}const th=Symbol("no update");class ss extends at()("observable-value-update"){}class Ey extends at()("observable-value-resolve"){}class Ty extends at()("observable-value-error"){}class rh extends hi("observable-destroy"){}class My extends hi("observable-callback-call"){}class xy extends at()("observable-params-update"){}class Ay extends at()("observable-interval-run"){}class Cy extends at()("observable-interval-skip"){}class Ly extends at()("observable-interval-rate-limited"){}class nh{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new Qf}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(e,r=this.equalityCheck){return e===th?!1:!r||!r(this.value,e)?(this.value=e,this.listenTarget.dispatch(new ss({detail:e})),!0):!1}listen(e,r){const n=s=>r(s.detail);return this.listenerMap.set(r,n),e&&r(this.value),this.listenTarget.listen(ss,n)}removeListener(e){const r=this.listenerMap.get(e);return!!r&&this.listenTarget.removeListener(ss,r)}destroy(){this.listenTarget.dispatch(new rh),this.listenTarget.destroy()}listenToEvent(e,r,n){return this.listenTarget.listen(e,r,n)}}var pa;(function(t){t.Upper="upper",t.Lower="lower"})(pa||(pa={}));var ga;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ga||(ga={}));function sh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}sh();function ih(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var wa;(function(t){t.Upper="upper",t.Lower="lower"})(wa||(wa={}));var ya;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ya||(ya={}));function ah(t,e){return ih(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function oh(t,e){return ah(t,r=>e.includes(r))}function lh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}lh();class St extends Error{}class ch extends St{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class uh extends St{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class dh extends St{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Vt extends St{}class ac extends St{constructor(e){super(`Invalid unit ${e}`)}}class le extends St{}class Ue extends St{constructor(){super("Zone is an abstract class")}}const w="numeric",Ce="short",pe="long",bn={year:w,month:w,day:w},oc={year:w,month:Ce,day:w},fh={year:w,month:Ce,day:w,weekday:Ce},lc={year:w,month:pe,day:w},cc={year:w,month:pe,day:w,weekday:pe},uc={hour:w,minute:w},dc={hour:w,minute:w,second:w},fc={hour:w,minute:w,second:w,timeZoneName:Ce},hc={hour:w,minute:w,second:w,timeZoneName:pe},mc={hour:w,minute:w,hourCycle:"h23"},pc={hour:w,minute:w,second:w,hourCycle:"h23"},gc={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:Ce},wc={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:pe},yc={year:w,month:w,day:w,hour:w,minute:w},bc={year:w,month:w,day:w,hour:w,minute:w,second:w},vc={year:w,month:Ce,day:w,hour:w,minute:w},$c={year:w,month:Ce,day:w,hour:w,minute:w,second:w},hh={year:w,month:Ce,day:w,weekday:Ce,hour:w,minute:w},Sc={year:w,month:pe,day:w,hour:w,minute:w,timeZoneName:Ce},kc={year:w,month:pe,day:w,hour:w,minute:w,second:w,timeZoneName:Ce},Ec={year:w,month:pe,day:w,weekday:pe,hour:w,minute:w,timeZoneName:pe},Tc={year:w,month:pe,day:w,weekday:pe,hour:w,minute:w,second:w,timeZoneName:pe};class Lr{get type(){throw new Ue}get name(){throw new Ue}get ianaName(){return this.name}get isUniversal(){throw new Ue}offsetName(e,r){throw new Ue}formatOffset(e,r){throw new Ue}offset(e){throw new Ue}equals(e){throw new Ue}get isValid(){throw new Ue}}let is=null;class _n extends Lr{static get instance(){return is===null&&(is=new _n),is}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return Ic(e,r,n)}formatOffset(e,r){return dr(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let on={};function mh(t){return on[t]||(on[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),on[t]}const ph={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function gh(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,s,i,a,o,l,c,d]=n;return[a,s,i,o,l,c,d]}function wh(t,e){const r=t.formatToParts(e),n=[];for(let s=0;s<r.length;s++){const{type:i,value:a}=r[s],o=ph[i];i==="era"?n[o]=a:T(o)||(n[o]=parseInt(a,10))}return n}let Fr={};class Fe extends Lr{static create(e){return Fr[e]||(Fr[e]=new Fe(e)),Fr[e]}static resetCache(){Fr={},on={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=Fe.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return Ic(e,r,n,this.name)}formatOffset(e,r){return dr(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=mh(this.name);let[s,i,a,o,l,c,d]=n.formatToParts?wh(n,r):gh(n,r);o==="BC"&&(s=-Math.abs(s)+1);const f=Vn({year:s,month:i,day:a,hour:l===24?0:l,minute:c,second:d,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let ba={};function yh(t,e={}){const r=JSON.stringify([t,e]);let n=ba[r];return n||(n=new Intl.ListFormat(t,e),ba[r]=n),n}let Ds={};function Hs(t,e={}){const r=JSON.stringify([t,e]);let n=Ds[r];return n||(n=new Intl.DateTimeFormat(t,e),Ds[r]=n),n}let Bs={};function bh(t,e={}){const r=JSON.stringify([t,e]);let n=Bs[r];return n||(n=new Intl.NumberFormat(t,e),Bs[r]=n),n}let Fs={};function vh(t,e={}){const{base:r,...n}=e,s=JSON.stringify([t,n]);let i=Fs[s];return i||(i=new Intl.RelativeTimeFormat(t,e),Fs[s]=i),i}let or=null;function $h(){return or||(or=new Intl.DateTimeFormat().resolvedOptions().locale,or)}let va={};function Sh(t){let e=va[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,va[t]=e}return e}function kh(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,s;try{n=Hs(t).resolvedOptions(),s=t}catch{const l=t.substring(0,r);n=Hs(l).resolvedOptions(),s=l}const{numberingSystem:i,calendar:a}=n;return[s,i,a]}}function Eh(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function Th(t){const e=[];for(let r=1;r<=12;r++){const n=M.utc(2009,r,1);e.push(t(n))}return e}function Mh(t){const e=[];for(let r=1;r<=7;r++){const n=M.utc(2016,11,13+r);e.push(t(n))}return e}function zr(t,e,r,n){const s=t.listingMode();return s==="error"?null:s==="en"?r(e):n(e)}function xh(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class Ah{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:s,floor:i,...a}=n;if(!r||Object.keys(a).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=bh(e,o)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):wi(e,3);return Z(r,this.padTo)}}}class Ch{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let s;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const a=-1*(e.offset/60),o=a>=0?`Etc/GMT+${a}`:`Etc/GMT${a}`;e.offset!==0&&Fe.create(o).valid?(s=o,this.dt=e):(s="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,s=e.zone.name):(s="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const i={...this.opts};i.timeZone=i.timeZone||s,this.dtf=Hs(r,i)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class Lh{constructor(e,r,n){this.opts={style:"long",...n},!r&&Oc()&&(this.rtf=vh(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):Kh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const Nh={firstDay:1,minimalDays:4,weekend:[6,7]};class R{static fromOpts(e){return R.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,s,i=!1){const a=e||z.defaultLocale,o=a||(i?"en-US":$h()),l=r||z.defaultNumberingSystem,c=n||z.defaultOutputCalendar,d=zs(s)||z.defaultWeekSettings;return new R(o,l,c,d,a)}static resetCache(){or=null,Ds={},Bs={},Fs={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:s}={}){return R.create(e,r,n,s)}constructor(e,r,n,s,i){const[a,o,l]=kh(e);this.locale=a,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=s,this.intl=Eh(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=i,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=xh(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:R.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,zs(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return zr(this,e,Vc,()=>{const n=r?{month:e,day:"numeric"}:{month:e},s=r?"format":"standalone";return this.monthsCache[s][e]||(this.monthsCache[s][e]=Th(i=>this.extract(i,n,"month"))),this.monthsCache[s][e]})}weekdays(e,r=!1){return zr(this,e,Bc,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},s=r?"format":"standalone";return this.weekdaysCache[s][e]||(this.weekdaysCache[s][e]=Mh(i=>this.extract(i,n,"weekday"))),this.weekdaysCache[s][e]})}meridiems(){return zr(this,void 0,()=>Fc,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[M.utc(2016,11,13,9),M.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return zr(this,e,zc,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[M.utc(-40,1,1),M.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const s=this.dtFormatter(e,r),i=s.formatToParts(),a=i.find(o=>o.type.toLowerCase()===n);return a?a.value:null}numberFormatter(e={}){return new Ah(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new Ch(e,this.intl,r)}relFormatter(e={}){return new Lh(this.intl,this.isEnglish(),e)}listFormatter(e={}){return yh(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:Pc()?Sh(this.locale):Nh}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let as=null;class se extends Lr{static get utcInstance(){return as===null&&(as=new se(0)),as}static instance(e){return e===0?se.utcInstance:new se(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new se(Dn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${dr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${dr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return dr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class Oh extends Lr{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function Ge(t,e){if(T(t)||t===null)return e;if(t instanceof Lr)return t;if(_h(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?_n.instance:r==="utc"||r==="gmt"?se.utcInstance:se.parseSpecifier(r)||Fe.create(t)}else return wt(t)?se.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new Oh(t)}let $a=()=>Date.now(),Sa="system",ka=null,Ea=null,Ta=null,Ma=60,xa,Aa=null;class z{static get now(){return $a}static set now(e){$a=e}static set defaultZone(e){Sa=e}static get defaultZone(){return Ge(Sa,_n.instance)}static get defaultLocale(){return ka}static set defaultLocale(e){ka=e}static get defaultNumberingSystem(){return Ea}static set defaultNumberingSystem(e){Ea=e}static get defaultOutputCalendar(){return Ta}static set defaultOutputCalendar(e){Ta=e}static get defaultWeekSettings(){return Aa}static set defaultWeekSettings(e){Aa=zs(e)}static get twoDigitCutoffYear(){return Ma}static set twoDigitCutoffYear(e){Ma=e%100}static get throwOnInvalid(){return xa}static set throwOnInvalid(e){xa=e}static resetCaches(){R.resetCache(),Fe.resetCache()}}class Ae{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Mc=[0,31,59,90,120,151,181,212,243,273,304,334],xc=[0,31,60,91,121,152,182,213,244,274,305,335];function ve(t,e){return new Ae("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function mi(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const s=n.getUTCDay();return s===0?7:s}function Ac(t,e,r){return r+(Nr(t)?xc:Mc)[e-1]}function Cc(t,e){const r=Nr(t)?xc:Mc,n=r.findIndex(i=>i<e),s=e-r[n];return{month:n+1,day:s}}function pi(t,e){return(t-e+7)%7+1}function vn(t,e=4,r=1){const{year:n,month:s,day:i}=t,a=Ac(n,s,i),o=pi(mi(n,s,i),r);let l=Math.floor((a-o+14-e)/7),c;return l<1?(c=n-1,l=wr(c,e,r)):l>wr(n,e,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:o,...Hn(t)}}function Ca(t,e=4,r=1){const{weekYear:n,weekNumber:s,weekday:i}=t,a=pi(mi(n,1,e),r),o=Dt(n);let l=s*7+i-a-7+e,c;l<1?(c=n-1,l+=Dt(c)):l>o?(c=n+1,l-=Dt(n)):c=n;const{month:d,day:u}=Cc(c,l);return{year:c,month:d,day:u,...Hn(t)}}function os(t){const{year:e,month:r,day:n}=t,s=Ac(e,r,n);return{year:e,ordinal:s,...Hn(t)}}function La(t){const{year:e,ordinal:r}=t,{month:n,day:s}=Cc(e,r);return{year:e,month:n,day:s,...Hn(t)}}function Na(t,e){if(!T(t.localWeekday)||!T(t.localWeekNumber)||!T(t.localWeekYear)){if(!T(t.weekday)||!T(t.weekNumber)||!T(t.weekYear))throw new Vt("Cannot mix locale-based week fields with ISO-based week fields");return T(t.localWeekday)||(t.weekday=t.localWeekday),T(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),T(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Ph(t,e=4,r=1){const n=Rn(t.weekYear),s=$e(t.weekNumber,1,wr(t.weekYear,e,r)),i=$e(t.weekday,1,7);return n?s?i?!1:ve("weekday",t.weekday):ve("week",t.weekNumber):ve("weekYear",t.weekYear)}function Ih(t){const e=Rn(t.year),r=$e(t.ordinal,1,Dt(t.year));return e?r?!1:ve("ordinal",t.ordinal):ve("year",t.year)}function Lc(t){const e=Rn(t.year),r=$e(t.month,1,12),n=$e(t.day,1,$n(t.year,t.month));return e?r?n?!1:ve("day",t.day):ve("month",t.month):ve("year",t.year)}function Nc(t){const{hour:e,minute:r,second:n,millisecond:s}=t,i=$e(e,0,23)||e===24&&r===0&&n===0&&s===0,a=$e(r,0,59),o=$e(n,0,59),l=$e(s,0,999);return i?a?o?l?!1:ve("millisecond",s):ve("second",n):ve("minute",r):ve("hour",e)}function T(t){return typeof t>"u"}function wt(t){return typeof t=="number"}function Rn(t){return typeof t=="number"&&t%1===0}function _h(t){return typeof t=="string"}function Rh(t){return Object.prototype.toString.call(t)==="[object Date]"}function Oc(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function Pc(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Vh(t){return Array.isArray(t)?t:[t]}function Oa(t,e,r){if(t.length!==0)return t.reduce((n,s)=>{const i=[e(s),s];return n&&r(n[0],i[0])===n[0]?n:i},null)[1]}function Dh(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function zt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zs(t){if(t==null)return null;if(typeof t!="object")throw new le("Week settings must be an object");if(!$e(t.firstDay,1,7)||!$e(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!$e(e,1,7)))throw new le("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function $e(t,e,r){return Rn(t)&&t>=e&&t<=r}function Hh(t,e){return t-e*Math.floor(t/e)}function Z(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function je(t){if(!(T(t)||t===null||t===""))return parseInt(t,10)}function lt(t){if(!(T(t)||t===null||t===""))return parseFloat(t)}function gi(t){if(!(T(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function wi(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function Nr(t){return t%4===0&&(t%100!==0||t%400===0)}function Dt(t){return Nr(t)?366:365}function $n(t,e){const r=Hh(e-1,12)+1,n=t+(e-r)/12;return r===2?Nr(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Vn(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function Pa(t,e,r){return-pi(mi(t,1,e),r)+e-1}function wr(t,e=4,r=1){const n=Pa(t,e,r),s=Pa(t+1,e,r);return(Dt(t)-n+s)/7}function Us(t){return t>99?t:t>z.twoDigitCutoffYear?1900+t:2e3+t}function Ic(t,e,r,n=null){const s=new Date(t),i={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(i.timeZone=n);const a={timeZoneName:e,...i},o=new Intl.DateTimeFormat(r,a).formatToParts(s).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function Dn(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,s=r<0||Object.is(r,-0)?-n:n;return r*60+s}function _c(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new le(`Invalid unit value ${t}`);return e}function Sn(t,e){const r={};for(const n in t)if(zt(t,n)){const s=t[n];if(s==null)continue;r[e(n)]=_c(s)}return r}function dr(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),s=t>=0?"+":"-";switch(e){case"short":return`${s}${Z(r,2)}:${Z(n,2)}`;case"narrow":return`${s}${r}${n>0?`:${n}`:""}`;case"techie":return`${s}${Z(r,2)}${Z(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Hn(t){return Dh(t,["hour","minute","second","millisecond"])}const Bh=["January","February","March","April","May","June","July","August","September","October","November","December"],Rc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Fh=["J","F","M","A","M","J","J","A","S","O","N","D"];function Vc(t){switch(t){case"narrow":return[...Fh];case"short":return[...Rc];case"long":return[...Bh];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const Dc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Hc=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],zh=["M","T","W","T","F","S","S"];function Bc(t){switch(t){case"narrow":return[...zh];case"short":return[...Hc];case"long":return[...Dc];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Fc=["AM","PM"],Uh=["Before Christ","Anno Domini"],Wh=["BC","AD"],jh=["B","A"];function zc(t){switch(t){case"narrow":return[...jh];case"short":return[...Wh];case"long":return[...Uh];default:return null}}function Gh(t){return Fc[t.hour<12?0:1]}function qh(t,e){return Bc(e)[t.weekday-1]}function Zh(t,e){return Vc(e)[t.month-1]}function Yh(t,e){return zc(e)[t.year<0?0:1]}function Kh(t,e,r="always",n=!1){const s={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},i=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&i){const u=t==="days";switch(e){case 1:return u?"tomorrow":`next ${s[t][0]}`;case-1:return u?"yesterday":`last ${s[t][0]}`;case 0:return u?"today":`this ${s[t][0]}`}}const a=Object.is(e,-0)||e<0,o=Math.abs(e),l=o===1,c=s[t],d=n?l?c[1]:c[2]||c[1]:l?s[t][0]:t;return a?`${o} ${d} ago`:`in ${o} ${d}`}function Ia(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const Jh={D:bn,DD:oc,DDD:lc,DDDD:cc,t:uc,tt:dc,ttt:fc,tttt:hc,T:mc,TT:pc,TTT:gc,TTTT:wc,f:yc,ff:vc,fff:Sc,ffff:Ec,F:bc,FF:$c,FFF:kc,FFFF:Tc};class re{static create(e,r={}){return new re(e,r)}static parseFormat(e){let r=null,n="",s=!1;const i=[];for(let a=0;a<e.length;a++){const o=e.charAt(a);o==="'"?(n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),r=null,n="",s=!s):s||o===r?n+=o:(n.length>0&&i.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&i.push({literal:s||/^\s+$/.test(n),val:n}),i}static macroTokenToFormatOpts(e){return Jh[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return Z(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",s=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",i=(h,m)=>this.loc.extract(e,h,m),a=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",o=()=>n?Gh(e):i({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?Zh(e,h):i(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?qh(e,h):i(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),d=h=>{const m=re.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(e,m):h},u=h=>n?Yh(e,h):i({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return a({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return a({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return a({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return o();case"d":return s?i({day:"numeric"},"day"):this.num(e.day);case"dd":return s?i({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return s?i({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return s?i({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return s?i({month:"numeric"},"month"):this.num(e.month);case"MM":return s?i({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return s?i({year:"numeric"},"year"):this.num(e.year);case"yy":return s?i({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return s?i({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return s?i({year:"numeric"},"year"):this.num(e.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return d(h)}};return Ia(re.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},s=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},i=re.parseFormat(r),a=i.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),o=e.shiftTo(...a.map(n).filter(l=>l));return Ia(i,s(o))}}const Uc=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Yt(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function Kt(...t){return e=>t.reduce(([r,n,s],i)=>{const[a,o,l]=i(e,s);return[{...r,...a},o||n,l]},[{},null,1]).slice(0,2)}function Jt(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const s=r.exec(t);if(s)return n(s)}return[null,null]}function Wc(...t){return(e,r)=>{const n={};let s;for(s=0;s<t.length;s++)n[t[s]]=je(e[r+s]);return[n,null,r+s]}}const jc=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,Xh=`(?:${jc.source}?(?:\\[(${Uc.source})\\])?)?`,yi=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Gc=RegExp(`${yi.source}${Xh}`),bi=RegExp(`(?:T${Gc.source})?`),Qh=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,em=/(\d{4})-?W(\d\d)(?:-?(\d))?/,tm=/(\d{4})-?(\d{3})/,rm=Wc("weekYear","weekNumber","weekDay"),nm=Wc("year","ordinal"),sm=/(\d{4})-(\d\d)-(\d\d)/,qc=RegExp(`${yi.source} ?(?:${jc.source}|(${Uc.source}))?`),im=RegExp(`(?: ${qc.source})?`);function Ht(t,e,r){const n=t[e];return T(n)?r:je(n)}function am(t,e){return[{year:Ht(t,e),month:Ht(t,e+1,1),day:Ht(t,e+2,1)},null,e+3]}function Xt(t,e){return[{hours:Ht(t,e,0),minutes:Ht(t,e+1,0),seconds:Ht(t,e+2,0),milliseconds:gi(t[e+3])},null,e+4]}function Or(t,e){const r=!t[e]&&!t[e+1],n=Dn(t[e+1],t[e+2]),s=r?null:se.instance(n);return[{},s,e+3]}function Pr(t,e){const r=t[e]?Fe.create(t[e]):null;return[{},r,e+1]}const om=RegExp(`^T?${yi.source}$`),lm=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function cm(t){const[e,r,n,s,i,a,o,l,c]=t,d=e[0]==="-",u=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&d)?-h:h;return[{years:f(lt(r)),months:f(lt(n)),weeks:f(lt(s)),days:f(lt(i)),hours:f(lt(a)),minutes:f(lt(o)),seconds:f(lt(l),l==="-0"),milliseconds:f(gi(c),u)}]}const um={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vi(t,e,r,n,s,i,a){const o={year:e.length===2?Us(je(e)):je(e),month:Rc.indexOf(r)+1,day:je(n),hour:je(s),minute:je(i)};return a&&(o.second=je(a)),t&&(o.weekday=t.length>3?Dc.indexOf(t)+1:Hc.indexOf(t)+1),o}const dm=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function fm(t){const[,e,r,n,s,i,a,o,l,c,d,u]=t,f=vi(e,s,n,r,i,a,o);let h;return l?h=um[l]:c?h=0:h=Dn(d,u),[f,new se(h)]}function hm(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const mm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,pm=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,gm=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function _a(t){const[,e,r,n,s,i,a,o]=t;return[vi(e,s,n,r,i,a,o),se.utcInstance]}function wm(t){const[,e,r,n,s,i,a,o]=t;return[vi(e,o,r,n,s,i,a),se.utcInstance]}const ym=Yt(Qh,bi),bm=Yt(em,bi),vm=Yt(tm,bi),$m=Yt(Gc),Zc=Kt(am,Xt,Or,Pr),Sm=Kt(rm,Xt,Or,Pr),km=Kt(nm,Xt,Or,Pr),Em=Kt(Xt,Or,Pr);function Tm(t){return Jt(t,[ym,Zc],[bm,Sm],[vm,km],[$m,Em])}function Mm(t){return Jt(hm(t),[dm,fm])}function xm(t){return Jt(t,[mm,_a],[pm,_a],[gm,wm])}function Am(t){return Jt(t,[lm,cm])}const Cm=Kt(Xt);function Lm(t){return Jt(t,[om,Cm])}const Nm=Yt(sm,im),Om=Yt(qc),Pm=Kt(Xt,Or,Pr);function Im(t){return Jt(t,[Nm,Zc],[Om,Pm])}const Ra="Invalid Duration",Yc={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},_m={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Yc},we=146097/400,At=146097/4800,Rm={years:{quarters:4,months:12,weeks:we/7,days:we,hours:we*24,minutes:we*24*60,seconds:we*24*60*60,milliseconds:we*24*60*60*1e3},quarters:{months:3,weeks:we/28,days:we/4,hours:we*24/4,minutes:we*24*60/4,seconds:we*24*60*60/4,milliseconds:we*24*60*60*1e3/4},months:{weeks:At/7,days:At,hours:At*24,minutes:At*24*60,seconds:At*24*60*60,milliseconds:At*24*60*60*1e3},...Yc},mt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Vm=mt.slice(0).reverse();function We(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new O(n)}function Kc(t,e){let r=e.milliseconds??0;for(const n of Vm.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function Va(t,e){const r=Kc(t,e)<0?-1:1;mt.reduceRight((n,s)=>{if(T(e[s]))return n;if(n){const i=e[n]*r,a=t[s][n],o=Math.floor(i/a);e[s]+=o*r,e[n]-=o*a*r}return s},null),mt.reduce((n,s)=>{if(T(e[s]))return n;if(n){const i=e[n]%1;e[n]-=i,e[s]+=i*t[n][s]}return s},null)}function Dm(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class O{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?Rm:_m;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||R.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return O.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new le(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new O({values:Sn(e,O.normalizeUnit),loc:R.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(wt(e))return O.fromMillis(e);if(O.isDuration(e))return e;if(typeof e=="object")return O.fromObject(e);throw new le(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=Am(e);return n?O.fromObject(n,r):O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=Lm(e);return n?O.fromObject(n,r):O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new le("need to specify a reason the Duration is invalid");const n=e instanceof Ae?e:new Ae(e,r);if(z.throwOnInvalid)throw new dh(n);return new O({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new ac(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?re.create(this.loc,n).formatDurationFromString(this,e):Ra}toHuman(e={}){if(!this.isValid)return Ra;const r=mt.map(n=>{const s=this.values[n];return T(s)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(s)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=wi(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},M.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Kc(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e),n={};for(const s of mt)(zt(r.values,s)||zt(this.values,s))&&(n[s]=r.get(s)+this.get(s));return We(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=_c(e(this.values[n],n));return We(this,{values:r},!0)}get(e){return this[O.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...Sn(e,O.normalizeUnit)};return We(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:s}={}){const a={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:s,conversionAccuracy:n};return We(this,a)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return Va(this.matrix,e),We(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=Dm(this.normalize().shiftToAll().toObject());return We(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(a=>O.normalizeUnit(a));const r={},n={},s=this.toObject();let i;for(const a of mt)if(e.indexOf(a)>=0){i=a;let o=0;for(const c in n)o+=this.matrix[c][a]*n[c],n[c]=0;wt(s[a])&&(o+=s[a]);const l=Math.trunc(o);r[a]=l,n[a]=(o*1e3-l*1e3)/1e3}else wt(s[a])&&(n[a]=s[a]);for(const a in n)n[a]!==0&&(r[i]+=a===i?n[a]:n[a]/this.matrix[i][a]);return Va(this.matrix,r),We(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return We(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,s){return n===void 0||n===0?s===void 0||s===0:n===s}for(const n of mt)if(!r(this.values[n],e.values[n]))return!1;return!0}}const Ct="Invalid Interval";function Hm(t,e){return!t||!t.isValid?W.invalid("missing or invalid start"):!e||!e.isValid?W.invalid("missing or invalid end"):e<t?W.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class W{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new le("need to specify a reason the Interval is invalid");const n=e instanceof Ae?e:new Ae(e,r);if(z.throwOnInvalid)throw new uh(n);return new W({invalid:n})}static fromDateTimes(e,r){const n=sr(e),s=sr(r),i=Hm(n,s);return i??new W({start:n,end:s})}static after(e,r){const n=O.fromDurationLike(r),s=sr(e);return W.fromDateTimes(s,s.plus(n))}static before(e,r){const n=O.fromDurationLike(r),s=sr(e);return W.fromDateTimes(s.minus(n),s)}static fromISO(e,r){const[n,s]=(e||"").split("/",2);if(n&&s){let i,a;try{i=M.fromISO(n,r),a=i.isValid}catch{a=!1}let o,l;try{o=M.fromISO(s,r),l=o.isValid}catch{l=!1}if(a&&l)return W.fromDateTimes(i,o);if(a){const c=O.fromISO(s,r);if(c.isValid)return W.after(i,c)}else if(l){const c=O.fromISO(n,r);if(c.isValid)return W.before(o,c)}}return W.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let s;return r!=null&&r.useLocaleWeeks?s=this.end.reconfigure({locale:n.locale}):s=this.end,s=s.startOf(e,r),Math.floor(s.diff(n,e).get(e))+(s.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?W.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(sr).filter(a=>this.contains(a)).sort((a,o)=>a.toMillis()-o.toMillis()),n=[];let{s}=this,i=0;for(;s<this.e;){const a=r[i]||this.e,o=+a>+this.e?this.e:a;n.push(W.fromDateTimes(s,o)),s=o,i+=1}return n}splitBy(e){const r=O.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,s=1,i;const a=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*s));i=+o>+this.e?this.e:o,a.push(W.fromDateTimes(n,i)),n=i,s+=1}return a}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:W.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return W.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((s,i)=>s.s-i.s).reduce(([s,i],a)=>i?i.overlaps(a)||i.abutsStart(a)?[s,i.union(a)]:[s.concat([i]),a]:[s,a],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const s=[],i=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),a=Array.prototype.concat(...i),o=a.sort((l,c)=>l.time-c.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&s.push(W.fromDateTimes(r,l.time)),r=null);return W.merge(s)}difference(...e){return W.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Ct}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=bn,r={}){return this.isValid?re.create(this.s.loc.clone(r),e).formatInterval(this):Ct}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Ct}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Ct}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Ct}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Ct}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):O.invalid(this.invalidReason)}mapEndpoints(e){return W.fromDateTimes(e(this.s),e(this.e))}}class Ur{static hasDST(e=z.defaultZone){const r=M.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Fe.isValidZone(e)}static normalizeZone(e){return Ge(e,z.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||R.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||R.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||R.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||R.create(r,n,i)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null,outputCalendar:i="gregory"}={}){return(s||R.create(r,n,i)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||R.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:s=null}={}){return(s||R.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return R.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return R.create(r,null,"gregory").eras(e)}static features(){return{relative:Oc(),localeWeek:Pc()}}}function Da(t,e){const r=s=>s.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(O.fromMillis(n).as("days"))}function Bm(t,e,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=Da(l,c);return(d-d%7)/7}],["days",Da]],s={},i=t;let a,o;for(const[l,c]of n)r.indexOf(l)>=0&&(a=l,s[l]=c(t,e),o=i.plus(s),o>e?(s[l]--,t=i.plus(s),t>e&&(o=t,s[l]--,t=i.plus(s))):t=o);return[t,s,o,a]}function Fm(t,e,r,n){let[s,i,a,o]=Bm(t,e,r);const l=e-s,c=r.filter(u=>["hours","minutes","seconds","milliseconds"].indexOf(u)>=0);c.length===0&&(a<e&&(a=s.plus({[o]:1})),a!==s&&(i[o]=(i[o]||0)+l/(a-s)));const d=O.fromObject(i,n);return c.length>0?O.fromMillis(l,n).shiftTo(...c).plus(d):d}const $i={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},Ha={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},zm=$i.hanidec.replace(/[\[|\]]/g,"").split("");function Um(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search($i.hanidec)!==-1)e+=zm.indexOf(t[r]);else for(const s in Ha){const[i,a]=Ha[s];n>=i&&n<=a&&(e+=n-i)}}return parseInt(e,10)}else return e}function Te({numberingSystem:t},e=""){return new RegExp(`${$i[t||"latn"]}${e}`)}const Wm="missing Intl.DateTimeFormat.formatToParts support";function P(t,e=r=>r){return{regex:t,deser:([r])=>e(Um(r))}}const jm=String.fromCharCode(160),Jc=`[ ${jm}]`,Xc=new RegExp(Jc,"g");function Gm(t){return t.replace(/\./g,"\\.?").replace(Xc,Jc)}function Ba(t){return t.replace(/\./g,"").replace(Xc," ").toLowerCase()}function Me(t,e){return t===null?null:{regex:RegExp(t.map(Gm).join("|")),deser:([r])=>t.findIndex(n=>Ba(r)===Ba(n))+e}}function Fa(t,e){return{regex:t,deser:([,r,n])=>Dn(r,n),groups:e}}function Wr(t){return{regex:t,deser:([e])=>e}}function qm(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function Zm(t,e){const r=Te(e),n=Te(e,"{2}"),s=Te(e,"{3}"),i=Te(e,"{4}"),a=Te(e,"{6}"),o=Te(e,"{1,2}"),l=Te(e,"{1,3}"),c=Te(e,"{1,6}"),d=Te(e,"{1,9}"),u=Te(e,"{2,4}"),f=Te(e,"{4,6}"),h=b=>({regex:RegExp(qm(b.val)),deser:([$])=>$,literal:!0}),g=(b=>{if(t.literal)return h(b);switch(b.val){case"G":return Me(e.eras("short"),0);case"GG":return Me(e.eras("long"),0);case"y":return P(c);case"yy":return P(u,Us);case"yyyy":return P(i);case"yyyyy":return P(f);case"yyyyyy":return P(a);case"M":return P(o);case"MM":return P(n);case"MMM":return Me(e.months("short",!0),1);case"MMMM":return Me(e.months("long",!0),1);case"L":return P(o);case"LL":return P(n);case"LLL":return Me(e.months("short",!1),1);case"LLLL":return Me(e.months("long",!1),1);case"d":return P(o);case"dd":return P(n);case"o":return P(l);case"ooo":return P(s);case"HH":return P(n);case"H":return P(o);case"hh":return P(n);case"h":return P(o);case"mm":return P(n);case"m":return P(o);case"q":return P(o);case"qq":return P(n);case"s":return P(o);case"ss":return P(n);case"S":return P(l);case"SSS":return P(s);case"u":return Wr(d);case"uu":return Wr(o);case"uuu":return P(r);case"a":return Me(e.meridiems(),0);case"kkkk":return P(i);case"kk":return P(u,Us);case"W":return P(o);case"WW":return P(n);case"E":case"c":return P(r);case"EEE":return Me(e.weekdays("short",!1),1);case"EEEE":return Me(e.weekdays("long",!1),1);case"ccc":return Me(e.weekdays("short",!0),1);case"cccc":return Me(e.weekdays("long",!0),1);case"Z":case"ZZ":return Fa(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return Fa(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return Wr(/[a-z_+-/]{1,256}?/i);case" ":return Wr(/[^\S\n\r]/);default:return h(b)}})(t)||{invalidReason:Wm};return g.token=t,g}const Ym={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function Km(t,e,r){const{type:n,value:s}=t;if(n==="literal"){const l=/^\s+$/.test(s);return{literal:!l,val:l?" ":s}}const i=e[n];let a=n;n==="hour"&&(e.hour12!=null?a=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?a="hour12":a="hour24":a=r.hour12?"hour12":"hour24");let o=Ym[a];if(typeof o=="object"&&(o=o[i]),o)return{literal:!1,val:o}}function Jm(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function Xm(t,e,r){const n=t.match(e);if(n){const s={};let i=1;for(const a in r)if(zt(r,a)){const o=r[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(s[o.token.val[0]]=o.deser(n.slice(i,i+l))),i+=l}return[n,s]}else return[n,{}]}function Qm(t){const e=i=>{switch(i){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return T(t.z)||(r=Fe.create(t.z)),T(t.Z)||(r||(r=new se(t.Z)),n=t.Z),T(t.q)||(t.M=(t.q-1)*3+1),T(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),T(t.u)||(t.S=gi(t.u)),[Object.keys(t).reduce((i,a)=>{const o=e(a);return o&&(i[o]=t[a]),i},{}),r,n]}let ls=null;function e0(){return ls||(ls=M.fromMillis(1555555555555)),ls}function t0(t,e){if(t.literal)return t;const r=re.macroTokenToFormatOpts(t.val),n=tu(r,e);return n==null||n.includes(void 0)?t:n}function Qc(t,e){return Array.prototype.concat(...t.map(r=>t0(r,e)))}function eu(t,e,r){const n=Qc(re.parseFormat(r),t),s=n.map(a=>Zm(a,t)),i=s.find(a=>a.invalidReason);if(i)return{input:e,tokens:n,invalidReason:i.invalidReason};{const[a,o]=Jm(s),l=RegExp(a,"i"),[c,d]=Xm(e,l,o),[u,f,h]=d?Qm(d):[null,null,void 0];if(zt(d,"a")&&zt(d,"H"))throw new Vt("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:d,result:u,zone:f,specificOffset:h}}}function r0(t,e,r){const{result:n,zone:s,specificOffset:i,invalidReason:a}=eu(t,e,r);return[n,s,i,a]}function tu(t,e){if(!t)return null;const n=re.create(e,t).dtFormatter(e0()),s=n.formatToParts(),i=n.resolvedOptions();return s.map(a=>Km(a,t,i))}const cs="Invalid DateTime",za=864e13;function jr(t){return new Ae("unsupported zone",`the zone "${t.name}" is not supported`)}function us(t){return t.weekData===null&&(t.weekData=vn(t.c)),t.weekData}function ds(t){return t.localWeekData===null&&(t.localWeekData=vn(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function ct(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new M({...r,...e,old:r})}function ru(t,e,r){let n=t-e*60*1e3;const s=r.offset(n);if(e===s)return[n,e];n-=(s-e)*60*1e3;const i=r.offset(n);return s===i?[n,s]:[t-Math.min(s,i)*60*1e3,Math.max(s,i)]}function Gr(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ln(t,e,r){return ru(Vn(t),e,r)}function Ua(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),s=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,i={...t.c,year:n,month:s,day:Math.min(t.c.day,$n(n,s))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},a=O.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),o=Vn(i);let[l,c]=ru(o,r,t.zone);return a!==0&&(l+=a,c=t.zone.offset(l)),{ts:l,o:c}}function nr(t,e,r,n,s,i){const{setZone:a,zone:o}=r;if(t&&Object.keys(t).length!==0||e){const l=e||o,c=M.fromObject(t,{...r,zone:l,specificOffset:i});return a?c:c.setZone(o)}else return M.invalid(new Ae("unparsable",`the input "${s}" can't be parsed as ${n}`))}function qr(t,e,r=!0){return t.isValid?re.create(R.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function fs(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=Z(t.c.year,r?6:4),e?(n+="-",n+=Z(t.c.month),n+="-",n+=Z(t.c.day)):(n+=Z(t.c.month),n+=Z(t.c.day)),n}function Wa(t,e,r,n,s,i){let a=Z(t.c.hour);return e?(a+=":",a+=Z(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=":")):a+=Z(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(a+=Z(t.c.second),(t.c.millisecond!==0||!n)&&(a+=".",a+=Z(t.c.millisecond,3))),s&&(t.isOffsetFixed&&t.offset===0&&!i?a+="Z":t.o<0?(a+="-",a+=Z(Math.trunc(-t.o/60)),a+=":",a+=Z(Math.trunc(-t.o%60))):(a+="+",a+=Z(Math.trunc(t.o/60)),a+=":",a+=Z(Math.trunc(t.o%60)))),i&&(a+="["+t.zone.ianaName+"]"),a}const nu={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},n0={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},s0={ordinal:1,hour:0,minute:0,second:0,millisecond:0},su=["year","month","day","hour","minute","second","millisecond"],i0=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],a0=["year","ordinal","hour","minute","second","millisecond"];function o0(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new ac(t);return e}function ja(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return o0(t)}}function Ga(t,e){const r=Ge(e.zone,z.defaultZone),n=R.fromObject(e),s=z.now();let i,a;if(T(t.year))i=s;else{for(const c of su)T(t[c])&&(t[c]=nu[c]);const o=Lc(t)||Nc(t);if(o)return M.invalid(o);const l=r.offset(s);[i,a]=ln(t,l,r)}return new M({ts:i,zone:r,loc:n,o:a})}function qa(t,e,r){const n=T(r.round)?!0:r.round,s=(a,o)=>(a=wi(a,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(a,o)),i=a=>r.calendary?e.hasSame(t,a)?0:e.startOf(a).diff(t.startOf(a),a).get(a):e.diff(t,a).get(a);if(r.unit)return s(i(r.unit),r.unit);for(const a of r.units){const o=i(a);if(Math.abs(o)>=1)return s(o,a)}return s(t>e?-0:0,r.units[r.units.length-1])}function Za(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class M{constructor(e){const r=e.zone||z.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new Ae("invalid input"):null)||(r.isValid?null:jr(r));this.ts=T(e.ts)?z.now():e.ts;let s=null,i=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[s,i]=[e.old.c,e.old.o];else{const o=r.offset(this.ts);s=Gr(this.ts,o),n=Number.isNaN(s.year)?new Ae("invalid input"):null,s=n?null:s,i=n?null:o}this._zone=r,this.loc=e.loc||R.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=s,this.o=i,this.isLuxonDateTime=!0}static now(){return new M({})}static local(){const[e,r]=Za(arguments),[n,s,i,a,o,l,c]=r;return Ga({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:c},e)}static utc(){const[e,r]=Za(arguments),[n,s,i,a,o,l,c]=r;return e.zone=se.utcInstance,Ga({year:n,month:s,day:i,hour:a,minute:o,second:l,millisecond:c},e)}static fromJSDate(e,r={}){const n=Rh(e)?e.valueOf():NaN;if(Number.isNaN(n))return M.invalid("invalid input");const s=Ge(r.zone,z.defaultZone);return s.isValid?new M({ts:n,zone:s,loc:R.fromObject(r)}):M.invalid(jr(s))}static fromMillis(e,r={}){if(wt(e))return e<-za||e>za?M.invalid("Timestamp out of range"):new M({ts:e,zone:Ge(r.zone,z.defaultZone),loc:R.fromObject(r)});throw new le(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(wt(e))return new M({ts:e*1e3,zone:Ge(r.zone,z.defaultZone),loc:R.fromObject(r)});throw new le("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=Ge(r.zone,z.defaultZone);if(!n.isValid)return M.invalid(jr(n));const s=R.fromObject(r),i=Sn(e,ja),{minDaysInFirstWeek:a,startOfWeek:o}=Na(i,s),l=z.now(),c=T(r.specificOffset)?n.offset(l):r.specificOffset,d=!T(i.ordinal),u=!T(i.year),f=!T(i.month)||!T(i.day),h=u||f,m=i.weekYear||i.weekNumber;if((h||d)&&m)throw new Vt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new Vt("Can't mix ordinal dates with month/day");const g=m||i.weekday&&!h;let b,$,S=Gr(l,c);g?(b=i0,$=n0,S=vn(S,a,o)):d?(b=a0,$=s0,S=os(S)):(b=su,$=nu);let C=!1;for(const Ee of b){const ot=i[Ee];T(ot)?C?i[Ee]=$[Ee]:i[Ee]=S[Ee]:C=!0}const _=g?Ph(i,a,o):d?Ih(i):Lc(i),K=_||Nc(i);if(K)return M.invalid(K);const ke=g?Ca(i,a,o):d?La(i):i,[de,V]=ln(ke,c,n),q=new M({ts:de,zone:n,o:V,loc:s});return i.weekday&&h&&e.weekday!==q.weekday?M.invalid("mismatched weekday",`you can't specify both a weekday of ${i.weekday} and a date of ${q.toISO()}`):q}static fromISO(e,r={}){const[n,s]=Tm(e);return nr(n,s,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,s]=Mm(e);return nr(n,s,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,s]=xm(e);return nr(n,s,r,"HTTP",r)}static fromFormat(e,r,n={}){if(T(e)||T(r))throw new le("fromFormat requires an input string and a format");const{locale:s=null,numberingSystem:i=null}=n,a=R.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0}),[o,l,c,d]=r0(a,e,r);return d?M.invalid(d):nr(o,l,n,`format ${r}`,e,c)}static fromString(e,r,n={}){return M.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,s]=Im(e);return nr(n,s,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new le("need to specify a reason the DateTime is invalid");const n=e instanceof Ae?e:new Ae(e,r);if(z.throwOnInvalid)throw new ch(n);return new M({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=tu(e,R.fromObject(r));return n?n.map(s=>s?s.val:null).join(""):null}static expandFormat(e,r={}){return Qc(re.parseFormat(e),R.fromObject(r)).map(s=>s.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?us(this).weekYear:NaN}get weekNumber(){return this.isValid?us(this).weekNumber:NaN}get weekday(){return this.isValid?us(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?ds(this).weekday:NaN}get localWeekNumber(){return this.isValid?ds(this).weekNumber:NaN}get localWeekYear(){return this.isValid?ds(this).weekYear:NaN}get ordinal(){return this.isValid?os(this.c).ordinal:NaN}get monthShort(){return this.isValid?Ur.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Ur.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Ur.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Ur.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=Vn(this.c),s=this.zone.offset(n-e),i=this.zone.offset(n+e),a=this.zone.offset(n-s*r),o=this.zone.offset(n-i*r);if(a===o)return[this];const l=n-a*r,c=n-o*r,d=Gr(l,a),u=Gr(c,o);return d.hour===u.hour&&d.minute===u.minute&&d.second===u.second&&d.millisecond===u.millisecond?[ct(this,{ts:l}),ct(this,{ts:c})]:[this]}get isInLeapYear(){return Nr(this.year)}get daysInMonth(){return $n(this.year,this.month)}get daysInYear(){return this.isValid?Dt(this.year):NaN}get weeksInWeekYear(){return this.isValid?wr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?wr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:s}=re.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:s}}toUTC(e=0,r={}){return this.setZone(se.instance(e),r)}toLocal(){return this.setZone(z.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=Ge(e,z.defaultZone),e.equals(this.zone))return this;if(e.isValid){let s=this.ts;if(r||n){const i=e.offset(this.ts),a=this.toObject();[s]=ln(a,i,e)}return ct(this,{ts:s,zone:e})}else return M.invalid(jr(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const s=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return ct(this,{loc:s})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=Sn(e,ja),{minDaysInFirstWeek:n,startOfWeek:s}=Na(r,this.loc),i=!T(r.weekYear)||!T(r.weekNumber)||!T(r.weekday),a=!T(r.ordinal),o=!T(r.year),l=!T(r.month)||!T(r.day),c=o||l,d=r.weekYear||r.weekNumber;if((c||a)&&d)throw new Vt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&a)throw new Vt("Can't mix ordinal dates with month/day");let u;i?u=Ca({...vn(this.c,n,s),...r},n,s):T(r.ordinal)?(u={...this.toObject(),...r},T(r.day)&&(u.day=Math.min($n(u.year,u.month),u.day))):u=La({...os(this.c),...r});const[f,h]=ln(u,this.o,this.zone);return ct(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e);return ct(this,Ua(this,r))}minus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e).negate();return ct(this,Ua(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},s=O.normalizeUnit(e);switch(s){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(s==="weeks")if(r){const i=this.loc.getStartOfWeek(),{weekday:a}=this;a<i&&(n.weekNumber=this.weekNumber-1),n.weekday=i}else n.weekday=1;if(s==="quarters"){const i=Math.ceil(this.month/3);n.month=(i-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?re.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):cs}toLocaleString(e=bn,r={}){return this.isValid?re.create(this.loc.clone(r),e).formatDateTime(this):cs}toLocaleParts(e={}){return this.isValid?re.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:s=!0,extendedZone:i=!1}={}){if(!this.isValid)return null;const a=e==="extended";let o=fs(this,a);return o+="T",o+=Wa(this,a,r,n,s,i),o}toISODate({format:e="extended"}={}){return this.isValid?fs(this,e==="extended"):null}toISOWeekDate(){return qr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:s=!1,extendedZone:i=!1,format:a="extended"}={}){return this.isValid?(s?"T":"")+Wa(this,a==="extended",r,e,n,i):null}toRFC2822(){return qr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return qr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?fs(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let s="HH:mm:ss.SSS";return(r||e)&&(n&&(s+=" "),r?s+="z":e&&(s+="ZZ")),qr(this,s,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():cs}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return O.invalid("created by diffing an invalid DateTime");const s={locale:this.locale,numberingSystem:this.numberingSystem,...n},i=Vh(r).map(O.normalizeUnit),a=e.valueOf()>this.valueOf(),o=a?this:e,l=a?e:this,c=Fm(o,l,i,s);return a?c.negate():c}diffNow(e="milliseconds",r={}){return this.diff(M.now(),e,r)}until(e){return this.isValid?W.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const s=e.valueOf(),i=this.setZone(e.zone,{keepLocalTime:!0});return i.startOf(r,n)<=s&&s<=i.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||M.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let s=["years","months","days","hours","minutes","seconds"],i=e.unit;return Array.isArray(e.unit)&&(s=e.unit,i=void 0),qa(r,this.plus(n),{...e,numeric:"always",units:s,unit:i})}toRelativeCalendar(e={}){return this.isValid?qa(e.base||M.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(M.isDateTime))throw new le("min requires all arguments be DateTimes");return Oa(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(M.isDateTime))throw new le("max requires all arguments be DateTimes");return Oa(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:s=null,numberingSystem:i=null}=n,a=R.fromOpts({locale:s,numberingSystem:i,defaultToEN:!0});return eu(a,e,r)}static fromStringExplain(e,r,n={}){return M.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return bn}static get DATE_MED(){return oc}static get DATE_MED_WITH_WEEKDAY(){return fh}static get DATE_FULL(){return lc}static get DATE_HUGE(){return cc}static get TIME_SIMPLE(){return uc}static get TIME_WITH_SECONDS(){return dc}static get TIME_WITH_SHORT_OFFSET(){return fc}static get TIME_WITH_LONG_OFFSET(){return hc}static get TIME_24_SIMPLE(){return mc}static get TIME_24_WITH_SECONDS(){return pc}static get TIME_24_WITH_SHORT_OFFSET(){return gc}static get TIME_24_WITH_LONG_OFFSET(){return wc}static get DATETIME_SHORT(){return yc}static get DATETIME_SHORT_WITH_SECONDS(){return bc}static get DATETIME_MED(){return vc}static get DATETIME_MED_WITH_SECONDS(){return $c}static get DATETIME_MED_WITH_WEEKDAY(){return hh}static get DATETIME_FULL(){return Sc}static get DATETIME_FULL_WITH_SECONDS(){return kc}static get DATETIME_HUGE(){return Ec}static get DATETIME_HUGE_WITH_SECONDS(){return Tc}}function sr(t){if(M.isDateTime(t))return t;if(t&&t.valueOf&&wt(t.valueOf()))return M.fromJSDate(t);if(t&&typeof t=="object")return M.fromObject(t);throw new le(`Unknown datetime argument: ${t}, of type ${typeof t}`)}const l0=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function fr(t,e){return t?l0.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Je(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function c0(t){return Je(t).map(e=>t[e])}function hs(t){return Je(t).map(e=>[e,t[e]])}function u0(t,e){return t.includes(e)}function d0(t){return!!t}var Ut;(function(t){t.Upper="upper",t.Lower="lower"})(Ut||(Ut={}));function f0(t){return t.toLowerCase()!==t.toUpperCase()}function Ya(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const s=t[n]||"";if(!f0(s)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===Ut.Upper&&s!==s.toUpperCase())return!1;if(e===Ut.Lower&&s!==s.toLowerCase())return!1}return!0}function h0(t){return t.split("").reduce((r,n,s,i)=>{const a=s>0&&i[s-1]||"",o=s<i.length-1&&i[s+1]||"",l=Ya(a,Ut.Lower,{blockNoCaseCharacters:!0})||Ya(o,Ut.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||s===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var Ka;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ka||(Ka={}));function m0(t){return t?t.map(iu).filter(d0).join(`
`):""}function iu(t){return t?t instanceof Error?t.message:fr(t,"message")?String(t.message):String(t):""}function bt(t){return!!t&&typeof t=="object"}function Si(t,e){let r=!1;const n=Je(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Je(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function p0(t,e){try{return g0(t,e),!0}catch{return!1}}function g0(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function w0(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}w0();function y0(t,e){var o;const r=e==null?void 0:e.constructor,n=(o=t==null?void 0:t.constructor)==null?void 0:o.prototype,s=(t==null?void 0:t.constructor)===r,i=r&&n?n instanceof r:!1,a=s||i;return gn(t)===gn(e)&&a}const au="__vir__shape__definition__key__do__not__use__in__actual__objects";function ou(t){return fr(t,au)}const lu=Symbol("and"),cu=Symbol("instance"),uu=Symbol("enum"),du=Symbol("exact"),ki=Symbol("indexed-keys"),Ei=Symbol("or"),Ti=Symbol("unknown"),b0=[lu,uu,du,ki,cu,Ei,Ti],fu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function hu(...t){return Mi(t,ki)}function Zr(...t){return Mi(t,Ei)}function v0(t){return Mi([t],Ti)}function Bn(t){return kt(t,lu)}function Fn(t){return kt(t,cu)}function zn(t){return kt(t,uu)}function Un(t){return kt(t,du)}function Wn(t){return kt(t,ki)}function Ir(t){return kt(t,Ei)}function jn(t){return kt(t,Ti)}function kt(t,e){const r=_r(t);return!!r&&r.specifierType===e}function Mi(t,e){return{[fu]:!0,specifierType:e,parts:t}}function pt(t,e,r,n){const s=_r(e);if(s){if(Fn(s))return t instanceof s.parts[0];if(Bn(s))return s.parts.every(i=>pt(t,i));if(Ir(s))return s.parts.some(i=>pt(t,i));if(Un(s))return bt(t)?pt(t,s.parts[0]):t===s.parts[0];if(zn(s))return Object.values(s.parts[0]).some(i=>i===t);if(Wn(s))return bt(t)?$0(t,s,!!r)&&c0(t).every(i=>pt(i,s.parts[0].values)):!1;if(jn(s))return!0}return n?e===t:y0(t,e)}function $0(t,e,r){const n=e.parts[0].required,s=e.parts[0].keys;if(r)if(n){const i=xi(e);return L(i,"boolean")?i:i.every(a=>Je(t).some(o=>pt(o,a,!1,!0)))}else return!0;else return Je(t).every(i=>pt(i,s))}function xi(t){const e=t.parts[0].keys,r=_r(e);if(ns(e))return[e];if(r){if(Fn(r))return!1;if(Bn(r))return!1;if(Ir(r)){const n=r.parts.map(i=>xi(hu({...t.parts[0],keys:i})));let s;return n.forEach(i=>{L(i,"boolean")&&(i&&s==null?s=!0:s=!1)}),L(s,"boolean")?s:n.flat().filter(ns)}else if(Un(r)){const n=r.parts.filter(ns);return n.length!==r.parts.length?!1:n}else{if(zn(r))return Object.values(r.parts[0]);if(Wn(r))return!1;if(jn(r))return!0}}return!1}function _r(t){if(bt(t)&&fr(t,fu)){if(!fr(t,"parts")||!L(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!fr(t,"specifierType")||!u0(b0,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Ja extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Ws(t,e=!1){return lr(t)}function lr(t){const e=_r(t);if(e)if(Fn(e)){const r=e.parts[0];try{return new r}catch(n){throw new Ja(`Failed to create default value for classShape for class '${r.name}': ${iu(n)}`)}}else{if(Ir(e)||Un(e))return lr(e.parts[0]);if(Bn(e))return e.parts.reduce((r,n)=>Object.assign(r,lr(n)),{});if(zn(e))return Object.values(e.parts[0])[0];if(Wn(e)){const r=xi(e);return!e.parts[0].required||L(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,lr(e.parts[0].values)]))}else{if(jn(e))return e.parts[0]??{};throw new Ja(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return ou(t)?Ws(t.shape):t instanceof RegExp?t:L(t,"array")?t.map(lr):bt(t)?Si(t,(r,n)=>Ws(n)):t}function Gn(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return Ws(t)},[au]:!0}}class ye extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function S0(t,e,r={}){try{return mu(t,e,r),!0}catch{return!1}}function mu(t,e,r={}){Re({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function js(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function Re({subject:t,shape:e,keys:r,options:n}){if(jn(e))return!0;if(ou(e))return Re({subject:t,shape:e.shape,keys:r,options:n});const s=js(r);if(_r(t))throw new ye(`Shape test subjects cannot be contain shape specifiers but one was found at ${s}.`);if(!pt(t,e,!n.ignoreExtraKeys))throw new ye(`Subject does not match shape definition at key ${s}`);if(L(e,"function"))return L(t,"function");if(Fn(e))return t instanceof e.parts[0];if(bt(t)){const a=t,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(a).map(d=>[d,!1])),l=[];let c=!1;if(Ir(e)){const d=[];c=e.parts.some(u=>{try{const f=Re({subject:t,shape:u,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof ye)return d.push(f),!1;throw f}}),!c&&p0(d,1)&&l.push(d[0])}else if(Bn(e))c=e.parts.every(d=>{try{const u=Re({subject:t,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,u),!0}catch(u){if(u instanceof ye)return l.push(u),!1;throw u}});else if(Un(e)){const d=Re({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,d),c=!0}else{if(zn(e))throw new ye(`Cannot compare an enum specifier to an object at ${s}`);if(L(e,"array")&&L(a,"array"))c=a.every((d,u)=>{const f=e.some(h=>{try{return Re({subject:d,shape:h,keys:[...r,u],options:n}),!0}catch(m){if(m instanceof ye)return l.push(m),!1;throw m}});return o[u]=f,f});else if(Wn(e)){const d=Si(t,(u,f)=>(n.ignoreExtraKeys||Re({shape:e.parts[0].keys,subject:u,keys:[...r,u],options:n}),Re({shape:e.parts[0].values,subject:f,keys:[...r,u],options:n}),!0));Object.assign(o,d),c=!0}else{const d=k0({keys:r,options:n,shape:e,subject:t});Object.assign(o,d),c=!0}}if(l.length)throw new ye(m0(l));if(!c){const u=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>js([...r,f])).join(",")}`;throw new ye(u)}return n.ignoreExtraKeys||Object.entries(o).forEach(([d,u])=>{if(!u)throw new ye(`subject as extra key '${d}' in ${s}.`)}),o}else if(n.exactValues)return t===e;return!0}function k0({keys:t,options:e,shape:r,subject:n}){const s=js(t),i={};if(bt(r)){const a=new Set(Je(r)),o=new Set(Je(n));a.forEach(l=>{l in n&&o.add(l)}),e.ignoreExtraKeys||o.forEach(l=>{if(!a.has(l))throw new ye(`Subject has extra key '${String(l)}' in ${s}`)}),a.forEach(l=>{var f;const c=r[l],d=Ir(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!o.has(l)&&!d&&!u)throw new ye(`Subject missing key '${String(l)}' in ${s}`)}),o.forEach(l=>{const c=n[l];if(e.ignoreExtraKeys&&!a.has(l))return;const d=r[l];Re({subject:c,shape:d,keys:[...t,l],options:e}),i[l]=!0})}else throw new ye(`shape definition at ${s} was not an object.`);return i}const E0=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],T0=E0.reduce((t,e)=>(t[e]=e,t),{});z.defaultZone.name;T0.UTC;var Xa;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(Xa||(Xa={}));const M0=["hour","minute","second","millisecond"];var N;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(N||(N={}));N.Milliseconds+"",N.Seconds+"",N.Minutes+"",N.Hours+"",N.Days+"",N.Weeks+"",N.Months+"",N.Quarters+"",N.Years+"";N.Milliseconds,N.Seconds,N.Minutes,N.Hours,N.Days,N.Weeks,N.Months,N.Quarters,N.Years;N.Years+"",N.Quarters+"",N.Months+"",N.Weeks+"",N.Days+"",N.Hours+"",N.Minutes+"",N.Seconds+"",N.Milliseconds+"";var Qa;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(Qa||(Qa={}));const x0={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};oh(x0,M0);z.defaultLocale;N.Milliseconds+"",N.Seconds+"",N.Minutes+"",N.Hours+"",N.Days+"",N.Weeks+"",N.Months+"",N.Quarters+"",N.Years+"";class pu extends nh{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e.defaultValue,this.equalityCheck=e.equalityCheck||rc}setValue(e){return super.setValue(e)}listen(e,r){return super.listen(e,r)}removeListener(e){return super.removeListener(e)}}const A0=Gn({listen(t,e){return()=>!1},destroy(){},removeListener(t){return!1},value:v0()});function ms(t){return S0(t,A0,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=globalThis,Ai=cn.ShadowRoot&&(cn.ShadyCSS===void 0||cn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ci=Symbol(),eo=new WeakMap;let gu=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ai&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=eo.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&eo.set(r,e))}return e}toString(){return this.cssText}};const X=t=>new gu(typeof t=="string"?t:t+"",void 0,Ci),un=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,s,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new gu(r,t,Ci)},C0=(t,e)=>{if(Ai)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),s=cn.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,t.appendChild(n)}},to=Ai?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return X(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:L0,defineProperty:N0,getOwnPropertyDescriptor:O0,getOwnPropertyNames:P0,getOwnPropertySymbols:I0,getPrototypeOf:_0}=Object,Ze=globalThis,ro=Ze.trustedTypes,R0=ro?ro.emptyScript:"",ps=Ze.reactiveElementPolyfillSupport,hr=(t,e)=>t,kn={toAttribute(t,e){switch(e){case Boolean:t=t?R0:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Li=(t,e)=>!L0(t,e),no={attribute:!0,type:String,converter:kn,reflect:!1,hasChanged:Li};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ze.litPropertyMetadata??(Ze.litPropertyMetadata=new WeakMap);let Rt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=no){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,r);s!==void 0&&N0(this.prototype,e,s)}}static getPropertyDescriptor(e,r,n){const{get:s,set:i}=O0(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const o=s==null?void 0:s.call(this);i.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??no}static _$Ei(){if(this.hasOwnProperty(hr("elementProperties")))return;const e=_0(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(hr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hr("properties"))){const r=this.properties,n=[...P0(r),...I0(r)];for(const s of n)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,s]of r)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const s=this._$Eu(r,n);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)r.unshift(to(s))}else e!==void 0&&r.push(to(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C0(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var i;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:kn).toAttribute(r,n.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var i;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=n.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:kn;this._$Em=s,this[s]=o.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Li)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,a]of s)a.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};Rt.elementStyles=[],Rt.shadowRootOptions={mode:"open"},Rt[hr("elementProperties")]=new Map,Rt[hr("finalized")]=new Map,ps==null||ps({ReactiveElement:Rt}),(Ze.reactiveElementVersions??(Ze.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=globalThis,En=mr.trustedTypes,so=En?En.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ni="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,Oi="?"+De,V0=`<${Oi}>`,vt=document,yr=()=>vt.createComment(""),br=t=>t===null||typeof t!="object"&&typeof t!="function",wu=Array.isArray,yu=t=>wu(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",gs=`[ 	
\f\r]`,ir=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,io=/-->/g,ao=/>/g,ut=RegExp(`>|${gs}(?:([^\\s"'>=/]+)(${gs}*=${gs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oo=/'/g,lo=/"/g,bu=/^(?:script|style|textarea|title)$/i,D0=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),H0=D0(1),Le=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),co=new WeakMap,gt=vt.createTreeWalker(vt,129);function vu(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return so!==void 0?so.createHTML(e):e}const $u=(t,e)=>{const r=t.length-1,n=[];let s,i=e===2?"<svg>":"",a=ir;for(let o=0;o<r;o++){const l=t[o];let c,d,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===ir?d[1]==="!--"?a=io:d[1]!==void 0?a=ao:d[2]!==void 0?(bu.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=ut):d[3]!==void 0&&(a=ut):a===ut?d[0]===">"?(a=s??ir,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?ut:d[3]==='"'?lo:oo):a===lo||a===oo?a=ut:a===io||a===ao?a=ir:(a=ut,s=void 0);const h=a===ut&&t[o+1].startsWith("/>")?" ":"";i+=a===ir?l+V0:u>=0?(n.push(c),l.slice(0,u)+Ni+l.slice(u)+De+h):l+De+(u===-2?o:h)}return[vu(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class vr{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,a=0;const o=e.length-1,l=this.parts,[c,d]=$u(e,r);if(this.el=vr.createElement(c,n),gt.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=gt.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Ni)){const f=d[a++],h=s.getAttribute(u).split(De),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:i,name:m[2],strings:h,ctor:m[1]==="."?ku:m[1]==="?"?Eu:m[1]==="@"?Tu:Rr}),s.removeAttribute(u)}else u.startsWith(De)&&(l.push({type:6,index:i}),s.removeAttribute(u));if(bu.test(s.tagName)){const u=s.textContent.split(De),f=u.length-1;if(f>0){s.textContent=En?En.emptyScript:"";for(let h=0;h<f;h++)s.append(u[h],yr()),gt.nextNode(),l.push({type:2,index:++i});s.append(u[f],yr())}}}else if(s.nodeType===8)if(s.data===Oi)l.push({type:2,index:i});else{let u=-1;for(;(u=s.data.indexOf(De,u+1))!==-1;)l.push({type:7,index:i}),u+=De.length-1}i++}}static createElement(e,r){const n=vt.createElement("template");return n.innerHTML=e,n}}function $t(t,e,r=t,n){var a,o;if(e===Le)return e;let s=n!==void 0?(a=r._$Co)==null?void 0:a[n]:r._$Cl;const i=br(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=s:r._$Cl=s),s!==void 0&&(e=$t(t,s._$AS(t,e.values),s,n)),e}class Su{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??vt).importNode(r,!0);gt.currentNode=s;let i=gt.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Qt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Mu(i,this,e)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(i=gt.nextNode(),a++)}return gt.currentNode=vt,s}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class Qt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,s){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=$t(this,e,r),br(e)?e===G||e==null||e===""?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==Le&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yu(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==G&&br(this._$AH)?this._$AA.nextSibling.data=e:this.T(vt.createTextNode(e)),this._$AH=e}$(e){var i;const{values:r,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=vr.createElement(vu(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const a=new Su(s,this),o=a.u(this.options);a.p(r),this.T(o),this._$AH=a}}_$AC(e){let r=co.get(e.strings);return r===void 0&&co.set(e.strings,r=new vr(e)),r}k(e){wu(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new Qt(this.S(yr()),this.S(yr()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Rr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=G}_$AI(e,r=this,n,s){const i=this.strings;let a=!1;if(i===void 0)e=$t(this,e,r,0),a=!br(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{const o=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=$t(this,o[n+l],r,l),c===Le&&(c=this._$AH[l]),a||(a=!br(c)||c!==this._$AH[l]),c===G?e=G:e!==G&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!s&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ku extends Rr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class Eu extends Rr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class Tu extends Rr{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){if((e=$t(this,e,r,0)??G)===Le)return;const n=this._$AH,s=e===G&&n!==G||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==G&&(n===G||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Mu{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$t(this,e)}}const B0={P:Ni,A:De,C:Oi,M:1,L:$u,R:Su,D:yu,V:$t,I:Qt,H:Rr,N:Eu,U:Tu,B:ku,F:Mu},ws=mr.litHtmlPolyfillSupport;ws==null||ws(vr,Qt),(mr.litHtmlVersions??(mr.litHtmlVersions=[])).push("3.1.3");const F0=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=s=new Qt(e.insertBefore(yr(),i),i,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let pr=class extends Rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=F0(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Le}};var Yl;pr._$litElement$=!0,pr.finalized=!0,(Yl=globalThis.litElementHydrateSupport)==null||Yl.call(globalThis,{LitElement:pr});const ys=globalThis.litElementPolyfillSupport;ys==null||ys({LitElement:pr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:z0}=B0,uo=()=>document.createComment(""),ar=(t,e,r)=>{var i;const n=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(r===void 0){const a=n.insertBefore(uo(),s),o=n.insertBefore(uo(),s);r=new z0(a,o,t,t.options)}else{const a=r._$AB.nextSibling,o=r._$AM,l=o!==t;if(l){let c;(i=r._$AQ)==null||i.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==o._$AU&&r._$AP(c)}if(a!==s||l){let c=r._$AA;for(;c!==a;){const d=c.nextSibling;n.insertBefore(c,s),c=d}}}return r},dt=(t,e,r=t)=>(t._$AI(e,r),t),U0={},W0=(t,e=U0)=>t._$AH=e,j0=t=>t._$AH,bs=t=>{var n;(n=t._$AP)==null||n.call(t,!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const s=e.nextSibling;e.remove(),e=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},er=t=>(...e)=>({_$litDirective$:t,values:e});class Et{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G0={attribute:!0,type:String,converter:kn,reflect:!1,hasChanged:Li},q0=(t=G0,e,r)=>{const{kind:n,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,t),n==="accessor"){const{name:a}=r;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t)},init(o){return o!==void 0&&this.P(a,void 0,t),o}}}if(n==="setter"){const{name:a}=r;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t)}}throw Error("Unsupported decorator location: "+n)};function Z0(t){return(e,r)=>typeof r=="object"?q0(t,e,r):((n,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,a?{...n,wrapped:!0}:n),a?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xu=er(class extends Et{constructor(t){var e;if(super(t),t.type!==qn.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(e)}const r=t.element.classList;for(const i of this.st)i in e||(r.remove(i),this.st.delete(i));for(const i in e){const a=!!e[i];a===this.st.has(i)||(s=this.nt)!=null&&s.has(i)||(a?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return Le}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gs extends Et{constructor(e){if(super(e),this.it=G,e.type!==qn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===G||e==null)return this._t=void 0,this.it=e;if(e===Le)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Gs.directiveName="unsafeHTML",Gs.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class fo extends Gs{}fo.directiveName="unsafeSVG",fo.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y0(t,e,r){return t?e(t):r==null?void 0:r(t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=(t,e,r)=>{const n=new Map;for(let s=e;s<=r;s++)n.set(t[s],s);return n},K0=er(class extends Et{constructor(t){if(super(t),t.type!==qn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const s=[],i=[];let a=0;for(const o of t)s[a]=n?n(o,a):a,i[a]=r(o,a),a++;return{values:i,keys:s}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const s=j0(t),{values:i,keys:a}=this.dt(e,r,n);if(!Array.isArray(s))return this.ut=a,i;const o=this.ut??(this.ut=[]),l=[];let c,d,u=0,f=s.length-1,h=0,m=i.length-1;for(;u<=f&&h<=m;)if(s[u]===null)u++;else if(s[f]===null)f--;else if(o[u]===a[h])l[h]=dt(s[u],i[h]),u++,h++;else if(o[f]===a[m])l[m]=dt(s[f],i[m]),f--,m--;else if(o[u]===a[m])l[m]=dt(s[u],i[m]),ar(t,l[m+1],s[u]),u++,m--;else if(o[f]===a[h])l[h]=dt(s[f],i[h]),ar(t,s[u],s[f]),f--,h++;else if(c===void 0&&(c=ho(a,h,m),d=ho(o,u,f)),c.has(o[u]))if(c.has(o[f])){const g=d.get(a[h]),b=g!==void 0?s[g]:null;if(b===null){const $=ar(t,s[u]);dt($,i[h]),l[h]=$}else l[h]=dt(b,i[h]),ar(t,s[u],b),s[g]=null;h++}else bs(s[f]),f--;else bs(s[u]),u++;for(;h<=m;){const g=ar(t,l[m+1]);dt(g,i[h]),l[h++]=g}for(;u<=f;){const g=s[u++];g!==null&&bs(g)}return this.ut=a,W0(t,l),Le}}),J0=K0;class ee extends pr{}E(ee,"assign"),E(ee,"assignedInputs"),E(ee,"tagName"),E(ee,"styles"),E(ee,"isStrictInstance"),E(ee,"renderCallback"),E(ee,"inputsType"),E(ee,"stateType"),E(ee,"updateStateType"),E(ee,"events"),E(ee,"stateInitStatic"),E(ee,"init"),E(ee,"elementOptions"),E(ee,"hostClasses"),E(ee,"cssVars"),E(ee,"slotNames");const X0=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Pi(t,e){return t?X0.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Xe(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Q0(t,e,r){return t.reduce((n,s,i,a)=>{const o=e(s,i,a);return r(o,s,i,a)&&n.push(o),n},[])}function Au(t){return!!t}const ep={capitalizeFirstLetter:!1};function tp(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function rp(t,e){return e.capitalizeFirstLetter?tp(t):t}function np(t,e=ep){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,s=>{const i=s[1];return i?i.toUpperCase():""});return rp(n,e)}var mo;(function(t){t.Upper="upper",t.Lower="lower"})(mo||(mo={}));var po;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(po||(po={}));function Cu(t){return t?t instanceof Error?t.message:Pi(t,"message")?String(t.message):String(t):""}function sp(t){return t instanceof Error?t:new Error(Cu(t))}function ip(t,e){const r=sp(t);return r.message=`${e}: ${r.message}`,r}function ap(t){return!!t&&typeof t=="object"}function op(t,e,r){if(e in t)return t[e];{const n=r();return tc(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}function Lu(t,e){let r=!1;const n=Xe(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Xe(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function lp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}lp();function Tt(t){if(bt(t))return Si(t,(r,n)=>{if(!L(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(h0(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const i=n,a=r.startsWith("--")?X(r):r.startsWith("-")?un`-${X(r)}`:un`--${X(r)}`;return{name:a,value:un`var(${a}, ${X(i)})`,default:String(i)}});throw new Error(`Invalid setup input for '${Tt.name}' function.`)}function cp({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}function up(t,e,r){const n=!e.length&&!r.length,s=t.length?!1:!e.filter(o=>!!o.index).length;if(n||s)return[...t];const i=t.map(o=>[o]);return i.length||(i[0]=[]),r.forEach(o=>{o>=0&&o<t.length&&(i[o]=[])}),e.forEach(o=>{const l=i[o.index];l&&l.splice(0,0,...o.values)}),i.flat()}function dn(t){return Pi(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function Ii(t){return Pi(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function Nu(t){return Q0(t,e=>{if(dn(e))return e.definition;if(Ii(e))return e.tagInterpolationKey||e},Au)}const Ou=new WeakMap;function dp(t,e){var s;const r=Nu(e);return(s=Pu(Ou,[t,...r]).value)==null?void 0:s.template}function fp(t,e,r){const n=Nu(e);return _u(Ou,[t,...n],r)}function Pu(t,e,r=0){const{currentTemplateAndNested:n,reason:s}=Iu(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?Pu(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:s}}function Iu(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const s=t.get(n);return s==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:s,reason:"key and value exists"}}function _u(t,e,r,n=0){const{currentTemplateAndNested:s,currentKey:i,reason:a}=Iu(t,e,n);if(!i)return{result:!1,reason:a};const o=s??{nested:void 0,template:void 0};if(s||t.set(i,o),n===e.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),_u(l,e,r,n+1)}const hp=new WeakMap;function Ru(t,e,r){const n=dp(t,e),s=n??r();if(!n){const o=fp(t,e,s);if(o.result)hp.set(t,s);else throw new Error(`Failed to set template transform: ${o.reason}`)}const i=s.valuesTransform(e),a=up(e,i.valueInsertions,i.valueIndexDeletions);return{strings:s.templateStrings,values:a}}function Vu(t,e,r,n){const s=[],i=[],a=[],o=[];return t.forEach((c,d)=>{const u=s.length-1,f=s[u],h=d-1,m=e[h];n&&n(c);let g,b=[];if(typeof f=="string"&&(g=r(f,c,m),g)){s[u]=f+g.replacement,a.push(h);const S=g.getExtraValues;b=S?S(m):[],b.length&&S?(s[u]+=" ",b.forEach((C,_)=>{_&&s.push(" ")}),o.push(C=>{const _=C[h],K=S(_);return{index:h,values:K}}),s.push(c)):s[u]+=c}g||s.push(c);const $=t.raw[d];g?(i[u]=i[u]+g.replacement+$,b.length&&b.forEach(()=>{i.push("")})):i.push($)}),{templateStrings:Object.assign([],s,{raw:i}),valuesTransform(c){const d=o.map(u=>u(c)).flat();return{valueIndexDeletions:a,valueInsertions:d}}}}function mp(...[t,e,r]){if(Ii(r))return{replacement:r.tagName,getExtraValues:void 0}}function pp(t,e){return Vu(t,e,mp)}function y(t,...e){const r=Ru(t,e,()=>pp(t,e));return un(r.strings,...r.values)}const gp={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function Du(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof ee?!0:Du(r)}function Hu(t,e){const r=t.instanceState;Xe(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&Xe(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),wp(t)}function wp(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function go(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class yp extends CustomEvent{constructor(r,n){super(typeof r=="string"?r:r.type,{detail:n,bubbles:!0,composed:!0});E(this,"_type","")}get type(){return this._type}}function _i(){return t=>{var e;return e=class extends yp{constructor(n){super(t,n);E(this,"_type",t)}},E(e,"type",t),e}}function Qe(){return _i()}function bp(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const s=_i()([t,n].join("-"));return r[n]=s,r},{}):{}}function vp(t){return t?Lu(t,e=>e):{}}const Bu=Symbol("element-vir-state-setup");function $p(t){return ap(t)?Bu in t:!1}function Fu(t,e){e in t||Z0()(t,e)}function Sp(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function wo(t,e){const r=t;function n(a){e?Sp(a,t,t.tagName):Fu(t,a)}function s(a,o){return n(o),r[o]}return new Proxy({},{get:s,set(a,o,l){const c=$p(l)?l[Bu]():l;n(o);const d=r[o];function u(h){a[o]=h,r[o]=h}const f=t.observablePropertyListenerMap[o];if(d!==c&&ms(d)&&f&&d.removeListener(f),ms(c))if(f)c.listen(!1,f);else{let h=function(){t.requestUpdate()};t.observablePropertyListenerMap[o]=h,c.listen(!1,h)}else ms(d)&&(t.observablePropertyListenerMap[o]=void 0);return u(c),!0},ownKeys(a){return Reflect.ownKeys(a)},getOwnPropertyDescriptor(a,o){if(o in a)return{get value(){return s(a,o)},configurable:!0,enumerable:!0}},has(a,o){return Reflect.has(a,o)}})}function kp({hostClassNames:t,cssVars:e}){return{hostClasses:Lu(t,(r,n)=>({name:X(n),selector:X(`:host(.${n})`)})),cssVars:e}}function Ep({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:s}){e&&Xe(e).forEach(i=>{const a=e[i],o=r[i];typeof a=="function"&&(a({state:n,inputs:s})?t.classList.add(o):t.classList.remove(o))})}function Tp({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function s(a){Xe(a).forEach(o=>{const l=a[o];t.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:a=>t.dispatchEvent(a),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:s}}function Mp(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}function Zn(t){var u;const e=t;if(!L(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!L(e.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...gp,...e.options},n=bp(e.tagName,e.events),s=vp(e.hostClasses);e.hostClasses&&go(e.tagName,e.hostClasses),e.cssVars&&go(e.tagName,e.cssVars);const i=e.cssVars?Tt(e.cssVars):{},a=Mp(e.slotNames),o=typeof e.styles=="function"?e.styles(kp({hostClassNames:s,cssVars:i})):e.styles||y``,l=e.renderCallback;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(u=class extends ee{constructor(){super();E(this,"_lastRenderError");E(this,"_internalRenderCount",0);E(this,"_initCalled",!1);E(this,"_hasRendered",!1);E(this,"_lastRenderedProps");E(this,"_haveInputsBeenSet",!1);E(this,"definition",{});E(this,"observablePropertyListenerMap",{});E(this,"instanceInputs",wo(this,!1));E(this,"instanceState",wo(this,!r.allowPolymorphicState));const h=e.stateInitStatic||{};Xe(h).forEach(m=>{Fu(this,m),this.instanceState[m]=h[m]}),this.definition=d}createRenderParams(){return Tp({element:this,eventsMap:n,cssVars:i,slotNamesMap:a})}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{Du(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${Zn.name}' to define ${e.tagName}.`),this._hasRendered=!0;const h=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(h)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const m=l(h);if(m instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return Ep({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:s,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},m}catch(h){const m=ip(h,`Failed to render ${e.tagName}`);return console.error(m),this._lastRenderError=m,Cu(m)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const h=this.createRenderParams();if(e.initCallback(h)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{pn(h,"destroy")&&L(h.destroy,"function")&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const h=this.createRenderParams();if(e.cleanupCallback(h)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(h){Hu(this,h)}},E(u,"elementOptions",r),E(u,"tagName",e.tagName),E(u,"styles",o),E(u,"assign",c),E(u,"isStrictInstance",()=>!1),E(u,"events",n),E(u,"renderCallback",l),E(u,"hostClasses",s),E(u,"cssVars",i),E(u,"init",e),E(u,"slotNames",a),E(u,"stateInitStatic",e.stateInitStatic),u);return Object.defineProperties(d,{name:{value:np(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,d),d}function zu(){return t=>{const e=t;if(!L(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return Zn({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function Uu(t,e){return $r(t,e),t.element}function xp(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function $r(t,e){const r=xp(t),n=r?`: in ${r}`:"";if(t.type!==qn.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function U(t,e){return Ap(t,e)}const Ap=er(class extends Et{constructor(e){super(e);E(this,"element");E(this,"lastListenerMetaData");this.element=Uu(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:n=>{var s;return(s=this.lastListenerMetaData)==null?void 0:s.callback(n)}}}render(e,r){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(n,r)),Le}}),yo="onDomCreated",bo=er(class extends Et{constructor(e){super(e);E(this,"element");$r(e,yo)}update(e,[r]){$r(e,yo);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>r(n)),this.element=n),this.render(r)}render(e){}}),vs="onResize",Wu=er(class extends Et{constructor(e){super(e);E(this,"element");E(this,"resizeObserver",new ResizeObserver(e=>this.fireCallback(e)));E(this,"callback");$r(e,vs)}fireCallback(e){var n;const r=e[0];if(!r)throw console.error(e),new Error(`${vs} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:r.target,contentRect:r.contentRect},this.element)}update(e,[r]){$r(e,vs),this.callback=r;const n=e.element,s=this.element;return n!==s&&(this.element=n,s&&this.resizeObserver.unobserve(s),this.resizeObserver.observe(n)),this.render(r)}render(e){}});function fe(t,e,r){return Y0(t,()=>e,()=>r)}Xe({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function ju(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),zu()(r(n))),defineElementNoInputs:n=>(e(n),Zn(r(n)))}}function Cp(t,e){return e?vo(t,e):vo(void 0,t)}const vo=er(class extends Et{constructor(e){super(e);E(this,"element");this.element=Uu(e,"assign")}render(e,r){return Hu(this.element,r),Le}}),Lp={};function Np(t,e){return e.map((r,n)=>{const s=t[n],i=t[n+1];if(s&&i){const{shouldHaveTagNameHere:a}=Gu(s,i);if(a&&L(r,"string"))return{tagName:r,tagInterpolationKey:op(Lp,r,()=>({tagName:r}))}}return r})}function Gu(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Op(...[t,e,r]){var l,c,d;const n=dn(r)?r.definition:r,{isOpeningTag:s,shouldHaveTagNameHere:i}=Gu(t,e),a=Ii(n);if(a&&i&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(i&&!a)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((d=n==null?void 0:n.constructor)==null?void 0:d.name)}'`);if(!i||!a)return;if(s&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!dn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const f=dn(u)?u.inputs:void 0;return[s&&f?Cp(f):void 0].filter(Au)}}}function Pp(t){}function Ip(t){return Vu(t.strings,t.values,Op,Pp)}function p(t,...e){const r=Np(t,e),n=H0(t,...r),s=Ru(t,r,()=>Ip(n));return{...n,strings:s.strings,values:s.values}}const qu={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},_p=Object.keys(qu),Zu={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Rp=Object.keys(Zu),Yu={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},Vp=Object.keys(Yu),Dp=[hs(qu).map(([t,e])=>[e,t]),hs(Zu).map(([t,e])=>[e,t]),hs(Yu).map(([t,e])=>[e,t])].flat();new Map(Dp);Array.from(new Set([..._p,...Vp,...Rp].sort()));function cr(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const s=e.name,i=n==null?void 0:n.constructor.name,a=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${s}'. Got '${i}'.`:`Target from event '${t.type}' was not of type '${s}'. Got '${i}'.`;throw new Error(a)}return n}const Hp={[ne.ElementExample]:()=>[],[ne.Page]:t=>[!t.title&&new Error("Cannot define an element-book page with an empty title."),...Bf(t.controls,t.title)].filter(ui),[ne.Root]:()=>[]},Tn="_isBookTreeNode",Ku=new Map;function Bp(t){return Ku.get(t)}function Fp(t,e){Nf(Ku,t,()=>e)}function Bt(t,e){return!!(Ju(t)&&t.entry.entryType===e)}function Ju(t){return!!(Ql(t,[Tn,"entry"])&&t[Tn])}function zp(){return{[Tn]:!0,entry:{entryType:ne.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Up({entries:t,debug:e}){const r=Bp(t);if(r)return r;const n=zp();t.forEach(a=>Ri({tree:n,newEntry:a,debug:e,manuallyAdded:!0}));const s=Xu(n),i={tree:n,flattenedNodes:s};return Fp(t,i),e&&console.info("element-book tree:",n),i}function Wp(t,e,r){if(!e.parent)return t;const n=qs(e,t);if(n)return n;r&&console.info(`parent of ${e.title} not found in tree; adding it now.`),Ri({tree:t,newEntry:e.parent,debug:r,manuallyAdded:!1});const s=qs(e,t);if(!s)throw new Error(`Failed to find node despite having just added it: ${fi(e,!1)}`);return s}function Ri({tree:t,newEntry:e,debug:r,manuallyAdded:n}){const s=Hp[e.entryType](e);e.errors.push(...s);const i=Wp(t,e,r),a=yn(e.title),o=i.children[a];if(o){if(n){if(o.manuallyAdded){o.entry.errors.push(new Error(`Cannot create duplicate '${a}'${i.urlBreadcrumb?` in parent '${i.urlBreadcrumb}'.`:""}`));return}o.manuallyAdded=!0}return}const l={[Tn]:!0,children:{},urlBreadcrumb:a,fullUrlBreadcrumbs:[...i.fullUrlBreadcrumbs,a],entry:e,manuallyAdded:n};i.children[a]=l,Df(e,ne.Page)&&Object.values(e.elementExamples??{}).length&&Object.values(e.elementExamples??{}).forEach(c=>Ri({tree:t,newEntry:c,debug:r,manuallyAdded:n}))}function qs(t,e){const r=Ju(t)?t.fullUrlBreadcrumbs.slice(0,-1):fi(t,!1);return r.length?r.reduce((s,i)=>{if(s)return s.children[i]},e):void 0}function Xu(t){const r=!!t.entry.errors.length?[]:Object.values(t.children).map(s=>Xu(s));return[t,...r].flat()}function Vi(t,e){return Di(t,["",...e],void 0)}function Di(t,e,r){const n=e.slice(1),s=n[0];!s&&r&&(t.controls=r);const i=t.children[s||""],a=i&&Di(i,n,r);return{...t.controls,...a}}function jp(t,e,r){const n={...t};return Di(n,["",...e],r),n}function Qu(t,e){const r=(e==null?void 0:e.controls)||(Bt(t,ne.Page)?wn(t.entry.controls,(s,i)=>i.initValue):{});return{children:wn(t.children,(s,i)=>{var a;return Qu(i,(a=e==null?void 0:e.children)==null?void 0:a[i.urlBreadcrumb])}),controls:r}}function Gp({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const s=e.toLowerCase(),i=t.toLowerCase();e:for(let a=0,o=0;a<n;a++){const l=i.charCodeAt(a);for(;o<r;)if(s.charCodeAt(o++)===l)continue e;return!1}return!0}const qp=Vf(32);function fn(t){return t.join(qp)}function ed(t){if(!t.length)return[];const e=fn(t),r=ed(t.slice(0,-1));return[e,...r]}const Zp=["error","errors"];function Yp(t){return Zp.includes(t)}function Kp({flattenedNodes:t,searchQuery:e}){const r={};function n(s){Object.values(s.children).map(a=>(n(a),fn(a.fullUrlBreadcrumbs))).forEach(a=>r[a]=!0)}return t.forEach(s=>{const i=s.entry.errors.length&&Yp(e),a=fn(s.fullUrlBreadcrumbs);if(Gp({searchIn:[s.entry.title,...s.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:e.toLowerCase()})||i||r[a]){const l=ed(s.fullUrlBreadcrumbs);n(s),l.forEach(c=>r[c]=!0)}else r[a]=!1}),t.filter(s=>{const i=fn(s.fullUrlBreadcrumbs),a=r[i];if(!L(a,"boolean"))throw new Error(`Failed to find '${s.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return a})}class Hi extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class $o extends Hi{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class Jp extends Hi{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}var So;(function(t){t.Upper="upper",t.Lower="lower"})(So||(So={}));var ko;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ko||(ko={}));function Xp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Xp();function td({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function $s({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const Qp=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function eg(t,e){return t?Qp.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Zs(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function tg(t,e,r){return t.reduce((n,s,i,a)=>{const o=e(s,i,a);return r(o,s,i,a)&&n.push(o),n},[])}function rg(t){return!!t}var Eo;(function(t){t.Upper="upper",t.Lower="lower"})(Eo||(Eo={}));function ng(t,e){return t.split(e)}var To;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(To||(To={}));function sg(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function ig(t,e){return Zs(t).filter(n=>{const s=t[n];return e(n,s,t)}).reduce((n,s)=>(n[s]=t[s],n),{})}function ag(t,e,r){if(e in t)return t[e];{const n=r();return tc(n)?new Promise(async(s,i)=>{try{const a=await n;t[e]=a,s(a)}catch(a){i(a)}}):(t[e]=n,n)}}function Ys(t,e){let r=!1;const n=Zs(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(Zs(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function og(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}og();function Be({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function Bi({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const Ss="://";function Fi(...t){const e=t.join("/"),[r,n=""]=e.includes(Ss)?e.split(Ss):["",e];let s=!1;const i=n.replace(/\/{2,}/g,"/").split("/").reduce((a,o,l,c)=>{if(s)return a;const d=c[l+1];let u=o;const f=d==null?void 0:d.startsWith("?"),h=!o.includes("?")&&f,m=d==="?";if(f||h){s=!0;let g=!1;const b=c.slice(l+2).reduce(($,S)=>(S.includes("#")&&(g=!0),g?$.concat(S):[$,S].join("&")),"");u=[o,d,m?Bi({value:b,prefix:"&"}):b].join("")}return a.concat(u)},[]);return[r,r?Ss:"",i.join("/")].join("")}var Mn;(function(t){t.Encode="encode",t.Decode="decode",t.None="none"})(Mn||(Mn={}));var Sr;(function(t){t.Clear="clear",t.Replace="replace",t.Append="append"})(Sr||(Sr={}));function Yr(t,e){return t.map(r=>{if(r!=null)return Ft(String(r),e)}).filter(r=>r!=null)}function Ft(t,e){return(e==null?void 0:e.encoding)===Mn.Decode?decodeURIComponent(t):(e==null?void 0:e.encoding)===Mn.Encode?encodeURIComponent(t):t}const lg=Gn(hu({keys:"",values:[""],required:!0}));function cg(t,e,r){const n=(r==null?void 0:r.searchParamStrategy)===Sr.Clear?{}:Ys(t,(a,o)=>L(o,"string")?[o]:o),s=Ys(e,(a,o)=>{if((r==null?void 0:r.searchParamStrategy)===Sr.Append){const l=n[a],c=L(l,"array")?l:[l];if(o){const d=L(o,"array")?o:[o];return Yr([...c,...d],r)}else return Yr(c,r)}else return L(o,"array")?Yr(o,r):o?Yr([o],r):void 0});return ig({...n,...s},(a,o)=>!!o)}function rd(t,e){return L(t,"string")&&!t.includes("?")?{}:(L(t,"string")?t:t instanceof URL?t.search:t.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(i=>{const[a,...o]=ng(i,"=");return[a,o.length?o.join("="):void 0]}).reduce((i,[a,o])=>{const l=nd({options:e,key:a,value:o}),c=ag(i,l.key,()=>[]);return o!=null&&c.push(l.value),i},{})}function ug(t){if(t!=null)return L(t,"array")?[...t]:t===""?[]:[t]}function dg(t,e){const r=tg(Object.entries(t),([n,s])=>{const i=ug(s);return i!=null&&i.length?i.map(a=>{const o=nd({options:e,key:n,value:a});return[o.key,o.value].join("=")}):[n]},(n,[,s])=>s!=null).flat();return r.length?Be({value:r.join("&"),prefix:"?"}):""}function nd({options:t,key:e,value:r}){return{key:Ft(e,t),value:Ft(String(r),t)}}function sd({hash:t,hostname:e,password:r,pathname:n,port:s,protocol:i,search:a,username:o}){return[i?i+"://":"",o?o+":":"",r?r+"@":"",Yn({hostname:e,port:s}),zi({hash:t,pathname:n,search:a})].join("")}function id({pathname:t}){const e=Bi({value:t,prefix:"/"});return e?e.split("/"):[]}function zi({hash:t,pathname:e,search:r}){return[Be({value:e,prefix:"/"}),r?Be({value:r,prefix:"?"}):"",t?Be({value:t,prefix:"#"}):""].join("")}function Yn({hostname:t,port:e}){return[t,e?":"+e:""].join("")}function ad({hostname:t,port:e,protocol:r}){return[r,Yn({hostname:t,port:e})].filter(rg).join("://")}function xn(t,e){const r=L(t,"string")?t:t.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),s=n?Be({value:Ft(n,e),prefix:"#"}):"",i=r.replace(/#.*$/,""),a=i.replace(/^[^\?]*(?:\?|$)/,""),o=a?Be({value:Ft(a,e),prefix:"?"}):"",l=i.replace(/\?.*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),u=d.replace(/@.*/,""),f=d.replace(/^[^@]*@/,""),h=u!==f,[m,...g]=h?u.split(":").reverse():[],b=g.reverse().join("").replace(/[\/:]/g,"")||"",$=(m==null?void 0:m.replace(/[\/:]/g,""))||"",S=f.replace(/[:\/].*/,""),C=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),_=Bi({value:C.replace(/\/.*$/,""),prefix:":"}),K=Ft(C.replace(/^[^\/]*(?:\/|$)/,"/"),e),ke=Yn({hostname:S,port:_}),de=ad({hostname:S,port:_,protocol:c}),V=sd({hash:s,hostname:S,password:$,pathname:K,port:_,protocol:c,search:o,username:b}),q=rd(o),Ee=id({pathname:K});return{fullPath:zi({hash:s,pathname:K,search:o}),hash:s,host:ke,hostname:S,href:V,origin:de,password:$,pathname:K,paths:Ee,port:_,protocol:c,search:o,searchParams:q,username:b}}function fg(t,e,r){const n=L(t,"string")?t:"",s=L(t,"string")?e:t,i=L(t,"string")?r:e,a=xn(n),o=Ys(a,(f,h)=>{if(!eg(s,f))return h;const m=s[f];return L(m,"number")?String(m):L(m,"string")?f==="hash"&&m?Be({value:m,prefix:"#"}):f==="pathname"?Be({value:m,prefix:"/"}):m:h});pn(s,"paths")&&s.paths&&(o.pathname=Fi("",...s.paths));const l=L(s.search,"string")?rd(Be({value:s.search,prefix:"?"})):sg(s.search||{}),c=cg(o.searchParams,l,i),d=dg(c,i);return{...o,searchParams:c,search:d,paths:id(o),fullPath:zi(o),host:Yn(o),origin:ad(o),href:sd({...o,search:d})}}const hg=Gn({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:lg,hash:"",fullPath:"/",href:"/"});({...hg.defaultValue});const mg=Gn({basePath:Zr("",void 0),sanitizeRoute:t=>t,maxListenerCount:Zr(1,void 0),disableWarnings:Zr(void 0,!1),isPaused:Zr(!1,void 0)}),pg=0;function od(t){return!(t.type!=="click"&&t.type!=="mousedown"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==pg)}const Kn="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const gg=globalThis.history.pushState;function Mo(...t){const e=gg.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Kn)),e}const wg=globalThis.history.replaceState;function xo(...t){const e=wg.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(Kn)),e}function yg(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===Mo)throw new $o("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===xo)throw new $o("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Mo,globalThis.history.replaceState=xo,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(Kn))})}}function ks(t,e){const r=xn(t),n=$s({value:$s({value:r.pathname,prefix:td({value:e||"",prefix:"/"})}),prefix:"/"}),s=n?n.split("/"):[],i=Object.keys(r.searchParams).length?r.searchParams:void 0,a=r.hash?$s({value:r.hash,prefix:"#"}):void 0;return{paths:s,search:i,hash:a}}class bg{constructor(e){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),mu(e,mg),this.params={...e};const r=this.readCurrentRoute();this.innerObservable=new pu({defaultValue:r,equalityCheck:()=>!1}),yg(),this.removeGlobalListener=eh(globalThis,Kn,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Jp("Looping route sanitization detected; aborting window URL change listener.");const n=ks(globalThis.location.href,this.params.basePath),s=e.sanitizeRoute(n);Ne(s,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(s)):(this.sanitizationDepth++,this.setRoute(s,{replace:!0}),e.disableWarnings||console.warn("Route sanitized.",{from:n,to:s}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:Fi(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(ks(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){const r=ks(globalThis.location.href,void 0),n={...r,...e},s=this.sanitizeRoute(n),a=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(s)&&this.params.basePath?{...s,paths:[this.params.basePath,...s.paths]}:s;return fg(globalThis.location.href,{paths:a.paths,search:a.search,hash:a.hash?td({value:a.hash,prefix:"#"}):"#"},{searchParamStrategy:Sr.Clear}).href}setRoute(e,r={}){const n=this.createRouteUrl(e),{fullPath:s}=xn(n);return this.params.isPaused||!r.force&&Ne(xn(globalThis.location.href).fullPath,s)?!1:r.replace?(globalThis.history.replaceState(void 0,"",s),!0):(globalThis.history.pushState(void 0,"",s),!0)}setRouteOnDirectNavigation(e,r){return od(r)?(r.preventDefault(),this.setRoute(e)):!1}listen(e,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new Hi(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,r),()=>this.removeListener(r)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}var xe=(t=>(t.Search="search",t.Book="book",t))(xe||{});function Ks(t){return t[0]==="book"?"":t[1]?decodeURIComponent(t[1]):""}const Wt={hash:void 0,paths:["book"],search:void 0};function vg(t){return new bg({basePath:t,sanitizeRoute(e){return{paths:$g(e.paths),hash:void 0,search:void 0}}})}function $g(t){const e=t[0];if(Af(e,xe)){if(e===xe.Book)return[xe.Book,...t.slice(1)];if(e===xe.Search)return t[1]?[e,t[1]]:[xe.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return Wt.paths}const I=Tt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Sg={nav:{hover:{background:I["element-book-nav-hover-background-color"],foreground:I["element-book-nav-hover-foreground-color"]},active:{background:I["element-book-nav-active-background-color"],foreground:I["element-book-nav-active-foreground-color"]},selected:{background:I["element-book-nav-selected-background-color"],foreground:I["element-book-nav-selected-foreground-color"]}},accent:{icon:I["element-book-accent-icon-color"]},page:{background:I["element-book-page-background-color"],backgroundFaint1:I["element-book-page-background-faint-level-1-color"],backgroundFaint2:I["element-book-page-background-faint-level-2-color"],foreground:I["element-book-page-foreground-color"],foregroundFaint1:I["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:I["element-book-page-foreground-faint-level-2-color"]}};function kg(t,e){ld(t,e,Sg)}function Js(t){return In(t,"_$cssResult$")}function Ao(t){return Ql(t,["name","value","default"])&&L(t.default,"string")&&Js(t.name)&&Js(t.value)}function ld(t,e,r){Object.entries(e).forEach(([n,s])=>{const i=r[n];if(!i)throw new Error(`no nestedCssVar at key '${n}'`);if(Js(s)){if(!Ao(i))throw new Error(`got a CSS result at '${n}' but no CSS var`);cp({forCssVar:i,onElement:t,toValue:String(s)})}else{if(Ao(i))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);ld(t,s,i)}})}function B(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(a=>[a]));let n=e[0].length,s=e[0].map((a,o)=>e.map(l=>l[o])),i=t.map(a=>s.map(o=>{let l=0;if(!Array.isArray(a)){for(let c of o)l+=a*c;return l}for(let c=0;c<a.length;c++)l+=a[c]*(o[c]||0);return l}));return r===1&&(i=i[0]),n===1?i.map(a=>a[0]):i}function Vr(t){return Ye(t)==="string"}function Ye(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function An(t,{precision:e,unit:r}){return et(t)?"none":cd(t,e)+(r??"")}function et(t){return Number.isNaN(t)||t instanceof Number&&(t==null?void 0:t.none)}function Y(t){return et(t)?0:t}function cd(t,e){if(t===0)return 0;let r=~~t,n=0;r&&e&&(n=~~Math.log10(Math.abs(r))+1);const s=10**(e-n);return Math.floor(t*s+.5)/s}const Eg={deg:1,grad:.9,rad:180/Math.PI,turn:360};function ud(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,s=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let i=t.match(e);if(i){let a=[];return i[2].replace(s,(o,l)=>{let c=l.match(n),d=l;if(c){let u=c[0],f=d.slice(0,-u.length);u==="%"?(d=new Number(f/100),d.type="<percentage>"):(d=new Number(f*Eg[u]),d.type="<angle>",d.unit=u)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);o.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),a.push(d)}),{name:i[1].toLowerCase(),rawName:i[1],rawArgs:i[2],args:a}}}function dd(t){return t[t.length-1]}function kr(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function fd(t,e,r){return(r-t)/(e-t)}function Ui(t,e,r){return kr(e[0],e[1],fd(t[0],t[1],r))}function hd(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let s=new String(n[1]);return s.range=[+n[2],+n[3]],s}return r}))}function md(t,e,r){return Math.max(Math.min(r,e),t)}function Jn(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function Oe(t,e){return Jn(Math.abs(t)**e,t)}function Wi(t,e){return e===0?0:t/e}function pd(t,e,r=0,n=t.length){for(;r<n;){const s=r+n>>1;t[s]<e?r=s+1:n=s}return r}var Tg=Object.freeze({__proto__:null,bisectLeft:pd,clamp:md,copySign:Jn,interpolate:kr,interpolateInv:fd,isNone:et,isString:Vr,last:dd,mapRange:Ui,multiplyMatrices:B,parseCoordGrammar:hd,parseFunction:ud,serializeNumber:An,skipNone:Y,spow:Oe,toPrecision:cd,type:Ye,zdiv:Wi});class Mg{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(s){this[s]=this[s]||[],r&&this[s][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const tt=new Mg;var Kl,Jl,Xl,ge={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((Xl=(Jl=(Kl=globalThis==null?void 0:globalThis.process)==null?void 0:Kl.env)==null?void 0:Jl.NODE_ENV)==null?void 0:Xl.toLowerCase())!=="test",warn:function(e){var r,n;this.verbose&&((n=(r=globalThis==null?void 0:globalThis.console)==null?void 0:r.warn)==null||n.call(r,e))}};const ie={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Xs(t){return Array.isArray(t)?t:ie[t]}function Cn(t,e,r,n={}){if(t=Xs(t),e=Xs(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let s={W1:t,W2:e,XYZ:r,options:n};if(tt.run("chromatic-adaptation-start",s),s.M||(s.W1===ie.D65&&s.W2===ie.D50?s.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:s.W1===ie.D50&&s.W2===ie.D65&&(s.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),tt.run("chromatic-adaptation-end",s),s.M)return B(s.M,s.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const xg=new Set(["<number>","<percentage>","<angle>"]);function Co(t,e,r,n){return Object.entries(t.coords).map(([i,a],o)=>{let l=e.coordGrammar[o],c=n[o],d=c==null?void 0:c.type,u;if(c.none?u=l.find(m=>xg.has(m)):u=l.find(m=>m==d),!u){let m=a.name||i;throw new TypeError(`${d??c.raw} not allowed for ${m} in ${r}()`)}let f=u.range;d==="<percentage>"&&(f||(f=[0,1]));let h=a.range||a.refRange;return f&&h&&(n[o]=Ui(f,h,n[o])),u})}function gd(t,{meta:e}={}){var n,s,i,a;let r={str:(n=String(t))==null?void 0:n.trim()};if(tt.run("parse-start",r),r.color)return r.color;if(r.parsed=ud(r.str),r.parsed){let o=r.parsed.name;if(o==="color"){let l=r.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,d=[l,c],u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of v.all){let g=m.getFormat("color");if(g&&(d.includes(g.id)||(s=g.ids)!=null&&s.filter(b=>d.includes(b)).length)){const b=Object.keys(m.coords).map((S,C)=>r.parsed.args[C]||0);let $;return g.coordGrammar&&($=Co(m,g,"color",b)),e&&Object.assign(e,{formatId:"color",types:$}),g.id.startsWith("--")&&!l.startsWith("--")&&ge.warn(`${m.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${g.id}) instead of color(${l}).`),l.startsWith("--")&&!g.id.startsWith("--")&&ge.warn(`${m.name} is a standard space and supported in the CSS spec. Use color(${g.id}) instead of prefixed color(${l}).`),{spaceId:m.id,coords:b,alpha:u}}}let f="",h=l in v.registry?l:c;if(h in v.registry){let m=(a=(i=v.registry[h].formats)==null?void 0:i.color)==null?void 0:a.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${l}). `+(f||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(o);if(c&&c.type==="function"){let d=1;(c.lastAlpha||dd(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let u=r.parsed.args,f;return c.coordGrammar&&(f=Co(l,c,o,u)),e&&Object.assign(e,{formatId:c.name,types:f}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let o of v.all)for(let l in o.formats){let c=o.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let d=c.parse(r.str);if(d)return d.alpha??(d.alpha=1),e&&(e.formatId=l),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function A(t){if(Array.isArray(t))return t.map(A);if(!t)throw new TypeError("Empty color reference");Vr(t)&&(t=gd(t));let e=t.space||t.spaceId;return e instanceof v||(t.space=v.get(e)),t.alpha===void 0&&(t.alpha=1),t}const Ag=75e-6,oe=class oe{constructor(e){var s;this.id=e.id,this.name=e.name,this.base=e.base?oe.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let i in r)"name"in r[i]||(r[i].name=i);this.coords=r;let n=e.white??this.base.white??"D65";this.white=Xs(n),this.formats=e.formats??{};for(let i in this.formats){let a=this.formats[i];a.type||(a.type="function"),a.name||(a.name=i)}(s=this.formats.color)!=null&&s.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:oe.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(i,a)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:Cg(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),tt.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Ag}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((s,i)=>{let a=n[i];if(a.type!=="angle"&&a.range){if(Number.isNaN(s))return!0;let[o,l]=a.range;return(o===void 0||s>=o-r)&&(l===void 0||s<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,r;return((r=(e=this.formats)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=Lo(e,this),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=Lo(r,this),r):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,r){if(arguments.length===1){const o=A(e);[e,r]=[o.space,o.coords]}if(e=oe.get(e),this.equals(e))return r;r=r.map(o=>Number.isNaN(o)?0:o);let n=this.path,s=e.path,i,a;for(let o=0;o<n.length&&n[o].equals(s[o]);o++)i=n[o],a=o;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let o=n.length-1;o>a;o--)r=n[o].toBase(r);for(let o=a+1;o<s.length;o++)r=s[o].fromBase(r);return r}from(e,r){if(arguments.length===1){const n=A(e);[e,r]=[n.space,n.coords]}return e=oe.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],s=n.range||n.refRange;e.push((s==null?void 0:s.min)??0)}return e}static get all(){return[...new Set(Object.values(oe.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof oe)return e;if(Ye(e)==="string"){let s=oe.registry[e.toLowerCase()];if(!s)throw new TypeError(`No color space found with id = "${e}"`);return s}if(r.length)return oe.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=Ye(e),s,i;if(n==="string"?e.includes(".")?[s,i]=e.split("."):[s,i]=[,e]:Array.isArray(e)?[s,i]=e:(s=e.space,i=e.coordId),s=oe.get(s),s||(s=r),!s)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=Ye(i),n==="number"||n==="string"&&i>=0){let c=Object.entries(s.coords)[i];if(c)return{space:s,id:c[0],index:i,...c[1]}}s=oe.get(s);let a=i.toLowerCase(),o=0;for(let c in s.coords){let d=s.coords[c];if(c.toLowerCase()===a||((l=d.name)==null?void 0:l.toLowerCase())===a)return{space:s,id:c,index:o,...d};o++}throw new TypeError(`No "${i}" coordinate found in ${s.name}. Its coordinates are: ${Object.keys(s.coords).join(", ")}`)}};E(oe,"registry",{}),E(oe,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=oe;function Cg(t){let e=[t];for(let r=t;r=r.base;)e.push(r);return e}function Lo(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=hd(t.coords);let r=Object.entries(e).map(([n,s],i)=>{let a=t.coordGrammar[i][0],o=s.range||s.refRange,l=a.range,c="";return a=="<percentage>"?(l=[0,100],c="%"):a=="<angle>"&&(c="deg"),{fromRange:o,toRange:l,suffix:c}});t.serializeCoords=(n,s)=>n.map((i,a)=>{let{fromRange:o,toRange:l,suffix:c}=r[a];return o&&l&&(i=Ui(o,l,i)),i=An(i,{precision:s,unit:c}),i})}return t}var te=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ce extends v{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=te),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=B(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Cn(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Cn(this.base.white,this.white,r),B(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function Dr(t,e){return t=A(t),!e||t.space.equals(e)?t.coords.slice():(e=v.get(e),e.from(t))}function he(t,e){t=A(t);let{space:r,index:n}=v.resolveCoord(e,t.space);return Dr(t,r)[n]}function ji(t,e,r){return t=A(t),e=v.get(e),t.coords=e.to(t.space,r),t}ji.returns="color";function ze(t,e,r){if(t=A(t),arguments.length===2&&Ye(arguments[1])==="object"){let n=arguments[1];for(let s in n)ze(t,s,n[s])}else{typeof r=="function"&&(r=r(he(t,e)));let{space:n,index:s}=v.resolveCoord(e,t.space),i=Dr(t,n);i[s]=r,ji(t,n,i)}return t}ze.returns="color";var Gi=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:te,fromBase:t=>Cn(te.white,"D50",t),toBase:t=>Cn("D50",te.white,t)});const Lg=216/24389,No=24/116,Kr=24389/27;let Es=ie.D50;var me=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Es,base:Gi,fromBase(t){let r=t.map((n,s)=>n/Es[s]).map(n=>n>Lg?Math.cbrt(n):(Kr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>No?Math.pow(e[0],3):(116*e[0]-16)/Kr,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Kr,e[2]>No?Math.pow(e[2],3):(116*e[2]-16)/Kr].map((n,s)=>n*Es[s])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Pe(t){return(t%360+360)%360}function Ng(t,e){if(t==="raw")return e;let[r,n]=e.map(Pe),s=n-r;return t==="increasing"?s<0&&(n+=360):t==="decreasing"?s>0&&(r+=360):t==="longer"?-180<s&&s<180&&(s>0?r+=360:n+=360):t==="shorter"&&(s>180?r+=360:s<-180&&(n+=360)),[r,n]}var Er=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:me,fromBase(t){let[e,r,n]=t,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Pe(s)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const Oo=25**7,Ln=Math.PI,Po=180/Ln,Lt=Ln/180;function Io(t){const e=t*t;return e*e*e*t}function wd(t,e,{kL:r=1,kC:n=1,kH:s=1}={}){[t,e]=A([t,e]);let[i,a,o]=me.from(t),l=Er.from(me,[i,a,o])[1],[c,d,u]=me.from(e),f=Er.from(me,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let h=(l+f)/2,m=Io(h),g=.5*(1-Math.sqrt(m/(m+Oo))),b=(1+g)*a,$=(1+g)*d,S=Math.sqrt(b**2+o**2),C=Math.sqrt($**2+u**2),_=b===0&&o===0?0:Math.atan2(o,b),K=$===0&&u===0?0:Math.atan2(u,$);_<0&&(_+=2*Ln),K<0&&(K+=2*Ln),_*=Po,K*=Po;let ke=c-i,de=C-S,V=K-_,q=_+K,Ee=Math.abs(V),ot;S*C===0?ot=0:Ee<=180?ot=V:V>180?ot=V-360:V<-180?ot=V+360:ge.warn("the unthinkable has happened");let Xi=2*Math.sqrt(C*S)*Math.sin(ot*Lt/2),of=(i+c)/2,ts=(S+C)/2,Qi=Io(ts),Ie;S*C===0?Ie=q:Ee<=180?Ie=q/2:q<360?Ie=(q+360)/2:Ie=(q-360)/2;let ea=(of-50)**2,lf=1+.015*ea/Math.sqrt(20+ea),ta=1+.045*ts,rr=1;rr-=.17*Math.cos((Ie-30)*Lt),rr+=.24*Math.cos(2*Ie*Lt),rr+=.32*Math.cos((3*Ie+6)*Lt),rr-=.2*Math.cos((4*Ie-63)*Lt);let ra=1+.015*ts*rr,cf=30*Math.exp(-1*((Ie-275)/25)**2),uf=2*Math.sqrt(Qi/(Qi+Oo)),df=-1*Math.sin(2*cf*Lt)*uf,Br=(ke/(r*lf))**2;return Br+=(de/(n*ta))**2,Br+=(Xi/(s*ra))**2,Br+=df*(de/(n*ta))*(Xi/(s*ra)),Math.sqrt(Br)}const Og=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Pg=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Ig=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],_g=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var jt=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:te,fromBase(t){let r=B(Og,t).map(n=>Math.cbrt(n));return B(Ig,r)},toBase(t){let r=B(_g,t).map(n=>n**3);return B(Pg,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Qs(t,e){[t,e]=A([t,e]);let[r,n,s]=jt.from(t),[i,a,o]=jt.from(e),l=r-i,c=n-a,d=s-o;return Math.sqrt(l**2+c**2+d**2)}const Rg=75e-6;function yt(t,e,{epsilon:r=Rg}={}){t=A(t),e||(e=t.space),e=v.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function Gt(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function yd(t,e,r="lab"){r=v.get(r);let n=r.from(t),s=r.from(e);return Math.sqrt(n.reduce((i,a,o)=>{let l=s[o];return isNaN(a)||isNaN(l)?i:i+(l-a)**2},0))}function Vg(t,e){return yd(t,e,"lab")}const Dg=Math.PI,_o=Dg/180;function Hg(t,e,{l:r=2,c:n=1}={}){[t,e]=A([t,e]);let[s,i,a]=me.from(t),[,o,l]=Er.from(me,[s,i,a]),[c,d,u]=me.from(e),f=Er.from(me,[c,d,u])[1];o<0&&(o=0),f<0&&(f=0);let h=s-c,m=o-f,g=i-d,b=a-u,$=g**2+b**2-m**2,S=.511;s>=16&&(S=.040975*s/(1+.01765*s));let C=.0638*o/(1+.0131*o)+.638,_;Number.isNaN(l)&&(l=0),l>=164&&l<=345?_=.56+Math.abs(.2*Math.cos((l+168)*_o)):_=.36+Math.abs(.4*Math.cos((l+35)*_o));let K=Math.pow(o,4),ke=Math.sqrt(K/(K+1900)),de=C*(ke*_+1-ke),V=(h/(r*S))**2;return V+=(m/(n*C))**2,V+=$/de**2,Math.sqrt(V)}const Ro=203;var qi=new v({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:te,fromBase(t){return t.map(e=>Math.max(e*Ro,0))},toBase(t){return t.map(e=>Math.max(e/Ro,0))}});const Jr=1.15,Xr=.66,Vo=2610/2**14,Bg=2**14/2610,Do=3424/2**12,Ho=2413/2**7,Bo=2392/2**7,Fg=1.7*2523/2**5,Fo=2**5/(1.7*2523),Qr=-.56,Ts=16295499532821565e-27,zg=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Ug=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Wg=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],jg=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var bd=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:qi,fromBase(t){let[e,r,n]=t,s=Jr*e-(Jr-1)*n,i=Xr*r-(Xr-1)*e,o=B(zg,[s,i,n]).map(function(f){let h=Do+Ho*(f/1e4)**Vo,m=1+Bo*(f/1e4)**Vo;return(h/m)**Fg}),[l,c,d]=B(Wg,o);return[(1+Qr)*l/(1+Qr*l)-Ts,c,d]},toBase(t){let[e,r,n]=t,s=(e+Ts)/(1+Qr-Qr*(e+Ts)),a=B(jg,[s,r,n]).map(function(f){let h=Do-f**Fo,m=Bo*f**Fo-Ho;return 1e4*(h/m)**Bg}),[o,l,c]=B(Ug,a),d=(o+(Jr-1)*c)/Jr,u=(l+(Xr-1)*d)/Xr;return[d,u,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ei=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:bd,fromBase(t){let[e,r,n]=t,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Pe(s)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function Gg(t,e){[t,e]=A([t,e]);let[r,n,s]=ei.from(t),[i,a,o]=ei.from(e),l=r-i,c=n-a;Number.isNaN(s)&&Number.isNaN(o)?(s=0,o=0):Number.isNaN(s)?s=o:Number.isNaN(o)&&(o=s);let d=s-o,u=2*Math.sqrt(n*a)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const vd=3424/4096,$d=2413/128,Sd=2392/128,zo=2610/16384,qg=2523/32,Zg=16384/2610,Uo=32/2523,Yg=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],Kg=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Jg=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],Xg=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var ti=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:qi,fromBase(t){let e=B(Yg,t);return Qg(e)},toBase(t){let e=e1(t);return B(Xg,e)}});function Qg(t){let e=t.map(function(r){let n=vd+$d*(r/1e4)**zo,s=1+Sd*(r/1e4)**zo;return(n/s)**qg});return B(Kg,e)}function e1(t){return B(Jg,t).map(function(n){let s=Math.max(n**Uo-vd,0),i=$d-Sd*n**Uo;return 1e4*(s/i)**Zg})}function t1(t,e){[t,e]=A([t,e]);let[r,n,s]=ti.from(t),[i,a,o]=ti.from(e);return 720*Math.sqrt((r-i)**2+.25*(n-a)**2+(s-o)**2)}const r1=ie.D65,kd=.42,Wo=1/kd,Ms=2*Math.PI,Ed=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],n1=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],s1=[[460,451,288],[460,-891,-261],[460,-220,-6300]],i1={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},ft={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},a1=180/Math.PI,jo=Math.PI/180;function Td(t,e){return t.map(n=>{const s=Oe(e*Math.abs(n)*.01,kd);return 400*Jn(s,n)/(s+27.13)})}function o1(t,e){const r=100/e*27.13**Wo;return t.map(n=>{const s=Math.abs(n);return Jn(r*Oe(s/(400-s),Wo),n)})}function l1(t){let e=Pe(t);e<=ft.h[0]&&(e+=360);const r=pd(ft.h,e)-1,[n,s]=ft.h.slice(r,r+2),[i,a]=ft.e.slice(r,r+2),o=ft.H[r],l=(e-n)/i;return o+100*l/(l+(s-e)/a)}function c1(t){let e=(t%400+400)%400;const r=Math.floor(.01*e);e=e%100;const[n,s]=ft.h.slice(r,r+2),[i,a]=ft.e.slice(r,r+2);return Pe((e*(a*n-i*s)-100*n*a)/(e*(a-i)-100*a))}function Md(t,e,r,n,s){const i={};i.discounting=s,i.refWhite=t,i.surround=n;const a=t.map(g=>g*100);i.la=e,i.yb=r;const o=a[1],l=B(Ed,a);n=i1[i.surround];const c=n[0];i.c=n[1],i.nc=n[2];const u=(1/(5*i.la+1))**4;i.fl=u*i.la+.1*(1-u)*(1-u)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/o,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const f=s?1:Math.max(Math.min(c*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=l.map(g=>kr(1,o/g,f)),i.dRgbInv=i.dRgb.map(g=>1/g);const h=l.map((g,b)=>g*i.dRgb[b]),m=Td(h,i.fl);return i.aW=i.nbb*(2*m[0]+m[1]+.05*m[2]),i}const Go=Md(r1,64/Math.PI*.2,20,"average",!1);function ri(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let r=0;t.h!==void 0?r=Pe(t.h)*jo:r=c1(t.H)*jo;const n=Math.cos(r),s=Math.sin(r);let i=0;t.J!==void 0?i=Oe(t.J,1/2)*.1:t.Q!==void 0&&(i=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let a=0;t.C!==void 0?a=t.C/i:t.M!==void 0?a=t.M/e.flRoot/i:t.s!==void 0&&(a=4e-4*t.s**2*(e.aW+4)/e.c);const o=Oe(a*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=e.aW*Oe(i,2/e.c/e.z),d=5e4/13*e.nc*e.ncb*l,u=c/e.nbb,f=23*(u+.305)*Wi(o,23*d+o*(11*n+108*s)),h=f*n,m=f*s,g=o1(B(s1,[u,h,m]).map(b=>b*1/1403),e.fl);return B(n1,g.map((b,$)=>b*e.dRgbInv[$])).map(b=>b/100)}function xd(t,e){const r=t.map(C=>C*100),n=Td(B(Ed,r).map((C,_)=>C*e.dRgb[_]),e.fl),s=n[0]+(-12*n[1]+n[2])/11,i=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(i,s)%Ms+Ms)%Ms,o=.25*(Math.cos(a+2)+3.8),l=5e4/13*e.nc*e.ncb*Wi(o*Math.sqrt(s**2+i**2),n[0]+n[1]+1.05*n[2]+.305),c=Oe(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),d=e.nbb*(2*n[0]+n[1]+.05*n[2]),u=Oe(d/e.aW,.5*e.c*e.z),f=100*Oe(u,2),h=4/e.c*u*(e.aW+4)*e.flRoot,m=c*u,g=m*e.flRoot,b=Pe(a*a1),$=l1(b),S=50*Oe(e.c*c/(e.aW+4),1/2);return{J:f,C:m,h:b,s:S,Q:h,M:g,H:$}}var u1=new v({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:te,fromBase(t){const e=xd(t,Go);return[e.J,e.M,e.h]},toBase(t){return ri({J:t[0],M:t[1],h:t[2]},Go)}});const d1=ie.D65,f1=216/24389,Ad=24389/27;function h1(t){return 116*(t>f1?Math.cbrt(t):(Ad*t+16)/116)-16}function ni(t){return t>8?Math.pow((t+16)/116,3):t/Ad}function m1(t,e){let[r,n,s]=t,i=[],a=0;if(s===0)return[0,0,0];let o=ni(s);s>0?a=.00379058511492914*s**2+.608983189401032*s+.9155088574762233:a=9514440756550361e-21*s**2+.08693057439788597*s-21.928975842194614;const l=2e-12,c=15;let d=0,u=1/0;for(;d<=c;){i=ri({J:a,C:n,h:r},e);const f=Math.abs(i[1]-o);if(f<u){if(f<=l)return i;u=f}a=a-(i[1]-o)*a/(2*i[1]),d+=1}return ri({J:a,C:n,h:r},e)}function p1(t,e){const r=h1(t[1]);if(r===0)return[0,0,0];const n=xd(t,Zi);return[Pe(n.h),n.C,r]}const Zi=Md(d1,200/Math.PI*ni(50),ni(50)*100,"average",!1);var Tr=new v({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:te,fromBase(t){return p1(t)},toBase(t){return m1(t,Zi)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const g1=Math.PI/180,qo=[1,.007,.0228];function Zo(t){t[1]<0&&(t=Tr.fromBase(Tr.toBase(t)));const e=Math.log(Math.max(1+qo[2]*t[1]*Zi.flRoot,1))/qo[2],r=t[0]*g1,n=e*Math.cos(r),s=e*Math.sin(r);return[t[2],n,s]}function w1(t,e){[t,e]=A([t,e]);let[r,n,s]=Zo(Tr.from(t)),[i,a,o]=Zo(Tr.from(e));return Math.sqrt((r-i)**2+(n-a)**2+(s-o)**2)}var qt={deltaE76:Vg,deltaECMC:Hg,deltaE2000:wd,deltaEJz:Gg,deltaEITP:t1,deltaEOK:Qs,deltaEHCT:w1};function y1(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const Yo={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function rt(t,{method:e=ge.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:s=2,blackWhiteClamp:i={}}={}){if(t=A(t),Vr(arguments[1])?r=arguments[1]:r||(r=t.space),r=v.get(r),yt(t,r,{epsilon:0}))return t;let a;if(e==="css")a=b1(t,{space:r});else{if(e!=="clip"&&!yt(t,r)){Object.prototype.hasOwnProperty.call(Yo,e)&&({method:e,jnd:s,deltaEMethod:n,blackWhiteClamp:i}=Yo[e]);let o=wd;if(n!==""){for(let c in qt)if("deltae"+n.toLowerCase()===c.toLowerCase()){o=qt[c];break}}let l=rt(H(t,r),{method:"clip",space:r});if(o(t,l)>s){if(Object.keys(i).length===3){let S=v.resolveCoord(i.channel),C=he(H(t,S.space),S.id);if(et(C)&&(C=0),C>=i.max)return H({space:"xyz-d65",coords:ie.D65},t.space);if(C<=i.min)return H({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=v.resolveCoord(e),d=c.space,u=c.id,f=H(t,d);f.coords.forEach((S,C)=>{et(S)&&(f.coords[C]=0)});let m=(c.range||c.refRange)[0],g=y1(s),b=m,$=he(f,u);for(;$-b>g;){let S=Gt(f);S=rt(S,{space:r,method:"clip"}),o(f,S)-s<g?b=he(f,u):$=he(f,u),ze(f,u,(b+$)/2)}a=H(f,r)}else a=l}else a=H(t,r);if(e==="clip"||!yt(a,r,{epsilon:0})){let o=Object.values(r.coords).map(l=>l.range||[]);a.coords=a.coords.map((l,c)=>{let[d,u]=o[c];return d!==void 0&&(l=Math.max(d,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return r!==t.space&&(a=H(a,t.space)),t.coords=a.coords,t}rt.returns="color";const Ko={WHITE:{space:jt,coords:[1,0,0]},BLACK:{space:jt,coords:[0,0,0]}};function b1(t,{space:e}={}){t=A(t),e||(e=t.space),e=v.get(e);const s=v.get("oklch");if(e.isUnbounded)return H(t,e);const i=H(t,s);let a=i.coords[0];if(a>=1){const m=H(Ko.WHITE,e);return m.alpha=t.alpha,H(m,e)}if(a<=0){const m=H(Ko.BLACK,e);return m.alpha=t.alpha,H(m,e)}if(yt(i,e,{epsilon:0}))return H(i,e);function o(m){const g=H(m,e),b=Object.values(e.coords);return g.coords=g.coords.map(($,S)=>{if("range"in b[S]){const[C,_]=b[S].range;return md(C,$,_)}return $}),g}let l=0,c=i.coords[1],d=!0,u=Gt(i),f=o(u),h=Qs(f,u);if(h<.02)return f;for(;c-l>1e-4;){const m=(l+c)/2;if(u.coords[1]=m,d&&yt(u,e,{epsilon:0}))l=m;else if(f=o(u),h=Qs(f,u),h<.02){if(.02-h<1e-4)break;d=!1,l=m}else c=m}return f}function H(t,e,{inGamut:r}={}){t=A(t),e=v.get(e);let n=e.from(t),s={space:e,coords:n,alpha:t.alpha};return r&&(s=rt(s,r===!0?void 0:r)),s}H.returns="color";function gr(t,{precision:e=ge.precision,format:r="default",inGamut:n=!0,...s}={}){var l;let i;t=A(t);let a=r;r=t.space.getFormat(r)??t.space.getFormat("default")??v.DEFAULT_FORMAT;let o=t.coords.slice();if(n||(n=r.toGamut),n&&!yt(t)&&(o=rt(Gt(t),n===!0?void 0:n).coords),r.type==="custom")if(s.precision=e,r.serialize)i=r.serialize(o,t.alpha,s);else throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?o=r.serializeCoords(o,e):e!==null&&(o=o.map(h=>An(h,{precision:e})));let d=[...o];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(h)}let u=t.alpha;e!==null&&(u=An(u,{precision:e}));let f=t.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${u}`;i=`${c}(${d.join(r.commas?", ":" ")}${f})`}return i}const v1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],$1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Xn=new ce({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:v1,fromXYZ_M:$1});const en=1.09929682680944,Jo=.018053968510807;var Cd=new ce({id:"rec2020",name:"REC.2020",base:Xn,toBase(t){return t.map(function(e){return e<Jo*4.5?e/4.5:Math.pow((e+en-1)/en,1/.45)})},fromBase(t){return t.map(function(e){return e>=Jo?en*Math.pow(e,.45)-(en-1):4.5*e})}});const S1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],k1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var Ld=new ce({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:S1,fromXYZ_M:k1});const E1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Q=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var Nd=new ce({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:E1,fromXYZ_M:Q}),Xo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Qo=Array(3).fill("<percentage> | <number>[0, 255]"),el=Array(3).fill("<number>[0, 255]");var Zt=new ce({id:"srgb",name:"sRGB",base:Nd,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<=.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Qo},rgb_number:{name:"rgb",commas:!0,coords:el,noAlpha:!0},color:{},rgba:{coords:Qo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:el},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(i=>Math.round(i*255));let n=r&&t.every(i=>i%17===0);return"#"+t.map(i=>n?(i/17).toString(16):i.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=Xo.black,e.alpha=0):e.coords=Xo[t],e.coords)return e}}}}),Od=new ce({id:"p3",cssId:"display-p3",name:"P3",base:Ld,fromBase:Zt.fromBase,toBase:Zt.toBase});ge.display_space=Zt;let T1;if(typeof CSS<"u"&&CSS.supports)for(let t of[me,Cd,Od]){let e=t.getMinCoords(),n=gr({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){ge.display_space=t;break}}function M1(t,{space:e=ge.display_space,...r}={}){let n=gr(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!ge.display_space)n=new String(n),n.color=t;else{let s=t;if((t.coords.some(et)||et(t.alpha))&&!(T1??(T1=CSS.supports("color","hsl(none 50% 50%)")))&&(s=Gt(t),s.coords=s.coords.map(Y),s.alpha=Y(s.alpha),n=gr(s,r),CSS.supports("color",n)))return n=new String(n),n.color=s,n;s=H(s,e),n=new String(gr(s,r)),n.color=s}return n}function x1(t,e){return t=A(t),e=A(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function nt(t){return he(t,[te,"y"])}function Pd(t,e){ze(t,[te,"y"],e)}function A1(t){Object.defineProperty(t.prototype,"luminance",{get(){return nt(this)},set(e){Pd(this,e)}})}var C1=Object.freeze({__proto__:null,getLuminance:nt,register:A1,setLuminance:Pd});function L1(t,e){t=A(t),e=A(e);let r=Math.max(nt(t),0),n=Math.max(nt(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const N1=.56,O1=.57,P1=.62,I1=.65,tl=.022,_1=1.414,R1=.1,V1=5e-4,D1=1.14,rl=.027,H1=1.14;function nl(t){return t>=tl?t:t+(tl-t)**_1}function Nt(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function B1(t,e){e=A(e),t=A(t);let r,n,s,i,a,o;e=H(e,"srgb"),[i,a,o]=e.coords;let l=Nt(i)*.2126729+Nt(a)*.7151522+Nt(o)*.072175;t=H(t,"srgb"),[i,a,o]=t.coords;let c=Nt(i)*.2126729+Nt(a)*.7151522+Nt(o)*.072175,d=nl(l),u=nl(c),f=u>d;return Math.abs(u-d)<V1?n=0:f?(r=u**N1-d**O1,n=r*D1):(r=u**I1-d**P1,n=r*H1),Math.abs(n)<R1?s=0:n>0?s=n-rl:s=n+rl,s*100}function F1(t,e){t=A(t),e=A(e);let r=Math.max(nt(t),0),n=Math.max(nt(e),0);n>r&&([r,n]=[n,r]);let s=r+n;return s===0?0:(r-n)/s}const z1=5e4;function U1(t,e){t=A(t),e=A(e);let r=Math.max(nt(t),0),n=Math.max(nt(e),0);return n>r&&([r,n]=[n,r]),n===0?z1:(r-n)/n}function W1(t,e){t=A(t),e=A(e);let r=he(t,[me,"l"]),n=he(e,[me,"l"]);return Math.abs(r-n)}const j1=216/24389,sl=24/116,tn=24389/27;let xs=ie.D65;var si=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:xs,base:te,fromBase(t){let r=t.map((n,s)=>n/xs[s]).map(n=>n>j1?Math.cbrt(n):(tn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>sl?Math.pow(e[0],3):(116*e[0]-16)/tn,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/tn,e[2]>sl?Math.pow(e[2],3):(116*e[2]-16)/tn].map((n,s)=>n*xs[s])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const As=Math.pow(5,.5)*.5+.5;function G1(t,e){t=A(t),e=A(e);let r=he(t,[si,"l"]),n=he(e,[si,"l"]),s=Math.abs(Math.pow(r,As)-Math.pow(n,As)),i=Math.pow(s,1/As)*Math.SQRT2-40;return i<7.5?0:i}var hn=Object.freeze({__proto__:null,contrastAPCA:B1,contrastDeltaPhi:G1,contrastLstar:W1,contrastMichelson:F1,contrastWCAG21:L1,contrastWeber:U1});function q1(t,e,r={}){Vr(r)&&(r={algorithm:r});let{algorithm:n,...s}=r;if(!n){let i=Object.keys(hn).map(a=>a.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${i}`)}t=A(t),e=A(e);for(let i in hn)if("contrast"+n.toLowerCase()===i.toLowerCase())return hn[i](t,e,s);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Qn(t){let[e,r,n]=Dr(t,te),s=e+15*r+3*n;return[4*e/s,9*r/s]}function Id(t){let[e,r,n]=Dr(t,te),s=e+r+n;return[e/s,r/s]}function Z1(t){Object.defineProperty(t.prototype,"uv",{get(){return Qn(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return Id(this)}})}var Y1=Object.freeze({__proto__:null,register:Z1,uv:Qn,xy:Id});function ur(t,e,r={}){Vr(r)&&(r={method:r});let{method:n=ge.deltaE,...s}=r;for(let i in qt)if("deltae"+n.toLowerCase()===i.toLowerCase())return qt[i](t,e,s);throw new TypeError(`Unknown deltaE method: ${n}`)}function K1(t,e=.25){let n=[v.get("oklch","lch"),"l"];return ze(t,n,s=>s*(1+e))}function J1(t,e=.25){let n=[v.get("oklch","lch"),"l"];return ze(t,n,s=>s*(1-e))}var X1=Object.freeze({__proto__:null,darken:J1,lighten:K1});function _d(t,e,r=.5,n={}){return[t,e]=[A(t),A(e)],Ye(r)==="object"&&([r,n]=[.5,r]),Hr(t,e,n)(r)}function Rd(t,e,r={}){let n;Yi(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:s,deltaEMethod:i,steps:a=2,maxSteps:o=1e3,...l}=r;n||([t,e]=[A(t),A(e)],n=Hr(t,e,l));let c=ur(t,e),d=s>0?Math.max(a,Math.ceil(c/s)+1):a,u=[];if(o!==void 0&&(d=Math.min(d,o)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(s>0){let f=u.reduce((h,m,g)=>{if(g===0)return 0;let b=ur(m.color,u[g-1].color,i);return Math.max(h,b)},0);for(;f>s;){f=0;for(let h=1;h<u.length&&u.length<o;h++){let m=u[h-1],g=u[h],b=(g.p+m.p)/2,$=n(b);f=Math.max(f,ur($,m.color),ur($,g.color)),u.splice(h,0,{p:b,color:n(b)}),h++}}}return u=u.map(f=>f.color),u}function Hr(t,e,r={}){if(Yi(t)){let[l,c]=[t,e];return Hr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:s,progression:i,premultiplied:a}=r;t=A(t),e=A(e),t=Gt(t),e=Gt(e);let o={colors:[t,e],options:r};if(n?n=v.get(n):n=v.registry[ge.interpolationSpace]||t.space,s=s?v.get(s):n,t=H(t,n),e=H(e,n),t=rt(t),e=rt(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[he(t,c),he(e,c)];isNaN(d)&&!isNaN(u)?d=u:isNaN(u)&&!isNaN(d)&&(u=d),[d,u]=Ng(l,[d,u]),ze(t,c,d),ze(e,c,u)}return a&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=i?i(l):l;let c=t.coords.map((f,h)=>{let m=e.coords[h];return kr(f,m,l)}),d=kr(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return a&&(u.coords=u.coords.map(f=>f/d)),s!==n&&(u=H(u,s)),u},{rangeArgs:o})}function Yi(t){return Ye(t)==="function"&&!!t.rangeArgs}ge.interpolationSpace="lab";function Q1(t){t.defineFunction("mix",_d,{returns:"color"}),t.defineFunction("range",Hr,{returns:"function<color>"}),t.defineFunction("steps",Rd,{returns:"array<color>"})}var ew=Object.freeze({__proto__:null,isRange:Yi,mix:_d,range:Hr,register:Q1,steps:Rd}),Vd=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Zt,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,s,i]=t,[a,o,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(o=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:a=(s-i)/c+(s<i?6:0);break;case s:a=(i-n)/c+2;break;case i:a=(n-s)/c+4}a=a*60}return o<0&&(a+=180,o=Math.abs(o)),a>=360&&(a-=360),[a,o*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function s(i){let a=(i+e/30)%12,o=r*Math.min(n,1-n);return n-o*Math.max(-1,Math.min(a-3,9-a,1))}return[s(0),s(8),s(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Dd=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Vd,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let s=n+r*Math.min(n,1-n);return[e,s===0?0:200*(1-n/s),100*s]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let s=n*(1-r/2);return[e,s===0||s===1?0:(n-s)/Math.min(s,1-s)*100,s*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),tw=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Dd,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let s=r+n;if(s>=1){let o=r/s;return[e,0,o*100]}let i=1-n,a=i===0?0:1-r/i;return[e,a*100,i*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const rw=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],nw=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var Hd=new ce({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:rw,fromXYZ_M:nw}),sw=new ce({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:Hd,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const iw=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],aw=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Bd=new ce({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Gi,toXYZ_M:iw,fromXYZ_M:aw});const ow=1/512,lw=16/512;var cw=new ce({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Bd,toBase(t){return t.map(e=>e<lw?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=ow?e**(1/1.8):16*e)}}),uw=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:jt,fromBase(t){let[e,r,n]=t,s;const i=2e-4;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Pe(s)]},toBase(t){let[e,r,n]=t,s,i;return isNaN(n)?(s=0,i=0):(s=r*Math.cos(n*Math.PI/180),i=r*Math.sin(n*Math.PI/180)),[e,s,i]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let Fd=ie.D65;const dw=216/24389,il=24389/27,[al,ol]=Qn({space:te,coords:Fd});var zd=new v({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Fd,base:te,fromBase(t){let e=[Y(t[0]),Y(t[1]),Y(t[2])],r=e[1],[n,s]=Qn({space:te,coords:e});if(!Number.isFinite(n)||!Number.isFinite(s))return[0,0,0];let i=r<=dw?il*r:116*Math.cbrt(r)-16;return[i,13*i*(n-al),13*i*(s-ol)]},toBase(t){let[e,r,n]=t;if(e===0||et(e))return[0,0,0];r=Y(r),n=Y(n);let s=r/(13*e)+al,i=n/(13*e)+ol,a=e<=8?e/il:Math.pow((e+16)/116,3);return[a*(9*s/(4*i)),a,a*((12-3*s-20*i)/(4*i))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ki=new v({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:zd,fromBase(t){let[e,r,n]=t,s;const i=.02;return Math.abs(r)<i&&Math.abs(n)<i?s=NaN:s=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Pe(s)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const fw=216/24389,hw=24389/27,ll=Q[0][0],cl=Q[0][1],Cs=Q[0][2],ul=Q[1][0],dl=Q[1][1],Ls=Q[1][2],fl=Q[2][0],hl=Q[2][1],Ns=Q[2][2];function Ot(t,e,r){const n=e/(Math.sin(r)-t*Math.cos(r));return n<0?1/0:n}function Nn(t){const e=Math.pow(t+16,3)/1560896,r=e>fw?e:t/hw,n=r*(284517*ll-94839*Cs),s=r*(838422*Cs+769860*cl+731718*ll),i=r*(632260*Cs-126452*cl),a=r*(284517*ul-94839*Ls),o=r*(838422*Ls+769860*dl+731718*ul),l=r*(632260*Ls-126452*dl),c=r*(284517*fl-94839*Ns),d=r*(838422*Ns+769860*hl+731718*fl),u=r*(632260*Ns-126452*hl);return{r0s:n/i,r0i:s*t/i,r1s:n/(i+126452),r1i:(s-769860)*t/(i+126452),g0s:a/l,g0i:o*t/l,g1s:a/(l+126452),g1i:(o-769860)*t/(l+126452),b0s:c/u,b0i:d*t/u,b1s:c/(u+126452),b1i:(d-769860)*t/(u+126452)}}function ml(t,e){const r=e/360*Math.PI*2,n=Ot(t.r0s,t.r0i,r),s=Ot(t.r1s,t.r1i,r),i=Ot(t.g0s,t.g0i,r),a=Ot(t.g1s,t.g1i,r),o=Ot(t.b0s,t.b0i,r),l=Ot(t.b1s,t.b1i,r);return Math.min(n,s,i,a,o,l)}var mw=new v({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ki,gamutSpace:Zt,fromBase(t){let[e,r,n]=[Y(t[0]),Y(t[1]),Y(t[2])],s;if(e>99.9999999)s=0,e=100;else if(e<1e-8)s=0,e=0;else{let i=Nn(e),a=ml(i,n);s=r/a*100}return[n,s,e]},toBase(t){let[e,r,n]=[Y(t[0]),Y(t[1]),Y(t[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=Nn(n);s=ml(i,e)/100*r}return[n,s,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Q[0][0];Q[0][1];Q[0][2];Q[1][0];Q[1][1];Q[1][2];Q[2][0];Q[2][1];Q[2][2];function Pt(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function pl(t){let e=Pt(t.r0s,t.r0i),r=Pt(t.r1s,t.r1i),n=Pt(t.g0s,t.g0i),s=Pt(t.g1s,t.g1i),i=Pt(t.b0s,t.b0i),a=Pt(t.b1s,t.b1i);return Math.min(e,r,n,s,i,a)}var pw=new v({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ki,gamutSpace:"self",fromBase(t){let[e,r,n]=[Y(t[0]),Y(t[1]),Y(t[2])],s;if(e>99.9999999)s=0,e=100;else if(e<1e-8)s=0,e=0;else{let i=Nn(e),a=pl(i);s=r/a*100}return[n,s,e]},toBase(t){let[e,r,n]=[Y(t[0]),Y(t[1]),Y(t[2])],s;if(n>99.9999999)n=100,s=0;else if(n<1e-8)n=0,s=0;else{let i=Nn(n);s=pl(i)/100*r}return[n,s,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const gl=203,wl=2610/2**14,gw=2**14/2610,ww=2523/2**5,yl=2**5/2523,bl=3424/2**12,vl=2413/2**7,$l=2392/2**7;var yw=new ce({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Xn,toBase(t){return t.map(function(e){return(Math.max(e**yl-bl,0)/(vl-$l*e**yl))**gw*1e4/gl})},fromBase(t){return t.map(function(e){let r=Math.max(e*gl/1e4,0),n=bl+vl*r**wl,s=1+$l*r**wl;return(n/s)**ww})}});const Sl=.17883277,kl=.28466892,El=.55991073,Os=3.7743;var bw=new ce({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Xn,toBase(t){return t.map(function(e){return e<=.5?e**2/3*Os:(Math.exp((e-El)/Sl)+kl)/12*Os})},fromBase(t){return t.map(function(e){return e/=Os,e<=1/12?Math.sqrt(3*e):Sl*Math.log(12*e-kl)+El})}});const Ud={};tt.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=Wd(t.W1,t.W2,t.options.method))});tt.add("chromatic-adaptation-end",t=>{t.M||(t.M=Wd(t.W1,t.W2,t.options.method))});function es({id:t,toCone_M:e,fromCone_M:r}){Ud[t]=arguments[0]}function Wd(t,e,r="Bradford"){let n=Ud[r],[s,i,a]=B(n.toCone_M,t),[o,l,c]=B(n.toCone_M,e),d=[[o/s,0,0],[0,l/i,0],[0,0,c/a]],u=B(d,n.toCone_M);return B(n.fromCone_M,u)}es({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});es({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});es({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});es({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(ie,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});ie.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const vw=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],$w=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var jd=new ce({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:ie.ACES,toXYZ_M:vw,fromXYZ_M:$w});const rn=2**-16,Ps=-.35828683,nn=(Math.log2(65504)+9.72)/17.52;var Sw=new ce({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Ps,nn],name:"Red"},g:{range:[Ps,nn],name:"Green"},b:{range:[Ps,nn],name:"Blue"}},referred:"scene",base:jd,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-rn)*2:r<nn?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(rn)+9.72)/17.52:e<rn?(Math.log2(rn+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),Tl=Object.freeze({__proto__:null,A98RGB:sw,A98RGB_Linear:Hd,ACEScc:Sw,ACEScg:jd,CAM16_JMh:u1,HCT:Tr,HPLuv:pw,HSL:Vd,HSLuv:mw,HSV:Dd,HWB:tw,ICTCP:ti,JzCzHz:ei,Jzazbz:bd,LCH:Er,LCHuv:Ki,Lab:me,Lab_D65:si,Luv:zd,OKLCH:uw,OKLab:jt,P3:Od,P3_Linear:Ld,ProPhoto:cw,ProPhoto_Linear:Bd,REC_2020:Cd,REC_2020_Linear:Xn,REC_2100_HLG:bw,REC_2100_PQ:yw,XYZ_ABS_D65:qi,XYZ_D50:Gi,XYZ_D65:te,sRGB:Zt,sRGB_Linear:Nd});let D=class ae{constructor(...e){let r;e.length===1&&(r=A(e[0]));let n,s,i;r?(n=r.space||r.spaceId,s=r.coords,i=r.alpha):[n,s,i]=e,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=s?s.slice():[0,0,0],this.alpha=i>1||i===void 0?1:i<0?0:i;for(let a=0;a<this.coords.length;a++)this.coords[a]==="NaN"&&(this.coords[a]=NaN);for(let a in this.space.coords)Object.defineProperty(this,a,{get:()=>this.get(a),set:o=>this.set(a,o)})}get spaceId(){return this.space.id}clone(){return new ae(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=M1(this,...e);return r.color=new ae(r.color),r}static get(e,...r){return e instanceof ae?e:new ae(e,...r)}static defineFunction(e,r,n=r){let{instance:s=!0,returns:i}=n,a=function(...o){let l=r(...o);if(i==="color")l=ae.get(l);else if(i==="function<color>"){let c=l;l=function(...d){let u=c(...d);return ae.get(u)},Object.assign(l,c)}else i==="array<color>"&&(l=l.map(c=>ae.get(c)));return l};e in ae||(ae[e]=a),s&&(ae.prototype[e]=function(...o){return a(this,...o)})}static defineFunctions(e){for(let r in e)ae.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(ae);else for(let r in e)ae.defineFunction(r,e[r])}};D.defineFunctions({get:he,getAll:Dr,set:ze,setAll:ji,to:H,equals:x1,inGamut:yt,toGamut:rt,distance:yd,toString:gr});Object.assign(D,{util:Tg,hooks:tt,WHITES:ie,Space:v,spaces:v.registry,parse:gd,defaults:ge});for(let t of Object.keys(Tl))v.register(Tl[t]);for(let t in v.registry)ii(t,v.registry[t]);tt.add("colorspace-init-end",t=>{var e;ii(t.id,t),(e=t.aliases)==null||e.forEach(r=>{ii(r,t)})});function ii(t,e){let r=t.replace(/-/g,"_");Object.defineProperty(D.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(s,i)=>{try{return v.resolveCoord([e,i]),!0}catch{}return Reflect.has(s,i)},get:(s,i,a)=>{if(i&&typeof i!="symbol"&&!(i in s)){let{index:o}=v.resolveCoord([e,i]);if(o>=0)return s[o]}return Reflect.get(s,i,a)},set:(s,i,a,o)=>{if(i&&typeof i!="symbol"&&!(i in s)||i>=0){let{index:l}=v.resolveCoord([e,i]);if(l>=0)return s[l]=a,this.setAll(t,s),!0}return Reflect.set(s,i,a,o)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}D.extend(qt);D.extend({deltaE:ur});Object.assign(D,{deltaEMethods:qt});D.extend(X1);D.extend({contrast:q1});D.extend(Y1);D.extend(C1);D.extend(ew);D.extend(hn);function Gd(t){return wn(t,(e,r)=>r instanceof D?X(r.toString({format:"hex"})):Gd(r))}const kw="dodgerblue";function ai(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function Is({background:t,foreground:e}){return{background:t??new D(ai(e)),foreground:e??new D(ai(t))}}function Ew(t){return t==="black"?"white":"black"}const Tw={black:{foregroundFaint1:new D("#ccc"),foregroundFaint2:new D("#eee")},white:{foregroundFaint1:new D("#ccc"),foregroundFaint2:new D("#eee")}},Mw={black:{backgroundFaint1:new D("#666"),backgroundFaint2:new D("#444")},white:{backgroundFaint1:new D("#ccc"),backgroundFaint2:new D("#fafafa")}};function Ml({themeColor:t=kw,themeStyle:e="light"}={}){const r=new D(t),n=new D(e==="dark"?"black":"white"),s=ai(n),i=new D(s),a={nav:{hover:Is({background:r.clone().set({"hsl.l":93})}),active:Is({background:r.clone().set({"hsl.l":90})}),selected:Is({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...Mw[Ew(s)],foreground:i,...Tw[s]}};return Gd(a)}const On=_i()("element-book-change-route"),xl="vira-",{defineElement:tr,defineElementNoInputs:Iy}=ju({assertInputs:t=>{if(!t.tagName.startsWith(xl))throw new Error(`Tag name should start with '${xl}' but got '${t.tagName}'`)}}),Mr=Tt({"vira-form-input-radius":"8px"}),xw=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Aw(t,e){return t?xw.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Cw(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Al;(function(t){t.Upper="upper",t.Lower="lower"})(Al||(Al={}));var Cl;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Cl||(Cl={}));function Lw(t){return t?t instanceof Error?t.message:Aw(t,"message")?String(t.message):String(t):""}function Ll(t){return t instanceof Error?t:new Error(Lw(t))}function Nw(t,e={}){try{const r=t();return r instanceof Promise?r.catch(n=>e.handleError?e.handleError(n):pn(e,"fallbackValue")?e.fallbackValue:Ll(n)):r}catch(r){return e.handleError?e.handleError(r):pn(e,"fallbackValue")?e.fallbackValue:Ll(r)}}function qd(){let t,e,r=!1;const n=new Promise((s,i)=>{t=a=>(r=!0,s(a)),e=a=>{r=!0,i(a)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${qd.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Nl(t){const e=qd();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Ow(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ow();const Pw="px";function Iw(t){return _w({value:t,suffix:Pw})}function _w({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}const Rw=D;function Vw(t){try{if(!t)throw new Error("invalid empty color");return new Rw(t)}catch{const r=String(t),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Nw(()=>JSON.stringify(t),{fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const Zd=y`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Ke=Tt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),xr=Tt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":y`calc(${Mr["vira-form-input-radius"].value} + 4px)`});function Yd({selector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=2}){const s=X(Iw(n+r+e));return y`
        ${X(t)}::after {
            content: '';
            top: calc(${s} * -1);
            left: calc(${s} * -1);
            position: absolute;
            width: calc(100% + calc(${s} * 2));
            height: calc(100% + calc(${s} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${xr["vira-focus-outline-color"].value};
            border-radius: ${xr["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const Dw=y`
    padding: 0;
    margin: 0;
`,ht=y`
    ${Dw};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,Ol=y`#e2e2e2`;y`
        filter: drop-shadow(0px 5px 5px ${Ol});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,y`
        filter: drop-shadow(0px -5px 5px ${Ol});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `;const oi=y`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,x=tr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>y`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${t["vira-icon-fit-container"].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}});var Kd=(t=>(t.Default="vira-button-default",t.Outline="vira-button-outline",t))(Kd||{});const J=tr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>y`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${oi};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${xr["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
        }

        :host(:hover) button,
        button:hover {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-hover-color"].value};
        }

        :host(:active) button,
        button:active {
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-active-color"].value};
        }

        ${t["vira-button-disabled"].selector} {
            ${Zd};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${ht};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${Mr["vira-form-input-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${Ke["vira-interaction-animation-duration"].value},
                background-color
                    ${Ke["vira-interaction-animation-duration"].value},
                border-color ${Ke["vira-interaction-animation-duration"].value};
        }

        ${Yd({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${x} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?p`
                  <${x.assign({icon:t.icon})}></${x}>
              `:"",r=t.text?p`
                  <span class="text-template">${t.text}</span>
              `:"";return p`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}}),_e=tr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},slotNames:["header"],styles:({hostClasses:t})=>y`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${ht};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ke["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Qe()},stateInitStatic:{contentHeight:0},renderCallback({state:t,slotNames:e,updateState:r,dispatch:n,events:s,inputs:i}){const a=i.expanded?y`
                  height: ${t.contentHeight}px;
              `:y`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${U("click",()=>{n(new s.expandChange(!i.expanded))})}
            >
                <slot name=${e.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${Wu(({contentRect:o})=>{r({contentHeight:o.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),k=Tt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ue({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}function Pl(t,e){const r=Cw(e).map(n=>{const s=e[n],i=Vw(s);return`${k[n].name}: ${i.toString()};`}).join(" ");return ue({name:t.name,svgTemplate:p`
            <div style=${r}>${t.svgTemplate}</div>
        `})}const Hw=ue({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Bw=ue({name:"ChevronUp24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${k["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Jd=ue({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Xd=ue({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),qe=ue({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Qd=ue({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),ef=ue({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${k["vira-icon-fill-color"].value}
            stroke=${k["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${k["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),tf=ue({name:"Loader24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="loader-animated-24-icon"
        >
            <path
                d="M12 8V2M16 12h6M12 16v6M8 12H2M9.17 9.17 4.93 4.93M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Fw=y`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Ke["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Ar=ue({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Fw}
        </style>
        ${tf.svgTemplate}
    `}),Ji=ue({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${k["vira-icon-stroke-color"].value}"
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Pn=ue({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),zw=ue({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${k["vira-icon-stroke-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width="calc(${k["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Uw=ue({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${k["vira-icon-fill-color"].value}
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${k["vira-icon-stroke-color"].value}
                stroke-width=${k["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ww={Check24Icon:Hw,ChevronUp24Icon:Bw,CloseX24Icon:Jd,Element16Icon:Xd,Element24Icon:qe,EyeClosed24Icon:Qd,EyeOpen24Icon:ef,Loader24Icon:tf,LoaderAnimated24Icon:Ar,Options24Icon:Ji,StatusFailure24Icon:Pn,StatusInProgress24Icon:zw,StatusSuccess24Icon:Uw};var li=(t=>(t.Loading="loading",t.Error="error",t))(li||{});const It=tr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:Qe(),imageError:Qe()},styles:({hostClasses:t})=>y`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${t["vira-image-height-constrained"].selector} {
            flex-direction: row;
        }

        ${t["vira-image-height-constrained"].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:s}){const i=t.imageUrl,a=e.erroredUrls[i]?p`
                  <slot class="status-wrapper" name=${"error"}>
                      <${x.assign({icon:Pn})} class="error"></${x}>
                  </slot>
              `:e.loadedUrls[i]?void 0:p`
                    <slot class="status-wrapper" name=${"loading"}>
                        <${x.assign({icon:Ar})}></${x}>
                    </slot>
                `;return p`
            ${fe(!!a,a)}
            <img
                class=${xu({hidden:!!a})}
                ${U("load",async()=>{t._debugLoadDelay&&await Nl(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[i]:!0}}),n(new s.imageLoad)})}
                ${U("error",async o=>{t._debugLoadDelay&&await Nl(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[i]:!0}}),n(new s.imageError(o.error))})}
                src=${i}
            />
        `}});function ci({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>ci({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function rf({value:t,allowed:e,blocked:r}){const n=e?ci({input:t,matcher:e}):!0,s=r?ci({input:t,matcher:r}):!1;return n&&!s}function nf(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,s)=>(rf({...t,value:s})?n.filtered.push(s):n.blocked.push(s),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function jw({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:s}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const i=cr(r,HTMLInputElement),a=r.data,o=e;let l=i.value??"";if(a)if(a.length===1)rf({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=o,n(a));else{const{filtered:c,blocked:d}=nf({value:a,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,n(d)}i.value!==l&&(i.value=l),o!==l&&s(l)}var sf=(t=>(t.Default="text",t.Password="password",t.Email="email",t))(sf||{});const F=tr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":xr["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Qe(),inputBlocked:Qe()},styles:({hostClasses:t,cssVars:e})=>y`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${xr["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${Zd};
            }

            ${t["vira-input-fit-text"].selector} {
                width: unset;
            }
            ${t["vira-input-fit-text"].selector} input {
                flex-grow: 0;
            }
            ${t["vira-input-fit-text"].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${t["vira-input-fit-text"].selector} .size-span {
                ${ht};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${oi};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${ht};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${Mr["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${Ke["vira-interaction-animation-duration"].value};
            }

            label {
                ${ht};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Mr["vira-form-input-radius"].value};
                background-color: ${e["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${Yd({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${ht};
                cursor: text;
                margin: ${e["vira-input-padding-vertical"].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${e["vira-input-text-selection-color"].value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${e["vira-input-text-selection-color"].value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${e["vira-input-placeholder-color"].value};
            }

            .suffix {
                font-weight: bold;
                ${oi};
            }

            button {
                ${ht};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Ke["vira-interaction-animation-duration"].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${e["vira-input-action-button-color"].value};
            }

            .clear-x-button:hover {
                color: ${e["vira-input-clear-button-hover-color"].value};
            }

            .clear-x-button:active {
                color: ${e["vira-input-clear-button-active-color"].value};
            }

            .show-password-button:hover {
                color: ${e["vira-input-show-password-button-hover-color"].value};
            }

            .show-password-button:active {
                color: ${e["vira-input-show-password-button-active-color"].value};
            }
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:s})=>{const{filtered:i}=nf({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),a=t.icon?p`
                  <${x.assign({icon:t.icon})} class="left-side-icon"></${x}>
              `:"",o=t.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${a}
                ${fe(!!t.fitText,p`
                        <span
                            class="size-span"
                            ${Wu(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${i||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${Gw(t.type,r.showPassword)}
                    style=${o}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${i}
                    ${U("input",l=>{jw({inputs:t,filteredValue:i,event:l,inputBlockedCallback(c){e(new s.inputBlocked(c))},newValueCallback(c){e(new s.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${fe(!!(t.showClearButton&&t.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${U("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new s.valueChange(""))})}
                        >
                            <${x.assign({icon:Jd})}></${x}>
                        </button>
                    `)}
                ${fe(t.type==="password",p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${U("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${x.assign({icon:r.showPassword?ef:Qd})}></${x}>
                        </button>
                    `)}
                ${fe(!!t.suffix,p`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function Gw(t,e){return t==="password"&&e?"text":t||"text"}const sn=tr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>y`
        :host {
            display: inline;
            text-decoration: underline;
        }

        a,
        a:visited,
        a:active,
        a:link,
        a:hover {
            color: inherit;
            text-decoration: inherit;
            white-space: inherit;
        }

        :host(:hover) a,
        a:hover,
        :host(:active) a,
        a:active {
            color: ${t["vira-link-hover-color"].value};
        }
    `,renderCallback({inputs:t}){var r,n;function e(s){t.route&&t.route.router.setRouteOnDirectNavigation(t.route.route,s)&&t.route.scrollToTop&&window.scrollTo(0,0)}if((r=t.link)!=null&&r.newTab)return p`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=t.link?t.link.url:(n=t.route)==null?void 0:n.router.createRouteUrl(t.route.route);return p`
                <a href=${s} rel="noopener noreferrer" ${U("click",e)}>
                    <slot></slot>
                </a>
            `}}});var Il;(function(t){t.Upper="upper",t.Lower="lower"})(Il||(Il={}));var _l;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(_l||(_l={}));function qw(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Zw(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Zw();const Yw={activateKeys:["Space","Return","Enter"]};function Kw(){qw(Yw)}Kw();var Rl;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(Rl||(Rl={}));class Jw extends pu{constructor(){super({defaultValue:document.hidden,equalityCheck:rc}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const e=r=>this.updateVisibility(r);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e){const r=Qw.includes(e.type),n=Xw.includes(e.type),s=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(s)}}const Xw=["blur","focusout","pagehide"],Qw=["focus","focusin","pageshow"];new Jw;class _y extends hi("hide-pop-up"){}class Ry extends at()("nav-select"){}const{defineElement:Se,defineElementNoInputs:Vy}=ju(),be=Se()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:t})=>y`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n;const r=((n=t.router)==null?void 0:n.createRouteUrl({...t.route}))??"#";return p`
            <a
                href=${r}
                ${U("click",s=>{(!t.router||od(s))&&(s.preventDefault(),window.scrollTo(0,0),e(new On(t.route)))})}
            >
                <slot></slot>
            </a>
        `}});function ey(t,e){return t.entry.entryType===ne.Root?!1:!!(t.entry.entryType===ne.Page||Ne(e,t.fullUrlBreadcrumbs.slice(0,-1))||Ne(e==null?void 0:e.slice(0,-1),t.fullUrlBreadcrumbs.slice(0,-1)))}const Ve=Se()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:t})=>y`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${I["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${I["element-book-nav-hover-background-color"].value};
            color: ${I["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${I["element-book-nav-active-background-color"].value};
            color: ${I["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${be.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${t["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${I["element-book-nav-selected-background-color"].value};
            color: ${I["element-book-nav-selected-foreground-color"].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${x} {
            display: inline-flex;
            color: ${I["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=t.flattenedNodes.map(r=>{if(!ey(r,t.selectedPath))return;const n=y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${be.assign({router:t.router,route:{paths:[xe.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${xu({"title-row":!0,selected:t.selectedPath?Ne(t.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${fe(Bt(r,ne.ElementExample),p`
                                    <${x.assign({icon:Xd})}></${x}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${be}>
                </li>
            `});return p`
            <${be.assign({route:Wt,router:t.router})}>
                <slot name=${He.NavHeader}>Book</slot>
            </${be}>
            <ul>
                ${e}
            </ul>
        `}});async function ty(t){await Vs(2);const e=t.shadowRoot.querySelector(".selected");if(!e)throw new Error("Failed to find selected nav tree element.");await Wf(e)||e.scrollIntoView({behavior:"smooth",block:"center"})}const st=Se()({tagName:"book-error",styles:y`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,renderCallback({inputs:t}){return(L(t.message,"array")?t.message:[t.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Cr=Se()({tagName:"book-page-controls",events:{controlValueChange:Qe()},hostClasses:{"book-page-controls-has-controls":({inputs:t})=>!!Object.keys(t.config).length},styles:({hostClasses:t})=>y`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${I["element-book-page-foreground-faint-level-1-color"].value};
        }

        ${t["book-page-controls-has-controls"].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${F} {
            height: 24px;
            max-width: 128px;
        }

        ${x}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).length?Object.entries(t.config).map(([n,s],i)=>{if(s.controlType===j.Hidden)return"";const a=ry(t.currentValues[n],s,o=>{const l=L(t.fullUrlBreadcrumbs,"array")?t.fullUrlBreadcrumbs:t.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);e(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...t.currentValues,[n]:o}}))});return p`
                    <div class="control-wrapper">
                        ${fe(i===0,p`
                                <${x.assign({icon:Ji})}
                                    class="options-icon"
                                ></${x}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${a}
                        </label>
                    </div>
                `}):""}});function ry(t,e,r){return xt(e,j.Hidden)?"":xt(e,j.Checkbox)?p`
            <input
                type="checkbox"
                .value=${t}
                ${U("input",n=>{const s=cr(n,HTMLInputElement);r(s.checked)})}
            />
        `:xt(e,j.Color)?p`
            <input
                type="color"
                .value=${t}
                ${U("input",n=>{const s=cr(n,HTMLInputElement);r(s.value)})}
            />
        `:xt(e,j.Text)?p`
            <${F.assign({value:String(t),showClearButton:!0,disableBrowserHelps:!0})}
                ${U(F.events.valueChange,n=>{r(n.detail)})}
            ></${F}>
        `:xt(e,j.Number)?p`
            <input
                type="number"
                .value=${t}
                ${U("input",n=>{const s=cr(n,HTMLInputElement);r(s.value)})}
            />
        `:xt(e,j.Dropdown)?p`
            <select
                .value=${t}
                ${U("input",n=>{const s=cr(n,HTMLSelectElement);r(s.value)})}
            >
                ${e.options.map(n=>p`
                        <option ?selected=${n===t} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${e.controlType} controls are not implemented yet.</p>
        `}const Vl=Se()({tagName:"book-breadcrumbs",styles:y`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,s)=>{const i=n>=s.length-1,a=s.slice(0,n+1),o=i?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${be.assign({route:{hash:void 0,search:void 0,paths:[xe.Book,...a]},router:t.router})}>
                    ${r}
                </${be}>
                ${o}
            `}):p`
                &nbsp;
            `}}),_s=Se()({tagName:"book-breadcrumbs-bar",styles:y`
        :host {
            border-bottom: 1px solid
                ${I["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${I["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:t,dispatch:e}){return p`
            ${fe(!!t.currentSearch,p`
                    &nbsp;
                `,p`
                    <${Vl.assign({currentRoute:t.currentRoute,router:t.router})}></${Vl}>
                `)}
            <input
                placeholder="search"
                .value=${t.currentSearch}
                ${U("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const s=n.value;await Pf(200),n.value===s&&(n.value?e(new On({paths:[xe.Search,encodeURIComponent(n.value)]})):e(new On(Wt)))})}
            />
        `}}),Dl=Se()({tagName:"book-entry-description",styles:y`
        :host {
            color: ${I["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${I["element-book-page-foreground-color"].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,renderCallback({inputs:t}){return t.descriptionParagraphs.map(e=>p`
                <p>${e}</p>
            `)}}),Hl=Se()({tagName:"book-page-wrapper",styles:y`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${be} {
            display: inline-block;
        }
    `,renderCallback({inputs:t}){const e=t.isTopLevel?p`
                  <h2 class="header-with-icon">${t.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${t.pageNode.entry.title}</h3>
              `,r=[xe.Book,...t.pageNode.fullUrlBreadcrumbs],n=ec(t.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${be.assign({route:{paths:r,hash:void 0,search:void 0},router:t.router})}>
                        ${e}
                    </${be}>
                    ${n?p`
                              <${st.assign({message:n.message})}></${st}>
                          `:p`
                              <${Dl.assign({descriptionParagraphs:t.pageNode.entry.descriptionParagraphs??[]})}></${Dl}>
                              <${Cr.assign({config:t.pageNode.entry.controls,currentValues:Vi(t.controls,t.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:t.pageNode.fullUrlBreadcrumbs})}></${Cr}>
                          `}
                </div>
            </div>
        `}}),an=Se()({tagName:"book-element-example-controls",styles:y`
        :host {
            display: flex;
            color: ${I["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){const e=[xe.Book,...t.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${be.assign({route:{paths:e,hash:void 0,search:void 0},router:t.router})}>
                ${t.elementExampleNode.entry.title}
            </${be}>
        `}}),Bl=Symbol("unset-internal-state"),Fl=Se()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:Bl},renderCallback({state:t,inputs:e,updateState:r}){try{if(e.elementExampleNode.entry.errors.length)throw ec(e.elementExampleNode.entry.errors);if(!e.elementExampleNode.entry.renderCallback||typeof e.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${e.elementExampleNode.entry.title}': renderCallback is not a function`);t.isUnset===Bl&&r({isUnset:void 0,...e.elementExampleNode.entry.stateInitStatic});const n=e.elementExampleNode.entry.renderCallback({state:t,updateState:r,controls:e.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${fe(!!e.elementExampleNode.entry.styles,p`
                        <style>
                            ${e.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${st.assign({message:`${e.elementExampleNode.entry.title} failed: ${di(n)}`})}></${st}>
            `}},options:{allowPolymorphicState:!0}}),zl=Se()({tagName:"book-element-example-wrapper",styles:y`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${an} {
            color: ${I["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${an} {
            color: ${I["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){return p`
            <div class="individual-example-wrapper">
                <${an.assign(Lf(t,["currentPageControls"]))}></${an}>
                <${Fl.assign(t)}></${Fl}>
            </div>
        `}});function af(t,e,r,n){const s=qs(r,n),i=[];if(s){const a=af(t,e,s,n);a&&i.push(a)}if(Bt(r,ne.Page)&&!t.includes(r)){const a=Vi(e,r.fullUrlBreadcrumbs);i.push({config:r.entry.controls,current:a,breadcrumbs:wn(a,()=>r.fullUrlBreadcrumbs)})}return i.reduce((a,o)=>({config:{...a.config,...o.config},current:{...a.current,...o.current},breadcrumbs:{...a.breadcrumbs,...o.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function ny({currentNodes:t,isTopLevel:e,router:r,isSearching:n,controls:s,originalTree:i}){if(!t.length&&n)return[p`
                No results
            `];const a=la(t,1)?af(t,s,t[0],i):void 0,o=a&&Object.values(a.config).length&&la(t,1)?p`
                  <${Cr.assign({config:a.config,currentValues:a.current,fullUrlBreadcrumbs:a.breadcrumbs})}></${Cr}>
              `:G,l=J0(t,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Bt(c,ne.Page))return p`
                    <${Hl.assign({isTopLevel:e,pageNode:c,controls:s,router:r})}
                        class="block-entry"
                    ></${Hl}>
                `;if(Bt(c,ne.ElementExample)){const u=Vi(s,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${zl.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${zl}>
                `}else return Bt(c,ne.Root)?G:p`
                    <${st.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${st}>
                `});return[o,l]}const _t=Se()({tagName:"book-entry-display",styles:y`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${_s} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Ke["vira-interaction-animation-duration"].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,events:{loadingRender:Qe()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:t,dispatch:e,events:r,state:n,updateState:s})=>{const i=Ks(t.currentRoute.paths),a=ny({currentNodes:t.currentNodes,isTopLevel:!0,router:t.router,isSearching:!!i,controls:t.controls,originalTree:t.originalTree});return p`
            <${_s.assign({currentSearch:i,currentRoute:t.currentRoute,router:t.router})}></${_s}>

            ${fe(t.showLoading,p`
                    <div
                        ${bo(()=>{e(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${x.assign({icon:Ar})}></${x}>
                    </div>
                    ${fe(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${He.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${bo(o=>{s({lastElement:o})})}
                        class="all-book-entries-wrapper"
                    >
                        ${a}
                    </div>
                    <slot name=${He.Footer}></slot>
                `)}
        `}});function sy(t,e,r){const n=Ul(t,e);if(n.length)return n;r(Wt);const s=Ul(t,Wt.paths);if(!s)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return s}function Ul(t,e){return t.filter(r=>Ff({searchFor:e.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Rs=zu()({tagName:"element-book-app",events:{pathUpdate:Qe()},stateInitStatic:{currentRoute:Wt,router:void 0,loading:!0,colors:{config:void 0,theme:Ml(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:y`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${I["element-book-page-background-color"].value};
            color: ${I["element-book-page-foreground-color"].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${_t} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Ve} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:t,state:e}){setTimeout(()=>{Wl(t,Ks(e.currentRoute.paths),e.currentRoute)},500)},cleanupCallback({state:t,updateState:e}){t.router&&(t.router.destroy(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:s,events:i})=>{var d,u,f,h,m,g,b;e._debug&&console.info("rendering element-book app");function a($){return{...t.currentRoute,...$}}function o($){const S=a($);return!Ne(t.currentRoute,S)}function l($){e.preventWindowTitleChange||(t.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[t.originalWindowTitle,$].filter(ui).join(" - "))}function c($){if(!o($))return;const S=a($);t.router?t.router.setRoute(S):n({currentRoute:{...t.currentRoute,...S}}),e.elementBookRoutePaths&&!Ne(e.elementBookRoutePaths,t.currentRoute.paths)&&s(new i.pathUpdate(S.paths??[]))}try{if(e.elementBookRoutePaths&&!Ne(e.elementBookRoutePaths,t.currentRoute.paths)&&c({paths:e.elementBookRoutePaths}),(d=e.internalRouterConfig)!=null&&d.useInternalRouter&&!t.router){const V=vg(e.internalRouterConfig.basePath);n({router:V}),V.listen(!0,q=>{n({currentRoute:q})})}else!((u=e.internalRouterConfig)!=null&&u.useInternalRouter)&&t.router&&t.router.destroy();const $={themeColor:e.themeColor};if(!Ne($,(f=t.colors)==null?void 0:f.config)){const V=Ml($);n({colors:{config:$,theme:V}}),kg(r,V)}const S=e._debug??!1,C=Up({entries:e.entries,debug:S});(!t.treeBasedControls||t.treeBasedControls.entries!==e.entries||t.treeBasedControls.lastGlobalInputs!==e.globalValues)&&(e._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:e.entries,lastGlobalInputs:e.globalValues??{},controls:Qu(C.tree,{children:(m=(h=t.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:e.globalValues})}}));const _=Ks(t.currentRoute.paths),ke=(_?Kp({flattenedNodes:C.flattenedNodes,searchQuery:_}):void 0)??sy(C.flattenedNodes,t.currentRoute.paths,c);l((g=ke[0])==null?void 0:g.entry.title);const de=(b=t.treeBasedControls)==null?void 0:b.controls;return de?(e._debug&&console.info({currentControls:de}),p`
                <div
                    class="root"
                    ${U(On,async V=>{const q=V.detail;if(!o(q))return;if(n({loading:!0}),c(q),!(r.shadowRoot.querySelector(Ve.tagName)instanceof Ve))throw new Error(`Failed to find child '${Ve.tagName}'`);Wl(r,_,t.currentRoute)})}
                    ${U(Cr.events.controlValueChange,V=>{if(!t.treeBasedControls)return;const q=jp(de,V.detail.fullUrlBreadcrumbs,V.detail.newValues);n({treeBasedControls:{...t.treeBasedControls,controls:q}})})}
                >
                    <${Ve.assign({flattenedNodes:C.flattenedNodes,router:t.router,selectedPath:_?void 0:t.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${He.NavHeader}
                            slot=${He.NavHeader}
                        ></slot>
                    </${Ve}>
                    <${_t.assign({controls:de,currentNodes:ke,currentRoute:t.currentRoute,debug:S,originalTree:C.tree,router:t.router,showLoading:t.loading})}
                        ${U(_t.events.loadingRender,async V=>{await Vs();const q=r.shadowRoot.querySelector(_t.tagName);q?q.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${_t.tagName}' for scrolling.`),await Vs(),n({loading:!V.detail})})}
                    >
                        <slot
                            name=${He.Footer}
                            slot=${He.Footer}
                        ></slot>
                    </${_t}>
                </div>
            `):p`
                    <${st.assign({message:"Failed to generate page controls."})}></${st}>
                `}catch($){return console.error($),p`
                <p class="error">${di($)}</p>
            `}}});async function Wl(t,e,r){if(e||r.paths.length<=1)return;const n=t.shadowRoot.querySelector(Ve.tagName);if(!(n instanceof Ve))throw new Error(`Failed to find child '${Ve.tagName}'`);await ty(n)}const Mt=it({title:"Elements",parent:void 0});function jl(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Gl;(function(t){t.Upper="upper",t.Lower="lower"})(Gl||(Gl={}));function iy({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var ql;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ql||(ql={}));function ay(t,e){let r=!1;const n=jl(t).reduce((s,i)=>{const a=e(i,t[i],t);return a instanceof Promise&&(r=!0),{...s,[i]:a}},{});return r?new Promise(async(s,i)=>{try{await Promise.all(jl(n).map(async a=>{const o=await n[a];n[a]=o})),s(n)}catch(a){i(a)}}):n}function oy(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const ly=oy();function cy({min:t,max:e}){const{min:r,max:n}=iy({min:Math.floor(t),max:Math.floor(e)}),s=n-r+1,i=Math.ceil(Math.log2(s)/8),a=Math.floor(256**i/s)*s,o=new Uint8Array(i);let l;do ly.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=a);return r+l%s}const Zl=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function uy(t=16){let e="";for(let r=0;r<t;r++){const n=cy({min:0,max:Zl.length-1});e+=Zl[n]}return e}const dy="px";function fy(t){return hy({value:t,suffix:dy})}function hy({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}const my=it({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:j.Color,initValue:""},"Fill Color":{controlType:j.Color,initValue:""},"Stroke Width":{controlType:j.Number,initValue:1}},elementExamplesCallback({defineExample:t}){Object.values(Ww).forEach(e=>{t({title:e.name,styles:y`
                    :host(:hover) ${x} {
                        background-color: #f2f2f2;
                    }

                    ${x} {
                        padding: 8px;
                        border-radius: ${Mr["vira-form-input-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=y`
                        ${k["vira-icon-fill-color"].name}: ${X(r["Fill Color"]||"inherit")};
                        ${k["vira-icon-stroke-color"].name}: ${X(r["Stroke Color"]||"inherit")};
                        ${k["vira-icon-stroke-width"].name}: ${X(fy(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${x.assign({icon:e})} style=${n}></${x}>
                    `}})})}}),py=it({parent:Mt,title:J.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:j.Color,initValue:J.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:j.Color,initValue:J.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:j.Color,initValue:J.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:j.Color,initValue:J.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:t}){function e({title:r,styles:n,inputs:s}){const i=n??y``;t({title:r,styles:i,renderCallback({controls:a}){const o=y`
                        ${J.cssVars["vira-button-primary-color"].name}: ${X(a["Primary color"]||"inherit")};
                        ${J.cssVars["vira-button-secondary-color"].name}: ${X(a["Secondary color"]||"inherit")};
                        ${J.cssVars["vira-button-primary-hover-color"].name}: ${X(a["Hover color"]||"inherit")};
                        ${J.cssVars["vira-button-primary-active-color"].name}: ${X(a["Active color"]||"inherit")};
                    `;return p`
                        <${J.assign({text:"hello",...s})}
                            style=${o}
                        ></${J}>
                    `}})}e({title:"basic"}),e({title:"with icon",inputs:{icon:Ji}}),e({title:"outline",inputs:{buttonStyle:Kd.Outline}}),e({title:"disabled",inputs:{disabled:!0}}),e({title:"custom width",styles:y`
                ${J} {
                    width: 100px;
                }
            `}),e({title:"custom height",styles:y`
                ${J} {
                    height: 75px;
                }
            `}),t({title:"customized colors",styles:y`
                :host {
                    ${J.cssVars["vira-button-primary-color"].name}: pink;
                    ${J.cssVars["vira-button-secondary-color"].name}: purple;
                    ${J.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${J.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${J.assign({text:"hello"})}></${J}>
                `}})}}),gy=it({title:_e.tagName,parent:Mt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:t}){t({title:"stacked examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,s)=>p`
                            <${_e.assign({expanded:!!r.expandedStates[s]})}
                                ${U(_e.events.expandChange,i=>{const a=[...r.expandedStates];a[s]=i.detail,e({expandedStates:a})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${_e.slotNames.header}
                                >
                                    Section ${s}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${U("click",()=>{const i=[...r.showMoreStates];i[s]=!i[s],e({showMoreStates:i})})}
                                >
                                    show more
                                </button>
                                ${fe(!!r.showMoreStates[s],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${_e}>
                        `)}}),t({title:"wider examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,s)=>p`
                            <${_e.assign({expanded:!!r.expandedStates[s]})}
                                ${U(_e.events.expandChange,i=>{const a=[...r.expandedStates];a[s]=i.detail,e({expandedStates:a})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${_e.slotNames.header}
                                >
                                    Section ${s}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${U("click",()=>{const i=[...r.showMoreStates];i[s]=!i[s],e({showMoreStates:i})})}
                                >
                                    show more
                                </button>
                                ${fe(!!r.showMoreStates[s],p`
                                        <p>
                                            Variable contents Variable contents Variable contents
                                            Variable contents Variable contents Variable contents
                                        </p>
                                        <p>
                                            Variable contents Variable contents Variable contents
                                            Variable contents Variable contents Variable contents
                                        </p>
                                    `)}
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                            </${_e}>
                        `)}})}}),wy=it({title:x.tagName,parent:Mt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:t}){t({title:"basic",renderCallback(){return p`
                    <${x.assign({icon:qe})}></${x}>
                `}}),t({title:"using createColoredIcon",renderCallback(){return p`
                    <${x.assign({icon:Pl(qe,{"vira-icon-stroke-color":"red"})})}></${x}>
                `}}),t({title:"fit container",styles:y`
                ${x} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,renderCallback(){return p`
                    <${x.assign({icon:Pl(qe,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${x}>
                `}})}}),yy=it({title:It.tagName,parent:Mt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:t}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:y`
                    border-radius: 32px;
                `,loadingSlot:p`
                    <div
                        style=${y`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${x.assign({icon:Ar,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${x}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:y`
                    border-radius: 32px;
                `,errorSlot:p`
                    <div
                        style=${y`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${x.assign({icon:Pn,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${x}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:y`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:y`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:y`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:p`
                    <div
                        style=${y`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${x.assign({icon:Ar,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${x}>
                    </div>
                `,errorSlot:p`
                    <div
                        style=${y`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${x.assign({icon:Pn,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${x}>
                    </div>
                `}].forEach(r=>{t({title:r.title,styles:y`
                    ${It} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||y``}
                    }

                    ${r.allowReload?y`
                              ${It} {
                                  cursor: pointer;
                              }

                              ${It}:hover {
                                  border-color: #0055ff;
                              }
                          `:y``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:s}){return p`
                        <${It.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${U("click",()=>{r.allowReload&&s({imageUrl:`${r.inputs.imageUrl}?di=${uy()}`})})}
                        >
                            ${r.loadingSlot?p`
                                      <div
                                          class="slot-wrapper"
                                          slot=${li.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?p`
                                      <div class="slot-wrapper" slot=${li.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${It}>
                    `}})})}}),by=it({title:F.tagName,parent:Mt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:j.Color,initValue:F.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:j.Color,initValue:F.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:j.Color,initValue:F.cssVars["vira-input-border-color"].default},"Focus color":{controlType:j.Color,initValue:F.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:j.Color,initValue:F.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:t}){function e({styles:n,title:s,inputs:i}){t({title:s,styles:y`
                    ${n||y``}
                `,stateInitStatic:{value:i.value},renderCallback({state:a,updateState:o,controls:l}){const c={[String(F.cssVars["vira-input-text-color"].name)]:l["Text color"],[String(F.cssVars["vira-input-placeholder-color"].name)]:l["Placeholder color"],[String(F.cssVars["vira-input-border-color"].name)]:l["Border color"],[String(F.cssVars["vira-input-focus-border-color"].name)]:l["Focus color"],[String(F.cssVars["vira-input-text-selection-color"].name)]:l["Selection color"]},d=ay(c,(f,h)=>h||"inherit"),u=Object.entries(d).map(([f,h])=>[f,h].join(": ")+";").join(`
`);return p`
                        <${F.assign({...i,value:a.value})}
                            style=${u}
                            ${U(F.events.valueChange,f=>{o({value:f.detail})})}
                        ></${F}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:qe}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:y`
                    ${F} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:qe}},{title:"taller height",styles:y`
                    ${F} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:qe}},{title:"shorter height",styles:y`
                    ${F} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:qe}},{title:"max width",styles:y`
                    ${F} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:y`
                    ${F} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:sf.Password}}].forEach(e)}}),vy=it({title:sn.tagName,parent:Mt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:j.Color,initValue:""},"Hover color":{controlType:j.Color,initValue:""}},elementExamplesCallback({defineExample:t}){function e({title:r,inputs:n}){t({title:r,renderCallback({controls:s}){const i=y`
                        ${sn.cssVars["vira-link-hover-color"].name}: ${X(s["Hover color"]||"inherit")};
                        color: ${X(s["CSS Color"]||"inherit")};
                    `;return p`
                        <${sn.assign(n)} style=${i}>My Link</${sn}>
                    `}})}e({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),e({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),$y=[Mt,my,py,gy,wy,yy,by,vy];Zn({tagName:"vira-book-app",styles:y`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Rs} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,renderCallback(){return p`
            <${Rs.assign({internalRouterConfig:{basePath:Fi("element-vir","vira"),useInternalRouter:!0},entries:$y,themeColor:"#33ccff"})}>
                <h1 slot=${He.NavHeader}>Vira</h1>
            </${Rs}>
        `}});
