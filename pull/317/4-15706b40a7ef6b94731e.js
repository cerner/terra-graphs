(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1317:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=a(t(43)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=p(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(t(1320)),i=a(t(1319)),c=a(t(1316));function p(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(p=function(e){return e?t:n})(e)}var d=function(e){return new Date(e).toLocaleString()},s=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var r=a.append("g").classed("section",!0),l=function(){var e=c[i],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),a=t[0],r=t[1],l=n.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,c=Object.values(t);i<c.length;i++)l()},g=function(e,n){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(n.pageX+5,"px")).style("top","".concat(n.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g"),i=a.x,c=a.y,p=a.label,m=a.high,h=a.mid,v=a.low;i?(f(l,"X axis","".concat(u(i)?d(i):i)),f(l,"".concat(p.display),c)):(f(l,"X axis","".concat(m?s(m.x):h?s(h.x):v?s(v.x):"N/A")),m&&f(l,"High",s(m.y)),h&&f(l,"Mid",s(h.y)),v&&f(l,"Low",s(v.y)))};n.loadBubblePopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g"),i=a.x,c=a.y,p=a.label,s=a.weight;i&&(f(l,"X axis","".concat(u(i)?d(i):i)),f(l,"year",c)),s&&f(l,"".concat(p.display),"".concat(s))};n.loadBarPopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g");a.forEach((function(e){return f(l,"".concat(e.label.display),"".concat(e.y))}))};n.loadTextLabelPopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),p=n.shape,d=n.label,s=n.color;c.default.notEmpty(p)&&l.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",p.options.scale,")")).attr("d",p.path.d).attr("fill",p.path.fill||i.default.DEFAULT_COLOR).attr("id",p.path.id),d.display&&l.append("text").classed("popup-text",!0).attr("style","color: ".concat(s,";")).text("".concat(d.display)),d.secondaryDisplay&&l.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(d.secondaryDisplay))};n.loadXAndYAxisLabelPopup=function(e,n,t){b(),g(void 0,t).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadY2AxisLabelPopup=function(e,n,t){b();var a=function(e,n){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(n.pageX-250,"px")).style("top","".concat(n.pageY+5,"px"))}(void 0,t);a.append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadTrackPopup=function(e,n,t,a,r){b();var o=g(e,r).append("g"),l=t.tasks,i=t.activities,c=t.events,p=t.actions;if(l&&l.length>0){var d=[];d.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(o,"Tasks",d)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(o,"Activities",s)}if(c&&c.length>0){var u=[];c.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(o,"Events",u)}if(p&&p.length>0){var f=[];p.forEach((function(e){f.push({name:e.key,values:e.values.join(", ")})})),m(o,"Actions",f)}};n.loadTaskPopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g"),i=a.label,c=a.display,p=a.y,s=a.startDate,u=a.endDate,m=a.percentage;i&&f(l,"Task Name",c),f(l,"Track",p),f(l,"Start Date",d(s)),f(l,"End Date",d(u)),m&&f(l,"Percentage",m)};n.loadDatelinePopup=function(e,n,t,a){b();var r=g(e,a).append("g"),o=n.label,l=n.value;o&&f(r,"Milestone",o.display),f(r,"Date",d(l))};n.loadTimelinePopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g"),i=a.x,c=(a.y,a.label),p=a.content;f(l,"X axis","".concat(u(i)?d(i):i)),f(l,"".concat(c.display),p)};n.loadPiePopup=function(e,n,t,a,r,o){b();var l=g(e,o).append("g"),i=a.label,c=a.value;f(l,i.display,c)}},1322:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1323);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var c=i;n.default=c},1324:function(e,n,t){"use strict";var a=t(2),r=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(43)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=m(n);if(t&&t.has(e))return t.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(t(0)),i=a(t(4)),c=a(t(7)),p=t(154),d=a(t(1328)),s=a(t(810)),u=t(63),f=a(t(1329));function m(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(m=function(e){return e?t:n})(e)}var g=c.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var n=e.example,t=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,c=e.isExpanded,f=(0,l.useState)(c),m=(0,o.default)(f,2),b=m[0],y=m[1],x=(0,l.useState)(!1),k=(0,o.default)(x,2),w=k[0],_=k[1],E=l.default.useContext(p.ThemeContext),P=void 0!==a,T=function(){_(!w),b&&y(!b)},j=function(){y(!b),w&&_(!w)},O=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return l.default.createElement("div",{className:g("template",E.className)},l.default.createElement("div",{className:g("header")},r&&l.default.createElement("h2",{className:g("title")},r)),l.default.createElement("div",{className:g("content")},i&&l.default.createElement("div",{className:g("description")},i),n),l.default.createElement("div",{className:g("footer")},t?l.default.createElement("div",{className:g("button-container")},P&&l.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":w}),onClick:T,onKeyDown:function(e){return O(e,T)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:g("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(s.default,{className:g("chevron")})),l.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":b}),onClick:j,onKeyDown:function(e){return O(e,j)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(d.default,{className:g("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(s.default,{className:g("chevron")}))):null,l.default.createElement("div",null,w&&l.default.createElement("div",{className:g("css")},a),b&&l.default.createElement("div",{className:g("code")},t))))};y.propTypes=b,y.defaultProps={isExpanded:!1};var x=y;n.default=x},1325:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(29),r=t.n(a),o=t(56),l=t.n(o),i=(t(0),t(809)),c=["components"],p={},d="wrapper";function s(e){var n=e.components,t=l()(e,c);return Object(i.mdx)(d,r()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}s.isMDXComponent=!0},1326:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1328:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t(0)),r=o(t(39));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}var i=function(e){var n=l({},e);return a.default.createElement(r.default,n,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=i;n.default=c},1329:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1333:function(e,n,t){"use strict";t.r(n)},1347:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(1317);function r(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw l}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var l=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=[],p=r(Array(arguments.length>4&&void 0!==arguments[4]?arguments[4]:1).keys());try{for(p.s();!(e=p.n()).done;){var d=e.value,s={key:"track ".concat(d),onClick:i?a.loadTrackPopup:void 0,trackLabel:{display:"Project ".concat(String.fromCharCode(65+d)),onClick:a.loadXAndYAxisLabelPopup},tasks:n[d]?n[d]:{},activities:t[d]?t[d]:{},events:o[d]?o[d]:{},actions:l[d]?l[d]:{}};c.push(s)}}catch(e){p.e(e)}finally{p.f()}return c};n.default=l},1410:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(29),r=t.n(a),o=t(56),l=t.n(o),i=(t(0),t(809)),c=["components"],p={},d="wrapper";function s(e){var n=e.components,t=l()(e,c);return Object(i.mdx)(d,r()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},'import {\n  loadTrackPopup,\n  loadXAndYAxisLabelPopup,\n} from \'@cerner/terra-graphs-docs/lib/example-datasets/popup\';\n\nconst loadTracks = (\n  tasks = [],\n  activities = [],\n  events = [],\n  actions = [],\n  totalTracks = 1,\n  isTrackSelectable = false,\n) => {\n  const dataObjects = [];\n  // eslint-disable-next-line no-restricted-syntax\n  for (const each of Array(totalTracks).keys()) {\n    const data = {\n      key: `track ${each}`,\n      onClick: isTrackSelectable ? loadTrackPopup : undefined,\n      trackLabel: {\n        display: `Project ${String.fromCharCode(65 + each)}`,\n        onClick: loadXAndYAxisLabelPopup,\n      },\n      tasks: tasks[each] ? tasks[each] : {},\n      activities: activities[each] ? activities[each] : {},\n      events: events[each] ? events[each] : {},\n      actions: actions[each] ? actions[each] : {},\n    };\n    dataObjects.push(data);\n  }\n  return dataObjects;\n  /* gantt.unloadContent({\n        key: "track 3",\n        trackLabel: {\n            display: "Project C"\n        }\n    }); */\n};\n\nexport default loadTracks;\n\n')))}s.isMDXComponent=!0}}]);