(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=a(n(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(1282)),i=a(n(1279)),p=a(n(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},b=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),r=function(){var e=p[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,l.default)(e,2),a=n[0],o=n[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},i=0,p=Object.values(n);i<p.length;i++)r()},f=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){r.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},g=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){g();var o=f(e).append("g"),l=a.x,r=a.y,i=a.label,p=a.high,s=a.mid,b=a.low;l?(m(o,"X axis","".concat(u(l)?c(l):l)),m(o,"".concat(i.display),r)):(m(o,"X axis","".concat(p?d(p.x):s?d(s.x):b?d(b.x):"N/A")),p&&m(o,"High",d(p.y)),s&&m(o,"Mid",d(s.y)),b&&m(o,"Low",d(b.y)))};t.loadBubblePopup=function(e,t,n,a){g();var o=f(e).append("g"),l=a.x,r=a.y,i=a.label,p=a.weight;l&&(m(o,"X axis","".concat(u(l)?c(l):l)),m(o,"year",r)),p&&m(o,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){g();var o=f(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){g();var a=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,r=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(l.display)),l.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;g(),(n=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),r.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){g();var a=f(e).append("g"),o=n.tasks,l=n.activities,r=n.events,i=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(a,"Tasks",p)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(a,"Activities",s)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),b(a,"Events",c)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),b(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){g();var o=f(e).append("g"),l=a.label,r=a.display,i=a.y,p=a.startDate,s=a.endDate,d=a.percentage;l&&m(o,"Task Name",r),m(o,"Track",i),m(o,"Start Date",c(p)),m(o,"End Date",c(s)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){g();var n=f(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",c(o))};t.loadTimelinePopup=function(e,t,n,a){g();var o=f(e).append("g"),l=a.x,r=(a.y,a.label),i=a.content;m(o,"X axis","".concat(u(l)?c(l):l)),m(o,"".concat(r.display),i)};t.loadPiePopup=function(e,t,n,a){g();var o=f(e).append("g"),l=a.label,r=a.value;m(o,l.display,r)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),l=a(n(4));n(1278);var r={id:l.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=r;var p=i;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1281:function(e,t,n){"use strict";n.r(t)},1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:35},y2:{show:!0,label:"Combination Set B",lowerLimit:0,upperLimit:30,padDomain:!1}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};t.default=a},1332:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),l=n(1274),r={key:"line_dataset",label:{display:"Line Data Label"},graphType:"Line",color:o.default.helpers.COLORS.BLACK,onClick:l.loadPopup,values:new Array(7).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI+20,x:t+.5}}))};t.default=r},1361:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),l=n(1274),r={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:o.default.helpers.COLORS.GREEN,onClick:l.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=r},1410:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),l=n(55),r=n.n(l),i=(n(0),n(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=r()(e,p);return Object(i.mdx)(c,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getCombinationGraphConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 8,\n      ticks: {\n        values: [1, 2, 3, 4, 5, 6, 7],\n        format: '.0f',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Combination Set A',\n      lowerLimit: 0,\n      upperLimit: 35,\n    },\n    y2: {\n      show: true,\n      label: 'Combination Set B',\n      lowerLimit: 0,\n      upperLimit: 30,\n      padDomain: false,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getCombinationGraphConfig;\n\n\n")))}d.isMDXComponent=!0},1411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),l=n(55),r=n.n(l),i=(n(0),n(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=r()(e,p);return Object(i.mdx)(c,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'line_dataset',\n  label: {\n    display: 'Line Data Label',\n  },\n  graphType: 'Line',\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: new Array(7).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI + 20,\n    x: i + 0.5,\n  })),\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1483:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),l=n(55),r=n.n(l),i=(n(0),n(788)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=r()(e,p);return Object(i.mdx)(c,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'bubble_dataset_1',\n  label: {\n    display: 'Bubble Data Label 1',\n  },\n  graphType: 'BubbleMultipleDataset',\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1717:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),l=a(n(1273)),r=a(n(1275));n(1276),n(1281);var i=a(n(1277)),p=a(n(1331)),s=a(n(1332)),c=a(n(1361)),d=r.default.deepClone((0,p.default)("#lineWithSingleBubbleData")),u=[r.default.deepClone(c.default),r.default.deepClone(s.default)],m=function(){return o.default.useEffect((function(){var e=l.default.api.graph(d);e.loadContent(l.default.api.bubbleSingleDataset(u[0])),e.loadContent(l.default.api.line(u[1]))}),[]),o.default.createElement(i.default,{id:"lineWithSingleBubbleData"})};t.default=m},2055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(31),o=n.n(a),l=n(55),r=n.n(l),i=n(0),p=n.n(i),s=n(788),c=n(1717),d=n.n(c),u=["components"],m={};function b(e){var t=e.components,n=r()(e,u);return Object(s.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';\nimport singleBubbleDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithSingleBubbleData'));\nconst dataset = [\n  utils.deepClone(singleBubbleDataset),\n  utils.deepClone(lineDataset),\n];\n\nconst LineWithSingleBubbleDataCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset[0]));\n    graph.loadContent(Carbon.api.line(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithSingleBubbleData\" />\n  );\n};\n\nexport default LineWithSingleBubbleDataCombinationExample;\n\n\n")))}b.isMDXComponent=!0;var f=n(1284),g=n.n(f),h=n(1285),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(g.a,{title:t||"Line With Single Bubble Data",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(h.a,null),exampleSrc:p.a.createElement(b,null),isExpanded:a})},v=n(1410),x=n(1483),j=n(1411),C=["components"];n(1280);var O={},D="wrapper";function L(e){var t=e.components,n=r()(e,C);return Object(s.mdx)(D,o()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-with-single-bubble-dataset"},"Line With Single Bubble dataset"),Object(s.mdx)("p",null,"This is a simple Line Graph combined with single Bubble dataset."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(y,{mdxType:"CombinationGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(v.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"bubble-dataset"},"Bubble Dataset"),Object(s.mdx)(x.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(s.mdx)(j.a,{mdxType:"DataObject2"})))}L.isMDXComponent=!0}}]);