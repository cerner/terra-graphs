(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1341:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1344:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(29),r=n.n(t),o=n(56),l=n.n(o),i=(n(0),n(814)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,n=l()(e,p);return Object(i.mdx)(d,r()({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}c.isMDXComponent=!0},1359:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1321)),o=n(1323),l=n(1333),i={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,l.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};a.default=i},1364:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1321)),o=n(1323),l=n(1333),i={key:"uid_6",label:{display:"Dataset 6"},color:r.default.helpers.COLORS.GREY,onClick:o.loadPopup,shape:r.default.helpers.SHAPES.DARK.TRIANGLE_DOWN,values:(0,l.createGraphValuesWithCos)({length:18,initialX:85,xModifier:10,yModifier:7*Math.PI})};a.default=i},1397:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1321)),o=n(1323),l={key:"uid_4",label:{display:"Data Label 4"},shape:r.default.helpers.SHAPES.DARK.CROSS,color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPopup,values:new Array(15).fill("").map((function(e,a){return{y:Math.sin(a)*Math.PI*4,x:85+10*a,region:{start:Math.sin(a)*Math.PI*4-Math.PI,end:Math.sin(a)*Math.PI*4+Math.PI}}}))};a.default=l},1459:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(29),r=n.n(t),o=n(56),l=n.n(o),i=(n(0),n(814)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,n=l()(e,p);return Object(i.mdx)(d,r()({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1460:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1321)),o=n(1323),l=n(1333),i={key:"uid_3",label:{display:"Data Label 3"},shape:r.default.helpers.SHAPES.DARK.X,color:r.default.helpers.COLORS.GREEN,onClick:o.loadPopup,values:(0,l.createGraphValuesWithSin)({length:12,initialX:85,xModifier:17,yModifier:4*Math.PI})};a.default=i},1461:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1321)),o=n(1323),l=n(1333),i={key:"uid_5",label:{display:"Data Label 5"},shape:r.default.helpers.SHAPES.DARK.SQUARE,color:r.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,l.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!0}};a.default=i},1471:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(29),r=n.n(t),o=n(56),l=n.n(o),i=(n(0),n(814)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,n=l()(e,p);return Object(i.mdx)(d,r()({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_6',\n  label: {\n    display: 'Dataset 6',\n  },\n  color: Carbon.helpers.COLORS.GREY,\n  onClick: loadPopup,\n  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,\n  values: createGraphValuesWithCos({\n    length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 7,\n  }),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1581:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(29),r=n.n(t),o=n(56),l=n.n(o),i=(n(0),n(814)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,n=l()(e,p);return Object(i.mdx)(d,r()({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_4',\n  label: {\n    display: 'Data Label 4',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CROSS,\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadPopup,\n  values: new Array(15).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI * 4,\n    x: 85 + i * 10,\n    region: {\n      start: Math.sin(i) * Math.PI * 4 - Math.PI,\n      end: Math.sin(i) * Math.PI * 4 + Math.PI,\n    },\n  })),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1815:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=t(n(1321)),l=t(n(1322));n(1324),n(1326);var i=t(n(1327)),p=t(n(1341)),s=t(n(1359)),d=t(n(1374)),c=t(n(1460)),u=t(n(1397)),m=t(n(1461)),h=t(n(1364)),b=l.default.deepClone((0,p.default)("#multiLine")),f=[l.default.deepClone(s.default),l.default.deepClone(d.default),l.default.deepClone(c.default),l.default.deepClone(u.default),l.default.deepClone(m.default),l.default.deepClone(h.default)],x=[0,750,1500,2250,3e3,3750,4500];a.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(b);f.forEach((function(a,n){setTimeout((function(){return e.graphContainer?e.loadContent(o.default.api.line(a)):""}),x[n])}))}),[]),r.default.createElement(i.default,{id:"multiLine"})}},2047:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return A}));var t=n(29),r=n.n(t),o=n(56),l=n.n(o),i=n(0),p=n.n(i),s=n(814),d=n(1815),c=n.n(d),u=["components"],m={};function h(e){var a=e.components,n=l()(e,u);return Object(s.mdx)("wrapper",r()({},m,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset3';\nimport exampleData4 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4';\nimport exampleData5 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset5';\nimport exampleData6 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#multiLine'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n  utils.deepClone(exampleData4),\n  utils.deepClone(exampleData5),\n  utils.deepClone(exampleData6),\n];\nconst timeout = [0, 750, 750 * 2, 750 * 3, 750 * 4, 750 * 5, 750 * 6];\n\nconst MultiLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data, index) => {\n      setTimeout(\n        () => (graph.graphContainer\n          ? graph.loadContent(Carbon.api.line(data))\n          : ''),\n        timeout[index],\n      );\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multiLine\" />\n  );\n};\n\nexport default MultiLineExample;\n\n")))}h.isMDXComponent=!0;var b=n(1329),f=n.n(b),x=n(1330),g=function(e){var a=e.title,n=e.description,t=e.isExpanded;return p.a.createElement(f.a,{title:a||"Simple",description:n,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(h,null),isExpanded:t})},O=n(1344),j=n(1459),C=n(1472),L=["components"],y={},M="wrapper";function D(e){var a=e.components,n=l()(e,L);return Object(s.mdx)(M,r()({},y,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.X,\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 12, initialX: 85, xModifier: 17, yModifier: Math.PI * 4,\n  }),\n};\n\nexport default data;\n\n")))}D.isMDXComponent=!0;var v=n(1581),P=["components"],S={},w="wrapper";function E(e){var a=e.components,n=l()(e,P);return Object(s.mdx)(w,r()({},S,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_5',\n  label: {\n    display: 'Data Label 5',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  color: Carbon.helpers.COLORS.ORANGE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n};\n\nexport default data;\n\n")))}E.isMDXComponent=!0;var G=n(1471),R=["components"];n(1332);var N={},_="wrapper";function A(e){var a=e.components,n=l()(e,R);return Object(s.mdx)(_,r()({},N,n,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"simple-multiline"},"Simple Multiline"),Object(s.mdx)("p",null,"This is simple multiline graph generated by providing timeouts for each line present in the graph."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(g,{mdxType:"LineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(O.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(j.a,{mdxType:"DataObject1"}),Object(s.mdx)(C.a,{mdxType:"DataObject2"}),Object(s.mdx)(D,{mdxType:"DataObject3"}),Object(s.mdx)(v.a,{mdxType:"DataObject4"}),Object(s.mdx)(E,{mdxType:"DataObject5"}),Object(s.mdx)(G.a,{mdxType:"DataObject6"})))}A.isMDXComponent=!0}}]);