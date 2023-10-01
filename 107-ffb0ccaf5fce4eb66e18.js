(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1381:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1316)),l=n(1318),d={key:"timeseries_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},onClick:l.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!1}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};t.default=d},1424:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1316));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}}},1458:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),l=n(56),d=n.n(l),i=(n(0),n(809)),m=["components"],p={},o="wrapper";function c(e){var t=e.components,n=d()(e,m);return Object(i.mdx)(o,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'timeseries_paired_result_data',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: false,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1597:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1316)),l=n(1318),d={key:"simple_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.PURPLE,low:r.default.helpers.COLORS.BLACK},onClick:l.loadPopup,values:[{high:{x:20,y:150},mid:{x:20,y:40},low:{x:20,y:10}},{high:{x:80,y:100},mid:{x:80,y:75},low:{x:80,y:50}},{high:{x:150,y:110},mid:{x:150,y:70},low:{x:150,y:30}},{high:{x:175,y:160},mid:{x:175,y:120},low:{x:175,y:100}},{high:{x:300,y:190},mid:{x:300,y:90},low:{x:300,y:60}},{high:{x:560,y:150},mid:{x:560,y:40},low:{x:560,y:10}},{high:{x:800,y:180},mid:{x:800,y:100},low:{x:800,y:100}}]};t.default=d},1598:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),l=n(56),d=n.n(l),i=(n(0),n(809)),m=["components"],p={},o="wrapper";function c(e){var t=e.components,n=d()(e,m);return Object(i.mdx)(o,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'simple_paired_result_data',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.PURPLE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 20,\n        y: 150,\n      },\n      mid: {\n        x: 20,\n        y: 40,\n      },\n      low: {\n        x: 20,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 80,\n        y: 100,\n      },\n      mid: {\n        x: 80,\n        y: 75,\n      },\n      low: {\n        x: 80,\n        y: 50,\n      },\n    },\n    {\n      high: {\n        x: 150,\n        y: 110,\n      },\n      mid: {\n        x: 150,\n        y: 70,\n      },\n      low: {\n        x: 150,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 175,\n        y: 160,\n      },\n      mid: {\n        x: 175,\n        y: 120,\n      },\n      low: {\n        x: 175,\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: 300,\n        y: 190,\n      },\n      mid: {\n        x: 300,\n        y: 90,\n      },\n      low: {\n        x: 300,\n        y: 60,\n      },\n    },\n    {\n      high: {\n        x: 560,\n        y: 150,\n      },\n      mid: {\n        x: 560,\n        y: 40,\n      },\n      low: {\n        x: 560,\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: 800,\n        y: 180,\n      },\n      mid: {\n        x: 800,\n        y: 100,\n      },\n      low: {\n        x: 800,\n        y: 100,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1599:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),l=n(56),d=n.n(l),i=(n(0),n(809)),m=["components"],p={},o="wrapper";function c(e){var t=e.components,n=d()(e,m);return Object(i.mdx)(o,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1833:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(1316)),d=a(n(1317));n(1319),n(1332);var i=a(n(1322)),m=a(n(1375)),p=a(n(1597)),o=d.default.deepClone((0,m.default)("#simplePairedResultGraph")),c=[d.default.deepClone(p.default)];t.default=function(){return r.default.useEffect((function(){var e=l.default.api.graph(o);c.forEach((function(t){e.loadContent(l.default.api.pairedResult(t))}))}),[]),r.default.createElement(i.default,{id:"simplePairedResultGraph"})}},1834:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(1316)),d=a(n(1317));n(1319),n(1332);var i=a(n(1322)),m=a(n(1424)),p=a(n(1381)),o=d.default.deepClone((0,m.default)("#timeseriesPairedResultGraph")),c=[d.default.deepClone(p.default)];t.default=function(){return r.default.useEffect((function(){var e=l.default.api.graph(o);c.forEach((function(t){e.loadContent(l.default.api.pairedResult(t))}))}),[]),r.default.createElement(i.default,{id:"timeseriesPairedResultGraph"})}},2047:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(29),r=n.n(a),l=n(56),d=n.n(l),i=n(0),m=n.n(i),p=n(809),o=n(1833),c=n.n(o),s=["components"],b={};function u(e){var t=e.components,n=d()(e,s);return Object(p.mdx)("wrapper",r()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimpleData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultConfig('#simplePairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst SimplePiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePairedResultGraph\" />\n  );\n};\n\nexport default SimplePiaredResultExample;\n\n")))}u.isMDXComponent=!0;var x=n(1324),j=n.n(x),O=n(1325),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return m.a.createElement(j.a,{title:t||"Simple Paired Result",description:n,example:m.a.createElement(c.a,null),exampleCssSrc:m.a.createElement(O.a,null),exampleSrc:m.a.createElement(u,null),isExpanded:a})},g=n(1468),N=n(1598),f=n(1834),y=n.n(f),C=["components"],w={};function R(e){var t=e.components,n=d()(e,C);return Object(p.mdx)("wrapper",r()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultTimeseriesData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#timeseriesPairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst TimeseriesPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"timeseriesPairedResultGraph\" />\n  );\n};\n\nexport default TimeseriesPiaredResultExample;\n\n")))}R.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return m.a.createElement(j.a,{title:t||"Timeseries",description:n,example:m.a.createElement(y.a,null),exampleCssSrc:m.a.createElement(O.a,null),exampleSrc:m.a.createElement(R,null),isExpanded:a})},P=n(1599),v=n(1458),T=["components"];n(1327);var E={},D="wrapper";function L(e){var t=e.components,n=d()(e,T);return Object(p.mdx)(D,r()({},E,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"paired-result"},"Paired Result"),Object(p.mdx)("p",null,"A native paired result graph, representing a pair of result with an optional median value. A ",Object(p.mdx)("inlineCode",{parentName:"p"},"pair")," can be represented in any co-ordinate on a graph. Most common pattern used is charting a Blood Pressure graph where the ",Object(p.mdx)("inlineCode",{parentName:"p"},"pair")," - high, low, mid are vertical data points connected by a vertical line."),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#paired-result"},"Paired Result"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Configuration structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Configuration Properties")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset properties"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#legendoptions"},"Legend options")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#style"},"Style")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#values"},"Values")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#regions"},"Regions")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#constraints"},"Constraints")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#examples"},"Examples"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("p",null,"An instance of Paired result graph is obtained as follows:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"Carbon.api.pairedResult(/* dataset */)\n")),Object(p.mdx)("p",null,"A Paired result graph can be plotted as follows:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nconst graph = Carbon.api.graph(/* graph config JSON */);\ngraph.loadContent(Carbon.api.pairedResult(/* dataset 1 */));\n\n// Multiple datasets can be added:\ngraph.loadContent(Carbon.api.pairedResult(/* dataset 2 */));\ngraph.loadContent(Carbon.api.pairedResult(/* dataset 3 */));\n")),Object(p.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),Object(p.mdx)("p",null,"You will ",Object(p.mdx)("strong",{parentName:"p"},"not")," need all the properties in the example below.\nCheck ",Object(p.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-javascript"},"var root = {\n    bindTo: <string>,\n    axis: {\n        x: {\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number> or <Date>,\n        },\n        y: {\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        }\n    },\n    showLabel: <bool>,\n    showLegend: <bool>,\n    showVGrid: <bool>,\n    showHGrid: <bool>\n};\n")),Object(p.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),Object(p.mdx)("p",null,"See ",Object(p.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),Object(p.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'var data = {\n    key: <string>,\n    regions: {\n        high: [\n            {\n                axis: <"y" or "y2">,\n                start: <number>,\n                end: <number>,\n                color: <hex value as string>,\n            }\n        ],\n        low: [\n            {\n                axis: <"y" or "y2">,\n                start: <number>,\n                end: <number>,\n            }\n        ]\n    },\n    onClick: <function>,\n    values: [\n        {\n            high: {\n                x: <number>,\n                y: <number>,\n                isCritical: <bool>,\n                region: {\n                    start: <number>,\n                    end: <number>,\n                    color: <hex value as string>,\n                }\n            },\n            low: {\n                x: <number>,\n                y: <number>,\n            },\n            mid: {\n                x: <number>,\n                y: <number>,\n            }\n        }\n    ]\n};\n')),Object(p.mdx)("h2",{id:"dataset-properties"},"Dataset properties"),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"key"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"A unique ",Object(p.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",Object(p.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"values"),Object(p.mdx)("td",{parentName:"tr",align:null},"Array"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"See Values](#values).")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"color"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"COLORS.BLACK"),Object(p.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",Object(p.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",Object(p.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"colors"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"label"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"Label for the dataset in the Legend. If it is not provided then it will not be shown in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"legendOptions"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to show shape, line and legend. See ",Object(p.mdx)("a",{parentName:"td",href:"#legendoptions"},"LegendOptions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"onClick"),Object(p.mdx)("td",{parentName:"tr",align:null},"Function"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(p.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"regions"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"shape"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"SHAPES.DARK.CIRCLE"),Object(p.mdx)("td",{parentName:"tr",align:null},"Shape for representing the data points.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"yAxis"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},'"y"'),Object(p.mdx)("td",{parentName:"tr",align:null},"Prop to select either the Y or Y2 axis for the dataset. Valid values are ",Object(p.mdx)("inlineCode",{parentName:"td"},"y")," or ",Object(p.mdx)("inlineCode",{parentName:"td"},"y2"),".")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"legendoptions"},Object(p.mdx)("inlineCode",{parentName:"h3"},"legendOptions")),Object(p.mdx)("p",{parentName:"li"},"  Each paired result can have a legendOptions object in ",Object(p.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre"},"```js\nlegendOptions: {\n  showLine: <bool>,\n  showShape: <bool>,\n  style: <object>,\n}\n```\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showLine"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"false"),Object(p.mdx)("td",{parentName:"tr",align:null},"Display Line in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showShape"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"true"),Object(p.mdx)("td",{parentName:"tr",align:null},"Display Shape in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"style"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",Object(p.mdx)("a",{parentName:"td",href:"#style"},"Styles"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showElement"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"true"),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to hide legend when legend item has no data."))))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"style"},Object(p.mdx)("inlineCode",{parentName:"h3"},"style")),Object(p.mdx)("p",{parentName:"li"},"  Each paired result can have a style object in ",Object(p.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"style: { strokeDashArray: '2,2' }\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"strokeDashArray"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},'"0"'),Object(p.mdx)("td",{parentName:"tr",align:null},"Applies stroke-dasharray CSS property to the SVG line."))))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"values"},Object(p.mdx)("inlineCode",{parentName:"h3"},"values")),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"values: [\n    {\n      high: {\n        x: <number>,\n        y: <number>,\n      },\n      mid: {\n        x: <number>,\n        y: <number>,\n      },\n      low: {\n        x: <number>,\n        y: <number>,\n      },\n    }\n   ]\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Value"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"high"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("em",{parentName:"td"},'{x: "", y: "", isCritical: ',Object(p.mdx)("inlineCode",{parentName:"em"},"true"),", region: {}}")),Object(p.mdx)("td",{parentName:"tr",align:null},"Data point co-ordinate x and y, See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"low"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("em",{parentName:"td"},'{x: "", y: "", isCritical: ',Object(p.mdx)("inlineCode",{parentName:"em"},"true"),", region: {}}")),Object(p.mdx)("td",{parentName:"tr",align:null},"Data point co-ordinate x and y, See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"mid"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("em",{parentName:"td"},'{x: "", y: "", isCritical: ',Object(p.mdx)("inlineCode",{parentName:"em"},"true"),", region: {}}")),Object(p.mdx)("td",{parentName:"tr",align:null},"Data point co-ordinate x and y, See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")))),Object(p.mdx)("p",{parentName:"li"},"  ",Object(p.mdx)("inlineCode",{parentName:"p"},"Note:")),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},"At least one of the high/low/medium should be provided with valid data."),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"isCritical")," toggle is disabled by default."),Object(p.mdx)("li",{parentName:"ul"},"When ",Object(p.mdx)("inlineCode",{parentName:"li"},"isCritical")," toggle is enabled, an indicator will be shown surrounding the data point."),Object(p.mdx)("li",{parentName:"ul"},"Providing invalid data to x or y will lead to an error.")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"regions"},Object(p.mdx)("inlineCode",{parentName:"h3"},"regions")),Object(p.mdx)("p",{parentName:"li"},"  Draws a Horizontal area along the X-Axis."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'  regions: {\n    high: [\n      {\n        axis: <"y or y2">,\n        start: <number>,\n        end: <number>,\n        color: <hex value as string>,\n      },\n    ],\n    mid: [\n      {\n        axis: <"y or y2">,\n        start: <number>,\n        end: <number>,\n        color: <hex value as string>,\n      },\n    ],\n    low: [\n      {\n        axis: <"y or y2">,\n        start: <number>,\n        end: <number>,\n      },\n    ],\n  }\n')),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"Each dataset can have 1 or more regions for ",Object(p.mdx)("inlineCode",{parentName:"p"},"high"),", ",Object(p.mdx)("inlineCode",{parentName:"p"},"low")," and/or ",Object(p.mdx)("inlineCode",{parentName:"p"},"mid"),",")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"Each value can have a region object for ",Object(p.mdx)("inlineCode",{parentName:"p"},"high"),", ",Object(p.mdx)("inlineCode",{parentName:"p"},"low")," and/or ",Object(p.mdx)("inlineCode",{parentName:"p"},"mid"),",")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"Each pair type mentioned above needs to have a ",Object(p.mdx)("inlineCode",{parentName:"p"},"start")," and ",Object(p.mdx)("inlineCode",{parentName:"p"},"end"),",")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"If at least one region is defined for a value in the element, it will take precedence over the element's region and the element's region will not be displayed."),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Value"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"high"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("em",{parentName:"td"},"{start: ",Object(p.mdx)("inlineCode",{parentName:"em"},"number"),", end: ",Object(p.mdx)("inlineCode",{parentName:"em"},"number"),"}")),Object(p.mdx)("td",{parentName:"tr",align:null},"Start and end ",Object(p.mdx)("inlineCode",{parentName:"td"},"@type: number"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"low"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("em",{parentName:"td"},"{start: ",Object(p.mdx)("inlineCode",{parentName:"em"},"number"),", end: ",Object(p.mdx)("inlineCode",{parentName:"em"},"number"),"}")),Object(p.mdx)("td",{parentName:"tr",align:null},"Start and end ",Object(p.mdx)("inlineCode",{parentName:"td"},"@type: number"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"mid"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("em",{parentName:"td"},"{start: ",Object(p.mdx)("inlineCode",{parentName:"em"},"number"),", end: ",Object(p.mdx)("inlineCode",{parentName:"em"},"number"),"}")),Object(p.mdx)("td",{parentName:"tr",align:null},"Start and end ",Object(p.mdx)("inlineCode",{parentName:"td"},"@type: number"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"axis"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},'"y"'),Object(p.mdx)("td",{parentName:"tr",align:null},"Defines which axis if represents from.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"color"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("img",{width:"16px",height:"16px",src:"https://placehold.it/15/f4f4f4/000000?text=+"})," ",Object(p.mdx)("inlineCode",{parentName:"td"},"#f4f4f4")),Object(p.mdx)("td",{parentName:"tr",align:null},"Default color of the region area."))))))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"constraints"},"Constraints"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},"If dataset ",Object(p.mdx)("inlineCode",{parentName:"li"},"label")," display is not provided for ",Object(p.mdx)("inlineCode",{parentName:"li"},"high"),", ",Object(p.mdx)("inlineCode",{parentName:"li"},"low")," and ",Object(p.mdx)("inlineCode",{parentName:"li"},"mid"),", the legend item will not be shown as well.")))),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(h,{mdxType:"SimplePairedResultGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for simple graph")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(g.a,{mdxType:"SimplePairedResultGraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(N.a,{mdxType:"SimplePairedResultDataObject"})),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)(S,{mdxType:"TimeseriesPairedResultGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for timeseries graph")),Object(p.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(p.mdx)(P.a,{mdxType:"TimeseriesPairedResultGraphConfig"}),Object(p.mdx)("h3",{id:"data-object-1"},"Data object"),Object(p.mdx)(v.a,{mdxType:"TimeseriesPairedResultDataObject"})))}L.isMDXComponent=!0}}]);