"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[6790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=c(n),d=a,h=k["".concat(s,".").concat(d)]||k[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},i="Hooks",l={unversionedId:"exefs/hooks",id:"exefs/hooks",title:"Hooks",description:"Introduction",source:"@site/rom-hacking/exefs/hooks.md",sourceDirName:"exefs",slug:"/exefs/hooks",permalink:"/rom-hacking/exefs/hooks",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ROMHackingSidebar",previous:{title:"Headers",permalink:"/rom-hacking/exefs/headers"},next:{title:"Logging",permalink:"/rom-hacking/exefs/logging"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Replace Hook",id:"replace-hook",level:2},{value:"Trampoline Hook",id:"trampoline-hook",level:2},{value:"Inline Hook",id:"inline-hook",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hooks"},"Hooks"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In ExLaunch, there are three types of hooks that are available to us. Each of them is useful for different reasons."),(0,a.kt)("p",null,"Generally, hook definitions will look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"HOOK_DEFINE_<TYPE>(<Name>) {\n  static <ReturnType> Callback(<arguments>) {\n    // Code\n  }\n};\n")),(0,a.kt)("h2",{id:"replace-hook"},"Replace Hook"),(0,a.kt)("p",null,"This is the most common type of hook. It replaces the code of a function with the code defined in the hook."),(0,a.kt)("p",null,"Here is an example replace hook for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dpr.Battle.Logic.MainModule$$GetMaxFollowPokeLevel")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"HOOK_DEFINE_REPLACE(Dpr_Battle_Logic_MainModule_GetMaxFollowPokeLevel) {\n  static uint8_t Callback(Dpr::Battle::Logic::MainModule::Object* __this) {\n    // Setting the obedience threshold to always be Lv. 100.\n    return 100;\n  }\n};\n")),(0,a.kt)("p",null,"The offset a replace hook is installed at is the offset of the replaced function."),(0,a.kt)("h2",{id:"trampoline-hook"},"Trampoline Hook"),(0,a.kt)("p",null,'This hook acts similarly to a replace hook, but allows the original function to be called from within it, therefore keeping it "intact" in a way.'),(0,a.kt)("p",null,"Here is an example trampoline hook for the ",(0,a.kt)("inlineCode",{parentName:"p"},"FieldManager$$CheckAvailableFieldItem")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"HOOK_DEFINE_TRAMPOLINE(ShortcutCheckAvailability) {\n  static bool Callback(FieldManager::Object* __this, uint16_t itemno) {\n    if (CanUseRegisteredCustomItem(itemno)) {\n      return true;\n    }\n\n    return Orig(__this, itemno);\n  }\n};\n")),(0,a.kt)("p",null,"As shown above, to call the original function, you simply call ",(0,a.kt)("inlineCode",{parentName:"p"},"Orig()")," with the arguments defined for ",(0,a.kt)("inlineCode",{parentName:"p"},"Callback()"),"."),(0,a.kt)("p",null,"The offset a trampoline hook is installed at is the offset of the replaced function."),(0,a.kt)("h2",{id:"inline-hook"},"Inline Hook"),(0,a.kt)("p",null,"This is the most complicated type of hook to deal with, but it can be very powerful when used to its full potential."),(0,a.kt)("p",null,"Instead of installing it at the start of a function, this hook is installed at any offset and replaces one instruction. Because of this, we have direct access to registers instead of a function's arguments."),(0,a.kt)("p",null,"Here is an example inline hook at offset ",(0,a.kt)("inlineCode",{parentName:"p"},"01daca9c"),", for the ",(0,a.kt)("inlineCode",{parentName:"p"},"FieldPlayerEntity$$CheckSwim")," function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"HOOK_DEFINE_INLINE(CheckSurfFlags) {\n  static void Callback(exl::hook::nx64::InlineCtx* ctx) {\n    bool result = true;\n    result &= PlayerWork::GetSystemFlag((int32_t)FlagWork_SysFlag::BADGE_ID_C06);\n    result &= PlayerWork::GetBool((int32_t)FlagWork_Flag::FE_HIDEN_03_GET);\n\n    ctx->X[0] = result ? 1 : 0;\n  }\n};\n")),(0,a.kt)("p",null,"The replaced instruction above is a simple call to ",(0,a.kt)("inlineCode",{parentName:"p"},"FlagWork$$GetSysFlag"),". We replace it with the original check, and also a second check to a work value."),(0,a.kt)("p",null,"To access registers, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx")," argument. It has a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint64_t")," array called ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," to access the 64-bit registers, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint32_t")," array called ",(0,a.kt)("inlineCode",{parentName:"p"},"W")," for the 32-bit registers. These can be read and written to directly."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"W")," registers represent the lower 32 bits of the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," registers. They are technically not a separate set of registers.")),(0,a.kt)("p",null,"A function's arguments are typically stored in registers ",(0,a.kt)("inlineCode",{parentName:"p"},"X0")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"X7")," at the start of it. When returning a value, a function writes that value to register ",(0,a.kt)("inlineCode",{parentName:"p"},"X0"),"."))}u.isMDXComponent=!0}}]);