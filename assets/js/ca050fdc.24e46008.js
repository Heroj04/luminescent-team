"use strict";(self.webpackChunkluminescent_team=self.webpackChunkluminescent_team||[]).push([[76512],{96980:(e,t,n)=>{n.d(t,{c:()=>r});var l=n(67294),a=n(18377),i=n(23972);const r=e=>{let{abilityName1:t,abilityName2:n,abilityNameHidden:i}=e;const r=t===n&&t!==i,c=t===i||n===i;return t===n&&n===i?l.createElement(a.Z,{display:"flex"},l.createElement(m,{abilityName:t,isHiddenAbility:!1,needsSpacing:!1})):r?l.createElement(a.Z,{display:"flex"},l.createElement(m,{abilityName:t,isHiddenAbility:!1,needsSpacing:!0}),l.createElement(m,{abilityName:i,isHiddenAbility:!0,needsSpacing:!1})):c?l.createElement(a.Z,{display:"flex"},l.createElement(m,{abilityName:t,isHiddenAbility:!1,needsSpacing:!0}),l.createElement(m,{abilityName:n,isHiddenAbility:!1,needsSpacing:!1})):l.createElement(a.Z,{display:"flex"},l.createElement(m,{abilityName:t,isHiddenAbility:!1,needsSpacing:!0}),l.createElement(m,{abilityName:n,isHiddenAbility:!1,needsSpacing:!0}),l.createElement(m,{abilityName:i,isHiddenAbility:!0,needsSpacing:!1}))},m=e=>{let{abilityName:t,isHiddenAbility:n,needsSpacing:a}=e;return l.createElement(i.Z,{sx:{textDecoration:"underline",fontSize:"0.9rem",marginRight:a&&"8px"}},t,n&&" (H)",a&&",")}},26012:(e,t,n)=>{n.d(t,{fw:()=>s,t4:()=>y,ve:()=>c});var l=n(67294),a=n(65582),i=n(23972),r=n(99226);const m={0:"/img/status_dmg_type.png",1:"/img/phys_dmg_type.png",2:"/img/special_dmg_type.png"},c={0:{name:"Normal",color:"#929da3",iconFilename:"Normal.webp"},1:{name:"Fighting",color:"#ce436a",iconFilename:"Fighting.webp"},2:{name:"Flying",color:"#8caadc",iconFilename:"Flying.webp"},3:{name:"Poison",color:"#ac66c8",iconFilename:"Poison.webp"},4:{name:"Ground",color:"#d97946",iconFilename:"Ground.webp"},5:{name:"Rock",color:"#c7b887",iconFilename:"Rock.webp"},6:{name:"Bug",color:"#90c127",iconFilename:"Bug.webp"},7:{name:"Ghost",color:"#4e6caa",iconFilename:"Ghost.webp"},8:{name:"Steel",color:"#518ea3",iconFilename:"Steel.webp"},9:{name:"Fire",color:"#ff9d54",iconFilename:"Fire.webp"},10:{name:"Water",color:"#4f92d6",iconFilename:"Water.webp"},11:{name:"Grass",color:"#65bd55",iconFilename:"Grass.webp"},12:{name:"Electric",color:"#fad143",iconFilename:"Electric.webp"},13:{name:"Psychic",color:"#f97175",iconFilename:"Psychic.webp"},14:{name:"Ice",color:"#72cfbd",iconFilename:"Ice.webp"},15:{name:"Dragon",color:"#116ac4",iconFilename:"Dragon.webp"},16:{name:"Dark",color:"#5b5464",iconFilename:"Dark.webp"},17:{name:"Fairy",color:"#eb92e4",iconFilename:"Fairy.webp"}},o={fontSize:{xs:"0.5rem",sm:"0.6rem",md:"0.9rem",lg:"1rem"}},s=e=>{let{moveset:t,movesetPrefix:n,pokemonDexId:m}=e;return 0===t.length?l.createElement(a.Z,null,l.createElement(i.Z,{fontSize:"0.9rem"},"There are no moves here.")):l.createElement(r.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"0.5fr 1.5fr 50px 47px 0.5fr 0.5fr 0.5fr",sm:"0.3fr 1fr 54px 48px 0.3fr 0.3fr 0.2fr 2fr",md:"0.3fr 0.8fr 90px 70px 0.3fr 0.3fr 0.2fr 2fr"},alignItems:"center",columnGap:"4px",rowGap:"8px",marginBottom:"8px"}},t.map(((e,t)=>l.createElement(d,{key:`${m}-${n}-move-${e.move.moveId}-${t}`,moveLevel:e.level,move:e.move}))))},p=e=>{let{moveIconType:t,moveTypeId:n}=e;return"number"==typeof t?l.createElement(i.Z,{sx:{textAlign:"center",fontSize:{xs:"0.7rem",sm:"0.8rem",md:"1rem"}}},t):"egg"===t?l.createElement(r.Z,{display:"flex",alignItems:"center",justifyContent:"center",width:{xs:"18px",sm:"26px",md:"32px"}},l.createElement("img",{src:"/img/pm0000_00_00_00_L.webp",alt:"Egg Move"})):"tm"===t?l.createElement(r.Z,{display:"flex",alignItems:"center",justifyContent:"center",width:{xs:"30px",sm:"40px"}},l.createElement("img",{src:`/img/tms/${c[n].iconFilename}`,alt:"Technical Machine"})):null},d=e=>{let{moveLevel:t,move:n}=e;return l.createElement(l.Fragment,null,l.createElement(r.Z,{display:"flex",alignItems:"center",justifyContent:"center"},l.createElement(p,{moveIconType:t,moveTypeId:n.type})),l.createElement(r.Z,null,l.createElement(i.Z,{sx:{fontWeight:700,fontSize:{xs:"0.7rem",sm:"0.8rem",md:"1rem"}}},n.name)),l.createElement(r.Z,null,l.createElement(y,{typeColor:c[n.type].color,typeName:c[n.type].name})),l.createElement(r.Z,{display:"flex",alignItems:"center"},l.createElement("img",{src:m[n.damageType],alt:"Damage Type",width:"100%"})),l.createElement(r.Z,{display:"flex",flexDirection:"column",alignItems:"center"},n.power>0&&l.createElement(l.Fragment,null,l.createElement(i.Z,{sx:{fontStyle:"italic",...o}},"Power"),l.createElement(i.Z,{sx:{...o}},n.power))),l.createElement(r.Z,{display:"flex",flexDirection:"column",alignItems:"center"},l.createElement(i.Z,{sx:{fontStyle:"italic",...o}},"Accuracy"),l.createElement(i.Z,{sx:{...o}},101===n.accuracy?"--":n.accuracy)),l.createElement(r.Z,{display:"flex",flexDirection:"column",alignItems:"center"},l.createElement(i.Z,{sx:{fontStyle:"italic",...o}},"PP"),l.createElement(i.Z,{sx:{...o}},n.maxPP)),l.createElement(r.Z,{sx:{display:{xs:"none",sm:"block"}}},l.createElement(i.Z,{variant:"body1",sx:{...o}},n.desc)))},y=e=>{let{typeName:t,typeColor:n}=e;return l.createElement(r.Z,{sx:{padding:"4px",background:n,borderColor:"hsl(0 0% 0% / 0.2)",borderStyle:"solid",borderRadius:"0.25rem"}},l.createElement(i.Z,{sx:{width:"100%",color:"#fff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",lineHeight:1.25,textAlign:"center",fontWeight:700,textShadow:"0 1px 0 #000,0 0 1px rgba(0,0,0,.6),0 0 2px rgba(0,0,0,.7),0 0 3px rgba(0,0,0,.8),0 0 4px rgba(0,0,0,.9)",fontSize:{xs:"0.5rem",sm:"0.6rem",md:"1rem"}}},t))}},47497:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Z});var l=n(67294),a=n(64066),i=n(65582),r=n(99226),m=n(23972),c=n(29861),o=n(98619),s=n(48885),p=n(22715),d=n(74221);const y=e=>{let{allPokemons:t,setPokemons:n}=e;const a=new d.Z(t,{keys:["monsno","name"]}),[i,r]=(0,l.useState)(""),[m,c]=(0,l.useState)(i),o=(0,l.useCallback)((e=>{if(!e)return t;return a.search(e).map((e=>e.item))}));return(0,l.useEffect)((()=>{const e=setTimeout((()=>r(m)),100);return()=>clearTimeout(e)}),[m]),(0,l.useEffect)((()=>{n(o(i))}),[i]),l.createElement(p.Z,{id:"pokemon-search-input",type:"search",label:"Search Pokemon",fullWidth:!0,value:m,onChange:e=>c(e.target.value)})};var x=n(1314),g=n(19688),f=n(26012),u=n(96980),E=n(28084);const b=e=>{let{pokemonList:t}=e;const[n,a]=(0,l.useState)(t);return l.createElement(i.Z,{sx:{flex:"1 1 auto",display:"flex",flexDirection:"column"}},l.createElement(r.Z,{display:"flex",flexDirection:"column",flex:"1 1 auto"},l.createElement(m.Z,{variant:"h2",component:"h1"},"Pokemon"),l.createElement(y,{allPokemons:t,setPokemons:a}),l.createElement(r.Z,{flex:"1 1 auto",paddingY:"12px",minHeight:{xs:"60vh",sm:0}},l.createElement(g.ZP,null,(e=>{let{height:t,width:a}=e;return l.createElement(x.t7,{itemCount:n.length,itemSize:60,height:t,width:a},(e=>{let{index:t,style:a}=e;return l.createElement(h,{pokemon:n[t],style:a})}))})))))},h=e=>{let{pokemon:t,style:n}=e;const{path:a}=(0,E.eZ)("luminescent-pokedex-data-plugin");return l.createElement("a",{href:`${a}/${t.id}`,style:{...n,textDecoration:"none"}},l.createElement(c.ZP,{disablePadding:!0},l.createElement(o.Z,null,l.createElement(s.Z,null,l.createElement("img",{src:`/img/${t.imageSrc}`,height:48,width:48})),l.createElement(m.Z,null,t.name),l.createElement(r.Z,{display:"flex",flexDirection:"row",marginX:"8px"},l.createElement(r.Z,{width:"80px"},l.createElement(f.t4,{typeName:f.ve[t.type1].name,typeColor:f.ve[t.type1].color})),t.type1!==t.type2&&l.createElement(r.Z,{width:"80px",marginLeft:"8px"},l.createElement(f.t4,{typeName:f.ve[t.type2].name,typeColor:f.ve[t.type2].color}))),l.createElement(u.c,{abilityName1:t.ability1,abilityName2:t.ability2,abilityNameHidden:t.abilityH}))))},Z=e=>{let{pokemonList:t}=e;return l.createElement(a.Z,{title:"Pokedex",description:"Pokemon Luminescent Version, A ROM Hack for Pokemon Brilliant Diamond and Shining Pearl"},l.createElement(b,{pokemonList:t}))}}}]);