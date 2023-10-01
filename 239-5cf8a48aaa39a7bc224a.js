(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1518:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1316)),i=a(1318),o={key:"identical_region_line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:i.loadPopup,values:new Array(50).fill("").map((function(e,n){return{y:5*Math.sin(n)+10,x:10+5*n}})),regions:[{axis:"y",start:120,end:180,color:"#c8cacb"}]};n.default=o},1519:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1316)),i=a(1318),o={key:"identical_region_paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y",shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLACK,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}],regions:{high:[{axis:"y",start:120,end:180,color:"#c8cacb"}],mid:[{axis:"y",start:120,end:180,color:"#c8cacb"}],low:[{axis:"y",start:120,end:180,color:"#c8cacb"}]}};n.default=o},1761:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),i=t(a(1316)),o=t(a(1317));a(1319),a(1321),a(1332);var l=t(a(1322)),s=t(a(1374)),d=t(a(1518)),p=t(a(1519)),c=o.default.deepClone((0,s.default)("#lineWithPairedResultRegion")),m=[o.default.deepClone(d.default),o.default.deepClone(p.default)];n.default=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);e.loadContent(i.default.api.line(m[0])),e.loadContent(i.default.api.pairedResult(m[1]))}),[]),r.default.createElement(l.default,{id:"lineWithPairedResultRegion"})}},2034:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return E}));var t=a(29),r=a.n(t),i=a(56),o=a.n(i),l=a(0),s=a.n(l),d=a(809),p=a(1761),c=a.n(p),m=["components"],u={};function h(e){var n=e.components,a=o()(e,m);return Object(d.mdx)("wrapper",r()({},u,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResultRegion'));\nconst dataset = [\n  utils.deepClone(lineDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst LineWithPairedResultRegionCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithPairedResultRegion\" />\n  );\n};\n\nexport default LineWithPairedResultRegionCombinationExample;\n\n")))}h.isMDXComponent=!0;var b=a(1324),g=a.n(b),x=a(1325),f=function(e){var n=e.title,a=e.description,t=e.isExpanded;return s.a.createElement(g.a,{title:n||"Dataset Region Identical",description:a,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(x.a,null),exampleSrc:s.a.createElement(h,null),isExpanded:t})},C=a(1465),y=["components"],O={},R="wrapper";function j(e){var n=e.components,a=o()(e,y);return Object(d.mdx)(R,r()({},O,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'identical_region_line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n  regions: [\n    {\n      axis: 'y',\n      start: 120,\n      end: 180,\n      color: '#c8cacb',\n    },\n  ],\n};\n\nexport default data;\n\n")))}j.isMDXComponent=!0;var P=["components"],A={},L="wrapper";function w(e){var n=e.components,a=o()(e,P);return Object(d.mdx)(L,r()({},A,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'identical_region_paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n  regions: {\n    high: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n    mid: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n  },\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var D=["components"];a(1327);var S={},v="wrapper";function E(e){var n=e.components,a=o()(e,D);return Object(d.mdx)(v,r()({},S,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"dataset-region-identical"},"Dataset Region Identical"),Object(d.mdx)("p",null,"This is a combination graph associated with identical regions."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(d.mdx)("h2",{id:"example"},"Example"),Object(d.mdx)(f,{mdxType:"CombinationGraph"}),Object(d.mdx)("details",null,Object(d.mdx)("summary",{style:{fontSize:24}},Object(d.mdx)("b",null,"Data")),Object(d.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(d.mdx)(C.a,{mdxType:"GraphConfig"}),Object(d.mdx)("h3",{id:"data-object"},"Data object"),Object(d.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(d.mdx)(j,{mdxType:"DataObject1"}),Object(d.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),Object(d.mdx)(w,{mdxType:"DataObject2"})))}E.isMDXComponent=!0}}]);