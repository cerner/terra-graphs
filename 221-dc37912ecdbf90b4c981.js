(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1354:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1288)),o=n(1290),r="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",s={key:"uid_1",label:{display:"Timeline A"},color:i.default.helpers.COLORS.BLUE,onClick:o.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:r},{x:new Date(2016,0,1,2,15).toISOString(),content:r},{x:new Date(2016,0,1,3,15).toISOString(),content:r},{x:new Date(2016,0,1,4,15).toISOString(),content:r},{x:new Date(2016,0,1,5,15).toISOString(),content:r}]};t.default=s},1355:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1288)),o=n(1290),r={key:"uid_2",label:{display:"Timeline B"},shape:i.default.helpers.SHAPES.DARK.RHOMBUS,color:i.default.helpers.COLORS.GREEN,onClick:o.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=r},1605:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),ticks:{format:""}}},showLabel:!0,showLegend:!0}};t.default=a},1830:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),o=a(n(1288)),r=a(n(1289));n(1291),n(1330);var s=a(n(1293)),l=a(n(1605)),c=a(n(1354)),d=a(n(1355)),m=r.default.deepClone((0,l.default)("#axisWithNoTickValuesTimelineGraph")),p=[r.default.deepClone(c.default),r.default.deepClone(d.default)],u=function(){return i.default.useEffect((function(){var e=o.default.api.timeline(m);p.forEach((function(t){e.loadContent(t)}))}),[]),i.default.createElement(s.default,{id:"axisWithNoTickValuesTimelineGraph"})};t.default=u},2057:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var a=n(31),i=n.n(a),o=n(55),r=n.n(o),s=n(0),l=n.n(s),c=n(793),d=n(1830),m=n.n(d),p=["components"],u={};function h(e){var t=e.components,n=r()(e,p);return Object(c.mdx)("wrapper",i()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getTimelineConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelineWithNoAxisTicksConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset1.js';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset2.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getTimelineConfig('#axisWithNoTickValuesTimelineGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst AxisWithNoTickValuesTimelineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.timeline(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"axisWithNoTickValuesTimelineGraph\" />\n  );\n};\n\nexport default AxisWithNoTickValuesTimelineExample;\n\n")))}h.isMDXComponent=!0;var b=n(1296),f=n.n(b),x=n(1297),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(f.a,{title:t||"Axis With No Tick Values",description:n,example:l.a.createElement(m.a,null),exampleCssSrc:l.a.createElement(x.a,null),exampleSrc:l.a.createElement(h,null),isExpanded:a})},j=["components"],O={},T="wrapper";function w(e){var t=e.components,n=r()(e,j);return Object(c.mdx)(T,i()({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const getTimelineConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n      ticks: {\n        format: '',\n      },\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n});\n\nexport default getTimelineConfig;\n\n")))}w.isMDXComponent=!0;var y=n(1439),v=n(1440),C=["components"];n(1299);var S={},D="wrapper";function k(e){var t=e.components,n=r()(e,C);return Object(c.mdx)(D,i()({},S,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"timeline-axis-with-no-ticks"},"Timeline axis with no ticks"),Object(c.mdx)("p",null,"This is a basic timeline graph with no axis ticks."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(g,{mdxType:"Timeline"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(w,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"timeline-a-dataset"},"Timeline A Dataset"),Object(c.mdx)(y.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"timeline-b-dataset"},"Timeline B Dataset"),Object(c.mdx)(v.a,{mdxType:"DataObject2"})))}k.isMDXComponent=!0}}]);