(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{181:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return o})),l.d(t,"metadata",(function(){return a})),l.d(t,"rightToc",(function(){return r})),l.d(t,"default",(function(){return s}));var b=l(1),n=l(9),c=(l(0),l(225)),o={id:"ctw",title:"Capture the Wool"},a={id:"modules/objectives/ctw",title:"Capture the Wool",description:"Players have to retrieve wool blocks from the enemy teams side of the map and then put them on their victory monument(s). The area a wool has to be placed in is protected by default to prevent it from being blocked with another block.",source:"@site/docs/modules/objectives/ctw.mdx",permalink:"/docs/modules/objectives/ctw",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/objectives/ctw.mdx",sidebar:"Modules",previous:{title:"Teams",permalink:"/docs/modules/format/teams"},next:{title:"Capture the Flag",permalink:"/docs/modules/objectives/ctf"}},r=[],u={rightToc:r};function s(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(b.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Players have to retrieve wool blocks from the enemy teams side of the map and then put them on their victory monument(s). The area a wool has to be placed in is protected by default to prevent it from being blocked with another block."),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<wools>\n    <wool team="blue" color="lime">\n        <monument><block>0.5,11,-92.5</block></monument>\n        \x3c!-- Blue team has to place a lime wool block at 0.5,11,-92.5 to win --\x3e\n    </wool>\n    <wool team="green" color="light blue" craftable="false">\n        <monument><block>0.5,11,93.5</block></monument>\n        \x3c!-- Light blue wool can not be crafted, it must be picked up --\x3e\n    </wool>\n</wools>\n')),Object(c.b)("div",{className:"table-container"},Object(c.b)("table",{className:"table"},Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Wools Element"),Object(c.b)("th",null,"Description"),Object(c.b)("th",null,"Value/Children"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"<wools> </wools>")),Object(c.b)("td",null,"Node containing all the wools for this map."),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("th",null,"Sub-elements"),Object(c.b)("th",null),Object(c.b)("th",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"<wool> </wool>")),Object(c.b)("td",null,"A wool victory monument."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--secondary"},"Wool Sub-elements")))))),Object(c.b)("h5",{id:"wool-attributes"},"Wool Attributes"),Object(c.b)("div",{className:"table-container"},Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Attribute"),Object(c.b)("th",null,"Description"),Object(c.b)("th",null,"Value"),Object(c.b)("th",null,"Default"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"id")),Object(c.b)("td",null,"Unique identifier used to reference wool monuments from other places in the XML."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"String")),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"required")),Object(c.b)("td",null,"Specify if this objective is required to win the match.",Object(c.b)("br",null),"Teams completing all of their required objectives will win regardless of score or blitz configuration."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"team")),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--danger"},"Required"),"The team which has to place the wool."),Object(c.b)("td",null,Object(c.b)("a",{href:"/docs/modules/format/teams"},"Team ID")),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"color")),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--danger"},"Required"),"The wools color."),Object(c.b)("td",null,Object(c.b)("a",{href:"/docs/reference/misc/colors"},"Dye Color Name")),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"monument")),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(c.b)("span",{className:"badge badge--danger"},"Required"),"The monument where the wool has to be placed."),Object(c.b)("td",null,Object(c.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"craftable")),Object(c.b)("td",null,"Specify if the wool can be crafted, e.g. with white wool and dye."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"show-messages")),Object(c.b)("td",null,"Broadcast messages related to the wool in chat."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"show-effects")),Object(c.b)("td",null,"Play sounds, fireworks and other effects related to the wool."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"show-info")),Object(c.b)("td",null,"Display the wool under commands such as ",Object(c.b)("label",null,"/match"),"."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"show-sidebar")),Object(c.b)("td",null,"Displays the wool on scoreboard."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"stats")),Object(c.b)("td",null,"Determines if this wool counts as a win condition."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"show")),Object(c.b)("td",null,"Specify if the wool should be hidden from all visible locations to the player. These locations include chat, the boss bar, and the scoreboard.",Object(c.b)("br",null),Object(c.b)("label",null,"NOTE:"),"This attribute sets all five values above to true/false."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"true")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"location")),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--danger",title:"Required after proto 1.3.4"},"Required"),"Location where the wool can be found at, used to determine proximity."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(c.b)("td",null)),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"wool-proximity-metric")),Object(c.b)("td",null,"Metric used to determine proximity to the wool.",Object(c.b)("br",null),"Accepts ",Object(c.b)("label",null,"closest player"),", ",Object(c.b)("label",null,"closest block"),","," ",Object(c.b)("label",null,"closest kill")," or ",Object(c.b)("label",null,"none"),"."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"Proximity Metric")),Object(c.b)("td",null,Object(c.b)("label",null,"closest kill"))),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"wool-proximity-horizontal")),Object(c.b)("td",null,"Only calculate horizontal distance for wool proximity."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"false")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"monument-proximity-metric")),Object(c.b)("td",null,"Metric used to determine proximity to the monument.",Object(c.b)("br",null),"Accepts ",Object(c.b)("label",null,"closest player"),", ",Object(c.b)("label",null,"closest block"),","," ",Object(c.b)("label",null,"closest kill")," or ",Object(c.b)("label",null,"none"),"."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"Proximity Metric")),Object(c.b)("td",null,Object(c.b)("label",null,"closest block"))),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"monument-proximity-horizontal")),Object(c.b)("td",null,"Only calculate horizontal distance for monument proximity."),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--primary"},"true/false")),Object(c.b)("td",null,"false"))))),Object(c.b)("h5",{id:"wool-sub-elements"},"Wool Sub-elements"),Object(c.b)("div",{className:"table-container"},Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"Element"),Object(c.b)("th",null,"Description"),Object(c.b)("th",null,"Value"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("label",null,"<monument>")),Object(c.b)("td",null,Object(c.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(c.b)("span",{className:"badge badge--danger"},"Required"),"The monument where the wool has to be placed."),Object(c.b)("td",null,Object(c.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")))))),Object(c.b)("p",null,"You can group multiple victory monuments from the same team inside a single ",Object(c.b)("inlineCode",{parentName:"p"},'<wools team="team-id">')," element; and then define that teams individual wool colors inside of a ",Object(c.b)("inlineCode",{parentName:"p"},"<wool>")," element."),Object(c.b)("pre",null,Object(c.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<wools team="red">\n    <wool color="cyan" location="32.5,14,0.5">\n        <monument><block>-60,26,-118</block></monument>\n    </wool>\n    <wool color="lime" location="0.5,10,21.5">\n        <monument><block>-60,26,-121</block></monument>\n    </wool>\n</wools>\n\n<wools team="blue">\n    <wool color="magenta" location="-32.5,14,0.5" monument="magenta-monument"/>\n    <wool color="lime" location="0.5,10,21.5" monument="lime-monument"/>\n</wools>\n')))}s.isMDXComponent=!0},225:function(e,t,l){"use strict";l.d(t,"a",(function(){return i})),l.d(t,"b",(function(){return m}));var b=l(0),n=l.n(b);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=n.a.createContext({}),s=function(e){var t=n.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a({},t,{},e)),l},i=function(e){var t=s(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,c=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),i=s(l),O=b,m=i["".concat(o,".").concat(O)]||i[O]||d[O]||c;return l?n.a.createElement(m,a({ref:t},u,{components:l})):n.a.createElement(m,a({ref:t},u))}));function m(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=l.length,o=new Array(c);o[0]=O;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:b,o[1]=a;for(var u=2;u<c;u++)o[u]=l[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);