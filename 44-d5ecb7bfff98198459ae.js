(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1274:function(e,t,a){"use strict";var n=a(2),r=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.loadY2AxisLabelPopup=t.loadXAndYAxisLabelPopup=t.loadTrackPopup=t.loadTimelinePopup=t.loadTextLabelPopup=t.loadTaskPopup=t.loadPopup=t.loadPiePopup=t.loadDatelinePopup=t.loadBubblePopup=t.loadBarPopup=void 0;var i=n(a(43)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(n,l,o):n[l]=e[l]}n.default=e,a&&a.set(e,n);return n}(a(1282)),o=n(a(1279)),p=n(a(1275));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var d=function(e){return new Date(e).toLocaleString()},c=function(e){return e?u(e)?d(e):e:null},u=function(e){return e instanceof Date},m=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t),n.append("g").classed("popup-text",!0).text(a)},f=function(e,t,a){var n=e.append("g").classed("popup-item",!0);n.append("label").classed("popup-label",!0).text(t);for(var r=n.append("g").classed("section",!0),l=function(){var e=p[o],t=r.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var a=(0,i.default)(e,2),n=a[0],r=a[1],l=t.append("g").classed("popup-item",!0);l.append("label").classed("popup-label",!0).text(n.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),l.append("g").classed("popup-text",!0).text(r)}))},o=0,p=Object.values(a);o<p.length;o++)l()},h=function(e){var t=document.querySelector("#tooltip");return l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function a(){l.select(t).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(e)&&e(),l.select("#overlay").remove(),t.removeEventListener("click",a),window.removeEventListener("resize",a)})),l.select("#tooltip").style("left","".concat(l.event.pageX+5,"px")).style("top","".concat(l.event.pageY+5,"px"))},b=function(){l.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),l.select("#tooltip").attr("style","").selectAll("g").remove()};t.loadPopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.x,l=n.y,o=n.label,p=n.high,s=n.mid,f=n.low;i?(m(r,"X axis","".concat(u(i)?d(i):i)),m(r,"".concat(o.display),l)):(m(r,"X axis","".concat(p?c(p.x):s?c(s.x):f?c(f.x):"N/A")),p&&m(r,"High",c(p.y)),s&&m(r,"Mid",c(s.y)),f&&m(r,"Low",c(f.y)))};t.loadBubblePopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.x,l=n.y,o=n.label,p=n.weight;i&&(m(r,"X axis","".concat(u(i)?d(i):i)),m(r,"year",l)),p&&m(r,"".concat(o.display),"".concat(p))};t.loadBarPopup=function(e,t,a,n){b();var r=h(e).append("g");n.forEach((function(e){return m(r,"".concat(e.label.display),"".concat(e.y))}))};t.loadTextLabelPopup=function(e,t,a){b();var n=h(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),r=t.shape,i=t.label,l=t.color;p.default.notEmpty(r)&&n.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",r.options.scale,")")).attr("d",r.path.d).attr("fill",r.path.fill||o.default.DEFAULT_COLOR).attr("id",r.path.id),i.display&&n.append("text").classed("popup-text",!0).attr("style","color: ".concat(l,";")).text("".concat(i.display)),i.secondaryDisplay&&n.append("tspan").attr("style","color: ".concat(o.default.DEFAULT_COLOR,";")).text(" ".concat(i.secondaryDisplay))};t.loadXAndYAxisLabelPopup=function(e){b(),h().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadY2AxisLabelPopup=function(e){var t,a;b(),(a=document.querySelector("#tooltip"),l.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){l.select(a).attr("style","display:none;").selectAll("g").remove(),p.default.isFunction(t)&&t(),l.select("#overlay").remove(),a.removeEventListener("click",e),window.removeEventListener("resize",e)})),l.select("#tooltip").style("left","".concat(l.event.pageX-250,"px")).style("top","".concat(l.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};t.loadTrackPopup=function(e,t,a){b();var n=h(e).append("g"),r=a.tasks,i=a.activities,l=a.events,o=a.actions;if(r&&r.length>0){var p=[];p.forEach((function(e){p.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(n,"Tasks",p)}if(i&&i.length>0){var s=[];i.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),f(n,"Activities",s)}if(l&&l.length>0){var d=[];l.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),f(n,"Events",d)}if(o&&o.length>0){var c=[];o.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),f(n,"Actions",c)}};t.loadTaskPopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.label,l=n.display,o=n.y,p=n.startDate,s=n.endDate,c=n.percentage;i&&m(r,"Task Name",l),m(r,"Track",o),m(r,"Start Date",d(p)),m(r,"End Date",d(s)),c&&m(r,"Percentage",c)};t.loadDatelinePopup=function(e,t){b();var a=h(e).append("g"),n=t.label,r=t.value;n&&m(a,"Milestone",n.display),m(a,"Date",d(r))};t.loadTimelinePopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.x,l=(n.y,n.label),o=n.content;m(r,"X axis","".concat(u(i)?d(i):i)),m(r,"".concat(l.display),o)};t.loadPiePopup=function(e,t,a,n){b();var r=h(e).append("g"),i=n.label,l=n.value;m(r,i.display,l)}},1277:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(4));a(1278);var l={id:i.default.string.isRequired},o=function(e){return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),r.default.createElement("div",{id:e.id,className:"example-graph-container"}))};o.propTypes=l;var p=o;t.default=p},1280:function(e,t,a){var n,r;void 0===(r="function"==typeof(n=function(){var e="details",t="summary";function a(e){if("summary"===e.target.nodeName.toLowerCase()){var t=e.target.parentNode;if(!t)return;t.getAttribute("open")?(t.open=!1,t.removeAttribute("open")):(t.open=!0,t.setAttribute("open","open"))}}function n(){var a=document.createElement(e);if(!("open"in a))return!1;a.innerHTML="<"+t+">a</"+t+">b",document.body.appendChild(a);var n=a.offsetHeight;a.open=!0;var r=n!=a.offsetHeight;return document.body.removeChild(a),r}function r(e,t){if(!document.getElementById(e)){var a=document.createElement("style");a.id=e,a.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(a)}}n()||(document.documentElement.className+=" no-details",window.addEventListener("click",a),r("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+t+") { display: none; }\nhtml.no-details "+e+" > "+t+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+t+':before { content: "▼"; }'))})?n.call(t,a,t,e):n)||(e.exports=r)},1288:function(e,t,a){"use strict";a.r(t)},1339:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),i=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!0,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=i},1378:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),i=function(e){return{bindTo:e,axis:{x:{type:r.default.helpers.AXIS_TYPE.TIME_SERIES,label:"Datetime",lowerLimit:"2016-03-02T12:00:00Z",upperLimit:"2018-12-10T12:00:00Z",ticks:{format:"%b %Y"}},y:{label:"Paired Set A",lowerLimit:0,upperLimit:200},y2:{show:!1,label:"Paired Set B",lowerLimit:100,upperLimit:350}},showLabel:!0,showLegend:!0,showVGrid:!0,showHGrid:!0}};t.default=i},1394:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),i=a(1274),l={key:"paired_result_critical_dataset_1",label:{high:{display:"Dataset_1_High"},mid:{display:"Dataset_1_Median"},low:{display:"Dataset_1_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TEAR_ALT,mid:r.default.helpers.SHAPES.DARK.RHOMBUS,low:r.default.helpers.SHAPES.DARK.TEAR_DROP},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.BLUE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,values:[{high:{x:"2016-05-01T12:00:00Z",y:150,isCritical:!1},mid:{x:"2016-05-01T12:00:00Z",y:40},low:{x:"2016-05-01T12:00:00Z",y:10,isCritical:!0}},{high:{x:"2016-08-17T12:00:00Z",y:110},mid:{x:"2016-08-17T12:00:00Z",y:70},low:{x:"2016-08-17T12:00:00Z",y:30}},{high:{x:"2016-10-17T12:00:00Z",y:160},mid:{x:"2016-10-17T12:00:00Z",y:120},low:{x:"2016-10-17T12:00:00Z",y:100}},{high:{x:"2017-03-17T12:00:00Z",y:190,isCritical:!0},mid:{x:"2017-03-17T12:00:00Z",y:90},low:{x:"2017-03-17T12:00:00Z",y:60,isCritical:!0}},{low:{x:"2017-07-17T12:00:00Z",y:10}},{high:{x:"2018-02-17T12:00:00Z",y:180}}]};t.default=l},1419:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(31),r=a.n(n),i=a(55),l=a.n(i),o=(a(0),a(788)),p=["components"],s={},d="wrapper";function c(e){var t=e.components,a=l()(e,p);return Object(o.mdx)(d,r()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultY2AxisTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: true,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultY2AxisTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1559:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(31),r=a.n(n),i=a(55),l=a.n(i),o=(a(0),a(788)),p=["components"],s={},d="wrapper";function c(e){var t=e.components,a=l()(e,p);return Object(o.mdx)(d,r()({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\n\nconst getPairedResultTimeseriesConfig = (id) => ({\n  bindTo: id,\n  axis: {\n    x: {\n      type: Carbon.helpers.AXIS_TYPE.TIME_SERIES,\n      label: 'Datetime',\n      lowerLimit: '2016-03-02T12:00:00Z',\n      upperLimit: '2018-12-10T12:00:00Z',\n      ticks: {\n        format: '%b %Y',\n      },\n    },\n    y: {\n      label: 'Paired Set A',\n      lowerLimit: 0,\n      upperLimit: 200,\n    },\n    y2: {\n      show: false,\n      label: 'Paired Set B',\n      lowerLimit: 100,\n      upperLimit: 350,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showVGrid: true,\n  showHGrid: true,\n});\n\nexport default getPairedResultTimeseriesConfig;\n\n")))}c.isMDXComponent=!0},1565:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(1273)),i=a(1274),l={key:"paired_result_critical_dataset_2",label:{high:{display:"Dataset_2_High"},mid:{display:"Dataset_2_Median"},low:{display:"Dataset_2_Low"}},shape:{high:r.default.helpers.SHAPES.DARK.TRIANGLE,mid:r.default.helpers.SHAPES.DARK.SQUARE,low:r.default.helpers.SHAPES.DARK.TRIANGLE_DOWN},color:{high:r.default.helpers.COLORS.BLACK,mid:r.default.helpers.COLORS.ORANGE,low:r.default.helpers.COLORS.BLACK},onClick:i.loadPopup,yAxis:"y2",values:[{high:{x:"2017-05-01T11:00:00Z",y:300},mid:{x:"2017-05-01T11:00:00Z",y:250},low:{x:"2017-05-01T11:00:00Z",y:175}},{high:{x:"2017-08-17T13:00:00Z",y:300,isCritical:!0},mid:{x:"2017-08-17T13:00:00Z",y:170,isCritical:!0},low:{x:"2017-08-17T13:00:00Z",y:130,isCritical:!0}},{high:{x:"2017-10-17T15:00:00Z",y:250},mid:{x:"2017-10-17T15:00:00Z",y:220},low:{x:"2017-10-17T15:00:00Z",y:200}}]};t.default=l},1796:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(1273)),l=n(a(1275));a(1276),a(1288);var o=n(a(1277)),p=n(a(1378)),s=n(a(1394)),d=l.default.deepClone((0,p.default)("#simplePairedResultGraph")),c=[l.default.deepClone(s.default)],u=function(){return r.default.useEffect((function(){var e=i.default.api.graph(d);c.forEach((function(t){e.loadContent(i.default.api.pairedResult(t))}))}),[]),r.default.createElement(o.default,{id:"simplePairedResultGraph"})};t.default=u},1797:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),i=n(a(1273)),l=n(a(1275));a(1276),a(1288);var o=n(a(1277)),p=n(a(1339)),s=n(a(1394)),d=n(a(1565)),c=l.default.deepClone((0,p.default)("#multipleCriticalPairedResultGraph")),u=[l.default.deepClone(s.default),l.default.deepClone(d.default)],m=function(){return r.default.useEffect((function(){var e=i.default.api.graph(c);u.forEach((function(t){e.loadContent(i.default.api.pairedResult(t))}))}),[]),r.default.createElement(o.default,{id:"multipleCriticalPairedResultGraph"})};t.default=m},1979:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(31),r=a.n(n),i=a(55),l=a.n(i),o=a(0),p=a.n(o),s=a(788),d=a(1796),c=a.n(d),u=["components"],m={};function f(e){var t=e.components,a=l()(e,u);return Object(s.mdx)("wrapper",r()({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseries';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#simplePairedResultGraph'));\nconst dataset = [utils.deepClone(exampleData)];\n\nconst SimpleCriticalPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"simplePairedResultGraph\" />\n  );\n};\n\nexport default SimpleCriticalPiaredResultExample;\n\n")))}f.isMDXComponent=!0;var h=a(1284),b=a.n(h),x=a(1285),g=function(e){var t=e.title,a=e.description,n=e.isExpanded;return p.a.createElement(b.a,{title:t||"Simple Paired Result",description:a,example:p.a.createElement(c.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(f,null),isExpanded:n})},y=a(1559),C=["components"],v={},T="wrapper";function O(e){var t=e.components,a=l()(e,C);return Object(s.mdx)(T,r()({},v,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_critical_dataset_1',\n  label: {\n    high: {\n      display: 'Dataset_1_High',\n    },\n    mid: {\n      display: 'Dataset_1_Median',\n    },\n    low: {\n      display: 'Dataset_1_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TEAR_ALT,\n    mid: Carbon.helpers.SHAPES.DARK.RHOMBUS,\n    low: Carbon.helpers.SHAPES.DARK.TEAR_DROP,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.BLUE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  values: [\n    {\n      high: {\n        x: '2016-05-01T12:00:00Z',\n        y: 150,\n        isCritical: false,\n      },\n      mid: {\n        x: '2016-05-01T12:00:00Z',\n        y: 40,\n      },\n      low: {\n        x: '2016-05-01T12:00:00Z',\n        y: 10,\n        isCritical: true,\n      },\n    },\n    {\n      high: {\n        x: '2016-08-17T12:00:00Z',\n        y: 110,\n      },\n      mid: {\n        x: '2016-08-17T12:00:00Z',\n        y: 70,\n      },\n      low: {\n        x: '2016-08-17T12:00:00Z',\n        y: 30,\n      },\n    },\n    {\n      high: {\n        x: '2016-10-17T12:00:00Z',\n        y: 160,\n      },\n      mid: {\n        x: '2016-10-17T12:00:00Z',\n        y: 120,\n      },\n      low: {\n        x: '2016-10-17T12:00:00Z',\n        y: 100,\n      },\n    },\n    {\n      high: {\n        x: '2017-03-17T12:00:00Z',\n        y: 190,\n        isCritical: true,\n      },\n      mid: {\n        x: '2017-03-17T12:00:00Z',\n        y: 90,\n      },\n      low: {\n        x: '2017-03-17T12:00:00Z',\n        y: 60,\n        isCritical: true,\n      },\n    },\n    {\n      low: {\n        x: '2017-07-17T12:00:00Z',\n        y: 10,\n      },\n    },\n    {\n      high: {\n        x: '2018-02-17T12:00:00Z',\n        y: 180,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}O.isMDXComponent=!0;var j=a(1797),P=a.n(j),E=["components"],w={};function R(e){var t=e.components,a=l()(e,E);return Object(s.mdx)("wrapper",r()({},w,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getPairedResultTimeseriesConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultTimeseriesWithY2Axis';\nimport dataset1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset1';\nimport dataset2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultCriticalDataset2';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\nconst graphConfig = utils.deepClone(getPairedResultTimeseriesConfig('#multipleCriticalPairedResultGraph'));\nconst dataset = [utils.deepClone(dataset1), utils.deepClone(dataset2)];\n\nconst MultipleCriticalPiaredResultExample = () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.pairedResult(data));\n    });\n  }, []);\n  return (\n    <ExampleGraphContainer id=\"multipleCriticalPairedResultGraph\" />\n  );\n};\n\nexport default MultipleCriticalPiaredResultExample;\n\n")))}R.isMDXComponent=!0;var L=function(e){var t=e.title,a=e.description,n=e.isExpanded;return p.a.createElement(b.a,{title:t||"Multiple Paired Result",description:a,example:p.a.createElement(P.a,null),exampleCssSrc:p.a.createElement(x.a,null),exampleSrc:p.a.createElement(R,null),isExpanded:n})},D=a(1419),A=["components"],S={},_="wrapper";function Z(e){var t=e.components,a=l()(e,A);return Object(s.mdx)(_,r()({},S,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport {\n  loadPopup,\n} from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'paired_result_critical_dataset_2',\n  label: {\n    high: {\n      display: 'Dataset_2_High',\n    },\n    mid: {\n      display: 'Dataset_2_Median',\n    },\n    low: {\n      display: 'Dataset_2_Low',\n    },\n  },\n  shape: {\n    high: Carbon.helpers.SHAPES.DARK.TRIANGLE,\n    mid: Carbon.helpers.SHAPES.DARK.SQUARE,\n    low: Carbon.helpers.SHAPES.DARK.TRIANGLE_DOWN,\n  },\n  color: {\n    high: Carbon.helpers.COLORS.BLACK,\n    mid: Carbon.helpers.COLORS.ORANGE,\n    low: Carbon.helpers.COLORS.BLACK,\n  },\n  onClick: loadPopup,\n  yAxis: 'y2',\n  values: [\n    {\n      high: {\n        x: '2017-05-01T11:00:00Z',\n        y: 300,\n      },\n      mid: {\n        x: '2017-05-01T11:00:00Z',\n        y: 250,\n      },\n      low: {\n        x: '2017-05-01T11:00:00Z',\n        y: 175,\n      },\n    },\n    {\n      high: {\n        x: '2017-08-17T13:00:00Z',\n        y: 300,\n        isCritical: true,\n      },\n      mid: {\n        x: '2017-08-17T13:00:00Z',\n        y: 170,\n        isCritical: true,\n      },\n      low: {\n        x: '2017-08-17T13:00:00Z',\n        y: 130,\n        isCritical: true,\n      },\n    },\n    {\n      high: {\n        x: '2017-10-17T15:00:00Z',\n        y: 250,\n      },\n      mid: {\n        x: '2017-10-17T15:00:00Z',\n        y: 220,\n      },\n      low: {\n        x: '2017-10-17T15:00:00Z',\n        y: 200,\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}Z.isMDXComponent=!0;var M=["components"];a(1280);var G={},N="wrapper";function k(e){var t=e.components,a=l()(e,M);return Object(s.mdx)(N,r()({},G,a,{components:t,mdxType:"MDXLayout"}),Object(s.mdx)("h1",{id:"criticality"},"Criticality"),Object(s.mdx)("p",null,"Criticality consists of simple paired result graphs single dataset critical points and multiple dataset critical points(highlighted with red circle)."),Object(s.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(s.mdx)("ul",null,Object(s.mdx)("li",{parentName:"ul"},"Install with ",Object(s.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(s.mdx)("ul",{parentName:"li"},Object(s.mdx)("li",{parentName:"ul"},Object(s.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(s.mdx)("h2",{id:"usage"},"Usage"),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(g,{mdxType:"SimpleCriticalityPairedResultGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data used for simple criticality")),Object(s.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(s.mdx)(y.a,{mdxType:"SimpleCriticalityGraphConfig"}),Object(s.mdx)("h3",{id:"data-object"},"Data object"),Object(s.mdx)(O,{mdxType:"SimpleCriticalityDataObject"})),Object(s.mdx)("br",null),Object(s.mdx)(L,{mdxType:"MultiCriticalityPairedResultGraph"}),Object(s.mdx)("details",null,Object(s.mdx)("summary",{style:{fontSize:24}},Object(s.mdx)("b",null,"Data for multiple criticality")),Object(s.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(s.mdx)(D.a,{mdxType:"MultiCriticalityGraphConfig"}),Object(s.mdx)("h3",{id:"data-object-1"},"Data object"),Object(s.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(s.mdx)(O,{mdxType:"MultiCriticalityDataObject1"}),Object(s.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(s.mdx)(Z,{mdxType:"MultiCriticalityDataObject2"})))}k.isMDXComponent=!0}}]);