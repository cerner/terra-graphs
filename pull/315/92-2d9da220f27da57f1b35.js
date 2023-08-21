(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1300:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1279)),r=n(1281),o={key:"uid_1",label:{display:"Data Label 1"},shape:i.default.helpers.SHAPES.DARK.CIRCLE,onClick:r.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=o},1328:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1279)),r=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=r},1381:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1279)),r=n(1281),o={key:"uid_3",label:{display:"Data Label 3"},shape:i.default.helpers.SHAPES.DARK.CIRCLE,color:i.default.helpers.COLORS.BLUE,onClick:r.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:15},{x:new Date(2016,0,1,2,15).toISOString(),y:21},{x:new Date(2016,0,1,3,15).toISOString(),y:null},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:19},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:22},{x:new Date(2016,0,1,19,45).toISOString(),y:23}]};t.default=o},1383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"uid_1",label:{display:"Data Label 1"},values:[{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:10},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:10},{x:new Date(2016,0,1,6,15).toISOString(),y:7},{x:new Date(2016,0,1,7,0).toISOString(),y:16},{x:new Date(2016,0,1,8,15).toISOString(),y:9},{x:new Date(2016,0,1,9,45).toISOString(),y:6},{x:new Date(2016,0,1,12,15).toISOString(),y:2},{x:new Date(2016,0,1,13,15).toISOString(),y:3},{x:new Date(2016,0,1,14,15).toISOString(),y:25},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=a},1384:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),i=n.n(a),r=n(56),o=n.n(r),l=(n(0),n(794)),s=["components"],p={},d="wrapper";function c(e){var t=e.components,n=o()(e,s);return Object(l.mdx)(d,i()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesPanningConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesPanningConfig;\n\n")))}c.isMDXComponent=!0},1420:function(e,t,n){"use strict";n(31),n(56),n(0),n(794)},1540:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),i=n.n(a),r=n(56),o=n.n(r),l=(n(0),n(794)),s=["components"],p={},d="wrapper";function c(e){var t=e.components,n=o()(e,s);return Object(l.mdx)(d,i()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_3',\n  label: {\n    display: 'Data Label 3',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  yAxis: 'y',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\n      y: 15,\n    },\n    {\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\n      y: 21,\n    },\n    {\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\n      y: null,\n    },\n    {\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\n      y: 19,\n    },\n    {\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\n      y: 16,\n    },\n    {\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\n      y: 17,\n    },\n    {\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\n      y: 28,\n    },\n    {\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\n      y: 22,\n    },\n    {\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\n      y: 23,\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1549:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1279)),r=n(1281),o={key:"uid_3",label:{display:"Data Label 3"},shape:i.default.helpers.SHAPES.DARK.CIRCLE,color:i.default.helpers.COLORS.BLUE,onClick:r.loadPopup,yAxis:"y",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:25},{x:new Date(2016,0,1,2,15).toISOString(),y:5},{x:new Date(2016,0,1,3,15).toISOString(),y:16},{x:new Date(2016,0,1,4,15).toISOString(),y:null},{x:new Date(2016,0,1,5,15).toISOString(),y:3},{x:new Date(2016,0,1,6,15).toISOString(),y:7},{x:new Date(2016,0,1,9,45).toISOString(),y:4},{x:new Date(2016,0,1,12,15).toISOString(),y:12},{x:new Date(2016,0,1,13,15).toISOString(),y:19},{x:new Date(2016,0,1,14,15).toISOString(),y:24}]};t.default=o},1784:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(43)),r=a(n(0)),o=a(n(78)),l=a(n(1279)),s=a(n(1280));n(1282),n(1284);var p,d=a(n(1285)),c=a(n(1328)),u=a(n(1300)),m=a(n(1383)),S=a(n(1381)),g=a(n(1549)),x=s.default.deepClone((0,c.default)("#multipleDatasetsExample")),f=[s.default.deepClone(u.default),s.default.deepClone(S.default)],b={initial:0,factor:3},O=function(){r.default.useEffect((function(){p=l.default.api.graph(x),f.forEach((function(e){p.loadContent(l.default.api.line(e))}))}),[]);var e=r.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),b),t=(0,i.default)(e,2),n=t[0],a=t[1];return r.default.useLayoutEffect((function(){if(p){p.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),p.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={panData:[s.default.deepClone(m.default),s.default.deepClone(g.default)]};p.reflowMultipleDatasets(e)}}),[n.initial]),r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),r.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),r.default.createElement(d.default,{id:"multipleDatasetsExample"}))};t.default=O},2007:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(31),i=n.n(a),r=n(56),o=n.n(r),l=n(0),s=n.n(l),p=n(794),d=n(1784),c=n.n(d),u=["components"],m={};function S(e){var t=e.components,n=o()(e,u);return Object(p.mdx)("wrapper",i()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';\nimport initialData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\nimport updatedData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1newData';\nimport initialData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries3';\nimport updatedData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries3newData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#multipleDatasetsExample'));\nconst dataset = [\n  utils.deepClone(initialData1),\n  utils.deepClone(initialData2),\n];\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst MultipleDatasetsLinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [\n        utils.deepClone(updatedData1),\n        utils.deepClone(updatedData2),\n      ],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"multipleDatasetsExample\" />\n    </>\n  );\n};\n\nexport default MultipleDatasetsLinePanningExample;\n\n")))}S.isMDXComponent=!0;var g=n(1287),x=n.n(g),f=n(1288),b=function(e){var t=e.title,n=e.description,a=e.isExpanded;return s.a.createElement(x.a,{title:t||"Multiple Datasets",description:n,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(f.a,null),exampleSrc:s.a.createElement(S,null),isExpanded:a})};n(1384);n(1340),n(1420),n(1540);var O=["components"];n(1290);var D={},w="wrapper";function h(e){var t=e.components,n=o()(e,O);return Object(p.mdx)(w,i()({},D,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"line-graph---panning"},"Line Graph - panning"),Object(p.mdx)("p",null,"This is a line graph example that implements panning. Click on the panning buttons to see the updated data."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(b,{mdxType:"LineGraphPanning"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)("h4",{id:"initial-data-1"},"Initial data 1"),Object(p.mdx)("initialData1",null),Object(p.mdx)("h4",{id:"updated-data-1"},"Updated data 1"),Object(p.mdx)("updatedData1",null),Object(p.mdx)("h4",{id:"initial-data-2"},"Initial data 2"),Object(p.mdx)("initialData1",null),Object(p.mdx)("h4",{id:"updated-data-2"},"Updated data 2"),Object(p.mdx)("updatedData1",null)))}h.isMDXComponent=!0}}]);