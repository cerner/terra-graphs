(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1528:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},allowCalibration:!1,showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=n},1764:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=n(t(1273)),o=n(t(1274));t(1276),t(1279);var l=n(t(1278)),s=n(t(1528)),p=n(t(1326)),c=o.default.deepClone((0,s.default)("#disableCalibration")),d=o.default.deepClone(p.default),m=function(){return r.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.line(d))}),[]),r.default.createElement(l.default,{id:"disableCalibration"})};a.default=m},2059:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t(31),r=t.n(n),i=t(55),o=t.n(i),l=t(0),s=t.n(l),p=t(788),c=t(1764),d=t.n(c),m=["components"],b={};function u(e){var a=e.components,t=o()(e,m);return Object(p.mdx)("wrapper",r()({},b,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultNoCalibrationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultNoCalibration';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultNoCalibrationConfig('#disableCalibration'));\nconst dataset = utils.deepClone(exampleData);\n\nconst DisableCalibrationLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"disableCalibration\" />\n  );\n};\n\nexport default DisableCalibrationLineExample;\n\n\n")))}u.isMDXComponent=!0;var h=t(1281),f=t.n(h),x=t(1282),g=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(f.a,{title:a||"Disable Calibration",description:t,example:s.a.createElement(d.a,null),exampleCssSrc:s.a.createElement(x.a,null),exampleSrc:s.a.createElement(u,null),isExpanded:n})},j=t(1618),C=t(1421),O=["components"];t(1284);var w={},L="wrapper";function v(e){var a=e.components,t=o()(e,O);return Object(p.mdx)(L,r()({},w,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"disable-calibration"},"Disable Calibration"),Object(p.mdx)("p",null,"This is a simple line graph with calibration disabled."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(g,{mdxType:"LineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(j.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(C.a,{mdxType:"DataObject"})))}v.isMDXComponent=!0}}]);