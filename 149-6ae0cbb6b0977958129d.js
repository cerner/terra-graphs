(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1277:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(4));n(1278);var o={id:i.default.string.isRequired},s=function(e){return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),a.default.createElement("div",{id:e.id,className:"example-graph-container"}))};s.propTypes=o;var l=s;t.default=l},1280:function(e,t,n){var r,a;void 0===(a="function"==typeof(r=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function r(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var r=n.offsetHeight;n.open=!0;var a=r!=n.offsetHeight;return document.body.removeChild(n),a}function a(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}r()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),a("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?r.call(t,n,t,e):r)||(e.exports=a)},1308:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(31),a=n.n(r),i=n(55),o=n.n(i),s=(n(0),n(788)),l=["components"],p={},c="wrapper";function m(e){var t=e.components,n=o()(e,l);return Object(s.mdx)(c,a()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}m.isMDXComponent=!0},1493:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(1273)),i=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString()},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=i},1494:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(1273)),i=function(e){return{bindTo:e,axis:{x:{type:a.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%a %b %e %X %Y"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};t.default=i},1495:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return{bindTo:e,axis:{x:{label:"Data",lowerLimit:20.7,upperLimit:22.7,suppressTrailingZeros:!0},y:{label:"Line Set A",lowerLimit:.2,upperLimit:3.8,suppressTrailingZeros:!0},y2:{show:!0,label:"Line Set B",lowerLimit:10.2,upperLimit:13.8,suppressTrailingZeros:!0}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,ticksCount:7}};t.default=r},1740:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(1273)),o=r(n(1275));n(1276);var s=r(n(1277)),l=r(n(1493)),p=o.default.deepClone((0,l.default)("#staticXAxisTicks")),c=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(s.default,{id:"staticXAxisTicks"})};t.default=c},1741:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(1273)),o=r(n(1275));n(1276);var s=r(n(1277)),l=r(n(1494)),p=o.default.deepClone((0,l.default)("#xAxisTicksFormatted")),c=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(s.default,{id:"xAxisTicksFormatted"})};t.default=c},1742:function(e,t,n){"use strict";var r=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=r(n(1273)),o=r(n(1275));n(1276);var s=r(n(1277)),l=r(n(1495)),p=o.default.deepClone((0,l.default)("#supressTickValue")),c=function(){return a.default.useEffect((function(){i.default.api.graph(p)}),[]),a.default.createElement(s.default,{id:"supressTickValue"})};t.default=c},1988:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(31),a=n.n(r),i=n(55),o=n.n(i),s=n(0),l=n.n(s),p=n(788),c=n(1740),m=n.n(c),d=["components"],u={};function f(e){var t=e.components,n=o()(e,d);return Object(p.mdx)("wrapper",a()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfig';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#staticXAxisTicks'));\n\nconst StaticXAxisTicksGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"staticXAxisTicks\" />\n  );\n};\n\nexport default StaticXAxisTicksGeneralExample;\n\n")))}f.isMDXComponent=!0;var b=n(1284),x=n.n(b),h=n(1285),g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(x.a,{title:t||"Static X Axis Ticks",description:n,example:l.a.createElement(m.a,null),exampleCssSrc:l.a.createElement(h.a,null),exampleSrc:l.a.createElement(f,null),isExpanded:r})},j=n(1308),w=n(1741),O=n.n(w),C=["components"],v={};function E(e){var t=e.components,n=o()(e,C);return Object(p.mdx)("wrapper",a()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigTicksFormatted';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#xAxisTicksFormatted'));\n\nconst XAxisTicksFormattedGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"xAxisTicksFormatted\" />\n  );\n};\n\nexport default XAxisTicksFormattedGeneralExample;\n\n")))}E.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(x.a,{title:t||"X Axis Ticks Formatted",description:n,example:l.a.createElement(O.a,null),exampleCssSrc:l.a.createElement(h.a,null),exampleSrc:l.a.createElement(E,null),isExpanded:r})},S=n(1742),L=n.n(S),y=["components"],G={};function k(e){var t=e.components,n=o()(e,y);return Object(p.mdx)("wrapper",a()({},G,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/generalDefaultDecimalAxes';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#supressTickValue'));\n\nconst SupressTickValueGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"supressTickValue\" />\n  );\n};\n\nexport default SupressTickValueGeneralExample;\n\n")))}k.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(x.a,{title:t||"Suppress Tick Value Trailing Zero",description:n,example:l.a.createElement(L.a,null),exampleCssSrc:l.a.createElement(h.a,null),exampleSrc:l.a.createElement(k,null),isExpanded:r})},A=["components"],X={},M="wrapper";function N(e){var t=e.components,n=o()(e,A);return Object(p.mdx)(M,a()({},X,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const getDefaultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      label: 'Data',\n      lowerLimit: 20.7,\n      upperLimit: 22.7,\n      suppressTrailingZeros: true,\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 0.2,\n      upperLimit: 3.8,\n      suppressTrailingZeros: true,\n    },\n    y2: {\n      show: true,\n      label: 'Line Set B',\n      lowerLimit: 10.2,\n      upperLimit: 13.8,\n      suppressTrailingZeros: true,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n  ticksCount: 7,\n});\n\nexport default getDefaultConfig;\n\n")))}N.isMDXComponent=!0;var I=["components"];n(1280);var _={},V="wrapper";function P(e){var t=e.components,n=o()(e,I);return Object(p.mdx)(V,a()({},_,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"axis-ticks"},"Axis Ticks"),Object(p.mdx)("p",null,"Axis ticks contains simple graph examples with static x-axis ticks, formatted ticks and suppress tick values trailing zeros."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(g,{mdxType:"StaticXAxisTicksGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for static x-axis ticks")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(j.a,{mdxType:"StaticXAxisTicksGraphConfig"})),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)(T,{mdxType:"XAxisTicksFormattedGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for x-axis ticks formatted ")),Object(p.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(p.mdx)(j.a,{mdxType:"XAxisTicksFormattedGraphConfig"})),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)("br",null),Object(p.mdx)(D,{mdxType:"SuppressTickValueTrailingZeroGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data used for suppress tick value trailing zero's")),Object(p.mdx)("h3",{id:"graph-config-object-2"},"Graph Config object"),Object(p.mdx)(N,{mdxType:"SuppressTickValueTrailingZeroGraphConfig"})))}P.isMDXComponent=!0}}]);