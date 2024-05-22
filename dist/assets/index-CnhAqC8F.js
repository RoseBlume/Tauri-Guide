(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const $ of u.addedNodes)$.tagName==="LINK"&&$.rel==="modulepreload"&&i($)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();const Se=(t,l)=>t===l,W={equals:Se};let Ae=pe;const B=1,R=2,fe={owned:null,cleanups:null,context:null,owner:null};var _=null;let ee=null,Ee=null,h=null,p=null,N=null,X=0;function Te(t,l){const n=h,i=_,r=t.length===0,u=l===void 0?i:l,$=r?fe:{owned:null,cleanups:null,context:u?u.context:null,owner:u},c=r?t:()=>t(()=>M(()=>Y($)));_=$,h=null;try{return U(c,!0)}finally{h=n,_=i}}function d(t,l){l=l?Object.assign({},W,l):W;const n={value:t,observers:null,observerSlots:null,comparator:l.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),he(n,r));return[$e.bind(n),i]}function H(t,l,n){const i=de(t,l,!1,B);J(i)}function te(t,l,n){n=n?Object.assign({},W,n):W;const i=de(t,l,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,J(i),$e.bind(i)}function M(t){if(h===null)return t();const l=h;h=null;try{return t()}finally{h=l}}function $e(){if(this.sources&&this.state)if(this.state===B)J(this);else{const t=p;p=null,U(()=>Q(this),!1),p=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function he(t,l,n){let i=t.value;return(!t.comparator||!t.comparator(i,l))&&(t.value=l,t.observers&&t.observers.length&&U(()=>{for(let r=0;r<t.observers.length;r+=1){const u=t.observers[r],$=ee&&ee.running;$&&ee.disposed.has(u),($?!u.tState:!u.state)&&(u.pure?p.push(u):N.push(u),u.observers&&_e(u)),$||(u.state=B)}if(p.length>1e6)throw p=[],new Error},!1)),l}function J(t){if(!t.fn)return;Y(t);const l=X;Pe(t,t.value,l)}function Pe(t,l,n){let i;const r=_,u=h;h=_=t;try{i=t.fn(l)}catch($){return t.pure&&(t.state=B,t.owned&&t.owned.forEach(Y),t.owned=null),t.updatedAt=n+1,ve($)}finally{h=u,_=r}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?he(t,i):t.value=i,t.updatedAt=n)}function de(t,l,n,i=B,r){const u={fn:t,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:l,owner:_,context:_?_.context:null,pure:n};return _===null||_!==fe&&(_.owned?_.owned.push(u):_.owned=[u]),u}function me(t){if(t.state===0)return;if(t.state===R)return Q(t);if(t.suspense&&M(t.suspense.inFallback))return t.suspense.effects.push(t);const l=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<X);)t.state&&l.push(t);for(let n=l.length-1;n>=0;n--)if(t=l[n],t.state===B)J(t);else if(t.state===R){const i=p;p=null,U(()=>Q(t,l[0]),!1),p=i}}function U(t,l){if(p)return t();let n=!1;l||(p=[]),N?n=!0:N=[],X++;try{const i=t();return Ve(n),i}catch(i){n||(N=null),p=null,ve(i)}}function Ve(t){if(p&&(pe(p),p=null),t)return;const l=N;N=null,l.length&&U(()=>Ae(l),!1)}function pe(t){for(let l=0;l<t.length;l++)me(t[l])}function Q(t,l){t.state=0;for(let n=0;n<t.sources.length;n+=1){const i=t.sources[n];if(i.sources){const r=i.state;r===B?i!==l&&(!i.updatedAt||i.updatedAt<X)&&me(i):r===R&&Q(i,l)}}}function _e(t){for(let l=0;l<t.observers.length;l+=1){const n=t.observers[l];n.state||(n.state=R,n.pure?p.push(n):N.push(n),n.observers&&_e(n))}}function Y(t){let l;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),i=t.sourceSlots.pop(),r=n.observers;if(r&&r.length){const u=r.pop(),$=n.observerSlots.pop();i<r.length&&(u.sourceSlots[$]=i,r[i]=u,n.observerSlots[i]=$)}}if(t.owned){for(l=t.owned.length-1;l>=0;l--)Y(t.owned[l]);t.owned=null}if(t.cleanups){for(l=t.cleanups.length-1;l>=0;l--)t.cleanups[l]();t.cleanups=null}t.state=0}function Le(t){return t instanceof Error?t:new Error(typeof t=="string"?t:"Unknown error",{cause:t})}function ve(t,l=_){throw Le(t)}function y(t,l){return M(()=>t(l||{}))}const Ne=t=>`Stale read from <${t}>.`;function w(t){const l=t.keyed,n=te(()=>t.when,void 0,{equals:(i,r)=>l?i===r:!i==!r});return te(()=>{const i=n();if(i){const r=t.children;return typeof r=="function"&&r.length>0?M(()=>r(l?i:()=>{if(!M(n))throw Ne("Show");return t.when})):r}return t.fallback},void 0,void 0)}function Be(t,l,n){let i=n.length,r=l.length,u=i,$=0,c=0,m=l[r-1].nextSibling,v=null;for(;$<r||c<u;){if(l[$]===n[c]){$++,c++;continue}for(;l[r-1]===n[u-1];)r--,u--;if(r===$){const g=u<i?c?n[c-1].nextSibling:n[u-c]:m;for(;c<u;)t.insertBefore(n[c++],g)}else if(u===c)for(;$<r;)(!v||!v.has(l[$]))&&l[$].remove(),$++;else if(l[$]===n[u-1]&&n[c]===l[r-1]){const g=l[--r].nextSibling;t.insertBefore(n[c++],l[$++].nextSibling),t.insertBefore(n[--u],g),l[r]=n[u]}else{if(!v){v=new Map;let b=c;for(;b<u;)v.set(n[b],b++)}const g=v.get(l[$]);if(g!=null)if(c<g&&g<u){let b=$,D=1,C;for(;++b<r&&b<u&&!((C=v.get(l[b]))==null||C!==g+D);)D++;if(D>g-c){const Z=l[$];for(;c<g;)t.insertBefore(n[c++],Z)}else t.replaceChild(n[c++],l[$++])}else $++;else l[$++].remove()}}}const ce="_$DX_DELEGATE";function Oe(t,l,n,i={}){let r;return Te(u=>{r=u,l===document?t():x(l,t(),l.firstChild?null:void 0,n)},i.owner),()=>{r(),l.textContent=""}}function o(t,l,n){let i;const r=()=>{const $=document.createElement("template");return $.innerHTML=t,$.content.firstChild},u=()=>(i||(i=r())).cloneNode(!0);return u.cloneNode=u,u}function De(t,l=window.document){const n=l[ce]||(l[ce]=new Set);for(let i=0,r=t.length;i<r;i++){const u=t[i];n.has(u)||(n.add(u),l.addEventListener(u,je))}}function Fe(t,l,n){n==null?t.removeAttribute(l):t.setAttribute(l,n)}function x(t,l,n,i){if(n!==void 0&&!i&&(i=[]),typeof l!="function")return K(t,l,i,n);H(r=>K(t,l(),r,n),i)}function je(t){const l=`$$${t.type}`;let n=t.composedPath&&t.composedPath()[0]||t.target;for(t.target!==n&&Object.defineProperty(t,"target",{configurable:!0,value:n}),Object.defineProperty(t,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[l];if(i&&!n.disabled){const r=n[`${l}Data`];if(r!==void 0?i.call(n,r,t):i.call(n,t),t.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(t,l,n,i,r){for(;typeof n=="function";)n=n();if(l===n)return n;const u=typeof l,$=i!==void 0;if(t=$&&n[0]&&n[0].parentNode||t,u==="string"||u==="number")if(u==="number"&&(l=l.toString()),$){let c=n[0];c&&c.nodeType===3?c.data!==l&&(c.data=l):c=document.createTextNode(l),n=O(t,n,i,c)}else n!==""&&typeof n=="string"?n=t.firstChild.data=l:n=t.textContent=l;else if(l==null||u==="boolean")n=O(t,n,i);else{if(u==="function")return H(()=>{let c=l();for(;typeof c=="function";)c=c();n=K(t,c,n,i)}),()=>n;if(Array.isArray(l)){const c=[],m=n&&Array.isArray(n);if(le(c,l,n,r))return H(()=>n=K(t,c,n,i,!0)),()=>n;if(c.length===0){if(n=O(t,n,i),$)return n}else m?n.length===0?ae(t,c,i):Be(t,n,c):(n&&O(t),ae(t,c));n=c}else if(l.nodeType){if(Array.isArray(n)){if($)return n=O(t,n,i,l);O(t,n,null,l)}else n==null||n===""||!t.firstChild?t.appendChild(l):t.replaceChild(l,t.firstChild);n=l}}return n}function le(t,l,n,i){let r=!1;for(let u=0,$=l.length;u<$;u++){let c=l[u],m=n&&n[t.length],v;if(!(c==null||c===!0||c===!1))if((v=typeof c)=="object"&&c.nodeType)t.push(c);else if(Array.isArray(c))r=le(t,c,m)||r;else if(v==="function")if(i){for(;typeof c=="function";)c=c();r=le(t,Array.isArray(c)?c:[c],Array.isArray(m)?m:[m])||r}else t.push(c),r=!0;else{const g=String(c);m&&m.nodeType===3&&m.data===g?t.push(m):t.push(document.createTextNode(g))}}return r}function ae(t,l,n=null){for(let i=0,r=l.length;i<r;i++)t.insertBefore(l[i],n)}function O(t,l,n,i){if(n===void 0)return t.textContent="";const r=i||document.createTextNode("");if(l.length){let u=!1;for(let $=l.length-1;$>=0;$--){const c=l[$];if(r!==c){const m=c.parentNode===t;!u&&!$?m?t.replaceChild(r,c):t.insertBefore(r,n):m&&c.remove()}else u=!0}}else t.insertBefore(r,n);return[r]}var qe=o("<div id=topper>"),Ge=o("<li><button class=menu><h3>Tauri V1 (Coming Soon)"),Me=o("<li><button class=menu><h3>Tauri V2"),Ue=o("<h2 class=mentop>Tauri V2"),Ie=o("<li><button class=menu><h3>Get Started"),We=o("<li><button class=menu><h3>Concepts"),Re=o("<li><button class=menu><h3>Security"),He=o("<li><button class=menu><h3>Develop"),Qe=o("<li><button class=menu><h3>Plugins"),Ke=o("<li><button class=menu><h3>About"),Xe=o("<h2 class=mentop>Getting Started"),Je=o("<li><button class=menu><h3>What is Tauri"),Ye=o("<li><button class=menu><h3>Prerequisites"),Ze=o("<li><button class=menu><h3>Create A Project"),ze=o("<li><button class=menu><h3>Frontend Configuration"),et=o("<h2 class=mentop>Frontend Configuration"),G=o("<li><button class=menu><h3>Overview"),tt=o("<li><button class=menu><h3>Next.js"),lt=o("<li><button class=menu><h3>Nuxt"),nt=o("<li><button class=menu><h3>Trunk"),st=o("<h2 class=mentop>Core Concepts"),it=o("<li><button class=menu><h3>Tauri Architecture"),rt=o("<li><button class=menu><h3>Process Model"),ut=o("<li><button class=menu><h3>App Size"),ot=o("<h2 class=mentop>Security"),ct=o("<li><button class=menu><h3>Best Practices"),at=o("<li><button class=menu><h3>Capabilities"),ft=o("<li><button class=menu><h3>Content Security Policy"),$t=o("<li><button class=menu><h3>Development"),ht=o("<li><button class=menu><h3>Tauri Ecosystem Security"),dt=o("<li><button class=menu><h3>Future Work"),mt=o("<li><button class=menu><h3>Permissions"),pt=o("<li><button class=menu><h3>Runtime Authority"),_t=o("<li><button class=menu><h3>Command Scope"),vt=o("<h2 class=mentop>Development"),gt=o("<li><button class=menu><h3>Calling Rust From The Frontend"),bt=o("<li><button class=menu><h3>Configuration Files"),Ct=o("<li><button class=menu><h3>Development Cycle"),xt=o("<h2 class=mentop>Plugins"),yt=o("<li><button class=menu><h3>Autostart"),wt=o("<li><button class=menu><h3>Barcode Scanner"),kt=o("<li><button class=menu><h3>Clipboard"),St=o("<li><button class=menu><h3>Deep Linking"),At=o("<li><button class=menu><h3>Dialog"),Et=o("<li><button class=menu><h3>File System"),Tt=o("<li><button class=menu><h3>Global Shortcut"),Pt=o("<li><button class=menu><h3>HTTP client"),Vt=o("<li><button class=menu><h3>Localhost"),Lt=o("<li><button class=menu><h3>Logging"),Nt=o("<li><button class=menu><h3>Notifications"),Bt=o("<li><button class=menu><h3>OS Info"),Ot=o("<li><button class=menu><h3>Persisted Scope"),Dt=o("<li><button class=menu><h3>Positioner"),Ft=o("<li><button class=menu><h3>Process"),jt=o("<li><button class=menu><h3>Shell"),qt=o("<li><button class=menu><h3>Single Instance"),Gt=o("<li><button class=menu><h3>SQL"),Mt=o("<li><button class=menu><h3>Store"),Ut=o("<li><button class=menu><h3>Stronghold"),It=o("<li><button class=menu><h3>Upload"),Wt=o("<li><button class=menu><h3>Websocket"),Rt=o("<li><button class=menu><h3>Window-Customization"),Ht=o("<li><button class=menu><h3>Window State"),Qt=o("<h2 class=mentop>About"),Kt=o("<li><button class=menu><h3>About Tauri"),Xt=o("<li><button class=menu><h3>Tauri Book"),Jt=o("<li><button class=menu><h3>Governance"),Yt=o("<li><button class=menu><h3>Philosophy"),Zt=o("<li><button class=menu><h3>Trademark"),zt=o("<div class=container><header><button class=menu><h2 id=met>Menu</h2></button></header><ul></ul><ul></ul><ul></ul><ul></ul><ul>"),el=o("<iframe id=viewarea loading=eager>");function tl(){const[t,l]=d("/v2/start/index.html"),[n,i]=d(!1),[r,u]=d(!1),[$,c]=d(!1),[m,v]=d(!1),[g,b]=d(!1),[D,C]=d(!1),[Z,k]=d(!1),[ge,ne]=d(!1),[be,S]=d(!1);d(!1);const[Ce,A]=d(!1),[xe,E]=d(!1),[ll,T]=d(!1),[nl,P]=d(!1),[ye,V]=d(!1),[we,L]=d(!1);d(!1);async function f(){i(j=>!j),a()}async function a(){F()}async function F(){C(!1),k(!1),S(!1),A(!1),E(!1),T(!1),P(!1),V(!1),L(!1),se()}async function se(){ne(!1)}return(()=>{var j=zt(),ie=j.firstChild,ke=ie.firstChild,re=ie.nextSibling,ue=re.nextSibling,z=ue.nextSibling,oe=z.nextSibling,I=oe.nextSibling;return ke.$$click=()=>{c(!1),u(!1),v(!1),b(!1),f()},x(re,y(w,{get when(){return n()},get children(){return[qe(),(()=>{var e=Ge(),s=e.firstChild;return s.$$click=()=>{c(!1),v(!1),b(!1),u(q=>!q)},e})(),(()=>{var e=Me(),s=e.firstChild;return s.$$click=()=>{u(!1),v(!1),b(!1),c(q=>!q),C(q=>!q),se()},e})()]}})),x(ue,y(w,{get when(){return D()},get children(){return[Ue(),(()=>{var e=Ie(),s=e.firstChild;return s.$$click=()=>{C(!1),k(!0),S(!1),A(!1),E(!0),T(!1),P(!1),V(!1),L(!1)},e})(),(()=>{var e=We(),s=e.firstChild;return s.$$click=()=>{C(!1),k(!1),S(!0),A(!1),E(!1),T(!1),P(!1),V(!1),L(!1)},e})(),(()=>{var e=Re(),s=e.firstChild;return s.$$click=()=>{C(!1),k(!1),S(!1),A(!0),E(!1),T(!1),P(!1),V(!1),L(!1)},e})(),(()=>{var e=He(),s=e.firstChild;return s.$$click=()=>{C(!1),k(!1),S(!1),A(!1),E(!0),T(!1),P(!1),V(!1),L(!1)},e})(),(()=>{var e=Qe(),s=e.firstChild;return s.$$click=()=>{C(!1),k(!1),S(!1),A(!1),E(!1),T(!1),P(!1),V(!0),L(!1)},e})(),(()=>{var e=Ke(),s=e.firstChild;return s.$$click=()=>{C(!1),k(!1),S(!1),A(!1),E(!1),T(!1),P(!1),V(!1),L(!0)},e})()]}})),x(z,y(w,{get when(){return Z()},get children(){return[Xe(),(()=>{var e=Je(),s=e.firstChild;return s.$$click=()=>{a(),i(!1),l("/v2/start/index.html")},e})(),(()=>{var e=Ye(),s=e.firstChild;return s.$$click=()=>{a(),i(!1),l("/v2/start/prerequisites/index.html")},e})(),(()=>{var e=Ze(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/start/create-project/index.html")},e})(),(()=>{var e=ze(),s=e.firstChild;return s.$$click=()=>{a(),ne(!0)},e})()]}}),null),x(z,y(w,{get when(){return ge()},get children(){return[et(),(()=>{var e=G(),s=e.firstChild;return s.$$click=()=>{F(),i(!1),l("/v2/start/frontend/index.html")},e})(),(()=>{var e=tt(),s=e.firstChild;return s.$$click=()=>{F(),i(!1),l("/v2/start/frontend/nextjs/index.html")},e})(),(()=>{var e=lt(),s=e.firstChild;return s.$$click=()=>{F(),i(!1),l("/v2/start/frontend/nuxt/index.html")},e})(),(()=>{var e=nt(),s=e.firstChild;return s.$$click=()=>{F(),i(!1),l("/v2/start/frontend/trunk/index.html")},e})()]}}),null),x(oe,y(w,{get when(){return be()},get children(){return[st(),(()=>{var e=G(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/concept/index.html")},e})(),(()=>{var e=it(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/concept/architecture/index.html")},e})(),(()=>{var e=rt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/concept/process-model/index.html")},e})(),(()=>{var e=ut(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/concept/size/index.html")},e})()]}})),x(I,y(w,{get when(){return Ce()},get children(){return[ot(),(()=>{var e=G(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/index.html")},e})(),(()=>{var e=ct(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/best-practices/index.html")},e})(),(()=>{var e=at(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/capabilities/index.html")},e})(),(()=>{var e=ft(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/csp/index.html")},e})(),(()=>{var e=$t(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/development/index.html")},e})(),(()=>{var e=ht(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/ecosystem/index.html")},e})(),(()=>{var e=dt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/future/index.html")},e})(),(()=>{var e=mt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/permissions/index.html")},e})(),(()=>{var e=pt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/runtime-authority/index.html")},e})(),(()=>{var e=_t(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/security/scope/index.html")},e})()]}}),null),x(I,y(w,{get when(){return xe()},get children(){return[vt(),(()=>{var e=G(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/develop/index.html")},e})(),(()=>{var e=gt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/develop/calling-rust/index.html")},e})(),(()=>{var e=bt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/develop/configuration-files/index.html")},e})(),(()=>{var e=Ct(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/develop/development-cycle/index.html")},e})()]}}),null),x(I,y(w,{get when(){return ye()},get children(){return[xt(),(()=>{var e=G(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/index.html")},e})(),(()=>{var e=yt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/autostart/index.html")},e})(),(()=>{var e=wt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/barcode-scanner/index.html")},e})(),(()=>{var e=kt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/clipboard/index.html")},e})(),(()=>{var e=St(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/deep-linking/index.html")},e})(),(()=>{var e=At(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/dialog/index.html")},e})(),(()=>{var e=Et(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/file-system/index.html")},e})(),(()=>{var e=Tt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/global-shortcut/index.html")},e})(),(()=>{var e=Pt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/http-client/index.html")},e})(),(()=>{var e=Vt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/localhost/index.html")},e})(),(()=>{var e=Lt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/logging/index.html")},e})(),(()=>{var e=Nt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/notification/index.html")},e})(),(()=>{var e=Bt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/os-info/index.html")},e})(),(()=>{var e=Ot(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/persisted-scope/index.html")},e})(),(()=>{var e=Dt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/positioner/index.html")},e})(),(()=>{var e=Ft(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/process/index.html")},e})(),(()=>{var e=jt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/shell/index.html")},e})(),(()=>{var e=qt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/single-instance/index.html")},e})(),(()=>{var e=Gt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/sql/index.html")},e})(),(()=>{var e=Mt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/store/index.html")},e})(),(()=>{var e=Ut(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/stronghold/index.html")},e})(),(()=>{var e=It(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/upload/index.html")},e})(),(()=>{var e=Wt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/websocket/index.html")},e})(),(()=>{var e=Rt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/window-customization/index.html")},e})(),(()=>{var e=Ht(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/plugin/window-state/index.html")},e})()]}}),null),x(I,y(w,{get when(){return we()},get children(){return[Qt(),(()=>{var e=Kt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/about/index.html")},e})(),(()=>{var e=Xt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/about/book/index.html")},e})(),(()=>{var e=Jt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/about/governance/index.html")},e})(),(()=>{var e=Yt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/about/philosophy/index.html")},e})(),(()=>{var e=Zt(),s=e.firstChild;return s.$$click=()=>{a(),f(),l("/v2/about/trademark/index.html")},e})()]}}),null),x(j,(()=>{var e=te(()=>!n());return()=>e()&&(()=>{var s=el();return H(()=>Fe(s,"src",t())),s})()})(),null),j})()}De(["click"]);Oe(()=>y(tl,{}),document.getElementById("root"));
