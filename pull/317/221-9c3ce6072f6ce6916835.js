(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1424:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:180},y:{show:!0,label:"Line Set A",lowerLimit:0,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=n},1457:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(29),r=a.n(n),i=a(56),o=a.n(i),l=(a(0),a(809)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,a=o()(e,p);return Object(l.mdx)(s,r()({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getScatterTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getScatterTimeseriesConfig;\n\n")))}d.isMDXComponent=!0},1621:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1315)),i=a(1317),o={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:[{x:85,y:5},{x:90,y:11},{x:92,y:12,isCritical:!0},{x:101,y:16},{x:107,y:17},{x:107,y:9,isCritical:!0},{x:135,y:11},{x:139,y:12},{x:143,y:16},{x:155,y:17,isCritical:!0},{x:161,y:28},{x:164,y:12},{x:168,y:13},{x:170,y:14}]};t.default=o},1833:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(1315)),o=n(a(1316));a(1318),a(1331);var l=n(a(1322)),p=n(a(1424)),c=n(a(1621)),s=o.default.deepClone((0,p.default)("#simpleCriticalScattergraph")),d=o.default.deepClone(c.default),m=function(){return r.default.useEffect((function(){i.default.api.graph(s).loadContent(i.default.api.scatter(d))}),[]),r.default.createElement(l.default,{id:"simpleCriticalScattergraph"})};t.default=m},2094:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(29),r=a.n(n),i=a(56),o=a.n(i),l=a(0),p=a.n(l),c=a(809),s=a(1833),d=a.n(s),m=["components"],u={};function b(e){var t=e.components,a=o()(e,m);return Object(c.mdx)("wrapper",r()({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1critical';\n\n/*\nPlease refer documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#simpleCriticalScattergraph'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleCriticalityScatterExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simpleCriticalScattergraph\" />\n  );\n};\n\nexport default SimpleCriticalityScatterExample;\n\n")))}b.isMDXComponent=!0;var h=a(1324),x=a.n(h),f=a(1325),g=function(e){var t=e.title,a=e.description,n=e.isExpanded;return p.a.createElement(x.a,{title:t||"Simple",description:a,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(f.a,null),exampleSrc:p.a.createElement(b,null),isExpanded:n})},j=a(1457),C=a(1436),w=["components"];a(1326);var O={},y="wrapper";function S(e){var t=e.components,a=o()(e,w);return Object(c.mdx)(y,r()({},O,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-scatter-graph"},"Simple Scatter Graph"),Object(c.mdx)("p",null,"This is Simple Scatter graph with critical points(highlighted with red circle) in it."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(g,{mdxType:"ScatterGraph"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Example Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(j.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)(C.a,{mdxType:"DataObject"})))}S.isMDXComponent=!0}}]);