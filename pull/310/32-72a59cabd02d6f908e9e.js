(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1274:function(e,a,n){"use strict";var t=n(2),l=n(18);Object.defineProperty(a,"__esModule",{value:!0}),a.loadY2AxisLabelPopup=a.loadXAndYAxisLabelPopup=a.loadTrackPopup=a.loadTimelinePopup=a.loadTextLabelPopup=a.loadTaskPopup=a.loadPopup=a.loadPiePopup=a.loadDatelinePopup=a.loadBubblePopup=a.loadBarPopup=void 0;var o=t(n(43)),r=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=i(a);if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var p=o?Object.getOwnPropertyDescriptor(e,r):null;p&&(p.get||p.set)?Object.defineProperty(t,r,p):t[r]=e[r]}t.default=e,n&&n.set(e,t);return t}(n(1282)),p=t(n(1279)),s=t(n(1275));function i(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:a})(e)}var c=function(e){return new Date(e).toLocaleString()},d=function(e){return e?u(e)?c(e):e:null},u=function(e){return e instanceof Date},x=function(e,a,n){var t=e.append("g").classed("popup-item",!0);t.append("label").classed("popup-label",!0).text(a),t.append("g").classed("popup-text",!0).text(n)},b=function(e,a,n){var t=e.append("g").classed("popup-item",!0);t.append("label").classed("popup-label",!0).text(a);for(var l=t.append("g").classed("section",!0),r=function(){var e=s[p],a=l.append("g").classed("content",!0);Object.entries(e).forEach((function(e){var n=(0,o.default)(e,2),t=n[0],l=n[1],r=a.append("g").classed("popup-item",!0);r.append("label").classed("popup-label",!0).text(t.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/(\b[a-z](?!\s))/g,(function(e){return e.toUpperCase()}))),r.append("g").classed("popup-text",!0).text(l)}))},p=0,s=Object.values(n);p<s.length;p++)r()},m=function(e){var a=document.querySelector("#tooltip");return r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function n(){r.select(a).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(e)&&e(),r.select("#overlay").remove(),a.removeEventListener("click",n),window.removeEventListener("resize",n)})),r.select("#tooltip").style("left","".concat(r.event.pageX+5,"px")).style("top","".concat(r.event.pageY+5,"px"))},f=function(){r.select("#overlay").remove(),document.getElementsByClassName("initial-tooltip")[0]&&(document.getElementsByClassName("initial-tooltip")[0].className="tooltip"),r.select("#tooltip").attr("style","").selectAll("g").remove()};a.loadPopup=function(e,a,n,t){f();var l=m(e).append("g"),o=t.x,r=t.y,p=t.label,s=t.high,i=t.mid,b=t.low;o?(x(l,"X axis","".concat(u(o)?c(o):o)),x(l,"".concat(p.display),r)):(x(l,"X axis","".concat(s?d(s.x):i?d(i.x):b?d(b.x):"N/A")),s&&x(l,"High",d(s.y)),i&&x(l,"Mid",d(i.y)),b&&x(l,"Low",d(b.y)))};a.loadBubblePopup=function(e,a,n,t){f();var l=m(e).append("g"),o=t.x,r=t.y,p=t.label,s=t.weight;o&&(x(l,"X axis","".concat(u(o)?c(o):o)),x(l,"year",r)),s&&x(l,"".concat(p.display),"".concat(s))};a.loadBarPopup=function(e,a,n,t){f();var l=m(e).append("g");t.forEach((function(e){return x(l,"".concat(e.label.display),"".concat(e.y))}))};a.loadTextLabelPopup=function(e,a,n){f();var t=m(e).append("g").classed("popup-item",!0).append("g").attr("style","display: inline-block;"),l=a.shape,o=a.label,r=a.color;s.default.notEmpty(l)&&t.append("svg").attr("width","15").attr("height","12").append("path").attr("transform","translate(".concat(0,", ",0,") scale(",l.options.scale,")")).attr("d",l.path.d).attr("fill",l.path.fill||p.default.DEFAULT_COLOR).attr("id",l.path.id),o.display&&t.append("text").classed("popup-text",!0).attr("style","color: ".concat(r,";")).text("".concat(o.display)),o.secondaryDisplay&&t.append("tspan").attr("style","color: ".concat(p.default.DEFAULT_COLOR,";")).text(" ".concat(o.secondaryDisplay))};a.loadXAndYAxisLabelPopup=function(e){f(),m().append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};a.loadY2AxisLabelPopup=function(e){var a,n;f(),(n=document.querySelector("#tooltip"),r.select("body").append("div","#tooltip").attr("id","overlay").classed("overlay",!0).on("click",(function e(){r.select(n).attr("style","display:none;").selectAll("g").remove(),s.default.isFunction(a)&&a(),r.select("#overlay").remove(),n.removeEventListener("click",e),window.removeEventListener("resize",e)})),r.select("#tooltip").style("left","".concat(r.event.pageX-250,"px")).style("top","".concat(r.event.pageY+5,"px"))).append("g").append("g").classed("popup-item",!0).append("g").classed("popup-text",!0).text(e)};a.loadTrackPopup=function(e,a,n){f();var t=m(e).append("g"),l=n.tasks,o=n.activities,r=n.events,p=n.actions;if(l&&l.length>0){var s=[];s.forEach((function(e){s.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(t,"Tasks",s)}if(o&&o.length>0){var i=[];o.forEach((function(e){i.push({name:e.key,startDate:e.startDate,endDate:e.endDate})})),b(t,"Activities",i)}if(r&&r.length>0){var c=[];r.forEach((function(e){c.push({name:e.key,values:e.values.join(", ")})})),b(t,"Events",c)}if(p&&p.length>0){var d=[];p.forEach((function(e){d.push({name:e.key,values:e.values.join(", ")})})),b(t,"Actions",d)}};a.loadTaskPopup=function(e,a,n,t){f();var l=m(e).append("g"),o=t.label,r=t.display,p=t.y,s=t.startDate,i=t.endDate,d=t.percentage;o&&x(l,"Task Name",r),x(l,"Track",p),x(l,"Start Date",c(s)),x(l,"End Date",c(i)),d&&x(l,"Percentage",d)};a.loadDatelinePopup=function(e,a){f();var n=m(e).append("g"),t=a.label,l=a.value;t&&x(n,"Milestone",t.display),x(n,"Date",c(l))};a.loadTimelinePopup=function(e,a,n,t){f();var l=m(e).append("g"),o=t.x,r=(t.y,t.label),p=t.content;x(l,"X axis","".concat(u(o)?c(o):o)),x(l,"".concat(r.display),p)};a.loadPiePopup=function(e,a,n,t){f();var l=m(e).append("g"),o=t.label,r=t.value;x(l,o.display,r)}},1277:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(0)),o=t(n(4));n(1278);var r={id:o.default.string.isRequired},p=function(e){return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{id:"tooltip",className:"initial-tooltip"}),l.default.createElement("div",{id:e.id,className:"example-graph-container"}))};p.propTypes=r;var s=p;a.default=s},1280:function(e,a,n){var t,l;void 0===(l="function"==typeof(t=function(){var e="details",a="summary";function n(e){if("summary"===e.target.nodeName.toLowerCase()){var a=e.target.parentNode;if(!a)return;a.getAttribute("open")?(a.open=!1,a.removeAttribute("open")):(a.open=!0,a.setAttribute("open","open"))}}function t(){var n=document.createElement(e);if(!("open"in n))return!1;n.innerHTML="<"+a+">a</"+a+">b",document.body.appendChild(n);var t=n.offsetHeight;n.open=!0;var l=t!=n.offsetHeight;return document.body.removeChild(n),l}function l(e,a){if(!document.getElementById(e)){var n=document.createElement("style");n.id=e,n.innerHTML=a,document.getElementsByTagName("head")[0].appendChild(n)}}t()||(document.documentElement.className+=" no-details",window.addEventListener("click",n),l("details-polyfill-style","html.no-details "+e+" { display: block; }\nhtml.no-details "+e+":not([open]) > :not("+a+") { display: none; }\nhtml.no-details "+e+" > "+a+':before { content: "▶"; display: inline-block; font-size: .8em; width: 1.5em; }\nhtml.no-details '+e+"[open] > "+a+':before { content: "▼"; }'))})?t.call(a,n,a,e):t)||(e.exports=l)},1295:function(e,a,n){"use strict";n.r(a)},1296:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(e){return{bindTo:e,bindLegendTo:null,axis:{x:{show:!0,label:"Data",lowerLimit:0,upperLimit:8,ticks:{values:[1,2,3,4,5,6,7],format:".0f"}},y:{show:!0,label:"Bar Set A",lowerLimit:0,upperLimit:35},y2:{show:!1,label:"Bar Set B",lowerLimit:0,upperLimit:30}},showLabel:!0,showLegend:!0,showShapes:!0,showVGrid:!1,showHGrid:!0}};a.default=t},1323:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n(31),l=n.n(t),o=n(55),r=n.n(o),p=(n(0),n(788)),s=["components"],i={},c="wrapper";function d(e){var a=e.components,n=r()(e,s);return Object(p.mdx)(c,l()({},i,n,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"const getbarConfig = (id) => ({\n  bindTo: id,\n  bindLegendTo: null,\n  axis: {\n    x: {\n      show: true,\n      label: 'Data',\n      lowerLimit: 0,\n      upperLimit: 8,\n      ticks: {\n        values: [1, 2, 3, 4, 5, 6, 7],\n        format: '.0f',\n      },\n    },\n    y: {\n      show: true,\n      label: 'Bar Set A',\n      lowerLimit: 0,\n      upperLimit: 35,\n    },\n    y2: {\n      show: false,\n      label: 'Bar Set B',\n      lowerLimit: 0,\n      upperLimit: 30,\n    },\n  },\n  showLabel: true,\n  showLegend: true,\n  showShapes: true,\n  showVGrid: false,\n  showHGrid: true,\n});\n\nexport default getbarConfig;\n\n\n")))}d.isMDXComponent=!0},1357:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(1273)),o=n(1274),r={key:"stacked_bar_2",label:{display:"Dataset 2"},group:"stacked_bar_1",color:l.default.helpers.COLORS.LIGHT_PURPLE,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:5},{x:3,y:8},{x:4,y:10},{x:5,y:10},{x:6,y:10}]};a.default=r},1358:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(1273)),o=n(1274),r={key:"stacked_bar_3",label:{display:"Dataset 3"},group:"stacked_bar_1",color:l.default.helpers.COLORS.BLUE,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:8},{x:3,y:9},{x:4,y:10},{x:5,y:7}]};a.default=r},1436:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n(31),l=n.n(t),o=n(55),r=n.n(o),p=(n(0),n(788)),s=["components"],i={},c="wrapper";function d(e){var a=e.components,n=r()(e,s);return Object(p.mdx)(c,l()({},i,n,{components:a,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_2',\n  label: {\n    display: 'Dataset 2',\n  },\n  group: 'stacked_bar_1',\n  color: Carbon.helpers.COLORS.LIGHT_PURPLE,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 5,\n    },\n    {\n      x: 3,\n      y: 8,\n    },\n    {\n      x: 4,\n      y: 10,\n    },\n    {\n      x: 5,\n      y: 10,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n};\n\nexport default data;\n\n")))}d.isMDXComponent=!0},1458:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(1273)),o=n(1274),r={key:"axisinfo_bar_1",label:{display:"Dataset 1"},group:"uid_bar_1",color:l.default.helpers.COLORS.YELLOW,onClick:o.loadBarPopup,values:[{x:1,y:10},{x:2,y:15},{x:3,y:18},{x:4,y:6},{x:5,y:0},{x:6,y:10}],axisInfoRow:[{axis:"x",x:1,value:{onClick:o.loadTextLabelPopup,characterCount:4,color:l.default.helpers.COLORS.ORANGE,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.ORANGE},options:{x:-6,y:-6,scale:.25}},label:{display:"1234567",secondaryDisplay:"ICU"}}},{axis:"x",x:2,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.PURPLE},options:{x:-6,y:-6,scale:.25}},label:{display:"65",secondaryDisplay:"ICU"}}},{axis:"x",x:3,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.GREEN,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z"},options:{x:-6,y:-6,scale:.25}},label:{display:"42",secondaryDisplay:"ICU"}}},{axis:"x",x:4,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"23",secondaryDisplay:""}}},{axis:"x",x:5,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"",secondaryDisplay:"ICU"}}},{axis:"x",x:6,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"25",secondaryDisplay:"ICU"}}}]};a.default=r},1459:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(1273)),o=n(1274),r={key:"stacked_bar_1",label:{display:"Dataset 1"},color:l.default.helpers.COLORS.GREEN,onClick:o.loadBarPopup,values:[{x:1,y:30},{x:2,y:10},{x:3,y:13},{x:4,y:15},{x:5,y:18}],axisInfoRow:[{axis:"x",x:1,value:{onClick:o.loadTextLabelPopup,characterCount:4,color:l.default.helpers.COLORS.ORANGE,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.ORANGE},options:{x:-6,y:-6,scale:.25}},label:{display:"1234567",secondaryDisplay:"ICU"}}},{axis:"x",x:2,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z",fill:l.default.helpers.COLORS.PURPLE},options:{x:-6,y:-6,scale:.25}},label:{display:"65",secondaryDisplay:"ICU"}}},{axis:"x",x:3,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.GREEN,shape:{path:{d:"M24,0l24,24L24,48L0,24L24,0z"},options:{x:-6,y:-6,scale:.25}},label:{display:"42",secondaryDisplay:"ICU"}}},{axis:"x",x:4,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"23",secondaryDisplay:""}}},{axis:"x",x:5,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"",secondaryDisplay:"ICU"}}},{axis:"x",x:6,value:{onClick:o.loadTextLabelPopup,color:l.default.helpers.COLORS.BLACK,shape:{},label:{display:"25",secondaryDisplay:"ICU"}}}]};a.default=r},1692:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(0)),o=t(n(1273)),r=t(n(1275));n(1276),n(1295);var p=t(n(1277)),s=t(n(1296)),i=t(n(1458)),c=r.default.deepClone((0,s.default)("#axisInfoTextLabelsBarGraph")),d=r.default.deepClone(i.default);a.default=function(){return l.default.useEffect((function(){o.default.api.graph(c).loadContent(o.default.api.bar(d))}),[]),l.default.createElement(p.default,{id:"axisInfoTextLabelsBarGraph"})}},1693:function(e,a,n){"use strict";var t=n(2);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=t(n(0)),o=t(n(1273)),r=t(n(1275));n(1276),n(1295);var p=t(n(1277)),s=t(n(1296)),i=t(n(1459)),c=t(n(1357)),d=t(n(1358)),u=r.default.deepClone((0,s.default)("#stackedAxisInfoTextLabelsBarGraph")),x=[r.default.deepClone(i.default),r.default.deepClone(c.default),r.default.deepClone(d.default)];a.default=function(){return l.default.useEffect((function(){var e=o.default.api.graph(u);x.forEach((function(a){e.loadContent(o.default.api.bar(a))}))}),[]),l.default.createElement(p.default,{id:"stackedAxisInfoTextLabelsBarGraph"})}},1979:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n(31),l=n.n(t),o=n(55),r=n.n(o),p=n(0),s=n.n(p),i=n(788),c=n(1692),d=n.n(c),u=["components"],x={};function b(e){var a=e.components,n=r()(e,u);return Object(i.mdx)("wrapper",l()({},x,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1axisInfoLabels';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#axisInfoTextLabelsBarGraph'));\nconst dataset = utils.deepClone(exampleData);\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    graph.loadContent(Carbon.api.bar(dataset));\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"axisInfoTextLabelsBarGraph\" />\n  );\n};\n\n")))}b.isMDXComponent=!0;var m=n(1284),f=n.n(m),y=n(1285),h=function(e){var a=e.title,n=e.description,t=e.isExpanded;return s.a.createElement(f.a,{title:a||"Axis Info Text Labels",description:n,example:s.a.createElement(d.a,null),exampleCssSrc:s.a.createElement(y.a,null),exampleSrc:s.a.createElement(b,null),isExpanded:t})},C=n(1323),L=["components"],O={},v="wrapper";function g(e){var a=e.components,n=r()(e,L);return Object(i.mdx)(v,l()({},O,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup, loadTextLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'axisinfo_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  group: 'uid_bar_1',\n  color: Carbon.helpers.COLORS.YELLOW,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 10,\n    },\n    {\n      x: 2,\n      y: 15,\n    },\n    {\n      x: 3,\n      y: 18,\n    },\n    {\n      x: 4,\n      y: 6,\n    },\n    {\n      x: 5,\n      y: 0,\n    },\n    {\n      x: 6,\n      y: 10,\n    },\n  ],\n  axisInfoRow: [\n    {\n      axis: 'x',\n      x: 1,\n      value: {\n        onClick: loadTextLabelPopup,\n        characterCount: 4,\n        color: Carbon.helpers.COLORS.ORANGE,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.ORANGE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '1234567',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 2,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.PURPLE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '65',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 3,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.GREEN,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '42',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 4,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '23',\n          secondaryDisplay: '',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 5,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 6,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '25',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}g.isMDXComponent=!0;var j=n(1693),D=n.n(j),P=["components"],k={};function E(e){var a=e.components,n=r()(e,P);return Object(i.mdx)("wrapper",l()({},k,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport utils from '@cerner/carbon-graphs/lib/js/helpers/utils';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Graph.module.scss';\nimport '@cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph.module.scss';\nimport ExampleGraphContainer from '@cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer';\nimport getBarConfig from '@cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault';\nimport exampleData1 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo';\nimport exampleData2 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData2.js';\nimport exampleData3 from '@cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData3.js';\n\n/*\nPlease refer to the documentation below to see the graphConfig and data objects\n*/\n\nconst graphConfig = utils.deepClone(getBarConfig('#stackedAxisInfoTextLabelsBarGraph'));\nconst dataset = [\n  utils.deepClone(exampleData1),\n  utils.deepClone(exampleData2),\n  utils.deepClone(exampleData3),\n];\n\nexport default () => {\n  React.useEffect(() => {\n    const graph = Carbon.api.graph(graphConfig);\n    dataset.forEach((data) => {\n      graph.loadContent(Carbon.api.bar(data));\n    });\n  }, []);\n\n  return (\n    <ExampleGraphContainer id=\"stackedAxisInfoTextLabelsBarGraph\" />\n  );\n};\n\n")))}E.isMDXComponent=!0;var T=function(e){var a=e.title,n=e.description,t=e.isExpanded;return s.a.createElement(f.a,{title:a||"Stacked Axis Info Text Labels",description:n,example:s.a.createElement(D.a,null),exampleCssSrc:s.a.createElement(y.a,null),exampleSrc:s.a.createElement(E,null),isExpanded:t})},R=["components"],B={},S="wrapper";function w(e){var a=e.components,n=r()(e,R);return Object(i.mdx)(S,l()({},B,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-js"},"import Carbon from '@cerner/carbon-graphs/lib/js/carbon';\nimport { loadBarPopup, loadTextLabelPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\n\nconst data = {\n  key: 'stacked_bar_1',\n  label: {\n    display: 'Dataset 1',\n  },\n  color: Carbon.helpers.COLORS.GREEN,\n  onClick: loadBarPopup,\n  values: [\n    {\n      x: 1,\n      y: 30,\n    },\n    {\n      x: 2,\n      y: 10,\n    },\n    {\n      x: 3,\n      y: 13,\n    },\n    {\n      x: 4,\n      y: 15,\n    },\n    {\n      x: 5,\n      y: 18,\n    },\n  ],\n  axisInfoRow: [\n    {\n      axis: 'x',\n      x: 1,\n      value: {\n        onClick: loadTextLabelPopup,\n        characterCount: 4,\n        color: Carbon.helpers.COLORS.ORANGE,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.ORANGE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '1234567',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 2,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n            fill: Carbon.helpers.COLORS.PURPLE,\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '65',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 3,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.GREEN,\n        shape: {\n          path: {\n            d: 'M24,0l24,24L24,48L0,24L24,0z',\n          },\n          options: {\n            x: -6,\n            y: -6,\n            scale: 0.25,\n          },\n        },\n        label: {\n          display: '42',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 4,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '23',\n          secondaryDisplay: '',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 5,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n    {\n      axis: 'x',\n      x: 6,\n      value: {\n        onClick: loadTextLabelPopup,\n        color: Carbon.helpers.COLORS.BLACK,\n        shape: {},\n        label: {\n          display: '25',\n          secondaryDisplay: 'ICU',\n        },\n      },\n    },\n  ],\n};\n\nexport default data;\n\n")))}w.isMDXComponent=!0;var A=n(1436),I=["components"];n(1280);var _={},G="wrapper";function N(e){var a=e.components,n=r()(e,I);return Object(i.mdx)(G,l()({},_,n,{components:a,mdxType:"MDXLayout"}),Object(i.mdx)("h1",{id:"axis-info-labels"},"Axis Info Labels"),Object(i.mdx)("p",null,"Axis info labels consists of bar graphs with simple bar axis info labels and stacked bar axis info labels."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm i @cerner/carbon-graphs --save-dev"))))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Carbon from '@cerner/carbon-graphs/dist/js/carbon-graphs.js';\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(h,{mdxType:"SimpleAxisInfoLabelBarGraph"}),Object(i.mdx)("details",null,Object(i.mdx)("summary",{style:{fontSize:24}},Object(i.mdx)("b",null,"Data used for simple bar axis info labels")),Object(i.mdx)("h3",{id:"graph-config-object"},"Graph Config object"),Object(i.mdx)(C.a,{mdxType:"SimpleAxisInfoLabelGraphConfig"}),Object(i.mdx)("h3",{id:"data-object"},"Data object"),Object(i.mdx)(g,{mdxType:"SimpleAxisInfoLabelDataObject"})),Object(i.mdx)("br",null),Object(i.mdx)("br",null),Object(i.mdx)("br",null),Object(i.mdx)(T,{mdxType:"StackedAxisInfoLabelBarGraph"}),Object(i.mdx)("details",null,Object(i.mdx)("summary",{style:{fontSize:24}},Object(i.mdx)("b",null,"Data used for stacked bar axis info labels")),Object(i.mdx)("h3",{id:"graph-config-object-1"},"Graph Config object"),Object(i.mdx)(C.a,{mdxType:"StackedAxisInfoLabelGraphConfig"}),Object(i.mdx)("h3",{id:"data-object-1"},"Data object"),Object(i.mdx)("h4",{id:"dataset-1"},"Dataset 1"),Object(i.mdx)(w,{mdxType:"StackedAxisInfoLabelDataObject1"}),Object(i.mdx)("h4",{id:"dataset-2"},"Dataset 2"),Object(i.mdx)(A.a,{mdxType:"StackedAxisInfoLabelDataObject2"}),Object(i.mdx)("h4",{id:"dataset-3"},"Dataset 3"),Object(i.mdx)(A.a,{mdxType:"StackedAxisInfoLabelDataObject3"})))}N.isMDXComponent=!0}}]);