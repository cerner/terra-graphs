(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1323:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(43)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(t(1331)),i=a(t(1325)),p=a(t(1322));function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}var d=function(e){return new Date(e).toLocaleString()},s=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],l=n.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(t);i<p.length;i++)l()},b=function(e){var n=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){g();var r=b(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,c=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(p?s(p.x):c?s(c.x):f?s(f.x):"N/A")),p&&m(r,"High",s(p.y)),c&&m(r,"Mid",s(c.y)),f&&m(r,"Low",s(f.y)))},n.loadBubblePopup=function(e,n,t,a){g();var r=b(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",l)),p&&m(r,"".concat(i.display),"".concat(p))},n.loadBarPopup=function(e,n,t,a){g();var r=b(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))},n.loadTextLabelPopup=function(e,n,t){g();var a=b(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,l=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},n.loadXAndYAxisLabelPopup=function(e){g(),b().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadY2AxisLabelPopup=function(e){var n,t;g(),(t=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),l.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadTrackPopup=function(e,n,t){g();var a=b(e).append("g"),r=t.tasks,o=t.activities,l=t.events,i=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",c)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",s)}},n.loadTaskPopup=function(e,n,t,a){g();var r=b(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,c=a.endDate,s=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",d(p)),m(r,"End Date",d(c)),s&&m(r,"Percentage",s)},n.loadDatelinePopup=function(e,n){g();var t=b(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",d(r))},n.loadTimelinePopup=function(e,n,t,a){g();var r=b(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),i)},n.loadPiePopup=function(e,n,t,a){g();var r=b(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},1327:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1328);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;n.default=i},1329:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(43)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(t(0)),i=a(t(4)),p=a(t(7)),c=t(153),d=a(t(1334)),s=a(t(815)),u=t(57),m=a(t(1335));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var b=p.default.bind(m.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,p=e.isExpanded,m=(0,l.useState)(p),f=(0,o.default)(m,2),g=f[0],y=f[1],v=(0,l.useState)(!1),w=(0,o.default)(v,2),_=w[0],E=w[1],j=l.default.useContext(c.ThemeContext),k=void 0!==a,O=function(){E(!_),g&&y(!g)},C=function(){y(!g),_&&E(!_)},L=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return l.default.createElement("div",{className:b("template",j.className)},l.default.createElement("div",{className:b("header")},r&&l.default.createElement("h2",{className:b("title")},r)),l.default.createElement("div",{className:b("content")},i&&l.default.createElement("div",{className:b("description")},i),n),l.default.createElement("div",{className:b("footer")},t?l.default.createElement("div",{className:b("button-container")},k&&l.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":_}),onClick:O,onKeyDown:function(e){return L(e,O)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:b("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(s.default,{className:b("chevron")})),l.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":g}),onClick:C,onKeyDown:function(e){return L(e,C)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:b("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(s.default,{className:b("chevron")}))):null,l.default.createElement("div",null,_&&l.default.createElement("div",{className:b("css")},a),g&&l.default.createElement("div",{className:b("code")},t))))};y.propTypes=g,y.defaultProps={isExpanded:!1};var v=y;n.default=v},1330:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(29),r=t.n(a),o=t(56),l=t.n(o),i=(t(0),t(814)),p=["components"],c={},d="wrapper";function s(e){var n=e.components,t=l()(e,p);return Object(i.mdx)(d,r()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}s.isMDXComponent=!0},1332:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1334:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(38));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}var i=function(e){var n=l({},e);return a.default.createElement(r.default,n,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var p=i;n.default=p},1335:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1337:function(e,n,t){"use strict";t.r(n)},1432:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1321)),o=t(1323),l={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:[{x:85,y:5},{x:90,y:11},{x:92,y:12},{x:101,y:16},{x:107,y:17},{x:107,y:9},{x:135,y:11},{x:139,y:12},{x:143,y:16},{x:155,y:17},{x:161,y:28},{x:164,y:12},{x:168,y:13},{x:170,y:14}]};n.default=l},1629:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(29),r=t.n(a),o=t(56),l=t.n(o),i=(t(0),t(814)),p=["components"],c={},d="wrapper";function s(e){var n=e.components,t=l()(e,p);return Object(i.mdx)(d,r()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: [\n    {\n      x: 85,\n      y: 5,\n    },\n    {\n      x: 90,\n      y: 11,\n    },\n    {\n      x: 92,\n      y: 12,\n    },\n    {\n      x: 101,\n      y: 16,\n    },\n    {\n      x: 107,\n      y: 17,\n    },\n    {\n      x: 107,\n      y: 9,\n    },\n    {\n      x: 135,\n      y: 11,\n    },\n    {\n      x: 139,\n      y: 12,\n    },\n    {\n      x: 143,\n      y: 16,\n    },\n    {\n      x: 155,\n      y: 17,\n    },\n    {\n      x: 161,\n      y: 28,\n    },\n    {\n      x: 164,\n      y: 12,\n    },\n    {\n      x: 168,\n      y: 13,\n    },\n    {\n      x: 170,\n      y: 14,\n    },\n  ],\n};\n\nexport default data;\n\n")))}s.isMDXComponent=!0},1635:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:180},y:{show:!0,label:"Line Set A",lowerLimit:0,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1636:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1321)),o=t(1323),l={key:"uid_2",label:{display:"Data Label 2"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:o.loadPopup,yAxis:"y2",values:[{x:90,y:0},{x:92,y:50},{x:103,y:60},{x:117,y:80},{x:121,y:120},{x:128,y:130},{x:135,y:180},{x:138,y:185},{x:141,y:200},{x:149,y:220}]};n.default=l},1861:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(1321)),l=a(t(1322));t(1324),t(1337);var i=a(t(1327)),p=a(t(1635)),c=a(t(1432)),d=a(t(1636)),s=l.default.deepClone((0,p.default)("#scatterY2Axis")),u=[l.default.deepClone(c.default),l.default.deepClone(d.default)];n.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(s);u.forEach((function(n){e.loadContent(o.default.api.scatter(n))}))}),[]),r.default.createElement(i.default,{id:"scatterY2Axis"})}},2056:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return T}));var a=t(29),r=t.n(a),o=t(56),l=t.n(o),i=t(0),p=t.n(i),c=t(814),d=t(1861),s=t.n(d),u=["components"],m={};function f(e){var n=e.components,t=l()(e,u);return Object(c.mdx)("wrapper",r()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset2';\n\n/*\nPlease refer documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#scatterY2Axis'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n];\n\nconst Y2AxisScatterExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.scatter(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"scatterY2Axis\" />\n  );\n};\n\nexport default Y2AxisScatterExample;\n\n")))}f.isMDXComponent=!0;var b=t(1329),g=t.n(b),x=t(1330),h=function(e){var n=e.title,t=e.description,a=e.isExpanded;return p.a.createElement(g.a,{title:n||"Y 2 Axis",description:t,example:p.a.createElement(s.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},y=["components"],v={},w="wrapper";function _(e){var n=e.components,t=l()(e,y);return Object(c.mdx)(w,r()({},v,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const getScatterDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 180,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: 0,\n      upperLimit: 18,\n    },\n    y2: {\n      show: true,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getScatterDefaultConfig;\n\n\n")))}_.isMDXComponent=!0;var E=t(1629),j=["components"],k={},O="wrapper";function C(e){var n=e.components,t=l()(e,j);return Object(c.mdx)(O,r()({},k,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  yAxis: 'y2',\n  values: [\n    {\n      x: 90,\n      y: 0,\n    },\n    {\n      x: 92,\n      y: 50,\n    },\n    {\n      x: 103,\n      y: 60,\n    },\n    {\n      x: 117,\n      y: 80,\n    },\n    {\n      x: 121,\n      y: 120,\n    },\n    {\n      x: 128,\n      y: 130,\n    },\n    {\n      x: 135,\n      y: 180,\n    },\n    {\n      x: 138,\n      y: 185,\n    },\n    {\n      x: 141,\n      y: 200,\n    },\n    {\n      x: 149,\n      y: 220,\n    },\n  ],\n};\n\nexport default data;\n\n")))}C.isMDXComponent=!0;var L=["components"];t(1332);var D={},P="wrapper";function T(e){var n=e.components,t=l()(e,L);return Object(c.mdx)(P,r()({},D,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"y2-axis"},"Y2 Axis"),Object(c.mdx)("p",null,"This is a timeseries graph with both Y and Y2 axis included."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(h,{mdxType:"ScatterGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Example Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(_,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"dataset-1"},"dataset 1"),Object(c.mdx)(E.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"dataset-2"},"dataset 2"),Object(c.mdx)(C,{mdxType:"DataObject2"})))}T.isMDXComponent=!0}}]);