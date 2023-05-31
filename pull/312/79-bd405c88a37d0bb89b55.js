(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1293:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=t},1296:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(31),r=n.n(t),o=n(55),s=n.n(o),i=(n(0),n(788)),p=["components"],l={},d="wrapper";function c(e){var a=e.components,n=s()(e,p);return Object(i.mdx)(d,r()({},l,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}c.isMDXComponent=!0},1314:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1273)),o=n(1275),s=n(1285),i={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,s.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};a.default=i},1374:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1273)),o=n(1275),s={key:"uid_4",label:{display:"Data Label 4"},shape:r.default.helpers.SHAPES.DARK.CROSS,color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPopup,values:new Array(15).fill("").map((function(e,a){return{y:Math.sin(a)*Math.PI*4,x:85+10*a,region:{start:Math.sin(a)*Math.PI*4-Math.PI,end:Math.sin(a)*Math.PI*4+Math.PI}}}))};a.default=s},1411:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(31),r=n.n(t),o=n(55),s=n.n(o),i=(n(0),n(788)),p=["components"],l={},d="wrapper";function c(e){var a=e.components,n=s()(e,p);return Object(i.mdx)(d,r()({},l,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1529:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!1,showVGrid:!0,showHGrid:!0}};a.default=t},1530:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(1273)),o=n(1275),s=n(1285),i={key:"uid_5",label:{display:"Data Label 5"},shape:r.default.helpers.SHAPES.DARK.SQUARE,color:r.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,s.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!1},showShapes:!1};a.default=i},1531:function(e,a,n){"use strict";n.d(a,"a",(function(){return c}));var t=n(31),r=n.n(t),o=n(55),s=n.n(o),i=(n(0),n(788)),p=["components"],l={},d="wrapper";function c(e){var a=e.components,n=s()(e,p);return Object(i.mdx)(d,r()({},l,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_4',\n  label: {\n    display: 'Data Label 4',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CROSS,\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadPopup,\n  values: new Array(15).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI * 4,\n    x: 85 + i * 10,\n    region: {\n      start: Math.sin(i) * Math.PI * 4 - Math.PI,\n      end: Math.sin(i) * Math.PI * 4 + Math.PI,\n    },\n  })),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1765:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=t(n(1273)),s=t(n(1274));n(1276),n(1278);var i=t(n(1279)),p=t(n(1529)),l=t(n(1331)),d=s.default.deepClone((0,p.default)("#shapesHidden")),c=s.default.deepClone(l.default),m=function(){return r.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"shapesHidden"})};a.default=m},1766:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(n(0)),o=t(n(1273)),s=t(n(1274));n(1276),n(1278);var i=t(n(1279)),p=t(n(1293)),l=t(n(1314)),d=t(n(1374)),c=t(n(1530)),m=s.default.deepClone((0,p.default)("#showOrHideShapesPerDataset")),u=[s.default.deepClone(l.default),s.default.deepClone(d.default),s.default.deepClone(c.default)],h=function(){return r.default.useEffect((function(){var e=o.default.api.graph(m);u.forEach((function(a){e.loadContent(o.default.api.line(a))}))}),[]),r.default.createElement(i.default,{id:"showOrHideShapesPerDataset"})};a.default=h},1982:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return R}));var t=n(31),r=n.n(t),o=n(55),s=n.n(o),i=n(0),p=n.n(i),l=n(788),d=n(1765),c=n.n(d),m=["components"],u={};function h(e){var a=e.components,n=s()(e,m);return Object(l.mdx)("wrapper",r()({},u,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getlineDefaultNoShapesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultNoShapes';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getlineDefaultNoShapesConfig('#shapesHidden'));\nconst dataset = utils.deepClone(exampleData);\n\nconst ShapesHiddenLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"shapesHidden\" />\n  );\n};\n\nexport default ShapesHiddenLineExample;\n\n")))}h.isMDXComponent=!0;var b=n(1281),f=n.n(b),x=n(1282),g=function(e){var a=e.title,n=e.description,t=e.isExpanded;return p.a.createElement(f.a,{title:a||"Shapes Hidden",description:n,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(h,null),isExpanded:t})},O=n(1296),j=n(1422),C=n(1766),L=n.n(C),S=["components"],w={};function D(e){var a=e.components,n=s()(e,S);return Object(l.mdx)("wrapper",r()({},w,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset5noShapes';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#showOrHideShapesPerDataset'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst ShowOrHideShapesPerDatasetLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"showOrHideShapesPerDataset\" />\n  );\n};\n\nexport default ShowOrHideShapesPerDatasetLineExample;\n\n\n")))}D.isMDXComponent=!0;var y=function(e){var a=e.title,n=e.description,t=e.isExpanded;return p.a.createElement(f.a,{title:a||"Show Or Hide Shapes Per Dataset",description:n,example:p.a.createElement(L.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(D,null),isExpanded:t})},v=n(1411),M=n(1531),P=["components"],E={},G="wrapper";function H(e){var a=e.components,n=s()(e,P);return Object(l.mdx)(G,r()({},E,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_5',\n  label: {\n    display: 'Data Label 5',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  color: Carbon.helpers.COLORS.ORANGE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: false,\n  },\n  showShapes: false,\n};\n\nexport default data;\n\n")))}H.isMDXComponent=!0;var N=["components"];n(1284);var T={},_="wrapper";function R(e){var a=e.components,n=s()(e,N);return Object(l.mdx)(_,r()({},T,n,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"shapes"},"Shapes"),Object(l.mdx)("p",null,"Shapes contains examples like shapes hidden in line graph and show or hide shapes per line graph dataset."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(g,{mdxType:"ShapesHiddenLineGraph"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data used for shapes hidden")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(O.a,{mdxType:"ShapesHiddenGraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)(j.a,{mdxType:"ShapesHiddenDataObject"})),Object(l.mdx)("br",null),Object(l.mdx)("br",null),Object(l.mdx)("br",null),Object(l.mdx)(y,{mdxType:"ShowOrHideShapesLineGraph"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data used for show or hide shapes per dataset")),Object(l.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(l.mdx)(O.a,{mdxType:"ShowOrHideShapesGraphConfig"}),Object(l.mdx)("h3",{id:"data-object-1"},"Data object"),Object(l.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(l.mdx)(v.a,{mdxType:"ShowOrHideShapesDataObject1"}),Object(l.mdx)("h4",{id:"dataset-4"},"Dataset 4"),Object(l.mdx)(M.a,{mdxType:"ShowOrHideShapesDataObject4"}),Object(l.mdx)("h4",{id:"dataset-5"},"Dataset 5"),Object(l.mdx)(H,{mdxType:"ShowOrHideShapesDataObject5"})))}R.isMDXComponent=!0}}]);