(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{1489:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1287)),i=a(1289),o={key:"simple_region_line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:i.loadPopup,values:new Array(50).fill("").map((function(e,n){return{y:5*Math.sin(n)+10,x:10+5*n}})),regions:[{axis:"y",start:6,end:18}]};n.default=o},1490:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1287)),i=a(1289),o={key:"identical_region_paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y2",shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLACK,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}],regions:{high:[{axis:"y2",start:120,end:180,color:"#c8cacb"}],low:[{axis:"y2",start:20,end:80}]}};n.default=o},1733:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),i=t(a(1287)),o=t(a(1288));a(1290),a(1293),a(1303);var l=t(a(1292)),s=t(a(1344)),p=t(a(1489)),d=t(a(1490)),c=o.default.deepClone((0,s.default)("#lineWithPairedResultRegion")),m=[o.default.deepClone(p.default),o.default.deepClone(d.default)],u=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);e.loadContent(i.default.api.line(m[0])),e.loadContent(i.default.api.pairedResult(m[1]))}),[]),r.default.createElement(l.default,{id:"lineWithPairedResultRegion"})};n.default=u},2004:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return E}));var t=a(31),r=a.n(t),i=a(56),o=a.n(i),l=a(0),s=a.n(l),p=a(795),d=a(1733),c=a.n(d),m=["components"],u={};function h(e){var n=e.components,a=o()(e,m);return Object(p.mdx)("wrapper",r()({},u,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineSimpleRegionDataset';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultSimpleRegionDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResultRegion'));\nconst dataset = [\n  utils.deepClone(lineDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst LineWithPairedResultRegionCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithPairedResultRegion\" />\n  );\n};\n\nexport default LineWithPairedResultRegionCombinationExample;\n\n")))}h.isMDXComponent=!0;var b=a(1295),g=a.n(b),x=a(1296),f=function(e){var n=e.title,a=e.description,t=e.isExpanded;return s.a.createElement(g.a,{title:n||"Simple",description:a,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(x.a,null),exampleSrc:s.a.createElement(h,null),isExpanded:t})},C=a(1434),y=["components"],O={},R="wrapper";function j(e){var n=e.components,a=o()(e,y);return Object(p.mdx)(R,r()({},O,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'simple_region_line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n  regions: [\n    {\n      axis: 'y',\n      start: 6,\n      end: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}j.isMDXComponent=!0;var P=["components"],L={},w="wrapper";function A(e){var n=e.components,a=o()(e,P);return Object(p.mdx)(w,r()({},L,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'identical_region_paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y2',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n  regions: {\n    high: [\n      {\n        axis: 'y2',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y2',\n        start: 20,\n        end: 80,\n      },\n    ],\n  },\n};\n\nexport default data;\n\n")))}A.isMDXComponent=!0;var S=["components"];a(1298);var D={},v="wrapper";function E(e){var n=e.components,a=o()(e,S);return Object(p.mdx)(v,r()({},D,a,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"line-with-paired-result"},"Line With Paired Result"),Object(p.mdx)("p",null,"This is a combination graph associated with simple region."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(f,{mdxType:"CombinationGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(C.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(p.mdx)(j,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),Object(p.mdx)(A,{mdxType:"DataObject2"})))}E.isMDXComponent=!0}}]);