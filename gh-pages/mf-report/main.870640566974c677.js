var __webpack_modules__={8827:(u,d,f)=>{f.e(935).then(f.bind(f,1935)).catch(s=>console.error(s))}},__webpack_module_cache__={};function __webpack_require__(u){var d=__webpack_module_cache__[u];if(void 0!==d)return d.exports;var f=__webpack_module_cache__[u]={exports:{}};return __webpack_modules__[u](f,f.exports,__webpack_require__),f.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.c=__webpack_module_cache__,__webpack_require__.d=(u,d)=>{for(var f in d)__webpack_require__.o(d,f)&&!__webpack_require__.o(u,f)&&Object.defineProperty(u,f,{enumerable:!0,get:d[f]})},__webpack_require__.f={},__webpack_require__.e=u=>Promise.all(Object.keys(__webpack_require__.f).reduce((d,f)=>(__webpack_require__.f[f](u,d),d),[])),__webpack_require__.u=u=>u+"."+{37:"e1b330e84c3debc7",87:"08989953f57507ec",177:"738546eb785e3bc9",245:"4df1cc7b822ef053",282:"5611302e3f9bd504",345:"8d199768bbca0d65",488:"d41dbb3fe748ad51",558:"9521e038f6530691",626:"f1fa0ac2aec3d114",705:"235e3d8c2939f6c3",726:"aa1010610be8ffb8",901:"940d62b1bc45043e",935:"b5201ba383165da2"}[u]+".js",__webpack_require__.miniCssF=u=>{},__webpack_require__.o=(u,d)=>Object.prototype.hasOwnProperty.call(u,d),(()=>{var u={},d="mf-report:";__webpack_require__.l=(f,s,p,v)=>{if(u[f])u[f].push(s);else{var l,y;if(void 0!==p)for(var h=document.getElementsByTagName("script"),_=0;_<h.length;_++){var c=h[_];if(c.getAttribute("src")==f||c.getAttribute("data-webpack")==d+p){l=c;break}}l||(y=!0,(l=document.createElement("script")).type="module",l.charset="utf-8",l.timeout=120,__webpack_require__.nc&&l.setAttribute("nonce",__webpack_require__.nc),l.setAttribute("data-webpack",d+p),l.src=__webpack_require__.tu(f)),u[f]=[s];var m=(x,j)=>{l.onerror=l.onload=null,clearTimeout(g);var S=u[f];if(delete u[f],l.parentNode&&l.parentNode.removeChild(l),S&&S.forEach(b=>b(j)),x)return x(j)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),y&&document.head.appendChild(l)}}})(),__webpack_require__.r=u=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(u,"__esModule",{value:!0})},(()=>{__webpack_require__.S={};var u={},d={};__webpack_require__.I=(f,s)=>{s||(s=[]);var p=d[f];if(p||(p=d[f]={}),!(s.indexOf(p)>=0)){if(s.push(p),u[f])return u[f];__webpack_require__.o(__webpack_require__.S,f)||(__webpack_require__.S[f]={});var v=__webpack_require__.S[f],y="mf-report",h=(m,g,x,j)=>{var S=v[m]=v[m]||{},b=S[g];(!b||!b.loaded&&(!j!=!b.eager?j:y>b.from))&&(S[g]={get:x,from:y,eager:!!j})},c=[];return"default"===f&&(h("@angular/common/http","17.0.0",()=>__webpack_require__.e(626).then(()=>()=>__webpack_require__(1626))),h("@angular/common","17.0.0",()=>__webpack_require__.e(558).then(()=>()=>__webpack_require__(177))),h("@angular/core/primitives/signals","17.0.0",()=>__webpack_require__.e(488).then(()=>()=>__webpack_require__(3488))),h("@angular/core","17.0.0",()=>__webpack_require__.e(705).then(()=>()=>__webpack_require__(7705))),h("@angular/platform-browser","17.0.0",()=>__webpack_require__.e(345).then(()=>()=>__webpack_require__(345))),h("@angular/router","17.0.0",()=>__webpack_require__.e(282).then(()=>()=>__webpack_require__(7901))),h("rxjs/operators","7.8.0",()=>__webpack_require__.e(37).then(()=>()=>__webpack_require__(7037))),h("rxjs","7.8.0",()=>__webpack_require__.e(87).then(()=>()=>__webpack_require__(4087)))),u[f]=c.length?Promise.all(c).then(()=>u[f]=1):1}}})(),(()=>{var u;__webpack_require__.tt=()=>(void 0===u&&(u={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(u=trustedTypes.createPolicy("angular#bundler",u))),u)})(),__webpack_require__.tu=u=>__webpack_require__.tt().createScriptURL(u),(()=>{var u;if("string"==typeof import.meta.url&&(u=import.meta.url),!u)throw new Error("Automatic publicPath is not supported in this browser");u=u.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=u})(),(()=>{var u=e=>{var t=n=>n.split(".").map(a=>+a==a?+a:a),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=r[1]?t(r[1]):[];return r[2]&&(o.length++,o.push.apply(o,t(r[2]))),r[3]&&(o.push([]),o.push.apply(o,t(r[3]))),o},f=e=>{var t=e[0],r="";if(1===e.length)return"*";if(t+.5){r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var o=1,n=1;n<e.length;n++)o--,r+="u"==(typeof(i=e[n]))[0]?"-":(o>0?".":"")+(o=2,i);return r}var a=[];for(n=1;n<e.length;n++){var i=e[n];a.push(0===i?"not("+w()+")":1===i?"("+w()+" || "+w()+")":2===i?a.pop()+" "+a.pop():f(i))}return w();function w(){return a.pop().replace(/^\((.+)\)$/,"$1")}},s=(e,t)=>{if(0 in e){t=u(t);var r=e[0],o=r<0;o&&(r=-r-1);for(var n=0,a=1,i=!0;;a++,n++){var w,M,O=a<e.length?(typeof e[a])[0]:"";if(n>=t.length||"o"==(M=(typeof(w=t[n]))[0]))return!i||("u"==O?a>r&&!o:""==O!=o);if("u"==M){if(!i||"u"!=O)return!1}else if(i)if(O==M)if(a<=r){if(w!=e[a])return!1}else{if(o?w>e[a]:w<e[a])return!1;w!=e[a]&&(i=!1)}else if("s"!=O&&"n"!=O){if(o||a<=r)return!1;i=!1,a--}else{if(a<=r||M<O!=o)return!1;i=!1}else"s"!=O&&"n"!=O&&(i=!1,a--)}}var V=[],E=V.pop.bind(V);for(n=1;n<e.length;n++){var C=e[n];V.push(1==C?E()|E():2==C?E()&E():C?s(C,t):!E())}return!!E()},_=(e,t,r)=>{var o=r?(e=>Object.keys(e).reduce((t,r)=>(e[r].eager&&(t[r]=e[r]),t),{}))(e[t]):e[t];return Object.keys(o).reduce((n,a)=>!n||!o[n].loaded&&((e,t)=>{e=u(e),t=u(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=e[r],n=(typeof o)[0];if(r>=t.length)return"u"==n;var a=t[r],i=(typeof a)[0];if(n!=i)return"o"==n&&"n"==i||"s"==i||"u"==n;if("o"!=n&&"u"!=n&&o!=a)return o<a;r++}})(n,a)?a:n,0)},g=e=>{throw new Error(e)},P=(e=>function(t,r,o,n,a){var i=__webpack_require__.I(t);return i&&i.then&&!o?i.then(e.bind(e,t,__webpack_require__.S[t],r,!1,n,a)):e(t,__webpack_require__.S[t],r,o,n,a)})((e,t,r,o,n,a)=>{if(!((e,t)=>e&&__webpack_require__.o(e,t))(t,r))return((e,t,r)=>r?r():((e,t)=>g("Shared module "+t+" doesn't exist in shared scope "+e))(e,t))(e,r,a);var i=_(t,r,o);return s(n,i)||g(((e,t,r,o)=>"Unsatisfied version "+r+" from "+(r&&e[t][r].from)+" of shared singleton module "+t+" (required "+f(o)+")")(t,r,i,n)),(e=>(e.loaded=1,e.get()))(t[r][i])}),T={},$={2778:()=>P("default","rxjs/operators",!1,[2,7,8,0],()=>__webpack_require__.e(37).then(()=>()=>__webpack_require__(7037))),3274:()=>P("default","@angular/core",!1,[1,17,0,0],()=>__webpack_require__.e(705).then(()=>()=>__webpack_require__(7705))),4866:()=>P("default","rxjs",!1,[2,7,8,0],()=>__webpack_require__.e(87).then(()=>()=>__webpack_require__(4087))),8648:()=>P("default","@angular/common",!1,[1,17,0,0],()=>__webpack_require__.e(177).then(()=>()=>__webpack_require__(177))),3186:()=>P("default","@angular/core/primitives/signals",!1,[1,17,0,0],()=>__webpack_require__.e(488).then(()=>()=>__webpack_require__(3488))),6306:()=>P("default","@angular/common/http",!1,[1,17,0,0],()=>__webpack_require__.e(245).then(()=>()=>__webpack_require__(1626))),63:()=>P("default","@angular/platform-browser",!1,[1,17,0,0],()=>__webpack_require__.e(726).then(()=>()=>__webpack_require__(345))),3636:()=>P("default","@angular/router",!1,[1,17,0,0],()=>__webpack_require__.e(901).then(()=>()=>__webpack_require__(7901)))},A={245:[2778,4866],282:[63,2778,3274,4866,8648],345:[3274,6306,8648],558:[3274],626:[2778,3274,4866,8648],705:[2778,3186,4866],726:[6306],901:[4866,2778,63],935:[63,3274,3636,8648,6306]},L={};__webpack_require__.f.consumes=(e,t)=>{__webpack_require__.o(A,e)&&A[e].forEach(r=>{if(__webpack_require__.o(T,r))return t.push(T[r]);if(!L[r]){var o=i=>{T[r]=0,__webpack_require__.m[r]=w=>{delete __webpack_require__.c[r],w.exports=i()}};L[r]=!0;var n=i=>{delete T[r],__webpack_require__.m[r]=w=>{throw delete __webpack_require__.c[r],i}};try{var a=$[r]();a.then?t.push(T[r]=a.then(o).catch(n)):o(a)}catch(i){n(i)}}})}})(),(()=>{var u={792:0};__webpack_require__.f.j=(s,p)=>{var v=__webpack_require__.o(u,s)?u[s]:void 0;if(0!==v)if(v)p.push(v[2]);else{var l=new Promise((c,m)=>v=u[s]=[c,m]);p.push(v[2]=l);var y=__webpack_require__.p+__webpack_require__.u(s),h=new Error;__webpack_require__.l(y,c=>{if(__webpack_require__.o(u,s)&&(0!==(v=u[s])&&(u[s]=void 0),v)){var m=c&&("load"===c.type?"missing":c.type),g=c&&c.target&&c.target.src;h.message="Loading chunk "+s+" failed.\n("+m+": "+g+")",h.name="ChunkLoadError",h.type=m,h.request=g,v[1](h)}},"chunk-"+s,s)}};var d=(s,p)=>{var h,_,[v,l,y]=p,c=0;if(v.some(g=>0!==u[g])){for(h in l)__webpack_require__.o(l,h)&&(__webpack_require__.m[h]=l[h]);y&&y(__webpack_require__)}for(s&&s(p);c<v.length;c++)__webpack_require__.o(u,_=v[c])&&u[_]&&u[_][0](),u[_]=0},f=self.webpackChunkmf_report=self.webpackChunkmf_report||[];f.forEach(d.bind(null,0)),f.push=d.bind(null,f.push.bind(f))})();var __webpack_exports__=__webpack_require__(8827);