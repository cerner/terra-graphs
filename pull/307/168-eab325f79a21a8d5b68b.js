(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=n(a(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var p=r?Object.getOwnPropertyDescriptor(e,l):null;p&&(p.get||p.set)?Object.defineProperty(n,l,p):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(1281)),p=n(a(1279)),i=n(a(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},b=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),l=function(){var e=i[p],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,r.default)(e,2),n=a[0],o=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},p=0,i=Object.values(a);p<i.length;p++)l()},f=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=f(e).append("g"),r=n.x,l=n.y,p=n.label,i=n.high,s=n.mid,b=n.low;r?(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(p.display),l)):(m(o,"X axis","".concat(i?d(i.x):s?d(s.x):b?d(b.x):"N/A")),i&&m(o,"High",d(i.y)),s&&m(o,"Mid",d(s.y)),b&&m(o,"Low",d(b.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=f(e).append("g"),r=n.x,l=n.y,p=n.label,i=n.weight;r&&(m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"year",l)),i&&m(o,"".concat(p.display),"".concat(i))};t.loadBarPopup=function(e,t,a,n){g();var o=f(e).append("g");n.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;i.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||p.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=f(e).append("g"),o=a.tasks,r=a.activities,l=a.events,p=a.actions;if(o&&o.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(n,"Tasks",i)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(n,"Activities",s)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),b(n,"Events",c)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),b(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){g();var o=f(e).append("g"),r=n.label,l=n.display,p=n.y,i=n.startDate,s=n.endDate,d=n.percentage;r&&m(o,"Task Name",l),m(o,"Track",p),m(o,"Start Date",c(i)),m(o,"End Date",c(s)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){g();var a=f(e).append("g"),n=t.label,o=t.value;n&&m(a,"Milestone",n.display),m(a,"Date",c(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=f(e).append("g"),r=n.x,l=(n.y,n.label),p=n.content;m(o,"X axis","".concat(u(r)?c(r):r)),m(o,"".concat(l.display),p)};t.loadPiePopup=function(e,t,a,n){g();var o=f(e).append("g"),r=n.label,l=n.value;m(o,r.display,l)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(4));a(1278);var l={id:r.default.string.isRequired},p=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=l;var i=p;t.default=i},1280:function(e,t,a){var n,o;void 0===(o="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var o=n!=a.offsetHeight;return document.body.removeChild(a),o}function o(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=o)},1306:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),r=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=r},1312:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(1274),r=n(a(1273)),l={key:"bubble_basic_data",label:{display:"Bubble set A"},onClick:o.loadBubblePopup,color:r.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=l},1405:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}d.isMDXComponent=!0},1407:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=l()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDataCustomRadius = {\n  key: 'bubble_custom_radius_dataset',\n  label: {\n    display: 'Bubble set B',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_BLUE,\n  onClick: loadBubblePopup,\n  weight: {\n    fixedRadius: 12,\n  },\n  values: [\n    {\n      x: new Date(2016, 0, 1, 6, 0).toISOString(),\n      y: 100,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 0).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 180,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 220,\n    },\n  ],\n  yAxis: 'y',\n};\n\nexport default bubbleDataCustomRadius;\n\n")))}d.isMDXComponent=!0},1718:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=n(a(1273)),l=n(a(1275));a(1276);var p=n(a(1277)),i=n(a(1306)),s=n(a(1312)),c=l.default.deepClone((0,i.default)("#customWeightGraph")),d=l.default.deepClone(s.default);t.default=function(){return o.default.useEffect((function(){r.default.api.graph(c).loadContent(r.default.api.bubbleSingleDataset(d))}),[]),o.default.createElement(p.default,{id:"customWeightGraph"})}},2063:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(31),o=a.n(n),r=a(55),l=a.n(r),p=a(0),i=a.n(p),s=a(788),c=a(1718),d=a.n(c),u=["components"],m={};function b(e){var t=e.components,a=l()(e,u);return Object(s.mdx)("wrapper",o()({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\n\n/*\nPlease refer to the documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#customWeightGraph'));\nconst dataset = utils.deepClone(bubbleDataBasic);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"customWeightGraph\" />\n  );\n};\n\n")))}b.isMDXComponent=!0;var f=a(1284),g=a.n(f),v=a(1285),x=function(e){var t=e.title,a=e.description,n=e.isExpanded;return i.a.createElement(g.a,{title:t||"Custom Weight Graph",description:a,example:i.a.createElement(d.a,null),exampleCssSrc:i.a.createElement(v.a,null),exampleSrc:i.a.createElement(b,null),isExpanded:n})},y=a(1405),h=a(1407),O=["components"];a(1280);var j={},D="wrapper";function w(e){var t=e.components,a=l()(e,O);return Object(s.mdx)(D,o()({},j,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"custom-bubble-weight"},"Custom Bubble Weight"),Object(s.mdx)("p",null,"A bubble graph with custom bubble weights."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"CustomWeightGraphExample"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(h.a,{mdxType:"DataObject"})))}w.isMDXComponent=!0}}]);