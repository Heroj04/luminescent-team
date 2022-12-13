"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[2248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Atmosphere",l={unversionedId:"installation/atmosphere",id:"installation/atmosphere",title:"Atmosphere",description:"Do not install any other mods with Luminescent Platinum! You will risk breaking your game!",source:"@site/docs/installation/atmosphere.mdx",sourceDirName:"installation",slug:"/installation/atmosphere",permalink:"/docs/installation/atmosphere",draft:!1,editUrl:"https://github.com/TeamLumi/luminescent-team/blob/main/docs/installation/atmosphere.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Ryujinx",permalink:"/docs/installation/ryujinx"}},s={},p=[{value:"Notes",id:"notes",level:2},{value:"Not working?",id:"not-working",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"atmosphere"},"Atmosphere"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Do not install any other mods with Luminescent Platinum! You will risk breaking your game!")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the mod ","[from here]","."),(0,o.kt)("li",{parentName:"ol"},"Extract the files somewhere on your computer."),(0,o.kt)("li",{parentName:"ol"},'Open your Switch SD folder and drop "exefs" and "romfs" into atmosphere/contents/0100000011D90000/ ',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create any folders that do not exist."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"THIS STEP IS THE MOST IMPORTANT ONE FOR SWITCH USERS"),":",(0,o.kt)("br",{parentName:"li"}),"Go into the exefs folder and move the .ips file to /atmosphere/exefs_patches/Luminescent ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Once again, create any folders that don't exist."),(0,o.kt)("li",{parentName:"ul"},"You will have to move it again for every Luminescent update you install.")))),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"THIS IS A ROMHACK, NOT AN INDEPENDENT GAME. YOU MUST ALREADY OWN BRILLIANT DIAMOND 1.3.0 TO INSTALL THIS."),(0,o.kt)("li",{parentName:"ul"},"Currently, only Brilliant Diamond is supported"),(0,o.kt)("li",{parentName:"ul"},"You must be on update 1.3.0 (not 1.1.3)"),(0,o.kt)("li",{parentName:"ul"},"You must NOT have a folder containing romfs and exefs (the exefs and romfs file must be directly in the 0100000011D90000 folder)")),(0,o.kt)("h2",{id:"not-working"},"Not working?"),(0,o.kt)("p",null,"If you have followed all of these instructions and the game still doesn't boot, please use a homebrew file reader such as NX-Shell and navigate to atmosphere/contents/0100000011D90000 and check that romfs and exefs (and the folders within) are displaying as folders as intended."),(0,o.kt)("p",null,"If they are instead displaying as files please make your own exefs and romfs in the appropriate spot and place the contents inside yourself. Check again in NX-Shell that everything is displaying as folders now."),(0,o.kt)("p",null,"You may also need to redownload the mod entirely in case of a corruption."))}m.isMDXComponent=!0}}]);