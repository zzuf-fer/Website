(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return c})),l.d(t,"rightToc",(function(){return o})),l.d(t,"default",(function(){return s}));var n=l(1),b=l(9),a=(l(0),l(216)),r={id:"control-points",title:"Control Points"},c={id:"modules/objectives/control-points",title:"Control Points",description:"Control point give a certain amount of point to the team currently holding it. Once a team has captured all points, or reached a certain score (using the [score module](/docs/modules/objectives/scoring)) the match ends. Control points can be mixed with and used in addition to other gamemodes. Other uses of control points include unlocking an area of the map using objective filters, etc.",source:"@site/docs/modules/objectives/control-points.mdx",permalink:"/docs/modules/objectives/control-points",editUrl:"https://github.com/PGMDev/Website/edit/master/docs/modules/objectives/control-points.mdx",sidebar:"Modules",previous:{title:"Capture the Flag",permalink:"/docs/modules/objectives/ctf"},next:{title:"Destroy the Monument",permalink:"/docs/modules/objectives/dtm"}},o=[],i={rightToc:o};function s(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Control point give a certain amount of point to the team currently holding it. Once a team has captured all points, or reached a certain score (using the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/objectives/scoring"}),"score module"),") the match ends. Control points can be mixed with and used in addition to other gamemodes. Other uses of control points include unlocking an area of the map using objective filters, etc."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<control-points capture-rule="lead" incremental="true" show-progress="true">\n    <control-point name="Center" capture-time="20s">\n        <capture><cylinder base="0.5,23,7.5" radius="7" height="5"/></capture>\n        <progress><cylinder base="0.5,22,7.5" radius="7" height="4"/></progress>\n        <captured><cylinder base="0.5,64,7.5" radius="7" height="5"/></captured>\n    </control-point>\n</control-points>\n')),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"300px"}},"Control Points Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<control-points> </control-points>")),Object(a.b)("td",null,"Node containing a single control point or a group of control points.")),Object(a.b)("tr",null,Object(a.b)("th",null,"Sub-elements"),Object(a.b)("th",null),Object(a.b)("th",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<control-point> </control-point>")),Object(a.b)("td",null,"A single control point."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary"},"Control Point Sub-elements")))))),Object(a.b)("h5",{id:"control-point-attributes"},"Control Point Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"150px"}},"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",{style:{minWidth:"100px"}},"Value"),Object(a.b)("th",null,"Default"),Object(a.b)("th",null,"KotH"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"id")),Object(a.b)("td",null,"Unique identifier used to reference control points from other places in the XML."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"name")),Object(a.b)("td",null,"Name of the control point, displayed on the scoreboard."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"required")),Object(a.b)("td",null,"Specify if this objective is required to win the match.",Object(a.b)("br",null),"Teams completing all of their required objectives will win regardless of score or blitz configuration."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",{colspan:"2"},"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"capture-time")),Object(a.b)("td",null,"Time to capture the control point."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/reference/misc/time-periods"},"Time Period")),Object(a.b)("td",{colspan:"2"},"30 sec")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"points")),Object(a.b)("td",null,"Points to give per second to the owning team."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",{colspan:"2"},"1")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"points-growth")),Object(a.b)("td",null,"Number of seconds for the point rate to double. If given, the rate at which the control point gives points will exponential increase with time."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",{colspan:"2"},"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"owner-points")),Object(a.b)("td",null,"Gives a set number of points to a team when captured. When the control point is captured by another team, the points are revoked."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",{colspan:"2"},"0")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"capture-rule")),Object(a.b)("td",null,"Rule used to decide who is in control of the point at any given moment."),Object(a.b)("td",null,Object(a.b)("a",{href:"#capture_rule"},"Capture Rule")),Object(a.b)("td",{colspan:"2"},"exclusive")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"time-multiplier")),Object(a.b)("td",null,"Adjust capture time relative to the amount of team players on the control point."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Decimal")),Object(a.b)("td",null,"0"),Object(a.b)("td",null,"0.1")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show-progress")),Object(a.b)("td",null,"Show capture percentage in the sidebar."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"neutral-state")),Object(a.b)("td",null,"Control point must be un-captured before it can be captured again."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"incremental")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--warning",title:"This attribute should no longer be used."},"Deprecated"),"Capture progress is retained even if capturing is interrupted.",Object(a.b)("br",null),Object(a.b)("i",null,"Has been replaced with the recovery & decay attributes which allow much more control over progress.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"permanent")),Object(a.b)("td",null,"Control point can only be captured once during the match."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"initial-owner")),Object(a.b)("td",null,"The team owning the control point when the match starts."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/format/teams"},"Team ID")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"show")),Object(a.b)("td",null,"Show the objective in the interface and fire fireworks on completion.",Object(a.b)("br",null),Object(a.b)("i",null,"Hidden goals do not count towards a players completed objectives & do not give raindrops.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",{colspan:"2"},"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"visual-materials")),Object(a.b)("td",null,"Filter the materials modified when updating the progress regions.",Object(a.b)("br",null),Object(a.b)("i",null,"Defaults to wool, carpet, stained clay, stained glass & stained glass panes.")),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Block Filter")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"capture")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"Region where this control point can be captured."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"progress")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Region where this control points progress is displayed."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Bounded Region")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"captured")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Region where this control points owner is displayed."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Bounded Region")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"capture-filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter teams that can capture this control point, defaults to all teams. Teams that don't match this filter can still prevent other teams from capturing by standing on the control point. They can also uncapture the control point if neutral-state is enabled."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(a.b)("td",{colspan:"2"})),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"player-filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter players who can control this control point. Players who don't match this filter cannot affect the control point in any way."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filter")),Object(a.b)("td",{colspan:"2"}))))),Object(a.b)("h4",{id:"control-point-sub-elements"},"Control Point Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"160px"}},"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<capture>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(a.b)("span",{className:"badge badge--danger"},"Required"),"The region players have to stand in to capture the control point."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<progress>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"The region to display capture progress."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Bounded Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<captured>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"The region to display if the control point is captured."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"Bounded Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<capture-filter>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter teams that can capture this control point, defaults to all teams. Teams that don't match this filter can still prevent other teams from capturing by standing on the control point. They can also uncapture the control point if neutral-state is enabled."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<player-filter>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Filter players who can control this control point. Players who don't match this filter cannot affect the control point in any way."),Object(a.b)("td",null,Object(a.b)("a",{href:"/docs/modules/mechanics/filters"},"Filters")))))),Object(a.b)("h4",{id:"capture-rule"},"Capture Rule"),Object(a.b)("p",null,"The capture rule defines the logic used to decide which team is in control of the point. Values for ",Object(a.b)("inlineCode",{parentName:"p"},"capture-rule")," can be one of the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"exclusive")," The team must be the only team with players on the control point. (default)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"majority")," The team must have more players on the control point than all other teams combined."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"lead")," The team must have more players on the control point than any other single team.")),Object(a.b)("p",null,"Players who match either ",Object(a.b)("inlineCode",{parentName:"p"},"capture-filter")," or ",Object(a.b)("inlineCode",{parentName:"p"},"player-filter")," are counted when calculating the ",Object(a.b)("inlineCode",{parentName:"p"},"capture-rule"),". Players who don't match either filter cannot affect the control point at all."),Object(a.b)("h4",{id:"control-point-regions"},"Control Point Regions"),Object(a.b)("p",null,"Capture progress is displayed inside the defined ",Object(a.b)("inlineCode",{parentName:"p"},"<progress>")," region using the dominating teams color. After a control point is captured the ",Object(a.b)("inlineCode",{parentName:"p"},"<captured>")," region is also filled with that color. The progress and captured regions must be bounded regions, e.g. cylinders & cuboids will work, circles and squares will not. Only the default visual materials or materials defined in ",Object(a.b)("inlineCode",{parentName:"p"},"visual-materials")," will be modified in the progress regions when they are updated."))}s.isMDXComponent=!0},216:function(e,t,l){"use strict";l.d(t,"a",(function(){return u})),l.d(t,"b",(function(){return j}));var n=l(0),b=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var i=b.a.createContext({}),s=function(e){var t=b.a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):c({},t,{},e)),l},u=function(e){var t=s(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(l),p=n,j=u["".concat(r,".").concat(p)]||u[p]||d[p]||a;return l?b.a.createElement(j,c({ref:t},i,{components:l})):b.a.createElement(j,c({ref:t},i))}));function j(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,r=new Array(a);r[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var i=2;i<a;i++)r[i]=l[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,l)}p.displayName="MDXCreateElement"}}]);