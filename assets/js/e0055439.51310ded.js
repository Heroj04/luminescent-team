"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[669642],{603905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(667294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},639690:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(487462),a=(r(667294),r(603905));const i={},l="(52) _TRAINER_FLAG_RESET",o={unversionedId:"scripting/commands/gamedata/trainer-flag-reset",id:"scripting/commands/gamedata/trainer-flag-reset",title:"(52) _TRAINER_FLAG_RESET",description:"Effect",source:"@site/rom-hacking/scripting/commands/gamedata/052-trainer-flag-reset.md",sourceDirName:"scripting/commands/gamedata",slug:"/scripting/commands/gamedata/trainer-flag-reset",permalink:"/rom-hacking/scripting/commands/gamedata/trainer-flag-reset",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{},sidebar:"docs",previous:{title:"(51) _TRAINER_FLAG_SET",permalink:"/rom-hacking/scripting/commands/gamedata/trainer-flag-set"},next:{title:"(189) _ADD_ITEM",permalink:"/rom-hacking/scripting/commands/gamedata/add-item"}},c={},p=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],s={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"52-_trainer_flag_reset"},"(52) _TRAINER_FLAG_RESET"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Resets the trainer flag of the given trainer to false."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_TRAINER_FLAG_RESET(trainer)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Types"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"trainer")),(0,a.kt)("td",{parentName:"tr",align:null},"The trainer id, or the name of the value in the TrainerID enum"),(0,a.kt)("td",{parentName:"tr",align:null},"Work, Float, String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_LDVAL(@LOCALWORK1, 3)\n_TRAINER_FLAG_RESET(@LOCALWORK1)\n")),(0,a.kt)("p",null,"The above script will set the work variable @LOCALWORK1 to 3."),(0,a.kt)("p",null,"Then, the trainer id contained in @LOCALWORK1 (in this case 3) is the one to reset to false. This corresponds to MINI_01 in the TrainerID enum."))}u.isMDXComponent=!0}}]);