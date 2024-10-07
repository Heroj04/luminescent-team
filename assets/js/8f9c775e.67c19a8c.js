"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[198617],{603905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(667294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),m=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},878013:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(487462),a=(n(667294),n(603905));const i={},l="(774) _AC_DIR_R",o={unversionedId:"scripting/animation-commands/ac-dir-r",id:"scripting/animation-commands/ac-dir-r",title:"(774) _AC_DIR_R",description:"Effect",source:"@site/rom-hacking/scripting/animation-commands/774-ac-dir-r.md",sourceDirName:"scripting/animation-commands",slug:"/scripting/animation-commands/ac-dir-r",permalink:"/rom-hacking/scripting/animation-commands/ac-dir-r",draft:!1,tags:[],version:"current",sidebarPosition:774,frontMatter:{},sidebar:"docs",previous:{title:"(773) _AC_DIR_U",permalink:"/rom-hacking/scripting/animation-commands/ac-dir-u"},next:{title:"(775) _AC_DIR_D",permalink:"/rom-hacking/scripting/animation-commands/ac-dir-d"}},c={},m=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],p={toc:m},u="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"774-_ac_dir_r"},"(774) _AC_DIR_R"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Turns the entity of the animation right over a given amount of frames."),(0,a.kt)("p",null,"The entity always makes the smallest turn possible. If the ",(0,a.kt)("strong",{parentName:"p"},"invert")," argument is provided, the entity will turn the longer way around."),(0,a.kt)("p",null,"Starts the stepping sound effect."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_AC_DIR_R(time, invert?)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Types"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"time")),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of time to turn, in frames"),(0,a.kt)("td",{parentName:"tr",align:null},"Float"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"invert")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to invert the turn"),(0,a.kt)("td",{parentName:"tr",align:null},"Any"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"anm_dummy:\n_AC_DIR_R(8)\n_ACMD_END()\n")),(0,a.kt)("p",null,"The above script will turn the entity right over 8 frames."))}s.isMDXComponent=!0}}]);