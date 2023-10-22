(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{1545:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e,a){return{bindTo:e,bindLegendTo:a,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1792:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=n(t(1321)),i=n(t(1322));t(1324),t(1326),t(1328);var l=n(t(1545)),d=n(t(1360)),s=n(t(1391)),c=n(t(1365)),p=i.default.deepClone((0,l.default)("#graphContainer","#legendContainer")),m=[i.default.deepClone(d.default),i.default.deepClone(s.default),i.default.deepClone(c.default)];a.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(p);m.forEach((function(a){e.loadContent(o.default.api.line(a))}))}),[]),r.default.createElement("div",{id:"customLegendPlacement"},r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{className:"bindto-container"},r.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),r.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),r.default.createElement("div",{id:"graphContainer"}))}},2104:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return L}));var n=t(29),r=t.n(n),o=t(56),i=t.n(o),l=t(0),d=t.n(l),s=t(814),c=t(1792),p=t.n(c),m=["components"],u={};function b(e){var a=e.components,t=i()(e,m);return Object(s.mdx)("wrapper",r()({},u,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultCustomLegendPlacement';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#graphContainer', '#legendContainer'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst CustomLegendPlacementGeneralExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <div id=\"customLegendPlacement\">\n      <div id=\"tooltip\" className=\"initial-tooltip\" />\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <div id=\"graphContainer\" />\n    </div>\n  );\n};\n\nexport default CustomLegendPlacementGeneralExample;\n\n\n")))}b.isMDXComponent=!0;var g=t(1329),h=t.n(g),f=t(1330),x=function(e){var a=e.title,t=e.description,n=e.isExpanded;return d.a.createElement(h.a,{title:a||"Custom Legend Placement",description:t,example:d.a.createElement(p.a,null),exampleCssSrc:d.a.createElement(f.a,null),exampleSrc:d.a.createElement(b,null),isExpanded:n})},j=t(1361),C=t(1667),O=["components"];t(1332);var v={},w="wrapper";function L(e){var a=e.components,t=i()(e,O);return Object(s.mdx)(w,r()({},v,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"custom-legend-placement"},"Custom legend placement"),Object(s.mdx)("p",null,"This is timeseries line graph with custom legend placement."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(C.a,{mdxType:"DataObject"})))}L.isMDXComponent=!0}}]);