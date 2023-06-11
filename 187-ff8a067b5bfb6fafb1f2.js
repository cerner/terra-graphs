(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1378:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1288)),o=a(1290),s={key:"grouped_bar_4",label:{display:"Dataset 4"},color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=s},1466:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1288)),o=a(1290),s={key:"uid_bar_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=s},1467:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1288)),o=a(1290),s={key:"grouped_bar_5",label:{display:"Dataset 5"},color:r.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:15},{x:2,y:10},{x:3,y:13},{x:4,y:8}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};n.default=s},1468:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var t=a(31),r=a.n(t),o=a(55),s=a.n(o),p=(a(0),a(793)),d=["components"],l={},c="wrapper";function i(e){var n=e.components,a=s()(e,d);return Object(p.mdx)(c,r()({},l,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_4',\n  label: {\n    display: 'Dataset 4',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}i.isMDXComponent=!0},1713:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),o=t(a(1288)),s=t(a(1289));a(1291),a(1305);var p=t(a(1293)),d=t(a(1319)),l=t(a(1378)),c=t(a(1466)),i=t(a(1467)),m=s.default.deepClone((0,d.default)("#groupedGoalLineBarGraph")),x=[s.default.deepClone(l.default),s.default.deepClone(c.default),s.default.deepClone(i.default)];n.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(m);x.forEach((function(n){e.loadContent(o.default.api.bar(n))}))}),[]),r.default.createElement(p.default,{id:"groupedGoalLineBarGraph"})}},2002:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return N}));var t=a(31),r=a.n(t),o=a(55),s=a.n(o),p=a(0),d=a.n(p),l=a(793),c=a(1713),i=a.n(c),m=["components"],x={};function u(e){var n=e.components,a=s()(e,m);return Object(l.mdx)("wrapper",r()({},x,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1regions';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset2regions';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset3regions';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#groupedGoalLineBarGraph'));\n\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"groupedGoalLineBarGraph\" />\n  );\n};\n\n")))}u.isMDXComponent=!0;var b=a(1296),y=a.n(b),f=a(1297),g=function(e){var n=e.title,a=e.description,t=e.isExpanded;return d.a.createElement(y.a,{title:n||"Grouped Goal Lines",description:a,example:d.a.createElement(i.a,null),exampleCssSrc:d.a.createElement(f.a,null),exampleSrc:d.a.createElement(u,null),isExpanded:t})},h=a(1372),j=a(1468),O=["components"],C={},v="wrapper";function D(e){var n=e.components,a=s()(e,O);return Object(l.mdx)(v,r()({},C,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_bar_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}D.isMDXComponent=!0;var G=["components"],B={},L="wrapper";function E(e){var n=e.components,a=s()(e,G);return Object(l.mdx)(L,r()({},B,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_5',\n  label: {\n    display: 'Dataset 5',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 15,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 8,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var _=["components"];a(1299);var w={},P="wrapper";function N(e){var n=e.components,a=s()(e,_);return Object(l.mdx)(P,r()({},w,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"grouped-bar-graph-with-goal-lines"},"Grouped Bar Graph with Goal Lines"),Object(l.mdx)("p",null,"This is a grouped bar graph with goal lines."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(g,{mdxType:"BarGraph"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(h.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(l.mdx)(j.a,{mdxType:"DataObject1"}),Object(l.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(l.mdx)(D,{mdxType:"DataObject2"}),Object(l.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(l.mdx)(E,{mdxType:"DataObject3"})))}N.isMDXComponent=!0}}]);