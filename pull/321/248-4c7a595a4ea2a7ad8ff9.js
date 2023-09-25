(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{1602:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1315)),s=a(1317),i={key:"paired_result_y2_axis_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},onClick:s.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!1}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};n.default=i},1603:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(1315)),s=a(1317),i={key:"paired_result_y2_axis_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TRIANGLE,mid:r.default.helpers.SHAPES.DARK.SQUARE,low:r.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.ORANGE,low:r.default.helpers.COLORS.BLACK},onClick:s.loadPopup,yAxis:"y2",values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300},mid:{x:"2017-08-17T13:00:00Z",y:170},low:{x:"2017-08-17T13:00:00Z",y:130}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};n.default=i},1837:function(e,n,a){"use strict";var t=a(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(0)),s=t(a(1315)),i=t(a(1316));a(1318),a(1331);var l=t(a(1321)),o=t(a(1394)),d=t(a(1602)),p=t(a(1603)),c=i.default.deepClone((0,o.default)("#y2AxisPairedResultGraph"));c.axis.y2.show=!0;var m=[i.default.deepClone(d.default),i.default.deepClone(p.default)];n.default=function(){return r.default.useEffect((function(){var e=s.default.api.graph(c);m.forEach((function(n){e.loadContent(s.default.api.pairedResult(n))}))}),[]),r.default.createElement(l.default,{id:"y2AxisPairedResultGraph"})}},2047:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return S}));var t=a(29),r=a.n(t),s=a(56),i=a.n(s),l=a(0),o=a.n(l),d=a(809),p=a(1837),c=a.n(p),m=["components"],h={};function u(e){var n=e.components,a=i()(e,m);return Object(d.mdx)("wrapper",r()({},h,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultY2AxisTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultY2AxisDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultY2AxisTimeseriesConfig('#y2AxisPairedResultGraph'));\ngraphConfig.axis.y2.show = true;\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst Y2AxisPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"y2AxisPairedResultGraph\" />\n  );\n};\n\nexport default Y2AxisPiaredResultExample;\n\n")))}u.isMDXComponent=!0;var x=a(1323),b=a.n(x),y=a(1324),g=function(e){var n=e.title,a=e.description,t=e.isExpanded;return o.a.createElement(b.a,{title:n||"Y 2 Axis",description:a,example:o.a.createElement(c.a,null),exampleCssSrc:o.a.createElement(y.a,null),exampleSrc:o.a.createElement(u,null),isExpanded:t})},f=a(1604),O=["components"],C={},T="wrapper";function R(e){var n=e.components,a=i()(e,O);return Object(d.mdx)(T,r()({},C,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_y2_axis_dataset_1',\n  label: {\n    high: {\n      display: 'Dataset_1_High',\n    },\n    mid: {\n      display: 'Dataset_1_Median',\n    },\n    low: {\n      display: 'Dataset_1_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: false,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var A=["components"],j={},_="wrapper";function w(e){var n=e.components,a=i()(e,A);return Object(d.mdx)(_,r()({},j,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_y2_axis_dataset_2',\n  label: {\n    high: {\n      display: 'Dataset_2_High',\n    },\n    mid: {\n      display: 'Dataset_2_Median',\n    },\n    low: {\n      display: 'Dataset_2_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n    mid: Carbon.helpers.SHAPES.DARK.SQUARE,\n    low: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.ORANGE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  yAxis: 'y2',\n  values: [\n    {\n      high: {\n        x: '2017-05-01T11:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-05-01T11:00:00Z',\n        y: 250,\n      },\n      low: {\n        x: '2017-05-01T11:00:00Z',\n        y: 175,\n      },\n    },\n    {\n      high: {\n        x: '2017-08-17T13:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-08-17T13:00:00Z',\n        y: 170,\n      },\n      low: {\n        x: '2017-08-17T13:00:00Z',\n        y: 130,\n      },\n    },\n    {\n      high: {\n        x: '2017-10-17T15:00:00Z',\n        y: 250,\n      },\n      mid: {\n        x: '2017-10-17T15:00:00Z',\n        y: 220,\n      },\n      low: {\n        x: '2017-10-17T15:00:00Z',\n        y: 200,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var Z=["components"];a(1326);var D={},E="wrapper";function S(e){var n=e.components,a=i()(e,Z);return Object(d.mdx)(E,r()({},D,a,{components:n,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"paired-result-graph-with-y2-axis"},"Paired Result Graph with Y2 axis"),Object(d.mdx)("p",null,"This is a timeseries paired result graph with both Y and Y2 axis."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(d.mdx)("h2",{id:"example"},"Example"),Object(d.mdx)(g,{mdxType:"PairedResultGraph"}),Object(d.mdx)("details",null,Object(d.mdx)("summary",{style:{fontSize:24}},Object(d.mdx)("b",null,"Data")),Object(d.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(d.mdx)(f.a,{mdxType:"GraphConfig"}),Object(d.mdx)("h3",{id:"data-object"},"Data object"),Object(d.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(d.mdx)(R,{mdxType:"DataObject1"}),Object(d.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(d.mdx)(w,{mdxType:"DataObject2"})))}S.isMDXComponent=!0}}]);