(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1528:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),s=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},clickPassThrough:{task:!1,activity:!1,event:!1,action:!1,dateline:!1},eventline:[{color:r.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2018,10,13).toISOString()},{color:r.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2018,10,20).toISOString()}]}};t.default=s},1751:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),s=n(a(1273)),o=n(a(1275));a(1276),a(1287);var l=n(a(1277)),d=n(a(1528)),c=n(a(1300)),i=n(a(1326)),p=n(a(1327)),m=n(a(1346)),u=n(a(1347)),b=o.default.deepClone((0,d.default)("#ganttEventline")),f=[o.default.deepClone(i.default),o.default.deepClone(p.default),o.default.deepClone(m.default),o.default.deepClone(u.default)],g=(0,c.default)(f,[],[],[],4),x=function(){return r.default.useEffect((function(){var e=s.default.api.gantt(b);g.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(l.default,{id:"ganttEventline"})};t.default=x},2023:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(31),r=a.n(n),s=a(55),o=a.n(s),l=a(0),d=a.n(l),c=a(788),i=a(1751),p=a.n(i),m=["components"],u={};function b(e){var t=e.components,a=o()(e,m);return Object(c.mdx)("wrapper",r()({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttEventlineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttEventlineConfig';\nimport loadTracks from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/loadTracks';\nimport taskDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset1';\nimport taskDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset2';\nimport taskDataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset3';\nimport taskDataset4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/taskDataset4';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttEventlineConfig('#ganttEventline'));\nconst tasksData = [utils.deepClone(taskDataset1), utils.deepClone(taskDataset2), utils.deepClone(taskDataset3), utils.deepClone(taskDataset4)];\nconst dataset = loadTracks(tasksData, [], [], [], 4);\n\nconst GanttEventlineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttEventline\" />\n  );\n};\n\nexport default GanttEventlineExample;\n\n")))}b.isMDXComponent=!0;var f=a(1284),g=a.n(f),x=a(1285),h=function(e){var t=e.title,a=e.description,n=e.isExpanded;return d.a.createElement(g.a,{title:t||"Eventline",description:a,example:d.a.createElement(p.a,null),exampleCssSrc:d.a.createElement(x.a,null),exampleSrc:d.a.createElement(b,null),isExpanded:n})},O=["components"],j={},C="wrapper";function v(e){var t=e.components,a=o()(e,O);return Object(c.mdx)(C,r()({},j,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getGanttEventlineConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  clickPassThrough: {\n    task: false,\n    activity: false,\n    event: false,\n    action: false,\n    dateline: false,\n  },\n  eventline: [\n    {\n      color: Carbon.helpers.COLORS.GREY,\n      style: {\n        strokeDashArray: '4,4',\n      },\n      value: new Date(2018, 10, 13).toISOString(),\n    },\n    {\n      color: Carbon.helpers.COLORS.BLACK,\n      style: {\n        strokeDashArray: '2,2',\n      },\n      value: new Date(2018, 10, 20).toISOString(),\n    },\n  ],\n});\n\nexport default getGanttEventlineConfig;\n\n\n")))}v.isMDXComponent=!0;var D=a(1415),k=a(1416),E=a(1514),w=a(1515),y=a(1334),G=["components"];a(1280);var S={},T="wrapper";function L(e){var t=e.components,a=o()(e,G);return Object(c.mdx)(T,r()({},S,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(c.mdx)("p",null,"This is a simple Gantt chart with eventline."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(h,{mdxType:"GanttChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(v,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"task-dataset-1"},"Task Dataset 1"),Object(c.mdx)(D.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"task-dataset-2"},"Task Dataset 2"),Object(c.mdx)(k.a,{mdxType:"DataObject2"}),Object(c.mdx)("h4",{id:"task-dataset-3"},"Task Dataset 3"),Object(c.mdx)(E.a,{mdxType:"DataObject3"}),Object(c.mdx)("h4",{id:"task-dataset-4"},"Task Dataset 4"),Object(c.mdx)(w.a,{mdxType:"DataObject4"}),Object(c.mdx)("h3",{id:"load-track"},"Load Track"),Object(c.mdx)(y.a,{mdxType:"LoadTracks"})))}L.isMDXComponent=!0}}]);