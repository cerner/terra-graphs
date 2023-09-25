(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1565:function(n,t,a){"use strict";var e=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(1317),o=e(a(1315)),r=a(1317),c=[{key:"task10",onClick:i.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,9).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task11",onClick:i.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],s=[{key:"uid_action_1",onClick:r.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:r.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],l=[{key:"uid_event_4",label:{display:"Defect A"},onClick:r.loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:o.default.helpers.COLORS.BLACK,values:[new Date(2016,0,1,5,15).toISOString()]}],d=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}],p={key:"track 0",trackLabel:{display:"Default",onClick:i.loadXAndYAxisLabelPopup},tasks:c,actions:s,events:l,activities:d};t.default=p},1566:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={key:"track 0",actions:[{key:"uid_action_1",values:[new Date(2016,0,1,7,15).toISOString(),new Date(2016,0,1,8,15).toISOString()]},{key:"uid_action_2",values:[new Date(2016,0,1,9,15).toISOString()]}],tasks:[{key:"task10",startDate:new Date(2016,0,1,0).toISOString(),endDate:new Date(2016,0,1,13).toISOString()},{key:"task11",startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,20).toISOString()}],events:[{key:"uid_event_4",shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},values:[new Date(2016,0,1,2,15).toISOString()]}],activities:[{key:"activity5",startDate:new Date(2016,0,1,3).toISOString(),endDate:new Date(2016,0,1,6).toISOString()}]};t.default=e},1799:function(n,t,a){"use strict";var e=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e(a(43)),o=e(a(0)),r=e(a(1315)),c=e(a(78)),s=e(a(1316));a(1318),a(1333);var l,d=e(a(1321)),p=e(a(1390)),u=e(a(1565)),m=e(a(1566)),D=s.default.deepClone((0,p.default)("#GanttPanningDynamicData")),g=[s.default.deepClone(u.default)],f={initial:0,factor:3};t.default=function(){o.default.useEffect((function(){l=r.default.api.gantt(D),g.forEach((function(n){l.loadContent(n)}))}),[]);var n=o.default.useReducer((function(n,t){var a;switch(t.type){case"panLeft":a=n.initial-n.factor;break;case"panRight":a=n.initial+n.factor;break;default:return n}return{initial:a,factor:n.factor}}),f),t=(0,i.default)(n,2),a=t[0],e=t[1];return o.default.useLayoutEffect((function(){if(l){l.config.axis.x.lowerLimit=new Date(2016,0,1,a.initial).toISOString(),l.config.axis.x.upperLimit=new Date(2016,0,2,a.initial).toISOString();var n={panData:[s.default.deepClone(s.default.deepClone(m.default))]};l.reflowMultipleDatasets(n)}}),[a.initial]),o.default.createElement(o.default.Fragment,null,o.default.createElement(c.default,{className:"button-pan-left",text:"<",onClick:function(){return e({type:"panLeft"})}}),o.default.createElement(c.default,{className:"button-pan-right",text:">",onClick:function(){return e({type:"panRight"})}}),o.default.createElement(d.default,{id:"GanttPanningDynamicData"}))}},2039:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var e=a(29),i=a.n(e),o=a(56),r=a.n(o),c=a(0),s=a.n(c),l=a(809),d=a(1799),p=a.n(d),u=["components"],m={};function D(n){var t=n.components,a=r()(n,u);return Object(l.mdx)("wrapper",i()({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport dynamicPanningDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset1';\nimport dynamicPanningDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/dynamicPanningDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#GanttPanningDynamicData'));\nconst dataset = [utils.deepClone(dynamicPanningDataset1)];\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst GanttPanningDynamicDataExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(utils.deepClone(dynamicPanningDataset2))],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"GanttPanningDynamicData\" />\n    </>\n  );\n};\n\nexport default GanttPanningDynamicDataExample;\n\n")))}D.isMDXComponent=!0;var g=a(1323),f=a.n(g),h=a(1324),y=function(n){var t=n.title,a=n.description,e=n.isExpanded;return s.a.createElement(f.a,{title:t||"Dynamic Data",description:a,example:s.a.createElement(p.a,null),exampleCssSrc:s.a.createElement(h.a,null),exampleSrc:s.a.createElement(D,null),isExpanded:e})},S=a(1567),b=["components"],O={},x="wrapper";function k(n){var t=n.components,a=r()(n,b);return Object(l.mdx)(x,i()({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '../../popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst tasksData = [\n  {\n    key: 'task10',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 9).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task11',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst eventData = [\n  {\n    key: 'uid_event_4',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2016, 0, 1, 5, 15).toISOString()],\n  },\n];\n\nconst activitiesData = [\n  {\n    key: 'activity5',\n    label: {\n      display: 'activity5',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2016, 0, 1, 12).toISOString(),\n    endDate: new Date(2016, 0, 1, 15).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nconst dynamicPanningDataset1 = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Default',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n  events: eventData,\n  activities: activitiesData,\n};\nexport default dynamicPanningDataset1;\n\n")))}k.isMDXComponent=!0;var v=["components"],w={},C="wrapper";function j(n){var t=n.components,a=r()(n,v);return Object(l.mdx)(C,i()({},w,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst dynamicDataActions = [\n  {\n    key: 'uid_action_1',\n    values: [\n      new Date(2016, 0, 1, 7, 15).toISOString(),\n      new Date(2016, 0, 1, 8, 15).toISOString(),\n    ],\n  },\n  {\n    key: 'uid_action_2',\n    values: [new Date(2016, 0, 1, 9, 15).toISOString()],\n  },\n];\n\nconst dynamicDataTasks = [\n  {\n    key: 'task10',\n    startDate: new Date(2016, 0, 1, 0).toISOString(),\n    endDate: new Date(2016, 0, 1, 13).toISOString(),\n  },\n  {\n    key: 'task11',\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 20).toISOString(),\n  },\n];\n\nconst dynamicDataEvents = [\n  {\n    key: 'uid_event_4',\n    shape: scheduled,\n    values: [new Date(2016, 0, 1, 2, 15).toISOString()],\n  },\n];\n\nconst dynamicDataActivities = [\n  {\n    key: 'activity5',\n    startDate: new Date(2016, 0, 1, 3).toISOString(),\n    endDate: new Date(2016, 0, 1, 6).toISOString(),\n  },\n];\n\nconst dynamicPanningDataset2 = {\n  key: 'track 0',\n  actions: dynamicDataActions,\n  tasks: dynamicDataTasks,\n  events: dynamicDataEvents,\n  activities: dynamicDataActivities,\n};\n\nexport default dynamicPanningDataset2;\n\n")))}j.isMDXComponent=!0;var I=["components"];a(1326);var P={},_="wrapper";function E(n){var t=n.components,a=r()(n,I);return Object(l.mdx)(_,i()({},P,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"gantt-chart-panning---dynamic-data"},"Gantt chart panning - dynamic data"),Object(l.mdx)("p",null,"This is a Gantt chart example that implements panning with dynamic data."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(y,{mdxType:"GanttChart"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(S.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)("h4",{id:"initial-dataset"},"Initial Dataset"),Object(l.mdx)(k,{mdxType:"InitialDataObject"}),Object(l.mdx)("h4",{id:"dynamic-dataset"},"Dynamic Dataset"),Object(l.mdx)(j,{mdxType:"DynamicDataObject"})))}E.isMDXComponent=!0}}]);