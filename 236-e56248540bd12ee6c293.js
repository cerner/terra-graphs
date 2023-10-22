(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1412:function(e,a,n){"use strict";var r=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(1321)),o=n(1323),s={key:"grouped_bar_4",label:{display:"Dataset 4"},color:t.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:6,y:10}],regions:[{axis:"y",x:1,start:7,end:7},{axis:"y",x:2,start:13,end:13},{axis:"y",x:3,start:17,end:17},{axis:"y",x:4,start:4,end:4}]};a.default=s},1503:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var r=n(29),t=n.n(r),o=n(56),s=n.n(o),p=(n(0),n(814)),l=["components"],i={},c="wrapper";function d(e){var a=e.components,n=s()(e,l);return Object(p.mdx)(c,t()({},i,n,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'grouped_bar_4',\n  label: {\n    display: 'Dataset 4',\n  },\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n  regions: [\n    {\n      axis: 'y',\n      x: 1,\n      start: 7,\n      end: 7,\n    },\n    {\n      axis: 'y',\n      x: 2,\n      start: 13,\n      end: 13,\n    },\n    {\n      axis: 'y',\n      x: 3,\n      start: 17,\n      end: 17,\n    },\n    {\n      axis: 'y',\n      x: 4,\n      start: 4,\n      end: 4,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1747:function(e,a,n){"use strict";var r=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(n(0)),o=r(n(1321)),s=r(n(1322));n(1324),n(1338);var p=r(n(1327)),l=r(n(1352)),i=r(n(1412)),c=s.default.deepClone((0,l.default)("#simpleGoalLineBarGraph")),d=[s.default.deepClone(i.default)];a.default=function(){return t.default.useEffect((function(){var e=o.default.api.graph(c);d.forEach((function(a){e.loadContent(o.default.api.bar(a))}))}),[]),t.default.createElement(p.default,{id:"simpleGoalLineBarGraph"})}},2095:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return G}));var r=n(29),t=n.n(r),o=n(56),s=n.n(o),p=n(0),l=n.n(p),i=n(814),c=n(1747),d=n.n(c),m=["components"],u={};function x(e){var a=e.components,n=s()(e,m);return Object(i.mdx)("wrapper",t()({},u,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1regions';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#simpleGoalLineBarGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"simpleGoalLineBarGraph\" />\n  );\n};\n\n")))}x.isMDXComponent=!0;var b=n(1329),h=n.n(b),f=n(1330),g=function(e){var a=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(h.a,{title:a||"Simple Goal Lines",description:n,example:l.a.createElement(d.a,null),exampleCssSrc:l.a.createElement(f.a,null),exampleSrc:l.a.createElement(x,null),isExpanded:r})},j=n(1406),O=n(1503),y=["components"];n(1332);var C={},v="wrapper";function G(e){var a=e.components,n=s()(e,y);return Object(i.mdx)(v,t()({},C,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"simple-bar-graph-with-goal-lines"},"Simple Bar Graph With Goal Lines"),Object(i.mdx)("p",null,"This is a simple bar graph with goal lines ."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(i.mdx)("h2",{id:"example"},"Example"),Object(i.mdx)(g,{mdxType:"BarGraph"}),Object(i.mdx)("details",null,Object(i.mdx)("summary",{style:{fontSize:24}},Object(i.mdx)("b",null,"Data")),Object(i.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(i.mdx)(j.a,{mdxType:"GraphConfig"}),Object(i.mdx)("h3",{id:"data-object"},"Data object"),Object(i.mdx)(O.a,{mdxType:"DataObject"})))}G.isMDXComponent=!0}}]);