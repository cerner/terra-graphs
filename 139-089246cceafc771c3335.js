(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1337:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(1275),o=[{key:"uid_action_1",onClick:a.loadPopup,values:[new Date(2018,2,1,6,15).toISOString()]},{key:"uid_action_2",onClick:a.loadPopup,values:[new Date(2018,7,1,6,15).toISOString()]}];n.default=o},1369:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(1273)),r=t(1275),i=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},actionLegend:[{key:"uid_action_1",label:{display:"Action A"}},{key:"uid_action_2",label:{display:"Action B"},shape:o.default.helpers.SHAPES.DARK.TRIANGLE,color:o.default.helpers.COLORS.GREEN}],dateline:[{showDatelineIndicator:!0,label:{display:"DST Start"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:r.loadDatelinePopup,value:new Date(2018,2,10).toISOString()},{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:o.default.helpers.SHAPES.DARK.SQUARE,onClick:r.loadDatelinePopup,value:new Date(2018,8,5).toISOString()},{showDatelineIndicator:!0,label:{display:"DST End"},color:"#405978",shape:o.default.helpers.SHAPES.DARK.DIAMOND,onClick:r.loadDatelinePopup,value:new Date(2018,10,3).toISOString()}]}};n.default=i},1370:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(1275),o=[{key:"uid_action_1",onClick:a.loadPopup,values:[new Date(2018,3,1,6,15).toISOString(),new Date(2018,4,1,7,15).toISOString()]},{key:"uid_action_2",onClick:a.loadPopup,values:[new Date(2018,5,1,9,15).toISOString()]}];n.default=o},1410:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),c=(t(0),t(788)),l=["components"],s={},p="wrapper";function d(e){var n=e.components,t=i()(e,l);return Object(c.mdx)(p,o()({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst actionDataset1 = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [new Date(2018, 2, 1, 6, 15).toISOString()],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2018, 7, 1, 6, 15).toISOString()],\n  },\n];\n\nexport default actionDataset1;\n\n")))}d.isMDXComponent=!0},1498:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),c=(t(0),t(788)),l=["components"],s={},p="wrapper";function d(e){var n=e.components,t=i()(e,l);return Object(c.mdx)(p,o()({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadDatelinePopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst getGanttActionDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  actionLegend: [\n    {\n      key: 'uid_action_1',\n      label: {\n        display: 'Action A',\n      },\n    },\n    {\n      key: 'uid_action_2',\n      label: {\n        display: 'Action B',\n      },\n      shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n      color: Carbon.helpers.COLORS.GREEN,\n    },\n  ],\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST Start',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 2, 10).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Current Date',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 8, 5).toISOString(),\n    },\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'DST End',\n      },\n      color: '#405978',\n      shape: Carbon.helpers.SHAPES.DARK.DIAMOND,\n      onClick: loadDatelinePopup,\n      value: new Date(2018, 10, 3).toISOString(),\n    },\n  ],\n});\n\nexport default getGanttActionDefaultConfig;\n\n\n")))}d.isMDXComponent=!0},1499:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),c=(t(0),t(788)),l=["components"],s={},p="wrapper";function d(e){var n=e.components,t=i()(e,l);return Object(c.mdx)(p,o()({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst actionDataset2 = [\n  {\n    key: 'uid_action_1',\n    onClick: loadPopup,\n    values: [\n      new Date(2018, 3, 1, 6, 15).toISOString(),\n      new Date(2018, 4, 1, 7, 15).toISOString(),\n    ],\n  },\n  {\n    key: 'uid_action_2',\n    onClick: loadPopup,\n    values: [new Date(2018, 5, 1, 9, 15).toISOString()],\n  },\n];\n\nexport default actionDataset2;\n\n")))}d.isMDXComponent=!0},1747:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(0)),r=a(t(1273)),i=a(t(1274));t(1276),t(1291);var c=a(t(1278)),l=a(t(1369)),s=a(t(1306)),p=a(t(1337)),d=a(t(1370)),u=i.default.deepClone((0,l.default)("#ganttActions"));u.showActionLegend=!0;var m=[i.default.deepClone(p.default),i.default.deepClone(d.default)],b=(0,s.default)([],[],[],m,2),f=function(){return o.default.useEffect((function(){var e=r.default.api.gantt(u);b.forEach((function(n){e.loadContent(n)}))}),[]),o.default.createElement(c.default,{id:"ganttActions"})};n.default=f},2056:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return w}));var a=t(31),o=t.n(a),r=t(55),i=t.n(r),c=t(0),l=t.n(c),s=t(788),p=t(1747),d=t.n(p),u=["components"],m={};function b(e){var n=e.components,t=i()(e,u);return Object(s.mdx)("wrapper",o()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttActionConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttActionConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport actionDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset1';\nimport actionDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/actionDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttActionConfig('#ganttActions'));\ngraphConfig.showActionLegend = true;\nconst actions = [utils.deepClone(actionDataset1), utils.deepClone(actionDataset2)];\nconst dataset = loadTracks([], [], [], actions, 2);\n\nconst GanttActionsExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttActions\" />\n  );\n};\nexport default GanttActionsExample;\n\n")))}b.isMDXComponent=!0;var f=t(1281),g=t.n(f),h=t(1282),D=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(g.a,{title:n||"Actions",description:t,example:l.a.createElement(d.a,null),exampleCssSrc:l.a.createElement(h.a,null),exampleSrc:l.a.createElement(b,null),isExpanded:a})},x=t(1498),O=t(1410),S=t(1499),j=(t(1368),["components"]);t(1284);var C={},v="wrapper";function w(e){var n=e.components,t=i()(e,j);return Object(s.mdx)(v,o()({},C,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"gantt-actions"},"Gantt Actions"),Object(s.mdx)("p",null,"This is a simple Gantt chart with actions."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(D,{mdxType:"GanttChart"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(x.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"action-dataset-1"},"Action Dataset 1"),Object(s.mdx)(O.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"action-dataset-2"},"Action Dataset 2"),Object(s.mdx)(S.a,{mdxType:"DataObject2"})))}w.isMDXComponent=!0}}]);