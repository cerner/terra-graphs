(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1274:function(e,a,t){"use strict";var n=t(2),r=t(18);Object.defineProperty(a,"__esModule",{value:!0}),a.loadY2AxisLabelPopup=a.loadXAndYAxisLabelPopup=a.loadTrackPopup=a.loadTimelinePopup=a.loadTextLabelPopup=a.loadTaskPopup=a.loadPopup=a.loadPiePopup=a.loadDatelinePopup=a.loadBubblePopup=a.loadBarPopup=void 0;var o=n(t(43)),l=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=s(a);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(n,l,i):n[l]=e[l]}n.default=e,t&&t.set(e,n);return n}(t(1281)),i=n(t(1279)),p=n(t(1275));function s(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:a})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,a,t){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(a),n.append("g").classed("popup-text",!0).text(t)},h=function(e,a,t){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(a);for(var r=n.append("g").classed("section",!0),l=function(){var e=p[i],a=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var t=(0,o.default)(e,2),n=t[0],r=t[1],l=a.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},i=0,p=Object.values(t);i<p.length;i++)l()},f=function(e){var a=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function t(){l.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),a.removeEventListener("click",t),window.removeEventListener("resize",t)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};a.loadPopup=function(e,a,t,n){b();var r=f(e).append("g"),o=n.x,l=n.y,i=n.label,p=n.high,s=n.mid,h=n.low;o?(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(i.display),l)):(m(r,"X axis","".concat(p?c(p.x):s?c(s.x):h?c(h.x):"N/A")),p&&m(r,"High",c(p.y)),s&&m(r,"Mid",c(s.y)),h&&m(r,"Low",c(h.y)))};a.loadBubblePopup=function(e,a,t,n){b();var r=f(e).append("g"),o=n.x,l=n.y,i=n.label,p=n.weight;o&&(m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"year",l)),p&&m(r,"".concat(i.display),"".concat(p))};a.loadBarPopup=function(e,a,t,n){b();var r=f(e).append("g");n.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};a.loadTextLabelPopup=function(e,a,t){b();var n=f(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=a.shape,o=a.label,l=a.color;p.default.notEmpty(r)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||i.default.DEFAULT_COLOR).attr("id",r.path.id),o.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(o.display)),o.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};a.loadXAndYAxisLabelPopup=function(e){b(),f().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};a.loadY2AxisLabelPopup=function(e){var a,t;b(),(t=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(a)&&a(),l.select("#overlay").remove(),t.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};a.loadTrackPopup=function(e,a,t){b();var n=f(e).append("g"),r=t.tasks,o=t.activities,l=t.events,i=t.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),h(n,"Tasks",p)}if(o&&o.length>0){var s=[];o.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),h(n,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),h(n,"Events",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),h(n,"Actions",c)}};a.loadTaskPopup=function(e,a,t,n){b();var r=f(e).append("g"),o=n.label,l=n.display,i=n.y,p=n.startDate,s=n.endDate,c=n.percentage;o&&m(r,"Task Name",l),m(r,"Track",i),m(r,"Start Date",d(p)),m(r,"End Date",d(s)),c&&m(r,"Percentage",c)};a.loadDatelinePopup=function(e,a){b();var t=f(e).append("g"),n=a.label,r=a.value;n&&m(t,"Milestone",n.display),m(t,"Date",d(r))};a.loadTimelinePopup=function(e,a,t,n){b();var r=f(e).append("g"),o=n.x,l=(n.y,n.label),i=n.content;m(r,"X axis","".concat(u(o)?d(o):o)),m(r,"".concat(l.display),i)};a.loadPiePopup=function(e,a,t,n){b();var r=f(e).append("g"),o=n.label,l=n.value;m(r,o.display,l)}},1277:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=n(t(4));t(1278);var l={id:o.default.string.isRequired},i=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;a.default=p},1280:function(e,a,t){var n,r;void 0===(r="function"==typeof(n=function(){var e="details",a="summary";function t(e){if("summary"===e.target.nodeName.toLowerCase()){var a=e.target.parentNode;if(!a)return;a.getAttribute("open")?(a.open=!1,a.removeAttribute("open")):(a.open=!0,a.setAttribute("open","open"))}}function n(){var t=document.createElement(e);if(!("open"in t))return!1;t.innerHTML="<"+a+">a</"+a+">b",document.body.appendChild(t);var n=t.offsetHeight;t.open=!0;var r=n!=t.offsetHeight;return document.body.removeChild(t),r}function r(e,a){if(!document.getElementById(e)){var t=document.createElement("style");t.id=e,t.innerHTML=a,document.getElementsByTagName("head")[0].appendChild(t)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",t),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+a+") { display: none; }\nhtml.no-details "+e+" > "+a+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+a+':before { content: "▼"; }'))})?n.call(a,t,a,e):n)||(e.exports=r)},1282:function(e,a,t){"use strict";t.r(a)},1283:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.createGraphValuesWithSin=a.createGraphValuesWithCos=void 0;a.createGraphValuesWithSin=function(e){var a=e.length,t=e.initialX,n=e.xModifier,r=e.yModifier;return new Array(a).fill("").map((function(e,a){return{y:Math.sin(a)*r,x:t+a*n}}))};a.createGraphValuesWithCos=function(e){var a=e.length,t=e.initialX,n=e.xModifier,r=e.yModifier;return new Array(a).fill("").map((function(e,a){return{y:Math.cos(a)*r,x:t+a*n}}))}},1290:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!0,showHGrid:!0}};a.default=n},1292:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(31),r=t.n(n),o=t(55),l=t.n(o),i=(t(0),t(788)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,t=l()(e,p);return Object(i.mdx)(d,r()({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"const getLineDefaultConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 80,\n      upperLimit: 280,\n    },\n    y: {\n      show: true,\n      label: 'Line Set A',\n      lowerLimit: -18,\n      upperLimit: 18,\n    },\n    y2: {\n      show: false,\n      label: 'Line Set B',\n      lowerLimit: 0,\n      upperLimit: 250,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getLineDefaultConfig;\n\n\n")))}c.isMDXComponent=!0},1309:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1273)),o=t(1274),l=t(1283),i={key:"uid_1",label:{display:"Data Label 1"},color:r.default.helpers.COLORS.BLACK,onClick:o.loadPopup,values:(0,l.createGraphValuesWithSin)({length:20,initialX:85,xModifier:10,yModifier:Math.PI})};a.default=i},1316:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1273)),o=t(1274),l=t(1283),i={key:"uid_2",label:{display:"Data Label 2"},shape:r.default.helpers.SHAPES.DARK.TRIANGLE,color:r.default.helpers.COLORS.BLUE,style:{strokeDashArray:"2,2"},onClick:o.loadPopup,values:(0,l.createGraphValuesWithSin)({length:18,initialX:85,xModifier:10,yModifier:2*Math.PI}),legendOptions:{showLine:!0,showShape:!1,style:{strokeDashArray:"2,2"}},showShapes:!1};a.default=i},1368:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(31),r=t.n(n),o=t(55),l=t.n(o),i=(t(0),t(788)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,t=l()(e,p);return Object(i.mdx)(d,r()({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_2',\n  label: {\n    display: 'Data Label 2',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n  color: Carbon.helpers.COLORS.BLUE,\n  style: { strokeDashArray: '2,2' },\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 18, initialX: 85, xModifier: 10, yModifier: Math.PI * 2,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: false,\n    style: { strokeDashArray: '2,2' },\n  },\n  showShapes: false,\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1369:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1273)),o=t(1274),l={key:"uid_4",label:{display:"Data Label 4"},shape:r.default.helpers.SHAPES.DARK.CROSS,color:r.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadPopup,values:new Array(15).fill("").map((function(e,a){return{y:Math.sin(a)*Math.PI*4,x:85+10*a,region:{start:Math.sin(a)*Math.PI*4-Math.PI,end:Math.sin(a)*Math.PI*4+Math.PI}}}))};a.default=l},1418:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(31),r=t.n(n),o=t(55),l=t.n(o),i=(t(0),t(788)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,t=l()(e,p);return Object(i.mdx)(d,r()({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithSin } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1',\n  },\n  color: Carbon.helpers.COLORS.BLACK,\n  onClick: loadPopup,\n  values: createGraphValuesWithSin({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI,\n  }),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1540:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:80,upperLimit:280},y:{show:!0,label:"Line Set A",lowerLimit:-18,upperLimit:18},y2:{show:!1,label:"Line Set B",lowerLimit:0,upperLimit:250}},showLabel:!0,showLegend:!0,showShapes:!1,showVGrid:!0,showHGrid:!0}};a.default=n},1541:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(1273)),o=t(1274),l=t(1283),i={key:"uid_5",label:{display:"Data Label 5"},shape:r.default.helpers.SHAPES.DARK.SQUARE,color:r.default.helpers.COLORS.ORANGE,onClick:o.loadPopup,values:(0,l.createGraphValuesWithCos)({length:20,initialX:85,xModifier:10,yModifier:5*Math.PI}),legendOptions:{showLine:!0,showShape:!1},showShapes:!1};a.default=i},1542:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(31),r=t.n(n),o=t(55),l=t.n(o),i=(t(0),t(788)),p=["components"],s={},d="wrapper";function c(e){var a=e.components,t=l()(e,p);return Object(i.mdx)(d,r()({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'uid_4',\n  label: {\n    display: 'Data Label 4',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.CROSS,\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadPopup,\n  values: new Array(15).fill('').map((_, i) => ({\n    y: Math.sin(i) * Math.PI * 4,\n    x: 85 + i * 10,\n    region: {\n      start: Math.sin(i) * Math.PI * 4 - Math.PI,\n      end: Math.sin(i) * Math.PI * 4 + Math.PI,\n    },\n  })),\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1777:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=n(t(1273)),l=n(t(1275));t(1276),t(1282);var i=n(t(1277)),p=n(t(1540)),s=n(t(1316)),d=l.default.deepClone((0,p.default)("#shapesHidden")),c=l.default.deepClone(s.default),u=function(){return r.default.useEffect((function(){o.default.api.graph(d).loadContent(o.default.api.line(c))}),[]),r.default.createElement(i.default,{id:"shapesHidden"})};a.default=u},1778:function(e,a,t){"use strict";var n=t(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=n(t(1273)),l=n(t(1275));t(1276),t(1282);var i=n(t(1277)),p=n(t(1290)),s=n(t(1309)),d=n(t(1369)),c=n(t(1541)),u=l.default.deepClone((0,p.default)("#showOrHideShapesPerDataset")),m=[l.default.deepClone(s.default),l.default.deepClone(d.default),l.default.deepClone(c.default)],h=function(){return r.default.useEffect((function(){var e=o.default.api.graph(u);m.forEach((function(a){e.loadContent(o.default.api.line(a))}))}),[]),r.default.createElement(i.default,{id:"showOrHideShapesPerDataset"})};a.default=h},1996:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(31),r=t.n(n),o=t(55),l=t.n(o),i=t(0),p=t.n(i),s=t(788),d=t(1777),c=t.n(d),u=["components"],m={};function h(e){var a=e.components,t=l()(e,u);return Object(s.mdx)("wrapper",r()({},m,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getlineDefaultNoShapesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefaultNoShapes';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getlineDefaultNoShapesConfig('#shapesHidden'));\nconst dataset = utils.deepClone(exampleData);\n\nconst ShapesHiddenLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.line(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"shapesHidden\" />\n  );\n};\n\nexport default ShapesHiddenLineExample;\n\n")))}h.isMDXComponent=!0;var f=t(1284),b=t.n(f),g=t(1285),x=function(e){var a=e.title,t=e.description,n=e.isExpanded;return p.a.createElement(b.a,{title:a||"Shapes Hidden",description:t,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(g.a,null),exampleSrc:p.a.createElement(h,null),isExpanded:n})},y=t(1292),v=t(1368),O=t(1778),j=t.n(O),L=["components"],C={};function w(e){var a=e.components,t=l()(e,L);return Object(s.mdx)("wrapper",r()({},C,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getLineDefaultConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset5noShapes';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getLineDefaultConfig('#showOrHideShapesPerDataset'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nconst ShowOrHideShapesPerDatasetLineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.line(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"showOrHideShapesPerDataset\" />\n  );\n};\n\nexport default ShowOrHideShapesPerDatasetLineExample;\n\n\n")))}w.isMDXComponent=!0;var D=function(e){var a=e.title,t=e.description,n=e.isExpanded;return p.a.createElement(b.a,{title:a||"Show Or Hide Shapes Per Dataset",description:t,example:p.a.createElement(j.a,null),exampleCssSrc:p.a.createElement(g.a,null),exampleSrc:p.a.createElement(w,null),isExpanded:n})},S=t(1418),P=t(1542),E=["components"],M={},A="wrapper";function G(e){var a=e.components,t=l()(e,E);return Object(s.mdx)(A,r()({},M,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\nimport { createGraphValuesWithCos } from '../createGraphValues';\n\nconst data = {\n  key: 'uid_5',\n  label: {\n    display: 'Data Label 5',\n  },\n  shape: Carbon.helpers.SHAPES.DARK.SQUARE,\n  color: Carbon.helpers.COLORS.ORANGE,\n  onClick: loadPopup,\n  values: createGraphValuesWithCos({\n    length: 20, initialX: 85, xModifier: 10, yModifier: Math.PI * 5,\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: false,\n  },\n  showShapes: false,\n};\n\nexport default data;\n\n")))}G.isMDXComponent=!0;var k=["components"];t(1280);var T={},N="wrapper";function H(e){var a=e.components,t=l()(e,k);return Object(s.mdx)(N,r()({},T,t,{components:a,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"shapes"},"Shapes"),Object(s.mdx)("p",null,"Shapes contains examples like shapes hidden in line graph and show or hide shapes per line graph dataset."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(x,{mdxType:"ShapesHiddenLineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data used for shapes hidden")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"ShapesHiddenGraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(v.a,{mdxType:"ShapesHiddenDataObject"})),Object(s.mdx)("br",null),Object(s.mdx)("br",null),Object(s.mdx)("br",null),Object(s.mdx)(D,{mdxType:"ShowOrHideShapesLineGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data used for show or hide shapes per dataset")),Object(s.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"ShowOrHideShapesGraphConfig"}),Object(s.mdx)("h3",{id:"data-object-1"},"Data object"),Object(s.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(s.mdx)(S.a,{mdxType:"ShowOrHideShapesDataObject1"}),Object(s.mdx)("h4",{id:"dataset-4"},"Dataset 4"),Object(s.mdx)(P.a,{mdxType:"ShowOrHideShapesDataObject4"}),Object(s.mdx)("h4",{id:"dataset-5"},"Dataset 5"),Object(s.mdx)(G,{mdxType:"ShowOrHideShapesDataObject5"})))}H.isMDXComponent=!0}}]);