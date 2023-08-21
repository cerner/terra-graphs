(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1387:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1279)),i=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};a.default=i},1399:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1279)),i=t(1281),l={key:"paired_result_critical_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!0}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190,isCritical:!0},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60,isCritical:!0}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};a.default=l},1562:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(31),r=t.n(n),i=t(56),l=t.n(i),s=(t(0),t(794)),o=["components"],p={},d="wrapper";function c(e){var a=e.components,t=l()(e,o);return Object(s.mdx)(d,r()({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1569:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1279)),i=t(1281),l={key:"paired_result_critical_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TRIANGLE,mid:r.default.helpers.SHAPES.DARK.SQUARE,low:r.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.ORANGE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,yAxis:"y2",values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300,isCritical:!0},mid:{x:"2017-08-17T13:00:00Z",y:170,isCritical:!0},low:{x:"2017-08-17T13:00:00Z",y:130,isCritical:!0}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};a.default=l},1802:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=n(t(1279)),l=n(t(1280));t(1282),t(1295);var s=n(t(1285)),o=n(t(1387)),p=n(t(1399)),d=l.default.deepClone((0,o.default)("#simplePairedResultGraph")),c=[l.default.deepClone(p.default)],m=function(){return r.default.useEffect((function(){var e=i.default.api.graph(d);c.forEach((function(a){e.loadContent(i.default.api.pairedResult(a))}))}),[]),r.default.createElement(s.default,{id:"simplePairedResultGraph"})};a.default=m},1803:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=n(t(1279)),l=n(t(1280));t(1282),t(1295);var s=n(t(1285)),o=n(t(1358)),p=n(t(1399)),d=n(t(1569)),c=l.default.deepClone((0,o.default)("#multipleCriticalPairedResultGraph")),m=[l.default.deepClone(p.default),l.default.deepClone(d.default)],u=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);m.forEach((function(a){e.loadContent(i.default.api.pairedResult(a))}))}),[]),r.default.createElement(s.default,{id:"multipleCriticalPairedResultGraph"})};a.default=u},1983:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(31),r=t.n(n),i=t(56),l=t.n(i),s=t(0),o=t.n(s),p=t(794),d=t(1802),c=t.n(d),m=["components"],u={};function h(e){var a=e.components,t=l()(e,m);return Object(p.mdx)("wrapper",r()({},u,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#simplePairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst SimpleCriticalPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePairedResultGraph\" />\n  );\n};\n\nexport default SimpleCriticalPiaredResultExample;\n\n")))}h.isMDXComponent=!0;var b=t(1287),x=t.n(b),f=t(1288),C=function(e){var a=e.title,t=e.description,n=e.isExpanded;return o.a.createElement(x.a,{title:a||"Simple Paired Result",description:t,example:o.a.createElement(c.a,null),exampleCssSrc:o.a.createElement(f.a,null),exampleSrc:o.a.createElement(h,null),isExpanded:n})},g=t(1562),y=["components"],O={},j="wrapper";function T(e){var a=e.components,t=l()(e,y);return Object(p.mdx)(j,r()({},O,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_critical_dataset_1',\n  label: {\n    high: {\n      display: 'Dataset_1_High',\n    },\n    mid: {\n      display: 'Dataset_1_Median',\n    },\n    low: {\n      display: 'Dataset_1_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: true,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n        isCritical: true,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n        isCritical: true,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}T.isMDXComponent=!0;var R=t(1803),E=t.n(R),w=["components"],P={};function S(e){var a=e.components,t=l()(e,w);return Object(p.mdx)("wrapper",r()({},P,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#multipleCriticalPairedResultGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst MultipleCriticalPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multipleCriticalPairedResultGraph\" />\n  );\n};\n\nexport default MultipleCriticalPiaredResultExample;\n\n")))}S.isMDXComponent=!0;var _=function(e){var a=e.title,t=e.description,n=e.isExpanded;return o.a.createElement(x.a,{title:a||"Multiple Paired Result",description:t,example:o.a.createElement(E.a,null),exampleCssSrc:o.a.createElement(f.a,null),exampleSrc:o.a.createElement(S,null),isExpanded:n})},D=t(1568),L=["components"],A={},Z="wrapper";function v(e){var a=e.components,t=l()(e,L);return Object(p.mdx)(Z,r()({},A,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_critical_dataset_2',\n  label: {\n    high: {\n      display: 'Dataset_2_High',\n    },\n    mid: {\n      display: 'Dataset_2_Median',\n    },\n    low: {\n      display: 'Dataset_2_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n    mid: Carbon.helpers.SHAPES.DARK.SQUARE,\n    low: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.ORANGE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  yAxis: 'y2',\n  values: [\n    {\n      high: {\n        x: '2017-05-01T11:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-05-01T11:00:00Z',\n        y: 250,\n      },\n      low: {\n        x: '2017-05-01T11:00:00Z',\n        y: 175,\n      },\n    },\n    {\n      high: {\n        x: '2017-08-17T13:00:00Z',\n        y: 300,\n        isCritical: true,\n      },\n      mid: {\n        x: '2017-08-17T13:00:00Z',\n        y: 170,\n        isCritical: true,\n      },\n      low: {\n        x: '2017-08-17T13:00:00Z',\n        y: 130,\n        isCritical: true,\n      },\n    },\n    {\n      high: {\n        x: '2017-10-17T15:00:00Z',\n        y: 250,\n      },\n      mid: {\n        x: '2017-10-17T15:00:00Z',\n        y: 220,\n      },\n      low: {\n        x: '2017-10-17T15:00:00Z',\n        y: 200,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}v.isMDXComponent=!0;var G=["components"];t(1290);var M={},N="wrapper";function H(e){var a=e.components,t=l()(e,G);return Object(p.mdx)(N,r()({},M,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"criticality"},"Criticality"),Object(p.mdx)("p",null,"Criticality consists of simple paired result graphs single dataset critical points and multiple dataset critical points(highlighted with red circle)."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(C,{mdxType:"SimpleCriticalityPairedResultGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for simple criticality")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(g.a,{mdxType:"SimpleCriticalityGraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(T,{mdxType:"SimpleCriticalityDataObject"})),Object(p.mdx)("br",null),Object(p.mdx)(_,{mdxType:"MultiCriticalityPairedResultGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data for multiple criticality")),Object(p.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(p.mdx)(D.a,{mdxType:"MultiCriticalityGraphConfig"}),Object(p.mdx)("h3",{id:"data-object-1"},"Data object"),Object(p.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(p.mdx)(T,{mdxType:"MultiCriticalityDataObject1"}),Object(p.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(p.mdx)(v,{mdxType:"MultiCriticalityDataObject2"})))}H.isMDXComponent=!0}}]);