(self.webpackChunkmf_host=self.webpackChunkmf_host||[]).push([[626,245],{1626:(ze,W,N)=>{N.r(W),N.d(W,{FetchBackend:()=>G,HTTP_INTERCEPTORS:()=>te,HttpBackend:()=>b,HttpClient:()=>pe,HttpClientJsonpModule:()=>ft,HttpClientModule:()=>ut,HttpClientXsrfModule:()=>ht,HttpContext:()=>de,HttpContextToken:()=>Je,HttpErrorResponse:()=>_,HttpEventType:()=>M,HttpFeatureKind:()=>k,HttpHandler:()=>v,HttpHeaderResponse:()=>J,HttpHeaders:()=>p,HttpParams:()=>O,HttpRequest:()=>B,HttpResponse:()=>A,HttpResponseBase:()=>$,HttpStatusCode:()=>j,HttpUrlEncodingCodec:()=>D,HttpXhrBackend:()=>oe,HttpXsrfTokenExtractor:()=>Y,JsonpClientBackend:()=>se,JsonpInterceptor:()=>ot,provideHttpClient:()=>Ie,withFetch:()=>dt,withInterceptors:()=>ct,withInterceptorsFromDi:()=>Ae,withJsonpSupport:()=>ke,withNoXsrfProtection:()=>_e,withRequestsMadeViaParent:()=>lt,withXsrfConfiguration:()=>ie,\u0275HTTP_ROOT_INTERCEPTOR_FNS:()=>ne,\u0275HttpInterceptingHandler:()=>S,\u0275HttpInterceptorHandler:()=>S,\u0275PRIMARY_HTTP_BACKEND:()=>re,\u0275withHttpTransferCache:()=>Et});var X=N(467),a=N(3274),P=N(4866),E=N(2778),I=N(8648);class v{}class b{}class p{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?"string"==typeof n?this.lazyInit=()=>{this.headers=new Map,n.split("\n").forEach(t=>{const r=t.indexOf(":");if(r>0){const s=t.slice(0,r),i=s.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();const t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof p?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){const t=new p;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof p?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){const t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(n.name,t);const s=("a"===n.op?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":const i=n.value;if(i){let o=this.headers.get(t);if(!o)return;o=o.filter(l=>-1===i.indexOf(l)),0===o.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(n,t){const r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}}class D{encodeKey(n){return le(n)}encodeValue(n){return le(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}}const Q=/%(\d[a-f0-9])/gi,Xe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function le(e){return encodeURIComponent(e).replace(Q,(n,t)=>Xe[t]??n)}function K(e){return`${e}`}class O{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new D,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function x(e,n){const t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[o,l]=-1==i?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],c=t.get(o)||[];c.push(l),t.set(o,c)}),t}(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{const r=n.fromObject[t],s=Array.isArray(r)?r.map(K):[K(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();const t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){const t=[];return Object.keys(n).forEach(r=>{const s=n[r];Array.isArray(s)?s.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{const t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>""!==n).join("&")}clone(n){const t=new O({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":const t=("a"===n.op?this.map.get(n.param):void 0)||[];t.push(K(n.value)),this.map.set(n.param,t);break;case"d":if(void 0===n.value){this.map.delete(n.param);break}{let r=this.map.get(n.param)||[];const s=r.indexOf(K(n.value));-1!==s&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}}}),this.cloneFrom=this.updates=null)}}class Je{constructor(n){this.defaultValue=n}}class de{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}}function he(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function ue(e){return typeof Blob<"u"&&e instanceof Blob}function fe(e){return typeof FormData<"u"&&e instanceof FormData}class B{constructor(n,t,r,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase(),function Ve(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==r?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new p,this.context??=new de,this.params){const o=this.params.toString();if(0===o.length)this.urlWithParams=t;else{const l=t.indexOf("?");this.urlWithParams=t+(-1===l?"?":l<t.length-1?"&":"")+o}}else this.params=new O,this.urlWithParams=t}serializeBody(){return null===this.body?null:"string"==typeof this.body||he(this.body)||ue(this.body)||fe(this.body)||function We(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}(this.body)?this.body:this.body instanceof O?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||fe(this.body)?null:ue(this.body)?this.body.type||null:he(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof O?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(n={}){const t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,o=void 0!==n.body?n.body:this.body,l=n.withCredentials??this.withCredentials,c=n.reportProgress??this.reportProgress;let u=n.headers||this.headers,g=n.params||this.params;const d=n.context??this.context;return void 0!==n.setHeaders&&(u=Object.keys(n.setHeaders).reduce((y,R)=>y.set(R,n.setHeaders[R]),u)),n.setParams&&(g=Object.keys(n.setParams).reduce((y,R)=>y.set(R,n.setParams[R]),g)),new B(t,r,o,{params:g,headers:u,context:d,reportProgress:c,responseType:s,withCredentials:l,transferCache:i})}}var M=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(M||{});class ${constructor(n,t=j.Ok,r="OK"){this.headers=n.headers||new p,this.status=void 0!==n.status?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}}class J extends ${constructor(n={}){super(n),this.type=M.ResponseHeader}clone(n={}){return new J({headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class A extends ${constructor(n={}){super(n),this.type=M.Response,this.body=void 0!==n.body?n.body:null}clone(n={}){return new A({body:void 0!==n.body?n.body:this.body,headers:n.headers||this.headers,status:void 0!==n.status?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}}class _ extends ${constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${n.url||"(unknown url)"}`:`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}}var j=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(j||{});function H(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}let pe=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let i;if(t instanceof B)i=t;else{let c,u;c=s.headers instanceof p?s.headers:new p(s.headers),s.params&&(u=s.params instanceof O?s.params:new O({fromObject:s.params})),i=new B(t,r,void 0!==s.body?s.body:null,{headers:c,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}const o=(0,P.of)(i).pipe((0,E.concatMap)(c=>this.handler.handle(c)));if(t instanceof B||"events"===s.observe)return o;const l=o.pipe((0,E.filter)(c=>c instanceof A));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return l.pipe((0,E.map)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return l.pipe((0,E.map)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return l.pipe((0,E.map)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return l.pipe((0,E.map)(c=>c.body))}case"response":return l;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:(new O).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,H(s,r))}post(t,r,s={}){return this.request("POST",t,H(s,r))}put(t,r,s={}){return this.request("PUT",t,H(s,r))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(v))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const Ke=/^\)\]\}',?\n/;function ye(e){if(e.url)return e.url;const n="X-Request-URL".toLocaleLowerCase();return e.headers.get(n)}let G=(()=>{class e{constructor(){this.fetchImpl=(0,a.inject)(Ge,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=(0,a.inject)(a.NgZone)}handle(t){return new P.Observable(r=>{const s=new AbortController;return this.doRequest(t,s.signal,r).then(ee,i=>r.error(new _({error:i}))),()=>s.abort()})}doRequest(t,r,s){var i=this;return(0,X.A)(function*(){const o=i.createRequestInit(t);let l;try{const T=i.fetchImpl(t.urlWithParams,{signal:r,...o});(function Se(e){e.then(ee,ee)})(T),s.next({type:M.Sent}),l=yield T}catch(T){return void s.error(new _({error:T,status:T.status??0,statusText:T.statusText,url:t.urlWithParams,headers:T.headers}))}const c=new p(l.headers),u=l.statusText,g=ye(l)??t.urlWithParams;let d=l.status,y=null;if(t.reportProgress&&s.next(new J({headers:c,status:d,statusText:u,url:g})),l.body){const T=l.headers.get("content-length"),h=[],f=l.body.getReader();let C,m,w=0;const z=typeof Zone<"u"&&Zone.current;yield i.ngZone.runOutsideAngular((0,X.A)(function*(){for(;;){const{done:L,value:ce}=yield f.read();if(L)break;if(h.push(ce),w+=ce.length,t.reportProgress){m="text"===t.responseType?(m??"")+(C??=new TextDecoder).decode(ce,{stream:!0}):void 0;const Ce=()=>s.next({type:M.DownloadProgress,total:T?+T:void 0,loaded:w,partialText:m});z?z.run(Ce):Ce()}}}));const ae=i.concatChunks(h,w);try{const L=l.headers.get("Content-Type")??"";y=i.parseBody(t,ae,L)}catch(L){return void s.error(new _({error:L,headers:new p(l.headers),status:l.status,statusText:l.statusText,url:ye(l)??t.urlWithParams}))}}0===d&&(d=y?j.Ok:0),d>=200&&d<300?(s.next(new A({body:y,headers:c,status:d,statusText:u,url:g})),s.complete()):s.error(new _({error:y,headers:c,status:d,statusText:u,url:g}))})()}parseBody(t,r,s){switch(t.responseType){case"json":const i=(new TextDecoder).decode(r).replace(Ke,"");return""===i?null:JSON.parse(i);case"text":return(new TextDecoder).decode(r);case"blob":return new Blob([r],{type:s});case"arraybuffer":return r.buffer}}createRequestInit(t){const r={},s=t.withCredentials?"include":void 0;if(t.headers.forEach((i,o)=>r[i]=o.join(",")),r.Accept??="application/json, text/plain, */*",!r["Content-Type"]){const i=t.detectContentTypeHeader();null!==i&&(r["Content-Type"]=i)}return{body:t.serializeBody(),method:t.method,headers:r,credentials:s}}concatChunks(t,r){const s=new Uint8Array(r);let i=0;for(const o of t)s.set(o,i),i+=o.length;return s}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();class Ge{}function ee(){}function me(e,n){return n(e)}function qe(e,n){return(t,r)=>n.intercept(t,{handle:s=>e(s,r)})}const te=new a.InjectionToken(""),V=new a.InjectionToken(""),ne=new a.InjectionToken(""),re=new a.InjectionToken("");function Ze(){let e=null;return(n,t)=>{null===e&&(e=((0,a.inject)(te,{optional:!0})??[]).reduceRight(qe,me));const r=(0,a.inject)(a.\u0275PendingTasks),s=r.add();return e(n,t).pipe((0,E.finalize)(()=>r.remove(s)))}}let ge,S=(()=>{class e extends v{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=(0,a.inject)(a.\u0275PendingTasks);const s=(0,a.inject)(re,{optional:!0});this.backend=s??t}handle(t){if(null===this.chain){const s=Array.from(new Set([...this.injector.get(V),...this.injector.get(ne,[])]));this.chain=s.reduceRight((i,o)=>function Ye(e,n,t){return(r,s)=>(0,a.runInInjectionContext)(t,()=>n(r,i=>e(i,s)))}(i,o,this.injector),me)}const r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe((0,E.finalize)(()=>this.pendingTasks.remove(r)))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(b),a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})(),He=0;class Te{}function st(){return"object"==typeof window?window:{}}let se=(()=>{class e{constructor(t,r){this.callbackMap=t,this.document=r,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+He++}handle(t){if("JSONP"!==t.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==t.responseType)throw new Error("JSONP requests must use Json response type.");if(t.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new P.Observable(r=>{const s=this.nextCallback(),i=t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${s}$1`),o=this.document.createElement("script");o.src=i;let l=null,c=!1;this.callbackMap[s]=y=>{delete this.callbackMap[s],l=y,c=!0};const u=()=>{o.parentNode&&o.parentNode.removeChild(o),delete this.callbackMap[s]};return o.addEventListener("load",y=>{this.resolvedPromise.then(()=>{u(),c?(r.next(new A({body:l,status:j.Ok,statusText:"OK",url:i})),r.complete()):r.error(new _({url:i,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),o.addEventListener("error",y=>{u(),r.error(new _({error:y,status:0,statusText:"JSONP Error",url:i}))}),this.document.body.appendChild(o),r.next({type:M.Sent}),()=>{c||this.removeListeners(o),u()}})}removeListeners(t){ge??=this.document.implementation.createHTMLDocument(),ge.adoptNode(t)}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(Te),a.\u0275\u0275inject(I.DOCUMENT))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();function Ee(e,n){return"JSONP"===e.method?(0,a.inject)(se).handle(e):n(e)}let ot=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,a.runInInjectionContext)(this.injector,()=>Ee(t,s=>r.handle(s)))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const it=/^\)\]\}',?\n/;let oe=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if("JSONP"===t.method)throw new a.\u0275RuntimeError(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,P.from)(r.\u0275loadImpl()):(0,P.of)(null)).pipe((0,E.switchMap)(()=>new P.Observable(i=>{const o=r.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((h,f)=>o.setRequestHeader(h,f.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){const h=t.detectContentTypeHeader();null!==h&&o.setRequestHeader("Content-Type",h)}if(t.responseType){const h=t.responseType.toLowerCase();o.responseType="json"!==h?h:"text"}const l=t.serializeBody();let c=null;const u=()=>{if(null!==c)return c;const h=o.statusText||"OK",f=new p(o.getAllResponseHeaders()),w=function at(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(o)||t.url;return c=new J({headers:f,status:o.status,statusText:h,url:w}),c},g=()=>{let{headers:h,status:f,statusText:w,url:C}=u(),m=null;f!==j.NoContent&&(m=typeof o.response>"u"?o.responseText:o.response),0===f&&(f=m?j.Ok:0);let z=f>=200&&f<300;if("json"===t.responseType&&"string"==typeof m){const ae=m;m=m.replace(it,"");try{m=""!==m?JSON.parse(m):null}catch(L){m=ae,z&&(z=!1,m={error:L,text:m})}}z?(i.next(new A({body:m,headers:h,status:f,statusText:w,url:C||void 0})),i.complete()):i.error(new _({error:m,headers:h,status:f,statusText:w,url:C||void 0}))},d=h=>{const{url:f}=u(),w=new _({error:h,status:o.status||0,statusText:o.statusText||"Unknown Error",url:f||void 0});i.error(w)};let y=!1;const R=h=>{y||(i.next(u()),y=!0);let f={type:M.DownloadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),"text"===t.responseType&&o.responseText&&(f.partialText=o.responseText),i.next(f)},T=h=>{let f={type:M.UploadProgress,loaded:h.loaded};h.lengthComputable&&(f.total=h.total),i.next(f)};return o.addEventListener("load",g),o.addEventListener("error",d),o.addEventListener("timeout",d),o.addEventListener("abort",d),t.reportProgress&&(o.addEventListener("progress",R),null!==l&&o.upload&&o.upload.addEventListener("progress",T)),o.send(l),i.next({type:M.Sent}),()=>{o.removeEventListener("error",d),o.removeEventListener("abort",d),o.removeEventListener("load",g),o.removeEventListener("timeout",d),t.reportProgress&&(o.removeEventListener("progress",R),null!==l&&o.upload&&o.upload.removeEventListener("progress",T)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(I.XhrFactory))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();const q=new a.InjectionToken(""),we="XSRF-TOKEN",Pe=new a.InjectionToken("",{providedIn:"root",factory:()=>we}),Re="X-XSRF-TOKEN",ve=new a.InjectionToken("",{providedIn:"root",factory:()=>Re});class Y{}let be=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,I.\u0275parseCookieValue)(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(I.DOCUMENT),a.\u0275\u0275inject(a.PLATFORM_ID),a.\u0275\u0275inject(Pe))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();function Me(e,n){const t=e.url.toLowerCase();if(!(0,a.inject)(q)||"GET"===e.method||"HEAD"===e.method||t.startsWith("http://")||t.startsWith("https://"))return n(e);const r=(0,a.inject)(Y).getToken(),s=(0,a.inject)(ve);return null!=r&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}let Ne=(()=>{class e{constructor(t){this.injector=t}intercept(t,r){return(0,a.runInInjectionContext)(this.injector,()=>Me(t,s=>r.handle(s)))}static{this.\u0275fac=function(r){return new(r||e)(a.\u0275\u0275inject(a.EnvironmentInjector))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac})}}return e})();var k=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(k||{});function F(e,n){return{\u0275kind:e,\u0275providers:n}}function Ie(...e){const n=[pe,oe,S,{provide:v,useExisting:S},{provide:b,useExisting:oe},{provide:V,useValue:Me,multi:!0},{provide:q,useValue:!0},{provide:Y,useClass:be}];for(const t of e)n.push(...t.\u0275providers);return(0,a.makeEnvironmentProviders)(n)}function ct(e){return F(k.Interceptors,e.map(n=>({provide:V,useValue:n,multi:!0})))}const Oe=new a.InjectionToken("");function Ae(){return F(k.LegacyInterceptors,[{provide:Oe,useFactory:Ze},{provide:V,useExisting:Oe,multi:!0}])}function ie({cookieName:e,headerName:n}){const t=[];return void 0!==e&&t.push({provide:Pe,useValue:e}),void 0!==n&&t.push({provide:ve,useValue:n}),F(k.CustomXsrfConfiguration,t)}function _e(){return F(k.NoXsrfProtection,[{provide:q,useValue:!1}])}function ke(){return F(k.JsonpSupport,[se,{provide:Te,useFactory:st},{provide:V,useValue:Ee,multi:!0}])}function lt(){return F(k.RequestsMadeViaParent,[{provide:b,useFactory:()=>(0,a.inject)(v,{skipSelf:!0,optional:!0})}])}function dt(){return F(k.Fetch,[G,{provide:b,useExisting:G},{provide:re,useExisting:G}])}let ht=(()=>{class e{static disable(){return{ngModule:e,providers:[_e().\u0275providers]}}static withOptions(t={}){return{ngModule:e,providers:ie(t).\u0275providers}}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ne,{provide:te,useExisting:Ne,multi:!0},{provide:Y,useClass:be},ie({cookieName:we,headerName:Re}).\u0275providers,{provide:q,useValue:!0}]})}}return e})(),ut=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[Ie(Ae())]})}}return e})(),ft=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:e})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[ke().\u0275providers]})}}return e})();const De="b",xe="h",je="s",Fe="st",Le="u",Ue="rt",Z=new a.InjectionToken(""),pt=["GET","HEAD"];function yt(e,n){const{isCacheActive:t,...r}=(0,a.inject)(Z),{transferCache:s,method:i}=e;if(!t||"POST"===i&&!r.includePostRequests&&!s||"POST"!==i&&!pt.includes(i)||!1===s||!1===r.filter?.(e))return n(e);const o=(0,a.inject)(a.TransferState),l=function gt(e){const{params:n,method:t,responseType:r,url:s}=e,i=Be(n);let o=e.serializeBody();o instanceof URLSearchParams?o=Be(o):"string"!=typeof o&&(o="");const c=function Tt(e){let n=0;for(const t of e)n=Math.imul(31,n)+t.charCodeAt(0)|0;return n+=2147483648,n.toString()}([t,r,s,o,i].join("|"));return(0,a.makeStateKey)(c)}(e),c=o.get(l,null);let u=r.includeHeaders;if("object"==typeof s&&s.includeHeaders&&(u=s.includeHeaders),c){const{[De]:d,[Ue]:y,[xe]:R,[je]:T,[Fe]:h,[Le]:f}=c;let w=d;switch(y){case"arraybuffer":w=(new TextEncoder).encode(d).buffer;break;case"blob":w=new Blob([d])}let C=new p(R);return(0,P.of)(new A({body:w,headers:C,status:T,statusText:h,url:f}))}const g=(0,I.isPlatformServer)((0,a.inject)(a.PLATFORM_ID));return n(e).pipe((0,E.tap)(d=>{d instanceof A&&g&&o.set(l,{[De]:d.body,[xe]:mt(d.headers,u),[je]:d.status,[Fe]:d.statusText,[Le]:d.url||"",[Ue]:e.responseType})}))}function mt(e,n){if(!n)return{};const t={};for(const r of n){const s=e.getAll(r);null!==s&&(t[r]=s)}return t}function Be(e){return[...e.keys()].sort().map(n=>`${n}=${e.getAll(n)}`).join("&")}function Et(e){return[{provide:Z,useFactory:()=>((0,a.\u0275performanceMarkFeature)("NgHttpTransferCache"),{isCacheActive:!0,...e})},{provide:ne,useValue:yt,multi:!0,deps:[a.TransferState,Z]},{provide:a.APP_BOOTSTRAP_LISTENER,multi:!0,useFactory:()=>{const n=(0,a.inject)(a.ApplicationRef),t=(0,a.inject)(Z);return()=>{(0,a.\u0275whenStable)(n).then(()=>{t.isCacheActive=!1})}}}]}},467:(ze,W,N)=>{function X(P,E,I,v,b,p,U){try{var D=P[p](U),x=D.value}catch(Q){return void I(Q)}D.done?E(x):Promise.resolve(x).then(v,b)}function a(P){return function(){var E=this,I=arguments;return new Promise(function(v,b){var p=P.apply(E,I);function U(x){X(p,v,b,U,D,"next",x)}function D(x){X(p,v,b,U,D,"throw",x)}U(void 0)})}}N.d(W,{A:()=>a})}}]);