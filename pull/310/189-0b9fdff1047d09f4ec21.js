(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1277:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(4));t(1278);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var s=l;n.default=s},1280:function(e,n,t){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",n="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var n=e.target.parentNode;if(!n)return;n.getAttribute("open")?(n.open=!1,n.removeAttribute("open")):(n.open=!0,n.setAttribute("open","open"))}}function a(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+n+">a</"+n+">b",document.body.appendChild(t);var a=t.offsetHeight;t.open=!0;var r=a!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,n){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=n,document.getElementsByTagName("head")[0].appendChild(t)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+n+") { display: none; }\nhtml.no-details "+e+" > "+n+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+n+':before { content: "▼"; }'))})?a.call(n,t,n,e):a)||(e.exports=r)},1309:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=(t(0),t(788)),s=["components"],p={},c="wrapper";function d(e){var n=e.components,t=i()(e,s);return Object(l.mdx)(c,r()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getLineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: new Date(2016, 0, 1, 1, 0).toISOString(),\n      upperLimit: new Date(2016, 0, 1, 23, 59).toISOString(),\n    },\n    y: {\n      label: 'Line Set A',\n      lowerLimit: 10,\n      upperLimit: 30,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineTimeseriesConfig;\n\n")))}d.isMDXComponent=!0},1506:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(1273)),o=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:new Date(2016,0,1,0,0).toISOString(),upperLimit:new Date(2016,0,1,23,59).toISOString(),ticks:{values:[new Date(2016,0,1,1,0).toISOString(),new Date(2016,0,1,5,0).toISOString(),new Date(2016,0,1,10,0).toISOString(),new Date(2016,0,1,15,0).toISOString(),new Date(2016,0,1,20,0).toISOString()],format:"%A %e %B %Y, %X"}},y:{label:"Line Set A",lowerLimit:10,upperLimit:30},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0,locale:r.default.helpers.LOCALE.de_DE}};n.default=o},1735:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=a(t(1273)),i=a(t(1275));t(1276);var l=a(t(1277)),s=a(t(1506)),p=i.default.deepClone((0,s.default)("#xAxisAlternateLocale")),c=function(){return r.default.useEffect((function(){o.default.api.graph(p)}),[]),r.default.createElement(l.default,{id:"xAxisAlternateLocale"})};n.default=c},2020:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var a=t(31),r=t.n(a),o=t(55),i=t.n(o),l=t(0),s=t.n(l),p=t(788),c=t(1735),d=t.n(c),m=["components"],u={};function b(e){var n=e.components,t=i()(e,m);return Object(p.mdx)("wrapper",r()({},u,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/General/timeseriesConfigAlternateLocale';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGraphConfig('#xAxisAlternateLocale'));\n\nconst XAxisAlternateLocaleGeneralExample = () => {\n  React.useEffect(() => {\n    Carbon.api.graph(graphConfig);\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"xAxisAlternateLocale\" />\n  );\n};\n\nexport default XAxisAlternateLocaleGeneralExample;\n\n")))}b.isMDXComponent=!0;var f=t(1284),x=t.n(f),g=t(1285),h=function(e){var n=e.title,t=e.description,a=e.isExpanded;return s.a.createElement(x.a,{title:n||"X Axis Alternate Locale",description:t,example:s.a.createElement(d.a,null),exampleCssSrc:s.a.createElement(g.a,null),exampleSrc:s.a.createElement(b,null),isExpanded:a})},S=t(1309),w=["components"],O={},y="wrapper";function j(e){var n=e.components,t=i()(e,w);return Object(p.mdx)(y,r()({},O,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = [\n  {\n    key: 'uid_1',\n    label: {\n      display: 'Data Label 1',\n    },\n    shape: Carbon.helpers.SHAPES.DARK.CIRCLE,\n    onClick: loadPopup,\n    values: [\n      {\n        x: new Date(2016, 0, 1, 1, 5).toISOString(),\n        y: 5,\n        isCritical: false,\n      },\n      {\n        x: new Date(2016, 0, 1, 2, 15).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 3, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 4, 15).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 5, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 6, 15).toISOString(),\n        y: 9,\n      },\n      {\n        x: new Date(2016, 0, 1, 7, 0).toISOString(),\n        y: 11,\n      },\n      {\n        x: new Date(2016, 0, 1, 8, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 9, 45).toISOString(),\n        y: 16,\n      },\n      {\n        x: new Date(2016, 0, 1, 12, 15).toISOString(),\n        y: 17,\n      },\n      {\n        x: new Date(2016, 0, 1, 13, 15).toISOString(),\n        y: 28,\n      },\n      {\n        x: new Date(2016, 0, 1, 14, 15).toISOString(),\n        y: 12,\n      },\n      {\n        x: new Date(2016, 0, 1, 19, 45).toISOString(),\n        y: 13,\n      },\n      {\n        x: new Date(2016, 0, 1, 21, 15).toISOString(),\n        y: 14,\n      },\n    ],\n    yAxis: 'y',\n  },\n];\n\nexport default data;\n\n")))}j.isMDXComponent=!0;var v=["components"];t(1280);var L={},D="wrapper";function C(e){var n=e.components,t=i()(e,v);return Object(p.mdx)(D,r()({},L,t,{components:n,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"x-axis-alternate-locale"},"X-Axis alternate locale"),Object(p.mdx)("p",null,"This is a simple timeseries line graph with German(de_DE) locale."),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(p.mdx)("h2",{id:"example"},"Example"),Object(p.mdx)(h,{mdxType:"LineGraph"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(S.a,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)(j,{mdxType:"DataObject"})))}C.isMDXComponent=!0}}]);