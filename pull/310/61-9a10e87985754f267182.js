(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=n(a(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var p=r?Object.getOwnPropertyDescriptor(e,l):null;p&&(p.get||p.set)?Object.defineProperty(n,l,p):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(1282)),p=n(a(1279)),i=n(a(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),l=function(){var e=i[p],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,r.default)(e,2),n=a[0],o=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},p=0,i=Object.values(a);p<i.length;p++)l()},b=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=b(e).append("g"),r=n.x,l=n.y,p=n.label,i=n.high,s=n.mid,f=n.low;r?(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(p.display),l)):(m(o,"X axis","".concat(i?d(i.x):s?d(s.x):f?d(f.x):"N/A")),i&&m(o,"High",d(i.y)),s&&m(o,"Mid",d(s.y)),f&&m(o,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=b(e).append("g"),r=n.x,l=n.y,p=n.label,i=n.weight;r&&(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"year",l)),i&&m(o,"".concat(p.display),"".concat(i))};t.loadBarPopup=function(e,t,a,n){g();var o=b(e).append("g");n.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=b(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;i.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||p.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),b().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=b(e).append("g"),o=a.tasks,r=a.activities,l=a.events,p=a.actions;if(o&&o.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(n,"Tasks",i)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(n,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(n,"Events",c)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){g();var o=b(e).append("g"),r=n.label,l=n.display,p=n.y,i=n.startDate,s=n.endDate,d=n.percentage;r&&m(o,"Task Name",l),m(o,"Track",p),m(o,"Start Date",c(i)),m(o,"End Date",c(s)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){g();var a=b(e).append("g"),n=t.label,o=t.value;n&&m(a,"Milestone",n.display),m(a,"Date",c(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=b(e).append("g"),r=n.x,l=(n.y,n.label),p=n.content;m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(l.display),p)};t.loadPiePopup=function(e,t,a,n){g();var o=b(e).append("g"),r=n.label,l=n.value;m(o,r.display,l)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(4));a(1278);var l={id:r.default.string.isRequired},p=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=l;var i=p;t.default=i},1349:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),r=a(1274),l={key:"simple_pie_data_1",label:{display:"Dataset 1",format:function(e,t){return"".concat(e,": ").concat(t.toFixed(),"%")}},color:o.default.helpers.COLORS.BLUE,onClick:r.loadPiePopup,value:60};t.default=l},1350:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),r=a(1274),l={key:"simple_pie_data_2",label:{display:"Dataset 2"},color:o.default.helpers.COLORS.GREEN,onClick:r.loadPiePopup,value:10};t.default=l},1351:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),r=a(1274),l={key:"simple_pie_data_3",label:{display:"Dataset 3"},color:o.default.helpers.COLORS.LIGHT_PURPLE,onClick:r.loadPiePopup,value:30};t.default=l},1381:function(e,t,a){"use strict";a.r(t)},1424:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst dataset1 = {\n  key: 'simple_pie_data_1',\n  label: {\n    display: 'Dataset 1',\n    format: (display, val) => `${display}: ${val.toFixed()}%`,\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPiePopup,\n  value: 60,\n};\n\nexport default dataset1;\n\n")))}d.isMDXComponent=!0},1425:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst dataset2 = {\n  key: 'simple_pie_data_2',\n  label: {\n    display: 'Dataset 2',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPiePopup,\n  value: 10,\n};\n\nexport default dataset2;\n\n")))}d.isMDXComponent=!0},1426:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPiePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst dataset3 = {\n  key: 'simple_pie_data_3',\n  label: {\n    display: 'Dataset 3',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadPiePopup,\n  value: 30,\n};\n\nexport default dataset3;\n\n")))}d.isMDXComponent=!0},1592:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:"#legendContainer",dimension:{height:300},showLegend:!0}};t.default=n},1807:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(1273)),l=n(a(1275));a(1276),a(1381);var p=n(a(1277)),i=n(a(1592)),s=n(a(1349)),c=n(a(1350)),d=n(a(1351)),u=l.default.deepClone((0,i.default)("#graphContainer")),m=[l.default.deepClone(s.default),l.default.deepClone(c.default),l.default.deepClone(d.default)],f=function(){return o.default.useEffect((function(){var e=r.default.api.pie(u);m.forEach((function(t){e.loadContent(t)}))}),[]),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"bindto-container"},o.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),o.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),o.default.createElement(p.default,{id:"pieGraphContainer"}))};t.default=f},2043:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=a(0),i=a.n(p),s=a(788),c=a(1807),d=a.n(c),u=["components"],m={};function f(e){var t=e.components,a=l()(e,u);return Object(s.mdx)("wrapper",o()({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/customLegendPlacementConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';\nimport dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getPieConfig('#graphContainer'));\nconst dataset = [\n  utils.deepClone(dataset1),\n  utils.deepClone(dataset2),\n  utils.deepClone(dataset3),\n];\n\nconst CustomLegendPlacementPieExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.pie(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <>\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <ExampleGraphContainer id=\"pieGraphContainer\" />\n    </>\n  );\n};\n\nexport default CustomLegendPlacementPieExample;\n\n")))}f.isMDXComponent=!0;var b=a(1284),g=a.n(b),v=a(1285),x=function(e){var t=e.title,a=e.description,n=e.isExpanded;return i.a.createElement(g.a,{title:t||"Custom Legend Placement",description:a,example:i.a.createElement(d.a,null),exampleCssSrc:i.a.createElement(v.a,null),exampleSrc:i.a.createElement(f,null),isExpanded:n})},h=["components"],y={},j="wrapper";function O(e){var t=e.components,a=l()(e,h);return Object(s.mdx)(j,o()({},y,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const getPieConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: '#legendContainer',\n  dimension: {\n    height: 300,\n  },\n  showLegend: true,\n});\n\nexport default getPieConfig;\n\n")))}O.isMDXComponent=!0;var P=a(1424),C=a(1425),D=a(1426),E=["components"],L={},_="wrapper";function k(e){var t=e.components,a=l()(e,E);return Object(s.mdx)(_,o()({},L,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("p",null,"require('details-polyfill')"),Object(s.mdx)("h1",{id:"simple-pie"},"Simple Pie"),Object(s.mdx)("p",null,"This is a simple Pie chart with custom legend placement."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(x,{mdxType:"PieChart"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(O,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-objects"},"Data objects"),Object(s.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(s.mdx)(P.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(s.mdx)(C.a,{mdxType:"DataObject2"}),Object(s.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(s.mdx)(D.a,{mdxType:"DataObject3"})))}k.isMDXComponent=!0}}]);