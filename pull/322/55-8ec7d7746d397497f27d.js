(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1322:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(t(1330)),l=a(t(1324)),p=a(t(1321));function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},b=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(t);l<p.length;l++)i()},f=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},g=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){g();var r=f(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,c=a.mid,b=a.low;o?(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(l.display),i)):(m(r,"X axis","".concat(p?d(p.x):c?d(c.x):b?d(b.x):"N/A")),p&&m(r,"High",d(p.y)),c&&m(r,"Mid",d(c.y)),b&&m(r,"Low",d(b.y)))},n.loadBubblePopup=function(e,n,t,a){g();var r=f(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"year",i)),p&&m(r,"".concat(l.display),"".concat(p))},n.loadBarPopup=function(e,n,t,a){g();var r=f(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))},n.loadTextLabelPopup=function(e,n,t){g();var a=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,i=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},n.loadXAndYAxisLabelPopup=function(e){g(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadY2AxisLabelPopup=function(e){var n,t;g(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadTrackPopup=function(e,n,t){g();var a=f(e).append("g"),r=t.tasks,o=t.activities,i=t.events,l=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(a,"Tasks",p)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(a,"Activities",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),b(a,"Events",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),b(a,"Actions",d)}},n.loadTaskPopup=function(e,n,t,a){g();var r=f(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,c=a.endDate,d=a.percentage;o&&m(r,"Task Name",i),m(r,"Track",l),m(r,"Start Date",s(p)),m(r,"End Date",s(c)),d&&m(r,"Percentage",d)},n.loadDatelinePopup=function(e,n){g();var t=f(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",s(r))},n.loadTimelinePopup=function(e,n,t,a){g();var r=f(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(i.display),l)},n.loadPiePopup=function(e,n,t,a){g();var r=f(e).append("g"),o=a.label,i=a.value;m(r,o.display,i)}},1326:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1327);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;n.default=l},1328:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=b(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(0)),l=a(t(4)),p=a(t(7)),c=t(153),s=a(t(1333)),d=a(t(814)),u=t(57),m=a(t(1334));function b(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:n})(e)}var f=p.default.bind(m.default),g={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,p=e.isExpanded,m=(0,i.useState)(p),b=(0,o.default)(m,2),g=b[0],y=b[1],v=(0,i.useState)(!1),w=(0,o.default)(v,2),_=w[0],E=w[1],k=i.default.useContext(c.ThemeContext),O=void 0!==a,j=function(){E(!_),g&&y(!g)},S=function(){y(!g),_&&E(!_)},D=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return i.default.createElement("div",{className:f("template",k.className)},i.default.createElement("div",{className:f("header")},r&&i.default.createElement("h2",{className:f("title")},r)),i.default.createElement("div",{className:f("content")},l&&i.default.createElement("div",{className:f("description")},l),n),i.default.createElement("div",{className:f("footer")},t?i.default.createElement("div",{className:f("button-container")},O&&i.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":_}),onClick:j,onKeyDown:function(e){return D(e,j)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:f("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(d.default,{className:f("chevron")})),i.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return D(e,S)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:f("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(d.default,{className:f("chevron")}))):null,i.default.createElement("div",null,_&&i.default.createElement("div",{className:f("css")},a),g&&i.default.createElement("div",{className:f("code")},t))))};y.propTypes=g,y.defaultProps={isExpanded:!1};var v=y;n.default=v},1329:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=(t(0),t(813)),p=["components"],c={},s="wrapper";function d(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(s,r()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}d.isMDXComponent=!0},1331:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1333:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(37));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}var l=function(e){var n=i({},e);return a.default.createElement(r.default,n,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};n.default=l},1334:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1373:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(1322),o=a(t(1320)),i={key:"bubble_basic_data",label:{display:"Bubble set A"},onClick:r.loadBubblePopup,color:o.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};n.default=i},1380:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1320));n.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}},pan:{enabled:!0}}}},1453:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=(t(0),t(813)),p=["components"],c={},s="wrapper";function d(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(s,r()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDataBasic = {\n  key: 'bubble_basic_data',\n  label: {\n    display: 'Bubble set A',\n  },\n  onClick: loadBubblePopup,\n  color: Carbon.helpers.COLORS.PINK,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 70,\n    },\n    {\n      x: new Date(2016, 0, 1, 15, 45).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 30).toISOString(),\n      y: 160,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 180,\n    },\n  ],\n  yAxis: 'y',\n  showShapes: false,\n};\n\nexport default bubbleDataBasic;\n\n")))}d.isMDXComponent=!0},1454:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=(t(0),t(813)),p=["components"],c={},s="wrapper";function d(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(s,r()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}d.isMDXComponent=!0},1756:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(43)),o=a(t(0)),i=a(t(78)),l=a(t(1320)),p=a(t(1321));t(1323);var c,s=a(t(1326)),d=a(t(1380)),u=a(t(1373)),m=p.default.deepClone((0,d.default)("#simpleBubblePanning")),b=p.default.deepClone(u.default),f={initial:0,factor:3};n.default=function(){o.default.useEffect((function(){(c=l.default.api.graph(m)).loadContent(l.default.api.bubbleMultipleDataset(b))}),[]);var e=o.default.useReducer((function(e,n){var t;switch(n.type){case"panLeft":t=e.initial-e.factor;break;case"panRight":t=e.initial+e.factor;break;default:return e}return{initial:t,factor:e.factor}}),f),n=(0,r.default)(e,2),t=n[0],a=n[1];return o.default.useLayoutEffect((function(){c&&(c.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString(),c.reflowMultipleDatasets())}),[t.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(s.default,{id:"simpleBubblePanning"}))}},2100:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=t(0),p=t.n(l),c=t(813),s=t(1756),d=t.n(s),u=["components"],m={};function b(e){var n=e.components,t=i()(e,u);return Object(c.mdx)("wrapper",r()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubblePanning'));\nconst dataset = utils.deepClone(bubbleDataBasic);\n\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst BubblePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"simpleBubblePanning\" />\n    </>\n  );\n};\n\nexport default BubblePanningExample;\n\n")))}b.isMDXComponent=!0;var f=t(1328),g=t.n(f),h=t(1329),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return p.a.createElement(g.a,{title:n||"Simple Panning",description:t,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(h.a,null),exampleSrc:p.a.createElement(b,null),isExpanded:a})},y=t(1454),v=t(1453),w=["components"];t(1331);var _={},E="wrapper";function k(e){var n=e.components,t=i()(e,w);return Object(c.mdx)(E,r()({},_,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-bubble-graph-panning"},"Simple Bubble Graph panning"),Object(c.mdx)("p",null,"This is a bubble graph example that implements panning."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(x,{mdxType:"BubbleSingleDatasetExample"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(y.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(v.a,{mdxType:"DataObject"})))}k.isMDXComponent=!0}}]);