(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1275:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(1283)),l=a(t(1277)),p=a(t(1274));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},g=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(t);l<p.length;l++)i()},f=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},b=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){b();var r=f(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,g=a.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),i)):(m(r,"X axis","".concat(p?c(p.x):s?c(s.x):g?c(g.x):"N/A")),p&&m(r,"High",c(p.y)),s&&m(r,"Mid",c(s.y)),g&&m(r,"Low",c(g.y)))};n.loadBubblePopup=function(e,n,t,a){b();var r=f(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",i)),p&&m(r,"".concat(l.display),"".concat(p))};n.loadBarPopup=function(e,n,t,a){b();var r=f(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};n.loadTextLabelPopup=function(e,n,t){b();var a=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,i=n.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};n.loadXAndYAxisLabelPopup=function(e){b(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadY2AxisLabelPopup=function(e){var n,t;b(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadTrackPopup=function(e,n,t){b();var a=f(e).append("g"),r=t.tasks,o=t.activities,i=t.events,l=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),g(a,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),g(a,"Activities",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),g(a,"Events",d)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),g(a,"Actions",c)}};n.loadTaskPopup=function(e,n,t,a){b();var r=f(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,c=a.percentage;o&&m(r,"Task Name",i),m(r,"Track",l),m(r,"Start Date",d(p)),m(r,"End Date",d(s)),c&&m(r,"Percentage",c)};n.loadDatelinePopup=function(e,n){b();var t=f(e).append("g"),a=n.label,r=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",d(r))};n.loadTimelinePopup=function(e,n,t,a){b();var r=f(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(i.display),l)};n.loadPiePopup=function(e,n,t,a){b();var r=f(e).append("g"),o=a.label,i=a.value;m(r,o.display,i)}},1278:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1280);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var p=l;n.default=p},1279:function(e,n,t){"use strict";t.r(n)},1281:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=g(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(0)),l=a(t(4)),p=a(t(7)),s=t(153),d=a(t(1286)),c=a(t(789)),u=t(62),m=a(t(1287));function g(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(g=function(e){return e?t:n})(e)}var f=p.default.bind(m.default),b={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,p=e.isExpanded,m=(0,i.useState)(p),g=(0,o.default)(m,2),b=g[0],y=g[1],v=(0,i.useState)(!1),w=(0,o.default)(v,2),O=w[0],E=w[1],_=i.default.useContext(s.ThemeContext),S=void 0!==a,C=function(){E(!O),b&&y(!b)},k=function(){y(!b),O&&E(!O)},j=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return i.default.createElement("div",{className:f("template",_.className)},i.default.createElement("div",{className:f("header")},r&&i.default.createElement("h2",{className:f("title")},r)),i.default.createElement("div",{className:f("content")},l&&i.default.createElement("div",{className:f("description")},l),n),i.default.createElement("div",{className:f("footer")},t?i.default.createElement("div",{className:f("button-container")},S&&i.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":O}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:f("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(c.default,{className:f("chevron")})),i.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return j(e,k)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:f("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(c.default,{className:f("chevron")}))):null,i.default.createElement("div",null,O&&i.default.createElement("div",{className:f("css")},a),b&&i.default.createElement("div",{className:f("code")},t))))};y.propTypes=b,y.defaultProps={isExpanded:!1};var v=y;n.default=v},1282:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=(t(0),t(788)),p=["components"],s={},d="wrapper";function c(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(d,r()({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}c.isMDXComponent=!0},1284:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1286:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(39));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}var l=function(e){var n=i({},e);return a.default.createElement(r.default,n,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var p=l;n.default=p},1287:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1312:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=(t(0),t(788)),p=["components"],s={},d="wrapper";function c(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(d,r()({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1320:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1273)),o=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=o},1553:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1273)),o=t(1275),i={key:"uid_7",label:{display:"Data Label 7"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:o.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5,isCritical:!1,region:{start:3,end:8,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,2,15).toISOString(),y:11,region:{start:4,end:14,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,3,15).toISOString(),y:12,region:{start:5,end:15,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,4,15).toISOString(),y:16,region:{start:10,end:20,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,5,15).toISOString(),y:17,region:{start:10,end:20,color:r.default.helpers.COLORS.GREY}},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11,region:{start:8,end:15}},{x:new Date(2016,0,1,8,15).toISOString(),y:12,region:{start:8,end:15}},{x:new Date(2016,0,1,9,45).toISOString(),y:16,region:{start:10,end:20}},{x:new Date(2016,0,1,12,15).toISOString(),y:17,region:{start:10,end:20}},{x:new Date(2016,0,1,13,15).toISOString(),y:28,region:{start:10,end:20},isCritical:!0},{x:new Date(2016,0,1,14,15).toISOString(),y:12,region:{start:8,end:15}},{x:new Date(2016,0,1,19,45).toISOString(),y:13,region:{start:9,end:16}},{x:new Date(2016,0,1,21,15).toISOString(),y:14,region:{start:9,end:16,color:r.default.helpers.COLORS.GREY}}]};n.default=i},1789:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(1273)),i=a(t(1274));t(1276),t(1279);var l=a(t(1278)),p=a(t(1320)),s=a(t(1553)),d=i.default.deepClone((0,p.default)("#valueRegion")),c=i.default.deepClone(s.default),u=function(){return r.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),r.default.createElement(l.default,{id:"valueRegion"})};n.default=u},2031:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=t(0),p=t.n(l),s=t(788),d=t(1789),c=t.n(d),u=["components"],m={};function g(e){var n=e.components,t=i()(e,u);return Object(s.mdx)("wrapper",r()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions7';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineTimeseriesConfig('#valueRegion'));\nconst dataset = utils.deepClone(exampleData);\n\nconst ValueRegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"valueRegion\" />\n  );\n};\n\nexport default ValueRegionLineExample;\n\n\n")))}g.isMDXComponent=!0;var f=t(1281),b=t.n(f),h=t(1282),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:n||"Value Region",description:t,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(h.a,null),exampleSrc:p.a.createElement(g,null),isExpanded:a})},y=t(1312),v=["components"],w={},O="wrapper";function E(e){var n=e.components,t=i()(e,v);return Object(s.mdx)(O,r()({},w,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_7',\n  label: {\n    display: 'Data Label 7',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  onClick: loadPopup,\n  yAxis: 'y',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 5,\n      isCritical: false,\n      region: {\n        start: 3,\n        end: 8,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 11,\n      region: {\n        start: 4,\n        end: 14,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: 12,\n      region: {\n        start: 5,\n        end: 15,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n      region: {\n        start: 10,\n        end: 20,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n      region: {\n        start: 10,\n        end: 20,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 9,\n    },\n    {\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\n      y: 11,\n      region: {\n        start: 8,\n        end: 15,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      y: 12,\n      region: {\n        start: 8,\n        end: 15,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n      region: {\n        start: 10,\n        end: 20,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n      region: {\n        start: 10,\n        end: 20,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n      region: {\n        start: 10,\n        end: 20,\n      },\n      isCritical: true,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 12,\n      region: {\n        start: 8,\n        end: 15,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 13,\n      region: {\n        start: 9,\n        end: 16,\n      },\n    },\n    {\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\n      y: 14,\n      region: {\n        start: 9,\n        end: 16,\n        color: Carbon.helpers.COLORS.GREY,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var _=["components"];t(1284);var S={},C="wrapper";function k(e){var n=e.components,t=i()(e,_);return Object(s.mdx)(C,r()({},S,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"value-region"},"Value region"),Object(s.mdx)("p",null,"This is timeseries line graph with value based region."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(E,{mdxType:"DataObject"})))}k.isMDXComponent=!0}}]);