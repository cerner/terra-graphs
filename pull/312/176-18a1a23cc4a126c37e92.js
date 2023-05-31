(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{1309:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),l=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}};t.default=l},1345:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(1275),l={key:"bubble_custom_radius_dataset",label:{display:"Bubble set B"},color:n(a(1273)).default.helpers.COLORS.LIGHT_BLUE,onClick:r.loadBubblePopup,weight:{fixedRadius:12},values:[{x:new Date(2016,0,1,6,0).toISOString(),y:100},{x:new Date(2016,0,1,10,0).toISOString(),y:120},{x:new Date(2016,0,1,12,0).toISOString(),y:180},{x:new Date(2016,0,1,18,0).toISOString(),y:220}],yAxis:"y"};t.default=l},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(31),r=a.n(n),l=a(55),d=a.n(l),m=(a(0),a(788)),i=["components"],p={},b="wrapper";function c(e){var t=e.components,a=d()(e,i);return Object(m.mdx)(b,r()({},p,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}c.isMDXComponent=!0},1404:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(31),r=a.n(n),l=a(55),d=a.n(l),m=(a(0),a(788)),i=["components"],p={},b="wrapper";function c(e){var t=e.components,a=d()(e,i);return Object(m.mdx)(b,r()({},p,a,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadBubblePopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup.js';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst bubbleDataBasic = {\n  key: 'bubble_basic_data',\n  label: {\n    display: 'Bubble set A',\n  },\n  onClick: loadBubblePopup,\n  color: Carbon.helpers.COLORS.PINK,\n  values: [\n    {\n      x: new Date(2016, 0, 1, 12, 0).toISOString(),\n      y: 70,\n    },\n    {\n      x: new Date(2016, 0, 1, 15, 45).toISOString(),\n      y: 120,\n    },\n    {\n      x: new Date(2016, 0, 1, 10, 30).toISOString(),\n      y: 160,\n    },\n    {\n      x: new Date(2016, 0, 1, 18, 0).toISOString(),\n      y: 180,\n    },\n  ],\n  yAxis: 'y',\n  showShapes: false,\n};\n\nexport default bubbleDataBasic;\n\n")))}c.isMDXComponent=!0},1704:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(1273)),d=n(a(1274));a(1276);var m=n(a(1279)),i=n(a(1309)),p=n(a(1324)),b=d.default.deepClone((0,i.default)("#simpleBubbleGraph")),c=d.default.deepClone(p.default);t.default=function(){return r.default.useEffect((function(){l.default.api.graph(b).loadContent(l.default.api.bubbleSingleDataset(c))}),[]),r.default.createElement(m.default,{id:"simpleBubbleGraph"})}},1705:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),l=n(a(1273)),d=n(a(1274));a(1276);var m=n(a(1279)),i=n(a(1309)),p=n(a(1324)),b=n(a(1345)),c=d.default.deepClone((0,i.default)("#multipleDatasetBubbleGraph")),o=d.default.deepClone(p.default),u=d.default.deepClone(b.default);t.default=function(){return r.default.useEffect((function(){var e=l.default.api.graph(c);e.loadContent(l.default.api.bubbleMultipleDataset(o)),e.loadContent(l.default.api.bubbleMultipleDataset(u))}),[]),r.default.createElement(m.default,{id:"multipleDatasetBubbleGraph"})}},1990:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(31),r=a.n(n),l=a(55),d=a.n(l),m=a(0),i=a.n(m),p=a(788),b=a(1704),c=a.n(b),o=["components"],u={};function s(e){var t=e.components,a=d()(e,o);return Object(p.mdx)("wrapper",r()({},u,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\n\n/*\nPlease refer to the documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#simpleBubbleGraph'));\nconst dataset = utils.deepClone(bubbleDataBasic);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"simpleBubbleGraph\" />\n  );\n};\n\n")))}s.isMDXComponent=!0;var x=a(1281),j=a.n(x),O=a(1282),N=function(e){var t=e.title,a=e.description,n=e.isExpanded;return i.a.createElement(j.a,{title:t||"Single Dataset",description:a,example:i.a.createElement(c.a,null),exampleCssSrc:i.a.createElement(O.a,null),exampleSrc:i.a.createElement(s,null),isExpanded:n})},g=a(1705),h=a.n(g),f=["components"],y={};function C(e){var t=e.components,a=d()(e,f);return Object(p.mdx)("wrapper",r()({},y,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\nimport bubbleDataCustomRadius from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js';\n\n/*\nPlease refer to the documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#multipleDatasetBubbleGraph'));\nconst dataset1 = utils.deepClone(bubbleDataBasic);\nconst dataset2 = utils.deepClone(bubbleDataCustomRadius);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset1));\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset2));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"multipleDatasetBubbleGraph\" />\n  );\n};\n\n")))}C.isMDXComponent=!0;var D=function(e){var t=e.title,a=e.description,n=e.isExpanded;return i.a.createElement(j.a,{title:t||"Multiple Datasets",description:a,example:i.a.createElement(h.a,null),exampleCssSrc:i.a.createElement(O.a,null),exampleSrc:i.a.createElement(C,null),isExpanded:n})},w=a(1403),v=a(1404),S=a(1459),E=["components"];a(1284);var B={},T="wrapper";function A(e){var t=e.components,a=d()(e,E);return Object(p.mdx)(T,r()({},B,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"bubble-graph"},"Bubble Graph"),Object(p.mdx)("p",null,"A plot showing data with x and y coordinates along with a 3rd dimension represented by the radius of the circle. Terra-Graphs has two APIs to utilize bubble graphs:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"Carbon.api.bubbleSingleDataset(<dataset>);\nCarbon.api.bubbleMultipleDataset(<dataset>);\n")),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#usage"},"Usage"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#differences-between-bubblesingledataset-and-bubblemultipledataset"},"Differences")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-structure"},"structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-properties"},"properties"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#values"},"values")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#label"},"label")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#legendoptions"},"legendOptions")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#palette"},"palette")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#regions"},"regions")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#weight"},"weight")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#examples"},"Examples"))),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("p",null,"A bubble graph can be plotted as follows:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\nconst graph = Carbon.api.graph(/* graph config JSON */);\n\n// for a single dataset:\ngraph.loadContent(Carbon.api.bubbleSingleDataset(/* dataset */));\n\n// for multiple datasets, up to a max of 7:\ngraph.loadContent(Carbon.api.bubbleMultipleDataset(/* dataset 1 */));\ngraph.loadContent(Carbon.api.bubbleMultipleDataset(/* dataset 2 */));\ngraph.loadContent(Carbon.api.bubbleMultipleDataset(/* dataset 3 */));\n")),Object(p.mdx)("h4",{id:"differences-between-bubblesingledataset-and-bubblemultipledataset"},"Differences between ",Object(p.mdx)("inlineCode",{parentName:"h4"},"bubbleSingleDataset")," and ",Object(p.mdx)("inlineCode",{parentName:"h4"},"bubbleMultipleDataset")),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("inlineCode",{parentName:"p"},"bubbleSingleDataset"),"can be used to plot a single dataset.\nIf using ",Object(p.mdx)("a",{parentName:"p",href:"#palette"},"palette"),", then a maximum of four points can be plotted.\nAny additional datasets that are added will be ignored.")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("inlineCode",{parentName:"p"},"bubbleMultipleDataset"),"can be used to plot multiple datasets, up to a maximum of 7.\nAny subsequent datasets will be ignored."))),Object(p.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},'const dataset = {\n  key: <string>,\n  values: [\n    {\n      x: <number> or <Date>,\n      y: <number>,\n      isCritical: <bool>\n    },\n  ],\n  color: <hex value as string>,\n  label: {\n    display: <string>,\n  },\n  legendOptions:{\n    showElement: <bool>\n  }\n  onClick: <function>,\n  string: <string>,\n  regions: [\n    start: <number>\n    end: <number>\n    axis: <"y" or "y2">\n    color: <hex value as string>\n  ],\n  weight: {\n    min: <number>,\n    max: <number>,\n    fixedRadius: <number>\n  },\n  yAxis: <"y" or "y2">,\n\n}\n')),Object(p.mdx)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"key"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"A unique ",Object(p.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",Object(p.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"values"),Object(p.mdx)("td",{parentName:"tr",align:null},"array of objects"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#values"},"values"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"color"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"COLORS.BLACK")),Object(p.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",Object(p.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",Object(p.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"colors"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"label"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"Label for the dataset in the Legend. If it is not provided then it will not be shown in the legend.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"legendOptions"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#legendoptions"},"legendOptions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"onClick"),Object(p.mdx)("td",{parentName:"tr",align:null},"function"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as, to display a popup.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"palette"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#palette"},"palette"))),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"regions"),Object(p.mdx)("td",{parentName:"tr",align:null},"array of objects"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"[]")),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#regions"},"regions"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"shape"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"SHAPES.DARK.CIRCLE")),Object(p.mdx)("td",{parentName:"tr",align:null},"Shape for representing the data points.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"yAxis"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},'"y"')),Object(p.mdx)("td",{parentName:"tr",align:null},"Prop to select either the Y or Y2 axis for the dataset. Valid values are ",Object(p.mdx)("inlineCode",{parentName:"td"},"y")," or ",Object(p.mdx)("inlineCode",{parentName:"td"},"y2"),".")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"values"},Object(p.mdx)("inlineCode",{parentName:"h3"},"values")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:"),"  array of objects | ",Object(p.mdx)("inlineCode",{parentName:"p"},"required prop")),Object(p.mdx)("p",{parentName:"li"},"  This is an array of objects representing the dataset.\nIt is a required prop; passing ",Object(p.mdx)("inlineCode",{parentName:"p"},"undefined")," will result in an error.\nHowever passing an empty array (",Object(p.mdx)("inlineCode",{parentName:"p"},"[]"),") will result in the graph successfully rendering without a dataset.\nEach object in the array takes the following shape:"),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-json"},"  {\n    x: <number>,\n    y: <number>,\n    isCritical: <bool>\n    legendOptions: <object>\n  }\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"x"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"value for the x coordinate")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"y"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"value for the y coordinate")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"isCritical"),Object(p.mdx)("td",{parentName:"tr",align:null},"bool"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"false")),Object(p.mdx)("td",{parentName:"tr",align:null},"highlights a datapoint if ",Object(p.mdx)("inlineCode",{parentName:"td"},"true"))),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"legendOptions"),Object(p.mdx)("td",{parentName:"tr",align:null},"bool"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"false")),Object(p.mdx)("td",{parentName:"tr",align:null},"see ",Object(p.mdx)("a",{parentName:"td",href:"#legendoptions"},"legendOptions"))))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"label"},Object(p.mdx)("inlineCode",{parentName:"h3"},"label")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," object\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"{}")),Object(p.mdx)("p",{parentName:"li"},"  Label for the dataset in the legend. If it is not provided then it will not be shown in the legend."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre"},"```json\n  label: {\n    display: <string>\n  }\n```\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"display"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"Text to display as the label for the dataset.")))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"legendoptions"},Object(p.mdx)("inlineCode",{parentName:"h3"},"legendOptions")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," object\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"undefined")),Object(p.mdx)("p",{parentName:"li"},"  Options for showing dataset in the legend. This prop has the following shape:"),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre"},"```json\n  legendOptions: {\n    showElement: <bool>\n  }\n```\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showElement"),Object(p.mdx)("td",{parentName:"tr",align:null},"bool"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"true")),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to hide the legend when it has no data")))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"palette"},Object(p.mdx)("inlineCode",{parentName:"h3"},"palette")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," string\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"undefined")),Object(p.mdx)("p",{parentName:"li"},"  Set of shades to use with a bubble graph. Only works if ",Object(p.mdx)("inlineCode",{parentName:"p"},"datapoints <= 4")," and if ",Object(p.mdx)("inlineCode",{parentName:"p"},"color")," is ",Object(p.mdx)("inlineCode",{parentName:"p"},"undefined"),"."),Object(p.mdx)("p",{parentName:"li"},"  ",Object(p.mdx)("strong",{parentName:"p"},"valid values:"),"\nThese constants can be accessed through the ",Object(p.mdx)("inlineCode",{parentName:"p"},"Carbon.helpers.BUBBLE.PALETTE")," namespace."),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"BLUE")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"GREEN")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"ORANGE")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"PINK")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"PURPLE")))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"regions"},Object(p.mdx)("inlineCode",{parentName:"h3"},"regions")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," array of objects\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"[]")),Object(p.mdx)("p",{parentName:"li"},"Each data-set can have one or more regions. ",Object(p.mdx)("inlineCode",{parentName:"p"},"start")," and ",Object(p.mdx)("inlineCode",{parentName:"p"},"end")," is necessary for rendering a horizontal area."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-json"},"legendOptions: {\n  showElement: <bool>\n}\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Expected"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"start"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"Start of the region")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"end"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"End of the region")))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"weight"},Object(p.mdx)("inlineCode",{parentName:"h3"},"weight")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," object\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"undefined")),Object(p.mdx)("p",{parentName:"li"},"  The radius of the bubbles. To restrict the radius to a certain range, use ",Object(p.mdx)("inlineCode",{parentName:"p"},"min")," and ",Object(p.mdx)("inlineCode",{parentName:"p"},"max")," or ",Object(p.mdx)("inlineCode",{parentName:"p"},"fixedRadius")," for a custom sized bubble."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-json"},"weight: {\n  min: <number>,\n  max: <number>,\n  fixedRadius: <number>\n}\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"min"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"start of the region")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"max"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"end of the region")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"fixedRadius"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"30"),Object(p.mdx)("td",{parentName:"tr",align:null},"Y-axis to bind the region to; valid values are ",Object(p.mdx)("inlineCode",{parentName:"td"},"y")," or ",Object(p.mdx)("inlineCode",{parentName:"td"},"y2"))))))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"yaxis"},Object(p.mdx)("inlineCode",{parentName:"h3"},"yAxis")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," string\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"y")),Object(p.mdx)("p",{parentName:"li"},"  Prop to select either the Y or Y2 axis for the dataset."),Object(p.mdx)("p",{parentName:"li"},"  ",Object(p.mdx)("strong",{parentName:"p"},"valid values:")),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"y")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"y2"))))),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(N,{mdxType:"BubbleSingleDatasetExample"}),Object(p.mdx)(D,{mdxType:"BubbleMultipleDatasetExample"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-bject"},"Graph Config bject"),Object(p.mdx)(w.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"bubbledatabasic"},"bubbleDataBasic"),Object(p.mdx)(v.a,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"bubbledatacustomradius"},"bubbleDataCustomRadius"),Object(p.mdx)(S.a,{mdxType:"DataObject2"})))}A.isMDXComponent=!0}}]);