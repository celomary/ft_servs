(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0e0P":function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o("pVnL"),i=o.n(n),r=o("lSNA"),s=o.n(r),a=o("cDcd"),p=o.n(a),l=o("eOGF");function c(e){class t extends p.a.Component{constructor(){super(...arguments),s()(this,"state",{isAppMounted:!!Object(l.B)()})}componentDidMount(){this.setAppMounted()}setAppMounted(){this.state.isAppMounted||this.setState({isAppMounted:!0})}render(){const t=this.props,o=this.state.isAppMounted;return p.a.createElement(e,i()({},t,{isAppMounted:o}))}}return t}},"1OM/":function(e,t,o){"use strict";o.d(t,"b",(function(){return T})),o.d(t,"a",(function(){return E}));var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("TSYQ"),h=o.n(d),u=o("/n7Q"),m=o("PtY2"),v=o("wqqT"),f=o("61np");o("ufwU");class g extends l.PureComponent{constructor(){super(...arguments),p()(this,"input",void 0),p()(this,"tooltip",void 0)}render(){const e=this.props,t=e.icon,o=e.iconAlignment,n=e.wrapperClass,r=e.className,a=e.hintMessage,p=e.loading,l=e.error,d=e.inputRef,u=e.theme,g=e.size,T=e.placeholder,E=e.id,b=e.type,P=e.variant,w=s()(e,["icon","iconAlignment","wrapperClass","className","hintMessage","loading","error","inputRef","theme","size","placeholder","id","type","variant"]),C="tooltip-"+E,O=c.a.createElement("span",{id:C},a),y="textarea"===b,A=y?"textarea":"input",L="string"==typeof t&&c.a.createElement("i",{className:h()(t,"input-icon")}),M="outset"===P,N=y?{}:{["align-icon-"+o]:t,"has-icon":t,"has-loader":p};return c.a.createElement("div",{className:h()("custom-input",u,"size-"+g)},c.a.createElement("div",{className:h()("input-wrap",N,n)},c.a.createElement(f.a,{align:"right",eventType:"focus",content:O,disabled:!a},c.a.createElement(A,i()({ref:d,id:E,type:y?void 0:b,className:h()("input",{error:!!l,"text-area":y,outset:M},r),placeholder:T,"aria-label":T,"aria-invalid":!!l,"aria-describedby":a?C:void 0},w))),!y&&t&&!(p&&"right"===o)&&(L||c.a.createElement(t,{className:"input-icon"})),!y&&p&&c.a.createElement(v.a,{className:"input-loading",diameter:24})),l&&"string"==typeof l&&c.a.createElement("div",{className:"d-flex align-items-start error-message",role:"alert"},c.a.createElement(m.a,{className:"error-icon"}),l),l&&c.a.isValidElement(l)&&c.a.createElement("div",{className:"error-message",role:"alert"},l))}}p()(g,"defaultProps",{iconAlignment:"left",hintMessage:"",error:!1,icon:"",loading:!1,theme:"theme-old",size:"medium",type:"text",variant:"inset"});const T=Object(u.d)("input")(g),E=Object(u.d)("input")((function(e){e.type;let t=s()(e,["type"]);return c.a.createElement(g,i()({type:"textarea"},t))}))},"3N0A":function(e,t,o){"use strict";var n=o("lSNA"),i=o.n(n),r=o("cDcd"),s=o("faye"),a=o.n(s),p=o("0e0P"),l=o("TXrv");class c extends r.Component{constructor(e){super(e),i()(this,"node",void 0);const t=e.isAppMounted,o=e.target;this.node=null,this.state={targetIsAvailable:t&&!!Object(l.b)(o)}}componentDidMount(){this.checkTargetAvailability()}componentDidUpdate(){this.checkTargetAvailability()}componentWillUnmount(){const e=this.node;e&&e.parentNode.removeChild(e)}checkTargetAvailability(){const e=this.props.target;!this.state.targetIsAvailable&&Object(l.b)(e)&&this.setState({targetIsAvailable:!0})}renderPortal(){const e=this.props,t=e.target,o=e.createContainer,n=e.children,i=Object(l.b)(t);let r=i;return o&&(r=this.node,r||(r=document.createElement("div"),r.setAttribute("class","portal-wrapper"),i.appendChild(r),this.node=r)),r?a.a.createPortal(n,r):0}render(){return this.state.targetIsAvailable?this.renderPortal():null}}i()(c,"defaultProps",{target:"body",createContainer:!0}),t.a=Object(p.a)(c)},"61np":function(e,t,o){"use strict";var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("cDcd"),p=o("TSYQ"),l=o.n(p),c=o("cKCp");o("GSOj");t.a=function(e){const t=e.content,o=e.children,n=e.className,r=s()(e,["content","children","className"]);return a.createElement(c.a,i()({className:l()("ui-tooltip",n),popupContent:t,aliveTime:300},r),o)}},"9YLm":function(e,t,o){},EA6I:function(e,t,o){"use strict";var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("TSYQ"),h=o.n(d),u=o("dvg7"),m=o.n(u),v=o("37OS"),f=o.n(v),g=o("TXrv"),T=o("3N0A");o("dcnl");const E=25,b=parseInt(10,10)+parseInt(E,10)/2;class P extends l.Component{constructor(){super(...arguments),p()(this,"popoverElement",void 0),p()(this,"popoverWrap",void 0),p()(this,"popoverTip",void 0),p()(this,"getNewAlignment",(e,t,o)=>{const n=["top","top-right","top-left","right","left","bottom","bottom-right","bottom-left"];let i=0,r=e,s=n.indexOf(e);0!==s&&(e.indexOf("-right")>0||e.indexOf("-left")>0)?s-=1:s+=1;do{if(i++,i===n.length)break;s%=n.length,r=n[s]}while(!this.checkPopoverOverflow(n[s++],t,o));return r}),p()(this,"checkPopoverOverflow",(e,t,o)=>{const n=this.getPopoverDimension(),i=n.popoverWrapHeight,r=n.popoverWrapWidth,s=this.getPopupCoordinates(e),a=s.left,p=s.top;return a+r>t||p+i>o||p<0||a<0}),p()(this,"getPopupCoordinates",e=>{const t=this.getPopoverDimension(),o=t.popoverWrapHeight,n=t.popoverWrapWidth,i=this.getTargetOffsets(),r=i.offsetTop,s=i.offsetLeft,a=i.offsetWidth,p=i.offsetHeight,l=this.props,c=l.popoverSpace,d=l.showTip&&a<2*b?b-a/2:0;let h,u;switch(e){case"top":h=s+a/2-n/2,u=r-o-c;break;case"top-right":h=s+a-n+d,u=r-o-c;break;case"top-left":h=s-d,u=r-o-c;break;case"right":h=s+a+c,u=r+p/2-o/2;break;case"bottom":h=s+a/2-n/2,u=r+p+c;break;case"bottom-right":h=s+a-n+d,u=r+p+c;break;case"bottom-left":h=s-d,u=r+p+c;break;case"left":h=s-n-c,u=r+p/2-o/2;break;default:h=0,u=0}return{left:h,top:u}}),p()(this,"positionPopover",()=>{const e=this.popoverWrap,t=this.popoverTip,o=this.props,n=o.open,i=o.target,r=o.align,s=o.coordinate,a=o.showTip;if(!n)return;const p=this.getContainmentDimension(),l=p.containmentWidth,c=p.containmentHeight;let d,h,u;s?Object(g.e)(e,s):i&&(u=this.checkPopoverOverflow(r,l,c),u?(d=this.getNewAlignment(r,l,c),h=this.getPopupCoordinates(d),a&&(t.classList.remove("align-tip-"+r),t.classList.add("align-tip-"+d)),e.classList.remove("align-popover-"+r),e.classList.add("align-popover-"+d)):h=this.getPopupCoordinates(r),Object(g.e)(e,{left:h.left+"px",top:h.top+"px"}))})}componentDidMount(){this.positionPopover(),window.addEventListener("resize",this.positionPopover)}shouldComponentUpdate(e){const t=this.props;return e.open!==t.open||e.children!==t.children}componentDidUpdate(){this.positionPopover()}componentWillUnmount(){window.removeEventListener("resize",this.positionPopover)}getPopoverDimension(){const e=this.popoverWrap,t=e.offsetWidth;return{popoverWrapHeight:e.offsetHeight,popoverWrapWidth:t}}getContainmentDimension(){return{containmentWidth:window.innerWidth,containmentHeight:document.documentElement.scrollHeight}}getTargetOffsets(){const e=this.props.target,t=Object(g.a)(e),o=t.top,n=t.left,i=e.getBoundingClientRect();return{offsetTop:o,offsetLeft:n,offsetWidth:i.width,offsetHeight:i.height}}render(){const e=this.props,t=e.target,o=e.coordinate,n=e.align,r=e.showTip,a=e.open,p=e.className,l=e.onClose,d=(e.popoverSpace,s()(e,["target","coordinate","align","showTip","open","className","onClose","popoverSpace"]));return a&&(t||o)?c.a.createElement(T.a,null,c.a.createElement(m.a,{onClickOutside:l},c.a.createElement("div",{className:h()("custom-popover",p),ref:e=>{this.popoverElement=e}},c.a.createElement("div",i()({ref:e=>{this.popoverWrap=e},className:h()("popover-wrap","align-popover-"+n,{"has-tip":r})},d),c.a.createElement("div",{className:"content"},this.props.children),r&&c.a.createElement("div",{ref:e=>{this.popoverTip=e},className:h()("tip","align-tip-"+n)}))))):null}}p()(P,"defaultProps",{align:"top",showTip:!0,open:!1,popoverSpace:15,onClose:f.a}),t.a=P},GSOj:function(e,t,o){},TXrv:function(e,t,o){"use strict";function n(e){return"string"==typeof e?document.querySelector(e):e}function i(e,t,o){const n="string"==typeof t?{[t]:o}:t;Object.assign(e.style,n)}function r(e){const t=document,o=t.body,n=t.documentElement,i=o.scrollTop||n.scrollTop,r=o.scrollLeft||n.scrollLeft,s=e.getBoundingClientRect();return{top:s.top+i,left:s.left+r}}function s(e){return e===window?window.scrollY:e.scrollTop}function a(e){return e.offsetWidth>0&&e.offsetHeight>0}o.d(t,"b",(function(){return n})),o.d(t,"e",(function(){return i})),o.d(t,"a",(function(){return r})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return a}))},cKCp:function(e,t,o){"use strict";var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("TSYQ"),h=o.n(d),u=o("EA6I"),m=o("FLdU");o("9YLm");function v(){}const f=Object(m.a)();class g extends l.Component{constructor(){super(),p()(this,"popoverTimeout",void 0),p()(this,"delayTimeout",void 0),p()(this,"clearTimeouts",()=>{this.popoverTimeout&&clearTimeout(this.popoverTimeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}),p()(this,"getEventTypes",()=>{const e=this.props.eventType;return{showEvent:"hover"===e?"onMouseEnter":"onFocus",hideEvent:"hover"===e?"onMouseLeave":"onBlur"}}),p()(this,"onAnyPopupOpen",e=>{e!==this.state.target&&this.state.target&&(this.clearTimeouts(),this.setState({popoverOpen:!1,target:void 0}))}),p()(this,"setPopoverOpen",e=>{const t=this.props.onPopupOpen;this.setState(e,()=>{f.emit("onUIHoverPopupOpen",this.state.target),t()})}),p()(this,"openPopover",(e,t)=>{const o=this.props,n=o.disabled,i=o.delay,r=this.state.popoverOpen;if(this.clearTimeouts(),r||n)return;const s={popoverOpen:!0};t&&(s.target=e.currentTarget),i?this.delayTimeout=setTimeout(()=>this.setPopoverOpen(s),i):this.setPopoverOpen(s)}),p()(this,"closePopover",()=>{const e=this.props,t=e.aliveTime,o=e.onPopupClose;this.clearTimeouts(),this.popoverTimeout=setTimeout(()=>{this.setState({popoverOpen:!1,target:void 0},()=>o())},t)}),p()(this,"bindTriggerEvents",e=>{const t=this.getEventTypes(),o=t.showEvent,n=t.hideEvent;return c.a.cloneElement(e,{[o]:t=>{this.openPopover(t,!0),e.props[o]&&e.props[o](t)},[n]:t=>{this.closePopover(),e.props[n]&&e.props[n](t)}})}),this.state={popoverOpen:!1}}componentDidMount(){f.on("onUIHoverPopupOpen",this.onAnyPopupOpen)}componentWillUnmount(){f.off("onUIHoverPopupOpen",this.onAnyPopupOpen),this.clearTimeouts()}renderPopover(){const e=this.props,t=this.state,o=e.popupContent,n=e.className,r=e.eventType,a=(e.aliveTime,e.onPopupOpen,e.onPopupClose,e.delay,e.disabled),p=s()(e,["popupContent","className","eventType","aliveTime","onPopupOpen","onPopupClose","delay","disabled"]),l=t.target;let d;if(a)return;d="function"==typeof o?o():o;let m={};return"hover"===r&&(m={onMouseEnter:this.openPopover.bind(this,!1),onMouseLeave:this.closePopover}),c.a.createElement(u.a,i()({},p,{className:h()("hover-popup",n),open:!0},m,{target:l}),d)}render(){const e=this.state.popoverOpen,t=this.props.children,o=c.a.Children.map(t,this.bindTriggerEvents);return c.a.createElement(l.Fragment,null,o,e&&this.renderPopover())}}p()(g,"defaultProps",{aliveTime:1e3,onPopupOpen:v,onPopupClose:v,disabled:!1,eventType:"hover"}),t.a=g},dcnl:function(e,t,o){},p0DI:function(e,t,o){"use strict";var n=o("lSNA"),i=o.n(n),r=o("cDcd"),s=o.n(r);class a extends s.a.Component{constructor(){super(),i()(this,"state",void 0),this.state={}}showChild(){this.setState({showChild:!0})}componentDidMount(){this.showChild()}render(){return this.state.showChild?this.props.children:null}}t.a=a},ufwU:function(e,t,o){},xNbf:function(e,t,o){"use strict";o("rGqo");var n=o("pVnL"),i=o.n(n),r=o("QILm"),s=o.n(r),a=o("lSNA"),p=o.n(a),l=o("cDcd"),c=o.n(l),d=o("p0DI");class h extends l.PureComponent{constructor(e){super(e),p()(this,"loaderId",void 0),p()(this,"animationDuration",void 0),p()(this,"totalParts",void 0);const t=e.id;this.loaderId="hr-loader-"+(t||Math.ceil(1e7*Math.random())),this.animationDuration=1,this.totalParts=9}renderAnimationTag(e){const t=this.props,o=t.color,n=t.loadingColor,i=this.animationDuration,r=this.loaderId,s=this.totalParts,a=i/3,p=`${r}-${e}`,l=i/s*(s-e);return c.a.createElement("animate",{attributeName:"fill",from:n,to:o,id:p,dur:a+"s",begin:`${l}s;${p}.end+${.6666*i}s`})}renderSvg(){const e=this.props,t=e.diameter,o=e.color,n=s()(e,["diameter","color"]);return["loadingColor","loadOnClientSide","id"].forEach(e=>{delete n[e]}),c.a.createElement("svg",i()({version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:t+"px",height:t+"px",viewBox:"0 0 1100 1100"},n),c.a.createElement("g",null,c.a.createElement("path",{d:"M382.662,164.463c-10.904,0-114.259,98.957-106.185,107.011c8.012,8.033,202.659,8.033,210.629,0 C495.151,263.42,393.593,164.463,382.662,164.463z",fill:o}),c.a.createElement("path",{d:"M724.819,929.33c-11.007,0-114.606-99.256-106.562-107.328c8.042-8.072,203.238-8.072,211.297,0 C837.683,830.074,735.786,929.33,724.819,929.33z",fill:o}),c.a.createElement("line",{fill:"none",stroke:o,strokeWidth:"140",strokeMiterlimit:"8",x1:"431.362",y1:"548.118",x2:"696.214",y2:"548.467"}),c.a.createElement("line",{fill:"none",stroke:o,strokeWidth:"140",strokeMiterlimit:"8",x1:"723.914",y1:"332.673",x2:"723.914",y2:"842.504"}),c.a.createElement("line",{fill:"none",stroke:o,strokeWidth:"140",strokeMiterlimit:"8",x1:"381.794",y1:"239.607",x2:"381.794",y2:"761.195"})),c.a.createElement("path",{d:"M1013.021,546.036c0.001,0.287,0.001,0.573,0.001,0.861c-0.002,45.46-6.576,89.267-18.808,130.652 c-12.233,41.379-30.134,80.332-52.821,115.977l67.489,42.957c26.628-41.836,47.67-87.611,62.05-136.254 c14.381-48.639,22.092-100.145,22.09-153.332c0-0.336,0-0.672-0.001-1.008L1013.021,546.036z",fill:o},this.renderAnimationTag(1)),c.a.createElement("path",{d:"M904.944,250.653c27.515,32.649,50.56,69.167,68.201,108.6c17.642,39.436,29.885,81.781,35.81,126.175l79.297-10.58 c-6.953-52.12-21.353-101.935-42.082-148.265c-20.729-46.334-47.781-89.19-80.051-127.483L904.944,250.653z",fill:o},this.renderAnimationTag(2)),c.a.createElement("path",{d:"M632.321,93.7c43.962,7.635,85.753,21.502,124.488,40.676c38.731,19.173,74.4,43.658,106.037,72.503l53.9-59.116 c-37.103-33.828-78.947-62.559-124.446-85.083c-45.495-22.523-94.65-38.834-146.292-47.801L632.321,93.7z",fill:o},this.renderAnimationTag(3)),c.a.createElement("path",{d:"M322.559,148.697c33.884-19.656,70.484-35.1,109.11-45.635c38.628-10.533,79.281-16.164,121.353-16.166 c6.342,0,12.65,0.128,18.926,0.382l3.229-79.935c-7.351-0.297-14.736-0.447-22.155-0.447c-49.221-0.001-97.003,6.601-142.403,18.985 c-45.402,12.382-88.423,30.539-128.204,53.617L322.559,148.697z",fill:o},this.renderAnimationTag(4)),c.a.createElement("path",{d:"M120.489,389.924c30.023-82.728,83.202-154.506,151.696-207.38l-48.888-63.325C142.968,181.24,80.603,265.367,45.29,362.627 L120.489,389.924z",fill:o},this.renderAnimationTag(5)),c.a.createElement("path",{d:"M120.751,704.592c-17.934-49.16-27.726-102.199-27.729-157.695c0-33.914,3.661-66.905,10.596-98.658l-78.157-17.073 c-8.151,37.312-12.44,76.054-12.439,115.731c-0.004,64.933,11.492,127.349,32.577,185.119L120.751,704.592z",fill:o},this.renderAnimationTag(6)),c.a.createElement("path",{d:"M323.241,945.492c-75.442-43.586-137.431-108.066-177.952-185.41l-70.86,37.131 c47.609,90.838,120.217,166.359,208.787,217.545L323.241,945.492z",fill:o},this.renderAnimationTag(7)),c.a.createElement("path",{d:"M633.137,999.951c-25.995,4.563-52.754,6.945-80.115,6.945c-62.193-0.006-121.31-12.299-175.322-34.578l-30.513,73.951 c63.456,26.189,133.062,40.633,205.835,40.627c32.01,0,63.412-2.791,93.945-8.15L633.137,999.951z",fill:o},this.renderAnimationTag(8)),c.a.createElement("path",{d:"M905.481,842.504c-27.755,33.055-60.081,62.156-95.98,86.316c-35.9,24.16-75.367,43.377-117.443,56.701l24.151,76.268 c98.934-31.334,185.438-90.313,250.539-167.844L905.481,842.504L905.481,842.504z",fill:o},this.renderAnimationTag(9)))}render(){const e=this.props.loadOnClientSide;let t=this.renderSvg();return e&&(t=c.a.createElement(d.a,null,t)),t}}p()(h,"defaultProps",{diameter:64,color:"#eeeeee",loadingColor:"#666666",loadOnClientSide:!0}),t.a=h}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/modules~hackerrank_r_community~hackerrank_r_work~hackerrank_r_work_login-53f8e287.js.map