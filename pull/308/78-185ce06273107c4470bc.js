(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=n(a(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(1281)),i=n(a(1279)),p=n(a(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),l=function(){var e=p[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,r.default)(e,2),n=a[0],o=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},i=0,p=Object.values(a);i<p.length;i++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){b();var o=h(e).append("g"),r=n.x,l=n.y,i=n.label,p=n.high,s=n.mid,f=n.low;r?(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(i.display),l)):(m(o,"X axis","".concat(p?d(p.x):s?d(s.x):f?d(f.x):"N/A")),p&&m(o,"High",d(p.y)),s&&m(o,"Mid",d(s.y)),f&&m(o,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,a,n){b();var o=h(e).append("g"),r=n.x,l=n.y,i=n.label,p=n.weight;r&&(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"year",l)),p&&m(o,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){b();var o=h(e).append("g");n.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){b();var n=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;b(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){b();var n=h(e).append("g"),o=a.tasks,r=a.activities,l=a.events,i=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(n,"Tasks",p)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(n,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(n,"Events",c)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){b();var o=h(e).append("g"),r=n.label,l=n.display,i=n.y,p=n.startDate,s=n.endDate,d=n.percentage;r&&m(o,"Task Name",l),m(o,"Track",i),m(o,"Start Date",c(p)),m(o,"End Date",c(s)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){b();var a=h(e).append("g"),n=t.label,o=t.value;n&&m(a,"Milestone",n.display),m(a,"Date",c(o))};t.loadTimelinePopup=function(e,t,a,n){b();var o=h(e).append("g"),r=n.x,l=(n.y,n.label),i=n.content;m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(l.display),i)};t.loadPiePopup=function(e,t,a,n){b();var o=h(e).append("g"),r=n.label,l=n.value;m(o,r.display,l)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(4));a(1278);var l={id:r.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;t.default=p},1280:function(e,t,a){var n,o;void 0===(o="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var o=n!=a.offsetHeight;return document.body.removeChild(a),o}function o(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=o)},1282:function(e,t,a){"use strict";a.r(t)},1283:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,a=e.initialX,n=e.xModifier,o=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*o,x:a+t*n}}))};t.createGraphValuesWithCos=function(e){var t=e.length,a=e.initialX,n=e.xModifier,o=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*o,x:a+t*n}}))}},1290:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=n},1292:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),i=(a(0),a(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,p);return Object(i.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}d.isMDXComponent=!0},1316:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),r=a(1274),l=a(1283),i={key:"uid_2",label:{display:"Data Label 2"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},onClick:r.loadPopup,values:(0,l.createGraphValuesWithSin)({length:18,initialX:85,xModifier:10,yModifier:2*Math.PI}),legendOptions:{showLine:!0,showShape:!1,style:{strokeDashArray:"2,2"}},showShapes:!1};t.default=i},1368:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),i=(a(0),a(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,p);return Object(i.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n  color: Carbon.helpers.COLORS.BLUE,\n  style: { strokeDashArray: '2,2' },\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 2,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: false,\n    style: { strokeDashArray: '2,2' },\n  },\n  showShapes: false,\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1775:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(1273)),l=n(a(1275));a(1276),a(1282);var i=n(a(1277)),p=n(a(1290)),s=n(a(1316)),c=l.default.deepClone((0,p.default)("#dashedLine")),d=l.default.deepClone(s.default),u=function(){return o.default.useEffect((function(){r.default.api.graph(c).loadContent(r.default.api.line(d))}),[]),o.default.createElement(i.default,{id:"dashedLine"})};t.default=u},2074:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),i=a(0),p=a.n(i),s=a(788),c=a(1775),d=a.n(c),u=["components"],m={};function f(e){var t=e.components,a=l()(e,u);return Object(s.mdx)("wrapper",o()({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#dashedLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst DashedLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"dashedLine\" />\n  );\n};\n\nexport default DashedLineExample;\n\n")))}f.isMDXComponent=!0;var h=a(1284),b=a.n(h),g=a(1285),v=function(e){var t=e.title,a=e.description,n=e.isExpanded;return p.a.createElement(b.a,{title:t||"Dashed Line",description:a,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(g.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:n})},y=a(1292),x=a(1368),L=["components"];a(1280);var j={},w="wrapper";function O(e){var t=e.components,a=l()(e,L);return Object(s.mdx)(w,o()({},j,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"dashed-line"},"Dashed Line"),Object(s.mdx)("p",null,"This is a graph with a dashed line dataset."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(v,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(x.a,{mdxType:"DataObject"})))}O.isMDXComponent=!0}}]);