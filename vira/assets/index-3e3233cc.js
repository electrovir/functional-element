var nh=Object.defineProperty;var ih=(t,e,r)=>e in t?nh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var S=(t,e,r)=>(ih(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const sh=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Zn(t,e){return t?sh.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Nc(t,e){return t&&e.every(r=>Zn(t,r))}function Mn(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ls(t){return!!t}function oh(t,{keepNewLines:e}={}){return(e?t.replace(/[\s\n]*\n+[\s\n]*/g,`
`):t.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}var Ao;(function(t){t.Upper="upper",t.Lower="lower"})(Ao||(Ao={}));function ah({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var Lo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Lo||(Lo={}));function Ic(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(r=>Ps(r).trim()).join(`
`))}function Ps(t){return t?t instanceof Error?t.message:Zn(t,"message")?String(t.message):String(t):""}const lh=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function ch(t,e){return t?lh.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function uh(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Po;(function(t){t.Upper="upper",t.Lower="lower"})(Po||(Po={}));var Oo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Oo||(Oo={}));function dh(t){return t?t instanceof Error?t.message:ch(t,"message")?String(t.message):String(t):""}function No(t){return!!t&&typeof t=="object"}function fh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}fh();class Os extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const hh=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function xn(t,e){return t?hh.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function _c(t){return t instanceof Promise}function Cn(t){return Array.isArray(t)?"array":typeof t}function C(t,e){return Cn(t)===e}function Ns(t,e,r){if(!(t instanceof e))throw new Os(r||"instanceof assertion failed")}function mh(t,e){if(t==null)throw new Os(e||"defined assertion failed")}class ph extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function bi(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Re(t,e){try{return t===e||bi(t,e)?!0:No(t)&&No(e)?bi(Object.keys(t).sort(),Object.keys(e).sort())?uh(t).every(n=>Re(t[n],e[n])):!1:bi(t,e)}catch(r){throw new ph(dh(r))}}function Rc(t,e){return t===e}function gh(t,e){if(!(C(t,"string")||C(t,"number")||C(t,"symbol")))throw new Os(e||`value is of type '${Cn(t)}' but expected a PropertyKey.`)}function vi(t){try{return gh(t),!0}catch{return!1}}function wh(t){return Mn(t).filter(e=>isNaN(Number(e)))}function yh(t){return wh(t).map(r=>t[r])}function bh(t,e){return yh(e).includes(t)}function vh(t,e){return Mn(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function $h(t,e){return vh(t,r=>!e.includes(r))}function Sh(t,e,r){const n=e;if(t.has(n))return t.get(n);{const i=r();return t.set(n,i),i}}function An(t,e){let r=!1;const n=Mn(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Mn(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Io(t,e){try{return kh(t,e),!0}catch{return!1}}function kh(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Dc(){let t,e,r=!1;const n=new Promise((i,s)=>{t=o=>(r=!0,i(o)),e=o=>{r=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Dc.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Eh(t){const e=Dc();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Th(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const Mh=Th();function xh({min:t,max:e}){const{min:r,max:n}=ah({min:Math.floor(t),max:Math.floor(e)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),o=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do Mh.getRandomValues(a),l=a.reduce((c,d,u)=>c+d*256**u,0);while(l>=o);return r+l%i}const _o=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Ch(t=16){let e="";for(let r=0;r<t;r++){const n=xh({min:0,max:_o.length-1});e+=_o[n]}return e}function Ah(t,e){return Zn(t,"entryType")&&t.entryType===e}var ne=(t=>(t.ElementExample="element-example",t.Page="page",t.Root="root",t))(ne||{});function It(t,e){return t.controlType===e}var _=(t=>(t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Hidden="hidden",t.Number="number",t.Text="text",t))(_||{});const Vc=Symbol("any-type"),Lh={checkbox:!1,color:"",dropdown:"",hidden:Vc,number:0,text:""};function Ph(t,e){if(!t)return[];const r=[];return Object.entries(t).forEach(([n,i])=>{const s=Lh[i.controlType];s!==Vc&&(typeof s!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${e}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof s} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${e}' cannot have an empty control name.`)))}),r}function Is(t,e){const r=Ln(t.title);return t.parent?[...Is(t.parent,!1),Ln(t.parent.title)].concat(e?[r]:[]):e?[r]:[]}function Ln(t){return oh(t).toLowerCase().replaceAll(/\s/g,"-")}function Oh({searchFor:t,searchIn:e}){return t.every((r,n)=>e[n]===r)}function _e(t){const e={...t,entryType:ne.Page,elementExamples:{},descriptionParagraphs:t.descriptionParagraphs??[],controls:t.controls??{},errors:[]},r=new Set;return t.elementExamplesCallback&&t.elementExamplesCallback({defineExample(n){const i={...n,entryType:ne.ElementExample,parent:e,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${t.title}' is already taken.`)].filter(Ls)};r.add(n.title),e.elementExamples[Ln(i.title)]=i}}),e}var je=(t=>(t.Footer="book-footer",t.NavHeader="book-nav-header",t))(je||{}),Ro;(function(t){t.Upper="upper",t.Lower="lower"})(Ro||(Ro={}));var Do;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Do||(Do={}));function Nh(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Hc(){let t,e,r=!1;const n=new Promise((i,s)=>{t=o=>(r=!0,i(o)),e=o=>{r=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Hc.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Ih(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ih();async function ts(t=1){const e=Hc();function r(){requestAnimationFrame(()=>{t--,t?r():e.resolve()})}return r(),e.promise}function _h(t){var r;return[...t.children,...((r=t.shadowRoot)==null?void 0:r.children)??[]]}function Pn(t){if(t instanceof ShadowRoot)return Pn(t.host);const e=t.parentNode;if(e)return e instanceof Element?e:Pn(e)}function Bc(t,e){if(e(t))return t;const r=Pn(t);if(r)return Bc(r,e)}async function Rh(t){return Dh(t,1)}async function Dh(t,e){return new Promise(r=>{new IntersectionObserver((i,s)=>{Nh(i,1),s.disconnect(),r(i[0].intersectionRatio>=e)}).observe(t)})}function Vh(t){const e=Pn(t);return e&&Bc(e,r=>globalThis.getComputedStyle(r).overflowY!=="visible")||document.body}var Hh=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Bh(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const Fh=globalThis.CustomEvent||Bh();function ht(){function t(e){var r;return r=class extends Fh{constructor(i){super(e,i)}},Hh(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var Uh=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function _s(t){var e;return e=class extends Event{constructor(n){super(t,n)}},Uh(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}function zh(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Vo(t){return zh(t).map(e=>t[e])}var Ho;(function(t){t.Upper="upper",t.Lower="lower"})(Ho||(Ho={}));var Bo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Bo||(Bo={}));function Wh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Wh();class jh{constructor(){Object.defineProperty(this,"listeners",{enumerable:!0,configurable:!0,writable:!0,value:{}})}getListenerCount(){return Vo(this.listeners).map(r=>(r==null?void 0:r.size)||0).reduce((r,n)=>r+n,0)}listen(e,r,n={}){const i=this.listeners,s=C(e,"string")?e:e.type;function o(){var l;return((l=i[s])==null?void 0:l.delete(r))||!1}function a(l,c){n.once&&o(),r(l,c)}return i[s]||(i[s]=new Map),i[s].set(r,{listener:a,removeListener:o}),o}removeListener(e,r){const n=C(e,"string")?e:e.type,i=this.listeners[n];if(!i)return!1;const s=i.get(r);return s?s.removeListener():!1}dispatch(e){const r=this.listeners[e.type],n=(r==null?void 0:r.size)||0;return r==null||r.forEach(i=>{i.listener(e,i.removeListener)}),n}removeAllListeners(){const r=Vo(this.listeners).reduce((n,i)=>{const s=(i==null?void 0:i.size)||0;return i==null||i.clear(),n+s},0);return this.listeners={},r}destroy(){this.removeAllListeners()}}class Fc extends jh{}function Uc(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function Fo(t,e,r){return Uc(globalThis,t,e,r)}const Gh=Symbol("no update");class $i extends ht()("observable-value-update"){}class Vb extends ht()("observable-value-resolve"){}class Hb extends ht()("observable-value-error"){}class qh extends _s("observable-destroy"){}class Bb extends _s("observable-callback-call"){}class Fb extends ht()("observable-params-update"){}class Ub extends ht()("observable-interval-run"){}class zb extends ht()("observable-interval-skip"){}class Wb extends ht()("observable-interval-rate-limited"){}class Zh{constructor(){Object.defineProperty(this,"listenTarget",{enumerable:!0,configurable:!0,writable:!0,value:new Fc}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"listenerMap",{enumerable:!0,configurable:!0,writable:!0,value:new WeakMap})}dispatch(...e){return this.listenTarget.dispatch(...e)}removeAllListeners(){return this.listenTarget.removeAllListeners()}getListenerCount(){return this.listenTarget.getListenerCount()}setValue(e,r=this.equalityCheck){return e===Gh?!1:!r||!r(this.value,e)?(this.value=e,this.listenTarget.dispatch(new $i({detail:e})),!0):!1}listen(e,r){const n=i=>r(i.detail);return this.listenerMap.set(r,n),e&&r(this.value),this.listenTarget.listen($i,n)}removeListener(e){const r=this.listenerMap.get(e);return!!r&&this.listenTarget.removeListener($i,r)}destroy(){this.listenTarget.dispatch(new qh),this.listenTarget.destroy()}listenToEvent(e,r,n){return this.listenTarget.listen(e,r,n)}}var Uo;(function(t){t.Upper="upper",t.Lower="lower"})(Uo||(Uo={}));var zo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(zo||(zo={}));function Yh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Yh();function Kh(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Wo;(function(t){t.Upper="upper",t.Lower="lower"})(Wo||(Wo={}));var jo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(jo||(jo={}));function Jh(t,e){return Kh(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function Xh(t,e){return Jh(t,r=>e.includes(r))}function Qh(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Qh();class Ot extends Error{}class em extends Ot{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class tm extends Ot{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class rm extends Ot{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class jt extends Ot{}class zc extends Ot{constructor(e){super(`Invalid unit ${e}`)}}class le extends Ot{}class Xe extends Ot{constructor(){super("Zone is an abstract class")}}const y="numeric",Ne="short",pe="long",On={year:y,month:y,day:y},Wc={year:y,month:Ne,day:y},nm={year:y,month:Ne,day:y,weekday:Ne},jc={year:y,month:pe,day:y},Gc={year:y,month:pe,day:y,weekday:pe},qc={hour:y,minute:y},Zc={hour:y,minute:y,second:y},Yc={hour:y,minute:y,second:y,timeZoneName:Ne},Kc={hour:y,minute:y,second:y,timeZoneName:pe},Jc={hour:y,minute:y,hourCycle:"h23"},Xc={hour:y,minute:y,second:y,hourCycle:"h23"},Qc={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:Ne},eu={hour:y,minute:y,second:y,hourCycle:"h23",timeZoneName:pe},tu={year:y,month:y,day:y,hour:y,minute:y},ru={year:y,month:y,day:y,hour:y,minute:y,second:y},nu={year:y,month:Ne,day:y,hour:y,minute:y},iu={year:y,month:Ne,day:y,hour:y,minute:y,second:y},im={year:y,month:Ne,day:y,weekday:Ne,hour:y,minute:y},su={year:y,month:pe,day:y,hour:y,minute:y,timeZoneName:Ne},ou={year:y,month:pe,day:y,hour:y,minute:y,second:y,timeZoneName:Ne},au={year:y,month:pe,day:y,weekday:pe,hour:y,minute:y,timeZoneName:pe},lu={year:y,month:pe,day:y,weekday:pe,hour:y,minute:y,second:y,timeZoneName:pe};class Br{get type(){throw new Xe}get name(){throw new Xe}get ianaName(){return this.name}get isUniversal(){throw new Xe}offsetName(e,r){throw new Xe}formatOffset(e,r){throw new Xe}offset(e){throw new Xe}equals(e){throw new Xe}get isValid(){throw new Xe}}let Si=null;class Yn extends Br{static get instance(){return Si===null&&(Si=new Yn),Si}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return wu(e,r,n)}formatOffset(e,r){return vr(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let bn={};function sm(t){return bn[t]||(bn[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),bn[t]}const om={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function am(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,s,o,a,l,c,d]=n;return[o,i,s,a,l,c,d]}function lm(t,e){const r=t.formatToParts(e),n=[];for(let i=0;i<r.length;i++){const{type:s,value:o}=r[i],a=om[s];s==="era"?n[a]=o:M(a)||(n[a]=parseInt(o,10))}return n}let Jr={};class Ze extends Br{static create(e){return Jr[e]||(Jr[e]=new Ze(e)),Jr[e]}static resetCache(){Jr={},bn={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=Ze.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return wu(e,r,n,this.name)}formatOffset(e,r){return vr(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=sm(this.name);let[i,s,o,a,l,c,d]=n.formatToParts?lm(n,r):am(n,r);a==="BC"&&(i=-Math.abs(i)+1);const f=Jn({year:i,month:s,day:o,hour:l===24?0:l,minute:c,second:d,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let Go={};function cm(t,e={}){const r=JSON.stringify([t,e]);let n=Go[r];return n||(n=new Intl.ListFormat(t,e),Go[r]=n),n}let rs={};function ns(t,e={}){const r=JSON.stringify([t,e]);let n=rs[r];return n||(n=new Intl.DateTimeFormat(t,e),rs[r]=n),n}let is={};function um(t,e={}){const r=JSON.stringify([t,e]);let n=is[r];return n||(n=new Intl.NumberFormat(t,e),is[r]=n),n}let ss={};function dm(t,e={}){const{base:r,...n}=e,i=JSON.stringify([t,n]);let s=ss[i];return s||(s=new Intl.RelativeTimeFormat(t,e),ss[i]=s),s}let pr=null;function fm(){return pr||(pr=new Intl.DateTimeFormat().resolvedOptions().locale,pr)}let qo={};function hm(t){let e=qo[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,qo[t]=e}return e}function mm(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,i;try{n=ns(t).resolvedOptions(),i=t}catch{const l=t.substring(0,r);n=ns(l).resolvedOptions(),i=l}const{numberingSystem:s,calendar:o}=n;return[i,s,o]}}function pm(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function gm(t){const e=[];for(let r=1;r<=12;r++){const n=x.utc(2009,r,1);e.push(t(n))}return e}function wm(t){const e=[];for(let r=1;r<=7;r++){const n=x.utc(2016,11,13+r);e.push(t(n))}return e}function Xr(t,e,r,n){const i=t.listingMode();return i==="error"?null:i==="en"?r(e):n(e)}function ym(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class bm{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:s,...o}=n;if(!r||Object.keys(o).length>0){const a={useGrouping:!1,...n};n.padTo>0&&(a.minimumIntegerDigits=n.padTo),this.inf=um(e,a)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):Hs(e,3);return Y(r,this.padTo)}}}class vm{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const o=-1*(e.offset/60),a=o>=0?`Etc/GMT+${o}`:`Etc/GMT${o}`;e.offset!==0&&Ze.create(a).valid?(i=a,this.dt=e):(i="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const s={...this.opts};s.timeZone=s.timeZone||i,this.dtf=ns(r,s)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class $m{constructor(e,r,n){this.opts={style:"long",...n},!r&&pu()&&(this.rtf=dm(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):Fm(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const Sm={firstDay:1,minimalDays:4,weekend:[6,7]};class V{static fromOpts(e){return V.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,i,s=!1){const o=e||j.defaultLocale,a=o||(s?"en-US":fm()),l=r||j.defaultNumberingSystem,c=n||j.defaultOutputCalendar,d=os(i)||j.defaultWeekSettings;return new V(a,l,c,d,o)}static resetCache(){pr=null,rs={},is={},ss={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return V.create(e,r,n,i)}constructor(e,r,n,i,s){const[o,a,l]=mm(e);this.locale=o,this.numberingSystem=r||a||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=pm(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=s,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=ym(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:V.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,os(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return Xr(this,e,vu,()=>{const n=r?{month:e,day:"numeric"}:{month:e},i=r?"format":"standalone";return this.monthsCache[i][e]||(this.monthsCache[i][e]=gm(s=>this.extract(s,n,"month"))),this.monthsCache[i][e]})}weekdays(e,r=!1){return Xr(this,e,ku,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=r?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=wm(s=>this.extract(s,n,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return Xr(this,void 0,()=>Eu,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[x.utc(2016,11,13,9),x.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return Xr(this,e,Tu,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[x.utc(-40,1,1),x.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const i=this.dtFormatter(e,r),s=i.formatToParts(),o=s.find(a=>a.type.toLowerCase()===n);return o?o.value:null}numberFormatter(e={}){return new bm(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new vm(e,this.intl,r)}relFormatter(e={}){return new $m(this.intl,this.isEnglish(),e)}listFormatter(e={}){return cm(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:gu()?hm(this.locale):Sm}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let ki=null;class ie extends Br{static get utcInstance(){return ki===null&&(ki=new ie(0)),ki}static instance(e){return e===0?ie.utcInstance:new ie(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new ie(Xn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${vr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${vr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return vr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class km extends Br{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function tt(t,e){if(M(t)||t===null)return e;if(t instanceof Br)return t;if(Mm(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?Yn.instance:r==="utc"||r==="gmt"?ie.utcInstance:ie.parseSpecifier(r)||Ze.create(t)}else return Mt(t)?ie.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new km(t)}let Zo=()=>Date.now(),Yo="system",Ko=null,Jo=null,Xo=null,Qo=60,ea,ta=null;class j{static get now(){return Zo}static set now(e){Zo=e}static set defaultZone(e){Yo=e}static get defaultZone(){return tt(Yo,Yn.instance)}static get defaultLocale(){return Ko}static set defaultLocale(e){Ko=e}static get defaultNumberingSystem(){return Jo}static set defaultNumberingSystem(e){Jo=e}static get defaultOutputCalendar(){return Xo}static set defaultOutputCalendar(e){Xo=e}static get defaultWeekSettings(){return ta}static set defaultWeekSettings(e){ta=os(e)}static get twoDigitCutoffYear(){return Qo}static set twoDigitCutoffYear(e){Qo=e%100}static get throwOnInvalid(){return ea}static set throwOnInvalid(e){ea=e}static resetCaches(){V.resetCache(),Ze.resetCache()}}class Le{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const cu=[0,31,59,90,120,151,181,212,243,273,304,334],uu=[0,31,60,91,121,152,182,213,244,274,305,335];function Se(t,e){return new Le("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function Rs(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function du(t,e,r){return r+(Fr(t)?uu:cu)[e-1]}function fu(t,e){const r=Fr(t)?uu:cu,n=r.findIndex(s=>s<e),i=e-r[n];return{month:n+1,day:i}}function Ds(t,e){return(t-e+7)%7+1}function Nn(t,e=4,r=1){const{year:n,month:i,day:s}=t,o=du(n,i,s),a=Ds(Rs(n,i,s),r);let l=Math.floor((o-a+14-e)/7),c;return l<1?(c=n-1,l=xr(c,e,r)):l>xr(n,e,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:a,...Qn(t)}}function ra(t,e=4,r=1){const{weekYear:n,weekNumber:i,weekday:s}=t,o=Ds(Rs(n,1,e),r),a=qt(n);let l=i*7+s-o-7+e,c;l<1?(c=n-1,l+=qt(c)):l>a?(c=n+1,l-=qt(n)):c=n;const{month:d,day:u}=fu(c,l);return{year:c,month:d,day:u,...Qn(t)}}function Ei(t){const{year:e,month:r,day:n}=t,i=du(e,r,n);return{year:e,ordinal:i,...Qn(t)}}function na(t){const{year:e,ordinal:r}=t,{month:n,day:i}=fu(e,r);return{year:e,month:n,day:i,...Qn(t)}}function ia(t,e){if(!M(t.localWeekday)||!M(t.localWeekNumber)||!M(t.localWeekYear)){if(!M(t.weekday)||!M(t.weekNumber)||!M(t.weekYear))throw new jt("Cannot mix locale-based week fields with ISO-based week fields");return M(t.localWeekday)||(t.weekday=t.localWeekday),M(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),M(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Em(t,e=4,r=1){const n=Kn(t.weekYear),i=ke(t.weekNumber,1,xr(t.weekYear,e,r)),s=ke(t.weekday,1,7);return n?i?s?!1:Se("weekday",t.weekday):Se("week",t.weekNumber):Se("weekYear",t.weekYear)}function Tm(t){const e=Kn(t.year),r=ke(t.ordinal,1,qt(t.year));return e?r?!1:Se("ordinal",t.ordinal):Se("year",t.year)}function hu(t){const e=Kn(t.year),r=ke(t.month,1,12),n=ke(t.day,1,In(t.year,t.month));return e?r?n?!1:Se("day",t.day):Se("month",t.month):Se("year",t.year)}function mu(t){const{hour:e,minute:r,second:n,millisecond:i}=t,s=ke(e,0,23)||e===24&&r===0&&n===0&&i===0,o=ke(r,0,59),a=ke(n,0,59),l=ke(i,0,999);return s?o?a?l?!1:Se("millisecond",i):Se("second",n):Se("minute",r):Se("hour",e)}function M(t){return typeof t>"u"}function Mt(t){return typeof t=="number"}function Kn(t){return typeof t=="number"&&t%1===0}function Mm(t){return typeof t=="string"}function xm(t){return Object.prototype.toString.call(t)==="[object Date]"}function pu(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function gu(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Cm(t){return Array.isArray(t)?t:[t]}function sa(t,e,r){if(t.length!==0)return t.reduce((n,i)=>{const s=[e(i),i];return n&&r(n[0],s[0])===n[0]?n:s},null)[1]}function Am(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function Xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function os(t){if(t==null)return null;if(typeof t!="object")throw new le("Week settings must be an object");if(!ke(t.firstDay,1,7)||!ke(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!ke(e,1,7)))throw new le("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function ke(t,e,r){return Kn(t)&&t>=e&&t<=r}function Lm(t,e){return t-e*Math.floor(t/e)}function Y(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function et(t){if(!(M(t)||t===null||t===""))return parseInt(t,10)}function yt(t){if(!(M(t)||t===null||t===""))return parseFloat(t)}function Vs(t){if(!(M(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function Hs(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function Fr(t){return t%4===0&&(t%100!==0||t%400===0)}function qt(t){return Fr(t)?366:365}function In(t,e){const r=Lm(e-1,12)+1,n=t+(e-r)/12;return r===2?Fr(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Jn(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function oa(t,e,r){return-Ds(Rs(t,1,e),r)+e-1}function xr(t,e=4,r=1){const n=oa(t,e,r),i=oa(t+1,e,r);return(qt(t)-n+i)/7}function as(t){return t>99?t:t>j.twoDigitCutoffYear?1900+t:2e3+t}function wu(t,e,r,n=null){const i=new Date(t),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(s.timeZone=n);const o={timeZoneName:e,...s},a=new Intl.DateTimeFormat(r,o).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return a?a.value:null}function Xn(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function yu(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new le(`Invalid unit value ${t}`);return e}function _n(t,e){const r={};for(const n in t)if(Xt(t,n)){const i=t[n];if(i==null)continue;r[e(n)]=yu(i)}return r}function vr(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),i=t>=0?"+":"-";switch(e){case"short":return`${i}${Y(r,2)}:${Y(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${Y(r,2)}${Y(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Qn(t){return Am(t,["hour","minute","second","millisecond"])}const Pm=["January","February","March","April","May","June","July","August","September","October","November","December"],bu=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Om=["J","F","M","A","M","J","J","A","S","O","N","D"];function vu(t){switch(t){case"narrow":return[...Om];case"short":return[...bu];case"long":return[...Pm];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const $u=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Su=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Nm=["M","T","W","T","F","S","S"];function ku(t){switch(t){case"narrow":return[...Nm];case"short":return[...Su];case"long":return[...$u];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const Eu=["AM","PM"],Im=["Before Christ","Anno Domini"],_m=["BC","AD"],Rm=["B","A"];function Tu(t){switch(t){case"narrow":return[...Rm];case"short":return[..._m];case"long":return[...Im];default:return null}}function Dm(t){return Eu[t.hour<12?0:1]}function Vm(t,e){return ku(e)[t.weekday-1]}function Hm(t,e){return vu(e)[t.month-1]}function Bm(t,e){return Tu(e)[t.year<0?0:1]}function Fm(t,e,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&s){const u=t==="days";switch(e){case 1:return u?"tomorrow":`next ${i[t][0]}`;case-1:return u?"yesterday":`last ${i[t][0]}`;case 0:return u?"today":`this ${i[t][0]}`}}const o=Object.is(e,-0)||e<0,a=Math.abs(e),l=a===1,c=i[t],d=n?l?c[1]:c[2]||c[1]:l?i[t][0]:t;return o?`${a} ${d} ago`:`in ${a} ${d}`}function aa(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const Um={D:On,DD:Wc,DDD:jc,DDDD:Gc,t:qc,tt:Zc,ttt:Yc,tttt:Kc,T:Jc,TT:Xc,TTT:Qc,TTTT:eu,f:tu,ff:nu,fff:su,ffff:au,F:ru,FF:iu,FFF:ou,FFFF:lu};class re{static create(e,r={}){return new re(e,r)}static parseFormat(e){let r=null,n="",i=!1;const s=[];for(let o=0;o<e.length;o++){const a=e.charAt(o);a==="'"?(n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||a===r?n+=a:(n.length>0&&s.push({literal:/^\s+$/.test(n),val:n}),n=a,r=a)}return n.length>0&&s.push({literal:i||/^\s+$/.test(n),val:n}),s}static macroTokenToFormatOpts(e){return Um[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return Y(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",s=(h,m)=>this.loc.extract(e,h,m),o=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",a=()=>n?Dm(e):s({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?Hm(e,h):s(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?Vm(e,h):s(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),d=h=>{const m=re.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(e,m):h},u=h=>n?Bm(e,h):s({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return o({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return o({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return o({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return i?s({day:"numeric"},"day"):this.num(e.day);case"dd":return i?s({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?s({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?s({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?s({month:"numeric"},"month"):this.num(e.month);case"MM":return i?s({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?s({year:"numeric"},"year"):this.num(e.year);case"yy":return i?s({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?s({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?s({year:"numeric"},"year"):this.num(e.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return d(h)}};return aa(re.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},s=re.parseFormat(r),o=s.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),a=e.shiftTo(...o.map(n).filter(l=>l));return aa(s,i(a))}}const Mu=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function sr(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function or(...t){return e=>t.reduce(([r,n,i],s)=>{const[o,a,l]=s(e,i);return[{...r,...o},a||n,l]},[{},null,1]).slice(0,2)}function ar(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const i=r.exec(t);if(i)return n(i)}return[null,null]}function xu(...t){return(e,r)=>{const n={};let i;for(i=0;i<t.length;i++)n[t[i]]=et(e[r+i]);return[n,null,r+i]}}const Cu=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,zm=`(?:${Cu.source}?(?:\\[(${Mu.source})\\])?)?`,Bs=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,Au=RegExp(`${Bs.source}${zm}`),Fs=RegExp(`(?:T${Au.source})?`),Wm=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,jm=/(\d{4})-?W(\d\d)(?:-?(\d))?/,Gm=/(\d{4})-?(\d{3})/,qm=xu("weekYear","weekNumber","weekDay"),Zm=xu("year","ordinal"),Ym=/(\d{4})-(\d\d)-(\d\d)/,Lu=RegExp(`${Bs.source} ?(?:${Cu.source}|(${Mu.source}))?`),Km=RegExp(`(?: ${Lu.source})?`);function Zt(t,e,r){const n=t[e];return M(n)?r:et(n)}function Jm(t,e){return[{year:Zt(t,e),month:Zt(t,e+1,1),day:Zt(t,e+2,1)},null,e+3]}function lr(t,e){return[{hours:Zt(t,e,0),minutes:Zt(t,e+1,0),seconds:Zt(t,e+2,0),milliseconds:Vs(t[e+3])},null,e+4]}function Ur(t,e){const r=!t[e]&&!t[e+1],n=Xn(t[e+1],t[e+2]),i=r?null:ie.instance(n);return[{},i,e+3]}function zr(t,e){const r=t[e]?Ze.create(t[e]):null;return[{},r,e+1]}const Xm=RegExp(`^T?${Bs.source}$`),Qm=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function e0(t){const[e,r,n,i,s,o,a,l,c]=t,d=e[0]==="-",u=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&d)?-h:h;return[{years:f(yt(r)),months:f(yt(n)),weeks:f(yt(i)),days:f(yt(s)),hours:f(yt(o)),minutes:f(yt(a)),seconds:f(yt(l),l==="-0"),milliseconds:f(Vs(c),u)}]}const t0={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Us(t,e,r,n,i,s,o){const a={year:e.length===2?as(et(e)):et(e),month:bu.indexOf(r)+1,day:et(n),hour:et(i),minute:et(s)};return o&&(a.second=et(o)),t&&(a.weekday=t.length>3?$u.indexOf(t)+1:Su.indexOf(t)+1),a}const r0=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function n0(t){const[,e,r,n,i,s,o,a,l,c,d,u]=t,f=Us(e,i,n,r,s,o,a);let h;return l?h=t0[l]:c?h=0:h=Xn(d,u),[f,new ie(h)]}function i0(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const s0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,o0=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,a0=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function la(t){const[,e,r,n,i,s,o,a]=t;return[Us(e,i,n,r,s,o,a),ie.utcInstance]}function l0(t){const[,e,r,n,i,s,o,a]=t;return[Us(e,a,r,n,i,s,o),ie.utcInstance]}const c0=sr(Wm,Fs),u0=sr(jm,Fs),d0=sr(Gm,Fs),f0=sr(Au),Pu=or(Jm,lr,Ur,zr),h0=or(qm,lr,Ur,zr),m0=or(Zm,lr,Ur,zr),p0=or(lr,Ur,zr);function g0(t){return ar(t,[c0,Pu],[u0,h0],[d0,m0],[f0,p0])}function w0(t){return ar(i0(t),[r0,n0])}function y0(t){return ar(t,[s0,la],[o0,la],[a0,l0])}function b0(t){return ar(t,[Qm,e0])}const v0=or(lr);function $0(t){return ar(t,[Xm,v0])}const S0=sr(Ym,Km),k0=sr(Lu),E0=or(lr,Ur,zr);function T0(t){return ar(t,[S0,Pu],[k0,E0])}const ca="Invalid Duration",Ou={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},M0={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...Ou},ye=146097/400,_t=146097/4800,x0={years:{quarters:4,months:12,weeks:ye/7,days:ye,hours:ye*24,minutes:ye*24*60,seconds:ye*24*60*60,milliseconds:ye*24*60*60*1e3},quarters:{months:3,weeks:ye/28,days:ye/4,hours:ye*24/4,minutes:ye*24*60/4,seconds:ye*24*60*60/4,milliseconds:ye*24*60*60*1e3/4},months:{weeks:_t/7,days:_t,hours:_t*24,minutes:_t*24*60,seconds:_t*24*60*60,milliseconds:_t*24*60*60*1e3},...Ou},kt=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],C0=kt.slice(0).reverse();function Qe(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new O(n)}function Nu(t,e){let r=e.milliseconds??0;for(const n of C0.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function ua(t,e){const r=Nu(t,e)<0?-1:1;kt.reduceRight((n,i)=>{if(M(e[i]))return n;if(n){const s=e[n]*r,o=t[i][n],a=Math.floor(s/o);e[i]+=a*r,e[n]-=a*o*r}return i},null),kt.reduce((n,i)=>{if(M(e[i]))return n;if(n){const s=e[n]%1;e[n]-=s,e[i]+=s*t[n][i]}return i},null)}function A0(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class O{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?x0:M0;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||V.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return O.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new le(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new O({values:_n(e,O.normalizeUnit),loc:V.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(Mt(e))return O.fromMillis(e);if(O.isDuration(e))return e;if(typeof e=="object")return O.fromObject(e);throw new le(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=b0(e);return n?O.fromObject(n,r):O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=$0(e);return n?O.fromObject(n,r):O.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new le("need to specify a reason the Duration is invalid");const n=e instanceof Le?e:new Le(e,r);if(j.throwOnInvalid)throw new rm(n);return new O({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new zc(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?re.create(this.loc,n).formatDurationFromString(this,e):ca}toHuman(e={}){if(!this.isValid)return ca;const r=kt.map(n=>{const i=this.values[n];return M(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=Hs(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},x.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Nu(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e),n={};for(const i of kt)(Xt(r.values,i)||Xt(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Qe(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=yu(e(this.values[n],n));return Qe(this,{values:r},!0)}get(e){return this[O.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,..._n(e,O.normalizeUnit)};return Qe(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const o={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Qe(this,o)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return ua(this.matrix,e),Qe(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=A0(this.normalize().shiftToAll().toObject());return Qe(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(o=>O.normalizeUnit(o));const r={},n={},i=this.toObject();let s;for(const o of kt)if(e.indexOf(o)>=0){s=o;let a=0;for(const c in n)a+=this.matrix[c][o]*n[c],n[c]=0;Mt(i[o])&&(a+=i[o]);const l=Math.trunc(a);r[o]=l,n[o]=(a*1e3-l*1e3)/1e3}else Mt(i[o])&&(n[o]=i[o]);for(const o in n)n[o]!==0&&(r[s]+=o===s?n[o]:n[o]/this.matrix[s][o]);return ua(this.matrix,r),Qe(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return Qe(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of kt)if(!r(this.values[n],e.values[n]))return!1;return!0}}const Rt="Invalid Interval";function L0(t,e){return!t||!t.isValid?G.invalid("missing or invalid start"):!e||!e.isValid?G.invalid("missing or invalid end"):e<t?G.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class G{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new le("need to specify a reason the Interval is invalid");const n=e instanceof Le?e:new Le(e,r);if(j.throwOnInvalid)throw new tm(n);return new G({invalid:n})}static fromDateTimes(e,r){const n=fr(e),i=fr(r),s=L0(n,i);return s??new G({start:n,end:i})}static after(e,r){const n=O.fromDurationLike(r),i=fr(e);return G.fromDateTimes(i,i.plus(n))}static before(e,r){const n=O.fromDurationLike(r),i=fr(e);return G.fromDateTimes(i.minus(n),i)}static fromISO(e,r){const[n,i]=(e||"").split("/",2);if(n&&i){let s,o;try{s=x.fromISO(n,r),o=s.isValid}catch{o=!1}let a,l;try{a=x.fromISO(i,r),l=a.isValid}catch{l=!1}if(o&&l)return G.fromDateTimes(s,a);if(o){const c=O.fromISO(i,r);if(c.isValid)return G.after(s,c)}else if(l){const c=O.fromISO(n,r);if(c.isValid)return G.before(a,c)}}return G.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let i;return r!=null&&r.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(e,r),Math.floor(i.diff(n,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?G.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(fr).filter(o=>this.contains(o)).sort((o,a)=>o.toMillis()-a.toMillis()),n=[];let{s:i}=this,s=0;for(;i<this.e;){const o=r[s]||this.e,a=+o>+this.e?this.e:o;n.push(G.fromDateTimes(i,a)),i=a,s+=1}return n}splitBy(e){const r=O.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,s;const o=[];for(;n<this.e;){const a=this.start.plus(r.mapUnits(l=>l*i));s=+a>+this.e?this.e:a,o.push(G.fromDateTimes(n,s)),n=s,i+=1}return o}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:G.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return G.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((i,s)=>i.s-s.s).reduce(([i,s],o)=>s?s.overlaps(o)||s.abutsStart(o)?[i,s.union(o)]:[i.concat([s]),o]:[i,o],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const i=[],s=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),o=Array.prototype.concat(...s),a=o.sort((l,c)=>l.time-c.time);for(const l of a)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(G.fromDateTimes(r,l.time)),r=null);return G.merge(i)}difference(...e){return G.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:Rt}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=On,r={}){return this.isValid?re.create(this.s.loc.clone(r),e).formatInterval(this):Rt}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:Rt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:Rt}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:Rt}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:Rt}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):O.invalid(this.invalidReason)}mapEndpoints(e){return G.fromDateTimes(e(this.s),e(this.e))}}class Qr{static hasDST(e=j.defaultZone){const r=x.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return Ze.isValidZone(e)}static normalizeZone(e){return tt(e,j.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||V.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||V.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||V.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||V.create(r,n,s)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:s="gregory"}={}){return(i||V.create(r,n,s)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||V.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||V.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return V.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return V.create(r,null,"gregory").eras(e)}static features(){return{relative:pu(),localeWeek:gu()}}}function da(t,e){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(O.fromMillis(n).as("days"))}function P0(t,e,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=da(l,c);return(d-d%7)/7}],["days",da]],i={},s=t;let o,a;for(const[l,c]of n)r.indexOf(l)>=0&&(o=l,i[l]=c(t,e),a=s.plus(i),a>e?(i[l]--,t=s.plus(i),t>e&&(a=t,i[l]--,t=s.plus(i))):t=a);return[t,i,a,o]}function O0(t,e,r,n){let[i,s,o,a]=P0(t,e,r);const l=e-i,c=r.filter(u=>["hours","minutes","seconds","milliseconds"].indexOf(u)>=0);c.length===0&&(o<e&&(o=i.plus({[a]:1})),o!==i&&(s[a]=(s[a]||0)+l/(o-i)));const d=O.fromObject(s,n);return c.length>0?O.fromMillis(l,n).shiftTo(...c).plus(d):d}const zs={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},fa={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},N0=zs.hanidec.replace(/[\[|\]]/g,"").split("");function I0(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(zs.hanidec)!==-1)e+=N0.indexOf(t[r]);else for(const i in fa){const[s,o]=fa[i];n>=s&&n<=o&&(e+=n-s)}}return parseInt(e,10)}else return e}function xe({numberingSystem:t},e=""){return new RegExp(`${zs[t||"latn"]}${e}`)}const _0="missing Intl.DateTimeFormat.formatToParts support";function N(t,e=r=>r){return{regex:t,deser:([r])=>e(I0(r))}}const R0=String.fromCharCode(160),Iu=`[ ${R0}]`,_u=new RegExp(Iu,"g");function D0(t){return t.replace(/\./g,"\\.?").replace(_u,Iu)}function ha(t){return t.replace(/\./g,"").replace(_u," ").toLowerCase()}function Ce(t,e){return t===null?null:{regex:RegExp(t.map(D0).join("|")),deser:([r])=>t.findIndex(n=>ha(r)===ha(n))+e}}function ma(t,e){return{regex:t,deser:([,r,n])=>Xn(r,n),groups:e}}function en(t){return{regex:t,deser:([e])=>e}}function V0(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function H0(t,e){const r=xe(e),n=xe(e,"{2}"),i=xe(e,"{3}"),s=xe(e,"{4}"),o=xe(e,"{6}"),a=xe(e,"{1,2}"),l=xe(e,"{1,3}"),c=xe(e,"{1,6}"),d=xe(e,"{1,9}"),u=xe(e,"{2,4}"),f=xe(e,"{4,6}"),h=b=>({regex:RegExp(V0(b.val)),deser:([$])=>$,literal:!0}),g=(b=>{if(t.literal)return h(b);switch(b.val){case"G":return Ce(e.eras("short"),0);case"GG":return Ce(e.eras("long"),0);case"y":return N(c);case"yy":return N(u,as);case"yyyy":return N(s);case"yyyyy":return N(f);case"yyyyyy":return N(o);case"M":return N(a);case"MM":return N(n);case"MMM":return Ce(e.months("short",!0),1);case"MMMM":return Ce(e.months("long",!0),1);case"L":return N(a);case"LL":return N(n);case"LLL":return Ce(e.months("short",!1),1);case"LLLL":return Ce(e.months("long",!1),1);case"d":return N(a);case"dd":return N(n);case"o":return N(l);case"ooo":return N(i);case"HH":return N(n);case"H":return N(a);case"hh":return N(n);case"h":return N(a);case"mm":return N(n);case"m":return N(a);case"q":return N(a);case"qq":return N(n);case"s":return N(a);case"ss":return N(n);case"S":return N(l);case"SSS":return N(i);case"u":return en(d);case"uu":return en(a);case"uuu":return N(r);case"a":return Ce(e.meridiems(),0);case"kkkk":return N(s);case"kk":return N(u,as);case"W":return N(a);case"WW":return N(n);case"E":case"c":return N(r);case"EEE":return Ce(e.weekdays("short",!1),1);case"EEEE":return Ce(e.weekdays("long",!1),1);case"ccc":return Ce(e.weekdays("short",!0),1);case"cccc":return Ce(e.weekdays("long",!0),1);case"Z":case"ZZ":return ma(new RegExp(`([+-]${a.source})(?::(${n.source}))?`),2);case"ZZZ":return ma(new RegExp(`([+-]${a.source})(${n.source})?`),2);case"z":return en(/[a-z_+-/]{1,256}?/i);case" ":return en(/[^\S\n\r]/);default:return h(b)}})(t)||{invalidReason:_0};return g.token=t,g}const B0={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function F0(t,e,r){const{type:n,value:i}=t;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const s=e[n];let o=n;n==="hour"&&(e.hour12!=null?o=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?o="hour12":o="hour24":o=r.hour12?"hour12":"hour24");let a=B0[o];if(typeof a=="object"&&(a=a[s]),a)return{literal:!1,val:a}}function U0(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function z0(t,e,r){const n=t.match(e);if(n){const i={};let s=1;for(const o in r)if(Xt(r,o)){const a=r[o],l=a.groups?a.groups+1:1;!a.literal&&a.token&&(i[a.token.val[0]]=a.deser(n.slice(s,s+l))),s+=l}return[n,i]}else return[n,{}]}function W0(t){const e=s=>{switch(s){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return M(t.z)||(r=Ze.create(t.z)),M(t.Z)||(r||(r=new ie(t.Z)),n=t.Z),M(t.q)||(t.M=(t.q-1)*3+1),M(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),M(t.u)||(t.S=Vs(t.u)),[Object.keys(t).reduce((s,o)=>{const a=e(o);return a&&(s[a]=t[o]),s},{}),r,n]}let Ti=null;function j0(){return Ti||(Ti=x.fromMillis(1555555555555)),Ti}function G0(t,e){if(t.literal)return t;const r=re.macroTokenToFormatOpts(t.val),n=Vu(r,e);return n==null||n.includes(void 0)?t:n}function Ru(t,e){return Array.prototype.concat(...t.map(r=>G0(r,e)))}function Du(t,e,r){const n=Ru(re.parseFormat(r),t),i=n.map(o=>H0(o,t)),s=i.find(o=>o.invalidReason);if(s)return{input:e,tokens:n,invalidReason:s.invalidReason};{const[o,a]=U0(i),l=RegExp(o,"i"),[c,d]=z0(e,l,a),[u,f,h]=d?W0(d):[null,null,void 0];if(Xt(d,"a")&&Xt(d,"H"))throw new jt("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:d,result:u,zone:f,specificOffset:h}}}function q0(t,e,r){const{result:n,zone:i,specificOffset:s,invalidReason:o}=Du(t,e,r);return[n,i,s,o]}function Vu(t,e){if(!t)return null;const n=re.create(e,t).dtFormatter(j0()),i=n.formatToParts(),s=n.resolvedOptions();return i.map(o=>F0(o,t,s))}const Mi="Invalid DateTime",pa=864e13;function tn(t){return new Le("unsupported zone",`the zone "${t.name}" is not supported`)}function xi(t){return t.weekData===null&&(t.weekData=Nn(t.c)),t.weekData}function Ci(t){return t.localWeekData===null&&(t.localWeekData=Nn(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function bt(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new x({...r,...e,old:r})}function Hu(t,e,r){let n=t-e*60*1e3;const i=r.offset(n);if(e===i)return[n,e];n-=(i-e)*60*1e3;const s=r.offset(n);return i===s?[n,i]:[t-Math.min(i,s)*60*1e3,Math.max(i,s)]}function rn(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function vn(t,e,r){return Hu(Jn(t),e,r)}function ga(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),i=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,s={...t.c,year:n,month:i,day:Math.min(t.c.day,In(n,i))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},o=O.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),a=Jn(s);let[l,c]=Hu(a,r,t.zone);return o!==0&&(l+=o,c=t.zone.offset(l)),{ts:l,o:c}}function dr(t,e,r,n,i,s){const{setZone:o,zone:a}=r;if(t&&Object.keys(t).length!==0||e){const l=e||a,c=x.fromObject(t,{...r,zone:l,specificOffset:s});return o?c:c.setZone(a)}else return x.invalid(new Le("unparsable",`the input "${i}" can't be parsed as ${n}`))}function nn(t,e,r=!0){return t.isValid?re.create(V.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function Ai(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=Y(t.c.year,r?6:4),e?(n+="-",n+=Y(t.c.month),n+="-",n+=Y(t.c.day)):(n+=Y(t.c.month),n+=Y(t.c.day)),n}function wa(t,e,r,n,i,s){let o=Y(t.c.hour);return e?(o+=":",o+=Y(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(o+=":")):o+=Y(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(o+=Y(t.c.second),(t.c.millisecond!==0||!n)&&(o+=".",o+=Y(t.c.millisecond,3))),i&&(t.isOffsetFixed&&t.offset===0&&!s?o+="Z":t.o<0?(o+="-",o+=Y(Math.trunc(-t.o/60)),o+=":",o+=Y(Math.trunc(-t.o%60))):(o+="+",o+=Y(Math.trunc(t.o/60)),o+=":",o+=Y(Math.trunc(t.o%60)))),s&&(o+="["+t.zone.ianaName+"]"),o}const Bu={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},Z0={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},Y0={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Fu=["year","month","day","hour","minute","second","millisecond"],K0=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],J0=["year","ordinal","hour","minute","second","millisecond"];function X0(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new zc(t);return e}function ya(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return X0(t)}}function ba(t,e){const r=tt(e.zone,j.defaultZone),n=V.fromObject(e),i=j.now();let s,o;if(M(t.year))s=i;else{for(const c of Fu)M(t[c])&&(t[c]=Bu[c]);const a=hu(t)||mu(t);if(a)return x.invalid(a);const l=r.offset(i);[s,o]=vn(t,l,r)}return new x({ts:s,zone:r,loc:n,o})}function va(t,e,r){const n=M(r.round)?!0:r.round,i=(o,a)=>(o=Hs(o,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(o,a)),s=o=>r.calendary?e.hasSame(t,o)?0:e.startOf(o).diff(t.startOf(o),o).get(o):e.diff(t,o).get(o);if(r.unit)return i(s(r.unit),r.unit);for(const o of r.units){const a=s(o);if(Math.abs(a)>=1)return i(a,o)}return i(t>e?-0:0,r.units[r.units.length-1])}function $a(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class x{constructor(e){const r=e.zone||j.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new Le("invalid input"):null)||(r.isValid?null:tn(r));this.ts=M(e.ts)?j.now():e.ts;let i=null,s=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[i,s]=[e.old.c,e.old.o];else{const a=r.offset(this.ts);i=rn(this.ts,a),n=Number.isNaN(i.year)?new Le("invalid input"):null,i=n?null:i,s=n?null:a}this._zone=r,this.loc=e.loc||V.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=s,this.isLuxonDateTime=!0}static now(){return new x({})}static local(){const[e,r]=$a(arguments),[n,i,s,o,a,l,c]=r;return ba({year:n,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static utc(){const[e,r]=$a(arguments),[n,i,s,o,a,l,c]=r;return e.zone=ie.utcInstance,ba({year:n,month:i,day:s,hour:o,minute:a,second:l,millisecond:c},e)}static fromJSDate(e,r={}){const n=xm(e)?e.valueOf():NaN;if(Number.isNaN(n))return x.invalid("invalid input");const i=tt(r.zone,j.defaultZone);return i.isValid?new x({ts:n,zone:i,loc:V.fromObject(r)}):x.invalid(tn(i))}static fromMillis(e,r={}){if(Mt(e))return e<-pa||e>pa?x.invalid("Timestamp out of range"):new x({ts:e,zone:tt(r.zone,j.defaultZone),loc:V.fromObject(r)});throw new le(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(Mt(e))return new x({ts:e*1e3,zone:tt(r.zone,j.defaultZone),loc:V.fromObject(r)});throw new le("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=tt(r.zone,j.defaultZone);if(!n.isValid)return x.invalid(tn(n));const i=V.fromObject(r),s=_n(e,ya),{minDaysInFirstWeek:o,startOfWeek:a}=ia(s,i),l=j.now(),c=M(r.specificOffset)?n.offset(l):r.specificOffset,d=!M(s.ordinal),u=!M(s.year),f=!M(s.month)||!M(s.day),h=u||f,m=s.weekYear||s.weekNumber;if((h||d)&&m)throw new jt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new jt("Can't mix ordinal dates with month/day");const g=m||s.weekday&&!h;let b,$,k=rn(l,c);g?(b=K0,$=Z0,k=Nn(k,o,a)):d?(b=J0,$=Y0,k=Ei(k)):(b=Fu,$=Bu);let L=!1;for(const Me of b){const wt=s[Me];M(wt)?L?s[Me]=$[Me]:s[Me]=k[Me]:L=!0}const D=g?Em(s,o,a):d?Tm(s):hu(s),J=D||mu(s);if(J)return x.invalid(J);const Te=g?ra(s,o,a):d?na(s):s,[fe,H]=vn(Te,c,n),Z=new x({ts:fe,zone:n,o:H,loc:i});return s.weekday&&h&&e.weekday!==Z.weekday?x.invalid("mismatched weekday",`you can't specify both a weekday of ${s.weekday} and a date of ${Z.toISO()}`):Z}static fromISO(e,r={}){const[n,i]=g0(e);return dr(n,i,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,i]=w0(e);return dr(n,i,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,i]=y0(e);return dr(n,i,r,"HTTP",r)}static fromFormat(e,r,n={}){if(M(e)||M(r))throw new le("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:s=null}=n,o=V.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0}),[a,l,c,d]=q0(o,e,r);return d?x.invalid(d):dr(a,l,n,`format ${r}`,e,c)}static fromString(e,r,n={}){return x.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,i]=T0(e);return dr(n,i,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new le("need to specify a reason the DateTime is invalid");const n=e instanceof Le?e:new Le(e,r);if(j.throwOnInvalid)throw new em(n);return new x({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=Vu(e,V.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(e,r={}){return Ru(re.parseFormat(e),V.fromObject(r)).map(i=>i.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?xi(this).weekYear:NaN}get weekNumber(){return this.isValid?xi(this).weekNumber:NaN}get weekday(){return this.isValid?xi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?Ci(this).weekday:NaN}get localWeekNumber(){return this.isValid?Ci(this).weekNumber:NaN}get localWeekYear(){return this.isValid?Ci(this).weekYear:NaN}get ordinal(){return this.isValid?Ei(this.c).ordinal:NaN}get monthShort(){return this.isValid?Qr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Qr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Qr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Qr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=Jn(this.c),i=this.zone.offset(n-e),s=this.zone.offset(n+e),o=this.zone.offset(n-i*r),a=this.zone.offset(n-s*r);if(o===a)return[this];const l=n-o*r,c=n-a*r,d=rn(l,o),u=rn(c,a);return d.hour===u.hour&&d.minute===u.minute&&d.second===u.second&&d.millisecond===u.millisecond?[bt(this,{ts:l}),bt(this,{ts:c})]:[this]}get isInLeapYear(){return Fr(this.year)}get daysInMonth(){return In(this.year,this.month)}get daysInYear(){return this.isValid?qt(this.year):NaN}get weeksInWeekYear(){return this.isValid?xr(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?xr(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:i}=re.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(e=0,r={}){return this.setZone(ie.instance(e),r)}toLocal(){return this.setZone(j.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=tt(e,j.defaultZone),e.equals(this.zone))return this;if(e.isValid){let i=this.ts;if(r||n){const s=e.offset(this.ts),o=this.toObject();[i]=vn(o,s,e)}return bt(this,{ts:i,zone:e})}else return x.invalid(tn(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return bt(this,{loc:i})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=_n(e,ya),{minDaysInFirstWeek:n,startOfWeek:i}=ia(r,this.loc),s=!M(r.weekYear)||!M(r.weekNumber)||!M(r.weekday),o=!M(r.ordinal),a=!M(r.year),l=!M(r.month)||!M(r.day),c=a||l,d=r.weekYear||r.weekNumber;if((c||o)&&d)throw new jt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&o)throw new jt("Can't mix ordinal dates with month/day");let u;s?u=ra({...Nn(this.c,n,i),...r},n,i):M(r.ordinal)?(u={...this.toObject(),...r},M(r.day)&&(u.day=Math.min(In(u.year,u.month),u.day))):u=na({...Ei(this.c),...r});const[f,h]=vn(u,this.o,this.zone);return bt(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e);return bt(this,ga(this,r))}minus(e){if(!this.isValid)return this;const r=O.fromDurationLike(e).negate();return bt(this,ga(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=O.normalizeUnit(e);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const s=this.loc.getStartOfWeek(),{weekday:o}=this;o<s&&(n.weekNumber=this.weekNumber-1),n.weekday=s}else n.weekday=1;if(i==="quarters"){const s=Math.ceil(this.month/3);n.month=(s-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?re.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):Mi}toLocaleString(e=On,r={}){return this.isValid?re.create(this.loc.clone(r),e).formatDateTime(this):Mi}toLocaleParts(e={}){return this.isValid?re.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:s=!1}={}){if(!this.isValid)return null;const o=e==="extended";let a=Ai(this,o);return a+="T",a+=wa(this,o,r,n,i,s),a}toISODate({format:e="extended"}={}){return this.isValid?Ai(this,e==="extended"):null}toISOWeekDate(){return nn(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:s=!1,format:o="extended"}={}){return this.isValid?(i?"T":"")+wa(this,o==="extended",r,e,n,s):null}toRFC2822(){return nn(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return nn(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?Ai(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||e)&&(n&&(i+=" "),r?i+="z":e&&(i+="ZZ")),nn(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():Mi}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return O.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},s=Cm(r).map(O.normalizeUnit),o=e.valueOf()>this.valueOf(),a=o?this:e,l=o?e:this,c=O0(a,l,s,i);return o?c.negate():c}diffNow(e="milliseconds",r={}){return this.diff(x.now(),e,r)}until(e){return this.isValid?G.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const i=e.valueOf(),s=this.setZone(e.zone,{keepLocalTime:!0});return s.startOf(r,n)<=i&&i<=s.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||x.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let i=["years","months","days","hours","minutes","seconds"],s=e.unit;return Array.isArray(e.unit)&&(i=e.unit,s=void 0),va(r,this.plus(n),{...e,numeric:"always",units:i,unit:s})}toRelativeCalendar(e={}){return this.isValid?va(e.base||x.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(x.isDateTime))throw new le("min requires all arguments be DateTimes");return sa(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(x.isDateTime))throw new le("max requires all arguments be DateTimes");return sa(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:i=null,numberingSystem:s=null}=n,o=V.fromOpts({locale:i,numberingSystem:s,defaultToEN:!0});return Du(o,e,r)}static fromStringExplain(e,r,n={}){return x.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return On}static get DATE_MED(){return Wc}static get DATE_MED_WITH_WEEKDAY(){return nm}static get DATE_FULL(){return jc}static get DATE_HUGE(){return Gc}static get TIME_SIMPLE(){return qc}static get TIME_WITH_SECONDS(){return Zc}static get TIME_WITH_SHORT_OFFSET(){return Yc}static get TIME_WITH_LONG_OFFSET(){return Kc}static get TIME_24_SIMPLE(){return Jc}static get TIME_24_WITH_SECONDS(){return Xc}static get TIME_24_WITH_SHORT_OFFSET(){return Qc}static get TIME_24_WITH_LONG_OFFSET(){return eu}static get DATETIME_SHORT(){return tu}static get DATETIME_SHORT_WITH_SECONDS(){return ru}static get DATETIME_MED(){return nu}static get DATETIME_MED_WITH_SECONDS(){return iu}static get DATETIME_MED_WITH_WEEKDAY(){return im}static get DATETIME_FULL(){return su}static get DATETIME_FULL_WITH_SECONDS(){return ou}static get DATETIME_HUGE(){return au}static get DATETIME_HUGE_WITH_SECONDS(){return lu}}function fr(t){if(x.isDateTime(t))return t;if(t&&t.valueOf&&Mt(t.valueOf()))return x.fromJSDate(t);if(t&&typeof t=="object")return x.fromObject(t);throw new le(`Unknown datetime argument: ${t}, of type ${typeof t}`)}const Q0=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function $r(t,e){return t?Q0.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function ot(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function ep(t){return ot(t).map(e=>t[e])}function Li(t){return ot(t).map(e=>[e,t[e]])}function tp(t,e){return t.includes(e)}function rp(t){return!!t}var Qt;(function(t){t.Upper="upper",t.Lower="lower"})(Qt||(Qt={}));function np(t){return t.toLowerCase()!==t.toUpperCase()}function Sa(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const i=t[n]||"";if(!np(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===Qt.Upper&&i!==i.toUpperCase())return!1;if(e===Qt.Lower&&i!==i.toLowerCase())return!1}return!0}function ip(t){return t.split("").reduce((r,n,i,s)=>{const o=i>0&&s[i-1]||"",a=i<s.length-1&&s[i+1]||"",l=Sa(o,Qt.Lower,{blockNoCaseCharacters:!0})||Sa(a,Qt.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var ka;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(ka||(ka={}));function sp(t){return t?t.map(Uu).filter(rp).join(`
`):""}function Uu(t){return t?t instanceof Error?t.message:$r(t,"message")?String(t.message):String(t):""}function Ct(t){return!!t&&typeof t=="object"}function Ws(t,e){let r=!1;const n=ot(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(ot(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function op(t,e){try{return ap(t,e),!0}catch{return!1}}function ap(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function lp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}lp();function cp(t,e){var a;const r=e==null?void 0:e.constructor,n=(a=t==null?void 0:t.constructor)==null?void 0:a.prototype,i=(t==null?void 0:t.constructor)===r,s=r&&n?n instanceof r:!1,o=i||s;return Cn(t)===Cn(e)&&o}const zu="__vir__shape__definition__key__do__not__use__in__actual__objects";function Wu(t){return $r(t,zu)}const ju=Symbol("and"),Gu=Symbol("instance"),qu=Symbol("enum"),Zu=Symbol("exact"),js=Symbol("indexed-keys"),Gs=Symbol("or"),qs=Symbol("unknown"),up=[ju,qu,Zu,js,Gu,Gs,qs],Yu="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Ku(...t){return Zs(t,js)}function sn(...t){return Zs(t,Gs)}function dp(t){return Zs([t],qs)}function ei(t){return Nt(t,ju)}function ti(t){return Nt(t,Gu)}function ri(t){return Nt(t,qu)}function ni(t){return Nt(t,Zu)}function ii(t){return Nt(t,js)}function Wr(t){return Nt(t,Gs)}function si(t){return Nt(t,qs)}function Nt(t,e){const r=jr(t);return!!r&&r.specifierType===e}function Zs(t,e){return{[Yu]:!0,specifierType:e,parts:t}}function Et(t,e,r,n){const i=jr(e);if(i){if(ti(i))return t instanceof i.parts[0];if(ei(i))return i.parts.every(s=>Et(t,s));if(Wr(i))return i.parts.some(s=>Et(t,s));if(ni(i))return Ct(t)?Et(t,i.parts[0]):t===i.parts[0];if(ri(i))return Object.values(i.parts[0]).some(s=>s===t);if(ii(i))return Ct(t)?fp(t,i,!!r)&&ep(t).every(s=>Et(s,i.parts[0].values)):!1;if(si(i))return!0}return n?e===t:cp(t,e)}function fp(t,e,r){const n=e.parts[0].required,i=e.parts[0].keys;if(r)if(n){const s=Ys(e);return C(s,"boolean")?s:s.every(o=>ot(t).some(a=>Et(a,o,!1,!0)))}else return!0;else return ot(t).every(s=>Et(s,i))}function Ys(t){const e=t.parts[0].keys,r=jr(e);if(vi(e))return[e];if(r){if(ti(r))return!1;if(ei(r))return!1;if(Wr(r)){const n=r.parts.map(s=>Ys(Ku({...t.parts[0],keys:s})));let i;return n.forEach(s=>{C(s,"boolean")&&(s&&i==null?i=!0:i=!1)}),C(i,"boolean")?i:n.flat().filter(vi)}else if(ni(r)){const n=r.parts.filter(vi);return n.length!==r.parts.length?!1:n}else{if(ri(r))return Object.values(r.parts[0]);if(ii(r))return!1;if(si(r))return!0}}return!1}function jr(t){if(Ct(t)&&$r(t,Yu)){if(!$r(t,"parts")||!C(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!$r(t,"specifierType")||!tp(up,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Ea extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function ls(t,e=!1){return gr(t)}function gr(t){const e=jr(t);if(e)if(ti(e)){const r=e.parts[0];try{return new r}catch(n){throw new Ea(`Failed to create default value for classShape for class '${r.name}': ${Uu(n)}`)}}else{if(Wr(e)||ni(e))return gr(e.parts[0]);if(ei(e))return e.parts.reduce((r,n)=>Object.assign(r,gr(n)),{});if(ri(e))return Object.values(e.parts[0])[0];if(ii(e)){const r=Ys(e);return!e.parts[0].required||C(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,gr(e.parts[0].values)]))}else{if(si(e))return e.parts[0]??{};throw new Ea(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return Wu(t)?ls(t.shape):t instanceof RegExp?t:C(t,"array")?t.map(gr):Ct(t)?Ws(t,(r,n)=>ls(n)):t}function oi(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return ls(t)},[zu]:!0}}class be extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function hp(t,e,r={}){try{return Ju(t,e,r),!0}catch{return!1}}function Ju(t,e,r={}){Fe({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function cs(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function Fe({subject:t,shape:e,keys:r,options:n}){if(si(e))return!0;if(Wu(e))return Fe({subject:t,shape:e.shape,keys:r,options:n});const i=cs(r);if(jr(t))throw new be(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!Et(t,e,!n.ignoreExtraKeys))throw new be(`Subject does not match shape definition at key ${i}`);if(C(e,"function"))return C(t,"function");if(ti(e))return t instanceof e.parts[0];if(Ct(t)){const o=t,a=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(o).map(d=>[d,!1])),l=[];let c=!1;if(Wr(e)){const d=[];c=e.parts.some(u=>{try{const f=Fe({subject:t,shape:u,keys:r,options:{...n}});return Object.assign(a,f),!0}catch(f){if(f instanceof be)return d.push(f),!1;throw f}}),!c&&op(d,1)&&l.push(d[0])}else if(ei(e))c=e.parts.every(d=>{try{const u=Fe({subject:t,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(a,u),!0}catch(u){if(u instanceof be)return l.push(u),!1;throw u}});else if(ni(e)){const d=Fe({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(a,d),c=!0}else{if(ri(e))throw new be(`Cannot compare an enum specifier to an object at ${i}`);if(C(e,"array")&&C(o,"array"))c=o.every((d,u)=>{const f=e.some(h=>{try{return Fe({subject:d,shape:h,keys:[...r,u],options:n}),!0}catch(m){if(m instanceof be)return l.push(m),!1;throw m}});return a[u]=f,f});else if(ii(e)){const d=Ws(t,(u,f)=>(n.ignoreExtraKeys||Fe({shape:e.parts[0].keys,subject:u,keys:[...r,u],options:n}),Fe({shape:e.parts[0].values,subject:f,keys:[...r,u],options:n}),!0));Object.assign(a,d),c=!0}else{const d=mp({keys:r,options:n,shape:e,subject:t});Object.assign(a,d),c=!0}}if(l.length)throw new be(sp(l));if(!c){const u=`Failed on key(s): ${Object.keys(a).filter(f=>!a[f]).map(f=>cs([...r,f])).join(",")}`;throw new be(u)}return n.ignoreExtraKeys||Object.entries(a).forEach(([d,u])=>{if(!u)throw new be(`subject as extra key '${d}' in ${i}.`)}),a}else if(n.exactValues)return t===e;return!0}function mp({keys:t,options:e,shape:r,subject:n}){const i=cs(t),s={};if(Ct(r)){const o=new Set(ot(r)),a=new Set(ot(n));o.forEach(l=>{l in n&&a.add(l)}),e.ignoreExtraKeys||a.forEach(l=>{if(!o.has(l))throw new be(`Subject has extra key '${String(l)}' in ${i}`)}),o.forEach(l=>{var f;const c=r[l],d=Wr(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!a.has(l)&&!d&&!u)throw new be(`Subject missing key '${String(l)}' in ${i}`)}),a.forEach(l=>{const c=n[l];if(e.ignoreExtraKeys&&!o.has(l))return;const d=r[l];Fe({subject:c,shape:d,keys:[...t,l],options:e}),s[l]=!0})}else throw new be(`shape definition at ${i} was not an object.`);return s}const pp=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],gp=pp.reduce((t,e)=>(t[e]=e,t),{});j.defaultZone.name;gp.UTC;var Ta;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(Ta||(Ta={}));const wp=["hour","minute","second","millisecond"];var P;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(P||(P={}));P.Milliseconds+"",P.Seconds+"",P.Minutes+"",P.Hours+"",P.Days+"",P.Weeks+"",P.Months+"",P.Quarters+"",P.Years+"";P.Milliseconds,P.Seconds,P.Minutes,P.Hours,P.Days,P.Weeks,P.Months,P.Quarters,P.Years;P.Years+"",P.Quarters+"",P.Months+"",P.Weeks+"",P.Days+"",P.Hours+"",P.Minutes+"",P.Seconds+"",P.Milliseconds+"";var Ma;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(Ma||(Ma={}));const yp={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Xh(yp,wp);j.defaultLocale;P.Milliseconds+"",P.Seconds+"",P.Minutes+"",P.Hours+"",P.Days+"",P.Weeks+"",P.Months+"",P.Quarters+"",P.Years+"";class Xu extends Zh{constructor(e){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"equalityCheck",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.value=e.defaultValue,this.equalityCheck=e.equalityCheck||Rc}setValue(e){return super.setValue(e)}listen(e,r){return super.listen(e,r)}removeListener(e){return super.removeListener(e)}}const bp=oi({listen(t,e){return()=>!1},destroy(){},removeListener(t){return!1},value:dp()});function Pi(t){return hp(t,bp,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n=globalThis,Ks=$n.ShadowRoot&&($n.ShadyCSS===void 0||$n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Js=Symbol(),xa=new WeakMap;let Qu=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Js)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ks&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=xa.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&xa.set(r,e))}return e}toString(){return this.cssText}};const q=t=>new Qu(typeof t=="string"?t:t+"",void 0,Js),Sn=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new Qu(r,t,Js)},vp=(t,e)=>{if(Ks)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=$n.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},Ca=Ks?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return q(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$p,defineProperty:Sp,getOwnPropertyDescriptor:kp,getOwnPropertyNames:Ep,getOwnPropertySymbols:Tp,getPrototypeOf:Mp}=Object,it=globalThis,Aa=it.trustedTypes,xp=Aa?Aa.emptyScript:"",Oi=it.reactiveElementPolyfillSupport,Sr=(t,e)=>t,Rn={toAttribute(t,e){switch(e){case Boolean:t=t?xp:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Xs=(t,e)=>!$p(t,e),La={attribute:!0,type:String,converter:Rn,reflect:!1,hasChanged:Xs};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),it.litPropertyMetadata??(it.litPropertyMetadata=new WeakMap);let zt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=La){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Sp(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:s}=kp(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const a=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??La}static _$Ei(){if(this.hasOwnProperty(Sr("elementProperties")))return;const e=Mp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Sr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Sr("properties"))){const r=this.properties,n=[...Ep(r),...Tp(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(Ca(i))}else e!==void 0&&r.push(Ca(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vp(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var s;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const o=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:Rn).toAttribute(r,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,r){var s;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Rn;this._$Em=i,this[i]=a.fromAttribute(r,o.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Xs)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};zt.elementStyles=[],zt.shadowRootOptions={mode:"open"},zt[Sr("elementProperties")]=new Map,zt[Sr("finalized")]=new Map,Oi==null||Oi({ReactiveElement:zt}),(it.reactiveElementVersions??(it.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=globalThis,Dn=kr.trustedTypes,Pa=Dn?Dn.createPolicy("lit-html",{createHTML:t=>t}):void 0,Qs="$lit$",ze=`lit$${Math.random().toFixed(9).slice(2)}$`,eo="?"+ze,Cp=`<${eo}>`,At=document,Cr=()=>At.createComment(""),Ar=t=>t===null||typeof t!="object"&&typeof t!="function",ed=Array.isArray,td=t=>ed(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ni=`[ 	
\f\r]`,hr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oa=/-->/g,Na=/>/g,vt=RegExp(`>|${Ni}(?:([^\\s"'>=/]+)(${Ni}*=${Ni}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ia=/'/g,_a=/"/g,rd=/^(?:script|style|textarea|title)$/i,Ap=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),Lp=Ap(1),ge=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Ra=new WeakMap,Tt=At.createTreeWalker(At,129);function nd(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pa!==void 0?Pa.createHTML(e):e}const id=(t,e)=>{const r=t.length-1,n=[];let i,s=e===2?"<svg>":"",o=hr;for(let a=0;a<r;a++){const l=t[a];let c,d,u=-1,f=0;for(;f<l.length&&(o.lastIndex=f,d=o.exec(l),d!==null);)f=o.lastIndex,o===hr?d[1]==="!--"?o=Oa:d[1]!==void 0?o=Na:d[2]!==void 0?(rd.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=vt):d[3]!==void 0&&(o=vt):o===vt?d[0]===">"?(o=i??hr,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?vt:d[3]==='"'?_a:Ia):o===_a||o===Ia?o=vt:o===Oa||o===Na?o=hr:(o=vt,i=void 0);const h=o===vt&&t[a+1].startsWith("/>")?" ":"";s+=o===hr?l+Cp:u>=0?(n.push(c),l.slice(0,u)+Qs+l.slice(u)+ze+h):l+ze+(u===-2?a:h)}return[nd(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class Lr{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=e.length-1,l=this.parts,[c,d]=id(e,r);if(this.el=Lr.createElement(c,n),Tt.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Tt.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Qs)){const f=d[o++],h=i.getAttribute(u).split(ze),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:s,name:m[2],strings:h,ctor:m[1]==="."?od:m[1]==="?"?ad:m[1]==="@"?ld:Gr}),i.removeAttribute(u)}else u.startsWith(ze)&&(l.push({type:6,index:s}),i.removeAttribute(u));if(rd.test(i.tagName)){const u=i.textContent.split(ze),f=u.length-1;if(f>0){i.textContent=Dn?Dn.emptyScript:"";for(let h=0;h<f;h++)i.append(u[h],Cr()),Tt.nextNode(),l.push({type:2,index:++s});i.append(u[f],Cr())}}}else if(i.nodeType===8)if(i.data===eo)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(ze,u+1))!==-1;)l.push({type:7,index:s}),u+=ze.length-1}s++}}static createElement(e,r){const n=At.createElement("template");return n.innerHTML=e,n}}function Lt(t,e,r=t,n){var o,a;if(e===ge)return e;let i=n!==void 0?(o=r._$Co)==null?void 0:o[n]:r._$Cl;const s=Ar(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=Lt(t,i._$AS(t,e.values),i,n)),e}class sd{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??At).importNode(r,!0);Tt.currentNode=i;let s=Tt.nextNode(),o=0,a=0,l=n[0];for(;l!==void 0;){if(o===l.index){let c;l.type===2?c=new cr(s,s.nextSibling,this,e):l.type===1?c=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(c=new cd(s,this,e)),this._$AV.push(c),l=n[++a]}o!==(l==null?void 0:l.index)&&(s=Tt.nextNode(),o++)}return Tt.currentNode=At,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class cr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Lt(this,e,r),Ar(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):td(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==U&&Ar(this._$AH)?this._$AA.nextSibling.data=e:this.T(At.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Lr.createElement(nd(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(r);else{const o=new sd(i,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let r=Ra.get(e.strings);return r===void 0&&Ra.set(e.strings,r=new Lr(e)),r}k(e){ed(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of e)i===r.length?r.push(n=new cr(this.S(Cr()),this.S(Cr()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Gr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,s){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=U}_$AI(e,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)e=Lt(this,e,r,0),o=!Ar(e)||e!==this._$AH&&e!==ge,o&&(this._$AH=e);else{const a=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=Lt(this,a[n+l],r,l),c===ge&&(c=this._$AH[l]),o||(o=!Ar(c)||c!==this._$AH[l]),c===U?e=U:e!==U&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class od extends Gr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}class ad extends Gr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}}class ld extends Gr{constructor(e,r,n,i,s){super(e,r,n,i,s),this.type=5}_$AI(e,r=this){if((e=Lt(this,e,r,0)??U)===ge)return;const n=this._$AH,i=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==U&&(n===U||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class cd{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Lt(this,e)}}const Pp={P:Qs,A:ze,C:eo,M:1,L:id,R:sd,D:td,V:Lt,I:cr,H:Gr,N:ad,U:ld,B:od,F:cd},Ii=kr.litHtmlPolyfillSupport;Ii==null||Ii(Lr,cr),(kr.litHtmlVersions??(kr.litHtmlVersions=[])).push("3.1.3");const Op=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new cr(e.insertBefore(Cr(),s),s,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Er=class extends zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Op(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ge}};var Ac;Er._$litElement$=!0,Er.finalized=!0,(Ac=globalThis.litElementHydrateSupport)==null||Ac.call(globalThis,{LitElement:Er});const _i=globalThis.litElementPolyfillSupport;_i==null||_i({LitElement:Er});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Np}=Pp,Da=()=>document.createComment(""),mr=(t,e,r)=>{var s;const n=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const o=n.insertBefore(Da(),i),a=n.insertBefore(Da(),i);r=new Np(o,a,t,t.options)}else{const o=r._$AB.nextSibling,a=r._$AM,l=a!==t;if(l){let c;(s=r._$AQ)==null||s.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==a._$AU&&r._$AP(c)}if(o!==i||l){let c=r._$AA;for(;c!==o;){const d=c.nextSibling;n.insertBefore(c,i),c=d}}}return r},$t=(t,e,r=t)=>(t._$AI(e,r),t),Ip={},_p=(t,e=Ip)=>t._$AH=e,Rp=t=>t._$AH,Ri=t=>{var n;(n=t._$AP)==null||n.call(t,!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ai={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mt=t=>(...e)=>({_$litDirective$:t,values:e});class Ke{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dp={attribute:!0,type:String,converter:Rn,reflect:!1,hasChanged:Xs},Vp=(t=Dp,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),n==="accessor"){const{name:o}=r;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,l,t)},init(a){return a!==void 0&&this.P(o,void 0,t),a}}}if(n==="setter"){const{name:o}=r;return function(a){const l=this[o];e.call(this,a),this.requestUpdate(o,l,t)}}throw Error("Unsupported decorator location: "+n)};function Hp(t){return(e,r)=>typeof r=="object"?Vp(t,e,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,o?{...n,wrapped:!0}:n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pr=mt(class extends Ke{constructor(t){var e;if(super(t),t.type!==ai.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!((n=this.nt)!=null&&n.has(s))&&this.st.add(s);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const o=!!e[s];o===this.st.has(s)||(i=this.nt)!=null&&i.has(s)||(o?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return ge}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ud=t=>t??U;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class us extends Ke{constructor(e){if(super(e),this.it=U,e.type!==ai.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===U||e==null)return this._t=void 0,this.it=e;if(e===ge)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}us.directiveName="unsafeHTML",us.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Va extends us{}Va.directiveName="unsafeSVG",Va.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bp(t,e,r){return t?e(t):r==null?void 0:r(t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ha=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},Fp=mt(class extends Ke{constructor(t){if(super(t),t.type!==ai.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],s=[];let o=0;for(const a of t)i[o]=n?n(a,o):o,s[o]=r(a,o),o++;return{values:s,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=Rp(t),{values:s,keys:o}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=o,s;const a=this.ut??(this.ut=[]),l=[];let c,d,u=0,f=i.length-1,h=0,m=s.length-1;for(;u<=f&&h<=m;)if(i[u]===null)u++;else if(i[f]===null)f--;else if(a[u]===o[h])l[h]=$t(i[u],s[h]),u++,h++;else if(a[f]===o[m])l[m]=$t(i[f],s[m]),f--,m--;else if(a[u]===o[m])l[m]=$t(i[u],s[m]),mr(t,l[m+1],i[u]),u++,m--;else if(a[f]===o[h])l[h]=$t(i[f],s[h]),mr(t,i[u],i[f]),f--,h++;else if(c===void 0&&(c=Ha(o,h,m),d=Ha(a,u,f)),c.has(a[u]))if(c.has(a[f])){const g=d.get(o[h]),b=g!==void 0?i[g]:null;if(b===null){const $=mr(t,i[u]);$t($,s[h]),l[h]=$}else l[h]=$t(b,s[h]),mr(t,i[u],b),i[g]=null;h++}else Ri(i[f]),f--;else Ri(i[u]),u++;for(;h<=m;){const g=mr(t,l[m+1]);$t(g,s[h]),l[h++]=g}for(;u<=f;){const g=i[u++];g!==null&&Ri(g)}return this.ut=o,_p(t,l),ge}}),Up=Fp;class ee extends Er{}S(ee,"assign"),S(ee,"assignedInputs"),S(ee,"tagName"),S(ee,"styles"),S(ee,"isStrictInstance"),S(ee,"renderCallback"),S(ee,"inputsType"),S(ee,"stateType"),S(ee,"updateStateType"),S(ee,"events"),S(ee,"stateInitStatic"),S(ee,"init"),S(ee,"elementOptions"),S(ee,"hostClasses"),S(ee,"cssVars"),S(ee,"slotNames");const zp=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function to(t,e){return t?zp.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function at(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Wp(t,e,r){return t.reduce((n,i,s,o)=>{const a=e(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function dd(t){return!!t}const jp={capitalizeFirstLetter:!1};function Gp(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function qp(t,e){return e.capitalizeFirstLetter?Gp(t):t}function Zp(t,e=jp){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const s=i[1];return s?s.toUpperCase():""});return qp(n,e)}var Ba;(function(t){t.Upper="upper",t.Lower="lower"})(Ba||(Ba={}));var Fa;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Fa||(Fa={}));function fd(t){return t?t instanceof Error?t.message:to(t,"message")?String(t.message):String(t):""}function Yp(t){return t instanceof Error?t:new Error(fd(t))}function Kp(t,e){const r=Yp(t);return r.message=`${e}: ${r.message}`,r}function Jp(t){return!!t&&typeof t=="object"}function Xp(t,e,r){if(e in t)return t[e];{const n=r();return _c(n)?new Promise(async(i,s)=>{try{const o=await n;t[e]=o,i(o)}catch(o){s(o)}}):(t[e]=n,n)}}function hd(t,e){let r=!1;const n=at(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(at(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Qp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Qp();function pt(t){if(Ct(t))return Ws(t,(r,n)=>{if(!C(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(ip(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const s=n,o=r.startsWith("--")?q(r):r.startsWith("-")?Sn`-${q(r)}`:Sn`--${q(r)}`;return{name:o,value:Sn`var(${o}, ${q(s)})`,default:String(s)}});throw new Error(`Invalid setup input for '${pt.name}' function.`)}function eg({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}function tg(t,e,r){const n=!e.length&&!r.length,i=t.length?!1:!e.filter(a=>!!a.index).length;if(n||i)return[...t];const s=t.map(a=>[a]);return s.length||(s[0]=[]),r.forEach(a=>{a>=0&&a<t.length&&(s[a]=[])}),e.forEach(a=>{const l=s[a.index];l&&l.splice(0,0,...a.values)}),s.flat()}function kn(t){return to(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function ro(t){return to(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function md(t){return Wp(t,e=>{if(kn(e))return e.definition;if(ro(e))return e.tagInterpolationKey||e},dd)}const pd=new WeakMap;function rg(t,e){var i;const r=md(e);return(i=gd(pd,[t,...r]).value)==null?void 0:i.template}function ng(t,e,r){const n=md(e);return yd(pd,[t,...n],r)}function gd(t,e,r=0){const{currentTemplateAndNested:n,reason:i}=wd(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?gd(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function wd(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=t.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function yd(t,e,r,n=0){const{currentTemplateAndNested:i,currentKey:s,reason:o}=wd(t,e,n);if(!s)return{result:!1,reason:o};const a=i??{nested:void 0,template:void 0};if(i||t.set(s,a),n===e.length-1)return a.template=r,{result:!0,reason:"set value at end of keys array"};const l=a.nested??new WeakMap;return a.nested||(a.nested=l),yd(l,e,r,n+1)}const ig=new WeakMap;function bd(t,e,r){const n=rg(t,e),i=n??r();if(!n){const a=ng(t,e,i);if(a.result)ig.set(t,i);else throw new Error(`Failed to set template transform: ${a.reason}`)}const s=i.valuesTransform(e),o=tg(e,s.valueInsertions,s.valueIndexDeletions);return{strings:i.templateStrings,values:o}}function vd(t,e,r,n){const i=[],s=[],o=[],a=[];return t.forEach((c,d)=>{const u=i.length-1,f=i[u],h=d-1,m=e[h];n&&n(c);let g,b=[];if(typeof f=="string"&&(g=r(f,c,m),g)){i[u]=f+g.replacement,o.push(h);const k=g.getExtraValues;b=k?k(m):[],b.length&&k?(i[u]+=" ",b.forEach((L,D)=>{D&&i.push(" ")}),a.push(L=>{const D=L[h],J=k(D);return{index:h,values:J}}),i.push(c)):i[u]+=c}g||i.push(c);const $=t.raw[d];g?(s[u]=s[u]+g.replacement+$,b.length&&b.forEach(()=>{s.push("")})):s.push($)}),{templateStrings:Object.assign([],i,{raw:s}),valuesTransform(c){const d=a.map(u=>u(c)).flat();return{valueIndexDeletions:o,valueInsertions:d}}}}function sg(...[t,e,r]){if(ro(r))return{replacement:r.tagName,getExtraValues:void 0}}function og(t,e){return vd(t,e,sg)}function w(t,...e){const r=bd(t,e,()=>og(t,e));return Sn(r.strings,...r.values)}const ag={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function $d(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof ee?!0:$d(r)}function Sd(t,e){const r=t.instanceState;at(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&at(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),lg(t)}function lg(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function Ua(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class cg extends CustomEvent{constructor(r,n){super(typeof r=="string"?r:r.type,{detail:n,bubbles:!0,composed:!0});S(this,"_type","")}get type(){return this._type}}function no(){return t=>{var e;return e=class extends cg{constructor(n){super(t,n);S(this,"_type",t)}},S(e,"type",t),e}}function Ie(){return no()}function ug(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=no()([t,n].join("-"));return r[n]=i,r},{}):{}}function dg(t){return t?hd(t,e=>e):{}}const io=Symbol("element-vir-state-setup");function fg(t){return Jp(t)?io in t:!1}function kd(t,e){e in t||Hp()(t,e)}function hg(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function za(t,e){const r=t;function n(o){e?hg(o,t,t.tagName):kd(t,o)}function i(o,a){return n(a),r[a]}return new Proxy({},{get:i,set(o,a,l){const c=fg(l)?l[io]():l;n(a);const d=r[a];function u(h){o[a]=h,r[a]=h}const f=t.observablePropertyListenerMap[a];if(d!==c&&Pi(d)&&f&&d.removeListener(f),Pi(c))if(f)c.listen(!1,f);else{let h=function(){t.requestUpdate()};t.observablePropertyListenerMap[a]=h,c.listen(!1,h)}else Pi(d)&&(t.observablePropertyListenerMap[a]=void 0);return u(c),!0},ownKeys(o){return Reflect.ownKeys(o)},getOwnPropertyDescriptor(o,a){if(a in o)return{get value(){return i(o,a)},configurable:!0,enumerable:!0}},has(o,a){return Reflect.has(o,a)}})}function mg({hostClassNames:t,cssVars:e}){return{hostClasses:hd(t,(r,n)=>({name:q(n),selector:q(`:host(.${n})`)})),cssVars:e}}function pg({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:i}){e&&at(e).forEach(s=>{const o=e[s],a=r[s];typeof o=="function"&&(o({state:n,inputs:i})?t.classList.add(a):t.classList.remove(a))})}function gg({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function i(o){at(o).forEach(a=>{const l=o[a];t.instanceState[a]=l})}return{cssVars:r,slotNames:n,dispatch:o=>t.dispatchEvent(o),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:i}}function wg(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}function li(t){var u;const e=t;if(!C(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!C(e.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!e.renderCallback||typeof e.renderCallback=="string")throw new Error(`Failed to define element '${e.tagName}': renderCallback is not a function`);const r={...ag,...e.options},n=ug(e.tagName,e.events),i=dg(e.hostClasses);e.hostClasses&&Ua(e.tagName,e.hostClasses),e.cssVars&&Ua(e.tagName,e.cssVars);const s=e.cssVars?pt(e.cssVars):{},o=wg(e.slotNames),a=typeof e.styles=="function"?e.styles(mg({hostClassNames:i,cssVars:s})):e.styles||w``,l=e.renderCallback;function c(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:d,inputs:f}}const d=(u=class extends ee{constructor(){super();S(this,"_lastRenderError");S(this,"_internalRenderCount",0);S(this,"_initCalled",!1);S(this,"_hasRendered",!1);S(this,"_lastRenderedProps");S(this,"_haveInputsBeenSet",!1);S(this,"definition",{});S(this,"observablePropertyListenerMap",{});S(this,"instanceInputs",za(this,!1));S(this,"instanceState",za(this,!r.allowPolymorphicState));const h=e.stateInitStatic||{};at(h).forEach(m=>{kd(this,m),this.instanceState[m]=h[m]}),this.definition=d}createRenderParams(){return gg({element:this,eventsMap:n,cssVars:s,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${e.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${e.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${e.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{$d(this)&&!this._haveInputsBeenSet&&!r.ignoreUnsetInputs&&console.warn(this,`${e.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${li.name}' to define ${e.tagName}.`),this._hasRendered=!0;const h=this.createRenderParams();if(!this._initCalled&&e.initCallback&&(this._initCalled=!0,e.initCallback(h)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const m=l(h);if(m instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return pg({host:h.host,hostClassesInit:e.hostClasses,hostClassNames:i,state:h.state,inputs:h.inputs}),this._lastRenderedProps={inputs:{...h.inputs},state:{...h.state}},m}catch(h){const m=Kp(h,`Failed to render ${e.tagName}`);return console.error(m),this._lastRenderError=m,fd(m)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&e.initCallback){this._initCalled=!0;const h=this.createRenderParams();if(e.initCallback(h)instanceof Promise)throw new Error(`initCallback in '${e.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(h=>{xn(h,"destroy")&&C(h.destroy,"function")&&h.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),e.cleanupCallback){const h=this.createRenderParams();if(e.cleanupCallback(h)instanceof Promise)throw new Error(`cleanupCallback in '${e.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(h){Sd(this,h)}},S(u,"elementOptions",r),S(u,"tagName",e.tagName),S(u,"styles",a),S(u,"assign",c),S(u,"isStrictInstance",()=>!1),S(u,"events",n),S(u,"renderCallback",l),S(u,"hostClasses",i),S(u,"cssVars",s),S(u,"init",e),S(u,"slotNames",o),S(u,"stateInitStatic",e.stateInitStatic),u);return Object.defineProperties(d,{name:{value:Zp(e.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof d,writable:!1}}),window.customElements.get(e.tagName)?console.warn(`Tried to define custom element '${e.tagName}' but it is already defined.`):window.customElements.define(e.tagName,d),d}function Ed(){return t=>{const e=t;if(!C(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return li({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function ci(t,e){return Or(t,e),t.element}function yg(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function Or(t,e){const r=yg(t),n=r?`: in ${r}`:"";if(t.type!==ai.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function bg(t){const e=mt(class extends Ke{constructor(n){super(n);S(this,"element");this.element=ci(n,t)}render(n){return this.element.setAttribute(t,n),ge}});return{attributeSelector(r){return`[${t}="${r}"]`},attributeDirective(r){return e(r)},attributeName:t}}function R(t,e){return vg(t,e)}const vg=mt(class extends Ke{constructor(e){super(e);S(this,"element");S(this,"lastListenerMetaData");this.element=ci(e,"listen")}resetListener(e){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(e.eventType,e.listener),this.lastListenerMetaData=e}createListenerMetaData(e,r){return{eventType:e,callback:r,listener:n=>{var i;return(i=this.lastListenerMetaData)==null?void 0:i.callback(n)}}}render(e,r){const n=typeof e=="string"?e:e.type;if(typeof n!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${n}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===n?this.lastListenerMetaData.callback=r:this.resetListener(this.createListenerMetaData(n,r)),ge}}),Wa="onDomCreated",ja=mt(class extends Ke{constructor(e){super(e);S(this,"element");Or(e,Wa)}update(e,[r]){Or(e,Wa);const n=e.element;return n!==this.element&&(window.requestAnimationFrame(()=>r(n)),this.element=n),this.render(r)}render(e){}}),Di="onResize",Td=mt(class extends Ke{constructor(e){super(e);S(this,"element");S(this,"resizeObserver",new ResizeObserver(e=>this.fireCallback(e)));S(this,"callback");Or(e,Di)}fireCallback(e){var n;const r=e[0];if(!r)throw console.error(e),new Error(`${Di} observation triggered but the first entry was empty.`);(n=this.callback)==null||n.call(this,{target:r.target,contentRect:r.contentRect},this.element)}update(e,[r]){Or(e,Di),this.callback=r;const n=e.element,i=this.element;return n!==i&&(this.element=n,i&&this.resizeObserver.unobserve(i),this.resizeObserver.observe(n)),this.render(r)}render(e){}});function ce(t,e,r){return Bp(t,()=>e,()=>r)}const{attributeDirective:wr,attributeSelector:Zb,attributeName:Yb}=bg("data-test-id");at({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function $g(t){return{[io]:t}}function Md(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),Ed()(r(n))),defineElementNoInputs:n=>(e(n),li(r(n)))}}function Sg(t,e){return e?Ga(t,e):Ga(void 0,t)}const Ga=mt(class extends Ke{constructor(e){super(e);S(this,"element");this.element=ci(e,"assign")}render(e,r){return Sd(this.element,r),ge}}),kg={};function Eg(t,e){return e.map((r,n)=>{const i=t[n],s=t[n+1];if(i&&s){const{shouldHaveTagNameHere:o}=xd(i,s);if(o&&C(r,"string"))return{tagName:r,tagInterpolationKey:Xp(kg,r,()=>({tagName:r}))}}return r})}function xd(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function Tg(...[t,e,r]){var l,c,d;const n=kn(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:s}=xd(t,e),o=ro(n);if(o&&s&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(s&&!o)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((d=n==null?void 0:n.constructor)==null?void 0:d.name)}'`);if(!s||!o)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!kn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const f=kn(u)?u.inputs:void 0;return[i&&f?Sg(f):void 0].filter(dd)}}}function Mg(t){}function xg(t){return vd(t.strings,t.values,Tg,Mg)}function p(t,...e){const r=Eg(t,e),n=Lp(t,...r),i=bd(t,r,()=>xg(n));return{...n,strings:i.strings,values:i.values}}const Cd={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},Cg=Object.keys(Cd),Ad={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Ag=Object.keys(Ad),Ld={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},Lg=Object.keys(Ld),Pg=[Li(Cd).map(([t,e])=>[e,t]),Li(Ad).map(([t,e])=>[e,t]),Li(Ld).map(([t,e])=>[e,t])].flat();new Map(Pg);Array.from(new Set([...Cg,...Lg,...Ag].sort()));function yr(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const i=e.name,s=n==null?void 0:n.constructor.name,o=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${s}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${s}'.`;throw new Error(o)}return n}const Og={[ne.ElementExample]:()=>[],[ne.Page]:t=>[!t.title&&new Error("Cannot define an element-book page with an empty title."),...Ph(t.controls,t.title)].filter(Ls),[ne.Root]:()=>[]},Vn="_isBookTreeNode",Pd=new Map;function Ng(t){return Pd.get(t)}function Ig(t,e){Sh(Pd,t,()=>e)}function Yt(t,e){return!!(Od(t)&&t.entry.entryType===e)}function Od(t){return!!(Nc(t,[Vn,"entry"])&&t[Vn])}function _g(){return{[Vn]:!0,entry:{entryType:ne.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function Rg({entries:t,debug:e}){const r=Ng(t);if(r)return r;const n=_g();t.forEach(o=>so({tree:n,newEntry:o,debug:e,manuallyAdded:!0}));const i=Nd(n),s={tree:n,flattenedNodes:i};return Ig(t,s),e&&console.info("element-book tree:",n),s}function Dg(t,e,r){if(!e.parent)return t;const n=ds(e,t);if(n)return n;r&&console.info(`parent of ${e.title} not found in tree; adding it now.`),so({tree:t,newEntry:e.parent,debug:r,manuallyAdded:!1});const i=ds(e,t);if(!i)throw new Error(`Failed to find node despite having just added it: ${Is(e,!1)}`);return i}function so({tree:t,newEntry:e,debug:r,manuallyAdded:n}){const i=Og[e.entryType](e);e.errors.push(...i);const s=Dg(t,e,r),o=Ln(e.title),a=s.children[o];if(a){if(n){if(a.manuallyAdded){a.entry.errors.push(new Error(`Cannot create duplicate '${o}'${s.urlBreadcrumb?` in parent '${s.urlBreadcrumb}'.`:""}`));return}a.manuallyAdded=!0}return}const l={[Vn]:!0,children:{},urlBreadcrumb:o,fullUrlBreadcrumbs:[...s.fullUrlBreadcrumbs,o],entry:e,manuallyAdded:n};s.children[o]=l,Ah(e,ne.Page)&&Object.values(e.elementExamples??{}).length&&Object.values(e.elementExamples??{}).forEach(c=>so({tree:t,newEntry:c,debug:r,manuallyAdded:n}))}function ds(t,e){const r=Od(t)?t.fullUrlBreadcrumbs.slice(0,-1):Is(t,!1);return r.length?r.reduce((i,s)=>{if(i)return i.children[s]},e):void 0}function Nd(t){const r=!!t.entry.errors.length?[]:Object.values(t.children).map(i=>Nd(i));return[t,...r].flat()}function oo(t,e){return ao(t,["",...e],void 0)}function ao(t,e,r){const n=e.slice(1),i=n[0];!i&&r&&(t.controls=r);const s=t.children[i||""],o=s&&ao(s,n,r);return{...t.controls,...o}}function Vg(t,e,r){const n={...t};return ao(n,["",...e],r),n}function Id(t,e){const r=(e==null?void 0:e.controls)||(Yt(t,ne.Page)?An(t.entry.controls,(i,s)=>s.initValue):{});return{children:An(t.children,(i,s)=>{var o;return Id(s,(o=e==null?void 0:e.children)==null?void 0:o[s.urlBreadcrumb])}),controls:r}}function Hg({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const i=e.toLowerCase(),s=t.toLowerCase();e:for(let o=0,a=0;o<n;o++){const l=s.charCodeAt(o);for(;a<r;)if(i.charCodeAt(a++)===l)continue e;return!1}return!0}const Bg=Ch(32);function En(t){return t.join(Bg)}function _d(t){if(!t.length)return[];const e=En(t),r=_d(t.slice(0,-1));return[e,...r]}const Fg=["error","errors"];function Ug(t){return Fg.includes(t)}function zg({flattenedNodes:t,searchQuery:e}){const r={};function n(i){Object.values(i.children).map(o=>(n(o),En(o.fullUrlBreadcrumbs))).forEach(o=>r[o]=!0)}return t.forEach(i=>{const s=i.entry.errors.length&&Ug(e),o=En(i.fullUrlBreadcrumbs);if(Hg({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:e.toLowerCase()})||s||r[o]){const l=_d(i.fullUrlBreadcrumbs);n(i),l.forEach(c=>r[c]=!0)}else r[o]=!1}),t.filter(i=>{const s=En(i.fullUrlBreadcrumbs),o=r[s];if(!C(o,"boolean"))throw new Error(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return o})}class lo extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class qa extends lo{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"GlobalUrlEventsConsolidationError"})}}class Wg extends lo{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}var Za;(function(t){t.Upper="upper",t.Lower="lower"})(Za||(Za={}));var Ya;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ya||(Ya={}));function jg(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}jg();function Rd({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function Vi({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const Gg=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function qg(t,e){return t?Gg.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function fs(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Zg(t,e,r){return t.reduce((n,i,s,o)=>{const a=e(i,s,o);return r(a,i,s,o)&&n.push(a),n},[])}function Yg(t){return!!t}var Ka;(function(t){t.Upper="upper",t.Lower="lower"})(Ka||(Ka={}));function Kg(t,e){return t.split(e)}var Ja;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ja||(Ja={}));function Jg(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Xg(t,e){return fs(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function Qg(t,e,r){if(e in t)return t[e];{const n=r();return _c(n)?new Promise(async(i,s)=>{try{const o=await n;t[e]=o,i(o)}catch(o){s(o)}}):(t[e]=n,n)}}function hs(t,e){let r=!1;const n=fs(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(fs(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function ew(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}ew();function qe({value:t,prefix:e}){return String(t).startsWith(e)?String(t):`${e}${String(t)}`}function co({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const Hi="://";function uo(...t){const e=t.join("/"),[r,n=""]=e.includes(Hi)?e.split(Hi):["",e];let i=!1;const s=n.replace(/\/{2,}/g,"/").split("/").reduce((o,a,l,c)=>{if(i)return o;const d=c[l+1];let u=a;const f=d==null?void 0:d.startsWith("?"),h=!a.includes("?")&&f,m=d==="?";if(f||h){i=!0;let g=!1;const b=c.slice(l+2).reduce(($,k)=>(k.includes("#")&&(g=!0),g?$.concat(k):[$,k].join("&")),"");u=[a,d,m?co({value:b,prefix:"&"}):b].join("")}return o.concat(u)},[]);return[r,r?Hi:"",s.join("/")].join("")}var Hn;(function(t){t.Encode="encode",t.Decode="decode",t.None="none"})(Hn||(Hn={}));var Nr;(function(t){t.Clear="clear",t.Replace="replace",t.Append="append"})(Nr||(Nr={}));function on(t,e){return t.map(r=>{if(r!=null)return Kt(String(r),e)}).filter(r=>r!=null)}function Kt(t,e){return(e==null?void 0:e.encoding)===Hn.Decode?decodeURIComponent(t):(e==null?void 0:e.encoding)===Hn.Encode?encodeURIComponent(t):t}const tw=oi(Ku({keys:"",values:[""],required:!0}));function rw(t,e,r){const n=(r==null?void 0:r.searchParamStrategy)===Nr.Clear?{}:hs(t,(o,a)=>C(a,"string")?[a]:a),i=hs(e,(o,a)=>{if((r==null?void 0:r.searchParamStrategy)===Nr.Append){const l=n[o],c=C(l,"array")?l:[l];if(a){const d=C(a,"array")?a:[a];return on([...c,...d],r)}else return on(c,r)}else return C(a,"array")?on(a,r):a?on([a],r):void 0});return Xg({...n,...i},(o,a)=>!!a)}function Dd(t,e){return C(t,"string")&&!t.includes("?")?{}:(C(t,"string")?t:t instanceof URL?t.search:t.toString()).replace(/^.*\?|\#.*$/,"").split("&").map(s=>{const[o,...a]=Kg(s,"=");return[o,a.length?a.join("="):void 0]}).reduce((s,[o,a])=>{const l=Vd({options:e,key:o,value:a}),c=Qg(s,l.key,()=>[]);return a!=null&&c.push(l.value),s},{})}function nw(t){if(t!=null)return C(t,"array")?[...t]:t===""?[]:[t]}function iw(t,e){const r=Zg(Object.entries(t),([n,i])=>{const s=nw(i);return s!=null&&s.length?s.map(o=>{const a=Vd({options:e,key:n,value:o});return[a.key,a.value].join("=")}):[n]},(n,[,i])=>i!=null).flat();return r.length?qe({value:r.join("&"),prefix:"?"}):""}function Vd({options:t,key:e,value:r}){return{key:Kt(e,t),value:Kt(String(r),t)}}function Hd({hash:t,hostname:e,password:r,pathname:n,port:i,protocol:s,search:o,username:a}){return[s?s+"://":"",a?a+":":"",r?r+"@":"",ui({hostname:e,port:i}),fo({hash:t,pathname:n,search:o})].join("")}function Bd({pathname:t}){const e=co({value:t,prefix:"/"});return e?e.split("/"):[]}function fo({hash:t,pathname:e,search:r}){return[qe({value:e,prefix:"/"}),r?qe({value:r,prefix:"?"}):"",t?qe({value:t,prefix:"#"}):""].join("")}function ui({hostname:t,port:e}){return[t,e?":"+e:""].join("")}function Fd({hostname:t,port:e,protocol:r}){return[r,ui({hostname:t,port:e})].filter(Yg).join("://")}function Bn(t,e){const r=C(t,"string")?t:t.toString(),n=r.replace(/^[^#]*(?:#|$)/,""),i=n?qe({value:Kt(n,e),prefix:"#"}):"",s=r.replace(/#.*$/,""),o=s.replace(/^[^\?]*(?:\?|$)/,""),a=o?qe({value:Kt(o,e),prefix:"?"}):"",l=s.replace(/\?.*$/,""),c=l.includes("://")?l.replace(/:\/\/.*$/,""):"",d=l.replace(/^.*:\/\//,"").replace(/\/\//g,"/"),u=d.replace(/@.*/,""),f=d.replace(/^[^@]*@/,""),h=u!==f,[m,...g]=h?u.split(":").reverse():[],b=g.reverse().join("").replace(/[\/:]/g,"")||"",$=(m==null?void 0:m.replace(/[\/:]/g,""))||"",k=f.replace(/[:\/].*/,""),L=f.replace(/^[^\/:]*(\:|\/|$)/,"$1"),D=co({value:L.replace(/\/.*$/,""),prefix:":"}),J=Kt(L.replace(/^[^\/]*(?:\/|$)/,"/"),e),Te=ui({hostname:k,port:D}),fe=Fd({hostname:k,port:D,protocol:c}),H=Hd({hash:i,hostname:k,password:$,pathname:J,port:D,protocol:c,search:a,username:b}),Z=Dd(a),Me=Bd({pathname:J});return{fullPath:fo({hash:i,pathname:J,search:a}),hash:i,host:Te,hostname:k,href:H,origin:fe,password:$,pathname:J,paths:Me,port:D,protocol:c,search:a,searchParams:Z,username:b}}function sw(t,e,r){const n=C(t,"string")?t:"",i=C(t,"string")?e:t,s=C(t,"string")?r:e,o=Bn(n),a=hs(o,(f,h)=>{if(!qg(i,f))return h;const m=i[f];return C(m,"number")?String(m):C(m,"string")?f==="hash"&&m?qe({value:m,prefix:"#"}):f==="pathname"?qe({value:m,prefix:"/"}):m:h});xn(i,"paths")&&i.paths&&(a.pathname=uo("",...i.paths));const l=C(i.search,"string")?Dd(qe({value:i.search,prefix:"?"})):Jg(i.search||{}),c=rw(a.searchParams,l,s),d=iw(c,s);return{...a,searchParams:c,search:d,paths:Bd(a),fullPath:fo(a),host:ui(a),origin:Fd(a),href:Hd({...a,search:d})}}const ow=oi({protocol:"",username:"",password:"",host:"",hostname:"",port:"",origin:"",pathname:"/",paths:[""],search:"",searchParams:tw,hash:"",fullPath:"/",href:"/"});({...ow.defaultValue});const aw=oi({basePath:sn("",void 0),sanitizeRoute:t=>t,maxListenerCount:sn(1,void 0),disableWarnings:sn(void 0,!1),isPaused:sn(!1,void 0)}),lw=0;function Ud(t){return!(t.type!=="click"&&t.type!=="mousedown"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==lw)}const di="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const cw=globalThis.history.pushState;function Xa(...t){const e=cw.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(di)),e}const uw=globalThis.history.replaceState;function Qa(...t){const e=uw.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(di)),e}function dw(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){{if(globalThis.history.pushState===Xa)throw new qa("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===Qa)throw new qa("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?")}globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=Xa,globalThis.history.replaceState=Qa,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(di))})}}function Bi(t,e){const r=Bn(t),n=Vi({value:Vi({value:r.pathname,prefix:Rd({value:e||"",prefix:"/"})}),prefix:"/"}),i=n?n.split("/"):[],s=Object.keys(r.searchParams).length?r.searchParams:void 0,o=r.hash?Vi({value:r.hash,prefix:"#"}):void 0;return{paths:i,search:s,hash:o}}class fw{constructor(e){Object.defineProperty(this,"innerObservable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeGlobalListener",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sanitizationDepth",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Ju(e,aw),this.params={...e};const r=this.readCurrentRoute();this.innerObservable=new Xu({defaultValue:r,equalityCheck:()=>!1}),dw(),this.removeGlobalListener=Uc(globalThis,di,()=>{if(this.params.isPaused)return;if(this.sanitizationDepth>2)throw new Wg("Looping route sanitization detected; aborting window URL change listener.");const n=Bi(globalThis.location.href,this.params.basePath),i=e.sanitizeRoute(n);Re(i,n)?(this.sanitizationDepth=0,this.innerObservable.setValue(i)):(this.sanitizationDepth++,this.setRoute(i,{replace:!0}),e.disableWarnings||console.warn("Route sanitized.",{from:n,to:i}))}),this.setRoute(r,{replace:!0})}routeIncludesBasePath(e){return!e.paths||!this.params.basePath?!1:uo(...e.paths).startsWith(this.params.basePath)}readCurrentRoute(){return this.sanitizeRoute(Bi(globalThis.location.href,this.params.basePath))}sanitizeRoute(e){return this.params.sanitizeRoute(e)}createRouteUrl(e){const r=Bi(globalThis.location.href,void 0),n={...r,...e},i=this.sanitizeRoute(n),o=this.routeIncludesBasePath(r)&&!this.routeIncludesBasePath(i)&&this.params.basePath?{...i,paths:[this.params.basePath,...i.paths]}:i;return sw(globalThis.location.href,{paths:o.paths,search:o.search,hash:o.hash?Rd({value:o.hash,prefix:"#"}):"#"},{searchParamStrategy:Nr.Clear}).href}setRoute(e,r={}){const n=this.createRouteUrl(e),{fullPath:i}=Bn(n);return this.params.isPaused||!r.force&&Re(Bn(globalThis.location.href).fullPath,i)?!1:r.replace?(globalThis.history.replaceState(void 0,"",i),!0):(globalThis.history.pushState(void 0,"",i),!0)}setRouteOnDirectNavigation(e,r){return Ud(r)?(r.preventDefault(),this.setRoute(e)):!1}listen(e,r){const n=this.params.maxListenerCount==null?1:this.params.maxListenerCount;if(n&&this.innerObservable.getListenerCount()>=n)throw new lo(`Attempting to attach more route listeners than the \`maxListenerCount\` of '${n}'.`);return this.innerObservable.listen(e,r),()=>this.removeListener(r)}removeListener(e){return this.innerObservable.removeListener(e)}getListenerCount(){return this.innerObservable.getListenerCount()}destroy(){this.params.isPaused=!0,this.removeGlobalListener(),this.innerObservable.destroy()}}var Ae=(t=>(t.Search="search",t.Book="book",t))(Ae||{});function ms(t){return t[0]==="book"?"":t[1]?decodeURIComponent(t[1]):""}const er={hash:void 0,paths:["book"],search:void 0};function hw(t){return new fw({basePath:t,sanitizeRoute(e){return{paths:mw(e.paths),hash:void 0,search:void 0}}})}function mw(t){const e=t[0];if(bh(e,Ae)){if(e===Ae.Book)return[Ae.Book,...t.slice(1)];if(e===Ae.Search)return t[1]?[e,t[1]]:[Ae.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return er.paths}const I=pt({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),pw={nav:{hover:{background:I["element-book-nav-hover-background-color"],foreground:I["element-book-nav-hover-foreground-color"]},active:{background:I["element-book-nav-active-background-color"],foreground:I["element-book-nav-active-foreground-color"]},selected:{background:I["element-book-nav-selected-background-color"],foreground:I["element-book-nav-selected-foreground-color"]}},accent:{icon:I["element-book-accent-icon-color"]},page:{background:I["element-book-page-background-color"],backgroundFaint1:I["element-book-page-background-faint-level-1-color"],backgroundFaint2:I["element-book-page-background-faint-level-2-color"],foreground:I["element-book-page-foreground-color"],foregroundFaint1:I["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:I["element-book-page-foreground-faint-level-2-color"]}};function gw(t,e){zd(t,e,pw)}function ps(t){return Zn(t,"_$cssResult$")}function el(t){return Nc(t,["name","value","default"])&&C(t.default,"string")&&ps(t.name)&&ps(t.value)}function zd(t,e,r){Object.entries(e).forEach(([n,i])=>{const s=r[n];if(!s)throw new Error(`no nestedCssVar at key '${n}'`);if(ps(i)){if(!el(s))throw new Error(`got a CSS result at '${n}' but no CSS var`);eg({forCssVar:s,onElement:t,toValue:String(i)})}else{if(el(s))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);zd(t,i,s)}})}function z(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(o=>[o]));let n=e[0].length,i=e[0].map((o,a)=>e.map(l=>l[a])),s=t.map(o=>i.map(a=>{let l=0;if(!Array.isArray(o)){for(let c of a)l+=o*c;return l}for(let c=0;c<o.length;c++)l+=o[c]*(a[c]||0);return l}));return r===1&&(s=s[0]),n===1?s.map(o=>o[0]):s}function qr(t){return st(t)==="string"}function st(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Fn(t,{precision:e,unit:r}){return lt(t)?"none":Wd(t,e)+(r??"")}function lt(t){return Number.isNaN(t)||t instanceof Number&&(t==null?void 0:t.none)}function K(t){return lt(t)?0:t}function Wd(t,e){if(t===0)return 0;let r=~~t,n=0;r&&e&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(e-n);return Math.floor(t*i+.5)/i}const ww={deg:1,grad:.9,rad:180/Math.PI,turn:360};function jd(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let s=t.match(e);if(s){let o=[];return s[2].replace(i,(a,l)=>{let c=l.match(n),d=l;if(c){let u=c[0],f=d.slice(0,-u.length);u==="%"?(d=new Number(f/100),d.type="<percentage>"):(d=new Number(f*ww[u]),d.type="<angle>",d.unit=u)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);a.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),o.push(d)}),{name:s[1].toLowerCase(),rawName:s[1],rawArgs:s[2],args:o}}}function Gd(t){return t[t.length-1]}function Ir(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function qd(t,e,r){return(r-t)/(e-t)}function ho(t,e,r){return Ir(e[0],e[1],qd(t[0],t[1],r))}function Zd(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function Yd(t,e,r){return Math.max(Math.min(r,e),t)}function fi(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function De(t,e){return fi(Math.abs(t)**e,t)}function mo(t,e){return e===0?0:t/e}function Kd(t,e,r=0,n=t.length){for(;r<n;){const i=r+n>>1;t[i]<e?r=i+1:n=i}return r}var yw=Object.freeze({__proto__:null,bisectLeft:Kd,clamp:Yd,copySign:fi,interpolate:Ir,interpolateInv:qd,isNone:lt,isString:qr,last:Gd,mapRange:ho,multiplyMatrices:z,parseCoordGrammar:Zd,parseFunction:jd,serializeNumber:Fn,skipNone:K,spow:De,toPrecision:Wd,type:st,zdiv:mo});class bw{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const ct=new bw;var Lc,Pc,Oc,we={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((Oc=(Pc=(Lc=globalThis==null?void 0:globalThis.process)==null?void 0:Lc.env)==null?void 0:Pc.NODE_ENV)==null?void 0:Oc.toLowerCase())!=="test",warn:function(e){var r,n;this.verbose&&((n=(r=globalThis==null?void 0:globalThis.console)==null?void 0:r.warn)==null||n.call(r,e))}};const se={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function gs(t){return Array.isArray(t)?t:se[t]}function Un(t,e,r,n={}){if(t=gs(t),e=gs(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let i={W1:t,W2:e,XYZ:r,options:n};if(ct.run("chromatic-adaptation-start",i),i.M||(i.W1===se.D65&&i.W2===se.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===se.D50&&i.W2===se.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),ct.run("chromatic-adaptation-end",i),i.M)return z(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const vw=new Set(["<number>","<percentage>","<angle>"]);function tl(t,e,r,n){return Object.entries(t.coords).map(([s,o],a)=>{let l=e.coordGrammar[a],c=n[a],d=c==null?void 0:c.type,u;if(c.none?u=l.find(m=>vw.has(m)):u=l.find(m=>m==d),!u){let m=o.name||s;throw new TypeError(`${d??c.raw} not allowed for ${m} in ${r}()`)}let f=u.range;d==="<percentage>"&&(f||(f=[0,1]));let h=o.range||o.refRange;return f&&h&&(n[a]=ho(f,h,n[a])),u})}function Jd(t,{meta:e}={}){var n,i,s,o;let r={str:(n=String(t))==null?void 0:n.trim()};if(ct.run("parse-start",r),r.color)return r.color;if(r.parsed=jd(r.str),r.parsed){let a=r.parsed.name;if(a==="color"){let l=r.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,d=[l,c],u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of v.all){let g=m.getFormat("color");if(g&&(d.includes(g.id)||(i=g.ids)!=null&&i.filter(b=>d.includes(b)).length)){const b=Object.keys(m.coords).map((k,L)=>r.parsed.args[L]||0);let $;return g.coordGrammar&&($=tl(m,g,"color",b)),e&&Object.assign(e,{formatId:"color",types:$}),g.id.startsWith("--")&&!l.startsWith("--")&&we.warn(`${m.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${g.id}) instead of color(${l}).`),l.startsWith("--")&&!g.id.startsWith("--")&&we.warn(`${m.name} is a standard space and supported in the CSS spec. Use color(${g.id}) instead of prefixed color(${l}).`),{spaceId:m.id,coords:b,alpha:u}}}let f="",h=l in v.registry?l:c;if(h in v.registry){let m=(o=(s=v.registry[h].formats)==null?void 0:s.color)==null?void 0:o.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${l}). `+(f||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(a);if(c&&c.type==="function"){let d=1;(c.lastAlpha||Gd(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let u=r.parsed.args,f;return c.coordGrammar&&(f=tl(l,c,a,u)),e&&Object.assign(e,{formatId:c.name,types:f}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let a of v.all)for(let l in a.formats){let c=a.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let d=c.parse(r.str);if(d)return d.alpha??(d.alpha=1),e&&(e.formatId=l),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function A(t){if(Array.isArray(t))return t.map(A);if(!t)throw new TypeError("Empty color reference");qr(t)&&(t=Jd(t));let e=t.space||t.spaceId;return e instanceof v||(t.space=v.get(e)),t.alpha===void 0&&(t.alpha=1),t}const $w=75e-6,ae=class ae{constructor(e){var i;this.id=e.id,this.name=e.name,this.base=e.base?ae.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let s in r)"name"in r[s]||(r[s].name=s);this.coords=r;let n=e.white??this.base.white??"D65";this.white=gs(n),this.formats=e.formats??{};for(let s in this.formats){let o=this.formats[s];o.type||(o.type="function"),o.name||(o.name=s)}(i=this.formats.color)!=null&&i.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:ae.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(s,o)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:Sw(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),ct.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=$w}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((i,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(i))return!0;let[a,l]=o.range;return(a===void 0||i>=a-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,r;return((r=(e=this.formats)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=rl(e,this),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=rl(r,this),r):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,r){if(arguments.length===1){const a=A(e);[e,r]=[a.space,a.coords]}if(e=ae.get(e),this.equals(e))return r;r=r.map(a=>Number.isNaN(a)?0:a);let n=this.path,i=e.path,s,o;for(let a=0;a<n.length&&n[a].equals(i[a]);a++)s=n[a],o=a;if(!s)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let a=n.length-1;a>o;a--)r=n[a].toBase(r);for(let a=o+1;a<i.length;a++)r=i[a].fromBase(r);return r}from(e,r){if(arguments.length===1){const n=A(e);[e,r]=[n.space,n.coords]}return e=ae.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;e.push((i==null?void 0:i.min)??0)}return e}static get all(){return[...new Set(Object.values(ae.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof ae)return e;if(st(e)==="string"){let i=ae.registry[e.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${e}"`);return i}if(r.length)return ae.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=st(e),i,s;if(n==="string"?e.includes(".")?[i,s]=e.split("."):[i,s]=[,e]:Array.isArray(e)?[i,s]=e:(i=e.space,s=e.coordId),i=ae.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=st(s),n==="number"||n==="string"&&s>=0){let c=Object.entries(i.coords)[s];if(c)return{space:i,id:c[0],index:s,...c[1]}}i=ae.get(i);let o=s.toLowerCase(),a=0;for(let c in i.coords){let d=i.coords[c];if(c.toLowerCase()===o||((l=d.name)==null?void 0:l.toLowerCase())===o)return{space:i,id:c,index:a,...d};a++}throw new TypeError(`No "${s}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}};S(ae,"registry",{}),S(ae,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=ae;function Sw(t){let e=[t];for(let r=t;r=r.base;)e.push(r);return e}function rl(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=Zd(t.coords);let r=Object.entries(e).map(([n,i],s)=>{let o=t.coordGrammar[s][0],a=i.range||i.refRange,l=o.range,c="";return o=="<percentage>"?(l=[0,100],c="%"):o=="<angle>"&&(c="deg"),{fromRange:a,toRange:l,suffix:c}});t.serializeCoords=(n,i)=>n.map((s,o)=>{let{fromRange:a,toRange:l,suffix:c}=r[o];return a&&l&&(s=ho(a,l,s)),s=Fn(s,{precision:i,unit:c}),s})}return t}var te=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class ue extends v{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=te),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=z(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Un(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Un(this.base.white,this.white,r),z(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function Zr(t,e){return t=A(t),!e||t.space.equals(e)?t.coords.slice():(e=v.get(e),e.from(t))}function he(t,e){t=A(t);let{space:r,index:n}=v.resolveCoord(e,t.space);return Zr(t,r)[n]}function po(t,e,r){return t=A(t),e=v.get(e),t.coords=e.to(t.space,r),t}po.returns="color";function Ye(t,e,r){if(t=A(t),arguments.length===2&&st(arguments[1])==="object"){let n=arguments[1];for(let i in n)Ye(t,i,n[i])}else{typeof r=="function"&&(r=r(he(t,e)));let{space:n,index:i}=v.resolveCoord(e,t.space),s=Zr(t,n);s[i]=r,po(t,n,s)}return t}Ye.returns="color";var go=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:te,fromBase:t=>Un(te.white,"D50",t),toBase:t=>Un("D50",te.white,t)});const kw=216/24389,nl=24/116,an=24389/27;let Fi=se.D50;var me=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Fi,base:go,fromBase(t){let r=t.map((n,i)=>n/Fi[i]).map(n=>n>kw?Math.cbrt(n):(an*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>nl?Math.pow(e[0],3):(116*e[0]-16)/an,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/an,e[2]>nl?Math.pow(e[2],3):(116*e[2]-16)/an].map((n,i)=>n*Fi[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ve(t){return(t%360+360)%360}function Ew(t,e){if(t==="raw")return e;let[r,n]=e.map(Ve),i=n-r;return t==="increasing"?i<0&&(n+=360):t==="decreasing"?i>0&&(r+=360):t==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):t==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var _r=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:me,fromBase(t){let[e,r,n]=t,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const il=25**7,zn=Math.PI,sl=180/zn,Dt=zn/180;function ol(t){const e=t*t;return e*e*e*t}function Xd(t,e,{kL:r=1,kC:n=1,kH:i=1}={}){[t,e]=A([t,e]);let[s,o,a]=me.from(t),l=_r.from(me,[s,o,a])[1],[c,d,u]=me.from(e),f=_r.from(me,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let h=(l+f)/2,m=ol(h),g=.5*(1-Math.sqrt(m/(m+il))),b=(1+g)*o,$=(1+g)*d,k=Math.sqrt(b**2+a**2),L=Math.sqrt($**2+u**2),D=b===0&&a===0?0:Math.atan2(a,b),J=$===0&&u===0?0:Math.atan2(u,$);D<0&&(D+=2*zn),J<0&&(J+=2*zn),D*=sl,J*=sl;let Te=c-s,fe=L-k,H=J-D,Z=D+J,Me=Math.abs(H),wt;k*L===0?wt=0:Me<=180?wt=H:H>180?wt=H-360:H<-180?wt=H+360:we.warn("the unthinkable has happened");let Eo=2*Math.sqrt(L*k)*Math.sin(wt*Dt/2),Xf=(s+c)/2,yi=(k+L)/2,To=ol(yi),He;k*L===0?He=Z:Me<=180?He=Z/2:Z<360?He=(Z+360)/2:He=(Z-360)/2;let Mo=(Xf-50)**2,Qf=1+.015*Mo/Math.sqrt(20+Mo),xo=1+.045*yi,ur=1;ur-=.17*Math.cos((He-30)*Dt),ur+=.24*Math.cos(2*He*Dt),ur+=.32*Math.cos((3*He+6)*Dt),ur-=.2*Math.cos((4*He-63)*Dt);let Co=1+.015*yi*ur,eh=30*Math.exp(-1*((He-275)/25)**2),th=2*Math.sqrt(To/(To+il)),rh=-1*Math.sin(2*eh*Dt)*th,Kr=(Te/(r*Qf))**2;return Kr+=(fe/(n*xo))**2,Kr+=(Eo/(i*Co))**2,Kr+=rh*(fe/(n*xo))*(Eo/(i*Co)),Math.sqrt(Kr)}const Tw=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Mw=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],xw=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Cw=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var tr=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:te,fromBase(t){let r=z(Tw,t).map(n=>Math.cbrt(n));return z(xw,r)},toBase(t){let r=z(Cw,t).map(n=>n**3);return z(Mw,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ws(t,e){[t,e]=A([t,e]);let[r,n,i]=tr.from(t),[s,o,a]=tr.from(e),l=r-s,c=n-o,d=i-a;return Math.sqrt(l**2+c**2+d**2)}const Aw=75e-6;function xt(t,e,{epsilon:r=Aw}={}){t=A(t),e||(e=t.space),e=v.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function rr(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function Qd(t,e,r="lab"){r=v.get(r);let n=r.from(t),i=r.from(e);return Math.sqrt(n.reduce((s,o,a)=>{let l=i[a];return isNaN(o)||isNaN(l)?s:s+(l-o)**2},0))}function Lw(t,e){return Qd(t,e,"lab")}const Pw=Math.PI,al=Pw/180;function Ow(t,e,{l:r=2,c:n=1}={}){[t,e]=A([t,e]);let[i,s,o]=me.from(t),[,a,l]=_r.from(me,[i,s,o]),[c,d,u]=me.from(e),f=_r.from(me,[c,d,u])[1];a<0&&(a=0),f<0&&(f=0);let h=i-c,m=a-f,g=s-d,b=o-u,$=g**2+b**2-m**2,k=.511;i>=16&&(k=.040975*i/(1+.01765*i));let L=.0638*a/(1+.0131*a)+.638,D;Number.isNaN(l)&&(l=0),l>=164&&l<=345?D=.56+Math.abs(.2*Math.cos((l+168)*al)):D=.36+Math.abs(.4*Math.cos((l+35)*al));let J=Math.pow(a,4),Te=Math.sqrt(J/(J+1900)),fe=L*(Te*D+1-Te),H=(h/(r*k))**2;return H+=(m/(n*L))**2,H+=$/fe**2,Math.sqrt(H)}const ll=203;var wo=new v({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:te,fromBase(t){return t.map(e=>Math.max(e*ll,0))},toBase(t){return t.map(e=>Math.max(e/ll,0))}});const ln=1.15,cn=.66,cl=2610/2**14,Nw=2**14/2610,ul=3424/2**12,dl=2413/2**7,fl=2392/2**7,Iw=1.7*2523/2**5,hl=2**5/(1.7*2523),un=-.56,Ui=16295499532821565e-27,_w=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Rw=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Dw=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Vw=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ef=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:wo,fromBase(t){let[e,r,n]=t,i=ln*e-(ln-1)*n,s=cn*r-(cn-1)*e,a=z(_w,[i,s,n]).map(function(f){let h=ul+dl*(f/1e4)**cl,m=1+fl*(f/1e4)**cl;return(h/m)**Iw}),[l,c,d]=z(Dw,a);return[(1+un)*l/(1+un*l)-Ui,c,d]},toBase(t){let[e,r,n]=t,i=(e+Ui)/(1+un-un*(e+Ui)),o=z(Vw,[i,r,n]).map(function(f){let h=ul-f**hl,m=fl*f**hl-dl;return 1e4*(h/m)**Nw}),[a,l,c]=z(Rw,o),d=(a+(ln-1)*c)/ln,u=(l+(cn-1)*d)/cn;return[d,u,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),ys=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ef,fromBase(t){let[e,r,n]=t,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function Hw(t,e){[t,e]=A([t,e]);let[r,n,i]=ys.from(t),[s,o,a]=ys.from(e),l=r-s,c=n-o;Number.isNaN(i)&&Number.isNaN(a)?(i=0,a=0):Number.isNaN(i)?i=a:Number.isNaN(a)&&(a=i);let d=i-a,u=2*Math.sqrt(n*o)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const tf=3424/4096,rf=2413/128,nf=2392/128,ml=2610/16384,Bw=2523/32,Fw=16384/2610,pl=32/2523,Uw=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],zw=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Ww=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],jw=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var bs=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:wo,fromBase(t){let e=z(Uw,t);return Gw(e)},toBase(t){let e=qw(t);return z(jw,e)}});function Gw(t){let e=t.map(function(r){let n=tf+rf*(r/1e4)**ml,i=1+nf*(r/1e4)**ml;return(n/i)**Bw});return z(zw,e)}function qw(t){return z(Ww,t).map(function(n){let i=Math.max(n**pl-tf,0),s=rf-nf*n**pl;return 1e4*(i/s)**Fw})}function Zw(t,e){[t,e]=A([t,e]);let[r,n,i]=bs.from(t),[s,o,a]=bs.from(e);return 720*Math.sqrt((r-s)**2+.25*(n-o)**2+(i-a)**2)}const Yw=se.D65,sf=.42,gl=1/sf,zi=2*Math.PI,of=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],Kw=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Jw=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Xw={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},St={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Qw=180/Math.PI,wl=Math.PI/180;function af(t,e){return t.map(n=>{const i=De(e*Math.abs(n)*.01,sf);return 400*fi(i,n)/(i+27.13)})}function e1(t,e){const r=100/e*27.13**gl;return t.map(n=>{const i=Math.abs(n);return fi(r*De(i/(400-i),gl),n)})}function t1(t){let e=Ve(t);e<=St.h[0]&&(e+=360);const r=Kd(St.h,e)-1,[n,i]=St.h.slice(r,r+2),[s,o]=St.e.slice(r,r+2),a=St.H[r],l=(e-n)/s;return a+100*l/(l+(i-e)/o)}function r1(t){let e=(t%400+400)%400;const r=Math.floor(.01*e);e=e%100;const[n,i]=St.h.slice(r,r+2),[s,o]=St.e.slice(r,r+2);return Ve((e*(o*n-s*i)-100*n*o)/(e*(o-s)-100*o))}function lf(t,e,r,n,i){const s={};s.discounting=i,s.refWhite=t,s.surround=n;const o=t.map(g=>g*100);s.la=e,s.yb=r;const a=o[1],l=z(of,o);n=Xw[s.surround];const c=n[0];s.c=n[1],s.nc=n[2];const u=(1/(5*s.la+1))**4;s.fl=u*s.la+.1*(1-u)*(1-u)*Math.cbrt(5*s.la),s.flRoot=s.fl**.25,s.n=s.yb/a,s.z=1.48+Math.sqrt(s.n),s.nbb=.725*s.n**-.2,s.ncb=s.nbb;const f=i?1:Math.max(Math.min(c*(1-1/3.6*Math.exp((-s.la-42)/92)),1),0);s.dRgb=l.map(g=>Ir(1,a/g,f)),s.dRgbInv=s.dRgb.map(g=>1/g);const h=l.map((g,b)=>g*s.dRgb[b]),m=af(h,s.fl);return s.aW=s.nbb*(2*m[0]+m[1]+.05*m[2]),s}const yl=lf(Yw,64/Math.PI*.2,20,"average",!1);function vs(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let r=0;t.h!==void 0?r=Ve(t.h)*wl:r=r1(t.H)*wl;const n=Math.cos(r),i=Math.sin(r);let s=0;t.J!==void 0?s=De(t.J,1/2)*.1:t.Q!==void 0&&(s=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let o=0;t.C!==void 0?o=t.C/s:t.M!==void 0?o=t.M/e.flRoot/s:t.s!==void 0&&(o=4e-4*t.s**2*(e.aW+4)/e.c);const a=De(o*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=e.aW*De(s,2/e.c/e.z),d=5e4/13*e.nc*e.ncb*l,u=c/e.nbb,f=23*(u+.305)*mo(a,23*d+a*(11*n+108*i)),h=f*n,m=f*i,g=e1(z(Jw,[u,h,m]).map(b=>b*1/1403),e.fl);return z(Kw,g.map((b,$)=>b*e.dRgbInv[$])).map(b=>b/100)}function cf(t,e){const r=t.map(L=>L*100),n=af(z(of,r).map((L,D)=>L*e.dRgb[D]),e.fl),i=n[0]+(-12*n[1]+n[2])/11,s=(n[0]+n[1]-2*n[2])/9,o=(Math.atan2(s,i)%zi+zi)%zi,a=.25*(Math.cos(o+2)+3.8),l=5e4/13*e.nc*e.ncb*mo(a*Math.sqrt(i**2+s**2),n[0]+n[1]+1.05*n[2]+.305),c=De(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),d=e.nbb*(2*n[0]+n[1]+.05*n[2]),u=De(d/e.aW,.5*e.c*e.z),f=100*De(u,2),h=4/e.c*u*(e.aW+4)*e.flRoot,m=c*u,g=m*e.flRoot,b=Ve(o*Qw),$=t1(b),k=50*De(e.c*c/(e.aW+4),1/2);return{J:f,C:m,h:b,s:k,Q:h,M:g,H:$}}var n1=new v({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:te,fromBase(t){const e=cf(t,yl);return[e.J,e.M,e.h]},toBase(t){return vs({J:t[0],M:t[1],h:t[2]},yl)}});const i1=se.D65,s1=216/24389,uf=24389/27;function o1(t){return 116*(t>s1?Math.cbrt(t):(uf*t+16)/116)-16}function $s(t){return t>8?Math.pow((t+16)/116,3):t/uf}function a1(t,e){let[r,n,i]=t,s=[],o=0;if(i===0)return[0,0,0];let a=$s(i);i>0?o=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:o=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,u=1/0;for(;d<=c;){s=vs({J:o,C:n,h:r},e);const f=Math.abs(s[1]-a);if(f<u){if(f<=l)return s;u=f}o=o-(s[1]-a)*o/(2*s[1]),d+=1}return vs({J:o,C:n,h:r},e)}function l1(t,e){const r=o1(t[1]);if(r===0)return[0,0,0];const n=cf(t,yo);return[Ve(n.h),n.C,r]}const yo=lf(i1,200/Math.PI*$s(50),$s(50)*100,"average",!1);var Rr=new v({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:te,fromBase(t){return l1(t)},toBase(t){return a1(t,yo)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const c1=Math.PI/180,bl=[1,.007,.0228];function vl(t){t[1]<0&&(t=Rr.fromBase(Rr.toBase(t)));const e=Math.log(Math.max(1+bl[2]*t[1]*yo.flRoot,1))/bl[2],r=t[0]*c1,n=e*Math.cos(r),i=e*Math.sin(r);return[t[2],n,i]}function u1(t,e){[t,e]=A([t,e]);let[r,n,i]=vl(Rr.from(t)),[s,o,a]=vl(Rr.from(e));return Math.sqrt((r-s)**2+(n-o)**2+(i-a)**2)}var nr={deltaE76:Lw,deltaECMC:Ow,deltaE2000:Xd,deltaEJz:Hw,deltaEITP:Zw,deltaEOK:ws,deltaEHCT:u1};function d1(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const $l={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ut(t,{method:e=we.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:s={}}={}){if(t=A(t),qr(arguments[1])?r=arguments[1]:r||(r=t.space),r=v.get(r),xt(t,r,{epsilon:0}))return t;let o;if(e==="css")o=f1(t,{space:r});else{if(e!=="clip"&&!xt(t,r)){Object.prototype.hasOwnProperty.call($l,e)&&({method:e,jnd:i,deltaEMethod:n,blackWhiteClamp:s}=$l[e]);let a=Xd;if(n!==""){for(let c in nr)if("deltae"+n.toLowerCase()===c.toLowerCase()){a=nr[c];break}}let l=ut(F(t,r),{method:"clip",space:r});if(a(t,l)>i){if(Object.keys(s).length===3){let k=v.resolveCoord(s.channel),L=he(F(t,k.space),k.id);if(lt(L)&&(L=0),L>=s.max)return F({space:"xyz-d65",coords:se.D65},t.space);if(L<=s.min)return F({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=v.resolveCoord(e),d=c.space,u=c.id,f=F(t,d);f.coords.forEach((k,L)=>{lt(k)&&(f.coords[L]=0)});let m=(c.range||c.refRange)[0],g=d1(i),b=m,$=he(f,u);for(;$-b>g;){let k=rr(f);k=ut(k,{space:r,method:"clip"}),a(f,k)-i<g?b=he(f,u):$=he(f,u),Ye(f,u,(b+$)/2)}o=F(f,r)}else o=l}else o=F(t,r);if(e==="clip"||!xt(o,r,{epsilon:0})){let a=Object.values(r.coords).map(l=>l.range||[]);o.coords=o.coords.map((l,c)=>{let[d,u]=a[c];return d!==void 0&&(l=Math.max(d,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return r!==t.space&&(o=F(o,t.space)),t.coords=o.coords,t}ut.returns="color";const Sl={WHITE:{space:tr,coords:[1,0,0]},BLACK:{space:tr,coords:[0,0,0]}};function f1(t,{space:e}={}){t=A(t),e||(e=t.space),e=v.get(e);const i=v.get("oklch");if(e.isUnbounded)return F(t,e);const s=F(t,i);let o=s.coords[0];if(o>=1){const m=F(Sl.WHITE,e);return m.alpha=t.alpha,F(m,e)}if(o<=0){const m=F(Sl.BLACK,e);return m.alpha=t.alpha,F(m,e)}if(xt(s,e,{epsilon:0}))return F(s,e);function a(m){const g=F(m,e),b=Object.values(e.coords);return g.coords=g.coords.map(($,k)=>{if("range"in b[k]){const[L,D]=b[k].range;return Yd(L,$,D)}return $}),g}let l=0,c=s.coords[1],d=!0,u=rr(s),f=a(u),h=ws(f,u);if(h<.02)return f;for(;c-l>1e-4;){const m=(l+c)/2;if(u.coords[1]=m,d&&xt(u,e,{epsilon:0}))l=m;else if(f=a(u),h=ws(f,u),h<.02){if(.02-h<1e-4)break;d=!1,l=m}else c=m}return f}function F(t,e,{inGamut:r}={}){t=A(t),e=v.get(e);let n=e.from(t),i={space:e,coords:n,alpha:t.alpha};return r&&(i=ut(i,r===!0?void 0:r)),i}F.returns="color";function Tr(t,{precision:e=we.precision,format:r="default",inGamut:n=!0,...i}={}){var l;let s;t=A(t);let o=r;r=t.space.getFormat(r)??t.space.getFormat("default")??v.DEFAULT_FORMAT;let a=t.coords.slice();if(n||(n=r.toGamut),n&&!xt(t)&&(a=ut(rr(t),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=e,r.serialize)s=r.serialize(a,t.alpha,i);else throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?a=r.serializeCoords(a,e):e!==null&&(a=a.map(h=>Fn(h,{precision:e})));let d=[...a];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(h)}let u=t.alpha;e!==null&&(u=Fn(u,{precision:e}));let f=t.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${u}`;s=`${c}(${d.join(r.commas?", ":" ")}${f})`}return s}const h1=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],m1=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var hi=new ue({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:h1,fromXYZ_M:m1});const dn=1.09929682680944,kl=.018053968510807;var df=new ue({id:"rec2020",name:"REC.2020",base:hi,toBase(t){return t.map(function(e){return e<kl*4.5?e/4.5:Math.pow((e+dn-1)/dn,1/.45)})},fromBase(t){return t.map(function(e){return e>=kl?dn*Math.pow(e,.45)-(dn-1):4.5*e})}});const p1=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],g1=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var ff=new ue({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:p1,fromXYZ_M:g1});const w1=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],Q=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var hf=new ue({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:w1,fromXYZ_M:Q}),El={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Tl=Array(3).fill("<percentage> | <number>[0, 255]"),Ml=Array(3).fill("<number>[0, 255]");var ir=new ue({id:"srgb",name:"sRGB",base:hf,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<=.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Tl},rgb_number:{name:"rgb",commas:!0,coords:Ml,noAlpha:!0},color:{},rgba:{coords:Tl,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ml},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(s=>Math.round(s*255));let n=r&&t.every(s=>s%17===0);return"#"+t.map(s=>n?(s/17).toString(16):s.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=El.black,e.alpha=0):e.coords=El[t],e.coords)return e}}}}),mf=new ue({id:"p3",cssId:"display-p3",name:"P3",base:ff,fromBase:ir.fromBase,toBase:ir.toBase});we.display_space=ir;let y1;if(typeof CSS<"u"&&CSS.supports)for(let t of[me,df,mf]){let e=t.getMinCoords(),n=Tr({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){we.display_space=t;break}}function b1(t,{space:e=we.display_space,...r}={}){let n=Tr(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!we.display_space)n=new String(n),n.color=t;else{let i=t;if((t.coords.some(lt)||lt(t.alpha))&&!(y1??(y1=CSS.supports("color","hsl(none 50% 50%)")))&&(i=rr(t),i.coords=i.coords.map(K),i.alpha=K(i.alpha),n=Tr(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=F(i,e),n=new String(Tr(i,r)),n.color=i}return n}function v1(t,e){return t=A(t),e=A(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function dt(t){return he(t,[te,"y"])}function pf(t,e){Ye(t,[te,"y"],e)}function $1(t){Object.defineProperty(t.prototype,"luminance",{get(){return dt(this)},set(e){pf(this,e)}})}var S1=Object.freeze({__proto__:null,getLuminance:dt,register:$1,setLuminance:pf});function k1(t,e){t=A(t),e=A(e);let r=Math.max(dt(t),0),n=Math.max(dt(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const E1=.56,T1=.57,M1=.62,x1=.65,xl=.022,C1=1.414,A1=.1,L1=5e-4,P1=1.14,Cl=.027,O1=1.14;function Al(t){return t>=xl?t:t+(xl-t)**C1}function Vt(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function N1(t,e){e=A(e),t=A(t);let r,n,i,s,o,a;e=F(e,"srgb"),[s,o,a]=e.coords;let l=Vt(s)*.2126729+Vt(o)*.7151522+Vt(a)*.072175;t=F(t,"srgb"),[s,o,a]=t.coords;let c=Vt(s)*.2126729+Vt(o)*.7151522+Vt(a)*.072175,d=Al(l),u=Al(c),f=u>d;return Math.abs(u-d)<L1?n=0:f?(r=u**E1-d**T1,n=r*P1):(r=u**x1-d**M1,n=r*O1),Math.abs(n)<A1?i=0:n>0?i=n-Cl:i=n+Cl,i*100}function I1(t,e){t=A(t),e=A(e);let r=Math.max(dt(t),0),n=Math.max(dt(e),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const _1=5e4;function R1(t,e){t=A(t),e=A(e);let r=Math.max(dt(t),0),n=Math.max(dt(e),0);return n>r&&([r,n]=[n,r]),n===0?_1:(r-n)/n}function D1(t,e){t=A(t),e=A(e);let r=he(t,[me,"l"]),n=he(e,[me,"l"]);return Math.abs(r-n)}const V1=216/24389,Ll=24/116,fn=24389/27;let Wi=se.D65;var Ss=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Wi,base:te,fromBase(t){let r=t.map((n,i)=>n/Wi[i]).map(n=>n>V1?Math.cbrt(n):(fn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Ll?Math.pow(e[0],3):(116*e[0]-16)/fn,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/fn,e[2]>Ll?Math.pow(e[2],3):(116*e[2]-16)/fn].map((n,i)=>n*Wi[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const ji=Math.pow(5,.5)*.5+.5;function H1(t,e){t=A(t),e=A(e);let r=he(t,[Ss,"l"]),n=he(e,[Ss,"l"]),i=Math.abs(Math.pow(r,ji)-Math.pow(n,ji)),s=Math.pow(i,1/ji)*Math.SQRT2-40;return s<7.5?0:s}var Tn=Object.freeze({__proto__:null,contrastAPCA:N1,contrastDeltaPhi:H1,contrastLstar:D1,contrastMichelson:I1,contrastWCAG21:k1,contrastWeber:R1});function B1(t,e,r={}){qr(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let s=Object.keys(Tn).map(o=>o.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`)}t=A(t),e=A(e);for(let s in Tn)if("contrast"+n.toLowerCase()===s.toLowerCase())return Tn[s](t,e,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function mi(t){let[e,r,n]=Zr(t,te),i=e+15*r+3*n;return[4*e/i,9*r/i]}function gf(t){let[e,r,n]=Zr(t,te),i=e+r+n;return[e/i,r/i]}function F1(t){Object.defineProperty(t.prototype,"uv",{get(){return mi(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return gf(this)}})}var U1=Object.freeze({__proto__:null,register:F1,uv:mi,xy:gf});function br(t,e,r={}){qr(r)&&(r={method:r});let{method:n=we.deltaE,...i}=r;for(let s in nr)if("deltae"+n.toLowerCase()===s.toLowerCase())return nr[s](t,e,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function z1(t,e=.25){let n=[v.get("oklch","lch"),"l"];return Ye(t,n,i=>i*(1+e))}function W1(t,e=.25){let n=[v.get("oklch","lch"),"l"];return Ye(t,n,i=>i*(1-e))}var j1=Object.freeze({__proto__:null,darken:W1,lighten:z1});function wf(t,e,r=.5,n={}){return[t,e]=[A(t),A(e)],st(r)==="object"&&([r,n]=[.5,r]),Yr(t,e,n)(r)}function yf(t,e,r={}){let n;bo(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:s,steps:o=2,maxSteps:a=1e3,...l}=r;n||([t,e]=[A(t),A(e)],n=Yr(t,e,l));let c=br(t,e),d=i>0?Math.max(o,Math.ceil(c/i)+1):o,u=[];if(a!==void 0&&(d=Math.min(d,a)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(h,m)=>{let g=m*f;return{p:g,color:n(g)}})}if(i>0){let f=u.reduce((h,m,g)=>{if(g===0)return 0;let b=br(m.color,u[g-1].color,s);return Math.max(h,b)},0);for(;f>i;){f=0;for(let h=1;h<u.length&&u.length<a;h++){let m=u[h-1],g=u[h],b=(g.p+m.p)/2,$=n(b);f=Math.max(f,br($,m.color),br($,g.color)),u.splice(h,0,{p:b,color:n(b)}),h++}}}return u=u.map(f=>f.color),u}function Yr(t,e,r={}){if(bo(t)){let[l,c]=[t,e];return Yr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:i,progression:s,premultiplied:o}=r;t=A(t),e=A(e),t=rr(t),e=rr(e);let a={colors:[t,e],options:r};if(n?n=v.get(n):n=v.registry[we.interpolationSpace]||t.space,i=i?v.get(i):n,t=F(t,n),e=F(e,n),t=ut(t),e=ut(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[he(t,c),he(e,c)];isNaN(d)&&!isNaN(u)?d=u:isNaN(u)&&!isNaN(d)&&(u=d),[d,u]=Ew(l,[d,u]),Ye(t,c,d),Ye(e,c,u)}return o&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=s?s(l):l;let c=t.coords.map((f,h)=>{let m=e.coords[h];return Ir(f,m,l)}),d=Ir(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return o&&(u.coords=u.coords.map(f=>f/d)),i!==n&&(u=F(u,i)),u},{rangeArgs:a})}function bo(t){return st(t)==="function"&&!!t.rangeArgs}we.interpolationSpace="lab";function G1(t){t.defineFunction("mix",wf,{returns:"color"}),t.defineFunction("range",Yr,{returns:"function<color>"}),t.defineFunction("steps",yf,{returns:"array<color>"})}var q1=Object.freeze({__proto__:null,isRange:bo,mix:wf,range:Yr,register:G1,steps:yf}),bf=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:ir,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,i,s]=t,[o,a,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(a=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:o=(i-s)/c+(i<s?6:0);break;case i:o=(s-n)/c+2;break;case s:o=(n-i)/c+4}o=o*60}return a<0&&(o+=180,a=Math.abs(a)),o>=360&&(o-=360),[o,a*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function i(s){let o=(s+e/30)%12,a=r*Math.min(n,1-n);return n-a*Math.max(-1,Math.min(o-3,9-o,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),vf=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:bf,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[e,i===0?0:200*(1-n/i),100*i]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let i=n*(1-r/2);return[e,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Z1=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:vf,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let i=r+n;if(i>=1){let a=r/i;return[e,0,a*100]}let s=1-n,o=s===0?0:1-r/s;return[e,o*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Y1=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],K1=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var $f=new ue({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:Y1,fromXYZ_M:K1}),J1=new ue({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:$f,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const X1=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],Q1=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var Sf=new ue({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:go,toXYZ_M:X1,fromXYZ_M:Q1});const ey=1/512,ty=16/512;var ry=new ue({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:Sf,toBase(t){return t.map(e=>e<ty?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=ey?e**(1/1.8):16*e)}}),ny=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:tr,fromBase(t){let[e,r,n]=t,i;const s=2e-4;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){let[e,r,n]=t,i,s;return isNaN(n)?(i=0,s=0):(i=r*Math.cos(n*Math.PI/180),s=r*Math.sin(n*Math.PI/180)),[e,i,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let kf=se.D65;const iy=216/24389,Pl=24389/27,[Ol,Nl]=mi({space:te,coords:kf});var Ef=new v({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:kf,base:te,fromBase(t){let e=[K(t[0]),K(t[1]),K(t[2])],r=e[1],[n,i]=mi({space:te,coords:e});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let s=r<=iy?Pl*r:116*Math.cbrt(r)-16;return[s,13*s*(n-Ol),13*s*(i-Nl)]},toBase(t){let[e,r,n]=t;if(e===0||lt(e))return[0,0,0];r=K(r),n=K(n);let i=r/(13*e)+Ol,s=n/(13*e)+Nl,o=e<=8?e/Pl:Math.pow((e+16)/116,3);return[o*(9*i/(4*s)),o,o*((12-3*i-20*s)/(4*s))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),vo=new v({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ef,fromBase(t){let[e,r,n]=t,i;const s=.02;return Math.abs(r)<s&&Math.abs(n)<s?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Ve(i)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const sy=216/24389,oy=24389/27,Il=Q[0][0],_l=Q[0][1],Gi=Q[0][2],Rl=Q[1][0],Dl=Q[1][1],qi=Q[1][2],Vl=Q[2][0],Hl=Q[2][1],Zi=Q[2][2];function Ht(t,e,r){const n=e/(Math.sin(r)-t*Math.cos(r));return n<0?1/0:n}function Wn(t){const e=Math.pow(t+16,3)/1560896,r=e>sy?e:t/oy,n=r*(284517*Il-94839*Gi),i=r*(838422*Gi+769860*_l+731718*Il),s=r*(632260*Gi-126452*_l),o=r*(284517*Rl-94839*qi),a=r*(838422*qi+769860*Dl+731718*Rl),l=r*(632260*qi-126452*Dl),c=r*(284517*Vl-94839*Zi),d=r*(838422*Zi+769860*Hl+731718*Vl),u=r*(632260*Zi-126452*Hl);return{r0s:n/s,r0i:i*t/s,r1s:n/(s+126452),r1i:(i-769860)*t/(s+126452),g0s:o/l,g0i:a*t/l,g1s:o/(l+126452),g1i:(a-769860)*t/(l+126452),b0s:c/u,b0i:d*t/u,b1s:c/(u+126452),b1i:(d-769860)*t/(u+126452)}}function Bl(t,e){const r=e/360*Math.PI*2,n=Ht(t.r0s,t.r0i,r),i=Ht(t.r1s,t.r1i,r),s=Ht(t.g0s,t.g0i,r),o=Ht(t.g1s,t.g1i,r),a=Ht(t.b0s,t.b0i,r),l=Ht(t.b1s,t.b1i,r);return Math.min(n,i,s,o,a,l)}var ay=new v({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:vo,gamutSpace:ir,fromBase(t){let[e,r,n]=[K(t[0]),K(t[1]),K(t[2])],i;if(e>99.9999999)i=0,e=100;else if(e<1e-8)i=0,e=0;else{let s=Wn(e),o=Bl(s,n);i=r/o*100}return[n,i,e]},toBase(t){let[e,r,n]=[K(t[0]),K(t[1]),K(t[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Wn(n);i=Bl(s,e)/100*r}return[n,i,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});Q[0][0];Q[0][1];Q[0][2];Q[1][0];Q[1][1];Q[1][2];Q[2][0];Q[2][1];Q[2][2];function Bt(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function Fl(t){let e=Bt(t.r0s,t.r0i),r=Bt(t.r1s,t.r1i),n=Bt(t.g0s,t.g0i),i=Bt(t.g1s,t.g1i),s=Bt(t.b0s,t.b0i),o=Bt(t.b1s,t.b1i);return Math.min(e,r,n,i,s,o)}var ly=new v({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:vo,gamutSpace:"self",fromBase(t){let[e,r,n]=[K(t[0]),K(t[1]),K(t[2])],i;if(e>99.9999999)i=0,e=100;else if(e<1e-8)i=0,e=0;else{let s=Wn(e),o=Fl(s);i=r/o*100}return[n,i,e]},toBase(t){let[e,r,n]=[K(t[0]),K(t[1]),K(t[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let s=Wn(n);i=Fl(s)/100*r}return[n,i,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Ul=203,zl=2610/2**14,cy=2**14/2610,uy=2523/2**5,Wl=2**5/2523,jl=3424/2**12,Gl=2413/2**7,ql=2392/2**7;var dy=new ue({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:hi,toBase(t){return t.map(function(e){return(Math.max(e**Wl-jl,0)/(Gl-ql*e**Wl))**cy*1e4/Ul})},fromBase(t){return t.map(function(e){let r=Math.max(e*Ul/1e4,0),n=jl+Gl*r**zl,i=1+ql*r**zl;return(n/i)**uy})}});const Zl=.17883277,Yl=.28466892,Kl=.55991073,Yi=3.7743;var fy=new ue({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:hi,toBase(t){return t.map(function(e){return e<=.5?e**2/3*Yi:(Math.exp((e-Kl)/Zl)+Yl)/12*Yi})},fromBase(t){return t.map(function(e){return e/=Yi,e<=1/12?Math.sqrt(3*e):Zl*Math.log(12*e-Yl)+Kl})}});const Tf={};ct.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=Mf(t.W1,t.W2,t.options.method))});ct.add("chromatic-adaptation-end",t=>{t.M||(t.M=Mf(t.W1,t.W2,t.options.method))});function pi({id:t,toCone_M:e,fromCone_M:r}){Tf[t]=arguments[0]}function Mf(t,e,r="Bradford"){let n=Tf[r],[i,s,o]=z(n.toCone_M,t),[a,l,c]=z(n.toCone_M,e),d=[[a/i,0,0],[0,l/s,0],[0,0,c/o]],u=z(d,n.toCone_M);return z(n.fromCone_M,u)}pi({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});pi({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});pi({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});pi({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(se,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});se.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const hy=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],my=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var xf=new ue({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:se.ACES,toXYZ_M:hy,fromXYZ_M:my});const hn=2**-16,Ki=-.35828683,mn=(Math.log2(65504)+9.72)/17.52;var py=new ue({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Ki,mn],name:"Red"},g:{range:[Ki,mn],name:"Green"},b:{range:[Ki,mn],name:"Blue"}},referred:"scene",base:xf,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-hn)*2:r<mn?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(hn)+9.72)/17.52:e<hn?(Math.log2(hn+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),Jl=Object.freeze({__proto__:null,A98RGB:J1,A98RGB_Linear:$f,ACEScc:py,ACEScg:xf,CAM16_JMh:n1,HCT:Rr,HPLuv:ly,HSL:bf,HSLuv:ay,HSV:vf,HWB:Z1,ICTCP:bs,JzCzHz:ys,Jzazbz:ef,LCH:_r,LCHuv:vo,Lab:me,Lab_D65:Ss,Luv:Ef,OKLCH:ny,OKLab:tr,P3:mf,P3_Linear:ff,ProPhoto:ry,ProPhoto_Linear:Sf,REC_2020:df,REC_2020_Linear:hi,REC_2100_HLG:fy,REC_2100_PQ:dy,XYZ_ABS_D65:wo,XYZ_D50:go,XYZ_D65:te,sRGB:ir,sRGB_Linear:hf});let B=class oe{constructor(...e){let r;e.length===1&&(r=A(e[0]));let n,i,s;r?(n=r.space||r.spaceId,i=r.coords,s=r.alpha):[n,i,s]=e,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=s>1||s===void 0?1:s<0?0:s;for(let o=0;o<this.coords.length;o++)this.coords[o]==="NaN"&&(this.coords[o]=NaN);for(let o in this.space.coords)Object.defineProperty(this,o,{get:()=>this.get(o),set:a=>this.set(o,a)})}get spaceId(){return this.space.id}clone(){return new oe(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=b1(this,...e);return r.color=new oe(r.color),r}static get(e,...r){return e instanceof oe?e:new oe(e,...r)}static defineFunction(e,r,n=r){let{instance:i=!0,returns:s}=n,o=function(...a){let l=r(...a);if(s==="color")l=oe.get(l);else if(s==="function<color>"){let c=l;l=function(...d){let u=c(...d);return oe.get(u)},Object.assign(l,c)}else s==="array<color>"&&(l=l.map(c=>oe.get(c)));return l};e in oe||(oe[e]=o),i&&(oe.prototype[e]=function(...a){return o(this,...a)})}static defineFunctions(e){for(let r in e)oe.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(oe);else for(let r in e)oe.defineFunction(r,e[r])}};B.defineFunctions({get:he,getAll:Zr,set:Ye,setAll:po,to:F,equals:v1,inGamut:xt,toGamut:ut,distance:Qd,toString:Tr});Object.assign(B,{util:yw,hooks:ct,WHITES:se,Space:v,spaces:v.registry,parse:Jd,defaults:we});for(let t of Object.keys(Jl))v.register(Jl[t]);for(let t in v.registry)ks(t,v.registry[t]);ct.add("colorspace-init-end",t=>{var e;ks(t.id,t),(e=t.aliases)==null||e.forEach(r=>{ks(r,t)})});function ks(t,e){let r=t.replace(/-/g,"_");Object.defineProperty(B.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,s)=>{try{return v.resolveCoord([e,s]),!0}catch{}return Reflect.has(i,s)},get:(i,s,o)=>{if(s&&typeof s!="symbol"&&!(s in i)){let{index:a}=v.resolveCoord([e,s]);if(a>=0)return i[a]}return Reflect.get(i,s,o)},set:(i,s,o,a)=>{if(s&&typeof s!="symbol"&&!(s in i)||s>=0){let{index:l}=v.resolveCoord([e,s]);if(l>=0)return i[l]=o,this.setAll(t,i),!0}return Reflect.set(i,s,o,a)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}B.extend(nr);B.extend({deltaE:br});Object.assign(B,{deltaEMethods:nr});B.extend(j1);B.extend({contrast:B1});B.extend(U1);B.extend(S1);B.extend(q1);B.extend(Tn);function Cf(t){return An(t,(e,r)=>r instanceof B?q(r.toString({format:"hex"})):Cf(r))}const gy="dodgerblue";function Es(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function Ji({background:t,foreground:e}){return{background:t??new B(Es(e)),foreground:e??new B(Es(t))}}function wy(t){return t==="black"?"white":"black"}const yy={black:{foregroundFaint1:new B("#ccc"),foregroundFaint2:new B("#eee")},white:{foregroundFaint1:new B("#ccc"),foregroundFaint2:new B("#eee")}},by={black:{backgroundFaint1:new B("#666"),backgroundFaint2:new B("#444")},white:{backgroundFaint1:new B("#ccc"),backgroundFaint2:new B("#fafafa")}};function Xl({themeColor:t=gy,themeStyle:e="light"}={}){const r=new B(t),n=new B(e==="dark"?"black":"white"),i=Es(n),s=new B(i),o={nav:{hover:Ji({background:r.clone().set({"hsl.l":93})}),active:Ji({background:r.clone().set({"hsl.l":90})}),selected:Ji({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...by[wy(i)],foreground:s,...yy[i]}};return Cf(o)}const jn=no()("element-book-change-route"),Ql="vira-",{defineElement:Je,defineElementNoInputs:Kb}=Md({assertInputs:t=>{if(!t.tagName.startsWith(Ql))throw new Error(`Tag name should start with '${Ql}' but got '${t.tagName}'`)}}),E=pt({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"}),vy=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function $y(t,e){return t?vy.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ts(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Sy(t,e="and"){if(t.length<2)return t.join("");const r=t.length>2?", ":" ";return`${t.slice(0,-1).join(r)}${r}${e} ${t[t.length-1]}`}var ec;(function(t){t.Upper="upper",t.Lower="lower"})(ec||(ec={}));var tc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(tc||(tc={}));function ky(t){return t?t instanceof Error?t.message:$y(t,"message")?String(t.message):String(t):""}function rc(t){return t instanceof Error?t:new Error(ky(t))}function Ey(t,e={}){try{const r=t();return r instanceof Promise?r.catch(n=>e.handleError?e.handleError(n):xn(e,"fallbackValue")?e.fallbackValue:rc(n)):r}catch(r){return e.handleError?e.handleError(r):xn(e,"fallbackValue")?e.fallbackValue:rc(r)}}function nc(t,e){let r=!1;const n=Ts(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Ts(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function Af(){let t,e,r=!1;const n=new Promise((i,s)=>{t=o=>(r=!0,i(o)),e=o=>{r=!0,s(o)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${Af.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function ic(t){const e=Af();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function Ty(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Ty();const My="px";function xy(t){return Cy({value:t,suffix:My})}function Cy({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}const Ay=B;function Ly(t){try{if(!t)throw new Error("invalid empty color");return new Ay(t)}catch{const r=String(t),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Ey(()=>JSON.stringify(t),{fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}function de({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}function sc(t,e){const r=Ts(e).map(n=>{const i=e[n],s=Ly(i);return`${E[n].name}: ${s.toString()};`}).join(" ");return de({name:t.name,svgTemplate:p`
            <div style=${r}>${t.svgTemplate}</div>
        `})}const Lf=de({name:"Check24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Pe=pt({"vira-form-input-radius":"8px"}),gi=w`
    pointer-events: none;
    opacity: 0.3;
    cursor: not-allowed;
`,Oe=pt({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Pt=pt({"vira-focus-outline-color":"#59b1ff","vira-focus-outline-border-radius":w`calc(${Pe["vira-form-input-radius"].value} + 4px)`});function $o({selector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=2}){const i=q(xy(n+r+e));return w`
        ${q(t)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Pt["vira-focus-outline-color"].value};
            border-radius: ${Pt["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const nt=pt({"vira-form-border-color":"#cccccc","vira-form-background-color":"white","vira-form-foreground-color":"black","vira-form-focus-color":Pt["vira-focus-outline-color"].value,"vira-form-selection-hover-background-color":"#d2eaff","vira-form-selection-hover-foreground-color":"black"}),Py=w`
    padding: 0;
    margin: 0;
`,rt=w`
    ${Py};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,oc=w`#e2e2e2`,Pf={menuShadow:w`
        filter: drop-shadow(0px 5px 5px ${oc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,menuShadowReversed:w`
        filter: drop-shadow(0px -5px 5px ${oc});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `},Dr=w`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`,T=Je()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>w`
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
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}}),We=Je()({tagName:"vira-dropdown-item",hostClasses:{"vira-dropdown-item-selected":({inputs:t})=>t.selected},styles:({hostClasses:t})=>w`
        :host {
            display: flex;
            ${Dr};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${t["vira-dropdown-item-selected"].selector} ${T} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${T} {
            transition: opacity
                ${Oe["vira-interaction-animation-duration"].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${Pe["vira-form-input-radius"].value}
                ${Pe["vira-form-input-radius"].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${Pe["vira-form-input-radius"].value}
                ${Pe["vira-form-input-radius"].value} 0 0;
        }
    `,renderCallback({inputs:t}){return p`
            <div class="option">
                <${T.assign({icon:Lf})}></${T}>
                <slot>${t.label}</slot>
            </div>
        `}}),Oy=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Of(t,e){return t?Oy.some(r=>{try{return r(t,e)}catch{return!1}}):!1}var ac;(function(t){t.Upper="upper",t.Lower="lower"})(ac||(ac={}));function lc(t){const e=Number(t);if(isNaN(e))throw new Error(`Cannot convert given input to a number: ${t}`);return e}function Xi({max:t,min:e,value:r}){return r>t?e:r<e?t:r}var cc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(cc||(cc={}));function Ny(t){try{return JSON.parse(JSON.stringify(t))}catch(e){throw console.error("Failed to JSON copy for",t),e}}function Nf(t,e){try{return Iy(t,e),!0}catch{return!1}}function Iy(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function _y(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}_y();function Ry(t,e){return[t,e].filter(r=>r!==void 0).join(",")||""}function Dy(t){const e=t.split(",");return Nf(e,2)?{type:"2d",xCord:lc(e[0]),yCord:lc(e[1])}:{type:"1d"}}function Vy(t,e){Object.entries(e).forEach(([r,n])=>{C(n,"boolean")&&n?t.setAttribute(r,""):C(n,"boolean")&&!n||n==null?t.removeAttribute(r):t.setAttribute(r,String(n))})}const Hy=mt(class extends Ke{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastKey",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=ci(t,"modifyElement")}render(t,e){return t!==this.lastKey&&(e(this.element),this.lastKey=t),ge}}),Jt={name:"data-nav",selector(t){return t===""?`[${Jt.name}]`:`[${Jt.name}*="${String(t).replace(/"/g,"'")}"]`},css(t){return w`
            ${q(Jt.selector(t))}
        `}},Wt="nav-activated",Ms={selector:{click(t){return`${t}.${Wt}`},selected(t){return`${t}:focus`}},css:{click(t){return w`
                ${q(Ms.selector.click(t))}
            `},selected(t){return w`
                ${q(Ms.selector.selected(t))}
            `}}},By={activateKeys:["Space","Return","Enter"]};function Fy(){If=Ny(By)}let If;Fy();function uc(t){return If.activateKeys.some(e=>{const r=e.toLowerCase();return r===t.key.toLowerCase()||r===t.code.toLowerCase()})}function Uy(t,e){const r=Ry(t,e);return Hy(`${t}-${e}`,n=>{const i=n.hasAttribute("tabindex")?{}:{tabindex:0},s={[Jt.name]:r,...i};Ns(n,HTMLElement),Vy(n,s),n.style.getPropertyValue("cursor")||n.style.setProperty("cursor","pointer"),n.addEventListener("mousemove",o=>{o.target===n&&n.focus()},!0),n.addEventListener("mouseleave",o=>{o.target===n&&n.blur()},!0),n.addEventListener("mousedown",o=>{o.target===n&&n.classList.add(Wt)},!0),n.addEventListener("mouseup",o=>{o.target===n&&n.classList.remove(Wt)},!0),n.addEventListener("blur",()=>{n.classList.remove(Wt)},!0),n.addEventListener("keydown",o=>{o.target===n&&uc(o)&&n.classList.add(Wt)},!0),n.addEventListener("keyup",o=>{o.target===n&&uc(o)&&n.classList.remove(Wt)},!0)})}function zy(t,e){return _f([],t,e)}function _f(t,e,r){return!e||e.type==="child"?!1:e.type==="1d"?dc(e.children,e,0,t,r):e.children.some((n,i)=>dc(n,e,i,t,r))}function dc(t,e,r,n,i){return t.some((s,o)=>{const a=Of(e,"isRoot")?n:n.concat(e);return i(a,s,{x:o,y:r})?!0:_f(a,s,i)})}function wi(t){if(!t)return;let e,r,n;zy(t,(s,o,a)=>o.element.matches(":focus")?(e=s,r=o,n=a,!0):!1);const i=e?(e==null?void 0:e.slice(-1)[0])||t:void 0;if(!(!r||!i||!n))return{node:r,parent:i,coords:n}}function Gn(t){t.scrollIntoView({behavior:"smooth",inline:"center",block:"center"}),t.focus()}function Wy(t){var n;if(!t)return{success:!1,reason:"no nav tree"};const e=wi(t);if(!e)return{success:!1,reason:"no focused node to enter into"};if(e.node.type==="child"||!e.node.children.length)return{success:!1,reason:"no children to enter into"};const r=e.node.type==="1d"?e.node.children[0]:(n=e.node.children[0])==null?void 0:n[0];return r?(Gn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}):{success:!1,reason:"failed to find first child to enter into"}}function jy(t){if(!t)return{success:!1,reason:"no nav tree"};const e=wi(t);if(!e)return{success:!1,reason:"no focused node to exit out of"};if(Of(e.parent,"isRoot"))return{success:!1,reason:"at top level nav already, nothing to exit to"};const r=e.parent;return Gn(r.element),{success:!0,defaulted:!1,wrapped:!1,newElement:r.element}}function Rf(t){const e=[];return _h(t).forEach(r=>{if(!(r instanceof HTMLElement))return;const n=Rf(r),i=r.hasAttribute(Jt.name)?Dy(r.getAttribute(Jt.name)||""):void 0;if(!i){e.push(...n);return}e.push({children:n,element:r,navValue:i})}),e}function Gy(t){const e=Rf(t);return Df(e)}function Df(t){if(!Nf(t,1))return;const e=t[0].navValue.type,r={type:e,children:[],isRoot:!0};return t.forEach(n=>{const i=n.children.length?Df(n.children):void 0,s=i?{element:n.element,children:i.children,type:i.type}:{element:n.element,type:"child"};if(n.navValue.type==="2d"&&r.type==="2d"){r.children[n.navValue.xCord]||(r.children[n.navValue.xCord]=[]);const o=r.children[n.navValue.xCord];if(o[n.navValue.yCord])throw new Error(`Parent already has child at ${n.navValue.xCord},${n.navValue.yCord}`);o[n.navValue.yCord]=s}else if(n.navValue.type==="1d"&&r.type==="1d")r.children.push(s);else if(e!==n.navValue.type){const o=new Error("child nav does not match parent nav type");throw console.error(o,n),o}}),r}function fc(t,e){return t>e}function hc(t,e){return t<e}var ve;(function(t){t.Up="up",t.Down="down",t.Left="left",t.Right="right"})(ve||(ve={}));function qy(t,e,r){var a;if(!t)return{success:!1,reason:"no nav tree"};const n=wi(t);if(!n){const l=t.type==="1d"?t.children[0]:(a=t.children[0])==null?void 0:a[0];return l?(Gn(l.element),{success:!0,wrapped:!1,defaulted:!0,newElement:l.element}):{success:!1,reason:"no default element to focus"}}const{nextNode:i,requiresWrapping:s}=Zy(n.parent,e,n),o=r?!0:!s;return(i==null?void 0:i.element)===n.node.element?{success:!1,reason:"no other nodes to navigate to"}:i&&o?(Gn(i.element),{success:!0,defaulted:!1,newElement:i.element,wrapped:s}):i?o?{success:!1,reason:"no conditions matched"}:{success:!1,reason:"not allowed to wrap"}:{success:!1,reason:"failed to find node to focus"}}function Zy(t,e,r){var i,s;if(e===ve.Down||e===ve.Up){const o=e===ve.Down?hc:fc,a=e===ve.Down?1:-1,l=t.type==="1d"?0:Xi({value:r.coords.y+a,min:0,max:t.children.length-1}),c=t.type==="2d"?t.children[l]:void 0,d={x:t.type==="1d"?Xi({value:r.coords.x+a,min:0,max:t.children.length-1}):c&&r.coords.x>=c.length?c.length-1:r.coords.x,y:l},u=t.type==="1d"?t.children[d.x]:(i=t.children[d.y])==null?void 0:i[d.x],f=t.type==="1d"?o(d.x,r.coords.x):o(d.y,r.coords.y);return{nextNode:u,requiresWrapping:f}}else{const o=e===ve.Right?hc:fc,a=e===ve.Right?1:-1,l=t.type==="1d"?t.children:t.children[r.coords.y];mh(l,`No current row found at y index: '${r.coords.y}'`);const c={x:Xi({value:r.coords.x+a,min:0,max:l.length-1}),y:r.coords.y},d=o(c.x,r.coords.x);return{nextNode:t.type==="1d"?t.children[c.x]:(s=t.children[c.y])==null?void 0:s[c.x],requiresWrapping:d}}}class Vf{constructor(e){Object.defineProperty(this,"rootElement",{enumerable:!0,configurable:!0,writable:!0,value:e})}getCurrentlyFocused(){return wi(this.buildNavTree())}buildNavTree(){return Gy(this.rootElement)}navigate({direction:e,allowWrapping:r}){return qy(this.buildNavTree(),e,r)}enterInto(){return Wy(this.buildNavTree())}exitOutOf(){return jy(this.buildNavTree())}navigatePibling(e){const r=this.exitOutOf();if(!r.success)return r;const n=this.navigate(e);if(!n.success)return n;const i=this.enterInto();return i.success?i:n}}const Yy={option:"dropdown-option"},pn=Je()({tagName:"vira-dropdown-options",events:{selectionChange:Ie()},styles:w`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${Pe["vira-form-input-radius"].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${nt["vira-form-background-color"].value};
            border: 1px solid ${nt["vira-form-border-color"].value};
            color: ${nt["vira-form-foreground-color"].value};
            ${Pf.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${Ms.css.selected(".dropdown-item:not(.disabled)")} {
            background-color: ${nt["vira-form-selection-hover-background-color"].value};
            outline: none;
        }

        ${We} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${gi};
            pointer-events: auto;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){const n=t.options.map(i=>{const s=i.template||p`
                    <${We.assign({label:i.label,selected:t.selectedOptions.includes(i)})}></${We}>
                `;return p`
                <div
                    class="dropdown-item ${Pr({disabled:!!i.disabled})}"
                    ${wr(Yy.option)}
                    title=${ud(i.hoverText||void 0)}
                    role="option"
                    ${i.disabled?U:Uy()}
                    ${R("mousedown",o=>{o.stopPropagation()})}
                    ${R("mouseup",o=>{o.stopPropagation(),i.disabled||e(new r.selectionChange(i))})}
                >
                    ${s}
                </div>
            `});return p`
            <slot>${n}</slot>
        `}}),Hf=de({name:"ChevronUp24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${E["vira-icon-stroke-color"].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${E["vira-icon-stroke-width"].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `}),Bf=de({name:"CloseX24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="8"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="M9 8.5l6 7m0 -7l-6 7"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ff=de({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ge=de({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Uf=de({name:"EyeClosed24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${E["vira-icon-fill-color"].value}
            stroke=${E["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${E["vira-icon-stroke-width"].value}
                d="M4 20 20 4M18.4 8.54C20 10.28 21 12 21 12s-4.03 7-9 7a6.53 6.53 0 0 1-3.16-.9M5.6 15.46C4 13.72 3 12 3 12s4.03-7 9-7c1.11 0 2.18.35 3.16.9"
            />
        </svg>
    `}),zf=de({name:"EyeOpen24Icon",svgTemplate:p`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${E["vira-icon-fill-color"].value}
            stroke=${E["vira-icon-stroke-color"].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${E["vira-icon-stroke-width"].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `}),Wf=de({name:"Loader24Icon",svgTemplate:p`
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
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Ky=w`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Oe["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Vr=de({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${Ky}
        </style>
        ${Wf.svgTemplate}
    `}),So=de({name:"Options24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            >
                <circle cx="9.5" cy="5.5" r="2.5" />
                <circle cx="16.5" cy="12.5" r="2.5" />
                <circle cx="8.5" cy="18.5" r="2.5" />
            </g>
            <path
                d="M3 5.5h3.5m5 0h8.5M3 12.5h11m5 0h2M3 18.5h3m5 0h10"
                fill="none"
                stroke="${E["vira-icon-stroke-color"].value}"
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),qn=de({name:"StatusFailure24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="M8 16.5 L16 7.5 M8 7.5 L16 16.5"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Jy=de({name:"StatusInProgress24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${E["vira-icon-stroke-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width="calc(${E["vira-icon-stroke-width"].value} - 1px)"
            />
        </svg>
    `}),Xy=de({name:"StatusSuccess24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${E["vira-icon-fill-color"].value}
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
            <path
                d="m17 8.5-7 8-3-3"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),xs={Check24Icon:Lf,ChevronUp24Icon:Hf,CloseX24Icon:Bf,Element16Icon:Ff,Element24Icon:Ge,EyeClosed24Icon:Uf,EyeOpen24Icon:zf,Loader24Icon:Wf,LoaderAnimated24Icon:Vr,Options24Icon:So,StatusFailure24Icon:qn,StatusInProgress24Icon:Jy,StatusSuccess24Icon:Xy};class Qy extends Xu{constructor(){super({defaultValue:document.hidden,equalityCheck:Rc}),globalThis.addEventListener("visibilitychange",r=>this.updateVisibility(r));const e=r=>this.updateVisibility(r);globalThis.onpageshow=e,globalThis.onpagehide=e,globalThis.onfocus=e,globalThis.onblur=e}updateVisibility(e){const r=tb.includes(e.type),n=eb.includes(e.type),i=r?!0:n?!1:document.hasFocus()||!document.hidden;this.setValue(i)}}const eb=["blur","focusout","pagehide"],tb=["focus","focusin","pageshow"],rb=new Qy;function nb(t,e){return rb.listen(t,e)}const mc={top:0,left:0,right:0,bottom:0};class jf extends _s("hide-pop-up"){}class Gf extends ht()("nav-select"){}class ib{constructor(e){S(this,"listenTarget",new Fc);S(this,"options",{minDownSpace:200,verticalDiffThreshold:20,supportNavigation:!0});S(this,"cleanupCallbacks",[]);S(this,"lastRootElement");this.options={...this.options,...e}}attachGlobalListeners(e){const r=new Vf(e);this.cleanupCallbacks=[nb(!1,n=>{n||this.removePopUp()}),Fo("mousedown",n=>{this.lastRootElement&&n.composedPath().includes(this.lastRootElement)||this.removePopUp()},{passive:!0}),Fo("keydown",n=>{const i=n.code;if(i==="Escape")this.removePopUp();else if(this.options.supportNavigation){if(i==="ArrowDown")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ve.Down,allowWrapping:!1});else if(i==="ArrowUp")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ve.Up,allowWrapping:!1});else if(i==="ArrowLeft")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ve.Left,allowWrapping:!1});else if(i==="ArrowRight")n.stopImmediatePropagation(),n.preventDefault(),r.navigate({direction:ve.Right,allowWrapping:!1});else if(i==="Enter"||i==="Return"){const s=r.getCurrentlyFocused();s&&(r.enterInto(),this.listenTarget.dispatch(new Gf({detail:s.coords})),n.stopImmediatePropagation(),n.preventDefault())}}})]}listen(e,r,n){return this.listenTarget.listen(e,r,n)}removePopUp(){this.cleanupCallbacks.forEach(e=>e()),this.listenTarget.dispatch(new jf)}showPopUp(e,r){this.lastRootElement=e;const n={...this.options,...r},i=Vh(e);Ns(i,HTMLElement);const s=e.getBoundingClientRect(),o=i.getBoundingClientRect(),a=i.offsetWidth-i.clientWidth,l=i.offsetHeight-i.clientHeight,c=i===document.body?{top:0,left:0,right:globalThis.innerWidth,bottom:globalThis.innerHeight}:{top:o.top,left:o.left,right:o.right-a,bottom:o.bottom-l},d=nc(mc,h=>s[h]),u=nc(mc,h=>{const m=c[h],g=d[h];return Math.abs(m-g)}),f=u.top>u.bottom+n.verticalDiffThreshold&&u.bottom<n.minDownSpace;return this.attachGlobalListeners(e),{popDown:!f,positions:{container:c,root:d,diff:u}}}destroy(){this.removePopUp(),this.listenTarget.destroy()}}function sb({selected:t,options:e,isMultiSelect:r}){if(t.length&&e.length){const n=e.filter(i=>t.includes(i.id));return n.length>1&&!r?(console.error(`${Gt.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`),n.slice(0,1)):n}else return[]}function ob(t){const e=new Set,r=[];if(t.forEach(n=>{e.has(n.id)?r.push(n.id):e.add(n.id)}),r.length)throw new Error(`Duplicate option ids were given to ViraDropdown: ${Sy(r)}`)}function pc(t,e,r){return r?e.includes(t)?e.filter(n=>n!==t):[...e,t]:[t]}function gc({open:t,emitEvent:e},{updateState:r,popUpManager:n,dispatch:i,host:s}){t?r({showPopUpResult:n.showPopUp(s)}):n.removePopUp(),e&&i(t)}const gn={trigger:"dropdown-trigger",icon:"dropdown-icon",prefix:"dropdown-prefix",options:"dropdown-options"},Gt=Je()({tagName:"vira-dropdown",hostClasses:{"vira-dropdown-disabled":({inputs:t})=>!!t.isDisabled},styles:({hostClasses:t})=>w`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${Pt["vira-focus-outline-color"].name}: ${nt["vira-form-focus-color"].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${rt};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${Pe["vira-form-input-radius"].value};
            transition: border-radius
                ${Oe["vira-interaction-animation-duration"].value};
            outline: none;
        }

        ${$o({selector:".dropdown-wrapper:focus",elementBorderSize:1})}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${Oe["vira-interaction-animation-duration"].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${nt["vira-form-border-color"].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${Dr};
            border-radius: inherit;
            background-color: ${nt["vira-form-background-color"].value};
            color: ${nt["vira-form-foreground-color"].value};
        }

        .open-upwards ${pn} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${Pf.menuShadowReversed}
        }

        ${t["vira-dropdown-disabled"].selector} {
            ${gi}
            pointer-events: auto;
        }

        ${t["vira-dropdown-disabled"].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,events:{selectedChange:Ie(),openChange:Ie()},stateInitStatic:{showPopUpResult:void 0,popUpManager:$g(()=>new ib),navController:void 0},cleanupCallback({state:t,updateState:e}){e({showPopUpResult:void 0}),t.popUpManager.destroy()},initCallback({state:t,updateState:e,host:r,inputs:n,dispatch:i,events:s}){t.popUpManager.listen(jf,()=>{if(e({showPopUpResult:void 0}),!n.isDisabled){const o=r.shadowRoot.querySelector(".dropdown-wrapper");Ns(o,HTMLButtonElement,"failed to find dropdown wrapper child"),o.focus()}}),t.popUpManager.listen(Gf,o=>{const a=o.detail.x,l=n.options[a];if(!l)throw new Error(`Found no dropdown option at index '${a}'`);n.isMultiSelect||gc({emitEvent:!0,open:!1},{dispatch:c=>{i(new s.openChange(c))},host:r,popUpManager:t.popUpManager,updateState:e}),i(new s.selectedChange(pc(l.id,n.selected,!!n.isMultiSelect)))}),e({navController:new Vf(r)})},renderCallback({dispatch:t,events:e,state:r,inputs:n,updateState:i,host:s}){var m;ob(n.options);function o(g){gc(g,{dispatch:b=>{t(new e.openChange(b))},host:s,popUpManager:r.popUpManager,updateState:i})}n.isDisabled?o({open:!1,emitEvent:!1}):n.z_debug_forceOpenState!=null&&(!n.z_debug_forceOpenState&&r.showPopUpResult?o({emitEvent:!1,open:!1}):n.z_debug_forceOpenState&&!r.showPopUpResult&&o({emitEvent:!1,open:!0}));const a=sb(n),l=n.icon?p`
                  <${T.assign({icon:n.icon})}
                      ${wr(gn.icon)}
                  ></${T}>
              `:"",c=r.showPopUpResult?r.showPopUpResult.popDown?w`
                      bottom: -${r.showPopUpResult.positions.diff.bottom}px;
                  `:w`
                      top: -${r.showPopUpResult.positions.diff.top}px;
                  `:void 0;function d(){o({emitEvent:!0,open:!r.showPopUpResult})}const u=!a.length,f=n.selectionPrefix&&!u?p`
                      <span class="selected-label-prefix" ${wr(gn.prefix)}>
                          ${n.selectionPrefix}
                      </span>
                  `:"",h=u?n.placeholder||"":a.map(g=>g.label).join(", ");return p`
            <button
                ?disabled=${!!n.isDisabled}
                class="dropdown-wrapper ${Pr({open:!!r.showPopUpResult,"open-upwards":!((m=r.showPopUpResult)!=null&&m.popDown)})}"
                ${wr(gn.trigger)}
                role="listbox"
                aria-expanded=${!!r.showPopUpResult}
                ${R("keydown",g=>{!r.showPopUpResult&&g.code.startsWith("Arrow")&&o({emitEvent:!0,open:!0})})}
                ${R("click",g=>{g.detail===0&&d()})}
                ${R("mousedown",g=>{g.button===0&&d()})}
            >
                <div class="dropdown-trigger">
                    ${l}
                    <span
                        class="selection-display ${Pr({"using-placeholder":u})}"
                        title=${ud(u?h:void 0)}
                    >
                        ${f} ${h}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${T.assign({icon:Hf})}
                            class="trigger-icon"
                        ></${T}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${c}>
                    ${ce(!!r.showPopUpResult,p`
                            <${pn.assign({options:n.options,selectedOptions:a})}
                                ${R(pn.events.selectionChange,g=>{n.isMultiSelect||o({emitEvent:!0,open:!1}),t(new e.selectedChange(pc(g.detail.id,n.selected,!!n.isMultiSelect)))})}
                                ${wr(gn.options)}
                            ></${pn}>
                        `)}
                </div>
            </button>
        `}});var qf=(t=>(t.Default="vira-button-default",t.Outline="vira-button-outline",t))(qf||{});const X=Je()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle==="vira-button-outline","vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>w`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${Dr};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Pt["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
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
            ${gi};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${rt};
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
            border-radius: ${Pe["vira-form-input-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${Oe["vira-interaction-animation-duration"].value},
                background-color
                    ${Oe["vira-interaction-animation-duration"].value},
                border-color ${Oe["vira-interaction-animation-duration"].value};
        }

        ${$o({selector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${T} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?p`
                  <${T.assign({icon:t.icon})}></${T}>
              `:"",r=t.text?p`
                  <span class="text-template">${t.text}</span>
              `:"";return p`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}}),Be=Je()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},slotNames:["header"],styles:({hostClasses:t})=>w`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${rt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Oe["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ie()},stateInitStatic:{contentHeight:0},renderCallback({state:t,slotNames:e,updateState:r,dispatch:n,events:i,inputs:s}){const o=s.expanded?w`
                  height: ${t.contentHeight}px;
              `:w`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${R("click",()=>{n(new i.expandChange(!s.expanded))})}
            >
                <slot name=${e.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${o} disabled="disabled">
                <div
                    ${Td(({contentRect:a})=>{r({contentHeight:a.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}});var Cs=(t=>(t.Loading="loading",t.Error="error",t))(Cs||{});const Ft=Je()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:Ie(),imageError:Ie()},styles:({hostClasses:t})=>w`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:i}){const s=t.imageUrl,o=e.erroredUrls[s]?p`
                  <slot class="status-wrapper" name=${"error"}>
                      <${T.assign({icon:qn})} class="error"></${T}>
                  </slot>
              `:e.loadedUrls[s]?void 0:p`
                    <slot class="status-wrapper" name=${"loading"}>
                        <${T.assign({icon:Vr})}></${T}>
                    </slot>
                `;return p`
            ${ce(!!o,o)}
            <img
                class=${Pr({hidden:!!o})}
                ${R("load",async()=>{t._debugLoadDelay&&await ic(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[s]:!0}}),n(new i.imageLoad)})}
                ${R("error",async a=>{t._debugLoadDelay&&await ic(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[s]:!0}}),n(new i.imageError(a.error))})}
                src=${s}
            />
        `}});function As({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>As({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function Zf({value:t,allowed:e,blocked:r}){const n=e?As({input:t,matcher:e}):!0,i=r?As({input:t,matcher:r}):!1;return n&&!i}function Yf(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,i)=>(Zf({...t,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function ab({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const s=yr(r,HTMLInputElement),o=r.data,a=e;let l=s.value??"";if(o)if(o.length===1)Zf({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=a,n(o));else{const{filtered:c,blocked:d}=Yf({value:o,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,n(d)}s.value!==l&&(s.value=l),a!==l&&i(l)}var Kf=(t=>(t.Default="text",t.Password="password",t.Email="email",t))(Kf||{});const W=Je()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-background-color":"white","vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":Pt["vira-focus-outline-color"].default,"vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ie(),inputBlocked:Ie()},styles:({hostClasses:t,cssVars:e})=>w`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Pt["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${gi};
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
                ${rt};
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
                ${Dr};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${rt};
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
                border-radius: ${Pe["vira-form-input-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${Oe["vira-interaction-animation-duration"].value};
            }

            label {
                ${rt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Pe["vira-form-input-radius"].value};
                background-color: ${e["vira-input-background-color"].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${$o({selector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${rt};
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
                ${Dr};
            }

            button {
                ${rt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Oe["vira-interaction-animation-duration"].value};
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
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:i})=>{const{filtered:s}=Yf({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),o=t.icon?p`
                  <${T.assign({icon:t.icon})} class="left-side-icon"></${T}>
              `:"",a=t.fitText?w`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${o}
                ${ce(!!t.fitText,p`
                        <span
                            class="size-span"
                            ${Td(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${s||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${lb(t.type,r.showPassword)}
                    style=${a}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${s}
                    ${R("input",l=>{ab({inputs:t,filteredValue:s,event:l,inputBlockedCallback(c){e(new i.inputBlocked(c))},newValueCallback(c){e(new i.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${ce(!!(t.showClearButton&&t.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${R("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new i.valueChange(""))})}
                        >
                            <${T.assign({icon:Bf})}></${T}>
                        </button>
                    `)}
                ${ce(t.type==="password",p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${R("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${T.assign({icon:r.showPassword?zf:Uf})}></${T}>
                        </button>
                    `)}
                ${ce(!!t.suffix,p`
                        <div class="suffix">${t.suffix}</div>
                    `)}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `}});function lb(t,e){return t==="password"&&e?"text":t||"text"}const wn=Je()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>w`
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
    `,renderCallback({inputs:t}){var r,n;function e(i){t.route&&t.route.router.setRouteOnDirectNavigation(t.route.route,i)&&t.route.scrollToTop&&window.scrollTo(0,0)}if((r=t.link)!=null&&r.newTab)return p`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const i=t.link?t.link.url:(n=t.route)==null?void 0:n.router.createRouteUrl(t.route.route);return p`
                <a href=${i} rel="noopener noreferrer" ${R("click",e)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:Ee,defineElementNoInputs:Jb}=Md(),$e=Ee()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:t})=>w`
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
                ${R("click",i=>{(!t.router||Ud(i))&&(i.preventDefault(),window.scrollTo(0,0),e(new jn(t.route)))})}
            >
                <slot></slot>
            </a>
        `}});function cb(t,e){return t.entry.entryType===ne.Root?!1:!!(t.entry.entryType===ne.Page||Re(e,t.fullUrlBreadcrumbs.slice(0,-1))||Re(e==null?void 0:e.slice(0,-1),t.fullUrlBreadcrumbs.slice(0,-1)))}const Ue=Ee()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:t})=>w`
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
            ${$e.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${t["book-nav-internal-indent"].value}) + 8px);
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

        ${T} {
            display: inline-flex;
            color: ${I["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=t.flattenedNodes.map(r=>{if(!cb(r,t.selectedPath))return;const n=w`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${$e.assign({router:t.router,route:{paths:[Ae.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${Pr({"title-row":!0,selected:t.selectedPath?Re(t.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ce(Yt(r,ne.ElementExample),p`
                                    <${T.assign({icon:Ff})}></${T}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${$e}>
                </li>
            `});return p`
            <${$e.assign({route:er,router:t.router})}>
                <slot name=${je.NavHeader}>Book</slot>
            </${$e}>
            <ul>
                ${e}
            </ul>
        `}});async function ub(t){await ts(2);const e=t.shadowRoot.querySelector(".selected");if(!e)throw new Error("Failed to find selected nav tree element.");await Rh(e)||e.scrollIntoView({behavior:"smooth",block:"center"})}const ft=Ee()({tagName:"book-error",styles:w`
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
    `,renderCallback({inputs:t}){return(C(t.message,"array")?t.message:[t.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Hr=Ee()({tagName:"book-page-controls",events:{controlValueChange:Ie()},hostClasses:{"book-page-controls-has-controls":({inputs:t})=>!!Object.keys(t.config).length},styles:({hostClasses:t})=>w`
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

        ${W} {
            height: 24px;
            max-width: 128px;
        }

        ${T}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).length?Object.entries(t.config).map(([n,i],s)=>{if(i.controlType===_.Hidden)return"";const o=db(t.currentValues[n],i,a=>{const l=C(t.fullUrlBreadcrumbs,"array")?t.fullUrlBreadcrumbs:t.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);e(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...t.currentValues,[n]:a}}))});return p`
                    <div class="control-wrapper">
                        ${ce(s===0,p`
                                <${T.assign({icon:So})}
                                    class="options-icon"
                                ></${T}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${o}
                        </label>
                    </div>
                `}):""}});function db(t,e,r){return It(e,_.Hidden)?"":It(e,_.Checkbox)?p`
            <input
                type="checkbox"
                .value=${t}
                ${R("input",n=>{const i=yr(n,HTMLInputElement);r(i.checked)})}
            />
        `:It(e,_.Color)?p`
            <input
                type="color"
                .value=${t}
                ${R("input",n=>{const i=yr(n,HTMLInputElement);r(i.value)})}
            />
        `:It(e,_.Text)?p`
            <${W.assign({value:String(t),showClearButton:!0,disableBrowserHelps:!0})}
                ${R(W.events.valueChange,n=>{r(n.detail)})}
            ></${W}>
        `:It(e,_.Number)?p`
            <input
                type="number"
                .value=${t}
                ${R("input",n=>{const i=yr(n,HTMLInputElement);r(i.value)})}
            />
        `:It(e,_.Dropdown)?p`
            <select
                .value=${t}
                ${R("input",n=>{const i=yr(n,HTMLSelectElement);r(i.value)})}
            >
                ${e.options.map(n=>p`
                        <option ?selected=${n===t} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${e.controlType} controls are not implemented yet.</p>
        `}const wc=Ee()({tagName:"book-breadcrumbs",styles:w`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,i)=>{const s=n>=i.length-1,o=i.slice(0,n+1),a=s?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${$e.assign({route:{hash:void 0,search:void 0,paths:[Ae.Book,...o]},router:t.router})}>
                    ${r}
                </${$e}>
                ${a}
            `}):p`
                &nbsp;
            `}}),Qi=Ee()({tagName:"book-breadcrumbs-bar",styles:w`
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
            ${ce(!!t.currentSearch,p`
                    &nbsp;
                `,p`
                    <${wc.assign({currentRoute:t.currentRoute,router:t.router})}></${wc}>
                `)}
            <input
                placeholder="search"
                .value=${t.currentSearch}
                ${R("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const i=n.value;await Eh(200),n.value===i&&(n.value?e(new jn({paths:[Ae.Search,encodeURIComponent(n.value)]})):e(new jn(er)))})}
            />
        `}}),yc=Ee()({tagName:"book-entry-description",styles:w`
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
            `)}}),bc=Ee()({tagName:"book-page-wrapper",styles:w`
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

        ${$e} {
            display: inline-block;
        }
    `,renderCallback({inputs:t}){const e=t.isTopLevel?p`
                  <h2 class="header-with-icon">${t.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${t.pageNode.entry.title}</h3>
              `,r=[Ae.Book,...t.pageNode.fullUrlBreadcrumbs],n=Ic(t.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${$e.assign({route:{paths:r,hash:void 0,search:void 0},router:t.router})}>
                        ${e}
                    </${$e}>
                    ${n?p`
                              <${ft.assign({message:n.message})}></${ft}>
                          `:p`
                              <${yc.assign({descriptionParagraphs:t.pageNode.entry.descriptionParagraphs??[]})}></${yc}>
                              <${Hr.assign({config:t.pageNode.entry.controls,currentValues:oo(t.controls,t.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:t.pageNode.fullUrlBreadcrumbs})}></${Hr}>
                          `}
                </div>
            </div>
        `}}),yn=Ee()({tagName:"book-element-example-controls",styles:w`
        :host {
            display: flex;
            color: ${I["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){const e=[Ae.Book,...t.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${$e.assign({route:{paths:e,hash:void 0,search:void 0},router:t.router})}>
                ${t.elementExampleNode.entry.title}
            </${$e}>
        `}}),vc=Symbol("unset-internal-state"),$c=Ee()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:vc},renderCallback({state:t,inputs:e,updateState:r}){try{if(e.elementExampleNode.entry.errors.length)throw Ic(e.elementExampleNode.entry.errors);if(!e.elementExampleNode.entry.renderCallback||typeof e.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${e.elementExampleNode.entry.title}': renderCallback is not a function`);t.isUnset===vc&&r({isUnset:void 0,...e.elementExampleNode.entry.stateInitStatic});const n=e.elementExampleNode.entry.renderCallback({state:t,updateState:r,controls:e.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ce(!!e.elementExampleNode.entry.styles,p`
                        <style>
                            ${e.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${ft.assign({message:`${e.elementExampleNode.entry.title} failed: ${Ps(n)}`})}></${ft}>
            `}},options:{allowPolymorphicState:!0}}),Sc=Ee()({tagName:"book-element-example-wrapper",styles:w`
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

        ${yn} {
            color: ${I["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${yn} {
            color: ${I["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){return p`
            <div class="individual-example-wrapper">
                <${yn.assign($h(t,["currentPageControls"]))}></${yn}>
                <${$c.assign(t)}></${$c}>
            </div>
        `}});function Jf(t,e,r,n){const i=ds(r,n),s=[];if(i){const o=Jf(t,e,i,n);o&&s.push(o)}if(Yt(r,ne.Page)&&!t.includes(r)){const o=oo(e,r.fullUrlBreadcrumbs);s.push({config:r.entry.controls,current:o,breadcrumbs:An(o,()=>r.fullUrlBreadcrumbs)})}return s.reduce((o,a)=>({config:{...o.config,...a.config},current:{...o.current,...a.current},breadcrumbs:{...o.breadcrumbs,...a.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function fb({currentNodes:t,isTopLevel:e,router:r,isSearching:n,controls:i,originalTree:s}){if(!t.length&&n)return[p`
                No results
            `];const o=Io(t,1)?Jf(t,i,t[0],s):void 0,a=o&&Object.values(o.config).length&&Io(t,1)?p`
                  <${Hr.assign({config:o.config,currentValues:o.current,fullUrlBreadcrumbs:o.breadcrumbs})}></${Hr}>
              `:U,l=Up(t,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Yt(c,ne.Page))return p`
                    <${bc.assign({isTopLevel:e,pageNode:c,controls:i,router:r})}
                        class="block-entry"
                    ></${bc}>
                `;if(Yt(c,ne.ElementExample)){const u=oo(i,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${Sc.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${Sc}>
                `}else return Yt(c,ne.Root)?U:p`
                    <${ft.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${ft}>
                `});return[a,l]}const Ut=Ee()({tagName:"book-entry-display",styles:w`
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

        ${Qi} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Oe["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Ie()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:t,dispatch:e,events:r,state:n,updateState:i})=>{const s=ms(t.currentRoute.paths),o=fb({currentNodes:t.currentNodes,isTopLevel:!0,router:t.router,isSearching:!!s,controls:t.controls,originalTree:t.originalTree});return p`
            <${Qi.assign({currentSearch:s,currentRoute:t.currentRoute,router:t.router})}></${Qi}>

            ${ce(t.showLoading,p`
                    <div
                        ${ja(()=>{e(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${T.assign({icon:Vr})}></${T}>
                    </div>
                    ${ce(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${je.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${ja(a=>{i({lastElement:a})})}
                        class="all-book-entries-wrapper"
                    >
                        ${o}
                    </div>
                    <slot name=${je.Footer}></slot>
                `)}
        `}});function hb(t,e,r){const n=kc(t,e);if(n.length)return n;r(er);const i=kc(t,er.paths);if(!i)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return i}function kc(t,e){return t.filter(r=>Oh({searchFor:e.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const es=Ed()({tagName:"element-book-app",events:{pathUpdate:Ie()},stateInitStatic:{currentRoute:er,router:void 0,loading:!0,colors:{config:void 0,theme:Xl(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:w`
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

        ${Ut} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Ue} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:t,state:e}){setTimeout(()=>{Ec(t,ms(e.currentRoute.paths),e.currentRoute)},500)},cleanupCallback({state:t,updateState:e}){t.router&&(t.router.destroy(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:i,events:s})=>{var d,u,f,h,m,g,b;e._debug&&console.info("rendering element-book app");function o($){return{...t.currentRoute,...$}}function a($){const k=o($);return!Re(t.currentRoute,k)}function l($){e.preventWindowTitleChange||(t.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[t.originalWindowTitle,$].filter(Ls).join(" - "))}function c($){if(!a($))return;const k=o($);t.router?t.router.setRoute(k):n({currentRoute:{...t.currentRoute,...k}}),e.elementBookRoutePaths&&!Re(e.elementBookRoutePaths,t.currentRoute.paths)&&i(new s.pathUpdate(k.paths??[]))}try{if(e.elementBookRoutePaths&&!Re(e.elementBookRoutePaths,t.currentRoute.paths)&&c({paths:e.elementBookRoutePaths}),(d=e.internalRouterConfig)!=null&&d.useInternalRouter&&!t.router){const H=hw(e.internalRouterConfig.basePath);n({router:H}),H.listen(!0,Z=>{n({currentRoute:Z})})}else!((u=e.internalRouterConfig)!=null&&u.useInternalRouter)&&t.router&&t.router.destroy();const $={themeColor:e.themeColor};if(!Re($,(f=t.colors)==null?void 0:f.config)){const H=Xl($);n({colors:{config:$,theme:H}}),gw(r,H)}const k=e._debug??!1,L=Rg({entries:e.entries,debug:k});(!t.treeBasedControls||t.treeBasedControls.entries!==e.entries||t.treeBasedControls.lastGlobalInputs!==e.globalValues)&&(e._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:e.entries,lastGlobalInputs:e.globalValues??{},controls:Id(L.tree,{children:(m=(h=t.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:e.globalValues})}}));const D=ms(t.currentRoute.paths),Te=(D?zg({flattenedNodes:L.flattenedNodes,searchQuery:D}):void 0)??hb(L.flattenedNodes,t.currentRoute.paths,c);l((g=Te[0])==null?void 0:g.entry.title);const fe=(b=t.treeBasedControls)==null?void 0:b.controls;return fe?(e._debug&&console.info({currentControls:fe}),p`
                <div
                    class="root"
                    ${R(jn,async H=>{const Z=H.detail;if(!a(Z))return;if(n({loading:!0}),c(Z),!(r.shadowRoot.querySelector(Ue.tagName)instanceof Ue))throw new Error(`Failed to find child '${Ue.tagName}'`);Ec(r,D,t.currentRoute)})}
                    ${R(Hr.events.controlValueChange,H=>{if(!t.treeBasedControls)return;const Z=Vg(fe,H.detail.fullUrlBreadcrumbs,H.detail.newValues);n({treeBasedControls:{...t.treeBasedControls,controls:Z}})})}
                >
                    <${Ue.assign({flattenedNodes:L.flattenedNodes,router:t.router,selectedPath:D?void 0:t.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${je.NavHeader}
                            slot=${je.NavHeader}
                        ></slot>
                    </${Ue}>
                    <${Ut.assign({controls:fe,currentNodes:Te,currentRoute:t.currentRoute,debug:k,originalTree:L.tree,router:t.router,showLoading:t.loading})}
                        ${R(Ut.events.loadingRender,async H=>{await ts();const Z=r.shadowRoot.querySelector(Ut.tagName);Z?Z.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${Ut.tagName}' for scrolling.`),await ts(),n({loading:!H.detail})})}
                    >
                        <slot
                            name=${je.Footer}
                            slot=${je.Footer}
                        ></slot>
                    </${Ut}>
                </div>
            `):p`
                    <${ft.assign({message:"Failed to generate page controls."})}></${ft}>
                `}catch($){return console.error($),p`
                <p class="error">${Ps($)}</p>
            `}}});async function Ec(t,e,r){if(e||r.paths.length<=1)return;const n=t.shadowRoot.querySelector(Ue.tagName);if(!(n instanceof Ue))throw new Error(`Failed to find child '${Ue.tagName}'`);await ub(n)}const gt=_e({title:"Elements",parent:void 0}),ko=_e({parent:gt,title:"Dropdown"}),mb=[{title:"unselected",inputs:{label:"my label",selected:!1}},{title:"selected",inputs:{label:"my label",selected:!0}},{title:"with custom child",inputs:{label:"custom child",selected:!0},customTemplate:p`
            <b>This is custom</b>
        `},{title:"constrained width",customStyle:w`
            :host {
                max-width: 100px;
            }
        `,inputs:{label:"has more text than is possible to fit",selected:!0}},{title:"stretched width",customStyle:w`
            ${We} {
                width: 400px;
            }
        `,inputs:{label:"wide",selected:!0}}],pb=_e({title:We.tagName,parent:ko,controls:{Selected:{controlType:_.Dropdown,initValue:"",options:["","all","none"]},Label:{controlType:_.Text,initValue:""}},elementExamplesCallback({defineExample:t}){mb.forEach(e=>{var r;t({title:e.title,stateInitStatic:{selected:((r=e.inputs)==null?void 0:r.selected)||[]},styles:e.customStyle,renderCallback({controls:n}){const i={label:n.Label||e.inputs.label,selected:n.Selected?n.Selected==="all":e.inputs.selected};return e.customTemplate?p`
                            <${We.assign(i)}>
                                ${e.customTemplate}
                            </${We}>
                        `:p`
                            <${We.assign(i)}></${We}>
                        `}})})}});function Tc(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function gb(t){return!!t}var Mc;(function(t){t.Upper="upper",t.Lower="lower"})(Mc||(Mc={}));function wb({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var xc;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(xc||(xc={}));function yb(t,e){let r=!1;const n=Tc(t).reduce((i,s)=>{const o=e(s,t[s],t);return o instanceof Promise&&(r=!0),{...i,[s]:o}},{});return r?new Promise(async(i,s)=>{try{await Promise.all(Tc(n).map(async o=>{const a=await n[o];n[o]=a})),i(n)}catch(o){s(o)}}):n}function bb(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const vb=bb();function $b({min:t,max:e}){const{min:r,max:n}=wb({min:Math.floor(t),max:Math.floor(e)}),i=n-r+1,s=Math.ceil(Math.log2(i)/8),o=Math.floor(256**s/i)*i,a=new Uint8Array(s);let l;do vb.getRandomValues(a),l=a.reduce((c,d,u)=>c+d*256**u,0);while(l>=o);return r+l%i}const Cc=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Sb(t=16){let e="";for(let r=0;r<t;r++){const n=$b({min:0,max:Cc.length-1});e+=Cc[n]}return e}const kb="px";function Eb(t){return Tb({value:t,suffix:kb})}function Tb({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}const Mr=[{label:"Option 1",id:1},{label:"Option 2",id:2},{label:"Option 3",id:3},{label:"Really really super duper long option",id:4},{label:"Really really super duper long option",id:5},{label:"Really really super duper long option",id:6},{label:"Really really super duper long option",id:7},{label:"Really really super duper long it just keeps going because it's so long option",id:8}],Mb=[{title:"default"},{title:"disabled",inputs:{isDisabled:!0}},{title:"multi select",inputs:{isMultiSelect:!0}},{title:"long selection",inputs:{selected:[8]}},{title:"with custom template",inputs:{selected:[],options:[...Mr,{id:42,label:"custom template",template:p`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `}]}},{title:"with disabled item",inputs:{selected:[],options:[...Mr,{id:42,label:"this is disabled",disabled:!0}]}},{title:"constrained width",customStyle:w`
            :host {
                max-width: 150px;
            }
        `},{title:"stretched width",customStyle:w`
            ${Gt} {
                width: 400px;
            }
        `},{title:"without a placeholder",inputs:{placeholder:void 0}},{title:"with a prefix",inputs:{selectionPrefix:"Pre:",selected:[1]}},{title:"with an icon",inputs:{icon:Ge}}],xb=_e({title:Gt.tagName,parent:ko,controls:{Selected:{controlType:_.Dropdown,initValue:"",options:["",...Mr.map(t=>t.label)]},Prefix:{controlType:_.Text,initValue:""},"Force State":{controlType:_.Dropdown,options:["","force open","force closed"],initValue:""},"Multi Select":{controlType:_.Dropdown,options:["","all","none"],initValue:""},Icon:{controlType:_.Dropdown,initValue:"",options:["",...Object.keys(xs)]},Disabled:{controlType:_.Dropdown,options:["","all","none"],initValue:""},Placeholder:{controlType:_.Text,initValue:"Select something"}},elementExamplesCallback({defineExample:t}){Mb.forEach(e=>{var r;t({title:e.title,stateInitStatic:{selected:((r=e.inputs)==null?void 0:r.selected)||[]},styles:e.customStyle,renderCallback({state:n,updateState:i,controls:s}){var a,l,c,d,u,f,h;const o={placeholder:e.inputs&&"placeholder"in e.inputs?e.inputs.placeholder:s.Placeholder,options:((a=e.inputs)==null?void 0:a.options)||Mr,selected:s.Selected?[(l=Mr.find(m=>m.label===s.Selected))==null?void 0:l.id].filter(gb):n.selected,selectionPrefix:s.Prefix||((c=e.inputs)==null?void 0:c.selectionPrefix),isDisabled:s.Disabled?s.Disabled==="all":(d=e.inputs)==null?void 0:d.isDisabled,icon:s.Icon?xs[s.Icon]:(u=e.inputs)==null?void 0:u.icon,isMultiSelect:s["Multi Select"]?s["Multi Select"]==="all":(f=e.inputs)==null?void 0:f.isMultiSelect,z_debug_forceOpenState:s["Force State"]?s["Force State"]==="force open":(h=e.inputs)==null?void 0:h.z_debug_forceOpenState};return p`
                        <${Gt.assign(o)}
                            ${R(Gt.events.selectedChange,m=>{i({selected:m.detail})})}
                        ></${Gt}>
                    `}})})}}),Cb=_e({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:_.Color,initValue:""},"Fill Color":{controlType:_.Color,initValue:""},"Stroke Width":{controlType:_.Number,initValue:1}},elementExamplesCallback({defineExample:t}){Object.values(xs).forEach(e=>{t({title:e.name,styles:w`
                    :host(:hover) ${T} {
                        background-color: #f2f2f2;
                    }

                    ${T} {
                        padding: 8px;
                        border-radius: ${Pe["vira-form-input-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=w`
                        ${E["vira-icon-fill-color"].name}: ${q(r["Fill Color"]||"inherit")};
                        ${E["vira-icon-stroke-color"].name}: ${q(r["Stroke Color"]||"inherit")};
                        ${E["vira-icon-stroke-width"].name}: ${q(Eb(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${T.assign({icon:e})} style=${n}></${T}>
                    `}})})}}),Ab=_e({parent:gt,title:X.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:_.Color,initValue:X.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:_.Color,initValue:X.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:_.Color,initValue:X.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:_.Color,initValue:X.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:t}){function e({title:r,styles:n,inputs:i}){const s=n??w``;t({title:r,styles:s,renderCallback({controls:o}){const a=w`
                        ${X.cssVars["vira-button-primary-color"].name}: ${q(o["Primary color"]||"inherit")};
                        ${X.cssVars["vira-button-secondary-color"].name}: ${q(o["Secondary color"]||"inherit")};
                        ${X.cssVars["vira-button-primary-hover-color"].name}: ${q(o["Hover color"]||"inherit")};
                        ${X.cssVars["vira-button-primary-active-color"].name}: ${q(o["Active color"]||"inherit")};
                    `;return p`
                        <${X.assign({text:"hello",...i})}
                            style=${a}
                        ></${X}>
                    `}})}e({title:"basic"}),e({title:"with icon",inputs:{icon:So}}),e({title:"outline",inputs:{buttonStyle:qf.Outline}}),e({title:"disabled",inputs:{disabled:!0}}),e({title:"custom width",styles:w`
                ${X} {
                    width: 100px;
                }
            `}),e({title:"custom height",styles:w`
                ${X} {
                    height: 75px;
                }
            `}),t({title:"customized colors",styles:w`
                :host {
                    ${X.cssVars["vira-button-primary-color"].name}: pink;
                    ${X.cssVars["vira-button-secondary-color"].name}: purple;
                    ${X.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${X.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${X.assign({text:"hello"})}></${X}>
                `}})}}),Lb=_e({title:Be.tagName,parent:gt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:t}){t({title:"stacked examples",styles:w`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,i)=>p`
                            <${Be.assign({expanded:!!r.expandedStates[i]})}
                                ${R(Be.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,e({expandedStates:o})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Be.slotNames.header}
                                >
                                    Section ${i}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${R("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],e({showMoreStates:s})})}
                                >
                                    show more
                                </button>
                                ${ce(!!r.showMoreStates[i],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${Be}>
                        `)}}),t({title:"wider examples",styles:w`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,i)=>p`
                            <${Be.assign({expanded:!!r.expandedStates[i]})}
                                ${R(Be.events.expandChange,s=>{const o=[...r.expandedStates];o[i]=s.detail,e({expandedStates:o})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Be.slotNames.header}
                                >
                                    Section ${i}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${R("click",()=>{const s=[...r.showMoreStates];s[i]=!s[i],e({showMoreStates:s})})}
                                >
                                    show more
                                </button>
                                ${ce(!!r.showMoreStates[i],p`
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
                            </${Be}>
                        `)}})}}),Pb=_e({title:T.tagName,parent:gt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:t}){t({title:"basic",renderCallback(){return p`
                    <${T.assign({icon:Ge})}></${T}>
                `}}),t({title:"using createColoredIcon",renderCallback(){return p`
                    <${T.assign({icon:sc(Ge,{"vira-icon-stroke-color":"red"})})}></${T}>
                `}}),t({title:"fit container",styles:w`
                ${T} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,renderCallback(){return p`
                    <${T.assign({icon:sc(Ge,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${T}>
                `}})}}),Ob=_e({title:Ft.tagName,parent:gt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:t}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:w`
                    border-radius: 32px;
                `,loadingSlot:p`
                    <div
                        style=${w`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${T.assign({icon:Vr,fitContainer:!0})}
                            style=${w`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
                    </div>
                `},{title:"invalid",inputs:{imageUrl:"/invalid-image.png"}},{title:"custom invalid",inputs:{imageUrl:"/invalid-image.png"},styles:w`
                    border-radius: 32px;
                `,errorSlot:p`
                    <div
                        style=${w`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${T.assign({icon:qn,fitContainer:!0})}
                            style=${w`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
                    </div>
                `},{title:"disproportionate dimensions",inputs:{imageUrl:"/bolt.png"},styles:w`
                    width: 25px;
                    height: 200px;
                `},{title:"dominant height",inputs:{imageUrl:"/bolt.png",dominantDimension:"height"},styles:w`
                    width: 25px;
                    height: 200px;
                `},{title:"long loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:2e3}},styles:w`
                    border-radius: 32px;
                `,allowReload:!0,loadingSlot:p`
                    <div
                        style=${w`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${T.assign({icon:Vr,fitContainer:!0})}
                            style=${w`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
                    </div>
                `,errorSlot:p`
                    <div
                        style=${w`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${T.assign({icon:qn,fitContainer:!0})}
                            style=${w`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
                    </div>
                `}].forEach(r=>{t({title:r.title,styles:w`
                    ${Ft} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||w``}
                    }

                    ${r.allowReload?w`
                              ${Ft} {
                                  cursor: pointer;
                              }

                              ${Ft}:hover {
                                  border-color: #0055ff;
                              }
                          `:w``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:i}){return p`
                        <${Ft.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${R("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Sb()}`})})}
                        >
                            ${r.loadingSlot?p`
                                      <div
                                          class="slot-wrapper"
                                          slot=${Cs.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?p`
                                      <div class="slot-wrapper" slot=${Cs.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${Ft}>
                    `}})})}}),Nb=_e({title:W.tagName,parent:gt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:_.Color,initValue:W.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:_.Color,initValue:W.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:_.Color,initValue:W.cssVars["vira-input-border-color"].default},"Focus color":{controlType:_.Color,initValue:W.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:_.Color,initValue:W.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:t}){function e({styles:n,title:i,inputs:s}){t({title:i,styles:w`
                    ${n||w``}
                `,stateInitStatic:{value:s.value},renderCallback({state:o,updateState:a,controls:l}){const c={[String(W.cssVars["vira-input-text-color"].name)]:l["Text color"],[String(W.cssVars["vira-input-placeholder-color"].name)]:l["Placeholder color"],[String(W.cssVars["vira-input-border-color"].name)]:l["Border color"],[String(W.cssVars["vira-input-focus-border-color"].name)]:l["Focus color"],[String(W.cssVars["vira-input-text-selection-color"].name)]:l["Selection color"]},d=yb(c,(f,h)=>h||"inherit"),u=Object.entries(d).map(([f,h])=>[f,h].join(": ")+";").join(`
`);return p`
                        <${W.assign({...s,value:o.value})}
                            style=${u}
                            ${R(W.events.valueChange,f=>{a({value:f.detail})})}
                        ></${W}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:Ge}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:w`
                    ${W} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:Ge}},{title:"taller height",styles:w`
                    ${W} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:Ge}},{title:"shorter height",styles:w`
                    ${W} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:Ge}},{title:"max width",styles:w`
                    ${W} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:w`
                    ${W} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:Kf.Password}}].forEach(e)}}),Ib=_e({title:wn.tagName,parent:gt,descriptionParagraphs:["Securely handles hyperlinks or route changes without harming right click or modifier+click functionality."],controls:{"CSS Color":{controlType:_.Color,initValue:""},"Hover color":{controlType:_.Color,initValue:""}},elementExamplesCallback({defineExample:t}){function e({title:r,inputs:n}){t({title:r,renderCallback({controls:i}){const s=w`
                        ${wn.cssVars["vira-link-hover-color"].name}: ${q(i["Hover color"]||"inherit")};
                        color: ${q(i["CSS Color"]||"inherit")};
                    `;return p`
                        <${wn.assign(n)} style=${s}>My Link</${wn}>
                    `}})}e({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),e({title:"with route",inputs:{route:{route:{paths:[]},router:{createRouteUrl(){return window.location.href},setRouteOnDirectNavigation(r,n){return console.info(r,n),!1}}}}})}}),_b=[gt,Cb,ko,Ab,Lb,pb,xb,Pb,Ob,Nb,Ib].sort((t,e)=>t.title.localeCompare(e.title));li({tagName:"vira-book-app",styles:w`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${es} {
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
            <${es.assign({internalRouterConfig:{basePath:uo("element-vir","vira"),useInternalRouter:!0},entries:_b,themeColor:"#33ccff"})}>
                <h1 slot=${je.NavHeader}>Vira</h1>
            </${es}>
        `}});
