import{r,j as a,a as f}from"./index-D0amwRxO.js";const N=()=>{const p=r.useRef(null),n=r.useRef(null),o=r.useRef(null),i=r.useRef(null),m=r.useRef(null),[x,y]=r.useState({left:0,right:0}),c=r.useRef({isPlaying:!0,ballX:50,ballY:150,ballVX:2.5,ballVY:1,paddle1Y:110,paddle2Y:110,paddle1VY:2,paddle2VY:2,lastCollisionTime:0});return r.useEffect(()=>{if(!p.current||!n.current||!o.current||!i.current)return;const d=80,s=600,b=300,Y=20,j=500,V=()=>{const e=c.current;!o.current||!i.current||!n.current||(f.set(o.current,{translateX:20,translateY:e.paddle1Y}),f.set(i.current,{translateX:s-28,translateY:e.paddle2Y}),f.set(n.current,{translateX:e.ballX,translateY:e.ballY}))},h=(e,t)=>{var u;const l=document.createElement("div");l.className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60",l.style.left=`${e-16}px`,l.style.top=`${t-16}px`,(u=p.current)==null||u.appendChild(l),f({targets:l,scale:[1,2],opacity:[.6,0],duration:400,easing:"easeOutExpo",complete:()=>l.remove()})},X=(e,t,l)=>Math.abs(e-t)<l?e:e+(t>e?l:-l),v=e=>{const t=c.current;t.isPlaying=!1,y(l=>({...l,[e]:l[e]+1})),setTimeout(()=>{t.ballX=s/2,t.ballY=b/2,t.ballVX=2.5*(e==="left"?-1:1),t.ballVY=(Math.random()-.5)*2,t.isPlaying=!0},1e3)},R=()=>{const e=c.current,t=Date.now();if(t-e.lastCollisionTime<j)return!1;const l=e.ballX<=30&&e.ballX>=20&&e.ballY+Y>=e.paddle1Y&&e.ballY<=e.paddle1Y+d,u=e.ballX>=s-38&&e.ballX<=s-28&&e.ballY+Y>=e.paddle2Y&&e.ballY<=e.paddle2Y+d;return l||u?(e.lastCollisionTime=t,h(e.ballX,e.ballY),!0):!1},g=()=>{const e=c.current;if(!e.isPlaying){requestAnimationFrame(g);return}e.ballX+=e.ballVX,e.ballY+=e.ballVY,(e.ballY<=0||e.ballY>=b-Y)&&(e.ballVY*=-1,h(e.ballX,e.ballY)),R()&&(e.ballVX*=-1,e.ballVY+=(Math.random()-.5)*1),e.ballX<=0?v("right"):e.ballX>=s&&v("left");const t=e.ballY-d/2;e.paddle1Y=X(e.paddle1Y,t,e.paddle1VY);const l=(s-38-e.ballX)/Math.abs(e.ballVX),u=e.ballY+e.ballVY*l-d/2;e.paddle2Y=X(e.paddle2Y,u,e.paddle2VY),e.paddle1Y=Math.max(0,Math.min(b-d,e.paddle1Y)),e.paddle2Y=Math.max(0,Math.min(b-d,e.paddle2Y)),n.current&&(n.current.style.transform=`translate(${e.ballX}px, ${e.ballY}px)`),o.current&&(o.current.style.transform=`translate(20px, ${e.paddle1Y}px)`),i.current&&(i.current.style.transform=`translate(${s-28}px, ${e.paddle2Y}px)`),m.current&&(m.current.style.transform=`translate(${e.ballX}px, ${e.ballY}px)`),requestAnimationFrame(g)};V(),g()},[]),a.jsx("div",{className:"flex items-center justify-center w-full min-h-screen bg-gray-900 p-4 my-32",children:a.jsxs("div",{ref:p,className:"relative w-[600px] h-[300px] rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden",children:[a.jsxs("div",{className:"absolute top-4 left-0 w-full flex justify-center gap-8 text-2xl text-white/70 font-semibold z-10",children:[a.jsx("span",{children:x.left}),a.jsx("span",{children:x.right})]}),a.jsx("div",{className:"absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-blue-500/20 via-blue-500/40 to-blue-500/20"}),a.jsx("div",{className:"absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-blue-500/20 via-blue-500/40 to-blue-500/20"}),a.jsx("div",{ref:o,className:"absolute w-2 h-20 rounded-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"}),a.jsx("div",{ref:i,className:"absolute w-2 h-20 rounded-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600"}),a.jsx("div",{ref:n,className:"absolute w-5 h-5 rounded-full bg-gradient-to-br from-white to-blue-200"}),a.jsx("div",{ref:m,className:"absolute w-12 h-12 rounded-full bg-blue-500/20 blur-xl pointer-events-none"}),a.jsx("div",{className:"absolute inset-0 rounded-lg border border-blue-500/30"})]})})};export{N as default};
//# sourceMappingURL=PingPong-FLA-59uK.js.map