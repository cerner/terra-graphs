(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{1406:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),r=a(1317),o={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:l.default.helpers.COLORS.GREEN,onClick:r.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=o},1508:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(1315)),r=a(1317),o={key:"bubble_dataset_2",label:{display:"Bubble Data Label 2"},graphType:"BubbleMultipleDataset",color:l.default.helpers.COLORS.BLUE,onClick:r.loadPopup,weight:{min:40,max:450},values:[{x:1,y:25,weight:150},{x:2,y:15,weight:300},{x:3,y:2,weight:200},{x:4,y:28,weight:400},{x:5,y:23,weight:450}]};t.default=o},1509:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(29),l=a.n(n),r=a(56),o=a.n(r),p=(a(0),a(809)),i=["components"],s={},b="wrapper";function d(e){var t=e.components,a=o()(e,i);return Object(p.mdx)(b,l()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'bubble_dataset_1',\n  label: {\n    display: 'Bubble Data Label 1',\n  },\n  graphType: 'BubbleMultipleDataset',\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1737:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=n(a(1315)),o=n(a(1316));a(1318),a(1321);var p=n(a(1322)),i=n(a(1387)),s=n(a(1388)),b=n(a(1406)),d=n(a(1508)),c=o.default.deepClone((0,i.default)("#lineWithMultipleBubbleData")),u=[o.default.deepClone(b.default),o.default.deepClone(d.default),o.default.deepClone(s.default)],m=function(){return l.default.useEffect((function(){var e=r.default.api.graph(c);e.loadContent(r.default.api.bubbleMultipleDataset(u[0])),e.loadContent(r.default.api.bubbleMultipleDataset(u[1])),e.loadContent(r.default.api.line(u[2]))}),[]),l.default.createElement(p.default,{id:"lineWithMultipleBubbleData"})};t.default=m},2036:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(29),l=a.n(n),r=a(56),o=a.n(r),p=a(0),i=a.n(p),s=a(809),b=a(1737),d=a.n(b),c=["components"],u={};function m(e){var t=e.components,a=o()(e,c);return Object(s.mdx)("wrapper",l()({},u,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';\nimport multipleBubbleDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';\nimport multipleBubbleDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithMultipleBubbleData'));\nconst dataset = [\n  utils.deepClone(multipleBubbleDataset1),\n  utils.deepClone(multipleBubbleDataset2),\n  utils.deepClone(lineDataset),\n];\n\nconst LineWithMultipleBubbleDataCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[0]));\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[1]));\n    graph.loadContent(Carbon.api.line(dataset[2]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithMultipleBubbleData\" />\n  );\n};\n\nexport default LineWithMultipleBubbleDataCombinationExample;\n\n")))}m.isMDXComponent=!0;var h=a(1324),x=a.n(h),f=a(1325),g=function(e){var t=e.title,a=e.description,n=e.isExpanded;return i.a.createElement(x.a,{title:t||"Line With Multiple Bubble Data",description:a,example:i.a.createElement(d.a,null),exampleCssSrc:i.a.createElement(f.a,null),exampleSrc:i.a.createElement(m,null),isExpanded:n})},j=a(1506),C=a(1507),O=a(1509),y=["components"],D={},v="wrapper";function w(e){var t=e.components,a=o()(e,y);return Object(s.mdx)(v,l()({},D,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'bubble_dataset_2',\n  label: {\n    display: 'Bubble Data Label 2',\n  },\n  graphType: 'BubbleMultipleDataset',\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  weight: {\n    min: 40,\n    max: 450,\n  },\n  values: [\n    {\n      x: 1,\n      y: 25,\n      weight: 150,\n    },\n    {\n      x: 2,\n      y: 15,\n      weight: 300,\n    },\n    {\n      x: 3,\n      y: 2,\n      weight: 200,\n    },\n    {\n      x: 4,\n      y: 28,\n      weight: 400,\n    },\n    {\n      x: 5,\n      y: 23,\n      weight: 450,\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var M=["components"];a(1326);var B={},E="wrapper";function L(e){var t=e.components,a=o()(e,M);return Object(s.mdx)(E,l()({},B,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-with-multiple-bubble-dataset"},"Line With Multiple Bubble dataset"),Object(s.mdx)("p",null,"This is a simple Line Graph combined with multiple Bubble dataset."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(g,{mdxType:"CombinationGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(s.mdx)(C.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"bubble-dataset-1"},"Bubble Dataset 1"),Object(s.mdx)(O.a,{mdxType:"DataObject2"}),Object(s.mdx)("h4",{id:"bubble-dataset-2"},"Bubble Dataset 2"),Object(s.mdx)(w,{mdxType:"DataObject3"})))}L.isMDXComponent=!0}}]);