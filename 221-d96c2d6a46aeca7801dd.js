(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{1360:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),s=(t(0),t(813)),l=["components"],p={},d="wrapper";function c(e){var n=e.components,t=i()(e,l);return Object(s.mdx)(d,r()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1398:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!0,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1598:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1320)),o=t(1322),i=t(1332),s={key:"uid_6",label:{display:"Data Label 6"},color:r.default.helpers.COLORS.ORANGE,shape:r.default.helpers.SHAPES.DARK.SQUARE,onClick:o.loadPopup,yAxis:"y2",legendOptions:{showLine:!0,showShape:!0},regions:[{axis:"y2",start:50,end:150}],values:(0,i.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI})};n.default=s},1835:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(1320)),i=a(t(1321));t(1323),t(1325);var s=a(t(1326)),l=a(t(1398)),p=a(t(1373)),d=a(t(1598)),c=i.default.deepClone((0,l.default)("#y2Region")),m=[i.default.deepClone(p.default),i.default.deepClone(d.default)];n.default=function(){return r.default.useEffect((function(){var e=o.default.api.graph(c);m.forEach((function(n){e.loadContent(o.default.api.line(n))}))}),[]),r.default.createElement(s.default,{id:"y2Region"})}},2083:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return S}));var a=t(29),r=t.n(a),o=t(56),i=t.n(o),s=t(0),l=t.n(s),p=t(813),d=t(1835),c=t.n(d),m=["components"],u={};function h(e){var n=e.components,t=i()(e,m);return Object(p.mdx)("wrapper",r()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultY2Config from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultY2';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetRegions6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultY2Config('#y2Region'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n];\n\nconst Y2RegionLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"y2Region\" />\n  );\n};\n\nexport default Y2RegionLineExample;\n\n\n")))}h.isMDXComponent=!0;var b=t(1328),f=t.n(b),x=t(1329),g=function(e){var n=e.title,t=e.description,a=e.isExpanded;return l.a.createElement(f.a,{title:n||"Y 2 Axis",description:t,example:l.a.createElement(c.a,null),exampleCssSrc:l.a.createElement(x.a,null),exampleSrc:l.a.createElement(h,null),isExpanded:a})},j=t(1360),O=t(1472),w=["components"],C={},L="wrapper";function y(e){var n=e.components,t=i()(e,w);return Object(p.mdx)(L,r()({},C,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_6',\n  label: {\n    display: 'Data Label 6',\n  },\n  color: Carbon.helpers.COLORS.ORANGE,\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  onClick: loadPopup,\n  yAxis: 'y2',\n  legendOptions: {\n    showLine: true,\n    showShape: true,\n  },\n  regions: [\n    {\n      axis: 'y2',\n      start: 50,\n      end: 150,\n    },\n  ],\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n};\n\nexport default data;\n\n")))}y.isMDXComponent=!0;var v=["components"];t(1331);var D={},E="wrapper";function S(e){var n=e.components,t=i()(e,v);return Object(p.mdx)(E,r()({},D,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"y2-axis"},"Y2-Axis"),Object(p.mdx)("p",null,"This is timeseries graph with region associated to each line."),Object(p.mdx)("h4",{id:"note-hover-onto-the-legend-to-see-the-region-associated-with-each-line"},"NOTE: Hover onto the legend to see the region associated with each line."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(g,{mdxType:"LineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(j.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(p.mdx)(O.a,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(p.mdx)(y,{mdxType:"DataObject2"})))}S.isMDXComponent=!0}}]);