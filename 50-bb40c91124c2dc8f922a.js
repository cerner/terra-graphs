(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1274:function(e,n,a){"use strict";var t=a(2),r=a(18);Object.defineProperty(n,"__esModule",{value:!0}),n.loadY2AxisLabelPopup=n.loadXAndYAxisLabelPopup=n.loadTrackPopup=n.loadTimelinePopup=n.loadTextLabelPopup=n.loadTaskPopup=n.loadPopup=n.loadPiePopup=n.loadDatelinePopup=n.loadBubblePopup=n.loadBarPopup=void 0;var o=t(a(43)),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=i(n);if(a&&a.has(e))return a.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var p=o?Object.getOwnPropertyDescriptor(e,l):null;p&&(p.get||p.set)?Object.defineProperty(t,l,p):t[l]=e[l]}t.default=e,a&&a.set(e,t);return t}(a(1282)),p=t(a(1279)),s=t(a(1275));function i(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:n})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,n,a){var t=e.append("g").classed("popup-item",!0);t.append("label").classed("popup-label",!0).text(n),t.append("g").classed("popup-text",!0).text(a)},f=function(e,n,a){var t=e.append("g").classed("popup-item",!0);t.append("label").classed("popup-label",!0).text(n);for(var r=t.append("g").classed("section",!0),l=function(){var e=s[p],n=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,o.default)(e,2),t=a[0],r=a[1],l=n.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(t.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},p=0,s=Object.values(a);p<s.length;p++)l()},x=function(e){var n=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(n).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(e)&&e(),l.select("#overlay").remove(),n.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};n.loadPopup=function(e,n,a,t){b();var r=x(e).append("g"),o=t.x,l=t.y,p=t.label,s=t.high,i=t.mid,f=t.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(p.display),l)):(m(r,"X axis","".concat(s?c(s.x):i?c(i.x):f?c(f.x):"N/A")),s&&m(r,"High",c(s.y)),i&&m(r,"Mid",c(i.y)),f&&m(r,"Low",c(f.y)))};n.loadBubblePopup=function(e,n,a,t){b();var r=x(e).append("g"),o=t.x,l=t.y,p=t.label,s=t.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",l)),s&&m(r,"".concat(p.display),"".concat(s))};n.loadBarPopup=function(e,n,a,t){b();var r=x(e).append("g");t.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};n.loadTextLabelPopup=function(e,n,a){b();var t=x(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=n.shape,o=n.label,l=n.color;s.default.notEmpty(r)&&t.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||p.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&t.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&t.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};n.loadXAndYAxisLabelPopup=function(e){b(),x().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadY2AxisLabelPopup=function(e){var n,a;b(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(n)&&n(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};n.loadTrackPopup=function(e,n,a){b();var t=x(e).append("g"),r=a.tasks,o=a.activities,l=a.events,p=a.actions;if(r&&r.length>0){var s=[];s.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(t,"Tasks",s)}if(o&&o.length>0){var i=[];o.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(t,"Activities",i)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(t,"Events",d)}if(p&&p.length>0){var c=[];p.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(t,"Actions",c)}};n.loadTaskPopup=function(e,n,a,t){b();var r=x(e).append("g"),o=t.label,l=t.display,p=t.y,s=t.startDate,i=t.endDate,c=t.percentage;o&&m(r,"Task Name",l),m(r,"Track",p),m(r,"Start Date",d(s)),m(r,"End Date",d(i)),c&&m(r,"Percentage",c)};n.loadDatelinePopup=function(e,n){b();var a=x(e).append("g"),t=n.label,r=n.value;t&&m(a,"Milestone",t.display),m(a,"Date",d(r))};n.loadTimelinePopup=function(e,n,a,t){b();var r=x(e).append("g"),o=t.x,l=(t.y,t.label),p=t.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),p)};n.loadPiePopup=function(e,n,a,t){b();var r=x(e).append("g"),o=t.label,l=t.value;m(r,o.display,l)}},1277:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),o=t(a(4));a(1278);var l={id:o.default.string.isRequired},p=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=l;var s=p;n.default=s},1280:function(e,n,a){var t,r;void 0===(r="function"==typeof(t=function(){var e="details",n="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function t(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(a);var t=a.offsetHeight;a.open=!0;var r=t!=a.offsetHeight;return document.body.removeChild(a),r}function r(e,n){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(a)}}t()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?t.call(n,a,n,e):t)||(e.exports=r)},1295:function(e,n,a){"use strict";a.r(n)},1296:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};n.default=t},1323:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a(31),r=a.n(t),o=a(55),l=a.n(o),p=(a(0),a(788)),s=["components"],i={},d="wrapper";function c(e){var n=e.components,a=l()(e,s);return Object(p.mdx)(d,r()({},i,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const getbarConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 8,\n      ticks: {\n        values: [1, 2, 3, 4, 5, 6, 7],\n        format: '.0f',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Bar Set A',\n      lowerLimit: 0,\n      upperLimit: 35,\n    },\n    y2: {\n      show: false,\n      label: 'Bar Set B',\n      lowerLimit: 0,\n      upperLimit: 30,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getbarConfig;\n\n\n")))}c.isMDXComponent=!0},1359:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1273)),o=a(1274),l={key:"grouped_bar_4",label:{display:"Dataset 4"},color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=l},1454:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1273)),o=a(1274),l={key:"uid_bar_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=l},1455:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1273)),o=a(1274),l={key:"grouped_bar_5",label:{display:"Dataset 5"},color:r.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:15},{x:2,y:10},{x:3,y:13},{x:4,y:8}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=l},1456:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a(31),r=a.n(t),o=a(55),l=a.n(o),p=(a(0),a(788)),s=["components"],i={},d="wrapper";function c(e){var n=e.components,a=l()(e,s);return Object(p.mdx)(d,r()({},i,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_4',\n  label: {\n    display: 'Dataset 4',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1698:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),o=t(a(1273)),l=t(a(1275));a(1276),a(1295);var p=t(a(1277)),s=t(a(1296)),i=t(a(1359)),d=t(a(1454)),c=t(a(1455)),u=l.default.deepClone((0,s.default)("#groupedGoalLineBarGraph")),m=[l.default.deepClone(i.default),l.default.deepClone(d.default),l.default.deepClone(c.default)];n.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(u);m.forEach((function(n){e.loadContent(o.default.api.bar(n))}))}),[]),r.default.createElement(p.default,{id:"groupedGoalLineBarGraph"})}},1991:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return _}));var t=a(31),r=a.n(t),o=a(55),l=a.n(o),p=a(0),s=a.n(p),i=a(788),d=a(1698),c=a.n(d),u=["components"],m={};function f(e){var n=e.components,a=l()(e,u);return Object(i.mdx)("wrapper",r()({},m,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1regions';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset2regions';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset3regions';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#groupedGoalLineBarGraph'));\n\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"groupedGoalLineBarGraph\" />\n  );\n};\n\n")))}f.isMDXComponent=!0;var x=a(1284),b=a.n(x),y=a(1285),g=function(e){var n=e.title,a=e.description,t=e.isExpanded;return s.a.createElement(b.a,{title:n||"Grouped Goal Lines",description:a,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(y.a,null),exampleSrc:s.a.createElement(f,null),isExpanded:t})},h=a(1323),v=a(1456),j=["components"],O={},L="wrapper";function C(e){var n=e.components,a=l()(e,j);return Object(i.mdx)(L,r()({},O,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_bar_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}C.isMDXComponent=!0;var w=["components"],D={},P="wrapper";function E(e){var n=e.components,a=l()(e,w);return Object(i.mdx)(P,r()({},D,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_5',\n  label: {\n    display: 'Dataset 5',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 15,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 8,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var k=["components"];a(1280);var B={},T="wrapper";function _(e){var n=e.components,a=l()(e,k);return Object(i.mdx)(T,r()({},B,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"grouped-bar-graph-with-goal-lines"},"Grouped Bar Graph with Goal Lines"),Object(i.mdx)("p",null,"This is a grouped bar graph with goal lines."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(g,{mdxType:"BarGraph"}),Object(i.mdx)("details",null,Object(i.mdx)("summary",{style:{fontSize:24}},Object(i.mdx)("b",null,"Data")),Object(i.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(i.mdx)(h.a,{mdxType:"GraphConfig"}),Object(i.mdx)("h3",{id:"data-object"},"Data object"),Object(i.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(i.mdx)(v.a,{mdxType:"DataObject1"}),Object(i.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(i.mdx)(C,{mdxType:"DataObject2"}),Object(i.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(i.mdx)(E,{mdxType:"DataObject3"})))}_.isMDXComponent=!0}}]);