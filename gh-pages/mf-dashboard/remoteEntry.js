var D={5303:(n,d,l)=>{var h={"./DashboardModule":()=>l.e(976).then(()=>()=>l(9976))},b=(s,m)=>(l.R=m,m=l.o(h,s)?h[s]():Promise.resolve().then(()=>{throw new Error('Module "'+s+'" does not exist in container.')}),l.R=void 0,m),c=(s,m)=>{if(l.S){var v="default",w=l.S[v];if(w&&w!==s)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return l.S[v]=s,l.I(v,m)}};l.d(d,{get:()=>b,init:()=>c})}},$={};function r(n){var d=$[n];if(void 0!==d)return d.exports;var l=$[n]={exports:{}};return D[n](l,l.exports,r),l.exports}r.m=D,r.c=$,r.n=n=>{var d=n&&n.__esModule?()=>n.default:()=>n;return r.d(d,{a:d}),d},r.d=(n,d)=>{for(var l in d)r.o(d,l)&&!r.o(n,l)&&Object.defineProperty(n,l,{enumerable:!0,get:d[l]})},r.f={},r.e=n=>Promise.all(Object.keys(r.f).reduce((d,l)=>(r.f[l](n,d),d),[])),r.u=n=>n+"."+{37:"09afcd51548e7ba8",87:"efdf9c195281e2b5",177:"a1c6f26c73ac514c",245:"281071545dc444f3",282:"01e45d2ee1831969",336:"6186b94b00b621ac",345:"f0361054a9b2c432",417:"282548e7cc6b3f5a",485:"88291e24c420a0ad",488:"89c85820d2fc201f",558:"2e7dfdb4902f90e9",626:"da0c3d1ea6c9f234",705:"b9785eb4c3bb0ade",726:"ec19ba808ef0b718",798:"909d75fa69ed9b8d",866:"a888075b87ed0a0d",901:"69dd5f8d3ccbc9c4",955:"d80d3e092044d1f1",976:"bd16612b988f764f"}[n]+".js",r.miniCssF=n=>{},r.o=(n,d)=>Object.prototype.hasOwnProperty.call(n,d),(()=>{var n={},d="mf-dashboard:";r.l=(l,h,b,c)=>{if(n[l])n[l].push(h);else{var s,m;if(void 0!==b)for(var v=document.getElementsByTagName("script"),w=0;w<v.length;w++){var p=v[w];if(p.getAttribute("src")==l||p.getAttribute("data-webpack")==d+b){s=p;break}}s||(m=!0,(s=document.createElement("script")).type="module",s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",d+b),s.src=r.tu(l)),n[l]=[h];var x=(P,M)=>{s.onerror=s.onload=null,clearTimeout(S);var j=n[l];if(delete n[l],s.parentNode&&s.parentNode.removeChild(s),j&&j.forEach(g=>g(M)),P)return P(M)},S=setTimeout(x.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=x.bind(null,s.onerror),s.onload=x.bind(null,s.onload),m&&document.head.appendChild(s)}}})(),r.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{r.S={};var n={},d={};r.I=(l,h)=>{h||(h=[]);var b=d[l];if(b||(b=d[l]={}),!(h.indexOf(b)>=0)){if(h.push(b),n[l])return n[l];r.o(r.S,l)||(r.S[l]={});var c=r.S[l],m="mf-dashboard",v=(x,S,P,M)=>{var j=c[x]=c[x]||{},g=j[S];(!g||!g.loaded&&(!M!=!g.eager?M:m>g.from))&&(j[S]={get:P,from:m,eager:!!M})},p=[];return"default"===l&&(v("@angular/common/http","17.0.0",()=>r.e(626).then(()=>()=>r(1626))),v("@angular/common","17.0.0",()=>r.e(558).then(()=>()=>r(177))),v("@angular/core/primitives/signals","17.0.0",()=>r.e(488).then(()=>()=>r(3488))),v("@angular/core","17.0.0",()=>r.e(705).then(()=>()=>r(7705))),v("@angular/forms","17.0.0",()=>r.e(417).then(()=>()=>r(9417))),v("@angular/platform-browser","17.0.0",()=>r.e(345).then(()=>()=>r(345))),v("@angular/router","17.0.0",()=>r.e(282).then(()=>()=>r(7901))),v("@ngx-translate/core","15.0.0",()=>r.e(955).then(()=>()=>r(3955))),v("commons-lib","0.0.1",()=>r.e(485).then(()=>()=>r(6866))),v("rxjs/operators","7.8.0",()=>r.e(37).then(()=>()=>r(7037))),v("rxjs","7.8.0",()=>r.e(87).then(()=>()=>r(4087)))),n[l]=p.length?Promise.all(p).then(()=>n[l]=1):1}}})(),(()=>{var n;r.tt=()=>(void 0===n&&(n={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(n=trustedTypes.createPolicy("angular#bundler",n))),n)})(),r.tu=n=>r.tt().createScriptURL(n),(()=>{var n;if("string"==typeof import.meta.url&&(n=import.meta.url),!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),(()=>{var n=t=>{var a=i=>i.split(".").map(o=>+o==o?+o:o),e=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),f=e[1]?a(e[1]):[];return e[2]&&(f.length++,f.push.apply(f,a(e[2]))),e[3]&&(f.push([]),f.push.apply(f,a(e[3]))),f},d=(t,a)=>{t=n(t),a=n(a);for(var e=0;;){if(e>=t.length)return e<a.length&&"u"!=(typeof a[e])[0];var f=t[e],i=(typeof f)[0];if(e>=a.length)return"u"==i;var o=a[e],u=(typeof o)[0];if(i!=u)return"o"==i&&"n"==u||"s"==u||"u"==i;if("o"!=i&&"u"!=i&&f!=o)return f<o;e++}},l=t=>{var a=t[0],e="";if(1===t.length)return"*";if(a+.5){e+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";for(var f=1,i=1;i<t.length;i++)f--,e+="u"==(typeof(u=t[i]))[0]?"-":(f>0?".":"")+(f=2,u);return e}var o=[];for(i=1;i<t.length;i++){var u=t[i];o.push(0===u?"not("+y()+")":1===u?"("+y()+" || "+y()+")":2===u?o.pop()+" "+o.pop():l(u))}return y();function y(){return o.pop().replace(/^\((.+)\)$/,"$1")}},h=(t,a)=>{if(0 in t){a=n(a);var e=t[0],f=e<0;f&&(e=-e-1);for(var i=0,o=1,u=!0;;o++,i++){var y,V,O=o<t.length?(typeof t[o])[0]:"";if(i>=a.length||"o"==(V=(typeof(y=a[i]))[0]))return!u||("u"==O?o>e&&!f:""==O!=f);if("u"==V){if(!u||"u"!=O)return!1}else if(u)if(O==V)if(o<=e){if(y!=t[o])return!1}else{if(f?y>t[o]:y<t[o])return!1;y!=t[o]&&(u=!1)}else if("s"!=O&&"n"!=O){if(f||o<=e)return!1;u=!1,o--}else{if(o<=e||V<O!=f)return!1;u=!1}else"s"!=O&&"n"!=O&&(u=!1,o--)}}var L=[],T=L.pop.bind(L);for(i=1;i<t.length;i++){var A=t[i];L.push(1==A?T()|T():2==A?T()&T():A?h(A,a):!T())}return!!T()},b=(t,a)=>t&&r.o(t,a),c=t=>(t.loaded=1,t.get()),s=t=>Object.keys(t).reduce((a,e)=>(t[e].eager&&(a[e]=t[e]),a),{}),S=t=>{throw new Error(t)},j=t=>function(a,e,f,i,o){var u=r.I(a);return u&&u.then&&!f?u.then(t.bind(t,a,r.S[a],e,!1,i,o)):t(a,r.S[a],e,f,i,o)},g=(t,a,e)=>e?e():((t,a)=>S("Shared module "+a+" doesn't exist in shared scope "+t))(t,a),B=j((t,a,e,f,i)=>b(a,e)?c(((t,i,e)=>{var f=e?s(t[i]):t[i];return(i=Object.keys(f).reduce((o,u)=>!o||d(o,u)?u:o,0))&&f[i]})(a,e,f)):g(t,e,i)),E=j((t,a,e,f,i,o)=>{if(!b(a,e))return g(t,e,o);var u=((t,a,e)=>{var f=e?s(t[a]):t[a];return Object.keys(f).reduce((i,o)=>!i||!f[i].loaded&&d(i,o)?o:i,0)})(a,e,f);return h(i,u)||S(((t,a,e,f)=>"Unsatisfied version "+e+" from "+(e&&t[a][e].from)+" of shared singleton module "+a+" (required "+l(f)+")")(a,e,u,i)),c(a[e][u])}),C={},G={8648:()=>E("default","@angular/common",!1,[1,17,0,0],()=>r.e(177).then(()=>()=>r(177))),3636:()=>E("default","@angular/router",!1,[1,17,0,0],()=>r.e(901).then(()=>()=>r(7901))),1522:()=>E("default","@ngx-translate/core",!1,[1,15,0,0],()=>r.e(336).then(()=>()=>r(3955))),4866:()=>E("default","rxjs",!1,[2,7,8,0],()=>r.e(87).then(()=>()=>r(4087))),3274:()=>E("default","@angular/core",!1,[1,17,0,0],()=>r.e(705).then(()=>()=>r(7705))),8883:()=>B("default","commons-lib",!1,()=>r.e(866).then(()=>()=>r(6866))),6306:()=>E("default","@angular/common/http",!1,[1,17,0,0],()=>r.e(245).then(()=>()=>r(1626))),2778:()=>E("default","rxjs/operators",!1,[2,7,8,0],()=>r.e(37).then(()=>()=>r(7037))),3186:()=>E("default","@angular/core/primitives/signals",!1,[1,17,0,0],()=>r.e(488).then(()=>()=>r(3488))),63:()=>E("default","@angular/platform-browser",!1,[1,17,0,0],()=>r.e(726).then(()=>()=>r(345))),6762:()=>E("default","@angular/forms",!1,[1,17,0,0],()=>r.e(798).then(()=>()=>r(9417)))},U={245:[2778,4866],282:[63,2778,3274,4866,8648],336:[2778],345:[3274,6306,8648],417:[2778,3274,4866,8648],485:[1522,2778,3274,4866,6306,6762,8648],558:[3274],626:[2778,3274,4866,8648],705:[2778,3186,4866],726:[6306],866:[2778,6762],901:[63,2778],955:[2778,3274,4866],976:[8648,3636,1522,4866,3274,8883,6306]},z={};r.f.consumes=(t,a)=>{r.o(U,t)&&U[t].forEach(e=>{if(r.o(C,e))return a.push(C[e]);if(!z[e]){var f=u=>{C[e]=0,r.m[e]=y=>{delete r.c[e],y.exports=u()}};z[e]=!0;var i=u=>{delete C[e],r.m[e]=y=>{throw delete r.c[e],u}};try{var o=G[e]();o.then?a.push(C[e]=o.then(f).catch(i)):f(o)}catch(u){i(u)}}})}})(),(()=>{var n={182:0};r.f.j=(h,b)=>{var c=r.o(n,h)?n[h]:void 0;if(0!==c)if(c)b.push(c[2]);else{var s=new Promise((p,x)=>c=n[h]=[p,x]);b.push(c[2]=s);var m=r.p+r.u(h),v=new Error;r.l(m,p=>{if(r.o(n,h)&&(0!==(c=n[h])&&(n[h]=void 0),c)){var x=p&&("load"===p.type?"missing":p.type),S=p&&p.target&&p.target.src;v.message="Loading chunk "+h+" failed.\n("+x+": "+S+")",v.name="ChunkLoadError",v.type=x,v.request=S,c[1](v)}},"chunk-"+h,h)}};var d=(h,b)=>{var v,w,[c,s,m]=b,p=0;if(c.some(S=>0!==n[S])){for(v in s)r.o(s,v)&&(r.m[v]=s[v]);m&&m(r)}for(h&&h(b);p<c.length;p++)r.o(n,w=c[p])&&n[w]&&n[w][0](),n[w]=0},l=self.webpackChunkmf_dashboard=self.webpackChunkmf_dashboard||[];l.forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l))})();var R=r(5303),H=R.get,J=R.init;export{H as get,J as init};