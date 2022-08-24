(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}})();function m(){}function W(e){return e()}function F(){return Object.create(null)}function S(e){e.forEach(W)}function Z(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function f(e,t){e.appendChild(t)}function E(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function X(e){return document.createTextNode(e)}function w(){return X(" ")}function A(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function te(e){return Array.from(e.childNodes)}function ne(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function R(e){z=e}const O=[],K=[],k=[],H=[],re=Promise.resolve();let I=!1;function se(){I||(I=!0,re.then(Y))}function j(e){k.push(e)}const D=new Set;let U=0;function Y(){const e=z;do{for(;U<O.length;){const t=O[U];U++,R(t),oe(t.$$)}for(R(null),O.length=0,U=0;K.length;)K.pop()();for(let t=0;t<k.length;t+=1){const n=k[t];D.has(n)||(D.add(n),n())}k.length=0}while(O.length);for(;H.length;)H.pop()();I=!1,D.clear(),R(e)}function oe(e){if(e.fragment!==null){e.update(),S(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const C=new Set;let g;function ce(){g={r:0,c:[],p:g}}function ie(){g.r||S(g.c),g=g.p}function B(e,t){e&&e.i&&(C.delete(e),e.i(t))}function J(e,t,n,s){if(e&&e.o){if(C.has(e))return;C.add(e),g.c.push(()=>{C.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function Q(e){e&&e.c()}function V(e,t,n,s){const{fragment:r,on_mount:u,on_destroy:c,after_update:l}=e.$$;r&&r.m(t,n),s||j(()=>{const i=u.map(W).filter(Z);c?c.push(...i):S(i),e.$$.on_mount=[]}),l.forEach(j)}function q(e,t){const n=e.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&(O.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(e,t,n,s,r,u,c,l=[-1]){const i=z;R(e);const o=e.$$={fragment:null,ctx:null,props:u,update:m,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:t.target||i.$$.root};c&&c(o.root);let x=!1;if(o.ctx=n?n(e,t.props||{},(d,b,...G)=>{const p=G.length?G[0]:b;return o.ctx&&r(o.ctx[d],o.ctx[d]=p)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](p),x&&ue(e,d)),b}):[],o.update(),x=!0,S(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const d=te(t.target);o.fragment&&o.fragment.l(d),d.forEach($)}else o.fragment&&o.fragment.c();t.intro&&B(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),Y()}R(i)}class P{$destroy(){q(this,1),this.$destroy=m}$on(t,n){const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function le(e){let t,n,s,r,u,c;return{c(){t=a("div"),n=a("h1"),n.textContent="Score : 80",s=w(),r=a("button"),r.textContent="Restart",y(t,"class","game-over-screen svelte-189tr06")},m(l,i){E(l,t,i),f(t,n),f(t,s),f(t,r),u||(c=A(r,"click",e[0]),u=!0)},p:m,i:m,o:m,d(l){l&&$(t),u=!1,c()}}}function fe(e){return[()=>{console.log("restart game"),h.welcomeScreen()}]}class ae extends P{constructor(t){super(),M(this,t,fe,le,T,{})}}function de(e){let t,n,s=e[0].status+"",r,u,c,l,i,o,x,d,b,G;return{c(){t=a("div"),n=a("h3"),r=X(s),u=w(),c=a("div"),l=a("button"),l.textContent="Pause",i=w(),o=a("button"),o.textContent="Resume",x=w(),d=a("button"),d.textContent="Game over",y(t,"class","play-screen svelte-1ucog50"),y(c,"class","toolbar svelte-1ucog50")},m(p,N){E(p,t,N),f(t,n),f(n,r),E(p,u,N),E(p,c,N),f(c,l),f(c,i),f(c,o),f(c,x),f(c,d),b||(G=[A(l,"click",e[2]),A(o,"click",e[3]),A(d,"click",e[1])],b=!0)},p(p,[N]){N&1&&s!==(s=p[0].status+"")&&ne(r,s)},i:m,o:m,d(p){p&&$(t),p&&$(u),p&&$(c),b=!1,S(G)}}}function me(e,t,n){let s;return h.subscribe(l=>{n(0,s=l)}),[s,()=>{console.log("game over"),h.gameOver()},()=>{h.pauseGame()},()=>{h.resumeGame()}]}class L extends P{constructor(t){super(),M(this,t,me,de,T,{})}}function pe(e){let t,n,s,r,u,c,l;return{c(){t=a("div"),n=a("div"),n.textContent="Bricks Breaker !",s=w(),r=a("div"),u=a("button"),u.textContent="Start",y(n,"class","title svelte-1fgd63r"),y(r,"class","btn svelte-1fgd63r"),y(t,"class","start-screen svelte-1fgd63r")},m(i,o){E(i,t,o),f(t,n),f(t,s),f(t,r),f(r,u),c||(l=A(u,"click",e[0]),c=!0)},p:m,i:m,o:m,d(i){i&&$(t),c=!1,l()}}}function _e(e){return[()=>{console.log("start game"),h.startGame()}]}class ge extends P{constructor(t){super(),M(this,t,_e,pe,T,{})}}var _=(e=>(e.NOT_STARTED="NOT_STARTED",e.RUNNING="RUNNING",e.PAUSED="PAUSED",e.RESUME="RESUME",e.GAME_OVER="GAME OVER",e))(_||{});const v=[];function he(e,t=m){let n;const s=new Set;function r(l){if(T(e,l)&&(e=l,n)){const i=!v.length;for(const o of s)o[1](),v.push(o,e);if(i){for(let o=0;o<v.length;o+=2)v[o][0](v[o+1]);v.length=0}}}function u(l){r(l(e))}function c(l,i=m){const o=[l,i];return s.add(o),s.size===1&&(n=t(r)||m),l(e),()=>{s.delete(o),s.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:c}}const $e=()=>{const e=[{status:_.NOT_STARTED,component:ge},{status:_.RUNNING,component:L},{status:_.PAUSED,component:L},{status:_.RESUME,component:L},{status:_.GAME_OVER,component:ae}];let{update:t,subscribe:n}=he(e[0]);return{subscribe:n,startGame:()=>{t(i=>(i=e.find(o=>o.status==_.RUNNING),i))},pauseGame:()=>{t(i=>(i=e.find(o=>o.status==_.PAUSED),i))},resumeGame:()=>{t(i=>(i=e.find(o=>o.status==_.RESUME),i))},gameOver:()=>{t(i=>(i=e.find(o=>o.status==_.GAME_OVER),i))},welcomeScreen:()=>{t(i=>(i=e.find(o=>o.status==_.NOT_STARTED),i))}}},h=$e();function ye(e){let t,n,s;var r=e[0].component;function u(c){return{}}return r&&(n=new r(u())),{c(){t=a("div"),n&&Q(n.$$.fragment),y(t,"class","container svelte-17cjueo")},m(c,l){E(c,t,l),n&&V(n,t,null),s=!0},p(c,[l]){if(r!==(r=c[0].component)){if(n){ce();const i=n;J(i.$$.fragment,1,0,()=>{q(i,1)}),ie()}r?(n=new r(u()),Q(n.$$.fragment),B(n.$$.fragment,1),V(n,t,null)):n=null}},i(c){s||(n&&B(n.$$.fragment,c),s=!0)},o(c){n&&J(n.$$.fragment,c),s=!1},d(c){c&&$(t),n&&q(n)}}}function be(e,t,n){let s;return h.subscribe(r=>{n(0,s=r)}),[s]}class ve extends P{constructor(t){super(),M(this,t,be,ye,T,{})}}new ve({target:document.getElementById("app")});