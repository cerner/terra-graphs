(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1274:function(e,t,n){"use strict";var a=n(2),r=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var o=a(n(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(1281)),l=a(n(1279)),p=a(n(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var r=a.append("g").classed("section",!0),i=function(){var e=p[l],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),a=n[0],r=n[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(r)}))},l=0,p=Object.values(n);l<p.length;l++)i()},g=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},b=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.high,c=a.mid,f=a.low;o?(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(l.display),i)):(m(r,"X axis","".concat(p?d(p.x):c?d(c.x):f?d(f.x):"N/A")),p&&m(r,"High",d(p.y)),c&&m(r,"Mid",d(c.y)),f&&m(r,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.x,i=a.y,l=a.label,p=a.weight;o&&(m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"year",i)),p&&m(r,"".concat(l.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){b();var r=g(e).append("g");a.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,o=t.label,i=t.color;p.default.notEmpty(r)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||l.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=g(e).append("g"),r=n.tasks,o=n.activities,i=n.events,l=n.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",c)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.label,i=a.display,l=a.y,p=a.startDate,c=a.endDate,d=a.percentage;o&&m(r,"Task Name",i),m(r,"Track",l),m(r,"Start Date",s(p)),m(r,"End Date",s(c)),d&&m(r,"Percentage",d)};t.loadDatelinePopup=function(e,t){b();var n=g(e).append("g"),a=t.label,r=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",s(r))};t.loadTimelinePopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.x,i=(a.y,a.label),l=a.content;m(r,"X axis","".concat(u(o)?s(o):o)),m(r,"".concat(i.display),l)};t.loadPiePopup=function(e,t,n,a){b();var r=g(e).append("g"),o=a.label,i=a.value;m(r,o.display,i)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4));n(1278);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var p=l;t.default=p},1280:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},1294:function(e,t,n){"use strict";n.r(t)},1301:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1273)),o=n(1274),i={key:"dynamic_dataset_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:new Date(2016,0,1,3).toISOString(),y:15},{x:new Date(2016,0,1,6).toISOString(),y:19},{x:new Date(2016,0,1,9).toISOString(),y:10},{x:new Date(2016,0,1,12).toISOString(),y:13},{x:new Date(2016,0,1,15).toISOString(),y:15}]};t.default=i},1328:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),r=n.n(a),o=n(55),i=n.n(o),l=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=i()(e,p);return Object(l.mdx)(s,r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dynamic_dataset_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 3).toISOString(),\n      y: 15,\n    },\n    {\n      x: new Date(2016, 0, 1, 6).toISOString(),\n      y: 19,\n    },\n    {\n      x: new Date(2016, 0, 1, 9).toISOString(),\n      y: 10,\n    },\n    {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      y: 13,\n    },\n    {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      y: 15,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1359:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1273)),o=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Data",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{values:[new Date(2016,0,1,3).toISOString(),new Date(2016,0,1,6).toISOString(),new Date(2016,0,1,9).toISOString(),new Date(2016,0,1,12).toISOString(),new Date(2016,0,1,15).toISOString()],format:"%H"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:20}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};t.default=o},1467:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"dynamic_dataset_1",values:[{x:new Date(2016,0,1,3).toISOString(),y:1},{x:new Date(2016,0,1,6).toISOString(),y:5},{x:new Date(2016,0,1,9).toISOString(),y:8},{x:new Date(2016,0,1,12).toISOString(),y:20},{x:new Date(2016,0,1,15).toISOString(),y:6}]};t.default=a},1468:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),r=n.n(a),o=n(55),i=n.n(o),l=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=i()(e,p);return Object(l.mdx)(s,r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getbarConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Data',\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      ticks: {\n        values: [\n          new Date(2016, 0, 1, 3).toISOString(),\n          new Date(2016, 0, 1, 6).toISOString(),\n          new Date(2016, 0, 1, 9).toISOString(),\n          new Date(2016, 0, 1, 12).toISOString(),\n          new Date(2016, 0, 1, 15).toISOString(),\n        ],\n        format: '%H',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Bar Set A',\n      lowerLimit: 0,\n      upperLimit: 20,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getbarConfig;\n\n\n")))}d.isMDXComponent=!0},1713:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(43)),o=a(n(0)),i=a(n(78)),l=a(n(1273)),p=a(n(1275));n(1276),n(1294);var c,s=a(n(1277)),d=a(n(1359)),u=a(n(1301)),m=a(n(1467)),f=p.default.deepClone((0,d.default)("#BarPanningDynamicData")),g=p.default.deepClone(u.default),b={initial:0,factor:3},y=function(){o.default.useEffect((function(){(c=l.default.api.graph(f)).loadContent(l.default.api.bar(g))}),[]);var e=o.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),b),t=(0,r.default)(e,2),n=t[0],a=t[1];return o.default.useLayoutEffect((function(){if(c){c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={panData:[p.default.deepClone(m.default)]};c.reflowMultipleDatasets(e)}}),[n.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(i.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(i.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(s.default,{id:"BarPanningDynamicData"}))};t.default=y},2023:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(31),r=n.n(a),o=n(55),i=n.n(o),l=n(0),p=n.n(l),c=n(788),s=n(1713),d=n.n(s),u=["components"],m={};function f(e){var t=e.components,n=i()(e,u);return Object(c.mdx)("wrapper",r()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';\nimport updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1newData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#BarPanningDynamicData'));\nconst dataset = utils.deepClone(initialData);\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst BarPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = { panData: [utils.deepClone(updatedData)] };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"BarPanningDynamicData\" />\n    </>\n  );\n};\n\nexport default BarPanningExample;\n\n")))}f.isMDXComponent=!0;var g=n(1284),b=n.n(g),y=n(1285),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Dynamic Data",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(y.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},h=n(1468),v=n(1328),S=["components"],O={},D="wrapper";function w(e){var t=e.components,n=i()(e,S);return Object(c.mdx)(D,r()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const data = {\n  key: 'dynamic_dataset_1',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 3).toISOString(),\n      y: 1,\n    },\n    {\n      x: new Date(2016, 0, 1, 6).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 9).toISOString(),\n      y: 8,\n    },\n    {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      y: 20,\n    },\n    {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      y: 6,\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var j=["components"];n(1280);var E={},L="wrapper";function C(e){var t=e.components,n=i()(e,j);return Object(c.mdx)(L,r()({},E,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"bar-graph-panning---dynamic-data"},"Bar graph panning - Dynamic data"),Object(c.mdx)("p",null,"This is a bar graph example that implements panning with dynamic data."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(x,{mdxType:"BarGraphPanning"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(h.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"initial-data"},"Initial Data"),Object(c.mdx)(v.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"updated-data"},"Updated Data"),Object(c.mdx)(w,{mdxType:"DataObject2"})))}C.isMDXComponent=!0}}]);