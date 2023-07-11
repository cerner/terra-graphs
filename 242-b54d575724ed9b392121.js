(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{1540:function(t,e,n){"use strict";var a=n(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(1289),r=a(n(1287)),o=n(1289),l=[{key:"task10",onClick:i.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2016,0,1,9).toISOString(),endDate:new Date(2016,0,1,12).toISOString()},{key:"task11",onClick:i.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,23).toISOString()}],s=[{key:"uid_action_1",onClick:o.loadPopup,values:[new Date(2016,0,1,6,15).toISOString()]},{key:"uid_action_2",onClick:o.loadPopup,values:[new Date(2016,0,1,7,15).toISOString()]}],c=[{key:"uid_event_4",label:{display:"Defect A"},onClick:o.loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:r.default.helpers.COLORS.BLACK,values:[new Date(2016,0,1,5,15).toISOString()]}],p=[{key:"activity5",label:{display:"activity5"},onClick:function(){},color:"#FFDF00",startDate:new Date(2016,0,1,12).toISOString(),endDate:new Date(2016,0,1,15).toISOString(),style:{isDotted:!1,isHollow:!1}}],d={key:"track 0",trackLabel:{display:"Project A",onClick:i.loadXAndYAxisLabelPopup},tasks:l,actions:s,events:c,activities:p};e.default=d},1541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(1289),i={actions:[{key:"uid_action_1",values:[new Date(2016,0,1,7,15).toISOString(),new Date(2016,0,1,8,15).toISOString()]},{key:"uid_action_2",values:[new Date(2016,0,1,9,15).toISOString()]}],tasks:[{key:"task10",startDate:new Date(2016,0,1,0).toISOString(),endDate:new Date(2016,0,1,13).toISOString()},{key:"task11",startDate:new Date(2016,0,1,15).toISOString(),endDate:new Date(2016,0,1,20).toISOString()}],events:[{key:"uid_event_4",shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},values:[new Date(2016,0,1,2,15).toISOString()]}]},r={key:"track 1",trackLabel:{display:"Project B",onClick:a.loadXAndYAxisLabelPopup},actions:i.actions,tasks:i.tasks,events:i.events,activities:i.activities};e.default=r},1773:function(t,e,n){"use strict";var a=n(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n(43)),r=a(n(0)),o=a(n(1287)),l=a(n(78)),s=a(n(1288));n(1290),n(1305);var c,p=a(n(1292)),d=a(n(1362)),u=a(n(1540)),m=a(n(1541)),f=s.default.deepClone((0,d.default)("#ganttPanningMultipleDatasets")),g=[s.default.deepClone(u.default),s.default.deepClone(m.default)],h={initial:0,factor:3},b=function(){r.default.useEffect((function(){c=o.default.api.gantt(f),g.forEach((function(t){c.loadContent(t)}))}),[]);var t=r.default.useReducer((function(t,e){var n;switch(e.type){case"panLeft":n=t.initial-t.factor;break;case"panRight":n=t.initial+t.factor;break;default:return t}return{initial:n,factor:t.factor}}),h),e=(0,i.default)(t,2),n=e[0],a=e[1];return r.default.useLayoutEffect((function(){c&&(c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString(),c.reflowMultipleDatasets())}),[n.initial]),r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),r.default.createElement(l.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),r.default.createElement(p.default,{id:"ganttPanningMultipleDatasets"}))};e.default=b},2038:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return w}));var a=n(31),i=n.n(a),r=n(56),o=n.n(r),l=n(0),s=n.n(l),c=n(795),p=n(1773),d=n.n(p),u=["components"],m={};function f(t){var e=t.components,n=o()(t,u);return Object(c.mdx)("wrapper",i()({},m,n,{components:e,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport Button from 'terra-button/lib/Button';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttPanning';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/panningMultipleDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/panningMultipleDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttPanningConfig('#ganttPanningMultipleDatasets'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nlet graph;\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nconst GanttPanningMultipleDatasetsExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"ganttPanningMultipleDatasets\" />\n    </>\n  );\n};\n\nexport default GanttPanningMultipleDatasetsExample;\n\n")))}f.isMDXComponent=!0;var g=n(1295),h=n.n(g),b=n(1296),D=function(t){var e=t.title,n=t.description,a=t.isExpanded;return s.a.createElement(h.a,{title:e||"Multiple Datasets",description:n,example:s.a.createElement(d.a,null),exampleCssSrc:s.a.createElement(b.a,null),exampleSrc:s.a.createElement(f,null),isExpanded:a})},S=n(1537),x=["components"],O={},k="wrapper";function y(t){var e=t.components,n=o()(t,x);return Object(c.mdx)(k,i()({},O,n,{components:e,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup, loadXAndYAxisLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '../../popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst tasksData = [\n  {\n    key: 'task10',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2016, 0, 1, 9).toISOString(),\n    endDate: new Date(2016, 0, 1, 12).toISOString(),\n  },\n  {\n    key: 'task11',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2016, 0, 1, 15).toISOString(),\n    endDate: new Date(2016, 0, 1, 23).toISOString(),\n  },\n];\nconst actionsData = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2016, 0, 1, 7, 15).toISOString()],\n  },\n];\n\nconst eventData = [\n  {\n    key: 'uid_event_4',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2016, 0, 1, 5, 15).toISOString()],\n  },\n];\n\nconst activitiesData = [\n  {\n    key: 'activity5',\n    label: {\n      display: 'activity5',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2016, 0, 1, 12).toISOString(),\n    endDate: new Date(2016, 0, 1, 15).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nconst panningData = {\n  key: 'track 0',\n  trackLabel: {\n    display: 'Project A',\n    onClick: loadXAndYAxisLabelPopup,\n  },\n  tasks: tasksData,\n  actions: actionsData,\n  events: eventData,\n  activities: activitiesData,\n};\n\nexport default panningData;\n\n")))}y.isMDXComponent=!0;var v=["components"];n(1298);var C={},j="wrapper";function w(t){var e=t.components,n=o()(t,v);return Object(c.mdx)(j,i()({},C,n,{components:e,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-gantt-chart-panning---multiple-dataset"},"Simple Gantt chart panning - Multiple dataset"),Object(c.mdx)("p",null,"This is a simple Gantt chart example that implements panning with multiple datasets."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(D,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(S.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(c.mdx)(y,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(c.mdx)(y,{mdxType:"DataObject2"})))}w.isMDXComponent=!0}}]);