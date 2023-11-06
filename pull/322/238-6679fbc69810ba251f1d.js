(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1357:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1320));t.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,1,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Bubble",lowerLimit:10,upperLimit:250}}}}},1452:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(29),r=a.n(n),o=a(56),i=a.n(o),p=(a(0),a(813)),l=["components"],s={},c="wrapper";function m(e){var t=e.components,a=i()(e,l);return Object(p.mdx)(c,r()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getSimpleAxisData = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Bubble',\n      lowerLimit: 10,\n      upperLimit: 250,\n    },\n  },\n});\n\nexport default getSimpleAxisData;\n\n")))}m.isMDXComponent=!0},1753:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=n(a(1320)),i=n(a(1321));a(1323);var p=n(a(1326)),l=n(a(1357)),s=n(a(1373)),c=i.default.deepClone((0,l.default)("#customWeightGraph")),m=i.default.deepClone(s.default);t.default=function(){return r.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.bubbleSingleDataset(m))}),[]),r.default.createElement(p.default,{id:"customWeightGraph"})}},2098:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(29),r=a.n(n),o=a(56),i=a.n(o),p=a(0),l=a.n(p),s=a(813),c=a(1753),m=a.n(c),d=["components"],b={};function u(e){var t=e.components,a=i()(e,d);return Object(s.mdx)("wrapper",r()({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getSimpleAxisData from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData';\nimport bubbleDataBasic from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js';\n\n/*\nPlease refer to the documentation below to see graphConfig and data objects.\n*/\n\nconst graphConfig = utils.deepClone(getSimpleAxisData('#customWeightGraph'));\nconst dataset = utils.deepClone(bubbleDataBasic);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleSingleDataset(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"customWeightGraph\" />\n  );\n};\n\n")))}u.isMDXComponent=!0;var x=a(1328),g=a.n(x),h=a(1329),f=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.a.createElement(g.a,{title:t||"Custom Weight Graph",description:a,example:l.a.createElement(m.a,null),exampleCssSrc:l.a.createElement(h.a,null),exampleSrc:l.a.createElement(u,null),isExpanded:n})},j=a(1452),O=a(1508),C=["components"];a(1331);var w={},D="wrapper";function S(e){var t=e.components,a=i()(e,C);return Object(s.mdx)(D,r()({},w,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"custom-bubble-weight"},"Custom Bubble Weight"),Object(s.mdx)("p",null,"A bubble graph with custom bubble weights."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(f,{mdxType:"CustomWeightGraphExample"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(j.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(O.a,{mdxType:"DataObject"})))}S.isMDXComponent=!0}}]);