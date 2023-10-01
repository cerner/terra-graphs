(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{1622:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return{bindTo:e,bindLegendTo:"#legendContainer",dimension:{height:300},showLegend:!0}}},1849:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),d=a(n(1316)),i=a(n(1317));n(1319),n(1396);var o=a(n(1322)),s=a(n(1622)),c=a(n(1397)),l=a(n(1398)),p=a(n(1399)),m=i.default.deepClone((0,s.default)("#graphContainer")),u=[i.default.deepClone(c.default),i.default.deepClone(l.default),i.default.deepClone(p.default)];t.default=function(){return r.default.useEffect((function(){var e=d.default.api.pie(m);u.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"bindto-container"},r.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),r.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),r.default.createElement(o.default,{id:"pieGraphContainer"}))}},2083:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(29),r=n.n(a),d=n(56),i=n.n(d),o=n(0),s=n.n(o),c=n(809),l=n(1849),p=n.n(l),m=["components"],u={};function b(e){var t=e.components,n=i()(e,m);return Object(c.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/customLegendPlacementConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';\nimport dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getPieConfig('#graphContainer'));\nconst dataset = [\n  utils.deepClone(dataset1),\n  utils.deepClone(dataset2),\n  utils.deepClone(dataset3),\n];\n\nconst CustomLegendPlacementPieExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.pie(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <>\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <ExampleGraphContainer id=\"pieGraphContainer\" />\n    </>\n  );\n};\n\nexport default CustomLegendPlacementPieExample;\n\n")))}b.isMDXComponent=!0;var g=n(1324),f=n.n(g),h=n(1325),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return s.a.createElement(f.a,{title:t||"Custom Legend Placement",description:n,example:s.a.createElement(p.a,null),exampleCssSrc:s.a.createElement(h.a,null),exampleSrc:s.a.createElement(b,null),isExpanded:a})},j=["components"],C={},O="wrapper";function v(e){var t=e.components,n=i()(e,j);return Object(c.mdx)(O,r()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const getPieConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: '#legendContainer',\n  dimension: {\n    height: 300,\n  },\n  showLegend: true,\n});\n\nexport default getPieConfig;\n\n")))}v.isMDXComponent=!0;var P=n(1619),E=n(1620),w=n(1621),D=["components"],N={},y="wrapper";function T(e){var t=e.components,n=i()(e,D);return Object(c.mdx)(y,r()({},N,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"require('details-polyfill')"),Object(c.mdx)("h1",{id:"simple-pie"},"Simple Pie"),Object(c.mdx)("p",null,"This is a simple Pie chart with custom legend placement."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(x,{mdxType:"PieChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(v,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-objects"},"Data objects"),Object(c.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(c.mdx)(P.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(c.mdx)(E.a,{mdxType:"DataObject2"}),Object(c.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(c.mdx)(w.a,{mdxType:"DataObject3"})))}T.isMDXComponent=!0}}]);