(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1322:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(4));t(1323);var o={id:i.default.string.isRequired},l=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=o;var s=l;n.default=s},1324:function(e,n,t){"use strict";var r=t(2),a=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t(43)),o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(t(0)),l=r(t(4)),s=r(t(7)),c=t(154),p=r(t(1328)),d=r(t(810)),u=t(63),m=r(t(1329));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var b=s.default.bind(m.default),g={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var n=e.example,t=e.exampleSrc,r=e.exampleCssSrc,a=e.title,l=e.description,s=e.isExpanded,m=(0,o.useState)(s),f=(0,i.default)(m,2),g=f[0],v=f[1],w=(0,o.useState)(!1),y=(0,i.default)(w,2),E=y[0],_=y[1],j=o.default.useContext(c.ThemeContext),k=void 0!==r,O=function(){_(!E),g&&v(!g)},T=function(){v(!g),E&&_(!E)},C=function(e,n){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),n())};return o.default.createElement("div",{className:b("template",j.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},l&&o.default.createElement("div",{className:b("description")},l),n),o.default.createElement("div",{className:b("footer")},t?o.default.createElement("div",{className:b("button-container")},k&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":E}),onClick:O,onKeyDown:function(e){return C(e,O)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":g}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:h,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:b("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:b("css")},r),g&&o.default.createElement("div",{className:b("code")},t))))};v.propTypes=g,v.defaultProps={isExpanded:!1};var w=v;n.default=w},1325:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(29),a=t.n(r),i=t(56),o=t.n(i),l=(t(0),t(809)),s=["components"],c={},p="wrapper";function d(e){var n=e.components,t=o()(e,s);return Object(l.mdx)(p,a()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}d.isMDXComponent=!0},1326:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function r(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var r=t.offsetHeight;t.open=!0;var a=r!=t.offsetHeight;return document.body.removeChild(t),a}function a(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?r.call(n,t,n,e):r)||(e.exports=a)},1328:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(0)),a=i(t(39));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}var l=function(e){var n=o({},e);return r.default.createElement(a.default,n,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var s=l;n.default=s},1329:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1354:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(29),a=t.n(r),i=t(56),o=t.n(i),l=(t(0),t(809)),s=["components"],c={},p="wrapper";function d(e){var n=e.components,t=o()(e,s);return Object(l.mdx)(p,a()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}d.isMDXComponent=!0},1524:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(1315)),i=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=i},1525:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(1315)),i=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%a %b %e %X %Y"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=i},1526:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:20.7,upperLimit:22.7,suppressTrailingZeros:!0},y:{label:"Line Set A",lowerLimit:.2,upperLimit:3.8,suppressTrailingZeros:!0},y2:{show:!0,label:"Line Set B",lowerLimit:10.2,upperLimit:13.8,suppressTrailingZeros:!0}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,ticksCount:7}};n.default=r},1751:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(1315)),o=r(t(1316));t(1318);var l=r(t(1322)),s=r(t(1524)),c=o.default.deepClone((0,s.default)("#staticXAxisTicks")),p=function(){return a.default.useEffect((function(){i.default.api.graph(c)}),[]),a.default.createElement(l.default,{id:"staticXAxisTicks"})};n.default=p},1752:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(1315)),o=r(t(1316));t(1318);var l=r(t(1322)),s=r(t(1525)),c=o.default.deepClone((0,s.default)("#xAxisTicksFormatted")),p=function(){return a.default.useEffect((function(){i.default.api.graph(c)}),[]),a.default.createElement(l.default,{id:"xAxisTicksFormatted"})};n.default=p},1753:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(1315)),o=r(t(1316));t(1318);var l=r(t(1322)),s=r(t(1526)),c=o.default.deepClone((0,s.default)("#supressTickValue")),p=function(){return a.default.useEffect((function(){i.default.api.graph(c)}),[]),a.default.createElement(l.default,{id:"supressTickValue"})};n.default=p},1997:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return z}));var r=t(29),a=t.n(r),i=t(56),o=t.n(i),l=t(0),s=t.n(l),c=t(809),p=t(1751),d=t.n(p),u=["components"],m={};function f(e){var n=e.components,t=o()(e,u);return Object(c.mdx)("wrapper",a()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfig';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#staticXAxisTicks'));\n\nconst StaticXAxisTicksGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"staticXAxisTicks\" />\n  );\n};\n\nexport default StaticXAxisTicksGeneralExample;\n\n")))}f.isMDXComponent=!0;var b=t(1324),g=t.n(b),h=t(1325),x=function(e){var n=e.title,t=e.description,r=e.isExpanded;return s.a.createElement(g.a,{title:n||"Static X Axis Ticks",description:t,example:s.a.createElement(d.a,null),exampleCssSrc:s.a.createElement(h.a,null),exampleSrc:s.a.createElement(f,null),isExpanded:r})},v=t(1354),w=t(1752),y=t.n(w),E=["components"],_={};function j(e){var n=e.components,t=o()(e,E);return Object(c.mdx)("wrapper",a()({},_,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigTicksFormatted';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#xAxisTicksFormatted'));\n\nconst XAxisTicksFormattedGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"xAxisTicksFormatted\" />\n  );\n};\n\nexport default XAxisTicksFormattedGeneralExample;\n\n")))}j.isMDXComponent=!0;var k=function(e){var n=e.title,t=e.description,r=e.isExpanded;return s.a.createElement(g.a,{title:n||"X Axis Ticks Formatted",description:t,example:s.a.createElement(y.a,null),exampleCssSrc:s.a.createElement(h.a,null),exampleSrc:s.a.createElement(j,null),isExpanded:r})},O=t(1753),T=t.n(O),C=["components"],S={};function L(e){var n=e.components,t=o()(e,C);return Object(c.mdx)("wrapper",a()({},S,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultDecimalAxes';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#supressTickValue'));\n\nconst SupressTickValueGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"supressTickValue\" />\n  );\n};\n\nexport default SupressTickValueGeneralExample;\n\n")))}L.isMDXComponent=!0;var G=function(e){var n=e.title,t=e.description,r=e.isExpanded;return s.a.createElement(g.a,{title:n||"Suppress Tick Value Trailing Zero",description:t,example:s.a.createElement(T.a,null),exampleCssSrc:s.a.createElement(h.a,null),exampleSrc:s.a.createElement(L,null),isExpanded:r})},N=["components"],D={},A="wrapper";function M(e){var n=e.components,t=o()(e,N);return Object(c.mdx)(A,a()({},D,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const getDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      label: 'Data',\n      lowerLimit: 20.7,\n      upperLimit: 22.7,\n      suppressTrailingZeros: true,\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 0.2,\n      upperLimit: 3.8,\n      suppressTrailingZeros: true,\n    },\n    y2: {\n      show: true,\n      label: 'Line Set B',\n      lowerLimit: 10.2,\n      upperLimit: 13.8,\n      suppressTrailingZeros: true,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  ticksCount: 7,\n});\n\nexport default getDefaultConfig;\n\n")))}M.isMDXComponent=!0;var X=["components"];t(1326);var I={},P="wrapper";function z(e){var n=e.components,t=o()(e,X);return Object(c.mdx)(P,a()({},I,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"axis-ticks"},"Axis Ticks"),Object(c.mdx)("p",null,"Axis ticks contains simple graph examples with static x-axis ticks, formatted ticks and suppress tick values trailing zeros."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(x,{mdxType:"StaticXAxisTicksGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data used for static x-axis ticks")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(v.a,{mdxType:"StaticXAxisTicksGraphConfig"})),Object(c.mdx)("br",null),Object(c.mdx)("br",null),Object(c.mdx)("br",null),Object(c.mdx)(k,{mdxType:"XAxisTicksFormattedGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data used for x-axis ticks formatted ")),Object(c.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(c.mdx)(v.a,{mdxType:"XAxisTicksFormattedGraphConfig"})),Object(c.mdx)("br",null),Object(c.mdx)("br",null),Object(c.mdx)("br",null),Object(c.mdx)(G,{mdxType:"SuppressTickValueTrailingZeroGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data used for suppress tick value trailing zero's")),Object(c.mdx)("h3",{id:"graph-config-object-2"},"Graph Config object"),Object(c.mdx)(M,{mdxType:"SuppressTickValueTrailingZeroGraphConfig"})))}z.isMDXComponent=!0}}]);