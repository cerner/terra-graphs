(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1328:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1288)),i=n(1290),o={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=o},1600:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1288)),i=n(1290),o=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},dateline:[{showDatelineIndicator:!0,label:{display:"Current Date"},color:"#C97318",shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:i.loadDatelinePopup,value:new Date(2016,0,1,6).toISOString()}],clickPassThrough:{dateline:!1},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=o},1826:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),i=a(n(1288)),o=a(n(1289));n(1291),n(1304);var s=a(n(1293)),l=a(n(1600)),p=a(n(1328)),c=o.default.deepClone((0,l.default)("#timeseriesDateLine")),d=o.default.deepClone(p.default),m=function(){return r.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.scatter(d))}),[]),r.default.createElement(s.default,{id:"timeseriesDateLine"})};t.default=m},2055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(31),r=n.n(a),i=n(55),o=n.n(i),s=n(0),l=n.n(s),p=n(793),c=n(1826),d=n.n(c),m=["components"],u={};function h(e){var t=e.components,n=o()(e,m);return Object(p.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesDateline';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries';\n\n/*\nPlease refer documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#timeseriesDateLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst TimelineWithDatelineScatterExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"timeseriesDateLine\" />\n  );\n};\n\nexport default TimelineWithDatelineScatterExample;\n\n")))}h.isMDXComponent=!0;var b=n(1296),g=n.n(b),x=n(1297),S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(g.a,{title:t||"Timeseries With Dateline",description:n,example:l.a.createElement(d.a,null),exampleCssSrc:l.a.createElement(x.a,null),exampleSrc:l.a.createElement(h,null),isExpanded:a})},f=["components"],w={},O="wrapper";function D(e){var t=e.components,n=o()(e,f);return Object(p.mdx)(O,r()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadDatelinePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst getScatterTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Current Date',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n      onClick: loadDatelinePopup,\n      value: new Date(2016, 0, 1, 6).toISOString(),\n    },\n  ],\n  clickPassThrough: {\n    dateline: false,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getScatterTimeseriesConfig;\n\n")))}D.isMDXComponent=!0;var j=n(1410),C=["components"];n(1299);var y={},L="wrapper";function E(e){var t=e.components,n=o()(e,C);return Object(p.mdx)(L,r()({},y,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"timeseries-with-dateline-scatter-graph"},"Timeseries With Dateline Scatter Graph"),Object(p.mdx)("p",null,"This is a timeseries scatter graph with dateline for the graph"),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(S,{mdxType:"ScatterGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Example Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(D,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(j.a,{mdxType:"DataObject"})))}E.isMDXComponent=!0}}]);