(self.webpackChunkmf_user=self.webpackChunkmf_user||[]).push([[488],{3488:(ne,w,D)=>{function v(e,r){return Object.is(e,r)}D.r(w),D.d(w,{REACTIVE_NODE:()=>d,SIGNAL:()=>l,SIGNAL_NODE:()=>b,consumerAfterComputation:()=>E,consumerBeforeComputation:()=>O,consumerDestroy:()=>F,consumerMarkDirty:()=>y,consumerPollProducersForChange:()=>T,createComputed:()=>q,createSignal:()=>H,createWatch:()=>Q,defaultEquals:()=>v,getActiveConsumer:()=>k,isInNotificationPhase:()=>P,isReactive:()=>_,producerAccessed:()=>p,producerNotifyConsumers:()=>g,producerUpdateValueVersion:()=>C,producerUpdatesAllowed:()=>I,setActiveConsumer:()=>N,setAlternateWeakRefImpl:()=>Y,setPostSignalSetFn:()=>z,setThrowInvalidWriteToSignalError:()=>$,signalSetFn:()=>U,signalUpdateFn:()=>J});let t=null,c=!1,f=1;const l=Symbol("SIGNAL");function N(e){const r=t;return t=e,r}function k(){return t}function P(){return c}function _(e){return void 0!==e[l]}const d={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function p(e){if(c)throw new Error("");if(null===t)return;t.consumerOnSignalRead(e);const r=t.nextProducerIndex++;i(t),r<t.producerNode.length&&t.producerNode[r]!==e&&a(t)&&m(t.producerNode[r],t.producerIndexOfThis[r]),t.producerNode[r]!==e&&(t.producerNode[r]=e,t.producerIndexOfThis[r]=a(t)?L(e,t,r):0),t.producerLastReadVersion[r]=e.version}function C(e){if((!a(e)||e.dirty)&&(e.dirty||e.lastCleanEpoch!==f)){if(!e.producerMustRecompute(e)&&!T(e))return e.dirty=!1,void(e.lastCleanEpoch=f);e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=f}}function g(e){if(void 0===e.liveConsumerNode)return;const r=c;c=!0;try{for(const u of e.liveConsumerNode)u.dirty||y(u)}finally{c=r}}function I(){return!1!==t?.consumerAllowSignalWrites}function y(e){e.dirty=!0,g(e),e.consumerMarkedDirty?.(e)}function O(e){return e&&(e.nextProducerIndex=0),N(e)}function E(e,r){if(N(r),e&&void 0!==e.producerNode&&void 0!==e.producerIndexOfThis&&void 0!==e.producerLastReadVersion){if(a(e))for(let u=e.nextProducerIndex;u<e.producerNode.length;u++)m(e.producerNode[u],e.producerIndexOfThis[u]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function T(e){i(e);for(let r=0;r<e.producerNode.length;r++){const u=e.producerNode[r],n=e.producerLastReadVersion[r];if(n!==u.version||(C(u),n!==u.version))return!0}return!1}function F(e){if(i(e),a(e))for(let r=0;r<e.producerNode.length;r++)m(e.producerNode[r],e.producerIndexOfThis[r]);e.producerNode.length=e.producerLastReadVersion.length=e.producerIndexOfThis.length=0,e.liveConsumerNode&&(e.liveConsumerNode.length=e.liveConsumerIndexOfThis.length=0)}function L(e,r,u){if(V(e),i(e),0===e.liveConsumerNode.length)for(let n=0;n<e.producerNode.length;n++)e.producerIndexOfThis[n]=L(e.producerNode[n],e,n);return e.liveConsumerIndexOfThis.push(u),e.liveConsumerNode.push(r)-1}function m(e,r){if(V(e),i(e),1===e.liveConsumerNode.length)for(let n=0;n<e.producerNode.length;n++)m(e.producerNode[n],e.producerIndexOfThis[n]);const u=e.liveConsumerNode.length-1;if(e.liveConsumerNode[r]=e.liveConsumerNode[u],e.liveConsumerIndexOfThis[r]=e.liveConsumerIndexOfThis[u],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,r<e.liveConsumerNode.length){const n=e.liveConsumerIndexOfThis[r],s=e.liveConsumerNode[r];i(s),s.producerIndexOfThis[n]=r}}function a(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function i(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function V(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function q(e){const r=Object.create(j);r.computation=e;const u=()=>{if(C(r),p(r),r.value===h)throw r.error;return r.value};return u[l]=r,u}const x=Symbol("UNSET"),A=Symbol("COMPUTING"),h=Symbol("ERRORED"),j={...d,value:x,dirty:!0,error:null,equal:v,producerMustRecompute:e=>e.value===x||e.value===A,producerRecomputeValue(e){if(e.value===A)throw new Error("Detected cycle in computations.");const r=e.value;e.value=A;const u=O(e);let n;try{n=e.computation()}catch(s){n=h,e.error=s}finally{E(e,u)}r!==x&&r!==h&&n!==h&&e.equal(r,n)?e.value=r:(e.value=n,e.version++)}};let M=function B(){throw new Error};function W(){M()}function $(e){M=e}let S=null;function H(e){const r=Object.create(b);r.value=e;const u=()=>(p(r),r.value);return u[l]=r,u}function z(e){const r=S;return S=e,r}function U(e,r){I()||W(),e.equal(e.value,r)||(e.value=r,function K(e){e.version++,function G(){f++}(),g(e),S?.()}(e))}function J(e,r){I()||W(),U(e,r(e.value))}const b={...d,equal:v,value:void 0};function Q(e,r,u){const n=Object.create(X);u&&(n.consumerAllowSignalWrites=!0),n.fn=e,n.schedule=r;const s=o=>{n.cleanupFn=o};return n.ref={notify:()=>y(n),run:()=>{if(null===n.fn)return;if(P())throw new Error("Schedulers cannot synchronously execute watches while scheduling.");if(n.dirty=!1,n.hasRun&&!T(n))return;n.hasRun=!0;const o=O(n);try{n.cleanupFn(),n.cleanupFn=R,n.fn(s)}finally{E(n,o)}},cleanup:()=>n.cleanupFn(),destroy:()=>function ee(o){(function Z(o){return null===o.fn&&null===o.schedule})(o)||(F(o),o.cleanupFn(),o.fn=null,o.schedule=null,o.cleanupFn=R)}(n),[l]:n},n.ref}const R=()=>{},X={...d,consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!1,consumerMarkedDirty:e=>{null!==e.schedule&&e.schedule(e.ref)},hasRun:!1,cleanupFn:R};function Y(e){}}}]);