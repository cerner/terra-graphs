(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=a(n(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=i?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(1281)),r=a(n(1279)),p=a(n(1275));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var s=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?s(e):e:null},u=function(e){return e instanceof Date},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),l=function(){var e=p[r],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,i.default)(e,2),a=n[0],o=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},r=0,p=Object.values(n);r<p.length;r++)l()},g=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.x,l=a.y,r=a.label,p=a.high,c=a.mid,m=a.low;i?(f(o,"X axis","".concat(u(i)?s(i):i)),f(o,"".concat(r.display),l)):(f(o,"X axis","".concat(p?d(p.x):c?d(c.x):m?d(m.x):"N/A")),p&&f(o,"High",d(p.y)),c&&f(o,"Mid",d(c.y)),m&&f(o,"Low",d(m.y)))};t.loadBubblePopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.x,l=a.y,r=a.label,p=a.weight;i&&(f(o,"X axis","".concat(u(i)?s(i):i)),f(o,"year",l)),p&&f(o,"".concat(r.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){y();var o=g(e).append("g");a.forEach((function(e){return f(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){y();var a=g(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,i=t.label,l=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||r.default.DEFAULT_COLOR).attr("id",o.path.id),i.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;y(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){y();var a=g(e).append("g"),o=n.tasks,i=n.activities,l=n.events,r=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Tasks",p)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(a,"Activities",c)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,values:e.values.join(", ")})})),m(a,"Events",s)}if(r&&r.length>0){var d=[];r.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),m(a,"Actions",d)}};t.loadTaskPopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.label,l=a.display,r=a.y,p=a.startDate,c=a.endDate,d=a.percentage;i&&f(o,"Task Name",l),f(o,"Track",r),f(o,"Start Date",s(p)),f(o,"End Date",s(c)),d&&f(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){y();var n=g(e).append("g"),a=t.label,o=t.value;a&&f(n,"Milestone",a.display),f(n,"Date",s(o))};t.loadTimelinePopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.x,l=(a.y,a.label),r=a.content;f(o,"X axis","".concat(u(i)?s(i):i)),f(o,"".concat(l.display),r)};t.loadPiePopup=function(e,t,n,a){y();var o=g(e).append("g"),i=a.label,l=a.value;f(o,i.display,l)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),i=a(n(4));n(1278);var l={id:i.default.string.isRequired},r=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};r.propTypes=l;var p=r;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1287:function(e,t,n){"use strict";n.r(t)},1335:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),i=function(e){return 864e5*e},l=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},pan:{enabled:!0},showActionLegend:!0,dateline:[{showDatelineIndicator:!0,label:{display:"Release A"},color:"#C97318",shape:o.default.helpers.SHAPES.SQUARE,value:new Date(2016,0,1,9).toISOString()}],tracks:[{key:"track 1",dimension:{trackHeight:80},trackLabel:{display:"Project A",onClick:function(){}},tasks:[{key:"task1",label:{display:"Story A"},onClick:function(){},color:"#007cc3",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,1,10).toISOString(),duration:function(){return i(10)},percentage:40,dependencies:null,style:{isDotted:!0,isHollow:!0}}],activities:[{key:"uid_activity_1",label:{display:"Support"},onClick:function(){},startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,1,10).toISOString(),duration:function(){return i(12)},style:{isDotted:!1,isHollow:!1}}],events:[{key:"uid_event_1",label:{display:"Defect A"},onClick:function(){},shape:{path:{id:"caretUp",d:"M0,36l24-24l24,24H0z"},options:{x:-12,y:-12,scale:.5}},color:o.default.helpers.COLORS.BLUE,values:[new Date(2018,3,1,7,0).toISOString()]}],actions:[{key:"uid_action_1",onClick:function(){},values:[new Date(2018,2,1,6,15).toISOString(),new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,6,15).toISOString()]},{key:"uid_action_2",onClick:function(){},values:[new Date(2018,6,1,6,15).toISOString()]}]}],actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}]}};t.default=l},1367:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1274),o=n(1274),i=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,8).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],l=[{key:"uid_action_1",onClick:o.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:o.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],r={key:"track 0",trackLabel:{display:"Default",onClick:a.loadXAndYAxisLabelPopup},tasks:i,actions:l};t.default=r},1417:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),i=n(55),l=n.n(i),r=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=l()(e,p);return Object(r.mdx)(s,o()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst daysToMilliseconds = (d) => 24 * 60 * 60 * 1000 * d;\nconst getGanttPanningConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  pan: {\n    enabled: true,\n  },\n  showActionLegend: true,\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Release A',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.SQUARE,\n      value: new Date(2016, 0, 1, 9).toISOString(),\n    },\n  ],\n  tracks: [\n    {\n      key: 'track 1',\n      dimension: {\n        trackHeight: 80,\n      },\n      trackLabel: {\n        display: 'Project A',\n        onClick: () => {\n          // Call consumer implementation here or NOP\n        },\n      },\n      tasks: [\n        {\n          key: 'task1',\n          label: {\n            display: 'Story A',\n          },\n          onClick: () => {\n          },\n          color: '#007cc3',\n          startDate: new Date(2018, 1, 1).toISOString(),\n          endDate: new Date(2018, 1, 10).toISOString(),\n          duration: () => daysToMilliseconds(10),\n          percentage: 40,\n          dependencies: null, // TODO FUTURE implementation\n          style: {\n            isDotted: true,\n            isHollow: true,\n          },\n        },\n      ],\n      activities: [\n        // Optional, consumer can skip this to get a valid gantt chart.\n        {\n          key: 'uid_activity_1',\n          label: {\n            display: 'Support',\n          },\n          onClick: () => {\n          },\n          startDate: new Date(2018, 1, 1).toISOString(),\n          endDate: new Date(2018, 1, 10).toISOString(),\n          duration: () => daysToMilliseconds(12),\n          style: {\n            isDotted: false,\n            isHollow: false,\n          },\n        },\n      ],\n      events: [\n        {\n          key: 'uid_event_1',\n          label: {\n            display: 'Defect A',\n          },\n          onClick: () => {\n          },\n          shape: {\n            path: {\n              id: 'caretUp',\n              d: 'M0,36l24-24l24,24H0z',\n            },\n            options: {\n              x: -12,\n              y: -12,\n              scale: 0.5,\n            },\n          },\n          color: Carbon.helpers.COLORS.BLUE,\n          values: [new Date(2018, 3, 1, 7, 0).toISOString()],\n        },\n      ],\n      actions: [\n        {\n          key: 'uid_action_1',\n          onClick: () => {\n          },\n          values: [\n            new Date(2018, 2, 1, 6, 15).toISOString(),\n            new Date(2018, 3, 1, 6, 15).toISOString(),\n            new Date(2018, 4, 1, 6, 15).toISOString(),\n          ],\n        },\n        {\n          key: 'uid_action_2',\n          onClick: () => {\n          },\n          values: [new Date(2018, 6, 1, 6, 15).toISOString()],\n        },\n      ],\n    },\n  ],\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n});\n\nexport default getGanttPanningConfig;\n\n\n")))}d.isMDXComponent=!0},1536:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),o=n.n(a),i=n(55),l=n.n(i),r=(n(0),n(788)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=l()(e,p);return Object(r.mdx)(s,o()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { loadPopup } from '../../popup';\n\nconst tasksData = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 8).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\n\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst simplePanningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n};\n\nexport default simplePanningData;\n\n")))}d.isMDXComponent=!0},1772:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(43)),i=a(n(0)),l=a(n(1273)),r=a(n(78)),p=a(n(1275));n(1276),n(1287);var c,s=a(n(1277)),d=a(n(1335)),u=a(n(1367)),f=p.default.deepClone((0,d.default)("#simpleGanttPanning")),m=[p.default.deepClone(u.default)],g={initial:0,factor:3},y=function(){i.default.useEffect((function(){c=l.default.api.gantt(f),m.forEach((function(e){c.loadContent(e)}))}),[]);var e=i.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),g),t=(0,o.default)(e,2),n=t[0],a=t[1];return i.default.useLayoutEffect((function(){c&&(c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString(),c.reflowMultipleDatasets())}),[n.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(r.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(r.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(s.default,{id:"simpleGanttPanning"}))};t.default=y},2073:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n(31),o=n.n(a),i=n(55),l=n.n(i),r=n(0),p=n.n(r),c=n(788),s=n(1772),d=n.n(s),u=["components"],f={};function m(e){var t=e.components,n=l()(e,u);return Object(c.mdx)("wrapper",o()({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport graphData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/simplePanningData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#simpleGanttPanning'));\nconst dataset = [utils.deepClone(graphData)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst SimpleGanttPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"simpleGanttPanning\" />\n    </>\n  );\n};\n\nexport default SimpleGanttPanningExample;\n\n")))}m.isMDXComponent=!0;var g=n(1284),y=n.n(g),b=n(1285),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(y.a,{title:t||"Simple Panning",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(b.a,null),exampleSrc:p.a.createElement(m,null),isExpanded:a})},v=n(1417),S=n(1536),x=["components"];n(1280);var k={},D="wrapper";function O(e){var t=e.components,n=l()(e,x);return Object(c.mdx)(D,o()({},k,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-gantt-chart-panning"},"Simple Gantt chart panning"),Object(c.mdx)("p",null,"This is a simple Gantt chart example that implements panning."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(h,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(v.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(S.a,{mdxType:"DataObject"})))}O.isMDXComponent=!0}}]);