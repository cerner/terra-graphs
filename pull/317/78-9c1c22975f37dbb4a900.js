(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1359:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1317),o=[{key:"task1",onClick:a.loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,2,1).toISOString(),endDate:new Date(2018,3,10).toISOString()},{key:"task2",onClick:a.loadTaskPopup,label:{display:"Story Broccoli"},startDate:new Date(2018,8,1).toISOString(),endDate:new Date(2018,9,10).toISOString()}];t.default=o},1378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(1317),o=[{key:"uid_action_1",onClick:a.loadPopup,values:[new Date(2018,2,1,6,15).toISOString()]},{key:"uid_action_2",onClick:a.loadPopup,values:[new Date(2018,7,1,6,15).toISOString()]}];t.default=o},1408:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(29),o=n.n(a),r=n(56),l=n.n(r),c=(n(0),n(809)),i=["components"],s={},d="wrapper";function p(e){var t=e.components,n=l()(e,i);return Object(c.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset1 = [\n  {\n    key: 'task1',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 2, 1).toISOString(),\n    endDate: new Date(2018, 3, 10).toISOString(),\n  },\n  {\n    key: 'task2',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Broccoli',\n    },\n    startDate: new Date(2018, 8, 1).toISOString(),\n    endDate: new Date(2018, 9, 10).toISOString(),\n  },\n];\n\nexport default taskDataset1;\n\n")))}p.isMDXComponent=!0},1411:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1315)),r=n(1317),l=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}],dateline:[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:r.loadDatelinePopup,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:o.default.helpers.SHAPES.DARK.SQUARE,onClick:r.loadDatelinePopup,value:new Date(2018,8,5).toISOString()},{showDatelineIndicator:!0,label:{display:"DST End"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:r.loadDatelinePopup,value:new Date(2018,10,3).toISOString()}]}};t.default=l},1414:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{key:"activity1",label:{display:"activity1"},onClick:function(){},color:"#FFDF00",startDate:new Date(2018,1,1).toISOString(),endDate:new Date(2018,4,10).toISOString(),style:{isDotted:!1,isHollow:!1}}];t.default=a},1451:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(29),o=n.n(a),r=n(56),l=n.n(r),c=(n(0),n(809)),i=["components"],s={},d="wrapper";function p(e){var t=e.components,n=l()(e,i);return Object(c.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst actionDataset1 = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2018, 2, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2018, 7, 1, 6, 15).toISOString()],\n  },\n];\n\nexport default actionDataset1;\n\n")))}p.isMDXComponent=!0},1538:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(29),o=n.n(a),r=n(56),l=n.n(r),c=(n(0),n(809)),i=["components"],s={},d="wrapper";function p(e){var t=e.components,n=l()(e,i);return Object(c.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadDatelinePopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst getGanttActionDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST Start',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 2, 10).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Current Date',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 8, 5).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST End',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 10, 3).toISOString(),\n    },\n  ],\n});\n\nexport default getGanttActionDefaultConfig;\n\n\n")))}p.isMDXComponent=!0},1559:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(29),o=n.n(a),r=n(56),l=n.n(r),c=(n(0),n(809)),i=["components"],s={},d="wrapper";function p(e){var t=e.components,n=l()(e,i);return Object(c.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const activityDataset1 = [\n  {\n    key: 'activity1',\n    label: {\n      display: 'activity1',\n    },\n    onClick: () => {},\n    color: '#FFDF00',\n    startDate: new Date(2018, 1, 1).toISOString(),\n    endDate: new Date(2018, 4, 10).toISOString(),\n    style: {\n      isDotted: false,\n      isHollow: false,\n    },\n  },\n];\n\nexport default activityDataset1;\n\n")))}p.isMDXComponent=!0},1560:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1315)),r={path:[{id:"triangle",fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"},{id:"exclamation",fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}],options:{x:-6.5,y:-7.5,scale:.35}},l=[{key:"uid_event_1",label:{display:"Defect A"},shape:{path:[{id:"clock",d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"},{id:"diamond",fill:"#E50000",d:"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z"},{id:"exclamation",fill:"#FFF",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}],options:{x:-7,y:-7,scale:.35}},values:[new Date(2018,4,30).toISOString()]},{key:"uid_event_2",label:{display:"Defect B"},shape:r,color:o.default.helpers.COLORS.GREEN,values:[new Date(2018,5,4).toISOString()]},{key:"uid_event_3",label:{display:"Defect C"},shape:r,color:o.default.helpers.COLORS.GREEN,values:[new Date(2018,9,5).toISOString()]}];t.default=l},1779:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1315)),l=a(n(1316));n(1318),n(1333);var c=a(n(1322)),i=a(n(1411)),s=a(n(1347)),d=a(n(1414)),p=a(n(1359)),u=a(n(1560)),m=a(n(1378)),b=l.default.deepClone((0,i.default)("#ganttTrackSelection")),D=(0,s.default)([p.default],[d.default],[u.default],[m.default],1,!0),f=function(){return o.default.useEffect((function(){var e=r.default.api.gantt(b);D.forEach((function(t){e.loadContent(t)}))}),[]),o.default.createElement(c.default,{id:"ganttTrackSelection"})};t.default=f},2047:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(29),o=n.n(a),r=n(56),l=n.n(r),c=n(0),i=n.n(c),s=n(809),d=n(1779),p=n.n(d),u=["components"],m={};function b(e){var t=e.components,n=l()(e,u);return Object(s.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport activityDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/activityDataset1';\nimport taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';\nimport eventDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset2';\nimport actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttTrackSelection'));\nconst dataset = loadTracks(\n  [taskDataset1],\n  [activityDataset1],\n  [eventDataset2],\n  [actionDataset1],\n  1,\n  true,\n);\n\nconst GanttTrackSelectionExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttTrackSelection\" />\n  );\n};\n\nexport default GanttTrackSelectionExample;\n\n")))}b.isMDXComponent=!0;var D=n(1324),f=n.n(D),h=n(1325),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(f.a,{title:t||"Track Selection",description:n,example:i.a.createElement(p.a,null),exampleCssSrc:i.a.createElement(h.a,null),exampleSrc:i.a.createElement(b,null),isExpanded:a})},S=n(1538),O=n(1559),x=n(1408),v=["components"],y={},j="wrapper";function k(e){var t=e.components,n=l()(e,v);return Object(s.mdx)(j,o()({},y,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst dueSoon = {\n  path: [\n    {\n      id: 'clock',\n      d:\n        'M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 '\n        + '1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 '\n        + '0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-'\n        + '1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9'\n        + '-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 '\n        + '5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z',\n    },\n    {\n      id: 'diamond',\n      fill: '#E50000',\n      d:\n        'M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 '\n        + '.1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.35,\n  },\n};\nconst alert = {\n  path: [\n    {\n      id: 'triangle',\n      fill: '#E50000',\n      d:\n        'M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z',\n    },\n  ],\n  options: {\n    x: -6.5,\n    y: -7.5,\n    scale: 0.35,\n  },\n};\n\nconst eventDataset2 = [\n  {\n    key: 'uid_event_1',\n    label: {\n      display: 'Defect A',\n    },\n    shape: dueSoon,\n    values: [new Date(2018, 4, 30).toISOString()],\n  },\n  {\n    key: 'uid_event_2',\n    label: {\n      display: 'Defect B',\n    },\n    shape: alert,\n    color: Carbon.helpers.COLORS.GREEN,\n    values: [new Date(2018, 5, 4).toISOString()],\n  },\n  {\n    key: 'uid_event_3',\n    label: {\n      display: 'Defect C',\n    },\n    shape: alert,\n    color: Carbon.helpers.COLORS.GREEN,\n    values: [new Date(2018, 9, 5).toISOString()],\n  },\n];\n\nexport default eventDataset2;\n\n")))}k.isMDXComponent=!0;var C=n(1451),w=n(1410),E=["components"];n(1326);var I={},T="wrapper";function A(e){var t=e.components,n=l()(e,E);return Object(s.mdx)(T,o()({},I,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(s.mdx)("p",null,"This is a simple Gantt chart with track selection."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(g,{mdxType:"GanttChart"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(S.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"activity-dataset"},"Activity Dataset"),Object(s.mdx)(O.a,{mdxType:"ActivityDataObject"}),Object(s.mdx)("h4",{id:"task-dataset"},"Task Dataset"),Object(s.mdx)(x.a,{mdxType:"TaskDataObject"}),Object(s.mdx)("h4",{id:"event-dataset"},"Event Dataset"),Object(s.mdx)(k,{mdxType:"EventDataObject"}),Object(s.mdx)("h4",{id:"action-dataset"},"Action Dataset"),Object(s.mdx)(C.a,{mdxType:"ActionDataObject"}),Object(s.mdx)("h3",{id:"load-track"},"Load Track"),Object(s.mdx)(w.a,{mdxType:"LoadTracks"})))}A.isMDXComponent=!0}}]);