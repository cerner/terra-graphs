(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=n(a(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=i?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(n,l,r):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(1282)),r=n(a(1279)),p=n(a(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},b=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),l=function(){var e=p[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,i.default)(e,2),n=a[0],o=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},r=0,p=Object.values(a);r<p.length;r++)l()},f=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},g=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=f(e).append("g"),i=n.x,l=n.y,r=n.label,p=n.high,c=n.mid,b=n.low;i?(m(o,"X axis","".concat(u(i)?s(i):i)),m(o,"".concat(r.display),l)):(m(o,"X axis","".concat(p?d(p.x):c?d(c.x):b?d(b.x):"N/A")),p&&m(o,"High",d(p.y)),c&&m(o,"Mid",d(c.y)),b&&m(o,"Low",d(b.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=f(e).append("g"),i=n.x,l=n.y,r=n.label,p=n.weight;i&&(m(o,"X axis","".concat(u(i)?s(i):i)),m(o,"year",l)),p&&m(o,"".concat(r.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){g();var o=f(e).append("g");n.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,i=t.label,l=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),i.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=f(e).append("g"),o=a.tasks,i=a.activities,l=a.events,r=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(n,"Tasks",p)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(n,"Activities",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),b(n,"Events",s)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),b(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){g();var o=f(e).append("g"),i=n.label,l=n.display,r=n.y,p=n.startDate,c=n.endDate,d=n.percentage;i&&m(o,"Task Name",l),m(o,"Track",r),m(o,"Start Date",s(p)),m(o,"End Date",s(c)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){g();var a=f(e).append("g"),n=t.label,o=t.value;n&&m(a,"Milestone",n.display),m(a,"Date",s(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=f(e).append("g"),i=n.x,l=(n.y,n.label),r=n.content;m(o,"X axis","".concat(u(i)?s(i):i)),m(o,"".concat(l.display),r)};t.loadPiePopup=function(e,t,a,n){g();var o=f(e).append("g"),i=n.label,l=n.value;m(o,i.display,l)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),i=n(a(4));a(1278);var l={id:i.default.string.isRequired},r=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};r.propTypes=l;var p=r;t.default=p},1280:function(e,t,a){var n,o;void 0===(o="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var o=n!=a.offsetHeight;return document.body.removeChild(a),o}function o(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=o)},1330:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),i=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}},pan:{enabled:!0}}};t.default=i},1405:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),i=a(55),l=a.n(i),r=(a(0),a(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,a=l()(e,p);return Object(r.mdx)(s,o()({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}d.isMDXComponent=!0},1463:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(1274),i=n(a(1273)),l={key:"bubble_dynamic_panning_data",label:{display:"Bubble set A"},onClick:o.loadBubblePopup,color:i.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=l},1464:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(1274),i=n(a(1273)),l={key:"bubble_dynamic_panning_data",label:{display:"Bubble set A"},onClick:o.loadBubblePopup,color:i.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:20},{x:new Date(2016,0,1,15,45).toISOString(),y:40},{x:new Date(2016,0,1,10,30).toISOString(),y:50},{x:new Date(2016,0,1,18,0).toISOString(),y:60}],yAxis:"y",showShapes:!1};t.default=l},1707:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),i=n(a(0)),l=n(a(78)),r=n(a(1273)),p=n(a(1275));a(1276);var c,s=n(a(1277)),d=n(a(1330)),u=n(a(1463)),m=n(a(1464)),b={initial:0,factor:3},f=p.default.deepClone(u.default),g=p.default.deepClone((0,d.default)("#BubbleDynamicDataPanning")),y=function(){i.default.useEffect((function(){(c=r.default.api.graph(g)).loadContent(r.default.api.bubbleSingleDataset(f))}),[]);var e=i.default.useReducer((function(e,t){var a;switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return{initial:a,factor:e.factor}}),b),t=(0,o.default)(e,2),a=t[0],n=t[1];return i.default.useLayoutEffect((function(){if(c){var e={panData:[m.default]};c.config.axis.x.lowerLimit=new Date(2016,0,1,a.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,a.initial).toISOString(),c.reflowMultipleDatasets(e)}}),[a.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),i.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),i.default.createElement(s.default,{id:"BubbleDynamicDataPanning"}))};t.default=y},2013:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(31),o=a.n(n),i=a(55),l=a.n(i),r=a(0),p=a.n(r),c=a(788),s=a(1707),d=a.n(s),u=["components"],m={};function b(e){var t=e.components,a=l()(e,u);return Object(c.mdx)("wrapper",o()({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';\nimport bubbleDynamicPanningData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDynamicPanningData1.js';\nimport bubbleDynamicPanningData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDynamicPanningData2.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nconst dataset = utils.deepClone(bubbleDynamicPanningData1);\nconst graphConfig = utils.deepClone(getSimpleAxisData('#BubbleDynamicDataPanning'));\nlet graph;\n\nconst BubblePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n    const newDataset = { panData: [bubbleDynamicPanningData2] };\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"BubbleDynamicDataPanning\" />\n    </>\n  );\n};\n\nexport default BubblePanningExample;\n\n")))}b.isMDXComponent=!0;var f=a(1284),g=a.n(f),y=a(1285),x=function(e){var t=e.title,a=e.description,n=e.isExpanded;return p.a.createElement(g.a,{title:t||"Dynamic Data",description:a,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(y.a,null),exampleSrc:p.a.createElement(b,null),isExpanded:n})},h=a(1405),v=["components"],D={},O="wrapper";function S(e){var t=e.components,a=l()(e,v);return Object(c.mdx)(O,o()({},D,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDynamicPanningData = {\n  key: 'bubble_dynamic_panning_data',\n  label: {\n    display: 'Bubble set A',\n  },\n  onClick: loadBubblePopup,\n  color: Carbon.helpers.COLORS.PINK,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 70,\n    },\n    {\n      x: new Date(2016, 0, 1, 15, 45).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 30).toISOString(),\n      y: 160,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 180,\n    },\n  ],\n  yAxis: 'y',\n  showShapes: false,\n};\n\nexport default bubbleDynamicPanningData;\n\n")))}S.isMDXComponent=!0;var j=["components"];a(1280);var w={},P="wrapper";function E(e){var t=e.components,a=l()(e,j);return Object(c.mdx)(P,o()({},w,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"bubble-graph-panning---dynamic-data"},"Bubble Graph Panning - Dynamic data"),Object(c.mdx)("p",null,"This is a Bubble graph example that implements panning with dynamic data."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(x,{mdxType:"BubbleSingleDatasetExample"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(h.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"initial-dataset"},"Initial Dataset"),Object(c.mdx)(S,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"updated-dataset"},"Updated Dataset"),Object(c.mdx)(S,{mdxType:"DataObject2"})))}E.isMDXComponent=!0}}]);