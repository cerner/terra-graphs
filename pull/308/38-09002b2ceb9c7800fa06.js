(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(1281)),i=a(n(1279)),p=a(n(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),l=function(){var e=p[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},i=0,p=Object.values(n);i<p.length;i++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,l=a.y,i=a.label,p=a.high,s=a.mid,f=a.low;r?(m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"".concat(i.display),l)):(m(o,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(o,"High",c(p.y)),s&&m(o,"Mid",c(s.y)),f&&m(o,"Low",c(f.y)))};t.loadBubblePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,l=a.y,i=a.label,p=a.weight;r&&(m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"year",l)),p&&m(o,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){b();var o=h(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=h(e).append("g"),o=n.tasks,r=n.activities,l=n.events,i=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}};t.loadTaskPopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.label,l=a.display,i=a.y,p=a.startDate,s=a.endDate,c=a.percentage;r&&m(o,"Task Name",l),m(o,"Track",i),m(o,"Start Date",d(p)),m(o,"End Date",d(s)),c&&m(o,"Percentage",c)};t.loadDatelinePopup=function(e,t){b();var n=h(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",d(o))};t.loadTimelinePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,l=(a.y,a.label),i=a.content;m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"".concat(l.display),i)};t.loadPiePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.label,l=a.value;m(o,r.display,l)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4));n(1278);var l={id:r.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1282:function(e,t,n){"use strict";n.r(t)},1288:function(e,t,n){"use strict";n.r(t)},1313:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:300},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:20},y2:{show:!0,label:"Combination Set B",lowerLimit:40,upperLimit:180}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1361:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),l={key:"paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y2",shape:{high:o.default.helpers.SHAPES.DARK.TEAR_ALT,mid:o.default.helpers.SHAPES.DARK.RHOMBUS,low:o.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:o.default.helpers.COLORS.BLACK,mid:o.default.helpers.COLORS.BLACK,low:o.default.helpers.COLORS.BLACK},onClick:r.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}]};t.default=l},1362:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),o=n.n(a),r=n(55),l=n.n(r),i=(n(0),n(788)),p=["components"],s={},d="wrapper";function c(e){var t=e.components,n=l()(e,p);return Object(i.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getlineAndPairdResultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 300,\n    },\n    y: {\n      show: true,\n      label: 'Combination Set A',\n      lowerLimit: 0,\n      upperLimit: 20,\n    },\n    y2: {\n      show: true,\n      label: 'Combination Set B',\n      lowerLimit: 40,\n      upperLimit: 180,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getlineAndPairdResultConfig;\n\n")))}c.isMDXComponent=!0},1478:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),l={key:"line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:o.default.helpers.SHAPES.DARK.RHOMBUS,color:o.default.helpers.COLORS.BLUE,onClick:r.loadPopup,values:new Array(50).fill("").map((function(e,t){return{y:5*Math.sin(t)+10,x:10+5*t}}))};t.default=l},1479:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),o=n.n(a),r=n(55),l=n.n(r),i=(n(0),n(788)),p=["components"],s={},d="wrapper";function c(e){var t=e.components,n=l()(e,p);return Object(i.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y2',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1727:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1273)),l=a(n(1275));n(1276),n(1282),n(1288);var i=a(n(1277)),p=a(n(1313)),s=a(n(1478)),d=a(n(1361)),c=l.default.deepClone((0,p.default)("#lineWithPairedResult")),u=[l.default.deepClone(s.default),l.default.deepClone(d.default)],m=function(){return o.default.useEffect((function(){var e=r.default.api.graph(c);e.loadContent(r.default.api.line(u[0])),e.loadContent(r.default.api.pairedResult(u[1]))}),[]),o.default.createElement(i.default,{id:"lineWithPairedResult"})};t.default=m},2028:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var a=n(31),o=n.n(a),r=n(55),l=n.n(r),i=n(0),p=n.n(i),s=n(788),d=n(1727),c=n.n(d),u=["components"],m={};function f(e){var t=e.components,n=l()(e,u);return Object(s.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset2';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResult'));\nconst dataset = [\n  utils.deepClone(lineDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst LineWithPairedResultCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithPairedResult\" />\n  );\n};\n\nexport default LineWithPairedResultCombinationExample;\n\n")))}f.isMDXComponent=!0;var h=n(1284),b=n.n(h),y=n(1285),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Line With Paired Result",description:n,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(y.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},x=n(1362),v=["components"],C={},O="wrapper";function P(e){var t=e.components,n=l()(e,v);return Object(s.mdx)(O,o()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n};\n\nexport default data;\n\n")))}P.isMDXComponent=!0;var j=n(1479),L=["components"];n(1280);var w={},R="wrapper";function D(e){var t=e.components,n=l()(e,L);return Object(s.mdx)(R,o()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-with-paired-result"},"Line With Paired Result"),Object(s.mdx)("p",null,"This is a simple Line Graph combined with Paired Result."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(g,{mdxType:"CombinationGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(x.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(s.mdx)(P,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),Object(s.mdx)(j.a,{mdxType:"DataObject2"})))}D.isMDXComponent=!0}}]);