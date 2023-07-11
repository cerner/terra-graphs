(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1327:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(1287)),i=n(1289),o={key:"uid_1",label:{display:"Data Label 1"},color:a.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=o},1600:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(1287)),i=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},eventline:[{color:a.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,8).toISOString()},{color:a.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,12).toISOString()}],showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=i},1826:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(1287)),o=r(n(1288));n(1290),n(1303);var s=r(n(1292)),l=r(n(1600)),p=r(n(1327)),c=o.default.deepClone((0,l.default)("#timeseriesEventLine")),m=o.default.deepClone(p.default),d=function(){return a.default.useEffect((function(){i.default.api.graph(c).loadContent(i.default.api.scatter(m))}),[]),a.default.createElement(s.default,{id:"timeseriesEventLine"})};t.default=d},2055:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var r=n(31),a=n.n(r),i=n(56),o=n.n(i),s=n(0),l=n.n(s),p=n(795),c=n(1826),m=n.n(c),d=["components"],u={};function h(e){var t=e.components,n=o()(e,d);return Object(p.mdx)("wrapper",a()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesEventline';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries';\n\n/*\nPlease refer documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#timeseriesEventLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst TimelineWithEventlineScatterExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"timeseriesEventLine\" />\n  );\n};\n\nexport default TimelineWithEventlineScatterExample;\n\n")))}h.isMDXComponent=!0;var b=n(1295),g=n.n(b),x=n(1296),S=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(g.a,{title:t||"Timeseries With Eventline",description:n,example:l.a.createElement(m.a,null),exampleCssSrc:l.a.createElement(x.a,null),exampleSrc:l.a.createElement(h,null),isExpanded:r})},O=["components"],f={},w="wrapper";function j(e){var t=e.components,n=o()(e,O);return Object(p.mdx)(w,a()({},f,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getScatterTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  eventline: [\n    {\n      color: Carbon.helpers.COLORS.GREY,\n      style: {\n        strokeDashArray: '4,4',\n      },\n      value: new Date(2016, 0, 1, 8).toISOString(),\n    },\n    {\n      color: Carbon.helpers.COLORS.BLACK,\n      style: {\n        strokeDashArray: '2,2',\n      },\n      value: new Date(2016, 0, 1, 12).toISOString(),\n    },\n  ],\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getScatterTimeseriesConfig;\n\n")))}j.isMDXComponent=!0;var y=n(1409),v=["components"];n(1298);var C={},D="wrapper";function E(e){var t=e.components,n=o()(e,v);return Object(p.mdx)(D,a()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"timeseries-with-eventline-scatter-graph"},"Timeseries With Eventline Scatter Graph"),Object(p.mdx)("p",null,"This is a timeseries scatter graph with eventline for the graph"),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(S,{mdxType:"ScatterGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Example Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(j,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(y.a,{mdxType:"DataObject"})))}E.isMDXComponent=!0}}]);