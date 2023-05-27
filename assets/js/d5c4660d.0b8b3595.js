"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[51057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},14235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={},o="Quick and Dirty Scripting Guide",l={unversionedId:"scripting/Scripting Guide 1",id:"scripting/Scripting Guide 1",title:"Quick and Dirty Scripting Guide",description:"Introduction",source:"@site/rom-hacking/scripting/Scripting Guide 1.md",sourceDirName:"scripting",slug:"/scripting/Scripting Guide 1",permalink:"/rom-hacking/scripting/Scripting Guide 1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ROMHackingSidebar",previous:{title:"Scripting",permalink:"/rom-hacking/category/scripting"},next:{title:"Scripting Basics",permalink:"/rom-hacking/scripting/Scripting Guide 2"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"What are Placedatas?",id:"what-are-placedatas",level:2},{value:"What are Stopdatas?",id:"what-are-stopdatas",level:2}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-and-dirty-scripting-guide"},"Quick and Dirty Scripting Guide"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This part of the guide will introduce you to Placedatas (known as Overworlds and Spawnables in NDS scripting), Stopdatas (known as triggers). We will also provide some contextual information to certain nomenclature that is used within BDSP as a base."),(0,i.kt)("p",null,'An important thing to note with the terminology used in BDSP is that the term "Work", is used interchangeably throughout the ROM, however it means different things depending on where you are.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Placedatas, the Work value refers to a flag (on/off value), this is prefixed in scripting by a # symbol, and there are 4000 of these in the basegame, with around 1800 of them being unused."),(0,i.kt)("li",{parentName:"ul"},"In Stopdatas, Work refers to an actual Work value, which is a variable that holds numerical data."),(0,i.kt)("li",{parentName:"ul"},"In Scripting, when we refer to a Work, we mean a Work value variable, which is prefixed in scripting with an @ symbol, there are around 440 of these in the basegame."),(0,i.kt)("li",{parentName:"ul"},"Some Work values and flags are referenced by the game as system flags/system work values, these are referenced in scripting by an $ prefix and should not be tampered with unless you know what you're doing.")),(0,i.kt)("h2",{id:"what-are-placedatas"},"What are Placedatas?"),(0,i.kt)("p",null,"Placedatas are where you put any and all interactables that you want in your mod. Any NPC, field item, or television that does absolutely anything in BDSP is a placedata object."),(0,i.kt)("p",null,"Placedatas are very powerful in what they allow you to express, allowing you to very simply edit the position, the size, movement or model referenced."),(0,i.kt)("p",null,'Unlike in NDS scripting, external areas are condensed into areas. Ie. R201 and Jubilife are all a part of Placedata_A01. The zonemap will help you with location which zones are where in the files via Ctrl+F zoneID: "your zone ID".'),(0,i.kt)("p",null,"When editing Placedatas, you may need to leave the area and come back to get the edited changes to occur, as the game likes to cache your immediate area."),(0,i.kt)("p",null,"Here is an example from Placedata_A01, which is a woman in T01, which is the starter town."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ID": "T01_WOMAN1",\n    "zoneID": 422,\n    "TrainerID": 0,\n    "ObjectGraphicIndex": 135,\n    "ColorIndex": 0,\n    "Position": {\n    \xa0 \xa0 "x": 119.0,\n    \xa0 \xa0 "y": 877.0\n    },\n    "HeightLayer": 1,\n    "HeightIgnore": 0,\n    "Size": {\n    \xa0 \xa0 "x": 0.0,\n    \xa0 \xa0 "y": 0.0\n    },\n    "Rotation": 90,\n    "MoveLimit": {\n    \xa0 \xa0 "x": 1.0,\n    \xa0 \xa0 "y": 0.0\n    },\n    "EventType": 0,\n    "MoveCode": 3,\n    "MoveParam0": 0,\n    "MoveParam1": 0,\n    "MoveParam2": 0,\n    "TalkLabel": "ev_t01_woman1",\n    "ContactLabel": "",\n    "Work": 4000,\n    "Dowsing": 0,\n    "LoadFirst": 0,\n    "DoNotLoad": 4000,\n    "TalkToRange": 1.25,\n    "TalkToSize": {\n    \xa0 \xa0 "x": 0.0,\n    \xa0 \xa0 "y": 0.0\n    },\n    "TalkBit": 15\n},\n')),(0,i.kt)("p",null,"Here is a brief rundown on what these properties do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ID: Must be unique and is how the placedata object is called/referenced in scripting, it is good practice to keep this capitalized."),(0,i.kt)("li",{parentName:"ul"},"ZoneID: This is what determines which zone the placedata appears in, a list of zoneIDs will be made available at a later point."),(0,i.kt)("li",{parentName:"ul"},'TrainerID: If you want your placedata object to be a "line of sight" trainer, you must provide it with a trainerID, which is a reference to which party you want it to have.'),(0,i.kt)("li",{parentName:"ul"},"ObjectGraphicIndex: This is what determines what your Placedata will look like, for example, 1 -> 121 would be your different NPCs, 501-505 would be your different hidden machine blockers, such as cut trees and strength boulders. To reference Pokemon you would use DexID/00/00, the zeroes referring to formID, gender, shiny status and so forth. Example: 1510000 would be Mew."),(0,i.kt)("li",{parentName:"ul"},"ColorIndex: Unknown"),(0,i.kt)("li",{parentName:"ul"},"Position: The X/Y position that your object will be placed at in the zone that you determined."),(0,i.kt)("li",{parentName:"ul"},"HeightLayer: The height position that your object will be placed at. This cannot be higher than ground level, but it can be lower, so if your object is not appearing/is underground, I suggest increasing this number."),(0,i.kt)("li",{parentName:"ul"},"HeightIgnore: This will allow you to interact with the object irrelevant of the height difference, if set to 1. This is commonly used in-game when interacting with rock climb objects."),(0,i.kt)("li",{parentName:"ul"},"Size: Determines the X/Y size of the object, 1 = 1 tile."),(0,i.kt)("li",{parentName:"ul"},"Rotation: Determines which directional rotation your correct will stand at. 0-360."),(0,i.kt)("li",{parentName:"ul"},'MoveLimit: Certain movecodes allow your object to "wander", this will restrict it to X/Y from the starting position.'),(0,i.kt)("li",{parentName:"ul"},"EventType: This usually determines if something is a trainer, must be 1 if so. Otherwise, leave it at 0."),(0,i.kt)("li",{parentName:"ul"},"MoveCode: Determines how your object will stand/act. Up/down/left/right/moving/sitting down are all determined by this."),(0,i.kt)("li",{parentName:"ul"},"MoveParam0-2:  Certain movecodes require this, more research required, but when using TrainerIDs, you must have a movecode of 14-17 and a moveparam0 of how many tiles you want the trainer's line of sight to be."),(0,i.kt)("li",{parentName:"ul"},"TalkLabel: ",(0,i.kt)("strong",{parentName:"li"},"This is the function name that will be called when you interact with the object")," and is how you get scripts called upon interaction."),(0,i.kt)("li",{parentName:"ul"},"ContactLabel: Pretty sure this is stubbed. Never managed to get it working."),(0,i.kt)("li",{parentName:"ul"},'Work: This is a flag and is what determines if the object is visible/invisible. With a flag of 4000 it will always be visible. For example, if your object has a Work of 2816 and that flag is "set" during a script, the next time you enter that area, the object will no longer be there.'),(0,i.kt)("li",{parentName:"ul"},"Dowsing: Accepts values of 0-2, 1-2 if the item is intended as a hidden item, it's what determines how far away your itemfinder will pick it up."),(0,i.kt)("li",{parentName:"ul"},"LoadFirst: Gives a priority to the loading of objects that may exist on the same tile, or require priority loading."),(0,i.kt)("li",{parentName:"ul"},"DoNotLoad: Stubbed?"),(0,i.kt)("li",{parentName:"ul"},"TalkToRange: Determines how far away you can be in order to interact with the object."),(0,i.kt)("li",{parentName:"ul"},"TalkToSize: The same."),(0,i.kt)("li",{parentName:"ul"},"TalkBit: Determines which direction you can talk to an object from, best practice is to leave this at 15.")),(0,i.kt)("h2",{id:"what-are-stopdatas"},"What are Stopdatas?"),(0,i.kt)("p",null,'Stopdatas are your "trigger" events and require a Work variable to have a certain value in them in order to be triggered when the player steps on the specified tile. The player, if travelling fast enough with a variable framerate, ',(0,i.kt)("strong",{parentName:"p"},"can skip past single width triggers"),", hence why ILCA adds invisible walls (OGI 556) everywhere in the basegame."),(0,i.kt)("p",null,"Stopdatas will only trigger when your work value has the specified param inside.\nFor example, if you are using work value of 440 and a param of 1. If @440 does not equal to 1 in memory, the event will not trigger. In scripting you change what a work value holds by using ",(0,i.kt)("inlineCode",{parentName:"p"},"_LDVAL(@440, 1)")),(0,i.kt)("p",null,"Not every zone has a stopdata available, which is problematic until we get monoscript insertion working. This means you are restricted in which zones you can add trigger events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ID": "SCRID_POS_T01_STOP",\n    "Position": {\n    \xa0 \xa0 "x": 108.0,\n    \xa0 \xa0 "y": 867.0\n    },\n    "HeightLayer": 1,\n    "Size": {\n    \xa0 \xa0 "x": 8.0,\n    \xa0 \xa0 "y": 1.0\n    },\n    "ContactLabel": "pos_t01_stop",\n    "Param": 1,\n    "Work": 48\n},\n')),(0,i.kt)("p",null,"ID: The ID of which the trigger can be referenced.\nPosition: The X/Y position of the initial tile\nHeightLayer: The height position.\nSize: The size of the trigger in X/Y directions.\nContactLabel: The script function name that is called upon entering the trigger zone.\nParam: The value that must be in the specified work value in order for the event to trigger.\nWork: The specified Work value."))}h.isMDXComponent=!0}}]);