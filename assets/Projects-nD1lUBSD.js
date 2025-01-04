import{c as l,r as c,j as e,b as o,B as n}from"./index-D0amwRxO.js";import{C as m,a as h,b as u,c as g}from"./card-4i8RLfeK.js";import{G as p,S as x}from"./Section-2zIcTz4P.js";import{T as v,t}from"./TechBadge-CWcZVYuE.js";import"./index-aH9iWP9y.js";import"./iconBase-2vT2Z6pc.js";import"./index-iuFP40tG.js";/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=l("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.465.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=l("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),j=({project:s})=>{const[i,r]=c.useState(!1);return e.jsxs(m,{className:"group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50",children:[s.thumbnail&&e.jsxs("div",{className:"relative h-48 overflow-hidden",children:[e.jsx("img",{src:s.thumbnail,alt:s.name,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background to-transparent"})]}),e.jsx(h,{children:e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx(u,{children:e.jsx(p,{className:"text-2xl font-bold",children:s.name})}),e.jsx("span",{className:"px-3 py-1 text-xs rounded-full bg-primary/10 text-primary",children:s.status})]})}),e.jsxs(g,{className:"space-y-4",children:[e.jsx("p",{className:"text-muted-foreground",children:s.description}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.technologies.map(a=>e.jsx(v,{tech:a.name},a.name))}),e.jsxs("div",{className:o("space-y-4 overflow-hidden transition-all duration-300",i?"max-h-[500px]":"max-h-0"),children:[s.features&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold",children:"Key Features"}),e.jsx("ul",{className:"list-disc list-inside space-y-1 text-sm text-muted-foreground",children:s.features.map((a,d)=>e.jsx("li",{children:a},d))})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-muted-foreground",children:"Timeline:"}),e.jsx("p",{children:s.timeline})]}),s.role&&e.jsxs("div",{children:[e.jsx("span",{className:"text-muted-foreground",children:"Role:"}),e.jsx("p",{children:s.role})]})]})]}),e.jsxs("div",{className:"flex items-center gap-4 pt-4",children:[e.jsxs(n,{variant:"outline",size:"sm",className:"gap-2",onClick:()=>window.open(s.githubLink,"_blank"),children:[e.jsx(y,{className:"w-4 h-4"}),"Code"]}),s.liveLink&&e.jsxs(n,{variant:"outline",size:"sm",className:"gap-2",onClick:()=>window.open(s.liveLink,"_blank"),children:[e.jsx(b,{className:"w-4 h-4"}),"Live Demo"]}),e.jsx(n,{variant:"ghost",size:"sm",className:"ml-auto",onClick:()=>r(!i),children:e.jsx(f,{className:o("w-4 h-4 transition-transform",i&&"rotate-180")})})]})]})]})},k=[{name:"Container Management Platform",description:"A web-based container management solution featuring real-time monitoring and control of Docker containers.",githubLink:"https://github.com/yourusername/container-platform",liveLink:"https://demo-container-platform.com",technologies:[t.golang,t.react,t.docker,t.typescript],features:["Real-time container monitoring via WebSocket","Interactive terminal access to containers","Resource usage visualization (CPU, Memory, Network)","Container log streaming and search","Image and volume management"],thumbnail:"/projects/container-platform.png",category:"DevOps",status:"Completed",timeline:"Jan 2024 - Mar 2024",role:"Full Stack Developer",highlights:["Reduced container management time by 60%","Implemented real-time monitoring with <1s latency","Served 100+ concurrent users"]},{name:"AI-Powered Code Review Assistant",description:"An intelligent code review tool that uses machine learning to analyze code quality and suggest improvements.",githubLink:"https://github.com/yourusername/code-reviewer",technologies:[t.python,t.fastapi,t.mongodb],features:["Automated code quality analysis","Security vulnerability detection","Performance optimization suggestions","Integration with GitHub Actions"],category:"AI/ML",status:"In Progress",timeline:"Feb 2024 - Present",role:"Backend Developer",highlights:["Processes 1M+ lines of code daily","99% accuracy in security vulnerability detection","Reduced review time by 40%"]},{name:"Microservices Orchestration Platform",description:"A lightweight container orchestration system built to understand core concepts of Kubernetes.",githubLink:"https://github.com/yourusername/micro-orchestrator",technologies:[t.golang,t.kubernetes,t.docker],features:["Custom scheduler implementation","Service discovery and load balancing","Automated scaling and failover","Health monitoring and self-healing"],category:"DevOps",status:"Completed",timeline:"Nov 2023 - Jan 2024",role:"DevOps Engineer",highlights:["Handles 1000+ containers","99.9% service availability","Sub-second failover time"]}],S=()=>{const[s,i]=c.useState("All"),r=["All","Web","Mobile","Backend","DevOps","AI/ML"];return e.jsxs(x,{id:"projects",label:"Projects",children:[e.jsx("div",{className:"flex flex-wrap gap-4 mb-8 justify-center",children:r.map(a=>e.jsx(n,{onClick:()=>i(a),className:o("px-4 py-2 rounded-full transition-all duration-300",s===a?"bg-primary text-white shadow-lg scale-105":"bg-secondary hover:bg-primary/10"),children:a},a))}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:k.filter(a=>s==="All"||a.category===s).map(a=>e.jsx(j,{project:a},a.name))})]})};export{S as default};
//# sourceMappingURL=Projects-nD1lUBSD.js.map