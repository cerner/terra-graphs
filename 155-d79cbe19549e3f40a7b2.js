(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(43)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in e)if("default"!==p&&Object.prototype.hasOwnProperty.call(e,p)){var i=r?Object.getOwnPropertyDescriptor(e,p):null;i&&(i.get||i.set)?Object.defineProperty(a,p,i):a[p]=e[p]}a.default=e,n&&n.set(e,a);return a}(n(1281)),i=a(n(1279)),l=a(n(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),p=function(){var e=l[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],p=t.append("g").classed("popup-item",!0);p.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),p.append("g").classed("popup-text",!0).text(o)}))},i=0,l=Object.values(n);i<l.length;i++)p()},g=function(e){var t=document.querySelector("#tooltip");return p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){p.select(t).attr("style","display:none;").selectAll("g").remove(),l.default.isFunction(e)&&e(),p.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),p.select("#tooltip").style("left","".concat(p.event.pageX+5,"px")).style("top","".concat(p.event.pageY+5,"px"))},b=function(){p.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),p.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var o=g(e).append("g"),r=a.x,p=a.y,i=a.label,l=a.high,c=a.mid,f=a.low;r?(m(o,"X axis","".concat(u(r)?s(r):r)),m(o,"".concat(i.display),p)):(m(o,"X axis","".concat(l?d(l.x):c?d(c.x):f?d(f.x):"N/A")),l&&m(o,"High",d(l.y)),c&&m(o,"Mid",d(c.y)),f&&m(o,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,n,a){b();var o=g(e).append("g"),r=a.x,p=a.y,i=a.label,l=a.weight;r&&(m(o,"X axis","".concat(u(r)?s(r):r)),m(o,"year",p)),l&&m(o,"".concat(i.display),"".concat(l))};t.loadBarPopup=function(e,t,n,a){b();var o=g(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,p=t.color;l.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(p,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),p.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){p.select(n).attr("style","display:none;").selectAll("g").remove(),l.default.isFunction(t)&&t(),p.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),p.select("#tooltip").style("left","".concat(p.event.pageX-250,"px")).style("top","".concat(p.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=g(e).append("g"),o=n.tasks,r=n.activities,p=n.events,i=n.actions;if(o&&o.length>0){var l=[];l.forEach((function(e){l.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",l)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",c)}if(p&&p.length>0){var s=[];p.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){b();var o=g(e).append("g"),r=a.label,p=a.display,i=a.y,l=a.startDate,c=a.endDate,d=a.percentage;r&&m(o,"Task Name",p),m(o,"Track",i),m(o,"Start Date",s(l)),m(o,"End Date",s(c)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){b();var n=g(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",s(o))};t.loadTimelinePopup=function(e,t,n,a){b();var o=g(e).append("g"),r=a.x,p=(a.y,a.label),i=a.content;m(o,"X axis","".concat(u(r)?s(r):r)),m(o,"".concat(p.display),i)};t.loadPiePopup=function(e,t,n,a){b();var o=g(e).append("g"),r=a.label,p=a.value;m(o,r.display,p)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4));n(1278);var p={id:r.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=p;var l=i;t.default=l},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1287:function(e,t,n){"use strict";n.r(t)},1520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[new Date(2018,1,2,6).toISOString(),new Date(2018,1,2,12).toISOString(),new Date(2018,1,2,18).toISOString()],o=[new Date(2018,1,2,3).toISOString(),new Date(2018,1,2,9).toISOString(),new Date(2018,1,2,15).toISOString(),new Date(2018,1,2,21).toISOString()],r=[new Date(2018,1,2,0).toISOString(),new Date(2018,1,2,24).toISOString()],p=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,23).toISOString(),upperLimit:new Date(2018,1,3,1).toISOString(),rangeRounding:!0,ticks:{format:"%H",lowerStepTickValues:a,midpointTickValues:o,upperStepTickValues:r}}},dateline:[]}};t.default=p},1521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1274),o={key:"track 1",trackLabel:{display:"Project A",onClick:a.loadXAndYAxisLabelPopup},tasks:[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,1,2,9).toISOString(),endDate:new Date(2018,1,2,19).toISOString()}]};t.default=o},1761:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1273)),p=a(n(1275));n(1276),n(1287);var i=a(n(1277)),l=a(n(1520)),c=a(n(1521)),s=p.default.deepClone((0,l.default)("#ganttDatetimeBucket")),d=[p.default.deepClone(c.default)],u=function(){return o.default.useEffect((function(){var e=r.default.api.gantt(s);d.forEach((function(t){e.loadContent(t)}))}),[]),o.default.createElement(i.default,{id:"ganttDatetimeBucket"})};t.default=u},2009:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(31),o=n.n(a),r=n(55),p=n.n(r),i=n(0),l=n.n(i),c=n(788),s=n(1761),d=n.n(s),u=["components"],m={};function f(e){var t=e.components,n=p()(e,u);return Object(c.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDatetimeBucketConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDatetimeBucketConfig';\nimport dateTimeBucketData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dateTimeBucketData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDatetimeBucketConfig('#ganttDatetimeBucket'));\nconst dataset = [utils.deepClone(dateTimeBucketData)];\n\nconst GanttDatetimeBucketExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttDatetimeBucket\" />\n  );\n};\n\nexport default GanttDatetimeBucketExample;\n\n")))}f.isMDXComponent=!0;var g=n(1284),b=n.n(g),v=n(1285),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(b.a,{title:t||"Datetime Bucket",description:n,example:l.a.createElement(d.a,null),exampleCssSrc:l.a.createElement(v.a,null),exampleSrc:l.a.createElement(f,null),isExpanded:a})},y=["components"],h={},D="wrapper";function O(e){var t=e.components,n=p()(e,y);return Object(c.mdx)(D,o()({},h,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const lowerStepTickValues = [\n  new Date(2018, 1, 2, 6).toISOString(),\n  new Date(2018, 1, 2, 12).toISOString(),\n  new Date(2018, 1, 2, 18).toISOString(),\n];\nconst midpointTickValues = [\n  new Date(2018, 1, 2, 3).toISOString(),\n  new Date(2018, 1, 2, 9).toISOString(),\n  new Date(2018, 1, 2, 15).toISOString(),\n  new Date(2018, 1, 2, 21).toISOString(),\n];\nconst upperStepTickValues = [\n  new Date(2018, 1, 2, 0).toISOString(),\n  new Date(2018, 1, 2, 24).toISOString(),\n];\n\nconst getGanttDatetimeBucketConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 23).toISOString(),\n      upperLimit: new Date(2018, 1, 3, 1).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n      ticks: {\n        format: '%H',\n        lowerStepTickValues,\n        midpointTickValues,\n        upperStepTickValues,\n      },\n    },\n  },\n  dateline: [],\n});\n\nexport default getGanttDatetimeBucketConfig;\n\n\n")))}O.isMDXComponent=!0;var k=["components"],S={},w="wrapper";function j(e){var t=e.components,n=p()(e,k);return Object(c.mdx)(w,o()({},S,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadXAndYAxisLabelPopup, loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst dateTimeBucketData = {\n  key: 'track 1',\n  trackLabel: {\n    display: 'Project A',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: [\n    {\n      key: 'task1',\n      onClick: loadTaskPopup,\n      label: {\n        display: 'Story Apex',\n      },\n      startDate: new Date(2018, 1, 2, 9).toISOString(),\n      endDate: new Date(2018, 1, 2, 19).toISOString(),\n    },\n  ],\n};\n\nexport default dateTimeBucketData;\n\n")))}j.isMDXComponent=!0;var C=["components"];n(1280);var E={},P="wrapper";function T(e){var t=e.components,n=p()(e,C);return Object(c.mdx)(P,o()({},E,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(c.mdx)("p",null,"This is a simple Gantt chart with datetime formatted bucket."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(x,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(O,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(j,{mdxType:"DataObject"})))}T.isMDXComponent=!0}}]);