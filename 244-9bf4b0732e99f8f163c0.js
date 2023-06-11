(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{1308:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};n.default=a},1311:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(31),r=t.n(a),i=t(55),o=t.n(i),s=(t(0),t(793)),d=["components"],l={},p="wrapper";function c(e){var n=e.components,t=o()(e,d);return Object(s.mdx)(p,r()({},l,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}c.isMDXComponent=!0},1778:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),i=a(t(1288)),o=a(t(1289));t(1291),t(1294);var s=a(t(1293)),d=a(t(1308)),l=a(t(1346)),p=o.default.deepClone((0,d.default)("#dashedLine")),c=o.default.deepClone(l.default),m=function(){return r.default.useEffect((function(){i.default.api.graph(p).loadContent(i.default.api.line(c))}),[]),r.default.createElement(s.default,{id:"dashedLine"})};n.default=m},2073:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return D}));var a=t(31),r=t.n(a),i=t(55),o=t.n(i),s=t(0),d=t.n(s),l=t(793),p=t(1778),c=t.n(p),m=["components"],u={};function h(e){var n=e.components,t=o()(e,m);return Object(l.mdx)("wrapper",r()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#dashedLine'));\nconst dataset = utils.deepClone(exampleData);\n\nconst DashedLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"dashedLine\" />\n  );\n};\n\nexport default DashedLineExample;\n\n")))}h.isMDXComponent=!0;var b=t(1296),f=t.n(b),x=t(1297),g=function(e){var n=e.title,t=e.description,a=e.isExpanded;return d.a.createElement(f.a,{title:n||"Dashed Line",description:t,example:d.a.createElement(c.a,null),exampleCssSrc:d.a.createElement(x.a,null),exampleSrc:d.a.createElement(h,null),isExpanded:a})},j=t(1311),L=t(1437),w=["components"];t(1299);var O={},C="wrapper";function D(e){var n=e.components,t=o()(e,w);return Object(l.mdx)(C,r()({},O,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"dashed-line"},"Dashed Line"),Object(l.mdx)("p",null,"This is a graph with a dashed line dataset."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(l.mdx)("h2",{id:"example"},"Example"),Object(l.mdx)(g,{mdxType:"LineGraph"}),Object(l.mdx)("details",null,Object(l.mdx)("summary",{style:{fontSize:24}},Object(l.mdx)("b",null,"Data")),Object(l.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(l.mdx)(j.a,{mdxType:"GraphConfig"}),Object(l.mdx)("h3",{id:"data-object"},"Data object"),Object(l.mdx)(L.a,{mdxType:"DataObject"})))}D.isMDXComponent=!0}}]);