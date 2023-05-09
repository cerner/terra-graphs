(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1339:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1273)),l=n(1275),d="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",m={key:"uid_1",label:{display:"Timeline A"},color:r.default.helpers.COLORS.BLUE,onClick:l.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:d},{x:new Date(2016,0,1,2,15).toISOString(),content:d},{x:new Date(2016,0,1,3,15).toISOString(),content:d},{x:new Date(2016,0,1,4,15).toISOString(),content:d},{x:new Date(2016,0,1,5,15).toISOString(),content:d}]};t.default=m},1340:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1273)),l=n(1275),d={key:"uid_2",label:{display:"Timeline B"},shape:r.default.helpers.SHAPES.DARK.RHOMBUS,color:r.default.helpers.COLORS.GREEN,onClick:l.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=d},1386:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()}},showLabel:!0,showLegend:!0}};t.default=a},1589:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),r=n.n(a),l=n(55),d=n.n(l),m=(n(0),n(788)),i=["components"],o={},p="wrapper";function c(e){var t=e.components,n=d()(e,i);return Object(m.mdx)(p,r()({},o,n,{components:t,mdxType:"MDXLayout"}),Object(m.mdx)("pre",null,Object(m.mdx)("code",{parentName:"pre",className:"language-js"},"const getTimelineConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n});\n\nexport default getTimelineConfig;\n\n")))}c.isMDXComponent=!0},1814:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(1273)),d=a(n(1274));n(1276),n(1315);var m=a(n(1278)),i=a(n(1386)),o=a(n(1339)),p=a(n(1340)),c=d.default.deepClone((0,i.default)("#simpleTimelineGraph")),b=[d.default.deepClone(o.default),d.default.deepClone(p.default)],u=function(){return r.default.useEffect((function(){var e=l.default.api.timeline(c);b.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(m.default,{id:"simpleTimelineGraph"})};t.default=u},2070:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(31),r=n.n(a),l=n(55),d=n.n(l),m=n(0),i=n.n(m),o=n(788),p=n(1814),c=n.n(p),b=["components"],u={};function s(e){var t=e.components,n=d()(e,b);return Object(o.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getTimelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelineDefaultConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset1.js';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset2.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getTimelineConfig('#simpleTimelineGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst SimpleTimelineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.timeline(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simpleTimelineGraph\" />\n  );\n};\n\nexport default SimpleTimelineExample;\n\n")))}s.isMDXComponent=!0;var x=n(1281),j=n.n(x),O=n(1282),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(j.a,{title:t||"Simple Timeline",description:n,example:i.a.createElement(c.a,null),exampleCssSrc:i.a.createElement(O.a,null),exampleSrc:i.a.createElement(s,null),isExpanded:a})},N=n(1589),h=n(1424),f=n(1425),y=["components"];n(1284);var C={},w="wrapper";function T(e){var t=e.components,n=d()(e,y);return Object(o.mdx)(w,r()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"timeline-graph"},"Timeline Graph"),Object(o.mdx)("p",null,"A single-axis horizontal graph with plottable datapoints."),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Config Structure")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Config properties"),Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#axis"},"axis")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#legendpadding"},"legendPadding")))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset Structure")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset Properties"),Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#values"},"values")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#label"},"label")))),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",{parentName:"li",href:"#example"},"Example"))),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("p",null,"An instance of a timeline graph can be accessed though the ",Object(o.mdx)("inlineCode",{parentName:"p"},"Carbon.api.timeline()")," function.\nUnlike most of the other graphs, the timeline api does not need an instance of ",Object(o.mdx)("inlineCode",{parentName:"p"},"Carbon.api.graph"),".\nInstead, the graph configuration is directly passed as a parameter to the timeline instance,\nwith the dataset object also directly passed to the ",Object(o.mdx)("inlineCode",{parentName:"p"},"loadContent")," function.\nTherefore, the timeline graph can not be combined with other graphs."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\nvar timelineGraph = Carbon.api.timeline(/* config object */);\ntimelineGraph.loadContent(/* dataset */);\n\n// Multiple datasets can be added:\ntimelineGraph.loadContent(/* dataset1 */);\ntimelineGraph.loadContent(/* dataset2 */);\n")),Object(o.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"const timelineConfig = {\n    axis: {\n        x: {\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number or <Date>\n        }\n    },\n    bindTo: <string>,\n    bindLegendTo: <string>,\n    legendPadding: {\n      top: <number>,\n      bottom: <number>,\n      left: <number>,\n      right: <number>\n    },\n    locale: <locale object>,\n    padding: {\n      top: <number>,\n      bottom: <number>,\n      left: <number>,\n      right: <number>\n    },\n    pan: {\n      enabled: <bool>\n    },\n    removeContainerPadding: <bool>,\n    showLabel: <bool>,\n    showLegend: <bool>,\n    throttle: <number>\n}\n")),Object(o.mdx)("h2",{id:"configurationproperties"},"ConfigurationProperties"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Required"),Object(o.mdx)("th",{parentName:"tr",align:null},"Default"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"axis"),Object(o.mdx)("td",{parentName:"tr",align:null},"object"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"-"),Object(o.mdx)("td",{parentName:"tr",align:null},"See ",Object(o.mdx)("a",{parentName:"td",href:"#axis"},"axis"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"bindTo"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"-"),Object(o.mdx)("td",{parentName:"tr",align:null},"DOM ID to bind the graph container to.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"bindLegendTo"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"null"),Object(o.mdx)("td",{parentName:"tr",align:null},"ID of custom container to bind legend to (Example: ",Object(o.mdx)("inlineCode",{parentName:"td"},'"#legendContainer"'),").")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"legendPadding"),Object(o.mdx)("td",{parentName:"tr",align:null},"object"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"{ top: 4, bottom: 4, left: 8, right: 8 }")),Object(o.mdx)("td",{parentName:"tr",align:null},"See ",Object(o.mdx)("a",{parentName:"td",href:"#legendpadding"},"legendPadding"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"locale"),Object(o.mdx)("td",{parentName:"tr",align:null},"object"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"LOCALE.en_US"),Object(o.mdx)("td",{parentName:"tr",align:null},"Locale object for X-Axis tick values. See ",Object(o.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/Locale"},"Locale"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"padding"),Object(o.mdx)("td",{parentName:"tr",align:null},"object"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"{ top: 10, bottom: 10, left: 30, right: 50 }")),Object(o.mdx)("td",{parentName:"tr",align:null},"See ",Object(o.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/Padding"},"Padding"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"pan"),Object(o.mdx)("td",{parentName:"tr",align:null},"object"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"{enabled: false}")),Object(o.mdx)("td",{parentName:"tr",align:null},"See ",Object(o.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/Panning"},"Panning"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"removeContainerPadding"),Object(o.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"false"),Object(o.mdx)("td",{parentName:"tr",align:null},"Toggle to remove top and bottom padding of the container for the graph.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"showLabel"),Object(o.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"true"),Object(o.mdx)("td",{parentName:"tr",align:null},"Toggle to show X axis label.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"showLegend"),Object(o.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"true"),Object(o.mdx)("td",{parentName:"tr",align:null},"Toggle to show graph legend.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"throttle"),Object(o.mdx)("td",{parentName:"tr",align:null},"number"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"(1000/60) => time in ms"),Object(o.mdx)("td",{parentName:"tr",align:null},"Re-render delay afer resizing of a browser window.")))),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("h3",{parentName:"li",id:"axis"},Object(o.mdx)("inlineCode",{parentName:"h3"},"axis")),Object(o.mdx)("strong",{parentName:"li"},"type:")," object")),Object(o.mdx)("p",null,"Timeline is marked only on ",Object(o.mdx)("inlineCode",{parentName:"p"},"X Axis"),", there is no other axis supplied. Axis is set to ",Object(o.mdx)("inlineCode",{parentName:"p"},"show")," by default."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Required"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"lowerLimit"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"Lower bound for X axis. This is inclusive.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"upperLimit"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"Upper bound for X axis. This is inclusive.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"label"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"Axis label value.")))),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("h3",{parentName:"li",id:"legendpadding"},Object(o.mdx)("inlineCode",{parentName:"h3"},"legendPadding")),Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("strong",{parentName:"p"},"type:")," object"),Object(o.mdx)("p",{parentName:"li"},"  Sets the legend padding and removes the carbon default margin of ",Object(o.mdx)("inlineCode",{parentName:"p"},"8px")," around legend."),Object(o.mdx)("pre",{parentName:"li"},Object(o.mdx)("code",{parentName:"pre",className:"language-json"},"  legendPadding: {\n    top: <number>,\n    bottom: <number>,\n    left: <number>,\n    right: <number>\n  }\n")))),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Required"),Object(o.mdx)("th",{parentName:"tr",align:null},"Default"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"top"),Object(o.mdx)("td",{parentName:"tr",align:null},"number"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"4")),Object(o.mdx)("td",{parentName:"tr",align:null},"Top padding of legend container.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"bottom"),Object(o.mdx)("td",{parentName:"tr",align:null},"number"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"4")),Object(o.mdx)("td",{parentName:"tr",align:null},"Bottom padding of legend container.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"left"),Object(o.mdx)("td",{parentName:"tr",align:null},"number"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"8")),Object(o.mdx)("td",{parentName:"tr",align:null},"Left padding of legend container.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"right"),Object(o.mdx)("td",{parentName:"tr",align:null},"number"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"8")),Object(o.mdx)("td",{parentName:"tr",align:null},"Right padding of legend container.")))),Object(o.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},'const dataset = {\n  key: <string>,\n  values: [\n    {\n      x: <number or Date object>,\n      y: <number>,\n      isCritical: <bool>\n    },\n  ],\n  color: <hex value as string>,\n  label: {\n    display: <string>,\n  },\n  legendOptions:{\n    showElement: <bool>\n  }\n  onClick: <function>,\n  regions: [\n    start: <number>\n    end: <number>\n    axis: <"y" or "y2">\n    color: <hex value as string>\n  ],\n  shape: < shape SVG >,\n  yAxis: <"y" or "y2">,\n\n}\n')),Object(o.mdx)("h3",{id:"dataset-properties"},"Dataset Properties"),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Required"),Object(o.mdx)("th",{parentName:"tr",align:null},"Default"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"key"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"-"),Object(o.mdx)("td",{parentName:"tr",align:null},"A unique ",Object(o.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",Object(o.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"values"),Object(o.mdx)("td",{parentName:"tr",align:null},"array of objects"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"-"),Object(o.mdx)("td",{parentName:"tr",align:null},"See ",Object(o.mdx)("a",{parentName:"td",href:"#values"},"Values"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"color"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"COLORS.BLACK")),Object(o.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",Object(o.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",Object(o.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/colors"},"Colors"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"label"),Object(o.mdx)("td",{parentName:"tr",align:null},"object"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},"{}"),Object(o.mdx)("td",{parentName:"tr",align:null},"See ",Object(o.mdx)("a",{parentName:"td",href:"#label"},"label"),".")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"onClick"),Object(o.mdx)("td",{parentName:"tr",align:null},"function"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(o.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as to display a popup.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"shape"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"SHAPES.DARK.CIRCLE")),Object(o.mdx)("td",{parentName:"tr",align:null},"Shape for representing the data points. Can be a constant from ",Object(o.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/Shapes"},"shapes")," or a custom SVG.")))),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("h3",{parentName:"li",id:"values"},Object(o.mdx)("inlineCode",{parentName:"h3"},"values")),Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("strong",{parentName:"p"},"type:"),"  array of objects | ",Object(o.mdx)("inlineCode",{parentName:"p"},"required prop")),Object(o.mdx)("p",{parentName:"li"},"  This is an array of objects representing the dataset.\nIt is a required prop; passing ",Object(o.mdx)("inlineCode",{parentName:"p"},"undefined")," will result in an error.\nHowever passing an empty array (",Object(o.mdx)("inlineCode",{parentName:"p"},"[]"),") will result in the graph successfully rendering without a dataset.\nEach object in the array takes the following shape:"),Object(o.mdx)("pre",{parentName:"li"},Object(o.mdx)("code",{parentName:"pre",className:"language-json"},"  {\n    x: <number>,\n    isCritical: <bool>\n  }\n")),Object(o.mdx)("table",{parentName:"li"},Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Required"),Object(o.mdx)("th",{parentName:"tr",align:null},"Default"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"x"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"yes"),Object(o.mdx)("td",{parentName:"tr",align:null},"-"),Object(o.mdx)("td",{parentName:"tr",align:null},"Value for the x coordinate.")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"isCritical"),Object(o.mdx)("td",{parentName:"tr",align:null},"bool"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"false")),Object(o.mdx)("td",{parentName:"tr",align:null},"Highlights a datapoint if ",Object(o.mdx)("inlineCode",{parentName:"td"},"true"),".")))))),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("h3",{parentName:"li",id:"label"},Object(o.mdx)("inlineCode",{parentName:"h3"},"label")),Object(o.mdx)("p",{parentName:"li"},Object(o.mdx)("strong",{parentName:"p"},"type:")," object\n",Object(o.mdx)("strong",{parentName:"p"},"default value:")," ",Object(o.mdx)("inlineCode",{parentName:"p"},"{}")),Object(o.mdx)("p",{parentName:"li"},"  Label for the dataset in the legend. If it is not provided then it will not be shown in the legend."),Object(o.mdx)("pre",{parentName:"li"},Object(o.mdx)("code",{parentName:"pre"},"```json\n  label: {\n    display: <string>\n  }\n```\n")),Object(o.mdx)("table",{parentName:"li"},Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(o.mdx)("th",{parentName:"tr",align:null},"Type"),Object(o.mdx)("th",{parentName:"tr",align:null},"Required"),Object(o.mdx)("th",{parentName:"tr",align:null},"Default"),Object(o.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",{parentName:"tr",align:null},"display"),Object(o.mdx)("td",{parentName:"tr",align:null},"string"),Object(o.mdx)("td",{parentName:"tr",align:null},"no"),Object(o.mdx)("td",{parentName:"tr",align:null},Object(o.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(o.mdx)("td",{parentName:"tr",align:null},"Text to display as the label for the dataset.")))))),Object(o.mdx)("h2",{id:"example"},"Example"),Object(o.mdx)(g,{mdxType:"Timeline"}),Object(o.mdx)("details",null,Object(o.mdx)("summary",{style:{fontSize:24}},Object(o.mdx)("b",null,"Data")),Object(o.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(o.mdx)(N.a,{mdxType:"GraphConfig"}),Object(o.mdx)("h3",{id:"data-object"},"Data object"),Object(o.mdx)("h4",{id:"timeline-a-dataset"},"Timeline A Dataset"),Object(o.mdx)(h.a,{mdxType:"DataObject1"}),Object(o.mdx)("h4",{id:"timeline-b-dataset"},"Timeline B Dataset"),Object(o.mdx)(f.a,{mdxType:"DataObject2"})))}T.isMDXComponent=!0}}]);