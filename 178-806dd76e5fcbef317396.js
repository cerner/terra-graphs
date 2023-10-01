(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{1362:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=[{key:"task3",onClick:t(1318).loadTaskPopup,label:{display:"Story Apex"},startDate:new Date(2018,3,1).toISOString(),endDate:new Date(2018,7,10).toISOString()}];n.default=a},1363:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}}}}},1411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(29),r=t.n(a),o=t(56),c=t.n(o),s=(t(0),t(809)),l=["components"],d={},i="wrapper";function p(e){var n=e.components,t=c()(e,l);return Object(s.mdx)(i,r()({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadTaskPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst taskDataset2 = [\n  {\n    key: 'task3',\n    onClick: loadTaskPopup,\n    label: {\n      display: 'Story Apex',\n    },\n    startDate: new Date(2018, 3, 1).toISOString(),\n    endDate: new Date(2018, 7, 10).toISOString(),\n  },\n];\n\nexport default taskDataset2;\n\n")))}p.isMDXComponent=!0},1415:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(29),r=t.n(a),o=t(56),c=t.n(o),s=(t(0),t(809)),l=["components"],d={},i="wrapper";function p(e){var n=e.components,t=c()(e,l);return Object(s.mdx)(i,r()({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const getGanttDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n});\n\nexport default getGanttDefaultConfig;\n\n\n")))}p.isMDXComponent=!0},1556:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1316)),o=[{key:"uid_event_1",label:{display:"Defect A"},onClick:t(1318).loadPopup,shape:{path:[{id:"calendar",d:"M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z"},{id:"circle",fill:"#78C346",d:"M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z"},{id:"check",fill:"#FFF",d:"M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z"}],options:{x:-7,y:-7,scale:.4}},color:r.default.helpers.COLORS.BLACK,values:[new Date(2018,2,5).toISOString()]},{key:"uid_event_2",label:{display:"Defect B"},shape:{path:[{id:"clock",d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"},{id:"diamond",fill:"#E50000",d:"M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z"},{id:"exclamation",fill:"#FFF",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}],options:{x:-7,y:-7,scale:.35}},color:r.default.helpers.COLORS.WHITE,values:[new Date(2018,5,4).toISOString()]},{key:"uid_event_3",label:{display:"Defect C"},shape:{path:[{id:"triangle",fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"},{id:"exclamation",fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}],options:{x:-6.5,y:-7.5,scale:.35}},values:[new Date(2018,3,30).toISOString()]}];n.default=o},1794:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(1316)),c=a(t(1317));t(1319),t(1334);var s=a(t(1322)),l=a(t(1363)),d=a(t(1349)),i=a(t(1362)),p=a(t(1556)),m=c.default.deepClone((0,l.default)("#ganttEvents"));m.showActionLegend=!1,m.dateline=[];var u=(0,d.default)([i.default],[],[p.default],[],1);n.default=function(){return r.default.useEffect((function(){var e=o.default.api.gantt(m);u.forEach((function(n){e.loadContent(n)}))}),[]),r.default.createElement(s.default,{id:"ganttEvents"})}},2064:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return M}));var a=t(29),r=t.n(a),o=t(56),c=t.n(o),s=t(0),l=t.n(s),d=t(809),i=t(1794),p=t.n(i),m=["components"],u={};function f(e){var n=e.components,t=c()(e,m);return Object(d.mdx)("wrapper",r()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttDefaultConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';\nimport eventDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/eventDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttEvents'));\ngraphConfig.showActionLegend = false;\ngraphConfig.dateline = [];\nconst dataset = loadTracks([taskDataset2], [], [eventDataset1], [], 1);\n\nconst GanttEventsExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttEvents\" />\n  );\n};\n\nexport default GanttEventsExample;\n\n")))}f.isMDXComponent=!0;var h=t(1324),b=t.n(h),g=t(1325),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(b.a,{title:n||"Events",description:t,example:l.a.createElement(p.a,null),exampleCssSrc:l.a.createElement(g.a,null),exampleSrc:l.a.createElement(f,null),isExpanded:a})},v=t(1415),O=t(1411),j=t(1412),D=["components"],C={},y="wrapper";function S(e){var n=e.components,t=c()(e,D);return Object(d.mdx)(y,r()({},C,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst scheduled = {\n  path: [\n    {\n      id: 'calendar',\n      d:\n        'M31 5V1.8c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8V5H11V1.8c0-1-.8-1.8-1.8-1.8H7.8C6.8'\n        + ' 0 6 .8 6 1.8V5H2v33h19.1c-.1-.7-.1-1.3-.1-2v-1H5V17h27v4.6c1-.3 2-.4 3-.5V5h-4z',\n    },\n    {\n      id: 'circle',\n      fill: '#78C346',\n      d:\n        'M36 24c6.6 0 12 5.4 12 12s-5.4 12-12 12-12-5.4-12-12 5.4-12 12-12z',\n    },\n    {\n      id: 'check',\n      fill: '#FFF',\n      d: 'M34.1 42.4l-6.5-6.5 2.1-2.1 4.4 4.3 8.2-8.1 2.1 2.1-10.3 10.3z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.4,\n  },\n};\n\nconst dueSoon = {\n  path: [\n    {\n      id: 'clock',\n      d:\n        'M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 '\n        + '1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 '\n        + '0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-'\n        + '1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9'\n        + '-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 '\n        + '5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z',\n    },\n    {\n      id: 'diamond',\n      fill: '#E50000',\n      d:\n        'M47.6 34.1s0-.1 0 0L35.7 22.2c-.2-.2-.5-.4-.8-.4s-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 '\n        + '.1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z',\n    },\n  ],\n  options: {\n    x: -7,\n    y: -7,\n    scale: 0.35,\n  },\n};\n\nconst alert = {\n  path: [\n    {\n      id: 'triangle',\n      fill: '#E50000',\n      d:\n        'M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z',\n    },\n    {\n      id: 'exclamation',\n      fill: '#FFF',\n      d: 'M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z',\n    },\n  ],\n  options: {\n    x: -6.5,\n    y: -7.5,\n    scale: 0.35,\n  },\n};\n\nconst eventDataset1 = [\n  {\n    key: 'uid_event_1',\n    label: {\n      display: 'Defect A',\n    },\n    onClick: loadPopup,\n    shape: scheduled,\n    color: Carbon.helpers.COLORS.BLACK,\n    values: [new Date(2018, 2, 5).toISOString()],\n  },\n  {\n    key: 'uid_event_2',\n    label: {\n      display: 'Defect B',\n    },\n    shape: dueSoon,\n    color: Carbon.helpers.COLORS.WHITE,\n    values: [new Date(2018, 5, 4).toISOString()],\n  },\n  {\n    key: 'uid_event_3',\n    label: {\n      display: 'Defect C',\n    },\n    shape: alert,\n    values: [new Date(2018, 3, 30).toISOString()],\n  },\n];\n\nexport default eventDataset1;\n\n")))}S.isMDXComponent=!0;var w=["components"];t(1327);var k={},E="wrapper";function M(e){var n=e.components,t=c()(e,w);return Object(d.mdx)(E,r()({},k,t,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(d.mdx)("p",null,"This is a simple Gantt chart with Events."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)(x,{mdxType:"GanttChart"}),Object(d.mdx)("details",null,Object(d.mdx)("summary",{style:{fontSize:24}},Object(d.mdx)("b",null,"Data")),Object(d.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(d.mdx)(v.a,{mdxType:"GraphConfig"}),Object(d.mdx)("h3",{id:"data-object"},"Data object"),Object(d.mdx)("h4",{id:"task-dataset"},"Task Dataset"),Object(d.mdx)(O.a,{mdxType:"TasksDataObject"}),Object(d.mdx)("h4",{id:"events-dataset"},"Events Dataset"),Object(d.mdx)(S,{mdxType:"EventsDataObject"}),Object(d.mdx)("h3",{id:"load-track"},"Load Track"),Object(d.mdx)(j.a,{mdxType:"LoadTracks"})))}M.isMDXComponent=!0}}]);