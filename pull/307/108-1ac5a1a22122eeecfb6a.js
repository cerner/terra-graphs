(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1274:function(e,t,n){"use strict";var a=n(2),r=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(1281)),i=a(n(1279)),p=a(n(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),l=function(){var e=p[i],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(n);i<p.length;i++)l()},g=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.high,c=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(p?d(p.x):c?d(c.x):f?d(f.x):"N/A")),p&&m(r,"High",d(p.y)),c&&m(r,"Mid",d(c.y)),f&&m(r,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.x,l=a.y,i=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"year",l)),p&&m(r,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){b();var r=g(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,l=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=g(e).append("g"),r=n.tasks,o=n.activities,l=n.events,i=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.label,l=a.display,i=a.y,p=a.startDate,c=a.endDate,d=a.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",s(p)),m(r,"End Date",s(c)),d&&m(r,"Percentage",d)};t.loadDatelinePopup=function(e,t){b();var n=g(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",s(r))};t.loadTimelinePopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.x,l=(a.y,a.label),i=a.content;m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(l.display),i)};t.loadPiePopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.label,l=a.value;m(r,o.display,l)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4));n(1278);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;t.default=p},1280:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},1288:function(e,t,n){"use strict";n.r(t)},1343:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),r=n.n(a),o=n(55),l=n.n(o),i=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=l()(e,p);return Object(i.mdx)(s,r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 9,\n    },\n    {\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\n      y: 11,\n    },\n    {\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 12,\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 13,\n    },\n    {\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\n      y: 14,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1381:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:180},y:{show:!0,label:"Line Set A",lowerLimit:0,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1432:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),r=n.n(a),o=n(55),l=n.n(o),i=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=l()(e,p);return Object(i.mdx)(s,r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getScatterTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getScatterTimeseriesConfig;\n\n")))}d.isMDXComponent=!0},1590:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1273)),o=n(1274),l={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:[{x:85,y:5},{x:90,y:11},{x:92,y:12,isCritical:!0},{x:101,y:16},{x:107,y:17},{x:107,y:9,isCritical:!0},{x:135,y:11},{x:139,y:12},{x:143,y:16},{x:155,y:17,isCritical:!0},{x:161,y:28},{x:164,y:12},{x:168,y:13},{x:170,y:14}]};t.default=l},1822:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1273)),l=a(n(1275));n(1276),n(1288);var i=a(n(1277)),p=a(n(1381)),c=a(n(1590)),s=l.default.deepClone((0,p.default)("#simpleCriticalScattergraph")),d=l.default.deepClone(c.default),u=function(){return r.default.useEffect((function(){o.default.api.graph(s).loadContent(o.default.api.scatter(d))}),[]),r.default.createElement(i.default,{id:"simpleCriticalScattergraph"})};t.default=u},2085:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(31),r=n.n(a),o=n(55),l=n.n(o),i=n(0),p=n.n(i),c=n(788),s=n(1822),d=n.n(s),u=["components"],m={};function f(e){var t=e.components,n=l()(e,u);return Object(c.mdx)("wrapper",r()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1critical';\n\n/*\nPlease refer documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#simpleCriticalScattergraph'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleCriticalityScatterExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simpleCriticalScattergraph\" />\n  );\n};\n\nexport default SimpleCriticalityScatterExample;\n\n")))}f.isMDXComponent=!0;var g=n(1284),b=n.n(g),y=n(1285),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Simple",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(y.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},h=n(1432),v=n(1343),O=["components"];n(1280);var w={},S="wrapper";function j(e){var t=e.components,n=l()(e,O);return Object(c.mdx)(S,r()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-scatter-graph"},"Simple Scatter Graph"),Object(c.mdx)("p",null,"This is Simple Scatter graph with critical points(highlighted with red circle) in it."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(x,{mdxType:"ScatterGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Example Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(h.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(v.a,{mdxType:"DataObject"})))}j.isMDXComponent=!0}}]);