(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(43)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(1282)),l=a(n(1279)),p=a(n(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),i=function(){var e=p[l],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],i=t.append("g").classed("popup-item",!0);i.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),i.append("g").classed("popup-text",!0).text(o)}))},l=0,p=Object.values(n);l<p.length;l++)i()},b=function(e){var t=document.querySelector("#tooltip");return i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){i.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),i.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),i.select("#tooltip").style("left","".concat(i.event.pageX+5,"px")).style("top","".concat(i.event.pageY+5,"px"))},h=function(){i.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),i.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){h();var o=b(e).append("g"),r=a.x,i=a.y,l=a.label,p=a.high,s=a.mid,f=a.low;r?(m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"".concat(l.display),i)):(m(o,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(o,"High",c(p.y)),s&&m(o,"Mid",c(s.y)),f&&m(o,"Low",c(f.y)))};t.loadBubblePopup=function(e,t,n,a){h();var o=b(e).append("g"),r=a.x,i=a.y,l=a.label,p=a.weight;r&&(m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"year",i)),p&&m(o,"".concat(l.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){h();var o=b(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){h();var a=b(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,i=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||l.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(i,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(l.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){h(),b().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;h(),(n=document.querySelector("#tooltip"),i.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){i.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),i.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),i.select("#tooltip").style("left","".concat(i.event.pageX-250,"px")).style("top","".concat(i.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){h();var a=b(e).append("g"),o=n.tasks,r=n.activities,i=n.events,l=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(i&&i.length>0){var d=[];i.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(l&&l.length>0){var c=[];l.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}};t.loadTaskPopup=function(e,t,n,a){h();var o=b(e).append("g"),r=a.label,i=a.display,l=a.y,p=a.startDate,s=a.endDate,c=a.percentage;r&&m(o,"Task Name",i),m(o,"Track",l),m(o,"Start Date",d(p)),m(o,"End Date",d(s)),c&&m(o,"Percentage",c)};t.loadDatelinePopup=function(e,t){h();var n=b(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",d(o))};t.loadTimelinePopup=function(e,t,n,a){h();var o=b(e).append("g"),r=a.x,i=(a.y,a.label),l=a.content;m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"".concat(i.display),l)};t.loadPiePopup=function(e,t,n,a){h();var o=b(e).append("g"),r=a.label,i=a.value;m(o,r.display,i)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4));n(1278);var i={id:r.default.string.isRequired},l=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};l.propTypes=i;var p=l;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1281:function(e,t,n){"use strict";n.r(t)},1288:function(e,t,n){"use strict";n.r(t)},1314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){return{bindTo:e,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:300},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:20},y2:{show:!0,label:"Combination Set B",lowerLimit:40,upperLimit:180}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=a},1363:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),o=n.n(a),r=n(55),i=n.n(r),l=(n(0),n(788)),p=["components"],s={},d="wrapper";function c(e){var t=e.components,n=i()(e,p);return Object(l.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",{parentName:"pre",className:"language-js"},"const getlineAndPairdResultConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 300,\n    },\n    y: {\n      show: true,\n      label: 'Combination Set A',\n      lowerLimit: 0,\n      upperLimit: 20,\n    },\n    y2: {\n      show: true,\n      label: 'Combination Set B',\n      lowerLimit: 40,\n      upperLimit: 180,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getlineAndPairdResultConfig;\n\n")))}c.isMDXComponent=!0},1487:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),i={key:"identical_region_line_dataset",graphType:"Line",label:{display:"Line Data Label"},shape:o.default.helpers.SHAPES.DARK.RHOMBUS,color:o.default.helpers.COLORS.BLUE,onClick:r.loadPopup,values:new Array(50).fill("").map((function(e,t){return{y:5*Math.sin(t)+10,x:10+5*t}})),regions:[{axis:"y",start:120,end:180,color:"#c8cacb"}]};t.default=i},1488:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),i={key:"identical_region_paired_result_dataset",graphType:"Paired Result",label:{high:{display:"Paired Result High"},mid:{display:"Paired Result Median"},low:{display:"Paired Result Low"}},yAxis:"y",shape:{high:o.default.helpers.SHAPES.DARK.TEAR_ALT,mid:o.default.helpers.SHAPES.DARK.RHOMBUS,low:o.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:o.default.helpers.COLORS.BLACK,mid:o.default.helpers.COLORS.BLACK,low:o.default.helpers.COLORS.BLACK},onClick:r.loadPopup,values:[{high:{x:45,y:200},mid:{x:45,y:146},low:{x:45,y:75}},{high:{x:160,y:110},mid:{x:160,y:70},low:{x:160,y:30}},{high:{x:220,y:110},mid:{x:220,y:70},low:{x:220,y:30}}],regions:{high:[{axis:"y",start:120,end:180,color:"#c8cacb"}],mid:[{axis:"y",start:120,end:180,color:"#c8cacb"}],low:[{axis:"y",start:120,end:180,color:"#c8cacb"}]}};t.default=i},1719:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1273)),i=a(n(1275));n(1276),n(1281),n(1288);var l=a(n(1277)),p=a(n(1314)),s=a(n(1487)),d=a(n(1488)),c=i.default.deepClone((0,p.default)("#lineWithPairedResultRegion")),u=[i.default.deepClone(s.default),i.default.deepClone(d.default)],m=function(){return o.default.useEffect((function(){var e=r.default.api.graph(c);e.loadContent(r.default.api.line(u[0])),e.loadContent(r.default.api.pairedResult(u[1]))}),[]),o.default.createElement(l.default,{id:"lineWithPairedResultRegion"})};t.default=m},1994:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(31),o=n.n(a),r=n(55),i=n.n(r),l=n(0),p=n.n(l),s=n(788),d=n(1719),c=n.n(d),u=["components"],m={};function f(e){var t=e.components,n=i()(e,u);return Object(s.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport lineAndPairedResultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset';\nimport pairedResultDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(lineAndPairedResultConfig('#lineWithPairedResultRegion'));\nconst dataset = [\n  utils.deepClone(lineDataset),\n  utils.deepClone(pairedResultDataset),\n];\n\nconst LineWithPairedResultRegionCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset[0]));\n    graph.loadContent(Carbon.api.pairedResult(dataset[1]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithPairedResultRegion\" />\n  );\n};\n\nexport default LineWithPairedResultRegionCombinationExample;\n\n")))}f.isMDXComponent=!0;var b=n(1284),h=n.n(b),g=n(1285),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(h.a,{title:t||"Dataset Region Identical",description:n,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(g.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},x=n(1363),v=["components"],C={},O="wrapper";function j(e){var t=e.components,n=i()(e,v);return Object(s.mdx)(O,o()({},C,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'identical_region_line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  values: new Array(50).fill('').map((_, i) => ({\n    y: Math.sin(i) * 5 + 10,\n    x: 10 + i * 5,\n  })),\n  regions: [\n    {\n      axis: 'y',\n      start: 120,\n      end: 180,\n      color: '#c8cacb',\n    },\n  ],\n};\n\nexport default data;\n\n")))}j.isMDXComponent=!0;var P=["components"],w={},L="wrapper";function R(e){var t=e.components,n=i()(e,P);return Object(s.mdx)(L,o()({},w,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'identical_region_paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High',\n    },\n    mid: {\n      display: 'Paired Result Median',\n    },\n    low: {\n      display: 'Paired Result Low',\n    },\n  },\n  yAxis: 'y',\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLACK,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: 45,\n        y: 200,\n      },\n      mid: {\n        x: 45,\n        y: 146,\n      },\n      low: {\n        x: 45,\n        y: 75,\n      },\n    },\n    {\n      high: {\n        x: 160,\n        y: 110,\n      },\n      mid: {\n        x: 160,\n        y: 70,\n      },\n      low: {\n        x: 160,\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: 220,\n        y: 110,\n      },\n      mid: {\n        x: 220,\n        y: 70,\n      },\n      low: {\n        x: 220,\n        y: 30,\n      },\n    },\n  ],\n  regions: {\n    high: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n    mid: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n    low: [\n      {\n        axis: 'y',\n        start: 120,\n        end: 180,\n        color: '#c8cacb',\n      },\n    ],\n  },\n};\n\nexport default data;\n\n")))}R.isMDXComponent=!0;var D=["components"];n(1280);var A={},E="wrapper";function S(e){var t=e.components,n=i()(e,D);return Object(s.mdx)(E,o()({},A,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"dataset-region-identical"},"Dataset Region Identical"),Object(s.mdx)("p",null,"This is a combination graph associated with identical regions."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(y,{mdxType:"CombinationGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(x.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(s.mdx)(j,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"paired-result-dataset"},"Paired Result Dataset"),Object(s.mdx)(R,{mdxType:"DataObject2"})))}S.isMDXComponent=!0}}]);