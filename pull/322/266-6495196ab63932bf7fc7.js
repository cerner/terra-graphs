(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1750:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(43)),i=n(a(0)),p=n(a(78)),o=n(a(1320)),c=n(a(1321));a(1323),a(1337);var l,s=n(a(1326)),m=n(a(1440)),d=n(a(1352)),u=c.default.deepClone((0,m.default)("#simpleBarPanning")),f=c.default.deepClone(d.default),g={initial:0,factor:3};t.default=function(){i.default.useEffect((function(){(l=o.default.api.graph(u)).loadContent(o.default.api.bar(f))}),[]);var e=i.default.useReducer((function(e,t){var a;switch(t.type){case"panLeft":a=e.initial-e.factor;break;case"panRight":a=e.initial+e.factor;break;default:return e}return{initial:a,factor:e.factor}}),g),t=(0,r.default)(e,2),a=t[0],n=t[1];return i.default.useLayoutEffect((function(){l&&(l.config.axis.x.lowerLimit=new Date(2016,0,1,a.initial).toISOString(),l.config.axis.x.upperLimit=new Date(2016,0,2,a.initial).toISOString(),l.reflowMultipleDatasets())}),[a.initial]),i.default.createElement(i.default.Fragment,null,i.default.createElement(p.default,{className:"button-pan-left",text:"<",onClick:function(){return n({type:"panLeft"})}}),i.default.createElement(p.default,{className:"button-pan-right",text:">",onClick:function(){return n({type:"panRight"})}}),i.default.createElement(s.default,{id:"simpleBarPanning"}))}},2097:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(29),r=a.n(n),i=a(56),p=a.n(i),o=a(0),c=a.n(o),l=a(813),s=a(1750),m=a.n(s),d=["components"],u={};function f(e){var t=e.components,a=p()(e,d);return Object(l.mdx)("wrapper",r()({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button/lib/Button';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barPanning';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#simpleBarPanning'));\nconst dataset = utils.deepClone(exampleData);\nconst initialState = {\n  initial: 0,\n  factor: 3,\n};\n\nlet graph;\n\nconst BarPanningExample = () => {\n  React.useEffect(() => {\n    graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  const reducer = (panState, action) => {\n    let hour;\n\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n\n    return {\n      initial: hour,\n      factor: panState.factor,\n    };\n  };\n\n  const [panState, dispatch] = React.useReducer(reducer, initialState);\n\n  React.useLayoutEffect(() => {\n    if (!graph) { return; }\n\n    graph.config.axis.x.lowerLimit = new Date(2016, 0, 1, panState.initial).toISOString();\n    graph.config.axis.x.upperLimit = new Date(2016, 0, 2, panState.initial).toISOString();\n\n    graph.reflowMultipleDatasets();\n  }, [panState.initial]);\n\n  return (\n    <>\n      <Button className=\"button-pan-left\" text=\"<\" onClick={() => dispatch({ type: 'panLeft' })} />\n      <Button className=\"button-pan-right\" text=\">\" onClick={() => dispatch({ type: 'panRight' })} />\n      <ExampleGraphContainer id=\"simpleBarPanning\" />\n    </>\n  );\n};\n\nexport default BarPanningExample;\n\n")))}f.isMDXComponent=!0;var g=a(1328),b=a.n(g),h=a(1329),x=function(e){var t=e.title,a=e.description,n=e.isExpanded;return c.a.createElement(b.a,{title:t||"Simple Panning",description:a,example:c.a.createElement(m.a,null),exampleCssSrc:c.a.createElement(h.a,null),exampleSrc:c.a.createElement(f,null),isExpanded:n})},j=a(1664),O=a(1390),C=["components"];a(1331);var S={},w="wrapper";function E(e){var t=e.components,a=p()(e,C);return Object(l.mdx)(w,r()({},S,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"simple-bar-graph-panning"},"Simple Bar graph panning"),Object(l.mdx)("p",null,"This is a bar graph example with panning."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(x,{mdxType:"BarGraphPanning"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(j.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)(O.a,{mdxType:"DataObject"})))}E.isMDXComponent=!0}}]);