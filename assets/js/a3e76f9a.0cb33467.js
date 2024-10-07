"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[507342],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},222955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(487462),a=(n(667294),n(603905));const l={},o="(38) _CASE_CANCEL",c={unversionedId:"scripting/commands/logic/case-cancel",id:"scripting/commands/logic/case-cancel",title:"(38) _CASE_CANCEL",description:"Effect",source:"@site/rom-hacking/scripting/commands/logic/038-case-cancel.md",sourceDirName:"scripting/commands/logic",slug:"/scripting/commands/logic/case-cancel",permalink:"/rom-hacking/scripting/commands/logic/case-cancel",draft:!1,tags:[],version:"current",sidebarPosition:38,frontMatter:{},sidebar:"docs",previous:{title:"(37) _CASE_JUMP",permalink:"/rom-hacking/scripting/commands/logic/case-jump"},next:{title:"(44) _FLAG_CHECK",permalink:"/rom-hacking/scripting/commands/logic/flag-check"}},i={},p=[{value:"Effect",id:"effect",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"38-_case_cancel"},"(38) _CASE_CANCEL"),(0,a.kt)("h2",{id:"effect"},"Effect"),(0,a.kt)("p",null,"Compares the values of @SCWK_REG0 and @EV_WIN_B_CANCEL. Jumps to a script if they are equal."),(0,a.kt)("p",null,"The position of the jump is not saved. Execution does not return to this command once a _RET is executed."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Broken and always considers @SCWK_REG0 as greater and therefore does nothing.")),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_CASE_JUMP(val, label)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Types"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"label")),(0,a.kt)("td",{parentName:"tr",align:null},"The label to jump to"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"_LDVAL(@LOCALWORK1, 4)\n_SWITCH(@LOCALWORK1)\n_CASE_JUMP(1, 'ev_dummy_1')\n_CASE_JUMP(2, 'ev_dummy_2')\n_CASE_JUMP(3, 'ev_dummy_3')\n_CASE_CANCEL('ev_dummy_cancel')\n")),(0,a.kt)("p",null,"The above script will set the work variable @LOCALWORK1 to 4."),(0,a.kt)("p",null,"Then, a switch statement using @LOCALWORK1 is prepared."),(0,a.kt)("p",null,"First, the value of @LOCALWORK1 is compared to 1. Since they're not equal, execution continues."),(0,a.kt)("p",null,"The same happens for values 2 and 3."),(0,a.kt)("p",null,"Finally, _CASE_CANCEL executes and, due to a bug, does nothing."))}m.isMDXComponent=!0}}]);