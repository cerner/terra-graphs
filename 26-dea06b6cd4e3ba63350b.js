(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1323:function(e,t,n){"use strict";var a=n(2),r=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(1331)),i=a(n(1325)),s=a(n(1322));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},b=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=s[i],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,s=Object.values(n);i<s.length;i++)l()},f=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){g();var r=f(e).append("g"),o=a.x,l=a.y,i=a.label,s=a.high,p=a.mid,b=a.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(s?c(s.x):p?c(p.x):b?c(b.x):"N/A")),s&&m(r,"High",c(s.y)),p&&m(r,"Mid",c(p.y)),b&&m(r,"Low",c(b.y)))},t.loadBubblePopup=function(e,t,n,a){g();var r=f(e).append("g"),o=a.x,l=a.y,i=a.label,s=a.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",l)),s&&m(r,"".concat(i.display),"".concat(s))},t.loadBarPopup=function(e,t,n,a){g();var r=f(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))},t.loadTextLabelPopup=function(e,t,n){g();var a=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;s.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))},t.loadXAndYAxisLabelPopup=function(e){g(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadY2AxisLabelPopup=function(e){var t,n;g(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)},t.loadTrackPopup=function(e,t,n){g();var a=f(e).append("g"),r=n.tasks,o=n.activities,l=n.events,i=n.actions;if(r&&r.length>0){var s=[];s.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(a,"Tasks",s)}if(o&&o.length>0){var p=[];o.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(a,"Activities",p)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),b(a,"Events",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),b(a,"Actions",c)}},t.loadTaskPopup=function(e,t,n,a){g();var r=f(e).append("g"),o=a.label,l=a.display,i=a.y,s=a.startDate,p=a.endDate,c=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",d(s)),m(r,"End Date",d(p)),c&&m(r,"Percentage",c)},t.loadDatelinePopup=function(e,t){g();var n=f(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",d(r))},t.loadTimelinePopup=function(e,t,n,a){g();var r=f(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),i)},t.loadPiePopup=function(e,t,n,a){g();var r=f(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},1327:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4));n(1328);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;t.default=i},1329:function(e,t,n){"use strict";var a=n(2),r=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(0)),i=a(n(4)),s=a(n(7)),p=n(153),d=a(n(1334)),c=a(n(815)),u=n(57),m=a(n(1335));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var f=s.default.bind(m.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,s=e.isExpanded,m=(0,l.useState)(s),b=(0,o.default)(m,2),g=b[0],h=b[1],v=(0,l.useState)(!1),k=(0,o.default)(v,2),D=k[0],w=k[1],O=l.default.useContext(p.ThemeContext),j=void 0!==a,T=function(){w(!D),g&&h(!g)},_=function(){h(!g),D&&w(!D)},S=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:f("template",O.className)},l.default.createElement("div",{className:f("header")},r&&l.default.createElement("h2",{className:f("title")},r)),l.default.createElement("div",{className:f("content")},i&&l.default.createElement("div",{className:f("description")},i),t),l.default.createElement("div",{className:f("footer")},n?l.default.createElement("div",{className:f("button-container")},j&&l.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":D}),onClick:T,onKeyDown:function(e){return S(e,T)},onBlur:y,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:f("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(c.default,{className:f("chevron")})),l.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":g}),onClick:_,onKeyDown:function(e){return S(e,_)},onBlur:y,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:f("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(c.default,{className:f("chevron")}))):null,l.default.createElement("div",null,D&&l.default.createElement("div",{className:f("css")},a),g&&l.default.createElement("div",{className:f("code")},n))))};h.propTypes=g,h.defaultProps={isExpanded:!1};var v=h;t.default=v},1330:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),o=n(56),l=n.n(o),i=(n(0),n(814)),s=["components"],p={},d="wrapper";function c(e){var t=e.components,n=l()(e,s);return Object(i.mdx)(d,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}c.isMDXComponent=!0},1332:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},1334:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(38));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var s=i;t.default=s},1335:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1339:function(e,t,n){"use strict";n.r(t)},1368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}}},1420:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),o=n(56),l=n.n(o),i=(n(0),n(814)),s=["components"],p={},d="wrapper";function c(e){var t=e.components,n=l()(e,s);return Object(i.mdx)(d,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getGanttDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n});\n\nexport default getGanttDefaultConfig;\n\n\n")))}c.isMDXComponent=!0},1550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1323),r={key:"track 0",trackLabel:{display:"Default",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"default",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}]};t.default=r},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1323),r={key:"track 1",trackLabel:{display:"Hollow only",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"default",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isHollow:!0}}]};t.default=r},1552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"track 2",trackLabel:{display:"Dotted, Hollow"},tasks:[{key:"default",onClick:n(1323).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isDotted:!0,isHollow:!0}}]};t.default=a},1553:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1323),r={key:"track 3",trackLabel:{display:"Percentage",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"percentage",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),percentage:30}]};t.default=r},1554:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1323),r={key:"track 4",trackLabel:{display:"Task Hashed",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"task_hash",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isHashed:!0}}]};t.default=r},1555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"track 5",trackLabel:{display:"Activity",onClick:n(1323).loadXAndYAxisLabelPopup},activities:[{key:"Activity",label:{display:"Story Apex Activity"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}]};t.default=a},1556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"track 6",trackLabel:{display:"Activity Hashed"},activities:[{key:"Hash",label:{display:"Story Apex Activity hash"},color:"#000",startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString(),style:{isHashed:!0}}]};t.default=a},1557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1323),r={key:"track 7",trackLabel:{display:"Activity and Task",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"Task",onClick:a.loadTaskPopup,label:{display:"Story Apex Task"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}],activities:[{key:"Activity and Task",label:{display:"Combination"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,11,1).toISOString()}]};t.default=r},1796:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1321)),l=a(n(1322));n(1324),n(1339);var i=a(n(1327)),s=a(n(1368)),p=a(n(1550)),d=a(n(1551)),c=a(n(1552)),u=a(n(1553)),m=a(n(1554)),b=a(n(1555)),f=a(n(1556)),g=a(n(1557)),y=l.default.deepClone((0,s.default)("#ganttBarType"));y.showActionLegend=!1,y.dateline=[];var x=[p.default,d.default,c.default,u.default,m.default,b.default,f.default,g.default],h=l.default.deepClone(x);t.default=function(){return r.default.useEffect((function(){var e=o.default.api.gantt(y);h.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(i.default,{id:"ganttBarType"})}},2020:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return te}));var a=n(29),r=n.n(a),o=n(56),l=n.n(o),i=n(0),s=n.n(i),p=n(814),d=n(1796),c=n.n(d),u=["components"],m={};function b(e){var t=e.components,n=l()(e,u);return Object(p.mdx)("wrapper",r()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';\nimport barTypesDatset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset1';\nimport barTypesDatset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset2';\nimport barTypesDatset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset3';\nimport barTypesDatset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset4';\nimport barTypesDatset5 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset5';\nimport barTypesDatset6 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset6';\nimport barTypesDatset7 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset7';\nimport barTypesDatset8 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/barTypesDataset8';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttBarType'));\ngraphConfig.showActionLegend = false;\ngraphConfig.dateline = [];\nconst contentArray = [barTypesDatset1, barTypesDatset2, barTypesDatset3, barTypesDatset4, barTypesDatset5, barTypesDatset6, barTypesDatset7, barTypesDatset8];\nconst dataset = utils.deepClone(contentArray);\n\nconst GanttBarTypeExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttBarType\" />\n  );\n};\n\nexport default GanttBarTypeExample;\n\n")))}b.isMDXComponent=!0;var f=n(1329),g=n.n(f),y=n(1330),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return s.a.createElement(g.a,{title:t||"Bar Types",description:n,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(y.a,null),exampleSrc:s.a.createElement(b,null),isExpanded:a})},h=n(1420),v=["components"],k={},D="wrapper";function w(e){var t=e.components,n=l()(e,v);return Object(p.mdx)(D,r()({},k,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset1 = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'default',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n    },\n  ],\n};\n\nexport default barTypesDataset1;\n\n")))}w.isMDXComponent=!0;var O=["components"],j={},T="wrapper";function _(e){var t=e.components,n=l()(e,O);return Object(p.mdx)(T,r()({},j,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset2 = {\n  key: 'track 1',\n  trackLabel: {\n    display: 'Hollow only',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'default',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isHollow: true,\n      },\n    },\n  ],\n};\n\nexport default barTypesDataset2;\n\n")))}_.isMDXComponent=!0;var S=["components"],A={},P="wrapper";function C(e){var t=e.components,n=l()(e,S);return Object(p.mdx)(P,r()({},A,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset3 = {\n  key: 'track 2',\n  trackLabel: {\n    display: 'Dotted, Hollow',\n  },\n  tasks: [\n    {\n      key: 'default',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isDotted: true,\n        isHollow: true,\n      },\n    },\n  ],\n};\n\nexport default barTypesDataset3;\n\n")))}C.isMDXComponent=!0;var E=["components"],L={},N="wrapper";function M(e){var t=e.components,n=l()(e,E);return Object(p.mdx)(N,r()({},L,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset4 = {\n  key: 'track 3',\n  trackLabel: {\n    display: 'Percentage',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'percentage',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      percentage: 30,\n    },\n  ],\n};\n\nexport default barTypesDataset4;\n\n")))}M.isMDXComponent=!0;var I=["components"],X={},G="wrapper";function H(e){var t=e.components,n=l()(e,I);return Object(p.mdx)(G,r()({},X,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset5 = {\n  key: 'track 4',\n  trackLabel: {\n    display: 'Task Hashed',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'task_hash',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isHashed: true,\n      },\n    },\n  ],\n};\n\nexport default barTypesDataset5;\n\n")))}H.isMDXComponent=!0;var Y=["components"],B={},z="wrapper";function F(e){var t=e.components,n=l()(e,Y);return Object(p.mdx)(z,r()({},B,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset6 = {\n  key: 'track 5',\n  trackLabel: {\n    display: 'Activity',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  activities: [\n    {\n      key: 'Activity',\n      label: {\n        display: 'Story Apex Activity',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n    },\n  ],\n};\n\nexport default barTypesDataset6;\n\n")))}F.isMDXComponent=!0;var R=["components"],U={},W="wrapper";function K(e){var t=e.components,n=l()(e,R);return Object(p.mdx)(W,r()({},U,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const barTypesDataset7 = {\n  key: 'track 6',\n  trackLabel: {\n    display: 'Activity Hashed',\n  },\n  activities: [\n    {\n      key: 'Hash',\n      label: {\n        display: 'Story Apex Activity hash',\n      },\n      color: '#000',\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n      style: {\n        isHashed: true,\n      },\n    },\n  ],\n};\n\nexport default barTypesDataset7;\n\n")))}K.isMDXComponent=!0;var q=["components"],J={},V="wrapper";function Z(e){var t=e.components,n=l()(e,q);return Object(p.mdx)(V,r()({},J,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst barTypesDataset8 = {\n  key: 'track 7',\n  trackLabel: {\n    display: 'Activity and Task',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'Task',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex Task',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n    },\n  ],\n  activities: [\n    {\n      key: 'Activity and Task',\n      label: {\n        display: 'Combination',\n      },\n      startDate: new Date(2018, 2, 1).toISOString(),\n      endDate: new Date(2018, 11, 1).toISOString(),\n    },\n  ],\n};\n\nexport default barTypesDataset8;\n\n")))}Z.isMDXComponent=!0;var $=["components"];n(1332);var Q={},ee="wrapper";function te(e){var t=e.components,n=l()(e,$);return Object(p.mdx)(ee,r()({},Q,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(p.mdx)("p",null,"This is a Gantt chart with different bar types."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(x,{mdxType:"GanttChart"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(h.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"default-task-dataset"},"Default Task Dataset"),Object(p.mdx)(w,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"hollow-only-dataset"},"Hollow Only Dataset"),Object(p.mdx)(_,{mdxType:"DataObject2"}),Object(p.mdx)("h4",{id:"dotted-hollow-dataset"},"Dotted, Hollow Dataset"),Object(p.mdx)(C,{mdxType:"DataObject3"}),Object(p.mdx)("h4",{id:"percentage-dataset"},"Percentage Dataset"),Object(p.mdx)(M,{mdxType:"DataObject4"}),Object(p.mdx)("h4",{id:"task-hashed-dataset"},"Task Hashed Dataset"),Object(p.mdx)(H,{mdxType:"DataObject5"}),Object(p.mdx)("h4",{id:"activity-dataset"},"Activity Dataset"),Object(p.mdx)(F,{mdxType:"DataObject6"}),Object(p.mdx)("h4",{id:"activity-hashed-dataset"},"Activity Hashed Dataset"),Object(p.mdx)(K,{mdxType:"DataObject7"}),Object(p.mdx)("h4",{id:"activity-and-task-dataset"},"Activity and Task Dataset"),Object(p.mdx)(Z,{mdxType:"DataObject8"})))}te.isMDXComponent=!0}}]);