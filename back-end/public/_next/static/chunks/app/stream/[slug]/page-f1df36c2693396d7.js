(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[267],{25893:function(){},83396:function(e,t,n){Promise.resolve().then(n.bind(n,91251))},19197:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0;return{url:e,method:t,...r&&{headers:{Authorization:"Bearer "+r}},...0!==Object.keys(n).length&&{data:n},...i&&{...i}}}},22703:function(e,t,n){"use strict";n.d(t,{cn:function(){return s},d:function(){return l}});var r=n(57042),i=n(23986);function s(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m)((0,r.W)(t))}function l(e){let t=Math.floor((""+e).length/3),n=parseFloat((0!=t?e/Math.pow(1e3,t):e).toPrecision(2));return n%1!=0&&(n=n.toFixed(1)),n+["","K","M","B","T"][t]}},94401:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(57437),i=n(2265),s=n(67256),l=n(96061),o=n(22703);let a=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:n,variant:i,size:l,asChild:u=!1,...d}=e,c=u?s.g7:"button";return(0,r.jsx)(c,{className:(0,o.cn)(a({variant:i,size:l,className:n})),ref:t,...d})});u.displayName="Button"},75002:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var r=n(57437),i=n(2265),s=n(22703);n(40161);let l=i.forwardRef((e,t)=>{let{className:n,type:i,...l}=e;return(0,r.jsx)("input",{id:l.name,type:i,className:(0,s.cn)("text-black","flex  h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),ref:t,...l})});l.displayName="Input"},32870:function(e,t,n){"use strict";n.r(t);var r=n(57437),i=n(2265),s=n(84267);n(35629),n(85449),t.default=e=>{let{url:t}=e,n=(0,i.useRef)(null),[l,o]=(0,i.useState)(!1),[a,u]=(0,i.useState)(null);return(0,i.useEffect)(()=>{n.current&&(0,s.default)(n.current,{liveui:!0,liveTracker:!0,autoplay:!1,controls:!0,sources:[{src:t,type:"application/x-mpegURL"}],lowLatency:!0,enableWorker:!0,lowLatencyMode:!0,backBufferLength:90,playbackRates:[.5,1,1.5,2],plugins:{qualityLevels:{}}}).qualitySelectorHls()},[]),(0,r.jsx)("div",{className:"flex flex-col w-full h-[400px] justify-center items-center relative",children:(0,r.jsx)("video",{ref:n,className:"video-js vjs-default-skin w-full h-full flex flex-col justify-center items-center rounded-xl",controls:!0})})}},91251:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(57437),i=n(19197),s=n(32870),l=n(92173),o=n(2265),a=n(94401);l.Z.defaults.baseURL="";let u=e=>{let[t,n]=(0,o.useState)(),[r,i]=(0,o.useState)(),[s,a]=(0,o.useState)(!0),u=async e=>{try{let t=await l.Z.request(e);n(t)}catch(e){i(e)}finally{a(!1)}};return(0,o.useEffect)(()=>{u(e)},[]),{response:t,error:r,loading:s}};var d=n(63388),c=n(75002),f=e=>{let{username:t}=e,[n,f]=(0,o.useState)(),[v,h]=(0,o.useState)(),g=(0,i.B)("https://nt208-g4.site/v1/api/users/"+t,"GET",{},"",{withCredentials:!0}),m="comment_".concat(t);(0,o.useEffect)(()=>{let e=(0,d.io)("https://nt208-g4.site");e.on(m,e=>{console.log("chat",e)})},[]);let p=u(g);(0,o.useEffect)(()=>{var e;let t=(0,i.B)("https://nt208-g4.site/v1/api/streams/"+(null===(e=p.response)||void 0===e?void 0:e.data.user_id),"GET",{},"",{withCredentials:!0});l.Z.request(t).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.stream)&&f(e.data.stream)})},[]),console.log("render");let x=async()=>{let e=(0,i.B)("https://nt208-g4.site/v1/api/comments/","POST",{username:t,message:v},"",{withCredentials:!0});await l.Z.request(e)};return(0,r.jsxs)("main",{className:"container center-item",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.default,{url:null==n?void 0:n.video_urls})}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:["Stream title: ",null==n?void 0:n.video_name]}),(0,r.jsxs)("div",{children:["Username: ",null==n?void 0:n.Owners.username]}),(0,r.jsxs)("div",{children:["Avatar: ",null==n?void 0:n.Owners.user_avatar]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(a.z,{children:"Like"}),(0,r.jsx)(a.z,{children:"Share"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.I,{onChange:e=>h(e.target.value)}),(0,r.jsx)(a.z,{onClick:x,children:"Chat"})]})]})}},40161:function(){},85449:function(){}},function(e){e.O(0,[2532,9089,6413,4789,9625,9722,9622,2971,596,1744],function(){return e(e.s=83396)}),_N_E=e.O()}]);