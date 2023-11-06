(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1408:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1320)),o=n(1322),p={key:"dataset_bar_1",label:{display:"Dataset 1"},color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}]};a.default=p},1489:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(29),r=n.n(t),o=n(56),p=n.n(o),s=(n(0),n(813)),d=["components"],l={},c="wrapper";function m(e){var a=e.components,n=p()(e,d);return Object(s.mdx)(c,r()({},l,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dataset_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n};\n\nexport default data;\n\n")))}m.isMDXComponent=!0},1493:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1320)),o=n(1322),p={key:"dataset_bar_2",label:{display:"Dataset 1"},color:r.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};a.default=p},1494:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1320)),o=n(1322),p={key:"grouped_bar_3",label:{display:"Dataset 3"},color:r.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:15},{x:2,y:10},{x:3,y:13},{x:4,y:8}]};a.default=p},1740:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=t(n(1320)),p=t(n(1321));n(1323),n(1337);var s=t(n(1326)),d=t(n(1351)),l=t(n(1408)),c=t(n(1493)),m=t(n(1494)),i=p.default.deepClone((0,d.default)("#groupedBarGraph")),u=[p.default.deepClone(l.default),p.default.deepClone(c.default),p.default.deepClone(m.default)];a.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(i);u.forEach((function(a){e.loadContent(o.default.api.bar(a))}))}),[]),r.default.createElement(s.default,{id:"groupedBarGraph"})}},2035:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n(29),r=n.n(t),o=n(56),p=n.n(o),s=n(0),d=n.n(s),l=n(813),c=n(1740),m=n.n(c),i=["components"],u={};function b(e){var a=e.components,n=p()(e,i);return Object(l.mdx)("wrapper",r()({},u,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#groupedBarGraph'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"groupedBarGraph\" />\n  );\n};\n\n")))}b.isMDXComponent=!0;var x=n(1328),f=n.n(x),h=n(1329),j=function(e){var a=e.title,n=e.description,t=e.isExpanded;return d.a.createElement(f.a,{title:a||"Grouped Bars",description:n,example:d.a.createElement(m.a,null),exampleCssSrc:d.a.createElement(h.a,null),exampleSrc:d.a.createElement(b,null),isExpanded:t})},g=n(1405),O=n(1489),y=["components"],C={},v="wrapper";function D(e){var a=e.components,n=p()(e,y);return Object(l.mdx)(v,r()({},C,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'dataset_bar_2',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}D.isMDXComponent=!0;var B=["components"],E={},_="wrapper";function G(e){var a=e.components,n=p()(e,B);return Object(l.mdx)(_,r()({},E,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_3',\n  label: {\n    display: 'Dataset 3',\n  },\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 15,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 8,\n    },\n  ],\n};\n\nexport default data;\n\n")))}G.isMDXComponent=!0;var P=["components"];n(1331);var w={},L="wrapper";function N(e){var a=e.components,n=p()(e,P);return Object(l.mdx)(L,r()({},w,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"grouped-bar-graph"},"Grouped Bar Graph"),Object(l.mdx)("p",null,"This is the graph with multiple bar contents grouped together."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(j,{mdxType:"BarGraph"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(g.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(l.mdx)(O.a,{mdxType:"DataObject1"}),Object(l.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(l.mdx)(D,{mdxType:"DataObject2"}),Object(l.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(l.mdx)(G,{mdxType:"DataObject3"})))}N.isMDXComponent=!0}}]);