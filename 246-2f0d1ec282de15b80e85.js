(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{1308:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(1287)),i=t(1289),o={key:"uid_1",label:{display:"Data Label 1"},shape:a.default.helpers.SHAPES.DARK.CIRCLE,onClick:i.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};n.default=o},1551:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(1287)),i=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,eventline:[{color:a.default.helpers.COLORS.GREY,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,8).toISOString()},{color:a.default.helpers.COLORS.BLACK,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,12).toISOString()}]}};n.default=i},1785:function(e,n,t){"use strict";var r=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(0)),i=r(t(1287)),o=r(t(1288));t(1290),t(1292);var s=r(t(1293)),l=r(t(1551)),p=r(t(1308)),m=o.default.deepClone((0,l.default)("#timeseriesEventLine")),c=o.default.deepClone(p.default),d=function(){return a.default.useEffect((function(){i.default.api.graph(m).loadContent(i.default.api.line(c))}),[]),a.default.createElement(s.default,{id:"timeseriesEventLine"})};n.default=d},2042:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var r=t(31),a=t.n(r),i=t(56),o=t.n(i),s=t(0),l=t.n(s),p=t(795),m=t(1785),c=t.n(m),d=["components"],u={};function b(e){var n=e.components,t=o()(e,d);return Object(p.mdx)("wrapper",a()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineTimeseriesDatelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesEventline';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineTimeseriesDatelineConfig('#timeseriesEventLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst TimeseriesEventlineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"timeseriesEventLine\" />\n  );\n};\n\nexport default TimeseriesEventlineExample;\n\n\n")))}b.isMDXComponent=!0;var h=t(1295),g=t.n(h),x=t(1296),S=function(e){var n=e.title,t=e.description,r=e.isExpanded;return l.a.createElement(g.a,{title:n||"Timeseries Eventline",description:t,example:l.a.createElement(c.a,null),exampleCssSrc:l.a.createElement(x.a,null),exampleSrc:l.a.createElement(b,null),isExpanded:r})},f=["components"],O={},w="wrapper";function j(e){var n=e.components,t=o()(e,f);return Object(p.mdx)(w,a()({},O,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesEventlineConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  eventline: [\n    {\n      color: Carbon.helpers.COLORS.GREY,\n      style: {\n        strokeDashArray: '4,4',\n      },\n      value: new Date(2016, 0, 1, 8).toISOString(),\n    },\n    {\n      color: Carbon.helpers.COLORS.BLACK,\n      style: {\n        strokeDashArray: '2,2',\n      },\n      value: new Date(2016, 0, 1, 12).toISOString(),\n    },\n  ],\n});\n\nexport default getLineTimeseriesEventlineConfig;\n\n")))}j.isMDXComponent=!0;var y=t(1348),v=["components"];t(1298);var L={},D="wrapper";function C(e){var n=e.components,t=o()(e,v);return Object(p.mdx)(D,a()({},L,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"timeseries-graph-with-eventline"},"Timeseries graph with eventline"),Object(p.mdx)("p",null,"This is a timeseries line graph with eventlines."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(S,{mdxType:"LineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(j,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(y.a,{mdxType:"DataObject"})))}C.isMDXComponent=!0}}]);