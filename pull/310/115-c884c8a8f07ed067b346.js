(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=a(n(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=i?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(a,r,l):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(1282)),l=a(n(1279)),p=a(n(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),r=function(){var e=p[l],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,i.default)(e,2),a=n[0],o=n[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},l=0,p=Object.values(n);l<p.length;l++)r()},g=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){r.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},y=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.x,r=a.y,l=a.label,p=a.high,c=a.mid,f=a.low;i?(m(o,"X axis","".concat(u(i)?s(i):i)),m(o,"".concat(l.display),r)):(m(o,"X axis","".concat(p?d(p.x):c?d(c.x):f?d(f.x):"N/A")),p&&m(o,"High",d(p.y)),c&&m(o,"Mid",d(c.y)),f&&m(o,"Low",d(f.y)))};t.loadBubblePopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.x,r=a.y,l=a.label,p=a.weight;i&&(m(o,"X axis","".concat(u(i)?s(i):i)),m(o,"year",r)),p&&m(o,"".concat(l.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){y();var o=g(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){y();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,i=t.label,r=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||l.default.DEFAULT_COLOR).attr("id",o.path.id),i.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(i.display)),i.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),r.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){y();var a=g(e).append("g"),o=n.tasks,i=n.activities,r=n.events,l=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",c)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.label,r=a.display,l=a.y,p=a.startDate,c=a.endDate,d=a.percentage;i&&m(o,"Task Name",r),m(o,"Track",l),m(o,"Start Date",s(p)),m(o,"End Date",s(c)),d&&m(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){y();var n=g(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",s(o))};t.loadTimelinePopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.x,r=(a.y,a.label),l=a.content;m(o,"X axis","".concat(u(i)?s(i):i)),m(o,"".concat(r.display),l)};t.loadPiePopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.label,r=a.value;m(o,i.display,r)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(4));n(1278);var r={id:i.default.string.isRequired},l=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=r;var p=l;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1287:function(e,t,n){"use strict";n.r(t)},1368:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1274),o=n(1274),i=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,8).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],r=[{key:"uid_action_1",onClick:o.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:o.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],l={key:"track 0",trackLabel:{display:"Default",onClick:a.loadXAndYAxisLabelPopup},tasks:i,actions:r};t.default=l},1541:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),i=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},pan:{enabled:!0},showActionLegend:!0,eventline:[{color:o.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,4).toISOString()}],tracks:[{key:"track 1",dimension:{trackHeight:80},trackLabel:{display:"Project A",onClick:function(){}},actions:[{key:"uid_action_1",onClick:function(){},values:[new Date(2018,2,1,6,15).toISOString(),new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,6,15).toISOString()]},{key:"uid_action_2",onClick:function(){},values:[new Date(2018,6,1,6,15).toISOString()]}]}],actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}]}};t.default=i},1542:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=r()(e,p);return Object(l.mdx)(s,o()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { loadPopup } from '../../popup';\n\nconst tasksData = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 8).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\n\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst simplePanningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n};\n\nexport default simplePanningData;\n\n")))}d.isMDXComponent=!0},1759:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(43)),i=a(n(0)),r=a(n(1273)),l=a(n(78)),p=a(n(1275));n(1276),n(1287);var c,s=a(n(1277)),d=a(n(1541)),u=a(n(1368)),m=p.default.deepClone((0,d.default)("#GanttPanningWithDynamicEventline")),f=[p.default.deepClone(u.default)],g={initial:0,factor:3},y=function(){i.default.useEffect((function(){c=r.default.api.gantt(m),f.forEach((function(e){c.loadContent(e)}))}),[]);var e=i.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),g),t=(0,o.default)(e,2),n=t[0],a=t[1];return i.default.useLayoutEffect((function(){if(c){c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={eventline:[{color:r.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,6,30).toISOString()}]};c.reflowMultipleDatasets(e)}}),[n.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(s.default,{id:"GanttPanningWithDynamicEventline"}))};t.default=y},2028:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(31),o=n.n(a),i=n(55),r=n.n(i),l=n(0),p=n.n(l),c=n(788),s=n(1759),d=n.n(s),u=["components"],m={};function f(e){var t=e.components,n=r()(e,u);return Object(c.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningWithEventlineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanningWithEventline';\nimport graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getGanttPanningWithEventlineConfig('#GanttPanningWithDynamicEventline'));\nconst dataset = [utils.deepClone(graphData)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst GanttPanningWithDynamicEventlineExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newEventline = [\n      {\n        color: Carbon.helpers.COLORS.BLACK,\n        style: {\n          strokeDashArray: '2,2',\n        },\n        value: new Date(2016, 0, 1, 6, 30).toISOString(),\n      },\n    ];\n\n    const newDataset = {\n      eventline: newEventline,\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"GanttPanningWithDynamicEventline\" />\n    </>\n  );\n};\n\nexport default GanttPanningWithDynamicEventlineExample;\n\n")))}f.isMDXComponent=!0;var g=n(1284),y=n.n(g),h=n(1285),v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(y.a,{title:t||"Dynamic Eventline",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(h.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},b=["components"],x={},k="wrapper";function D(e){var t=e.components,n=r()(e,b);return Object(c.mdx)(k,o()({},x,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getGanttPanningWithEventlineConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  pan: {\n    enabled: true,\n  },\n  showActionLegend: true,\n  eventline: [\n    {\n      color: Carbon.helpers.COLORS.GREY,\n      style: {\n        strokeDashArray: '4,4',\n      },\n      value: new Date(2016, 0, 1, 4).toISOString(),\n    },\n  ],\n  tracks: [\n    {\n      key: 'track 1',\n      dimension: {\n        trackHeight: 80,\n      },\n      trackLabel: {\n        display: 'Project A',\n        onClick: () => {\n          // Call consumer implementation here or NOP\n        },\n      },\n      actions: [\n        {\n          key: 'uid_action_1',\n          onClick: () => {\n          },\n          values: [\n            new Date(2018, 2, 1, 6, 15).toISOString(),\n            new Date(2018, 3, 1, 6, 15).toISOString(),\n            new Date(2018, 4, 1, 6, 15).toISOString(),\n          ],\n        },\n        {\n          key: 'uid_action_2',\n          onClick: () => {\n          },\n          values: [new Date(2018, 6, 1, 6, 15).toISOString()],\n        },\n      ],\n    },\n  ],\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n});\n\nexport default getGanttPanningWithEventlineConfig;\n\n\n")))}D.isMDXComponent=!0;var S=n(1542),O=["components"];n(1280);var w={},C="wrapper";function E(e){var t=e.components,n=r()(e,O);return Object(c.mdx)(C,o()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"gantt-chart-panning---dynamic-eventline"},"Gantt chart panning - dynamic eventline"),Object(c.mdx)("p",null,"This is a simple Gantt chart example that implements panning with a dynamic eventline."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(v,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(D,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(S.a,{mdxType:"DataObject"})))}E.isMDXComponent=!0}}]);