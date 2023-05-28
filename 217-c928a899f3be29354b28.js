(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1376:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t(1273)),i=t(1275),o={key:"uid_2",label:{display:"Data Label 2"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.BLUE,onClick:i.loadPopup,yAxis:"y2",values:[{x:new Date(2016,0,1,1,5).toISOString(),y:0},{x:new Date(2016,0,1,2,15).toISOString(),y:50},{x:new Date(2016,0,1,3,15).toISOString(),y:60},{x:new Date(2016,0,1,4,15).toISOString(),y:80},{x:new Date(2016,0,1,5,15).toISOString(),y:120},{x:new Date(2016,0,1,6,15).toISOString(),y:130},{x:new Date(2016,0,1,7,0).toISOString(),y:180},{x:new Date(2016,0,1,8,15).toISOString(),y:185},{x:new Date(2016,0,1,9,45).toISOString(),y:200},{x:new Date(2016,0,1,12,15).toISOString(),y:220}]};e.default=o},1412:function(n,e,t){"use strict";t(31),t(55),t(0),t(788)},1544:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t(1273)),i=function(n){return{bindTo:n,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},pan:{enabled:!0},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};e.default=i},1780:function(n,e,t){"use strict";var a=t(2);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(t(43)),i=a(t(0)),o=a(t(78)),l=a(t(1273)),p=a(t(1274));t(1276),t(1279);var s,c=a(t(1278)),d=a(t(1544)),u=a(t(1376)),m=p.default.deepClone((0,d.default)("#linePanningExample")),g=p.default.deepClone(u.default),S={initial:0,factor:3},x=function(){i.default.useEffect((function(){(s=l.default.api.graph(m)).loadContent(l.default.api.line(g))}),[]);var n=i.default.useReducer((function(n,e){var t;switch(e.type){case"panLeft":t=n.initial-n.factor;break;case"panRight":t=n.initial+n.factor;break;default:return n}return{initial:t,factor:n.factor}}),S),e=(0,r.default)(n,2),t=e[0],a=e[1];return i.default.useLayoutEffect((function(){s&&(s.config.axis.x.lowerLimit=new Date(2016,0,1,t.initial).toISOString(),s.config.axis.x.upperLimit=new Date(2016,0,2,t.initial).toISOString(),s.reflowMultipleDatasets())}),[t.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),i.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),i.default.createElement(c.default,{id:"linePanningExample"}))};e.default=x},2e3:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return P}));var a=t(31),r=t.n(a),i=t(55),o=t.n(i),l=t(0),p=t.n(l),s=t(788),c=t(1780),d=t.n(c),u=["components"],m={};function g(n){var e=n.components,t=o()(n,u);return Object(s.mdx)("wrapper",r()({},m,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfigLineTimeseriesPanning from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanningY2';\nimport initialData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfigLineTimeseriesPanning('#linePanningExample'));\nconst dataset = utils.deepClone(initialData);\nconst state = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst Y2AxisLinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, state);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"linePanningExample\" />\n    </>\n  );\n};\n\nexport default Y2AxisLinePanningExample;\n\n")))}g.isMDXComponent=!0;var S=t(1281),x=t.n(S),f=t(1282),b=function(n){var e=n.title,t=n.description,a=n.isExpanded;return p.a.createElement(x.a,{title:e||"Y 2 Panning",description:t,example:p.a.createElement(d.a,null),exampleCssSrc:p.a.createElement(f.a,null),exampleSrc:p.a.createElement(g,null),isExpanded:a})},h=["components"],O={},w="wrapper";function y(n){var e=n.components,t=o()(n,h);return Object(s.mdx)(w,r()({},O,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getConfigLineTimeseriesPanning = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: true,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  pan: {\n    enabled: true,\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getConfigLineTimeseriesPanning;\n\n")))}y.isMDXComponent=!0;var D=["components"],j={},L="wrapper";function I(n){var e=n.components,t=o()(n,D);return Object(s.mdx)(L,r()({},j,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = [\n  {\n    key: 'uid_1',\n    label: {\n      display: 'Data Label 1',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 5,\n        isCritical: false,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 9,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 13, 15).toISOString(),\n        y: 28,\n      },\n      {\n        x: new Date(2016, 0, 1, 14, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 19, 45).toISOString(),\n        y: 13,\n      },\n      {\n        x: new Date(2016, 0, 1, 21, 15).toISOString(),\n        y: 14,\n      },\n    ],\n    yAxis: 'y',\n  },\n  {\n    key: 'uid_2',\n    label: {\n      display: 'Data Label 2',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    color: Carbon.helpers.COLORS.BLUE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 0,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 50,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 60,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 80,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 120,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 130,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 180,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 185,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 200,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 220,\n      },\n    ],\n    yAxis: 'y2',\n  },\n];\n\nexport default data;\n\n")))}I.isMDXComponent=!0;t(1334),t(1412);var C=["components"];t(1284);var E={},v="wrapper";function P(n){var e=n.components,t=o()(n,C);return Object(s.mdx)(v,r()({},E,t,{components:e,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-graph---panning"},"Line Graph - panning"),Object(s.mdx)("p",null,"This is a line graph example that implements panning with dynamically updating data. Click on the panning buttons to pan the graph."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(b,{mdxType:"LineGraphPanning"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(I,{mdxType:"DataObject"})))}P.isMDXComponent=!0}}]);