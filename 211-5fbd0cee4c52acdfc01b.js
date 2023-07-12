(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{1470:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1287)),s=n(1289),o={key:"stacked_bar_4",label:{display:"Dataset 4"},color:r.default.helpers.COLORS.GREEN,onClick:s.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};a.default=o},1471:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1287)),s=n(1289),o={key:"stacked_bar_5",label:{display:"Dataset 5"},group:"stacked_bar_4",color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:s.loadBarPopup,values:[{x:1,y:30},{x:2,y:5},{x:3,y:8},{x:4,y:10},{x:5,y:10},{x:6,y:10}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};a.default=o},1472:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1287)),s=n(1289),o={key:"stacked_bar_6",label:{display:"Dataset 6"},group:"stacked_bar_4",color:r.default.helpers.COLORS.BLUE,onClick:s.loadBarPopup,values:[{x:1,y:30},{x:2,y:8},{x:3,y:9},{x:4,y:10},{x:5,y:7}],regions:[{axis:"y",x:1,start:10,end:10},{axis:"y",x:2,start:40,end:40},{axis:"y",x:3,start:55,end:55},{axis:"y",x:4,start:30,end:30}]};a.default=o},1714:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),s=t(n(1287)),o=t(n(1288));n(1290),n(1304);var d=t(n(1293)),p=t(n(1318)),l=t(n(1470)),c=t(n(1471)),i=t(n(1472)),x=o.default.deepClone((0,p.default)("#stackedGoalLineBarGraph")),m=[o.default.deepClone(l.default),o.default.deepClone(c.default),o.default.deepClone(i.default)];a.default=function(){return r.default.useEffect((function(){var e=s.default.api.graph(x);m.forEach((function(a){e.loadContent(s.default.api.bar(a))}))}),[]),r.default.createElement(d.default,{id:"stackedGoalLineBarGraph"})}},1993:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return T}));var t=n(31),r=n.n(t),s=n(56),o=n.n(s),d=n(0),p=n.n(d),l=n(795),c=n(1714),i=n.n(c),x=["components"],m={};function u(e){var a=e.components,n=o()(e,x);return Object(l.mdx)("wrapper",r()({},m,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedGoalLinesData3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#stackedGoalLineBarGraph'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"stackedGoalLineBarGraph\" />\n  );\n};\n\n")))}u.isMDXComponent=!0;var b=n(1295),y=n.n(b),f=n(1296),h=function(e){var a=e.title,n=e.description,t=e.isExpanded;return p.a.createElement(y.a,{title:a||"Stacked Goal Lines",description:n,example:p.a.createElement(i.a,null),exampleCssSrc:p.a.createElement(f.a,null),exampleSrc:p.a.createElement(u,null),isExpanded:t})},g=n(1372),j=["components"],O={},C="wrapper";function v(e){var a=e.components,n=o()(e,j);return Object(l.mdx)(C,r()({},O,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_4',\n  label: {\n    display: 'Dataset 4',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 10,\n      end: 10,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 40,\n      end: 40,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 55,\n      end: 55,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 30,\n      end: 30,\n    },\n  ],\n};\n\nexport default data;\n\n")))}v.isMDXComponent=!0;var k=["components"],D={},_="wrapper";function G(e){var a=e.components,n=o()(e,k);return Object(l.mdx)(_,r()({},D,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_5',\n  label: {\n    display: 'Dataset 5',\n  },\n  group: 'stacked_bar_4',\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 5,\n    },\n    {\n      x: 3,\n      y: 8,\n    },\n    {\n      x: 4,\n      y: 10,\n    },\n    {\n      x: 5,\n      y: 10,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 10,\n      end: 10,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 40,\n      end: 40,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 55,\n      end: 55,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 30,\n      end: 30,\n    },\n  ],\n};\n\nexport default data;\n\n")))}G.isMDXComponent=!0;var L=["components"],B={},E="wrapper";function w(e){var a=e.components,n=o()(e,L);return Object(l.mdx)(E,r()({},B,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_6',\n  label: {\n    display: 'Dataset 6',\n  },\n  group: 'stacked_bar_4',\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 8,\n    },\n    {\n      x: 3,\n      y: 9,\n    },\n    {\n      x: 4,\n      y: 10,\n    },\n    {\n      x: 5,\n      y: 7,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 10,\n      end: 10,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 40,\n      end: 40,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 55,\n      end: 55,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 30,\n      end: 30,\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var P=["components"];n(1298);var N={},M="wrapper";function T(e){var a=e.components,n=o()(e,P);return Object(l.mdx)(M,r()({},N,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"stacked-bar-graph-with-goal-lines"},"Stacked Bar Graph With Goal Lines"),Object(l.mdx)("p",null,"This is a stacked bar graph with goal lines ."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(h,{mdxType:"BarGraph"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(g.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)("h4",{id:"dataset-4"},"Dataset 4"),Object(l.mdx)(v,{mdxType:"DataObject1"}),Object(l.mdx)("h4",{id:"dataset-5"},"Dataset 5"),Object(l.mdx)(G,{mdxType:"DataObject2"}),Object(l.mdx)("h4",{id:"dataset-6"},"Dataset 6"),Object(l.mdx)(w,{mdxType:"DataObject3"})))}T.isMDXComponent=!0}}]);