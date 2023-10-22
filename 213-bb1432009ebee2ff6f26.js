(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1414:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1321)),i=a(1323),l={key:"paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y2",shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLACK,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}]};n.default=l},1520:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1321)),i=a(1323),l={key:"line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:i.loadPopup,values:new Array(50).fill("").map((function(e,n){return{y:5*Math.sin(n)+10,x:10+5*n}}))};n.default=l},1521:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a(29),r=a.n(t),i=a(56),l=a.n(i),o=(a(0),a(814)),s=["components"],p={},d="wrapper";function c(e){var n=e.components,a=l()(e,s);return Object(o.mdx)(d,r()({},p,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y2',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1763:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),i=t(a(1321)),l=t(a(1322));a(1324),a(1326),a(1337);var o=t(a(1327)),s=t(a(1379)),p=t(a(1520)),d=t(a(1414)),c=l.default.deepClone((0,s.default)("#lineWithPairedResult")),m=[l.default.deepClone(p.default),l.default.deepClone(d.default)];n.default=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);e.loadContent(i.default.api.line(m[0])),e.loadContent(i.default.api.pairedResult(m[1]))}),[]),r.default.createElement(o.default,{id:"lineWithPairedResult"})}},2062:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return D}));var t=a(29),r=a.n(t),i=a(56),l=a.n(i),o=a(0),s=a.n(o),p=a(814),d=a(1763),c=a.n(d),m=["components"],u={};function h(e){var n=e.components,a=l()(e,m);return Object(p.mdx)("wrapper",r()({},u,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset2';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResult'));\nconst dataset = [\n  utils.deepClone(lineDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst LineWithPairedResultCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithPairedResult\" />\n  );\n};\n\nexport default LineWithPairedResultCombinationExample;\n\n")))}h.isMDXComponent=!0;var b=a(1329),x=a.n(b),f=a(1330),g=function(e){var n=e.title,a=e.description,t=e.isExpanded;return s.a.createElement(x.a,{title:n||"Line With Paired Result",description:a,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(f.a,null),exampleSrc:s.a.createElement(h,null),isExpanded:t})},C=a(1470),O=["components"],j={},y="wrapper";function R(e){var n=e.components,a=l()(e,O);return Object(p.mdx)(y,r()({},j,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n};\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var P=a(1521),L=["components"];a(1332);var A={},w="wrapper";function D(e){var n=e.components,a=l()(e,L);return Object(p.mdx)(w,r()({},A,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"line-with-paired-result"},"Line With Paired Result"),Object(p.mdx)("p",null,"This is a simple Line Graph combined with Paired Result."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(g,{mdxType:"CombinationGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(C.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(p.mdx)(R,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),Object(p.mdx)(P.a,{mdxType:"DataObject2"})))}D.isMDXComponent=!0}}]);