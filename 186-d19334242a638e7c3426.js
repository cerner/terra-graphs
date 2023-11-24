(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1361:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1320)),i=n(1322),o={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}]};t.default=o},1432:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1320));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1464:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(29),r=n.n(a),i=n(56),o=n.n(i),l=(n(0),n(813)),p=["components"],c={},s="wrapper";function d(e){var t=e.components,n=o()(e,p);return Object(l.mdx)(s,r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getScatterTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getScatterTimeseriesConfig;\n\n")))}d.isMDXComponent=!0},1465:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1320)),i=n(1322),o={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:i.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:28},{x:new Date(2016,0,1,2,15).toISOString(),y:5},{x:new Date(2016,0,1,3,15).toISOString(),y:25},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:15},{x:new Date(2016,0,1,7,0).toISOString(),y:6},{x:new Date(2016,0,1,8,15).toISOString(),y:8},{x:new Date(2016,0,1,9,45).toISOString(),y:9},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:18},{x:new Date(2016,0,1,14,15).toISOString(),y:22},{x:new Date(2016,0,1,19,45).toISOString(),y:7},{x:new Date(2016,0,1,21,15).toISOString(),y:21}]};t.default=o},1632:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(43)),i=a(n(0)),o=a(n(78)),l=a(n(1320)),p=a(n(1321));n(1323),n(1336);var c,s=a(n(1326)),d=a(n(1432)),u=a(n(1361)),m=a(n(1465)),f=p.default.deepClone((0,d.default)("#dynamicLineData")),g=p.default.deepClone(u.default),S={initial:0,factor:3};t.default=function(){i.default.useEffect((function(){(c=l.default.api.graph(f)).loadContent(l.default.api.scatter(g))}),[]);var e=i.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),S),t=(0,r.default)(e,2),n=t[0],a=t[1];return i.default.useLayoutEffect((function(){if(c){c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={panData:[p.default.deepClone(p.default.deepClone(m.default))]};c.reflowMultipleDatasets(e)}}),[n.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(s.default,{id:"dynamicLineData"}))}},1649:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1632),o=n.n(i),l=n(29),p=n.n(l),c=n(56),s=n.n(c),d=n(813),u=["components"],m={};function f(e){var t=e.components,n=s()(e,u);return Object(d.mdx)("wrapper",p()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesPanning';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries';\nimport updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseriesNewData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#dynamicLineData'));\nconst dataset = utils.deepClone(initialData);\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\nlet graph;\n\nconst DynamicLinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.scatter(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(utils.deepClone(updatedData))],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"dynamicLineData\" />\n    </>\n  );\n};\n\nexport default DynamicLinePanningExample;\n\n")))}f.isMDXComponent=!0;var g=n(1328),S=n.n(g),x=n(1329);t.a=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(S.a,{title:t||"Dynamic Data",description:n,example:r.a.createElement(o.a,null),exampleCssSrc:r.a.createElement(x.a,null),exampleSrc:r.a.createElement(f,null),isExpanded:a})}},1883:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(29),r=n.n(a),i=n(56),o=n.n(i),l=(n(0),n(813)),p=n(1649),c=n(1464),s=n(1442),d=["components"];n(1331);var u={},m="wrapper";function f(e){var t=e.components,n=o()(e,d);return Object(l.mdx)(m,r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"scatter-graph---panning"},"Scatter Graph - Panning"),Object(l.mdx)("p",null,"This is a scatter graph example that implements panning."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-graphs"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"example"},"Example"),Object(l.mdx)(p.a,{mdxType:"ScatterGraphPanning"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Example Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(c.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)(s.a,{mdxType:"DataObject"})))}f.isMDXComponent=!0}}]);