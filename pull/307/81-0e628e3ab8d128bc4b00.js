(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(1281)),l=a(n(1279)),p=a(n(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),i=function(){var e=p[l],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},l=0,p=Object.values(n);l<p.length;l++)i()},h=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},b=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,f=a.low;r?(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(l.display),i)):(m(o,"X axis","".concat(p?d(p.x):s?d(s.x):f?d(f.x):"N/A")),p&&m(o,"High",d(p.y)),s&&m(o,"Mid",d(s.y)),f&&m(o,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,i=a.y,l=a.label,p=a.weight;r&&(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"year",i)),p&&m(o,"".concat(l.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){b();var o=h(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,i=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||l.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=h(e).append("g"),o=n.tasks,r=n.activities,i=n.events,l=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",c)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,d=a.percentage;r&&m(o,"Task Name",i),m(o,"Track",l),m(o,"Start Date",c(p)),m(o,"End Date",c(s)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){b();var n=h(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",c(o))};t.loadTimelinePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,i=(a.y,a.label),l=a.content;m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(i.display),l)};t.loadPiePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.label,i=a.value;m(o,r.display,i)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4));n(1278);var i={id:r.default.string.isRequired},l=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var p=l;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1282:function(e,t,n){"use strict";n.r(t)},1283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,n=e.initialX,a=e.xModifier,o=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*o,x:n+t*a}}))};t.createGraphValuesWithCos=function(e){var t=e.length,n=e.initialX,a=e.xModifier,o=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*o,x:n+t*a}}))}},1290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1292:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),r=n(55),i=n.n(r),l=(n(0),n(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=i()(e,p);return Object(l.mdx)(c,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}d.isMDXComponent=!0},1375:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),i=n(1283),l={key:"uid_2",label:{display:"Data Label 2"},color:o.default.helpers.COLORS.YELLOW,shape:o.default.helpers.SHAPES.DARK.SQUARE,onClick:r.loadPopup,values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0},regions:[{start:10,end:10,color:"#bcbfc0"}]};t.default=l},1559:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),r=n(55),i=n.n(r),l=(n(0),n(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=i()(e,p);return Object(l.mdx)(c,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  color: Carbon.helpers.COLORS.YELLOW,\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      start: 10,\n      end: 10,\n      color: '#bcbfc0',\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1796:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1273)),i=a(n(1275));n(1276),n(1282);var l=a(n(1277)),p=a(n(1290)),s=a(n(1375)),c=i.default.deepClone((0,p.default)("#regionLine")),d=i.default.deepClone(s.default),u=function(){return o.default.useEffect((function(){r.default.api.graph(c).loadContent(r.default.api.line(d))}),[]),o.default.createElement(l.default,{id:"regionLine"})};t.default=u},2080:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(31),o=n.n(a),r=n(55),i=n.n(r),l=n(0),p=n.n(l),s=n(788),c=n(1796),d=n.n(c),u=["components"],m={};function f(e){var t=e.components,n=i()(e,u);return Object(s.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#regionLine'));\nconst dataset = utils.deepClone(exampleData);\n\n// contentData[0].regions = [\n//   {\n//     start: 10,\n//     end: 10,\n//     color: '#bcbfc0',\n//   },\n// ];\n\nconst RegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"regionLine\" />\n  );\n};\n\nexport default RegionLineExample;\n\n\n")))}f.isMDXComponent=!0;var h=n(1284),b=n.n(h),g=n(1285),v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Region Line",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(g.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},y=n(1292),x=n(1559),L=["components"];n(1280);var j={},w="wrapper";function O(e){var t=e.components,n=i()(e,L);return Object(s.mdx)(w,o()({},j,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"region-line"},"Region line"),Object(s.mdx)("p",null,"This is simple region line graph with region as a line."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(v,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(x.a,{mdxType:"DataObject"})))}O.isMDXComponent=!0}}]);