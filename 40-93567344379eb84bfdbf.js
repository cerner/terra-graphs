(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1274:function(e,t,a){"use strict";var n=a(2),o=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var l=n(a(43)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var p=l?Object.getOwnPropertyDescriptor(e,r):null;p&&(p.get||p.set)?Object.defineProperty(n,r,p):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(1282)),p=n(a(1279)),i=n(a(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},b=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var o=n.append("g").classed("section",!0),r=function(){var e=i[p],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,l.default)(e,2),n=a[0],o=a[1],r=t.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(o)}))},p=0,i=Object.values(a);p<i.length;p++)r()},f=function(e){var t=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){r.select(t).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(e)&&e(),r.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},h=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){h();var o=f(e).append("g"),l=n.x,r=n.y,p=n.label,i=n.high,s=n.mid,m=n.low;l?(b(o,"X axis","".concat(u(l)?c(l):l)),b(o,"".concat(p.display),r)):(b(o,"X axis","".concat(i?d(i.x):s?d(s.x):m?d(m.x):"N/A")),i&&b(o,"High",d(i.y)),s&&b(o,"Mid",d(s.y)),m&&b(o,"Low",d(m.y)))};t.loadBubblePopup=function(e,t,a,n){h();var o=f(e).append("g"),l=n.x,r=n.y,p=n.label,i=n.weight;l&&(b(o,"X axis","".concat(u(l)?c(l):l)),b(o,"year",r)),i&&b(o,"".concat(p.display),"".concat(i))};t.loadBarPopup=function(e,t,a,n){h();var o=f(e).append("g");n.forEach((function(e){return b(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){h();var n=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,l=t.label,r=t.color;i.default.notEmpty(o)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||p.default.DEFAULT_COLOR).attr("id",o.path.id),l.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(l.display)),l.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(l.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){h(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;h(),(a=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(a).attr("style","display:none;").selectAll("g").remove(),i.default.isFunction(t)&&t(),r.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){h();var n=f(e).append("g"),o=a.tasks,l=a.activities,r=a.events,p=a.actions;if(o&&o.length>0){var i=[];i.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(n,"Tasks",i)}if(l&&l.length>0){var s=[];l.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),m(n,"Activities",s)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),m(n,"Events",c)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),m(n,"Actions",d)}};t.loadTaskPopup=function(e,t,a,n){h();var o=f(e).append("g"),l=n.label,r=n.display,p=n.y,i=n.startDate,s=n.endDate,d=n.percentage;l&&b(o,"Task Name",r),b(o,"Track",p),b(o,"Start Date",c(i)),b(o,"End Date",c(s)),d&&b(o,"Percentage",d)};t.loadDatelinePopup=function(e,t){h();var a=f(e).append("g"),n=t.label,o=t.value;n&&b(a,"Milestone",n.display),b(a,"Date",c(o))};t.loadTimelinePopup=function(e,t,a,n){h();var o=f(e).append("g"),l=n.x,r=(n.y,n.label),p=n.content;b(o,"X axis","".concat(u(l)?c(l):l)),b(o,"".concat(r.display),p)};t.loadPiePopup=function(e,t,a,n){h();var o=f(e).append("g"),l=n.label,r=n.value;b(o,l.display,r)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(4));a(1278);var r={id:l.default.string.isRequired},p=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=r;var i=p;t.default=i},1280:function(e,t,a){var n,o;void 0===(o="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var o=n!=a.offsetHeight;return document.body.removeChild(a),o}function o(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=o)},1281:function(e,t,a){"use strict";a.r(t)},1331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Combination Set A",lowerLimit:0,upperLimit:35},y2:{show:!0,label:"Combination Set B",lowerLimit:0,upperLimit:30,padDomain:!1}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};t.default=n},1332:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=a(1274),r={key:"line_dataset",label:{display:"Line Data Label"},graphType:"Line",color:o.default.helpers.COLORS.BLACK,onClick:l.loadPopup,values:new Array(7).fill("").map((function(e,t){return{y:Math.sin(t)*Math.PI+20,x:t+.5}}))};t.default=r},1361:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=a(1274),r={key:"bubble_dataset_1",label:{display:"Bubble Data Label 1"},graphType:"BubbleMultipleDataset",color:o.default.helpers.COLORS.GREEN,onClick:l.loadPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}]};t.default=r},1406:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=r()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const getCombinationGraphConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 8,\n      ticks: {\n        values: [1, 2, 3, 4, 5, 6, 7],\n        format: '.0f',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Combination Set A',\n      lowerLimit: 0,\n      upperLimit: 35,\n    },\n    y2: {\n      show: true,\n      label: 'Combination Set B',\n      lowerLimit: 0,\n      upperLimit: 30,\n      padDomain: false,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getCombinationGraphConfig;\n\n\n")))}d.isMDXComponent=!0},1407:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=r()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'line_dataset',\n  label: {\n    display: 'Line Data Label',\n  },\n  graphType: 'Line',\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: new Array(7).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI + 20,\n    x: i + 0.5,\n  })),\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1469:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(1273)),l=a(1274),r={key:"bubble_dataset_2",label:{display:"Bubble Data Label 2"},graphType:"BubbleMultipleDataset",color:o.default.helpers.COLORS.BLUE,onClick:l.loadPopup,weight:{min:40,max:450},values:[{x:1,y:25,weight:150},{x:2,y:15,weight:300},{x:3,y:2,weight:200},{x:4,y:28,weight:400},{x:5,y:23,weight:450}]};t.default=r},1470:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),p=(a(0),a(788)),i=["components"],s={},c="wrapper";function d(e){var t=e.components,a=r()(e,i);return Object(p.mdx)(c,o()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'bubble_dataset_1',\n  label: {\n    display: 'Bubble Data Label 1',\n  },\n  graphType: 'BubbleMultipleDataset',\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1714:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),l=n(a(1273)),r=n(a(1275));a(1276),a(1281);var p=n(a(1277)),i=n(a(1331)),s=n(a(1332)),c=n(a(1361)),d=n(a(1469)),u=r.default.deepClone((0,i.default)("#lineWithMultipleBubbleData")),b=[r.default.deepClone(c.default),r.default.deepClone(d.default),r.default.deepClone(s.default)],m=function(){return o.default.useEffect((function(){var e=l.default.api.graph(u);e.loadContent(l.default.api.bubbleMultipleDataset(b[0])),e.loadContent(l.default.api.bubbleMultipleDataset(b[1])),e.loadContent(l.default.api.line(b[2]))}),[]),o.default.createElement(p.default,{id:"lineWithMultipleBubbleData"})};t.default=m},2015:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var n=a(31),o=a.n(n),l=a(55),r=a.n(l),p=a(0),i=a.n(p),s=a(788),c=a(1714),d=a.n(c),u=["components"],b={};function m(e){var t=e.components,a=r()(e,u);return Object(s.mdx)("wrapper",o()({},b,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getCombinationGraphConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/combinationDefault';\nimport lineDataset from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset1';\nimport multipleBubbleDataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset1';\nimport multipleBubbleDataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/bubbleDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getCombinationGraphConfig('#lineWithMultipleBubbleData'));\nconst dataset = [\n  utils.deepClone(multipleBubbleDataset1),\n  utils.deepClone(multipleBubbleDataset2),\n  utils.deepClone(lineDataset),\n];\n\nconst LineWithMultipleBubbleDataCombinationExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[0]));\n    graph.loadContent(Carbon.api.bubbleMultipleDataset(dataset[1]));\n    graph.loadContent(Carbon.api.line(dataset[2]));\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"lineWithMultipleBubbleData\" />\n  );\n};\n\nexport default LineWithMultipleBubbleDataCombinationExample;\n\n")))}m.isMDXComponent=!0;var f=a(1284),h=a.n(f),g=a(1285),y=function(e){var t=e.title,a=e.description,n=e.isExpanded;return i.a.createElement(h.a,{title:t||"Line With Multiple Bubble Data",description:a,example:i.a.createElement(d.a,null),exampleCssSrc:i.a.createElement(g.a,null),exampleSrc:i.a.createElement(m,null),isExpanded:n})},x=a(1406),v=a(1407),j=a(1470),C=["components"],O={},D="wrapper";function w(e){var t=e.components,a=r()(e,C);return Object(s.mdx)(D,o()({},O,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'bubble_dataset_2',\n  label: {\n    display: 'Bubble Data Label 2',\n  },\n  graphType: 'BubbleMultipleDataset',\n  color: Carbon.helpers.COLORS.BLUE,\n  onClick: loadPopup,\n  weight: {\n    min: 40,\n    max: 450,\n  },\n  values: [\n    {\n      x: 1,\n      y: 25,\n      weight: 150,\n    },\n    {\n      x: 2,\n      y: 15,\n      weight: 300,\n    },\n    {\n      x: 3,\n      y: 2,\n      weight: 200,\n    },\n    {\n      x: 4,\n      y: 28,\n      weight: 400,\n    },\n    {\n      x: 5,\n      y: 23,\n      weight: 450,\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var L=["components"];a(1280);var P={},E="wrapper";function M(e){var t=e.components,a=r()(e,L);return Object(s.mdx)(E,o()({},P,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"line-with-multiple-bubble-dataset"},"Line With Multiple Bubble dataset"),Object(s.mdx)("p",null,"This is a simple Line Graph combined with multiple Bubble dataset."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(y,{mdxType:"CombinationGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(x.a,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)("h4",{id:"line-dataset"},"Line Dataset"),Object(s.mdx)(v.a,{mdxType:"DataObject1"}),Object(s.mdx)("h4",{id:"bubble-dataset-1"},"Bubble Dataset 1"),Object(s.mdx)(j.a,{mdxType:"DataObject2"}),Object(s.mdx)("h4",{id:"bubble-dataset-2"},"Bubble Dataset 2"),Object(s.mdx)(w,{mdxType:"DataObject3"})))}M.isMDXComponent=!0}}]);