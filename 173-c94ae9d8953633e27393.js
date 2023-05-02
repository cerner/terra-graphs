(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(4));n(1278);var i={id:o.default.string.isRequired},l=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var c=l;t.default=c},1280:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},1287:function(e,t,n){"use strict";n.r(t)},1518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,axis:{x:{show:!0,lowerLimit:new Date(2018,1,1,12).toISOString(),upperLimit:new Date(2019,1,1,12).toISOString(),rangeRounding:!0}},dateline:[]}};t.default=a},1519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={key:"track 1",trackLabel:{display:"Really really long project name that cannot be shown realistically"}};t.default=a},1753:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1273)),i=a(n(1275));n(1276),n(1287);var l=a(n(1277)),c=a(n(1518)),d=a(n(1519)),s=i.default.deepClone((0,c.default)("#ganttLabelTruncation")),p=[i.default.deepClone(d.default)],m=function(){return r.default.useEffect((function(){var e=o.default.api.gantt(s);p.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(l.default,{id:"ganttLabelTruncation"})};t.default=m},1998:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var a=n(31),r=n.n(a),o=n(55),i=n.n(o),l=n(0),c=n.n(l),d=n(788),s=n(1753),p=n.n(s),m=["components"],u={};function b(e){var t=e.components,n=i()(e,m);return Object(d.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Gantt/GanttChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getGanttLabelTruncationConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Gantt/ganttLabelTruncationConfig';\nimport labelTruncationDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Gantt/labelTruncationDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getGanttLabelTruncationConfig('#ganttLabelTruncation'));\nconst dataset = [utils.deepClone(labelTruncationDataset)];\n\nconst GanttLabelTruncationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.gantt(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"ganttLabelTruncation\" />\n  );\n};\n\nexport default GanttLabelTruncationExample;\n\n")))}b.isMDXComponent=!0;var f=n(1284),g=n.n(f),h=n(1285),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return c.a.createElement(g.a,{title:t||"Label Truncation",description:n,example:c.a.createElement(p.a,null),exampleCssSrc:c.a.createElement(h.a,null),exampleSrc:c.a.createElement(b,null),isExpanded:a})},j=["components"],v={},O="wrapper";function y(e){var t=e.components,n=i()(e,j);return Object(d.mdx)(O,r()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"const getGanttLabelTruncationConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      lowerLimit: new Date(2018, 1, 1, 12).toISOString(),\n      upperLimit: new Date(2019, 1, 1, 12).toISOString(),\n      rangeRounding: true, // If set to false, we don't extend the domain\n    },\n  },\n  dateline: [],\n});\n\nexport default getGanttLabelTruncationConfig;\n\n\n")))}y.isMDXComponent=!0;var C=["components"],w={},T="wrapper";function E(e){var t=e.components,n=i()(e,C);return Object(d.mdx)(T,r()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"const labelTruncationDataset = {\n  key: 'track 1',\n  trackLabel: {\n    display:\n      'Really really long project name that cannot be shown realistically',\n  },\n};\n\nexport default labelTruncationDataset;\n\n")))}E.isMDXComponent=!0;var L=["components"];n(1280);var G={},D="wrapper";function N(e){var t=e.components,n=i()(e,L);return Object(d.mdx)(D,r()({},G,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h1",{id:"simple-gantt"},"Simple Gantt"),Object(d.mdx)("p",null,"This is a simple Gantt chart with truncated label."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)(x,{mdxType:"GanttChart"}),Object(d.mdx)("details",null,Object(d.mdx)("summary",{style:{fontSize:24}},Object(d.mdx)("b",null,"Data")),Object(d.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(d.mdx)(y,{mdxType:"GraphConfig"}),Object(d.mdx)("h3",{id:"data-object"},"Data object"),Object(d.mdx)(E,{mdxType:"DataObject"})))}N.isMDXComponent=!0}}]);