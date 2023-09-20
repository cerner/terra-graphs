(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createGraphValuesWithSin=t.createGraphValuesWithCos=void 0;t.createGraphValuesWithSin=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.sin(t)*r,x:n+t*a}}))};t.createGraphValuesWithCos=function(e){var t=e.length,n=e.initialX,a=e.xModifier,r=e.yModifier;return new Array(t).fill("").map((function(e,t){return{y:Math.cos(t)*r,x:n+t*a}}))}},1335:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1336:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1315)),l=n(1317),i={key:"uid_1",label:{display:"Data Label 1"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};t.default=i},1338:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),l=n(56),i=n.n(l),m=(n(0),n(809)),d=["components"],p={},o="wrapper";function c(e){var t=e.components,n=i()(e,d);return Object(m.mdx)(o,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}c.isMDXComponent=!0},1353:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1315)),l=n(1317),i=n(1327),m={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:l.loadPopup,values:(0,i.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};t.default=m},1355:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),l=n(56),i=n.n(l),m=(n(0),n(809)),d=["components"],p={},o="wrapper";function c(e){var t=e.components,n=i()(e,d);return Object(m.mdx)(o,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1363:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1315)),l=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=l},1453:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(29),r=n.n(a),l=n(56),i=n.n(l),m=(n(0),n(809)),d=["components"],p={},o="wrapper";function c(e){var t=e.components,n=i()(e,d);return Object(m.mdx)(o,r()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1803:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(1315)),i=a(n(1316));n(1318),n(1320);var m=a(n(1321)),d=a(n(1335)),p=a(n(1353)),o=i.default.deepClone((0,d.default)("#simpleLinegraph")),c=i.default.deepClone(p.default),s=function(){return r.default.useEffect((function(){l.default.api.graph(o).loadContent(l.default.api.line(c))}),[]),r.default.createElement(m.default,{id:"simpleLinegraph"})};t.default=s},1804:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(1315)),i=a(n(1316));n(1318),n(1320);var m=a(n(1321)),d=a(n(1363)),p=a(n(1336)),o=i.default.deepClone((0,d.default)("#lineTimeseries")),c=i.default.deepClone(p.default),s=function(){return r.default.useEffect((function(){l.default.api.graph(o).loadContent(l.default.api.line(c))}),[]),r.default.createElement(m.default,{id:"lineTimeseries"})};t.default=s},2040:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(29),r=n.n(a),l=n(56),i=n.n(l),m=n(0),d=n.n(m),p=n(809),o=n(1803),c=n.n(o),s=["components"],b={};function u(e){var t=e.components,n=i()(e,s);return Object(p.mdx)("wrapper",r()({},b,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#simpleLinegraph'));\nconst dataset = utils.deepClone(exampleData);\n\nconst SimpleLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"simpleLinegraph\" />\n  );\n};\n\nexport default SimpleLineExample;\n\n")))}u.isMDXComponent=!0;var x=n(1323),g=n.n(x),j=n(1324),O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.a.createElement(g.a,{title:t||"Simple Line",description:n,example:d.a.createElement(c.a,null),exampleCssSrc:d.a.createElement(j.a,null),exampleSrc:d.a.createElement(u,null),isExpanded:a})},h=n(1338),N=n(1453),f=n(1804),y=n.n(f),w=["components"],C={};function L(e){var t=e.components,n=i()(e,w);return Object(p.mdx)("wrapper",r()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineTimeseriesConfig('#lineTimeseries'));\nconst dataset = utils.deepClone(exampleData);\n\nconst LineTimeseriesExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"lineTimeseries\" />\n  );\n};\n\nexport default LineTimeseriesExample;\n\n\n")))}L.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.a.createElement(g.a,{title:t||"Timeseries",description:n,example:d.a.createElement(y.a,null),exampleCssSrc:d.a.createElement(j.a,null),exampleSrc:d.a.createElement(L,null),isExpanded:a})},D=n(1355),v=n(1376),E=["components"];n(1326);var T={},G="wrapper";function I(e){var t=e.components,n=i()(e,E);return Object(p.mdx)(G,r()({},T,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"line"},"Line"),Object(p.mdx)("p",null,"A native line graph using D3 based on standard design patterns."),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#line"},"Line"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Configuration Structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Configuration properties")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset Structure"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#line-graph"},"Line graph")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#spline-graph"},"Spline graph")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset Properties"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#style"},"Style")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#legendoptions"},"Legend Options")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#values"},"Values")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#regions"},"Regions")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#constraints"},"Constraints")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#examples"},"Examples"))))),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("p",null,"An instance of Line graph is obtained as follows:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"Carbon.api.line(/* dataset */)\n")),Object(p.mdx)("p",null,"A Line graph can be plotted as follows:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\nconst graph = Carbon.api.graph(/* graph config JSON */);\ngraph.loadContent(Carbon.api.line(/* dataset 1 */));\n\n// Multiple datasets can be added:\ngraph.loadContent(Carbon.api.line(/* dataset 1 */));\ngraph.loadContent(Carbon.api.line(/* dataset 2 */));\n")),Object(p.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),Object(p.mdx)("p",null,"You will ",Object(p.mdx)("strong",{parentName:"p"},"not")," need all the properties in the example below.\nCheck ",Object(p.mdx)("a",{parentName:"p",href:"../core-configuration/Documentation/Graph"},"Graph")," for graph configuration properties."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"var root = {\n    bindTo: <String>,\n    axis: {\n        x: {\n            type: <string>,\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number> or <Date>,\n        },\n        y: {\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        },\n        y2: {\n            show: <bool>,\n            label: <string>,\n            lowerLimit: <number>,\n            upperLimit: <number>,\n        }\n    },\n    dateline: [\n        {\n            showDatelineIndicator: <bool>,\n            label: {\n                display: <string>\n            },\n            color: <hex value as string>,\n            shape: <shape SVG>,\n            onClick: <function>,\n            value: <date object>\n        }\n    ],\n    clickPassThrough: {\n        datelines: <bool>\n    },\n    showLabel: <bool>,\n    showLegend: <bool>,\n    showShapes: <bool>,\n    showVGrid: <bool>,\n    showHGrid: <bool>,\n};\n")),Object(p.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),Object(p.mdx)("p",null,"See ",Object(p.mdx)("a",{parentName:"p",href:"../core-configuration/documentation/graph"},"Graph")," for graph configuration properties."),Object(p.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"line-graph"},"Line graph"),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'   var data = {\n       key: <string>,\n       label: {\n           display: <string>,\n       },\n       style: <object>,\n       regions: [\n           {\n               axis: <"y" or "y2">,\n               start: <number>,\n               end: <number>,\n               color: <hex value as string>,\n           }\n       ],\n       shape: <shape SVG>,\n       color: <hex value as string>,\n       onClick: <function>,\n       values: [\n           {\n               x: <number> or <Date>,\n               y: <number>,\n           },\n           {\n               x: <number> or <Date>,\n               y: <number>,\n               isCritical: <bool>\n           },\n       ]\n   };\n'))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"spline-graph"},"Spline graph"),Object(p.mdx)("p",{parentName:"li"},"  For a Spline Graph you can use the same ",Object(p.mdx)("a",{parentName:"p",href:"#usage"},"syntax")," as a line graph and load content as follows:"),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'   var splineData = {\n       key: <string>,\n       label: {\n           display: <string>\n       },\n       type: <"SPLINE"> or <"LINEAR">, //SPLINE should be used to create SPLINE graph.\n       values: [\n           {\n               x: <number> or <Date>,\n               y: <number>,\n           },\n           {\n               x: <number> or <Date>,\n               y: <number>,\n           },\n       ]\n   };\n')))),Object(p.mdx)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"key"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"A unique ",Object(p.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",Object(p.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"values"),Object(p.mdx)("td",{parentName:"tr",align:null},"Array"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#values"},"Values"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"color"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"COLORS.BLACK"),Object(p.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",Object(p.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",Object(p.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"colors"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"label"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"Label for the dataset in the Legend. If it is not provided then it will not be shown in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"legendOptions"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to show shape, line and legend. See ",Object(p.mdx)("a",{parentName:"td",href:"#legendoptions"},"LegendOptions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"onClick"),Object(p.mdx)("td",{parentName:"tr",align:null},"Function"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(p.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"regions"),Object(p.mdx)("td",{parentName:"tr",align:null},"array"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"[]"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"shape"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"SHAPES.DARK.CIRCLE"),Object(p.mdx)("td",{parentName:"tr",align:null},"Shape for representing the data points.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"style"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",Object(p.mdx)("a",{parentName:"td",href:"#style"},"styles"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showShapes"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"true"),Object(p.mdx)("td",{parentName:"tr",align:null},"Option to show/hide shapes per data set. This option overrides the graph's showShapes property.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"type"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"LINE_TYPE.LINEAR"),Object(p.mdx)("td",{parentName:"tr",align:null},"Nature of line that needs to be drawn (Linear or Cardinal).")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"yAxis"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},'"y"'),Object(p.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"style"},Object(p.mdx)("inlineCode",{parentName:"h3"},"style")),Object(p.mdx)("p",{parentName:"li"},"  Each line can have a style object in the ",Object(p.mdx)("a",{parentName:"p",href:"#values"},"values")," level."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"   style: { strokeDashArray: '2,2' },\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"strokeDashArray"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},'"0"'),Object(p.mdx)("td",{parentName:"tr",align:null},"Applies stroke-dasharray CSS property to the SVG line.")))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"legendoptions"},Object(p.mdx)("inlineCode",{parentName:"h3"},"legendOptions")),Object(p.mdx)("p",{parentName:"li"},"  Each line can have a legendOptions object in ",Object(p.mdx)("a",{parentName:"p",href:"#values"},"Values")," level."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"  legendOptions: {\n    showLine: <bool>,\n    showShape: <bool>,\n    style: <object>,\n  },\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showLine"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"false"),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to display the line in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showShape"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"true"),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to display the shape in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"style"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"Any style that can be applied. See ",Object(p.mdx)("a",{parentName:"td",href:"#style"},"styles"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showElement"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"true"),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to hide legend when legend item has no data."))))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"values"},Object(p.mdx)("inlineCode",{parentName:"h3"},"values")),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"    values: [\n        {\n            x: <number> or <Date>,\n            y: <number>,\n        },\n        {\n            x: <number> or <Date>,\n            y: <number>,\n            isCritical: <bool>\n        },\n    ]\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"x"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"Co-ordinate x, for plotting the data point.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"y"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"Co-ordinate y, for plotting the data point.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"isCritical"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"false")),Object(p.mdx)("td",{parentName:"tr",align:null},"Shows an indicator surrounding the data point when enabled.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"region"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"Regions"),"."))))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"regions"},Object(p.mdx)("inlineCode",{parentName:"h3"},"regions")),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"Each dataset can have 1 or more regions.")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"Each value can have a region object.")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("inlineCode",{parentName:"p"},"start")," and ",Object(p.mdx)("inlineCode",{parentName:"p"},"end")," is necessary for rendering an area.")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},"If at least one region is defined for a value in the element, it will take precedence over the element's region and the element's region will not be displayed."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'  regions: [\n    {\n      axis: <"y" or "y2">,\n      start: <number>,\n      end: <number>,\n      color: <hex value as string>,\n    },\n  ],\n')),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"start"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"Start of the region.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"end"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"End of the region.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"axis"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},'"y"'),Object(p.mdx)("td",{parentName:"tr",align:null},"Defines which axis if represents from.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"color"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("img",{width:"16px",height:"16px",src:"https://placehold.it/15/f4f4f4/000000?text=+"})," ",Object(p.mdx)("inlineCode",{parentName:"td"},"#f4f4f4"),"."),Object(p.mdx)("td",{parentName:"tr",align:null},"Default color of the region area."))))))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"constraints"},"Constraints"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},"If dataset ",Object(p.mdx)("inlineCode",{parentName:"li"},"label")," display is not provided then the legend item will not be shown as well.")))),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(O,{mdxType:"DefaultLineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for default line graph")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(h.a,{mdxType:"DefaultGraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(N.a,{mdxType:"DefaultDataObject"})),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)(S,{mdxType:"TimeseriesLineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for timeseries line graph")),Object(p.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(p.mdx)(D.a,{mdxType:"TimeseriesGraphConfig"}),Object(p.mdx)("h3",{id:"data-object-1"},"Data object"),Object(p.mdx)(v.a,{mdxType:"TimeseriesDataObject"})))}I.isMDXComponent=!0}}]);