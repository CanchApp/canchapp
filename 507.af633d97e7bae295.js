(self.webpackChunkmf_host=self.webpackChunkmf_host||[]).push([[507,888],{3888:(v,c,i)=>{i.r(c),i.d(c,{AuthLibComponent:()=>g,AuthLibModule:()=>f,AuthLibService:()=>u});var n=i(3274),m=i(6306);const r="TKCANCHAPP",a="PRV_TKCANCHAPP",l="COMPANIES";let u=(()=>{class e{constructor(){}getToken(){return localStorage.getItem(r)??localStorage.getItem(a)}setToken(t,o){o?(this.removeToken(),localStorage.setItem(a,t)):(this.removePrvToken(),localStorage.setItem(r,t))}removeToken(){localStorage.removeItem(r)}removePrvToken(){localStorage.removeItem(a)}logOut(){this.removeToken(),this.removePrvToken()}isAuthenticated(){return!!localStorage.getItem(r)&&!localStorage.getItem(a)}isAuthenticatedMultilogin(){return!localStorage.getItem(r)&&!!localStorage.getItem(a)}getCompanies(){return JSON.parse(localStorage.getItem(l))}setCompanies(t){localStorage.setItem(l,JSON.stringify(t))}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),g=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=n.\u0275\u0275defineComponent({type:e,selectors:[["lib-auth-lib"]],standalone:!0,features:[n.\u0275\u0275StandaloneFeature],decls:2,vars:0,template:function(o,s){1&o&&(n.\u0275\u0275elementStart(0,"p"),n.\u0275\u0275text(1," auth-lib works! "),n.\u0275\u0275elementEnd())}})}}return e})(),h=(()=>{class e{constructor(t){this.authLibService=t}intercept(t,o){const s=this.authLibService.getToken();let d=t;return s&&(d=t.clone({setHeaders:{Authorization:`Bearer ${s}`}})),o.handle(d)}static{this.\u0275fac=function(o){return new(o||e)(n.\u0275\u0275inject(u))}}static{this.\u0275prov=n.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})(),f=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=n.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:m.HTTP_INTERCEPTORS,useClass:h,multi:!0}]})}}return e})()}}]);