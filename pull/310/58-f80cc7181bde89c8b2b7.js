(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1274:function(e,n,t){"use strict";var a=t(2),o=t(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var r=a(t(43)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,t&&t.set(e,a);return a}(t(1282)),l=a(t(1279)),p=a(t(1275));function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}var s=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n),a.append("g").classed("popup-text",!0).text(t)},f=function(e,n,t){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(n);for(var o=a.append("g").classed("section",!0),i=function(){var e=p[l],n=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,r.default)(e,2),a=t[0],o=t[1],i=n.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},l=0,p=Object.values(t);l<p.length;l++)i()},g=function(e){var n=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),n.removeEventListener("click",t),window.removeEventListener("resize",t)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},h=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,t,a){h();var o=g(e).append("g"),r=a.x,i=a.y,l=a.label,p=a.high,d=a.mid,f=a.low;r?(m(o,"X axis","".concat(u(r)?s(r):r)),m(o,"".concat(l.display),i)):(m(o,"X axis","".concat(p?c(p.x):d?c(d.x):f?c(f.x):"N/A")),p&&m(o,"High",c(p.y)),d&&m(o,"Mid",c(d.y)),f&&m(o,"Low",c(f.y)))};n.loadBubblePopup=function(e,n,t,a){h();var o=g(e).append("g"),r=a.x,i=a.y,l=a.label,p=a.weight;r&&(m(o,"X axis","".concat(u(r)?s(r):r)),m(o,"year",i)),p&&m(o,"".concat(l.display),"".concat(p))};n.loadBarPopup=function(e,n,t,a){h();var o=g(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};n.loadTextLabelPopup=function(e,n,t){h();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=n.shape,r=n.label,i=n.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||l.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};n.loadXAndYAxisLabelPopup=function(e){h(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadY2AxisLabelPopup=function(e){var n,t;h(),(t=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(n)&&n(),i.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadTrackPopup=function(e,n,t){h();var a=g(e).append("g"),o=t.tasks,r=t.activities,i=t.events,l=t.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",d)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}};n.loadTaskPopup=function(e,n,t,a){h();var o=g(e).append("g"),r=a.label,i=a.display,l=a.y,p=a.startDate,d=a.endDate,c=a.percentage;r&&m(o,"Task Name",i),m(o,"Track",l),m(o,"Start Date",s(p)),m(o,"End Date",s(d)),c&&m(o,"Percentage",c)};n.loadDatelinePopup=function(e,n){h();var t=g(e).append("g"),a=n.label,o=n.value;a&&m(t,"Milestone",a.display),m(t,"Date",s(o))};n.loadTimelinePopup=function(e,n,t,a){h();var o=g(e).append("g"),r=a.x,i=(a.y,a.label),l=a.content;m(o,"X axis","".concat(u(r)?s(r):r)),m(o,"".concat(i.display),l)};n.loadPiePopup=function(e,n,t,a){h();var o=g(e).append("g"),r=a.label,i=a.value;m(o,r.display,i)}},1280:function(e,n,t){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var o=a!=t.offsetHeight;return document.body.removeChild(t),o}function o(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=o)},1281:function(e,n,t){"use strict";t.r(n)},1283:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.createGraphValuesWithSin=n.createGraphValuesWithCos=void 0;n.createGraphValuesWithSin=function(e){var n=e.length,t=e.initialX,a=e.xModifier,o=e.yModifier;return new Array(n).fill("").map((function(e,n){return{y:Math.sin(n)*o,x:t+n*a}}))};n.createGraphValuesWithCos=function(e){var n=e.length,t=e.initialX,a=e.xModifier,o=e.yModifier;return new Array(n).fill("").map((function(e,n){return{y:Math.cos(n)*o,x:t+n*a}}))}},1304:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(1273)),r=t(1274),i=t(1283),l={key:"uid_1",label:{display:"Data Label 1"},color:o.default.helpers.COLORS.BLACK,onClick:r.loadPopup,values:(0,i.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};n.default=l},1309:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),l=(t(0),t(788)),p=["components"],d={},s="wrapper";function c(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(s,o()({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1312:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(1273)),r=t(1274),i=t(1283),l={key:"uid_3",label:{display:"Data Label 3"},shape:o.default.helpers.SHAPES.DARK.X,color:o.default.helpers.COLORS.GREEN,onClick:r.loadPopup,values:(0,i.createGraphValuesWithSin)({length:12,initialX:85,xModifier:25,yModifier:4*Math.PI})};n.default=l},1333:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(1273)),r=t(1274),i=t(1283),l={key:"uid_2",label:{display:"Data Label 2"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},onClick:r.loadPopup,values:(0,i.createGraphValuesWithSin)({length:18,initialX:85,xModifier:10,yModifier:2*Math.PI}),legendOptions:{showLine:!0,showShape:!1,style:{strokeDashArray:"2,2"}},showShapes:!1};n.default=l},1511:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),l=(t(0),t(788)),p=["components"],d={},s="wrapper";function c(e){var n=e.components,t=i()(e,p);return Object(l.mdx)(s,o()({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = [\n  {\n    key: 'uid_1',\n    label: {\n      display: 'Data Label 1',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 5,\n        isCritical: false,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 9,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 13, 15).toISOString(),\n        y: 28,\n      },\n      {\n        x: new Date(2016, 0, 1, 14, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 19, 45).toISOString(),\n        y: 13,\n      },\n      {\n        x: new Date(2016, 0, 1, 21, 15).toISOString(),\n        y: 14,\n      },\n    ],\n    yAxis: 'y',\n  },\n  {\n    key: 'uid_3',\n    label: {\n      display: 'Data Label 3',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n    color: Carbon.helpers.COLORS.BLUE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 15,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 21,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: null,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 19,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 13, 15).toISOString(),\n        y: 28,\n      },\n      {\n        x: new Date(2016, 0, 1, 14, 15).toISOString(),\n        y: 22,\n      },\n      {\n        x: new Date(2016, 0, 1, 19, 45).toISOString(),\n        y: 23,\n      },\n    ],\n    yAxis: 'y',\n  },\n];\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1512:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e,n){return{bindTo:e,bindLegendTo:n,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},legendPadding:!0,removeContainerPadding:{left:2.5,right:2.5,top:2.5,bottom:2.5},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=a},1746:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(0)),r=a(t(1273)),i=a(t(1275));t(1276),t(1281),t(1278);var l=a(t(1512)),p=a(t(1304)),d=a(t(1333)),s=a(t(1312)),c=i.default.deepClone((0,l.default)("#graphContainer","#legendContainer")),u=[i.default.deepClone(p.default),i.default.deepClone(d.default),i.default.deepClone(s.default)],m=function(){return o.default.useEffect((function(){var e=r.default.api.graph(c);u.forEach((function(n){e.loadContent(r.default.api.line(n))}))}),[]),o.default.createElement("div",{id:"graphAndLegendPaddingReduced",className:"custom-container-legend-style"},o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{className:"bindto-container"},o.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),o.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),o.default.createElement("div",{id:"graphContainer"}))};n.default=m},2060:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return D}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),l=t(0),p=t.n(l),d=t(788),s=t(1746),c=t.n(s),u=["components"],m={};function f(e){var n=e.components,t=i()(e,u);return Object(d.mdx)("wrapper",o()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultCustomLegend';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#graphContainer', '#legendContainer'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst GraphAndLegendPaddingReducedGeneralExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <div id=\"graphAndLegendPaddingReduced\" className=\"custom-container-legend-style\">\n      <div id=\"tooltip\" className=\"initial-tooltip\" />\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <div id=\"graphContainer\" />\n    </div>\n  );\n};\n\nexport default GraphAndLegendPaddingReducedGeneralExample;\n\n")))}f.isMDXComponent=!0;var g=t(1284),h=t.n(g),b=t(1285),y=function(e){var n=e.title,t=e.description,a=e.isExpanded;return p.a.createElement(h.a,{title:n||"Graph And Legend Padding Reduced",description:t,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(b.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},v=t(1309),x=t(1511),O=["components"];t(1280);var S={},w="wrapper";function D(e){var n=e.components,t=i()(e,O);return Object(d.mdx)(w,o()({},S,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"custom-legend-placement"},"Custom legend placement"),Object(d.mdx)("p",null,"This is timeseries line graph with reduced padding."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(d.mdx)("h2",{id:"example"},"Example"),Object(d.mdx)(y,{mdxType:"LineGraph"}),Object(d.mdx)("details",null,Object(d.mdx)("summary",{style:{fontSize:24}},Object(d.mdx)("b",null,"Data")),Object(d.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(d.mdx)(v.a,{mdxType:"GraphConfig"}),Object(d.mdx)("h3",{id:"data-object"},"Data object"),Object(d.mdx)(x.a,{mdxType:"DataObject"})))}D.isMDXComponent=!0}}]);