(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const f of s)if(f.type==="childList")for(const o of f.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const f={};return s.integrity&&(f.integrity=s.integrity),s.referrerpolicy&&(f.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?f.credentials="include":s.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(s){if(s.ep)return;s.ep=!0;const f=n(s);fetch(s.href,f)}})();function _(){}function W(e){return e()}function F(){return Object.create(null)}function N(e){e.forEach(W)}function Z(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function x(e,t){e.appendChild(t)}function p(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function y(){return q(" ")}function R(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function te(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function v(e){z=e}const w=[],K=[],U=[],H=[],ne=Promise.resolve();let L=!1;function re(){L||(L=!0,ne.then(Y))}function I(e){U.push(e)}const P=new Set;let T=0;function Y(){const e=z;do{for(;T<w.length;){const t=w[T];T++,v(t),se(t.$$)}for(v(null),w.length=0,T=0;K.length;)K.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];P.has(n)||(P.add(n),n())}U.length=0}while(w.length);for(;H.length;)H.pop()();L=!1,P.clear(),v(e)}function se(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const C=new Set;let E;function oe(){E={r:0,c:[],p:E}}function ue(){E.r||N(E.c),E=E.p}function j(e,t){e&&e.i&&(C.delete(e),e.i(t))}function J(e,t,n,r){if(e&&e.o){if(C.has(e))return;C.add(e),E.c.push(()=>{C.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function Q(e){e&&e.c()}function B(e,t,n,r){const{fragment:s,on_mount:f,on_destroy:o,after_update:c}=e.$$;s&&s.m(t,n),r||I(()=>{const i=f.map(W).filter(Z);o?o.push(...i):N(i),e.$$.on_mount=[]}),c.forEach(I)}function V(e,t){const n=e.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){e.$$.dirty[0]===-1&&(w.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function k(e,t,n,r,s,f,o,c=[-1]){const i=z;v(e);const u=e.$$={fragment:null,ctx:null,props:f,update:_,not_equal:s,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:t.target||i.$$.root};o&&o(u.root);let a=!1;if(u.ctx=n?n(e,t.props||{},(d,b,...O)=>{const l=O.length?O[0]:b;return u.ctx&&s(u.ctx[d],u.ctx[d]=l)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](l),a&&ie(e,d)),b}):[],u.update(),a=!0,N(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const d=te(t.target);u.fragment&&u.fragment.l(d),d.forEach(m)}else u.fragment&&u.fragment.c();t.intro&&j(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),Y()}v(i)}class M{$destroy(){V(this,1),this.$destroy=_}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ce(e){let t,n,r,s,f;return{c(){t=h("h1"),t.textContent="Score : 80",n=y(),r=h("button"),r.textContent="Restart"},m(o,c){p(o,t,c),p(o,n,c),p(o,r,c),s||(f=R(r,"click",e[0]),s=!0)},p:_,i:_,o:_,d(o){o&&m(t),o&&m(n),o&&m(r),s=!1,f()}}}function fe(e){return[()=>{console.log("restart game"),S.welcomeScreen()}]}class le extends M{constructor(t){super(),k(this,t,fe,ce,A,{})}}function ae(e){let t,n,r,s=e[0].status+"",f,o,c,i,u,a,d,b,O;return{c(){t=h("h1"),t.textContent="Play",n=y(),r=h("h3"),f=q(s),o=y(),c=h("button"),c.textContent="Pause",i=y(),u=h("button"),u.textContent="Resume",a=y(),d=h("button"),d.textContent="Game over"},m(l,$){p(l,t,$),p(l,n,$),p(l,r,$),x(r,f),p(l,o,$),p(l,c,$),p(l,i,$),p(l,u,$),p(l,a,$),p(l,d,$),b||(O=[R(c,"click",e[2]),R(u,"click",e[3]),R(d,"click",e[1])],b=!0)},p(l,[$]){$&1&&s!==(s=l[0].status+"")&&X(f,s)},i:_,o:_,d(l){l&&m(t),l&&m(n),l&&m(r),l&&m(o),l&&m(c),l&&m(i),l&&m(u),l&&m(a),l&&m(d),b=!1,N(O)}}}function de(e,t,n){let r;return S.subscribe(c=>{n(0,r=c)}),[r,()=>{console.log("game over"),S.gameOver()},()=>{S.pauseGame()},()=>{S.resumeGame()}]}class D extends M{constructor(t){super(),k(this,t,de,ae,A,{})}}function me(e){let t,n,r,s,f,o;return{c(){t=h("div"),n=h("h1"),n.textContent="Ball Breaker",r=y(),s=h("button"),s.textContent="Start"},m(c,i){p(c,t,i),x(t,n),x(t,r),x(t,s),f||(o=R(s,"click",e[0]),f=!0)},p:_,i:_,o:_,d(c){c&&m(t),f=!1,o()}}}function pe(e){return[()=>{console.log("start game"),S.startGame()}]}class _e extends M{constructor(t){super(),k(this,t,pe,me,A,{})}}var g=(e=>(e.NOT_STARTED="NOT_STARTED",e.RUNNING="RUNNING",e.PAUSED="PAUSED",e.RESUME="RESUME",e.GAME_OVER="GAME OVER",e))(g||{});const G=[];function he(e,t=_){let n;const r=new Set;function s(c){if(A(e,c)&&(e=c,n)){const i=!G.length;for(const u of r)u[1](),G.push(u,e);if(i){for(let u=0;u<G.length;u+=2)G[u][0](G[u+1]);G.length=0}}}function f(c){s(c(e))}function o(c,i=_){const u=[c,i];return r.add(u),r.size===1&&(n=t(s)||_),c(e),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:s,update:f,subscribe:o}}const $e=()=>{const e=[{status:g.NOT_STARTED,component:_e},{status:g.RUNNING,component:D},{status:g.PAUSED,component:D},{status:g.RESUME,component:D},{status:g.GAME_OVER,component:le}];let{update:t,subscribe:n}=he(e[0]);return{subscribe:n,startGame:()=>{t(i=>(i=e.find(u=>u.status==g.RUNNING),i))},pauseGame:()=>{t(i=>(i=e.find(u=>u.status==g.PAUSED),i))},resumeGame:()=>{t(i=>(i=e.find(u=>u.status==g.RESUME),i))},gameOver:()=>{t(i=>(i=e.find(u=>u.status==g.GAME_OVER),i))},welcomeScreen:()=>{t(i=>(i=e.find(u=>u.status==g.NOT_STARTED),i))}}},S=$e();function ge(e){let t,n,r=e[0].status+"",s,f,o,c;var i=e[0].component;function u(a){return{}}return i&&(o=new i(u())),{c(){t=h("div"),n=h("h1"),s=q(r),f=y(),o&&Q(o.$$.fragment)},m(a,d){p(a,t,d),x(t,n),x(n,s),x(t,f),o&&B(o,t,null),c=!0},p(a,[d]){if((!c||d&1)&&r!==(r=a[0].status+"")&&X(s,r),i!==(i=a[0].component)){if(o){oe();const b=o;J(b.$$.fragment,1,0,()=>{V(b,1)}),ue()}i?(o=new i(u()),Q(o.$$.fragment),j(o.$$.fragment,1),B(o,t,null)):o=null}},i(a){c||(o&&j(o.$$.fragment,a),c=!0)},o(a){o&&J(o.$$.fragment,a),c=!1},d(a){a&&m(t),o&&V(o)}}}function be(e,t,n){let r;return S.subscribe(s=>{n(0,r=s)}),[r]}class ye extends M{constructor(t){super(),k(this,t,be,ge,A,{})}}new ye({target:document.getElementById("app")});
