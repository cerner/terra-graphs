(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1274:function(n,e,t){"use strict";var a=t(2),i=t(18);Object.defineProperty(e,"__esModule",{value:!0}),e.loadY2AxisLabelPopup=e.loadXAndYAxisLabelPopup=e.loadTrackPopup=e.loadTimelinePopup=e.loadTextLabelPopup=e.loadTaskPopup=e.loadPopup=e.loadPiePopup=e.loadDatelinePopup=e.loadBubblePopup=e.loadBarPopup=void 0;var o=a(t(43)),l=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!==i(n)&&"function"!=typeof n)return{default:n};var t=s(e);if(t&&t.has(n))return t.get(n);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in n)if("default"!==l&&Object.prototype.hasOwnProperty.call(n,l)){var r=o?Object.getOwnPropertyDescriptor(n,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=n[l]}a.default=n,t&&t.set(n,a);return a}(t(1281)),r=a(t(1279)),c=a(t(1275));function s(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(s=function(n){return n?t:e})(n)}var p=function(n){return new Date(n).toLocaleString()},d=function(n){return n?u(n)?p(n):n:null},u=function(n){return n instanceof Date},m=function(n,e,t){var a=n.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(e),a.append("g").classed("popup-text",!0).text(t)},f=function(n,e,t){var a=n.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(e);for(var i=a.append("g").classed("section",!0),l=function(){var n=c[r],e=i.append("g").classed("content",!0);Object.entries(n).forEach((function(n){var t=(0,o.default)(n,2),a=t[0],i=t[1],l=e.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(n){return n.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(i)}))},r=0,c=Object.values(t);r<c.length;r++)l()},g=function(n){var e=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){l.select(e).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(n)&&n(),l.select("#overlay").remove(),e.removeEventListener("click",t),window.removeEventListener("resize",t)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},y=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};e.loadPopup=function(n,e,t,a){y();var i=g(n).append("g"),o=a.x,l=a.y,r=a.label,c=a.high,s=a.mid,f=a.low;o?(m(i,"X axis","".concat(u(o)?p(o):o)),m(i,"".concat(r.display),l)):(m(i,"X axis","".concat(c?d(c.x):s?d(s.x):f?d(f.x):"N/A")),c&&m(i,"High",d(c.y)),s&&m(i,"Mid",d(s.y)),f&&m(i,"Low",d(f.y)))};e.loadBubblePopup=function(n,e,t,a){y();var i=g(n).append("g"),o=a.x,l=a.y,r=a.label,c=a.weight;o&&(m(i,"X axis","".concat(u(o)?p(o):o)),m(i,"year",l)),c&&m(i,"".concat(r.display),"".concat(c))};e.loadBarPopup=function(n,e,t,a){y();var i=g(n).append("g");a.forEach((function(n){return m(i,"".concat(n.label.display),"".concat(n.y))}))};e.loadTextLabelPopup=function(n,e,t){y();var a=g(n).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),i=e.shape,o=e.label,l=e.color;c.default.notEmpty(i)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",i.options.scale,")")).attr("d",i.path.d).attr("fill",i.path.fill||r.default.DEFAULT_COLOR).attr("id",i.path.id),o.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(r.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};e.loadXAndYAxisLabelPopup=function(n){y(),g().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(n)};e.loadY2AxisLabelPopup=function(n){var e,t;y(),(t=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),c.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(n)};e.loadTrackPopup=function(n,e,t){y();var a=g(n).append("g"),i=t.tasks,o=t.activities,l=t.events,r=t.actions;if(i&&i.length>0){var c=[];c.forEach((function(n){c.push({name:n.key,startDate:n.startDate,endDate:n.endDate})})),f(a,"Tasks",c)}if(o&&o.length>0){var s=[];o.forEach((function(n){s.push({name:n.key,startDate:n.startDate,endDate:n.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var p=[];l.forEach((function(n){p.push({name:n.key,values:n.values.join(", ")})})),f(a,"Events",p)}if(r&&r.length>0){var d=[];r.forEach((function(n){d.push({name:n.key,values:n.values.join(", ")})})),f(a,"Actions",d)}};e.loadTaskPopup=function(n,e,t,a){y();var i=g(n).append("g"),o=a.label,l=a.display,r=a.y,c=a.startDate,s=a.endDate,d=a.percentage;o&&m(i,"Task Name",l),m(i,"Track",r),m(i,"Start Date",p(c)),m(i,"End Date",p(s)),d&&m(i,"Percentage",d)};e.loadDatelinePopup=function(n,e){y();var t=g(n).append("g"),a=e.label,i=e.value;a&&m(t,"Milestone",a.display),m(t,"Date",p(i))};e.loadTimelinePopup=function(n,e,t,a){y();var i=g(n).append("g"),o=a.x,l=(a.y,a.label),r=a.content;m(i,"X axis","".concat(u(o)?p(o):o)),m(i,"".concat(l.display),r)};e.loadPiePopup=function(n,e,t,a){y();var i=g(n).append("g"),o=a.label,l=a.value;m(i,o.display,l)}},1277:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t(0)),o=a(t(4));t(1278);var l={id:o.default.string.isRequired},r=function(n){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),i.default.createElement("div",{id:n.id,className:"example-graph-container"}))};r.propTypes=l;var c=r;e.default=c},1280:function(n,e,t){var a,i;void 0===(i="function"==typeof(a=function(){var n="details",e="summary";function t(n){if("summary"===n.target.nodeName.toLowerCase()){var e=n.target.parentNode;if(!e)return;e.getAttribute("open")?(e.open=!1,e.removeAttribute("open")):(e.open=!0,e.setAttribute("open","open"))}}function a(){var t=document.createElement(n);if(!("open"in t))return!1;t.innerHTML="<"+e+">a</"+e+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var i=a!=t.offsetHeight;return document.body.removeChild(t),i}function i(n,e){if(!document.getElementById(n)){var t=document.createElement("style");t.id=n,t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),i("details-polyfill-style","html.no-details "+n+" { display: block; }\nhtml.no-details "+n+":not([open]) > :not("+e+") { display: none; }\nhtml.no-details "+n+" > "+e+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+n+"[open] > "+e+':before { content: "▼"; }'))})?a.call(e,t,e,n):a)||(n.exports=i)},1287:function(n,e,t){"use strict";t.r(e)},1335:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t(1273)),o=function(n){return 864e5*n},l=function(n){return{bindTo:n,axis:{x:{show:!0,lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},pan:{enabled:!0},showActionLegend:!0,dateline:[{showDatelineIndicator:!0,label:{display:"Release A"},color:"#C97318",shape:i.default.helpers.SHAPES.SQUARE,value:new Date(2016,0,1,9).toISOString()}],tracks:[{key:"track 1",dimension:{trackHeight:80},trackLabel:{display:"Project A",onClick:function(){}},tasks:[{key:"task1",label:{display:"Story A"},onClick:function(){},color:"#007cc3",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,1,10).toISOString(),duration:function(){return o(10)},percentage:40,dependencies:null,style:{isDotted:!0,isHollow:!0}}],activities:[{key:"uid_activity_1",label:{display:"Support"},onClick:function(){},startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,1,10).toISOString(),duration:function(){return o(12)},style:{isDotted:!1,isHollow:!1}}],events:[{key:"uid_event_1",label:{display:"Defect A"},onClick:function(){},shape:{path:{id:"caretUp",d:"M0,36l24-24l24,24H0z"},options:{x:-12,y:-12,scale:.5}},color:i.default.helpers.COLORS.BLUE,values:[new Date(2018,3,1,7,0).toISOString()]}],actions:[{key:"uid_action_1",onClick:function(){},values:[new Date(2018,2,1,6,15).toISOString(),new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,6,15).toISOString()]},{key:"uid_action_2",onClick:function(){},values:[new Date(2018,6,1,6,15).toISOString()]}]}],actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:i.default.helpers.SHAPES.DARK.TRIANGLE,color:i.default.helpers.COLORS.GREEN}]}};e.default=l},1417:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t(31),i=t.n(a),o=t(55),l=t.n(o),r=(t(0),t(788)),c=["components"],s={},p="wrapper";function d(n){var e=n.components,t=l()(n,c);return Object(r.mdx)(p,i()({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst daysToMilliseconds = (d) => 24 * 60 * 60 * 1000 * d;\nconst getGanttPanningConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  pan: {\n    enabled: true,\n  },\n  showActionLegend: true,\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Release A',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.SQUARE,\n      value: new Date(2016, 0, 1, 9).toISOString(),\n    },\n  ],\n  tracks: [\n    {\n      key: 'track 1',\n      dimension: {\n        trackHeight: 80,\n      },\n      trackLabel: {\n        display: 'Project A',\n        onClick: () => {\n          // Call consumer implementation here or NOP\n        },\n      },\n      tasks: [\n        {\n          key: 'task1',\n          label: {\n            display: 'Story A',\n          },\n          onClick: () => {\n          },\n          color: '#007cc3',\n          startDate: new Date(2018, 1, 1).toISOString(),\n          endDate: new Date(2018, 1, 10).toISOString(),\n          duration: () => daysToMilliseconds(10),\n          percentage: 40,\n          dependencies: null, // TODO FUTURE implementation\n          style: {\n            isDotted: true,\n            isHollow: true,\n          },\n        },\n      ],\n      activities: [\n        // Optional, consumer can skip this to get a valid gantt chart.\n        {\n          key: 'uid_activity_1',\n          label: {\n            display: 'Support',\n          },\n          onClick: () => {\n          },\n          startDate: new Date(2018, 1, 1).toISOString(),\n          endDate: new Date(2018, 1, 10).toISOString(),\n          duration: () => daysToMilliseconds(12),\n          style: {\n            isDotted: false,\n            isHollow: false,\n          },\n        },\n      ],\n      events: [\n        {\n          key: 'uid_event_1',\n          label: {\n            display: 'Defect A',\n          },\n          onClick: () => {\n          },\n          shape: {\n            path: {\n              id: 'caretUp',\n              d: 'M0,36l24-24l24,24H0z',\n            },\n            options: {\n              x: -12,\n              y: -12,\n              scale: 0.5,\n            },\n          },\n          color: Carbon.helpers.COLORS.BLUE,\n          values: [new Date(2018, 3, 1, 7, 0).toISOString()],\n        },\n      ],\n      actions: [\n        {\n          key: 'uid_action_1',\n          onClick: () => {\n          },\n          values: [\n            new Date(2018, 2, 1, 6, 15).toISOString(),\n            new Date(2018, 3, 1, 6, 15).toISOString(),\n            new Date(2018, 4, 1, 6, 15).toISOString(),\n          ],\n        },\n        {\n          key: 'uid_action_2',\n          onClick: () => {\n          },\n          values: [new Date(2018, 6, 1, 6, 15).toISOString()],\n        },\n      ],\n    },\n  ],\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n});\n\nexport default getGanttPanningConfig;\n\n\n")))}d.isMDXComponent=!0},1533:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(1274),o=a(t(1273)),l=t(1274),r=[{key:"task10",onClick:i.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,9).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task11",onClick:i.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],c=[{key:"uid_action_1",onClick:l.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:l.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],s=[{key:"uid_event_4",label:{display:"Defect A"},onClick:l.loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:o.default.helpers.COLORS.BLACK,values:[new Date(2016,0,1,5,15).toISOString()]}],p=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}],d={key:"track 0",trackLabel:{display:"Default",onClick:i.loadXAndYAxisLabelPopup},tasks:r,actions:c,events:s,activities:p};e.default=d},1534:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={key:"track 0",actions:[{key:"uid_action_1",values:[new Date(2016,0,1,7,15).toISOString(),new Date(2016,0,1,8,15).toISOString()]},{key:"uid_action_2",values:[new Date(2016,0,1,9,15).toISOString()]}],tasks:[{key:"task10",startDate:new Date(2016,0,1,0).toISOString(),endDate:new Date(2016,0,1,13).toISOString()},{key:"task11",startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,20).toISOString()}],events:[{key:"uid_event_4",shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},values:[new Date(2016,0,1,2,15).toISOString()]}],activities:[{key:"activity5",startDate:new Date(2016,0,1,3).toISOString(),endDate:new Date(2016,0,1,6).toISOString()}]};e.default=a},1769:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t(43)),o=a(t(0)),l=a(t(1273)),r=a(t(78)),c=a(t(1275));t(1276),t(1287);var s,p=a(t(1277)),d=a(t(1335)),u=a(t(1533)),m=a(t(1534)),f=c.default.deepClone((0,d.default)("#GanttPanningDynamicData")),g=[c.default.deepClone(u.default)],y={initial:0,factor:3},D=function(){o.default.useEffect((function(){s=l.default.api.gantt(f),g.forEach((function(n){s.loadContent(n)}))}),[]);var n=o.default.useReducer((function(n,e){var t;switch(e.type){case"panLeft":t=n.initial-n.factor;break;case"panRight":t=n.initial+n.factor;break;default:return n}return{initial:t,factor:n.factor}}),y),e=(0,i.default)(n,2),t=e[0],a=e[1];return o.default.useLayoutEffect((function(){if(s){s.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString();var n={panData:[c.default.deepClone(c.default.deepClone(m.default))]};s.reflowMultipleDatasets(n)}}),[t.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(r.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),o.default.createElement(r.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),o.default.createElement(p.default,{id:"GanttPanningDynamicData"}))};e.default=D},2011:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return _}));var a=t(31),i=t.n(a),o=t(55),l=t.n(o),r=t(0),c=t.n(r),s=t(788),p=t(1769),d=t.n(p),u=["components"],m={};function f(n){var e=n.components,t=l()(n,u);return Object(s.mdx)("wrapper",i()({},m,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport dynamicPanningDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset1';\nimport dynamicPanningDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#GanttPanningDynamicData'));\nconst dataset = [utils.deepClone(dynamicPanningDataset1)];\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst GanttPanningDynamicDataExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(utils.deepClone(dynamicPanningDataset2))],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"GanttPanningDynamicData\" />\n    </>\n  );\n};\n\nexport default GanttPanningDynamicDataExample;\n\n")))}f.isMDXComponent=!0;var g=t(1284),y=t.n(g),D=t(1285),v=function(n){var e=n.title,t=n.description,a=n.isExpanded;return c.a.createElement(y.a,{title:e||"Dynamic Data",description:t,example:c.a.createElement(d.a,null),exampleCssSrc:c.a.createElement(D.a,null),exampleSrc:c.a.createElement(f,null),isExpanded:a})},h=t(1417),b=["components"],S={},k="wrapper";function O(n){var e=n.components,t=l()(n,b);return Object(s.mdx)(k,i()({},S,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '../../popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst tasksData = [\n  {\n    key: 'task10',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 9).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task11',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst eventData = [\n  {\n    key: 'uid_event_4',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2016, 0, 1, 5, 15).toISOString()],\n  },\n];\n\nconst activitiesData = [\n  {\n    key: 'activity5',\n    label: {\n      display: 'activity5',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2016, 0, 1, 12).toISOString(),\n    endDate: new Date(2016, 0, 1, 15).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nconst dynamicPanningDataset1 = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n  events: eventData,\n  activities: activitiesData,\n};\nexport default dynamicPanningDataset1;\n\n")))}O.isMDXComponent=!0;var x=["components"],w={},C="wrapper";function P(n){var e=n.components,t=l()(n,x);return Object(s.mdx)(C,i()({},w,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst dynamicDataActions = [\n  {\n    key: 'uid_action_1',\n    values: [\n      new Date(2016, 0, 1, 7, 15).toISOString(),\n      new Date(2016, 0, 1, 8, 15).toISOString(),\n    ],\n  },\n  {\n    key: 'uid_action_2',\n    values: [new Date(2016, 0, 1, 9, 15).toISOString()],\n  },\n];\n\nconst dynamicDataTasks = [\n  {\n    key: 'task10',\n    startDate: new Date(2016, 0, 1, 0).toISOString(),\n    endDate: new Date(2016, 0, 1, 13).toISOString(),\n  },\n  {\n    key: 'task11',\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 20).toISOString(),\n  },\n];\n\nconst dynamicDataEvents = [\n  {\n    key: 'uid_event_4',\n    shape: scheduled,\n    values: [new Date(2016, 0, 1, 2, 15).toISOString()],\n  },\n];\n\nconst dynamicDataActivities = [\n  {\n    key: 'activity5',\n    startDate: new Date(2016, 0, 1, 3).toISOString(),\n    endDate: new Date(2016, 0, 1, 6).toISOString(),\n  },\n];\n\nconst dynamicPanningDataset2 = {\n  key: 'track 0',\n  actions: dynamicDataActions,\n  tasks: dynamicDataTasks,\n  events: dynamicDataEvents,\n  activities: dynamicDataActivities,\n};\n\nexport default dynamicPanningDataset2;\n\n")))}P.isMDXComponent=!0;var j=["components"];t(1280);var I={},E="wrapper";function _(n){var e=n.components,t=l()(n,j);return Object(s.mdx)(E,i()({},I,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"gantt-chart-panning---dynamic-data"},"Gantt chart panning - dynamic data"),Object(s.mdx)("p",null,"This is a Gantt chart example that implements panning with dynamic data."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(v,{mdxType:"GanttChart"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(h.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"initial-dataset"},"Initial Dataset"),Object(s.mdx)(O,{mdxType:"InitialDataObject"}),Object(s.mdx)("h4",{id:"dynamic-dataset"},"Dynamic Dataset"),Object(s.mdx)(P,{mdxType:"DynamicDataObject"})))}_.isMDXComponent=!0}}]);