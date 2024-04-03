var _d=Object.defineProperty;var Pd=(t,e,r)=>e in t?_d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Qn=(t,e,r)=>(Pd(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const Rd=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Zt(t,e){return t?Rd.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function Ml(t,e){return t&&e.every(r=>Zt(t,r))}function be(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Dd(t,e,r){return t.reduce((n,i,a,s)=>{const o=e(i,a,s);return r(o,i,a,s)&&n.push(o),n},[])}function Nr(t){return!!t}function Vd(t,{keepNewLines:e}={}){return(e?t.replace(/[\s\n]*\n+[\s\n]*/g,`
`):t.replace(/\n/g," ")).trim().replace(/\s{2,}/g," ")}const Hd={capitalizeFirstLetter:!1};function Bd(t){return t.length?t[0].toUpperCase()+t.slice(1):""}function Fd(t,e){return e.capitalizeFirstLetter?Bd(t):t}function zd(t,e=Hd){const r=t.toLowerCase();if(!r.length)return"";const n=r.replace(/^-+/,"").replace(/-{2,}/g,"-").replace(/-(?:.|$)/g,i=>{const a=i[1];return a?a.toUpperCase():""});return Fd(n,e)}var ja;(function(t){t.Upper="upper",t.Lower="lower"})(ja||(ja={}));function Wd({min:t,max:e}){return t>e?{min:e,max:t}:{min:t,max:e}}var Ga;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ga||(Ga={}));function Tl(t){if(!t||t.length===0)return;const e=t[0];return t.length===1&&e?e:new Error(t.map(r=>Yt(r).trim()).join(`
`))}function Yt(t){return t?t instanceof Error?t.message:Zt(t,"message")?String(t.message):String(t):""}function Ii(t){return t instanceof Error?t:new Error(Yt(t))}function Ud(t,e){const r=Ii(t);return r.message=`${e}: ${r.message}`,r}class jd extends Error{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AssertionError"})}}const Gd=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function _i(t,e){return t?Gd.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function qd(t){return t instanceof Promise}function mn(t){return Array.isArray(t)?"array":typeof t}function B(t,e){return mn(t)===e}class Zd extends Error{constructor(e){super(`Failed to compare objects using JSON.stringify: ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonStringifyError"})}}function ei(t,e){return JSON.stringify(t)===JSON.stringify(e)}function Ue(t,e){try{return t===e||ei(t,e)?!0:Pi(t)&&Pi(e)?ei(Object.keys(t).sort(),Object.keys(e).sort())?be(t).every(n=>Ue(t[n],e[n])):!1:ei(t,e)}catch(r){throw new Zd(Yt(r))}}function Yd(t,e){if(!(B(t,"string")||B(t,"number")||B(t,"symbol")))throw new jd(e||`value is of type '${mn(t)}' but expected a PropertyKey.`)}function ti(t){try{return Yd(t),!0}catch{return!1}}function Pi(t){return!!t&&typeof t=="object"}function Jd(t,e={}){try{const r=t();return r instanceof Promise?r.catch(n=>e.handleError?e.handleError(n):_i(e,"fallbackValue")?e.fallbackValue:Ii(n)):r}catch(r){return e.handleError?e.handleError(r):_i(e,"fallbackValue")?e.fallbackValue:Ii(r)}}function Kd(t){return be(t).filter(e=>isNaN(Number(e)))}function Xd(t){return Kd(t).map(r=>t[r])}function Qd(t,e){return Xd(e).includes(t)}function ef(t,e){return be(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function tf(t,e){return ef(t,r=>!e.includes(r))}function rf(t,e,r){const n=e;if(t.has(n))return t.get(n);{const i=r();return t.set(n,i),i}}function nf(t,e,r){if(e in t)return t[e];{const n=r();return qd(n)?new Promise(async(i,a)=>{try{const s=await n;t[e]=s,i(s)}catch(s){a(s)}}):(t[e]=n,n)}}function pt(t,e){let r=!1;const n=be(t).reduce((i,a)=>{const s=e(a,t[a],t);return s instanceof Promise&&(r=!0),{...i,[a]:s}},{});return r?new Promise(async(i,a)=>{try{await Promise.all(be(n).map(async s=>{const o=await n[s];n[s]=o})),i(n)}catch(s){a(s)}}):n}function qa(t,e){try{return xl(t,e),!0}catch{return!1}}function xl(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function oa(){let t,e,r=!1;const n=new Promise((i,a)=>{t=s=>(r=!0,i(s)),e=s=>{r=!0,a(s)}});if(!t||!e)throw new Error(`Reject and resolve callbacks were not set by the promise constructor for ${oa.name}.`);return{promise:n,resolve:t,reject:e,isSettled(){return r}}}function Ri(t){const e=oa();return t!==1/0&&setTimeout(()=>{e.resolve()},t<=0?0:t),e.promise}function af(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}const sf=af();function of({min:t,max:e}){const{min:r,max:n}=Wd({min:Math.floor(t),max:Math.floor(e)}),i=n-r+1,a=Math.ceil(Math.log2(i)/8),s=Math.floor(256**a/i)*i,o=new Uint8Array(a);let l;do sf.getRandomValues(o),l=o.reduce((c,d,u)=>c+d*256**u,0);while(l>=s);return r+l%i}const Za=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9];function Al(t=16){let e="";for(let r=0;r<t;r++){const n=of({min:0,max:Za.length-1});e+=Za[n]}return e}function lf({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}const cf="px";function Cl(t){return uf({value:t,suffix:cf})}function uf({value:t,suffix:e}){return String(t).endsWith(e)?String(t):`${String(t)}${e}`}function df(t,e){return Zt(t,"entryType")&&t.entryType===e}var X;(function(t){t.ElementExample="element-example",t.Page="page",t.Root="root"})(X||(X={}));function Mt(t,e){return t.controlType===e}var I;(function(t){t.Checkbox="checkbox",t.Color="color",t.Dropdown="dropdown",t.Hidden="hidden",t.Number="number",t.Text="text"})(I||(I={}));const Ll=Symbol("any-type"),ff={[I.Checkbox]:!1,[I.Color]:"",[I.Dropdown]:"",[I.Hidden]:Ll,[I.Number]:0,[I.Text]:""};function hf(t,e){if(!t)return[];const r=[];return Object.entries(t).forEach(([n,i])=>{const a=ff[i.controlType];a!==Ll&&(typeof a!=typeof i.initValue&&r.push(new Error(`Control '${n}' in page '${e}' has invalid initValue '${i.initValue}': expected initValue of type ${typeof a} because the control is of type ${i.controlType}.`)),n||r.push(new Error(`'${e}' cannot have an empty control name.`)))}),r}function la(t,e){const r=pn(t.title);return t.parent?[...la(t.parent,!1),pn(t.parent.title)].concat(e?[r]:[]):e?[r]:[]}function pn(t){return Vd(t).toLowerCase().replaceAll(/\s/g,"-")}function mf({searchFor:t,searchIn:e}){return t.every((r,n)=>e[n]===r)}function et(t){const e={...t,entryType:X.Page,elementExamples:{},descriptionParagraphs:t.descriptionParagraphs??[],controls:t.controls??{},errors:[]},r=new Set;return t.elementExamplesCallback&&t.elementExamplesCallback({defineExample(n){const i={...n,entryType:X.ElementExample,parent:e,descriptionParagraphs:n.descriptionParagraphs??[],errors:[r.has(n.title)&&new Error(`Example title '${n.title}' in page '${t.title}' is already taken.`)].filter(Nr)};r.add(n.title),e.elementExamples[pn(i.title)]=i}}),e}var Ae;(function(t){t.Footer="book-footer",t.NavHeader="book-nav-header"})(Ae||(Ae={}));async function Di(t=1){const e=oa();function r(){requestAnimationFrame(()=>{t--,t?r():e.resolve()})}return r(),e.promise}async function pf(t){return gf(t,1)}async function gf(t,e){return new Promise(r=>{new IntersectionObserver((i,a)=>{xl(i,1),a.disconnect(),r(i[0].intersectionRatio>=e)}).observe(t)})}var wf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function yf(){return class extends Event{constructor(e,r){super(e,r),Object.defineProperty(this,"detail",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.detail=r.detail}}}const bf=globalThis.CustomEvent||yf();function bt(){function t(e){var r;return r=class extends bf{constructor(i){super(e,i)}},wf(r,"TypedEventConstructor"),Object.defineProperty(r,"type",{enumerable:!0,configurable:!0,writable:!0,value:e}),r}return t}var vf=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function Ol(t){var e;return e=class extends Event{constructor(n){super(t,n)}},vf(e,"TypedEventConstructor"),Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}class ow extends bt()("observable-value-update"){}class lw extends bt()("observable-value-resolve"){}class cw extends bt()("observable-value-error"){}class uw extends Ol("observable-destroy"){}class dw extends Ol("observable-callback-call"){}class fw extends bt()("observable-params-update"){}class hw extends bt()("observable-interval-run"){}class mw extends bt()("observable-interval-skip"){}class pw extends bt()("observable-interval-rate-limited"){}function $f(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Ya;(function(t){t.Upper="upper",t.Lower="lower"})(Ya||(Ya={}));var Ja;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(Ja||(Ja={}));function Ef(t,e){return $f(t).filter(n=>{const i=t[n];return e(n,i,t)}).reduce((n,i)=>(n[i]=t[i],n),{})}function Sf(t,e){return Ef(t,r=>e.includes(r))}function kf(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}kf();class vt extends Error{}class Mf extends vt{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class Tf extends vt{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class xf extends vt{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class Pt extends vt{}class Nl extends vt{constructor(e){super(`Invalid unit ${e}`)}}class se extends vt{}class Be extends vt{constructor(){super("Zone is an abstract class")}}const g="numeric",Te="short",fe="long",gn={year:g,month:g,day:g},Il={year:g,month:Te,day:g},Af={year:g,month:Te,day:g,weekday:Te},_l={year:g,month:fe,day:g},Pl={year:g,month:fe,day:g,weekday:fe},Rl={hour:g,minute:g},Dl={hour:g,minute:g,second:g},Vl={hour:g,minute:g,second:g,timeZoneName:Te},Hl={hour:g,minute:g,second:g,timeZoneName:fe},Bl={hour:g,minute:g,hourCycle:"h23"},Fl={hour:g,minute:g,second:g,hourCycle:"h23"},zl={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:Te},Wl={hour:g,minute:g,second:g,hourCycle:"h23",timeZoneName:fe},Ul={year:g,month:g,day:g,hour:g,minute:g},jl={year:g,month:g,day:g,hour:g,minute:g,second:g},Gl={year:g,month:Te,day:g,hour:g,minute:g},ql={year:g,month:Te,day:g,hour:g,minute:g,second:g},Cf={year:g,month:Te,day:g,weekday:Te,hour:g,minute:g},Zl={year:g,month:fe,day:g,hour:g,minute:g,timeZoneName:Te},Yl={year:g,month:fe,day:g,hour:g,minute:g,second:g,timeZoneName:Te},Jl={year:g,month:fe,day:g,weekday:fe,hour:g,minute:g,timeZoneName:fe},Kl={year:g,month:fe,day:g,weekday:fe,hour:g,minute:g,second:g,timeZoneName:fe};class Ir{get type(){throw new Be}get name(){throw new Be}get ianaName(){return this.name}get isUniversal(){throw new Be}offsetName(e,r){throw new Be}formatOffset(e,r){throw new Be}offset(e){throw new Be}equals(e){throw new Be}get isValid(){throw new Be}}let ri=null;class In extends Ir{static get instance(){return ri===null&&(ri=new In),ri}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return sc(e,r,n)}formatOffset(e,r){return hr(this.offset(e),r)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return e.type==="system"}get isValid(){return!0}}let on={};function Lf(t){return on[t]||(on[t]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),on[t]}const Of={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function Nf(t,e){const r=t.format(e).replace(/\u200E/g,""),n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r),[,i,a,s,o,l,c,d]=n;return[s,i,a,o,l,c,d]}function If(t,e){const r=t.formatToParts(e),n=[];for(let i=0;i<r.length;i++){const{type:a,value:s}=r[i],o=Of[a];a==="era"?n[o]=s:k(o)||(n[o]=parseInt(s,10))}return n}let Ur={};class De extends Ir{static create(e){return Ur[e]||(Ur[e]=new De(e)),Ur[e]}static resetCache(){Ur={},on={}}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch{return!1}}constructor(e){super(),this.zoneName=e,this.valid=De.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:r,locale:n}){return sc(e,r,n,this.name)}formatOffset(e,r){return hr(this.offset(e),r)}offset(e){const r=new Date(e);if(isNaN(r))return NaN;const n=Lf(this.name);let[i,a,s,o,l,c,d]=n.formatToParts?If(n,r):Nf(n,r);o==="BC"&&(i=-Math.abs(i)+1);const f=Pn({year:i,month:a,day:s,hour:l===24?0:l,minute:c,second:d,millisecond:0});let h=+r;const m=h%1e3;return h-=m>=0?m:1e3+m,(f-h)/(60*1e3)}equals(e){return e.type==="iana"&&e.name===this.name}get isValid(){return this.valid}}let Ka={};function _f(t,e={}){const r=JSON.stringify([t,e]);let n=Ka[r];return n||(n=new Intl.ListFormat(t,e),Ka[r]=n),n}let Vi={};function Hi(t,e={}){const r=JSON.stringify([t,e]);let n=Vi[r];return n||(n=new Intl.DateTimeFormat(t,e),Vi[r]=n),n}let Bi={};function Pf(t,e={}){const r=JSON.stringify([t,e]);let n=Bi[r];return n||(n=new Intl.NumberFormat(t,e),Bi[r]=n),n}let Fi={};function Rf(t,e={}){const{base:r,...n}=e,i=JSON.stringify([t,n]);let a=Fi[i];return a||(a=new Intl.RelativeTimeFormat(t,e),Fi[i]=a),a}let cr=null;function Df(){return cr||(cr=new Intl.DateTimeFormat().resolvedOptions().locale,cr)}let Xa={};function Vf(t){let e=Xa[t];if(!e){const r=new Intl.Locale(t);e="getWeekInfo"in r?r.getWeekInfo():r.weekInfo,Xa[t]=e}return e}function Hf(t){const e=t.indexOf("-x-");e!==-1&&(t=t.substring(0,e));const r=t.indexOf("-u-");if(r===-1)return[t];{let n,i;try{n=Hi(t).resolvedOptions(),i=t}catch{const l=t.substring(0,r);n=Hi(l).resolvedOptions(),i=l}const{numberingSystem:a,calendar:s}=n;return[i,a,s]}}function Bf(t,e,r){return(r||e)&&(t.includes("-u-")||(t+="-u"),r&&(t+=`-ca-${r}`),e&&(t+=`-nu-${e}`)),t}function Ff(t){const e=[];for(let r=1;r<=12;r++){const n=M.utc(2009,r,1);e.push(t(n))}return e}function zf(t){const e=[];for(let r=1;r<=7;r++){const n=M.utc(2016,11,13+r);e.push(t(n))}return e}function jr(t,e,r,n){const i=t.listingMode();return i==="error"?null:i==="en"?r(e):n(e)}function Wf(t){return t.numberingSystem&&t.numberingSystem!=="latn"?!1:t.numberingSystem==="latn"||!t.locale||t.locale.startsWith("en")||new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem==="latn"}class Uf{constructor(e,r,n){this.padTo=n.padTo||0,this.floor=n.floor||!1;const{padTo:i,floor:a,...s}=n;if(!r||Object.keys(s).length>0){const o={useGrouping:!1,...n};n.padTo>0&&(o.minimumIntegerDigits=n.padTo),this.inf=Pf(e,o)}}format(e){if(this.inf){const r=this.floor?Math.floor(e):e;return this.inf.format(r)}else{const r=this.floor?Math.floor(e):fa(e,3);return G(r,this.padTo)}}}class jf{constructor(e,r,n){this.opts=n,this.originalZone=void 0;let i;if(this.opts.timeZone)this.dt=e;else if(e.zone.type==="fixed"){const s=-1*(e.offset/60),o=s>=0?`Etc/GMT+${s}`:`Etc/GMT${s}`;e.offset!==0&&De.create(o).valid?(i=o,this.dt=e):(i="UTC",this.dt=e.offset===0?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else e.zone.type==="system"?this.dt=e:e.zone.type==="iana"?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);const a={...this.opts};a.timeZone=a.timeZone||i,this.dtf=Hi(r,a)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){const e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(r=>{if(r.type==="timeZoneName"){const n=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...r,value:n}}else return r}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class Gf{constructor(e,r,n){this.opts={style:"long",...n},!r&&ic()&&(this.rtf=Rf(e,n))}format(e,r){return this.rtf?this.rtf.format(e,r):fh(r,e,this.opts.numeric,this.opts.style!=="long")}formatToParts(e,r){return this.rtf?this.rtf.formatToParts(e,r):[]}}const qf={firstDay:1,minimalDays:4,weekend:[6,7]};class _{static fromOpts(e){return _.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,r,n,i,a=!1){const s=e||W.defaultLocale,o=s||(a?"en-US":Df()),l=r||W.defaultNumberingSystem,c=n||W.defaultOutputCalendar,d=zi(i)||W.defaultWeekSettings;return new _(o,l,c,d,s)}static resetCache(){cr=null,Vi={},Bi={},Fi={}}static fromObject({locale:e,numberingSystem:r,outputCalendar:n,weekSettings:i}={}){return _.create(e,r,n,i)}constructor(e,r,n,i,a){const[s,o,l]=Hf(e);this.locale=s,this.numberingSystem=r||o||null,this.outputCalendar=n||l||null,this.weekSettings=i,this.intl=Bf(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=a,this.fastNumbersCached=null}get fastNumbers(){return this.fastNumbersCached==null&&(this.fastNumbersCached=Wf(this)),this.fastNumbersCached}listingMode(){const e=this.isEnglish(),r=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return e&&r?"en":"intl"}clone(e){return!e||Object.getOwnPropertyNames(e).length===0?this:_.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,zi(e.weekSettings)||this.weekSettings,e.defaultToEN||!1)}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,r=!1){return jr(this,e,cc,()=>{const n=r?{month:e,day:"numeric"}:{month:e},i=r?"format":"standalone";return this.monthsCache[i][e]||(this.monthsCache[i][e]=Ff(a=>this.extract(a,n,"month"))),this.monthsCache[i][e]})}weekdays(e,r=!1){return jr(this,e,fc,()=>{const n=r?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=r?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=zf(a=>this.extract(a,n,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return jr(this,void 0,()=>hc,()=>{if(!this.meridiemCache){const e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[M.utc(2016,11,13,9),M.utc(2016,11,13,19)].map(r=>this.extract(r,e,"dayperiod"))}return this.meridiemCache})}eras(e){return jr(this,e,mc,()=>{const r={era:e};return this.eraCache[e]||(this.eraCache[e]=[M.utc(-40,1,1),M.utc(2017,1,1)].map(n=>this.extract(n,r,"era"))),this.eraCache[e]})}extract(e,r,n){const i=this.dtFormatter(e,r),a=i.formatToParts(),s=a.find(o=>o.type.toLowerCase()===n);return s?s.value:null}numberFormatter(e={}){return new Uf(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,r={}){return new jf(e,this.intl,r)}relFormatter(e={}){return new Gf(this.intl,this.isEnglish(),e)}listFormatter(e={}){return _f(this.intl,e)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:ac()?Vf(this.locale):qf}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}}let ni=null;class te extends Ir{static get utcInstance(){return ni===null&&(ni=new te(0)),ni}static instance(e){return e===0?te.utcInstance:new te(e)}static parseSpecifier(e){if(e){const r=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r)return new te(Rn(r[1],r[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${hr(this.fixed,"narrow")}`}get ianaName(){return this.fixed===0?"Etc/UTC":`Etc/GMT${hr(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,r){return hr(this.fixed,r)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return e.type==="fixed"&&e.fixed===this.fixed}get isValid(){return!0}}class Zf extends Ir{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function We(t,e){if(k(t)||t===null)return e;if(t instanceof Ir)return t;if(Kf(t)){const r=t.toLowerCase();return r==="default"?e:r==="local"||r==="system"?In.instance:r==="utc"||r==="gmt"?te.utcInstance:te.parseSpecifier(r)||De.create(t)}else return ft(t)?te.instance(t):typeof t=="object"&&"offset"in t&&typeof t.offset=="function"?t:new Zf(t)}let Qa=()=>Date.now(),es="system",ts=null,rs=null,ns=null,is=60,as,ss=null;class W{static get now(){return Qa}static set now(e){Qa=e}static set defaultZone(e){es=e}static get defaultZone(){return We(es,In.instance)}static get defaultLocale(){return ts}static set defaultLocale(e){ts=e}static get defaultNumberingSystem(){return rs}static set defaultNumberingSystem(e){rs=e}static get defaultOutputCalendar(){return ns}static set defaultOutputCalendar(e){ns=e}static get defaultWeekSettings(){return ss}static set defaultWeekSettings(e){ss=zi(e)}static get twoDigitCutoffYear(){return is}static set twoDigitCutoffYear(e){is=e%100}static get throwOnInvalid(){return as}static set throwOnInvalid(e){as=e}static resetCaches(){_.resetCache(),De.resetCache()}}class Me{constructor(e,r){this.reason=e,this.explanation=r}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}const Xl=[0,31,59,90,120,151,181,212,243,273,304,334],Ql=[0,31,60,91,121,152,182,213,244,274,305,335];function we(t,e){return new Me("unit out of range",`you specified ${e} (of type ${typeof e}) as a ${t}, which is invalid`)}function ca(t,e,r){const n=new Date(Date.UTC(t,e-1,r));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);const i=n.getUTCDay();return i===0?7:i}function ec(t,e,r){return r+(_r(t)?Ql:Xl)[e-1]}function tc(t,e){const r=_r(t)?Ql:Xl,n=r.findIndex(a=>a<e),i=e-r[n];return{month:n+1,day:i}}function ua(t,e){return(t-e+7)%7+1}function wn(t,e=4,r=1){const{year:n,month:i,day:a}=t,s=ec(n,i,a),o=ua(ca(n,i,a),r);let l=Math.floor((s-o+14-e)/7),c;return l<1?(c=n-1,l=br(c,e,r)):l>br(n,e,r)?(c=n+1,l=1):c=n,{weekYear:c,weekNumber:l,weekday:o,...Dn(t)}}function os(t,e=4,r=1){const{weekYear:n,weekNumber:i,weekday:a}=t,s=ua(ca(n,1,e),r),o=Rt(n);let l=i*7+a-s-7+e,c;l<1?(c=n-1,l+=Rt(c)):l>o?(c=n+1,l-=Rt(n)):c=n;const{month:d,day:u}=tc(c,l);return{year:c,month:d,day:u,...Dn(t)}}function ii(t){const{year:e,month:r,day:n}=t,i=ec(e,r,n);return{year:e,ordinal:i,...Dn(t)}}function ls(t){const{year:e,ordinal:r}=t,{month:n,day:i}=tc(e,r);return{year:e,month:n,day:i,...Dn(t)}}function cs(t,e){if(!k(t.localWeekday)||!k(t.localWeekNumber)||!k(t.localWeekYear)){if(!k(t.weekday)||!k(t.weekNumber)||!k(t.weekYear))throw new Pt("Cannot mix locale-based week fields with ISO-based week fields");return k(t.localWeekday)||(t.weekday=t.localWeekday),k(t.localWeekNumber)||(t.weekNumber=t.localWeekNumber),k(t.localWeekYear)||(t.weekYear=t.localWeekYear),delete t.localWeekday,delete t.localWeekNumber,delete t.localWeekYear,{minDaysInFirstWeek:e.getMinDaysInFirstWeek(),startOfWeek:e.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function Yf(t,e=4,r=1){const n=_n(t.weekYear),i=ye(t.weekNumber,1,br(t.weekYear,e,r)),a=ye(t.weekday,1,7);return n?i?a?!1:we("weekday",t.weekday):we("week",t.weekNumber):we("weekYear",t.weekYear)}function Jf(t){const e=_n(t.year),r=ye(t.ordinal,1,Rt(t.year));return e?r?!1:we("ordinal",t.ordinal):we("year",t.year)}function rc(t){const e=_n(t.year),r=ye(t.month,1,12),n=ye(t.day,1,yn(t.year,t.month));return e?r?n?!1:we("day",t.day):we("month",t.month):we("year",t.year)}function nc(t){const{hour:e,minute:r,second:n,millisecond:i}=t,a=ye(e,0,23)||e===24&&r===0&&n===0&&i===0,s=ye(r,0,59),o=ye(n,0,59),l=ye(i,0,999);return a?s?o?l?!1:we("millisecond",i):we("second",n):we("minute",r):we("hour",e)}function k(t){return typeof t>"u"}function ft(t){return typeof t=="number"}function _n(t){return typeof t=="number"&&t%1===0}function Kf(t){return typeof t=="string"}function Xf(t){return Object.prototype.toString.call(t)==="[object Date]"}function ic(){try{return typeof Intl<"u"&&!!Intl.RelativeTimeFormat}catch{return!1}}function ac(){try{return typeof Intl<"u"&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch{return!1}}function Qf(t){return Array.isArray(t)?t:[t]}function us(t,e,r){if(t.length!==0)return t.reduce((n,i)=>{const a=[e(i),i];return n&&r(n[0],a[0])===n[0]?n:a},null)[1]}function eh(t,e){return e.reduce((r,n)=>(r[n]=t[n],r),{})}function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function zi(t){if(t==null)return null;if(typeof t!="object")throw new se("Week settings must be an object");if(!ye(t.firstDay,1,7)||!ye(t.minimalDays,1,7)||!Array.isArray(t.weekend)||t.weekend.some(e=>!ye(e,1,7)))throw new se("Invalid week settings");return{firstDay:t.firstDay,minimalDays:t.minimalDays,weekend:Array.from(t.weekend)}}function ye(t,e,r){return _n(t)&&t>=e&&t<=r}function th(t,e){return t-e*Math.floor(t/e)}function G(t,e=2){const r=t<0;let n;return r?n="-"+(""+-t).padStart(e,"0"):n=(""+t).padStart(e,"0"),n}function ze(t){if(!(k(t)||t===null||t===""))return parseInt(t,10)}function rt(t){if(!(k(t)||t===null||t===""))return parseFloat(t)}function da(t){if(!(k(t)||t===null||t==="")){const e=parseFloat("0."+t)*1e3;return Math.floor(e)}}function fa(t,e,r=!1){const n=10**e;return(r?Math.trunc:Math.round)(t*n)/n}function _r(t){return t%4===0&&(t%100!==0||t%400===0)}function Rt(t){return _r(t)?366:365}function yn(t,e){const r=th(e-1,12)+1,n=t+(e-r)/12;return r===2?_r(n)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][r-1]}function Pn(t){let e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&(e=new Date(e),e.setUTCFullYear(t.year,t.month-1,t.day)),+e}function ds(t,e,r){return-ua(ca(t,1,e),r)+e-1}function br(t,e=4,r=1){const n=ds(t,e,r),i=ds(t+1,e,r);return(Rt(t)-n+i)/7}function Wi(t){return t>99?t:t>W.twoDigitCutoffYear?1900+t:2e3+t}function sc(t,e,r,n=null){const i=new Date(t),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(a.timeZone=n);const s={timeZoneName:e,...a},o=new Intl.DateTimeFormat(r,s).formatToParts(i).find(l=>l.type.toLowerCase()==="timezonename");return o?o.value:null}function Rn(t,e){let r=parseInt(t,10);Number.isNaN(r)&&(r=0);const n=parseInt(e,10)||0,i=r<0||Object.is(r,-0)?-n:n;return r*60+i}function oc(t){const e=Number(t);if(typeof t=="boolean"||t===""||Number.isNaN(e))throw new se(`Invalid unit value ${t}`);return e}function bn(t,e){const r={};for(const n in t)if(Ht(t,n)){const i=t[n];if(i==null)continue;r[e(n)]=oc(i)}return r}function hr(t,e){const r=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),i=t>=0?"+":"-";switch(e){case"short":return`${i}${G(r,2)}:${G(n,2)}`;case"narrow":return`${i}${r}${n>0?`:${n}`:""}`;case"techie":return`${i}${G(r,2)}${G(n,2)}`;default:throw new RangeError(`Value format ${e} is out of range for property format`)}}function Dn(t){return eh(t,["hour","minute","second","millisecond"])}const rh=["January","February","March","April","May","June","July","August","September","October","November","December"],lc=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],nh=["J","F","M","A","M","J","J","A","S","O","N","D"];function cc(t){switch(t){case"narrow":return[...nh];case"short":return[...lc];case"long":return[...rh];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}const uc=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],dc=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ih=["M","T","W","T","F","S","S"];function fc(t){switch(t){case"narrow":return[...ih];case"short":return[...dc];case"long":return[...uc];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}const hc=["AM","PM"],ah=["Before Christ","Anno Domini"],sh=["BC","AD"],oh=["B","A"];function mc(t){switch(t){case"narrow":return[...oh];case"short":return[...sh];case"long":return[...ah];default:return null}}function lh(t){return hc[t.hour<12?0:1]}function ch(t,e){return fc(e)[t.weekday-1]}function uh(t,e){return cc(e)[t.month-1]}function dh(t,e){return mc(e)[t.year<0?0:1]}function fh(t,e,r="always",n=!1){const i={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},a=["hours","minutes","seconds"].indexOf(t)===-1;if(r==="auto"&&a){const u=t==="days";switch(e){case 1:return u?"tomorrow":`next ${i[t][0]}`;case-1:return u?"yesterday":`last ${i[t][0]}`;case 0:return u?"today":`this ${i[t][0]}`}}const s=Object.is(e,-0)||e<0,o=Math.abs(e),l=o===1,c=i[t],d=n?l?c[1]:c[2]||c[1]:l?i[t][0]:t;return s?`${o} ${d} ago`:`in ${o} ${d}`}function fs(t,e){let r="";for(const n of t)n.literal?r+=n.val:r+=e(n.val);return r}const hh={D:gn,DD:Il,DDD:_l,DDDD:Pl,t:Rl,tt:Dl,ttt:Vl,tttt:Hl,T:Bl,TT:Fl,TTT:zl,TTTT:Wl,f:Ul,ff:Gl,fff:Zl,ffff:Jl,F:jl,FF:ql,FFF:Yl,FFFF:Kl};class ee{static create(e,r={}){return new ee(e,r)}static parseFormat(e){let r=null,n="",i=!1;const a=[];for(let s=0;s<e.length;s++){const o=e.charAt(s);o==="'"?(n.length>0&&a.push({literal:i||/^\s+$/.test(n),val:n}),r=null,n="",i=!i):i||o===r?n+=o:(n.length>0&&a.push({literal:/^\s+$/.test(n),val:n}),n=o,r=o)}return n.length>0&&a.push({literal:i||/^\s+$/.test(n),val:n}),a}static macroTokenToFormatOpts(e){return hh[e]}constructor(e,r){this.opts=r,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,r){return this.systemLoc===null&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...r}).format()}dtFormatter(e,r={}){return this.loc.dtFormatter(e,{...this.opts,...r})}formatDateTime(e,r){return this.dtFormatter(e,r).format()}formatDateTimeParts(e,r){return this.dtFormatter(e,r).formatToParts()}formatInterval(e,r){return this.dtFormatter(e.start,r).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,r){return this.dtFormatter(e,r).resolvedOptions()}num(e,r=0){if(this.opts.forceSimple)return G(e,r);const n={...this.opts};return r>0&&(n.padTo=r),this.loc.numberFormatter(n).format(e)}formatDateTimeFromString(e,r){const n=this.loc.listingMode()==="en",i=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",a=(h,m)=>this.loc.extract(e,h,m),s=h=>e.isOffsetFixed&&e.offset===0&&h.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,h.format):"",o=()=>n?lh(e):a({hour:"numeric",hourCycle:"h12"},"dayperiod"),l=(h,m)=>n?uh(e,h):a(m?{month:h}:{month:h,day:"numeric"},"month"),c=(h,m)=>n?ch(e,h):a(m?{weekday:h}:{weekday:h,month:"long",day:"numeric"},"weekday"),d=h=>{const m=ee.macroTokenToFormatOpts(h);return m?this.formatWithSystemDefault(e,m):h},u=h=>n?dh(e,h):a({era:h},"era"),f=h=>{switch(h){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12===0?12:e.hour%12);case"hh":return this.num(e.hour%12===0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return o();case"d":return i?a({day:"numeric"},"day"):this.num(e.day);case"dd":return i?a({day:"2-digit"},"day"):this.num(e.day,2);case"c":return this.num(e.weekday);case"ccc":return c("short",!0);case"cccc":return c("long",!0);case"ccccc":return c("narrow",!0);case"E":return this.num(e.weekday);case"EEE":return c("short",!1);case"EEEE":return c("long",!1);case"EEEEE":return c("narrow",!1);case"L":return i?a({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?a({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return l("short",!0);case"LLLL":return l("long",!0);case"LLLLL":return l("narrow",!0);case"M":return i?a({month:"numeric"},"month"):this.num(e.month);case"MM":return i?a({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return l("short",!1);case"MMMM":return l("long",!1);case"MMMMM":return l("narrow",!1);case"y":return i?a({year:"numeric"},"year"):this.num(e.year);case"yy":return i?a({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?a({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?a({year:"numeric"},"year"):this.num(e.year,6);case"G":return u("short");case"GG":return u("long");case"GGGGG":return u("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return d(h)}};return fs(ee.parseFormat(r),f)}formatDurationFromString(e,r){const n=l=>{switch(l[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},i=l=>c=>{const d=n(c);return d?this.num(l.get(d),c.length):c},a=ee.parseFormat(r),s=a.reduce((l,{literal:c,val:d})=>c?l:l.concat(d),[]),o=e.shiftTo(...s.map(n).filter(l=>l));return fs(a,i(o))}}const pc=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function Jt(...t){const e=t.reduce((r,n)=>r+n.source,"");return RegExp(`^${e}$`)}function Kt(...t){return e=>t.reduce(([r,n,i],a)=>{const[s,o,l]=a(e,i);return[{...r,...s},o||n,l]},[{},null,1]).slice(0,2)}function Xt(t,...e){if(t==null)return[null,null];for(const[r,n]of e){const i=r.exec(t);if(i)return n(i)}return[null,null]}function gc(...t){return(e,r)=>{const n={};let i;for(i=0;i<t.length;i++)n[t[i]]=ze(e[r+i]);return[n,null,r+i]}}const wc=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,mh=`(?:${wc.source}?(?:\\[(${pc.source})\\])?)?`,ha=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,yc=RegExp(`${ha.source}${mh}`),ma=RegExp(`(?:T${yc.source})?`),ph=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,gh=/(\d{4})-?W(\d\d)(?:-?(\d))?/,wh=/(\d{4})-?(\d{3})/,yh=gc("weekYear","weekNumber","weekDay"),bh=gc("year","ordinal"),vh=/(\d{4})-(\d\d)-(\d\d)/,bc=RegExp(`${ha.source} ?(?:${wc.source}|(${pc.source}))?`),$h=RegExp(`(?: ${bc.source})?`);function Dt(t,e,r){const n=t[e];return k(n)?r:ze(n)}function Eh(t,e){return[{year:Dt(t,e),month:Dt(t,e+1,1),day:Dt(t,e+2,1)},null,e+3]}function Qt(t,e){return[{hours:Dt(t,e,0),minutes:Dt(t,e+1,0),seconds:Dt(t,e+2,0),milliseconds:da(t[e+3])},null,e+4]}function Pr(t,e){const r=!t[e]&&!t[e+1],n=Rn(t[e+1],t[e+2]),i=r?null:te.instance(n);return[{},i,e+3]}function Rr(t,e){const r=t[e]?De.create(t[e]):null;return[{},r,e+1]}const Sh=RegExp(`^T?${ha.source}$`),kh=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function Mh(t){const[e,r,n,i,a,s,o,l,c]=t,d=e[0]==="-",u=l&&l[0]==="-",f=(h,m=!1)=>h!==void 0&&(m||h&&d)?-h:h;return[{years:f(rt(r)),months:f(rt(n)),weeks:f(rt(i)),days:f(rt(a)),hours:f(rt(s)),minutes:f(rt(o)),seconds:f(rt(l),l==="-0"),milliseconds:f(da(c),u)}]}const Th={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function pa(t,e,r,n,i,a,s){const o={year:e.length===2?Wi(ze(e)):ze(e),month:lc.indexOf(r)+1,day:ze(n),hour:ze(i),minute:ze(a)};return s&&(o.second=ze(s)),t&&(o.weekday=t.length>3?uc.indexOf(t)+1:dc.indexOf(t)+1),o}const xh=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function Ah(t){const[,e,r,n,i,a,s,o,l,c,d,u]=t,f=pa(e,i,n,r,a,s,o);let h;return l?h=Th[l]:c?h=0:h=Rn(d,u),[f,new te(h)]}function Ch(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}const Lh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,Oh=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,Nh=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function hs(t){const[,e,r,n,i,a,s,o]=t;return[pa(e,i,n,r,a,s,o),te.utcInstance]}function Ih(t){const[,e,r,n,i,a,s,o]=t;return[pa(e,o,r,n,i,a,s),te.utcInstance]}const _h=Jt(ph,ma),Ph=Jt(gh,ma),Rh=Jt(wh,ma),Dh=Jt(yc),vc=Kt(Eh,Qt,Pr,Rr),Vh=Kt(yh,Qt,Pr,Rr),Hh=Kt(bh,Qt,Pr,Rr),Bh=Kt(Qt,Pr,Rr);function Fh(t){return Xt(t,[_h,vc],[Ph,Vh],[Rh,Hh],[Dh,Bh])}function zh(t){return Xt(Ch(t),[xh,Ah])}function Wh(t){return Xt(t,[Lh,hs],[Oh,hs],[Nh,Ih])}function Uh(t){return Xt(t,[kh,Mh])}const jh=Kt(Qt);function Gh(t){return Xt(t,[Sh,jh])}const qh=Jt(vh,$h),Zh=Jt(bc),Yh=Kt(Qt,Pr,Rr);function Jh(t){return Xt(t,[qh,vc],[Zh,Yh])}const ms="Invalid Duration",$c={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},Kh={years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3},...$c},me=146097/400,Tt=146097/4800,Xh={years:{quarters:4,months:12,weeks:me/7,days:me,hours:me*24,minutes:me*24*60,seconds:me*24*60*60,milliseconds:me*24*60*60*1e3},quarters:{months:3,weeks:me/28,days:me/4,hours:me*24/4,minutes:me*24*60/4,seconds:me*24*60*60/4,milliseconds:me*24*60*60*1e3/4},months:{weeks:Tt/7,days:Tt,hours:Tt*24,minutes:Tt*24*60,seconds:Tt*24*60*60,milliseconds:Tt*24*60*60*1e3},...$c},ct=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],Qh=ct.slice(0).reverse();function Fe(t,e,r=!1){const n={values:r?e.values:{...t.values,...e.values||{}},loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new L(n)}function Ec(t,e){let r=e.milliseconds??0;for(const n of Qh.slice(1))e[n]&&(r+=e[n]*t[n].milliseconds);return r}function ps(t,e){const r=Ec(t,e)<0?-1:1;ct.reduceRight((n,i)=>{if(k(e[i]))return n;if(n){const a=e[n]*r,s=t[i][n],o=Math.floor(a/s);e[i]+=o*r,e[n]-=o*s*r}return i},null),ct.reduce((n,i)=>{if(k(e[i]))return n;if(n){const a=e[n]%1;e[n]-=a,e[i]+=a*t[n][i]}return i},null)}function em(t){const e={};for(const[r,n]of Object.entries(t))n!==0&&(e[r]=n);return e}class L{constructor(e){const r=e.conversionAccuracy==="longterm"||!1;let n=r?Xh:Kh;e.matrix&&(n=e.matrix),this.values=e.values,this.loc=e.loc||_.create(),this.conversionAccuracy=r?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=n,this.isLuxonDuration=!0}static fromMillis(e,r){return L.fromObject({milliseconds:e},r)}static fromObject(e,r={}){if(e==null||typeof e!="object")throw new se(`Duration.fromObject: argument expected to be an object, got ${e===null?"null":typeof e}`);return new L({values:bn(e,L.normalizeUnit),loc:_.fromObject(r),conversionAccuracy:r.conversionAccuracy,matrix:r.matrix})}static fromDurationLike(e){if(ft(e))return L.fromMillis(e);if(L.isDuration(e))return e;if(typeof e=="object")return L.fromObject(e);throw new se(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,r){const[n]=Uh(e);return n?L.fromObject(n,r):L.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,r){const[n]=Gh(e);return n?L.fromObject(n,r):L.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,r=null){if(!e)throw new se("need to specify a reason the Duration is invalid");const n=e instanceof Me?e:new Me(e,r);if(W.throwOnInvalid)throw new xf(n);return new L({invalid:n})}static normalizeUnit(e){const r={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e&&e.toLowerCase()];if(!r)throw new Nl(e);return r}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,r={}){const n={...r,floor:r.round!==!1&&r.floor!==!1};return this.isValid?ee.create(this.loc,n).formatDurationFromString(this,e):ms}toHuman(e={}){if(!this.isValid)return ms;const r=ct.map(n=>{const i=this.values[n];return k(i)?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:n.slice(0,-1)}).format(i)}).filter(n=>n);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return this.years!==0&&(e+=this.years+"Y"),(this.months!==0||this.quarters!==0)&&(e+=this.months+this.quarters*3+"M"),this.weeks!==0&&(e+=this.weeks+"W"),this.days!==0&&(e+=this.days+"D"),(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)&&(e+="T"),this.hours!==0&&(e+=this.hours+"H"),this.minutes!==0&&(e+=this.minutes+"M"),(this.seconds!==0||this.milliseconds!==0)&&(e+=fa(this.seconds+this.milliseconds/1e3,3)+"S"),e==="P"&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;const r=this.toMillis();return r<0||r>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},M.fromMillis(r,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?Ec(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;const r=L.fromDurationLike(e),n={};for(const i of ct)(Ht(r.values,i)||Ht(this.values,i))&&(n[i]=r.get(i)+this.get(i));return Fe(this,{values:n},!0)}minus(e){if(!this.isValid)return this;const r=L.fromDurationLike(e);return this.plus(r.negate())}mapUnits(e){if(!this.isValid)return this;const r={};for(const n of Object.keys(this.values))r[n]=oc(e(this.values[n],n));return Fe(this,{values:r},!0)}get(e){return this[L.normalizeUnit(e)]}set(e){if(!this.isValid)return this;const r={...this.values,...bn(e,L.normalizeUnit)};return Fe(this,{values:r})}reconfigure({locale:e,numberingSystem:r,conversionAccuracy:n,matrix:i}={}){const s={loc:this.loc.clone({locale:e,numberingSystem:r}),matrix:i,conversionAccuracy:n};return Fe(this,s)}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;const e=this.toObject();return ps(this.matrix,e),Fe(this,{values:e},!0)}rescale(){if(!this.isValid)return this;const e=em(this.normalize().shiftToAll().toObject());return Fe(this,{values:e},!0)}shiftTo(...e){if(!this.isValid)return this;if(e.length===0)return this;e=e.map(s=>L.normalizeUnit(s));const r={},n={},i=this.toObject();let a;for(const s of ct)if(e.indexOf(s)>=0){a=s;let o=0;for(const c in n)o+=this.matrix[c][s]*n[c],n[c]=0;ft(i[s])&&(o+=i[s]);const l=Math.trunc(o);r[s]=l,n[s]=(o*1e3-l*1e3)/1e3}else ft(i[s])&&(n[s]=i[s]);for(const s in n)n[s]!==0&&(r[a]+=s===a?n[s]:n[s]/this.matrix[a][s]);return ps(this.matrix,r),Fe(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;const e={};for(const r of Object.keys(this.values))e[r]=this.values[r]===0?0:-this.values[r];return Fe(this,{values:e},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;function r(n,i){return n===void 0||n===0?i===void 0||i===0:n===i}for(const n of ct)if(!r(this.values[n],e.values[n]))return!1;return!0}}const xt="Invalid Interval";function tm(t,e){return!t||!t.isValid?U.invalid("missing or invalid start"):!e||!e.isValid?U.invalid("missing or invalid end"):e<t?U.invalid("end before start",`The end of an interval must be after its start, but you had start=${t.toISO()} and end=${e.toISO()}`):null}class U{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,r=null){if(!e)throw new se("need to specify a reason the Interval is invalid");const n=e instanceof Me?e:new Me(e,r);if(W.throwOnInvalid)throw new Tf(n);return new U({invalid:n})}static fromDateTimes(e,r){const n=ar(e),i=ar(r),a=tm(n,i);return a??new U({start:n,end:i})}static after(e,r){const n=L.fromDurationLike(r),i=ar(e);return U.fromDateTimes(i,i.plus(n))}static before(e,r){const n=L.fromDurationLike(r),i=ar(e);return U.fromDateTimes(i.minus(n),i)}static fromISO(e,r){const[n,i]=(e||"").split("/",2);if(n&&i){let a,s;try{a=M.fromISO(n,r),s=a.isValid}catch{s=!1}let o,l;try{o=M.fromISO(i,r),l=o.isValid}catch{l=!1}if(s&&l)return U.fromDateTimes(a,o);if(s){const c=L.fromISO(i,r);if(c.isValid)return U.after(a,c)}else if(l){const c=L.fromISO(n,r);if(c.isValid)return U.before(o,c)}}return U.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",r){if(!this.isValid)return NaN;const n=this.start.startOf(e,r);let i;return r!=null&&r.useLocaleWeeks?i=this.end.reconfigure({locale:n.locale}):i=this.end,i=i.startOf(e,r),Math.floor(i.diff(n,e).get(e))+(i.valueOf()!==this.end.valueOf())}hasSame(e){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,e):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return this.isValid?this.s>e:!1}isBefore(e){return this.isValid?this.e<=e:!1}contains(e){return this.isValid?this.s<=e&&this.e>e:!1}set({start:e,end:r}={}){return this.isValid?U.fromDateTimes(e||this.s,r||this.e):this}splitAt(...e){if(!this.isValid)return[];const r=e.map(ar).filter(s=>this.contains(s)).sort((s,o)=>s.toMillis()-o.toMillis()),n=[];let{s:i}=this,a=0;for(;i<this.e;){const s=r[a]||this.e,o=+s>+this.e?this.e:s;n.push(U.fromDateTimes(i,o)),i=o,a+=1}return n}splitBy(e){const r=L.fromDurationLike(e);if(!this.isValid||!r.isValid||r.as("milliseconds")===0)return[];let{s:n}=this,i=1,a;const s=[];for(;n<this.e;){const o=this.start.plus(r.mapUnits(l=>l*i));a=+o>+this.e?this.e:o,s.push(U.fromDateTimes(n,a)),n=a,i+=1}return s}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return this.isValid?+this.e==+e.s:!1}abutsEnd(e){return this.isValid?+e.e==+this.s:!1}engulfs(e){return this.isValid?this.s<=e.s&&this.e>=e.e:!1}equals(e){return!this.isValid||!e.isValid?!1:this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;const r=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return r>=n?null:U.fromDateTimes(r,n)}union(e){if(!this.isValid)return this;const r=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return U.fromDateTimes(r,n)}static merge(e){const[r,n]=e.sort((i,a)=>i.s-a.s).reduce(([i,a],s)=>a?a.overlaps(s)||a.abutsStart(s)?[i,a.union(s)]:[i.concat([a]),s]:[i,s],[[],null]);return n&&r.push(n),r}static xor(e){let r=null,n=0;const i=[],a=e.map(l=>[{time:l.s,type:"s"},{time:l.e,type:"e"}]),s=Array.prototype.concat(...a),o=s.sort((l,c)=>l.time-c.time);for(const l of o)n+=l.type==="s"?1:-1,n===1?r=l.time:(r&&+r!=+l.time&&i.push(U.fromDateTimes(r,l.time)),r=null);return U.merge(i)}difference(...e){return U.xor([this].concat(e)).map(r=>this.intersection(r)).filter(r=>r&&!r.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:xt}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=gn,r={}){return this.isValid?ee.create(this.s.loc.clone(r),e).formatInterval(this):xt}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:xt}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:xt}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:xt}toFormat(e,{separator:r=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${r}${this.e.toFormat(e)}`:xt}toDuration(e,r){return this.isValid?this.e.diff(this.s,e,r):L.invalid(this.invalidReason)}mapEndpoints(e){return U.fromDateTimes(e(this.s),e(this.e))}}class Gr{static hasDST(e=W.defaultZone){const r=M.now().setZone(e).set({month:12});return!e.isUniversal&&r.offset!==r.set({month:6}).offset}static isValidIANAZone(e){return De.isValidZone(e)}static normalizeZone(e){return We(e,W.defaultZone)}static getStartOfWeek({locale:e=null,locObj:r=null}={}){return(r||_.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:r=null}={}){return(r||_.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:r=null}={}){return(r||_.create(e)).getWeekendDays().slice()}static months(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:a="gregory"}={}){return(i||_.create(r,n,a)).months(e)}static monthsFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null,outputCalendar:a="gregory"}={}){return(i||_.create(r,n,a)).months(e,!0)}static weekdays(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||_.create(r,n,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:r=null,numberingSystem:n=null,locObj:i=null}={}){return(i||_.create(r,n,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return _.create(e).meridiems()}static eras(e="short",{locale:r=null}={}){return _.create(r,null,"gregory").eras(e)}static features(){return{relative:ic(),localeWeek:ac()}}}function gs(t,e){const r=i=>i.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),n=r(e)-r(t);return Math.floor(L.fromMillis(n).as("days"))}function rm(t,e,r){const n=[["years",(l,c)=>c.year-l.year],["quarters",(l,c)=>c.quarter-l.quarter+(c.year-l.year)*4],["months",(l,c)=>c.month-l.month+(c.year-l.year)*12],["weeks",(l,c)=>{const d=gs(l,c);return(d-d%7)/7}],["days",gs]],i={},a=t;let s,o;for(const[l,c]of n)r.indexOf(l)>=0&&(s=l,i[l]=c(t,e),o=a.plus(i),o>e?(i[l]--,t=a.plus(i),t>e&&(o=t,i[l]--,t=a.plus(i))):t=o);return[t,i,o,s]}function nm(t,e,r,n){let[i,a,s,o]=rm(t,e,r);const l=e-i,c=r.filter(u=>["hours","minutes","seconds","milliseconds"].indexOf(u)>=0);c.length===0&&(s<e&&(s=i.plus({[o]:1})),s!==i&&(a[o]=(a[o]||0)+l/(s-i)));const d=L.fromObject(a,n);return c.length>0?L.fromMillis(l,n).shiftTo(...c).plus(d):d}const ga={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ws={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},im=ga.hanidec.replace(/[\[|\]]/g,"").split("");function am(t){let e=parseInt(t,10);if(isNaN(e)){e="";for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);if(t[r].search(ga.hanidec)!==-1)e+=im.indexOf(t[r]);else for(const i in ws){const[a,s]=ws[i];n>=a&&n<=s&&(e+=n-a)}}return parseInt(e,10)}else return e}function Se({numberingSystem:t},e=""){return new RegExp(`${ga[t||"latn"]}${e}`)}const sm="missing Intl.DateTimeFormat.formatToParts support";function O(t,e=r=>r){return{regex:t,deser:([r])=>e(am(r))}}const om=String.fromCharCode(160),Sc=`[ ${om}]`,kc=new RegExp(Sc,"g");function lm(t){return t.replace(/\./g,"\\.?").replace(kc,Sc)}function ys(t){return t.replace(/\./g,"").replace(kc," ").toLowerCase()}function ke(t,e){return t===null?null:{regex:RegExp(t.map(lm).join("|")),deser:([r])=>t.findIndex(n=>ys(r)===ys(n))+e}}function bs(t,e){return{regex:t,deser:([,r,n])=>Rn(r,n),groups:e}}function qr(t){return{regex:t,deser:([e])=>e}}function cm(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function um(t,e){const r=Se(e),n=Se(e,"{2}"),i=Se(e,"{3}"),a=Se(e,"{4}"),s=Se(e,"{6}"),o=Se(e,"{1,2}"),l=Se(e,"{1,3}"),c=Se(e,"{1,6}"),d=Se(e,"{1,9}"),u=Se(e,"{2,4}"),f=Se(e,"{4,6}"),h=b=>({regex:RegExp(cm(b.val)),deser:([$])=>$,literal:!0}),w=(b=>{if(t.literal)return h(b);switch(b.val){case"G":return ke(e.eras("short"),0);case"GG":return ke(e.eras("long"),0);case"y":return O(c);case"yy":return O(u,Wi);case"yyyy":return O(a);case"yyyyy":return O(f);case"yyyyyy":return O(s);case"M":return O(o);case"MM":return O(n);case"MMM":return ke(e.months("short",!0),1);case"MMMM":return ke(e.months("long",!0),1);case"L":return O(o);case"LL":return O(n);case"LLL":return ke(e.months("short",!1),1);case"LLLL":return ke(e.months("long",!1),1);case"d":return O(o);case"dd":return O(n);case"o":return O(l);case"ooo":return O(i);case"HH":return O(n);case"H":return O(o);case"hh":return O(n);case"h":return O(o);case"mm":return O(n);case"m":return O(o);case"q":return O(o);case"qq":return O(n);case"s":return O(o);case"ss":return O(n);case"S":return O(l);case"SSS":return O(i);case"u":return qr(d);case"uu":return qr(o);case"uuu":return O(r);case"a":return ke(e.meridiems(),0);case"kkkk":return O(a);case"kk":return O(u,Wi);case"W":return O(o);case"WW":return O(n);case"E":case"c":return O(r);case"EEE":return ke(e.weekdays("short",!1),1);case"EEEE":return ke(e.weekdays("long",!1),1);case"ccc":return ke(e.weekdays("short",!0),1);case"cccc":return ke(e.weekdays("long",!0),1);case"Z":case"ZZ":return bs(new RegExp(`([+-]${o.source})(?::(${n.source}))?`),2);case"ZZZ":return bs(new RegExp(`([+-]${o.source})(${n.source})?`),2);case"z":return qr(/[a-z_+-/]{1,256}?/i);case" ":return qr(/[^\S\n\r]/);default:return h(b)}})(t)||{invalidReason:sm};return w.token=t,w}const dm={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function fm(t,e,r){const{type:n,value:i}=t;if(n==="literal"){const l=/^\s+$/.test(i);return{literal:!l,val:l?" ":i}}const a=e[n];let s=n;n==="hour"&&(e.hour12!=null?s=e.hour12?"hour12":"hour24":e.hourCycle!=null?e.hourCycle==="h11"||e.hourCycle==="h12"?s="hour12":s="hour24":s=r.hour12?"hour12":"hour24");let o=dm[s];if(typeof o=="object"&&(o=o[a]),o)return{literal:!1,val:o}}function hm(t){return[`^${t.map(r=>r.regex).reduce((r,n)=>`${r}(${n.source})`,"")}$`,t]}function mm(t,e,r){const n=t.match(e);if(n){const i={};let a=1;for(const s in r)if(Ht(r,s)){const o=r[s],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(i[o.token.val[0]]=o.deser(n.slice(a,a+l))),a+=l}return[n,i]}else return[n,{}]}function pm(t){const e=a=>{switch(a){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}};let r=null,n;return k(t.z)||(r=De.create(t.z)),k(t.Z)||(r||(r=new te(t.Z)),n=t.Z),k(t.q)||(t.M=(t.q-1)*3+1),k(t.h)||(t.h<12&&t.a===1?t.h+=12:t.h===12&&t.a===0&&(t.h=0)),t.G===0&&t.y&&(t.y=-t.y),k(t.u)||(t.S=da(t.u)),[Object.keys(t).reduce((a,s)=>{const o=e(s);return o&&(a[o]=t[s]),a},{}),r,n]}let ai=null;function gm(){return ai||(ai=M.fromMillis(1555555555555)),ai}function wm(t,e){if(t.literal)return t;const r=ee.macroTokenToFormatOpts(t.val),n=xc(r,e);return n==null||n.includes(void 0)?t:n}function Mc(t,e){return Array.prototype.concat(...t.map(r=>wm(r,e)))}function Tc(t,e,r){const n=Mc(ee.parseFormat(r),t),i=n.map(s=>um(s,t)),a=i.find(s=>s.invalidReason);if(a)return{input:e,tokens:n,invalidReason:a.invalidReason};{const[s,o]=hm(i),l=RegExp(s,"i"),[c,d]=mm(e,l,o),[u,f,h]=d?pm(d):[null,null,void 0];if(Ht(d,"a")&&Ht(d,"H"))throw new Pt("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:n,regex:l,rawMatches:c,matches:d,result:u,zone:f,specificOffset:h}}}function ym(t,e,r){const{result:n,zone:i,specificOffset:a,invalidReason:s}=Tc(t,e,r);return[n,i,a,s]}function xc(t,e){if(!t)return null;const n=ee.create(e,t).dtFormatter(gm()),i=n.formatToParts(),a=n.resolvedOptions();return i.map(s=>fm(s,t,a))}const si="Invalid DateTime",vs=864e13;function Zr(t){return new Me("unsupported zone",`the zone "${t.name}" is not supported`)}function oi(t){return t.weekData===null&&(t.weekData=wn(t.c)),t.weekData}function li(t){return t.localWeekData===null&&(t.localWeekData=wn(t.c,t.loc.getMinDaysInFirstWeek(),t.loc.getStartOfWeek())),t.localWeekData}function nt(t,e){const r={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new M({...r,...e,old:r})}function Ac(t,e,r){let n=t-e*60*1e3;const i=r.offset(n);if(e===i)return[n,e];n-=(i-e)*60*1e3;const a=r.offset(n);return i===a?[n,i]:[t-Math.min(i,a)*60*1e3,Math.max(i,a)]}function Yr(t,e){t+=e*60*1e3;const r=new Date(t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function ln(t,e,r){return Ac(Pn(t),e,r)}function $s(t,e){const r=t.o,n=t.c.year+Math.trunc(e.years),i=t.c.month+Math.trunc(e.months)+Math.trunc(e.quarters)*3,a={...t.c,year:n,month:i,day:Math.min(t.c.day,yn(n,i))+Math.trunc(e.days)+Math.trunc(e.weeks)*7},s=L.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),o=Pn(a);let[l,c]=Ac(o,r,t.zone);return s!==0&&(l+=s,c=t.zone.offset(l)),{ts:l,o:c}}function ir(t,e,r,n,i,a){const{setZone:s,zone:o}=r;if(t&&Object.keys(t).length!==0||e){const l=e||o,c=M.fromObject(t,{...r,zone:l,specificOffset:a});return s?c:c.setZone(o)}else return M.invalid(new Me("unparsable",`the input "${i}" can't be parsed as ${n}`))}function Jr(t,e,r=!0){return t.isValid?ee.create(_.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(t,e):null}function ci(t,e){const r=t.c.year>9999||t.c.year<0;let n="";return r&&t.c.year>=0&&(n+="+"),n+=G(t.c.year,r?6:4),e?(n+="-",n+=G(t.c.month),n+="-",n+=G(t.c.day)):(n+=G(t.c.month),n+=G(t.c.day)),n}function Es(t,e,r,n,i,a){let s=G(t.c.hour);return e?(s+=":",s+=G(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(s+=":")):s+=G(t.c.minute),(t.c.millisecond!==0||t.c.second!==0||!r)&&(s+=G(t.c.second),(t.c.millisecond!==0||!n)&&(s+=".",s+=G(t.c.millisecond,3))),i&&(t.isOffsetFixed&&t.offset===0&&!a?s+="Z":t.o<0?(s+="-",s+=G(Math.trunc(-t.o/60)),s+=":",s+=G(Math.trunc(-t.o%60))):(s+="+",s+=G(Math.trunc(t.o/60)),s+=":",s+=G(Math.trunc(t.o%60)))),a&&(s+="["+t.zone.ianaName+"]"),s}const Cc={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},bm={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},vm={ordinal:1,hour:0,minute:0,second:0,millisecond:0},Lc=["year","month","day","hour","minute","second","millisecond"],$m=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],Em=["year","ordinal","hour","minute","second","millisecond"];function Sm(t){const e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new Nl(t);return e}function Ss(t){switch(t.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return Sm(t)}}function ks(t,e){const r=We(e.zone,W.defaultZone),n=_.fromObject(e),i=W.now();let a,s;if(k(t.year))a=i;else{for(const c of Lc)k(t[c])&&(t[c]=Cc[c]);const o=rc(t)||nc(t);if(o)return M.invalid(o);const l=r.offset(i);[a,s]=ln(t,l,r)}return new M({ts:a,zone:r,loc:n,o:s})}function Ms(t,e,r){const n=k(r.round)?!0:r.round,i=(s,o)=>(s=fa(s,n||r.calendary?0:2,!0),e.loc.clone(r).relFormatter(r).format(s,o)),a=s=>r.calendary?e.hasSame(t,s)?0:e.startOf(s).diff(t.startOf(s),s).get(s):e.diff(t,s).get(s);if(r.unit)return i(a(r.unit),r.unit);for(const s of r.units){const o=a(s);if(Math.abs(o)>=1)return i(o,s)}return i(t>e?-0:0,r.units[r.units.length-1])}function Ts(t){let e={},r;return t.length>0&&typeof t[t.length-1]=="object"?(e=t[t.length-1],r=Array.from(t).slice(0,t.length-1)):r=Array.from(t),[e,r]}class M{constructor(e){const r=e.zone||W.defaultZone;let n=e.invalid||(Number.isNaN(e.ts)?new Me("invalid input"):null)||(r.isValid?null:Zr(r));this.ts=k(e.ts)?W.now():e.ts;let i=null,a=null;if(!n)if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(r))[i,a]=[e.old.c,e.old.o];else{const o=r.offset(this.ts);i=Yr(this.ts,o),n=Number.isNaN(i.year)?new Me("invalid input"):null,i=n?null:i,a=n?null:o}this._zone=r,this.loc=e.loc||_.create(),this.invalid=n,this.weekData=null,this.localWeekData=null,this.c=i,this.o=a,this.isLuxonDateTime=!0}static now(){return new M({})}static local(){const[e,r]=Ts(arguments),[n,i,a,s,o,l,c]=r;return ks({year:n,month:i,day:a,hour:s,minute:o,second:l,millisecond:c},e)}static utc(){const[e,r]=Ts(arguments),[n,i,a,s,o,l,c]=r;return e.zone=te.utcInstance,ks({year:n,month:i,day:a,hour:s,minute:o,second:l,millisecond:c},e)}static fromJSDate(e,r={}){const n=Xf(e)?e.valueOf():NaN;if(Number.isNaN(n))return M.invalid("invalid input");const i=We(r.zone,W.defaultZone);return i.isValid?new M({ts:n,zone:i,loc:_.fromObject(r)}):M.invalid(Zr(i))}static fromMillis(e,r={}){if(ft(e))return e<-vs||e>vs?M.invalid("Timestamp out of range"):new M({ts:e,zone:We(r.zone,W.defaultZone),loc:_.fromObject(r)});throw new se(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,r={}){if(ft(e))return new M({ts:e*1e3,zone:We(r.zone,W.defaultZone),loc:_.fromObject(r)});throw new se("fromSeconds requires a numerical input")}static fromObject(e,r={}){e=e||{};const n=We(r.zone,W.defaultZone);if(!n.isValid)return M.invalid(Zr(n));const i=_.fromObject(r),a=bn(e,Ss),{minDaysInFirstWeek:s,startOfWeek:o}=cs(a,i),l=W.now(),c=k(r.specificOffset)?n.offset(l):r.specificOffset,d=!k(a.ordinal),u=!k(a.year),f=!k(a.month)||!k(a.day),h=u||f,m=a.weekYear||a.weekNumber;if((h||d)&&m)throw new Pt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(f&&d)throw new Pt("Can't mix ordinal dates with month/day");const w=m||a.weekday&&!h;let b,$,S=Yr(l,c);w?(b=$m,$=bm,S=wn(S,s,o)):d?(b=Em,$=vm,S=ii(S)):(b=Lc,$=Cc);let C=!1;for(const Ne of b){const tt=a[Ne];k(tt)?C?a[Ne]=$[Ne]:a[Ne]=S[Ne]:C=!0}const D=w?Yf(a,s,o):d?Jf(a):rc(a),ne=D||nc(a);if(ne)return M.invalid(ne);const Oe=w?os(a,s,o):d?ls(a):a,[Ee,R]=ln(Oe,c,n),Z=new M({ts:Ee,zone:n,o:R,loc:i});return a.weekday&&h&&e.weekday!==Z.weekday?M.invalid("mismatched weekday",`you can't specify both a weekday of ${a.weekday} and a date of ${Z.toISO()}`):Z}static fromISO(e,r={}){const[n,i]=Fh(e);return ir(n,i,r,"ISO 8601",e)}static fromRFC2822(e,r={}){const[n,i]=zh(e);return ir(n,i,r,"RFC 2822",e)}static fromHTTP(e,r={}){const[n,i]=Wh(e);return ir(n,i,r,"HTTP",r)}static fromFormat(e,r,n={}){if(k(e)||k(r))throw new se("fromFormat requires an input string and a format");const{locale:i=null,numberingSystem:a=null}=n,s=_.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0}),[o,l,c,d]=ym(s,e,r);return d?M.invalid(d):ir(o,l,n,`format ${r}`,e,c)}static fromString(e,r,n={}){return M.fromFormat(e,r,n)}static fromSQL(e,r={}){const[n,i]=Jh(e);return ir(n,i,r,"SQL",e)}static invalid(e,r=null){if(!e)throw new se("need to specify a reason the DateTime is invalid");const n=e instanceof Me?e:new Me(e,r);if(W.throwOnInvalid)throw new Mf(n);return new M({invalid:n})}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,r={}){const n=xc(e,_.fromObject(r));return n?n.map(i=>i?i.val:null).join(""):null}static expandFormat(e,r={}){return Mc(ee.parseFormat(e),_.fromObject(r)).map(i=>i.val).join("")}get(e){return this[e]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?oi(this).weekYear:NaN}get weekNumber(){return this.isValid?oi(this).weekNumber:NaN}get weekday(){return this.isValid?oi(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?li(this).weekday:NaN}get localWeekNumber(){return this.isValid?li(this).weekNumber:NaN}get localWeekYear(){return this.isValid?li(this).weekYear:NaN}get ordinal(){return this.isValid?ii(this.c).ordinal:NaN}get monthShort(){return this.isValid?Gr.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?Gr.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?Gr.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?Gr.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return this.isOffsetFixed?!1:this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];const e=864e5,r=6e4,n=Pn(this.c),i=this.zone.offset(n-e),a=this.zone.offset(n+e),s=this.zone.offset(n-i*r),o=this.zone.offset(n-a*r);if(s===o)return[this];const l=n-s*r,c=n-o*r,d=Yr(l,s),u=Yr(c,o);return d.hour===u.hour&&d.minute===u.minute&&d.second===u.second&&d.millisecond===u.millisecond?[nt(this,{ts:l}),nt(this,{ts:c})]:[this]}get isInLeapYear(){return _r(this.year)}get daysInMonth(){return yn(this.year,this.month)}get daysInYear(){return this.isValid?Rt(this.year):NaN}get weeksInWeekYear(){return this.isValid?br(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?br(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){const{locale:r,numberingSystem:n,calendar:i}=ee.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:r,numberingSystem:n,outputCalendar:i}}toUTC(e=0,r={}){return this.setZone(te.instance(e),r)}toLocal(){return this.setZone(W.defaultZone)}setZone(e,{keepLocalTime:r=!1,keepCalendarTime:n=!1}={}){if(e=We(e,W.defaultZone),e.equals(this.zone))return this;if(e.isValid){let i=this.ts;if(r||n){const a=e.offset(this.ts),s=this.toObject();[i]=ln(s,a,e)}return nt(this,{ts:i,zone:e})}else return M.invalid(Zr(e))}reconfigure({locale:e,numberingSystem:r,outputCalendar:n}={}){const i=this.loc.clone({locale:e,numberingSystem:r,outputCalendar:n});return nt(this,{loc:i})}setLocale(e){return this.reconfigure({locale:e})}set(e){if(!this.isValid)return this;const r=bn(e,Ss),{minDaysInFirstWeek:n,startOfWeek:i}=cs(r,this.loc),a=!k(r.weekYear)||!k(r.weekNumber)||!k(r.weekday),s=!k(r.ordinal),o=!k(r.year),l=!k(r.month)||!k(r.day),c=o||l,d=r.weekYear||r.weekNumber;if((c||s)&&d)throw new Pt("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(l&&s)throw new Pt("Can't mix ordinal dates with month/day");let u;a?u=os({...wn(this.c,n,i),...r},n,i):k(r.ordinal)?(u={...this.toObject(),...r},k(r.day)&&(u.day=Math.min(yn(u.year,u.month),u.day))):u=ls({...ii(this.c),...r});const[f,h]=ln(u,this.o,this.zone);return nt(this,{ts:f,o:h})}plus(e){if(!this.isValid)return this;const r=L.fromDurationLike(e);return nt(this,$s(this,r))}minus(e){if(!this.isValid)return this;const r=L.fromDurationLike(e).negate();return nt(this,$s(this,r))}startOf(e,{useLocaleWeeks:r=!1}={}){if(!this.isValid)return this;const n={},i=L.normalizeUnit(e);switch(i){case"years":n.month=1;case"quarters":case"months":n.day=1;case"weeks":case"days":n.hour=0;case"hours":n.minute=0;case"minutes":n.second=0;case"seconds":n.millisecond=0;break}if(i==="weeks")if(r){const a=this.loc.getStartOfWeek(),{weekday:s}=this;s<a&&(n.weekNumber=this.weekNumber-1),n.weekday=a}else n.weekday=1;if(i==="quarters"){const a=Math.ceil(this.month/3);n.month=(a-1)*3+1}return this.set(n)}endOf(e,r){return this.isValid?this.plus({[e]:1}).startOf(e,r).minus(1):this}toFormat(e,r={}){return this.isValid?ee.create(this.loc.redefaultToEN(r)).formatDateTimeFromString(this,e):si}toLocaleString(e=gn,r={}){return this.isValid?ee.create(this.loc.clone(r),e).formatDateTime(this):si}toLocaleParts(e={}){return this.isValid?ee.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:r=!1,suppressMilliseconds:n=!1,includeOffset:i=!0,extendedZone:a=!1}={}){if(!this.isValid)return null;const s=e==="extended";let o=ci(this,s);return o+="T",o+=Es(this,s,r,n,i,a),o}toISODate({format:e="extended"}={}){return this.isValid?ci(this,e==="extended"):null}toISOWeekDate(){return Jr(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:r=!1,includeOffset:n=!0,includePrefix:i=!1,extendedZone:a=!1,format:s="extended"}={}){return this.isValid?(i?"T":"")+Es(this,s==="extended",r,e,n,a):null}toRFC2822(){return Jr(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return Jr(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?ci(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:r=!1,includeOffsetSpace:n=!0}={}){let i="HH:mm:ss.SSS";return(r||e)&&(n&&(i+=" "),r?i+="z":e&&(i+="ZZ")),Jr(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():si}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};const r={...this.c};return e.includeConfig&&(r.outputCalendar=this.outputCalendar,r.numberingSystem=this.loc.numberingSystem,r.locale=this.loc.locale),r}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,r="milliseconds",n={}){if(!this.isValid||!e.isValid)return L.invalid("created by diffing an invalid DateTime");const i={locale:this.locale,numberingSystem:this.numberingSystem,...n},a=Qf(r).map(L.normalizeUnit),s=e.valueOf()>this.valueOf(),o=s?this:e,l=s?e:this,c=nm(o,l,a,i);return s?c.negate():c}diffNow(e="milliseconds",r={}){return this.diff(M.now(),e,r)}until(e){return this.isValid?U.fromDateTimes(this,e):this}hasSame(e,r,n){if(!this.isValid)return!1;const i=e.valueOf(),a=this.setZone(e.zone,{keepLocalTime:!0});return a.startOf(r,n)<=i&&i<=a.endOf(r,n)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;const r=e.base||M.fromObject({},{zone:this.zone}),n=e.padding?this<r?-e.padding:e.padding:0;let i=["years","months","days","hours","minutes","seconds"],a=e.unit;return Array.isArray(e.unit)&&(i=e.unit,a=void 0),Ms(r,this.plus(n),{...e,numeric:"always",units:i,unit:a})}toRelativeCalendar(e={}){return this.isValid?Ms(e.base||M.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(M.isDateTime))throw new se("min requires all arguments be DateTimes");return us(e,r=>r.valueOf(),Math.min)}static max(...e){if(!e.every(M.isDateTime))throw new se("max requires all arguments be DateTimes");return us(e,r=>r.valueOf(),Math.max)}static fromFormatExplain(e,r,n={}){const{locale:i=null,numberingSystem:a=null}=n,s=_.fromOpts({locale:i,numberingSystem:a,defaultToEN:!0});return Tc(s,e,r)}static fromStringExplain(e,r,n={}){return M.fromFormatExplain(e,r,n)}static get DATE_SHORT(){return gn}static get DATE_MED(){return Il}static get DATE_MED_WITH_WEEKDAY(){return Af}static get DATE_FULL(){return _l}static get DATE_HUGE(){return Pl}static get TIME_SIMPLE(){return Rl}static get TIME_WITH_SECONDS(){return Dl}static get TIME_WITH_SHORT_OFFSET(){return Vl}static get TIME_WITH_LONG_OFFSET(){return Hl}static get TIME_24_SIMPLE(){return Bl}static get TIME_24_WITH_SECONDS(){return Fl}static get TIME_24_WITH_SHORT_OFFSET(){return zl}static get TIME_24_WITH_LONG_OFFSET(){return Wl}static get DATETIME_SHORT(){return Ul}static get DATETIME_SHORT_WITH_SECONDS(){return jl}static get DATETIME_MED(){return Gl}static get DATETIME_MED_WITH_SECONDS(){return ql}static get DATETIME_MED_WITH_WEEKDAY(){return Cf}static get DATETIME_FULL(){return Zl}static get DATETIME_FULL_WITH_SECONDS(){return Yl}static get DATETIME_HUGE(){return Jl}static get DATETIME_HUGE_WITH_SECONDS(){return Kl}}function ar(t){if(M.isDateTime(t))return t;if(t&&t.valueOf&&ft(t.valueOf()))return M.fromJSDate(t);if(t&&typeof t=="object")return M.fromObject(t);throw new se(`Unknown datetime argument: ${t}, of type ${typeof t}`)}const km=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function mr(t,e){return t?km.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function gt(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Mm(t){return gt(t).map(e=>t[e])}function Tm(t,e){return t.includes(e)}function xm(t){return!!t}var xs;(function(t){t.Upper="upper",t.Lower="lower"})(xs||(xs={}));var As;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(As||(As={}));function Am(t){return t?t.map(Oc).filter(xm).join(`
`):""}function Oc(t){return t?t instanceof Error?t.message:mr(t,"message")?String(t.message):String(t):""}function Bt(t){return!!t&&typeof t=="object"}function Nc(t,e){let r=!1;const n=gt(t).reduce((i,a)=>{const s=e(a,t[a],t);return s instanceof Promise&&(r=!0),{...i,[a]:s}},{});return r?new Promise(async(i,a)=>{try{await Promise.all(gt(n).map(async s=>{const o=await n[s];n[s]=o})),i(n)}catch(s){a(s)}}):n}function Cm(t,e){try{return Lm(t,e),!0}catch{return!1}}function Lm(t,e,r){if(t.length<e)throw new Error(r?`'${r}' is not at least '${e}' in length.`:`Array is not at least '${e}' in length.`)}function Om(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}Om();function Nm(t,e){var o;const r=e==null?void 0:e.constructor,n=(o=t==null?void 0:t.constructor)==null?void 0:o.prototype,i=(t==null?void 0:t.constructor)===r,a=r&&n?n instanceof r:!1,s=i||a;return mn(t)===mn(e)&&s}const Ic="__vir__shape__definition__key__do__not__use__in__actual__objects";function _c(t){return mr(t,Ic)}const Pc=Symbol("and"),Rc=Symbol("instance"),Dc=Symbol("enum"),Vc=Symbol("exact"),wa=Symbol("indexed-keys"),Hc=Symbol("or"),ya=Symbol("unknown"),Im=[Pc,Dc,Vc,wa,Rc,Hc,ya],Bc="__vir__shape__specifier__key__do__not__use__in__actual__objects";function Fc(...t){return zc(t,wa)}function _m(t){return zc([t],ya)}function Vn(t){return $t(t,Pc)}function Hn(t){return $t(t,Rc)}function Bn(t){return $t(t,Dc)}function Fn(t){return $t(t,Vc)}function zn(t){return $t(t,wa)}function Dr(t){return $t(t,Hc)}function Wn(t){return $t(t,ya)}function $t(t,e){const r=Vr(t);return!!r&&r.specifierType===e}function zc(t,e){return{[Bc]:!0,specifierType:e,parts:t}}function ut(t,e,r,n){const i=Vr(e);if(i){if(Hn(i))return t instanceof i.parts[0];if(Vn(i))return i.parts.every(a=>ut(t,a));if(Dr(i))return i.parts.some(a=>ut(t,a));if(Fn(i))return Bt(t)?ut(t,i.parts[0]):t===i.parts[0];if(Bn(i))return Object.values(i.parts[0]).some(a=>a===t);if(zn(i))return Bt(t)?Pm(t,i,!!r)&&Mm(t).every(a=>ut(a,i.parts[0].values)):!1;if(Wn(i))return!0}return n?e===t:Nm(t,e)}function Pm(t,e,r){const n=e.parts[0].required,i=e.parts[0].keys;if(r)if(n){const a=ba(e);return B(a,"boolean")?a:a.every(s=>gt(t).some(o=>ut(o,s,!1,!0)))}else return!0;else return gt(t).every(a=>ut(a,i))}function ba(t){const e=t.parts[0].keys,r=Vr(e);if(ti(e))return[e];if(r){if(Hn(r))return!1;if(Vn(r))return!1;if(Dr(r)){const n=r.parts.map(a=>ba(Fc({...t.parts[0],keys:a})));let i;return n.forEach(a=>{B(a,"boolean")&&(a&&i==null?i=!0:i=!1)}),B(i,"boolean")?i:n.flat().filter(ti)}else if(Fn(r)){const n=r.parts.filter(ti);return n.length!==r.parts.length?!1:n}else{if(Bn(r))return Object.values(r.parts[0]);if(zn(r))return!1;if(Wn(r))return!0}}return!1}function Vr(t){if(Bt(t)&&mr(t,Bc)){if(!mr(t,"parts")||!B(t.parts,"array"))throw new Error("Found a shape specifier but its parts are not valid.");if(!mr(t,"specifierType")||!Tm(Im,t.specifierType))throw new Error("Found a shape specifier but its specifier type is not valid.");return t}}class Cs extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DefaultValueConstructionError"})}}function Ui(t,e=!1){return ur(t)}function ur(t){const e=Vr(t);if(e)if(Hn(e)){const r=e.parts[0];try{return new r}catch(n){throw new Cs(`Failed to create default value for classShape for class '${r.name}': ${Oc(n)}`)}}else{if(Dr(e)||Fn(e))return ur(e.parts[0]);if(Vn(e))return e.parts.reduce((r,n)=>Object.assign(r,ur(n)),{});if(Bn(e))return Object.values(e.parts[0])[0];if(zn(e)){const r=ba(e);return!e.parts[0].required||B(r,"boolean")?{}:Object.fromEntries(r.map(n=>[n,ur(e.parts[0].values)]))}else{if(Wn(e))return e.parts[0]??{};throw new Cs(`found specifier but it matches no expected specifiers: ${String(e.specifierType)}`)}}return _c(t)?Ui(t.shape):t instanceof RegExp?t:B(t,"array")?t.map(ur):Bt(t)?Nc(t,(r,n)=>Ui(n)):t}function va(t,e=!1){return{shape:t,get runTimeType(){throw new Error("runTimeType cannot be used as a value, it is only for types.")},isReadonly:e,get defaultValue(){return Ui(t)},[Ic]:!0}}class pe extends TypeError{constructor(){super(...arguments),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ShapeMismatchError"})}}function Rm(t,e,r={}){try{return Dm(t,e,r),!0}catch{return!1}}function Dm(t,e,r={}){_e({subject:t,shape:e.shape,keys:["top level"],options:{exactValues:!1,ignoreExtraKeys:!!r.allowExtraKeys}})}function ji(t){return[t[0],...t.slice(1).map(e=>`'${String(e)}'`)].join(" -> ")}function _e({subject:t,shape:e,keys:r,options:n}){if(Wn(e))return!0;if(_c(e))return _e({subject:t,shape:e.shape,keys:r,options:n});const i=ji(r);if(Vr(t))throw new pe(`Shape test subjects cannot be contain shape specifiers but one was found at ${i}.`);if(!ut(t,e,!n.ignoreExtraKeys))throw new pe(`Subject does not match shape definition at key ${i}`);if(B(e,"function"))return B(t,"function");if(Hn(e))return t instanceof e.parts[0];if(Bt(t)){const s=t,o=n.ignoreExtraKeys?{}:Object.fromEntries(Object.keys(s).map(d=>[d,!1])),l=[];let c=!1;if(Dr(e)){const d=[];c=e.parts.some(u=>{try{const f=_e({subject:t,shape:u,keys:r,options:{...n}});return Object.assign(o,f),!0}catch(f){if(f instanceof pe)return d.push(f),!1;throw f}}),!c&&Cm(d,1)&&l.push(d[0])}else if(Vn(e))c=e.parts.every(d=>{try{const u=_e({subject:t,shape:d,keys:r,options:{...n,ignoreExtraKeys:!0}});return Object.assign(o,u),!0}catch(u){if(u instanceof pe)return l.push(u),!1;throw u}});else if(Fn(e)){const d=_e({subject:t,shape:e.parts[0],keys:r,options:{...n,exactValues:!0}});Object.assign(o,d),c=!0}else{if(Bn(e))throw new pe(`Cannot compare an enum specifier to an object at ${i}`);if(B(e,"array")&&B(s,"array"))c=s.every((d,u)=>{const f=e.some(h=>{try{return _e({subject:d,shape:h,keys:[...r,u],options:n}),!0}catch(m){if(m instanceof pe)return l.push(m),!1;throw m}});return o[u]=f,f});else if(zn(e)){const d=Nc(t,(u,f)=>(n.ignoreExtraKeys||_e({shape:e.parts[0].keys,subject:u,keys:[...r,u],options:n}),_e({shape:e.parts[0].values,subject:f,keys:[...r,u],options:n}),!0));Object.assign(o,d),c=!0}else{const d=Vm({keys:r,options:n,shape:e,subject:t});Object.assign(o,d),c=!0}}if(l.length)throw new pe(Am(l));if(!c){const u=`Failed on key(s): ${Object.keys(o).filter(f=>!o[f]).map(f=>ji([...r,f])).join(",")}`;throw new pe(u)}return n.ignoreExtraKeys||Object.entries(o).forEach(([d,u])=>{if(!u)throw new pe(`subject as extra key '${d}' in ${i}.`)}),o}else if(n.exactValues)return t===e;return!0}function Vm({keys:t,options:e,shape:r,subject:n}){const i=ji(t),a={};if(Bt(r)){const s=new Set(gt(r)),o=new Set(gt(n));s.forEach(l=>{l in n&&o.add(l)}),e.ignoreExtraKeys||o.forEach(l=>{if(!s.has(l))throw new pe(`Subject has extra key '${String(l)}' in ${i}`)}),s.forEach(l=>{var f;const c=r[l],d=Dr(c)?c.parts.includes(void 0):!1,u=((f=c==null?void 0:c.includes)==null?void 0:f.call(c,void 0))||c===void 0;if(!o.has(l)&&!d&&!u)throw new pe(`Subject missing key '${String(l)}' in ${i}`)}),o.forEach(l=>{const c=n[l];if(e.ignoreExtraKeys&&!s.has(l))return;const d=r[l];_e({subject:c,shape:d,keys:[...t,l],options:e}),a[l]=!0})}else throw new pe(`shape definition at ${i} was not an object.`);return a}const Hm=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/La_Paz","America/Lima","America/Los_Angeles","America/Maceio","America/Managua","America/Manaus","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Sitka","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","CET","CST6CDT","EET","EST","EST5EDT","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","Factory","HST","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","MET","MST","MST7MDT","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Wake","Pacific/Wallis","UTC","WET"],Bm=Hm.reduce((t,e)=>(t[e]=e,t),{});W.defaultZone.name;Bm.UTC;var Ls;(function(t){t.Date="date",t.Time="time",t.DateTime="datetime-local"})(Ls||(Ls={}));const Fm=["hour","minute","second","millisecond"];var A;(function(t){t.Years="years",t.Quarters="quarters",t.Months="months",t.Weeks="weeks",t.Days="days",t.Hours="hours",t.Minutes="minutes",t.Seconds="seconds",t.Milliseconds="milliseconds"})(A||(A={}));A.Milliseconds+"",A.Seconds+"",A.Minutes+"",A.Hours+"",A.Days+"",A.Weeks+"",A.Months+"",A.Quarters+"",A.Years+"";A.Milliseconds,A.Seconds,A.Minutes,A.Hours,A.Days,A.Weeks,A.Months,A.Quarters,A.Years;A.Years+"",A.Quarters+"",A.Months+"",A.Weeks+"",A.Days+"",A.Hours+"",A.Minutes+"",A.Seconds+"",A.Milliseconds+"";var Os;(function(t){t.AdditiveUnits="additive-units",t.EquivalentUnits="equivalent-units"})(Os||(Os={}));const zm={year:0,month:1,day:1,hour:0,minute:0,second:0,millisecond:0};Sf(zm,Fm);W.defaultLocale;A.Milliseconds+"",A.Seconds+"",A.Minutes+"",A.Hours+"",A.Days+"",A.Weeks+"",A.Months+"",A.Quarters+"",A.Years+"";const Wm=va({listen(t){return()=>!1},destroy(){},removeListener(t){return!1},value:_m()});function ui(t){return Rm(t,Wm,{allowExtraKeys:!0})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cn=globalThis,$a=cn.ShadowRoot&&(cn.ShadyCSS===void 0||cn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ea=Symbol(),Ns=new WeakMap;let Wc=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Ea)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if($a&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Ns.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ns.set(r,e))}return e}toString(){return this.cssText}};const J=t=>new Wc(typeof t=="string"?t:t+"",void 0,Ea),un=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,i,a)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new Wc(r,t,Ea)},Um=(t,e)=>{if($a)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),i=cn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,t.appendChild(n)}},Is=$a?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return J(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:jm,defineProperty:Gm,getOwnPropertyDescriptor:qm,getOwnPropertyNames:Zm,getOwnPropertySymbols:Ym,getPrototypeOf:Jm}=Object,Ge=globalThis,_s=Ge.trustedTypes,Km=_s?_s.emptyScript:"",di=Ge.reactiveElementPolyfillSupport,pr=(t,e)=>t,vn={toAttribute(t,e){switch(e){case Boolean:t=t?Km:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Sa=(t,e)=>!jm(t,e),Ps={attribute:!0,type:String,converter:vn,reflect:!1,hasChanged:Sa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ge.litPropertyMetadata??(Ge.litPropertyMetadata=new WeakMap);let _t=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Ps){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,r);i!==void 0&&Gm(this.prototype,e,i)}}static getPropertyDescriptor(e,r,n){const{get:i,set:a}=qm(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const o=i==null?void 0:i.call(this);a.call(this,s),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ps}static _$Ei(){if(this.hasOwnProperty(pr("elementProperties")))return;const e=Jm(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pr("properties"))){const r=this.properties,n=[...Zm(r),...Ym(r)];for(const i of n)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,i]of r)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const i=this._$Eu(r,n);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)r.unshift(Is(i))}else e!==void 0&&r.push(Is(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Um(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EC(e,r){var a;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:vn).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,r){var a;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=n.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:vn;this._$Em=i,this[i]=o.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(e,r,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Sa)(this[e],r))return;this.P(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,n){this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,s]of i)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],s)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}};_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},_t[pr("elementProperties")]=new Map,_t[pr("finalized")]=new Map,di==null||di({ReactiveElement:_t}),(Ge.reactiveElementVersions??(Ge.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=globalThis,$n=gr.trustedTypes,Rs=$n?$n.createPolicy("lit-html",{createHTML:t=>t}):void 0,ka="$lit$",Re=`lit$${(Math.random()+"").slice(9)}$`,Ma="?"+Re,Xm=`<${Ma}>`,wt=document,vr=()=>wt.createComment(""),$r=t=>t===null||typeof t!="object"&&typeof t!="function",Uc=Array.isArray,jc=t=>Uc(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",fi=`[ 	
\f\r]`,sr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ds=/-->/g,Vs=/>/g,it=RegExp(`>|${fi}(?:([^\\s"'>=/]+)(${fi}*=${fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hs=/'/g,Bs=/"/g,Gc=/^(?:script|style|textarea|title)$/i,Qm=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),e0=Qm(1),xe=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Fs=new WeakMap,dt=wt.createTreeWalker(wt,129);function qc(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rs!==void 0?Rs.createHTML(e):e}const Zc=(t,e)=>{const r=t.length-1,n=[];let i,a=e===2?"<svg>":"",s=sr;for(let o=0;o<r;o++){const l=t[o];let c,d,u=-1,f=0;for(;f<l.length&&(s.lastIndex=f,d=s.exec(l),d!==null);)f=s.lastIndex,s===sr?d[1]==="!--"?s=Ds:d[1]!==void 0?s=Vs:d[2]!==void 0?(Gc.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=it):d[3]!==void 0&&(s=it):s===it?d[0]===">"?(s=i??sr,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?it:d[3]==='"'?Bs:Hs):s===Bs||s===Hs?s=it:s===Ds||s===Vs?s=sr:(s=it,i=void 0);const h=s===it&&t[o+1].startsWith("/>")?" ":"";a+=s===sr?l+Xm:u>=0?(n.push(c),l.slice(0,u)+ka+l.slice(u)+Re+h):l+Re+(u===-2?o:h)}return[qc(t,a+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};class Er{constructor({strings:e,_$litType$:r},n){let i;this.parts=[];let a=0,s=0;const o=e.length-1,l=this.parts,[c,d]=Zc(e,r);if(this.el=Er.createElement(c,n),dt.currentNode=this.el.content,r===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=dt.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(ka)){const f=d[s++],h=i.getAttribute(u).split(Re),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:m[2],strings:h,ctor:m[1]==="."?Jc:m[1]==="?"?Kc:m[1]==="@"?Xc:Hr}),i.removeAttribute(u)}else u.startsWith(Re)&&(l.push({type:6,index:a}),i.removeAttribute(u));if(Gc.test(i.tagName)){const u=i.textContent.split(Re),f=u.length-1;if(f>0){i.textContent=$n?$n.emptyScript:"";for(let h=0;h<f;h++)i.append(u[h],vr()),dt.nextNode(),l.push({type:2,index:++a});i.append(u[f],vr())}}}else if(i.nodeType===8)if(i.data===Ma)l.push({type:2,index:a});else{let u=-1;for(;(u=i.data.indexOf(Re,u+1))!==-1;)l.push({type:7,index:a}),u+=Re.length-1}a++}}static createElement(e,r){const n=wt.createElement("template");return n.innerHTML=e,n}}function yt(t,e,r=t,n){var s,o;if(e===xe)return e;let i=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const a=$r(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),a===void 0?i=void 0:(i=new a(t),i._$AT(t,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=i:r._$Cl=i),i!==void 0&&(e=yt(t,i._$AS(t,e.values),i,n)),e}class Yc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??wt).importNode(r,!0);dt.currentNode=i;let a=dt.nextNode(),s=0,o=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new er(a,a.nextSibling,this,e):l.type===1?c=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(c=new Qc(a,this,e)),this._$AV.push(c),l=n[++o]}s!==(l==null?void 0:l.index)&&(a=dt.nextNode(),s++)}return dt.currentNode=wt,i}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class er{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,n,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=yt(this,e,r),$r(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==xe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==j&&$r(this._$AH)?this._$AA.nextSibling.data=e:this.T(wt.createTextNode(e)),this._$AH=e}$(e){var a;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Er.createElement(qc(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(r);else{const s=new Yc(i,this),o=s.u(this.options);s.p(r),this.T(o),this._$AH=s}}_$AC(e){let r=Fs.get(e.strings);return r===void 0&&Fs.set(e.strings,r=new Er(e)),r}k(e){Uc(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const a of e)i===r.length?r.push(n=new er(this.S(vr()),this.S(vr()),this,this.options)):n=r[i],n._$AI(a),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,i,a){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(e,r=this,n,i){const a=this.strings;let s=!1;if(a===void 0)e=yt(this,e,r,0),s=!$r(e)||e!==this._$AH&&e!==xe,s&&(this._$AH=e);else{const o=e;let l,c;for(e=a[0],l=0;l<a.length-1;l++)c=yt(this,o[n+l],r,l),c===xe&&(c=this._$AH[l]),s||(s=!$r(c)||c!==this._$AH[l]),c===j?e=j:e!==j&&(e+=(c??"")+a[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Jc extends Hr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class Kc extends Hr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class Xc extends Hr{constructor(e,r,n,i,a){super(e,r,n,i,a),this.type=5}_$AI(e,r=this){if((e=yt(this,e,r,0)??j)===xe)return;const n=this._$AH,i=e===j&&n!==j||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==j&&(n===j||i);i&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Qc{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}}const t0={P:ka,A:Re,C:Ma,M:1,L:Zc,R:Yc,D:jc,V:yt,I:er,H:Hr,N:Kc,U:Xc,B:Jc,F:Qc},hi=gr.litHtmlPolyfillSupport;hi==null||hi(Er,er),(gr.litHtmlVersions??(gr.litHtmlVersions=[])).push("3.1.2");const r0=(t,e,r)=>{const n=(r==null?void 0:r.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const a=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new er(e.insertBefore(vr(),a),a,void 0,r??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wr=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=r0(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return xe}};var $l;wr._$litElement$=!0,wr.finalized=!0,($l=globalThis.litElementHydrateSupport)==null||$l.call(globalThis,{LitElement:wr});const mi=globalThis.litElementPolyfillSupport;mi==null||mi({LitElement:wr});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:n0}=t0,zs=()=>document.createComment(""),or=(t,e,r)=>{var a;const n=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(r===void 0){const s=n.insertBefore(zs(),i),o=n.insertBefore(zs(),i);r=new n0(s,o,t,t.options)}else{const s=r._$AB.nextSibling,o=r._$AM,l=o!==t;if(l){let c;(a=r._$AQ)==null||a.call(r,t),r._$AM=t,r._$AP!==void 0&&(c=t._$AU)!==o._$AU&&r._$AP(c)}if(s!==i||l){let c=r._$AA;for(;c!==s;){const d=c.nextSibling;n.insertBefore(c,i),c=d}}}return r},at=(t,e,r=t)=>(t._$AI(e,r),t),i0={},a0=(t,e=i0)=>t._$AH=e,s0=t=>t._$AH,pi=t=>{var n;(n=t._$AP)==null||n.call(t,!1,!0);let e=t._$AA;const r=t._$AB.nextSibling;for(;e!==r;){const i=e.nextSibling;e.remove(),e=i}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tr=t=>(...e)=>({_$litDirective$:t,values:e});class Et{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o0={attribute:!0,type:String,converter:vn,reflect:!1,hasChanged:Sa},l0=(t=o0,e,r)=>{const{kind:n,metadata:i}=r;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(r.name,t),n==="accessor"){const{name:s}=r;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(s,l,t)},init(o){return o!==void 0&&this.P(s,void 0,t),o}}}if(n==="setter"){const{name:s}=r;return function(o){const l=this[s];e.call(this,o),this.requestUpdate(s,l,t)}}throw Error("Unsupported decorator location: "+n)};function c0(t){return(e,r)=>typeof r=="object"?l0(t,e,r):((n,i,a)=>{const s=i.hasOwnProperty(a);return i.constructor.createProperty(a,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(i,a):void 0})(t,e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eu=tr(class extends Et{constructor(t){var e;if(super(t),t.type!==Un.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!((n=this.nt)!=null&&n.has(a))&&this.st.add(a);return this.render(e)}const r=t.element.classList;for(const a of this.st)a in e||(r.remove(a),this.st.delete(a));for(const a in e){const s=!!e[a];s===this.st.has(a)||(i=this.nt)!=null&&i.has(a)||(s?(r.add(a),this.st.add(a)):(r.remove(a),this.st.delete(a)))}return xe}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Gi extends Et{constructor(e){if(super(e),this.it=j,e.type!==Un.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===j||e==null)return this._t=void 0,this.it=e;if(e===xe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Gi.directiveName="unsafeHTML",Gi.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ws extends Gi{}Ws.directiveName="unsafeSVG",Ws.resultType=2;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function u0(t,e,r){return t?e(t):r==null?void 0:r(t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=(t,e,r)=>{const n=new Map;for(let i=e;i<=r;i++)n.set(t[i],i);return n},d0=tr(class extends Et{constructor(t){if(super(t),t.type!==Un.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,r){let n;r===void 0?r=e:e!==void 0&&(n=e);const i=[],a=[];let s=0;for(const o of t)i[s]=n?n(o,s):s,a[s]=r(o,s),s++;return{values:a,keys:i}}render(t,e,r){return this.dt(t,e,r).values}update(t,[e,r,n]){const i=s0(t),{values:a,keys:s}=this.dt(e,r,n);if(!Array.isArray(i))return this.ut=s,a;const o=this.ut??(this.ut=[]),l=[];let c,d,u=0,f=i.length-1,h=0,m=a.length-1;for(;u<=f&&h<=m;)if(i[u]===null)u++;else if(i[f]===null)f--;else if(o[u]===s[h])l[h]=at(i[u],a[h]),u++,h++;else if(o[f]===s[m])l[m]=at(i[f],a[m]),f--,m--;else if(o[u]===s[m])l[m]=at(i[u],a[m]),or(t,l[m+1],i[u]),u++,m--;else if(o[f]===s[h])l[h]=at(i[f],a[h]),or(t,i[u],i[f]),f--,h++;else if(c===void 0&&(c=Us(s,h,m),d=Us(o,u,f)),c.has(o[u]))if(c.has(o[f])){const w=d.get(s[h]),b=w!==void 0?i[w]:null;if(b===null){const $=or(t,i[u]);at($,a[h]),l[h]=$}else l[h]=at(b,a[h]),or(t,i[u],b),i[w]=null;h++}else pi(i[f]),f--;else pi(i[u]),u++;for(;h<=m;){const w=or(t,l[m+1]);at(w,a[h]),l[h++]=w}for(;u<=f;){const w=i[u++];w!==null&&pi(w)}return this.ut=s,a0(t,l),xe}}),f0=d0;class tu extends wr{}function js(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}var Ft;(function(t){t.Upper="upper",t.Lower="lower"})(Ft||(Ft={}));function h0(t){return t.toLowerCase()!==t.toUpperCase()}function Gs(t,e,r){if(!t&&(r!=null&&r.blockNoCaseCharacters))return!1;for(let n=0;n<t.length;n++){const i=t[n]||"";if(!h0(i)){if(r!=null&&r.blockNoCaseCharacters)return!1;continue}if(e===Ft.Upper&&i!==i.toUpperCase())return!1;if(e===Ft.Lower&&i!==i.toLowerCase())return!1}return!0}function m0(t){return t.split("").reduce((r,n,i,a)=>{const s=i>0&&a[i-1]||"",o=i<a.length-1&&a[i+1]||"",l=Gs(s,Ft.Lower,{blockNoCaseCharacters:!0})||Gs(o,Ft.Lower,{blockNoCaseCharacters:!0});return n===n.toLowerCase()||i===0||!l?r+=n:r+=`-${n.toLowerCase()}`,r},"").toLowerCase()}var qs;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(qs||(qs={}));function p0(t){return!!t&&typeof t=="object"}function g0(t,e){let r=!1;const n=js(t).reduce((i,a)=>{const s=e(a,t[a],t);return s instanceof Promise&&(r=!0),{...i,[a]:s}},{});return r?new Promise(async(i,a)=>{try{await Promise.all(js(n).map(async s=>{const o=await n[s];n[s]=o})),i(n)}catch(s){a(s)}}):n}function w0(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}w0();function St(t){if(p0(t))return g0(t,(r,n)=>{if(!B(r,"string"))throw new Error(`Invalid CSS var name '${String(r)}' given. CSS var names must be strings.`);if(m0(r).toLowerCase()!==r)throw new Error(`Invalid CSS var name '${r}' given. CSS var names must be in lower kebab case.`);const a=n,s=r.startsWith("--")?J(r):r.startsWith("-")?un`-${J(r)}`:un`--${J(r)}`;return{name:s,value:un`var(${s}, ${J(a)})`,default:String(a)}});throw new Error(`Invalid setup input for '${St.name}' function.`)}function y0({onElement:t,toValue:e,forCssVar:r}){t.style.setProperty(String(r.name),String(e))}function b0(t,e,r){const n=!e.length&&!r.length,i=t.length?!1:!e.filter(o=>!!o.index).length;if(n||i)return[...t];const a=t.map(o=>[o]);return a.length||(a[0]=[]),r.forEach(o=>{o>=0&&o<t.length&&(a[o]=[])}),e.forEach(o=>{const l=a[o.index];l&&l.splice(0,0,...o.values)}),a.flat()}function dn(t){return Zt(t,"_elementVirIsMinimalDefinitionWithInputs")&&!!t._elementVirIsMinimalDefinitionWithInputs}function Ta(t){return Zt(t,"tagName")&&!!t.tagName&&typeof t.tagName=="string"}function ru(t){return Dd(t,e=>{if(dn(e))return e.definition;if(Ta(e))return e.tagInterpolationKey||e},Nr)}const nu=new WeakMap;function v0(t,e){var i;const r=ru(e);return(i=iu(nu,[t,...r]).value)==null?void 0:i.template}function $0(t,e,r){const n=ru(e);return su(nu,[t,...n],r)}function iu(t,e,r=0){const{currentTemplateAndNested:n,reason:i}=au(t,e,r);return n?r===e.length-1?{value:n,reason:"reached end of keys array"}:n.nested?iu(n.nested,e,r+1):{value:void 0,reason:`map at key index ${r} did not have nested maps`}:{value:n,reason:i}}function au(t,e,r){const n=e[r];if(n==null)return{currentKey:void 0,currentTemplateAndNested:void 0,reason:`key at index ${r} not found`};if(!t.has(n))return{currentKey:n,currentTemplateAndNested:void 0,reason:`key at index ${r} was not in the map`};const i=t.get(n);return i==null?{currentKey:n,currentTemplateAndNested:void 0,reason:`value at key at index ${r} was undefined`}:{currentKey:n,currentTemplateAndNested:i,reason:"key and value exists"}}function su(t,e,r,n=0){const{currentTemplateAndNested:i,currentKey:a,reason:s}=au(t,e,n);if(!a)return{result:!1,reason:s};const o=i??{nested:void 0,template:void 0};if(i||t.set(a,o),n===e.length-1)return o.template=r,{result:!0,reason:"set value at end of keys array"};const l=o.nested??new WeakMap;return o.nested||(o.nested=l),su(l,e,r,n+1)}const E0=new WeakMap;function ou(t,e,r){const n=v0(t,e),i=n??r();if(!n){const o=$0(t,e,i);if(o.result)E0.set(t,i);else throw new Error(`Failed to set template transform: ${o.reason}`)}const a=i.valuesTransform(e),s=b0(e,a.valueInsertions,a.valueIndexDeletions);return{strings:i.templateStrings,values:s}}function lu(t,e,r,n){const i=[],a=[],s=[],o=[];return t.forEach((c,d)=>{const u=i.length-1,f=i[u],h=d-1,m=e[h];n&&n(c);let w,b=[];if(typeof f=="string"&&(w=r(f,c,m),w)){i[u]=f+w.replacement,s.push(h);const S=w.getExtraValues;b=S?S(m):[],b.length&&S?(i[u]+=" ",b.forEach((C,D)=>{D&&i.push(" ")}),o.push(C=>{const D=C[h],ne=S(D);return{index:h,values:ne}}),i.push(c)):i[u]+=c}w||i.push(c);const $=t.raw[d];w?(a[u]=a[u]+w.replacement+$,b.length&&b.forEach(()=>{a.push("")})):a.push($)}),{templateStrings:Object.assign([],i,{raw:a}),valuesTransform(c){const d=o.map(u=>u(c)).flat();return{valueIndexDeletions:s,valueInsertions:d}}}}function S0(...[t,e,r]){if(Ta(r))return{replacement:r.tagName,getExtraValues:void 0}}function k0(t,e){return lu(t,e,S0)}function y(t,...e){const r=ou(t,e,()=>k0(t,e));return un(r.strings,...r.values)}const M0={ignoreUnsetInputs:!0,allowPolymorphicState:!1};function cu(t){const e=t.getRootNode();if(!(e instanceof ShadowRoot))return!1;const r=e.host;return r instanceof tu?!0:cu(r)}function uu(t,e){const r=t.instanceState;be(e).forEach(n=>{if(r&&n in r)throw new Error(`Cannot set input '${n}' on '${t.tagName}'. '${t.tagName}' already has a state property with the same name.`);"instanceInputs"in t?t.instanceInputs[n]=e[n]:t[n]=e[n]}),"instanceInputs"in t&&be(t.instanceInputs).forEach(n=>{n in e||(t.instanceInputs[n]=void 0)}),T0(t)}function T0(t){t._haveInputsBeenSet||(t._haveInputsBeenSet=!0)}function Zs(t,e){const r=[t,"-"].join("");Object.keys(e).forEach(n=>{if(!n.startsWith(r))throw new Error(`Invalid CSS property name '${n}' in '${t}': CSS property names must begin with the element's tag name.`)})}class x0 extends CustomEvent{get type(){return this._type}constructor(e,r){super(typeof e=="string"?e:e.type,{detail:r,bubbles:!0,composed:!0}),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:""})}}function xa(){return t=>{var e;return e=class extends x0{constructor(r){super(t,r),Object.defineProperty(this,"_type",{enumerable:!0,configurable:!0,writable:!0,value:t})}},Object.defineProperty(e,"type",{enumerable:!0,configurable:!0,writable:!0,value:t}),e}}function Ve(){return xa()}function A0(t,e){return e?Object.keys(e).filter(r=>{if(typeof r!="string")throw new Error(`Expected event key of type string but got type "${typeof r}" for key ${String(r)}`);if(r==="")throw new Error("Got empty string for events key.");return!0}).reduce((r,n)=>{const i=xa()([t,n].join("-"));return r[n]=i,r},{}):{}}function C0(t){return t?pt(t,e=>e):{}}const du=Symbol("element-vir-state-setup");function L0(t){return Pi(t)?du in t:!1}function fu(t,e){e in t||c0()(t,e)}function O0(t,e,r){if(typeof t!="string"&&typeof t!="number"&&typeof t!="symbol")throw new Error(`Property name must be a string, got type '${typeof t}' from: '${String(t)}' for '${r.toLowerCase()}'`);if(!(t in e))throw new Error(`Property '${String(t)}' does not exist on '${r.toLowerCase()}'.`)}function Ys(t,e){const r=t;function n(s){e?O0(s,t,t.tagName):fu(t,s)}function i(s,o){return n(o),r[o]}return new Proxy({},{get:i,set(s,o,l){const c=L0(l)?l[du]():l;n(o);const d=r[o];function u(m){s[o]=m,r[o]=m}const f=t.observablePropertyListenerMap[o];if(d!==c&&ui(d)&&f&&d.removeListener(f),ui(c))if(f)c.listen(f);else{let m=function(){t.requestUpdate()};var h=m;t.observablePropertyListenerMap[o]=m,c.listen(m)}else ui(d)&&(t.observablePropertyListenerMap[o]=void 0);return u(c),!0},ownKeys(s){return Reflect.ownKeys(s)},getOwnPropertyDescriptor(s,o){if(o in s)return{get value(){return i(s,o)},configurable:!0,enumerable:!0}},has(s,o){return Reflect.has(s,o)}})}function N0({hostClassNames:t,cssVars:e}){return{hostClasses:pt(t,(r,n)=>({name:J(n),selector:J(`:host(.${n})`)})),cssVars:e}}function I0({host:t,hostClassesInit:e,hostClassNames:r,state:n,inputs:i}){e&&be(e).forEach(a=>{const s=e[a],o=r[a];typeof s=="function"&&(s({state:n,inputs:i})?t.classList.add(o):t.classList.remove(o))})}function _0({element:t,eventsMap:e,cssVars:r,slotNamesMap:n}){function i(s){be(s).forEach(o=>{const l=s[o];t.instanceState[o]=l})}return{cssVars:r,slotNames:n,dispatch:s=>t.dispatchEvent(s),events:e,host:t,inputs:t.instanceInputs,state:t.instanceState,updateState:i}}function P0(t){return t?t.reduce((r,n)=>(r[n]=n,r),{}):{}}var R0=globalThis&&globalThis.__setFunctionName||function(t,e,r){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:r?"".concat(r," ",e):e})};function jn(t){var e;const r=t;if(!B(r,"object"))throw new Error("Cannot define element with non-object init: ${init}");if(!B(r.tagName,"string"))throw new Error("Missing valid tagName (expected a string).");if(!r.renderCallback||typeof r.renderCallback=="string")throw new Error(`Failed to define element '${r.tagName}': renderCallback is not a function`);const n={...M0,...r.options},i=A0(r.tagName,r.events),a=C0(r.hostClasses);r.hostClasses&&Zs(r.tagName,r.hostClasses),r.cssVars&&Zs(r.tagName,r.cssVars);const s=r.cssVars?St(r.cssVars):{},o=P0(r.slotNames),l=typeof r.styles=="function"?r.styles(N0({hostClassNames:a,cssVars:s})):r.styles||y``,c=r.renderCallback;function d(...[f]){return{_elementVirIsMinimalDefinitionWithInputs:!0,definition:u,inputs:f}}const u=(e=class extends tu{createRenderParams(){return _0({element:this,eventsMap:i,cssVars:s,slotNamesMap:o})}get instanceType(){throw new Error(`"instanceType" was called on ${r.tagName} as a value but it is only for types.`)}static get inputsType(){throw new Error(`"inputsType" was called on ${r.tagName} as a value but it is only for types.`)}static get stateType(){throw new Error(`"stateType" was called on ${r.tagName} as a value but it is only for types.`)}render(){this._internalRenderCount++;try{cu(this)&&!this._haveInputsBeenSet&&!n.ignoreUnsetInputs&&console.warn(this,`${r.tagName} got rendered before its input object was set. This was most likely caused by forgetting to use '.assign()' on its opening tag. If no inputs are intended, use '${jn.name}' to define ${r.tagName}.`),this._hasRendered=!0;const f=this.createRenderParams();if(!this._initCalled&&r.initCallback&&(this._initCalled=!0,r.initCallback(f)instanceof Promise))throw new Error("initCallback cannot be asynchronous");const h=c(f);if(h instanceof Promise)throw new Error("renderCallback cannot be asynchronous");return I0({host:f.host,hostClassesInit:r.hostClasses,hostClassNames:a,state:f.state,inputs:f.inputs}),this._lastRenderedProps={inputs:{...f.inputs},state:{...f.state}},h}catch(f){const h=Ud(f,`Failed to render ${r.tagName}`);return console.error(h),this._lastRenderError=h,Yt(h)}}connectedCallback(){if(super.connectedCallback(),this._hasRendered&&!this._initCalled&&r.initCallback){this._initCalled=!0;const f=this.createRenderParams();if(r.initCallback(f)instanceof Promise)throw new Error(`initCallback in '${r.tagName}' cannot be asynchronous`)}}destroy(){Object.values(this.instanceState).forEach(f=>{_i(f,"destroy")&&B(f.destroy,"function")&&f.destroy()})}disconnectedCallback(){if(super.disconnectedCallback(),r.cleanupCallback){const f=this.createRenderParams();if(r.cleanupCallback(f)instanceof Promise)throw new Error(`cleanupCallback in '${r.tagName}' cannot be asynchronous`)}this.destroy(),this._initCalled=!1}assignInputs(f){uu(this,f)}constructor(){super(),Object.defineProperty(this,"_lastRenderError",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_internalRenderCount",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_initCalled",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_hasRendered",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_lastRenderedProps",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_haveInputsBeenSet",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"definition",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"observablePropertyListenerMap",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"instanceInputs",{enumerable:!0,configurable:!0,writable:!0,value:Ys(this,!1)}),Object.defineProperty(this,"instanceState",{enumerable:!0,configurable:!0,writable:!0,value:Ys(this,!n.allowPolymorphicState)});const f=r.stateInitStatic||{};be(f).forEach(h=>{fu(this,h),this.instanceState[h]=f[h]}),this.definition=u}},R0(e,"anonymousClass"),Object.defineProperty(e,"elementOptions",{enumerable:!0,configurable:!0,writable:!0,value:n}),Object.defineProperty(e,"tagName",{enumerable:!0,configurable:!0,writable:!0,value:r.tagName}),Object.defineProperty(e,"styles",{enumerable:!0,configurable:!0,writable:!0,value:l}),Object.defineProperty(e,"assign",{enumerable:!0,configurable:!0,writable:!0,value:d}),Object.defineProperty(e,"isStrictInstance",{enumerable:!0,configurable:!0,writable:!0,value:()=>!1}),Object.defineProperty(e,"events",{enumerable:!0,configurable:!0,writable:!0,value:i}),Object.defineProperty(e,"renderCallback",{enumerable:!0,configurable:!0,writable:!0,value:c}),Object.defineProperty(e,"hostClasses",{enumerable:!0,configurable:!0,writable:!0,value:a}),Object.defineProperty(e,"cssVars",{enumerable:!0,configurable:!0,writable:!0,value:s}),Object.defineProperty(e,"init",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(e,"slotNames",{enumerable:!0,configurable:!0,writable:!0,value:o}),Object.defineProperty(e,"stateInitStatic",{enumerable:!0,configurable:!0,writable:!0,value:r.stateInitStatic}),e);return Object.defineProperties(u,{name:{value:zd(r.tagName,{capitalizeFirstLetter:!0}),writable:!0},isStrictInstance:{value:f=>f instanceof u,writable:!1}}),window.customElements.get(r.tagName)?console.warn(`Tried to define custom element '${r.tagName}' but it is already defined.`):window.customElements.define(r.tagName,u),u}function hu(){return t=>{const e=t;if(!B(e,"object"))throw new Error("Cannot define element with non-object init: ${init}");return jn({...e,options:{ignoreUnsetInputs:!1,...e.options}})}}function mu(t,e){return Sr(t,e),t.element}function D0(t){try{return t.options.host.tagName.toLowerCase()}catch{return}}function Sr(t,e){const r=D0(t),n=r?`: in ${r}`:"";if(t.type!==Un.ELEMENT)throw new Error(`${e} directive can only be attached directly to an element${n}.`);if(!t.element)throw new Error(`${e} directive found no element${n}.`)}function H(t,e){return V0(t,e)}const V0=tr(class extends Et{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lastListenerMetaData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mu(t,"listen")}resetListener(t){this.lastListenerMetaData&&this.element.removeEventListener(this.lastListenerMetaData.eventType,this.lastListenerMetaData.listener),this.element.addEventListener(t.eventType,t.listener),this.lastListenerMetaData=t}createListenerMetaData(t,e){return{eventType:t,callback:e,listener:r=>{var n;return(n=this.lastListenerMetaData)==null?void 0:n.callback(r)}}}render(t,e){const r=typeof t=="string"?t:t.type;if(typeof r!="string")throw new Error(`Cannot listen to an event with a name that is not a string. Given event name: "${r}"`);return this.lastListenerMetaData&&this.lastListenerMetaData.eventType===r?this.lastListenerMetaData.callback=e:this.resetListener(this.createListenerMetaData(r,e)),xe}}),Js="onDomCreated",Ks=tr(class extends Et{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Sr(t,Js)}update(t,[e]){Sr(t,Js);const r=t.element;return r!==this.element&&(requestAnimationFrame(()=>e(r)),this.element=r),this.render(e)}render(t){}}),gi="onResize",pu=tr(class extends Et{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"resizeObserver",{enumerable:!0,configurable:!0,writable:!0,value:new ResizeObserver(e=>this.fireCallback(e))}),Object.defineProperty(this,"callback",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Sr(t,gi)}fireCallback(t){var r;const e=t[0];if(!e)throw console.error(t),new Error(`${gi} observation triggered but the first entry was empty.`);(r=this.callback)==null||r.call(this,{target:e.target,contentRect:e.contentRect},this.element)}update(t,[e]){Sr(t,gi),this.callback=e;const r=t.element,n=this.element;return r!==n&&(this.element=r,n&&this.resizeObserver.unobserve(n),this.resizeObserver.observe(r)),this.render(e)}render(t){}});function ce(t,e,r){return u0(t,()=>e,()=>r)}be({assign:"",assignedInputs:"",cssVars:"",elementOptions:"",events:"",hostClasses:"",init:"",inputsType:"",isStrictInstance:"",renderCallback:"",slotNames:"",stateInitStatic:"",stateType:"",styles:"",tagName:"",updateStateType:""});function gu(t){const{assertInputs:e,transformInputs:r}={assertInputs:(t==null?void 0:t.assertInputs)??(()=>{}),transformInputs:(t==null?void 0:t.transformInputs)??(n=>n)};return{defineElement:()=>n=>(e(n),hu()(r(n))),defineElementNoInputs:n=>(e(n),jn(r(n)))}}function H0(t,e){return e?Xs(t,e):Xs(void 0,t)}const Xs=tr(class extends Et{constructor(t){super(t),Object.defineProperty(this,"element",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.element=mu(t,"assign")}render(t,e){return uu(this.element,e),xe}}),B0={};function F0(t,e){return e.map((r,n)=>{const i=t[n],a=t[n+1];if(i&&a){const{shouldHaveTagNameHere:s}=wu(i,a);if(s&&B(r,"string"))return{tagName:r,tagInterpolationKey:nf(B0,r,()=>({tagName:r}))}}return r})}function wu(t,e){const r=t.trim().endsWith("<")&&!!e.match(/^[\s\n>]/),n=(t==null?void 0:t.trim().endsWith("</"))&&e.trim().startsWith(">");return{isOpeningTag:r,shouldHaveTagNameHere:r||n}}function z0(...[t,e,r]){var l,c,d;const n=dn(r)?r.definition:r,{isOpeningTag:i,shouldHaveTagNameHere:a}=wu(t,e),s=Ta(n);if(s&&a&&n.tagInterpolationKey)return{replacement:n.tagName,getExtraValues:void 0};if(a&&!s)throw console.error({lastNewString:t,currentTemplateString:e,currentValue:n}),new Error(`Got interpolated tag name but found no tag name on the given value: '${(n==null?void 0:n.tagName)||((c=(l=n==null?void 0:n.prototype)==null?void 0:l.constructor)==null?void 0:c.name)||((d=n==null?void 0:n.constructor)==null?void 0:d.name)}'`);if(!a||!s)return;if(i&&n.elementOptions&&!n.elementOptions.ignoreUnsetInputs&&!dn(r))throw new Error(`Missing inputs for '${n.tagName}'`);return{replacement:n.tagName,getExtraValues(u){const f=dn(u)?u.inputs:void 0;return[i&&f?H0(f):void 0].filter(Nr)}}}function W0(t){}function U0(t){return lu(t.strings,t.values,z0,W0)}function p(t,...e){const r=F0(t,e),n=e0(t,...r),i=ou(t,r,()=>U0(n));return{...n,strings:i.strings,values:i.values}}function j0(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function wi(t){return j0(t).map(e=>[e,t[e]])}var Qs;(function(t){t.Upper="upper",t.Lower="lower"})(Qs||(Qs={}));var eo;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(eo||(eo={}));function G0(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}G0();const yu={a:window.HTMLAnchorElement,abbr:window.HTMLElement,address:window.HTMLElement,area:window.HTMLAreaElement,article:window.HTMLElement,aside:window.HTMLElement,audio:window.HTMLAudioElement,b:window.HTMLElement,base:window.HTMLBaseElement,bdi:window.HTMLElement,bdo:window.HTMLElement,blockquote:window.HTMLQuoteElement,body:window.HTMLBodyElement,br:window.HTMLBRElement,button:window.HTMLButtonElement,canvas:window.HTMLCanvasElement,caption:window.HTMLTableCaptionElement,cite:window.HTMLElement,code:window.HTMLElement,col:window.HTMLTableColElement,colgroup:window.HTMLTableColElement,data:window.HTMLDataElement,datalist:window.HTMLDataListElement,dd:window.HTMLElement,del:window.HTMLModElement,details:window.HTMLDetailsElement,dfn:window.HTMLElement,dialog:window.HTMLDialogElement,div:window.HTMLDivElement,dl:window.HTMLDListElement,dt:window.HTMLElement,em:window.HTMLElement,embed:window.HTMLEmbedElement,fieldset:window.HTMLFieldSetElement,figcaption:window.HTMLElement,figure:window.HTMLElement,footer:window.HTMLElement,form:window.HTMLFormElement,h1:window.HTMLHeadingElement,h2:window.HTMLHeadingElement,h3:window.HTMLHeadingElement,h4:window.HTMLHeadingElement,h5:window.HTMLHeadingElement,h6:window.HTMLHeadingElement,head:window.HTMLHeadElement,header:window.HTMLElement,hgroup:window.HTMLElement,hr:window.HTMLHRElement,html:window.HTMLHtmlElement,i:window.HTMLElement,iframe:window.HTMLIFrameElement,img:window.HTMLImageElement,input:window.HTMLInputElement,ins:window.HTMLModElement,kbd:window.HTMLElement,label:window.HTMLLabelElement,legend:window.HTMLLegendElement,li:window.HTMLLIElement,link:window.HTMLLinkElement,main:window.HTMLElement,map:window.HTMLMapElement,mark:window.HTMLElement,menu:window.HTMLMenuElement,meta:window.HTMLMetaElement,meter:window.HTMLMeterElement,nav:window.HTMLElement,noscript:window.HTMLElement,object:window.HTMLObjectElement,ol:window.HTMLOListElement,optgroup:window.HTMLOptGroupElement,option:window.HTMLOptionElement,output:window.HTMLOutputElement,p:window.HTMLParagraphElement,picture:window.HTMLPictureElement,pre:window.HTMLPreElement,progress:window.HTMLProgressElement,q:window.HTMLQuoteElement,rp:window.HTMLElement,rt:window.HTMLElement,ruby:window.HTMLElement,s:window.HTMLElement,samp:window.HTMLElement,script:window.HTMLScriptElement,search:window.HTMLElement,section:window.HTMLElement,select:window.HTMLSelectElement,slot:window.HTMLSlotElement,small:window.HTMLElement,source:window.HTMLSourceElement,span:window.HTMLSpanElement,strong:window.HTMLElement,style:window.HTMLStyleElement,sub:window.HTMLElement,summary:window.HTMLElement,sup:window.HTMLElement,table:window.HTMLTableElement,tbody:window.HTMLTableSectionElement,td:window.HTMLTableCellElement,template:window.HTMLTemplateElement,textarea:window.HTMLTextAreaElement,tfoot:window.HTMLTableSectionElement,th:window.HTMLTableCellElement,thead:window.HTMLTableSectionElement,time:window.HTMLTimeElement,title:window.HTMLTitleElement,tr:window.HTMLTableRowElement,track:window.HTMLTrackElement,u:window.HTMLElement,ul:window.HTMLUListElement,var:window.HTMLElement,video:window.HTMLVideoElement,wbr:window.HTMLElement},q0=Object.keys(yu),bu={annotation:window.MathMLElement,"annotation-xml":window.MathMLElement,maction:window.MathMLElement,math:window.MathMLElement,merror:window.MathMLElement,mfrac:window.MathMLElement,mi:window.MathMLElement,mmultiscripts:window.MathMLElement,mn:window.MathMLElement,mo:window.MathMLElement,mover:window.MathMLElement,mpadded:window.MathMLElement,mphantom:window.MathMLElement,mprescripts:window.MathMLElement,mroot:window.MathMLElement,mrow:window.MathMLElement,ms:window.MathMLElement,mspace:window.MathMLElement,msqrt:window.MathMLElement,mstyle:window.MathMLElement,msub:window.MathMLElement,msubsup:window.MathMLElement,msup:window.MathMLElement,mtable:window.MathMLElement,mtd:window.MathMLElement,mtext:window.MathMLElement,mtr:window.MathMLElement,munder:window.MathMLElement,munderover:window.MathMLElement,semantics:window.MathMLElement},Z0=Object.keys(bu),vu={a:window.SVGAElement,animate:window.SVGAnimateElement,animateMotion:window.SVGAnimateMotionElement,animateTransform:window.SVGAnimateTransformElement,circle:window.SVGCircleElement,clipPath:window.SVGClipPathElement,defs:window.SVGDefsElement,desc:window.SVGDescElement,ellipse:window.SVGEllipseElement,feBlend:window.SVGFEBlendElement,feColorMatrix:window.SVGFEColorMatrixElement,feComponentTransfer:window.SVGFEComponentTransferElement,feComposite:window.SVGFECompositeElement,feConvolveMatrix:window.SVGFEConvolveMatrixElement,feDiffuseLighting:window.SVGFEDiffuseLightingElement,feDisplacementMap:window.SVGFEDisplacementMapElement,feDistantLight:window.SVGFEDistantLightElement,feDropShadow:window.SVGFEDropShadowElement,feFlood:window.SVGFEFloodElement,feFuncA:window.SVGFEFuncAElement,feFuncB:window.SVGFEFuncBElement,feFuncG:window.SVGFEFuncGElement,feFuncR:window.SVGFEFuncRElement,feGaussianBlur:window.SVGFEGaussianBlurElement,feImage:window.SVGFEImageElement,feMerge:window.SVGFEMergeElement,feMergeNode:window.SVGFEMergeNodeElement,feMorphology:window.SVGFEMorphologyElement,feOffset:window.SVGFEOffsetElement,fePointLight:window.SVGFEPointLightElement,feSpecularLighting:window.SVGFESpecularLightingElement,feSpotLight:window.SVGFESpotLightElement,feTile:window.SVGFETileElement,feTurbulence:window.SVGFETurbulenceElement,filter:window.SVGFilterElement,foreignObject:window.SVGForeignObjectElement,g:window.SVGGElement,image:window.SVGImageElement,line:window.SVGLineElement,linearGradient:window.SVGLinearGradientElement,marker:window.SVGMarkerElement,mask:window.SVGMaskElement,metadata:window.SVGMetadataElement,mpath:window.SVGMPathElement,path:window.SVGPathElement,pattern:window.SVGPatternElement,polygon:window.SVGPolygonElement,polyline:window.SVGPolylineElement,radialGradient:window.SVGRadialGradientElement,rect:window.SVGRectElement,script:window.SVGScriptElement,set:window.SVGSetElement,stop:window.SVGStopElement,style:window.SVGStyleElement,svg:window.SVGSVGElement,switch:window.SVGSwitchElement,symbol:window.SVGSymbolElement,text:window.SVGTextElement,textPath:window.SVGTextPathElement,title:window.SVGTitleElement,tspan:window.SVGTSpanElement,use:window.SVGUseElement,view:window.SVGViewElement},Y0=Object.keys(vu),J0=[wi(yu).map(([t,e])=>[e,t]),wi(bu).map(([t,e])=>[e,t]),wi(vu).map(([t,e])=>[e,t])].flat();new Map(J0);Array.from(new Set([...q0,...Y0,...Z0].sort()));function dr(t,e,r={}){const n=r.useOriginalTarget?t.target:t.currentTarget;if(!(n instanceof e)){const i=e.name,a=n==null?void 0:n.constructor.name,s=r.useOriginalTarget?`Current target from event '${t.type}' was not of type '${i}'. Got '${a}'.`:`Target from event '${t.type}' was not of type '${i}'. Got '${a}'.`;throw new Error(s)}return n}const K0={[X.ElementExample]:()=>[],[X.Page]:t=>[!t.title&&new Error("Cannot define an element-book page with an empty title."),...hf(t.controls,t.title)].filter(Nr),[X.Root]:()=>[]},En="_isBookTreeNode",$u=new Map;function X0(t){return $u.get(t)}function Q0(t,e){rf($u,t,()=>e)}function Vt(t,e){return!!(Eu(t)&&t.entry.entryType===e)}function Eu(t){return!!(Ml(t,[En,"entry"])&&t[En])}function ep(){return{[En]:!0,entry:{entryType:X.Root,title:"",parent:void 0,errors:[],descriptionParagraphs:[]},urlBreadcrumb:"",fullUrlBreadcrumbs:[],children:{},manuallyAdded:!0}}function tp({entries:t,debug:e}){const r=X0(t);if(r)return r;const n=ep();t.forEach(s=>Aa({tree:n,newEntry:s,debug:e,manuallyAdded:!0}));const i=Su(n),a={tree:n,flattenedNodes:i};return Q0(t,a),e&&console.info("element-book tree:",n),a}function rp(t,e,r){if(!e.parent)return t;const n=qi(e,t);if(n)return n;r&&console.info(`parent of ${e.title} not found in tree; adding it now.`),Aa({tree:t,newEntry:e.parent,debug:r,manuallyAdded:!1});const i=qi(e,t);if(!i)throw new Error(`Failed to find node despite having just added it: ${la(e,!1)}`);return i}function Aa({tree:t,newEntry:e,debug:r,manuallyAdded:n}){const i=K0[e.entryType](e);e.errors.push(...i);const a=rp(t,e,r),s=pn(e.title),o=a.children[s];if(o){if(n){if(o.manuallyAdded){o.entry.errors.push(new Error(`Cannot create duplicate '${s}'${a.urlBreadcrumb?` in parent '${a.urlBreadcrumb}'.`:""}`));return}o.manuallyAdded=!0}return}const l={[En]:!0,children:{},urlBreadcrumb:s,fullUrlBreadcrumbs:[...a.fullUrlBreadcrumbs,s],entry:e,manuallyAdded:n};a.children[s]=l,df(e,X.Page)&&Object.values(e.elementExamples??{}).length&&Object.values(e.elementExamples??{}).forEach(c=>Aa({tree:t,newEntry:c,debug:r,manuallyAdded:n}))}function qi(t,e){const r=Eu(t)?t.fullUrlBreadcrumbs.slice(0,-1):la(t,!1);return r.length?r.reduce((i,a)=>{if(i)return i.children[a]},e):void 0}function Su(t){const r=!!t.entry.errors.length?[]:Object.values(t.children).map(i=>Su(i));return[t,...r].flat()}function Ca(t,e){return La(t,["",...e],void 0)}function La(t,e,r){const n=e.slice(1),i=n[0];!i&&r&&(t.controls=r);const a=t.children[i||""],s=a&&La(a,n,r);return{...t.controls,...s}}function np(t,e,r){const n={...t};return La(n,["",...e],r),n}function ku(t,e){const r=(e==null?void 0:e.controls)||(Vt(t,X.Page)?pt(t.entry.controls,(i,a)=>a.initValue):{});return{children:pt(t.children,(i,a)=>{var s;return ku(a,(s=e==null?void 0:e.children)==null?void 0:s[a.urlBreadcrumb])}),controls:r}}function ip({searchQuery:t,searchIn:e}){const r=e.length,n=t.length;if(n>r)return!1;if(n===r)return t===e;const i=e.toLowerCase(),a=t.toLowerCase();e:for(let s=0,o=0;s<n;s++){const l=a.charCodeAt(s);for(;o<r;)if(i.charCodeAt(o++)===l)continue e;return!1}return!0}const ap=Al(32);function fn(t){return t.join(ap)}function Mu(t){if(!t.length)return[];const e=fn(t),r=Mu(t.slice(0,-1));return[e,...r]}const sp=["error","errors"];function op(t){return sp.includes(t)}function lp({flattenedNodes:t,searchQuery:e}){const r={};function n(i){Object.values(i.children).map(s=>(n(s),fn(s.fullUrlBreadcrumbs))).forEach(s=>r[s]=!0)}return t.forEach(i=>{const a=i.entry.errors.length&&op(e),s=fn(i.fullUrlBreadcrumbs);if(ip({searchIn:[i.entry.title,...i.entry.descriptionParagraphs].join(" ").toLowerCase(),searchQuery:e.toLowerCase()})||a||r[s]){const l=Mu(i.fullUrlBreadcrumbs);n(i),l.forEach(c=>r[c]=!0)}else r[s]=!1}),t.filter(i=>{const a=fn(i.fullUrlBreadcrumbs),s=r[a];if(!B(s,"boolean"))throw new Error(`Failed to find '${i.fullUrlBreadcrumbs.join(" > ")}' in includeInSearchResults.`);return s})}var oe;(function(t){t.Search="search",t.Book="book"})(oe||(oe={}));function Zi(t){return t[0]===oe.Book?"":t[1]?decodeURIComponent(t[1]):""}const zt={hash:void 0,paths:[oe.Book],search:void 0},cp=0;function Tu(t){return!(t.type!=="click"||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.button!==cp)}class Gn extends Error{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SpaRouterError"})}}class to extends Gn{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WindowEventConsolidationError"})}}const kr="locationchange";globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!1;const up=globalThis.history.pushState;function ro(...t){const e=up.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(kr)),e}const dp=globalThis.history.replaceState;function no(...t){const e=dp.apply(globalThis.history,t);return globalThis.dispatchEvent(new Event(kr)),e}function fp(){if(!globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY){if(globalThis.history.pushState===ro)throw new to("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.pushState has already been overridden. Does this module have two copies in your repo?");if(globalThis.history.replaceState===no)throw new to("The consolidation module thinks that window events have not been consolidated yet but globalThis.history.replaceState has already been overridden. Does this module have two copies in your repo?");globalThis.SPA_ROUTER_VIR_HISTORY_EVENTS_CONSOLIDATED_ALREADY=!0,globalThis.history.pushState=ro,globalThis.history.replaceState=no,globalThis.addEventListener("popstate",()=>{globalThis.dispatchEvent(new Event(kr))})}}const hp=[(t,e)=>e in t,(t,e)=>e in t.constructor.prototype];function Sn(t,e){return t?hp.some(r=>{try{return r(t,e)}catch{return!1}}):!1}function io(t){let e;try{e=Reflect.ownKeys(t)}catch{}return e??[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function qn(t){return!!t}var ao;(function(t){t.Upper="upper",t.Lower="lower"})(ao||(ao={}));function mp(t,e){return t.split(e)}var so;(function(t){t.FirstThenWait="first-then-wait",t.AfterWait="after-wait"})(so||(so={}));function pp(t){return t?t instanceof Error?t.message:Sn(t,"message")?String(t.message):String(t):""}function gp(t){return!!t&&typeof t=="object"}function xu(t,e,r=!1,n={}){const i=io(t),a=new Set(io(e));if(!r){const s=i.filter(o=>!a.has(o));if(s.length)throw new Error(`Test object has extra keys: ${s.join(", ")}`)}a.forEach(s=>{if(!Sn(t,s))throw new Error(`test object does not have key "${String(s)}" from expected shape.`);function o(d){throw new Error(`test object value at key "${String(s)}" did not match expected shape: ${d}`)}const l=t[s],c=e[s];n[s]||Au(l,c,o,r,n[s]??{})})}function Au(t,e,r,n,i){var o;const a=typeof t,s=typeof e;a!==s&&r(`type "${a}" did not match expected type "${s}"`);try{Sn(e,"constructor")&&(!Sn(t,"constructor")||t.constructor!==e.constructor)&&r(`constructor "${(o=t==null?void 0:t.constructor)==null?void 0:o.name}" did not match expected constructor "${e.constructor}"`)}catch(l){if(l instanceof r)throw l}Array.isArray(e)?(Array.isArray(t)||r("expected an array"),t.forEach((l,c)=>{if(e.map(u=>{try{Au(l,u,r,n,i);return}catch(f){return new Error(`entry at index "${c}" did not match expected shape: ${pp(f)}`)}}).filter(qn).length===e.length)throw new Error(`entry at index "${c}" did not match any of the possible types from "${e.join(", ")}"`)})):gp(e)&&xu(t,e,n,i)}function wp(){return globalThis.crypto?globalThis.crypto:require("crypto").webcrypto}wp();function yp({value:t,prefix:e}){return t.startsWith(e)?t.substring(e.length):t}function bp(t){const e=Object.entries(t).map(([r,n])=>{if(n!=null)return`${r}=${String(n)}`}).filter(qn);return e.length?`?${e.join("&")}`:""}function vp(t){return yp({value:t,prefix:"?"}).split("&").map(n=>{const[i,...a]=mp(n,"="),s=a.join("");if(!(!s&&!i))return[i,s]}).filter(qn)}function $p(t,e){const r=B(t,"string")?new URL(t):t,n=vp(r.search),i=Object.fromEntries(n);return e&&xu(i,e),i}function Ep(t){const e=`/${t}`,n=(t&&globalThis.location.pathname.startsWith(e)?globalThis.location.pathname.replace(e,""):globalThis.location.pathname).split("/").filter(s=>!!s),i=globalThis.location.search?$p(globalThis.location.toString()):void 0,a=globalThis.location.hash||void 0;return{paths:n,search:i,hash:a}}function Cu(t){return t.replace(/(?:^\/|\/+$)/g,"")}function Lu({routeBase:t,windowPath:e}){if(!t)return"";const r=Cu(t);if(Ou({routeBase:r,windowPath:e}))return r;const n=r.replace(/^[^\/]+\//,"");return n&&n!==r?Lu({routeBase:n,windowPath:e}):""}function Ou({routeBase:t,windowPath:e}){const r=Cu(t);return r?e.startsWith(`/${r}`):!1}class Sp extends Gn{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SanitizationDepthMaxed"})}}function Nu(t,e){if(t.paths.join(" ")!==e.paths.join(" "))return!1;if(typeof t.search=="object"&&typeof e.search=="object"){const r=Object.entries(t.search).join(" "),n=Object.entries(e.search).join(" ");if(r!==n)return!1}else if(t.search!==e.search)return!1;return t.hash===e.hash}const oo=6;function lo(t,e){const r=t.getCurrentRawRoutes();if(t.sanitizationDepth>oo)throw new Sp(`Route sanitization depth has exceed the max of ${oo} with ${JSON.stringify(r)}`);const n=t.sanitizeFullRoute(r);if(Nu(n,r))t.sanitizationDepth=0,e?e(n):t.listeners.forEach(i=>{i(n)});else return t.sanitizationDepth++,t.setRoutes(n,!0)}class yi extends Gn{constructor(e){super(e),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRouterInitParamsError"})}}function kp(t){if("routeBase"in t&&typeof t.routeBase!="string"&&t.routeBase!=null)throw new yi(`Invalid type for router init params "routeBase" property. Expected string or undefined but got "${t.routeBase}" with type "${typeof t.routeBase}".`);if("routeSanitizer"in t&&typeof t.routeSanitizer!="function"&&t.routeSanitizer!=null)throw new yi(`Invalid type for router init params "routeSanitizer" property. Expected a function or undefined but got "${t.routeSanitizer}" with type "${typeof t.routeSanitizer}".`);if("maxListenerCount"in t&&(typeof t.maxListenerCount!="number"||isNaN(t.maxListenerCount))&&t.maxListenerCount!=null)throw new yi(`Invalid type for router init params "maxListenerCount" property. Expected a number or undefined but got "${t.maxListenerCount}" with type "${typeof t.maxListenerCount}".`)}function Mp(t,e,r=!1){const n=Iu(t,e);r?globalThis.history.replaceState(void 0,"",n):globalThis.history.pushState(void 0,"",n)}function Iu(t,e){var o;const r=Ou({routeBase:e,windowPath:globalThis.location.pathname})?e:"",n=t.search?bp(t.search):"",i=(o=t.hash)!=null&&o.startsWith("#")?"":"#",a=t.hash?`${i}${t.hash}`:"";return`/${[r,...t.paths].filter(qn).join("/")}${n}${a}`}function Tp(t={}){kp(t),fp();const e=t.routeBase?Lu({routeBase:t.routeBase,windowPath:globalThis.window.location.pathname}):"";let r=!1;const n=()=>lo(i),i={listeners:new Set,initParams:t,sanitizeFullRoute(a){const s={hash:void 0,search:void 0,...a};return t.routeSanitizer?t.routeSanitizer(s):s},setRoutes(a,s=!1,o=!1){const l=i.getCurrentRawRoutes(),c={...l,...a},d=i.sanitizeFullRoute(c);if(!(!o&&Nu(l,d)))return Mp(d,e,s)},createRoutesUrl(a){return Iu(a,e)},getCurrentRawRoutes(){return Ep(e)},removeAllRouteListeners(){i.listeners.forEach(a=>i.removeRouteListener(a))},addRouteListener(a,s){if(t.maxListenerCount&&i.listeners.size>=t.maxListenerCount)throw new Gn(`Tried to exceed route listener max of '${t.maxListenerCount}'.`);return i.listeners.add(s),r||(globalThis.addEventListener(kr,n),r=!0),a&&lo(i,s),s},hasRouteListener(a){return i.listeners.has(a)},removeRouteListener(a){const s=i.listeners.delete(a);return i.listeners.size||(globalThis.removeEventListener(kr,n),r=!1),s},sanitizationDepth:0};return i}function xp(t){return Tp({routeBase:t,routeSanitizer(e){return{paths:Ap(e.paths),hash:void 0,search:void 0}}})}function Ap(t){const e=t[0];if(Qd(e,oe)){if(e===oe.Book)return[oe.Book,...t.slice(1)];if(e===oe.Search)return t[1]?[e,t[1]]:[oe.Book,...t.slice(1)];throw new Error(`Route path not handled for sanitization: ${t.join("/")}`)}else return zt.paths}const N=St({"element-book-nav-hover-background-color":"magenta","element-book-nav-hover-foreground-color":"magenta","element-book-nav-active-background-color":"magenta","element-book-nav-active-foreground-color":"magenta","element-book-nav-selected-background-color":"magenta","element-book-nav-selected-foreground-color":"magenta","element-book-accent-icon-color":"magenta","element-book-page-background-color":"magenta","element-book-page-background-faint-level-1-color":"magenta","element-book-page-background-faint-level-2-color":"magenta","element-book-page-foreground-color":"magenta","element-book-page-foreground-faint-level-1-color":"magenta","element-book-page-foreground-faint-level-2-color":"magenta"}),Cp={nav:{hover:{background:N["element-book-nav-hover-background-color"],foreground:N["element-book-nav-hover-foreground-color"]},active:{background:N["element-book-nav-active-background-color"],foreground:N["element-book-nav-active-foreground-color"]},selected:{background:N["element-book-nav-selected-background-color"],foreground:N["element-book-nav-selected-foreground-color"]}},accent:{icon:N["element-book-accent-icon-color"]},page:{background:N["element-book-page-background-color"],backgroundFaint1:N["element-book-page-background-faint-level-1-color"],backgroundFaint2:N["element-book-page-background-faint-level-2-color"],foreground:N["element-book-page-foreground-color"],foregroundFaint1:N["element-book-page-foreground-faint-level-1-color"],foregroundFaint2:N["element-book-page-foreground-faint-level-2-color"]}};function Lp(t,e){_u(t,e,Cp)}function Yi(t){return Zt(t,"_$cssResult$")}function co(t){return Ml(t,["name","value","default"])&&B(t.default,"string")&&Yi(t.name)&&Yi(t.value)}function _u(t,e,r){Object.entries(e).forEach(([n,i])=>{const a=r[n];if(!a)throw new Error(`no nestedCssVar at key '${n}'`);if(Yi(i)){if(!co(a))throw new Error(`got a CSS result at '${n}' but no CSS var`);y0({forCssVar:a,onElement:t,toValue:String(i)})}else{if(co(a))throw new Error(`got no CSS result at '${n}' but did find a CSS var`);_u(t,i,a)}})}function F(t,e){let r=t.length;Array.isArray(t[0])||(t=[t]),Array.isArray(e[0])||(e=e.map(s=>[s]));let n=e[0].length,i=e[0].map((s,o)=>e.map(l=>l[o])),a=t.map(s=>i.map(o=>{let l=0;if(!Array.isArray(s)){for(let c of o)l+=s*c;return l}for(let c=0;c<s.length;c++)l+=s[c]*(o[c]||0);return l}));return r===1&&(a=a[0]),n===1?a.map(s=>s[0]):a}function Br(t){return qe(t)==="string"}function qe(t){return(Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function kn(t,{precision:e,unit:r}){return Ye(t)?"none":Pu(t,e)+(r??"")}function Ye(t){return Number.isNaN(t)||t instanceof Number&&(t==null?void 0:t.none)}function q(t){return Ye(t)?0:t}function Pu(t,e){if(t===0)return 0;let r=~~t,n=0;r&&e&&(n=~~Math.log10(Math.abs(r))+1);const i=10**(e-n);return Math.floor(t*i+.5)/i}const Op={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Ru(t){if(!t)return;t=t.trim();const e=/^([a-z]+)\((.+?)\)$/i,r=/^-?[\d.]+$/,n=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let a=t.match(e);if(a){let s=[];return a[2].replace(i,(o,l)=>{let c=l.match(n),d=l;if(c){let u=c[0],f=d.slice(0,-u.length);u==="%"?(d=new Number(f/100),d.type="<percentage>"):(d=new Number(f*Op[u]),d.type="<angle>",d.unit=u)}else r.test(d)?(d=new Number(d),d.type="<number>"):d==="none"&&(d=new Number(NaN),d.none=!0);o.startsWith("/")&&(d=d instanceof Number?d:new Number(d),d.alpha=!0),typeof d=="object"&&d instanceof Number&&(d.raw=l),s.push(d)}),{name:a[1].toLowerCase(),rawName:a[1],rawArgs:a[2],args:s}}}function Du(t){return t[t.length-1]}function Mr(t,e,r){return isNaN(t)?e:isNaN(e)?t:t+(e-t)*r}function Vu(t,e,r){return(r-t)/(e-t)}function Oa(t,e,r){return Mr(e[0],e[1],Vu(t[0],t[1],r))}function Hu(t){return t.map(e=>e.split("|").map(r=>{r=r.trim();let n=r.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(n){let i=new String(n[1]);return i.range=[+n[2],+n[3]],i}return r}))}function Bu(t,e,r){return Math.max(Math.min(r,e),t)}function Zn(t,e){return Math.sign(t)===Math.sign(e)?t:-t}function Ce(t,e){return Zn(Math.abs(t)**e,t)}function Na(t,e){return e===0?0:t/e}function Fu(t,e,r=0,n=t.length){for(;r<n;){const i=r+n>>1;t[i]<e?r=i+1:n=i}return r}var Np=Object.freeze({__proto__:null,bisectLeft:Fu,clamp:Bu,copySign:Zn,interpolate:Mr,interpolateInv:Vu,isNone:Ye,isString:Br,last:Du,mapRange:Oa,multiplyMatrices:F,parseCoordGrammar:Hu,parseFunction:Ru,serializeNumber:kn,skipNone:q,spow:Ce,toPrecision:Pu,type:qe,zdiv:Na});class Ip{add(e,r,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(i){this[i]=this[i]||[],r&&this[i][n?"unshift":"push"](r)},this)}run(e,r){this[e]=this[e]||[],this[e].forEach(function(n){n.call(r&&r.context?r.context:r,r)})}}const Je=new Ip;var El,Sl,kl,he={gamut_mapping:"css",precision:5,deltaE:"76",verbose:((kl=(Sl=(El=globalThis==null?void 0:globalThis.process)==null?void 0:El.env)==null?void 0:Sl.NODE_ENV)==null?void 0:kl.toLowerCase())!=="test",warn:function(e){var r,n;this.verbose&&((n=(r=globalThis==null?void 0:globalThis.console)==null?void 0:r.warn)==null||n.call(r,e))}};const re={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Ji(t){return Array.isArray(t)?t:re[t]}function Mn(t,e,r,n={}){if(t=Ji(t),e=Ji(e),!t||!e)throw new TypeError(`Missing white point to convert ${t?"":"from"}${!t&&!e?"/":""}${e?"":"to"}`);if(t===e)return r;let i={W1:t,W2:e,XYZ:r,options:n};if(Je.run("chromatic-adaptation-start",i),i.M||(i.W1===re.D65&&i.W2===re.D50?i.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:i.W1===re.D50&&i.W2===re.D65&&(i.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),Je.run("chromatic-adaptation-end",i),i.M)return F(i.M,i.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}const _p=new Set(["<number>","<percentage>","<angle>"]);function uo(t,e,r,n){return Object.entries(t.coords).map(([a,s],o)=>{let l=e.coordGrammar[o],c=n[o],d=c==null?void 0:c.type,u;if(c.none?u=l.find(m=>_p.has(m)):u=l.find(m=>m==d),!u){let m=s.name||a;throw new TypeError(`${d??c.raw} not allowed for ${m} in ${r}()`)}let f=u.range;d==="<percentage>"&&(f||(f=[0,1]));let h=s.range||s.refRange;return f&&h&&(n[o]=Oa(f,h,n[o])),u})}function zu(t,{meta:e}={}){var n,i,a,s;let r={str:(n=String(t))==null?void 0:n.trim()};if(Je.run("parse-start",r),r.color)return r.color;if(r.parsed=Ru(r.str),r.parsed){let o=r.parsed.name;if(o==="color"){let l=r.parsed.args.shift(),c=l.startsWith("--")?l.substring(2):`--${l}`,d=[l,c],u=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1;for(let m of v.all){let w=m.getFormat("color");if(w&&(d.includes(w.id)||(i=w.ids)!=null&&i.filter(b=>d.includes(b)).length)){const b=Object.keys(m.coords).map((S,C)=>r.parsed.args[C]||0);let $;return w.coordGrammar&&($=uo(m,w,"color",b)),e&&Object.assign(e,{formatId:"color",types:$}),w.id.startsWith("--")&&!l.startsWith("--")&&he.warn(`${m.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${w.id}) instead of color(${l}).`),l.startsWith("--")&&!w.id.startsWith("--")&&he.warn(`${m.name} is a standard space and supported in the CSS spec. Use color(${w.id}) instead of prefixed color(${l}).`),{spaceId:m.id,coords:b,alpha:u}}}let f="",h=l in v.registry?l:c;if(h in v.registry){let m=(s=(a=v.registry[h].formats)==null?void 0:a.color)==null?void 0:s.id;m&&(f=`Did you mean color(${m})?`)}throw new TypeError(`Cannot parse color(${l}). `+(f||"Missing a plugin?"))}else for(let l of v.all){let c=l.getFormat(o);if(c&&c.type==="function"){let d=1;(c.lastAlpha||Du(r.parsed.args).alpha)&&(d=r.parsed.args.pop());let u=r.parsed.args,f;return c.coordGrammar&&(f=uo(l,c,o,u)),e&&Object.assign(e,{formatId:c.name,types:f}),{spaceId:l.id,coords:u,alpha:d}}}}else for(let o of v.all)for(let l in o.formats){let c=o.formats[l];if(c.type!=="custom"||c.test&&!c.test(r.str))continue;let d=c.parse(r.str);if(d)return d.alpha??(d.alpha=1),e&&(e.formatId=l),d}throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`)}function x(t){if(Array.isArray(t))return t.map(x);if(!t)throw new TypeError("Empty color reference");Br(t)&&(t=zu(t));let e=t.space||t.spaceId;return e instanceof v||(t.space=v.get(e)),t.alpha===void 0&&(t.alpha=1),t}const Pp=75e-6,ae=class ae{constructor(e){var i;this.id=e.id,this.name=e.name,this.base=e.base?ae.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let r=e.coords??this.base.coords;for(let a in r)"name"in r[a]||(r[a].name=a);this.coords=r;let n=e.white??this.base.white??"D65";this.white=Ji(n),this.formats=e.formats??{};for(let a in this.formats){let s=this.formats[a];s.type||(s.type="function"),s.name||(s.name=a)}(i=this.formats.color)!=null&&i.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:ae.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=(a,s)=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:Rp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),Je.run("colorspace-init-end",this)}inGamut(e,{epsilon:r=Pp}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:r});let n=Object.values(this.coords);return e.every((i,a)=>{let s=n[a];if(s.type!=="angle"&&s.range){if(Number.isNaN(i))return!0;let[o,l]=s.range;return(o===void 0||i>=o-r)&&(l===void 0||i<=l+r)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){var e,r;return((r=(e=this.formats)==null?void 0:e.color)==null?void 0:r.id)||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=fo(e,this),e;let r;return e==="default"?r=Object.values(this.formats)[0]:r=this.formats[e],r?(r=fo(r,this),r):null}equals(e){return e?this===e||this.id===e||this.id===e.id:!1}to(e,r){if(arguments.length===1){const o=x(e);[e,r]=[o.space,o.coords]}if(e=ae.get(e),this.equals(e))return r;r=r.map(o=>Number.isNaN(o)?0:o);let n=this.path,i=e.path,a,s;for(let o=0;o<n.length&&n[o].equals(i[o]);o++)a=n[o],s=o;if(!a)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let o=n.length-1;o>s;o--)r=n[o].toBase(r);for(let o=s+1;o<i.length;o++)r=i[o].fromBase(r);return r}from(e,r){if(arguments.length===1){const n=x(e);[e,r]=[n.space,n.coords]}return e=ae.get(e),e.to(this,r)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let r in this.coords){let n=this.coords[r],i=n.range||n.refRange;e.push((i==null?void 0:i.min)??0)}return e}static get all(){return[...new Set(Object.values(ae.registry))]}static register(e,r){if(arguments.length===1&&(r=arguments[0],e=r.id),r=this.get(r),this.registry[e]&&this.registry[e]!==r)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=r,arguments.length===1&&r.aliases)for(let n of r.aliases)this.register(n,r);return r}static get(e,...r){if(!e||e instanceof ae)return e;if(qe(e)==="string"){let i=ae.registry[e.toLowerCase()];if(!i)throw new TypeError(`No color space found with id = "${e}"`);return i}if(r.length)return ae.get(...r);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,r){var l;let n=qe(e),i,a;if(n==="string"?e.includes(".")?[i,a]=e.split("."):[i,a]=[,e]:Array.isArray(e)?[i,a]=e:(i=e.space,a=e.coordId),i=ae.get(i),i||(i=r),!i)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(n=qe(a),n==="number"||n==="string"&&a>=0){let c=Object.entries(i.coords)[a];if(c)return{space:i,id:c[0],index:a,...c[1]}}i=ae.get(i);let s=a.toLowerCase(),o=0;for(let c in i.coords){let d=i.coords[c];if(c.toLowerCase()===s||((l=d.name)==null?void 0:l.toLowerCase())===s)return{space:i,id:c,index:o,...d};o++}throw new TypeError(`No "${a}" coordinate found in ${i.name}. Its coordinates are: ${Object.keys(i.coords).join(", ")}`)}};Qn(ae,"registry",{}),Qn(ae,"DEFAULT_FORMAT",{type:"functions",name:"color"});let v=ae;function Rp(t){let e=[t];for(let r=t;r=r.base;)e.push(r);return e}function fo(t,{coords:e}={}){if(t.coords&&!t.coordGrammar){t.type||(t.type="function"),t.name||(t.name="color"),t.coordGrammar=Hu(t.coords);let r=Object.entries(e).map(([n,i],a)=>{let s=t.coordGrammar[a][0],o=i.range||i.refRange,l=s.range,c="";return s=="<percentage>"?(l=[0,100],c="%"):s=="<angle>"&&(c="deg"),{fromRange:o,toRange:l,suffix:c}});t.serializeCoords=(n,i)=>n.map((a,s)=>{let{fromRange:o,toRange:l,suffix:c}=r[s];return o&&l&&(a=Oa(o,l,a)),a=kn(a,{precision:i,unit:c}),a})}return t}var Q=new v({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]});class le extends v{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Q),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??(e.toBase=r=>{let n=F(e.toXYZ_M,r);return this.white!==this.base.white&&(n=Mn(this.white,this.base.white,n)),n}),e.fromBase??(e.fromBase=r=>(r=Mn(this.base.white,this.white,r),F(e.fromXYZ_M,r)))),e.referred??(e.referred="display"),super(e)}}function Fr(t,e){return t=x(t),!e||t.space.equals(e)?t.coords.slice():(e=v.get(e),e.from(t))}function ue(t,e){t=x(t);let{space:r,index:n}=v.resolveCoord(e,t.space);return Fr(t,r)[n]}function Ia(t,e,r){return t=x(t),e=v.get(e),t.coords=e.to(t.space,r),t}Ia.returns="color";function He(t,e,r){if(t=x(t),arguments.length===2&&qe(arguments[1])==="object"){let n=arguments[1];for(let i in n)He(t,i,n[i])}else{typeof r=="function"&&(r=r(ue(t,e)));let{space:n,index:i}=v.resolveCoord(e,t.space),a=Fr(t,n);a[i]=r,Ia(t,n,a)}return t}He.returns="color";var _a=new v({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Q,fromBase:t=>Mn(Q.white,"D50",t),toBase:t=>Mn("D50",Q.white,t)});const Dp=216/24389,ho=24/116,Kr=24389/27;let bi=re.D50;var de=new v({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:bi,base:_a,fromBase(t){let r=t.map((n,i)=>n/bi[i]).map(n=>n>Dp?Math.cbrt(n):(Kr*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>ho?Math.pow(e[0],3):(116*e[0]-16)/Kr,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/Kr,e[2]>ho?Math.pow(e[2],3):(116*e[2]-16)/Kr].map((n,i)=>n*bi[i])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Le(t){return(t%360+360)%360}function Vp(t,e){if(t==="raw")return e;let[r,n]=e.map(Le),i=n-r;return t==="increasing"?i<0&&(n+=360):t==="decreasing"?i>0&&(r+=360):t==="longer"?-180<i&&i<180&&(i>0?r+=360:n+=360):t==="shorter"&&(i>180?r+=360:i<-180&&(n+=360)),[r,n]}var Tr=new v({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:de,fromBase(t){let[e,r,n]=t,i;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Le(i)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const mo=25**7,Tn=Math.PI,po=180/Tn,At=Tn/180;function go(t){const e=t*t;return e*e*e*t}function Wu(t,e,{kL:r=1,kC:n=1,kH:i=1}={}){[t,e]=x([t,e]);let[a,s,o]=de.from(t),l=Tr.from(de,[a,s,o])[1],[c,d,u]=de.from(e),f=Tr.from(de,[c,d,u])[1];l<0&&(l=0),f<0&&(f=0);let h=(l+f)/2,m=go(h),w=.5*(1-Math.sqrt(m/(m+mo))),b=(1+w)*s,$=(1+w)*d,S=Math.sqrt(b**2+o**2),C=Math.sqrt($**2+u**2),D=b===0&&o===0?0:Math.atan2(o,b),ne=$===0&&u===0?0:Math.atan2(u,$);D<0&&(D+=2*Tn),ne<0&&(ne+=2*Tn),D*=po,ne*=po;let Oe=c-a,Ee=C-S,R=ne-D,Z=D+ne,Ne=Math.abs(R),tt;S*C===0?tt=0:Ne<=180?tt=R:R>180?tt=R-360:R<-180?tt=R+360:he.warn("the unthinkable has happened");let Ba=2*Math.sqrt(C*S)*Math.sin(tt*At/2),Cd=(a+c)/2,Xn=(S+C)/2,Fa=go(Xn),Ie;S*C===0?Ie=Z:Ne<=180?Ie=Z/2:Z<360?Ie=(Z+360)/2:Ie=(Z-360)/2;let za=(Cd-50)**2,Ld=1+.015*za/Math.sqrt(20+za),Wa=1+.045*Xn,nr=1;nr-=.17*Math.cos((Ie-30)*At),nr+=.24*Math.cos(2*Ie*At),nr+=.32*Math.cos((3*Ie+6)*At),nr-=.2*Math.cos((4*Ie-63)*At);let Ua=1+.015*Xn*nr,Od=30*Math.exp(-1*((Ie-275)/25)**2),Nd=2*Math.sqrt(Fa/(Fa+mo)),Id=-1*Math.sin(2*Od*At)*Nd,Wr=(Oe/(r*Ld))**2;return Wr+=(Ee/(n*Wa))**2,Wr+=(Ba/(i*Ua))**2,Wr+=Id*(Ee/(n*Wa))*(Ba/(i*Ua)),Math.sqrt(Wr)}const Hp=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Bp=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],Fp=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],zp=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]];var Wt=new v({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Q,fromBase(t){let r=F(Hp,t).map(n=>Math.cbrt(n));return F(Fp,r)},toBase(t){let r=F(zp,t).map(n=>n**3);return F(Bp,r)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ki(t,e){[t,e]=x([t,e]);let[r,n,i]=Wt.from(t),[a,s,o]=Wt.from(e),l=r-a,c=n-s,d=i-o;return Math.sqrt(l**2+c**2+d**2)}const Wp=75e-6;function ht(t,e,{epsilon:r=Wp}={}){t=x(t),e||(e=t.space),e=v.get(e);let n=t.coords;return e!==t.space&&(n=e.from(t)),e.inGamut(n,{epsilon:r})}function Ut(t){return{space:t.space,coords:t.coords.slice(),alpha:t.alpha}}function Uu(t,e,r="lab"){r=v.get(r);let n=r.from(t),i=r.from(e);return Math.sqrt(n.reduce((a,s,o)=>{let l=i[o];return isNaN(s)||isNaN(l)?a:a+(l-s)**2},0))}function Up(t,e){return Uu(t,e,"lab")}const jp=Math.PI,wo=jp/180;function Gp(t,e,{l:r=2,c:n=1}={}){[t,e]=x([t,e]);let[i,a,s]=de.from(t),[,o,l]=Tr.from(de,[i,a,s]),[c,d,u]=de.from(e),f=Tr.from(de,[c,d,u])[1];o<0&&(o=0),f<0&&(f=0);let h=i-c,m=o-f,w=a-d,b=s-u,$=w**2+b**2-m**2,S=.511;i>=16&&(S=.040975*i/(1+.01765*i));let C=.0638*o/(1+.0131*o)+.638,D;Number.isNaN(l)&&(l=0),l>=164&&l<=345?D=.56+Math.abs(.2*Math.cos((l+168)*wo)):D=.36+Math.abs(.4*Math.cos((l+35)*wo));let ne=Math.pow(o,4),Oe=Math.sqrt(ne/(ne+1900)),Ee=C*(Oe*D+1-Oe),R=(h/(r*S))**2;return R+=(m/(n*C))**2,R+=$/Ee**2,Math.sqrt(R)}const yo=203;var Pa=new v({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Q,fromBase(t){return t.map(e=>Math.max(e*yo,0))},toBase(t){return t.map(e=>Math.max(e/yo,0))}});const Xr=1.15,Qr=.66,bo=2610/2**14,qp=2**14/2610,vo=3424/2**12,$o=2413/2**7,Eo=2392/2**7,Zp=1.7*2523/2**5,So=2**5/(1.7*2523),en=-.56,vi=16295499532821565e-27,Yp=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Jp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Kp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Xp=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]];var ju=new v({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Pa,fromBase(t){let[e,r,n]=t,i=Xr*e-(Xr-1)*n,a=Qr*r-(Qr-1)*e,o=F(Yp,[i,a,n]).map(function(f){let h=vo+$o*(f/1e4)**bo,m=1+Eo*(f/1e4)**bo;return(h/m)**Zp}),[l,c,d]=F(Kp,o);return[(1+en)*l/(1+en*l)-vi,c,d]},toBase(t){let[e,r,n]=t,i=(e+vi)/(1+en-en*(e+vi)),s=F(Xp,[i,r,n]).map(function(f){let h=vo-f**So,m=Eo*f**So-$o;return 1e4*(h/m)**qp}),[o,l,c]=F(Jp,s),d=(o+(Xr-1)*c)/Xr,u=(l+(Qr-1)*d)/Qr;return[d,u,c]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Xi=new v({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ju,fromBase(t){let[e,r,n]=t,i;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Le(i)]},toBase(t){return[t[0],t[1]*Math.cos(t[2]*Math.PI/180),t[1]*Math.sin(t[2]*Math.PI/180)]}});function Qp(t,e){[t,e]=x([t,e]);let[r,n,i]=Xi.from(t),[a,s,o]=Xi.from(e),l=r-a,c=n-s;Number.isNaN(i)&&Number.isNaN(o)?(i=0,o=0):Number.isNaN(i)?i=o:Number.isNaN(o)&&(o=i);let d=i-o,u=2*Math.sqrt(n*s)*Math.sin(d/2*(Math.PI/180));return Math.sqrt(l**2+c**2+u**2)}const Gu=3424/4096,qu=2413/128,Zu=2392/128,ko=2610/16384,eg=2523/32,tg=16384/2610,Mo=32/2523,rg=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],ng=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],ig=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],ag=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]];var Qi=new v({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Pa,fromBase(t){let e=F(rg,t);return sg(e)},toBase(t){let e=og(t);return F(ag,e)}});function sg(t){let e=t.map(function(r){let n=Gu+qu*(r/1e4)**ko,i=1+Zu*(r/1e4)**ko;return(n/i)**eg});return F(ng,e)}function og(t){return F(ig,t).map(function(n){let i=Math.max(n**Mo-Gu,0),a=qu-Zu*n**Mo;return 1e4*(i/a)**tg})}function lg(t,e){[t,e]=x([t,e]);let[r,n,i]=Qi.from(t),[a,s,o]=Qi.from(e);return 720*Math.sqrt((r-a)**2+.25*(n-s)**2+(i-o)**2)}const cg=re.D65,Yu=.42,To=1/Yu,$i=2*Math.PI,Ju=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],ug=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],dg=[[460,451,288],[460,-891,-261],[460,-220,-6300]],fg={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},ot={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},hg=180/Math.PI,xo=Math.PI/180;function Ku(t,e){return t.map(n=>{const i=Ce(e*Math.abs(n)*.01,Yu);return 400*Zn(i,n)/(i+27.13)})}function mg(t,e){const r=100/e*27.13**To;return t.map(n=>{const i=Math.abs(n);return Zn(r*Ce(i/(400-i),To),n)})}function pg(t){let e=Le(t);e<=ot.h[0]&&(e+=360);const r=Fu(ot.h,e)-1,[n,i]=ot.h.slice(r,r+2),[a,s]=ot.e.slice(r,r+2),o=ot.H[r],l=(e-n)/a;return o+100*l/(l+(i-e)/s)}function gg(t){let e=(t%400+400)%400;const r=Math.floor(.01*e);e=e%100;const[n,i]=ot.h.slice(r,r+2),[a,s]=ot.e.slice(r,r+2);return Le((e*(s*n-a*i)-100*n*s)/(e*(s-a)-100*s))}function Xu(t,e,r,n,i){const a={};a.discounting=i,a.refWhite=t,a.surround=n;const s=t.map(w=>w*100);a.la=e,a.yb=r;const o=s[1],l=F(Ju,s);n=fg[a.surround];const c=n[0];a.c=n[1],a.nc=n[2];const u=(1/(5*a.la+1))**4;a.fl=u*a.la+.1*(1-u)*(1-u)*Math.cbrt(5*a.la),a.flRoot=a.fl**.25,a.n=a.yb/o,a.z=1.48+Math.sqrt(a.n),a.nbb=.725*a.n**-.2,a.ncb=a.nbb;const f=i?1:Math.max(Math.min(c*(1-1/3.6*Math.exp((-a.la-42)/92)),1),0);a.dRgb=l.map(w=>Mr(1,o/w,f)),a.dRgbInv=a.dRgb.map(w=>1/w);const h=l.map((w,b)=>w*a.dRgb[b]),m=Ku(h,a.fl);return a.aW=a.nbb*(2*m[0]+m[1]+.05*m[2]),a}const Ao=Xu(cg,64/Math.PI*.2,20,"average",!1);function ea(t,e){if(!(t.J!==void 0^t.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(t.C!==void 0^t.M!==void 0^t.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(t.h!==void 0^t.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(t.J===0||t.Q===0)return[0,0,0];let r=0;t.h!==void 0?r=Le(t.h)*xo:r=gg(t.H)*xo;const n=Math.cos(r),i=Math.sin(r);let a=0;t.J!==void 0?a=Ce(t.J,1/2)*.1:t.Q!==void 0&&(a=.25*e.c*t.Q/((e.aW+4)*e.flRoot));let s=0;t.C!==void 0?s=t.C/a:t.M!==void 0?s=t.M/e.flRoot/a:t.s!==void 0&&(s=4e-4*t.s**2*(e.aW+4)/e.c);const o=Ce(s*Math.pow(1.64-Math.pow(.29,e.n),-.73),10/9),l=.25*(Math.cos(r+2)+3.8),c=e.aW*Ce(a,2/e.c/e.z),d=5e4/13*e.nc*e.ncb*l,u=c/e.nbb,f=23*(u+.305)*Na(o,23*d+o*(11*n+108*i)),h=f*n,m=f*i,w=mg(F(dg,[u,h,m]).map(b=>b*1/1403),e.fl);return F(ug,w.map((b,$)=>b*e.dRgbInv[$])).map(b=>b/100)}function Qu(t,e){const r=t.map(C=>C*100),n=Ku(F(Ju,r).map((C,D)=>C*e.dRgb[D]),e.fl),i=n[0]+(-12*n[1]+n[2])/11,a=(n[0]+n[1]-2*n[2])/9,s=(Math.atan2(a,i)%$i+$i)%$i,o=.25*(Math.cos(s+2)+3.8),l=5e4/13*e.nc*e.ncb*Na(o*Math.sqrt(i**2+a**2),n[0]+n[1]+1.05*n[2]+.305),c=Ce(l,.9)*Math.pow(1.64-Math.pow(.29,e.n),.73),d=e.nbb*(2*n[0]+n[1]+.05*n[2]),u=Ce(d/e.aW,.5*e.c*e.z),f=100*Ce(u,2),h=4/e.c*u*(e.aW+4)*e.flRoot,m=c*u,w=m*e.flRoot,b=Le(s*hg),$=pg(b),S=50*Ce(e.c*c/(e.aW+4),1/2);return{J:f,C:m,h:b,s:S,Q:h,M:w,H:$}}var wg=new v({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Q,fromBase(t){const e=Qu(t,Ao);return[e.J,e.M,e.h]},toBase(t){return ea({J:t[0],M:t[1],h:t[2]},Ao)}});const yg=re.D65,bg=216/24389,ed=24389/27;function vg(t){return 116*(t>bg?Math.cbrt(t):(ed*t+16)/116)-16}function ta(t){return t>8?Math.pow((t+16)/116,3):t/ed}function $g(t,e){let[r,n,i]=t,a=[],s=0;if(i===0)return[0,0,0];let o=ta(i);i>0?s=.00379058511492914*i**2+.608983189401032*i+.9155088574762233:s=9514440756550361e-21*i**2+.08693057439788597*i-21.928975842194614;const l=2e-12,c=15;let d=0,u=1/0;for(;d<=c;){a=ea({J:s,C:n,h:r},e);const f=Math.abs(a[1]-o);if(f<u){if(f<=l)return a;u=f}s=s-(a[1]-o)*s/(2*a[1]),d+=1}return ea({J:s,C:n,h:r},e)}function Eg(t,e){const r=vg(t[1]);if(r===0)return[0,0,0];const n=Qu(t,Ra);return[Le(n.h),n.C,r]}const Ra=Xu(yg,200/Math.PI*ta(50),ta(50)*100,"average",!1);var xr=new v({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:Q,fromBase(t){return Eg(t)},toBase(t){return $g(t,Ra)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Sg=Math.PI/180,Co=[1,.007,.0228];function Lo(t){t[1]<0&&(t=xr.fromBase(xr.toBase(t)));const e=Math.log(Math.max(1+Co[2]*t[1]*Ra.flRoot,1))/Co[2],r=t[0]*Sg,n=e*Math.cos(r),i=e*Math.sin(r);return[t[2],n,i]}function kg(t,e){[t,e]=x([t,e]);let[r,n,i]=Lo(xr.from(t)),[a,s,o]=Lo(xr.from(e));return Math.sqrt((r-a)**2+(n-s)**2+(i-o)**2)}var jt={deltaE76:Up,deltaECMC:Gp,deltaE2000:Wu,deltaEJz:Qp,deltaEITP:lg,deltaEOK:Ki,deltaEHCT:kg};function Mg(t){const e=t?Math.floor(Math.log10(Math.abs(t))):0;return Math.max(parseFloat(`1e${e-2}`),1e-6)}const Oo={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function Ke(t,{method:e=he.gamut_mapping,space:r=void 0,deltaEMethod:n="",jnd:i=2,blackWhiteClamp:a={}}={}){if(t=x(t),Br(arguments[1])?r=arguments[1]:r||(r=t.space),r=v.get(r),ht(t,r,{epsilon:0}))return t;let s;if(e==="css")s=Tg(t,{space:r});else{if(e!=="clip"&&!ht(t,r)){Object.prototype.hasOwnProperty.call(Oo,e)&&({method:e,jnd:i,deltaEMethod:n,blackWhiteClamp:a}=Oo[e]);let o=Wu;if(n!==""){for(let c in jt)if("deltae"+n.toLowerCase()===c.toLowerCase()){o=jt[c];break}}let l=Ke(V(t,r),{method:"clip",space:r});if(o(t,l)>i){if(Object.keys(a).length===3){let S=v.resolveCoord(a.channel),C=ue(V(t,S.space),S.id);if(Ye(C)&&(C=0),C>=a.max)return V({space:"xyz-d65",coords:re.D65},t.space);if(C<=a.min)return V({space:"xyz-d65",coords:[0,0,0]},t.space)}let c=v.resolveCoord(e),d=c.space,u=c.id,f=V(t,d);f.coords.forEach((S,C)=>{Ye(S)&&(f.coords[C]=0)});let m=(c.range||c.refRange)[0],w=Mg(i),b=m,$=ue(f,u);for(;$-b>w;){let S=Ut(f);S=Ke(S,{space:r,method:"clip"}),o(f,S)-i<w?b=ue(f,u):$=ue(f,u),He(f,u,(b+$)/2)}s=V(f,r)}else s=l}else s=V(t,r);if(e==="clip"||!ht(s,r,{epsilon:0})){let o=Object.values(r.coords).map(l=>l.range||[]);s.coords=s.coords.map((l,c)=>{let[d,u]=o[c];return d!==void 0&&(l=Math.max(d,l)),u!==void 0&&(l=Math.min(l,u)),l})}}return r!==t.space&&(s=V(s,t.space)),t.coords=s.coords,t}Ke.returns="color";const No={WHITE:{space:Wt,coords:[1,0,0]},BLACK:{space:Wt,coords:[0,0,0]}};function Tg(t,{space:e}={}){t=x(t),e||(e=t.space),e=v.get(e);const i=v.get("oklch");if(e.isUnbounded)return V(t,e);const a=V(t,i);let s=a.coords[0];if(s>=1){const m=V(No.WHITE,e);return m.alpha=t.alpha,V(m,e)}if(s<=0){const m=V(No.BLACK,e);return m.alpha=t.alpha,V(m,e)}if(ht(a,e,{epsilon:0}))return V(a,e);function o(m){const w=V(m,e),b=Object.values(e.coords);return w.coords=w.coords.map(($,S)=>{if("range"in b[S]){const[C,D]=b[S].range;return Bu(C,$,D)}return $}),w}let l=0,c=a.coords[1],d=!0,u=Ut(a),f=o(u),h=Ki(f,u);if(h<.02)return f;for(;c-l>1e-4;){const m=(l+c)/2;if(u.coords[1]=m,d&&ht(u,e,{epsilon:0}))l=m;else if(f=o(u),h=Ki(f,u),h<.02){if(.02-h<1e-4)break;d=!1,l=m}else c=m}return f}function V(t,e,{inGamut:r}={}){t=x(t),e=v.get(e);let n=e.from(t),i={space:e,coords:n,alpha:t.alpha};return r&&(i=Ke(i,r===!0?void 0:r)),i}V.returns="color";function yr(t,{precision:e=he.precision,format:r="default",inGamut:n=!0,...i}={}){var l;let a;t=x(t);let s=r;r=t.space.getFormat(r)??t.space.getFormat("default")??v.DEFAULT_FORMAT;let o=t.coords.slice();if(n||(n=r.toGamut),n&&!ht(t)&&(o=Ke(Ut(t),n===!0?void 0:n).coords),r.type==="custom")if(i.precision=e,r.serialize)a=r.serialize(o,t.alpha,i);else throw new TypeError(`format ${s} can only be used to parse colors, not for serialization`);else{let c=r.name||"color";r.serializeCoords?o=r.serializeCoords(o,e):e!==null&&(o=o.map(h=>kn(h,{precision:e})));let d=[...o];if(c==="color"){let h=r.id||((l=r.ids)==null?void 0:l[0])||t.space.id;d.unshift(h)}let u=t.alpha;e!==null&&(u=kn(u,{precision:e}));let f=t.alpha>=1||r.noAlpha?"":`${r.commas?",":" /"} ${u}`;a=`${c}(${d.join(r.commas?", ":" ")}${f})`}return a}const xg=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Ag=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]];var Yn=new le({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:xg,fromXYZ_M:Ag});const tn=1.09929682680944,Io=.018053968510807;var td=new le({id:"rec2020",name:"REC.2020",base:Yn,toBase(t){return t.map(function(e){return e<Io*4.5?e/4.5:Math.pow((e+tn-1)/tn,1/.45)})},fromBase(t){return t.map(function(e){return e>=Io?tn*Math.pow(e,.45)-(tn-1):4.5*e})}});const Cg=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],Lg=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]];var rd=new le({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Cg,fromXYZ_M:Lg});const Og=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],K=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]];var nd=new le({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:Og,fromXYZ_M:K}),_o={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]};let Po=Array(3).fill("<percentage> | <number>[0, 255]"),Ro=Array(3).fill("<number>[0, 255]");var Gt=new le({id:"srgb",name:"sRGB",base:nd,fromBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n>.0031308?r*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:t=>t.map(e=>{let r=e<0?-1:1,n=e*r;return n<=.04045?e/12.92:r*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Po},rgb_number:{name:"rgb",commas:!0,coords:Ro,noAlpha:!0},color:{},rgba:{coords:Po,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ro},hex:{type:"custom",toGamut:!0,test:t=>/^#([a-f0-9]{3,4}){1,2}$/i.test(t),parse(t){t.length<=5&&(t=t.replace(/[a-f0-9]/gi,"$&$&"));let e=[];return t.replace(/[a-f0-9]{2}/gi,r=>{e.push(parseInt(r,16)/255)}),{spaceId:"srgb",coords:e.slice(0,3),alpha:e.slice(3)[0]}},serialize:(t,e,{collapse:r=!0}={})=>{e<1&&t.push(e),t=t.map(a=>Math.round(a*255));let n=r&&t.every(a=>a%17===0);return"#"+t.map(a=>n?(a/17).toString(16):a.toString(16).padStart(2,"0")).join("")}},keyword:{type:"custom",test:t=>/^[a-z]+$/i.test(t),parse(t){t=t.toLowerCase();let e={spaceId:"srgb",coords:null,alpha:1};if(t==="transparent"?(e.coords=_o.black,e.alpha=0):e.coords=_o[t],e.coords)return e}}}}),id=new le({id:"p3",cssId:"display-p3",name:"P3",base:rd,fromBase:Gt.fromBase,toBase:Gt.toBase});he.display_space=Gt;let Ng;if(typeof CSS<"u"&&CSS.supports)for(let t of[de,td,id]){let e=t.getMinCoords(),n=yr({space:t,coords:e,alpha:1});if(CSS.supports("color",n)){he.display_space=t;break}}function Ig(t,{space:e=he.display_space,...r}={}){let n=yr(t,r);if(typeof CSS>"u"||CSS.supports("color",n)||!he.display_space)n=new String(n),n.color=t;else{let i=t;if((t.coords.some(Ye)||Ye(t.alpha))&&!(Ng??(Ng=CSS.supports("color","hsl(none 50% 50%)")))&&(i=Ut(t),i.coords=i.coords.map(q),i.alpha=q(i.alpha),n=yr(i,r),CSS.supports("color",n)))return n=new String(n),n.color=i,n;i=V(i,e),n=new String(yr(i,r)),n.color=i}return n}function _g(t,e){return t=x(t),e=x(e),t.space===e.space&&t.alpha===e.alpha&&t.coords.every((r,n)=>r===e.coords[n])}function Xe(t){return ue(t,[Q,"y"])}function ad(t,e){He(t,[Q,"y"],e)}function Pg(t){Object.defineProperty(t.prototype,"luminance",{get(){return Xe(this)},set(e){ad(this,e)}})}var Rg=Object.freeze({__proto__:null,getLuminance:Xe,register:Pg,setLuminance:ad});function Dg(t,e){t=x(t),e=x(e);let r=Math.max(Xe(t),0),n=Math.max(Xe(e),0);return n>r&&([r,n]=[n,r]),(r+.05)/(n+.05)}const Vg=.56,Hg=.57,Bg=.62,Fg=.65,Do=.022,zg=1.414,Wg=.1,Ug=5e-4,jg=1.14,Vo=.027,Gg=1.14;function Ho(t){return t>=Do?t:t+(Do-t)**zg}function Ct(t){let e=t<0?-1:1,r=Math.abs(t);return e*Math.pow(r,2.4)}function qg(t,e){e=x(e),t=x(t);let r,n,i,a,s,o;e=V(e,"srgb"),[a,s,o]=e.coords;let l=Ct(a)*.2126729+Ct(s)*.7151522+Ct(o)*.072175;t=V(t,"srgb"),[a,s,o]=t.coords;let c=Ct(a)*.2126729+Ct(s)*.7151522+Ct(o)*.072175,d=Ho(l),u=Ho(c),f=u>d;return Math.abs(u-d)<Ug?n=0:f?(r=u**Vg-d**Hg,n=r*jg):(r=u**Fg-d**Bg,n=r*Gg),Math.abs(n)<Wg?i=0:n>0?i=n-Vo:i=n+Vo,i*100}function Zg(t,e){t=x(t),e=x(e);let r=Math.max(Xe(t),0),n=Math.max(Xe(e),0);n>r&&([r,n]=[n,r]);let i=r+n;return i===0?0:(r-n)/i}const Yg=5e4;function Jg(t,e){t=x(t),e=x(e);let r=Math.max(Xe(t),0),n=Math.max(Xe(e),0);return n>r&&([r,n]=[n,r]),n===0?Yg:(r-n)/n}function Kg(t,e){t=x(t),e=x(e);let r=ue(t,[de,"l"]),n=ue(e,[de,"l"]);return Math.abs(r-n)}const Xg=216/24389,Bo=24/116,rn=24389/27;let Ei=re.D65;var ra=new v({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ei,base:Q,fromBase(t){let r=t.map((n,i)=>n/Ei[i]).map(n=>n>Xg?Math.cbrt(n):(rn*n+16)/116);return[116*r[1]-16,500*(r[0]-r[1]),200*(r[1]-r[2])]},toBase(t){let e=[];return e[1]=(t[0]+16)/116,e[0]=t[1]/500+e[1],e[2]=e[1]-t[2]/200,[e[0]>Bo?Math.pow(e[0],3):(116*e[0]-16)/rn,t[0]>8?Math.pow((t[0]+16)/116,3):t[0]/rn,e[2]>Bo?Math.pow(e[2],3):(116*e[2]-16)/rn].map((n,i)=>n*Ei[i])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});const Si=Math.pow(5,.5)*.5+.5;function Qg(t,e){t=x(t),e=x(e);let r=ue(t,[ra,"l"]),n=ue(e,[ra,"l"]),i=Math.abs(Math.pow(r,Si)-Math.pow(n,Si)),a=Math.pow(i,1/Si)*Math.SQRT2-40;return a<7.5?0:a}var hn=Object.freeze({__proto__:null,contrastAPCA:qg,contrastDeltaPhi:Qg,contrastLstar:Kg,contrastMichelson:Zg,contrastWCAG21:Dg,contrastWeber:Jg});function e1(t,e,r={}){Br(r)&&(r={algorithm:r});let{algorithm:n,...i}=r;if(!n){let a=Object.keys(hn).map(s=>s.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${a}`)}t=x(t),e=x(e);for(let a in hn)if("contrast"+n.toLowerCase()===a.toLowerCase())return hn[a](t,e,i);throw new TypeError(`Unknown contrast algorithm: ${n}`)}function Jn(t){let[e,r,n]=Fr(t,Q),i=e+15*r+3*n;return[4*e/i,9*r/i]}function sd(t){let[e,r,n]=Fr(t,Q),i=e+r+n;return[e/i,r/i]}function t1(t){Object.defineProperty(t.prototype,"uv",{get(){return Jn(this)}}),Object.defineProperty(t.prototype,"xy",{get(){return sd(this)}})}var r1=Object.freeze({__proto__:null,register:t1,uv:Jn,xy:sd});function fr(t,e,r={}){Br(r)&&(r={method:r});let{method:n=he.deltaE,...i}=r;for(let a in jt)if("deltae"+n.toLowerCase()===a.toLowerCase())return jt[a](t,e,i);throw new TypeError(`Unknown deltaE method: ${n}`)}function n1(t,e=.25){let n=[v.get("oklch","lch"),"l"];return He(t,n,i=>i*(1+e))}function i1(t,e=.25){let n=[v.get("oklch","lch"),"l"];return He(t,n,i=>i*(1-e))}var a1=Object.freeze({__proto__:null,darken:i1,lighten:n1});function od(t,e,r=.5,n={}){return[t,e]=[x(t),x(e)],qe(r)==="object"&&([r,n]=[.5,r]),zr(t,e,n)(r)}function ld(t,e,r={}){let n;Da(t)&&([n,r]=[t,e],[t,e]=n.rangeArgs.colors);let{maxDeltaE:i,deltaEMethod:a,steps:s=2,maxSteps:o=1e3,...l}=r;n||([t,e]=[x(t),x(e)],n=zr(t,e,l));let c=fr(t,e),d=i>0?Math.max(s,Math.ceil(c/i)+1):s,u=[];if(o!==void 0&&(d=Math.min(d,o)),d===1)u=[{p:.5,color:n(.5)}];else{let f=1/(d-1);u=Array.from({length:d},(h,m)=>{let w=m*f;return{p:w,color:n(w)}})}if(i>0){let f=u.reduce((h,m,w)=>{if(w===0)return 0;let b=fr(m.color,u[w-1].color,a);return Math.max(h,b)},0);for(;f>i;){f=0;for(let h=1;h<u.length&&u.length<o;h++){let m=u[h-1],w=u[h],b=(w.p+m.p)/2,$=n(b);f=Math.max(f,fr($,m.color),fr($,w.color)),u.splice(h,0,{p:b,color:n(b)}),h++}}}return u=u.map(f=>f.color),u}function zr(t,e,r={}){if(Da(t)){let[l,c]=[t,e];return zr(...l.rangeArgs.colors,{...l.rangeArgs.options,...c})}let{space:n,outputSpace:i,progression:a,premultiplied:s}=r;t=x(t),e=x(e),t=Ut(t),e=Ut(e);let o={colors:[t,e],options:r};if(n?n=v.get(n):n=v.registry[he.interpolationSpace]||t.space,i=i?v.get(i):n,t=V(t,n),e=V(e,n),t=Ke(t),e=Ke(e),n.coords.h&&n.coords.h.type==="angle"){let l=r.hue=r.hue||"shorter",c=[n,"h"],[d,u]=[ue(t,c),ue(e,c)];isNaN(d)&&!isNaN(u)?d=u:isNaN(u)&&!isNaN(d)&&(u=d),[d,u]=Vp(l,[d,u]),He(t,c,d),He(e,c,u)}return s&&(t.coords=t.coords.map(l=>l*t.alpha),e.coords=e.coords.map(l=>l*e.alpha)),Object.assign(l=>{l=a?a(l):l;let c=t.coords.map((f,h)=>{let m=e.coords[h];return Mr(f,m,l)}),d=Mr(t.alpha,e.alpha,l),u={space:n,coords:c,alpha:d};return s&&(u.coords=u.coords.map(f=>f/d)),i!==n&&(u=V(u,i)),u},{rangeArgs:o})}function Da(t){return qe(t)==="function"&&!!t.rangeArgs}he.interpolationSpace="lab";function s1(t){t.defineFunction("mix",od,{returns:"color"}),t.defineFunction("range",zr,{returns:"function<color>"}),t.defineFunction("steps",ld,{returns:"array<color>"})}var o1=Object.freeze({__proto__:null,isRange:Da,mix:od,range:zr,register:s1,steps:ld}),cd=new v({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Gt,fromBase:t=>{let e=Math.max(...t),r=Math.min(...t),[n,i,a]=t,[s,o,l]=[NaN,0,(r+e)/2],c=e-r;if(c!==0){switch(o=l===0||l===1?0:(e-l)/Math.min(l,1-l),e){case n:s=(i-a)/c+(i<a?6:0);break;case i:s=(a-n)/c+2;break;case a:s=(n-i)/c+4}s=s*60}return o<0&&(s+=180,o=Math.abs(o)),s>=360&&(s-=360),[s,o*100,l*100]},toBase:t=>{let[e,r,n]=t;e=e%360,e<0&&(e+=360),r/=100,n/=100;function i(a){let s=(a+e/30)%12,o=r*Math.min(n,1-n);return n-o*Math.max(-1,Math.min(s-3,9-s,1))}return[i(0),i(8),i(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ud=new v({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:cd,fromBase(t){let[e,r,n]=t;r/=100,n/=100;let i=n+r*Math.min(n,1-n);return[e,i===0?0:200*(1-n/i),100*i]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let i=n*(1-r/2);return[e,i===0||i===1?0:(n-i)/Math.min(i,1-i)*100,i*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),l1=new v({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ud,fromBase(t){let[e,r,n]=t;return[e,n*(100-r)/100,100-n]},toBase(t){let[e,r,n]=t;r/=100,n/=100;let i=r+n;if(i>=1){let o=r/i;return[e,0,o*100]}let a=1-n,s=a===0?0:1-r/a;return[e,s*100,a*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const c1=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],u1=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]];var dd=new le({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:c1,fromXYZ_M:u1}),d1=new le({id:"a98rgb",cssId:"a98-rgb",name:"Adobe® 98 RGB compatible",base:dd,toBase:t=>t.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:t=>t.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))});const f1=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],h1=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]];var fd=new le({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:_a,toXYZ_M:f1,fromXYZ_M:h1});const m1=1/512,p1=16/512;var g1=new le({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:fd,toBase(t){return t.map(e=>e<p1?e/16:e**1.8)},fromBase(t){return t.map(e=>e>=m1?e**(1/1.8):16*e)}}),w1=new v({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Wt,fromBase(t){let[e,r,n]=t,i;const a=2e-4;return Math.abs(r)<a&&Math.abs(n)<a?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Le(i)]},toBase(t){let[e,r,n]=t,i,a;return isNaN(n)?(i=0,a=0):(i=r*Math.cos(n*Math.PI/180),a=r*Math.sin(n*Math.PI/180)),[e,i,a]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}});let hd=re.D65;const y1=216/24389,Fo=24389/27,[zo,Wo]=Jn({space:Q,coords:hd});var md=new v({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:hd,base:Q,fromBase(t){let e=[q(t[0]),q(t[1]),q(t[2])],r=e[1],[n,i]=Jn({space:Q,coords:e});if(!Number.isFinite(n)||!Number.isFinite(i))return[0,0,0];let a=r<=y1?Fo*r:116*Math.cbrt(r)-16;return[a,13*a*(n-zo),13*a*(i-Wo)]},toBase(t){let[e,r,n]=t;if(e===0||Ye(e))return[0,0,0];r=q(r),n=q(n);let i=r/(13*e)+zo,a=n/(13*e)+Wo,s=e<=8?e/Fo:Math.pow((e+16)/116,3);return[s*(9*i/(4*a)),s,s*((12-3*i-20*a)/(4*a))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Va=new v({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:md,fromBase(t){let[e,r,n]=t,i;const a=.02;return Math.abs(r)<a&&Math.abs(n)<a?i=NaN:i=Math.atan2(n,r)*180/Math.PI,[e,Math.sqrt(r**2+n**2),Le(i)]},toBase(t){let[e,r,n]=t;return r<0&&(r=0),isNaN(n)&&(n=0),[e,r*Math.cos(n*Math.PI/180),r*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}});const b1=216/24389,v1=24389/27,Uo=K[0][0],jo=K[0][1],ki=K[0][2],Go=K[1][0],qo=K[1][1],Mi=K[1][2],Zo=K[2][0],Yo=K[2][1],Ti=K[2][2];function Lt(t,e,r){const n=e/(Math.sin(r)-t*Math.cos(r));return n<0?1/0:n}function xn(t){const e=Math.pow(t+16,3)/1560896,r=e>b1?e:t/v1,n=r*(284517*Uo-94839*ki),i=r*(838422*ki+769860*jo+731718*Uo),a=r*(632260*ki-126452*jo),s=r*(284517*Go-94839*Mi),o=r*(838422*Mi+769860*qo+731718*Go),l=r*(632260*Mi-126452*qo),c=r*(284517*Zo-94839*Ti),d=r*(838422*Ti+769860*Yo+731718*Zo),u=r*(632260*Ti-126452*Yo);return{r0s:n/a,r0i:i*t/a,r1s:n/(a+126452),r1i:(i-769860)*t/(a+126452),g0s:s/l,g0i:o*t/l,g1s:s/(l+126452),g1i:(o-769860)*t/(l+126452),b0s:c/u,b0i:d*t/u,b1s:c/(u+126452),b1i:(d-769860)*t/(u+126452)}}function Jo(t,e){const r=e/360*Math.PI*2,n=Lt(t.r0s,t.r0i,r),i=Lt(t.r1s,t.r1i,r),a=Lt(t.g0s,t.g0i,r),s=Lt(t.g1s,t.g1i,r),o=Lt(t.b0s,t.b0i,r),l=Lt(t.b1s,t.b1i,r);return Math.min(n,i,a,s,o,l)}var $1=new v({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Va,gamutSpace:Gt,fromBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(e>99.9999999)i=0,e=100;else if(e<1e-8)i=0,e=0;else{let a=xn(e),s=Jo(a,n);i=r/s*100}return[n,i,e]},toBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let a=xn(n);i=Jo(a,e)/100*r}return[n,i,e]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});K[0][0];K[0][1];K[0][2];K[1][0];K[1][1];K[1][2];K[2][0];K[2][1];K[2][2];function Ot(t,e){return Math.abs(e)/Math.sqrt(Math.pow(t,2)+1)}function Ko(t){let e=Ot(t.r0s,t.r0i),r=Ot(t.r1s,t.r1i),n=Ot(t.g0s,t.g0i),i=Ot(t.g1s,t.g1i),a=Ot(t.b0s,t.b0i),s=Ot(t.b1s,t.b1i);return Math.min(e,r,n,i,a,s)}var E1=new v({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Va,gamutSpace:"self",fromBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(e>99.9999999)i=0,e=100;else if(e<1e-8)i=0,e=0;else{let a=xn(e),s=Ko(a);i=r/s*100}return[n,i,e]},toBase(t){let[e,r,n]=[q(t[0]),q(t[1]),q(t[2])],i;if(n>99.9999999)n=100,i=0;else if(n<1e-8)n=0,i=0;else{let a=xn(n);i=Ko(a)/100*r}return[n,i,e]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}});const Xo=203,Qo=2610/2**14,S1=2**14/2610,k1=2523/2**5,el=2**5/2523,tl=3424/2**12,rl=2413/2**7,nl=2392/2**7;var M1=new le({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Yn,toBase(t){return t.map(function(e){return(Math.max(e**el-tl,0)/(rl-nl*e**el))**S1*1e4/Xo})},fromBase(t){return t.map(function(e){let r=Math.max(e*Xo/1e4,0),n=tl+rl*r**Qo,i=1+nl*r**Qo;return(n/i)**k1})}});const il=.17883277,al=.28466892,sl=.55991073,xi=3.7743;var T1=new le({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Yn,toBase(t){return t.map(function(e){return e<=.5?e**2/3*xi:(Math.exp((e-sl)/il)+al)/12*xi})},fromBase(t){return t.map(function(e){return e/=xi,e<=1/12?Math.sqrt(3*e):il*Math.log(12*e-al)+sl})}});const pd={};Je.add("chromatic-adaptation-start",t=>{t.options.method&&(t.M=gd(t.W1,t.W2,t.options.method))});Je.add("chromatic-adaptation-end",t=>{t.M||(t.M=gd(t.W1,t.W2,t.options.method))});function Kn({id:t,toCone_M:e,fromCone_M:r}){pd[t]=arguments[0]}function gd(t,e,r="Bradford"){let n=pd[r],[i,a,s]=F(n.toCone_M,t),[o,l,c]=F(n.toCone_M,e),d=[[o/i,0,0],[0,l/a,0],[0,0,c/s]],u=F(d,n.toCone_M);return F(n.fromCone_M,u)}Kn({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]});Kn({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]});Kn({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]});Kn({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]});Object.assign(re,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]});re.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767];const x1=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],A1=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]];var wd=new le({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:re.ACES,toXYZ_M:x1,fromXYZ_M:A1});const nn=2**-16,Ai=-.35828683,an=(Math.log2(65504)+9.72)/17.52;var C1=new le({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Ai,an],name:"Red"},g:{range:[Ai,an],name:"Green"},b:{range:[Ai,an],name:"Blue"}},referred:"scene",base:wd,toBase(t){const e=-.3013698630136986;return t.map(function(r){return r<=e?(2**(r*17.52-9.72)-nn)*2:r<an?2**(r*17.52-9.72):65504})},fromBase(t){return t.map(function(e){return e<=0?(Math.log2(nn)+9.72)/17.52:e<nn?(Math.log2(nn+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),ol=Object.freeze({__proto__:null,A98RGB:d1,A98RGB_Linear:dd,ACEScc:C1,ACEScg:wd,CAM16_JMh:wg,HCT:xr,HPLuv:E1,HSL:cd,HSLuv:$1,HSV:ud,HWB:l1,ICTCP:Qi,JzCzHz:Xi,Jzazbz:ju,LCH:Tr,LCHuv:Va,Lab:de,Lab_D65:ra,Luv:md,OKLCH:w1,OKLab:Wt,P3:id,P3_Linear:rd,ProPhoto:g1,ProPhoto_Linear:fd,REC_2020:td,REC_2020_Linear:Yn,REC_2100_HLG:T1,REC_2100_PQ:M1,XYZ_ABS_D65:Pa,XYZ_D50:_a,XYZ_D65:Q,sRGB:Gt,sRGB_Linear:nd});let P=class ie{constructor(...e){let r;e.length===1&&(r=x(e[0]));let n,i,a;r?(n=r.space||r.spaceId,i=r.coords,a=r.alpha):[n,i,a]=e,Object.defineProperty(this,"space",{value:v.get(n),writable:!1,enumerable:!0,configurable:!0}),this.coords=i?i.slice():[0,0,0],this.alpha=a>1||a===void 0?1:a<0?0:a;for(let s=0;s<this.coords.length;s++)this.coords[s]==="NaN"&&(this.coords[s]=NaN);for(let s in this.space.coords)Object.defineProperty(this,s,{get:()=>this.get(s),set:o=>this.set(s,o)})}get spaceId(){return this.space.id}clone(){return new ie(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...e){let r=Ig(this,...e);return r.color=new ie(r.color),r}static get(e,...r){return e instanceof ie?e:new ie(e,...r)}static defineFunction(e,r,n=r){let{instance:i=!0,returns:a}=n,s=function(...o){let l=r(...o);if(a==="color")l=ie.get(l);else if(a==="function<color>"){let c=l;l=function(...d){let u=c(...d);return ie.get(u)},Object.assign(l,c)}else a==="array<color>"&&(l=l.map(c=>ie.get(c)));return l};e in ie||(ie[e]=s),i&&(ie.prototype[e]=function(...o){return s(this,...o)})}static defineFunctions(e){for(let r in e)ie.defineFunction(r,e[r],e[r])}static extend(e){if(e.register)e.register(ie);else for(let r in e)ie.defineFunction(r,e[r])}};P.defineFunctions({get:ue,getAll:Fr,set:He,setAll:Ia,to:V,equals:_g,inGamut:ht,toGamut:Ke,distance:Uu,toString:yr});Object.assign(P,{util:Np,hooks:Je,WHITES:re,Space:v,spaces:v.registry,parse:zu,defaults:he});for(let t of Object.keys(ol))v.register(ol[t]);for(let t in v.registry)na(t,v.registry[t]);Je.add("colorspace-init-end",t=>{var e;na(t.id,t),(e=t.aliases)==null||e.forEach(r=>{na(r,t)})});function na(t,e){let r=t.replace(/-/g,"_");Object.defineProperty(P.prototype,r,{get(){let n=this.getAll(t);return typeof Proxy>"u"?n:new Proxy(n,{has:(i,a)=>{try{return v.resolveCoord([e,a]),!0}catch{}return Reflect.has(i,a)},get:(i,a,s)=>{if(a&&typeof a!="symbol"&&!(a in i)){let{index:o}=v.resolveCoord([e,a]);if(o>=0)return i[o]}return Reflect.get(i,a,s)},set:(i,a,s,o)=>{if(a&&typeof a!="symbol"&&!(a in i)||a>=0){let{index:l}=v.resolveCoord([e,a]);if(l>=0)return i[l]=s,this.setAll(t,i),!0}return Reflect.set(i,a,s,o)}})},set(n){this.setAll(t,n)},configurable:!0,enumerable:!0})}P.extend(jt);P.extend({deltaE:fr});Object.assign(P,{deltaEMethods:jt});P.extend(a1);P.extend({contrast:e1});P.extend(r1);P.extend(Rg);P.extend(o1);P.extend(hn);function yd(t){return pt(t,(e,r)=>r instanceof P?J(r.toString({format:"hex"})):yd(r))}const L1="dodgerblue";function ia(t){const e=Math.abs(t.contrast("white","APCA")),r=Math.abs(t.contrast("black","APCA"));return e>r?"white":"black"}function Ci({background:t,foreground:e}){return{background:t??new P(ia(e)),foreground:e??new P(ia(t))}}var An;(function(t){t.Dark="dark",t.Light="light"})(An||(An={}));function O1(t){return t==="black"?"white":"black"}const N1={black:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")},white:{foregroundFaint1:new P("#ccc"),foregroundFaint2:new P("#eee")}},I1={black:{backgroundFaint1:new P("#666"),backgroundFaint2:new P("#444")},white:{backgroundFaint1:new P("#ccc"),backgroundFaint2:new P("#fafafa")}};function ll({themeColor:t=L1,themeStyle:e=An.Light}={}){const r=new P(t),n=new P(e===An.Dark?"black":"white"),i=ia(n),a=new P(i),s={nav:{hover:Ci({background:r.clone().set({"hsl.l":93})}),active:Ci({background:r.clone().set({"hsl.l":90})}),selected:Ci({background:r.clone().set({"hsl.l":85})})},accent:{icon:r.clone().set({"hsl.l":40})},page:{background:n,...I1[O1(i)],foreground:a,...N1[i]}};return yd(s)}const Cn=xa()("element-book-change-route"),cl="vira-",{defineElement:rr,defineElementNoInputs:bw}=gu({assertInputs:t=>{if(!t.tagName.startsWith(cl))throw new Error(`Tag name should start with '${cl}' but got '${t.tagName}'`)}}),_1=P;function P1(t){try{if(!t)throw new Error("invalid empty color");return new _1(t)}catch{const r=String(t),n=r.toLowerCase().match(/\[\s*object\s+object\s*\]/)?Jd(()=>JSON.stringify(t),{fallbackValue:r}):r;throw new Error(`Invalid color: ${n}`)}}const bd=y`
    pointer-events: none;
    opacity: 0.3;
`,Ze=St({"vira-extended-animation-duration":"1.2s","vira-pretty-animation-duration":"300ms","vira-interaction-animation-duration":"84ms"}),Ar=St({"vira-form-input-border-radius":"8px"}),Ln=St({"vira-focus-outline-color":"blue","vira-focus-outline-border-radius":y`calc(${Ar["vira-form-input-border-radius"].value} + 4px)`});function vd({mainSelector:t,elementBorderSize:e,outlineGap:r=2,outlineWidth:n=3}){const i=J(Cl(n+r+e));return y`
        ${J(t)}::after {
            content: '';
            top: calc(${i} * -1);
            left: calc(${i} * -1);
            position: absolute;
            width: calc(100% + calc(${i} * 2));
            height: calc(100% + calc(${i} * 2));
            box-sizing: border-box;
            pointer-events: none;
            border: ${n}px solid ${Ln["vira-focus-outline-color"].value};
            border-radius: ${Ln["vira-focus-outline-border-radius"].value};
            z-index: 100;
        }
    `}const R1=y`
    padding: 0;
    margin: 0;
`,lt=y`
    ${R1};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`,aa=y`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`,T=rr()({tagName:"vira-icon",hostClasses:{"vira-icon-fit-container":({inputs:t})=>!!t.fitContainer},styles:({hostClasses:t})=>y`
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
    `,renderCallback({inputs:t}){return t.icon?t.icon.svgTemplate:""}});var On;(function(t){t.Default="vira-button-default",t.Outline="vira-button-outline"})(On||(On={}));const Y=rr()({tagName:"vira-button",hostClasses:{"vira-button-outline-style":({inputs:t})=>t.buttonStyle===On.Outline,"vira-button-disabled":({inputs:t})=>!!t.disabled},cssVars:{"vira-button-primary-color":"#0a89ff","vira-button-primary-hover-color":"#59b1ff","vira-button-primary-active-color":"#007ff6","vira-button-secondary-color":"#ffffff","vira-button-padding":"5px 10px","vira-button-internal-foreground-color":"","vira-button-internal-background-color":""},styles:({hostClasses:t,cssVars:e})=>y`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${aa};
            ${e["vira-button-internal-background-color"].name}: ${e["vira-button-primary-color"].value};
            ${e["vira-button-internal-foreground-color"].name}: ${e["vira-button-secondary-color"].value};
            ${Ln["vira-focus-outline-color"].name}: ${e["vira-button-primary-hover-color"].value}
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
            ${bd};
        }

        ${t["vira-button-outline-style"].selector} button {
            color: ${e["vira-button-internal-background-color"].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${lt};
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
            border-radius: ${Ar["vira-form-input-border-radius"].value};
            background-color: ${e["vira-button-internal-background-color"].value};
            color: ${e["vira-button-internal-foreground-color"].value};
            padding: ${e["vira-button-padding"].value};
            transition:
                color ${Ze["vira-interaction-animation-duration"].value},
                background-color
                    ${Ze["vira-interaction-animation-duration"].value},
                border-color ${Ze["vira-interaction-animation-duration"].value};
        }

        ${vd({mainSelector:"button:focus:focus-visible:not(:active):not([disabled])",elementBorderSize:2})}

        button ${T} + .text-template {
            margin-left: 8px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.icon?p`
                  <${T.assign({icon:t.icon})}></${T}>
              `:"",r=t.text?p`
                  <span class="text-template">${t.text}</span>
              `:"";return p`
            <button ?disabled=${t.disabled}>${e} ${r}</button>
        `}});var Cr;(function(t){t.Header="header"})(Cr||(Cr={}));const st=rr()({tagName:"vira-collapsible-wrapper",hostClasses:{"vira-collapsible-wrapper-expanded":({inputs:t})=>t.expanded},styles:({hostClasses:t})=>y`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${lt};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${Ze["vira-pretty-animation-duration"].value};
            overflow: hidden;
        }
        ${t["vira-collapsible-wrapper-expanded"].name} .collapsing-element {
            pointer-events: none;
        }
    `,events:{expandChange:Ve()},stateInitStatic:{contentHeight:0},renderCallback({state:t,updateState:e,dispatch:r,events:n,inputs:i}){const a=i.expanded?y`
                  height: ${t.contentHeight}px;
              `:y`
                  height: 0;
              `;return p`
            <button
                class="header-wrapper"
                ${H("click",()=>{r(new n.expandChange(!i.expanded))})}
            >
                <slot name=${Cr.Header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${a} disabled="disabled">
                <div
                    ${pu(({contentRect:s})=>{e({contentHeight:s.height})})}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `}}),E=St({"vira-icon-stroke-color":"currentColor","vira-icon-fill-color":"none","vira-icon-stroke-width":"1px"});function ve({name:t,svgTemplate:e}){return{name:t,svgTemplate:e}}function ul(t,e){const r=be(e).map(n=>{const i=e[n],a=P1(i);return`${E[n].name}: ${a.toString()};`}).join(" ");return ve({name:t.name,svgTemplate:p`
            <div style=${r}>${t.svgTemplate}</div>
        `})}const $d=ve({name:"CloseX24Icon",svgTemplate:p`
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
    `}),Ed=ve({name:"Element16Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path
                d="M4 5 1 8l3 3m8-6 3 3-3 3m-5 0 2-6"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),je=ve({name:"Element24Icon",svgTemplate:p`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10"
                fill="none"
                stroke=${E["vira-icon-stroke-color"].value}
                stroke-width=${E["vira-icon-stroke-width"].value}
            />
        </svg>
    `}),Sd=ve({name:"EyeClosed24Icon",svgTemplate:p`
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
    `}),kd=ve({name:"EyeOpen24Icon",svgTemplate:p`
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
    `}),Md=ve({name:"Loader24Icon",svgTemplate:p`
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
    `}),D1=y`
    @keyframes loader-animated-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: ${Ze["vira-extended-animation-duration"].value} linear
            loader-animated-spin infinite;
    }
`,Lr=ve({name:"LoaderAnimated24Icon",svgTemplate:p`
        <style>
            ${D1}
        </style>
        ${Md.svgTemplate}
    `}),Ha=ve({name:"Options24Icon",svgTemplate:p`
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
    `}),Nn=ve({name:"StatusFailure24Icon",svgTemplate:p`
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
    `}),V1=ve({name:"StatusInProgress24Icon",svgTemplate:p`
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
    `}),H1=ve({name:"StatusSuccess24Icon",svgTemplate:p`
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
    `}),B1={CloseX24Icon:$d,Element16Icon:Ed,Element24Icon:je,EyeClosed24Icon:Sd,EyeOpen24Icon:kd,Loader24Icon:Md,LoaderAnimated24Icon:Lr,Options24Icon:Ha,StatusFailure24Icon:Nn,StatusInProgress24Icon:V1,StatusSuccess24Icon:H1};var qt;(function(t){t.Loading="loading",t.Error="error"})(qt||(qt={}));const Nt=rr()({tagName:"vira-image",hostClasses:{"vira-image-height-constrained":({inputs:t})=>t.dominantDimension==="height"},events:{imageLoad:Ve(),imageError:Ve()},styles:({hostClasses:t})=>y`
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
    `,stateInitStatic:{loadedUrls:{},erroredUrls:{}},renderCallback({inputs:t,state:e,updateState:r,dispatch:n,events:i}){const a=t.imageUrl,s=e.erroredUrls[a]?p`
                  <slot class="status-wrapper" name=${qt.Error}>
                      <${T.assign({icon:Nn})} class="error"></${T}>
                  </slot>
              `:e.loadedUrls[a]?void 0:p`
                    <slot class="status-wrapper" name=${qt.Loading}>
                        <${T.assign({icon:Lr})}></${T}>
                    </slot>
                `;return p`
            ${ce(!!s,s)}
            <img
                class=${eu({hidden:!!s})}
                ${H("load",async()=>{t._debugLoadDelay&&await Ri(t._debugLoadDelay.milliseconds),r({loadedUrls:{...e.loadedUrls,[a]:!0}}),n(new i.imageLoad)})}
                ${H("error",async o=>{t._debugLoadDelay&&await Ri(t._debugLoadDelay.milliseconds),r({erroredUrls:{...e.erroredUrls,[a]:!0}}),n(new i.imageError(o.error))})}
                src=${a}
            />
        `}});function sa({input:t,matcher:e}){return!t||!e?!0:t.length>1?!!t.split("").every(r=>sa({input:r,matcher:e})):e instanceof RegExp?!!t.match(e):e.includes(t)}function Td({value:t,allowed:e,blocked:r}){const n=e?sa({input:t,matcher:e}):!0,i=r?sa({input:t,matcher:r}):!1;return n&&!i}function xd(t){if(!t.value)return{filtered:t.value,blocked:""};const{filtered:e,blocked:r}=t.value.split("").reduce((n,i)=>(Td({...t,value:i})?n.filtered.push(i):n.blocked.push(i),n),{filtered:[],blocked:[]});return{filtered:e.join(""),blocked:r.join("")}}function F1({inputs:t,filteredValue:e,event:r,inputBlockedCallback:n,newValueCallback:i}){if(!(r instanceof InputEvent))throw new Error("Text input event was not an InputEvent.");const a=dr(r,HTMLInputElement),s=r.data,o=e;let l=a.value??"";if(s)if(s.length===1)Td({value:s,allowed:t.allowedInputs,blocked:t.blockedInputs})||(l=o,n(s));else{const{filtered:c,blocked:d}=xd({value:s,allowed:t.allowedInputs,blocked:t.blockedInputs});l=c,n(d)}a.value!==l&&(a.value=l),o!==l&&i(l)}var mt;(function(t){t.Default="text",t.Password="password",t.Email="email"})(mt||(mt={}));const z=rr()({tagName:"vira-input",hostClasses:{"vira-input-disabled":({inputs:t})=>!!t.disabled,"vira-input-fit-text":({inputs:t})=>!!t.fitText,"vira-input-clear-button-shown":({inputs:t})=>!!t.showClearButton},cssVars:{"vira-input-placeholder-color":"#cccccc","vira-input-text-color":"#000000","vira-input-border-color":"#cccccc","vira-input-focus-border-color":"#59b1ff","vira-input-text-selection-color":"#cfe9ff","vira-input-action-button-color":"#aaaaaa","vira-input-clear-button-hover-color":"#ff0000","vira-input-clear-button-active-color":"#b30000","vira-input-show-password-button-hover-color":"#0a89ff","vira-input-show-password-button-active-color":"#0261ba","vira-input-padding-horizontal":"10px","vira-input-padding-vertical":"6px"},events:{valueChange:Ve(),inputBlocked:Ve()},styles:({hostClasses:t,cssVars:e})=>y`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${Ln["vira-focus-outline-color"].name}: ${e["vira-input-focus-border-color"].value};
                color: ${e["vira-input-text-color"].value};
            }

            ${t["vira-input-disabled"].selector} {
                ${bd};
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
                ${lt};
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
                ${aa};
                vertical-align: middle;
                max-height: 100%;
            }

            ${t["vira-input-clear-button-shown"].selector} label {
                padding-right: 4px;
            }

            pre {
                ${lt};
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
                border-radius: ${Ar["vira-form-input-border-radius"].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${e["vira-input-border-color"].value};
                transition: border
                    ${Ze["vira-interaction-animation-duration"].value};
            }

            label {
                ${lt};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${e["vira-input-padding-horizontal"].value};
                border-radius: ${Ar["vira-form-input-border-radius"].value};
                background-color: transparent;
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${vd({mainSelector:"input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border",elementBorderSize:0})}

            .left-side-icon {
                margin-right: calc(${e["vira-input-padding-horizontal"].value} - 4px);
            }

            input {
                ${lt};
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
                ${aa};
            }

            button {
                ${lt};
                cursor: pointer;
                display: flex;
                transition: color
                    ${Ze["vira-interaction-animation-duration"].value};
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
        `,stateInitStatic:{forcedInputWidth:0,showPassword:!1},renderCallback:({inputs:t,dispatch:e,state:r,updateState:n,events:i})=>{const{filtered:a}=xd({value:t.value??"",allowed:t.allowedInputs,blocked:t.blockedInputs}),s=t.icon?p`
                  <${T.assign({icon:t.icon})} class="left-side-icon"></${T}>
              `:"",o=t.fitText?y`
                  width: ${r.forcedInputWidth}px;
              `:"";return p`
            <label>
                ${s}
                ${ce(!!t.fitText,p`
                        <span
                            class="size-span"
                            ${pu(({contentRect:l})=>{n({forcedInputWidth:l.width})})}
                        >
                            <pre>${a||t.placeholder||""}</pre>
                        </span>
                    `)}
                <input
                    type=${z1(t.type,r.showPassword)}
                    style=${o}
                    autocomplete=${t.disableBrowserHelps?"off":""}
                    autocorrect=${t.disableBrowserHelps?"off":""}
                    autocapitalize=${t.disableBrowserHelps?"off":""}
                    spellcheck=${t.disableBrowserHelps?"false":""}
                    ?disabled=${t.disabled}
                    .value=${a}
                    ${H("input",l=>{F1({inputs:t,filteredValue:a,event:l,inputBlockedCallback(c){e(new i.inputBlocked(c))},newValueCallback(c){e(new i.valueChange(c))}})})}
                    placeholder=${t.placeholder}
                />
                ${ce(!!(t.showClearButton&&t.value),p`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${H("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),e(new i.valueChange(""))})}
                        >
                            <${T.assign({icon:$d})}></${T}>
                        </button>
                    `)}
                ${ce(t.type===mt.Password,p`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${H("click",l=>{l.stopImmediatePropagation(),l.preventDefault(),n({showPassword:!r.showPassword})})}
                        >
                            <${T.assign({icon:r.showPassword?kd:Sd})}></${T}>
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
        `}});function z1(t,e){return t===mt.Password&&e?mt.Default:t||mt.Default}const lr=rr()({tagName:"vira-link",cssVars:{"vira-link-hover-color":"currentColor"},styles:({cssVars:t})=>y`
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
    `,events:{routeChange:Ve()},renderCallback({inputs:t,dispatch:e,events:r}){var i,a;function n(s){t.route&&Tu(s)&&(s.preventDefault(),t.route.scrollToTop&&window.scrollTo(0,0),e(new r.routeChange(t.route.route)))}if((i=t.link)!=null&&i.newTab)return p`
                <a href=${t.link.url} target="_blank" rel="noopener noreferrer">
                    <slot></slot>
                </a>
            `;{const s=t.link?t.link.url:(a=t.route)==null?void 0:a.router.createRoutesUrl(t.route.route);return p`
                <a href=${s} rel="noopener noreferrer" ${H("click",n)}>
                    <slot></slot>
                </a>
            `}}}),{defineElement:$e,defineElementNoInputs:vw}=gu(),ge=$e()({tagName:"book-route-link",cssVars:{"book-route-link-anchor-padding":""},styles:({cssVars:t})=>y`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${t["book-route-link-anchor-padding"].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,renderCallback:({inputs:t,dispatch:e})=>{var n,i;const r=((i=t.router)==null?void 0:i.createRoutesUrl({...(n=t.router)==null?void 0:n.getCurrentRawRoutes(),...t.route}))??"#";return p`
            <a
                href=${r}
                ${H("click",a=>{(!t.router||Tu(a))&&(a.preventDefault(),window.scrollTo(0,0),e(new Cn(t.route)))})}
            >
                <slot></slot>
            </a>
        `}});function W1(t,e){return t.entry.entryType===X.Root?!1:!!(t.entry.entryType===X.Page||Ue(e,t.fullUrlBreadcrumbs.slice(0,-1))||Ue(e==null?void 0:e.slice(0,-1),t.fullUrlBreadcrumbs.slice(0,-1)))}const Pe=$e()({tagName:"book-nav",cssVars:{"book-nav-internal-indent":"0"},styles:({cssVars:t})=>y`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${N["element-book-page-background-faint-level-2-color"].value};
        }

        .title-row:hover {
            background-color: ${N["element-book-nav-hover-background-color"].value};
            color: ${N["element-book-nav-hover-foreground-color"].value};
        }

        .title-row:active {
            background-color: ${N["element-book-nav-active-background-color"].value};
            color: ${N["element-book-nav-active-foreground-color"].value};
        }

        .title-row {
            display: block;
            ${ge.cssVars["book-route-link-anchor-padding"].name}: 1px 24px 1px calc(calc(16px * ${t["book-nav-internal-indent"].value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${N["element-book-nav-selected-background-color"].value};
            color: ${N["element-book-nav-selected-foreground-color"].value};
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
            color: ${N["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){const e=t.flattenedNodes.map(r=>{if(!W1(r,t.selectedPath))return;const n=y`
                --book-nav-internal-indent: ${r.fullUrlBreadcrumbs.length-1};
            `;return p`
                <li style=${n}>
                    <${ge.assign({router:t.router,route:{paths:[oe.Book,...r.fullUrlBreadcrumbs]}})}
                        class=${eu({"title-row":!0,selected:t.selectedPath?Ue(t.selectedPath,r.fullUrlBreadcrumbs):!1})}
                    >
                        <div class="title-text">
                            ${ce(Vt(r,X.ElementExample),p`
                                    <${T.assign({icon:Ed})}></${T}>
                                `)}
                            ${r.entry.title}
                        </div>
                    </${ge}>
                </li>
            `});return p`
            <${ge.assign({route:zt,router:t.router})}>
                <slot name=${Ae.NavHeader}>Book</slot>
            </${ge}>
            <ul>
                ${e}
            </ul>
        `}});async function U1(t){await Di(2);const e=t.shadowRoot.querySelector(".selected");if(!e)throw new Error("Failed to find selected nav tree element.");await pf(e)||e.scrollIntoView({behavior:"smooth",block:"center"})}const Qe=$e()({tagName:"book-error",styles:y`
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
    `,renderCallback({inputs:t}){return(B(t.message,"array")?t.message:[t.message]).map(r=>p`
                <p>${r}</p>
            `)}}),Or=$e()({tagName:"book-page-controls",events:{controlValueChange:Ve()},hostClasses:{"book-page-controls-has-controls":({inputs:t})=>!!Object.keys(t.config).length},styles:({hostClasses:t})=>y`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
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

        ${z} {
            height: 24px;
            max-width: 128px;
        }

        ${T}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,renderCallback({inputs:t,dispatch:e,events:r}){return Object.entries(t.config).length?Object.entries(t.config).map(([n,i],a)=>{if(i.controlType===I.Hidden)return"";const s=j1(t.currentValues[n],i,o=>{const l=B(t.fullUrlBreadcrumbs,"array")?t.fullUrlBreadcrumbs:t.fullUrlBreadcrumbs[n];if(!l)throw new Error(`Failed to find breadcrumbs from given control name: '${n}'`);e(new r.controlValueChange({fullUrlBreadcrumbs:l,newValues:{...t.currentValues,[n]:o}}))});return p`
                    <div class="control-wrapper">
                        ${ce(a===0,p`
                                <${T.assign({icon:Ha})}
                                    class="options-icon"
                                ></${T}>
                            `)}
                        <label class="control-wrapper">
                            <span>${n}</span>
                            ${s}
                        </label>
                    </div>
                `}):""}});function j1(t,e,r){return Mt(e,I.Hidden)?"":Mt(e,I.Checkbox)?p`
            <input
                type="checkbox"
                .value=${t}
                ${H("input",n=>{const i=dr(n,HTMLInputElement);r(i.checked)})}
            />
        `:Mt(e,I.Color)?p`
            <input
                type="color"
                .value=${t}
                ${H("input",n=>{const i=dr(n,HTMLInputElement);r(i.value)})}
            />
        `:Mt(e,I.Text)?p`
            <${z.assign({value:String(t),showClearButton:!0,disableBrowserHelps:!0})}
                ${H(z.events.valueChange,n=>{r(n.detail)})}
            ></${z}>
        `:Mt(e,I.Number)?p`
            <input
                type="number"
                .value=${t}
                ${H("input",n=>{const i=dr(n,HTMLInputElement);r(i.value)})}
            />
        `:Mt(e,I.Dropdown)?p`
            <select
                .value=${t}
                ${H("input",n=>{const i=dr(n,HTMLSelectElement);r(i.value)})}
            >
                ${e.options.map(n=>p`
                        <option ?selected=${n===t} value=${n}>
                            ${n}
                        </option>
                    `)}
            </select>
        `:p`
            <p class="error">${e.controlType} controls are not implemented yet.</p>
        `}const dl=$e()({tagName:"book-breadcrumbs",styles:y`
        :host {
            display: flex;
            color: #999;
        }

        .spacer {
            padding: 0 4px;
        }
    `,renderCallback:({inputs:t})=>{const e=t.currentRoute.paths.slice(1);return e.length?e.map((r,n,i)=>{const a=n>=i.length-1,s=i.slice(0,n+1),o=a?"":p`
                      <span class="spacer">&gt;</span>
                  `;return p`
                <${ge.assign({route:{hash:void 0,search:void 0,paths:[oe.Book,...s]},router:t.router})}>
                    ${r}
                </${ge}>
                ${o}
            `}):p`
                &nbsp;
            `}}),Li=$e()({tagName:"book-breadcrumbs-bar",styles:y`
        :host {
            border-bottom: 1px solid
                ${N["element-book-page-foreground-faint-level-2-color"].value};
            padding: 4px 8px;
            background-color: ${N["element-book-page-background-color"].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,renderCallback({inputs:t,dispatch:e}){return p`
            ${ce(!!t.currentSearch,p`
                    &nbsp;
                `,p`
                    <${dl.assign({currentRoute:t.currentRoute,router:t.router})}></${dl}>
                `)}
            <input
                placeholder="search"
                .value=${t.currentSearch}
                ${H("input",async r=>{const n=r.currentTarget;if(!(n instanceof HTMLInputElement))throw new Error("Failed to find input element for search.");const i=n.value;await Ri(200),n.value===i&&(n.value?e(new Cn({paths:[oe.Search,encodeURIComponent(n.value)]})):e(new Cn(zt)))})}
            />
        `}}),fl=$e()({tagName:"book-entry-description",styles:y`
        :host {
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${N["element-book-page-foreground-color"].value};
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
            `)}}),hl=$e()({tagName:"book-page-wrapper",styles:y`
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

        ${ge} {
            display: inline-block;
        }
    `,renderCallback({inputs:t}){const e=t.isTopLevel?p`
                  <h2 class="header-with-icon">${t.pageNode.entry.title}</h2>
              `:p`
                  <h3 class="header-with-icon">${t.pageNode.entry.title}</h3>
              `,r=[oe.Book,...t.pageNode.fullUrlBreadcrumbs],n=Tl(t.pageNode.entry.errors);return n&&console.error(n),p`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${ge.assign({route:{paths:r,hash:void 0,search:void 0},router:t.router})}>
                        ${e}
                    </${ge}>
                    ${n?p`
                              <${Qe.assign({message:n.message})}></${Qe}>
                          `:p`
                              <${fl.assign({descriptionParagraphs:t.pageNode.entry.descriptionParagraphs??[]})}></${fl}>
                              <${Or.assign({config:t.pageNode.entry.controls,currentValues:Ca(t.controls,t.pageNode.fullUrlBreadcrumbs),fullUrlBreadcrumbs:t.pageNode.fullUrlBreadcrumbs})}></${Or}>
                          `}
                </div>
            </div>
        `}}),sn=$e()({tagName:"book-element-example-controls",styles:y`
        :host {
            display: flex;
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,renderCallback({inputs:t}){const e=[oe.Book,...t.elementExampleNode.fullUrlBreadcrumbs];return p`
            <${ge.assign({route:{paths:e,hash:void 0,search:void 0},router:t.router})}>
                ${t.elementExampleNode.entry.title}
            </${ge}>
        `}}),ml=Symbol("unset-internal-state"),pl=$e()({tagName:"book-element-example-viewer",stateInitStatic:{isUnset:ml},renderCallback({state:t,inputs:e,updateState:r}){try{if(e.elementExampleNode.entry.errors.length)throw Tl(e.elementExampleNode.entry.errors);if(!e.elementExampleNode.entry.renderCallback||typeof e.elementExampleNode.entry.renderCallback=="string")throw new Error(`Failed to render example '${e.elementExampleNode.entry.title}': renderCallback is not a function`);t.isUnset===ml&&r({isUnset:void 0,...e.elementExampleNode.entry.stateInitStatic});const n=e.elementExampleNode.entry.renderCallback({state:t,updateState:r,controls:e.currentPageControls});if(n instanceof Promise)throw new Error("renderCallback output cannot be a promise");return p`
                ${ce(!!e.elementExampleNode.entry.styles,p`
                        <style>
                            ${e.elementExampleNode.entry.styles}
                        </style>
                    `)}
                ${n}
            `}catch(n){return console.error(n),p`
                <${Qe.assign({message:`${e.elementExampleNode.entry.title} failed: ${Yt(n)}`})}></${Qe}>
            `}},options:{allowPolymorphicState:!0}}),gl=$e()({tagName:"book-element-example-wrapper",styles:y`
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

        ${sn} {
            color: ${N["element-book-page-foreground-faint-level-1-color"].value};
        }

        :host(:hover) ${sn} {
            color: ${N["element-book-accent-icon-color"].value};
        }
    `,renderCallback({inputs:t}){return p`
            <div class="individual-example-wrapper">
                <${sn.assign(tf(t,["currentPageControls"]))}></${sn}>
                <${pl.assign(t)}></${pl}>
            </div>
        `}});function Ad(t,e,r,n){const i=qi(r,n),a=[];if(i){const s=Ad(t,e,i,n);s&&a.push(s)}if(Vt(r,X.Page)&&!t.includes(r)){const s=Ca(e,r.fullUrlBreadcrumbs);a.push({config:r.entry.controls,current:s,breadcrumbs:pt(s,()=>r.fullUrlBreadcrumbs)})}return a.reduce((s,o)=>({config:{...s.config,...o.config},current:{...s.current,...o.current},breadcrumbs:{...s.breadcrumbs,...o.breadcrumbs}}),{config:{},current:{},breadcrumbs:{}})}function G1({currentNodes:t,isTopLevel:e,router:r,isSearching:n,controls:i,originalTree:a}){if(!t.length&&n)return[p`
                No results
            `];const s=qa(t,1)?Ad(t,i,t[0],a):void 0,o=s&&Object.values(s.config).length&&qa(t,1)?p`
                  <${Or.assign({config:s.config,currentValues:s.current,fullUrlBreadcrumbs:s.breadcrumbs})}></${Or}>
              `:j,l=f0(t,c=>c.fullUrlBreadcrumbs.join(">"),(c,d)=>{if(Vt(c,X.Page))return p`
                    <${hl.assign({isTopLevel:e,pageNode:c,controls:i,router:r})}
                        class="block-entry"
                    ></${hl}>
                `;if(Vt(c,X.ElementExample)){const u=Ca(i,c.fullUrlBreadcrumbs.slice(0,-1));return p`
                    <${gl.assign({elementExampleNode:c,currentPageControls:u,router:r})}
                        class="inline-entry"
                    ></${gl}>
                `}else return Vt(c,X.Root)?j:p`
                    <${Qe.assign({message:`Unknown entry type for rendering: '${c.entry.entryType}'`})}
                        class="block-entry"
                    ></${Qe}>
                `});return[o,l]}const It=$e()({tagName:"book-entry-display",styles:y`
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

        ${Li} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${Ze["vira-interaction-animation-duration"].value} forwards;
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
    `,events:{loadingRender:Ve()},stateInitStatic:{lastElement:void 0},renderCallback:({inputs:t,dispatch:e,events:r,state:n,updateState:i})=>{const a=Zi(t.currentRoute.paths),s=G1({currentNodes:t.currentNodes,isTopLevel:!0,router:t.router,isSearching:!!a,controls:t.controls,originalTree:t.originalTree});return p`
            <${Li.assign({currentSearch:a,currentRoute:t.currentRoute,router:t.router})}></${Li}>

            ${ce(t.showLoading,p`
                    <div
                        ${Ks(()=>{e(new r.loadingRender(!0))})}
                        class="loading"
                    >
                        <${T.assign({icon:Lr})}></${T}>
                    </div>
                    ${ce(!!n.lastElement,p`
                            ${n.lastElement}
                            <slot name=${Ae.Footer}></slot>
                        `)}
                `,p`
                    <div
                        ${Ks(o=>{i({lastElement:o})})}
                        class="all-book-entries-wrapper"
                    >
                        ${s}
                    </div>
                    <slot name=${Ae.Footer}></slot>
                `)}
        `}});function q1(t,e,r){const n=wl(t,e);if(n.length)return n;r(zt);const i=wl(t,zt.paths);if(!i)throw new Error(`Tried to self-correct for invalid path ${e.join("/")}
                        but failed to do so.`);return i}function wl(t,e){return t.filter(r=>mf({searchFor:e.slice(1),searchIn:r.fullUrlBreadcrumbs}))}const Oi=hu()({tagName:"element-book-app",events:{pathUpdate:Ve()},stateInitStatic:{currentRoute:zt,router:void 0,loading:!0,colors:{config:void 0,theme:ll(void 0)},treeBasedControls:void 0,originalWindowTitle:void 0},styles:y`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${N["element-book-page-background-color"].value};
            color: ${N["element-book-page-foreground-color"].value};
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

        ${It} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${Pe} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,initCallback({host:t,state:e}){setTimeout(()=>{yl(t,Zi(e.currentRoute.paths),e.currentRoute)},500)},cleanupCallback({state:t,updateState:e}){t.router&&(t.router.removeAllRouteListeners(),e({router:void 0}))},renderCallback:({state:t,inputs:e,host:r,updateState:n,dispatch:i,events:a})=>{var d,u,f,h,m,w,b;e._debug&&console.info("rendering element-book app");function s($){return{...t.currentRoute,...$}}function o($){const S=s($);return!Ue(t.currentRoute,S)}function l($){e.preventWindowTitleChange||(t.originalWindowTitle||n({originalWindowTitle:document.title}),document.title=[t.originalWindowTitle,$].filter(Nr).join(" - "))}function c($){if(!o($))return;const S=s($);t.router?t.router.setRoutes(S):n({currentRoute:{...t.currentRoute,...S}}),e.elementBookRoutePaths&&!Ue(e.elementBookRoutePaths,t.currentRoute.paths)&&i(new a.pathUpdate(S.paths??[]))}try{if(e.elementBookRoutePaths&&!Ue(e.elementBookRoutePaths,t.currentRoute.paths)&&c({paths:e.elementBookRoutePaths}),(d=e.internalRouterConfig)!=null&&d.useInternalRouter&&!t.router){const R=xp(e.internalRouterConfig.basePath);n({router:R}),R.addRouteListener(!0,Z=>{n({currentRoute:Z})})}else!((u=e.internalRouterConfig)!=null&&u.useInternalRouter)&&t.router&&t.router.removeAllRouteListeners();const $={themeColor:e.themeColor};if(!Ue($,(f=t.colors)==null?void 0:f.config)){const R=ll($);n({colors:{config:$,theme:R}}),Lp(r,R)}const S=e._debug??!1,C=tp({entries:e.entries,debug:S});(!t.treeBasedControls||t.treeBasedControls.entries!==e.entries||t.treeBasedControls.lastGlobalInputs!==e.globalValues)&&(e._debug&&console.info("regenerating global controls"),n({treeBasedControls:{entries:e.entries,lastGlobalInputs:e.globalValues??{},controls:ku(C.tree,{children:(m=(h=t.treeBasedControls)==null?void 0:h.controls)==null?void 0:m.children,controls:e.globalValues})}}));const D=Zi(t.currentRoute.paths),Oe=(D?lp({flattenedNodes:C.flattenedNodes,searchQuery:D}):void 0)??q1(C.flattenedNodes,t.currentRoute.paths,c);l((w=Oe[0])==null?void 0:w.entry.title);const Ee=(b=t.treeBasedControls)==null?void 0:b.controls;return Ee?(e._debug&&console.info({currentControls:Ee}),p`
                <div
                    class="root"
                    ${H(Cn,async R=>{const Z=R.detail;if(!o(Z))return;if(n({loading:!0}),c(Z),!(r.shadowRoot.querySelector(Pe.tagName)instanceof Pe))throw new Error(`Failed to find child '${Pe.tagName}'`);yl(r,D,t.currentRoute)})}
                    ${H(Or.events.controlValueChange,R=>{if(!t.treeBasedControls)return;const Z=np(Ee,R.detail.fullUrlBreadcrumbs,R.detail.newValues);n({treeBasedControls:{...t.treeBasedControls,controls:Z}})})}
                >
                    <${Pe.assign({flattenedNodes:C.flattenedNodes,router:t.router,selectedPath:D?void 0:t.currentRoute.paths.slice(1)})}>
                        <slot
                            name=${Ae.NavHeader}
                            slot=${Ae.NavHeader}
                        ></slot>
                    </${Pe}>
                    <${It.assign({controls:Ee,currentNodes:Oe,currentRoute:t.currentRoute,debug:S,originalTree:C.tree,router:t.router,showLoading:t.loading})}
                        ${H(It.events.loadingRender,async R=>{await Di();const Z=r.shadowRoot.querySelector(It.tagName);Z?Z.scroll({top:0,behavior:"instant"}):console.error(`Failed to find '${It.tagName}' for scrolling.`),await Di(),n({loading:!R.detail})})}
                    >
                        <slot
                            name=${Ae.Footer}
                            slot=${Ae.Footer}
                        ></slot>
                    </${It}>
                </div>
            `):p`
                    <${Qe.assign({message:"Failed to generate page controls."})}></${Qe}>
                `}catch($){return console.error($),p`
                <p class="error">${Yt($)}</p>
            `}}});async function yl(t,e,r){if(e||r.paths.length<=1)return;const n=t.shadowRoot.querySelector(Pe.tagName);if(!(n instanceof Pe))throw new Error(`Failed to find child '${Pe.tagName}'`);await U1(n)}const Ni="://";function Z1(...t){const e=t.join("/"),[r,n=""]=e.includes(Ni)?e.split(Ni):["",e];let i=!1;const a=n.replace(/\/{2,}/g,"/").split("/").reduce((s,o,l,c)=>{if(i)return s;const d=c[l+1];let u=o;const f=d==null?void 0:d.startsWith("?"),h=!o.includes("?")&&f,m=d==="?";if(f||h){i=!0;let w=!1;const b=c.slice(l+2).reduce(($,S)=>(S.includes("#")&&(w=!0),w?$.concat(S):[$,S].join("&")),"");u=[o,d,m?lf({value:b,prefix:"&"}):b].join("")}return s.concat(u)},[]);return[r,r?Ni:"",a.join("/")].join("")}var bl;(function(t){t.Encode="encode",t.Decode="decode",t.None="none"})(bl||(bl={}));var vl;(function(t){t.Clear="clear",t.Replace="replace",t.Append="append"})(vl||(vl={}));const Y1=va(Fc({keys:"",values:[""],required:!0})),J1=va({hash:"",searchParams:Y1,href:"/",origin:"",pathname:"/",search:"",protocol:"",host:"",hostname:"",port:"",username:"",password:""});({...J1.defaultValue});const kt=et({title:"Elements",parent:void 0}),K1=et({title:"Icons",parent:void 0,controls:{"Stroke Color":{controlType:I.Color,initValue:""},"Fill Color":{controlType:I.Color,initValue:""},"Stroke Width":{controlType:I.Number,initValue:1}},elementExamplesCallback({defineExample:t}){Object.values(B1).forEach(e=>{t({title:e.name,styles:y`
                    :host(:hover) ${T} {
                        background-color: #f2f2f2;
                    }

                    ${T} {
                        padding: 8px;
                        border-radius: ${Ar["vira-form-input-border-radius"].value};
                    }
                `,renderCallback({controls:r}){const n=y`
                        ${E["vira-icon-fill-color"].name}: ${J(r["Fill Color"]||"inherit")};
                        ${E["vira-icon-stroke-color"].name}: ${J(r["Stroke Color"]||"inherit")};
                        ${E["vira-icon-stroke-width"].name}: ${J(Cl(r["Stroke Width"])||"inherit")};
                    `;return p`
                        <${T.assign({icon:e})} style=${n}></${T}>
                    `}})})}}),X1=et({parent:kt,title:Y.tagName,descriptionParagraphs:["Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!"],controls:{"Primary color":{controlType:I.Color,initValue:Y.cssVars["vira-button-primary-color"].default},"Secondary color":{controlType:I.Color,initValue:Y.cssVars["vira-button-secondary-color"].default},"Hover color":{controlType:I.Color,initValue:Y.cssVars["vira-button-primary-hover-color"].default},"Active color":{controlType:I.Color,initValue:Y.cssVars["vira-button-primary-active-color"].default}},elementExamplesCallback({defineExample:t}){function e({title:r,styles:n,inputs:i}){const a=n??y``;t({title:r,styles:a,renderCallback({controls:s}){const o=y`
                        ${Y.cssVars["vira-button-primary-color"].name}: ${J(s["Primary color"]||"inherit")};
                        ${Y.cssVars["vira-button-secondary-color"].name}: ${J(s["Secondary color"]||"inherit")};
                        ${Y.cssVars["vira-button-primary-hover-color"].name}: ${J(s["Hover color"]||"inherit")};
                        ${Y.cssVars["vira-button-primary-active-color"].name}: ${J(s["Active color"]||"inherit")};
                    `;return p`
                        <${Y.assign({text:"hello",...i})}
                            style=${o}
                        ></${Y}>
                    `}})}e({title:"basic"}),e({title:"with icon",inputs:{icon:Ha}}),e({title:"outline",inputs:{buttonStyle:On.Outline}}),e({title:"disabled",inputs:{disabled:!0}}),e({title:"custom width",styles:y`
                ${Y} {
                    width: 100px;
                }
            `}),e({title:"custom height",styles:y`
                ${Y} {
                    height: 75px;
                }
            `}),t({title:"customized colors",styles:y`
                :host {
                    ${Y.cssVars["vira-button-primary-color"].name}: pink;
                    ${Y.cssVars["vira-button-secondary-color"].name}: purple;
                    ${Y.cssVars["vira-button-primary-hover-color"].name}: orange;
                    ${Y.cssVars["vira-button-primary-active-color"].name}: yellow;
                }
            `,renderCallback(){return p`
                    <${Y.assign({text:"hello"})}></${Y}>
                `}})}}),Q1=et({title:st.tagName,parent:kt,descriptionParagraphs:["A very basic collapsible wrapper element that expands to fit its content with smooth animations. The animations even adapt to dynamic child sizes!","This element does not make any assumptions on styling, all styles are applied by consumers."],elementExamplesCallback({defineExample:t}){t({title:"stacked examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,i)=>p`
                            <${st.assign({expanded:!!r.expandedStates[i]})}
                                ${H(st.events.expandChange,a=>{const s=[...r.expandedStates];s[i]=a.detail,e({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Cr.Header}
                                >
                                    Section ${i}
                                </div>
                                <p>Variable contents</p>
                                <button
                                    ${H("click",()=>{const a=[...r.showMoreStates];a[i]=!a[i],e({showMoreStates:a})})}
                                >
                                    show more
                                </button>
                                ${ce(!!r.showMoreStates[i],p`
                                        <p>Variable contents</p>
                                        <p>Variable contents</p>
                                    `)}
                                <p>Variable contents</p>
                            </${st}>
                        `)}}),t({title:"wider examples",styles:y`
                .section-header {
                    padding: 16px;
                    border: 1px solid dodgerblue;
                    margin-top: -1px;
                }
            `,stateInitStatic:{expandedStates:[],showMoreStates:[]},renderCallback({updateState:e,state:r}){return Array(3).fill(0).map((n,i)=>p`
                            <${st.assign({expanded:!!r.expandedStates[i]})}
                                ${H(st.events.expandChange,a=>{const s=[...r.expandedStates];s[i]=a.detail,e({expandedStates:s})})}
                            >
                                <div
                                    class="section-header"
                                    slot=${Cr.Header}
                                >
                                    Section ${i}
                                </div>
                                <p>
                                    Variable contents Variable contents Variable contents Variable
                                    contents Variable contents Variable contents
                                </p>
                                <button
                                    ${H("click",()=>{const a=[...r.showMoreStates];a[i]=!a[i],e({showMoreStates:a})})}
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
                            </${st}>
                        `)}})}}),ew=et({title:T.tagName,parent:kt,descriptionParagraphs:["See the 'Icons' page for a list of all included icons."],elementExamplesCallback({defineExample:t}){t({title:"basic",renderCallback(){return p`
                    <${T.assign({icon:je})}></${T}>
                `}}),t({title:"using createColoredIcon",renderCallback(){return p`
                    <${T.assign({icon:ul(je,{"vira-icon-stroke-color":"red"})})}></${T}>
                `}}),t({title:"fit container",styles:y`
                ${T} {
                    width: 200px;
                    height: 200px;
                    border: 1px solid #eee;
                }
            `,renderCallback(){return p`
                    <${T.assign({icon:ul(je,{"vira-icon-stroke-color":"red"}),fitContainer:!0})}></${T}>
                `}})}}),tw=et({title:Nt.tagName,parent:kt,descriptionParagraphs:["An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.","Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots."],elementExamplesCallback({defineExample:t}){[{title:"simple image",inputs:{imageUrl:"/bolt.png"}},{title:"infinite loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}}},{title:"custom loading",inputs:{imageUrl:"/bolt.png",_debugLoadDelay:{milliseconds:1/0}},styles:y`
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
                        <${T.assign({icon:Lr,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
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
                        <${T.assign({icon:Nn,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
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
                        <${T.assign({icon:Lr,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
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
                        <${T.assign({icon:Nn,fitContainer:!0})}
                            style=${y`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${T}>
                    </div>
                `}].forEach(r=>{t({title:r.title,styles:y`
                    ${Nt} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${r.styles||y``}
                    }

                    ${r.allowReload?y`
                              ${Nt} {
                                  cursor: pointer;
                              }

                              ${Nt}:hover {
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
                `,stateInitStatic:{imageUrl:r.inputs.imageUrl},renderCallback({state:n,updateState:i}){return p`
                        <${Nt.assign({...r.inputs,imageUrl:n.imageUrl})}
                            ${H("click",()=>{r.allowReload&&i({imageUrl:`${r.inputs.imageUrl}?di=${Al()}`})})}
                        >
                            ${r.loadingSlot?p`
                                      <div
                                          class="slot-wrapper"
                                          slot=${qt.Loading}
                                      >
                                          ${r.loadingSlot}
                                      </div>
                                  `:""}${r.errorSlot?p`
                                      <div class="slot-wrapper" slot=${qt.Error}>
                                          ${r.errorSlot}
                                      </div>
                                  `:""}
                        </${Nt}>
                    `}})})}}),rw=et({title:z.tagName,parent:kt,descriptionParagraphs:["Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.","Has completely customizable sizing and coloring."],controls:{"Text color":{controlType:I.Color,initValue:z.cssVars["vira-input-text-color"].default},"Placeholder color":{controlType:I.Color,initValue:z.cssVars["vira-input-placeholder-color"].default},"Border color":{controlType:I.Color,initValue:z.cssVars["vira-input-border-color"].default},"Focus color":{controlType:I.Color,initValue:z.cssVars["vira-input-focus-border-color"].default},"Selection color":{controlType:I.Color,initValue:z.cssVars["vira-input-text-selection-color"].default}},elementExamplesCallback({defineExample:t}){function e({styles:n,title:i,inputs:a}){t({title:i,styles:y`
                    ${n||y``}
                `,stateInitStatic:{value:a.value},renderCallback({state:s,updateState:o,controls:l}){const c={[String(z.cssVars["vira-input-text-color"].name)]:l["Text color"],[String(z.cssVars["vira-input-placeholder-color"].name)]:l["Placeholder color"],[String(z.cssVars["vira-input-border-color"].name)]:l["Border color"],[String(z.cssVars["vira-input-focus-border-color"].name)]:l["Focus color"],[String(z.cssVars["vira-input-text-selection-color"].name)]:l["Selection color"]},d=pt(c,(f,h)=>h||"inherit"),u=Object.entries(d).map(([f,h])=>[f,h].join(": ")+";").join(`
`);return p`
                        <${z.assign({...a,value:s.value})}
                            style=${u}
                            ${H(z.events.valueChange,f=>{o({value:f.detail})})}
                        ></${z}>
                    `}})}[{title:"basic",inputs:{value:"default value"}},{title:"with icon",inputs:{value:"",icon:je}},{title:"with placeholder",inputs:{value:"",placeholder:"placeholder here"}},{title:"with suffix",inputs:{value:"42",suffix:"px"}},{title:"with clear button",inputs:{value:"value",placeholder:"with clear",showClearButton:!0}},{title:"disabled",inputs:{value:"disabled",disabled:!0}},{title:"numbers only",inputs:{value:"",allowedInputs:/\d/}},{title:"numbers blocked",inputs:{value:"",blockedInputs:/\d/}},{title:"custom width",styles:y`
                    ${z} {
                        width: 120px;
                    }
                `,inputs:{value:"",placeholder:"width",icon:je}},{title:"taller height",styles:y`
                    ${z} {
                        height: 48px;
                    }
                `,inputs:{value:"",placeholder:"taller",icon:je}},{title:"shorter height",styles:y`
                    ${z} {
                        height: 26px;
                    }
                `,inputs:{value:"",placeholder:"shorter",showClearButton:!0,icon:je}},{title:"max width",styles:y`
                    ${z} {
                        max-width: 150px;
                    }
                `,inputs:{value:"super long value that exceeds the max width",placeholder:"42"}},{title:"fit text",styles:y`
                    ${z} {
                        max-width: 150px;
                    }
                `,inputs:{value:"",placeholder:"42",fitText:!0}},{title:"password",inputs:{value:"as password",type:mt.Password}}].forEach(e)}}),nw=et({title:lr.tagName,parent:kt,descriptionParagraphs:["Handles hyperlinks securely or route changes without harming right click functionality."],controls:{"CSS Color":{controlType:I.Color,initValue:""},"Hover color":{controlType:I.Color,initValue:""}},elementExamplesCallback({defineExample:t}){function e({title:r,inputs:n}){t({title:r,renderCallback({controls:i}){const a=y`
                        ${lr.cssVars["vira-link-hover-color"].name}: ${J(i["Hover color"]||"inherit")};
                        color: ${J(i["CSS Color"]||"inherit")};
                    `;return p`
                        <${lr.assign(n)}
                            style=${a}
                            ${H(lr.events.routeChange,s=>{console.info(s)})}
                        >
                            My Link
                        </${lr}>
                    `}})}e({title:"with URL",inputs:{link:{newTab:!0,url:"https://www.wikipedia.org"}}}),e({title:"with route",inputs:{route:{route:{paths:[]},router:{createRoutesUrl(){return window.location.href}}}}})}}),iw=[kt,K1,X1,Q1,ew,tw,rw,nw];jn({tagName:"vira-book-app",styles:y`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${Oi} {
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
            <${Oi.assign({internalRouterConfig:{basePath:Z1("element-vir","vira"),useInternalRouter:!0},entries:iw,themeColor:"#33ccff"})}>
                <h1 slot=${Ae.NavHeader}>Vira</h1>
            </${Oi}>
        `}});
