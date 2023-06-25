(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1298:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var r=a!=n.offsetHeight;return document.body.removeChild(n),r}function r(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=r)},1589:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,dimension:{height:300},showLegend:!0}};t.default=a},1819:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(1287)),d=a(n(1288));n(1290),n(1366);var m=a(n(1292)),i=a(n(1589)),p=a(n(1367)),c=a(n(1368)),o=a(n(1369)),b=d.default.deepClone((0,i.default)("#simplePie")),u=[d.default.deepClone(p.default),d.default.deepClone(c.default),d.default.deepClone(o.default)],s=function(){return r.default.useEffect((function(){var e=l.default.api.pie(b);u.forEach((function(t){e.loadContent(t)}))}),[]),r.default.createElement(m.default,{id:"simplePie"})};t.default=s},2051:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(31),r=n.n(a),l=n(56),d=n.n(l),m=n(0),i=n.n(m),p=n(795),c=n(1819),o=n.n(c),b=["components"],u={};function s(e){var t=e.components,n=d()(e,b);return Object(p.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Pie/PieChart.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPieConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Pie/simplePieConfig';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset2';\nimport dataset3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Pie/simplePieDataset3';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getPieConfig('#simplePie'));\nconst dataset = [\n  utils.deepClone(dataset1),\n  utils.deepClone(dataset2),\n  utils.deepClone(dataset3),\n];\n\nconst SimplePieExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.pie(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(data);\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePie\" />\n  );\n};\n\nexport default SimplePieExample;\n\n")))}s.isMDXComponent=!0;var x=n(1295),j=n.n(x),O=n(1296),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.a.createElement(j.a,{title:t||"Simple Pie",description:n,example:i.a.createElement(o.a,null),exampleCssSrc:i.a.createElement(O.a,null),exampleSrc:i.a.createElement(s,null),isExpanded:a})},N=["components"],h={},f="wrapper";function C(e){var t=e.components,n=d()(e,N);return Object(p.mdx)(f,r()({},h,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const getPieConfig = (id) => ({\n  bindTo: id,\n  dimension: {\n    height: 300,\n  },\n  showLegend: true,\n});\n\nexport default getPieConfig;\n\n")))}C.isMDXComponent=!0;var y=n(1590),v=n(1591),P=n(1592),D=["components"];n(1298);var w={},T="wrapper";function E(e){var t=e.components,n=d()(e,D);return Object(p.mdx)(T,r()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("h1",{id:"simple-pie"},"Simple Pie"),Object(p.mdx)("p",null,"This is a simple Pie chart."),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#usage"},"Usage")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#configuration-structure"},"Config Structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#configuration-properties"},"Config properties"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dimension"},"dimension")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#legendpadding"},"legendPadding")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-structure"},"Dataset Structure")),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#dataset-properties"},"Dataset Properties"),Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#label"},"label")))),Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("a",{parentName:"li",href:"#examples"},"Example"))),Object(p.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"Install with ",Object(p.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(p.mdx)("ul",{parentName:"li"},Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(p.mdx)("h2",{id:"usage"},"Usage"),Object(p.mdx)("p",null,"An instance of a pie graph can be accessed though the ",Object(p.mdx)("inlineCode",{parentName:"p"},"Carbon.api.pie()")," function.\nUnlike most of the other graphs, the pie api does not need an instance of ",Object(p.mdx)("inlineCode",{parentName:"p"},"Carbon.api.graph"),".\nInstead, the graph configuration is directly passed as a parameter to the timeline instance,\nwith the dataset object also directly passed to the ",Object(p.mdx)("inlineCode",{parentName:"p"},"loadContent")," function.\nTherefore, the pie graph can not be combined with other graphs."),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n\nvar pieGraph = Carbon.api.pie(/* config object */);\npieGraph.loadContent(/* dataset */);\n\n// Multiple datasets can be added:\npieGraph.loadContent(/* dataset1 */);\npieGraph.loadContent(/* dataset2 */);\n")),Object(p.mdx)("h2",{id:"configuration-structure"},"Configuration Structure"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const pieConfig = {\n    axis: {\n        x: {\n            label: <string>,\n            lowerLimit: <number> or <Date>,\n            upperLimit: <number or <Date>\n        }\n    },\n    bindTo: <string>,\n    bindLegendTo: <string>,\n    dimension: {\n      height: <number>\n    },\n    legendPadding: {\n      top: <number>,\n      bottom: <number>,\n      left: <number>,\n      right: <number>\n    },\n    removeContainerPadding: <bool>,\n    showLegend: <bool>,\n}\n")),Object(p.mdx)("h2",{id:"configuration-properties"},"Configuration Properties"),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"bindTo"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"DOM ID to bind the graph container to.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"data"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#dataset-structure"},"Dataset-structure"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"bindLegendTo"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"null"),Object(p.mdx)("td",{parentName:"tr",align:null},"ID of custom container to bind legend to (Example: ",Object(p.mdx)("inlineCode",{parentName:"td"},'"#legendContainer"'),").")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"dimension"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"{ }")),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#dimension"},"dimension"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"legendPadding"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"{ top: 4, bottom: 4, left: 8, right: 8 }")),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#legendpadding"},"legendPadding"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"removeContainerPadding"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"false")),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to remove top and bottom padding of the container for the graph.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"showLegend"),Object(p.mdx)("td",{parentName:"tr",align:null},"boolean"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"true")),Object(p.mdx)("td",{parentName:"tr",align:null},"Toggle to show graph legend.")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"dimension"},Object(p.mdx)("inlineCode",{parentName:"h3"},"dimension")),Object(p.mdx)("strong",{parentName:"li"},"type:")," object")),Object(p.mdx)("p",null,"Timeline is marked only on ",Object(p.mdx)("inlineCode",{parentName:"p"},"X Axis"),", there is no other axis supplied. Axis is set to ",Object(p.mdx)("inlineCode",{parentName:"p"},"show")," by default."),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"height"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"Sets the size of pie chart.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"upperLimit"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"Upper bound for X axis. This is inclusive.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"label"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"Axis label value.")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"legendpadding"},Object(p.mdx)("inlineCode",{parentName:"h3"},"legendPadding")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," object"),Object(p.mdx)("p",{parentName:"li"},"  Sets the legend padding and removes the carbon default margin of ",Object(p.mdx)("inlineCode",{parentName:"p"},"8px")," around legend."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre",className:"language-json"},"  legendPadding: {\n    top: <number>,\n    bottom: <number>,\n    left: <number>,\n    right: <number>\n  }\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"top"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"4")),Object(p.mdx)("td",{parentName:"tr",align:null},"Top padding of legend container.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"bottom"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"4")),Object(p.mdx)("td",{parentName:"tr",align:null},"Bottom padding of legend container.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"left"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"8")),Object(p.mdx)("td",{parentName:"tr",align:null},"Left padding of legend container.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"right"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"8")),Object(p.mdx)("td",{parentName:"tr",align:null},"Right padding of legend container.")))))),Object(p.mdx)("h2",{id:"dataset-structure"},"Dataset Structure"),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const dataset = {\n  key: <string>,\n  value: <number>,\n  color: <hex value as string>,\n  label: {\n    display: <string>,\n  },\n  onClick: <function>\n}\n")),Object(p.mdx)("h3",{id:"dataset-properties"},"Dataset Properties"),Object(p.mdx)("table",null,Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"key"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"A unique ",Object(p.mdx)("inlineCode",{parentName:"td"},"id")," to identify the dataset. Adding two datasets with the same ",Object(p.mdx)("inlineCode",{parentName:"td"},"key")," will result in an error.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"value"),Object(p.mdx)("td",{parentName:"tr",align:null},"number"),Object(p.mdx)("td",{parentName:"tr",align:null},"yes"),Object(p.mdx)("td",{parentName:"tr",align:null},"-"),Object(p.mdx)("td",{parentName:"tr",align:null},"Value for the slice.")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"color"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"COLORS.BLUE")),Object(p.mdx)("td",{parentName:"tr",align:null},"Color for the data points. Can be a hex value (",Object(p.mdx)("inlineCode",{parentName:"td"},"#ffffff"),") or a constant from ",Object(p.mdx)("a",{parentName:"td",href:"../core-configuration/documentation/Colors"},"Colors"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"label"),Object(p.mdx)("td",{parentName:"tr",align:null},"object"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},"{}"),Object(p.mdx)("td",{parentName:"tr",align:null},"See ",Object(p.mdx)("a",{parentName:"td",href:"#label"},"label"),".")),Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"onClick"),Object(p.mdx)("td",{parentName:"tr",align:null},"function"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"Function to execute upon clicking a datapoint, such as to display a popup.")))),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},Object(p.mdx)("h3",{parentName:"li",id:"label"},Object(p.mdx)("inlineCode",{parentName:"h3"},"label")),Object(p.mdx)("p",{parentName:"li"},Object(p.mdx)("strong",{parentName:"p"},"type:")," object\n",Object(p.mdx)("strong",{parentName:"p"},"default value:")," ",Object(p.mdx)("inlineCode",{parentName:"p"},"{}")),Object(p.mdx)("p",{parentName:"li"},"  Label for the dataset in the legend. If it is not provided then it will not be shown in the legend."),Object(p.mdx)("pre",{parentName:"li"},Object(p.mdx)("code",{parentName:"pre"},"```json\n  label: {\n    display: <string>\n  }\n```\n")),Object(p.mdx)("table",{parentName:"li"},Object(p.mdx)("thead",{parentName:"table"},Object(p.mdx)("tr",{parentName:"thead"},Object(p.mdx)("th",{parentName:"tr",align:null},"Property Name"),Object(p.mdx)("th",{parentName:"tr",align:null},"Type"),Object(p.mdx)("th",{parentName:"tr",align:null},"Required"),Object(p.mdx)("th",{parentName:"tr",align:null},"Default"),Object(p.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(p.mdx)("tbody",{parentName:"table"},Object(p.mdx)("tr",{parentName:"tbody"},Object(p.mdx)("td",{parentName:"tr",align:null},"display"),Object(p.mdx)("td",{parentName:"tr",align:null},"string"),Object(p.mdx)("td",{parentName:"tr",align:null},"no"),Object(p.mdx)("td",{parentName:"tr",align:null},Object(p.mdx)("inlineCode",{parentName:"td"},"undefined")),Object(p.mdx)("td",{parentName:"tr",align:null},"Text to display as the label for the dataset.")))))),Object(p.mdx)("h2",{id:"examples"},"Examples"),Object(p.mdx)(g,{mdxType:"PieChart"}),Object(p.mdx)("details",null,Object(p.mdx)("summary",{style:{fontSize:24}},Object(p.mdx)("b",null,"Data")),Object(p.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(p.mdx)(C,{mdxType:"GraphConfig"}),Object(p.mdx)("h3",{id:"data-object"},"Data object"),Object(p.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(p.mdx)(y.a,{mdxType:"DataObject1"}),Object(p.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(p.mdx)(v.a,{mdxType:"DataObject2"}),Object(p.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(p.mdx)(P.a,{mdxType:"DataObject3"})))}E.isMDXComponent=!0}}]);