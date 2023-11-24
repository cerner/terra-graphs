(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{1507:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={key:"dynamic_dataset_1",values:[{x:new Date(2016,0,1,3).toISOString(),y:1},{x:new Date(2016,0,1,6).toISOString(),y:5},{x:new Date(2016,0,1,9).toISOString(),y:8},{x:new Date(2016,0,1,12).toISOString(),y:20},{x:new Date(2016,0,1,15).toISOString(),y:6}]};a.default=n},1749:function(t,a,e){"use strict";var n=e(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e(43)),i=n(e(0)),o=n(e(78)),c=n(e(1320)),p=n(e(1321));e(1323),e(1337);var l,s=n(e(1326)),d=n(e(1438)),m=n(e(1352)),u=n(e(1507)),f=p.default.deepClone((0,d.default)("#BarPanningDynamicData")),g=p.default.deepClone(m.default),b={initial:0,factor:3};a.default=function(){i.default.useEffect((function(){(l=c.default.api.graph(f)).loadContent(c.default.api.bar(g))}),[]);var t=i.default.useReducer((function(t,a){var e;switch(a.type){case"panLeft":e=t.initial-t.factor;break;case"panRight":e=t.initial+t.factor;break;default:return t}return{initial:e,factor:t.factor}}),b),a=(0,r.default)(t,2),e=a[0],n=a[1];return i.default.useLayoutEffect((function(){if(l){l.config.axis.x.lowerLimit=new Date(2016,0,1,e.initial).toISOString(),l.config.axis.x.upperLimit=new Date(2016,0,2,e.initial).toISOString();var t={panData:[p.default.deepClone(u.default)]};l.reflowMultipleDatasets(t)}}),[e.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),i.default.createElement(s.default,{id:"BarPanningDynamicData"}))}},2059:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return B}));var n=e(29),r=e.n(n),i=e(56),o=e.n(i),c=e(0),p=e.n(c),l=e(813),s=e(1749),d=e.n(s),m=["components"],u={};function f(t){var a=t.components,e=o()(t,m);return Object(l.mdx)("wrapper",r()({},u,e,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';\nimport updatedData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1newData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#BarPanningDynamicData'));\nconst dataset = utils.deepClone(initialData);\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst BarPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    const newDataset = { panData: [utils.deepClone(updatedData)] };\n\n    graph.reflowMultipleDatasets(newDataset);\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"BarPanningDynamicData\" />\n    </>\n  );\n};\n\nexport default BarPanningExample;\n\n")))}f.isMDXComponent=!0;var g=e(1328),b=e.n(g),x=e(1329),h=function(t){var a=t.title,e=t.description,n=t.isExpanded;return p.a.createElement(b.a,{title:a||"Dynamic Data",description:e,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:n})},j=e(1665),O=e(1389),D=["components"],S={},y="wrapper";function w(t){var a=t.components,e=o()(t,D);return Object(l.mdx)(y,r()({},S,e,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const data = {\n  key: 'dynamic_dataset_1',\n  values: [\n    {\n      x: new Date(2016, 0, 1, 3).toISOString(),\n      y: 1,\n    },\n    {\n      x: new Date(2016, 0, 1, 6).toISOString(),\n      y: 5,\n    },\n    {\n      x: new Date(2016, 0, 1, 9).toISOString(),\n      y: 8,\n    },\n    {\n      x: new Date(2016, 0, 1, 12).toISOString(),\n      y: 20,\n    },\n    {\n      x: new Date(2016, 0, 1, 15).toISOString(),\n      y: 6,\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var C=["components"];e(1331);var v={},E="wrapper";function B(t){var a=t.components,e=o()(t,C);return Object(l.mdx)(E,r()({},v,e,{components:a,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"bar-graph-panning---dynamic-data"},"Bar graph panning - Dynamic data"),Object(l.mdx)("p",null,"This is a bar graph example that implements panning with dynamic data."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(h,{mdxType:"BarGraphPanning"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(j.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)("h4",{id:"initial-data"},"Initial Data"),Object(l.mdx)(O.a,{mdxType:"DataObject1"}),Object(l.mdx)("h4",{id:"updated-data"},"Updated Data"),Object(l.mdx)(w,{mdxType:"DataObject2"})))}B.isMDXComponent=!0}}]);