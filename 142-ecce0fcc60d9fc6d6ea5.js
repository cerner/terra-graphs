(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{1274:function(e,t,n){"use strict";var a=n(2),o=n(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var r=a(n(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(1282)),i=a(n(1279)),p=a(n(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t),a.append("g").classed("popup-text",!0).text(n)},f=function(e,t,n){var a=e.append("g").classed("popup-item",!0);a.append("label").classed("popup-label",!0).text(t);for(var o=a.append("g").classed("section",!0),l=function(){var e=p[i],t=o.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,r.default)(e,2),a=n[0],o=n[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(a.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(o)}))},i=0,p=Object.values(n);i<p.length;i++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",n),window.removeEventListener("resize",n)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,l=a.y,i=a.label,p=a.high,s=a.mid,f=a.low;r?(m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"".concat(i.display),l)):(m(o,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(o,"High",c(p.y)),s&&m(o,"Mid",c(s.y)),f&&m(o,"Low",c(f.y)))};t.loadBubblePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,l=a.y,i=a.label,p=a.weight;r&&(m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"year",l)),p&&m(o,"".concat(i.display),"".concat(p))};t.loadBarPopup=function(e,t,n,a){b();var o=h(e).append("g");a.forEach((function(e){return m(o,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,n){b();var a=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),o=t.shape,r=t.label,l=t.color;p.default.notEmpty(o)&&a.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",o.options.scale,")")).attr("d",o.path.d).attr("fill",o.path.fill||i.default.DEFAULT_COLOR).attr("id",o.path.id),r.display&&a.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(r.display)),r.secondaryDisplay&&a.append("tspan").attr("style","color: ".concat(i.default.DEFAULT_COLOR,";")).text(" ".concat(r.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,n;b(),(n=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(n).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,n){b();var a=h(e).append("g"),o=n.tasks,r=n.activities,l=n.events,i=n.actions;if(o&&o.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Tasks",p)}if(r&&r.length>0){var s=[];r.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(a,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(a,"Events",d)}if(i&&i.length>0){var c=[];i.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(a,"Actions",c)}};t.loadTaskPopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.label,l=a.display,i=a.y,p=a.startDate,s=a.endDate,c=a.percentage;r&&m(o,"Task Name",l),m(o,"Track",i),m(o,"Start Date",d(p)),m(o,"End Date",d(s)),c&&m(o,"Percentage",c)};t.loadDatelinePopup=function(e,t){b();var n=h(e).append("g"),a=t.label,o=t.value;a&&m(n,"Milestone",a.display),m(n,"Date",d(o))};t.loadTimelinePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.x,l=(a.y,a.label),i=a.content;m(o,"X axis","".concat(u(r)?d(r):r)),m(o,"".concat(l.display),i)};t.loadPiePopup=function(e,t,n,a){b();var o=h(e).append("g"),r=a.label,l=a.value;m(o,r.display,l)}},1277:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(4));n(1278);var l={id:r.default.string.isRequired},i=function(e){return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),o.default.createElement("div",{id:e.id,className:"example-graph-container"}))};i.propTypes=l;var p=i;t.default=p},1280:function(e,t,n){var a,o;void 0===(o="function"==typeof(a=function(){var e="details",t="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function a(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(n);var a=n.offsetHeight;n.open=!0;var o=a!=n.offsetHeight;return document.body.removeChild(n),o}function o(e,t){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(n)}}a()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),o("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?a.call(t,n,t,e):a)||(e.exports=o)},1288:function(e,t,n){"use strict";n.r(t)},1338:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),l={key:"timeseries_paired_result_data",label:{high:{display:"High"},mid:{display:"Median"},low:{display:"Low"}},shape:{high:o.default.helpers.SHAPES.DARK.TEAR_ALT,mid:o.default.helpers.SHAPES.DARK.RHOMBUS,low:o.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:o.default.helpers.COLORS.BLACK,mid:o.default.helpers.COLORS.BLUE,low:o.default.helpers.COLORS.BLACK},onClick:r.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!1}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};t.default=l},1418:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(31),o=n.n(a),r=n(55),l=n.n(r),i=(n(0),n(788)),p=["components"],s={},d="wrapper";function c(e){var t=e.components,n=l()(e,p);return Object(i.mdx)(d,o()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'timeseries_paired_result_data',\n  label: {\n    high: {\n      display: 'High',\n    },\n    mid: {\n      display: 'Median',\n    },\n    low: {\n      display: 'Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: false,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}c.isMDXComponent=!0},1561:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1273)),r=n(1274),l=function(e){return{bindTo:e,axis:{x:{type:o.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},dateline:[{showDatelineIndicator:!0,label:{display:"Action Date"},color:"#C97318",shape:o.default.helpers.SHAPES.SQUARE,onClick:r.loadDatelinePopup,value:new Date(2017,10,1).toISOString()}],showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=l},1793:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1273)),l=a(n(1275));n(1276),n(1288);var i=a(n(1277)),p=a(n(1561)),s=a(n(1338)),d=l.default.deepClone((0,p.default)("#pairedResultWithDateLine")),c=[l.default.deepClone(s.default)],u=function(){return o.default.useEffect((function(){var e=r.default.api.graph(d);c.forEach((function(t){e.loadContent(r.default.api.pairedResult(t))}))}),[]),o.default.createElement(i.default,{id:"pairedResultWithDateLine"})};t.default=u},2037:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(31),o=n.n(a),r=n(55),l=n.n(r),i=n(0),p=n.n(i),s=n(788),d=n(1793),c=n.n(d),u=["components"],m={};function f(e){var t=e.components,n=l()(e,u);return Object(s.mdx)("wrapper",o()({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultDatelineTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithDateline';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultTimeseriesData';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultDatelineTimeseriesConfig('#pairedResultWithDateLine'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst PairedResultWithDatelineExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"pairedResultWithDateLine\" />\n  );\n};\n\nexport default PairedResultWithDatelineExample;\n\n")))}f.isMDXComponent=!0;var h=n(1284),b=n.n(h),g=n(1285),y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return p.a.createElement(b.a,{title:t||"Timeseries With Dateline",description:n,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(g.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:a})},x=["components"],v={},T="wrapper";function w(e){var t=e.components,n=l()(e,x);return Object(s.mdx)(T,o()({},v,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadDatelinePopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst getPairedResultDatelineTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  dateline: [\n    {\n      showDatelineIndicator: true,\n      label: {\n        display: 'Action Date',\n      },\n      color: '#C97318',\n      shape: Carbon.helpers.SHAPES.SQUARE,\n      onClick: loadDatelinePopup,\n      value: new Date(2017, 10, 1).toISOString(),\n    },\n  ],\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultDatelineTimeseriesConfig;\n\n")))}w.isMDXComponent=!0;var O=n(1418),C=["components"];n(1280);var P={},D="wrapper";function E(e){var t=e.components,n=l()(e,C);return Object(s.mdx)(D,o()({},P,n,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"timeseries-with-dateline"},"Timeseries with dateline"),Object(s.mdx)("p",null,"This is a timeseries paired result graph with dateline in it."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"example"},"Example"),Object(s.mdx)(y,{mdxType:"PairedResultGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(w,{mdxType:"GraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(O.a,{mdxType:"DataObject"})))}E.isMDXComponent=!0}}]);