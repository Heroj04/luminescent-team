"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[9118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,c=h["".concat(u,".").concat(d)]||h[d]||m[d]||l;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const l={},r="BDSP Animation Insertion/Creation Guide",o={unversionedId:"art/animations",id:"art/animations",title:"BDSP Animation Insertion/Creation Guide",description:"| Written By  | Special Thanks |",source:"@site/rom-hacking/art/animations.md",sourceDirName:"art",slug:"/art/animations",permalink:"/rom-hacking/art/animations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ROMHackingSidebar",previous:{title:"Art",permalink:"/rom-hacking/category/art"},next:{title:"Mesh & Texture Replacement Tutorial",permalink:"/rom-hacking/art/mesh_and_texture_replacement"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Ripping the Model + Animation",id:"ripping-the-model--animation",level:2},{value:"Animating in Blender",id:"animating-in-blender",level:2},{value:"Importing into Unity",id:"importing-into-unity",level:2},{value:"Putting your Animation Back into the Game",id:"putting-your-animation-back-into-the-game",level:2},{value:"Helpful Tips",id:"helpful-tips",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bdsp-animation-insertioncreation-guide"},"BDSP Animation Insertion/Creation Guide"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Written By"),(0,i.kt)("th",{parentName:"tr",align:null},"Special Thanks"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Indigo"),(0,i.kt)("td",{parentName:"tr",align:null},"Yisuno")))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"There are two different paths that you can take with making custom animations for BDSP. Both of these methods have been used successfully in the past with little to no problems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Animating in Blender and importing into unity."),(0,i.kt)("li",{parentName:"ul"},"Animating with UMotion in Unity.")),(0,i.kt)("p",null,"This tutorial will focus primarily on using Blender to animate since there are more resources on using that software and it\u2019s the only one I know how to do."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/_C2ClFO3FAY"},"Here\u2019s a great place to start learning how to animate in Blender if you\u2019ve never done it before."))),(0,i.kt)("p",null,"There are only a few things that you will need in order to get started with making custom animations. Thankfully, all of them are free."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.blender.org/"},"Blender"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Animations can be done in here."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unity3d.com/get-unity/download"},"Unity"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"BDSP was built in unity, so most editing is done here."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EdyJ/blender-to-unity-fbx-exporter"},"UnityFBX"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In order to export properly from Blender."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Unity-Technologies/AssetBundles-Browser"},"Asset Bundle Browser"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A package for Unity that will allow you to repack FBXs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nesrak1/UABEA"},"UABEA"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Asset repacker. Use this to replace original animation files."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Perfare/AssetStudio"},"Asset Studio"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unpacks models/animations from BDSP.")))),(0,i.kt)("h2",{id:"ripping-the-model--animation"},"Ripping the Model + Animation"),(0,i.kt)("p",null,"This step includes AssetStudio and a Dump of BDSP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first thing you\u2019ll want to do is get a legitimate, personally owned dump of BDSP. I won\u2019t walk you through how to do that, but google is your friend."),(0,i.kt)("li",{parentName:"ul"},"Open up Asset Studio, select load file, as seen below.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/OLrOYEEFM6ZPj9Sqdsv4Zx5rEVX39D1gIKo5jw-xkB7JboBrttrWLlg-znh84FI5ju-5kW6gzKLQhdZfMV3jLLxkuBaxDLgmD6XEeMfexvHN8un3s7dx1s25MYgOt_XFN-fcZIy5jXNB5JWCUTu8uA",alt:"Asset Studio File Load File"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For my example, I\u2019m going to work on giving the trainer a new throwing animation. So I would select the pc001_19 file from my dump.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/g3E1-NJKx5qsrlZz1MFSwKUDHzH84TQOYFazQuEHZwldOq4Laqi8okNl9ZVxRg5Of9GpEGWXAdoVOM48uwElyKf0_HreRpickWV3Rry2xJzJhLRiOrcny_aDslOQCaTat9U-Br2kDHEzKcA_DwyRMIU",alt:"Asset Studio Asset List UI"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For today\u2019s example I want to edit the throw animation, which is named \u201cadvent_06\u201d. So I typically organize the list on the left by type and select everything non animation (including the animator file) and the animation I wish to edit.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/oS8T93krhQpFm0SoRONRI18Dlswphv-RmSqFkIGjJXFr0ZbJNXNA1rgDZ1AHPkhTRAdr-S9b-XwmuQ5rQ1AMk5UPLPgKVSht7PUubD5uy-tSPh5pSH7FA_3rQqOE8z27jPOcplupQwoHWCFpWrR01rQ",alt:"Asset Studio Asset List UI"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Right click the blue area and select \u201cexport animator + selected clips\u201d. Choose a destination and you will soon have an FBX bundle of the model and your selected animation.")),(0,i.kt)("h2",{id:"animating-in-blender"},"Animating in Blender"),(0,i.kt)("p",null,"This step includes Blender + your recently extracted model and animation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once you open Blender, delete the cube, camera, and lights that are currently in your scene."),(0,i.kt)("li",{parentName:"ul"},"Import the FBX you just extracted using assetstudio. You will have to zoom in a bit since BDSP models are super tiny.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/ZhSO-QvLNzSEX2jDdBJd0bZCoGAnTPR9F8Fekz8BIs143NGttcve92QMcL8Tu7Tlijde6EAZX3RuKo0Iz9u2wNSePd9O59EHh0pAo1RzB-8zso19V4poO5dlLoIrp2Buh1Y--jzUSnCvOjVBQs6yQJs",alt:"Blender Imported Model"}),"\nIt should look something like this."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From here you can manipulate the animation using techniques linked in the video above. Be sure not to delete any bones on the rig or add any new ones since rig imports aren\u2019t possible at the moment."),(0,i.kt)("li",{parentName:"ul"},"You can hide any bones or parts of the mesh that you\u2019d like, but make sure to press alt + h when you\u2019re done to unhide anything you\u2019ve hidden."),(0,i.kt)("li",{parentName:"ul"},"If you haven\u2019t already, install the unityfbx plugin for blender. This can be done by going to edit \u2192 preferences \u2192 add-ons."),(0,i.kt)("li",{parentName:"ul"},"Choose the unopened zip file from github when installing unityfbx."),(0,i.kt)("li",{parentName:"ul"},"Select everything in the scene relating to the model and animation by pressing \u201cA\u201d, including the keyframes of animation that you created. Then export the file as a unityFBX file"),(0,i.kt)("li",{parentName:"ul"},"Make sure to check the \u201cSelected Objects Only\u201d option when exporting.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/z-EHE12V0ldmOsVD5_dJ_-RtTMoXrCQNvGoduWpWqVlL3cT28Y9Trhy5y0-ItWfJT1wfPF_dR6ckRbCkJYaZOtcFczZg3QtFNjdKNzbMpQ9bUwSUS7hzPSYWkKlA_W5HPwDcTKLj0jqLmahSkyy1Yy0",alt:"Blender Selected Objects Only"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Now we\u2019re ready to move to Unity!")),(0,i.kt)("h2",{id:"importing-into-unity"},"Importing into Unity"),(0,i.kt)("p",null,"This step includes Unity and Asset Bundle Browser  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Drag the newly exported unityFBX file that you created in Blender into your assets in Unity."),(0,i.kt)("li",{parentName:"ul"},"Install the Asset Bundle Browser by going to package manager, located here")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/NJKJz5UDTMkJADpX5so0QxPfCi1DpkfJTH21nEHilY986UF9KS5xXuxB4tQx6vJwtyl7z_IZXkdRYCHw5uBT0flEFU3qnqHRRogGpK3TRI8CTV0gfOy5QKar6VZbniLB6QuY66Lsskm8nxm9TxiO9q0",alt:"Unity Window Package Manager"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Press the plus in the top left corner of the menu. Select add package from disk. Select the package.json file from the zip you downloaded earlier for the AssetBundleBrowser.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/osubnwY8z5um1b8k2S9KiugLBKtONiH4t0yPTVWOM2i9MTUlIYyt3UeFzG_w8tlOTGAIcYqJvzwOOeH_egnLo16RUAMji8JtAb0KZ_M9m1hTQxkFlmc36rtcklMKAYB0yBuJXsnaCXqMRBRMYH5nnfo",alt:"Unity Package Manager Add Package from Disk"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open up the asset bundle browser you just installed by clicking here")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/_X0JOfsaQ0WhR8Y-aSBUJt_e0dwoZUbSiFcXo6fwPGjmm7dUqQR9KuI3A9BmtLf4gQl7k4AR2dozvK_v8ukE26z0L3p4erve_ShdF0FmezE7V7XnX9NMF5H0rEaeOXn7LNc7TNLpb6YLv0Wdpu0LZQo",alt:"Unity Window AssetBundle Browser"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When the menu opens, drag your fbx package into the menu. It should look something like this.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/6kkVUYB7YITKQ7UnMvrn8lvr2hV059cQvB08QogkQYP8pegJQqxT3ZeU6WV-57ylpZZyryRglafwnDNoDmM5puAFy6ysWqL_AaQAPhOqeItgOWSspuJxTZ7mv91ZpATIuWopM3-k59yoYip4AQTPuLI",alt:"Unity AssetBundle Browser"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Go to the build tab and then press build. It should export a file to your project folder that unity currently has open inside of the AssetBundles/Standalone Windows Folder.")),(0,i.kt)("h2",{id:"putting-your-animation-back-into-the-game"},"Putting your Animation Back into the Game"),(0,i.kt)("p",null,"This step includes UABEA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open UABEA. Open the file you just exported from unity. Press Info.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Navigate to the animation you edited and select export dump, MAKE SURE YOU SAVE THIS AS A JSON FILE!"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/wHUWrZs-4EnUrZ0Qe1U99kz1_focolmvLh8BWZ0_bJWzQU_1mndJutIGh_BuvOUz8TlPrmbo9r8LKNkDJZDr6C3aIxO01bmxzb0Rv_4fIfMTLYYkrsjHs9CrGjfg3hzVeIHNcrqvExKff6jMlnohMhk",alt:"UABEA Assets Info Export Dump"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Next, open up the original model/animation file from your dump and also go to the info tab."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/CuOi_qHWt5lJOc0NuUVeaaACwMa3sDHHlRqT47dSVqvmIFD2msHcgky9IaWcHVnGMgFqA7x8LmYnikeW6HXrPumHo1oHk-DGlKAyblaFsN3tPJ2z9yl5go5uv9FvQgjt-ArqflqeXwhYmxosIb6vOGs",alt:"UABEA Assets Info Import Dump"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select Import Dump and choose the JSON file from your edited animation that you just exported."),(0,i.kt)("li",{parentName:"ul"},"Be sure to save this file in a different location from the file with a different name. Save under both the info tab and the general UABEA tab."),(0,i.kt)("li",{parentName:"ul"},"Rename the file it exports to whatever the original filename was for the model/animation. Then put it in your mods folder.")),(0,i.kt)("p",null,"TA-DA! You\u2019ve got an animation done!"),(0,i.kt)("h2",{id:"helpful-tips"},"Helpful Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A common issue with creating animations is the bone hierarchy getting messed up. This can either be edited by changing it in the anim\u2019s text file or deleting a certain object in blender."),(0,i.kt)("li",{parentName:"ul"},"The goal here is to make sure the rig starts with the origin and not \u201cpc_xx\u201d."),(0,i.kt)("li",{parentName:"ul"},"I\u2019ve noticed some issues with using 2022 versions of Unity, sometimes using a 2019 build works better.")))}m.isMDXComponent=!0}}]);