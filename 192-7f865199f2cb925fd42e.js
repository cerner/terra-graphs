(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1381:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1315)),r=n(1317),o="Just use the old one inch brush. It is so important to do something every day that will make you happy.I sincerely wish for you every possible joy life could bring. Water is like me. It iss laaazy ... Boy, it always looks for the easiest way to do things\n\nWe are trying to teach you a technique here and how to use it. The least little bit can do so much. There we go.\n\nNo worries. No cares. Just float and wait for the wind to blow you around.These trees are so much fun. I get started on them and I have a hard time stopping. We wll make some happy little bushes here. Absolutely no pressure. You are just a whisper floating across a mountain. There are no limits in this world.A thin paint will stick to a thick paint.\n",l={key:"uid_1",label:{display:"Timeline A"},color:i.default.helpers.COLORS.BLUE,onClick:r.loadTimelinePopup,values:[{x:new Date(2016,0,1,1,30).toISOString(),content:o},{x:new Date(2016,0,1,2,15).toISOString(),content:o},{x:new Date(2016,0,1,3,15).toISOString(),content:o},{x:new Date(2016,0,1,4,15).toISOString(),content:o},{x:new Date(2016,0,1,5,15).toISOString(),content:o}]};t.default=l},1382:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(1315)),r=n(1317),o={key:"uid_2",label:{display:"Timeline B"},shape:i.default.helpers.SHAPES.DARK.RHOMBUS,color:i.default.helpers.COLORS.GREEN,onClick:r.loadTimelinePopup,values:[{x:new Date(2016,0,1,7,15).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,9,45).toISOString(),content:"This is custom value of another unit"},{x:new Date(2016,0,1,12).toISOString(),content:"This is custom value of another unit"}]};t.default=o},1429:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString()}},showLabel:!0,showLegend:!0,pan:{enabled:!0}}};t.default=a},1637:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(29),i=n.n(a),r=n(56),o=n.n(r),l=(n(0),n(809)),s=["components"],c={},p="wrapper";function d(e){var t=e.components,n=o()(e,s);return Object(l.mdx)(p,i()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const getTimelinePanningConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 15, 59).toISOString(),\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  pan: {\n    enabled: true,\n  },\n});\n\nexport default getTimelinePanningConfig;\n\n")))}d.isMDXComponent=!0},1859:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(43)),r=a(n(0)),o=a(n(78)),l=a(n(1315)),s=a(n(1316));n(1318),n(1357);var c,p=a(n(1321)),d=a(n(1429)),u=a(n(1381)),m=a(n(1382)),f=s.default.deepClone((0,d.default)("#TimelinePanningExample")),h=[s.default.deepClone(u.default),s.default.deepClone(m.default)],g={initial:0,factor:3},b=function(){r.default.useEffect((function(){c=l.default.api.timeline(f),h.forEach((function(e){c.loadContent(e)}))}),[]);var e=r.default.useReducer((function(e,t){var n;switch(t.type){case"panLeft":n=e.initial-e.factor;break;case"panRight":n=e.initial+e.factor;break;default:return e}return{initial:n,factor:e.factor}}),g),t=(0,i.default)(e,2),n=t[0],a=t[1];return r.default.useLayoutEffect((function(){c&&(c.config.axis.x.lowerLimit=new Date(2016,0,1,n.initial).toISOString(),c.config.axis.x.upperLimit=new Date(2016,0,2,n.initial).toISOString(),c.reflowMultipleDatasets())}),[n.initial]),r.default.createElement(r.default.Fragment,null,r.default.createElement(o.default,{className:"button-pan-left",text:"<",onClick:function(){return a({type:"panLeft"})}}),r.default.createElement(o.default,{className:"button-pan-right",text:">",onClick:function(){return a({type:"panRight"})}}),r.default.createElement(p.default,{id:"TimelinePanningExample"}))};t.default=b},2116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var a=n(29),i=n.n(a),r=n(56),o=n.n(r),l=n(0),s=n.n(l),c=n(809),p=n(1859),d=n.n(p),u=["components"],m={};function f(e){var t=e.components,n=o()(e,u);return Object(c.mdx)("wrapper",i()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Timeline/Timeline.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getTimelinePanningConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Timeline/timelinePanningConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset1.js';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Timeline/defaultDataset2.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getTimelinePanningConfig('#TimelinePanningExample'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst TimelinePanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.timeline(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"TimelinePanningExample\" />\n    </>\n  );\n};\n\nexport default TimelinePanningExample;\n\n")))}f.isMDXComponent=!0;var h=n(1323),g=n.n(h),b=n(1324),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return s.a.createElement(g.a,{title:t||"Simple Panning",description:n,example:s.a.createElement(d.a,null),exampleCssSrc:s.a.createElement(b.a,null),exampleSrc:s.a.createElement(f,null),isExpanded:a})},O=n(1637),j=n(1468),w=n(1469),S=["components"];n(1326);var y={},T="wrapper";function C(e){var t=e.components,n=o()(e,S);return Object(c.mdx)(T,i()({},y,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"timeline-graph-panning"},"Timeline Graph Panning"),Object(c.mdx)("p",null,"This is a basic timeline graph with panning."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\n")),Object(c.mdx)("h2",{id:"example"},"Example"),Object(c.mdx)(x,{mdxType:"TimelinePanning"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(O.a,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-object"},"Data object"),Object(c.mdx)("h4",{id:"timeline-a-dataset"},"Timeline A Dataset"),Object(c.mdx)(j.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"timeline-b-dataset"},"Timeline B Dataset"),Object(c.mdx)(w.a,{mdxType:"DataObject2"})))}C.isMDXComponent=!0}}]);