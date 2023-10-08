(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1385:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(1323),o=[{key:"uid_action_1",onClick:a.loadPopup,values:[new Date(2018,2,1,6,15).toISOString()]},{key:"uid_action_2",onClick:a.loadPopup,values:[new Date(2018,7,1,6,15).toISOString()]}];n.default=o},1419:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(1323),o=[{key:"uid_action_1",onClick:a.loadPopup,values:[new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,7,15).toISOString()]},{key:"uid_action_2",onClick:a.loadPopup,values:[new Date(2018,5,1,9,15).toISOString()]}];n.default=o},1458:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(29),o=t.n(a),r=t(56),d=t.n(r),i=(t(0),t(814)),l=["components"],c={},s="wrapper";function p(e){var n=e.components,t=d()(e,l);return Object(i.mdx)(s,o()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst actionDataset1 = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2018, 2, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2018, 7, 1, 6, 15).toISOString()],\n  },\n];\n\nexport default actionDataset1;\n\n")))}p.isMDXComponent=!0},1549:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(29),o=t.n(a),r=t(56),d=t.n(r),i=(t(0),t(814)),l=["components"],c={},s="wrapper";function p(e){var n=e.components,t=d()(e,l);return Object(i.mdx)(s,o()({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst actionDataset2 = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [\n      new Date(2018, 3, 1, 6, 15).toISOString(),\n      new Date(2018, 4, 1, 7, 15).toISOString(),\n    ],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2018, 5, 1, 9, 15).toISOString()],\n  },\n];\n\nexport default actionDataset2;\n\n")))}p.isMDXComponent=!0},1562:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(1321)),r=t(1323);n.default=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}],dateline:[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:r.loadDatelinePopup,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:o.default.helpers.SHAPES.DARK.SQUARE,onClick:r.loadDatelinePopup,value:new Date(2018,8,5).toISOString()},{showDatelineIndicator:!0,label:{display:"DST End"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:r.loadDatelinePopup,value:new Date(2018,10,3).toISOString()}],showActionLegend:!0,removeContainerPadding:!0,legendPadding:{left:2.5,right:2.5,top:2.5,bottom:2.5}}}},1800:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(0)),r=a(t(1321)),d=a(t(1322));t(1324),t(1339);var i=a(t(1327)),l=a(t(1562)),c=a(t(1354)),s=a(t(1385)),p=a(t(1419)),u=d.default.deepClone((0,l.default)("#ganttGraphAndLegendPaddingReduced")),m=[d.default.deepClone(s.default),d.default.deepClone(p.default)],g=(0,c.default)([],[],[],m,2);n.default=function(){return o.default.useEffect((function(){var e=r.default.api.gantt(u);g.forEach((function(n){e.loadContent(n)}))}),[]),o.default.createElement(i.default,{id:"ganttGraphAndLegendPaddingReduced"})}},2070:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return k}));var a=t(29),o=t.n(a),r=t(56),d=t.n(r),i=t(0),l=t.n(i),c=t(814),s=t(1800),p=t.n(s),u=["components"],m={};function g(e){var n=e.components,t=d()(e,u);return Object(c.mdx)("wrapper",o()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttReducedPaddingConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';\nimport actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttDefaultConfig('#ganttGraphAndLegendPaddingReduced'));\nconst actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];\nconst dataset = loadTracks([], [], [], actions, 2);\n\nconst GanttGraphAndLegendPaddingReducedExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttGraphAndLegendPaddingReduced\" />\n  );\n};\n\nexport default GanttGraphAndLegendPaddingReducedExample;\n\n")))}g.isMDXComponent=!0;var b=t(1329),h=t.n(b),f=t(1330),D=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(h.a,{title:n||"Graph And Legend Padding Reduced",description:t,example:l.a.createElement(p.a,null),exampleCssSrc:l.a.createElement(f.a,null),exampleSrc:l.a.createElement(g,null),isExpanded:a})},x=["components"],O={},S="wrapper";function j(e){var n=e.components,t=d()(e,x);return Object(c.mdx)(S,o()({},O,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadDatelinePopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst getGanttReducedPaddingConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST Start',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 2, 10).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Current Date',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 8, 5).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST End',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 10, 3).toISOString(),\n    },\n  ],\n  showActionLegend: true,\n  removeContainerPadding: true,\n  legendPadding: {\n    left: 2.5,\n    right: 2.5,\n    top: 2.5,\n    bottom: 2.5,\n  },\n});\n\nexport default getGanttReducedPaddingConfig;\n\n\n")))}j.isMDXComponent=!0;var C=t(1458),v=t(1549),w=t(1417),P=["components"];t(1332);var y={},A="wrapper";function k(e){var n=e.components,t=d()(e,P);return Object(c.mdx)(A,o()({},y,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(c.mdx)("p",null,"This is a simple Gantt chart with reduced padding around graph and legend."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(D,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(j,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"action-dataset-1"},"Action Dataset 1"),Object(c.mdx)(C.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"action-dataset-2"},"Action Dataset 2"),Object(c.mdx)(v.a,{mdxType:"DataObject2"}),Object(c.mdx)("h3",{id:"load-track"},"Load Track"),Object(c.mdx)(w.a,{mdxType:"LoadTracks"})))}k.isMDXComponent=!0}}]);