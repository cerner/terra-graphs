(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1322:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=p(n);if(t&&t.has(e))return t.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(t(1330)),l=a(t(1324)),c=a(t(1321));function p(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(p=function(e){return e?t:n})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),i=function(){var e=c[l],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,c=Object.values(t);l<c.length;l++)i()},g=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},h=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,c=a.high,p=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(l.display),i)):(m(r,"X axis","".concat(c?d(c.x):p?d(p.x):f?d(f.x):"N/A")),c&&m(r,"High",d(c.y)),p&&m(r,"Mid",d(p.y)),f&&m(r,"Low",d(f.y)))},n.loadBubblePopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,c=a.weight;o&&(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"year",i)),c&&m(r,"".concat(l.display),"".concat(c))},n.loadBarPopup=function(e,n,t,a){h();var r=g(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))},n.loadTextLabelPopup=function(e,n,t){h();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,i=n.color;c.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},n.loadXAndYAxisLabelPopup=function(e){h(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadY2AxisLabelPopup=function(e){var n,t;h(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},n.loadTrackPopup=function(e,n,t){h();var a=g(e).append("g"),r=t.tasks,o=t.activities,i=t.events,l=t.actions;if(r&&r.length>0){var c=[];c.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",c)}if(o&&o.length>0){var p=[];o.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",p)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}},n.loadTaskPopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.label,i=a.display,l=a.y,c=a.startDate,p=a.endDate,d=a.percentage;o&&m(r,"Task Name",i),m(r,"Track",l),m(r,"Start Date",s(c)),m(r,"End Date",s(p)),d&&m(r,"Percentage",d)},n.loadDatelinePopup=function(e,n){h();var t=g(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",s(r))},n.loadTimelinePopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(i.display),l)},n.loadPiePopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.label,i=a.value;m(r,o.display,i)}},1326:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1327);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;n.default=l},1328:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(0)),l=a(t(4)),c=a(t(7)),p=t(153),s=a(t(1333)),d=a(t(814)),u=t(57),m=a(t(1334));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var g=c.default.bind(m.default),h={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,c=e.isExpanded,m=(0,i.useState)(c),f=(0,o.default)(m,2),h=f[0],v=f[1],x=(0,i.useState)(!1),k=(0,o.default)(x,2),w=k[0],_=k[1],E=i.default.useContext(p.ThemeContext),O=void 0!==a,D=function(){_(!w),h&&v(!h)},S=function(){v(!h),w&&_(!w)},C=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return i.default.createElement("div",{className:g("template",E.className)},i.default.createElement("div",{className:g("header")},r&&i.default.createElement("h2",{className:g("title")},r)),i.default.createElement("div",{className:g("content")},l&&i.default.createElement("div",{className:g("description")},l),n),i.default.createElement("div",{className:g("footer")},t?i.default.createElement("div",{className:g("button-container")},O&&i.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":w}),onClick:D,onKeyDown:function(e){return C(e,D)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:g("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(d.default,{className:g("chevron")})),i.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":h}),onClick:S,onKeyDown:function(e){return C(e,S)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:g("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(d.default,{className:g("chevron")}))):null,i.default.createElement("div",null,w&&i.default.createElement("div",{className:g("css")},a),h&&i.default.createElement("div",{className:g("code")},t))))};v.propTypes=h,v.defaultProps={isExpanded:!1};var x=v;n.default=x},1329:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=(t(0),t(813)),c=["components"],p={},s="wrapper";function d(e){var n=e.components,t=i()(e,c);return Object(l.mdx)(s,r()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}d.isMDXComponent=!0},1331:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1333:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(37));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}var l=function(e){var n=i({},e);return a.default.createElement(r.default,n,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};n.default=l},1334:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1338:function(e,n,t){"use strict";t.r(n)},1421:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(1322),r=t(1322),o=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,8).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],i=[{key:"uid_action_1",onClick:r.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:r.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],l={key:"track 0",trackLabel:{display:"Default",onClick:a.loadXAndYAxisLabelPopup},tasks:o,actions:i};n.default=l},1574:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1320));n.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},pan:{enabled:!0},showActionLegend:!0,eventline:[{color:r.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,4).toISOString()}],tracks:[{key:"track 1",dimension:{trackHeight:80},trackLabel:{display:"Project A",onClick:function(){}},actions:[{key:"uid_action_1",onClick:function(){},values:[new Date(2018,2,1,6,15).toISOString(),new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,6,15).toISOString()]},{key:"uid_action_2",onClick:function(){},values:[new Date(2018,6,1,6,15).toISOString()]}]}],actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:r.default.helpers.SHAPES.DARK.TRIANGLE,color:r.default.helpers.COLORS.GREEN}]}}},1575:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=(t(0),t(813)),c=["components"],p={},s="wrapper";function d(e){var n=e.components,t=i()(e,c);return Object(l.mdx)(s,r()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { loadPopup } from '../../popup';\n\nconst tasksData = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 8).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\n\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst simplePanningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n};\n\nexport default simplePanningData;\n\n")))}d.isMDXComponent=!0},1807:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(43)),o=a(t(0)),i=a(t(1320)),l=a(t(78)),c=a(t(1321));t(1323),t(1338);var p,s=a(t(1326)),d=a(t(1574)),u=a(t(1421)),m=c.default.deepClone((0,d.default)("#GanttPanningWithDynamicEventline")),f=[c.default.deepClone(u.default)],g={initial:0,factor:3};n.default=function(){o.default.useEffect((function(){p=i.default.api.gantt(m),f.forEach((function(e){p.loadContent(e)}))}),[]);var e=o.default.useReducer((function(e,n){var t;switch(n.type){case"panLeft":t=e.initial-e.factor;break;case"panRight":t=e.initial+e.factor;break;default:return e}return{initial:t,factor:e.factor}}),g),n=(0,r.default)(e,2),t=n[0],a=n[1];return o.default.useLayoutEffect((function(){if(p){p.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),p.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString();var e={eventline:[{color:i.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,6,30).toISOString()}]};p.reflowMultipleDatasets(e)}}),[t.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(s.default,{id:"GanttPanningWithDynamicEventline"}))}},2076:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return S}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),l=t(0),c=t.n(l),p=t(813),s=t(1807),d=t.n(s),u=["components"],m={};function f(e){var n=e.components,t=i()(e,u);return Object(p.mdx)("wrapper",r()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningWithEventlineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanningWithEventline';\nimport graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getGanttPanningWithEventlineConfig('#GanttPanningWithDynamicEventline'));\nconst dataset = [utils.deepClone(graphData)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst GanttPanningWithDynamicEventlineExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newEventline = [\n      {\n        color: Carbon.helpers.COLORS.BLACK,\n        style: {\n          strokeDashArray: '2,2',\n        },\n        value: new Date(2016, 0, 1, 6, 30).toISOString(),\n      },\n    ];\n\n    const newDataset = {\n      eventline: newEventline,\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"GanttPanningWithDynamicEventline\" />\n    </>\n  );\n};\n\nexport default GanttPanningWithDynamicEventlineExample;\n\n")))}f.isMDXComponent=!0;var g=t(1328),h=t.n(g),b=t(1329),y=function(e){var n=e.title,t=e.description,a=e.isExpanded;return c.a.createElement(h.a,{title:n||"Dynamic Eventline",description:t,example:c.a.createElement(d.a,null),exampleCssSrc:c.a.createElement(b.a,null),exampleSrc:c.a.createElement(f,null),isExpanded:a})},v=["components"],x={},k="wrapper";function w(e){var n=e.components,t=i()(e,v);return Object(p.mdx)(k,r()({},x,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getGanttPanningWithEventlineConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  pan: {\n    enabled: true,\n  },\n  showActionLegend: true,\n  eventline: [\n    {\n      color: Carbon.helpers.COLORS.GREY,\n      style: {\n        strokeDashArray: '4,4',\n      },\n      value: new Date(2016, 0, 1, 4).toISOString(),\n    },\n  ],\n  tracks: [\n    {\n      key: 'track 1',\n      dimension: {\n        trackHeight: 80,\n      },\n      trackLabel: {\n        display: 'Project A',\n        onClick: () => {\n          // Call consumer implementation here or NOP\n        },\n      },\n      actions: [\n        {\n          key: 'uid_action_1',\n          onClick: () => {\n          },\n          values: [\n            new Date(2018, 2, 1, 6, 15).toISOString(),\n            new Date(2018, 3, 1, 6, 15).toISOString(),\n            new Date(2018, 4, 1, 6, 15).toISOString(),\n          ],\n        },\n        {\n          key: 'uid_action_2',\n          onClick: () => {\n          },\n          values: [new Date(2018, 6, 1, 6, 15).toISOString()],\n        },\n      ],\n    },\n  ],\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n});\n\nexport default getGanttPanningWithEventlineConfig;\n\n\n")))}w.isMDXComponent=!0;var _=t(1575),E=["components"];t(1331);var O={},D="wrapper";function S(e){var n=e.components,t=i()(e,E);return Object(p.mdx)(D,r()({},O,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"gantt-chart-panning---dynamic-eventline"},"Gantt chart panning - dynamic eventline"),Object(p.mdx)("p",null,"This is a simple Gantt chart example that implements panning with a dynamic eventline."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(y,{mdxType:"GanttChart"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(w,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(_.a,{mdxType:"DataObject"})))}S.isMDXComponent=!0}}]);