(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1275:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(1283)),l=a(t(1277)),p=a(t(1274));function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}var c=function(e){return new Date(e).toLocaleString()},s=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(t);l<p.length;l++)i()},g=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},h=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,d=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?c(o):o)),m(r,"".concat(l.display),i)):(m(r,"X axis","".concat(p?s(p.x):d?s(d.x):f?s(f.x):"N/A")),p&&m(r,"High",s(p.y)),d&&m(r,"Mid",s(d.y)),f&&m(r,"Low",s(f.y)))};n.loadBubblePopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?c(o):o)),m(r,"year",i)),p&&m(r,"".concat(l.display),"".concat(p))};n.loadBarPopup=function(e,n,t,a){h();var r=g(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};n.loadTextLabelPopup=function(e,n,t){h();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,i=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};n.loadXAndYAxisLabelPopup=function(e){h(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadY2AxisLabelPopup=function(e){var n,t;h(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadTrackPopup=function(e,n,t){h();var a=g(e).append("g"),r=t.tasks,o=t.activities,i=t.events,l=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var d=[];o.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",s)}};n.loadTaskPopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,d=a.endDate,s=a.percentage;o&&m(r,"Task Name",i),m(r,"Track",l),m(r,"Start Date",c(p)),m(r,"End Date",c(d)),s&&m(r,"Percentage",s)};n.loadDatelinePopup=function(e,n){h();var t=g(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",c(r))};n.loadTimelinePopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;m(r,"X axis","".concat(u(o)?c(o):o)),m(r,"".concat(i.display),l)};n.loadPiePopup=function(e,n,t,a){h();var r=g(e).append("g"),o=a.label,i=a.value;m(r,o.display,i)}},1279:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1280);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var p=l;n.default=p},1281:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(0)),l=a(t(4)),p=a(t(7)),d=t(153),c=a(t(1286)),s=a(t(789)),u=t(62),m=a(t(1287));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var g=p.default.bind(m.default),h={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,p=e.isExpanded,m=(0,i.useState)(p),f=(0,o.default)(m,2),h=f[0],y=f[1],v=(0,i.useState)(!1),w=(0,o.default)(v,2),_=w[0],E=w[1],O=i.default.useContext(d.ThemeContext),k=void 0!==a,T=function(){E(!_),h&&y(!h)},P=function(){y(!h),_&&E(!_)},j=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return i.default.createElement("div",{className:g("template",O.className)},i.default.createElement("div",{className:g("header")},r&&i.default.createElement("h2",{className:g("title")},r)),i.default.createElement("div",{className:g("content")},l&&i.default.createElement("div",{className:g("description")},l),n),i.default.createElement("div",{className:g("footer")},t?i.default.createElement("div",{className:g("button-container")},k&&i.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:g("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(s.default,{className:g("chevron")})),i.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":h}),onClick:P,onKeyDown:function(e){return j(e,P)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:g("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(s.default,{className:g("chevron")}))):null,i.default.createElement("div",null,_&&i.default.createElement("div",{className:g("css")},a),h&&i.default.createElement("div",{className:g("code")},t))))};y.propTypes=h,y.defaultProps={isExpanded:!1};var v=y;n.default=v},1282:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=(t(0),t(788)),p=["components"],d={},c="wrapper";function s(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(c,r()({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}s.isMDXComponent=!0},1284:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1286:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(39));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}var l=function(e){var n=i({},e);return a.default.createElement(r.default,n,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var p=l;n.default=p},1287:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1289:function(e,n,t){"use strict";t.r(n)},1382:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1273)),o=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};n.default=o},1564:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1273)),o={key:"dynamic_panning_dataset",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},onClick:t(1275).loadPopup,shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},values:[{high:{x:"2016-01-02T00:30:00.000Z",y:150},mid:{x:"2016-01-02T00:30:00.000Z",y:40},low:{x:"2016-01-02T00:30:00.000Z",y:10}},{high:{x:"2016-01-02T05:30:00.000Z",y:110},mid:{x:"2016-01-02T05:30:00.000Z",y:70},low:{x:"2016-01-02T05:30:00.000Z",y:30}}]};n.default=o},1565:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={key:"dynamic_panning_dataset",values:[{high:{x:"2016-01-02T00:30:00.000Z",y:160},mid:{x:"2016-01-02T00:30:00.000Z",y:40},low:{x:"2016-01-02T00:30:00.000Z",y:10}},{high:{x:"2016-01-02T03:30:00.000Z",y:100},mid:{x:"2016-01-02T03:30:00.000Z",y:30},low:{x:"2016-01-02T03:30:00.000Z",y:10}},{high:{x:"2016-01-02T05:30:00.000Z",y:100},mid:{x:"2016-01-02T05:30:00.000Z",y:70},low:{x:"2016-01-02T05:30:00.000Z",y:30}}]};n.default=a},1566:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=(t(0),t(788)),p=["components"],d={},c="wrapper";function s(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(c,r()({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesPanningConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      ticks: {},\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesPanningConfig;\n\n")))}s.isMDXComponent=!0},1798:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(43)),o=a(t(0)),i=a(t(78)),l=a(t(1273)),p=a(t(1274));t(1276),t(1289);var d,c=a(t(1279)),s=a(t(1382)),u=a(t(1564)),m=a(t(1565)),f=[p.default.deepClone(u.default)],g=p.default.deepClone((0,s.default)("#PairedResultDynamicData")),h={initial:0,factor:3},b=function(){o.default.useEffect((function(){d=l.default.api.graph(g),f.forEach((function(e){d.loadContent(l.default.api.pairedResult(e))}))}),[]);var e=o.default.useReducer((function(e,n){var t;switch(n.type){case"panLeft":t=e.initial-e.factor;break;case"panRight":t=e.initial+e.factor;break;default:return e}return{initial:t,factor:e.factor}}),h),n=(0,r.default)(e,2),t=n[0],a=n[1];return o.default.useLayoutEffect((function(){if(d){d.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),d.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString();var e={panData:[p.default.deepClone(m.default)]};d.reflowMultipleDatasets(e)}}),[t.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(c.default,{id:"PairedResultDynamicData"}))};n.default=b},2006:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return L}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=t(0),p=t.n(l),d=t(788),c=t(1798),s=t.n(c),u=["components"],m={};function f(e){var n=e.components,t=i()(e,u);return Object(d.mdx)("wrapper",r()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst dataset = [utils.deepClone(dataset1)];\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesPanningConfig('#PairedResultDynamicData'));\n\nconst state = {\n  initial: 0,\n  factor: 3,\n};\nlet graph;\n\nconst PairedResultDynamicDataPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(dataset2)],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"PairedResultDynamicData\" />\n    </>\n  );\n};\n\nexport default PairedResultDynamicDataPanningExample;\n\n")))}f.isMDXComponent=!0;var g=t(1281),h=t.n(g),b=t(1282),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return p.a.createElement(h.a,{title:n||"Dynamic Data",description:t,example:p.a.createElement(s.a,null),exampleCssSrc:p.a.createElement(b.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},y=t(1566),v=["components"],w={},_="wrapper";function E(e){var n=e.components,t=i()(e,v);return Object(d.mdx)(_,r()({},w,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dynamic_panning_dataset',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  onClick: loadPopup,\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  values: [\n    {\n      high: {\n        x: '2016-01-02T00:30:00.000Z',\n        y: 150,\n      },\n      mid: {\n        x: '2016-01-02T00:30:00.000Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-01-02T00:30:00.000Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2016-01-02T05:30:00.000Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-01-02T05:30:00.000Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-01-02T05:30:00.000Z',\n        y: 30,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var O=["components"],k={},T="wrapper";function P(e){var n=e.components,t=i()(e,O);return Object(d.mdx)(T,r()({},k,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"const data = {\n  key: 'dynamic_panning_dataset',\n  values: [\n    {\n      high: {\n        x: '2016-01-02T00:30:00.000Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-01-02T00:30:00.000Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-01-02T00:30:00.000Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2016-01-02T03:30:00.000Z',\n        y: 100,\n      },\n      mid: {\n        x: '2016-01-02T03:30:00.000Z',\n        y: 30,\n      },\n      low: {\n        x: '2016-01-02T03:30:00.000Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2016-01-02T05:30:00.000Z',\n        y: 100,\n      },\n      mid: {\n        x: '2016-01-02T05:30:00.000Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-01-02T05:30:00.000Z',\n        y: 30,\n      },\n    },\n  ],\n};\nexport default data;\n\n")))}P.isMDXComponent=!0;var j=["components"];t(1284);var D={},C="wrapper";function L(e){var n=e.components,t=i()(e,j);return Object(d.mdx)(C,r()({},D,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"paired-result-graph-panning---dynamic-data"},"Paired Result graph panning - dynamic data"),Object(d.mdx)("p",null,"This is a paired result graph example that implements panning with dynamic data."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(d.mdx)("h2",{id:"example"},"Example"),Object(d.mdx)(x,{mdxType:"PairedResultGraphPanning"}),Object(d.mdx)("details",null,Object(d.mdx)("summary",{style:{fontSize:24}},Object(d.mdx)("b",null,"Data")),Object(d.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(d.mdx)(y.a,{mdxType:"GraphConfig"}),Object(d.mdx)("h3",{id:"data-object"},"Data object"),Object(d.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(d.mdx)(E,{mdxType:"DataObject1"}),Object(d.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(d.mdx)(P,{mdxType:"DataObject2"})))}L.isMDXComponent=!0}}]);