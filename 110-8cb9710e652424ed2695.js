(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=l?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(1281)),i=n(a(1279)),p=n(a(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},u=function(e){return e?d(e)?c(e):e:null},d=function(e){return e instanceof Date},b=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),r=function(){var e=p[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},i=0,p=Object.values(a);i<p.length;i++)r()},f=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){r.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},g=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){g();var o=f(e).append("g"),l=n.x,r=n.y,i=n.label,p=n.high,s=n.mid,m=n.low;l?(b(o,"X axis","".concat(d(l)?c(l):l)),b(o,"".concat(i.display),r)):(b(o,"X axis","".concat(p?u(p.x):s?u(s.x):m?u(m.x):"N/A")),p&&b(o,"High",u(p.y)),s&&b(o,"Mid",u(s.y)),m&&b(o,"Low",u(m.y)))};t.loadBubblePopup=function(e,t,a,n){g();var o=f(e).append("g"),l=n.x,r=n.y,i=n.label,p=n.weight;l&&(b(o,"X axis","".concat(d(l)?c(l):l)),b(o,"year",r)),p&&b(o,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){g();var o=f(e).append("g");n.forEach((function(e){return b(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){g();var n=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,r=t.color;p.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){g(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;g(),(a=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),r.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){g();var n=f(e).append("g"),o=a.tasks,l=a.activities,r=a.events,i=a.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(n,"Tasks",p)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(n,"Activities",s)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(n,"Events",c)}if(i&&i.length>0){var u=[];i.forEach((function(e){u.push({name:e.key,values:e.values.join(", ")})})),m(n,"Actions",u)}};t.loadTaskPopup=function(e,t,a,n){g();var o=f(e).append("g"),l=n.label,r=n.display,i=n.y,p=n.startDate,s=n.endDate,u=n.percentage;l&&b(o,"Task Name",r),b(o,"Track",i),b(o,"Start Date",c(p)),b(o,"End Date",c(s)),u&&b(o,"Percentage",u)};t.loadDatelinePopup=function(e,t){g();var a=f(e).append("g"),n=t.label,o=t.value;n&&b(a,"Milestone",n.display),b(a,"Date",c(o))};t.loadTimelinePopup=function(e,t,a,n){g();var o=f(e).append("g"),l=n.x,r=(n.y,n.label),i=n.content;b(o,"X axis","".concat(d(l)?c(l):l)),b(o,"".concat(r.display),i)};t.loadPiePopup=function(e,t,a,n){g();var o=f(e).append("g"),l=n.label,r=n.value;b(o,l.display,r)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(4));a(1278);var r={id:l.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=r;var p=i;t.default=p},1280:function(e,t,a){var n,o;void 0===(o="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var o=n!=a.offsetHeight;return document.body.removeChild(a),o}function o(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=o)},1312:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(1274),l=n(a(1273)),r={key:"bubble_basic_data",label:{display:"Bubble set A"},onClick:o.loadBubblePopup,color:l.default.helpers.COLORS.PINK,values:[{x:new Date(2016,0,1,12,0).toISOString(),y:70},{x:new Date(2016,0,1,15,45).toISOString(),y:120},{x:new Date(2016,0,1,10,30).toISOString(),y:160},{x:new Date(2016,0,1,18,0).toISOString(),y:180}],yAxis:"y",showShapes:!1};t.default=r},1329:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}},pan:{enabled:!0}}};t.default=l},1351:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(1274),l={key:"bubble_custom_radius_dataset",label:{display:"Bubble set B"},color:n(a(1273)).default.helpers.COLORS.LIGHT_BLUE,onClick:o.loadBubblePopup,weight:{fixedRadius:12},values:[{x:new Date(2016,0,1,6,0).toISOString(),y:100},{x:new Date(2016,0,1,10,0).toISOString(),y:120},{x:new Date(2016,0,1,12,0).toISOString(),y:180},{x:new Date(2016,0,1,18,0).toISOString(),y:220}],yAxis:"y"};t.default=l},1406:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),i=(a(0),a(788)),p=["components"],s={},c="wrapper";function u(e){var t=e.components,a=r()(e,p);return Object(i.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDataBasic = {\n  key: 'bubble_basic_data',\n  label: {\n    display: 'Bubble set A',\n  },\n  onClick: loadBubblePopup,\n  color: Carbon.helpers.COLORS.PINK,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 70,\n    },\n    {\n      x: new Date(2016, 0, 1, 15, 45).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 30).toISOString(),\n      y: 160,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 180,\n    },\n  ],\n  yAxis: 'y',\n  showShapes: false,\n};\n\nexport default bubbleDataBasic;\n\n")))}u.isMDXComponent=!0},1407:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),i=(a(0),a(788)),p=["components"],s={},c="wrapper";function u(e){var t=e.components,a=r()(e,p);return Object(i.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDataCustomRadius = {\n  key: 'bubble_custom_radius_dataset',\n  label: {\n    display: 'Bubble set B',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_BLUE,\n  onClick: loadBubblePopup,\n  weight: {\n    fixedRadius: 12,\n  },\n  values: [\n    {\n      x: new Date(2016, 0, 1, 6, 0).toISOString(),\n      y: 100,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 0).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 180,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 220,\n    },\n  ],\n  yAxis: 'y',\n};\n\nexport default bubbleDataCustomRadius;\n\n")))}u.isMDXComponent=!0},1408:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),i=(a(0),a(788)),p=["components"],s={},c="wrapper";function u(e){var t=e.components,a=r()(e,p);return Object(i.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}u.isMDXComponent=!0},1720:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(43)),l=n(a(0)),r=n(a(78)),i=n(a(1273)),p=n(a(1275));a(1276);var s,c=n(a(1277)),u=n(a(1329)),d=n(a(1312)),b=n(a(1351)),m=p.default.deepClone((0,u.default)("#BubbleMultipleDatasetsPanning")),f=p.default.deepClone(d.default),g=p.default.deepClone(b.default),x={initial:0,factor:3},y=function(){l.default.useEffect((function(){(s=i.default.api.graph(m)).loadContent(i.default.api.bubbleMultipleDataset(f)),s.loadContent(i.default.api.bubbleMultipleDataset(g))}),[]);var e=l.default.useReducer((function(e,t){var a;switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return{initial:a,factor:e.factor}}),x),t=(0,o.default)(e,2),a=t[0],n=t[1];return l.default.useLayoutEffect((function(){s&&(s.config.axis.x.lowerLimit=new Date(2016,0,1,a.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,a.initial).toISOString(),s.reflowMultipleDatasets())}),[a.initial]),l.default.createElement(l.default.Fragment,null,l.default.createElement(r.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),l.default.createElement(r.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),l.default.createElement(c.default,{id:"BubbleMultipleDatasetsPanning"}))};t.default=y},2064:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),i=a(0),p=a.n(i),s=a(788),c=a(1720),u=a.n(c),d=["components"],b={};function m(e){var t=e.components,a=r()(e,d);return Object(s.mdx)("wrapper",o()({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\nimport bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#BubbleMultipleDatasetsPanning'));\nconst dataset1 = utils.deepClone(bubbleDataBasic);\nconst dataset2 = utils.deepClone(bubbleDataCustomRadius);\n\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst BubblePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset1));\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset2));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"BubbleMultipleDatasetsPanning\" />\n    </>\n  );\n};\n\nexport default BubblePanningExample;\n\n")))}m.isMDXComponent=!0;var f=a(1284),g=a.n(f),x=a(1285),y=function(e){var t=e.title,a=e.description,n=e.isExpanded;return p.a.createElement(g.a,{title:t||"Multiple Datasets",description:a,example:p.a.createElement(u.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(m,null),isExpanded:n})},h=a(1408),v=a(1406),O=a(1407),D=["components"];a(1280);var S={},j="wrapper";function w(e){var t=e.components,a=r()(e,D);return Object(s.mdx)(j,o()({},S,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"bubble-graph-panning---multiple-datasets"},"Bubble Graph Panning - Multiple datasets"),Object(s.mdx)("p",null,"This is a bubble graph example that implements panning with multiple datasets."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(y,{mdxType:"BubbleMultipleDatasetExample"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(h.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"bubble-set-a-dataset"},"Bubble Set A Dataset"),Object(s.mdx)(v.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"bubble-set-b-dataset"},"Bubble Set B Dataset"),Object(s.mdx)(O.a,{mdxType:"DataObject2"})))}w.isMDXComponent=!0}}]);