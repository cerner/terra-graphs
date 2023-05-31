(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1293:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=a},1785:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),i=a(t(1274)),o=a(t(1273));t(1276),t(1278);var p=a(t(1279)),l=a(t(1293)),s=a(t(1349)),c=i.default.deepClone((0,l.default)("#simpleRegionLine")),m=i.default.deepClone(s.default),d=function(){return r.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.line(m))}),[]),r.default.createElement(p.default,{id:"simpleRegionLine"})};n.default=d},2067:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(31),r=t.n(a),i=t(55),o=t.n(i),p=t(0),l=t.n(p),s=t(788),c=t(1785),m=t.n(c),d=["components"],u={};function b(e){var n=e.components,t=o()(e,d);return Object(s.mdx)("wrapper",r()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#simpleRegionLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleRegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simpleRegionLine\" />\n  );\n};\n\nexport default SimpleRegionLineExample;\n\n")))}b.isMDXComponent=!0;var h=t(1281),g=t.n(h),f=t(1282),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(g.a,{title:n||"Simple",description:t,example:l.a.createElement(m.a,null),exampleCssSrc:l.a.createElement(f.a,null),exampleSrc:l.a.createElement(b,null),isExpanded:a})},j=t(1296),O=t(1549),C=["components"];t(1284);var L={},w="wrapper";function v(e){var n=e.components,t=o()(e,C);return Object(s.mdx)(w,r()({},L,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"simple"},"Simple"),Object(s.mdx)("p",null,"This is simple line graph associated with region."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(O.a,{mdxType:"DataObject"})))}v.isMDXComponent=!0}}]);