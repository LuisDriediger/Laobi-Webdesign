(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3563:function(e,t,r){Promise.resolve().then(r.t.bind(r,8877,23)),Promise.resolve().then(r.bind(r,6764)),Promise.resolve().then(r.bind(r,8637)),Promise.resolve().then(r.bind(r,4657)),Promise.resolve().then(r.bind(r,3913)),Promise.resolve().then(r.t.bind(r,4724,23)),Promise.resolve().then(r.t.bind(r,1799,23)),Promise.resolve().then(r.t.bind(r,1802,23))},6764:function(e,t,r){"use strict";r.r(t),r.d(t,{CookieConsent:function(){return o}});var s=r(7437),n=r(2265),a=r(3023),i=r(6110);function o(){let[e,t]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=localStorage.getItem("cookieConsent");e||t(!0)},[]),e)?(0,s.jsx)("div",{className:"fixed bottom-4 left-4 right-4 z-50 md:max-w-md",children:(0,s.jsxs)(i.Zb,{children:[(0,s.jsxs)(i.Ol,{children:[(0,s.jsx)(i.ll,{children:"Cookie-Einstellungen"}),(0,s.jsx)(i.SZ,{children:"Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern."})]}),(0,s.jsx)(i.aY,{children:(0,s.jsx)("p",{className:"text-sm text-muted-foreground",children:"Wir verwenden Cookies, um die Websitenutzung zu analysieren und Ihnen ein optimales Nutzererlebnis zu bieten."})}),(0,s.jsxs)(i.eW,{className:"flex justify-end gap-4",children:[(0,s.jsx)(a.z,{variant:"outline",onClick:()=>t(!1),children:"Ablehnen"}),(0,s.jsx)(a.z,{onClick:()=>{localStorage.setItem("cookieConsent","true"),t(!1)},children:"Akzeptieren"})]})]})}):null}},8637:function(e,t,r){"use strict";r.r(t),r.d(t,{Navigation:function(){return g}});var s=r(7437),n=r(2265),a=r(1396),i=r.n(a),o=r(3023),l=r(1020),d=r(4690),c=r(9311),u=r(4135),f=r(3088),m=r(1350);function x(){let{theme:e,setTheme:t}=(0,m.F)();return(0,s.jsxs)(o.z,{variant:"ghost",size:"icon",onClick:()=>{t("dark"===e?"light":"dark")},className:"min-h-[44px] min-w-[44px] relative",children:[(0,s.jsx)(u.Z,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(f.Z,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"dark"===e?"Zum hellen Design wechseln":"Zum dunklen Design wechseln"})]})}var h=r(4033);let p=[{href:"#start",label:"Start"},{href:"#ueber-mich",label:"\xdcber Mich"},{href:"#portfolio",label:"Portfolio"},{href:"#leistungen",label:"Leistungen"},{href:"#kontakt",label:"Kontakt"}];function g(){let[e,t]=(0,n.useState)(!1),[r,a]=(0,n.useState)(!1),[u,f]=(0,n.useState)(!1);(0,h.useRouter)();let m=(e,t)=>{e.preventDefault();let r=document.querySelector(t);if(r){let e=r.getBoundingClientRect().top,t=e+window.pageYOffset-80;window.scrollTo({top:t,behavior:"smooth"})}a(!1)};return(0,n.useEffect)(()=>{let e=()=>{t(window.scrollY>10)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,s.jsxs)("header",{className:(0,c.cn)("fixed top-0 left-0 right-0 z-50 transition-all duration-300",e?"bg-white/80 backdrop-blur-md shadow-sm":"bg-transparent"),children:[(0,s.jsxs)("nav",{className:"container mx-auto px-4 h-16 flex items-center justify-between",children:[(0,s.jsxs)(i(),{href:"/",className:"flex items-center gap-2 font-poppins font-semibold text-base sm:text-lg mr-auto",children:[(0,s.jsx)(d.Z,{className:"h-6 w-6 text-primary"}),(0,s.jsx)("span",{children:"Laobi Webdesign"})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(x,{}),(0,s.jsx)("button",{className:"md:hidden p-2 min-h-[44px] min-w-[44px]",onClick:()=>a(!r),"aria-label":"Men\xfc \xf6ffnen",children:(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("span",{className:"block w-8 h-0.5 bg-foreground"}),(0,s.jsx)("span",{className:"block w-8 h-0.5 bg-foreground"}),(0,s.jsx)("span",{className:"block w-8 h-0.5 bg-foreground"})]})})]}),(0,s.jsxs)("div",{className:"hidden md:flex items-center gap-8",children:[p.map(e=>(0,s.jsx)(i(),{href:e.href,onClick:t=>m(t,e.href),className:"text-sm font-medium hover:text-primary transition-colors",children:e.label},e.href)),(0,s.jsx)(o.z,{onClick:()=>f(!0),children:"Projekt starten"})]})]}),r&&(0,s.jsx)("div",{className:"md:hidden fixed top-16 left-0 right-0 bottom-0 bg-background border-t z-50 overflow-y-auto",children:(0,s.jsxs)("div",{className:"container mx-auto px-4 py-6 flex flex-col gap-6",children:[p.map(e=>(0,s.jsx)(i(),{href:e.href,onClick:t=>m(t,e.href),className:"text-lg font-medium hover:text-primary transition-colors min-h-[44px] flex items-center",children:e.label},e.href)),(0,s.jsx)(o.z,{className:"w-full min-h-[44px]",onClick:()=>f(!0),style:{marginBottom:"0.5rem"},children:"Projekt starten"})]})}),(0,s.jsx)(l.g,{isOpen:u,onClose:()=>f(!1)})]})}},4657:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeProvider:function(){return i}});var s=r(7437),n=r(1350),a=r(2265);function i(e){let{children:t,...r}=e,[i,o]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{o(!0)},[]),i)?(0,s.jsx)(n.f,{...r,children:t}):(0,s.jsx)(s.Fragment,{children:t})}},3913:function(e,t,r){"use strict";r.r(t),r.d(t,{Toaster:function(){return v}});var s=r(7437),n=r(2621),a=r(2265),i=r(8361),o=r(9213),l=r(2549),d=r(9311);let c=i.zt,u=a.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.l_,{ref:t,className:(0,d.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",r),...n})});u.displayName=i.l_.displayName;let f=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=a.forwardRef((e,t)=>{let{className:r,variant:n,...a}=e;return(0,s.jsx)(i.fC,{ref:t,className:(0,d.cn)(f({variant:n}),r),...a})});m.displayName=i.fC.displayName;let x=a.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.aU,{ref:t,className:(0,d.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",r),...n})});x.displayName=i.aU.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.x8,{ref:t,className:(0,d.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",r),"toast-close":"",...n,children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})});h.displayName=i.x8.displayName;let p=a.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.Dx,{ref:t,className:(0,d.cn)("text-sm font-semibold",r),...n})});p.displayName=i.Dx.displayName;let g=a.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,s.jsx)(i.dk,{ref:t,className:(0,d.cn)("text-sm opacity-90",r),...n})});function v(){let{toasts:e}=(0,n.pm)();return(0,s.jsxs)(c,{children:[e.map(function(e){let{id:t,title:r,description:n,action:a,...i}=e;return(0,s.jsxs)(m,{...i,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[r&&(0,s.jsx)(p,{children:r}),n&&(0,s.jsx)(g,{children:n})]}),a,(0,s.jsx)(h,{})]},t)}),(0,s.jsx)(u,{})]})}g.displayName=i.dk.displayName},8877:function(){}},function(e){e.O(0,[783,773,804,971,864,744],function(){return e(e.s=3563)}),_N_E=e.O()}]);