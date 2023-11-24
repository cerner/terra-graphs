(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1341:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1320)),i=t(1322),o={key:"uid_1",label:{display:"Data Label 1"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:i.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};n.default=o},1589:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1320));n.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,eventline:[{color:r.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},value:new Date(2016,0,1,4,15).toISOString()}]}}},1825:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(43)),i=a(t(0)),o=a(t(78)),l=a(t(1320)),p=a(t(1321));t(1323),t(1325);var s,c=a(t(1326)),d=a(t(1589)),u=a(t(1341)),m=p.default.deepClone((0,d.default)("#dynamicEventlineExample")),f=p.default.deepClone(u.default),g={initial:0,factor:3};n.default=function(){i.default.useEffect((function(){(s=l.default.api.graph(m)).loadContent(l.default.api.line(f))}),[]);var e=i.default.useReducer((function(e,n){var t;switch(n.type){case"panLeft":t=e.initial-e.factor;break;case"panRight":t=e.initial+e.factor;break;default:return e}return{initial:t,factor:e.factor}}),g),n=(0,r.default)(e,2),t=n[0],a=n[1];return i.default.useLayoutEffect((function(){if(s){s.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString();var e={eventline:[{color:l.default.helpers.COLORS.GREEN,style:{strokeDashArray:"4,4"},value:new Date(2016,0,1,9,45).toISOString()}]};s.reflowMultipleDatasets(e)}}),[t.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(c.default,{id:"dynamicEventlineExample"}))}},2080:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v}));var a=t(29),r=t.n(a),i=t(56),o=t.n(i),l=t(0),p=t.n(l),s=t(813),c=t(1825),d=t.n(c),u=["components"],m={};function f(e){var n=e.components,t=o()(e,u);return Object(s.mdx)("wrapper",r()({},m,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanningEventline';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#dynamicEventlineExample'));\nconst dataset = utils.deepClone(exampleData);\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst DynamicEventlinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newEventline = [\n      {\n        color: Carbon.helpers.COLORS.GREEN,\n        style: {\n          strokeDashArray: '4,4',\n        },\n        value: new Date(2016, 0, 1, 9, 45).toISOString(),\n      },\n    ];\n\n    const newDataset = {\n      // panData: [utils.deepClone(exampleData[1])],\n      eventline: newEventline,\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"dynamicEventlineExample\" />\n    </>\n  );\n};\n\nexport default DynamicEventlinePanningExample;\n\n")))}f.isMDXComponent=!0;var g=t(1328),h=t.n(g),b=t(1329),x=function(e){var n=e.title,t=e.description,a=e.isExpanded;return p.a.createElement(h.a,{title:n||"Dynamic Eventline",description:t,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(b.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},S=["components"],w={},O="wrapper";function y(e){var n=e.components,t=o()(e,S);return Object(s.mdx)(O,r()({},w,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getConfigLineTimeseriesPanning = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  eventline: [{\n    color: Carbon.helpers.COLORS.BLUE,\n    style: {\n      strokeDashArray: '2,2',\n    },\n    value: new Date(2016, 0, 1, 4, 15).toISOString(),\n  },\n  ],\n});\n\nexport default getConfigLineTimeseriesPanning;\n\n")))}y.isMDXComponent=!0;var D=t(1381),E=["components"];t(1331);var L={},j="wrapper";function v(e){var n=e.components,t=o()(e,E);return Object(s.mdx)(j,r()({},L,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-graph---panning"},"Line Graph - panning"),Object(s.mdx)("p",null,"This is a line graph example with a dynamically updating eventline.  Click on the panning buttons to see the updated eventline."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"LineGraphPanning"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(D.a,{mdxType:"DataObject"})))}v.isMDXComponent=!0}}]);