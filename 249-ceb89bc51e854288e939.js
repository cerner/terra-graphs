(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1425:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1316));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0).toISOString(),upperLimit:new Date(2016,0,2,0).toISOString(),ticks:{}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1609:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(29),r=n.n(a),i=n(56),o=n.n(i),l=(n(0),n(809)),p=["components"],s={},c="wrapper";function d(e){var t=e.components,n=o()(e,p);return Object(l.mdx)(c,r()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesPanningConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n      ticks: {},\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesPanningConfig;\n\n")))}d.isMDXComponent=!0},1844:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(43)),i=a(n(0)),o=a(n(78)),l=a(n(1316)),p=a(n(1317));n(1319),n(1332);var s,c=a(n(1322)),d=a(n(1425)),u=a(n(1437)),m=p.default.deepClone((0,d.default)("#simplePairedResultPanning")),f=[p.default.deepClone(u.default)],g={initial:0,factor:3};t.default=function(){i.default.useEffect((function(){s=l.default.api.graph(m),f.forEach((function(e){s.loadContent(l.default.api.pairedResult(e))}))}),[]);var e=i.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),g),t=(0,r.default)(e,2),n=t[0],a=t[1];return i.default.useLayoutEffect((function(){s&&(s.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString(),s.reflowMultipleDatasets())}),[n.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(c.default,{id:"simplePairedResultPanning"}))}},2112:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(29),r=n.n(a),i=n(56),o=n.n(i),l=n(0),p=n.n(l),s=n(809),c=n(1844),d=n.n(c),u=["components"],m={};function f(e){var t=e.components,n=o()(e,u);return Object(s.mdx)("wrapper",r()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesPanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesPanningConfig('#simplePairedResultPanning'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst state = {\n  initial: 0,\n  factor: 3,\n};\nlet graph;\n\nconst SimplePairedResultPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"simplePairedResultPanning\" />\n    </>\n  );\n};\n\nexport default SimplePairedResultPanningExample;\n\n")))}f.isMDXComponent=!0;var g=n(1324),b=n.n(g),h=n(1325),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Simple Panning",description:n,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(h.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},j=n(1609),S=n(1663),w=["components"];n(1327);var O={},P="wrapper";function C(e){var t=e.components,n=o()(e,w);return Object(s.mdx)(P,r()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"simple-paired-result-graph-panning"},"Simple Paired Result graph panning"),Object(s.mdx)("p",null,"This is a paired result graph example that implements panning."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(x,{mdxType:"PairedResultGraphPanning"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(S.a,{mdxType:"DataObject"})))}C.isMDXComponent=!0}}]);