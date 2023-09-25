(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1597:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var r=a(29),t=a.n(r),o=a(56),l=a.n(o),i=(a(0),a(809)),d=["components"],s={},p="wrapper";function c(e){var n=e.components,a=l()(e,d);return Object(i.mdx)(p,t()({},s,a,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'simple_paired_result_data',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.PURPLE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 20,\n        y: 150,\n      },\n      mid: {\n        x: 20,\n        y: 40,\n      },\n      low: {\n        x: 20,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 80,\n        y: 100,\n      },\n      mid: {\n        x: 80,\n        y: 75,\n      },\n      low: {\n        x: 80,\n        y: 50,\n      },\n    },\n    {\n      high: {\n        x: 150,\n        y: 110,\n      },\n      mid: {\n        x: 150,\n        y: 70,\n      },\n      low: {\n        x: 150,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 175,\n        y: 160,\n      },\n      mid: {\n        x: 175,\n        y: 120,\n      },\n      low: {\n        x: 175,\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: 300,\n        y: 190,\n      },\n      mid: {\n        x: 300,\n        y: 90,\n      },\n      low: {\n        x: 300,\n        y: 60,\n      },\n    },\n    {\n      high: {\n        x: 560,\n        y: 150,\n      },\n      mid: {\n        x: 560,\n        y: 40,\n      },\n      low: {\n        x: 560,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 800,\n        y: 180,\n      },\n      mid: {\n        x: 800,\n        y: 100,\n      },\n      low: {\n        x: 800,\n        y: 100,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1616:function(e,n,a){"use strict";var r=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a(1315)),o=a(1317),l={key:"value_region_dataset",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:t.default.helpers.SHAPES.DARK.TEAR_ALT,mid:t.default.helpers.SHAPES.DARK.RHOMBUS,low:t.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:t.default.helpers.COLORS.BLACK,mid:t.default.helpers.COLORS.PURPLE,low:t.default.helpers.COLORS.BLACK},onClick:o.loadPopup,values:[{high:{x:20,y:150,region:{start:90,end:150,color:t.default.helpers.COLORS.GREY}},mid:{x:20,y:40},low:{x:20,y:10,region:{start:5,end:30}}},{high:{x:80,y:100,region:{start:90,end:150,color:t.default.helpers.COLORS.GREY}},mid:{x:80,y:75},low:{x:80,y:50,region:{start:5,end:30}}},{high:{x:150,y:110,region:{start:120,end:190,color:t.default.helpers.COLORS.GREY}},mid:{x:150,y:70},low:{x:150,y:30,region:{start:5,end:30}}},{high:{x:175,y:160,region:{start:120,end:190,color:t.default.helpers.COLORS.GREY}},mid:{x:175,y:120},low:{x:175,y:100,region:{start:10,end:40}}},{high:{x:300,y:190,region:{start:120,end:190,color:t.default.helpers.COLORS.GREY}},mid:{x:300,y:90},low:{x:300,y:60,region:{start:10,end:40}}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10,region:{start:10,end:40}}},{high:{x:800,y:180,region:{start:120,end:190,color:t.default.helpers.COLORS.GREY}},mid:{x:800,y:100},low:{x:800,y:100,region:{start:10,end:40}}}]};n.default=l},1846:function(e,n,a){"use strict";var r=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a(0)),o=r(a(1315)),l=r(a(1316));a(1318),a(1331);var i=r(a(1321)),d=r(a(1374)),s=r(a(1616)),p=l.default.deepClone((0,d.default)("#pairedResultGraphValueRegion")),c=[l.default.deepClone(s.default)];n.default=function(){return t.default.useEffect((function(){var e=o.default.api.graph(p);c.forEach((function(n){e.loadContent(o.default.api.pairedResult(n))}))}),[]),t.default.createElement(i.default,{id:"pairedResultGraphValueRegion"})}},2112:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return w}));var r=a(29),t=a.n(r),o=a(56),l=a.n(o),i=a(0),d=a.n(i),s=a(809),p=a(1846),c=a.n(p),m=["components"],u={};function h(e){var n=e.components,a=l()(e,m);return Object(s.mdx)("wrapper",t()({},u,a,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport pairedResultDefault from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultValueRegionData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(pairedResultDefault('#pairedResultGraphValueRegion'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst ValueRegionPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"pairedResultGraphValueRegion\" />\n  );\n};\n\nexport default ValueRegionPiaredResultExample;\n\n")))}h.isMDXComponent=!0;var x=a(1323),g=a.n(x),b=a(1324),f=function(e){var n=e.title,a=e.description,r=e.isExpanded;return d.a.createElement(g.a,{title:n||"Value Region",description:a,example:d.a.createElement(c.a,null),exampleCssSrc:d.a.createElement(b.a,null),exampleSrc:d.a.createElement(h,null),isExpanded:r})},y=a(1467),R=a(1597),O=["components"];a(1326);var C={},j="wrapper";function w(e){var n=e.components,a=l()(e,O);return Object(s.mdx)(j,t()({},C,a,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"value-region-paired-result-graph"},"Value region Paired Result Graph"),Object(s.mdx)("p",null,"This is simple paired result graph associated with valure regions(for high and low datapoints)."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(f,{mdxType:"PairedResultGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(R.a,{mdxType:"DataObject"})))}w.isMDXComponent=!0}}]);