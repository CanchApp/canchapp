(self.webpackChunkmf_catalog=self.webpackChunkmf_catalog||[]).push([[833],{5833:(Ee,L,w)=>{w.r(L),w.d(L,{Draggable:()=>de,ThirdPartyDraggable:()=>ue,default:()=>pe});var X=w(9545),r=w(8043);r.config.touchMouseIgnoreWait=500;let R=0,T=0,I=!1;class P{constructor(e){this.subjectEl=null,this.selector="",this.handleSelector="",this.shouldIgnoreMove=!1,this.shouldWatchScroll=!0,this.isDragging=!1,this.isTouchDragging=!1,this.wasTouchScroll=!1,this.handleMouseDown=t=>{if(!this.shouldIgnoreMouse()&&function O(h){return 0===h.button&&!h.ctrlKey}(t)&&this.tryStart(t)){let i=this.createEventFromMouse(t,!0);this.emitter.trigger("pointerdown",i),this.initScrollWatch(i),this.shouldIgnoreMove||document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}},this.handleMouseMove=t=>{let i=this.createEventFromMouse(t);this.recordCoords(i),this.emitter.trigger("pointermove",i)},this.handleMouseUp=t=>{document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.emitter.trigger("pointerup",this.createEventFromMouse(t)),this.cleanup()},this.handleTouchStart=t=>{if(this.tryStart(t)){this.isTouchDragging=!0;let i=this.createEventFromTouch(t,!0);this.emitter.trigger("pointerdown",i),this.initScrollWatch(i);let n=t.target;this.shouldIgnoreMove||n.addEventListener("touchmove",this.handleTouchMove),n.addEventListener("touchend",this.handleTouchEnd),n.addEventListener("touchcancel",this.handleTouchEnd),window.addEventListener("scroll",this.handleTouchScroll,!0)}},this.handleTouchMove=t=>{let i=this.createEventFromTouch(t);this.recordCoords(i),this.emitter.trigger("pointermove",i)},this.handleTouchEnd=t=>{if(this.isDragging){let i=t.target;i.removeEventListener("touchmove",this.handleTouchMove),i.removeEventListener("touchend",this.handleTouchEnd),i.removeEventListener("touchcancel",this.handleTouchEnd),window.removeEventListener("scroll",this.handleTouchScroll,!0),this.emitter.trigger("pointerup",this.createEventFromTouch(t)),this.cleanup(),this.isTouchDragging=!1,function W(){R+=1,setTimeout(()=>{R-=1},r.config.touchMouseIgnoreWait)}()}},this.handleTouchScroll=()=>{this.wasTouchScroll=!0},this.handleScroll=t=>{if(!this.shouldIgnoreMove){let i=window.scrollX-this.prevScrollX+this.prevPageX,n=window.scrollY-this.prevScrollY+this.prevPageY;this.emitter.trigger("pointermove",{origEvent:t,isTouch:this.isTouchDragging,subjectEl:this.subjectEl,pageX:i,pageY:n,deltaX:i-this.origPageX,deltaY:n-this.origPageY})}},this.containerEl=e,this.emitter=new r.Emitter,e.addEventListener("mousedown",this.handleMouseDown),e.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),function q(){T+=1,1===T&&window.addEventListener("touchmove",x,{passive:!1})}()}destroy(){this.containerEl.removeEventListener("mousedown",this.handleMouseDown),this.containerEl.removeEventListener("touchstart",this.handleTouchStart,{passive:!0}),function k(){T-=1,T||window.removeEventListener("touchmove",x,{passive:!1})}()}tryStart(e){let t=this.querySubjectEl(e);return!(!t||this.handleSelector&&!(0,r.elementClosest)(e.target,this.handleSelector)||(this.subjectEl=t,this.isDragging=!0,this.wasTouchScroll=!1,0))}cleanup(){I=!1,this.isDragging=!1,this.subjectEl=null,this.destroyScrollWatch()}querySubjectEl(e){return this.selector?(0,r.elementClosest)(e.target,this.selector):this.containerEl}shouldIgnoreMouse(){return R||this.isTouchDragging}cancelTouchScroll(){this.isDragging&&(I=!0)}initScrollWatch(e){this.shouldWatchScroll&&(this.recordCoords(e),window.addEventListener("scroll",this.handleScroll,!0))}recordCoords(e){this.shouldWatchScroll&&(this.prevPageX=e.pageX,this.prevPageY=e.pageY,this.prevScrollX=window.scrollX,this.prevScrollY=window.scrollY)}destroyScrollWatch(){this.shouldWatchScroll&&window.removeEventListener("scroll",this.handleScroll,!0)}createEventFromMouse(e,t){let i=0,n=0;return t?(this.origPageX=e.pageX,this.origPageY=e.pageY):(i=e.pageX-this.origPageX,n=e.pageY-this.origPageY),{origEvent:e,isTouch:!1,subjectEl:this.subjectEl,pageX:e.pageX,pageY:e.pageY,deltaX:i,deltaY:n}}createEventFromTouch(e,t){let n,o,i=e.touches,s=0,a=0;return i&&i.length?(n=i[0].pageX,o=i[0].pageY):(n=e.pageX,o=e.pageY),t?(this.origPageX=n,this.origPageY=o):(s=n-this.origPageX,a=o-this.origPageY),{origEvent:e,isTouch:!0,subjectEl:this.subjectEl,pageX:n,pageY:o,deltaX:s,deltaY:a}}}function x(h){I&&h.preventDefault()}class F{constructor(){this.isVisible=!1,this.sourceEl=null,this.mirrorEl=null,this.sourceElRect=null,this.parentNode=document.body,this.zIndex=9999,this.revertDuration=0}start(e,t,i){this.sourceEl=e,this.sourceElRect=this.sourceEl.getBoundingClientRect(),this.origScreenX=t-window.scrollX,this.origScreenY=i-window.scrollY,this.deltaX=0,this.deltaY=0,this.updateElPosition()}handleMove(e,t){this.deltaX=e-window.scrollX-this.origScreenX,this.deltaY=t-window.scrollY-this.origScreenY,this.updateElPosition()}setIsVisible(e){e?this.isVisible||(this.mirrorEl&&(this.mirrorEl.style.display=""),this.isVisible=e,this.updateElPosition()):this.isVisible&&(this.mirrorEl&&(this.mirrorEl.style.display="none"),this.isVisible=e)}stop(e,t){let i=()=>{this.cleanup(),t()};e&&this.mirrorEl&&this.isVisible&&this.revertDuration&&(this.deltaX||this.deltaY)?this.doRevertAnimation(i,this.revertDuration):setTimeout(i,0)}doRevertAnimation(e,t){let i=this.mirrorEl,n=this.sourceEl.getBoundingClientRect();i.style.transition="top "+t+"ms,left "+t+"ms",(0,r.applyStyle)(i,{left:n.left,top:n.top}),(0,r.whenTransitionDone)(i,()=>{i.style.transition="",e()})}cleanup(){this.mirrorEl&&((0,r.removeElement)(this.mirrorEl),this.mirrorEl=null),this.sourceEl=null}updateElPosition(){this.sourceEl&&this.isVisible&&(0,r.applyStyle)(this.getMirrorEl(),{left:this.sourceElRect.left+this.deltaX,top:this.sourceElRect.top+this.deltaY})}getMirrorEl(){let e=this.sourceElRect,t=this.mirrorEl;return t||(t=this.mirrorEl=this.sourceEl.cloneNode(!0),t.style.userSelect="none",t.style.webkitUserSelect="none",t.style.pointerEvents="none",t.classList.add("fc-event-dragging"),(0,r.applyStyle)(t,{position:"fixed",zIndex:this.zIndex,visibility:"",boxSizing:"border-box",width:e.right-e.left,height:e.bottom-e.top,right:"auto",bottom:"auto",margin:0}),this.parentNode.appendChild(t)),t}}class H extends r.ScrollController{constructor(e,t){super(),this.handleScroll=()=>{this.scrollTop=this.scrollController.getScrollTop(),this.scrollLeft=this.scrollController.getScrollLeft(),this.handleScrollChange()},this.scrollController=e,this.doesListening=t,this.scrollTop=this.origScrollTop=e.getScrollTop(),this.scrollLeft=this.origScrollLeft=e.getScrollLeft(),this.scrollWidth=e.getScrollWidth(),this.scrollHeight=e.getScrollHeight(),this.clientWidth=e.getClientWidth(),this.clientHeight=e.getClientHeight(),this.clientRect=this.computeClientRect(),this.doesListening&&this.getEventTarget().addEventListener("scroll",this.handleScroll)}destroy(){this.doesListening&&this.getEventTarget().removeEventListener("scroll",this.handleScroll)}getScrollTop(){return this.scrollTop}getScrollLeft(){return this.scrollLeft}setScrollTop(e){this.scrollController.setScrollTop(e),this.doesListening||(this.scrollTop=Math.max(Math.min(e,this.getMaxScrollTop()),0),this.handleScrollChange())}setScrollLeft(e){this.scrollController.setScrollLeft(e),this.doesListening||(this.scrollLeft=Math.max(Math.min(e,this.getMaxScrollLeft()),0),this.handleScrollChange())}getClientWidth(){return this.clientWidth}getClientHeight(){return this.clientHeight}getScrollWidth(){return this.scrollWidth}getScrollHeight(){return this.scrollHeight}handleScrollChange(){}}class N extends H{constructor(e,t){super(new r.ElementScrollController(e),t)}getEventTarget(){return this.scrollController.el}computeClientRect(){return(0,r.computeInnerRect)(this.scrollController.el)}}class G extends H{constructor(e){super(new r.WindowScrollController,e)}getEventTarget(){return window}computeClientRect(){return{left:this.scrollLeft,right:this.scrollLeft+this.clientWidth,top:this.scrollTop,bottom:this.scrollTop+this.clientHeight}}handleScrollChange(){this.clientRect=this.computeClientRect()}}const _="function"==typeof performance?performance.now:Date.now;class z{constructor(){this.isEnabled=!0,this.scrollQuery=[window,".fc-scroller"],this.edgeThreshold=50,this.maxVelocity=300,this.pointerScreenX=null,this.pointerScreenY=null,this.isAnimating=!1,this.scrollCaches=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.animate=()=>{if(this.isAnimating){let e=this.computeBestEdge(this.pointerScreenX+window.scrollX,this.pointerScreenY+window.scrollY);if(e){let t=_();this.handleSide(e,(t-this.msSinceRequest)/1e3),this.requestAnimation(t)}else this.isAnimating=!1}}}start(e,t,i){this.isEnabled&&(this.scrollCaches=this.buildCaches(i),this.pointerScreenX=null,this.pointerScreenY=null,this.everMovedUp=!1,this.everMovedDown=!1,this.everMovedLeft=!1,this.everMovedRight=!1,this.handleMove(e,t))}handleMove(e,t){if(this.isEnabled){let i=e-window.scrollX,n=t-window.scrollY,o=null===this.pointerScreenY?0:n-this.pointerScreenY,s=null===this.pointerScreenX?0:i-this.pointerScreenX;o<0?this.everMovedUp=!0:o>0&&(this.everMovedDown=!0),s<0?this.everMovedLeft=!0:s>0&&(this.everMovedRight=!0),this.pointerScreenX=i,this.pointerScreenY=n,this.isAnimating||(this.isAnimating=!0,this.requestAnimation(_()))}}stop(){if(this.isEnabled){this.isAnimating=!1;for(let e of this.scrollCaches)e.destroy();this.scrollCaches=null}}requestAnimation(e){this.msSinceRequest=e,requestAnimationFrame(this.animate)}handleSide(e,t){let{scrollCache:i}=e,{edgeThreshold:n}=this,o=n-e.distance,s=o*o/(n*n)*this.maxVelocity*t,a=1;switch(e.name){case"left":a=-1;case"right":i.setScrollLeft(i.getScrollLeft()+s*a);break;case"top":a=-1;case"bottom":i.setScrollTop(i.getScrollTop()+s*a)}}computeBestEdge(e,t){let{edgeThreshold:i}=this,n=null,o=this.scrollCaches||[];for(let s of o){let a=s.clientRect,l=e-a.left,c=a.right-e,d=t-a.top,g=a.bottom-t;l>=0&&c>=0&&d>=0&&g>=0&&(d<=i&&this.everMovedUp&&s.canScrollUp()&&(!n||n.distance>d)&&(n={scrollCache:s,name:"top",distance:d}),g<=i&&this.everMovedDown&&s.canScrollDown()&&(!n||n.distance>g)&&(n={scrollCache:s,name:"bottom",distance:g}),l<=i&&this.everMovedLeft&&s.canScrollLeft()&&(!n||n.distance>l)&&(n={scrollCache:s,name:"left",distance:l}),c<=i&&this.everMovedRight&&s.canScrollRight()&&(!n||n.distance>c)&&(n={scrollCache:s,name:"right",distance:c}))}return n}buildCaches(e){return this.queryScrollEls(e).map(t=>t===window?new G(!1):new N(t,!1))}queryScrollEls(e){let t=[];for(let i of this.scrollQuery)"object"==typeof i?t.push(i):t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(i)));return t}}class S extends r.ElementDragging{constructor(e,t){super(e),this.containerEl=e,this.delay=null,this.minDistance=0,this.touchScrollAllowed=!0,this.mirrorNeedsRevert=!1,this.isInteracting=!1,this.isDragging=!1,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,this.delayTimeoutId=null,this.onPointerDown=n=>{this.isDragging||(this.isInteracting=!0,this.isDelayEnded=!1,this.isDistanceSurpassed=!1,(0,r.preventSelection)(document.body),(0,r.preventContextMenu)(document.body),n.isTouch||n.origEvent.preventDefault(),this.emitter.trigger("pointerdown",n),this.isInteracting&&!this.pointer.shouldIgnoreMove&&(this.mirror.setIsVisible(!1),this.mirror.start(n.subjectEl,n.pageX,n.pageY),this.startDelay(n),this.minDistance||this.handleDistanceSurpassed(n)))},this.onPointerMove=n=>{if(this.isInteracting){if(this.emitter.trigger("pointermove",n),!this.isDistanceSurpassed){let s,o=this.minDistance,{deltaX:a,deltaY:l}=n;s=a*a+l*l,s>=o*o&&this.handleDistanceSurpassed(n)}this.isDragging&&("scroll"!==n.origEvent.type&&(this.mirror.handleMove(n.pageX,n.pageY),this.autoScroller.handleMove(n.pageX,n.pageY)),this.emitter.trigger("dragmove",n))}},this.onPointerUp=n=>{this.isInteracting&&(this.isInteracting=!1,(0,r.allowSelection)(document.body),(0,r.allowContextMenu)(document.body),this.emitter.trigger("pointerup",n),this.isDragging&&(this.autoScroller.stop(),this.tryStopDrag(n)),this.delayTimeoutId&&(clearTimeout(this.delayTimeoutId),this.delayTimeoutId=null))};let i=this.pointer=new P(e);i.emitter.on("pointerdown",this.onPointerDown),i.emitter.on("pointermove",this.onPointerMove),i.emitter.on("pointerup",this.onPointerUp),t&&(i.selector=t),this.mirror=new F,this.autoScroller=new z}destroy(){this.pointer.destroy(),this.onPointerUp({})}startDelay(e){"number"==typeof this.delay?this.delayTimeoutId=setTimeout(()=>{this.delayTimeoutId=null,this.handleDelayEnd(e)},this.delay):this.handleDelayEnd(e)}handleDelayEnd(e){this.isDelayEnded=!0,this.tryStartDrag(e)}handleDistanceSurpassed(e){this.isDistanceSurpassed=!0,this.tryStartDrag(e)}tryStartDrag(e){this.isDelayEnded&&this.isDistanceSurpassed&&(!this.pointer.wasTouchScroll||this.touchScrollAllowed)&&(this.isDragging=!0,this.mirrorNeedsRevert=!1,this.autoScroller.start(e.pageX,e.pageY,this.containerEl),this.emitter.trigger("dragstart",e),!1===this.touchScrollAllowed&&this.pointer.cancelTouchScroll())}tryStopDrag(e){this.mirror.stop(this.mirrorNeedsRevert,this.stopDrag.bind(this,e))}stopDrag(e){this.isDragging=!1,this.emitter.trigger("dragend",e)}setIgnoreMove(e){this.pointer.shouldIgnoreMove=e}setMirrorIsVisible(e){this.mirror.setIsVisible(e)}setMirrorNeedsRevert(e){this.mirrorNeedsRevert=e}setAutoScrollEnabled(e){this.autoScroller.isEnabled=e}}class B{constructor(e){this.el=e,this.origRect=(0,r.computeRect)(e),this.scrollCaches=(0,r.getClippingParents)(e).map(t=>new N(t,!0))}destroy(){for(let e of this.scrollCaches)e.destroy()}computeLeft(){let e=this.origRect.left;for(let t of this.scrollCaches)e+=t.origScrollLeft-t.getScrollLeft();return e}computeTop(){let e=this.origRect.top;for(let t of this.scrollCaches)e+=t.origScrollTop-t.getScrollTop();return e}isWithinClipping(e,t){let i={left:e,top:t};for(let n of this.scrollCaches)if(!K(n.getEventTarget())&&!(0,r.pointInsideRect)(i,n.clientRect))return!1;return!0}}function K(h){let e=h.tagName;return"HTML"===e||"BODY"===e}class D{constructor(e,t){this.useSubjectCenter=!1,this.requireInitial=!0,this.disablePointCheck=!1,this.initialHit=null,this.movingHit=null,this.finalHit=null,this.handlePointerDown=i=>{let{dragging:n}=this;this.initialHit=null,this.movingHit=null,this.finalHit=null,this.prepareHits(),this.processFirstCoord(i),this.initialHit||!this.requireInitial?(n.setIgnoreMove(!1),this.emitter.trigger("pointerdown",i)):n.setIgnoreMove(!0)},this.handleDragStart=i=>{this.emitter.trigger("dragstart",i),this.handleMove(i,!0)},this.handleDragMove=i=>{this.emitter.trigger("dragmove",i),this.handleMove(i)},this.handlePointerUp=i=>{this.releaseHits(),this.emitter.trigger("pointerup",i)},this.handleDragEnd=i=>{this.movingHit&&this.emitter.trigger("hitupdate",null,!0,i),this.finalHit=this.movingHit,this.movingHit=null,this.emitter.trigger("dragend",i)},this.droppableStore=t,e.emitter.on("pointerdown",this.handlePointerDown),e.emitter.on("dragstart",this.handleDragStart),e.emitter.on("dragmove",this.handleDragMove),e.emitter.on("pointerup",this.handlePointerUp),e.emitter.on("dragend",this.handleDragEnd),this.dragging=e,this.emitter=new r.Emitter}processFirstCoord(e){let o,t={left:e.pageX,top:e.pageY},i=t,n=e.subjectEl;n instanceof HTMLElement&&(o=(0,r.computeRect)(n),i=(0,r.constrainPoint)(i,o));let s=this.initialHit=this.queryHitForOffset(i.left,i.top);if(s){if(this.useSubjectCenter&&o){let a=(0,r.intersectRects)(o,s.rect);a&&(i=(0,r.getRectCenter)(a))}this.coordAdjust=(0,r.diffPoints)(i,t)}else this.coordAdjust={left:0,top:0}}handleMove(e,t){let i=this.queryHitForOffset(e.pageX+this.coordAdjust.left,e.pageY+this.coordAdjust.top);(t||!b(this.movingHit,i))&&(this.movingHit=i,this.emitter.trigger("hitupdate",i,!1,e))}prepareHits(){this.offsetTrackers=(0,r.mapHash)(this.droppableStore,e=>(e.component.prepareHits(),new B(e.el)))}releaseHits(){let{offsetTrackers:e}=this;for(let t in e)e[t].destroy();this.offsetTrackers={}}queryHitForOffset(e,t){let{droppableStore:i,offsetTrackers:n}=this,o=null;for(let s in i){let a=i[s].component,l=n[s];if(l&&l.isWithinClipping(e,t)){let c=l.computeLeft(),d=l.computeTop(),g=e-c,u=t-d,{origRect:p}=l,f=p.right-p.left,v=p.bottom-p.top;if(g>=0&&g<f&&u>=0&&u<v){let E=a.queryHit(g,u,f,v);E&&(0,r.rangeContainsRange)(E.dateProfile.activeRange,E.dateSpan.range)&&(this.disablePointCheck||l.el.contains(l.el.getRootNode().elementFromPoint(g+c-window.scrollX,u+d-window.scrollY)))&&(!o||E.layer>o.layer)&&(E.componentId=s,E.context=a.context,E.rect.left+=c,E.rect.right+=c,E.rect.top+=d,E.rect.bottom+=d,o=E)}}}return o}}function b(h,e){return!h&&!e||!!h==!!e&&(0,r.isDateSpansEqual)(h.dateSpan,e.dateSpan)}function A(h,e){let t={};for(let i of e.pluginHooks.datePointTransforms)Object.assign(t,i(h,e));return Object.assign(t,function Q(h,e){return{date:e.toDate(h.range.start),dateStr:e.formatIso(h.range.start,{omitTime:h.allDay}),allDay:h.allDay}}(h,e.dateEnv)),t}let V=(()=>{class h extends r.Interaction{constructor(t){super(t),this.subjectEl=null,this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null,this.handlePointerDown=a=>{let l=a.origEvent.target,{component:c,dragging:d}=this,{mirror:g}=d,{options:u}=c.context,p=c.context;this.subjectEl=a.subjectEl;let f=this.subjectSeg=(0,r.getElSeg)(a.subjectEl),E=(this.eventRange=f.eventRange).instance.instanceId;this.relevantEvents=(0,r.getRelevantEvents)(p.getCurrentData().eventStore,E),d.minDistance=a.isTouch?0:u.eventDragMinDistance,d.delay=a.isTouch&&E!==c.props.eventSelection?function ie(h){let{options:e}=h.context,t=e.eventLongPressDelay;return null==t&&(t=e.longPressDelay),t}(c):null,g.parentNode=u.fixedMirrorParent?u.fixedMirrorParent:(0,r.elementClosest)(l,".fc"),g.revertDuration=u.dragRevertDuration;let m=c.isValidSegDownEl(l)&&!(0,r.elementClosest)(l,".fc-event-resizer");d.setIgnoreMove(!m),this.isDragging=m&&a.subjectEl.classList.contains("fc-event-draggable")},this.handleDragStart=a=>{let l=this.component.context,c=this.eventRange,d=c.instance.instanceId;a.isTouch?d!==this.component.props.eventSelection&&l.dispatch({type:"SELECT_EVENT",eventInstanceId:d}):l.dispatch({type:"UNSELECT_EVENT"}),this.isDragging&&(l.calendarApi.unselect(a),l.emitter.trigger("eventDragStart",{el:this.subjectEl,event:new r.EventImpl(l,c.def,c.instance),jsEvent:a.origEvent,view:l.viewApi}))},this.handleHitUpdate=(a,l)=>{if(!this.isDragging)return;let c=this.relevantEvents,d=this.hitDragging.initialHit,g=this.component.context,u=null,p=null,f=null,v=!1,E={affectedEvents:c,mutatedEvents:(0,r.createEmptyEventStore)(),isEvent:!0};if(a){u=a.context;let m=u.options;g===u||m.editable&&m.droppable?(p=function te(h,e,t,i){let n=h.dateSpan,o=e.dateSpan,s=n.range.start,a=o.range.start,l={};n.allDay!==o.allDay&&(l.allDay=o.allDay,l.hasEnd=e.context.options.allDayMaintainDuration,s=o.allDay?(0,r.startOfDay)(t):t);let c=(0,r.diffDates)(s,a,h.context.dateEnv,h.componentId===e.componentId?h.largeUnit:null);c.milliseconds&&(l.allDay=!1);let d={datesDelta:c,standardProps:l};for(let g of i)g(d,h,e);return d}(d,a,this.eventRange.instance.range.start,u.getCurrentData().pluginHooks.eventDragMutationMassagers),p&&(f=(0,r.applyMutationToEventStore)(c,u.getCurrentData().eventUiBases,p,u),E.mutatedEvents=f,(0,r.isInteractionValid)(E,a.dateProfile,u)||(v=!0,p=null,f=null,E.mutatedEvents=(0,r.createEmptyEventStore)()))):u=null}this.displayDrag(u,E),v?(0,r.disableCursor)():(0,r.enableCursor)(),l||(g===u&&b(d,a)&&(p=null),this.dragging.setMirrorNeedsRevert(!p),this.dragging.setMirrorIsVisible(!a||!this.subjectEl.getRootNode().querySelector(".fc-event-mirror")),this.receivingContext=u,this.validMutation=p,this.mutatedRelevantEvents=f)},this.handlePointerUp=()=>{this.isDragging||this.cleanup()},this.handleDragEnd=a=>{if(this.isDragging){let l=this.component.context,c=l.viewApi,{receivingContext:d,validMutation:g}=this,u=this.eventRange.def,p=this.eventRange.instance,f=new r.EventImpl(l,u,p),v=this.relevantEvents,E=this.mutatedRelevantEvents,{finalHit:m}=this.hitDragging;if(this.clearDrag(),l.emitter.trigger("eventDragStop",{el:this.subjectEl,event:f,jsEvent:a.origEvent,view:c}),g){if(d===l){let M=new r.EventImpl(l,E.defs[u.defId],p?E.instances[p.instanceId]:null);l.dispatch({type:"MERGE_EVENTS",eventStore:E});let C={oldEvent:f,event:M,relatedEvents:(0,r.buildEventApis)(E,l,p),revert(){l.dispatch({type:"MERGE_EVENTS",eventStore:v})}},y={};for(let j of l.getCurrentData().pluginHooks.eventDropTransformers)Object.assign(y,j(g,l));l.emitter.trigger("eventDrop",Object.assign(Object.assign(Object.assign({},C),y),{el:a.subjectEl,delta:g.datesDelta,jsEvent:a.origEvent,view:c})),l.emitter.trigger("eventChange",C)}else if(d){let M={event:f,relatedEvents:(0,r.buildEventApis)(v,l,p),revert(){l.dispatch({type:"MERGE_EVENTS",eventStore:v})}};l.emitter.trigger("eventLeave",Object.assign(Object.assign({},M),{draggedEl:a.subjectEl,view:c})),l.dispatch({type:"REMOVE_EVENTS",eventStore:v}),l.emitter.trigger("eventRemove",M);let y=E.instances[p.instanceId],j=new r.EventImpl(d,E.defs[u.defId],y);d.dispatch({type:"MERGE_EVENTS",eventStore:E});let U={event:j,relatedEvents:(0,r.buildEventApis)(E,d,y),revert(){d.dispatch({type:"REMOVE_EVENTS",eventStore:E})}};d.emitter.trigger("eventAdd",U),a.isTouch&&d.dispatch({type:"SELECT_EVENT",eventInstanceId:p.instanceId}),d.emitter.trigger("drop",Object.assign(Object.assign({},A(m.dateSpan,d)),{draggedEl:a.subjectEl,jsEvent:a.origEvent,view:m.context.viewApi})),d.emitter.trigger("eventReceive",Object.assign(Object.assign({},U),{draggedEl:a.subjectEl,view:m.context.viewApi}))}}else l.emitter.trigger("_noEventDrop")}this.cleanup()};let{component:i}=this,{options:n}=i.context,o=this.dragging=new S(t.el);o.pointer.selector=h.SELECTOR,o.touchScrollAllowed=!1,o.autoScroller.isEnabled=n.dragScroll;let s=this.hitDragging=new D(this.dragging,r.interactionSettingsStore);s.useSubjectCenter=t.useEventCenter,s.emitter.on("pointerdown",this.handlePointerDown),s.emitter.on("dragstart",this.handleDragStart),s.emitter.on("hitupdate",this.handleHitUpdate),s.emitter.on("pointerup",this.handlePointerUp),s.emitter.on("dragend",this.handleDragEnd)}destroy(){this.dragging.destroy()}displayDrag(t,i){let o=this.receivingContext;o&&o!==t&&o.dispatch(o===this.component.context?{type:"SET_EVENT_DRAG",state:{affectedEvents:i.affectedEvents,mutatedEvents:(0,r.createEmptyEventStore)(),isEvent:!0}}:{type:"UNSET_EVENT_DRAG"}),t&&t.dispatch({type:"SET_EVENT_DRAG",state:i})}clearDrag(){let t=this.component.context,{receivingContext:i}=this;i&&i.dispatch({type:"UNSET_EVENT_DRAG"}),t!==i&&t.dispatch({type:"UNSET_EVENT_DRAG"})}cleanup(){this.subjectSeg=null,this.isDragging=!1,this.eventRange=null,this.relevantEvents=null,this.receivingContext=null,this.validMutation=null,this.mutatedRelevantEvents=null}}return h.SELECTOR=".fc-event-draggable, .fc-event-resizable",h})();const le={fixedMirrorParent:r.identity},oe={dateClick:r.identity,eventDragStart:r.identity,eventDragStop:r.identity,eventDrop:r.identity,eventResizeStart:r.identity,eventResizeStop:r.identity,eventResize:r.identity,drop:r.identity,eventReceive:r.identity,eventLeave:r.identity};class Y{constructor(e,t){this.receivingContext=null,this.droppableEvent=null,this.suppliedDragMeta=null,this.dragMeta=null,this.handleDragStart=n=>{this.dragMeta=this.buildDragMeta(n.subjectEl)},this.handleHitUpdate=(n,o,s)=>{let{dragging:a}=this.hitDragging,l=null,c=null,d=!1,g={affectedEvents:(0,r.createEmptyEventStore)(),mutatedEvents:(0,r.createEmptyEventStore)(),isEvent:this.dragMeta.create};n&&(l=n.context,this.canDropElOnCalendar(s.subjectEl,l)&&(c=function ae(h,e,t){let i=Object.assign({},e.leftoverProps);for(let d of t.pluginHooks.externalDefTransforms)Object.assign(i,d(h,e));let{refined:n,extra:o}=(0,r.refineEventDef)(i,t),s=(0,r.parseEventDef)(n,o,e.sourceId,h.allDay,t.options.forceEventDuration||!!e.duration,t),a=h.range.start;h.allDay&&e.startTime&&(a=t.dateEnv.add(a,e.startTime));let l=e.duration?t.dateEnv.add(a,e.duration):(0,r.getDefaultEventEnd)(h.allDay,a,t);return{def:s,instance:(0,r.createEventInstance)(s.defId,{start:a,end:l})}}(n.dateSpan,this.dragMeta,l),g.mutatedEvents=(0,r.eventTupleToStore)(c),d=!(0,r.isInteractionValid)(g,n.dateProfile,l),d&&(g.mutatedEvents=(0,r.createEmptyEventStore)(),c=null))),this.displayDrag(l,g),a.setMirrorIsVisible(o||!c||!document.querySelector(".fc-event-mirror")),d?(0,r.disableCursor)():(0,r.enableCursor)(),o||(a.setMirrorNeedsRevert(!c),this.receivingContext=l,this.droppableEvent=c)},this.handleDragEnd=n=>{let{receivingContext:o,droppableEvent:s}=this;if(this.clearDrag(),o&&s){let a=this.hitDragging.finalHit,l=a.context.viewApi,c=this.dragMeta;if(o.emitter.trigger("drop",Object.assign(Object.assign({},A(a.dateSpan,o)),{draggedEl:n.subjectEl,jsEvent:n.origEvent,view:l})),c.create){let d=(0,r.eventTupleToStore)(s);o.dispatch({type:"MERGE_EVENTS",eventStore:d}),n.isTouch&&o.dispatch({type:"SELECT_EVENT",eventInstanceId:s.instance.instanceId}),o.emitter.trigger("eventReceive",{event:new r.EventImpl(o,s.def,s.instance),relatedEvents:[],revert(){o.dispatch({type:"REMOVE_EVENTS",eventStore:d})},draggedEl:n.subjectEl,view:l})}}this.receivingContext=null,this.droppableEvent=null};let i=this.hitDragging=new D(e,r.interactionSettingsStore);i.requireInitial=!1,i.emitter.on("dragstart",this.handleDragStart),i.emitter.on("hitupdate",this.handleHitUpdate),i.emitter.on("dragend",this.handleDragEnd),this.suppliedDragMeta=t}buildDragMeta(e){return"object"==typeof this.suppliedDragMeta?(0,r.parseDragMeta)(this.suppliedDragMeta):"function"==typeof this.suppliedDragMeta?(0,r.parseDragMeta)(this.suppliedDragMeta(e)):function he(h){let e=function ce(h,e){let t=r.config.dataAttrPrefix;return h.getAttribute("data-"+((t?t+"-":"")+e))||""}(h,"event"),t=e?JSON.parse(e):{create:!1};return(0,r.parseDragMeta)(t)}(e)}displayDrag(e,t){let i=this.receivingContext;i&&i!==e&&i.dispatch({type:"UNSET_EVENT_DRAG"}),e&&e.dispatch({type:"SET_EVENT_DRAG",state:t})}clearDrag(){this.receivingContext&&this.receivingContext.dispatch({type:"UNSET_EVENT_DRAG"})}canDropElOnCalendar(e,t){let i=t.options.dropAccept;return"function"==typeof i?i.call(t.calendarApi,e):"string"!=typeof i||!i||!!(0,r.elementMatches)(e,i)}}r.config.dataAttrPrefix="";class de{constructor(e,t={}){this.handlePointerDown=n=>{let{dragging:o}=this,{minDistance:s,longPressDelay:a}=this.settings;o.minDistance=s??(n.isTouch?0:r.BASE_OPTION_DEFAULTS.eventDragMinDistance),o.delay=n.isTouch?a??r.BASE_OPTION_DEFAULTS.longPressDelay:0},this.handleDragStart=n=>{n.isTouch&&this.dragging.delay&&n.subjectEl.classList.contains("fc-event")&&this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected")},this.settings=t;let i=this.dragging=new S(e);i.touchScrollAllowed=!1,null!=t.itemSelector&&(i.pointer.selector=t.itemSelector),null!=t.appendTo&&(i.mirror.parentNode=t.appendTo),i.emitter.on("pointerdown",this.handlePointerDown),i.emitter.on("dragstart",this.handleDragStart),new Y(i,t.eventData)}destroy(){this.dragging.destroy()}}class ge extends r.ElementDragging{constructor(e){super(e),this.shouldIgnoreMove=!1,this.mirrorSelector="",this.currentMirrorEl=null,this.handlePointerDown=i=>{this.emitter.trigger("pointerdown",i),this.shouldIgnoreMove||this.emitter.trigger("dragstart",i)},this.handlePointerMove=i=>{this.shouldIgnoreMove||this.emitter.trigger("dragmove",i)},this.handlePointerUp=i=>{this.emitter.trigger("pointerup",i),this.shouldIgnoreMove||this.emitter.trigger("dragend",i)};let t=this.pointer=new P(e);t.emitter.on("pointerdown",this.handlePointerDown),t.emitter.on("pointermove",this.handlePointerMove),t.emitter.on("pointerup",this.handlePointerUp)}destroy(){this.pointer.destroy()}setIgnoreMove(e){this.shouldIgnoreMove=e}setMirrorIsVisible(e){if(e)this.currentMirrorEl&&(this.currentMirrorEl.style.visibility="",this.currentMirrorEl=null);else{let t=this.mirrorSelector?document.querySelector(this.mirrorSelector):null;t&&(this.currentMirrorEl=t,t.style.visibility="hidden")}}}class ue{constructor(e,t){let i=document;e===document||e instanceof Element?(i=e,t=t||{}):t=e||{};let n=this.dragging=new ge(i);"string"==typeof t.itemSelector?n.pointer.selector=t.itemSelector:i===document&&(n.pointer.selector="[data-event]"),"string"==typeof t.mirrorSelector&&(n.mirrorSelector=t.mirrorSelector),new Y(n,t.eventData).hitDragging.disablePointCheck=!0}destroy(){this.dragging.destroy()}}var pe=(0,X.createPlugin)({name:"@fullcalendar/interaction",componentInteractions:[class Z extends r.Interaction{constructor(e){super(e),this.handlePointerDown=i=>{let{dragging:n}=this;n.setIgnoreMove(!this.component.isValidDateDownEl(i.origEvent.target))},this.handleDragEnd=i=>{let{component:n}=this,{pointer:o}=this.dragging;if(!o.wasTouchScroll){let{initialHit:s,finalHit:a}=this.hitDragging;if(s&&a&&b(s,a)){let{context:l}=n,c=Object.assign(Object.assign({},A(s.dateSpan,l)),{dayEl:s.dayEl,jsEvent:i.origEvent,view:l.viewApi||l.calendarApi.view});l.emitter.trigger("dateClick",c)}}},this.dragging=new S(e.el),this.dragging.autoScroller.isEnabled=!1;let t=this.hitDragging=new D(this.dragging,(0,r.interactionSettingsToStore)(e));t.emitter.on("pointerdown",this.handlePointerDown),t.emitter.on("dragend",this.handleDragEnd)}destroy(){this.dragging.destroy()}},class J extends r.Interaction{constructor(e){super(e),this.dragSelection=null,this.handlePointerDown=s=>{let{component:a,dragging:l}=this,{options:c}=a.context,d=c.selectable&&a.isValidDateDownEl(s.origEvent.target);l.setIgnoreMove(!d),l.delay=s.isTouch?function $(h){let{options:e}=h.context,t=e.selectLongPressDelay;return null==t&&(t=e.longPressDelay),t}(a):null},this.handleDragStart=s=>{this.component.context.calendarApi.unselect(s)},this.handleHitUpdate=(s,a)=>{let{context:l}=this.component,c=null,d=!1;if(s){let g=this.hitDragging.initialHit;s.componentId===g.componentId&&this.isHitComboAllowed&&!this.isHitComboAllowed(g,s)||(c=function ee(h,e,t){let i=h.dateSpan,n=e.dateSpan,o=[i.range.start,i.range.end,n.range.start,n.range.end];o.sort(r.compareNumbers);let s={};for(let a of t){let l=a(h,e);if(!1===l)return null;l&&Object.assign(s,l)}return s.range={start:o[0],end:o[3]},s.allDay=i.allDay,s}(g,s,l.pluginHooks.dateSelectionTransformers)),(!c||!(0,r.isDateSelectionValid)(c,s.dateProfile,l))&&(d=!0,c=null)}c?l.dispatch({type:"SELECT_DATES",selection:c}):a||l.dispatch({type:"UNSELECT_DATES"}),d?(0,r.disableCursor)():(0,r.enableCursor)(),a||(this.dragSelection=c)},this.handlePointerUp=s=>{this.dragSelection&&((0,r.triggerDateSelect)(this.dragSelection,s,this.component.context),this.dragSelection=null)};let{component:t}=e,{options:i}=t.context,n=this.dragging=new S(e.el);n.touchScrollAllowed=!1,n.minDistance=i.selectMinDistance||0,n.autoScroller.isEnabled=i.dragScroll;let o=this.hitDragging=new D(this.dragging,(0,r.interactionSettingsToStore)(e));o.emitter.on("pointerdown",this.handlePointerDown),o.emitter.on("dragstart",this.handleDragStart),o.emitter.on("hitupdate",this.handleHitUpdate),o.emitter.on("pointerup",this.handlePointerUp)}destroy(){this.dragging.destroy()}},V,class ne extends r.Interaction{constructor(e){super(e),this.draggingSegEl=null,this.draggingSeg=null,this.eventRange=null,this.relevantEvents=null,this.validMutation=null,this.mutatedRelevantEvents=null,this.handlePointerDown=o=>{let{component:s}=this,a=this.querySegEl(o),l=(0,r.getElSeg)(a),c=this.eventRange=l.eventRange;this.dragging.minDistance=s.context.options.eventDragMinDistance,this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(o.origEvent.target)||o.isTouch&&this.component.props.eventSelection!==c.instance.instanceId)},this.handleDragStart=o=>{let{context:s}=this.component,a=this.eventRange;this.relevantEvents=(0,r.getRelevantEvents)(s.getCurrentData().eventStore,this.eventRange.instance.instanceId);let l=this.querySegEl(o);this.draggingSegEl=l,this.draggingSeg=(0,r.getElSeg)(l),s.calendarApi.unselect(),s.emitter.trigger("eventResizeStart",{el:l,event:new r.EventImpl(s,a.def,a.instance),jsEvent:o.origEvent,view:s.viewApi})},this.handleHitUpdate=(o,s,a)=>{let{context:l}=this.component,c=this.relevantEvents,d=this.hitDragging.initialHit,g=this.eventRange.instance,u=null,p=null,f=!1,v={affectedEvents:c,mutatedEvents:(0,r.createEmptyEventStore)(),isEvent:!0};o&&(o.componentId===d.componentId&&this.isHitComboAllowed&&!this.isHitComboAllowed(d,o)||(u=function re(h,e,t,i){let n=h.context.dateEnv,a=(0,r.diffDates)(h.dateSpan.range.start,e.dateSpan.range.start,n,h.largeUnit);if(t){if(n.add(i.start,a)<i.end)return{startDelta:a}}else if(n.add(i.end,a)>i.start)return{endDelta:a};return null}(d,o,a.subjectEl.classList.contains("fc-event-resizer-start"),g.range))),u&&(p=(0,r.applyMutationToEventStore)(c,l.getCurrentData().eventUiBases,u,l),v.mutatedEvents=p,(0,r.isInteractionValid)(v,o.dateProfile,l)||(f=!0,u=null,p=null,v.mutatedEvents=null)),l.dispatch(p?{type:"SET_EVENT_RESIZE",state:v}:{type:"UNSET_EVENT_RESIZE"}),f?(0,r.disableCursor)():(0,r.enableCursor)(),s||(u&&b(d,o)&&(u=null),this.validMutation=u,this.mutatedRelevantEvents=p)},this.handleDragEnd=o=>{let{context:s}=this.component,a=this.eventRange.def,l=this.eventRange.instance,c=new r.EventImpl(s,a,l),d=this.relevantEvents,g=this.mutatedRelevantEvents;if(s.emitter.trigger("eventResizeStop",{el:this.draggingSegEl,event:c,jsEvent:o.origEvent,view:s.viewApi}),this.validMutation){let u=new r.EventImpl(s,g.defs[a.defId],l?g.instances[l.instanceId]:null);s.dispatch({type:"MERGE_EVENTS",eventStore:g});let p={oldEvent:c,event:u,relatedEvents:(0,r.buildEventApis)(g,s,l),revert(){s.dispatch({type:"MERGE_EVENTS",eventStore:d})}};s.emitter.trigger("eventResize",Object.assign(Object.assign({},p),{el:this.draggingSegEl,startDelta:this.validMutation.startDelta||(0,r.createDuration)(0),endDelta:this.validMutation.endDelta||(0,r.createDuration)(0),jsEvent:o.origEvent,view:s.viewApi})),s.emitter.trigger("eventChange",p)}else s.emitter.trigger("_noEventResize");this.draggingSeg=null,this.relevantEvents=null,this.validMutation=null};let{component:t}=e,i=this.dragging=new S(e.el);i.pointer.selector=".fc-event-resizer",i.touchScrollAllowed=!1,i.autoScroller.isEnabled=t.context.options.dragScroll;let n=this.hitDragging=new D(this.dragging,(0,r.interactionSettingsToStore)(e));n.emitter.on("pointerdown",this.handlePointerDown),n.emitter.on("dragstart",this.handleDragStart),n.emitter.on("hitupdate",this.handleHitUpdate),n.emitter.on("dragend",this.handleDragEnd)}destroy(){this.dragging.destroy()}querySegEl(e){return(0,r.elementClosest)(e.subjectEl,".fc-event")}}],calendarInteractions:[class se{constructor(e){this.context=e,this.isRecentPointerDateSelect=!1,this.matchesCancel=!1,this.matchesEvent=!1,this.onSelect=i=>{i.jsEvent&&(this.isRecentPointerDateSelect=!0)},this.onDocumentPointerDown=i=>{let n=this.context.options.unselectCancel,o=(0,r.getEventTargetViaRoot)(i.origEvent);this.matchesCancel=!!(0,r.elementClosest)(o,n),this.matchesEvent=!!(0,r.elementClosest)(o,V.SELECTOR)},this.onDocumentPointerUp=i=>{let{context:n}=this,{documentPointer:o}=this,s=n.getCurrentData();if(!o.wasTouchScroll){if(s.dateSelection&&!this.isRecentPointerDateSelect){let a=n.options.unselectAuto;a&&(!a||!this.matchesCancel)&&n.calendarApi.unselect(i)}s.eventSelection&&!this.matchesEvent&&n.dispatch({type:"UNSELECT_EVENT"})}this.isRecentPointerDateSelect=!1};let t=this.documentPointer=new P(document);t.shouldIgnoreMove=!0,t.shouldWatchScroll=!1,t.emitter.on("pointerdown",this.onDocumentPointerDown),t.emitter.on("pointerup",this.onDocumentPointerUp),e.emitter.on("select",this.onSelect)}destroy(){this.context.emitter.off("select",this.onSelect),this.documentPointer.destroy()}}],elementDraggingImpl:S,optionRefiners:le,listenerRefiners:oe})}}]);