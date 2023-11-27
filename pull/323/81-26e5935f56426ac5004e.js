(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1326:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),o=r(t(4));t(1327);var i={id:o.default.string.isRequired},l=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;n.default=l},1328:function(e,n,t){"use strict";var r=t(2),a=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=b(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(t(0)),l=r(t(4)),d=r(t(7)),c=t(153),s=r(t(1333)),p=r(t(814)),m=t(57),u=r(t(1334));function b(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:n})(e)}var g=d.default.bind(u.default),h={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var n=e.example,t=e.exampleSrc,r=e.exampleCssSrc,a=e.title,l=e.description,d=e.isExpanded,u=(0,i.useState)(d),b=(0,o.default)(u,2),h=b[0],w=b[1],v=(0,i.useState)(!1),y=(0,o.default)(v,2),_=y[0],O=y[1],E=i.default.useContext(c.ThemeContext),S=void 0!==r,k=function(){O(!_),h&&w(!h)},j=function(){w(!h),_&&O(!_)},L=function(e,n){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),n())};return i.default.createElement("div",{className:g("template",E.className)},i.default.createElement("div",{className:g("header")},a&&i.default.createElement("h2",{className:g("title")},a)),i.default.createElement("div",{className:g("content")},l&&i.default.createElement("div",{className:g("description")},l),n),i.default.createElement("div",{className:g("footer")},t?i.default.createElement("div",{className:g("button-container")},S&&i.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":_}),onClick:k,onKeyDown:function(e){return L(e,k)},onBlur:f,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:g("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(p.default,{className:g("chevron")})),i.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return L(e,j)},onBlur:f,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:g("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(p.default,{className:g("chevron")}))):null,i.default.createElement("div",null,_&&i.default.createElement("div",{className:g("css")},r),h&&i.default.createElement("div",{className:g("code")},t))))};w.propTypes=h,w.defaultProps={isExpanded:!1};var v=w;n.default=v},1329:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t(29),a=t.n(r),o=t(56),i=t.n(o),l=(t(0),t(813)),d=["components"],c={},s="wrapper";function p(e){var n=e.components,t=i()(e,d);return Object(l.mdx)(s,a()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import 'Variables.module';\n@import 'colors.module';\n\n.carbon-svg-icon {\n  display: inline-block;\n  height: 0.625rem;\n  width: 0.625rem;\n}\n\n.carbon-graph-container {\n  color: var(--terra-graphs-dark);\n  display: block;\n  padding-bottom: 0.8333rem;\n  padding-top: 0.8333rem;\n  width: 100%;\n\n  svg:not(:root) {\n    overflow: hidden;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  }\n}\n\n.carbon-graph-canvas {\n  @include terra-graph-font-smooth();\n  box-sizing: border-box;\n  display: block;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.carbon-axis path.domain,\n.carbon-axis line {\n  fill: none;\n  stroke: var(--terra-graphs-grey30);\n}\n\n.carbon-grid line,\n.carbon-content-container {\n  @include terra-graph-carbon-shape-rendering();\n}\n\n.carbon-axis-x,\n.carbon-axis-y,\n.carbon-axis-y2,\n.carbon-axis-info-row {\n  &[aria-hidden='true'] {\n    display: none;\n  }\n}\n\n.carbon-axis {\n  &.carbon-axis-reference-line {\n    stroke: var(--terra-graphs-grey30);\n    stroke-width: 2px;\n  }\n}\n\n.carbon-grid {\n  > * .domain[stroke] {\n    stroke: var(--terra-graphs-grey10);\n  }\n\n  line {\n    stroke: var(--terra-graphs-grey10);\n  }\n}\n\n.carbon-lower-step-grid line {\n  stroke: #9b9b9b;\n  stroke-width: 1px;\n}\n\n.carbon-midpoint-grid line {\n  stroke: var(--terra-graphs-grey10);\n  stroke-width: 1px;\n}\n\n.carbon-upper-step-grid line {\n  stroke: var(--terra-graphs-grey30);\n  stroke-width: 3px;\n}\n\n.carbon-no-data-text {\n  fill: var(--terra-graphs-dark);\n}\n\n.carbon-legend {\n  align-content: center;\n  display: flex;\n  flex: 1 1 100%;\n  flex-flow: row wrap;\n  justify-content: center;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  .carbon-legend-item {\n    align-items: center;\n    display: flex;\n    margin: 0.5rem;\n    outline: 0;\n    user-select: none;\n\n    .carbon-legend-item-btn {\n      align-content: center;\n      align-self: flex-start;\n      background-color: var(--terra-graphs-grey15);\n      border: 0;\n      border-radius: 0.25rem;\n      flex-shrink: 0;\n      font-size: inherit;\n      height: 1.875rem;\n      margin-right: 0.5rem;\n      padding: 0;\n      width: 2.1875rem;\n    }\n\n    .carbon-legend-item-text {\n      word-wrap: break-word;\n    }\n\n    &[aria-disabled='false'] {\n      cursor: pointer;\n\n      &:hover {\n        background-color: var(--terra-graphs-blue10);\n      }\n\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        cursor: pointer;\n      }\n    }\n\n    &[aria-disabled='true'] {\n      .carbon-legend-item-btn,\n      .carbon-legend-item-text {\n        outline: none;\n      }\n\n      .carbon-legend-item-btn {\n        opacity: 0.35;\n      }\n\n      .carbon-legend-item-text {\n        color: var(--terra-graphs-grey30);\n      }\n    }\n\n    // refers to the icon itself IF there is no line next to it\n    .carbon-legend-item-icon {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    // refers to the icon IF there is a line next to it\n    .carbon-legend-item-icon-with-line {\n      display: block;\n      height: 0.857rem;\n      stroke: var(--terra-graphs-white);\n      stroke-width: 5px;\n      width: 0.857rem;\n    }\n\n    .carbon-legend-item-span {\n      align-items: center;\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n    }\n\n    // refers to the line itself IF there is no icon next to it\n    .carbon-legend-item-line {\n      height: 5px;\n      padding-top: 1px;\n      width: 28px;\n    }\n\n    // refers to the line IF there is an icon next to it\n    .carbon-legend-item-line-with-icon {\n      height: 5px;\n      padding-top: 1px;\n      width: 18px;\n    }\n\n    .carbon-legend-white-line {\n      stroke: var(--terra-graphs-white);\n      stroke-width: 6px;\n    }\n  }\n\n  .carbon-legend-item[aria-current='false'] {\n    .carbon-legend-item-btn {\n      background-color: var(--terra-graphs-white);\n      border-color: var(--terra-graphs-grey15);\n      border-style: solid;\n      border-width: 1px;\n    }\n\n    .carbon-legend-item-text {\n      color: var(--terra-graphs-grey65);\n    }\n  }\n}\n\n.carbon-blur {\n  @include terra-graph-basic-transition(\n    opacity,\n    var(--default-transition-duration),\n    var(--default-transition-timing)\n  );\n  opacity: 0.2;\n}\n\n.carbon-point {\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-selected-data-point {\n  display: block;\n  fill: var(--terra-graphs-blue10);\n  fill-opacity: 0.25;\n  stroke: var(--terra-graphs-blue30);\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  path {\n    stroke-width: 1px;\n  }\n}\n\n.carbon-criticality-outer,\n.carbon-criticality-inner {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-criticality-outer {\n  fill: var(--terra-graphs-red85);\n  stroke: var(--terra-graphs-red85);\n  stroke-width: 24px;\n}\n\n.carbon-criticality-inner {\n  fill: var(--terra-graphs-white);\n  stroke: var(--terra-graphs-white);\n  stroke-width: 8px;\n}\n\n.carbon-region {\n  fill: var(--terra-graphs-grey5);\n\n  &[aria-hidden='true'],\n  &.carbon-region-blur {\n    @include terra-graph-opacity-hide();\n  }\n\n  &.carbon-value-region {\n    stroke: var(--terra-graphs-grey5);\n    stroke-width: 0.625rem;\n  }\n\n  &.carbon-region-highlight {\n    @include terra-graph-opacity-show();\n  }\n}\n\n.carbon-content-container {\n  fill: none;\n  stroke: var(--terra-graphs-grey10);\n}\n\n.carbon-data-completion-bar,\n.carbon-data-bar {\n  @include terra-graph-carbon-shape-rendering();\n  stroke-width: 0;\n  user-select: none;\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n}\n\n.carbon-axis-info-row-item {\n  &[aria-hidden='true'] {\n    @include terra-graph-opacity-hide();\n  }\n\n  &[aria-disabled='false'] {\n    cursor: pointer;\n  }\n}\n\n.carbon-dateline-group {\n  .carbon-dateline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 0.3;\n    stroke-width: 3px;\n  }\n\n  .carbon-dateline-point {\n    &[aria-disabled='false'] {\n      cursor: pointer;\n    }\n\n    &[aria-hidden='true'] {\n      @include terra-graph-opacity-hide();\n    }\n  }\n}\n\n.carbon-eventline-group {\n  .carbon-eventline {\n    @include terra-graph-carbon-shape-rendering();\n    opacity: 1;\n    stroke-width: 2px;\n  }\n}\n\n.carbon-no-data-label {\n  fill: var(--terra-graphs-grey65);\n  font-size: 1.25rem;\n  text-anchor: middle;\n}\n\n.carbon-no-data-overlay {\n  fill: var(--terra-graphs-white);\n  opacity: 0.6;\n}\n\n.carbon-label-popup-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  -moz-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -webkit-box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  font-family: 'Segoe UI', sans-serif;\n  font-size: 0.866rem;\n  font-weight: 400;\n  letter-spacing: 0.01071em;\n  line-height: 1.5;\n  padding: 1rem;\n  position: absolute;\n  z-index: 20;\n\n  &.popup-item {\n    display: block;\n  }\n\n  &.section {\n    display: block;\n    padding-left: 1rem;\n  }\n\n  &.content {\n    display: block;\n\n    &:last-child {\n      padding-bottom: 0;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n\n  g {\n    display: inline-block;\n\n    &.popup-label {\n      color: #01579b;\n\n      &::after {\n        content: ': ';\n      }\n    }\n\n    &.popup-text {\n      color: #000;\n    }\n\n    &:not(:last-child) {\n      padding-bottom: 0.5rem;\n    }\n  }\n}\n\n.carbon-label-popup-overlay {\n  cursor: pointer;\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  z-index: 1200;\n}\n\n")))}p.isMDXComponent=!0},1331:function(e,n,t){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function r(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var r=t.offsetHeight;t.open=!0;var a=r!=t.offsetHeight;return document.body.removeChild(t),a}function a(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?r.call(n,t,n,e):r)||(e.exports=a)},1333:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(t(0)),a=o(t(37));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}var l=function(e){var n=i({},e);return r.default.createElement(a.default,n,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};n.default=l},1334:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1UKvL","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1O9Fb",template:"ExampleTemplate-module__template___KYobd",header:"ExampleTemplate-module__header___3iw7C",content:"ExampleTemplate-module__content___1iaAX",description:"ExampleTemplate-module__description___3Vf5E",footer:"ExampleTemplate-module__footer___2Phq3","button-container":"ExampleTemplate-module__button-container___1JxCE",css:"ExampleTemplate-module__css___2LnEj",code:"ExampleTemplate-module__code___CzNro","css-toggle":"ExampleTemplate-module__css-toggle___2NGzh","code-toggle":"ExampleTemplate-module__code-toggle___306N5","is-selected":"ExampleTemplate-module__is-selected___5gylH",item:"ExampleTemplate-module__item___pdgYL",chevron:"ExampleTemplate-module__chevron___2ZCBT",title:"ExampleTemplate-module__title___Pqpi7","dynamic-content":"ExampleTemplate-module__dynamic-content___2YGWH"}},1542:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(1320));n.default=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1).toISOString(),upperLimit:new Date(2016,0,12).toISOString(),ticks:{values:[new Date(2016,0,1).toISOString(),new Date(2016,0,2).toISOString(),new Date(2016,0,3).toISOString(),new Date(2016,0,4).toISOString(),new Date(2016,0,5).toISOString(),new Date(2016,0,6).toISOString(),new Date(2016,0,7).toISOString(),new Date(2016,0,8).toISOString(),new Date(2016,0,9).toISOString(),new Date(2016,0,10).toISOString(),new Date(2016,0,11).toISOString()],tickLabelsRotation:-45,format:"%Y, %X"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,locale:a.default.helpers.LOCALE.en_US}}},1784:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),o=r(t(1320)),i=r(t(1321));t(1323);var l=r(t(1326)),d=r(t(1542)),c=i.default.deepClone((0,d.default)("#XAxisTickLabelOrientation"));n.default=function(){return a.default.useEffect((function(){o.default.api.graph(c)}),[]),a.default.createElement(l.default,{id:"XAxisTickLabelOrientation"})}},2068:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var r=t(29),a=t.n(r),o=t(56),i=t.n(o),l=t(0),d=t.n(l),c=t(813),s=t(1784),p=t.n(s),m=["components"],u={};function b(e){var n=e.components,t=i()(e,m);return Object(c.mdx)("wrapper",a()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXAxisOverlapping';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#XAxisTickLabelOrientation'));\n\nconst XAxisTickLabelOrientationGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"XAxisTickLabelOrientation\" />\n  );\n};\n\nexport default XAxisTickLabelOrientationGeneralExample;\n\n")))}b.isMDXComponent=!0;var g=t(1328),h=t.n(g),f=t(1329),x=function(e){var n=e.title,t=e.description,r=e.isExpanded;return d.a.createElement(h.a,{title:n||"X Axis Tick Label Orientation",description:t,example:d.a.createElement(p.a,null),exampleCssSrc:d.a.createElement(f.a,null),exampleSrc:d.a.createElement(b,null),isExpanded:r})},w=["components"],v={},y="wrapper";function _(e){var n=e.components,t=i()(e,w);return Object(c.mdx)(y,a()({},v,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1).toISOString(),\n      upperLimit: new Date(2016, 0, 12).toISOString(),\n      ticks: {\n        values: [\n          new Date(2016, 0, 1).toISOString(),\n          new Date(2016, 0, 2).toISOString(),\n          new Date(2016, 0, 3).toISOString(),\n          new Date(2016, 0, 4).toISOString(),\n          new Date(2016, 0, 5).toISOString(),\n          new Date(2016, 0, 6).toISOString(),\n          new Date(2016, 0, 7).toISOString(),\n          new Date(2016, 0, 8).toISOString(),\n          new Date(2016, 0, 9).toISOString(),\n          new Date(2016, 0, 10).toISOString(),\n          new Date(2016, 0, 11).toISOString(),\n        ],\n        tickLabelsRotation: -45,\n        format: '%Y, %X',\n      },\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  locale: Carbon.helpers.LOCALE.en_US,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}_.isMDXComponent=!0;var O=["components"];t(1331);var E={},S="wrapper";function k(e){var n=e.components,t=i()(e,O);return Object(c.mdx)(S,a()({},E,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"x-axis-tick-label-orientation"},"X-Axis Tick Label orientation"),Object(c.mdx)("p",null,"This is a simple timeseries line graph with x-axis ticks label orientation ",Object(c.mdx)("inlineCode",{parentName:"p"},"tickLabelsRotation = -45"),". Tick label rotation is used to prevent labels from overlapping in a narrow viewport or due to long tick labels."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(x,{mdxType:"LineGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(_,{mdxType:"GraphConfig"})))}k.isMDXComponent=!0}}]);