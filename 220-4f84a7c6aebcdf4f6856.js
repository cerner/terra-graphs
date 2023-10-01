(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1394:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1594:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1316)),i=t(1318),o=t(1328),l={key:"uid_8",label:{display:"Data Label 8"},color:r.default.helpers.COLORS.GREEN,shape:r.default.helpers.SHAPES.DARK.X,onClick:i.loadPopup,legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y",start:2,end:10,color:"#f4f4f4"}],values:(0,o.createGraphValuesWithCos)({length:12,initialX:85,xModifier:17,yModifier:4*Math.PI})};a.default=l},1595:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1316)),i=t(1318),o=t(1328),l={key:"uid_9",label:{display:"Data Label 9"},color:r.default.helpers.COLORS.ORANGE,shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:i.loadPopup,yAxis:"y",legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y",start:2,end:10,color:"#f4f4f4"}],values:(0,o.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI})};a.default=l},1830:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=n(t(1316)),o=n(t(1317));t(1319),t(1321);var l=n(t(1322)),d=n(t(1394)),s=n(t(1393)),p=n(t(1594)),c=n(t(1595)),m=o.default.deepClone((0,d.default)("#datasetRegionIdentical")),u=[o.default.deepClone(s.default),o.default.deepClone(p.default),o.default.deepClone(c.default)];a.default=function(){return r.default.useEffect((function(){var e=i.default.api.graph(m);u.forEach((function(a){e.loadContent(i.default.api.line(a))}))}),[]),r.default.createElement(l.default,{id:"datasetRegionIdentical"})}},2046:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t(29),r=t.n(n),i=t(56),o=t.n(i),l=t(0),d=t.n(l),s=t(809),p=t(1830),c=t.n(p),m=["components"],u={};function b(e){var a=e.components,t=o()(e,m);return Object(s.mdx)("wrapper",r()({},u,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions8';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions9';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultY2Config('#datasetRegionIdentical'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst DatasetRegionIdenticalLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"datasetRegionIdentical\" />\n  );\n};\n\nexport default DatasetRegionIdenticalLineExample;\n\n\n")))}b.isMDXComponent=!0;var f=t(1324),h=t.n(f),x=t(1325),g=function(e){var a=e.title,t=e.description,n=e.isExpanded;return d.a.createElement(h.a,{title:a||"Dataset Region Identical",description:t,example:d.a.createElement(c.a,null),exampleCssSrc:d.a.createElement(x.a,null),exampleSrc:d.a.createElement(b,null),isExpanded:n})},j=t(1339),O=t(1592);var C=["components"];t(1327);var D=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.mdx)("div",a)}},w=D("DataObject2"),v=D("DataObject3"),L={},y="wrapper";function E(e){var a=e.components,t=o()(e,C);return Object(s.mdx)(y,r()({},L,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"dataset-region-identical"},"Dataset region identical"),Object(s.mdx)("p",null,"This is multiline graph with an identical region associated with each line."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(g,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(s.mdx)(O.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"dataset-8"},"Dataset 8"),Object(s.mdx)(w,{mdxType:"DataObject2"}),Object(s.mdx)("h4",{id:"dataset-9"},"Dataset 9"),Object(s.mdx)(v,{mdxType:"DataObject3"})))}E.isMDXComponent=!0}}]);