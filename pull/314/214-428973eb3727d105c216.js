(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{1372:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1279)),o=t(1281),s={key:"paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y2",shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLACK,low:r.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}]};a.default=s},1479:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(31),r=t.n(n),o=t(56),s=t.n(o),l=(t(0),t(794)),i=["components"],p={},d="wrapper";function c(e){var a=e.components,t=s()(e,i);return Object(l.mdx)(d,r()({},p,t,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y2',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1480:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1279)),o=t(1281),s={key:"scatter_dataset",graphType:"Scatter",label:{display:"Scatter Data Label"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:o.loadPopup,values:new Array(50).fill("").map((function(e,a){return{y:5*Math.sin(a)+10,x:10+5*a}}))};a.default=s},1723:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=n(t(1279)),s=n(t(1280));t(1282),t(1284),t(1295);var l=n(t(1285)),i=n(t(1337)),p=n(t(1480)),d=n(t(1372)),c=s.default.deepClone((0,i.default)("#pairedResultWithScatter")),m=[s.default.deepClone(p.default),s.default.deepClone(d.default)],u=function(){return r.default.useEffect((function(){var e=o.default.api.graph(c);e.loadContent(o.default.api.scatter(m[0])),e.loadContent(o.default.api.pairedResult(m[1]))}),[]),r.default.createElement(l.default,{id:"pairedResultWithScatter"})};a.default=u},2021:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return D}));var n=t(31),r=t.n(n),o=t(56),s=t.n(o),l=t(0),i=t.n(l),p=t(794),d=t(1723),c=t.n(d),m=["components"],u={};function h(e){var a=e.components,t=s()(e,m);return Object(p.mdx)("wrapper",r()({},u,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport scatterDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/scatterDataset';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#pairedResultWithScatter'));\nconst dataset = [\n  utils.deepClone(scatterDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst PairedResultWithScatterCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"pairedResultWithScatter\" />\n  );\n};\n\nexport default PairedResultWithScatterCombinationExample;\n\n")))}h.isMDXComponent=!0;var b=t(1287),x=t.n(b),f=t(1288),g=function(e){var a=e.title,t=e.description,n=e.isExpanded;return i.a.createElement(x.a,{title:a||"Paired Result With Scatter",description:t,example:i.a.createElement(c.a,null),exampleCssSrc:i.a.createElement(f.a,null),exampleSrc:i.a.createElement(h,null),isExpanded:n})},C=t(1428),O=["components"],j={},y="wrapper";function R(e){var a=e.components,t=s()(e,O);return Object(p.mdx)(y,r()({},j,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'scatter_dataset',\n  graphType: 'Scatter',\n  label: {\n    display: 'Scatter Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n};\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var S=t(1479),P=["components"];t(1290);var A={},w="wrapper";function D(e){var a=e.components,t=s()(e,P);return Object(p.mdx)(w,r()({},A,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"paired-result-with-scatter"},"Paired result With Scatter"),Object(p.mdx)("p",null,"This is a simple Paired result Graph combined with Scatter."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(g,{mdxType:"CombinationGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(C.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"scatter-dataset"},"Scatter Dataset"),Object(p.mdx)(R,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),Object(p.mdx)(S.a,{mdxType:"DataObject2"})))}D.isMDXComponent=!0}}]);