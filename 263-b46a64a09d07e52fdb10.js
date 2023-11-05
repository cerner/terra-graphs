(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{1620:function(e,n,a){"use strict";var r=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a(1320)),i=a(1322),l={key:"simple_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:t.default.helpers.SHAPES.DARK.TEAR_ALT,mid:t.default.helpers.SHAPES.DARK.RHOMBUS,low:t.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:t.default.helpers.COLORS.BLACK,mid:t.default.helpers.COLORS.PURPLE,low:t.default.helpers.COLORS.BLACK},onClick:i.loadPopup,regions:{high:[{axis:"y",start:140,end:220,color:"#c8cacb"}],low:[{axis:"y",start:20,end:70}]},values:[{high:{x:20,y:150},mid:{x:20,y:40},low:{x:20,y:10}},{high:{x:80,y:100},mid:{x:80,y:75},low:{x:80,y:50}},{high:{x:150,y:110},mid:{x:150,y:70},low:{x:150,y:30}},{high:{x:175,y:160},mid:{x:175,y:120},low:{x:175,y:100}},{high:{x:300,y:190},mid:{x:300,y:90},low:{x:300,y:60}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10}},{high:{x:800,y:180},mid:{x:800,y:100},low:{x:800,y:100}}]};n.default=l},1850:function(e,n,a){"use strict";var r=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a(0)),i=r(a(1320)),l=r(a(1321));a(1323),a(1336);var o=r(a(1326)),p=r(a(1379)),s=r(a(1620)),d=l.default.deepClone((0,p.default)("#simplePairedResultGraph")),m=[l.default.deepClone(s.default)];n.default=function(){return t.default.useEffect((function(){var e=i.default.api.graph(d);m.forEach((function(n){e.loadContent(i.default.api.pairedResult(n))}))}),[]),t.default.createElement(o.default,{id:"simplePairedResultGraph"})}},2085:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return S}));var r=a(29),t=a.n(r),i=a(56),l=a.n(i),o=a(0),p=a.n(o),s=a(813),d=a(1850),m=a.n(d),c=["components"],h={};function u(e){var n=e.components,a=l()(e,c);return Object(s.mdx)("wrapper",t()({},h,a,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimpleRegionDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultConfig('#simplePairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst SimpleRegionPairedResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePairedResultGraph\" />\n  );\n};\n\nexport default SimpleRegionPairedResultExample;\n\n")))}u.isMDXComponent=!0;var x=a(1328),g=a.n(x),b=a(1329),y=function(e){var n=e.title,a=e.description,r=e.isExpanded;return p.a.createElement(g.a,{title:n||"Simple",description:a,example:p.a.createElement(m.a,null),exampleCssSrc:p.a.createElement(b.a,null),exampleSrc:p.a.createElement(u,null),isExpanded:r})},f=a(1472),O=["components"],j={},C="wrapper";function R(e){var n=e.components,a=l()(e,O);return Object(s.mdx)(C,t()({},j,a,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'simple_paired_result_data',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.PURPLE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  regions: {\n    high: [\n      {\n        axis: 'y',\n        start: 140,\n        end: 220,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y',\n        start: 20,\n        end: 70,\n      },\n    ],\n  },\n  values: [\n    {\n      high: {\n        x: 20,\n        y: 150,\n      },\n      mid: {\n        x: 20,\n        y: 40,\n      },\n      low: {\n        x: 20,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 80,\n        y: 100,\n      },\n      mid: {\n        x: 80,\n        y: 75,\n      },\n      low: {\n        x: 80,\n        y: 50,\n      },\n    },\n    {\n      high: {\n        x: 150,\n        y: 110,\n      },\n      mid: {\n        x: 150,\n        y: 70,\n      },\n      low: {\n        x: 150,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 175,\n        y: 160,\n      },\n      mid: {\n        x: 175,\n        y: 120,\n      },\n      low: {\n        x: 175,\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: 300,\n        y: 190,\n      },\n      mid: {\n        x: 300,\n        y: 90,\n      },\n      low: {\n        x: 300,\n        y: 60,\n      },\n    },\n    {\n      high: {\n        x: 560,\n        y: 150,\n      },\n      mid: {\n        x: 560,\n        y: 40,\n      },\n      low: {\n        x: 560,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 800,\n        y: 180,\n      },\n      mid: {\n        x: 800,\n        y: 100,\n      },\n      low: {\n        x: 800,\n        y: 100,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var w=["components"];a(1331);var P={},E="wrapper";function S(e){var n=e.components,a=l()(e,w);return Object(s.mdx)(E,t()({},P,a,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"simple-region-paired-result-graph"},"Simple Region Paired Result Graph"),Object(s.mdx)("p",null,"This is a simple paired result graph associated with regions(for high and low datapoints)."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(y,{mdxType:"PairedResultGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(f.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(R,{mdxType:"DataObject"})))}S.isMDXComponent=!0}}]);