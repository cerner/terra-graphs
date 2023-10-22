(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1546:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e,a){return{bindTo:e,bindLegendTo:a,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},legendPadding:!0,removeContainerPadding:{left:2.5,right:2.5,top:2.5,bottom:2.5},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1793:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),d=t(n(1321)),i=t(n(1322));n(1324),n(1326),n(1328);var o=t(n(1546)),l=t(n(1360)),s=t(n(1391)),c=t(n(1365)),p=i.default.deepClone((0,o.default)("#graphContainer","#legendContainer")),m=[i.default.deepClone(l.default),i.default.deepClone(s.default),i.default.deepClone(c.default)];a.default=function(){return r.default.useEffect((function(){var e=d.default.api.graph(p);m.forEach((function(a){e.loadContent(d.default.api.line(a))}))}),[]),r.default.createElement("div",{id:"graphAndLegendPaddingReduced",className:"custom-container-legend-style"},r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{className:"bindto-container"},r.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),r.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),r.default.createElement("div",{id:"graphContainer"}))}},2105:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return L}));var t=n(29),r=n.n(t),d=n(56),i=n.n(d),o=n(0),l=n.n(o),s=n(814),c=n(1793),p=n.n(c),m=["components"],u={};function g(e){var a=e.components,n=i()(e,m);return Object(s.mdx)("wrapper",r()({},u,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultCustomLegend';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/General/dataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#graphContainer', '#legendContainer'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst GraphAndLegendPaddingReducedGeneralExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <div id=\"graphAndLegendPaddingReduced\" className=\"custom-container-legend-style\">\n      <div id=\"tooltip\" className=\"initial-tooltip\" />\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <div id=\"graphContainer\" />\n    </div>\n  );\n};\n\nexport default GraphAndLegendPaddingReducedGeneralExample;\n\n")))}g.isMDXComponent=!0;var b=n(1329),h=n.n(b),f=n(1330),x=function(e){var a=e.title,n=e.description,t=e.isExpanded;return l.a.createElement(h.a,{title:a||"Graph And Legend Padding Reduced",description:n,example:l.a.createElement(p.a,null),exampleCssSrc:l.a.createElement(f.a,null),exampleSrc:l.a.createElement(g,null),isExpanded:t})},j=n(1361),C=n(1667),v=["components"];n(1332);var O={},w="wrapper";function L(e){var a=e.components,n=i()(e,v);return Object(s.mdx)(w,r()({},O,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"custom-legend-placement"},"Custom legend placement"),Object(s.mdx)("p",null,"This is timeseries line graph with reduced padding."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(C.a,{mdxType:"DataObject"})))}L.isMDXComponent=!0}}]);