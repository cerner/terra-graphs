(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1341:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1320)),l=t(1322),o={key:"uid_1",label:{display:"Data Label 1"},shape:r.default.helpers.SHAPES.DARK.CIRCLE,onClick:l.loadPopup,values:[{x:new Date(2016,0,1,1,5).toISOString(),y:5},{x:new Date(2016,0,1,2,15).toISOString(),y:11},{x:new Date(2016,0,1,3,15).toISOString(),y:12},{x:new Date(2016,0,1,4,15).toISOString(),y:16},{x:new Date(2016,0,1,5,15).toISOString(),y:17},{x:new Date(2016,0,1,6,15).toISOString(),y:9},{x:new Date(2016,0,1,7,0).toISOString(),y:11},{x:new Date(2016,0,1,8,15).toISOString(),y:12},{x:new Date(2016,0,1,9,45).toISOString(),y:16},{x:new Date(2016,0,1,12,15).toISOString(),y:17},{x:new Date(2016,0,1,13,15).toISOString(),y:28},{x:new Date(2016,0,1,14,15).toISOString(),y:12},{x:new Date(2016,0,1,19,45).toISOString(),y:13},{x:new Date(2016,0,1,21,15).toISOString(),y:14}],yAxis:"y"};a.default=o},1353:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1320)),l=t(1322),o=t(1332),i={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:l.loadPopup,values:(0,o.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};a.default=i},1358:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1526:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,allowCalibration:!1}}},1527:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:100,upperLimit:150,allowCalibration:!0},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1528:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:100,upperLimit:150,allowCalibration:!1},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1529:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1320));a.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),allowCalibration:!0},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1530:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1320));a.default=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,9,0).toISOString(),upperLimit:new Date(2016,0,1,15,59).toISOString(),allowCalibration:!1},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}}},1767:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=n(t(1320)),o=n(t(1321));t(1323),t(1325);var i=n(t(1326)),s=n(t(1358)),p=n(t(1362)),d=o.default.deepClone((0,s.default)("#allowYCalibrationExample")),c=o.default.deepClone(p.default);a.default=function(){return r.default.useEffect((function(){l.default.api.graph(d).loadContent(l.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"allowYCalibrationExample"})}},1768:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=n(t(1320)),o=n(t(1321));t(1323),t(1325);var i=n(t(1326)),s=n(t(1526)),p=n(t(1362)),d=o.default.deepClone((0,s.default)("#disableCalibration")),c=o.default.deepClone(p.default);a.default=function(){return r.default.useEffect((function(){l.default.api.graph(d).loadContent(l.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"disableCalibration"})}},1769:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=n(t(1320)),o=n(t(1321));t(1323),t(1325);var i=n(t(1326)),s=n(t(1527)),p=n(t(1353)),d=o.default.deepClone((0,s.default)("#allowCalibrationX")),c=o.default.deepClone(p.default);a.default=function(){return r.default.useEffect((function(){l.default.api.graph(d).loadContent(l.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"allowCalibrationX"})}},1770:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=n(t(1320)),o=n(t(1321));t(1323),t(1325);var i=n(t(1326)),s=n(t(1528)),p=n(t(1353)),d=o.default.deepClone((0,s.default)("#allowCalibrationXDisabled")),c=o.default.deepClone(p.default);a.default=function(){return r.default.useEffect((function(){l.default.api.graph(d).loadContent(l.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"allowCalibrationXDisabled"})}},1771:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=n(t(1320)),o=n(t(1321));t(1323),t(1325);var i=n(t(1326)),s=n(t(1529)),p=n(t(1341)),d=o.default.deepClone((0,s.default)("#allowCalibrationXTimeseries")),c=o.default.deepClone(p.default);a.default=function(){return r.default.useEffect((function(){l.default.api.graph(d).loadContent(l.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"allowCalibrationXTimeseries"})}},1772:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=n(t(1320)),o=n(t(1321));t(1323),t(1325);var i=n(t(1326)),s=n(t(1530)),p=n(t(1341)),d=o.default.deepClone((0,s.default)("#allowCalibrationXDisabledTimeseries")),c=o.default.deepClone(p.default);a.default=function(){return r.default.useEffect((function(){l.default.api.graph(d).loadContent(l.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"allowCalibrationXDisabledTimeseries"})}},2019:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ee}));var n=t(29),r=t.n(n),l=t(56),o=t.n(l),i=t(0),s=t.n(i),p=t(813),d=t(1767),c=t.n(d),m=["components"],u={};function b(e){var a=e.components,t=o()(e,m);return Object(p.mdx)("wrapper",r()({},u,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowYCalibrationExample'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowYCalibrationExample\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}b.isMDXComponent=!0;var f=t(1328),h=t.n(f),g=t(1329),x=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(h.a,{title:a||"Allow Calibration Enabled Y Axis",description:t,example:s.a.createElement(c.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(b,null),isExpanded:n})},C=t(1768),w=t.n(C),E=["components"],j={};function L(e){var a=e.components,t=o()(e,E);return Object(p.mdx)("wrapper",r()({},j,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultNoCalibrationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultYCalibrationDisabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset6';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultNoCalibrationConfig('#disableCalibration'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"disableCalibration\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}L.isMDXComponent=!0;var O=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(h.a,{title:a||"Allow Calibration Disabled Y Axis",description:t,example:s.a.createElement(w.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(L,null),isExpanded:n})},v=t(1769),D=t.n(v),S=["components"],y={};function G(e){var a=e.components,t=o()(e,S);return Object(p.mdx)("wrapper",r()({},y,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXCalibrationEnabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationX'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationX\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}G.isMDXComponent=!0;var X=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(h.a,{title:a||"Allow Calibration Enabled X Axis",description:t,example:s.a.createElement(D.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(G,null),isExpanded:n})},T=t(1770),A=t.n(T),_=["components"],M={};function I(e){var a=e.components,t=o()(e,_);return Object(p.mdx)("wrapper",r()({},M,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultXCalibrationDisabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationXDisabled'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationXDisabled\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}I.isMDXComponent=!0;var P=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(h.a,{title:a||"Allow Calibration Disabled X Axis",description:t,example:s.a.createElement(A.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(I,null),isExpanded:n})},N=t(1771),R=t.n(N),Y=["components"],B={};function H(e){var a=e.components,t=o()(e,Y);return Object(p.mdx)("wrapper",r()({},B,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigXCalibrationEnabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationXTimeseries'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationXTimeseries\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}H.isMDXComponent=!0;var V=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(h.a,{title:a||"Allow Calibration Enabled Timeseries X Axis",description:t,example:s.a.createElement(R.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(H,null),isExpanded:n})},k=t(1772),J=t.n(k),K=["components"],z={};function U(e){var a=e.components,t=o()(e,K);return Object(p.mdx)("wrapper",r()({},z,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigXCalibrationDisabled';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getConfig('#allowCalibrationXDisabledTimeseries'));\nconst dataset = utils.deepClone(exampleData);\n\nconst AllowCalibrationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"allowCalibrationXDisabledTimeseries\" />\n  );\n};\n\nexport default AllowCalibrationExample;\n\n\n")))}U.isMDXComponent=!0;var W=function(e){var a=e.title,t=e.description,n=e.isExpanded;return s.a.createElement(h.a,{title:a||"Allow Calibration Disabled Timeseries X Axis",description:t,example:s.a.createElement(J.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(U,null),isExpanded:n})},q=t(1665),F=t(1470),Q=["components"];t(1331);var Z={},$="wrapper";function ee(e){var a=e.components,t=o()(e,Q);return Object(p.mdx)($,r()({},Z,t,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"calibration"},"Calibration"),Object(p.mdx)("p",null,"Calibration is updating the axis limits to accommodate the graph.\nBy default, it is ",Object(p.mdx)("strong",{parentName:"p"},"enabled for the y-axes")," and ",Object(p.mdx)("strong",{parentName:"p"},"disabled for the x-axis"),".\nIt can by toggled on/off by using the appropriate ",Object(p.mdx)("inlineCode",{parentName:"p"},"allowCalibration")," label."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(x,{mdxType:"AllowCalibrationEnabledY"}),Object(p.mdx)(O,{mdxType:"AllowCalibrationDisabledY"}),Object(p.mdx)(P,{mdxType:"AllowCalibrationDisabledX"}),Object(p.mdx)(X,{mdxType:"AllowCalibrationEnabledX"}),Object(p.mdx)(W,{mdxType:"AllowCalibrationDisabledXTimeseries"}),Object(p.mdx)(V,{mdxType:"AllowCalibrationEnabledXTimeseries"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(q.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(F.a,{mdxType:"DataObject"})))}ee.isMDXComponent=!0}}]);