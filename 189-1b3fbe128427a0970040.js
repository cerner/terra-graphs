(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1309:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1288)),r=n(1290),o={key:"uid_1",label:{display:"Data Label 1"},shape:i.default.helpers.SHAPES.DARK.CIRCLE,onClick:r.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=o},1336:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1288)),r=function(e){return{bindTo:e,axis:{x:{type:i.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=r},1393:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(31),i=n.n(a),r=n(55),o=n.n(r),l=(n(0),n(793)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=o()(e,p);return Object(l.mdx)(c,i()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesPanningConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesPanningConfig;\n\n")))}d.isMDXComponent=!0},1557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"uid_1",label:{display:"Data Label 1"},values:[]};t.default=a},1792:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(43)),r=a(n(0)),o=a(n(78)),l=a(n(1288)),p=a(n(1289));n(1291),n(1294);var s,c=a(n(1293)),d=a(n(1336)),u=a(n(1309)),m=a(n(1557)),g=p.default.deepClone((0,d.default)("#DynamicLegendExample")),f=p.default.deepClone(u.default),b={initial:0,factor:3},x=function(){r.default.useEffect((function(){(s=l.default.api.graph(g)).loadContent(l.default.api.line(f))}),[]);var e=r.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return s.config.axis.x.lowerLimit=new Date(2016,0,1,n).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,n).toISOString(),{initial:n,factor:e.factor}}),b),t=(0,i.default)(e,2),n=t[0],a=t[1];return r.default.useLayoutEffect((function(){if(s){s.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString();var e={panData:[p.default.deepClone(m.default)]};s.reflowMultipleDatasets(e)}}),[n.initial]),r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),r.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),r.default.createElement(c.default,{id:"DynamicLegendExample"}))};t.default=x},2043:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(31),i=n.n(a),r=n(55),o=n.n(r),l=n(0),p=n.n(l),s=n(793),c=n(1792),d=n.n(c),u=["components"],m={};function g(e){var t=e.components,n=o()(e,u);return Object(s.mdx)("wrapper",i()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\nimport updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1newData2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#DynamicLegendExample'));\nconst dataset = utils.deepClone(initialData);\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst DynamicLegendPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = {\n      panData: [utils.deepClone(updatedData)],\n    };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"DynamicLegendExample\" />\n    </>\n  );\n};\n\nexport default DynamicLegendPanningExample;\n\n")))}g.isMDXComponent=!0;var f=n(1296),b=n.n(f),x=n(1297),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Dynamic Legend",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(g,null),isExpanded:a})},S=n(1393);n(1349);var w=["components"];n(1299);var O={},D="wrapper";function L(e){var t=e.components,n=o()(e,w);return Object(s.mdx)(D,i()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-graph---panning"},"Line Graph - panning"),Object(s.mdx)("p",null,"This is a line graph example with a dynamically updating legend. Click on the panning buttons to see the updated legend."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(h,{mdxType:"LineGraphPanning"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(S.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"initial-data"},"Initial data"),Object(s.mdx)("initialData",null),Object(s.mdx)("h4",{id:"updated-data"},"Updated data"),Object(s.mdx)("updatedData",null)))}L.isMDXComponent=!0}}]);