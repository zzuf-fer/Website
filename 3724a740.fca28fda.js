(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{155:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return a})),l.d(t,"metadata",(function(){return c})),l.d(t,"rightToc",(function(){return u})),l.d(t,"default",(function(){return s}));var n=l(1),b=l(9),r=(l(0),l(215)),a={id:"gamerules",title:"Gamerules"},c={id:"modules/mechanics/gamerules",title:"Gamerules",description:"Minecraft's built in game rules can be set via the `<gamerules>` module. Not all gamerules are supported, the table below lists which are supported.",source:"@site/docs/modules/mechanics/gamerules.mdx",permalink:"/docs/modules/mechanics/gamerules",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/mechanics/gamerules.mdx",sidebar:"Modules",previous:{title:"Damage",permalink:"/docs/modules/mechanics/damage"},next:{title:"Spawners",permalink:"/docs/modules/mechanics/spawners"}},u=[],o={rightToc:u};function s(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Minecraft's built in game rules can be set via the ",Object(r.b)("inlineCode",{parentName:"p"},"<gamerules>")," module. Not all gamerules are supported, the table below lists which are supported."),Object(r.b)("p",null,"When stopping the daylight cycle, you should either use the ",Object(r.b)("inlineCode",{parentName:"p"},"<doDaylightCycle>")," gamerule or the ",Object(r.b)("inlineCode",{parentName:"p"},"<timelock>")," module."),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Element"),Object(r.b)("th",null,"Description"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<gamerules> </gamerules>")),Object(r.b)("td",null,"Node containing the defined game rules."))))),Object(r.b)("h5",{id:"supported-gamerule-sub-elements"},"Supported Gamerule Sub-elements"),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Element"),Object(r.b)("th",null,"Description"),Object(r.b)("th",{style:{minWidth:"110px"}},"Values"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<doFireTick>")),Object(r.b)("td",null,"Toggles whether firespread occurs."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true / false"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<doTileDrops>")),Object(r.b)("td",null,"Toggles whether tile entities drop."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true / false"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<doMobLoot>")),Object(r.b)("td",null,"Toggles whether mobs drop loot on death."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true / false"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<mobGriefing>")),Object(r.b)("td",null,"Toggles whether mobs such as Creepers and Endermen cause enviromental damage."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true / false"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<naturalRegeneration>")),Object(r.b)("td",null,"Toggles whether or not players naturally regain heath."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true / false"))),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"<doDaylightCycle>")),Object(r.b)("td",null,"Toggles whether or not time tick occurs."),Object(r.b)("td",null,Object(r.b)("span",{className:"badge badge--primary"},"true / false")))))),"Example",Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"<gamerules>\n    <doDaylightCycle>false</doDaylightCycle>\n    <naturalRegeneration>false</naturalRegeneration>\n</gamerules>\n")),Object(r.b)("h5",{id:"unsupported-gamerules"},"Unsupported Gamerules"),Object(r.b)("div",{className:"table-container"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Rule"),Object(r.b)("th",null,"Reason"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"doMobSpawning")),Object(r.b)("td",null,"Not supported in favor of the"," ",Object(r.b)("a",{href:"/docs/modules/environment/mobs"},"mobs")," module.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"keepInventory")),Object(r.b)("td",null,"Not supported since PGM already solves this with kits.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"commandBlockOutput")),Object(r.b)("td",null,"Command blocks are disabled in PGM.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"logAdminCommands")),Object(r.b)("td",null,"Not useful in custom maps.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"randomTickSpeed")),Object(r.b)("td",null,"Not useful in custom maps.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"reducedDebugInfo")),Object(r.b)("td",null,"Not useful in custom maps.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"sendCommandFeedback")),Object(r.b)("td",null,"Not useful in custom maps.")),Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("label",null,"showDeathMessages")),Object(r.b)("td",null,"Not useful in custom maps."))))))}s.isMDXComponent=!0},215:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return O}));var n=l(0),b=l.n(n);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):c({},t,{},e)),l},i=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,a=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),i=s(l),m=n,O=i["".concat(a,".").concat(m)]||i[m]||d[m]||r;return l?b.a.createElement(O,c({ref:t},o,{components:l})):b.a.createElement(O,c({ref:t},o))}));function O(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,a=new Array(r);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var o=2;o<r;o++)a[o]=l[o];return b.a.createElement.apply(null,a)}return b.a.createElement.apply(null,l)}m.displayName="MDXCreateElement"}}]);