"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[880513],{603905:(t,l,n)=>{n.d(l,{Zo:()=>g,kt:()=>y});var u=n(667294);function k(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function d(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);l&&(u=u.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,u)}return n}function a(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?d(Object(n),!0).forEach((function(l){k(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function r(t,l){if(null==t)return{};var n,u,k=function(t,l){if(null==t)return{};var n,u,k={},d=Object.keys(t);for(u=0;u<d.length;u++)n=d[u],l.indexOf(n)>=0||(k[n]=t[n]);return k}(t,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(u=0;u<d.length;u++)n=d[u],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(k[n]=t[n])}return k}var e=u.createContext({}),s=function(t){var l=u.useContext(e),n=l;return t&&(n="function"==typeof t?t(l):a(a({},l),t)),n},g=function(t){var l=s(t.components);return u.createElement(e.Provider,{value:l},t.children)},o="mdxType",i={inlineCode:"code",wrapper:function(t){var l=t.children;return u.createElement(u.Fragment,{},l)}},b=u.forwardRef((function(t,l){var n=t.components,k=t.mdxType,d=t.originalType,e=t.parentName,g=r(t,["components","mdxType","originalType","parentName"]),o=s(n),b=k,y=o["".concat(e,".").concat(b)]||o[b]||i[b]||d;return n?u.createElement(y,a(a({ref:l},g),{},{components:n})):u.createElement(y,a({ref:l},g))}));function y(t,l){var n=arguments,k=l&&l.mdxType;if("string"==typeof t||k){var d=n.length,a=new Array(d);a[0]=b;var r={};for(var e in l)hasOwnProperty.call(l,e)&&(r[e]=l[e]);r.originalType=t,r[o]="string"==typeof t?t:k,a[1]=r;for(var s=2;s<d;s++)a[s]=n[s];return u.createElement.apply(null,a)}return u.createElement.apply(null,n)}b.displayName="MDXCreateElement"},738678:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>e,contentTitle:()=>a,default:()=>i,frontMatter:()=>d,metadata:()=>r,toc:()=>s});var u=n(487462),k=(n(667294),n(603905));const d={},a="Map Info Locations",r={unversionedId:"documentation/map-info-locations",id:"documentation/map-info-locations",title:"Map Info Locations",description:"Context:",source:"@site/rom-hacking/documentation/map-info-locations.md",sourceDirName:"documentation",slug:"/documentation/map-info-locations",permalink:"/rom-hacking/documentation/map-info-locations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Documentation",permalink:"/rom-hacking/category/documentation"}},e={},s=[],g={toc:s},o="wrapper";function i(t){let{components:l,...n}=t;return(0,k.kt)(o,(0,u.Z)({},g,n,{components:l,mdxType:"MDXLayout"}),(0,k.kt)("h1",{id:"map-info-locations"},"Map Info Locations"),(0,k.kt)("b",null,"Context:"),(0,k.kt)("pre",null,(0,k.kt)("code",{parentName:"pre"},"Each ArenaID below is formed by the combination of a g### file and a s### file by ArenaInfo in gamesettings.\nThey do not match up with ArenaID. 0 is associated with g001 and the offset increases to 3 (ie ArenaID\n75 is associated with g078). s### are approximately around the first g### to use them.\n")),(0,k.kt)("b",null,"Missingno:"),(0,k.kt)("pre",null,(0,k.kt)("code",{parentName:"pre"},"On default are routed to use g001/s001, acting basically like ArenaID 0.\nIn dump.cs, they are associated with g### files but will crash the game if you attempt\nto use g### files by those names, since they are not actually specified within\nEnvironments's AssetBundle Array. My attempts to add files to the array failed.\n")),(0,k.kt)("table",null,(0,k.kt)("tr",null,(0,k.kt)("td",null,"Arena ID"),(0,k.kt)("td",null,"Proper Translated Caption"),(0,k.kt)("td",null,"Ground Asset Bundle Name"),(0,k.kt)("td",null,"Sky Asset Bundle Name"),(0,k.kt)("td",null,"Dusk Ball"),(0,k.kt)("td",null,"Burmy Form"),(0,k.kt)("td",null,"Nature Power Move Name"),(0,k.kt)("td",null,"Reflection Resolution"),(0,k.kt)("td",null,"Shadow Resolution"),(0,k.kt)("td",null,"Is Indoor")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Grass - West Sinnoh"),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Fuego Ironworks"),(0,k.kt)("td",null,"bg/arenas/ground/g002"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Lava Plume"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Flower Paradise"),(0,k.kt)("td",null,"bg/arenas/ground/g004"),(0,k.kt)("td",null,"bg/arenas/sky/s004"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"3"),(0,k.kt)("td",null,"Forest - West Sinnoh"),(0,k.kt)("td",null,"bg/arenas/ground/g005"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"4"),(0,k.kt)("td",null,"Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g006"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Power Gem"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"5"),(0,k.kt)("td",null,"Cave - Water"),(0,k.kt)("td",null,"bg/arenas/ground/g007"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Hydro Pump"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"6"),(0,k.kt)("td",null,"Rocky Terrain"),(0,k.kt)("td",null,"bg/arenas/ground/g008"),(0,k.kt)("td",null,"bg/arenas/sky/s008"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Earth Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"7"),(0,k.kt)("td",null,"Shallow Water"),(0,k.kt)("td",null,"bg/arenas/ground/g009"),(0,k.kt)("td",null,"bg/arenas/sky/s009"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Hydro Pump"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"8"),(0,k.kt)("td",null,"Water Route - Water"),(0,k.kt)("td",null,"bg/arenas/ground/g010"),(0,k.kt)("td",null,"bg/arenas/sky/s010"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Hydro Pump"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"9"),(0,k.kt)("td",null,"Water Route - Sand"),(0,k.kt)("td",null,"bg/arenas/ground/g011"),(0,k.kt)("td",null,"bg/arenas/sky/s011"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Earth Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"10"),(0,k.kt)("td",null,"Verity Cavern"),(0,k.kt)("td",null,"bg/arenas/ground/g012"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Psychic"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"11"),(0,k.kt)("td",null,"Valor Cavern"),(0,k.kt)("td",null,"bg/arenas/ground/g013"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Psychic"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"12"),(0,k.kt)("td",null,"Acuity Cavern"),(0,k.kt)("td",null,"bg/arenas/ground/g014"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Psychic"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"13"),(0,k.kt)("td",null,"Trainer's School"),(0,k.kt)("td",null,"bg/arenas/ground/g015"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"14"),(0,k.kt)("td",null,"Indoors"),(0,k.kt)("td",null,"bg/arenas/ground/g016"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"15"),(0,k.kt)("td",null,"Snowy Area"),(0,k.kt)("td",null,"bg/arenas/ground/g017"),(0,k.kt)("td",null,"bg/arenas/sky/s017"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Ice Beam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"16"),(0,k.kt)("td",null,"Snowpoint Temple"),(0,k.kt)("td",null,"bg/arenas/ground/g018"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Ice Beam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"17"),(0,k.kt)("td",null,"Great Marsh"),(0,k.kt)("td",null,"bg/arenas/ground/g020"),(0,k.kt)("td",null,"bg/arenas/sky/s020"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Mud Shot"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"18"),(0,k.kt)("td",null,"Old Chateau"),(0,k.kt)("td",null,"bg/arenas/ground/g021"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Shadow Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"1")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"19"),(0,k.kt)("td",null,"Lost Tower"),(0,k.kt)("td",null,"bg/arenas/ground/g022"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Shadow Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"20"),(0,k.kt)("td",null,"Ball Capsule Preview"),(0,k.kt)("td",null,"bg/arenas/ground/g023"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"21"),(0,k.kt)("td",null,"Oreburgh Gym (VS Roark)"),(0,k.kt)("td",null,"bg/arenas/ground/g024"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Power Gem"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"22"),(0,k.kt)("td",null,"Eterna Gym (VS Gardenia)"),(0,k.kt)("td",null,"bg/arenas/ground/g025"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"23"),(0,k.kt)("td",null,"Veilstone Gym (VS Maylene)"),(0,k.kt)("td",null,"bg/arenas/ground/g026"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Aura Sphere"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"24"),(0,k.kt)("td",null,"Pastoria Gym (VS Wake)"),(0,k.kt)("td",null,"bg/arenas/ground/g027"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Hydro Pump"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"25"),(0,k.kt)("td",null,"Hearthome Gym (VS Fantina)"),(0,k.kt)("td",null,"bg/arenas/ground/g028"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Shadow Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"26"),(0,k.kt)("td",null,"Canalve Gym (VS Byron)"),(0,k.kt)("td",null,"bg/arenas/ground/g029"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Flash Cannon"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"27"),(0,k.kt)("td",null,"Snowpoint Gym (VS Candice)"),(0,k.kt)("td",null,"bg/arenas/ground/g030"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Ice Beam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"28"),(0,k.kt)("td",null,"Sunyshore Gym (VS Volkner)"),(0,k.kt)("td",null,"bg/arenas/ground/g031"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Thunderbolt"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"29"),(0,k.kt)("td",null,"Galactic Grunt"),(0,k.kt)("td",null,"bg/arenas/ground/g032"),(0,k.kt)("td",null,"bg/arenas/sky/s032"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Dark Pulse"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"30"),(0,k.kt)("td",null,"Galactic Admin (VS Saturn)"),(0,k.kt)("td",null,"bg/arenas/ground/g033"),(0,k.kt)("td",null,"bg/arenas/sky/s032"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Dark Pulse"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"31"),(0,k.kt)("td",null,"Galactic Admin (VS Mars)"),(0,k.kt)("td",null,"bg/arenas/ground/g034"),(0,k.kt)("td",null,"bg/arenas/sky/s032"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Dark Pulse"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"32"),(0,k.kt)("td",null,"Galactic Admin (VS Jupiter)"),(0,k.kt)("td",null,"bg/arenas/ground/g035"),(0,k.kt)("td",null,"bg/arenas/sky/s032"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Dark Pulse"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"33"),(0,k.kt)("td",null,"Galactic Boss (VS Cyrus)"),(0,k.kt)("td",null,"bg/arenas/ground/g036"),(0,k.kt)("td",null,"bg/arenas/sky/s032"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Dark Pulse"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"34"),(0,k.kt)("td",null,"Spear Pillar (Pearl)"),(0,k.kt)("td",null,"bg/arenas/ground/g037"),(0,k.kt)("td",null,"bg/arenas/sky/s037"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Draco Meteor"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"35"),(0,k.kt)("td",null,"Pok\xe9mon League (VS Aaron)"),(0,k.kt)("td",null,"bg/arenas/ground/g038"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Bug Buzz"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"36"),(0,k.kt)("td",null,"Pok\xe9mon League (VS Bertha)"),(0,k.kt)("td",null,"bg/arenas/ground/g039"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Earth Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"37"),(0,k.kt)("td",null,"Pok\xe9mon League (VS Flint)"),(0,k.kt)("td",null,"bg/arenas/ground/g040"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Lava Plume"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"38"),(0,k.kt)("td",null,"Pok\xe9mon League (VS Lucian)"),(0,k.kt)("td",null,"bg/arenas/ground/g041"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Psychic"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"39"),(0,k.kt)("td",null,"Pok\xe9mon League (VS Cynthia)"),(0,k.kt)("td",null,"bg/arenas/ground/g042"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Ancient Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"40"),(0,k.kt)("td",null,"Battle Tower"),(0,k.kt)("td",null,"bg/arenas/ground/g043"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"41"),(0,k.kt)("td",null,"Ramanas Park (Pure Space)"),(0,k.kt)("td",null,"bg/arenas/ground/g044"),(0,k.kt)("td",null,"bg/arenas/sky/s044"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Dazzling Gleam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"42"),(0,k.kt)("td",null,"Ramanas Park (Strange Space)"),(0,k.kt)("td",null,"bg/arenas/ground/g045"),(0,k.kt)("td",null,"bg/arenas/sky/s045"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Shadow Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"43"),(0,k.kt)("td",null,"Union Room"),(0,k.kt)("td",null,"bg/arenas/ground/g046"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"44"),(0,k.kt)("td",null,"Underground - Spacious Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g047"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Earth Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"45"),(0,k.kt)("td",null,"Underground - Grassland Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g048"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"46"),(0,k.kt)("td",null,"Underground - Fountainspring Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g049"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Hydro Pump"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"47"),(0,k.kt)("td",null,"Underground - Rocky Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g050"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Earth Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"48"),(0,k.kt)("td",null,"Underground - Volcanic Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g051"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Lava Plume"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"49"),(0,k.kt)("td",null,"Underground - Dazzling Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g052"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Dazzling Gleam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"50"),(0,k.kt)("td",null,"Underground - Swampy Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g053"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Mud Shot"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"51"),(0,k.kt)("td",null,"Underground - Whiteout Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g054"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Ice Beam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"52"),(0,k.kt)("td",null,"Underground - Icy Cave"),(0,k.kt)("td",null,"bg/arenas/ground/g055"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Ice Beam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"53"),(0,k.kt)("td",null,"Cave - Darker"),(0,k.kt)("td",null,"bg/arenas/ground/g056"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Power Gem"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"54"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g075"),(0,k.kt)("td",null,"bg/arenas/sky/s071"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"55"),(0,k.kt)("td",null,"Newmoon Island"),(0,k.kt)("td",null,"bg/arenas/ground/g058"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Dark Pulse"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"56"),(0,k.kt)("td",null,"Oreburgh Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g059"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Power Gem"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"57"),(0,k.kt)("td",null,"Eterna Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g060"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"58"),(0,k.kt)("td",null,"Veilstone Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g061"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Aura Sphere"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"59"),(0,k.kt)("td",null,"Pastoria Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g062"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Hydro Pump"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"60"),(0,k.kt)("td",null,"Hearthome Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g063"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Shadow Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"61"),(0,k.kt)("td",null,"Canalve Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g064"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Flash Cannon"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"62"),(0,k.kt)("td",null,"Snowpoint Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g065"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Ice Beam"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"63"),(0,k.kt)("td",null,"Sunyshore Gym (VS Trainer)"),(0,k.kt)("td",null,"bg/arenas/ground/g066"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Thunderbolt"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"64"),(0,k.kt)("td",null,"Grass - East Sinnoh"),(0,k.kt)("td",null,"bg/arenas/ground/g067"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"65"),(0,k.kt)("td",null,"Forest - East Sinnoh"),(0,k.kt)("td",null,"bg/arenas/ground/g005"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"66"),(0,k.kt)("td",null,"Spear Pillar (Diamond)"),(0,k.kt)("td",null,"bg/arenas/ground/g069"),(0,k.kt)("td",null,"bg/arenas/sky/s069"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Draco Meteor"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"67"),(0,k.kt)("td",null,"Cave (Unused)"),(0,k.kt)("td",null,"bg/arenas/ground/g070"),(0,k.kt)("td",null,"bg/arenas/sky/s071"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"68"),(0,k.kt)("td",null,"Hearthome City"),(0,k.kt)("td",null,"bg/arenas/ground/g071"),(0,k.kt)("td",null,"bg/arenas/sky/s071"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"69"),(0,k.kt)("td",null,"Canalave City"),(0,k.kt)("td",null,"bg/arenas/ground/g072"),(0,k.kt)("td",null,"bg/arenas/sky/s071"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Earth Power"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"70"),(0,k.kt)("td",null,"Pastoria City"),(0,k.kt)("td",null,"bg/arenas/ground/g073"),(0,k.kt)("td",null,"bg/arenas/sky/s071"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"71"),(0,k.kt)("td",null,"House"),(0,k.kt)("td",null,"bg/arenas/ground/g074"),(0,k.kt)("td",null,"bg/arenas/sky/s074"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"72"),(0,k.kt)("td",null,"Seven Stars Restaurant"),(0,k.kt)("td",null,"bg/arenas/ground/g075"),(0,k.kt)("td",null,"bg/arenas/sky/s074"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"73"),(0,k.kt)("td",null,"Valor Lakefront Lobby"),(0,k.kt)("td",null,"bg/arenas/ground/g076"),(0,k.kt)("td",null,"bg/arenas/sky/s074"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"74"),(0,k.kt)("td",null,"Caf\xe9 Cabin"),(0,k.kt)("td",null,"bg/arenas/ground/g077"),(0,k.kt)("td",null,"bg/arenas/sky/s074"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"75"),(0,k.kt)("td",null,"Pok\xe9mon League Lobby"),(0,k.kt)("td",null,"bg/arenas/ground/g078"),(0,k.kt)("td",null,"bg/arenas/sky/s074"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"76"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g074"),(0,k.kt)("td",null,"bg/arenas/sky/s071"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Air Slash"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"77"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"78"),(0,k.kt)("td",null,"GWS"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea005"),(0,k.kt)("td",null,"bg/arenas/sky/s032"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"16"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"79"),(0,k.kt)("td",null,"Credits - Sunset"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea008"),(0,k.kt)("td",null,"bg/arenas/sky/eventsky001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"80"),(0,k.kt)("td",null,"Credits - Seaside Walk"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea009"),(0,k.kt)("td",null,"bg/arenas/sky/eventsky001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"81"),(0,k.kt)("td",null,"Credits - Night Forest"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea010"),(0,k.kt)("td",null,"bg/arenas/sky/eventsky001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"82"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"83"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"84"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"85"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"86"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"87"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"88"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"89"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"90"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"91"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"92"),(0,k.kt)("td",null,"Missing No."),(0,k.kt)("td",null,"bg/arenas/ground/g001"),(0,k.kt)("td",null,"bg/arenas/sky/s001"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"Energy Ball"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"93"),(0,k.kt)("td",null,"Opening (Pearl)"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea001"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"94"),(0,k.kt)("td",null,"Opening (Diamond)"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea002"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"95"),(0,k.kt)("td",null,"Evolution/Hatching"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea003"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"96"),(0,k.kt)("td",null,"Starter Briefcase"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea004"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"97"),(0,k.kt)("td",null,"Hall of Fame"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea006"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"98"),(0,k.kt)("td",null,"Mystery Gift"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea007"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"99"),(0,k.kt)("td",null,"Trading"),(0,k.kt)("td",null,"bg/arenas/ground/eventarea011"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"100"),(0,k.kt)("td",null,"Contest Stage (Rank 1)"),(0,k.kt)("td",null,"bg/arenas/ground/cont001"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"101"),(0,k.kt)("td",null,"Contest Stage (Rank 2)"),(0,k.kt)("td",null,"bg/arenas/ground/cont002"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"102"),(0,k.kt)("td",null,"Contest Stage (Rank 3)"),(0,k.kt)("td",null,"bg/arenas/ground/cont003"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"103"),(0,k.kt)("td",null,"Contest Stage (Rank 4)"),(0,k.kt)("td",null,"bg/arenas/ground/cont004"),(0,k.kt)("td",null,"bg/arenas/sky/s006"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"Tri Attack"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"104"),(0,k.kt)("td",null,"Hall of Origin (Diamond)"),(0,k.kt)("td",null,"bg/arenas/ground/g081"),(0,k.kt)("td",null,"bg/arenas/sky/s081"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Draco Meteor"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0")),(0,k.kt)("tr",null,(0,k.kt)("td",null,"105"),(0,k.kt)("td",null,"Hall of Origin (Pearl)"),(0,k.kt)("td",null,"bg/arenas/ground/g082"),(0,k.kt)("td",null,"bg/arenas/sky/s081"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"1"),(0,k.kt)("td",null,"Draco Meteor"),(0,k.kt)("td",null,"0"),(0,k.kt)("td",null,"2"),(0,k.kt)("td",null,"0"))))}i.isMDXComponent=!0}}]);