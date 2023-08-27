(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1393:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=t},1421:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1315)),o=n(1317),i=n(1327),l={key:"uid_3",label:{display:"Data Label 3"},shape:r.default.helpers.SHAPES.DARK.SQUARE,color:r.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:Math.PI}),legendOptions:{showLine:!0,showShape:!0},regions:[{end:10}]};a.default=l},1422:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1315)),o=n(1317),i=n(1327),l={key:"uid_2",label:{display:"Data Label 2"},color:r.default.helpers.COLORS.YELLOW,shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadPopup,values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0},regions:[{start:10,end:10,color:"#bcbfc0"}]};a.default=l},1588:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(29),r=n.n(t),o=n(56),i=n.n(o),l=(n(0),n(809)),s=["components"],p={},d="wrapper";function c(e){var a=e.components,n=i()(e,s);return Object(l.mdx)(d,r()({},p,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  color: Carbon.helpers.COLORS.ORANGE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      end: 10,\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1590:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(29),r=n.n(t),o=n(56),i=n.n(o),l=(n(0),n(809)),s=["components"],p={},d="wrapper";function c(e){var a=e.components,n=i()(e,s);return Object(l.mdx)(d,r()({},p,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  color: Carbon.helpers.COLORS.YELLOW,\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      start: 10,\n      end: 10,\n      color: '#bcbfc0',\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1830:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=t(n(1315)),i=t(n(1316));n(1318),n(1320);var l=t(n(1321)),s=t(n(1393)),p=t(n(1392)),d=t(n(1422)),c=t(n(1421)),m=i.default.deepClone((0,s.default)("#multipleline")),u=[i.default.deepClone(p.default),i.default.deepClone(d.default),i.default.deepClone(c.default)],h=function(){return r.default.useEffect((function(){var e=o.default.api.graph(m);u.forEach((function(a){e.loadContent(o.default.api.line(a))}))}),[]),r.default.createElement(l.default,{id:"multipleline"})};a.default=h},2110:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return D}));var t=n(29),r=n.n(t),o=n(56),i=n.n(o),l=n(0),s=n.n(l),p=n(809),d=n(1830),c=n.n(d),m=["components"],u={};function h(e){var a=e.components,n=i()(e,m);return Object(p.mdx)("wrapper",r()({},u,n,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultY2Config('#multipleline'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst MultipleLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multipleline\" />\n  );\n};\n\nexport default MultipleLineExample;\n\n\n")))}h.isMDXComponent=!0;var b=n(1323),f=n.n(b),x=n(1324),g=function(e){var a=e.title,n=e.description,t=e.isExpanded;return s.a.createElement(f.a,{title:a||"Multiple Line Regions",description:n,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(x.a,null),exampleSrc:s.a.createElement(h,null),isExpanded:t})},O=n(1338),j=n(1591),C=n(1590),L=n(1588),w=["components"];n(1326);var v={},y="wrapper";function D(e){var a=e.components,n=i()(e,w);return Object(p.mdx)(y,r()({},v,n,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"multiple-line-regions"},"Multiple line regions"),Object(p.mdx)("p",null,"This is timeseries graph with region associated to each line."),Object(p.mdx)("h4",{id:"note-hover-onto-the-legend-to-see-the-region-associated-with-each-line"},"NOTE: Hover onto the legend to see the region associated with each line."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(g,{mdxType:"LineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(O.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(p.mdx)(j.a,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(p.mdx)(C.a,{mdxType:"DataObject2"}),Object(p.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(p.mdx)(L.a,{mdxType:"DataObject3"})))}D.isMDXComponent=!0}}]);