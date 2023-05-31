(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{1284:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},1580:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,bindLegendTo:"#legendContainer",removeContainerPadding:!0,legendPadding:{left:2.5,right:2.5,top:2.5,bottom:2.5},dimension:{height:300},showLegend:!0}};t.default=a},1807:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),d=a(n(1273)),o=a(n(1274));n(1276),n(1352);var i=a(n(1279)),s=a(n(1580)),c=a(n(1353)),l=a(n(1354)),p=a(n(1355)),m=o.default.deepClone((0,s.default)("#graphContainer")),u=[o.default.deepClone(c.default),o.default.deepClone(l.default),o.default.deepClone(p.default)],g=function(){return r.default.useEffect((function(){var e=d.default.api.pie(m);u.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"bindto-container"},r.default.createElement("div",{id:"legendContainer",className:"legend-bindto-container"}),r.default.createElement("div",{id:"graphContainer",className:"legend-bindto-graph-container"})),r.default.createElement(i.default,{id:"pieGraphContainer"}))};t.default=g},2041:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var a=n(31),r=n.n(a),d=n(55),o=n.n(d),i=n(0),s=n.n(i),c=n(788),l=n(1807),p=n.n(l),m=["components"],u={};function g(e){var t=e.components,n=o()(e,m);return Object(c.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/reducedPaddingConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';\nimport dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getPieConfig('#graphContainer'));\nconst dataset = [\n  utils.deepClone(dataset1),\n  utils.deepClone(dataset2),\n  utils.deepClone(dataset3),\n];\n\nconst GraphAndLegendPaddingReducedPieExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.pie(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <>\n      <div className=\"bindto-container\">\n        <div id=\"legendContainer\" className=\"legend-bindto-container\" />\n        <div id=\"graphContainer\" className=\"legend-bindto-graph-container\" />\n      </div>\n      <ExampleGraphContainer id=\"pieGraphContainer\" />\n    </>\n  );\n};\n\nexport default GraphAndLegendPaddingReducedPieExample;\n\n")))}g.isMDXComponent=!0;var b=n(1281),f=n.n(b),h=n(1282),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return s.a.createElement(f.a,{title:t||"Graph And Legend Padding Reduced",description:n,example:s.a.createElement(p.a,null),exampleCssSrc:s.a.createElement(h.a,null),exampleSrc:s.a.createElement(g,null),isExpanded:a})},j=["components"],C={},O="wrapper";function v(e){var t=e.components,n=o()(e,j);return Object(c.mdx)(O,r()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"const getPieConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: '#legendContainer',\n  removeContainerPadding: true,\n  legendPadding: {\n    left: 2.5,\n    right: 2.5,\n    top: 2.5,\n    bottom: 2.5,\n  },\n  dimension: {\n    height: 300,\n  },\n  showLegend: true,\n});\n\nexport default getPieConfig;\n\n")))}v.isMDXComponent=!0;var P=n(1576),y=n(1577),E=n(1578),w=["components"];n(1284);var N={},D="wrapper";function T(e){var t=e.components,n=o()(e,w);return Object(c.mdx)(D,r()({},N,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"simple-pie"},"Simple Pie"),Object(c.mdx)("p",null,"This is a simple Pie chart with reduced padding."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(x,{mdxType:"PieChart"}),Object(c.mdx)("details",null,Object(c.mdx)("summary",{style:{fontSize:24}},Object(c.mdx)("b",null,"Data")),Object(c.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(c.mdx)(v,{mdxType:"GraphConfig"}),Object(c.mdx)("h3",{id:"data-objects"},"Data objects"),Object(c.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(c.mdx)(P.a,{mdxType:"DataObject1"}),Object(c.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(c.mdx)(y.a,{mdxType:"DataObject2"}),Object(c.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(c.mdx)(E.a,{mdxType:"DataObject3"})))}T.isMDXComponent=!0}}]);